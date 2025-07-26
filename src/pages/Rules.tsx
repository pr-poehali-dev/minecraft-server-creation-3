import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Rules = () => {
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

      {/* Rules Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-minecraft text-white text-center mb-12">
            ПРАВИЛА СЕРВЕРА
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Основные положения */}
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-green">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-green text-2xl flex items-center">
                  🔥 ОСНОВНЫЕ ПОЛОЖЕНИЯ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  • <strong>Все игроки равны.</strong> Здесь нет выделенной группы администраторов или привилегированных лиц. Каждый участник играет честно и открыто.
                </p>
                <p className="leading-relaxed">
                  • <strong>Цель —</strong> самостоятельное выживание, строительство, исследование мира и взаимодействие друг с другом. Нет организованных рейдов или массовых нападений.
                </p>
                <p className="leading-relaxed">
                  • <strong>Самостоятельность и ответственность.</strong> Игра построена таким образом, что каждый сам выбирает свою судьбу и несет ответственность за собственные поступки.
                </p>
              </CardContent>
            </Card>

            {/* Игра и поведение */}
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-brown">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-brown text-2xl flex items-center">
                  🛠️ ИГРА И ПОВЕДЕНИЕ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  • <strong>Использование читов и взломанных клиентов категорически запрещено.</strong> Это нарушает принцип честной игры и делает сервер несбалансированным.
                </p>
                <p className="leading-relaxed">
                  • <strong>Разрушение чужой собственности</strong> разрешено только в рамках самозащиты или законных прав владения территорией. Без провокаций и намеренных действий против других игроков.
                </p>
                <p className="leading-relaxed">
                  • <strong>Любая агрессия должна иметь веские причины:</strong> территориальные споры, личные конфликты или самооборону. Войны ради забавы недопустимы.
                </p>
                <p className="leading-relaxed">
                  • <strong>Никакого массового уничтожения</strong> объектов или животных. Сервер построен на взаимовыручке и гармонии с природой.
                </p>
              </CardContent>
            </Card>

            {/* Собственность и ресурсы */}
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-diamond">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-diamond text-2xl flex items-center">
                  🕳️ СОБСТВЕННОСТЬ И РЕСУРСЫ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  • <strong>Всё построенное вами принадлежит вам лично.</strong> Никто не имеет права уничтожать или изменять ваши постройки без прямого согласия.
                </p>
                <p className="leading-relaxed">
                  • <strong>Ресурсы добываются каждым игроком индивидуально.</strong> Грабежи и кражи исключаются, кроме случаев конфликта и открытого противостояния.
                </p>
                <p className="leading-relaxed">
                  • <strong>Торговля и обмен разрешены,</strong> однако принуждение или обман запрещены. Сделка считается законной лишь тогда, когда обе стороны согласны на её условия.
                </p>
              </CardContent>
            </Card>

            {/* Совместная игра */}
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-green">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-green text-2xl flex items-center">
                  🤝 СОВМЕСТНАЯ ИГРА
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  • <strong>Добровольное сотрудничество приветствуется,</strong> объединение усилий приносит пользу всему сообществу.
                </p>
                <p className="leading-relaxed">
                  • <strong>Споры решаются путём переговоров</strong> или мирных соглашений. Применение силы возможно только в крайнем случае.
                </p>
                <p className="leading-relaxed">
                  • <strong>Группа друзей или гильдия</strong> сама устанавливает внутренние порядки, однако они не должны противоречить общим правилам сервера.
                </p>
              </CardContent>
            </Card>

            {/* Этикет общения */}
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-brown">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-brown text-2xl flex items-center">
                  🗣️ ЭТИКЕТ ОБЩЕНИЯ
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  • <strong>Оскорбления, угрозы или клевета недопустимы.</strong> Поддерживайте уважительное отношение друг к другу.
                </p>
                <p className="leading-relaxed">
                  • <strong>Отсутствие взаимопомощи</strong> или отказа делиться знаниями негативно воспринимается обществом. Дружественная среда способствует развитию и успеху каждого участника.
                </p>
                <p className="leading-relaxed">
                  • <strong>Сообщайте о нарушениях публично</strong> или записывая доказательства. Общественное мнение помогает предотвращать злоупотребления.
                </p>
              </CardContent>
            </Card>

            {/* Политика сервера */}
            <Card className="bg-minecraft-obsidian-black/90 border-2 border-minecraft-diamond">
              <CardHeader>
                <CardTitle className="font-minecraft text-minecraft-diamond text-2xl flex items-center">
                  🌐 ПОЛИТИКА СЕРВЕРА
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  • <strong>Сервер функционирует автономно,</strong> участники сами решают судьбы мира, регулируя порядок путем консенсуса.
                </p>
                <p className="leading-relaxed">
                  • <strong>Решения принимаются большинством голосов</strong> либо общественным мнением. Ответственность лежит на каждом участнике.
                </p>
                <p className="leading-relaxed">
                  • <strong>Наказания возможны только через публичное осуждение</strong> или бойкотировку провинившегося игрока. Формальное наказание отсутствует.
                </p>
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

export default Rules;