/* =========================================================================
   САМУРАЙСКИЕ НИТИ / samurai-threads-cash — КАТАЛОГ ПРЕДЛОЖЕНИЙ

   url: "#" — заглушка. Когда клиент пришлёт партнёрские ссылки,
   вписать их сюда — кнопка «Оформить» оживёт сама (app.js смотрит
   на url и добавляет target=_blank только настоящим ссылкам).

   ВАЖНО ПРО ЦИФРЫ: ставки, лимиты и сроки пишем только те, что
   подтверждены банком. Цифра «на глаз» — недостоверная реклама.
   ========================================================================= */

const SITE = {
  name: "САМУРАЙСКИЕ НИТИ",
  latin: "SAMURAI THREADS",
  domain: "samurai-threads-cash",
  updated: "26 августа 2026",
  updatedISO: "2026-08-26"
};

const CATEGORIES = [
  {
    id: "debit",
    label: "Дебетовые карты",
    kanji: "刀",
    desc: "Карты на каждый день: кешбэк, стикеры, доставка курьером."
  },
  {
    id: "credit",
    label: "Кредитные карты",
    kanji: "炎",
    desc: "Беспроцентный период, рассрочка и кешбэк на кредитный лимит."
  },
  {
    id: "loan",
    label: "Займы",
    kanji: "雷",
    desc: "Небольшие суммы онлайн — когда деньги нужны быстрее, чем решает банк."
  }
];

