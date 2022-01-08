const passInp = document.getElementById("password")


function clickedTwice() {
    if(passInp.type === 'password') {passInp.type = "text"}
    else {passInp.type = "password"}

}

const pass = document.querySelector("#password")
const txt = document.querySelector("#email")
const submitBtn = document.querySelector("#submitBtn")

pass.addEventListener("focus", ()=>{
  if (txt.value ==="") txt.classList.add("colorTransition")
  else txt.classList.remove("colorTransition")
} ) 

pass.addEventListener("focusout", ()=>{
  if(pass.value === "") pass.classList.add("colorTransition")
  else pass.classList.remove("colorTransition") 
} )

txt.addEventListener("focusout", ()=>{
  if(txt.value === "") txt.classList.add("colorTransition")
  else txt.classList.remove("colorTransition") 
} )

