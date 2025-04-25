import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader className="text-center">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
    </Card>
  );
}
