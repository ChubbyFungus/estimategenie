import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ErrorBoundary } from 'react-error-boundary';
import * as THREE from 'three';

function Model() {
  const [modelLoaded, setModelLoaded] = useState(false);
  
  useEffect(() => {
    // Clean up any previous model instances
    return () => useGLTF.clear();
  }, []);

  const { scene } = useGLTF('/genie.glb', true, true, (loader) => {
    loader.manager.onLoad = () => setModelLoaded(true);
    loader.manager.onError = (url) => {
      console.error('Error loading model:', url);
      throw new Error('Failed to load 3D model');
    };
  });

  // Center and scale the model
  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      
      // Center the model
      scene.position.x = -center.x;
      scene.position.y = -center.y;
      scene.position.z = -center.z;
      
      // Scale the model to fit the view
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;
      scene.scale.setScalar(scale);
    }
  }, [scene]);

  if (!modelLoaded) return null;

  return <primitive object={scene} />;
}

function LoadingFallback() {
  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="text-6xl mb-4">🧞‍♂️</div>
        <p className="text-xl text-white mb-2">Your Genie is getting ready...</p>
        <p className="text-sm text-white/60">Loading 3D model...</p>
      </motion.div>
    </div>
  );
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="text-6xl mb-4">⚠️</div>
        <p className="text-xl text-white mb-2">Oops! Something went wrong</p>
        <p className="text-sm text-white/60 mb-4">
          {error.message || 'Failed to load the 3D model'}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-[#D4AF37] text-[#00305A] rounded-md hover:bg-[#B8860B] transition-colors"
        >
          Try again
        </button>
      </motion.div>
    </div>
  );
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={1} 
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls 
        enablePan={false}
        minDistance={2}
        maxDistance={10}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}

export function GenieModel() {
  const [key, setKey] = useState(0);

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-white/5">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setKey(k => k + 1)}
        resetKeys={[key]}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}