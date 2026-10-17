// ===== ЭМОДЗИ ПО КАТЕГОРИЯМ =====
const EMOJI_CATEGORIES = {
  '💰 Финансы': ['💰','💵','💸','💳','🪙','💎','🏦','📊','📈','📉','💲','🤑','💷','💶','💴','🧧','🎫','🎟️','🏧','💹','💼'],
  '🍔 Еда': ['🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥','🥑','🍆','🥔','🥕','🌽','🌶️','🫑','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🫓','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🫔','🥙','🧆','🥚','🍳','🥘','🍲','🫕','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🦀','🦞','🦐','🦑','🐟','🐠','🐡','🦈','🐙','🐚','🧁','🍰','🥧','🍦','🍧','🍨','🍩','🍪','🎂','🍫','🍬','🍭','🍮','🍯','🍾','🧃','🥤','🧋','🍶','🍺','🍻','🥂','🍷','🥃','🍸','🍹','🧊','🥄','🍴','🍽️'],
  '🚗 Транспорт': ['🚗','🚕','🚌','🚎','🚐','🚑','🚒','🚓','🚔','🚖','🚘','🚙','🚚','🚛','🚜','🛴','🛵','🛹','🛼','🦽','🦼','🛺','✈️','🛩️','🛫','🛬','🚀','🛸','🛰️','🚁','⛵','🛥️','🛳️','⛴️','🚢','🚤','⛽','🚦','🚧','⚓','🚂','🚃','🚄','🚅','🚆','🚇','🚈','🚉','🚊','🚝','🚞','🚟','🚠','🚡','🛤️','🛣️','🚲','🚴','🚵','🏍️'],
  '🏠 Дом': ['🏠','🏡','🏘️','🏚️','🏗️','🏭','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏯','🏰','💒','🗼','🗽','⛪','🕌','🛕','🕍','⛩️','🕋','⛲','⛺','🌁','🌃','🌄','🌅','🌆','🌇','🌉','🎠','🎡','🎢','🪑','🛋️','🛏️','🛌','🚽','🚿','🛁','🧴','🧹','🧺','🧻','🧼','🧽','🧯'],
  '📱 Техника': ['📱','📲','💻','⌨️','🖥️','🖨️','🖱️','🖲️','💽','💾','💿','📀','🎥','📹','📼','🔍','🔎','🖋️','🖊️','🖌️','🖍️','📝','🔨','🪓','⛏️','⚒️','🛠️','🔩','⚙️','🗜️','🔧','🎤','🎧','🎼','🎹','🎷','🎺','🎸','🪕','🎻','🥁'],
  '👕 Одежда': ['👕','👖','👗','👘','👙','👚','👛','👜','👝','🛍️','🎒','👞','👟','🥾','🥿','👠','👡','👢','👑','👒','🎩','🎓','🧢','⛑️','💄','💋','👄','🧣','🧤','🧥','🧦'],
  '⚽ Спорт': ['⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🥏','🎱','🪀','🏓','🏸','🏒','🏑','🥍','🏏','🎿','⛷','🏂','🪂','🏋️','🤼','🤸','⛹️','🤾','🏌️','🏇','🧘','🏄','🏊','🤽','🚣','🏹','🎯','🎮','🎰','🎲','🧩','🧸','🎪','🎨','🎭','🎵','🎶'],
  '😀 Смайлы': ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰','😗','😙','😚','☺️','🙂','🤗','🤩','🤔','🤨','😐','😑','😶','🙄','😏','😣','😥','😮','🤐','😯','😪','😫','😴','😌','😛','😜','😝','🤤','😒','😓','😔','😕','🙃','🤑','😲','☹️','🙁','😖','😞','😟','😤','😢','😭','😦','😧','😨','😩','🤯','😬','😰','😱','🥵','🥶','😳','🤪','😵','😡','😠','🤬','😷','🤒','🤕','🤢','🤮','🤧','🥴','😇','🤠','🤡','🥳','🥺','🤥','🤫','🤭','🧐','🤓'],
  '🌟 Символы': ['🌟','🔥','❤️','💙','💚','💛','💜','🎉','🎊','✨','⭐','🌈','❄️','🌸','🌺','🍀','🎄','🎃','🎈','🎁','💀','☠️','👻','👽','👾','🤖','💩','🩺','💉','💊','🩹','🩼','📋','📌','📍','📎','🖇️','📏','📐','✂️','🗑️','🔒','🔓','🔏','🔐','🔑','🗝️','⚖️','🔗','⛓️','🪝','🧰','🧲'],
  '🐶 Животные': ['🐶','🐕','🦮','🐕‍🦺','🐩','🐺','🦊','🦝','🐱','🐈','🐈‍⬛','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿️','🦔','🦇','🐻','🐻‍❄️','🐨','🐼','🦥','🦦','🦨','🦘','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦','🦅','🦆','🦢','🦉','🦩','🕊️','🐧','🐝','🪲','🐞','🦗','🦟','🪰','🪱','🐜','🐛','🐌','🦋'],
  '👤 Люди': ['🧍','🧍‍♂️','🧍‍♀️','🧎','🧎‍♂️','🧎‍♀️','🚶','🚶‍♂️','🚶‍♀️','🏃','🏃‍♂️','🏃‍♀️','💃','🕺','🕴️','👯','👯‍♂️','👯‍♀️','🧖','🧖‍♂️','🧖‍♀️','🧗','🧗‍♂️','🧗‍♀️','👮','👮‍♂️','👮‍♀️','🕵️','🕵️‍♂️','🕵️‍♀️','💂','💂‍♂️','💂‍♀️','👷','👷‍♂️','👷‍♀️','👨‍⚕️','👩‍⚕️','👨‍🎓','👩‍🎓','👨‍🏫','👩‍🏫','👨‍⚖️','👩‍⚖️','👨‍🌾','👩‍🌾','👨‍🍳','👩‍🍳','👨‍🔧','👩‍🔧','👨‍🏭','👩‍🏭','👨‍💼','👩‍💼','👨‍🔬','👩‍🔬','👨‍💻','👩‍💻','👨‍🎤','👩‍🎤','👨‍🎨','👩‍🎨','👨‍✈️','👩‍✈️','👨‍🚀','👩‍🚀','👨‍🚒','👩‍🚒','🤰','🤱','👩‍🍼','👨‍🍼','🧑‍🍼','🧏','🧏‍♂️','🧏‍♀️','🙋','🙋‍♂️','🙋‍♀️','🙆','🙆‍♂️','🙆‍♀️','🙅','🙅‍♂️','🙅‍♀️','🙍','🙍‍♂️','🙍‍♀️','🙎','🙎‍♂️','🙎‍♀️','🙇','🙇‍♂️','🙇‍♀️','🤦','🤦‍♂️','🤦‍♀️','🤷','🤷‍♂️','🤷‍♀️','🚴','🚴‍♂️','🚴‍♀️','🚵','🚵‍♂️','🚵‍♀️','🤸','🤸‍♂️','🤸‍♀️','🤼','🤼‍♂️','🤼‍♀️','🤽','🤽‍♂️','🤽‍♀️','🤾','🤾‍♂️','🤾‍♀️','🤹','🤹‍♂️','🤹‍♀️','🏋️','🏋️‍♂️','🏋️‍♀️','🛀','🛀‍♂️','🛀‍♀️','🧘','🧘‍♂️','🧘‍♀️','🏄','🏄‍♂️','🏄‍♀️','🏊','🏊‍♂️','🏊‍♀️','⛹️','⛹️‍♂️','⛹️‍♀️','🏇','🧗','🧗‍♂️','🧗‍♀️','👋','🤚','🖐️','✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','👈','👉','👆','🖕','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦵','🦿','🦶','👣','👂','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','😈','👿','👹','👺','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','🎅','🤶','🧑‍🎄','🦸','🦸‍♂️','🦸‍♀️','🦹','🦹‍♂️','🦹‍♀️','🧙','🧙‍♂️','🧙‍♀️','🧚','🧚‍♂️','🧚‍♀️','🧛','🧛‍♂️','🧛‍♀️','🧜','🧜‍♂️','🧜‍♀️','🧝','🧝‍♂️','🧝‍♀️','🧞','🧞‍♂️','🧞‍♀️','🧟','🧟‍♂️','🧟‍♀️','👨‍👩‍👦','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👦','👨‍👦‍👦','👨‍👧','👨‍👧‍👦','👨‍👧‍👧','👩‍👦','👩‍👦‍👦','👩‍👧','👩‍👧‍👦','👩‍👧‍👧','👩‍❤️‍👨','👩‍❤️‍👩','👨‍❤️‍👨','👩‍❤️‍💋‍👨','👩‍❤️‍💋‍👩','👨‍❤️‍💋‍👨','💏','💑','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧']
};

const ALL_EMOJIS_FLAT = Object.values(EMOJI_CATEGORIES).flat();

// ===== ПЕРЕВОДЫ =====
const translations = {
  ru: {
    totalBalance: 'Общий баланс', myAccounts: 'Мои счета', debts: 'Долги', growth: 'Прирост',
    income: 'Доходы', expense: 'Расходы', expenses: 'Расходы', incomes: 'Доходы',
    transactions: 'Транзакции', newTransaction: '➕ Новая транзакция', transfer: 'Перевод',
    fromAccount: 'Со счета', toAccount: 'На счет', save: '💾 Сохранить', budgets: 'Бюджеты',
    settings: 'Настройки', profile: 'Профиль', accounts: 'Счета', goals: 'Цели',
    language: 'Язык', currency: 'Валюта', theme: 'Тема', categories: 'Категории',
    userName: 'Имя пользователя', iOwe: 'Я должен', owedToMe: 'Мне должны', paid: 'Погашенные',
    allAccounts: 'Все счета', period: 'Период', month: 'Месяц', year: 'Год',
    greeting_morning: 'Доброе утро', greeting_day: 'Добрый день',
    greeting_evening: 'Добрый вечер', greeting_night: 'Доброй ночи',
    aiPlaceholder: 'Спросить совет...', aiSend: 'Отправить'
  },
  en: {
    totalBalance: 'Total Balance', myAccounts: 'My Accounts', debts: 'Debts', growth: 'Growth',
    income: 'Income', expense: 'Expense', expenses: 'Expenses', incomes: 'Incomes',
    transactions: 'Transactions', newTransaction: '➕ New Transaction', transfer: 'Transfer',
    fromAccount: 'From Account', toAccount: 'To Account', save: '💾 Save', budgets: 'Budgets',
    settings: 'Settings', profile: 'Profile', accounts: 'Accounts', goals: 'Goals',
    language: 'Language', currency: 'Currency', theme: 'Theme', categories: 'Categories',
    userName: 'Username', iOwe: 'I Owe', owedToMe: 'Owed to Me', paid: 'Paid',
    allAccounts: 'All Accounts', period: 'Period', month: 'Month', year: 'Year',
    greeting_morning: 'Good Morning', greeting_day: 'Good Afternoon',
    greeting_evening: 'Good Evening', greeting_night: 'Good Night',
    aiPlaceholder: 'Ask for advice...', aiSend: 'Send'
  }
};

let currentLanguage = 'ru';
let isAiLoading = false;
let currentDebtType = 'owe';
let editingDebtId = null;

