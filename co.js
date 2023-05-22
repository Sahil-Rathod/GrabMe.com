let tittle = document.querySelector("#button-overlay-two");
let coupon = document.querySelector(".button-code");

let couponCode = document.getElementById("button-hide-two");

function removeTittle() {
    tittle.style.display = "none";
    coupon.classList.add("revealed");
    coupon.style.display = "initial";
}

couponCode.addEventListener("click",function(){
    navigator.clipboard.writeText(couponCode.innerHTML);

    alert("Copied the text: " + couponCode.innerHTML);
    couponCode.innerHTML ="Code Copied"
});