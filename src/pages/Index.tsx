import NavBar from "@/components/NavBar";
import TextureCard from "@/components/TextureCard";
import TextureUploader from "@/components/TextureUploader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Package, Paintbrush, Download } from "lucide-react";

const Index = () => {
  // Примеры популярных текстур
  const popularTextures = [
    { id: 1, title: "Реалистичный камень", category: "Блоки", imageUrl: "https://images.unsplash.com/photo-1588462271840-c0bd06469c76?q=80&w=500&auto=format&fit=crop" },
    { id: 2, title: "Фэнтези дерево", category: "Блоки", imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500&auto=format&fit=crop" },
    { id: 3, title: "HD вода", category: "Природа", imageUrl: "https://images.unsplash.com/photo-1508896694512-1eade558679c?q=80&w=500&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero секция */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Создавайте уникальные текстур-паки для Майнкрафта
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Простой и удобный редактор текстур, который поможет вам создать персонализированный мир в Minecraft
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/editor">
                  <Paintbrush className="mr-2 h-5 w-5" />
                  Начать создание
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/packs">
                  <Package className="mr-2 h-5 w-5" />
                  Готовые паки
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>
      
      {/* Основная секция */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Колонка с загрузкой */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Создать текстуру</h2>
            <TextureUploader />
          </div>
          
          {/* Колонка с функциями */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Что вы можете делать</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Paintbrush className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Редактирование текстур</h3>
                    <p className="text-muted-foreground">Загрузите и отредактируйте любые текстуры для блоков, предметов и мобов</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full">
                    <Package className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Сборка текстур-паков</h3>
                    <p className="text-muted-foreground">Объедините ваши текстуры в готовый пак и экспортируйте для использования в игре</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Download className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Скачивание</h3>
                    <p className="text-muted-foreground">Скачивайте свои текстур-паки в формате, совместимом с Minecraft</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Популярные текстуры */}
      <section className="py-10 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Популярные текстуры</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {popularTextures.map((texture) => (
              <TextureCard
                key={texture.id}
                title={texture.title}
                category={texture.category}
                imageUrl={texture.imageUrl}
                onEdit={() => {}}
                onDownload={() => {}}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Футер */}
      <footer className="mt-auto py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 МайнТекстуры. Все права защищены.</p>
          <p className="text-sm mt-2">Этот сайт не связан с Mojang AB</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;