function t(key) { return translations[currentLanguage]?.[key] || translations['ru'][key] || key; }

function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'number')) {
      el.placeholder = t(key);
    } else if (el.tagName === 'OPTION') {
      el.textContent = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  updateGreeting();
}

function changeLanguage(lang) { currentLanguage = lang; applyLanguage(); saveSettingsKey('language', lang); updateMonthLabel(); }

function changeTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) metaThemeColor.setAttribute('content', theme === 'light' ? '#FFFFFF' : '#0D1117');
  saveSettingsKey('theme', theme);
}

// ===== ФУНКЦИИ ПОДДЕРЖКИ И ПОДПИСКИ =====
function openSupportOverlay() {
  document.getElementById('supportOverlay').classList.add('active');
}

function closeSupportOverlay() {
  document.getElementById('supportOverlay').classList.remove('active');
}

function openEmail() {
  window.location.href = 'mailto:prodimon2005@gmail.com';
}

function openTelegram() {
  window.open('https://t.me/w1nsf', '_blank');
}

function openSubscriptionOverlay() {
  document.getElementById('subscriptionOverlay').classList.add('active');
}

function closeSubscriptionOverlay() {
  document.getElementById('subscriptionOverlay').classList.remove('active');
}

// ===== ФУНКЦИИ КОММЕНТАРИЯ =====
function openCommentOverlay() {
  const comment = document.getElementById('txComment').value || '';
  document.getElementById('commentText').value = comment;
  document.getElementById('commentOverlay').classList.add('active');
}

function closeCommentOverlay() {
  document.getElementById('commentOverlay').classList.remove('active');
}

function saveComment() {
  const comment = document.getElementById('commentText').value.trim();
  document.getElementById('txComment').value = comment;
  const btn = document.getElementById('commentBtn');
  if (comment) {
    btn.classList.add('has-comment');
  } else {
    btn.classList.remove('has-comment');
  }
  closeCommentOverlay();
}

function deleteComment() {
  document.getElementById('txComment').value = '';
  document.getElementById('commentText').value = '';
  document.getElementById('commentBtn').classList.remove('has-comment');
  closeCommentOverlay();
}

// ===== ФУНКЦИИ ПОВТОРЯЮЩЕГОСЯ ПЛАТЕЖА =====
let repeatSettings = null;

function openRepeatOverlay() {
  if (repeatSettings) {
    document.getElementById('repeatFrequency').value = repeatSettings.frequency;
    document.getElementById('repeatNotifyToggle').checked = repeatSettings.notify;
    document.getElementById('notifyDays').value = repeatSettings.notifyDays || 1;
    document.getElementById('notifyDaysSection').style.display = repeatSettings.notify ? 'block' : 'none';
  } else {
    document.getElementById('repeatFrequency').value = 'monthly';
    document.getElementById('repeatNotifyToggle').checked = false;
    document.getElementById('notifyDays').value = '1';
    document.getElementById('notifyDaysSection').style.display = 'none';
  }
  document.getElementById('repeatOverlay').classList.add('active');
}

function closeRepeatOverlay() {
  document.getElementById('repeatOverlay').classList.remove('active');
}

function toggleNotifyDays() {
  const toggle = document.getElementById('repeatNotifyToggle');
  document.getElementById('notifyDaysSection').style.display = toggle.checked ? 'block' : 'none';
}

function saveRepeatSettings() {
  repeatSettings = {
    frequency: document.getElementById('repeatFrequency').value,
    notify: document.getElementById('repeatNotifyToggle').checked,
    notifyDays: parseInt(document.getElementById('notifyDays').value) || 1
  };
  document.getElementById('repeatBtn').classList.add('has-repeat');
  closeRepeatOverlay();
}

function removeRepeatSettings() {
  repeatSettings = null;
  document.getElementById('repeatBtn').classList.remove('has-repeat');
  closeRepeatOverlay();
}

async function processRecurringPayments() {
  const recurringTxs = await dbGetAll('recurring_transactions');
  if (!recurringTxs || recurringTxs.length === 0) return;
  
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  
  for (const rt of recurringTxs) {
    let shouldCreate = false;
    let nextDate = null;
    
    if (rt.frequency === 'daily') {
      const lastDate = rt.lastCreated || rt.startDate;
      nextDate = new Date(lastDate);
      nextDate.setDate(nextDate.getDate() + 1);
      shouldCreate = nextDate <= now;
    } else if (rt.frequency === 'weekly') {
      const lastDate = rt.lastCreated || rt.startDate;
      nextDate = new Date(lastDate);
      nextDate.setDate(nextDate.getDate() + 7);
      shouldCreate = nextDate <= now;
    } else if (rt.frequency === 'monthly') {
      const lastDate = rt.lastCreated || rt.startDate;
      nextDate = new Date(lastDate);
      nextDate.setMonth(nextDate.getMonth() + 1);
      shouldCreate = nextDate <= now;
    } else if (rt.frequency === 'yearly') {
      const lastDate = rt.lastCreated || rt.startDate;
      nextDate = new Date(lastDate);
      nextDate.setFullYear(nextDate.getFullYear() + 1);
      shouldCreate = nextDate <= now;
    }
    
    if (shouldCreate) {
      const tx = {
        type: rt.type,
        amount: rt.amount,
        accountId: rt.accountId,
        category: rt.category,
        date: todayStr,
        comment: rt.comment || 'Повторяющийся платеж',
        recurringId: rt.id
      };
      
      await dbAdd('transactions', tx);
      
      const account = await dbGet('accounts', rt.accountId);
      if (account) {
        account.balance = Number(account.balance) + (rt.type === 'income' ? rt.amount : -rt.amount);
        await dbPut('accounts', account);
      }
      
      rt.lastCreated = todayStr;
      await dbPut('recurring_transactions', rt);
    }
  }
}

// ===== БАЗА ДАННЫХ =====
let DB = null;
let currentCurrency = '₽';
let selectedAccountId = null;
let editingTxId = null;
let oldTxAmount = 0;
let oldTxType = '';
let oldTxAccountId = null;
let currentTxType = 'income';
let selectedGoalIcon = '🚗';
let editSelectedGoalIcon = '🚗';
let categoriesFilter = 'income';
let debtsFilter = 'owe';
let selectedCatColor = '#D4A017';
let selectedCatIcon = '💰';
let editSelectedCatColor = '#D4A017';
let editSelectedCatIcon = '💰';
let editingCatId = null;
let budgetType = 'expense';
let selectedBudgetCategories = [];
let selectedBudgetAccounts = ['all'];
let editingBudgetId = null;
let emojiKeyboardCallback = null;

const COLORS = ['#D4A017','#3FB950','#F85149','#58A6FF','#BC8CFF','#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#FF922B','#20C997','#E64980','#FCC419','#748FFC','#9775FA','#F06595','#63E6BE','#FFA8A8','#FFE066','#A9E34B'];

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('FinanceDB', 6);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('transactions')) db.createObjectStore('transactions', { keyPath: 'id', autoIncrement: true });
      if (!db.objectStoreNames.contains('accounts')) db.createObjectStore('accounts', { keyPath: 'id', autoIncrement: true });
      if (!db.objectStoreNames.contains('categories')) db.createObjectStore('categories', { keyPath: 'id', autoIncrement: true });
      if (!db.objectStoreNames.contains('budgets')) db.createObjectStore('budgets', { keyPath: 'id', autoIncrement: true });
      if (!db.objectStoreNames.contains('goals')) db.createObjectStore('goals', { keyPath: 'id', autoIncrement: true });
      if (!db.objectStoreNames.contains('settings')) db.createObjectStore('settings', { keyPath: 'key' });
      if (!db.objectStoreNames.contains('debts')) db.createObjectStore('debts', { keyPath: 'id', autoIncrement: true });
      if (!db.objectStoreNames.contains('recurring_transactions')) db.createObjectStore('recurring_transactions', { keyPath: 'id', autoIncrement: true });
    };
    request.onsuccess = (e) => { DB = e.target.result; resolve(DB); };
    request.onerror = (e) => { reject(e.target.error); };
  });
}

function dbGetAll(s) { return new Promise((r, j) => { const t = DB.transaction(s, 'readonly'); const st = t.objectStore(s); const req = st.getAll(); req.onsuccess = () => r(req.result); req.onerror = () => j(req.error); }); }
function dbAdd(s, i) { return new Promise((r, j) => { const t = DB.transaction(s, 'readwrite'); const st = t.objectStore(s); const req = st.add(i); req.onsuccess = () => r(req.result); req.onerror = () => j(req.error); }); }
function dbPut(s, i) { return new Promise((r, j) => { const t = DB.transaction(s, 'readwrite'); const st = t.objectStore(s); const req = st.put(i); req.onsuccess = () => r(req.result); req.onerror = () => j(req.error); }); }
function dbDelete(s, id) { return new Promise((r, j) => { const t = DB.transaction(s, 'readwrite'); const st = t.objectStore(s); const req = st.delete(id); req.onsuccess = () => r(); req.onerror = () => j(req.error); }); }
function dbGet(s, id) { return new Promise((r, j) => { const t = DB.transaction(s, 'readonly'); const st = t.objectStore(s); const req = st.get(id); req.onsuccess = () => r(req.result); req.onerror = () => j(req.error); }); }

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentFilter = 'income';

function formatMoney(val) { return (Number(val) || 0).toLocaleString('ru-RU') + ' ' + currentCurrency; }
function formatDate(d) {
  const parts = d.split('-');
  const day = parseInt(parts[2]);
  const month = parseInt(parts[1]) - 1;
  const monthsRu = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  const monthsEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const months = currentLanguage === 'en' ? monthsEn : monthsRu;
  return `${day} ${months[month]}`;
}
async function getCategoryEmoji(n, tx) { 
  if (tx && tx.goalIcon) return tx.goalIcon;
  if (tx && tx.category === 'Цель') {
    const goals = await dbGetAll('goals');
    const goal = goals[0];
    if (goal) return goal.icon || '🎯';
  }
  const c = await dbGetAll('categories'); 
  const f = c.find(x => x.name === n); 
  return f ? (f.icon || '📌') : '📌'; 
}

function getMonthStr(year, month) {
  return year + '-' + String(month + 1).padStart(2, '0');
}

function updateGreeting() {
  const hour = new Date().getHours();
  let key;
  if (hour >= 5 && hour < 12) key = 'greeting_morning';
  else if (hour >= 12 && hour < 17) key = 'greeting_day';
  else if (hour >= 17 && hour < 22) key = 'greeting_evening';
  else key = 'greeting_night';
  document.getElementById('greetingText').textContent = `${t(key)}, Бро`;
}

function updateMonthLabel() {
  const monthsRu = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
  const monthsEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const months = currentLanguage === 'en' ? monthsEn : monthsRu;
  document.getElementById('monthLabel').textContent = months[currentMonth] + ' ' + currentYear;
}

function switchScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(name + 'Screen');
  if (el) el.classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const tabs = ['home', 'analytics', 'add', 'ai', 'budget'];
  const btns = document.querySelectorAll('.tab-btn');
  const idx = tabs.indexOf(name);
  if (idx >= 0 && btns[idx]) btns[idx].classList.add('active');
  else btns.forEach(b => b.classList.remove('active'));
  if (name === 'home') renderHome();
  if (name === 'analytics') { 
    currentMonth = new Date().getMonth();
    currentYear = new Date().getFullYear();
    currentFilter = 'income';
    updateFilterPills();
    renderAnalytics(); 
  }
  if (name === 'add') { updateSelects(); setTxType('income'); updateCalcInputColor(); adjustCalcFontSize(); }
  if (name === 'budget') renderBudgets();
  if (name === 'settings') { showSettingsMain(); }
  if (name === 'categoriesFull') { renderFullCategories(); }
  if (name === 'debtsFull') { renderFullDebts(); }
}

function updateFilterPills() {
  const container = document.getElementById('filterPills');
  if (!container) return;
  const pills = container.querySelectorAll('.pill');
  pills.forEach(p => {
    if (p.getAttribute('data-filter') === currentFilter) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });
}

function showSettingsMain() {
  closeEmojiKeyboard();
  document.getElementById('settingsMain').style.display = 'block';
  document.querySelectorAll('.settings-sub-screen').forEach(s => s.classList.remove('active'));
}

function showSettingsSub(name) {
  closeEmojiKeyboard();
  document.getElementById('settingsMain').style.display = 'none';
  document.querySelectorAll('.settings-sub-screen').forEach(s => s.classList.remove('active'));
  const sub = document.getElementById('sub' + name.charAt(0).toUpperCase() + name.slice(1));
  if (sub) { sub.classList.add('active'); if (name === 'accounts') renderSettingsAccounts(); if (name === 'goals') { renderSettingsGoals(); } }
}

function closeGoalsAndKeyboard() {
  closeEmojiKeyboard();
  showSettingsMain();
}

async function saveSettingsKey(k, v) {
  const s = await dbGetAll('settings'); const ex = s.find(x => x.key === k);
  if (ex) { ex.value = v; await dbPut('settings', ex); } else { await dbAdd('settings', { key: k, value: v }); }
  if (k === 'currency') { currentCurrency = v; renderHome(); }
}

// ===== ЭМОДЗИ-КЛАВИАТУРА =====
function toggleEmojiKeyboard(previewId, callback) {
  const keyboard = document.getElementById('emojiKeyboard');
  const tabBar = document.getElementById('mainTabBar');
  
  if (keyboard.classList.contains('visible')) {
    closeEmojiKeyboard();
    return;
  }
  
  emojiKeyboardCallback = callback;
  const preview = document.getElementById(previewId);
  const currentEmoji = preview ? preview.textContent : '💰';
  
  buildEmojiKeyboardContent(currentEmoji);
  keyboard.classList.add('visible');
  if (tabBar) tabBar.classList.add('hidden');
}

function buildEmojiKeyboardContent(selected) {
  const tabsContainer = document.getElementById('emojiKeyboardTabs');
  const grid = document.getElementById('emojiKeyboardGrid');
  
  tabsContainer.innerHTML = '';
  const categories = Object.keys(EMOJI_CATEGORIES);
  
  categories.forEach((cat, i) => {
    const tab = document.createElement('button');
    tab.className = 'emoji-keyboard-tab' + (i === 0 ? ' active' : '');
    tab.textContent = cat.split(' ')[0];
    tab.type = 'button';
    tab.onclick = (e) => {
      e.preventDefault();
      tabsContainer.querySelectorAll('.emoji-keyboard-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderKeyboardGrid(cat);
    };
    tabsContainer.appendChild(tab);
  });
  
  function renderKeyboardGrid(category) {
    const emojis = EMOJI_CATEGORIES[category] || ALL_EMOJIS_FLAT;
    grid.innerHTML = emojis.map(e => 
      `<button class="emoji-keyboard-item${e === selected ? ' selected' : ''}" data-emoji="${e}" type="button">${e}</button>`
    ).join('');
  }
  
  renderKeyboardGrid(categories[0]);
  
  grid.onclick = (e) => {
    const btn = e.target.closest('.emoji-keyboard-item');
    if (!btn) return;
    e.preventDefault();
    const emoji = btn.dataset.emoji;
    grid.querySelectorAll('.emoji-keyboard-item').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    if (emojiKeyboardCallback) {
      emojiKeyboardCallback(emoji);
    }
  };
}

function closeEmojiKeyboard() {
  const keyboard = document.getElementById('emojiKeyboard');
  const tabBar = document.getElementById('mainTabBar');
  keyboard.classList.remove('visible');
  if (tabBar) tabBar.classList.remove('hidden');
  emojiKeyboardCallback = null;
}

// ===== ИИ СОВЕТНИК =====
async function sendAI() {
  const input = document.getElementById('aiInput');
  const chatBox = document.getElementById('chatBox');
  const message = input.value.trim();
  if (!message || isAiLoading) return;
  
  chatBox.innerHTML += `<div class="ai-message user">${escapeHtml(message)}</div>`;
  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
  
  isAiLoading = true;
  chatBox.innerHTML += `<div class="ai-message ai" id="aiLoading"><em>Думаю...</em></div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
  
  try {
    const financialContext = await getFinancialContext();
    
    const response = await fetch(GIGACHAT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GIGACHAT_API_KEY}`
      },
      body: JSON.stringify({
        model: 'GigaChat',
        messages: [
          { role: 'system', content: `Ты — финансовый советник в приложении "Баланс-Бро". Помогаешь пользователю анализировать его финансы, даешь советы по экономии, планированию бюджета и достижению финансовых целей. Отвечай кратко, по делу, на русском языке. Вот текущая финансовая сводка пользователя:\n${financialContext}` },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });
    
    const data = await response.json();
    let aiResponse = 'Извините, не удалось получить ответ.';
    
    if (data && data.choices && data.choices[0] && data.choices[0].message) {
      aiResponse = data.choices[0].message.content.trim();
    } else if (data && data.error) {
      aiResponse = 'Ошибка сервера. Попробуйте позже.';
    }
    
    const loadingEl = document.getElementById('aiLoading');
    if (loadingEl) loadingEl.remove();
    chatBox.innerHTML += `<div class="ai-message ai">${escapeHtml(aiResponse)}</div>`;
  } catch (error) {
    const loadingEl = document.getElementById('aiLoading');
    if (loadingEl) loadingEl.remove();
    chatBox.innerHTML += `<div class="ai-message ai">Ошибка соединения с ИИ. Проверьте интернет.</div>`;
  }
  
  isAiLoading = false;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML.replace(/\n/g, '<br>');
}

async function getFinancialContext() {
  const accounts = await dbGetAll('accounts');
  const transactions = await dbGetAll('transactions');
  const budgets = await dbGetAll('budgets');
  const debts = await dbGetAll('debts');
  const goals = await dbGetAll('goals');
  let totalBalance = accounts.reduce((s, a) => s + (Number(a.balance) || 0), 0);
  totalBalance += debts.filter(d => d.type === 'owe' && d.addToBalance && (d.paid < d.amount)).reduce((s, d) => s + Math.max(0, (Number(d.amount) || 0) - (Number(d.paid) || 0)), 0);
  totalBalance -= debts.filter(d => d.type === 'owed' && d.addToBalance && (d.paid < d.amount)).reduce((s, d) => s + Math.max(0, (Number(d.amount) || 0) - (Number(d.paid) || 0)), 0);
  const now = new Date();
  const currentMonthStr = getMonthStr(now.getFullYear(), now.getMonth());
  const thisMonthTx = transactions.filter(t => t.date && t.date.startsWith(currentMonthStr));
  const monthlyIncome = thisMonthTx.filter(t => t.type === 'income').reduce((s, t) => s + Number(t.amount), 0);
  const monthlyExpense = thisMonthTx.filter(t => t.type === 'expense').reduce((s, t) => s + Number(t.amount), 0);
  let context = `Общий баланс: ${formatMoney(totalBalance)}\nСчета: ${accounts.map(a => `${a.name}: ${formatMoney(a.balance)}`).join(', ')}\nДоходы за месяц: ${formatMoney(monthlyIncome)}\nРасходы за месяц: ${formatMoney(monthlyExpense)}\n`;
  if (budgets.length > 0) context += `Бюджеты: ${budgets.map(b => `${b.name} (${b.type === 'expense' ? 'расход' : 'доход'}): ${formatMoney(b.amount)}`).join(', ')}\n`;
  const activeDebts = debts.filter(d => (d.paid || 0) < (d.amount || 0));
  if (activeDebts.length > 0) context += `Активные долги: ${activeDebts.map(d => `${d.name} (${d.type === 'owe' ? 'я должен' : 'мне должны'}): ${formatMoney(Math.max(0, (d.amount || 0) - (d.paid || 0)))}`).join(', ')}\n`;
  if (goals.length > 0) context += `Цели: ${goals.map(g => `${g.name}: ${formatMoney(g.current || 0)} / ${formatMoney(g.target)} (${g.target > 0 ? Math.round(((g.current || 0) / g.target) * 100) : 0}%)`).join(', ')}\n`;
  return context;
}

// ===== БЮДЖЕТЫ =====
async function renderBudgets() {
  if (!DB) return;
  const budgets = await dbGetAll('budgets');
  const transactions = await dbGetAll('transactions');
  const expenseBudgets = budgets.filter(b => b.type === 'expense');
  const incomeBudgets = budgets.filter(b => b.type === 'income');
  function calculateBudgetSpent(budget) {
    let total = 0; const now = new Date();
    const currentMonthStr = getMonthStr(now.getFullYear(), now.getMonth());
    const currentYearStr = String(now.getFullYear());
    transactions.forEach(t => {
      if (t.type !== budget.type || !t.date) return;
      let inPeriod = false;
      if (budget.period === 'month') inPeriod = t.date.startsWith(currentMonthStr);
      else inPeriod = t.date.startsWith(currentYearStr);
      if (!inPeriod) return;
      const hasCatFilter = budget.categoryIds && budget.categoryIds.length > 0;
      const hasAccFilter = budget.accountIds && budget.accountIds.length > 0 && !budget.accountIds.includes('all');
      const catMatch = !hasCatFilter || budget.categoryIds.includes(t.category);
      const accMatch = !hasAccFilter || budget.accountIds.includes(t.accountId);
      if (catMatch && accMatch) total += Number(t.amount);
    });
    return total;
  }
  function renderBudgetCard(b) {
    const spent = calculateBudgetSpent(b); const limit = Number(b.amount) || 0;
    const remaining = limit - spent; const pct = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
    let remainingColor, spentColor;
    if (b.type === 'expense') { remainingColor = remaining >= 0 ? 'var(--green)' : 'var(--danger)'; spentColor = spent <= limit ? 'var(--green)' : 'var(--danger)'; }
    else { remainingColor = remaining <= 0 ? 'var(--green)' : 'var(--danger)'; spentColor = spent >= limit ? 'var(--green)' : 'var(--danger)'; }
    const progressColor = b.type === 'expense' ? (spent > limit ? 'var(--danger)' : 'var(--green)') : (spent < limit ? 'var(--danger)' : 'var(--green)');
    return `<div class="budget-card" onclick="openEditBudgetFullscreen(${b.id})"><div class="budget-card-header"><div class="budget-card-left"><span>${b.type === 'expense' ? '📉' : '📈'}</span><span class="budget-card-name">${b.name || 'Без названия'}</span></div><div class="budget-card-right"><div class="budget-card-spent" style="color:${spentColor};">${formatMoney(spent)} / ${formatMoney(limit)}</div><div class="budget-card-remaining" style="color:${remainingColor};">${formatMoney(Math.abs(remaining))}</div></div></div><div class="budget-progress-bar"><div class="budget-progress-fill" style="width:${pct}%; background:${progressColor};"></div></div></div>`;
  }
  document.getElementById('expenseBudgetsList').innerHTML = expenseBudgets.map(renderBudgetCard).join('') || '<div style="padding:12px; color:var(--text-secondary); font-size:14px;">Нет бюджетов</div>';
  document.getElementById('incomeBudgetsList').innerHTML = incomeBudgets.map(renderBudgetCard).join('') || '<div style="padding:12px; color:var(--text-secondary); font-size:14px;">Нет бюджетов</div>';
}

