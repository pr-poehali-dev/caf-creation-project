import { useState } from "react";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Paintbrush, Eraser, Move, Layers, Save, Download, RefreshCw, Undo, Redo } from "lucide-react";

const Editor = () => {
  const [activeTexture, setActiveTexture] = useState<string>("https://images.unsplash.com/photo-1588462271840-c0bd06469c76?q=80&w=500&auto=format&fit=crop");
  const [brushSize, setBrushSize] = useState(5);
  const [selectedTool, setSelectedTool] = useState("brush");
  const [zoom, setZoom] = useState(100);

  // Имитация списка слоев
  const layers = [
    { id: 1, name: "Фон", visible: true },
    { id: 2, name: "Основной слой", visible: true },
    { id: 3, name: "Детали", visible: true },
  ];

  // Имитация блоков майнкрафта для применения текстуры
  const minecraftBlocks = [
    { id: "stone", name: "Камень" },
    { id: "dirt", name: "Земля" },
    { id: "grass", name: "Трава" },
    { id: "wood", name: "Дерево" },
    { id: "leaves", name: "Листва" },
    { id: "sand", name: "Песок" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <NavBar />
      
      <div className="container mx-auto px-4 py-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Редактор текстур</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Undo className="h-4 w-4 mr-1" />
              Отменить
            </Button>
            <Button variant="outline" size="sm">
              <Redo className="h-4 w-4 mr-1" />
              Повторить
            </Button>
            <Button variant="outline" size="sm">
              <Save className="h-4 w-4 mr-1" />
              Сохранить
            </Button>
            <Button variant="default" size="sm">
              <Download className="h-4 w-4 mr-1" />
              Экспорт
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
          {/* Левая панель инструментов */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-4 space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Инструменты</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button 
                      variant={selectedTool === "brush" ? "default" : "outline"} 
                      className="flex flex-col items-center p-3 h-auto"
                      onClick={() => setSelectedTool("brush")}
                    >
                      <Paintbrush className="h-5 w-5 mb-1" />
                      <span className="text-xs">Кисть</span>
                    </Button>
                    <Button 
                      variant={selectedTool === "eraser" ? "default" : "outline"} 
                      className="flex flex-col items-center p-3 h-auto"
                      onClick={() => setSelectedTool("eraser")}
                    >
                      <Eraser className="h-5 w-5 mb-1" />
                      <span className="text-xs">Ластик</span>
                    </Button>
                    <Button 
                      variant={selectedTool === "move" ? "default" : "outline"} 
                      className="flex flex-col items-center p-3 h-auto"
                      onClick={() => setSelectedTool("move")}
                    >
                      <Move className="h-5 w-5 mb-1" />
                      <span className="text-xs">Перемещ.</span>
                    </Button>
                    <Button 
                      variant={selectedTool === "fill" ? "default" : "outline"} 
                      className="flex flex-col items-center p-3 h-auto"
                      onClick={() => setSelectedTool("fill")}
                    >
                      <svg className="h-5 w-5 mb-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 11H5C3.9 11 3 11.9 3 13V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 11.9 20.1 11 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 11V7C7 5.9 7.9 5 9 5H15C16.1 5 17 5.9 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-xs">Заливка</span>
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="brush-size">Размер кисти: {brushSize}px</Label>
                  </div>
                  <Slider 
                    id="brush-size" 
                    min={1} 
                    max={20} 
                    step={1} 
                    value={[brushSize]} 
                    onValueChange={(value) => setBrushSize(value[0])} 
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="zoom">Масштаб: {zoom}%</Label>
                    <Button variant="ghost" size="sm" onClick={() => setZoom(100)}>
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                  <Slider 
                    id="zoom" 
                    min={10} 
                    max={400} 
                    step={10} 
                    value={[zoom]} 
                    onValueChange={(value) => setZoom(value[0])} 
                  />
                </div>
                
                <div>
                  <Label htmlFor="block-select">Применить к блоку</Label>
                  <Select>
                    <SelectTrigger id="block-select" className="mt-1">
                      <SelectValue placeholder="Выберите блок" />
                    </SelectTrigger>
                    <SelectContent>
                      {minecraftBlocks.map(block => (
                        <SelectItem key={block.id} value={block.id}>{block.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Основная область редактирования */}
          <div className="lg:col-span-8 flex flex-col">
            <Card className="flex-1 flex items-center justify-center overflow-hidden">
              <div 
                className="relative cursor-crosshair border border-gray-300 bg-[url('/public/placeholder.svg')]"
                style={{ 
                  width: `${16 * zoom / 100}px`, 
                  height: `${16 * zoom / 100}px`,
                  backgroundSize: 'cover', 
                  imageRendering: 'pixelated'
                }}
              >
                {activeTexture && (
                  <img 
                    src={activeTexture} 
                    alt="Текстура" 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ imageRendering: 'pixelated' }}
                  />
                )}
              </div>
            </Card>
            
            <div className="mt-4">
              <Tabs defaultValue="preview">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="preview">Предпросмотр</TabsTrigger>
                  <TabsTrigger value="3d">3D модель</TabsTrigger>
                  <TabsTrigger value="in-game">В игре</TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="border rounded-md p-4 mt-2 min-h-[200px] flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(16)].map((_, index) => (
                      <div key={index} className="w-16 h-16 border border-gray-300 flex items-center justify-center">
                        {activeTexture && (
                          <img 
                            src={activeTexture} 
                            alt={`Превью ${index}`} 
                            className="w-full h-full object-cover"
                            style={{ imageRendering: 'pixelated' }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="3d" className="border rounded-md p-4 mt-2 min-h-[200px] flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <p>3D предпросмотр скоро будет доступен</p>
                    <p className="text-sm">Вы сможете увидеть текстуру на 3D моделях блоков</p>
                  </div>
                </TabsContent>
                <TabsContent value="in-game" className="border rounded-md p-4 mt-2 min-h-[200px] flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <p>Предпросмотр в игре скоро будет доступен</p>
                    <p className="text-sm">Вы сможете увидеть текстуру в окружении других блоков</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Правая панель - слои и текстуры */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-4">
                <Tabs defaultValue="layers">
                  <TabsList className="w-full grid grid-cols-2">
                    <TabsTrigger value="layers">Слои</TabsTrigger>
                    <TabsTrigger value="textures">Текстуры</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="layers" className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Слои</h3>
                      <Button variant="outline" size="sm">
                        <Layers className="h-4 w-4 mr-1" />
                        Новый
                      </Button>
                    </div>
                    
                    <div className="space-y-2 max-h-[400px] overflow-y-auto">
                      {layers.map((layer) => (
                        <div 
                          key={layer.id} 
                          className="flex items-center justify-between p-2 border rounded-md hover:bg-muted cursor-pointer"
                        >
                          <div className="flex items-center">
                            <div className="w-4 h-4 mr-2">
                              {layer.visible ? (
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              ) : (
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22M9.9 9.9a3 3 0 0 0 4.2 4.2M7.88 7.88c-3.2 2.11-5.29 5.36-5.8 6.12a8 8 0 0 0 1.74 2.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </div>
                            <span>{layer.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="textures" className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Библиотека текстур</h3>
                      <Input 
                        type="search" 
                        placeholder="Поиск..." 
                        className="w-full"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto">
                      {[...Array(8)].map((_, index) => (
                        <div 
                          key={index} 
                          className="cursor-pointer border rounded-md overflow-hidden hover:ring-2 hover:ring-primary transition-all"
                          onClick={() => setActiveTexture(`https://images.unsplash.com/photo-${1580000000000 + index * 10000}?q=80&w=100&auto=format&fit=crop`)}
                        >
                          <div className="w-full aspect-square bg-muted">
                            <img 
                              src={`https://images.unsplash.com/photo-${1580000000000 + index * 10000}?q=80&w=100&auto=format&fit=crop`} 
                              alt={`Текстура ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
