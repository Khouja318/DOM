var favs = Array.from(document.querySelectorAll(".fa-heart"))
var deleteBtns = Array.from (document.querySelectorAll(".fa-trash-all"))
var cards = Array.from (document.querySelectorAll(".card"))
var plusBtns = Array.from (document.querySelectorAll(".fa-plus-circle"))
var minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"))


for (let fav of favs) 
(
    fav.addEventListener("click", function{
        if (fav.style.color="black"{
            fav.style.color="red"
        }else{
            fav.style.color="black"
        }
    })
)

for (let i in deleteBtns) {
    deleteBtns[i].addEventListener("click", function(){
        cards[i].remove (),
        total()
    })

}

for (let  plusBtn in plusBtns) {
    plusBtn.addEventListener("click", function(){
        plusBtn.nextElementSibling.innerHtml++
        total()
    })
}

for (let minusBtn of minusBtns) {
        minusBtn.addEventListener("click", function (){
        minusBtn.previousElementSibling.innerHTML >0 ?
        minusBtn.previousElementSibling.innerHTML -- :
        null ,
        total()
    })
}
document.getElementById ("total-price").innerHTML = s 