async function setBudgetType(type) { budgetType = type; document.querySelectorAll('#budgetTypeSelector .type-btn').forEach(b => { b.classList.remove('active'); if (b.dataset.type === type) b.classList.add('active'); }); selectedBudgetCategories = []; const cats = await dbGetAll('categories'); document.getElementById('budgetCategoriesCheckboxes').innerHTML = cats.filter(c => c.type === type).map(c => `<div class="checkbox-pill" data-cat="${c.name}" onclick="toggleBudgetCategory(this, '${c.name}')">${c.icon || ''} ${c.name}</div>`).join(''); }
async function openAddBudgetFullscreen() { editingBudgetId = null; document.getElementById('editBudgetId').value = ''; document.getElementById('budgetName').value = ''; document.getElementById('budgetAmount').value = ''; document.getElementById('deleteBudgetBtn').style.display = 'none'; budgetType = 'expense'; selectedBudgetCategories = []; selectedBudgetAccounts = ['all']; document.querySelectorAll('#budgetTypeSelector .type-btn').forEach(b => { b.classList.remove('active'); if (b.dataset.type === 'expense') b.classList.add('active'); }); const cats = await dbGetAll('categories'); document.getElementById('budgetCategoriesCheckboxes').innerHTML = cats.filter(c => c.type === 'expense').map(c => `<div class="checkbox-pill" data-cat="${c.name}" onclick="toggleBudgetCategory(this, '${c.name}')">${c.icon || ''} ${c.name}</div>`).join(''); const accs = await dbGetAll('accounts'); document.getElementById('budgetAccountsCheckboxes').innerHTML = `<div class="checkbox-pill checked" data-acc="all" onclick="toggleBudgetAccount(this, 'all')">${t('allAccounts')}</div>` + accs.map(a => `<div class="checkbox-pill" data-acc="${a.id}" onclick="toggleBudgetAccount(this, ${a.id})">${a.name}</div>`).join(''); document.getElementById('addBudgetFullscreen').classList.add('active'); }
async function openEditBudgetFullscreen(id) { const budget = await dbGet('budgets', id); if (!budget) return; editingBudgetId = id; document.getElementById('editBudgetId').value = id; document.getElementById('budgetName').value = budget.name || ''; document.getElementById('budgetAmount').value = budget.amount || ''; document.getElementById('budgetPeriod').value = budget.period || 'month'; document.getElementById('deleteBudgetBtn').style.display = 'block'; budgetType = budget.type; document.querySelectorAll('#budgetTypeSelector .type-btn').forEach(b => { b.classList.remove('active'); if (b.dataset.type === budget.type) b.classList.add('active'); }); selectedBudgetCategories = budget.categoryIds || []; selectedBudgetAccounts = budget.accountIds || ['all']; const cats = await dbGetAll('categories'); document.getElementById('budgetCategoriesCheckboxes').innerHTML = cats.filter(c => c.type === budget.type).map(c => `<div class="checkbox-pill ${selectedBudgetCategories.includes(c.name) ? 'checked' : ''}" data-cat="${c.name}" onclick="toggleBudgetCategory(this, '${c.name}')">${c.icon || ''} ${c.name}</div>`).join(''); const accs = await dbGetAll('accounts'); document.getElementById('budgetAccountsCheckboxes').innerHTML = `<div class="checkbox-pill ${selectedBudgetAccounts.includes('all') ? 'checked' : ''}" data-acc="all" onclick="toggleBudgetAccount(this, 'all')">${t('allAccounts')}</div>` + accs.map(a => `<div class="checkbox-pill ${selectedBudgetAccounts.includes(a.id) ? 'checked' : ''}" data-acc="${a.id}" onclick="toggleBudgetAccount(this, ${a.id})">${a.name}</div>`).join(''); document.getElementById('addBudgetFullscreen').classList.add('active'); }
function closeBudgetFullscreen() { document.getElementById('addBudgetFullscreen').classList.remove('active'); editingBudgetId = null; }
function toggleBudgetCategory(el, catName) { el.classList.toggle('checked'); if (el.classList.contains('checked')) { if (!selectedBudgetCategories.includes(catName)) selectedBudgetCategories.push(catName); } else { selectedBudgetCategories = selectedBudgetCategories.filter(c => c !== catName); } }
function toggleBudgetAccount(el, accId) { if (accId === 'all') { if (el.classList.contains('checked')) { el.classList.remove('checked'); selectedBudgetAccounts = []; } else { el.classList.add('checked'); selectedBudgetAccounts = ['all']; document.querySelectorAll('#budgetAccountsCheckboxes .checkbox-pill[data-acc]').forEach(p => { if (p.dataset.acc !== 'all') p.classList.remove('checked'); }); } } else { const allPill = document.querySelector('#budgetAccountsCheckboxes .checkbox-pill[data-acc="all"]'); if (allPill) allPill.classList.remove('checked'); selectedBudgetAccounts = selectedBudgetAccounts.filter(a => a !== 'all'); el.classList.toggle('checked'); if (el.classList.contains('checked')) { if (!selectedBudgetAccounts.includes(accId)) selectedBudgetAccounts.push(accId); } else { selectedBudgetAccounts = selectedBudgetAccounts.filter(a => a !== accId); } } }
async function saveBudgetFullscreen() { const name = document.getElementById('budgetName').value.trim(); const amount = parseFloat(document.getElementById('budgetAmount').value); if (!name) { alert('Введите название'); return; } if (isNaN(amount) || amount <= 0) { alert('Введите сумму'); return; } const data = { name, type: budgetType, amount, categoryIds: selectedBudgetCategories, accountIds: selectedBudgetAccounts, period: document.getElementById('budgetPeriod').value }; if (editingBudgetId) { data.id = editingBudgetId; await dbPut('budgets', data); } else { await dbAdd('budgets', data); } closeBudgetFullscreen(); renderBudgets(); }
async function deleteBudgetFullscreen() { if (!editingBudgetId) return; if (!confirm('Удалить бюджет?')) return; await dbDelete('budgets', editingBudgetId); closeBudgetFullscreen(); renderBudgets(); }

// ===== ДОЛГИ =====
function toggleBalanceAccount() {
  const toggle = document.getElementById('debtFullscreenBalanceToggle');
  const section = document.getElementById('debtFullscreenAccountSection');
  section.style.display = toggle.checked ? 'block' : 'none';
}

function setDebtType(type) {
  currentDebtType = type;
  document.querySelectorAll('#debtTypeSelector .type-btn').forEach(b => {
    b.classList.remove('active');
    if (b.dataset.type === type) b.classList.add('active');
  });
}

async function openAddDebtFullscreen() {
  editingDebtId = null;
  document.getElementById('debtFullscreenId').value = '';
  document.getElementById('debtFullscreenName').value = '';
  document.getElementById('debtFullscreenAmount').value = '';
  document.getElementById('debtFullscreenStartDate').value = new Date().toISOString().split('T')[0];
  document.getElementById('debtFullscreenDueDate').value = '';
  document.getElementById('debtFullscreenComment').value = '';
  document.getElementById('debtFullscreenBalanceToggle').checked = false;
  document.getElementById('debtFullscreenAccountSection').style.display = 'none';
  document.getElementById('deleteDebtFullscreenBtn').style.display = 'none';
  document.getElementById('addDebtFullscreenTitle').textContent = '➕ Новый долг';
  currentDebtType = 'owe';
  document.querySelectorAll('#debtTypeSelector .type-btn').forEach(b => {
    b.classList.remove('active');
    if (b.dataset.type === 'owe') b.classList.add('active');
  });
  await updateDebtAccountSelect();
  document.getElementById('addDebtFullscreenOverlay').classList.add('active');
}

async function openEditDebtFullscreen(id) {
  const debt = await dbGet('debts', id);
  if (!debt) return;
  editingDebtId = id;
  document.getElementById('debtFullscreenId').value = id;
  document.getElementById('debtFullscreenName').value = debt.name || '';
  document.getElementById('debtFullscreenAmount').value = debt.amount || '';
  document.getElementById('debtFullscreenStartDate').value = debt.startDate || debt.date || '';
  document.getElementById('debtFullscreenDueDate').value = debt.dueDate || '';
  document.getElementById('debtFullscreenComment').value = debt.comment || '';
  document.getElementById('debtFullscreenBalanceToggle').checked = debt.addToBalance || false;
  document.getElementById('debtFullscreenAccountSection').style.display = debt.addToBalance ? 'block' : 'none';
  document.getElementById('deleteDebtFullscreenBtn').style.display = 'block';
  document.getElementById('addDebtFullscreenTitle').textContent = '✏️ Редактировать долг';
  currentDebtType = debt.type || 'owe';
  document.querySelectorAll('#debtTypeSelector .type-btn').forEach(b => {
    b.classList.remove('active');
    if (b.dataset.type === currentDebtType) b.classList.add('active');
  });
  await updateDebtAccountSelect();
  if (debt.accountId) document.getElementById('debtFullscreenAccount').value = debt.accountId;
  document.getElementById('addDebtFullscreenOverlay').classList.add('active');
}

function closeDebtFullscreen() {
  document.getElementById('addDebtFullscreenOverlay').classList.remove('active');
  editingDebtId = null;
}

async function updateDebtAccountSelect() {
  const accounts = await dbGetAll('accounts');
  const select = document.getElementById('debtFullscreenAccount');
  select.innerHTML = accounts.map(a => `<option value="${a.id}">${a.name}</option>`).join('');
}

