// hacer click en .btn
// agregar clase a .avatar
// y si ya esta la clase quitarla al precionar .btn2
const btn1 = document.querySelector('.avatar .btn1');
const btn2 = document.querySelector('.avatar .btn2');
const avatar = document.querySelector('.card .avatar');
btn1.addEventListener(('click'), ()=>{
    avatar.classList.add('activo');
})
btn2.addEventListener(('click'), ()=>{
    avatar.classList.remove('activo');
})
