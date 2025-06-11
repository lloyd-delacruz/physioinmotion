import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug?: string;
}

export default function ServiceCard({ title, description, image, slug }: ServiceCardProps) {
  const handleLearnMore = () => {
    // Future expansion - link to individual service pages
    if (slug) {
      window.location.href = `/services/${slug}`;
    } else {
      console.log(`Navigate to ${title} details`);
    }
  };

  return (
    <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border border-gray-200">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={`${title} - Professional physiotherapy service`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-neutral-dark group-hover:text-blue-600 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-neutral-mid mb-6 leading-relaxed">
          {description}
        </p>
        <Button
          onClick={handleLearnMore}
          variant="ghost"
          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-medium group/btn"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
}