async function saveDebtFullscreen() {
  const name = document.getElementById('debtFullscreenName').value.trim();
  const amount = parseFloat(document.getElementById('debtFullscreenAmount').value);
  if (!name) { alert('Введите название'); return; }
  if (isNaN(amount) || amount <= 0) { alert('Введите сумму'); return; }
  
  const addToBalance = document.getElementById('debtFullscreenBalanceToggle').checked;
  const accountId = addToBalance ? Number(document.getElementById('debtFullscreenAccount').value) : null;
  
  const debtData = {
    name,
    type: currentDebtType,
    amount,
    paid: 0,
    startDate: document.getElementById('debtFullscreenStartDate').value,
    dueDate: document.getElementById('debtFullscreenDueDate').value,
    date: document.getElementById('debtFullscreenStartDate').value,
    comment: document.getElementById('debtFullscreenComment').value.trim(),
    addToBalance,
    accountId
  };
  
  if (editingDebtId) {
    const oldDebt = await dbGet('debts', editingDebtId);
    debtData.id = editingDebtId;
    debtData.paid = oldDebt.paid || 0;
    await dbPut('debts', debtData);
    
    if (oldDebt.addToBalance && oldDebt.transactionId) {
      const oldTx = await dbGet('transactions', oldDebt.transactionId);
      if (oldTx) {
        const oldAccount = await dbGet('accounts', oldTx.accountId);
        if (oldAccount) {
          oldAccount.balance = Number(oldAccount.balance) - (oldTx.type === 'income' ? oldTx.amount : -oldTx.amount);
          await dbPut('accounts', oldAccount);
        }
        await dbDelete('transactions', oldDebt.transactionId);
      }
    }
  } else {
    const newId = await dbAdd('debts', debtData);
    debtData.id = newId;
  }
  
  if (addToBalance) {
    const txType = currentDebtType === 'owe' ? 'income' : 'expense';
    const account = await dbGet('accounts', accountId);
    if (account) {
      const txAmount = amount - (debtData.paid || 0);
      const tx = {
        type: txType,
        amount: txAmount,
        accountId,
        category: 'Долги',
        date: debtData.startDate || debtData.date,
        comment: `Долг: ${name}`,
        debtId: debtData.id
      };
      
      const txId = await dbAdd('transactions', tx);
      account.balance = Number(account.balance) + (txType === 'income' ? txAmount : -txAmount);
      await dbPut('accounts', account);
      
      debtData.transactionId = txId;
      await dbPut('debts', debtData);
    }
  }
  
  closeDebtFullscreen();
  renderFullDebts();
  renderHome();
}

async function deleteDebtFullscreen() {
  if (!editingDebtId) return;
  if (!confirm('Удалить долг?')) return;
  
  const debt = await dbGet('debts', editingDebtId);
  if (debt && debt.addToBalance && debt.transactionId) {
    const tx = await dbGet('transactions', debt.transactionId);
    if (tx) {
      const account = await dbGet('accounts', tx.accountId);
      if (account) {
        account.balance = Number(account.balance) - (tx.type === 'income' ? tx.amount : -tx.amount);
        await dbPut('accounts', account);
      }
      await dbDelete('transactions', debt.transactionId);
    }
  }
  
  await dbDelete('debts', editingDebtId);
  closeDebtFullscreen();
  renderFullDebts();
  renderHome();
}

async function renderFullDebts() {
  const debts = await dbGetAll('debts');
  let filtered;
  if (debtsFilter === 'paid') filtered = debts.filter(d => d.paid >= d.amount && d.amount > 0);
  else filtered = debts.filter(d => d.type === debtsFilter && (d.paid < d.amount || d.amount === 0));
  const list = document.getElementById('fullDebtsList');
  list.innerHTML = filtered.sort((a,b) => b.id - a.id).map(d => {
    const remaining = Math.max(0, (d.amount || 0) - (d.paid || 0));
    const dueDateStr = d.dueDate ? ` • Вернуть до: ${formatDate(d.dueDate)}` : '';
    const balanceStr = d.addToBalance ? ' • На балансе' : '';
    return `<div class="debt-item" onclick="openEditDebtFullscreen(${d.id})"><div class="debt-info"><div class="debt-amount">${d.name || 'Без названия'}</div><div class="debt-date">${d.type === 'owe' ? t('iOwe') : t('owedToMe')} • ${formatDate(d.startDate || d.date)}${dueDateStr}${balanceStr}</div>${d.comment ? `<div class="debt-comment">${d.comment}</div>` : ''}<div style="font-size:12px; color:var(--text-secondary);">Погашено: ${formatMoney(d.paid || 0)} / ${formatMoney(d.amount || 0)}</div></div><span style="color:var(--text-secondary);">›</span></div>`;
  }).join('') || '<div style="padding:20px; text-align:center; color:var(--text-secondary);">Нет долгов</div>';
}

function setDebtsFilter(type) {
  debtsFilter = type;
  document.querySelectorAll('#debtsFullScreen .categories-type-btn').forEach(b => {
    b.classList.remove('active');
    if (b.dataset.type === type) b.classList.add('active');
  });
  renderFullDebts();
}

function openPayDebt(id) {
  dbGet('debts', id).then(async debt => {
    if (!debt) return;
    document.getElementById('payDebtId').value = id;
    document.getElementById('payDebtInfo').innerHTML = `<strong>${debt.name || 'Без названия'}</strong><br>Осталось погасить: ${formatMoney(Math.max(0, (debt.amount || 0) - (debt.paid || 0)))}`;
    document.getElementById('payDebtAmount').value = '';
    
    if (debt.addToBalance && debt.accountId) {
      const accounts = await dbGetAll('accounts');
      const select = document.getElementById('payDebtAccount');
      select.innerHTML = accounts.map(a => `<option value="${a.id}" ${a.id === debt.accountId ? 'selected' : ''}>${a.name}</option>`).join('');
      select.style.display = 'block';
    } else {
      document.getElementById('payDebtAccount').style.display = 'none';
    }
    
    document.getElementById('payDebtOverlay').classList.add('active');
  });
}

function closePayDebt() { document.getElementById('payDebtOverlay').classList.remove('active'); }

async function savePayDebt() {
  const id = Number(document.getElementById('payDebtId').value);
  const amount = parseFloat(document.getElementById('payDebtAmount').value);
  if (isNaN(amount) || amount <= 0) { alert('Введите сумму'); return; }
  
  const debt = await dbGet('debts', id);
  if (!debt) return;
  
  const newPaid = (debt.paid || 0) + amount;
  debt.paid = Math.min(newPaid, debt.amount);
  await dbPut('debts', debt);
  
  if (debt.addToBalance && debt.transactionId) {
    const tx = await dbGet('transactions', debt.transactionId);
    if (tx) {
      const remaining = Math.max(0, debt.amount - debt.paid);
      const oldAmount = tx.amount;
      tx.amount = remaining;
      await dbPut('transactions', tx);
      
      const account = await dbGet('accounts', tx.accountId);
      if (account) {
        const diff = oldAmount - remaining;
        account.balance = Number(account.balance) + (tx.type === 'income' ? -diff : diff);
        await dbPut('accounts', account);
      }
    }
  }
  
  closePayDebt();
  renderHome();
  if (document.getElementById('debtsFullScreen').classList.contains('active')) renderFullDebts();
}

// ===== КАТЕГОРИИ =====
async function renderFullCategories() { const cats = await dbGetAll('categories'); const filtered = cats.filter(c => c.type === categoriesFilter); const list = document.getElementById('fullCategoriesList'); list.innerHTML = filtered.map(c => `<div class="category-item" onclick="openEditCategoryFull(${c.id})"><div class="category-item-left"><div class="category-color-dot" style="background:${c.color || '#D4A017'};"></div><span class="category-item-icon">${c.icon || '📌'}</span><span class="category-item-name">${c.name}</span></div><span style="color:var(--text-secondary);">›</span></div>`).join('') || '<div style="padding:20px; text-align:center; color:var(--text-secondary);">Нет категорий</div>'; }
function setCategoriesFilter(type) { categoriesFilter = type; document.querySelectorAll('#categoriesFullScreen .categories-type-btn').forEach(b => { b.classList.remove('active'); if (b.dataset.type === type) b.classList.add('active'); }); renderFullCategories(); }

function openAddCategoryFull() {
  document.getElementById('fullscreenCatName').value = '';
  selectedCatColor = COLORS[0];
  selectedCatIcon = '💰';
  buildColorPicker('fullscreenCatColorPicker', selectedCatColor, (c) => { selectedCatColor = c; });
  updateEmojiPreview('fullscreenCatEmojiPreview', selectedCatIcon);
  document.getElementById('addCategoryFullscreen').classList.add('active');
}

function closeAddCategoryFullscreen() {
  document.getElementById('addCategoryFullscreen').classList.remove('active');
  closeEmojiKeyboard();
}

async function saveNewCategoryFullscreen() {
  const name = document.getElementById('fullscreenCatName').value.trim();
  if (!name) { alert('Введите название'); return; }
  if (!selectedCatIcon) { alert('Выберите эмодзи'); return; }
  await dbAdd('categories', { name, type: categoriesFilter, color: selectedCatColor, icon: selectedCatIcon });
  closeEmojiKeyboard();
  closeAddCategoryFullscreen();
  renderFullCategories();
}

async function openEditCategoryFull(id) {
  const cat = await dbGet('categories', id);
  if (!cat) return;
  editingCatId = id;
  document.getElementById('fullscreenEditCatId').value = id;
  document.getElementById('fullscreenEditCatName').value = cat.name;
  editSelectedCatColor = cat.color || '#D4A017';
  editSelectedCatIcon = cat.icon || '💰';
  buildColorPicker('fullscreenEditCatColorPicker', editSelectedCatColor, (c) => { editSelectedCatColor = c; });
  updateEmojiPreview('fullscreenEditCatEmojiPreview', editSelectedCatIcon);
  document.getElementById('editCategoryFullscreen').classList.add('active');
}

function closeEditCategoryFullscreen() {
  document.getElementById('editCategoryFullscreen').classList.remove('active');
  editingCatId = null;
  closeEmojiKeyboard();
}

async function saveEditCategoryFullscreen() {
  if (!editingCatId) return;
  const name = document.getElementById('fullscreenEditCatName').value.trim();
  if (!name) { alert('Введите название'); return; }
  if (!editSelectedCatIcon) { alert('Выберите эмодзи'); return; }
  const cat = await dbGet('categories', editingCatId);
  if (cat) { cat.name = name; cat.color = editSelectedCatColor; cat.icon = editSelectedCatIcon; await dbPut('categories', cat); }
  closeEmojiKeyboard();
  closeEditCategoryFullscreen();
  renderFullCategories();
}

async function deleteCategoryFullscreen() {
  if (!editingCatId) return;
  if (!confirm('Удалить категорию?')) return;
  await dbDelete('categories', editingCatId);
  closeEmojiKeyboard();
  closeEditCategoryFullscreen();
  renderFullCategories();
}

function buildColorPicker(containerId, selected, onSelect) {
  const container = document.getElementById(containerId);
  container.innerHTML = COLORS.map(c => `<div class="color-option${c === selected ? ' selected' : ''}" style="background:${c};" data-color="${c}"></div>`).join('');
  container.onclick = (e) => { if (e.target.classList.contains('color-option')) { container.querySelectorAll('.color-option').forEach(x => x.classList.remove('selected')); e.target.classList.add('selected'); onSelect(e.target.dataset.color); } };
}

// ===== ЦЕЛИ =====
async function renderSettingsGoals() {
  const goals = await dbGetAll('goals');
  const list = document.getElementById('settingsGoalsList');
  if (list) {
    list.innerHTML = goals.map(g => `
      <div class="list-item">
        <span>${g.icon || '🎯'} ${g.name} - ${formatMoney(g.current || 0)} / ${formatMoney(g.target)}</span>
        <div class="list-item-actions">
          <button class="icon-action-btn" onclick="openEditGoal(${g.id})">✏️</button>
          <button class="icon-action-btn" onclick="deleteGoal(${g.id})" style="color:var(--danger);">🗑️</button>
        </div>
      </div>
    `).join('');
  }
  
  selectedGoalIcon = '🚗';
  updateEmojiPreview('goalEmojiPreview', selectedGoalIcon);
}

