// # TEMA DƏYİŞDİRMƏ FUNKSİYASI
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
});

// # VALYUTA DƏYİŞDİRMƏ VƏ HESABLAMA
const currencySelector = document.getElementById('currency-selector');
const prices = document.querySelectorAll('.price-tag');

// # MƏZƏNNƏLƏR (BURADAN DƏYİŞƏ BİLƏRSƏN)
const rates = {
    AZN: { symbol: '₼', val: 1 },
    USD: { symbol: '$', val: 0.59 },
    EUR: { symbol: '€', val: 0.54 }
};

currencySelector.addEventListener('change', (e) => {
    const selected = e.target.value;
    const symbol = rates[selected].symbol;
    const rate = rates[selected].val;

    prices.forEach(el => {
        const base = el.getAttribute('data-base');
        const converted = (base * rate).toFixed(2);
        el.innerText = `${converted} ${symbol}`;
    });
});