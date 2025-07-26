import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-diamond to-minecraft-stone">
      {/* Header */}
      <header className="border-b-4 border-minecraft-brown bg-minecraft-obsidian-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-minecraft-green font-minecraft text-xl animate-pulse">
              HEXAHEDRON HAVEN
            </div>
            <div className="flex space-x-6">
              {['Главная', 'Команды', 'Форум', 'Правила'].map((item) => (
                <button key={item} className="text-white hover:text-minecraft-green transition-colors duration-300 font-minecraft text-sm border-2 border-transparent hover:border-minecraft-green px-3 py-1">
                  {item}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234CAF50' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm10 10h20v20H10V10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="font-minecraft text-4xl md:text-6xl text-white mb-8 drop-shadow-lg tracking-wider">
            HEXAHEDRON<br />
            <span className="text-minecraft-green">HAVEN</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Добро пожаловать на лучший Minecraft сервер! Исследуй, строй, сражайся и заводи новых друзей в нашем уникальном мире.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-minecraft-green hover:bg-minecraft-green-dark text-white font-minecraft px-8 py-3 text-lg border-2 border-minecraft-green-dark hover:scale-105 transition-all duration-200">
              <Icon name="Play" className="mr-2" />
              ВОЙТИ В ИГРУ
            </Button>
            <Button variant="outline" className="border-2 border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-white font-minecraft px-8 py-3 text-lg hover:scale-105 transition-all duration-200">
              <Icon name="Users" className="mr-2" />
              НАШЕ СООБЩЕСТВО
            </Button>
          </div>
        </div>
      </section>



      {/* Interactive World Map */}
      <section className="py-16 bg-gradient-to-r from-minecraft-stone to-minecraft-dirt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-minecraft text-white text-center mb-12">
            КАРТА МИРА СЕРВЕРА
          </h2>
          <Card className="bg-minecraft-obsidian-black/90 border-4 border-minecraft-green overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src="/img/1c05ccd8-b1d2-4cf4-ba84-d2ab38476e87.jpg" 
                  alt="Minecraft World Map" 
                  className="w-full h-96 object-cover filter brightness-110 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-minecraft-obsidian-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      { name: "Спавн", color: "minecraft-green", x: "30%", y: "40%" },
                      { name: "PvP Арена", color: "red-500", x: "70%", y: "20%" },
                      { name: "Торговый город", color: "minecraft-brown", x: "20%", y: "70%" },
                      { name: "Шахты", color: "minecraft-stone", x: "80%", y: "80%" }
                    ].map((location, index) => (
                      <div key={index} 
                           className={`absolute w-3 h-3 bg-${location.color} rounded-full animate-pulse border-2 border-white`}
                           style={{ left: location.x, top: location.y }}>
                        <div className={`absolute -top-8 -left-4 bg-${location.color} text-white px-2 py-1 rounded text-xs font-minecraft whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity`}>
                          {location.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-minecraft-green hover:bg-minecraft-green-dark font-minecraft">
                    <Icon name="Map" className="mr-2" />
                    ОТКРЫТЬ ПОЛНУЮ КАРТУ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Server Features */}
      <section className="py-16 bg-minecraft-stone/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-minecraft text-white text-center mb-12">
            ОСОБЕННОСТИ СЕРВЕРА
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Sword",
                title: "PvP АРЕНЫ",
                description: "Сражайся с другими игроками в специально оборудованных аренах",
                features: ["Рейтинговая система", "Турниры", "Награды"]
              },
              {
                icon: "Home",
                title: "ПРИВАТНЫЕ РЕГИОНЫ",
                description: "Защити свои постройки от грифинга и воровства",
                features: ["Система привата", "Друзья и враги", "Расширение территории"]
              },
              {
                icon: "Coins",
                title: "ЭКОНОМИКА",
                description: "Торгуй, зарабатывай и развивай свой бизнес",
                features: ["Магазины игроков", "Аукцион", "Банковская система"]
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-minecraft-obsidian-black/80 border-2 border-minecraft-stone hover:border-minecraft-green transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <Icon name={feature.icon as any} className="mx-auto mb-4 text-minecraft-green" size={48} />
                  <CardTitle className="font-minecraft text-minecraft-green text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <Icon name="Check" className="mr-2 text-minecraft-green" size={16} />
                        <span className="font-minecraft text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-minecraft-green/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-minecraft text-white mb-8">
            КАК ПРИСОЕДИНИТЬСЯ?
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-green">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Badge className="bg-minecraft-green text-white font-minecraft text-lg px-4 py-2">
                    IP: hexahedron-haven.ru
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  {[
                    { step: "1", text: "Запусти Minecraft 1.20.1", icon: "Play" },
                    { step: "2", text: "Добавь сервер с IP выше", icon: "Plus" },
                    { step: "3", text: "Подключайся и играй!", icon: "Gamepad2" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-minecraft-green text-white rounded-full w-8 h-8 flex items-center justify-center font-minecraft text-sm">
                        {item.step}
                      </div>
                      <div className="text-gray-300 font-minecraft text-sm">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-obsidian-black border-t-4 border-minecraft-brown py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-minecraft-green font-minecraft text-lg mb-4">
            HEXAHEDRON HAVEN
          </div>
          <div className="text-gray-400 font-minecraft text-sm mb-4">
            © 2024 Hexahedron Haven. Все права защищены.
          </div>
          <div className="flex justify-center space-x-6">
            {[
              { icon: "MessageCircle", label: "Discord" },
              { icon: "Users", label: "ВКонтакте" },
              { icon: "Youtube", label: "YouTube" }
            ].map((social, index) => (
              <button key={index} className="text-gray-400 hover:text-minecraft-green transition-colors duration-300">
                <Icon name={social.icon as any} size={24} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;