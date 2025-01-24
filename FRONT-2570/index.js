const dateTextFormatOption = document.querySelector('.date-format-option')
const dateTextNonFormat = document.querySelector('.data-format-non-format')
const dateText = document.querySelector('.date-format')
const dateTextLocaleRu = document.querySelector('.data-format-locale-ru')
const dateTextIntlFormat = document.querySelector('.data-format-intl-format')
const dateFormat = document.querySelector(".data-format-get-date");

const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour12:false,
    hour: 'numeric',
    minute: 'numeric',
}
const newDate = new Date()
const dateNow = Date.now()

const dateStr = "2024-11-14T13:49:22.1695002"
const date = new Date(dateStr)
const currentDay = new Date()


const formatDate = new Intl.DateTimeFormat('ru', options)



dateTextFormatOption.textContent = newDate.toLocaleDateString('ru',options)
dateTextNonFormat.textContent = dateStr
dateText.textContent = date
dateTextLocaleRu.textContent = date.toLocaleString('ru')
dateTextIntlFormat.textContent = formatDate.format(dateNow)
dateFormat.textContent = `${currentDay.getDate() + '.'}${currentDay.getMonth() + 1 + '.'}${currentDay.getFullYear()}`
