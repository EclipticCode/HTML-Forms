let submit = document.querySelector('.submit')
let firstName = document.querySelector(".firstName")
let firstTable = document.querySelector(".firstTable")
let lastName = document.querySelector('.lastName')
let lastTable = document.querySelector(".lastTable")
let genderNameM = document.querySelector('.genderM')
let genderNameF = document.querySelector('.genderF')
let genderTable = document.querySelector('.genderTable')
let addressName = document.querySelector('.address')
let addressTable = document.querySelector('.addressTable')
let stateName = document.querySelector('.state')
let stateTable = document.querySelector('.stateTable')
let pinName = document.querySelector('.pin')
let pinTable = document.querySelector('.pinTable')
let cityName = document.querySelector('.city')
let cityTable = document.querySelector('.cityTable')
let indian = document.querySelector('.indian')
let chinese = document.querySelector('.chinese')
let italian = document.querySelector('.italian')
let mexican = document.querySelector('.mexican')
let korean = document.querySelector('.korean')
let foodTable = document.querySelector('.foodTable')


firstName.addEventListener('change',(e)=>{
 fn = e.target.value
})
lastName.addEventListener('change',(e)=>{
    ln= e.target.value
})
genderNameM.addEventListener('change',(e)=>{
    gen = e.target.value
   
})
genderNameF.addEventListener('change',(e)=>{
    gen = e.target.value
})
addressName.addEventListener('change',(e)=>{
    an = e.target.value
})

stateName.addEventListener('change',(e)=>{
    sn = e.target.value
})
pinName.addEventListener('change',(e)=>{
    pn = e.target.value
})
cityName.addEventListener('change',(e)=>{
    cn = e.target.value
})
indian.addEventListener('change',(e)=>{
    ind = e.target.value
})
chinese.addEventListener('change',(e)=>{
    chin = e.target.value
})
italian.addEventListener('change',(e)=>{
    ita = e.target.value
})
mexican.addEventListener('change',(e)=>{
    mex = e.target.value
})
korean.addEventListener('change',(e)=>{
    kor = e.target.value
})

function clicked (){
    firstTable.append(fn)
    lastTable.append(ln)
    genderTable.append(gen)
    addressTable.append(an)
    stateTable.append(sn)
    cityTable.append(cn)
    pinTable.append(pn)
}
function clicked1(){
    foodTable.append(ind)
}
function clicked2(){
    foodTable.append(chin)
}
function clicked3(){
    foodTable.append(ita)
}
function clicked4(){
    foodTable.append(mex)
}
function clicked5(){
    foodTable.append(kor)
}
submit.addEventListener("click",clicked)
submit.addEventListener("click",clicked1)
submit.addEventListener("click",clicked2)
submit.addEventListener("click",clicked3)
submit.addEventListener("click",clicked4)
submit.addEventListener("click",clicked5)


