function calculateBMI(){
  let weight = document.querySelector('.input-kg')
  let height = document.querySelector('.input-cm')
  const BMI = weight.value / (height.value/100 * height.value/100)
  let paragElement = document.querySelector('.parag2')
  document.querySelector('.parag1').innerHTML = `<strong>Your BMI:</strong>${BMI.toFixed(2)}`
  if(BMI <= 0){
    paragElement.innerHTML = 'Funny Motherfucker'
  }else if(BMI < 18){
    paragElement.innerHTML = 'Hit the gym BITCH'
  }else if(BMI >= 18 && BMI <= 21){
    paragElement.innerHTML = 'Healthy'
  }else if(BMI >21 && BMI <= 25){
    paragElement.innerHTML = 'So,you go to gym?'
  }else{
    paragElement.innerHTML = 'obese Motherfucker'
  }
}
function Enter(){
  if(event.key === 'Enter'){
    calculateBMI()
  }
}

