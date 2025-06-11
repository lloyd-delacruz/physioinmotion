import { Card, CardContent } from "@/components/ui/card";

export default function OurTeam() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-light">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 text-center">
          <h1 className="text-2xl font-bold text-neutral-dark mb-4">Our Team</h1>
          <p className="text-neutral-mid">
            This page is under construction. Content will be added in future phases of development.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
