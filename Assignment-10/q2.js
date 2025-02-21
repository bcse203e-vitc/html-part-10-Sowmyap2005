const r=document.getElementsByClassName("red")[0];
const b=document.getElementsByClassName("blue")[0];
r.addEventListener('click',function(){
    document.body.style.backgroundColor='red';
});
b.addEventListener('click',function(){
    document.body.style.backgroundColor='blue';
});