async function addGoal() {
  const n = document.getElementById('newGoalName').value.trim();
  const t = parseFloat(document.getElementById('newGoalTarget').value) || 0;
  const c = parseFloat(document.getElementById('newGoalCurrent').value) || 0;
  if (!n) { alert('Название'); return; }
  await dbAdd('goals', { name: n, target: t, current: c, icon: selectedGoalIcon });
  document.getElementById('newGoalName').value = '';
  document.getElementById('newGoalTarget').value = '';
  document.getElementById('newGoalCurrent').value = '0';
  selectedGoalIcon = '🚗';
  updateEmojiPreview('goalEmojiPreview', selectedGoalIcon);
  await renderSettingsGoals();
  await renderHome();
}

async function openEditGoal(id) {
  const g = await dbGet('goals', id);
  if (!g) return;
  document.getElementById('editGoalId').value = g.id;
  document.getElementById('editGoalName').value = g.name;
  document.getElementById('editGoalTarget').value = g.target;
  document.getElementById('editGoalCurrent').value = g.current || 0;
  editSelectedGoalIcon = g.icon || '🚗';
  updateEmojiPreview('editGoalEmojiPreview', editSelectedGoalIcon);
  document.getElementById('editGoalOverlay').classList.add('active');
}

function closeEditGoal() { 
  document.getElementById('editGoalOverlay').classList.remove('active'); 
  closeEmojiKeyboard();
}

async function saveEditGoal() {
  const id = Number(document.getElementById('editGoalId').value);
  const n = document.getElementById('editGoalName').value.trim();
  const t = parseFloat(document.getElementById('editGoalTarget').value) || 0;
  const c = parseFloat(document.getElementById('editGoalCurrent').value) || 0;
  if (!n) { alert('Название'); return; }
  const g = await dbGet('goals', id);
  if (g) { g.name = n; g.target = t; g.current = c; g.icon = editSelectedGoalIcon; await dbPut('goals', g); }
  closeEmojiKeyboard();
  closeEditGoal();
  await renderSettingsGoals();
  await renderHome();
}

async function deleteGoal(id) { if (confirm('Удалить цель?')) { await dbDelete('goals', id); await renderSettingsGoals(); } }

// ===== ФИЛЬТРАЦИЯ =====
async function updateCategorySelect(sel, type) { const cats = await dbGetAll('categories'); sel.innerHTML = cats.filter(c => c.type === type).map(c => `<option value="${c.name}">${c.icon || ''} ${c.name}</option>`).join(''); }

function updateCalcInputColor() {
  const input = document.getElementById('calcInput');
  if (!input) return;
  input.classList.remove('income', 'expense', 'transfer');
  if (currentTxType === 'income') {
    input.classList.add('income');
  } else if (currentTxType === 'expense') {
    input.classList.add('expense');
  } else {
    input.classList.add('transfer');
  }
  adjustCalcFontSize();
}

function adjustCalcFontSize() {
  const input = document.getElementById('calcInput');
  if (!input) return;
  
  input.style.height = 'auto';
  input.style.height = input.scrollHeight + 'px';
  
  const len = input.value.length;
  input.classList.remove('small-font', 'xsmall-font');
  if (len > 16) {
    input.classList.add('xsmall-font');
  } else if (len > 9) {
    input.classList.add('small-font');
  }
  
  input.style.height = 'auto';
  input.style.height = input.scrollHeight + 'px';
}

async function setTxType(type) { 
  currentTxType = type; 
  document.querySelectorAll('.type-btn').forEach(b => { b.classList.remove('active'); if (b.dataset.type === type) b.classList.add('active'); }); 
  const tf = document.getElementById('transferFields'), nf = document.getElementById('normalFields'); 
  if (type === 'transfer') { tf.style.display = 'block'; nf.style.display = 'none'; updateTransferSelects(); } 
  else { tf.style.display = 'none'; nf.style.display = 'block'; updateNormalSelects(); await updateCategorySelect(document.getElementById('txCategory'), type); } 
  updateCalcInputColor();
}

// ===== ГЛАВНЫЙ ЭКРАН =====
async function renderHome() {
  if (!DB) return;
  const accs = await dbGetAll('accounts'), txs = await dbGetAll('transactions'), goals = await dbGetAll('goals'), sets = await dbGetAll('settings'), debts = await dbGetAll('debts');
  const userName = (sets.find(s => s.key === 'userName')?.value) || 'Бро';
  updateGreeting();
  document.getElementById('greetingText').textContent = document.getElementById('greetingText').textContent.replace('Бро', userName);
  currentCurrency = (sets.find(s => s.key === 'currency')?.value) || '₽';
  let total = accs.reduce((s, a) => s + (Number(a.balance) || 0), 0);
  total -= debts.filter(d => d.type === 'owe' && !d.addToBalance && (d.paid < d.amount)).reduce((s, d) => s + Math.max(0, (Number(d.amount) || 0) - (Number(d.paid) || 0)), 0);
  total += debts.filter(d => d.type === 'owed' && !d.addToBalance && (d.paid < d.amount)).reduce((s, d) => s + Math.max(0, (Number(d.amount) || 0) - (Number(d.paid) || 0)), 0);
  document.getElementById('totalBalance').textContent = formatMoney(total);
  const g = goals[0];
  if (g) { document.getElementById('goalName').textContent = g.name; document.getElementById('goalProgress').textContent = formatMoney(g.current || 0) + ' / ' + formatMoney(g.target); document.getElementById('goalIcon').textContent = g.icon || '🎯'; const pct = g.target > 0 ? ((g.current || 0) / g.target) * 100 : 0; document.getElementById('goalPercent').textContent = pct.toFixed(1) + '%'; document.getElementById('goalCircle').style.background = `conic-gradient(#D4A017 0% ${pct}%, #30363D ${pct}% 100%)`; }
  const gu = '<svg class="stat-arrow" viewBox="0 0 24 24" fill="none" stroke="#3FB950" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/><path d="M12 21V9"/></svg>';
  const rd = '<svg class="stat-arrow" viewBox="0 0 24 24" fill="none" stroke="#F85149" stroke-width="2.5"><path d="M6 9l6 6 6-6"/><path d="M12 3v12"/></svg>';
  document.getElementById('accountsList').innerHTML = accs.map(a => { const at = txs.filter(t => t.accountId === a.id && t.type !== 'transfer'); return `<div class="account-card"><div class="account-name">${a.name}</div><div class="account-balance">${formatMoney(a.balance)}</div><div class="account-stats"><div class="stat-item"><div class="stat-label">${gu} <span>${t('income')}</span></div><div class="stat-value green">${formatMoney(at.filter(t=>t.type==='income').reduce((s,t)=>s+Number(t.amount),0))}</div></div><div class="stat-item"><div class="stat-label">${rd} <span>${t('expense')}</span></div><div class="stat-value red">${formatMoney(at.filter(t=>t.type==='expense').reduce((s,t)=>s+Number(t.amount),0))}</div></div></div></div>`; }).join('');
  const activeDebts = debts.filter(d => (d.paid || 0) < (d.amount || 0)).sort((a,b) => b.id - a.id);
  document.getElementById('homeDebtsList').innerHTML = activeDebts.map(d => { const remaining = Math.max(0, (d.amount || 0) - (d.paid || 0)); const dueDateStr = d.dueDate ? `<div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">Вернуть до: ${formatDate(d.dueDate)}</div>` : ''; const balanceStr = d.addToBalance ? `<div style="font-size:10px; color:var(--accent);">На балансе</div>` : ''; return `<div class="home-debt-card" onclick="openPayDebt(${d.id})"><div class="home-debt-header"><div><div class="home-debt-name">${d.name || 'Без названия'}</div><div class="home-debt-type" style="color:${d.type === 'owe' ? 'var(--danger)' : 'var(--green)'};">${d.type === 'owe' ? t('iOwe') : t('owedToMe')} • ${formatDate(d.startDate || d.date)}</div>${dueDateStr}${balanceStr}</div><div class="home-debt-right"><div class="home-debt-progress">${formatMoney(d.paid || 0)} / ${formatMoney(d.amount || 0)}</div><div class="home-debt-remaining ${d.type === 'owe' ? 'red' : 'green'}">${formatMoney(remaining)}</div></div></div></div>`; }).join('') || '<div style="padding:12px; color:var(--text-secondary); font-size:14px;">Нет активных долгов</div>';
}

