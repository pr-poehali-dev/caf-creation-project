import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, X } from "lucide-react";

const TextureUploader = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreview(null);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Загрузить текстуру</CardTitle>
        <CardDescription>
          Загрузите PNG изображение для создания текстуры
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-full h-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 relative bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer"
            onClick={() => document.getElementById("texture-upload")?.click()}
          >
            {preview ? (
              <>
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="max-h-full max-w-full object-contain"
                />
                <button 
                  onClick={(e) => { e.stopPropagation(); clearSelection(); }}
                  className="absolute top-2 right-2 rounded-full bg-background p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </>
            ) : (
              <>
                <Upload className="h-12 w-12 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground text-center">
                  Нажмите для выбора или перетащите файл сюда
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  PNG, JPG до 5 МБ
                </p>
              </>
            )}
            <Input
              id="texture-upload"
              type="file"
              accept="image/png,image/jpeg"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          {selectedFile ? "Применить текстуру" : "Выбрать файл"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TextureUploader;