let html=document.querySelector(".bubbles");
let time=document.querySelector('.subtime');
let htm=document.querySelector('.subhit');
let score=document.querySelector('.subscore');
score.innerHTML=0;
let nums=Number(score.innerHTML);
let k=60;
let num;
function createhit(){
    num=Math.floor(Math.random(0,1)*10);
    htm.textContent=`${num}`;}

let time1=setInterval(function(){
    if(k>-1){
        time.textContent=`${k}`;
        k--;
    }
    else{
        clearInterval(time1);
    }

},1000)
function createbubble(){
    html.innerHTML='';
for(let i=1;i<161;i++){
    let num=Math.floor(Math.random(0,1)*10)
    html.innerHTML+=`<div class="bubble">${num}</div>`;
}}
createbubble()
createhit();
html.addEventListener('click',function(dets){
   
//    console.log( typeof(parseInt(dets.target.textContent)));
    console.log(dets.target.textContent);
    var clickednum=dets.target.textContent;
    console.log(clickednum);
    function increaseScore(){
        nums+=10;
        score.innerHTML=nums;}
    if(htm.textContent===clickednum){
        increaseScore();
      createbubble(); 
      createhit();
    }
    else{
   createbubble(); 
   createhit(); 
    } 
})