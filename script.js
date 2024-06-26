let main = document.getElementById("main");
let arr = ["https://i.pinimg.com/564x/75/77/28/757728ea03cf11b495d92a9852a9f060.jpg",
    "https://i.pinimg.com/564x/3d/38/27/3d38278f22f8b833ae5b9e0cb48c941b.jpg",
    "https://i.pinimg.com/736x/96/fd/69/96fd695f40f32bad5028cb525c5c6163.jpg",
    "https://i.pinimg.com/564x/6f/e4/aa/6fe4aaf2d78031a65114d39ed2e61784.jpg",
    "https://i.pinimg.com/736x/4a/11/1b/4a111bc429164a6f01860d966a003b05.jpg"];
let s = "";
for(i = 0; i <=100-3; i++){
    let r = Math.floor(Math.random()*(arr.length));
    s+=`<div class="card"><img src = ${arr[r]}> </div>`
}
main.innerHTML = s;