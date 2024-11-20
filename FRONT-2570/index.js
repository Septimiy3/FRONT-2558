const dateText = document.querySelector('.date-format-option')
const dateTextNonFormat = document.querySelector('.data-format-non-format')
const dateTextIso = document.querySelector('.data-format-iso')
const dateTextIsoFormat = document.querySelector('.data-format-iso-format')
const dateTextIntlFormat = document.querySelector('.data-format-intl-format')

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


const formatDate = new Intl.DateTimeFormat('ru', options)



dateText.textContent = newDate.toLocaleDateString('ru',options)
dateTextNonFormat.textContent = dateStr
dateTextIso.textContent = date
dateTextIsoFormat.textContent = date.toLocaleString('ru')
dateTextIntlFormat.textContent = formatDate.format(dateNow)
