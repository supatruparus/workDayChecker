var resultBlock = document.getElementById('resultBlock')

var form = document.getElementById('form')
var datePicker = document.getElementById('datePicker')

var firstWorkDay = Date.parse('2022-12-8')

resultBlock.addEventListener('click', () => {
  console.log('hi block1')
  showCurrentDate()
})
form.addEventListener('input', () => {
  checkWork()
})

function showResult() {
  var element = document.createElement('div')
  element.id = 'resultTitle'
  element.innerText = 'Этот день '


  var result = checkDate('рабочий')
  var valueText = document.createElement('span')
  valueText.innerText = result

  resultBlock.appendChild(element)
  resultBlock.appendChild(valueText)
}

function checkDate(date) {
  return date
}
function showPickedDate() {
  console.log(datePicker.value)

}
function showCurrentDate() {
  var currentDate = Date.now()
  console.log(currentDate)
  console.log(typeof currentDate)
}
function showPickedDateInt() {
  var pickedDate = Date()
  pickedDate = Date.parse(datePicker.value)
  console.log(pickedDate)
  console.log(typeof pickedDate)

}
function calculateDays() {
  //Считает сколько дней прошло с введенной даты до сегодня
  var result = Date.parse(datePicker.value) - firstWorkDay //вычитает из выбранной даты дату первого рабочего дня
  var resultDays = (result / (1000 * 60 * 60 * 24)).toFixed(0)
  console.log(`Дней прошло:  ${resultDays}`)
  return resultDays


}
function checkWork(date) {
  var resultDays = calculateDays()
  if (resultDays == 0 || resultDays == 1 || resultDays % 4 == 0 || (resultDays - 1) % 4 == 0) {
    console.log('день рабочий')
    resultBlock.setAttribute('class', 'workText')
    resultBlock.innerText = "день рабочий"

  } else {
    console.log('выходной')
    resultBlock.setAttribute('class', 'noWorkText')
    resultBlock.innerText = 'выходной!'
  }
}