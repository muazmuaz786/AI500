/* =========================
   MULTI-LANGUAGE CONTENT
   ========================= */

const i18n = {
  en: {
    nav_home: "Home",
    nav_problem: "Problem",
    nav_solution: "Solution",
    nav_team: "Team",
    nav_roadmap: "Roadmap",
    hero_tag: "AI500 · Ecology · AI for Good",
    hero_title: "Clean air decisions for Uzbekistan, powered by AI.",
    hero_sub: "UzAirSense turns invisible air pollution data into clear, simple guidance so families, students and people at risk can plan their day safely.",
    hero_btn_primary: "See our solution",
    hero_btn_secondary: "Why this problem",
    hero_note: "Stage 1 demo: we focus on a clear problem, realistic solution and roadmap. The full product comes in next stages.",
    hero_card_title: "What UzAirSense will do",
    hero_card_1: "Show real-time AQI for major Uzbek cities in a friendly interface.",
    hero_card_2: "Use AI models to predict pollution peaks and clean windows.",
    hero_card_3: "Explain risks in normal language, not only numbers and charts.",
    hero_card_4: "Notify sensitive users when air quality crosses safe thresholds.",
    problem_tag: "Problem",
    problem_title: "Air pollution is growing, but information is still confusing.",
    problem_sub: "In winter heating season, dust storms and traffic peaks, Uzbekistan often experiences PM2.5 and PM10 levels above WHO guidelines.",
    problem_col1_title: "Invisible risk in daily life",
    problem_col1_p1: "People wake up, go to school, work and training without knowing whether the air today is mild, unhealthy or dangerous. Air quality apps exist, but they are fragmented, usually in English only, or not focused on Uzbek cities.",
    problem_col1_p2: "Families with children, elderly relatives or asthma do not get clear daily guidance. They must guess based on how the sky looks or what they read on social media.",
    problem_col2_title: "Key gaps today",
    problem_l1: "No unified, trusted place dedicated to Uzbekistan’s air quality.",
    problem_l2: "Complex AQI charts with no explanation what to actually do.",
    problem_l3: "No personalised alerts for risk groups or local neighbourhoods.",
    problem_l4: "Data and forecasts are not integrated into everyday decisions.",
    problem_note: "As a result, people are exposed to polluted air not because they do not care, but because signals are hidden, scattered and too technical.",
    solution_tag: "Solution",
    solution_title: "UzAirSense: air quality intelligence as simple as checking the weather.",
    solution_sub: "We design UzAirSense as a lightweight AI platform that collects open air and weather data, forecasts short-term pollution trends and translates them into human language.",
    solution_box1_title: "Real-time & forecast",
    solution_box1_p: "For each supported city, UzAirSense will show current AQI, dominant pollutant and a 24-hour forecast with simple color coding and short explanations such as “moderate – outdoor activity is okay for most people.”",
    solution_box2_title: "Actionable guidance",
    solution_box2_p: "Instead of only numbers, users receive concrete suggestions: best hour to walk with kids, when to ventilate a room, or whether a mask is recommended in the evening commute.",
    solution_box3_title: "Built for Uzbekistan",
    solution_box3_p: "Multilingual interface (Uzbek, Russian, English), city-specific patterns (winter heating, dust storms) and a design optimised for low-end phones make the tool relevant for local users.",
    team_tag: "Team",
    team_title: "Why our team can actually ship this.",
    team_sub: "We combine hands-on full-stack development, early AI experience and the lived reality of breathing the same air in Uzbekistan every day.",
    team_m1_name: "Muaz Tillaev",
    team_m1_role: "Team lead · Backend & Frontend & AI ",
    team_m1_p: "Architects and implements the full system — backend, frontend, and early AI modules. Builds APIs, designs data flow, integrates Three.js visualisations and ensures the project runs smoothly from prototype to presentation.",
    team_m2_name: "Muhammadyusuf Nuriddinov",
    team_m2_role: "Design & Writer · UX",
    team_m2_p: "Responsible for turning raw data into a fast, responsive dashboard that feels as polished as modern developer tools.",
    team_m3_name: "Zaynab Asad",
    team_m3_role: "English Language Manager & Presentation Speaker",
    team_m3_p: "Communicates the team’s ideas clearly, prepares structured English content, and delivers the final presentation. Ensures that the project’s vision, problem, and solution are expressed in a professional and compelling way to judges and users.",
    team_m4_name: "Azim Hamidov",
    team_m4_role: "Development Specialist",
    team_m4_p: "Supports core development across backend logic, data structuring, and system reliability. Works on improving code performance, testing prototype functionality, and ensuring smooth integration between different project components.",
    roadmap_tag: "Roadmap",
    roadmap_title: "From idea to launched product.",
    roadmap_sub: "We treat AI500 as the spark that turns a clear concept into a live, constantly improving service.",
    roadmap_s1_title: "Idea & research",
    roadmap_s1_p: "Validate the scale of the problem, map existing AQI sources and talk to students, parents and doctors about what information they actually need.",
    roadmap_s2_title: "Prototype (today)",
    roadmap_s2_p: "Design this galaxy-style demo, finalise the information architecture, choose APIs and define our first simple forecasting baseline.",
    roadmap_s3_title: "MVP",
    roadmap_s3_p: "Implement data collection, AQI dashboard for several cities, and basic AI-driven suggestions such as “mask recommended after 19:00.” Deploy on the web.",
    roadmap_s4_title: "Launched",
    roadmap_s4_p: "Add alerts, expand coverage, partner with schools and clinics, iterate on forecasting models and mobile-first UX.",
    how_tag: "APPROACH",
    how_title: "How we plan to build UzAirSense step by step.",
    how_sub: "We start with a clear demo for AI500, then connect real APIs, Groq and FastAPI into one working product.",

    how_col1_title: "From demo to real product",
    how_l1: "Stage 1 (now): static demo with realistic copy, design and clear UX for the main use cases.",
    how_l2: "Stage 2: connect live air-quality API to a FastAPI backend and display real AQI for Tashkent and key cities.",
    how_l3: "Stage 3: integrate Groq to turn raw AQI values into daily, human-readable guidance in three languages.",
    how_l4: "Stage 4: add 3D charts on Three.js, basic alerts and city comparison, then deploy a public beta.",

    how_col2_title: "Why this approach is realistic",
    how_col2_p: 
    `We already work with the exact tools we plan to use — FastAPI, Groq, Three.js and live AQ APIs. 
    This makes the development path predictable and achievable.

    ✔ Minimal backend complexity: FastAPI handles all aggregation in one place  
    ✔ Scalable architecture: easy to add more cities or sensors later  
    ✔ Clear AI pipeline: raw AQI → FastAPI → Groq → human-readable guidance  

    Our goal is not to build everything at once, but to ship a focused, working version quickly and improve it each week.`,


    try_tag: "Stage 1",
    try_title: "Prototype button coming in the next phase.",
    try_sub: "For this round, our focus is clarity of problem, solution, team and roadmap. The live AQI dashboard prototype will be connected here if we pass to the next stage.",
    try_btn: "Prototype – coming soon",
    try_note: "No login, no paywall – just a clear public dashboard for Uzbekistan.",
    footer_text: "UzAirSense · AI500 Stage 1 demo · Agrobank & IT Community of Uzbekistan",
    tech_tag: "TECH · AI · BACKEND",
    tech_title: "Our technical stack: from live APIs to 3D air insights.",
    tech_sub: "UzAirSense is built around a FastAPI backend that connects live air-quality APIs, Groq LLMs and a Three.js frontend into one coherent system.",

    tech_box1_title: "FastAPI backend as the core hub",
    tech_box1_p1: "FastAPI acts as the backend layer that talks to external air-quality and weather APIs, validates responses and normalises fields like PM2.5, PM10, AQI, temperature and wind.",
    tech_box1_p2: "The backend exposes a clean JSON API for the frontend, handles basic caching, rate limiting and prepares data for Groq and 3D charts.",

    tech_box2_title: "Groq LLM for smart text and reasoning",
    tech_box2_p1: "Instead of showing only raw AQI numbers, we send aggregated data to a Groq LLM (e.g. Llama-3 / Mixtral) to generate short, clear explanations in English, Russian and Uzbek.",
    tech_box2_p2: "The backend defines safe prompts, max lengths and guardrails so that messages stay focused on health, safety and daily decisions for users in Uzbekistan.",

    tech_box3_title: "Three.js 3D visuals on top of the API",
    tech_box3_p1: "On the client side, we use Three.js to turn time-series data into animated 3D charts and subtle ‘smoke’ effects that visually show peaks in pollution.",
    tech_box3_p2: "The goal is to let people not only read numbers, but actually see how air quality changes during the day on a lightweight, mobile-friendly WebGL experience.",

  },
  ru: {
    nav_home: "Главная",
    nav_problem: "Проблема",
    nav_solution: "Решение",
    nav_team: "Команда",
    nav_roadmap: "План",
    hero_tag: "AI500 · Экология · ИИ",
    hero_title: "Чистый воздух для Узбекистана с помощью ИИ.",
    hero_sub: "UzAirSense переводит сложные данные о загрязнении воздуха в понятные советы, чтобы семьи, студенты и люди из группы риска могли безопасно планировать свой день.",
    hero_btn_primary: "Наше решение",
    hero_btn_secondary: "В чём проблема",
    hero_note: "На этом этапе мы показываем идею, команду и реальный план. Сам сервис будет запущен на следующих этапах AI500.",
    hero_card_title: "Что будет делать UzAirSense",
    hero_card_1: "Показывать текущее качество воздуха по городам Узбекистана.",
    hero_card_2: "Прогнозировать пики загрязнения и более чистые часы.",
    hero_card_3: "Объяснять риск простым языком, а не только цифрами.",
    hero_card_4: "Отправлять персональные уведомления людям из групп риска.",
    problem_tag: "Проблема",
    problem_title: "Загрязнение растёт, но информация остаётся запутанной.",
    problem_sub: "Зимой, при отоплении, пыльных бурях и пробках уровни PM2.5 и PM10 часто превышают рекомендации ВОЗ.",
    problem_col1_title: "Невидимая угроза в повседневности",
    problem_col1_p1: "Люди идут в школу, на работу и тренировку, не зная, насколько воздух сегодня вреден. Приложения есть, но они англоязычные, разрозненные и редко ориентированы на Узбекистан.",
    problem_col1_p2: "Семьи с детьми, пожилыми родственниками или астмой почти не получают ежедневных подсказок и ориентируются на погоду «на глаз».",
    problem_col2_title: "Основные пробелы",
    problem_l1: "Нет единой понятной точки доступа для данных по Узбекистану.",
    problem_l2: "Сложные графики AQI без рекомендаций, что реально делать.",
    problem_l3: "Почти нет персональных уведомлений для групп риска.",
    problem_l4: "Данные не превращаются в конкретные решения в быту.",
    problem_note: "Люди попадают в зону риска не из-за безразличия, а потому что сигналы скрыты и слишком технические.",
    solution_tag: "Решение",
    solution_title: "UzAirSense: качество воздуха так же понятно, как прогноз погоды.",
    solution_sub: "Мы строим лёгкую платформу, которая собирает открытые данные, делает краткосрочный прогноз и выдаёт рекомендации на понятном языке.",
    solution_box1_title: "Онлайн + прогноз",
    solution_box1_p: "Для каждого города UzAirSense показывает текущий AQI, основной загрязнитель и прогноз на 24 часа с цветовой индикацией и пояснениями.",
    solution_box2_title: "Конкретные советы",
    solution_box2_p: "Вместо одних цифр – рекомендации: лучшее время для прогулки, когда проветривать комнату, нужна ли маска вечером.",
    solution_box3_title: "Под Узбекистан",
    solution_box3_p: "Интерфейс на узбекском, русском и английском, учёт местной специфики и удобство для простых смартфонов.",
    team_tag: "Команда",
    team_title: "Почему именно мы можем это реализовать.",
    team_sub: "У нас есть практический опыт разработки, интерес к ИИ и мы сами живём в этом воздухе.",
    team_m1_name: "Муаз Тиллаев",
    team_m1_role: "Лидер · Бэкенд, Фронтенд и ИИ",
    team_m1_p: "Проектирует и реализует всю систему — бэкенд, фронтенд и начальные AI-модули. Создаёт API, продумывает структуру данных, интегрирует 3D-визуализацию на Three.js и обеспечивает стабильную работу прототипа",
    team_m2_name: "Мухаммадюсуф Нуриддинов",
    team_m2_role: "Дизайн и текст · UX",
    team_m2_p: "Отвечает за визуальную идентичность проекта, формирует пользовательский опыт и пишет понятный и доступный контент. Разрабатывает структуру интерфейса, визуальные секции, читабельность и делает продукт интуитивно понятным для пользователей",
    team_m3_name: "Зайнаб Асад",
    team_m3_role: "Менеджер по английскому языку и презентациям",
    team_m3_p: "Чётко доносит идеи команды, готовит структурированный контент на английском и проводит финальную презентацию. Обеспечивает профессиональное и убедительное выражение видения проекта, проблемы и решения для судей и пользователей.",
    team_m4_name: "Азим Хамидов",
    team_m4_role: "Специалист по разработке",
    team_m4_p: "Поддерживает основную разработку: бэкенд-логику, структуру данных и стабильность системы. Работает над оптимизацией производительности, тестированием прототипа и корректной интеграцией всех технических модулей проекта.",
    roadmap_tag: "План",
    roadmap_title: "От идеи до работающего сервиса.",
    roadmap_sub: "AI500 для нас — стартовая точка для устойчивого продукта.",
    roadmap_s1_title: "Идея и исследование",
    roadmap_s1_p: "Изучаем масштаб проблемы, существующие источники и потребности семей, студентов и врачей.",
    roadmap_s2_title: "Прототип (сейчас)",
    roadmap_s2_p: "Этот демо-сайт, структура данных и выбор API, первый простой базовый прогноз.",
    roadmap_s3_title: "MVP",
    roadmap_s3_p: "Сбор данных, панель AQI для нескольких городов, простые AI-подсказки. Деплой в веб.",
    roadmap_s4_title: "Запуск",
    roadmap_s4_p: "Оповещения, расширение покрытия, партнёрства и улучшение моделей.",
    how_tag: "ПОДХОД",
    how_title: "Пошаговый план разработки UzAirSense.",
    how_sub: "Сначала мы делаем понятный демо для AI500, затем подключаем реальные API, Groq и FastAPI в один рабочий продукт.",

    how_col1_title: "От демо к реальному сервису",
    how_l1: "Этап 1 (сейчас): статичный демо-сайт с реалистичным текстом, дизайном и основными сценариями использования.",
    how_l2: "Этап 2: подключить живой API качества воздуха к бэкенду на FastAPI и показывать реальный AQI для Ташкента и ключевых городов.",
    how_l3: "Этап 3: интегрировать Groq, чтобы превращать сырые значения AQI в ежедневные рекомендации на трёх языках.",
    how_l4: "Этап 4: добавить 3D-графики на Three.js, базовые уведомления и сравнение городов, затем выкатить публичную бету.",

    how_col2_title: "Почему этот подход реалистичен",
    how_col2_p:
    `Мы уже работаем с теми инструментами, которые войдут в финальный продукт — FastAPI, Groq, Three.js и live AQ API.
    Поэтому путь разработки понятный, предсказуемый и выполнимый.

    ✔ Минимальная сложность бэкенда: FastAPI берет на себя всю агрегацию данных  
    ✔ Масштабируемость: легко добавить новые города или датчики в будущем  
    ✔ Чёткий AI-конвейер: сырые данные → FastAPI → Groq → понятные рекомендации  

    Наша цель — не строить всё сразу, а быстро выпустить работающий фундамент и улучшать его каждую неделю.`,



    try_tag: "Этап 1",
    try_title: "Прототип откроется на следующем этапе.",
    try_sub: "Сейчас важнее всего чётко показать проблему, решение и реалистичный план.",
    try_btn: "Прототип — скоро",
    try_note: "Публичная панель без входа и оплаты.",
    footer_text: "UzAirSense · демо 1-го этапа AI500 · Agrobank и IT Community of Uzbekistan",
    tech_tag: "ТЕХНОЛОГИИ · ИИ · БЭКЕНД",
    tech_title: "Наш стек: от live-API до 3D-визуализации воздуха.",
    tech_sub: "В основе UzAirSense — бэкенд на FastAPI, который соединяет API качества воздуха, Groq-LLM и фронтенд на Three.js в одну систему.",

    tech_box1_title: "FastAPI как центральный бэкенд-узел",
    tech_box1_p1: "FastAPI выступает бэкенд-слоем, который обращается к внешним API качества воздуха и погоды, проверяет ответы и нормализует PM2.5, PM10, AQI, температуру и ветер.",
    tech_box1_p2: "Бэкенд предоставляет фронтенду чистый JSON-эндпоинт, выполняет простое кэширование, ограничение запросов и готовит данные для Groq и 3D-графиков.",

    tech_box2_title: "Groq LLM для текста и логики",
    tech_box2_p1: "Вместо того чтобы показывать только сухие числа, мы отправляем агрегированные данные в Groq-LLM (Llama-3 / Mixtral), чтобы получать короткие и понятные объяснения на английском, русском и узбекском.",
    tech_box2_p2: "Бэкенд задаёт промпты, ограничения по длине и простые правила безопасности, чтобы сообщения были сфокусированы на здоровье, безопасности и ежедневных решениях пользователей.",

    tech_box3_title: "Three.js и 3D-визуализации на фронтенде",
    tech_box3_p1: "На клиенте мы используем Three.js, чтобы превращать временные ряды в анимированные 3D-графики и лёгкие «дымовые» эффекты, показывающие пики загрязнения.",
    tech_box3_p2: "Так пользователь не просто читает цифры, а *видит*, как качество воздуха меняется в течение дня, даже с мобильного устройства.",


  },
  uz: {
    nav_home: "Bosh sahifa",
    nav_problem: "Muammo",
    nav_solution: "Yechim",
    nav_team: "Jamoa",
    nav_roadmap: "Yo‘l xaritasi",
    hero_tag: "AI500 · Ekologiya · AI",
    hero_title: "O‘zbekiston uchun toza havo qarorlari, sun’iy intellekt bilan.",
    hero_sub: "UzAirSense ko‘rinmas havo ifloslanishi ma’lumotlarini oddiy, tushunarli tavsiyalarga aylantiradi. Oilalar, talabalar va xavf guruhlari kunini xavfsiz rejalashi mumkin.",
    hero_btn_primary: "Yechimimiz",
    hero_btn_secondary: "Muammo haqida",
    hero_note: "1-bosqichda biz g‘oya, muammo va rejamizni aniq ko‘rsatamiz. Tirik servis keyingi bosqichlarda ulanadi.",
    hero_card_title: "UzAirSense nimalar qiladi",
    hero_card_1: "O‘zbekiston shaharlari uchun hozirgi AQI ni ko‘rsatadi.",
    hero_card_2: "AI yordamida ifloslanish cho‘qqilari va toza soatlarni bashorat qiladi.",
    hero_card_3: "Raqamlarni emas, oddiy til bilan tushuntiradi.",
    hero_card_4: "Xavf guruhlari uchun ogohlantirish va tavsiyalar yuboradi.",
    problem_tag: "Muammo",
    problem_title: "Havo ifloslanishi ortmoqda, lekin ma’lumotlar chalkash.",
    problem_sub: "Qish mavsumida, chang bo‘ronlarida va tirbandlikda PM2.5 va PM10 darajalari tez-tez xavfsiz me’yorlardan yuqori bo‘ladi.",
    problem_col1_title: "Kundalik hayotdagi ko‘rinmas xavf",
    problem_col1_p1: "Odamlar bugun havo qanchalik zararli ekanini bilmagan holda maktabga, ishga va mashg‘ulotga boradi. Ilovalar bor, lekin ular asosan ingliz tilida yoki O‘zbekiston uchun moslashtirilmagan.",
    problem_col1_p2: "Bolali oilalar, keksalar yoki astma bilan yashovchilar aniq kunlik tavsiyalar olmaydi – ko‘pincha faqat osmonga qarab taxmin qilishadi.",
    problem_col2_title: "Asosiy bo‘shliqlar",
    problem_l1: "O‘zbekiston uchun yagona, ishonchli havo paneli yo‘q.",
    problem_l2: "AQI grafigi bor, lekin “nima qilish kerak?” degan javob yo‘q.",
    problem_l3: "Xavf guruhlari uchun shaxsiy ogohlantirishlar deyarli yo‘q.",
    problem_l4: "Ma’lumotlar qaror qabul qilishga aylantirilmagan.",
    problem_note: "Odamlar beparvo bo‘lgani uchun emas, balki signal yashirin va haddan tashqari texnik bo‘lgani uchun xavfga duch kelishadi.",
    solution_tag: "Yechim",
    solution_title: "UzAirSense: ob-havo kabi oddiy havo sifati paneli.",
    solution_sub: "Biz UzAirSense ni ochiq ma’lumotlarni yig‘ib, qisqa muddatli prognoz va oddiy tavsiyalar beradigan yengil platforma sifatida qurmoqchimiz.",
    solution_box1_title: "Onlayn va prognoz",
    solution_box1_p: "Har bir shahar uchun hozirgi AQI, asosiy ifloslantiruvchi va 24 soatlik prognoz ranglar va qisqa izohlar bilan ko‘rsatiladi.",
    solution_box2_title: "Amaliy tavsiyalar",
    solution_box2_p: "Foydalanuvchi “bugun qachon sayr qilish yaxshi?”, “qachon deraza ochish kerak?”, “niqob kerakmi?” kabi savollarga javob oladi.",
    solution_box3_title: "Mahalliy ehtiyojlarga mos",
    solution_box3_p: "Uzbek, rus va ingliz tillari, mahalliy iqlim va chang holatiga mos dizayn, oddiy telefonlarda ham yaxshi ishlaydigan interfeys.",
    team_tag: "Jamoa",
    team_title: "Nega bu loyihani aynan biz bajarishimiz mumkin.",
    team_sub: "Bizda amaliy dasturlash ko‘nikmalari, AI ga qiziqish va shu yerda yashash tajribasi bor.",
    team_m1_name: "Muaz Tillaev",
    team_m1_role: "Lider · Backend & Frontend & AI",
    team_m1_p: "Butun tizimni loyihalashtiradi va quradi — backend, frontend va dastlabki AI modullarini. API yaratadi, ma’lumot oqimini tuzadi, Three.js 3D vizualizatsiyasini integratsiya qiladi va prototipning barqaror ishlashini ta’minlaydi.",
    team_m2_name: "Muhammadyusuf Nuriddinov",
    team_m2_role: "Dizayn va matn · UX",
    team_m2_p: "Loyihaning umumiy vizual uslubini yaratadi, foydalanuvchi tajribasini shakllantiradi va barcha auditoriyalar uchun tushunarli matnlar yozadi. UI tuzilmasi, bo‘lim dizaynlari, o‘qish qulayligi va mahsulotning intuitiv ishlashini ta’minlaydi.",
    team_m3_name: "Zaynab Asad",
    team_m3_role: "Ingliz tili bo‘yicha menejer & Prezentatsiya spikeri",
    team_m3_p: "Jamoa g‘oyalarini aniq yetkazadi, ingliz tilida tuzilgan matnlarni tayyorlaydi va yakuniy taqdimotni olib boradi. Loyihaning maqsadi, muammo va yechimini hakamlar va foydalanuvchilarga tushunarli va ishonchli tarzda taqdim etishni ta’minlaydi",
    team_m4_name: "Azim Hamidov",
    team_m4_role: "Deevelopmen Bo‘yicha mutaxassis",
    team_m4_p: "Asosiy dasturlash jarayonlarini qo‘llab-quvvatlaydi: backend mantiği, ma’lumotlar tuzilmasi va tizim barqarorligi. Kod samaradorligini oshirish, prototipni sinovdan o‘tkazish va modul integratsiyasining to‘g‘ri ishlashini ta’minlaydi.",
    roadmap_tag: "Yo‘l xaritasi",
    roadmap_title: "G‘oyadan real servisgacha.",
    roadmap_sub: "AI500 biz uchun aniq g‘oyani ishchi mahsulotga aylantirish starti.",
    roadmap_s1_title: "G‘oya va tadqiqot",
    roadmap_s1_p: "Muammo miqyosini o‘rganish, mavjud manbalarni tahlil qilish va foydalanuvchilar bilan suhbat.",
    roadmap_s2_title: "Prototip (hozir)",
    roadmap_s2_p: "Ushbu demo sayt, ma’lumotlar tuzilmasi va dastlabki prognoz modeli.",
    roadmap_s3_title: "MVP",
    roadmap_s3_p: "Ma’lumot yig‘ish, bir nechta shaharlar uchun panel, oddiy AI tavsiyalari. Vebga joylash.",
    roadmap_s4_title: "Ishga tushirish",
    roadmap_s4_p: "Ogohlantirishlar, qamrovni kengaytirish, hamkorliklar va modellarning yaxshilanishi.",
    how_tag: "YONDASHUV",
    how_title: "UzAirSense’ni bosqichma-bosqich qanday qurmoqchimiz.",
    how_sub: "Avval AI500 uchun tushunarli demo, keyin esa haqiqiy API, Groq va FastAPI’ni bir tizimga ulaymiz.",

    how_col1_title: "Demo’dan real mahsulotgacha",
    how_l1: "1-bosqich (hozir): asosiy ishlash senariylari uchun realistik matn va dizaynga ega statik demo-sayt.",
    how_l2: "2-bosqich: havo sifati bo‘yicha live API’ni FastAPI backend’iga ulash va Toshkent hamda asosiy shaharlarda real AQI ko‘rsatish.",
    how_l3: "3-bosqich: Groq integratsiyasi orqali AQI sonlarini har kuni uch tilda oddiy tushunarli tavsiyalarga aylantirish.",
    how_l4: "4-bosqich: Three.js asosida 3D grafikalar, sodda ogohlantirishlar va shaharlarni solishtirish funksiyasini qo‘shish, so‘ngra public beta reliz qilish.",

    how_col2_title: "Nega bu yondashuv haqiqatda ishlaydi",
    how_col2_p:
    `Biz ishlatmoqchi bo‘lgan vositalar — FastAPI, Groq, Three.js va live AQ API’lar — allaqachon qo‘limizda.
    Shuning uchun rivojlanish yo‘li aniq, barqaror va amalga oshirish oson.

    ✔ Backend murakkab emas: barcha ma’lumotlar FastAPI orqali bir joyda jamlanadi  
    ✔ Kengaytirish oson: keyinchalik yangi shaharlar yoki sensorlarni qo‘shish mumkin  
    ✔ AI pipeline aniq: xom AQI → FastAPI → Groq → oddiy, tushunarli tavsiyalar  

    Maqsad — hammasini birdaniga qurish emas, avval ishlaydigan versiyani tez chiqarish va uni har hafta yaxshilab borish.`,


    try_tag: "1-bosqich",
    try_title: "Prototip tugmasi keyingi bosqichda ishlaydi.",
    try_sub: "Hozir biz uchun muammo, yechim va rejamizni aniq ko‘rsatish eng muhim.",
    try_btn: "Prototip — tez orada",
    try_note: "Hamma uchun ochiq, bepul va login talab qilmaydigan panel bo‘ladi.",
    footer_text: "UzAirSense · AI500 1-bosqich demo · Agrobank va IT Community of Uzbekistan",
    tech_tag: "TEXNOLOGIYA · AI · BACKEND",
    tech_title: "Bizning texnik stack: live API’dan 3D vizualgacha.",
    tech_sub: "UzAirSense markazida FastAPI backend turadi: u havo sifati API’lari, Groq LLM va Three.js frontendini bitta yaxlit tizimga bog‘laydi.",

    tech_box1_title: "FastAPI – markaziy backend qatlami",
    tech_box1_p1: "FastAPI tashqi havo sifati va ob-havo API’lari bilan gaplashadi, javoblarni tekshiradi va PM2.5, PM10, AQI, harorat va shamol kabi qiymatlarni bir xil formatga keltiradi.",
    tech_box1_p2: "Backend frontend uchun toza JSON API beradi, oddiy kesh, so‘rovlar cheklovi va Groq hamda 3D grafikalar uchun tayyorlangan ma’lumotlarni boshqaradi.",

    tech_box2_title: "Groq LLM – aqlli matn va izohlar",
    tech_box2_p1: "Faqat sonlarni ko‘rsatish o‘rniga, biz yig‘ilgan ma’lumotlarni Groq LLM’ga (Llama-3 / Mixtral) yuboramiz va ingliz, rus va o‘zbek tillarida qisqa, tushunarli tavsiyalar olamiz.",
    tech_box2_p2: "Backend xavfsiz promptlar, matn uzunligi chegaralari va sodda qoidalar orqali xabarlar O‘zbekistondagi foydalanuvchilar uchun sog‘liq, xavfsizlik va kundalik qarorlarga qaratilgan bo‘lishini ta’minlaydi.",

    tech_box3_title: "Three.js – 3D grafikalar va vizual qatlam",
    tech_box3_p1: "Frontend tomonda Three.js yordamida vaqt bo‘yicha ifloslanish ma’lumotlarini animatsiyali 3D grafikalar va mayin “tutun” effektlariga aylantiramiz.",
    tech_box3_p2: "Maqsad – foydalanuvchi faqat raqamlarni emas, balki kun davomida havo sifati qanday o‘zgarayotganini ko‘rishi, va bularning barchasi yengil, mobil uchun qulay WebGL tajribasi orqali.",

  }
};

