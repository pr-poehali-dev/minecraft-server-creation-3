import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Modpack = () => {
  const downloadLinks = [
    {
      platform: "Яндекс.Диск",
      icon: "Cloud",
      url: "https://disk.yandex.ru/d/ftFXSR3VkZpUhQ",
      color: "red-500",
      description: "Скачать сборку с Яндекс.Диска"
    },
    {
      platform: "Mail.ru Cloud",
      icon: "CloudDownload",
      url: "https://cloud.mail.ru/public/mZke/is2t6ZyJ9",
      color: "blue-500",
      description: "Скачать сборку с Mail.ru Cloud"
    }
  ];

  const modList = [
    "Mowzie's Mobs", "Valkyrien Sails", "MineColonies", "MrCrayfish's Furniture",
    "Ice and Fire", "Monster Hunter: Heaven and Hell", "Simple Voice Chat",
    "Zoo and Wild Animals: Evolved (ZAWA)", "Crazy Chocobos!", "Damage Numbers",
    "JourneyMap", "World Border", "Ping Wheel"
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

      {/* Modpack Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-minecraft text-white text-center mb-12">
            СБОРКА МОДОВ
          </h1>
          
          <div className="max-w-4xl mx-auto">
            {/* Download Section */}
            <Card className="bg-minecraft-obsidian-black/90 border-4 border-minecraft-green mb-12">
              <CardHeader className="text-center">
                <CardTitle className="font-minecraft text-minecraft-green text-3xl flex items-center justify-center">
                  <Icon name="Download" className="mr-3" size={36} />
                  СКАЧАТЬ СБОРКУ
                </CardTitle>
                <p className="text-gray-300 font-minecraft text-sm mt-4">
                  Выберите удобную для вас платформу для скачивания
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {downloadLinks.map((link, index) => (
                    <Card key={index} className="bg-minecraft-stone/20 border-2 border-minecraft-stone hover:border-minecraft-green transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <Icon name={link.icon as any} className={`mx-auto mb-4 text-${link.color}`} size={48} />
                        <h3 className="font-minecraft text-white text-lg mb-2">{link.platform}</h3>
                        <p className="text-gray-400 text-sm mb-4">{link.description}</p>
                        <Button 
                          className={`w-full bg-${link.color} hover:bg-${link.color}/80 text-white font-minecraft`}
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <Icon name="ExternalLink" className="mr-2" size={16} />
                          СКАЧАТЬ
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Installation Instructions */}
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-brown mb-8">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-brown text-2xl flex items-center">
                  <Icon name="Settings" className="mr-3" size={28} />
                  ИНСТРУКЦИЯ ПО УСТАНОВКЕ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "1. Скачайте сборку по одной из ссылок выше",
                    "2. Установите Minecraft Forge 1.20.1",
                    "3. Распакуйте архив в папку .minecraft/mods/",
                    "4. Запустите Minecraft с профилем Forge",
                    "5. Подключайтесь к серверу!"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-minecraft-green text-white rounded-full w-6 h-6 flex items-center justify-center font-minecraft text-xs mt-1">
                        {index + 1}
                      </div>
                      <div className="text-gray-300 font-minecraft text-sm">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Mod List */}
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-diamond">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-diamond text-2xl flex items-center">
                  <Icon name="Package" className="mr-3" size={28} />
                  СПИСОК МОДОВ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {modList.map((mod, index) => (
                    <Badge key={index} className="bg-minecraft-stone/40 text-gray-300 font-minecraft text-xs p-2 justify-start">
                      <Icon name="CheckCircle" className="mr-2 text-minecraft-green" size={14} />
                      {mod}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Requirements */}
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-brown mt-8">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-brown text-2xl flex items-center">
                  <Icon name="Monitor" className="mr-3" size={28} />
                  СИСТЕМНЫЕ ТРЕБОВАНИЯ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-minecraft text-minecraft-green text-sm mb-3">МИНИМАЛЬНЫЕ:</h4>
                    <div className="space-y-2 text-gray-300 font-minecraft text-xs">
                      <p>• RAM: 4 GB</p>
                      <p>• Minecraft: 1.20.1</p>
                      <p>• Java: 8+</p>
                      <p>• Forge: 47.2.0+</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-minecraft text-minecraft-green text-sm mb-3">РЕКОМЕНДУЕМЫЕ:</h4>
                    <div className="space-y-2 text-gray-300 font-minecraft text-xs">
                      <p>• RAM: 8 GB</p>
                      <p>• CPU: 4+ ядра</p>
                      <p>• GPU: GTX 1060 / RX 580</p>
                      <p>• SSD: рекомендуется</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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

export default Modpack;