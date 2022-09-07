const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return weight / (height*height)
}
function getBMIMeaning(weight, height) {
  //code here
  // let bmi = calculateBMI()
  // switch (bmi){
  //   case bmi < 18.5 :
  //     console.log('Underweight')
  //     break
  //   case bmi > 18.5 && bmi <= 24.9 :
  //     console.log('Normal weight')
  //     break
  //   case bmi > 25:
  //     console.log('Overweight')
  //     break
  // }

  let bmi = calculateBMI(weight,height)
      if (bmi < 18.5){
            return'Underweight'
      }else if (bmi >= 18.5 && bmi < 24.9){ 
            return 'Normal weight'
      }else{
            return'Overweight'
      }
}
module.exports = getBMIMeaning
