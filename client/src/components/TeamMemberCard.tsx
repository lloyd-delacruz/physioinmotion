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
          <div className="w-40 h-40 rounded-full mx-auto bg-blue-100 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-3xl">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
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