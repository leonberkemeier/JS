setInterval(setClock, 1000)

const hourPointer = document.querySelector('[data-hour-pointer]')
const minutePointer = document.querySelector('[data-minute-pointer]')
const secondPointer = document.querySelector('[data-second-pointer]')

function setClock(){
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hourRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondPointer, secondsRatio)
  setRotation(minutePointer, minutesRatio)
  setRotation(hourPointer, hourRatio)

}

function setRotation(element, rotationRatio){
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