// ===== АНАЛИТИКА =====
async function renderAnalytics() {
  if (!DB) return;
  const txs = await dbGetAll('transactions');
  updateMonthLabel();
  
  const targetMonthStr = getMonthStr(currentYear, currentMonth);
  
  const filtered = txs.filter(t => { 
    if (!t.date) return false;
    const monthMatch = t.date.startsWith(targetMonthStr);
    const accountMatch = !selectedAccountId || 
      t.accountId === selectedAccountId || 
      (t.type === 'transfer' && t.toAccountId === selectedAccountId);
    return monthMatch && accountMatch;
  });
  
  const inc = filtered.filter(t=>t.type==='income').reduce((s,t)=>s+Number(t.amount),0);
  const exp = filtered.filter(t=>t.type==='expense').reduce((s,t)=>s+Number(t.amount),0);
  
  const gv = document.getElementById('growthValue'); 
  gv.textContent = (inc-exp >= 0 ? '+' : '') + formatMoney(inc-exp); 
  gv.className = 'growth-amount ' + (inc-exp >= 0 ? 'green' : 'red');
  
  const content = document.getElementById('analyticsContent');
  
  if (currentFilter === 'transactions') {
    const grp = {};
    for (const t of filtered) { 
      const dk = t.date; 
      if (!grp[dk]) grp[dk] = { income: 0, expense: 0, items: [] }; 
      if (t.type==='income') grp[dk].income += Number(t.amount); 
      else if (t.type==='expense') grp[dk].expense += Number(t.amount); 
      grp[dk].items.push(t); 
    }
    
    for (const d of Object.keys(grp)) {
      for (const item of grp[d].items) {
        item.emoji = await getCategoryEmoji(item.category, item);
      }
    }
    
    const sortedDays = Object.keys(grp).sort((a,b) => b.localeCompare(a));
    
    if (sortedDays.length === 0) {
      content.innerHTML = '<p style="text-align:center; padding:20px; color:var(--text-secondary);">Нет транзакций за этот месяц</p>';
    } else {
      content.innerHTML = sortedDays.map(d => { 
        const day = grp[d]; 
        let tot = ''; 
        if (day.income > 0 || day.expense > 0) { 
          tot = '<div class="day-totals">'; 
          if (day.income > 0) tot += `<span class="green">+${formatMoney(day.income)}</span>`; 
          if (day.income > 0 && day.expense > 0) tot += '<div class="day-total-separator"></div>'; 
          if (day.expense > 0) tot += `<span class="red">-${formatMoney(day.expense)}</span>`; 
          tot += '</div>'; 
        }
        
        const itemsHTML = day.items
          .sort((a,b) => b.id - a.id)
          .map(t => {
            let amountClass = 'red';
            let prefix = '-';
            if (t.type === 'income') { amountClass = 'green'; prefix = '+'; }
            else if (t.type === 'transfer') { amountClass = 'green'; prefix = '→'; }
            const emoji = t.goalIcon || t.emoji || '';
            return `<div class="tx-item" onclick="openEditTx(${t.id})">
              <div class="tx-info">
                <div class="tx-category">${emoji} ${t.type==='transfer'?'Перевод':(t.category||'Без категории')}${t.debtId ? ' 💳' : ''}${t.recurringId ? ' 🔄' : ''}</div>
                ${t.comment?`<div class="tx-comment">${t.comment}</div>`:''}
                ${t.type==='transfer'?`<div class="tx-comment">${t.fromAccountName||'?'} → ${t.toAccountName||'?'}</div>`:''}
              </div>
              <div class="tx-amount ${amountClass}">${prefix}${formatMoney(t.amount)}</div>
            </div>`;
          }).join('');
        
        return `<div class="transaction-day">
          <div class="day-header">
            <span>${formatDate(d)}</span>
            ${tot}
          </div>
          ${itemsHTML}
        </div>`; 
      }).join('');
    }
  } else {
    const isInc = currentFilter === 'income'; 
    const total = isInc ? inc : exp;
    const now = new Date();
    const viewedDate = new Date(currentYear, currentMonth, 1);
    let daysForAverage;
    if (viewedDate.getMonth() === now.getMonth() && viewedDate.getFullYear() === now.getFullYear()) {
      daysForAverage = now.getDate();
    } else {
      daysForAverage = new Date(currentYear, currentMonth + 1, 0).getDate();
    }
    const avg = total / Math.max(1, daysForAverage);
    
    const md = []; 
    const ml = currentLanguage === 'en' ? ['J','F','M','A','M','J','J','A','S','O','N','D'] : ['Я','Ф','М','А','М','И','И','А','С','О','Н','Д'];
    for (let i = 0; i < 12; i++) { 
      const monthStr = getMonthStr(currentYear, i);
      const mt = txs.filter(t => { 
        if (!t.date) return false;
        return t.date.startsWith(monthStr) &&
        (!selectedAccountId || t.accountId===selectedAccountId) && 
        (isInc ? t.type==='income' : t.type==='expense'); 
      }); 
      md.push(mt.reduce((s,t)=>s+Number(t.amount),0)); 
    }
    const mx = Math.max(...md, 1);
    const barHTML = `<div class="bar-chart">${md.map((v,i) => `<div class="bar-container"><div class="bar" style="height:${(v/mx)*100}%; background:${i===currentMonth?'#D4A017':'#30363D'};"></div><div class="bar-label">${ml[i]}</div></div>`).join('')}</div>`;
    
    const catMap = {}; 
    for (const t of filtered.filter(t=>isInc?t.type==='income':t.type==='expense')) { 
      const c = t.category||'Другое'; 
      if (!catMap[c]) catMap[c] = { amount: 0, emoji: '📌' }; 
      catMap[c].amount += Number(t.amount); 
      catMap[c].emoji = await getCategoryEmoji(c, t); 
    }
    const catTotal = Object.values(catMap).reduce((s,v)=>s+v.amount,0); 
    const colors = ['#D4A017','#3FB950','#F85149','#58A6FF','#BC8CFF','#8B949E'];
    let pieHTML = ''; 
    if (catTotal > 0) { 
      let cg = 'conic-gradient('; 
      let cp = 0; 
      const ce = Object.entries(catMap); 
      ce.forEach(([cat,val],i) => { 
        const p = (val.amount/catTotal)*100; 
        cg += `${colors[i%colors.length]} ${cp}% ${cp+p}%`; 
        if (i<ce.length-1) cg += ', '; 
        cp += p; 
      }); 
      cg += ')'; 
      pieHTML = `<div class="pie-chart-container"><div class="pie-chart" style="background:${cg};"></div></div>`; 
    }
    
    content.innerHTML = `<div class="card"><div class="analytics-summary"><div class="analytics-summary-item"><div class="analytics-summary-label">${isInc?'Доходы':'Расходы'} за месяц</div><div class="analytics-summary-value">${formatMoney(total)}</div></div><div class="analytics-summary-item"><div class="analytics-summary-label">Среднее в день</div><div class="analytics-summary-value">${formatMoney(avg)}</div></div></div>${barHTML}</div><div class="card"><h4 style="margin-bottom:12px;">По категориям</h4>${pieHTML}${Object.entries(catMap).map(([cat,val]) => { const pct = catTotal>0?((val.amount/catTotal)*100).toFixed(1):0; return `<div style="margin-bottom:12px;"><div style="display:flex; justify-content:space-between; font-size:14px;"><span>${val.emoji} ${cat}</span><span>${formatMoney(val.amount)} (${pct}%)</span></div><div style="height:4px; background:#30363D; border-radius:4px; margin-top:4px;"><div style="width:${pct}%; height:4px; background:${colors[Object.keys(catMap).indexOf(cat)%colors.length]}; border-radius:4px;"></div></div></div>`; }).join('') || '<p>Нет данных</p>'}</div>`;
  }
}

function changeMonth(d) { 
  currentMonth += d; 
  if (currentMonth < 0) { currentMonth = 11; currentYear--; } 
  if (currentMonth > 11) { currentMonth = 0; currentYear++; } 
  
  const content = document.getElementById('analyticsContent');
  if (content) content.innerHTML = '';
  
  renderAnalytics(); 
}

function setFilter(f) { 
  currentFilter = f; 
  updateFilterPills();
  renderAnalytics(); 
}

async function openAccountFilter() { const accs = await dbGetAll('accounts'); document.getElementById('accountFilterList').innerHTML = `<div class="list-item" onclick="selectAccount(null)" style="cursor:pointer;"><span style="${!selectedAccountId?'color:var(--accent);':''}">Все счета</span></div>` + accs.map(a => `<div class="list-item" onclick="selectAccount(${a.id})" style="cursor:pointer;"><span style="${selectedAccountId===a.id?'color:var(--accent);':''}">${a.name}</span></div>`).join(''); document.getElementById('accountFilterOverlay').classList.add('active'); }
function selectAccount(id) { selectedAccountId = id; document.getElementById('accountFilterOverlay').classList.remove('active'); renderAnalytics(); }
function closeAccountFilter() { document.getElementById('accountFilterOverlay').classList.remove('active'); }
async function openEditTx(id) { editingTxId = id; const tx = await dbGet('transactions', id); if (!tx) return; oldTxAmount = tx.amount; oldTxType = tx.type; oldTxAccountId = tx.accountId; document.getElementById('editTxType').value = tx.type; document.getElementById('editTxAmount').value = tx.amount; document.getElementById('editTxDate').value = tx.date; document.getElementById('editTxComment').value = tx.comment || ''; const accs = await dbGetAll('accounts'); document.getElementById('editTxAccount').innerHTML = accs.map(a => `<option value="${a.id}" ${a.id===tx.accountId?'selected':''}>${a.name}</option>`).join(''); await updateEditCategories(); document.getElementById('editTxOverlay').classList.add('active'); }
async function updateEditCategories() { const type = document.getElementById('editTxType').value; const cats = await dbGetAll('categories'); document.getElementById('editTxCategory').innerHTML = cats.filter(c => c.type === type).map(c => `<option value="${c.name}">${c.icon||''} ${c.name}</option>`).join(''); }
function closeEditTx() { document.getElementById('editTxOverlay').classList.remove('active'); editingTxId = null; }
async function saveEditTx() { 
  if (!editingTxId) return; 
  const amt = parseFloat(document.getElementById('editTxAmount').value); 
  if (isNaN(amt) || amt <= 0) { alert('Введите сумму'); return; } 
  const tx = await dbGet('transactions', editingTxId); 
  if (!tx) return; 
  
  if (tx.goalId && tx.goalAmount) {
    const goal = await dbGet('goals', tx.goalId);
    if (goal) {
      const diff = amt - tx.goalAmount;
      goal.current = Math.max(0, (Number(goal.current) || 0) + diff);
      await dbPut('goals', goal);
      tx.goalIcon = goal.icon || '🎯';
    }
  }
  
  const nt = document.getElementById('editTxType').value, na = amt, nid = Number(document.getElementById('editTxAccount').value); 
  if (oldTxAccountId) { 
    const oa = await dbGet('accounts', oldTxAccountId); 
    if (oa) { 
      if (oldTxType==='income') oa.balance = Number(oa.balance) - oldTxAmount; 
      else oa.balance = Number(oa.balance) + oldTxAmount; 
      await dbPut('accounts', oa); 
    } 
  } 
  const naa = await dbGet('accounts', nid); 
  if (naa) { 
    if (nt==='income') naa.balance = Number(naa.balance) + na; 
    else naa.balance = Number(naa.balance) - na; 
    await dbPut('accounts', naa); 
  } 
  tx.type = nt; 
  tx.amount = na; 
  tx.accountId = nid; 
  tx.category = document.getElementById('editTxCategory').value; 
  tx.date = document.getElementById('editTxDate').value; 
  tx.comment = document.getElementById('editTxComment').value; 
  if (tx.goalId) tx.goalAmount = na;
  await dbPut('transactions', tx); 
  closeEditTx(); 
  renderAnalytics(); 
  renderHome(); 
}
async function deleteTx() { 
  if (!editingTxId) return; 
  if (!confirm('Удалить транзакцию?')) return; 
  const tx = await dbGet('transactions', editingTxId); 
  if (!tx) return; 
  
  if (tx.goalId && tx.goalAmount) {
    const goal = await dbGet('goals', tx.goalId);
    if (goal) {
      goal.current = Math.max(0, (Number(goal.current) || 0) - Number(tx.goalAmount));
      await dbPut('goals', goal);
    }
  }
  
  if (tx.type==='transfer' && tx.toAccountId) { 
    const ta = await dbGet('accounts', tx.toAccountId); 
    if (ta) { 
      ta.balance = Number(ta.balance) - tx.amount; 
      await dbPut('accounts', ta); 
    } 
  } 
  
  const a = await dbGet('accounts', tx.accountId); 
  if (a) { 
    if (tx.type==='income') a.balance = Number(a.balance) - tx.amount; 
    else a.balance = Number(a.balance) + tx.amount; 
    await dbPut('accounts', a); 
  } 
  
  await dbDelete('transactions', editingTxId); 
  closeEditTx(); 
  renderAnalytics(); 
  renderHome(); 
}
async function updateSelects() { updateNormalSelects(); updateTransferSelects(); document.getElementById('txDate').value = new Date().toISOString().split('T')[0]; await updateCategorySelect(document.getElementById('txCategory'), currentTxType); }
async function updateNormalSelects() { const a = await dbGetAll('accounts'); document.getElementById('txAccount').innerHTML = a.map(x => `<option value="${x.id}">${x.name}</option>`).join(''); }
async function updateTransferSelects() { const a = await dbGetAll('accounts'); document.getElementById('txFromAccount').innerHTML = a.map(x => `<option value="${x.id}">${x.name}</option>`).join(''); document.getElementById('txToAccount').innerHTML = a.map(x => `<option value="${x.id}">${x.name}</option>`).join(''); }
async function saveTransaction() { 
  const amt = parseFloat(document.getElementById('calcInput').value.replace(',', '.')); 
  if (isNaN(amt) || amt <= 0) { alert('Введите сумму'); return; } 
  if (currentTxType === 'transfer') { 
    const fid = Number(document.getElementById('txFromAccount').value), tid = Number(document.getElementById('txToAccount').value); 
    if (fid === tid) { alert('Разные счета'); return; } 
    const fa = await dbGet('accounts', fid), ta = await dbGet('accounts', tid); 
    if (!fa || !ta) return; 
    if (Number(fa.balance) < amt) { alert('Недостаточно средств'); return; } 
    fa.balance = Number(fa.balance) - amt; 
    ta.balance = Number(ta.balance) + amt; 
    await dbPut('accounts', fa); 
    await dbPut('accounts', ta); 
    await dbAdd('transactions', { type: 'transfer', amount: amt, accountId: fid, toAccountId: tid, fromAccountName: fa.name, toAccountName: ta.name, date: document.getElementById('txDate').value, comment: document.getElementById('txComment').value }); 
  } else { 
    const tx = { 
      type: currentTxType, 
      amount: amt, 
      accountId: Number(document.getElementById('txAccount').value), 
      category: document.getElementById('txCategory').value, 
      date: document.getElementById('txDate').value, 
      comment: document.getElementById('txComment').value 
    }; 
    await dbAdd('transactions', tx); 
    const a = await dbGet('accounts', tx.accountId); 
    if (a) { 
      a.balance = Number(a.balance) + (tx.type==='income'?amt:-amt); 
      await dbPut('accounts', a); 
    } 
    
    if (repeatSettings) {
      await dbAdd('recurring_transactions', {
        ...tx,
        frequency: repeatSettings.frequency,
        notify: repeatSettings.notify,
        notifyDays: repeatSettings.notifyDays,
        startDate: tx.date,
        lastCreated: tx.date
      });
    }
  } 
  document.getElementById('calcInput').value = ''; 
  adjustCalcFontSize();
  document.getElementById('txComment').value = ''; 
  document.getElementById('commentBtn').classList.remove('has-comment');
  repeatSettings = null;
  document.getElementById('repeatBtn').classList.remove('has-repeat');
}
async function renderSettingsAccounts() { const a = await dbGetAll('accounts'); const l = document.getElementById('settingsAccountsList'); if (l) l.innerHTML = a.map(x => `<div class="list-item"><span>${x.name} - ${formatMoney(x.balance)}</span><div class="list-item-actions"><button class="icon-action-btn" onclick="openEditAccount(${x.id})">✏️</button><button class="icon-action-btn" onclick="deleteAccount(${x.id})" style="color:var(--danger);">🗑️</button></div></div>`).join(''); }
async function addAccount() { const n = document.getElementById('newAccountName').value.trim(), b = parseFloat(document.getElementById('newAccountBalance').value)||0; if (!n) { alert('Название'); return; } await dbAdd('accounts', { name: n, balance: b }); document.getElementById('newAccountName').value = ''; document.getElementById('newAccountBalance').value = ''; await renderSettingsAccounts(); }
async function openEditAccount(id) { const a = await dbGet('accounts', id); if (!a) return; document.getElementById('editAccountId').value = a.id; document.getElementById('editAccountName').value = a.name; document.getElementById('editAccountBalance').value = a.balance; document.getElementById('editAccountOverlay').classList.add('active'); }
function closeEditAccount() { document.getElementById('editAccountOverlay').classList.remove('active'); }
async function saveEditAccount() { const id = Number(document.getElementById('editAccountId').value), n = document.getElementById('editAccountName').value.trim(), b = parseFloat(document.getElementById('editAccountBalance').value)||0; if (!n) { alert('Название'); return; } const a = await dbGet('accounts', id); if (a) { a.name = n; a.balance = b; await dbPut('accounts', a); } closeEditAccount(); await renderSettingsAccounts(); await renderHome(); }
async function deleteAccount(id) { if (confirm('Удалить счет?')) { await dbDelete('accounts', id); await renderSettingsAccounts(); } }

