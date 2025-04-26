import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Edit } from "lucide-react";

interface TextureCardProps {
  title: string;
  imageUrl: string;
  category: string;
  onEdit?: () => void;
  onDownload?: () => void;
}

const TextureCard = ({ title, imageUrl, category, onEdit, onDownload }: TextureCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square relative overflow-hidden bg-muted">
        <img
          src={imageUrl || "https://images.unsplash.com/photo-1619197279535-b1b20afe3b55?q=80&w=500&auto=format&fit=crop"}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{category}</p>
      </CardHeader>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" onClick={onEdit}>
          <Edit className="h-4 w-4 mr-1" />
          Изменить
        </Button>
        <Button variant="secondary" size="sm" onClick={onDownload}>
          <Download className="h-4 w-4 mr-1" />
          Скачать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TextureCard;