import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'Cormorant, serif' }}>
            TSAR
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-sm hover:text-accent transition-colors">О бренде</a>
            <a href="#collections" className="text-sm hover:text-accent transition-colors">Коллекции</a>
            <a href="#philosophy" className="text-sm hover:text-accent transition-colors">Философия</a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Cormorant, serif' }}>
                Говорящая одежда с душой
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы создаем уникальные изделия, которые рассказывают вашу историю через авторские вышивки. 
                Каждая деталь — это эмоция, каждый стежок — это память.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Создать изделие
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-secondary">
                  Смотреть коллекции
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img 
                src="https://cdn.poehali.dev/projects/6bce3d15-2708-46f9-b157-6841fccc101f/files/58f4d160-01f7-4251-82be-04065b6fcbae.jpg" 
                alt="TSAR премиум одежда" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              We are in The SAme Reality
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              TSAR — это проект с русской душой в каждой детали
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow bg-card">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Sparkles" className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Индивидуальность
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Вышейте отпечатки рук ваших детей, первый рисунок, любимую цитату — всё, что дорого вашему сердцу.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-card">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Users" className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Командная одежда
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Объединяем семьи, компании и сообщества через общие ценности и философию, воплощенные в одежде.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow bg-card">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <Icon name="Heart" className="text-accent" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                Семейные реликвии
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Создаем вещи, которые ваши потомки будут носить с гордостью даже в эпоху летающих машин.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="collections" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'Cormorant, serif' }}>
            Коллекции
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Каждое изделие — это история, рассказанная стежками
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/projects/6bce3d15-2708-46f9-b157-6841fccc101f/files/69045197-a078-4156-b828-58e36c3f8ab7.jpg" 
                alt="Командная одежда TSAR" 
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-8">
                <div className="text-primary-foreground">
                  <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                    Корпоративные коллекции
                  </h3>
                  <p className="text-sm opacity-90">
                    Уникальная одежда для команд и компаний
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://cdn.poehali.dev/projects/6bce3d15-2708-46f9-b157-6841fccc101f/files/ea667eb5-9e4d-4b0b-bc45-bd229838bcff.jpg" 
                alt="Авторские вышивки TSAR" 
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-8">
                <div className="text-primary-foreground">
                  <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Cormorant, serif' }}>
                    Персональные изделия
                  </h3>
                  <p className="text-sm opacity-90">
                    Вышивки, хранящие ваши самые важные моменты
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Cormorant, serif' }}>
              Философия бренда
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Вышей свою самую заветную мечту на рукаве, и пусть она течет по вене, попадая в самое сердце… 
              Она обязательно сбудется! Проверено всей командой TSAR! 
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Icon name="Crown" className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Культурный код</h3>
                  <p className="text-muted-foreground">
                    Сохраняем и переосмысливаем традиции русских орнаментов и вышивок
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Icon name="Gem" className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Премиум качество</h3>
                  <p className="text-muted-foreground">
                    Каждая вышивка создается от 6 до 8 часов вручную нашими мастерами
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Icon name="Target" className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Индивидуальный подход</h3>
                  <p className="text-muted-foreground">
                    Над каждым изделием работает один мастер, вкладывая душу в создание
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Icon name="Sparkle" className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Семейные ценности</h3>
                  <p className="text-muted-foreground">
                    Наша команда — это семья, где сила любви наполняет каждое изделие
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
              Создайте свою историю
            </h2>
            <p className="text-lg text-muted-foreground">
              Расскажите нам о вашей идее, и мы воплотим её в уникальное изделие
            </p>
          </div>

          <Card className="p-8 bg-card">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input placeholder="Как к вам обращаться?" className="border-border" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email или Телефон</label>
                <Input placeholder="Как с вами связаться?" className="border-border" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Расскажите о вашей идее</label>
                <Textarea 
                  placeholder="Опишите, что вы хотите вышить: историю, образы, эмоции..."
                  className="min-h-[150px] border-border"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Cormorant, serif' }}>TSAR</h3>
              <p className="text-sm opacity-90">
                Бренд авторской одежды с русской душой
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm opacity-90">
                <p>Instagram: @alexandrovna.o.p</p>
                <p>Telegram: t.me/tsarskii_klan</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Основатель</h4>
              <p className="text-sm opacity-90">
                Олеся Понамаренко<br/>
                Дизайнер, художник<br/>
                Мама пятерых детей
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
            © 2024 TSAR. We are in The SAme Reality
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