function applyLanguage(lang) {
  const dict = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage("en");
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
});

/* =========================
   SCROLL REVEAL
   ========================= */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".card").forEach(card => observer.observe(card));

/* =========================
   THREE.JS GALAXY BACKGROUND
   ========================= */

const bgCanvas = document.getElementById("bg");
const renderer = new THREE.WebGLRenderer({ canvas: bgCanvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio || 1);
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x020617, 0.012);

const camera = new THREE.PerspectiveCamera(
  55,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
camera.position.set(0, 0, 80);

/* Starfield */

const starCount = 2600;
const starGeometry = new THREE.BufferGeometry();
const starPositions = new Float32Array(starCount * 3);
const starColors = new Float32Array(starCount * 3);
const color = new THREE.Color();

for (let i = 0; i < starCount; i++) {
  const r = 140;
  const x = (Math.random() - 0.5) * r;
  const y = (Math.random() - 0.5) * r * 0.7;
  const z = (Math.random() - 0.5) * r;
  starPositions[i * 3] = x;
  starPositions[i * 3 + 1] = y;
  starPositions[i * 3 + 2] = z;

  const mix = Math.random();
  color.setRGB(
    0.5 + 0.5 * mix,
    0.6 + 0.3 * mix,
    1
  );
  starColors[i * 3] = color.r;
  starColors[i * 3 + 1] = color.g;
  starColors[i * 3 + 2] = color.b;
}

starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));

