import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Commands = () => {
  const commandCategories = [
    {
      title: "Mowzie's Mobs",
      color: "minecraft-green",
      icon: "Skull",
      commands: [
        { command: "/mowziesmobs", description: "основной командный блок" },
        { command: "/mowziesmobs give [имя_моба]", description: "получить моба" },
        { command: "/mowziesmobs spawn [имя_моба]", description: "спавн моба" }
      ]
    },
    {
      title: "Valkyrien Sails",
      color: "minecraft-diamond",
      icon: "Ship",
      commands: [
        { command: "/valkyriensails", description: "основные команды" },
        { command: "/vss create [название]", description: "создать корабль" },
        { command: "/vss delete", description: "удалить корабль" },
        { command: "/vss save", description: "сохранить корабль" }
      ]
    },
    {
      title: "MineColonies",
      color: "minecraft-brown",
      icon: "Home",
      commands: [
        { command: "/colony", description: "основной командный блок" },
        { command: "/colony create", description: "создать колонию" },
        { command: "/colony list", description: "список колоний" },
        { command: "/colony invite [игрок]", description: "пригласить игрока" }
      ]
    },
    {
      title: "MrCrayfish's Furniture",
      color: "minecraft-brown",
      icon: "Sofa",
      commands: [
        { command: "/furniture", description: "основные команды" },
        { command: "/furniture creative", description: "творческий режим" },
        { command: "/furniture reset", description: "сброс настроек" }
      ]
    },
    {
      title: "Ice and Fire",
      color: "red-500",
      icon: "Flame",
      commands: [
        { command: "/iceandfire", description: "основной командный блок" },
        { command: "/iceandfire dragon spawn [тип]", description: "спавн дракона" },
        { command: "/iceandfire wyvern spawn", description: "спавн виверны" }
      ]
    }
  ];

  const otherMods = [
    { mod: "Monster Hunter: Heaven and Hell", commands: ["/mhh - основные команды", "/mhh give [предмет]"] },
    { mod: "Simple Voice Chat", commands: ["/vchat - настройки голосового чата"] },
    { mod: "Zoo and Wild Animals: Evolved (ZAWA)", commands: ["/zawa spawn [животное]"] },
    { mod: "Crazy Chocobos!", commands: ["/chocobo - основные команды", "/chocobo spawn"] },
    { mod: "Damage Numbers", commands: ["/damage - настройки отображения урона"] },
    { mod: "JourneyMap", commands: ["/journey - настройки карты", "/journey reset - сброс настроек"] },
    { mod: "World Border", commands: ["/wb - управление границей мира", "/wb set [размер]"] },
    { mod: "Ping Wheel", commands: ["/ping - настройка радара"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-diamond to-minecraft-stone">
      {/* Header */}
      <header className="border-b-4 border-minecraft-brown bg-minecraft-obsidian-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-minecraft-green font-minecraft text-xl animate-pulse">
              HEXAHEDRON HAVEN
            </div>
            <Button 
              variant="ghost" 
              className="text-white hover:text-minecraft-green font-minecraft"
              onClick={() => window.history.back()}
            >
              <Icon name="ArrowLeft" className="mr-2" />
              НАЗАД
            </Button>
          </nav>
        </div>
      </header>

      {/* Commands Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-minecraft text-white text-center mb-12">
            КОМАНДЫ МОДОВ
          </h1>
          
          <div className="max-w-6xl mx-auto">
            {/* Main Mod Commands */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {commandCategories.map((category, index) => (
                <Card key={index} className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-stone hover:border-minecraft-green transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <Icon name={category.icon as any} className={`mx-auto mb-4 text-${category.color}`} size={48} />
                    <CardTitle className={`font-minecraft text-${category.color} text-lg`}>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.commands.map((cmd, idx) => (
                        <div key={idx} className="bg-minecraft-stone/20 p-3 rounded border border-minecraft-stone/40">
                          <div className="font-minecraft text-minecraft-green text-sm mb-1">
                            {cmd.command}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {cmd.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Other Mods Section */}
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-green">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-green text-2xl text-center flex items-center justify-center">
                  <Icon name="Terminal" className="mr-3" size={32} />
                  ОСТАЛЬНЫЕ МОДЫ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherMods.map((mod, index) => (
                    <div key={index} className="bg-minecraft-stone/20 p-4 rounded border border-minecraft-stone/40">
                      <h3 className="font-minecraft text-minecraft-brown text-sm mb-3 flex items-center">
                        <Icon name="Package" className="mr-2" size={16} />
                        {mod.mod}
                      </h3>
                      <div className="space-y-2">
                        {mod.commands.map((command, cmdIdx) => (
                          <div key={cmdIdx} className="bg-minecraft-obsidian-black/60 p-2 rounded font-minecraft text-xs text-minecraft-green">
                            {command}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Helper Info */}
            <div className="mt-8 text-center">
              <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-diamond">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Icon name="Info" className="text-minecraft-diamond mr-2" size={24} />
                    <span className="font-minecraft text-minecraft-diamond text-lg">ВАЖНАЯ ИНФОРМАЦИЯ</span>
                  </div>
                  <div className="text-gray-300 space-y-2">
                    <p className="font-minecraft text-sm">
                      • Замените [параметр] на нужное значение
                    </p>
                    <p className="font-minecraft text-sm">
                      • Некоторые команды требуют прав администратора
                    </p>
                    <p className="font-minecraft text-sm">
                      • Используйте Tab для автодополнения команд
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Back to server button */}
          <div className="text-center mt-12">
            <Button 
              className="bg-minecraft-green hover:bg-minecraft-green-dark text-white font-minecraft px-8 py-3 text-lg border-2 border-minecraft-green-dark hover:scale-105 transition-all duration-200"
              onClick={() => window.history.back()}
            >
              <Icon name="ArrowLeft" className="mr-2" />
              ВЕРНУТЬСЯ НА ГЛАВНУЮ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commands;