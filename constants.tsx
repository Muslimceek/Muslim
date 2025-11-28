import React from 'react';
import { Palette, Bot, ShoppingBag, Megaphone } from 'lucide-react';
import { ServiceData, Language } from './types';

export const getServices = (lang: Language): ServiceData[] => {
  const isRu = lang === 'ru';
  const isUz = lang === 'uz';
  // Default to English logic if not ru or uz

  const data: Record<Language, ServiceData[]> = {
    ru: [
      {
        id: 'logo',
        title: 'Брендинг и Логотипы',
        subtitle: 'Визуальные инструменты для бизнеса',
        description: 'Я создаю не просто картинки, а визуальные инструменты, которые помогают бизнесу выделяться и продавать. От минимализма до сложных эмблем.',
        icon: <Palette className="w-6 h-6" />,
        packages: [
          {
            name: 'Базовый Старт',
            price: '$150',
            duration: '3-5 дней',
            description: 'Идеально для тестирования ниши, стартапов или личного блога.',
            features: [
              '2 уникальных концепции логотипа',
              'Файлы для веба (JPG, PNG)',
              'Черно-белая версия',
              '2 круга правок',
              'Векторные исходники не входят'
            ]
          },
          {
            name: 'Бизнес Про',
            price: '$450',
            duration: '7-10 дней',
            isPopular: true,
            description: 'Полный набор для уверенного выхода на рынок.',
            features: [
              '3-4 проработанных концепции',
              'Все исходные файлы (AI, EPS, SVG, PDF)',
              'Подбор фирменной цветовой палитры',
              'Визуализация (Мокапы)',
              'Неограниченные правки'
            ]
          },
          {
            name: 'Премиум Брендинг',
            price: '$950+',
            duration: '14-20 дней',
            description: 'Комплексное решение для тех, кто строит сильный бренд «под ключ».',
            features: [
              '5+ премиум концепций',
              'Полный пакет файлов (Вектор + Растр)',
              'Логобук (Mini Brandbook)',
              'Дизайн носителей (визитка, бланк и т.д.)',
              'Оформление соцсетей',
              'Передача авторских прав'
            ]
          }
        ],
        extraInfo: [
          {
            title: 'Стили',
            items: ['Минимализм (Tech/Fashion)', 'Типографика (Wordmark)', 'Абстракция', 'Монограммы', 'Винтаж и Эмблемы']
          },
          {
            title: 'Дополнительные опции',
            items: ['Экспресс-разработка (24-48ч): +$100', 'Анимация логотипа (Intro): +$150', 'Доп. вариант логотипа: +$80']
          }
        ]
      },
      {
        id: 'bots',
        title: 'Telegram Боты',
        subtitle: 'Автоматизация и Web Apps',
        description: 'Эффективные инструменты для автоматизации бизнеса, продаж и поддержки клиентов. От автоответчиков до магазинов.',
        icon: <Bot className="w-6 h-6" />,
        stack: ['Python (Aiogram)', 'Node.js', 'PostgreSQL', 'Docker', 'AWS/VPS'],
        packages: [
          {
            name: 'Бот-Визитка',
            price: '$150 – $300',
            duration: '3-5 дней',
            description: 'Отличное решение для ответов на частые вопросы и сбора заявок.',
            features: [
              'Меню с кнопками',
              'Сбор заявок в личку',
              'FAQ (Ответы на вопросы)',
              'Простая админка',
              'Без баз данных'
            ]
          },
          {
            name: 'Бизнес + Интеграции',
            price: '$500 – $900',
            duration: '10-14 дней',
            description: 'Умный бот, который работает с данными, сайтами и сервисами.',
            features: [
              'Сложная логика и воронки',
              'База данных пользователей',
              'Админ-панель со статистикой',
              'Рассылки по базе',
              'Интеграция с Google Sheets/CRM'
            ]
          },
          {
            name: 'Web App & E-commerce',
            price: '$1,200 – $3,000+',
            duration: '20-30+ дней',
            isPopular: true,
            description: 'Полноценный магазин или приложение внутри Telegram.',
            features: [
              'Интерфейс Web App (как сайт)',
              'Корзина, Каталог, Оплата',
              'Stripe / Crypto / Click / Payme',
              'Синхронизация с 1С / Битрикс',
              'AI-интеграция (ChatGPT)'
            ]
          }
        ],
        extraInfo: [
          {
            title: 'Типы ботов',
            items: ['Магазины (Shop Bots)', 'Запись (Booking)', 'Воронки продаж', 'Закрытые клубы (Paid Sub)', 'Парсеры', 'AI-Ассистенты']
          }
        ]
      },
      {
        id: 'infographics',
        title: 'Инфографика маркетплейсов',
        subtitle: 'Wildberries, Ozon, Amazon',
        description: 'Дизайн, который поднимает CTR и превращает просмотры в покупки. Продающая воронка внутри карточки товара.',
        icon: <ShoppingBag className="w-6 h-6" />,
        packages: [
          {
            name: 'Главный Герой',
            price: '$20 – $35 / слайд',
            duration: '1 день',
            description: 'Выделить товар в поисковой выдаче и заставить кликнуть.',
            features: [
              'Дизайн обложки (Главное фото)',
              'Обработка и ретушь',
              'Оффер (УТП) крупно',
              'Плашки «Хит продаж»',
              'Анализ конкурентов'
            ]
          },
          {
            name: 'Стандартная воронка',
            price: '$80 – $120',
            duration: '2-3 дня',
            isPopular: true,
            description: 'Серия из 3-4 слайдов. Идеально для старта.',
            features: [
              'Главная обложка',
              'Преимущества/Характеристики',
              'Размерная сетка',
              'Ретушь фото',
              'Адаптация под площадку'
            ]
          },
          {
            name: 'Rich Content / A+',
            price: '$180 – $300+',
            duration: '4-6 дней',
            description: 'Полная серия 6-9 слайдов. Максимальная конверсия.',
            features: [
              'Полная серия слайдов',
              'Сложная ретушь и эффекты',
              'Lifestyle-слайды',
              'Блок «Ответы на вопросы»',
              'Поиск стоковых фото'
            ]
          }
        ]
      },
      {
        id: 'ads',
        title: 'Таргет Реклама',
        subtitle: 'Instagram, Facebook & Telegram',
        description: 'Разрабатываю стратегию, создаю креативы и анализирую показатели. Каждый доллар должен приносить прибыль.',
        icon: <Megaphone className="w-6 h-6" />,
        packages: [
          {
            name: 'Тест-Драйв (Meta Ads)',
            price: '$200',
            duration: '7-10 дней',
            description: 'Проверить спрос, найти рабочие связки.',
            features: [
              'Анализ профиля',
              '3-5 рекламных макетов',
              'Написание текстов',
              'Настройка аудиторий',
              'Отчет с ценой за лида'
            ]
          },
          {
            name: 'Месячное ведение',
            price: '$450 / мес',
            duration: '30 дней',
            isPopular: true,
            description: 'Стабильный поток заявок и масштабирование.',
            features: [
              'Постоянная оптимизация',
              'Ретаргетинг',
              'Look-alike аудитории',
              'Обновление креативов',
              'Работа с Pixel'
            ]
          },
          {
            name: 'Telegram Ads & Посевы',
            price: 'от $250',
            duration: 'Месяц',
            description: 'Реклама в мессенджере (Ads Platform или Посевы).',
            features: [
              'Подбор каналов (ручной + парсинг)',
              'Написание нативных постов',
              'Переговоры с админами',
              'Контроль выхода',
              'Отчетность'
            ]
          }
        ]
      }
    ],
    uz: [
      {
        id: 'logo',
        title: 'Brending va Logotiplar',
        subtitle: 'Biznes uchun vizual vositalar',
        description: 'Men shunchaki rasmlar emas, balki biznesga ajralib turish va sotishga yordam beradigan vizual vositalarni yarataman.',
        icon: <Palette className="w-6 h-6" />,
        packages: [
          {
            name: 'Boshlang‘ich Start',
            price: '$150',
            duration: '3-5 kun',
            description: 'Nishani test qilish, startaplar yoki shaxsiy blog uchun ideal.',
            features: [
              '2 ta unikal logotip konsepsiyasi',
              'Web uchun fayllar (JPG, PNG)',
              'Oq-qora versiya',
              '2 marta tahrirlash',
              'Vektor manbalar kiritilmagan'
            ]
          },
          {
            name: 'Biznes Pro',
            price: '$450',
            duration: '7-10 kun',
            isPopular: true,
            description: 'Bozorga ishonchli chiqish uchun to‘liq to‘plam.',
            features: [
              '3-4 ishlangan konsepsiya',
              'Barcha manba fayllar (AI, EPS, SVG, PDF)',
              'Ranglar palitrasini tanlash',
              'Vizualizatsiya (Mokaplar)',
              'Cheklovsiz tahrirlar'
            ]
          },
          {
            name: 'Premium Brending',
            price: '$950+',
            duration: '14-20 kun',
            description: 'Kuchli brend qurayotganlar uchun kompleks yechim.',
            features: [
              '5+ premium konsepsiyalar',
              'To‘liq fayllar paketi (Vektor + Rastr)',
              'Logobook (Mini Brandbook)',
              'Tashuvchilar dizayni (tashrif qog‘ozi va h.k.)',
              'Ijtimoiy tarmoqlarni bezash',
              'Mualliflik huquqini o‘tkazish'
            ]
          }
        ],
        extraInfo: [
          {
            title: 'Uslublar',
            items: ['Minimalizm (Tech/Fashion)', 'Tipografika (Wordmark)', 'Abstraksiya', 'Monogrammalar', 'Vintaj va Emblemalar']
          },
          {
            title: 'Qo‘shimcha opsiyalar',
            items: ['Ekspress-ishlash (24-48s): +$100', 'Logotip animatsiyasi (Intro): +$150', 'Qo‘shimcha logo varianti: +$80']
          }
        ]
      },
      {
        id: 'bots',
        title: 'Telegram Botlar',
        subtitle: 'Avtomatlashtirish va Web Apps',
        description: 'Biznesni avtomatlashtirish, savdo va mijozlarni qo‘llab-quvvatlash uchun samarali vositalar.',
        icon: <Bot className="w-6 h-6" />,
        stack: ['Python (Aiogram)', 'Node.js', 'PostgreSQL', 'Docker', 'AWS/VPS'],
        packages: [
          {
            name: 'Bot-Vizitka',
            price: '$150 – $300',
            duration: '3-5 kun',
            description: 'Tez-tez beriladigan savollarga javob berish va buyurtmalarni yig‘ish uchun ajoyib yechim.',
            features: [
              'Tugmali menyu',
              'Shaxsiyga buyurtma yig‘ish',
              'FAQ (Savol-Javob)',
              'Oddiy admin panel',
              'Ma’lumotlar bazasisiz'
            ]
          },
          {
            name: 'Biznes + Integratsiya',
            price: '$500 – $900',
            duration: '10-14 kun',
            description: 'Ma’lumotlar, saytlar va servislar bilan ishlaydigan aqlli bot.',
            features: [
              'Murakkab logika va voronkalar',
              'Foydalanuvchilar bazasi',
              'Statistikali admin panel',
              'Baza bo‘yicha xabarlar',
              'Google Sheets/CRM integratsiyasi'
            ]
          },
          {
            name: 'Web App & E-commerce',
            price: '$1,200 – $3,000+',
            duration: '20-30+ kun',
            isPopular: true,
            description: 'Telegram ichida to‘liq do‘kon yoki ilova.',
            features: [
              'Web App interfeysi (sayt kabi)',
              'Savat, Katalog, To‘lov',
              'Stripe / Crypto / Click / Payme',
              '1C / Bitrix bilan sinxronizatsiya',
              'AI-integratsiya (ChatGPT)'
            ]
          }
        ],
        extraInfo: [
          {
            title: 'Bot turlari',
            items: ['Do‘konlar (Shop Bots)', 'Yozilish (Booking)', 'Savdo voronkalari', 'Yopiq klublar', 'Parserlar', 'AI-Yordamchilar']
          }
        ]
      },
      {
        id: 'infographics',
        title: 'Marketpleys Infografikasi',
        subtitle: 'Wildberries, Ozon, Amazon',
        description: 'CTRni oshiradigan va ko‘rishlarni xaridga aylantiradigan dizayn. Tovarni kartochkasi ichida sotuvchi voronka.',
        icon: <ShoppingBag className="w-6 h-6" />,
        packages: [
          {
            name: 'Bosh Qahramon',
            price: '$20 – $35 / slayd',
            duration: '1 kun',
            description: 'Tovarni qidiruvda ajratib ko‘rsatish va bosishga majbur qilish.',
            features: [
              'Muqova dizayni (Asosiy rasm)',
              'Ishlov berish va retush',
              'Offer (UTP) yirik planda',
              '«Xit savdo» plashkalari',
              'Raqobatchilar tahlili'
            ]
          },
          {
            name: 'Standart voronka',
            price: '$80 – $120',
            duration: '2-3 kun',
            isPopular: true,
            description: '3-4 slayddan iborat seriya. Boshlash uchun ideal.',
            features: [
              'Asosiy muqova',
              'Afzalliklar/Xususiyatlar',
              'O‘lchamlar jadvali',
              'Rasmlarni retush qilish',
              'Maydonchaga moslashtirish'
            ]
          },
          {
            name: 'Rich Content / A+',
            price: '$180 – $300+',
            duration: '4-6 kun',
            description: 'To‘liq seriya 6-9 slayd. Maksimal konversiya.',
            features: [
              'To‘liq slaydlar seriyasi',
              'Murakkab retush va effektlar',
              'Lifestyle-slaydlar',
              '«Savol-Javob» bloki',
              'Stok rasmlarni qidirish'
            ]
          }
        ]
      },
      {
        id: 'ads',
        title: 'Target Reklama',
        subtitle: 'Instagram, Facebook & Telegram',
        description: 'Strategiya ishlab chiqaman, kreativlar yarataman va ko‘rsatkichlarni tahlil qilaman.',
        icon: <Megaphone className="w-6 h-6" />,
        packages: [
          {
            name: 'Test-Drayv (Meta Ads)',
            price: '$200',
            duration: '7-10 kun',
            description: 'Talabni tekshirish, ishchi bog‘lamalarni topish.',
            features: [
              'Profil tahlili',
              '3-5 reklama maketi',
              'Matnlar yozish',
              'Auditoriyani sozlash',
              'Lid narxi bo‘yicha hisobot'
            ]
          },
          {
            name: 'Oylik yuritish',
            price: '$450 / oy',
            duration: '30 kun',
            isPopular: true,
            description: 'Barqaror buyurtmalar oqimi va masshtablash.',
            features: [
              'Doimiy optimizatsiya',
              'Retargeting',
              'Look-alike auditoriyalar',
              'Kreativlarni yangilash',
              'Pixel bilan ishlash'
            ]
          },
          {
            name: 'Telegram Ads & Ekish',
            price: '$250 dan',
            duration: 'Oy',
            description: 'Messendjerda reklama (Ads Platform yoki Ekish).',
            features: [
              'Kanallarni tanlash (qo‘lda + parsing)',
              'Nativ postlar yozish',
              'Adminlar bilan muzokaralar',
              'Chiqish nazorati',
              'Hisobot'
            ]
          }
        ]
      }
    ],
    en: [
      {
        id: 'logo',
        title: 'Branding & Logos',
        subtitle: 'Visual tools for business',
        description: 'I create not just images, but visual tools that help businesses stand out and sell. From minimalism to complex emblems.',
        icon: <Palette className="w-6 h-6" />,
        packages: [
          {
            name: 'Basic Start',
            price: '$150',
            duration: '3-5 days',
            description: 'Ideal for niche testing, startups, or personal blogs.',
            features: [
              '2 unique logo concepts',
              'Web files (JPG, PNG)',
              'Black & white version',
              '2 rounds of revisions',
              'Vector source files not included'
            ]
          },
          {
            name: 'Business Pro',
            price: '$450',
            duration: '7-10 days',
            isPopular: true,
            description: 'Complete set for a confident market entry.',
            features: [
              '3-4 detailed concepts',
              'All source files (AI, EPS, SVG, PDF)',
              'Brand color palette selection',
              'Visualization (Mockups)',
              'Unlimited revisions'
            ]
          },
          {
            name: 'Premium Identity',
            price: '$950+',
            duration: '14-20 days',
            description: 'Comprehensive solution for building a strong brand "turnkey".',
            features: [
              '5+ premium concepts',
              'Full file package (Vector + Raster)',
              'Logobook (Mini Brandbook)',
              'Stationery design (business card, etc.)',
              'Social media design',
              'Copyright transfer'
            ]
          }
        ],
        extraInfo: [
          {
            title: 'Styles',
            items: ['Minimalism (Tech/Fashion)', 'Typography (Wordmark)', 'Abstract', 'Monogram', 'Vintage & Emblem']
          },
          {
            title: 'Add-ons',
            items: ['Express delivery (24-48h): +$100', 'Logo Animation (Intro): +$150', 'Extra logo variant: +$80']
          }
        ]
      },
      {
        id: 'bots',
        title: 'Telegram Bots',
        subtitle: 'Automation & Web Apps',
        description: 'Effective tools for business automation, sales, and customer support. From auto-responders to stores.',
        icon: <Bot className="w-6 h-6" />,
        stack: ['Python (Aiogram)', 'Node.js', 'PostgreSQL', 'Docker', 'AWS/VPS'],
        packages: [
          {
            name: 'Basic Bot',
            price: '$150 – $300',
            duration: '3-5 days',
            description: 'Great solution for FAQs and lead collection.',
            features: [
              'Menu with buttons',
              'Lead forwarding to DM',
              'FAQ (Questions & Answers)',
              'Simple admin panel',
              'No database included'
            ]
          },
          {
            name: 'Business Automation',
            price: '$500 – $900',
            duration: '10-14 days',
            description: 'Smart bot working with data, websites, and services.',
            features: [
              'Complex logic & funnels',
              'User database',
              'Admin panel with stats',
              'Broadcasting to users',
              'Google Sheets/CRM integration'
            ]
          },
          {
            name: 'Web App & E-commerce',
            price: '$1,200 – $3,000+',
            duration: '20-30+ days',
            isPopular: true,
            description: 'Full-fledged store or app inside Telegram.',
            features: [
              'Web App Interface (like a website)',
              'Cart, Catalog, Payments',
              'Stripe / Crypto / Click / Payme',
              'Sync with 1C / Bitrix',
              'AI Integration (ChatGPT)'
            ]
          }
        ],
        extraInfo: [
          {
            title: 'Bot Types',
            items: ['Stores (Shop Bots)', 'Booking', 'Sales Funnels', 'Paid Subscription Clubs', 'Parsers', 'AI Assistants']
          }
        ]
      },
      {
        id: 'infographics',
        title: 'Marketplace Infographics',
        subtitle: 'Wildberries, Ozon, Amazon',
        description: 'Design that boosts CTR and converts views into sales. Selling funnel inside the product card.',
        icon: <ShoppingBag className="w-6 h-6" />,
        packages: [
          {
            name: 'Main Cover',
            price: '$20 – $35 / slide',
            duration: '1 day',
            description: 'Stand out in search results and get clicks.',
            features: [
              'Cover Design (Main Photo)',
              'Editing & Retouching',
              'Big Offer (USP)',
              '“Bestseller” badges',
              'Competitor analysis'
            ]
          },
          {
            name: 'Standard Funnel',
            price: '$80 – $120',
            duration: '2-3 days',
            isPopular: true,
            description: 'Series of 3-4 slides. Ideal for starting.',
            features: [
              'Main Cover',
              'Benefits/Specs',
              'Size Chart',
              'Photo Retouching',
              'Platform adaptation'
            ]
          },
          {
            name: 'Rich Content / A+',
            price: '$180 – $300+',
            duration: '4-6 days',
            description: 'Full series of 6-9 slides. Maximum conversion.',
            features: [
              'Full slide series',
              'Complex retouching & effects',
              'Lifestyle slides',
              '“Q&A” Block',
              'Stock photo search'
            ]
          }
        ]
      },
      {
        id: 'ads',
        title: 'Targeted Ads',
        subtitle: 'Instagram, Facebook & Telegram',
        description: 'I develop strategy, create creatives, and analyze metrics. Every dollar must bring profit.',
        icon: <Megaphone className="w-6 h-6" />,
        packages: [
          {
            name: 'Test Drive (Meta Ads)',
            price: '$200',
            duration: '7-10 days',
            description: 'Test demand, find working combinations.',
            features: [
              'Profile analysis',
              '3-5 ad creatives',
              'Copywriting',
              'Audience setup',
              'Cost per lead report'
            ]
          },
          {
            name: 'Monthly Growth',
            price: '$450 / mo',
            duration: '30 days',
            isPopular: true,
            description: 'Stable lead flow and scaling.',
            features: [
              'Ongoing optimization',
              'Retargeting',
              'Look-alike audiences',
              'Creative updates',
              'Pixel management'
            ]
          },
          {
            name: 'Telegram Ads & Seeding',
            price: 'from $250',
            duration: 'Month',
            description: 'Ads in messenger (Ads Platform or Seeding).',
            features: [
              'Channel selection (Manual + Parsing)',
              'Native posts writing',
              'Admin negotiations',
              'Posting control',
              'Reporting'
            ]
          }
        ]
      }
    ]
  };

  return data[lang];
};