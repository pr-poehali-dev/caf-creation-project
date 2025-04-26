import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Paintbrush, Package, Home, Settings } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full bg-primary py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Paintbrush className="h-6 w-6 text-white" />
          <span className="text-xl font-bold text-white">МайнТекстуры</span>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <Link to="/" className="flex items-center text-white hover:text-accent transition-colors">
                <Home className="mr-1 h-4 w-4" />
                <span>Главная</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/editor" className="flex items-center text-white hover:text-accent transition-colors">
                <Paintbrush className="mr-1 h-4 w-4" />
                <span>Редактор</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/packs" className="flex items-center text-white hover:text-accent transition-colors">
                <Package className="mr-1 h-4 w-4" />
                <span>Мои паки</span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center space-x-4">
          <button className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/80 transition-colors">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;