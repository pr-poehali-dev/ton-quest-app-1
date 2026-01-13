export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Как расшифровывается TON?",
    answers: ["The Open Network", "Token Operation Network", "Total Online Network", "Tech Of Network"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "basics"
  },
  {
    id: 2,
    question: "Кто является создателем TON блокчейна?",
    answers: ["Виталик Бутерин", "Павел Дуров", "Сатоши Накамото", "Чарльз Хоскинсон"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "history"
  },
  {
    id: 3,
    question: "В каком году был запущен проект TON?",
    answers: ["2016", "2018", "2020", "2021"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "history"
  },
  {
    id: 4,
    question: "Как называется криптовалюта в блокчейне TON?",
    answers: ["TON Coin", "Toncoin", "TON Token", "The Open Coin"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "basics"
  },
  {
    id: 5,
    question: "Какой мессенджер интегрирован с TON?",
    answers: ["WhatsApp", "Signal", "Telegram", "Viber"],
    correctAnswer: 2,
    difficulty: "easy",
    category: "integration"
  },
  {
    id: 6,
    question: "Какой язык программирования используется для написания смарт-контрактов в TON?",
    answers: ["Solidity", "FunC", "Rust", "JavaScript"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "development"
  },
  {
    id: 7,
    question: "Что такое TVM в контексте TON?",
    answers: ["TON Virtual Machine", "Total Value Management", "Token Validation Method", "Technical Value Meter"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 8,
    question: "Сколько максимально шардов может быть в TON?",
    answers: ["64", "128", "256", "2^60"],
    correctAnswer: 3,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 9,
    question: "Как называется кошелёк для TON, разработанный командой Telegram?",
    answers: ["MetaMask", "Tonkeeper", "Trust Wallet", "Telegram Wallet"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "tools"
  },
  {
    id: 10,
    question: "Что представляет собой TON DNS?",
    answers: ["Систему доменных имён", "Протокол безопасности", "Алгоритм консенсуса", "Язык программирования"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "features"
  },
  {
    id: 11,
    question: "Какой алгоритм консенсуса используется в TON?",
    answers: ["Proof of Work", "Proof of Stake", "Byzantine Fault Tolerant", "Delegated Proof of Stake"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 12,
    question: "В каком году Павел Дуров основал Telegram?",
    answers: ["2011", "2013", "2015", "2017"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "history"
  },
  {
    id: 13,
    question: "Что означает понятие 'sharding' в TON?",
    answers: ["Разделение блокчейна на части для масштабирования", "Создание новых токенов", "Процесс майнинга", "Механизм голосования"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 14,
    question: "Какая максимальная скорость обработки транзакций в TON?",
    answers: ["1000 TPS", "10,000 TPS", "100,000 TPS", "Миллионы TPS"],
    correctAnswer: 3,
    difficulty: "medium",
    category: "performance"
  },
  {
    id: 15,
    question: "Как называется официальный браузер для TON сайтов?",
    answers: ["TON Browser", "Chrome TON", "TON Surf", "TON Explorer"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "tools"
  },
  {
    id: 16,
    question: "Что такое TON Storage?",
    answers: ["Децентрализованное хранилище файлов", "Кошелёк для криптовалюты", "Протокол обмена", "Смарт-контракт"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "features"
  },
  {
    id: 17,
    question: "Какой тип архитектуры использует TON?",
    answers: ["Однослойная", "Двухслойная", "Многослойная", "Бесслойная"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 18,
    question: "Что такое TON Proxy?",
    answers: ["Сервис анонимизации", "Кошелёк", "Биржа", "Майнер"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "features"
  },
  {
    id: 19,
    question: "Какой формат используется для адресов в TON?",
    answers: ["Base58", "Base64", "Hexadecimal", "Bech32"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 20,
    question: "Когда SEC обязала Telegram прекратить разработку TON?",
    answers: ["2018", "2019", "2020", "2021"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 21,
    question: "Что такое Masterchain в TON?",
    answers: ["Основная цепь координации", "Тип токена", "Протокол обмена", "Кошелёк"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 22,
    question: "Как называется язык для описания типов данных в TON?",
    answers: ["TL", "TL-B", "FunC", "Fift"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "development"
  },
  {
    id: 23,
    question: "Что такое TON Payments?",
    answers: ["Система микроплатежей", "Кошелёк", "Биржа", "Стейкинг"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "features"
  },
  {
    id: 24,
    question: "Какую должность занимал Павел Дуров в ВКонтакте?",
    answers: ["CEO", "CTO", "CFO", "CMO"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "history"
  },
  {
    id: 25,
    question: "В каком году Павел Дуров покинул Россию?",
    answers: ["2012", "2014", "2016", "2018"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 26,
    question: "Что такое Fift в экосистеме TON?",
    answers: ["Язык ассемблера для TVM", "Кошелёк", "Протокол", "Биржа"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "development"
  },
  {
    id: 27,
    question: "Какой минимальный баланс нужен для работы смарт-контракта в TON?",
    answers: ["0.01 TON", "0.1 TON", "1 TON", "Нет минимума"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 28,
    question: "Что означает термин 'workchain' в TON?",
    answers: ["Независимая цепь с своими правилами", "Процесс майнинга", "Тип кошелька", "Алгоритм шифрования"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 29,
    question: "Какое гражданство получил Павел Дуров?",
    answers: ["США", "Франция", "ОАЭ", "Сент-Китс и Невис"],
    correctAnswer: 3,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 30,
    question: "Что такое TON Sites?",
    answers: ["Децентрализованные веб-сайты", "Биржа", "Кошелёк", "Майнер"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "features"
  },
  {
    id: 31,
    question: "Сколько Telegram вернул инвесторам после запрета SEC?",
    answers: ["1 млрд $", "1.2 млрд $", "1.7 млрд $", "2 млрд $"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "history"
  },
  {
    id: 32,
    question: "Как называется тестовая сеть TON?",
    answers: ["TestTON", "TON Testnet", "Sandbox", "DevNet"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "development"
  },
  {
    id: 33,
    question: "Что такое NFT в экосистеме TON?",
    answers: ["Невзаимозаменяемые токены", "Новый тип транзакции", "Протокол обмена", "Алгоритм"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "features"
  },
  {
    id: 34,
    question: "Какой компонент TON отвечает за хранение файлов?",
    answers: ["TON Storage", "TON Files", "TON Archive", "TON Keeper"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "features"
  },
  {
    id: 35,
    question: "Что такое Jetton в TON?",
    answers: ["Стандарт токенов", "Кошелёк", "Протокол", "Биржа"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 36,
    question: "Какой механизм используется для предотвращения спама в TON?",
    answers: ["Комиссия за транзакцию", "Proof of Work", "Captcha", "KYC"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 37,
    question: "Что означает '.ton' домен?",
    answers: ["Доменное имя в TON DNS", "Расширение файла", "Тип токена", "Протокол"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "features"
  },
  {
    id: 38,
    question: "Сколько лет Павлу Дурову? (на 2024 год)",
    answers: ["37", "39", "40", "42"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 39,
    question: "Что такое validator в TON?",
    answers: ["Узел, подтверждающий транзакции", "Кошелёк", "Биржа", "Токен"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 40,
    question: "Какой минимальный стейк нужен для валидатора TON?",
    answers: ["10,000 TON", "100,000 TON", "300,000 TON", "1,000,000 TON"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 41,
    question: "Что такое TON Bridge?",
    answers: ["Мост между блокчейнами", "Кошелёк", "Биржа", "Майнер"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "features"
  },
  {
    id: 42,
    question: "Какой университет окончил Павел Дуров?",
    answers: ["МГУ", "МФТИ", "СПбГУ", "МИФИ"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 43,
    question: "Что такое TON Connect?",
    answers: ["Протокол подключения к dApps", "Кошелёк", "Биржа", "Браузер"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "development"
  },
  {
    id: 44,
    question: "Какая комиссия за перевод в сети TON?",
    answers: ["~0.01 $", "~0.001 $", "~0.1 $", "~1 $"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 45,
    question: "Что такое TON Diamonds?",
    answers: ["Система наград в Telegram", "Токен", "NFT коллекция", "Игра"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "integration"
  },
  {
    id: 46,
    question: "Какой блок time в TON?",
    answers: ["5 секунд", "10 секунд", "30 секунд", "1 минута"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 47,
    question: "Что такое TON API?",
    answers: ["Интерфейс для разработчиков", "Кошелёк", "Биржа", "Протокол"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "development"
  },
  {
    id: 48,
    question: "Какой браузер поддерживает TON Sites нативно?",
    answers: ["Chrome", "Firefox", "TON Browser", "Safari"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "tools"
  },
  {
    id: 49,
    question: "Что такое TON Wallet?",
    answers: ["Кошелёк для Toncoin", "Биржа", "Протокол", "Браузер"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "tools"
  },
  {
    id: 50,
    question: "Какой тип криптографии использует TON?",
    answers: ["ECC", "RSA", "AES", "DSA"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 51,
    question: "Где находится штаб-квартира Telegram?",
    answers: ["США", "Дубай", "Берлин", "Лондон"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "history"
  },
  {
    id: 52,
    question: "Сколько пользователей у Telegram на 2024 год?",
    answers: ["500 млн", "700 млн", "900 млн", "1 млрд+"],
    correctAnswer: 2,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 53,
    question: "Что такое TON Jetton Wallet?",
    answers: ["Кошелёк для пользовательских токенов", "Биржа", "NFT маркетплейс", "Майнер"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "tools"
  },
  {
    id: 54,
    question: "Как называется стандарт NFT в TON?",
    answers: ["ERC-721", "TRC-721", "TEP-62", "NFT-TON"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 55,
    question: "Что такое lite-client в TON?",
    answers: ["Легковесный клиент для взаимодействия с блокчейном", "Кошелёк", "Биржа", "Протокол"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "development"
  },
  {
    id: 56,
    question: "Какой язык использует Павел Дуров для общения?",
    answers: ["Только русский", "Только английский", "Русский и английский", "Несколько языков"],
    correctAnswer: 3,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 57,
    question: "Что такое TON меседжи?",
    answers: ["Сообщения между смарт-контрактами", "Чат в Telegram", "Email сервис", "Уведомления"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 58,
    question: "Какой размер блока в TON?",
    answers: ["1 MB", "Динамический", "10 MB", "Нет ограничения"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 59,
    question: "Что такое TON nominators?",
    answers: ["Делегаторы стейка валидаторам", "Кошельки", "Токены", "Контракты"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 60,
    question: "Как называется встроенный кошелёк Telegram?",
    answers: ["TON Wallet", "Telegram Wallet", "Tonkeeper", "TON Space"],
    correctAnswer: 1,
    difficulty: "easy",
    category: "tools"
  },
  {
    id: 61,
    question: "Что такое TON Smart Contract Gas?",
    answers: ["Комиссия за выполнение контракта", "Токен", "Кошелёк", "Протокол"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 62,
    question: "Какой первый проект запустился на TON после возобновления?",
    answers: ["TON Diamonds", "TON Surf", "Newton", "TON Foundation"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "history"
  },
  {
    id: 63,
    question: "Что такое bag of cells в TON?",
    answers: ["Структура данных для хранения", "Токен", "Кошелёк", "Протокол обмена"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 64,
    question: "Как часто происходят выборы валидаторов в TON?",
    answers: ["Каждый час", "Каждые 18 часов", "Каждый день", "Каждую неделю"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 65,
    question: "Что такое TON Bounced Messages?",
    answers: ["Возвращённые сообщения при ошибке", "Тип токена", "Протокол", "Кошелёк"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 66,
    question: "Сколько стоил ICO токен Gram?",
    answers: ["0.37 $", "1 $", "5 $", "10 $"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 67,
    question: "Что такое TON Elector?",
    answers: ["Смарт-контракт выбора валидаторов", "Кошелёк", "Биржа", "Токен"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 68,
    question: "Какой эксплорер используется для TON?",
    answers: ["Etherscan", "Tonscan", "Tonviewer", "Оба варианта 2 и 3"],
    correctAnswer: 3,
    difficulty: "medium",
    category: "tools"
  },
  {
    id: 69,
    question: "Что такое TON Config?",
    answers: ["Конфигурационные параметры сети", "Кошелёк", "Токен", "Биржа"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 70,
    question: "Какую роль играет masterchain в TON?",
    answers: ["Координирует все workchains", "Хранит токены", "Майнит блоки", "Проводит KYC"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 71,
    question: "Что такое TON Fragment?",
    answers: ["Маркетплейс для номеров и доменов", "Кошелёк", "Биржа", "NFT коллекция"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "features"
  },
  {
    id: 72,
    question: "Какой самый дорогой TON домен был продан?",
    answers: ["ton.ton", "wallet.ton", "crypto.ton", "telegram.ton"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 73,
    question: "Что такое TON Getgems?",
    answers: ["NFT маркетплейс", "Кошелёк", "Биржа", "Игра"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "tools"
  },
  {
    id: 74,
    question: "Какой минимум для создания смарт-контракта?",
    answers: ["0.01 TON", "0.05 TON", "0.1 TON", "1 TON"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "technical"
  },
  {
    id: 75,
    question: "Что такое TON Labs?",
    answers: ["Команда разработчиков TON", "Кошелёк", "Биржа", "Токен"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 76,
    question: "Какой максимальный TPS достигнут в тестах TON?",
    answers: ["10,000", "100,000", "1,000,000", "55,000"],
    correctAnswer: 3,
    difficulty: "hard",
    category: "performance"
  },
  {
    id: 77,
    question: "Что такое TON Mempool?",
    answers: ["Нет мемпула в классическом понимании", "Очередь транзакций", "Тип токена", "Кошелёк"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 78,
    question: "Какой брат Павла работал с ним над VK?",
    answers: ["Николай", "Алексей", "Дмитрий", "Иван"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 79,
    question: "Что такое TON Subscriptions?",
    answers: ["Регулярные автоплатежи", "Токены", "NFT", "Биржа"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "features"
  },
  {
    id: 80,
    question: "Как называется основной токен стандарт в TON?",
    answers: ["Jetton", "Token", "Coin", "Asset"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "technical"
  },
  {
    id: 81,
    question: "Что такое TON Nominator Pool?",
    answers: ["Пул для коллективного стейкинга", "Биржа", "Кошелёк", "NFT"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "features"
  },
  {
    id: 82,
    question: "Какой университет назван в честь отца Павла Дурова?",
    answers: ["МГУ", "ИТМО", "СПбГУ", "МФТИ"],
    correctAnswer: 2,
    difficulty: "hard",
    category: "history"
  },
  {
    id: 83,
    question: "Что такое TON Instant Hypercube Routing?",
    answers: ["Алгоритм маршрутизации сообщений", "Токен", "Кошелёк", "Протокол"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 84,
    question: "Какой процент комиссии берёт TON Fragment?",
    answers: ["2.5%", "5%", "7.5%", "10%"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "features"
  },
  {
    id: 85,
    question: "Что такое TON Catchain?",
    answers: ["Протокол консенсуса валидаторов", "Токен", "Кошелёк", "Игра"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 86,
    question: "Сколько Toncoin было создано изначально?",
    answers: ["5 млрд", "10 млрд", "Нет лимита", "1 млрд"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 87,
    question: "Что такое TON Liteserver?",
    answers: ["Лёгкий сервер для доступа к блокчейну", "Кошелёк", "Биржа", "Токен"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 88,
    question: "Какая награда за блок для валидаторов?",
    answers: ["Фиксированная", "Динамическая из комиссий", "Нет награды", "100 TON"],
    correctAnswer: 1,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 89,
    question: "Что такое TON Anonymous Numbers?",
    answers: ["Виртуальные номера в Telegram", "Токены", "Кошельки", "Контракты"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "features"
  },
  {
    id: 90,
    question: "Какой язык программирования знает Павел Дуров?",
    answers: ["C++", "Python", "Pascal", "Все перечисленные"],
    correctAnswer: 3,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 91,
    question: "Что такое TON Cell?",
    answers: ["Базовая единица хранения данных", "Токен", "Кошелёк", "Протокол"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 92,
    question: "Какой максимальный размер Cell в TON?",
    answers: ["1023 бита", "2048 бит", "4096 бит", "Без ограничений"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 93,
    question: "Что такое TON Infinite Sharding Paradigm?",
    answers: ["Автоматическое разделение на шарды", "Токен", "Кошелёк", "Биржа"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 94,
    question: "Как называется кошелёк от TON Foundation?",
    answers: ["Tonkeeper", "TON Wallet", "Tonhub", "MyTonWallet"],
    correctAnswer: 0,
    difficulty: "easy",
    category: "tools"
  },
  {
    id: 95,
    question: "Что такое TON DHT?",
    answers: ["Децентрализованная хеш-таблица", "Токен", "Кошелёк", "Протокол обмена"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 96,
    question: "Сколько лет Николаю Дурову?",
    answers: ["Старше Павла", "Моложе Павла", "Близнецы", "Ровесники"],
    correctAnswer: 0,
    difficulty: "medium",
    category: "history"
  },
  {
    id: 97,
    question: "Что такое TON ADNL?",
    answers: ["Abstract Datagram Network Layer", "Токен", "Кошелёк", "Биржа"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 98,
    question: "Какой процент APY для стейкинга TON?",
    answers: ["2-4%", "5-7%", "10-15%", "Варьируется"],
    correctAnswer: 3,
    difficulty: "medium",
    category: "features"
  },
  {
    id: 99,
    question: "Что такое TON Overlay Networks?",
    answers: ["Подсети для приватного общения", "Токены", "Кошельки", "Биржи"],
    correctAnswer: 0,
    difficulty: "hard",
    category: "technical"
  },
  {
    id: 100,
    question: "Какой самый популярный DEX на TON?",
    answers: ["Uniswap", "DeDust", "PancakeSwap", "SushiSwap"],
    correctAnswer: 1,
    difficulty: "medium",
    category: "tools"
  }
];