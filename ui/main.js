console.log('Loaded!');
var element= document.getElementById('main-text');
element.innerHTML='hello u are awesome';
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight{(){
    marginLeft=maginLeft+10;
    img.style.marginLeft= marginLeft +'px';
}
img.onclick = function(){
    var interval=setInteval(moveRight.100);
};