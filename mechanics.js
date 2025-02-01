const CreateText = document.getElementById('CreateText')
let TextPart = document.getElementById('TextPart')

function TextAreaCreate(){
  let Text =  document.createElement("TextArea")
TextPart.appendChild(Text)
}
CreateText.addEventListener('click',TextAreaCreate) 




const CreateMonster = document.getElementById('CreateMonster')
const MonsterPart = document.getElementById('MonsterPart')

function TextAreaMonsterCreate(){

let MonsterText = document.createElement("textarea")
MonsterPart.appendChild(MonsterText)
}
CreateMonster.addEventListener('click',TextAreaMonsterCreate)

const Roll = document.getElementById('Roll')
let RollResult = document.getElementById('RollResult').value

function RandomRoll(){
  let minNumber = 1
let MaxNumber = 20;
let result = Math.floor(Math.random() * (MaxNumber- minNumber)) + minNumber;
let Rollcalculations = result

alert(Rollcalculations)

}
Roll.addEventListener('click',RandomRoll)