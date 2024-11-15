import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectDetailsProps = {
  projectType: 'kitchen' | 'bathroom' | null;
  squareFootage: number;
  finishLevel: string;
  layoutChange: boolean;
  specialFeatures: string[];
};

export function ProjectDetails({
  projectType,
  squareFootage,
  finishLevel,
  layoutChange,
  specialFeatures,
}: ProjectDetailsProps) {
  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="project-details-title text-shadow-strong">Project Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          <span className="project-details-label">Project Type:</span>
          <span className="project-details-value">{projectType || 'Not selected'}</span>
        </p>
        <p>
          <span className="project-details-label">Square Footage:</span>
          <span className="project-details-value">{squareFootage} sq ft</span>
        </p>
        <p>
          <span className="project-details-label">Finish Level:</span>
          <span className="project-details-value">{finishLevel || 'Not selected'}</span>
        </p>
        <p>
          <span className="project-details-label">Layout Change:</span>
          <span className="project-details-value">{layoutChange ? 'Yes' : 'No'}</span>
        </p>
        <p>
          <span className="project-details-label">Special Features:</span>
          <span className="project-details-value">
            {specialFeatures.length > 0 ? specialFeatures.join(', ') : 'None'}
          </span>
        </p>
      </CardContent>
    </Card>
  );
}