export const menuCategories = [
  { id: 'pizza',    uz: 'Pitsa',         ru: 'Пицца',      en: 'Pizza' },
  { id: 'lavash',   uz: 'Lavash',        ru: 'Лаваш',      en: 'Lavash' },
  { id: 'burgers',  uz: 'Burgerlar',     ru: 'Бургеры',    en: 'Burgers' },
  { id: 'hotmeals', uz: 'Issiq taomlar', ru: 'Горячие',    en: 'Hot Meals' },
  { id: 'soups',    uz: "Sho'rvalar",    ru: 'Супы',       en: 'Soups' },
  { id: 'drinks',   uz: 'Ichimliklar',   ru: 'Напитки',    en: 'Drinks' },
  { id: 'desserts', uz: 'Desertlar',     ru: 'Десерты',    en: 'Desserts' },
]

export const menuItems = [
  // ── PIZZA ──
  { id:1, category:'pizza', featured:true,
    name:{ uz:'Aliya Imzo Pitsa', ru:'Фирменная Пицца Aliya', en:'Aliya Signature Pizza' },
    desc:{ uz:"Yangi mozzarella, proshuto, rayhon, truffle moyi, San Marzano pomidorlari", ru:'Свежая моцарелла, прошутто, базилик, масло трюфеля', en:'Fresh mozzarella, prosciutto, basil, truffle oil, San Marzano tomatoes' },
    price:89000, badge:{ uz:'Oshpaz tanlovi', ru:'Выбор шефа', en:"Chef's Choice" },
    img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=80' },

  { id:2, category:'pizza', featured:true,
    name:{ uz:'Margarita Reale', ru:'Маргарита Реале', en:'Margherita Reale' },
    desc:{ uz:"Burrata, sekin qovurilgan pomidorlar, yangi rayhon, zaytun moyi", ru:'Буррата, медленно запечённые томаты, базилик, оливковое масло', en:'Burrata, slow-roasted tomatoes, fresh basil, EVOO' },
    price:65000, badge:{ uz:'Klassik', ru:'Классика', en:'Classic' },
    img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80' },

  { id:3, category:'pizza', featured:true,
    name:{ uz:'Fuoco Nero', ru:'Фуоко Неро', en:'Fuoco Nero' },
    desc:{ uz:"Ko'mir xamiri, dudlangan tovuq, qora sarimsoq kremi, karamelizatsiyalangan piyoz", ru:'Угольное тесто, копчёная курица, крем из чёрного чеснока', en:'Charcoal crust, smoked chicken, black garlic cream, caramelized onions' },
    price:95000, badge:{ uz:'Imzo', ru:'Фирменная', en:'Signature' },
    img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80' },

  { id:4, category:'pizza',
    name:{ uz:"To'rt Pishloqli", ru:'Четыре Сыра', en:'Quattro Formaggi' },
    desc:{ uz:"Mozzarella, gorgonzola, parmesan, rikotta, asal, yong'oq", ru:'Моцарелла, горгонзола, пармезан, рикотта, мёд', en:'Mozzarella, gorgonzola, parmigiano, ricotta, honey, walnuts' },
    price:78000,
    img:'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=600&auto=format&fit=crop&q=80' },

  { id:5, category:'pizza',
    name:{ uz:'Pepperoni Maestro', ru:'Пепперони Маэстро', en:'Pepperoni Maestro' },
    desc:{ uz:"Ikki qavatli pepperoni, nduja, yangi chili, asal glazur", ru:'Двойной пепперони, ндуя, свежий чили, медовая глазурь', en:'Double pepperoni, nduja, fresh chili, honey glaze' },
    price:72000, badge:{ uz:'Achchiq', ru:'Острая', en:'Spicy' },
    img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=80' },

  { id:6, category:'pizza',
    name:{ uz:'Oq Truffle Pitsa', ru:'Белый Трюфель', en:'Tartufo Bianco' },
    desc:{ uz:"Oq krem, qora truffle, yovvoyi qo'ziqorinlar, chaber, pecorino", ru:'Белый крем, чёрный трюфель, лесные грибы, тимьян, пекорино', en:'White cream, black truffle, wild mushrooms, thyme, pecorino' },
    price:115000, badge:{ uz:'Premium', ru:'Премиум', en:'Premium' },
    img:'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&auto=format&fit=crop&q=80' },

  // ── LAVASH ──
  { id:7, category:'lavash',
    name:{ uz:'Tovuq Sezar Lavash', ru:'Лаваш Цезарь с Курицей', en:'Chicken Caesar Lavash' },
    desc:{ uz:"Qovurilgan tovuq, roman salat, parmesan, sezar sous", ru:'Жареная курица, ромен, пармезан, соус цезарь', en:'Grilled chicken, romaine, parmesan, caesar dressing' },
    price:45000, badge:{ uz:'Engil', ru:'Лёгкий', en:'Light' },
    img:'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&auto=format&fit=crop&q=80' },

  { id:8, category:'lavash',
    name:{ uz:'Oltin Shawarma', ru:'Золотая Шаурма', en:'Shawarma Gold' },
    desc:{ uz:"Marinlangan tovuq, yangi sabzavotlar, sarimsoq sous, sumak", ru:'Маринованная курица, свежие овощи, чесночный соус, сумах', en:'Marinated chicken, fresh vegetables, garlic sauce, sumac' },
    price:42000, badge:{ uz:'Mashhur', ru:'Популярный', en:'Popular' },
    img:'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&auto=format&fit=crop&q=80' },

  // ── BURGERS ──
  { id:9, category:'burgers', featured:true,
    name:{ uz:'Aliya Royal Burger', ru:'Роял Бургер Aliya', en:'Aliya Royal Burger' },
    desc:{ uz:"200g premium mol go'shti, eski cheddar, truffle aioli, briosh bulochkasi", ru:'200г котлета из говядины, выдержанный чеддер, айоли с трюфелем', en:'200g beef patty, aged cheddar, truffle aioli, brioche bun' },
    price:75000, badge:{ uz:"Eng ko'p sotiladi", ru:'Хит продаж', en:'Bestseller' },
    img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80' },

  { id:10, category:'burgers',
    name:{ uz:'Dudlangan BBQ', ru:'Смоки BBQ', en:'Smoky BBQ Stack' },
    desc:{ uz:"Dudlangan mol go'shti, bekon, gouda, marinlangan xalapeño, BBQ sous", ru:'Копчёная говядина, бекон, гауда, маринованный халапеньо', en:'Smoked beef, bacon, gouda, pickled jalapeño, BBQ sauce' },
    price:68000,
    img:'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=600&auto=format&fit=crop&q=80' },

  // ── HOT MEALS ──
  { id:11, category:'hotmeals',
    name:{ uz:'Tovuq Alfredo', ru:'Курица Альфредо', en:'Chicken Alfredo' },
    desc:{ uz:"Penne, qovurilgan tovuq, parmesan krem sous, sarimsoq, ko'katlar", ru:'Пенне, жареная курица, сливочный соус альфредо, чеснок', en:'Penne, grilled chicken, parmesan cream sauce, garlic, herbs' },
    price:55000,
    img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&auto=format&fit=crop&q=80' },

  { id:12, category:'hotmeals',
    name:{ uz:'Qovurilgan Losos', ru:'Жареный Лосось', en:'Grilled Salmon' },
    desc:{ uz:"Atlantika lososi, limon sariyog' sous, asparagus, o't moyi", ru:'Лосось атлантический, лимонно-сливочный соус, спаржа', en:'Atlantic salmon, lemon butter sauce, asparagus, herb oil' },
    price:98000, badge:{ uz:'Premium', ru:'Премиум', en:'Premium' },
    img:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&auto=format&fit=crop&q=80' },

  // ── SOUPS ──
  { id:13, category:'soups',
    name:{ uz:"Truffle Zamburug Sho'rvasi", ru:'Суп из Трюфельных Грибов', en:'Truffle Mushroom Soup' },
    desc:{ uz:"Yovvoyi qo'ziqorin kremi, truffle moyi, kruton, yangi chaber", ru:'Крем из лесных грибов, масло трюфеля, гренки, тимьян', en:'Wild mushroom cream, truffle oil, croutons, fresh thyme' },
    price:35000, badge:{ uz:'Imzo', ru:'Фирменный', en:'Signature' },
    img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80' },

  // ── DRINKS ──
  { id:14, category:'drinks',
    name:{ uz:'Oltin Limonad', ru:'Золотой Лимонад', en:'Gold Lemonade' },
    desc:{ uz:"Yangi limon, asal, yalpiz, zafaron, gazli suv", ru:'Свежий лимон, мёд, мята, шафран, газированная вода', en:'Fresh lemon, honey, mint, saffron, sparkling water' },
    price:22000, badge:{ uz:'Imzo', ru:'Фирменный', en:'Signature' },
    img:'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&auto=format&fit=crop&q=80' },

  { id:15, category:'drinks',
    name:{ uz:"Meva Ezilmasi", ru:'Ягодный Смузи', en:'Berry Crush' },
    desc:{ uz:"Aralash mevalar, yangi yalpiz, limon sharbati, gazli suv", ru:'Ягодный микс, свежая мята, сок лайма, содовая', en:'Mixed berries, fresh mint, lime juice, soda water' },
    price:18000,
    img:'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80' },

  // ── DESSERTS ──
  { id:16, category:'desserts',
    name:{ uz:'Tiramisu Royal', ru:'Тирамису Руаяль', en:'Tiramisu Royale' },
    desc:{ uz:"Maskarpone, espresso, savoiardi, kakao, oltin changalak", ru:'Маскарпоне, эспрессо, савоярди, какао, золотая пудра', en:'Mascarpone, espresso-soaked savoiardi, cocoa, gold dust' },
    price:38000, badge:{ uz:'Klassik', ru:'Классика', en:'Classic' },
    img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=80' },

  { id:17, category:'desserts',
    name:{ uz:'Oltin Lava Kek', ru:'Золотой Лава Кейк', en:'Molten Gold Cake' },
    desc:{ uz:"Iliq shokolad lava, vanil muzqaymoq, oltin barg, karamel", ru:'Тёплый шоколадный лава, ванильное мороженое, золотой лист', en:'Warm chocolate lava, vanilla ice cream, gold leaf, caramel' },
    price:42000, badge:{ uz:"Albatta tatib ko'ring", ru:'Обязательно попробуйте', en:'Must Try' },
    img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80' },
]
