let h1=document.getElementById("con");
let inp=document.getElementById("inp");
console.log(h1.innerText);
inp.onkeyup=()=>{
    h1.innerText=inp.value;
}