// ===== ФУНКЦИИ ДЛЯ ПОПОЛНЕНИЯ ЦЕЛИ =====
function toggleGoalBalanceAccount() {
  const toggle = document.getElementById('goalBalanceToggle');
  const section = document.getElementById('goalAccountSection');
  section.style.display = toggle.checked ? 'block' : 'none';
  if (toggle.checked) {
    updateGoalAccountSelect();
  }
}

async function updateGoalAccountSelect() {
  const accounts = await dbGetAll('accounts');
  const select = document.getElementById('goalAccount');
  select.innerHTML = accounts.map(a => `<option value="${a.id}">${a.name} (${formatMoney(a.balance)})</option>`).join('');
}

function openGoalOverlay() { 
  document.getElementById('goalOverlay').classList.add('active'); 
  document.getElementById('goalAmount').value = '';
  document.getElementById('goalBalanceToggle').checked = false;
  document.getElementById('goalAccountSection').style.display = 'none';
}

function closeGoalOverlay() { document.getElementById('goalOverlay').classList.remove('active'); }

async function saveGoalMoney() { 
  const a = parseFloat(document.getElementById('goalAmount').value); 
  if (isNaN(a)||a<=0) { alert('Сумма'); return; } 
  
  const useBalance = document.getElementById('goalBalanceToggle').checked;
  const gs = await dbGetAll('goals'); 
  const g = gs[0]; 
  
  if (g) { 
    if (useBalance) {
      const accountId = Number(document.getElementById('goalAccount').value);
      const account = await dbGet('accounts', accountId);
      
      if (!account) { alert('Выберите счет'); return; }
      
      if (Number(account.balance) < a) {
        alert('Недостаточно средств на счете');
        return;
      }
      
      account.balance = Number(account.balance) - a;
      await dbPut('accounts', account);
      
      const txId = await dbAdd('transactions', {
        type: 'expense',
        amount: a,
        accountId: accountId,
        category: 'Цель',
        date: new Date().toISOString().split('T')[0],
        comment: `Пополнение цели: ${g.name}`,
        goalId: g.id,
        goalAmount: a,
        goalIcon: g.icon || '🎯'
      });
      
      g.current = (Number(g.current)||0) + a; 
      g.lastTransactionId = txId;
      g.lastTransactionAmount = a;
      await dbPut('goals', g);
    } else {
      g.current = (Number(g.current)||0) + a;
      await dbPut('goals', g);
    }
    
    closeGoalOverlay(); 
    await renderHome(); 
  } 
}

// ===== КАЛЬКУЛЯТОР С КНОПКОЙ ЛАСТИК =====
function initCalculator() { 
  const p = document.getElementById('calcPad'); 
  const buttons = ['7','8','9','+','4','5','6','-','1','2','3','*','0','.','/','C','=','⌫'];
  p.innerHTML = buttons.map(c => {
    const isEraser = c === '⌫';
    return `<button class="calc-btn${isEraser ? ' eraser-btn' : ''}">${c}</button>`;
  }).join(''); 
  
  p.onclick = (e) => { 
    if (e.target.tagName !== 'BUTTON') return; 
    const v = e.target.textContent, inp = document.getElementById('calcInput'); 
    if (v === 'C') {
      inp.value = ''; 
      adjustCalcFontSize();
    } else if (v === '⌫') {
      inp.value = inp.value.slice(0, -1);
      adjustCalcFontSize();
    } else if (v === '=') { 
      try { 
        inp.value = eval(inp.value.replace(/,/g, '.')); 
        if (inp.value === 'Infinity') inp.value = ''; 
        adjustCalcFontSize();
      } catch(ex) { 
        inp.value = ''; 
        adjustCalcFontSize();
      } 
    } else {
      inp.value += v; 
      adjustCalcFontSize();
    } 
  };
  
  const inp = document.getElementById('calcInput');
  if (inp) {
    inp.addEventListener('input', adjustCalcFontSize);
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
    adjustCalcFontSize();
  }
}

function updateEmojiPreview(previewId, emoji) {
  const preview = document.getElementById(previewId);
  if (preview) preview.textContent = emoji || '💰';
}

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    const swCode = `const CACHE_NAME='balance-bro-v1';self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(['./'])))});self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>new Response('',{status:200}))))});self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(n=>Promise.all(n.map(c=>{if(c!==CACHE_NAME)return caches.delete(c)}))))});`;
    const blob = new Blob([swCode], { type: 'application/javascript' });
    navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(() => {});
  });
}

async function init() {
  await openDB();
  if ((await dbGetAll('accounts')).length === 0) { await dbAdd('accounts', { name: 'Наличные', balance: 15000 }); await dbAdd('accounts', { name: 'Карта', balance: 45000 }); }
  if ((await dbGetAll('categories')).length === 0) { 
    await dbAdd('categories', { name: 'Зарплата', type: 'income', color: '#3FB950', icon: '💵' }); 
    await dbAdd('categories', { name: 'Фриланс', type: 'income', color: '#58A6FF', icon: '💻' }); 
    await dbAdd('categories', { name: 'Продукты', type: 'expense', color: '#F85149', icon: '🛒' }); 
    await dbAdd('categories', { name: 'Транспорт', type: 'expense', color: '#FF922B', icon: '🚗' }); 
    await dbAdd('categories', { name: 'Развлечения', type: 'expense', color: '#BC8CFF', icon: '🎮' }); 
    await dbAdd('categories', { name: 'Долги', type: 'expense', color: '#F85149', icon: '📋' }); 
    await dbAdd('categories', { name: 'Цель', type: 'expense', color: '#FFD93D', icon: '🎁' }); 
  }
  if ((await dbGetAll('goals')).length === 0) { await dbAdd('goals', { name: 'Отпуск', target: 100000, current: 35000, icon: '✈️' }); }
  
  const s = await dbGetAll('settings');
  if (!s.find(x => x.key === 'userName')) await dbAdd('settings', { key: 'userName', value: 'Бро' });
  if (!s.find(x => x.key === 'currency')) await dbAdd('settings', { key: 'currency', value: '₽' });
  if (!s.find(x => x.key === 'language')) await dbAdd('settings', { key: 'language', value: 'ru' });
  if (!s.find(x => x.key === 'theme')) await dbAdd('settings', { key: 'theme', value: 'dark' });
  const langSetting = s.find(x => x.key === 'language');
  if (langSetting && langSetting.value) { currentLanguage = langSetting.value; document.getElementById('settingsLanguage').value = currentLanguage; }
  const themeSetting = s.find(x => x.key === 'theme');
  if (themeSetting && themeSetting.value) { document.documentElement.setAttribute('data-theme', themeSetting.value); document.getElementById('settingsTheme').value = themeSetting.value; const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.setAttribute('content', themeSetting.value === 'light' ? '#FFFFFF' : '#0D1117'); }
  currentCurrency = (s.find(x => x.key === 'currency')?.value) || '₽';
  applyLanguage();
  initCalculator();
  updateCalcInputColor();
  await processRecurringPayments();
  await renderHome();
  
  setInterval(async () => {
    await processRecurringPayments();
    if (document.getElementById('homeScreen').classList.contains('active')) {
      await renderHome();
    }
  }, 60000);
}
init();