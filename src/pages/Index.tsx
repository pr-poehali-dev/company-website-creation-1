import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, name: 'Чернила HP Black', category: 'ink', price: 1200, image: 'https://cdn.poehali.dev/projects/c0965778-6ba8-45be-b0e5-a0b7e25b9c06/files/6ac4f329-a693-4098-9531-1a368ad02064.jpg' },
    { id: 2, name: 'Чернила Canon Color', category: 'ink', price: 1500, image: 'https://cdn.poehali.dev/projects/c0965778-6ba8-45be-b0e5-a0b7e25b9c06/files/6ac4f329-a693-4098-9531-1a368ad02064.jpg' },
    { id: 3, name: 'Картридж Epson', category: 'parts', price: 2800, image: 'https://cdn.poehali.dev/projects/c0965778-6ba8-45be-b0e5-a0b7e25b9c06/files/71b11dc1-f913-4901-a3a7-64a7d641345a.jpg' },
    { id: 4, name: 'Печатающая головка', category: 'parts', price: 4500, image: 'https://cdn.poehali.dev/projects/c0965778-6ba8-45be-b0e5-a0b7e25b9c06/files/71b11dc1-f913-4901-a3a7-64a7d641345a.jpg' },
    { id: 5, name: 'Принтер HP LaserJet', category: 'equipment', price: 25000, image: 'https://cdn.poehali.dev/projects/c0965778-6ba8-45be-b0e5-a0b7e25b9c06/files/71b11dc1-f913-4901-a3a7-64a7d641345a.jpg' },
    { id: 6, name: 'МФУ Canon', category: 'equipment', price: 18000, image: 'https://cdn.poehali.dev/projects/c0965778-6ba8-45be-b0e5-a0b7e25b9c06/files/71b11dc1-f913-4901-a3a7-64a7d641345a.jpg' },
  ];

  const news = [
    { id: 1, title: 'Новая линейка чернил 2024', date: '15 окт 2024', excerpt: 'Представляем обновленную серию чернил с улучшенными характеристиками' },
    { id: 2, title: 'Скидки на оборудование', date: '10 окт 2024', excerpt: 'Специальные предложения на принтеры и МФУ до конца месяца' },
    { id: 3, title: 'Расширение ассортимента', date: '5 окт 2024', excerpt: 'В каталоге появились новые модели запчастей для принтеров' },
  ];

  const reviews = [
    { id: 1, author: 'Иван Петров', rating: 5, text: 'Отличное качество чернил, быстрая доставка!' },
    { id: 2, author: 'Мария Сидорова', rating: 5, text: 'Профессиональный сервис, всегда помогут с выбором' },
    { id: 3, author: 'Алексей Иванов', rating: 4, text: 'Хорошие цены, широкий ассортимент запчастей' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Printer" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PrintPro
              </span>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#about" className="text-foreground/70 hover:text-primary transition-colors font-medium">О нас</a>
              <a href="#service" className="text-foreground/70 hover:text-primary transition-colors font-medium">Сервис</a>
              <a href="#catalog" className="text-foreground/70 hover:text-primary transition-colors font-medium">Каталог</a>
              <a href="#news" className="text-foreground/70 hover:text-primary transition-colors font-medium">Новости</a>
              <a href="#reviews" className="text-foreground/70 hover:text-primary transition-colors font-medium">Отзывы</a>
              <a href="#contacts" className="text-foreground/70 hover:text-primary transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Профессиональные решения
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Все для печати
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  в одном месте
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Чернила, запчасти и оборудование для вашего бизнеса. Более 10 лет на рынке.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Каталог товаров
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary/40">
                  <Icon name="Info" size={20} className="mr-2" />
                  О компании
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Товаров</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/c0965778-6ba8-45be-b0e5-a0b7e25b9c06/files/fb79cf9b-0b40-4c6d-8f1e-94e71225b7e7.jpg" 
                alt="Office" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20">О нас</Badge>
            <h2 className="text-4xl font-bold">Профессионалы печати</h2>
            <p className="text-lg text-muted-foreground">
              Мы специализируемся на поставке качественных расходных материалов и оборудования для печати
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-white" size={24} />
                </div>
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Только оригинальная продукция от проверенных производителей</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                  <Icon name="Truck" className="text-white" size={24} />
                </div>
                <CardTitle>Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Быстрая доставка по всей стране в течение 1-3 дней</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                  <Icon name="Headphones" className="text-white" size={24} />
                </div>
                <CardTitle>Поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Квалифицированная помощь в выборе и консультации 24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="service" className="py-20 bg-gradient-to-br from-purple-50/50 to-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20">Наши услуги</Badge>
            <h2 className="text-4xl font-bold">Комплексные решения</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: 'Droplet', title: 'Заправка картриджей', desc: 'Профессиональная заправка всех типов картриджей' },
              { icon: 'Wrench', title: 'Ремонт оборудования', desc: 'Диагностика и ремонт принтеров и МФУ' },
              { icon: 'Package', title: 'Поставка расходников', desc: 'Оптовые и розничные поставки чернил и запчастей' },
              { icon: 'Settings', title: 'Техническое обслуживание', desc: 'Регулярное обслуживание печатной техники' },
            ].map((service, idx) => (
              <Card key={idx} className="border-2 hover:border-secondary/30 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                      <Icon name={service.icon as any} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <Badge className="bg-accent/10 text-accent border-accent/20">Каталог</Badge>
            <h2 className="text-4xl font-bold">Наша продукция</h2>
          </div>
          
          <div className="max-w-6xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Поиск товаров..." 
                  className="pl-10 h-12 border-2 focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-[200px] h-12 border-2">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  <SelectItem value="ink">Чернила</SelectItem>
                  <SelectItem value="parts">Запчасти</SelectItem>
                  <SelectItem value="equipment">Оборудование</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="border-2 hover:border-primary/30 transition-all hover:shadow-xl group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-white/90 text-primary">
                    {product.category === 'ink' ? 'Чернила' : product.category === 'parts' ? 'Запчасти' : 'Оборудование'}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString()} ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20">Новости</Badge>
            <h2 className="text-4xl font-bold">Последние события</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item) => (
              <Card key={item.id} className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={16} />
                    {item.date}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <Badge className="bg-accent/10 text-accent border-accent/20">Отзывы</Badge>
            <h2 className="text-4xl font-bold">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="border-2 hover:border-accent/20 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                      {review.author[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.author}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge className="bg-primary/10 text-primary border-primary/20">Контакты</Badge>
              <h2 className="text-4xl font-bold">Свяжитесь с нами</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-muted-foreground">+7 (800) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon name="Mail" className="text-secondary" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">info@printpro.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon name="MapPin" className="text-accent" size={20} />
                    </div>
                    <div>
                      <div className="font-medium">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Ваше имя" className="border-2" />
                  <Input placeholder="Email" type="email" className="border-2" />
                  <Input placeholder="Телефон" type="tel" className="border-2" />
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon name="Printer" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">PrintPro</span>
              </div>
              <p className="text-white/80">Профессиональные решения для печати</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Каталог</h3>
              <ul className="space-y-2 text-white/80">
                <li>Чернила</li>
                <li>Запчасти</li>
                <li>Оборудование</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-white/80">
                <li>О нас</li>
                <li>Новости</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Связь</h3>
              <ul className="space-y-2 text-white/80">
                <li>Контакты</li>
                <li>Поддержка</li>
                <li>Сервис</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            © 2024 PrintPro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