const starMaterial = new THREE.PointsMaterial({
  size: 0.8,
  vertexColors: true,
  transparent: true,
  opacity: 0.9,
  depthWrite: false
});

const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

/* Nebula planes */

const nebulaGroup = new THREE.Group();
scene.add(nebulaGroup);

function makeNebula(radius, width, height, colorHex, yOffset) {
  const geo = new THREE.PlaneGeometry(width, height);
  const mat = new THREE.MeshBasicMaterial({
    color: colorHex,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  for (let i = 0; i < 4; i++) {
    const m = new THREE.Mesh(geo, mat.clone());
    const angle = (i / 4) * Math.PI * 2;
    m.position.set(Math.cos(angle) * radius, yOffset + (Math.random() - 0.5) * 10, Math.sin(angle) * radius * 0.6);
    m.rotation.z = Math.random() * Math.PI;
    nebulaGroup.add(m);
  }
}

makeNebula(30, 55, 30, 0x3b82f6, 6);
makeNebula(18, 32, 18, 0x22c55e, -4);
makeNebula(40, 70, 40, 0xa855f7, -12);

/* Subtle “galactic haze” behind hero */

const hazeGeo = new THREE.PlaneGeometry(80, 40);
const hazeMat = new THREE.MeshBasicMaterial({
  color: 0x1d4ed8,
  transparent: true,
  opacity: 0.55,
  blending: THREE.AdditiveBlending,
  depthWrite: false
});
const haze = new THREE.Mesh(hazeGeo, hazeMat);
haze.position.set(0, 0, -20);
scene.add(haze);

/* Animation */

let lastTime = 0;
function animateGalaxy(time) {
  requestAnimationFrame(animateGalaxy);
  const dt = (time - lastTime) * 0.001;
  lastTime = time;

  stars.rotation.y += dt * 0.02;
  stars.rotation.x += dt * 0.005;

  nebulaGroup.children.forEach((m, idx) => {
    m.rotation.z += dt * (0.05 + idx * 0.01);
    m.material.opacity = 0.25 + 0.45 * (0.5 + 0.5 * Math.sin(time * 0.0003 + idx));
  });

  haze.material.opacity = 0.4 + 0.2 * Math.sin(time * 0.0004);

  const scrollY = window.scrollY || 0;
  camera.position.y = -scrollY * 0.01;
  camera.lookAt(0, 0, 0);

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
}
animateGalaxy(0);

/* Resize */

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