const OFFERS = [
  /* ---------- ДЕБЕТОВЫЕ ---------- */
  {
    id: "alfa-debit",
    brand: "Альфа-Банк",
    title: "Альфа-карта с кешбэком",
    cat: "debit",
    logo: "alfa.svg",
    mono: "А",
    chips: ["Онлайн-заявка", "Доставка курьером", "Кешбэк"],
    url: "#"
  },
  {
    id: "ozon-debit",
    brand: "Ozon Банк",
    title: "Ozon Карта",
    cat: "debit",
    logo: "ozon.svg",
    mono: "OZ",
    chips: ["Онлайн-заявка", "Кешбэк на Ozon"],
    url: "#"
  },
  {
    id: "tbank-black",
    brand: "ТБанк",
    title: "Дебетовая карта Black",
    cat: "debit",
    logo: "tbank.svg",
    mono: "Т",
    chips: ["Онлайн-заявка", "Доставка курьером", "Кешбэк"],
    url: "#"
  },
  {
    id: "vtb-debit-mir",
    brand: "ВТБ",
    title: "Дебетовая карта «Мир»",
    cat: "debit",
    logo: "vtb.svg",
    mono: "ВТБ",
    chips: ["Онлайн-заявка", "Платёжная система «Мир»"],
    url: "#"
  },
  {
    id: "vtb-sticker",
    brand: "ВТБ",
    title: "Платёжный стикер",
    cat: "debit",
    logo: "vtb.svg",
    mono: "ВТБ",
    chips: ["Оплата телефоном", "Без пластиковой карты"],
    url: "#"
  },
  {
    id: "sovcom-debit",
    brand: "Совкомбанк",
    title: "Дебетовая карта с кешбэком",
    cat: "debit",
    logo: "sovcom.svg",
    mono: "С",
    chips: ["Онлайн-заявка", "Кешбэк"],
    url: "#"
  },
  {
    id: "otp-debit",
    brand: "ОТП Банк",
    title: "ОТП Карта",
    cat: "debit",
    logo: "otp.png",
    mono: "ОТП",
    chips: ["Онлайн-заявка", "Доставка курьером"],
    url: "#"
  },
  {
    id: "psb-debit",
    brand: "ПСБ",
    title: "Дебетовая карта «Твой кешбэк»",
    cat: "debit",
    logo: "psbank.png",
    mono: "ПСБ",
    chips: ["Онлайн-заявка", "Кешбэк"],
    url: "#"
  },
  {
    id: "akbars-debit",
    brand: "Ак Барс Банк",
    title: "Карта «Ничего лишнего»",
    cat: "debit",
    logo: "akbars.png",
    mono: "АБ",
    chips: ["Онлайн-заявка", "Без лишних условий"],
    url: "#"
  },
  {
    id: "ubrr-debit",
    brand: "УБРиР",
    title: "Дебетовая карта «Моя жизнь»",
    cat: "debit",
    logo: "ubrr.png",
    mono: "У",
    chips: ["Онлайн-заявка", "Кешбэк"],
    url: "#"
  },
  {
    id: "uralsib-debit",
    brand: "Уралсиб",
    title: "Дебетовая карта «Прибыль»",
    cat: "debit",
    logo: "uralsib.png",
    mono: "УС",
    chips: ["Онлайн-заявка", "Кешбэк"],
    url: "#"
  },
  {
    id: "fora-debit",
    brand: "Фора-Банк",
    title: "Карта «Всё включено»",
    cat: "debit",
    logo: "forabank.png",
    mono: "Ф",
    chips: ["Платёжная система «Мир»", "Повышенный кешбэк"],
    url: "#"
  },

  /* ---------- КРЕДИТНЫЕ ---------- */
  {
    id: "alfa-credit",
    brand: "Альфа-Банк",
    title: "Кредитная карта",
    cat: "credit",
    logo: "alfa.svg",
    mono: "А",
    chips: ["Онлайн-решение", "Доставка курьером"],
    url: "#"
  },
  {
    id: "tbank-platinum",
    brand: "ТБанк",
    title: "Кредитная карта Platinum",
    cat: "credit",
    logo: "tbank.svg",
    mono: "Т",
    chips: ["Онлайн-решение", "Доставка курьером"],
    url: "#"
  },
  {
    id: "vtb-credit",
    brand: "ВТБ",
    title: "Кредитная карта",
    cat: "credit",
    logo: "vtb.svg",
    mono: "ВТБ",
    chips: ["Онлайн-заявка", "Беспроцентный период"],
    url: "#"
  },
  {
    id: "otp-120",
    brand: "ОТП Банк",
    title: "Кредитная карта «120 дней без %»",
    cat: "credit",
    logo: "otp.png",
    mono: "ОТП",
    chips: ["120 дней без процентов", "Онлайн-заявка"],
    url: "#"
  },
  {
    id: "halva",
    brand: "Совкомбанк",
    title: "Карта рассрочки «Халва»",
    cat: "credit",
    logo: "halva.png",
    mono: "Х",
    chips: ["Рассрочка у партнёров", "Онлайн-заявка"],
    url: "#"
  },
  {
    id: "zenit-credit",
    brand: "Банк Зенит",
    title: "Кредитная карта с кешбэком",
    cat: "credit",
    logo: "zenit.png",
    mono: "З",
    chips: ["Онлайн-заявка", "Кешбэк"],
    url: "#"
  },
  {
    id: "crediteurope-urban",
    brand: "Кредит Европа Банк",
    title: "Кредитная карта Urban",
    cat: "credit",
    logo: "crediteurope.svg",
    mono: "КЕ",
    chips: ["Онлайн-заявка", "Рассрочка у партнёров"],
    url: "#"
  },
  {
    id: "rencredit-365",
    brand: "Ренессанс Банк",
    title: "Кредитная карта 365",
    cat: "credit",
    logo: "renaissance.svg",
    mono: "Р",
    chips: ["Онлайн-заявка", "Кешбэк"],
    url: "#"
  },

  /* ---------- ЗАЙМЫ ---------- */
  {
    id: "moneyman",
    brand: "Moneyman",
    title: "Займ онлайн",
    cat: "loan",
    logo: "moneyman.png",
    mono: "M",
    chips: ["Онлайн-заявка", "Деньги на карту"],
    url: "#"
  },
  {
    id: "ekapusta",
    brand: "еКапуста",
    title: "Займ онлайн",
    cat: "loan",
    logo: "ekapusta.png",
    mono: "К",
    chips: ["Онлайн-заявка", "Первый займ без процентов"],
    url: "#"
  },
  {
    id: "zaymer",
    brand: "Займер",
    title: "Займ онлайн",
    cat: "loan",
    logo: "zaymer.png",
    mono: "З",
    chips: ["Онлайн-заявка", "Деньги на карту"],
    url: "#"
  },
  {
    id: "webbankir",
    brand: "Веббанкир",
    title: "Займ онлайн",
    cat: "loan",
    logo: "webbankir.png",
    mono: "В",
    chips: ["Онлайн-заявка", "Деньги на карту"],
    url: "#"
  },
  {
    id: "limezaim",
    brand: "Лайм-Займ",
    title: "Займ онлайн",
    cat: "loan",
    logo: "limezaim.png",
    mono: "Л",
    chips: ["Онлайн-заявка", "Деньги на карту"],
    url: "#"
  },
  {
    id: "turbozaim",
    brand: "Турбозайм",
    title: "Займ онлайн",
    cat: "loan",
    logo: "turbozaim.png",
    mono: "Т",
    chips: ["Онлайн-заявка", "Деньги на карту"],
    url: "#"
  },
  {
    id: "dozarplati",
    brand: "До зарплаты",
    title: "Займ онлайн",
    cat: "loan",
    logo: "dozarplati.png",
    mono: "ДЗ",
    chips: ["Онлайн-заявка", "Деньги на карту"],
    url: "#"
  },
  {
    id: "migcredit",
    brand: "МигКредит",
    title: "Займ онлайн",
    cat: "loan",
    logo: "migcredit.png",
    mono: "МК",
    chips: ["Онлайн-заявка", "Деньги на карту"],
    url: "#"
  },
  {
    id: "bistrodengi",
    brand: "Быстроденьги",
    title: "Займ онлайн",
    cat: "loan",
    logo: "bistrodengi.png",
    mono: "БД",
    chips: ["Онлайн-заявка", "Деньги на карту"],
    url: "#"
  },
  {
    id: "srochnodengi",
    brand: "Срочноденьги",
    title: "Займ онлайн",
    cat: "loan",
    logo: "srochnodengi.svg",
    mono: "СД",
    chips: ["Онлайн-заявка", "Деньги на карту"],
    url: "#"
  },
  {
    id: "denginadom",
    brand: "Деньги на дом",
    title: "Займ с доставкой на дом",
    cat: "loan",
    logo: "denginadom.png",
    mono: "ДН",
    chips: ["Курьер привозит деньги", "Онлайн-заявка"],
    url: "#"
  },
  {
    id: "maxcredit",
    brand: "Maxcredit",
    title: "Займ онлайн",
    cat: "loan",
    logo: "maxcredit.png",
    mono: "MX",
    chips: ["Онлайн-заявка", "Деньги на карту"],
    url: "#"
  }
];
