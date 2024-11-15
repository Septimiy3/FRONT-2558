const dateText = document.querySelector('.date-format-option')
const dateTextNonFormat = document.querySelector('.data-format-non-format')
const dateTextIso = document.querySelector('.data-format-iso')
const dateTextIsoFormate = document.querySelector('.data-format-iso-format')

const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour12:false,
    hour: 'numeric',
    minute: 'numeric',
}
const newDate = new Date()

const dateStr = "2024-11-14T13:49:22.1695002"
const date = new Date(dateStr)



dateText.textContent = newDate.toLocaleDateString('ru',options)
dateTextNonFormat.textContent = dateStr
dateTextIso.textContent = date
dateTextIsoFormate.textContent = date.toLocaleString('ru')
