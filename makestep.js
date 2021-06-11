const progress =document.getElementsByClassName("progress")
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const step = document.querySelectorAll("step")
let currentActive = 1
next.addEventListener('click', ()=>{
    currentActive++
    if(currentActive>step.length){
        currentActive = step.length
    }
})
prev.addEventListener('click', ()=>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    update()
})
function update(){
    step.forEach((stp,idx) =>{
        if(idx < currentActive){
            stp.classList.add('active')
        }else{
            stp.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll(".active")
    progress.style.width =(actives.length - 1) /(step.length-1)* 100 +'%'
    if(currentActive ===1){
        prev.disabled = true
    }else if(currentActive===step.length){
    next.disabled = true
}else{
    prev.disabled = false
}

}
