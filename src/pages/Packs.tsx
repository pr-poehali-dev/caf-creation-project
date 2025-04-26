import { useState } from "react";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Package, Download, Share, Edit, Trash2, Plus, Filter } from "lucide-react";
import { Link } from "react-router-dom";

interface TexturePack {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  version: string;
  minecraftVersion: string;
  resolution: string;
  created: string;
  updated: string;
  textureCount: number;
  downloadCount: number;
  isPublic: boolean;
}

const Packs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Имитация списка паков текстур
  const texturePacks: TexturePack[] = [
    {
      id: "pack1",
      name: "Реалистичный мир",
      description: "Набор текстур высокого разрешения для более реалистичного игрового процесса",
      imageUrl: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop",
      version: "1.2.0",
      minecraftVersion: "1.19.x",
      resolution: "64x64",
      created: "15.03.2025",
      updated: "21.04.2025",
      textureCount: 248,
      downloadCount: 1243,
      isPublic: true
    },
    {
      id: "pack2",
      name: "Фэнтези стиль",
      description: "Магические текстуры в фантастическом стиле для RPG серверов",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
      version: "0.9.5",
      minecraftVersion: "1.18.x - 1.19.x",
      resolution: "32x32",
      created: "02.02.2025",
      updated: "15.04.2025",
      textureCount: 156,
      downloadCount: 865,
      isPublic: true
    },
    {
      id: "pack3",
      name: "Пиксельный ретро",
      description: "Возвращение к корням Minecraft с минималистичными текстурами",
      imageUrl: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop",
      version: "2.0.1",
      minecraftVersion: "1.16.x - 1.19.x",
      resolution: "16x16",
      created: "10.01.2025",
      updated: "05.04.2025",
      textureCount: 312,
      downloadCount: 2158,
      isPublic: false
    }
  ];

  // Фильтрация паков по поисковому запросу
  const filteredPacks = texturePacks.filter(pack => 
    pack.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    pack.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <div className="container mx-auto px-4 py-6 flex-1">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Мои текстур-паки</h1>
            <p className="text-muted-foreground">Управляйте своими созданными текстур-паками</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-1">
                  <Plus className="h-4 w-4" />
                  Создать пак
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Создать новый текстур-пак</DialogTitle>
                  <DialogDescription>
                    Заполните информацию для создания нового пака текстур.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Название пака</Label>
                    <Input id="name" placeholder="Например: Мой первый текстур-пак" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Описание</Label>
                    <Textarea id="description" placeholder="Опишите свой текстур-пак..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="minecraft-version">Версия Minecraft</Label>
                      <Input id="minecraft-version" placeholder="1.19.x" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="resolution">Разрешение</Label>
                      <Input id="resolution" placeholder="16x16" />
                    </div>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button variant="outline">Отмена</Button>
                  <Button>Создать</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" className="gap-1">
              <Filter className="h-4 w-4" />
              Фильтры
            </Button>
            
            <Input
              placeholder="Поиск паков..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="min-w-[200px]"
            />
          </div>
        </div>
        
        <Tabs defaultValue="my-packs">
          <TabsList className="mb-6">
            <TabsTrigger value="my-packs">Мои паки</TabsTrigger>
            <TabsTrigger value="shared">Публичные</TabsTrigger>
            <TabsTrigger value="favorites">Избранное</TabsTrigger>
          </TabsList>
          
          <TabsContent value="my-packs" className="space-y-6">
            {filteredPacks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPacks.map(pack => (
                  <Card key={pack.id} className="overflow-hidden flex flex-col">
                    <div className="aspect-video w-full relative">
                      <img 
                        src={pack.imageUrl} 
                        alt={pack.name}
                        className="object-cover w-full h-full" 
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant={pack.isPublic ? "default" : "outline"} className="text-xs">
                          {pack.isPublic ? "Публичный" : "Приватный"}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{pack.name}</CardTitle>
                          <CardDescription>
                            Версия {pack.version} • {pack.resolution}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pb-2 flex-grow">
                      <p className="text-sm text-muted-foreground line-clamp-2">{pack.description}</p>
                      
                      <div className="mt-4 grid grid-cols-2 gap-y-2 text-xs text-muted-foreground">
                        <div>Для MC: {pack.minecraftVersion}</div>
                        <div>Текстур: {pack.textureCount}</div>
                        <div>Создан: {pack.created}</div>
                        <div>Обновлен: {pack.updated}</div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-2 flex flex-wrap justify-between gap-2">
                      <div className="flex gap-1">
                        <Button size="sm" asChild>
                          <Link to={`/editor?pack=${pack.id}`}>
                            <Edit className="h-4 w-4 mr-1" />
                            Редактировать
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Скачать
                        </Button>
                      </div>
                      
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost">
                          <Share className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">Нет текстур-паков</h3>
                <p className="text-muted-foreground mb-6">
                  У вас пока нет созданных текстур-паков. Создайте свой первый пак!
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Создать новый пак
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    {/* Содержимое диалога здесь */}
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="shared">
            <div className="text-center py-12">
              <Share className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">Публичные паки</h3>
              <p className="text-muted-foreground mb-6">
                Здесь будут отображаться паки текстур, опубликованные сообществом
              </p>
              <Button variant="outline">
                Искать в галерее сообщества
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="favorites">
            <div className="text-center py-12">
              <svg className="h-12 w-12 mx-auto text-muted-foreground mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 12.5719L12.3675 19.5L5.23505 12.5719C4.78733 12.1404 4.46715 11.6056 4.30816 11.0179C4.14917 10.4303 4.15615 9.81135 4.32827 9.22729C4.50039 8.64322 4.82946 8.11651 5.28182 7.69294C5.73417 7.26937 6.29439 6.96585 6.90678 6.81001C7.51917 6.65417 8.16047 6.65177 8.77443 6.80306C9.38839 6.95436 9.95167 7.25375 10.4085 7.67407C10.8654 8.09438 11.2003 8.61889 11.379 9.20213C11.5577 9.78538 11.5716 10.4049 11.4193 10.9954H13.3158C13.1636 10.4049 13.1775 9.78538 13.3562 9.20213C13.5349 8.61889 13.8698 8.09438 14.3267 7.67407C14.7835 7.25375 15.3468 6.95436 15.9608 6.80306C16.5747 6.65177 17.216 6.65417 17.8284 6.81001C18.4408 6.96585 19.001 7.26937 19.4534 7.69294C19.9057 8.11651 20.2348 8.64322 20.4069 9.22729C20.5791 9.81135 20.586 10.4303 20.427 11.0179C20.268 11.6056 19.9479 12.1404 19.5001 12.5719H19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-xl font-medium mb-2">Нет избранных паков</h3>
              <p className="text-muted-foreground mb-6">
                Добавляйте паки текстур в избранное для быстрого доступа
              </p>
              <Button variant="outline">
                Перейти в галерею сообщества
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Packs;
