// Tema Dəyişdirmə (Light/Dark Mode)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
});

// Valyuta Dəyişməsi
const currencySelect = document.getElementById('currency-select');
const prices = document.querySelectorAll('.price');

const rates = {
    AZN: { rate: 1, symbol: '₼' },
    USD: { rate: 0.59, symbol: '$' },
    EUR: { rate: 0.54, symbol: '€' }
};

currencySelect.addEventListener('change', (e) => {
    const selected = e.target.value;
    const { rate, symbol } = rates[selected];

    prices.forEach(priceSpan => {
        const basePrice = parseFloat(priceSpan.getAttribute('data-base-price'));
        const newPrice = (basePrice * rate).toFixed(2);
        priceSpan.innerText = `${newPrice} ${symbol}`;
    });
});