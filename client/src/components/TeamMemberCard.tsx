import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamMemberCard({ name, role, bio, image }: TeamMemberCardProps) {
  return (
    <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border border-gray-200">
      <CardHeader className="text-center pb-4">
        <div className="relative mb-6">
          <img
            src={image}
            alt={`${name} - ${role} at Physio in Motion Vancouver clinic, friendly and approachable healthcare professional`}
            className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
          />
        </div>
        <h3 className="text-xl font-semibold text-neutral-dark mb-2">
          {name}
        </h3>
        <p className="text-blue-600 font-medium text-lg">
          {role}
        </p>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-neutral-mid leading-relaxed">
          {bio}
        </p>
      </CardContent>
    </Card>
  );
}