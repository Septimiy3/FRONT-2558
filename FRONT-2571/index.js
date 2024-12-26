const enEuFormat = document.querySelector(".en-eu-format");
const ruFormat = document.querySelector(".ru-format");
const deFormat = document.querySelector(".de-format");
const decimalNumber = document.querySelector(".decimal-number");
const ruCurrency = document.querySelector(".ru-currency");
const ruCurrencyIntl = document.querySelector(".ru-currency-intl");
const japCurrencyIntl = document.querySelector(".jap-currency-intl");

const number = 1000000;
const numberDecimal = 1234.56789989;

enEuFormat.textContent = number.toLocaleString("en-US");
ruFormat.textContent = number.toLocaleString("ru");
deFormat.textContent = number.toLocaleString("de-DE");
decimalNumber.textContent = numberDecimal.toFixed(3);
ruCurrency.textContent = number.toLocaleString("en-US", {
  style: "currency",
  currency: "rub",
});
ruCurrencyIntl.textContent = new Intl.NumberFormat("ru", {
  style: "currency",
  currency: "rub",
}).format(number);
japCurrencyIntl.textContent = new Intl.NumberFormat("JPY", {
  style: "currency",
  currency: "JPY",
}).format(number);
