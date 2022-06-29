let btn = document.getElementById("btn");
let inp = document.getElementById("inp");
let boxs = document.querySelectorAll(".box");
let drag = null; 
btn.addEventListener("click", (params) => {
    if (inp.value != ''){
     boxs[0].innerHTML +=`
     <p class="item" draggable="true">${inp.value}</p>
     `
    inp.value = '' ;
    }
    dragitem(); 
})
  function dragitem(){
    let items = document.querySelectorAll(".item");
    items.forEach(item=>{
        item.addEventListener("dragstart",function 
        () {    
            drag = item ;
            item.style.opacity = '.5'
          })
        item.addEventListener("dragend",function 
        () {
            drag = null ;   
            item.style.opacity = '1'
        })  
        boxs.forEach(box=>{
            box.addEventListener("dragover", function (e) {
                e.preventDefault() // stop for this function 
                this.style.background = '#090' // green 
                this.style.color = '#fff'
            })
            box.addEventListener("dragleave", function () {
                this.style.background = '#fff'  // white 
                this.style.color = '#000'

            })
            box.addEventListener("drop", function () {
               box.append(drag)
               this.style.background = '#fff'
               this.style.color = '#000'
            })
        })
    })
}
