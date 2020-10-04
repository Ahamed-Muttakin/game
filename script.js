let ball=document.getElementById('ball');
let block=document.getElementById('block');
let road=document.getElementById('road');
let btn=document.getElementById('button');
window.addEventListener('keydown',checkKeyPress,false);
function checkKeyPress(key){
    if(key.keyCode=='32'){
        jump();
    }
}
function jump(){ 
    if(ball.classList !='animate'){
        ball.classList.add('animate_bounce');
    }
    setTimeout(function(){
        ball.classList.remove('animate_bounce');
    },500);
}
$('#button').click(function(){
    jump();
});
let gameover=setInterval(() => {
    let ball_bottom= parseInt(window.getComputedStyle(ball).getPropertyValue('bottom'));
    let block_left=parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if(block_left<60 && block_left>0 && ball_bottom<=70){
        block.style.animation='none';
        ball.style.animation='none'; 
        road.style.animation='none';
        /* btn.style.opacity=100; */
    }
}, 10);
$('#button').click(function(){
    clearInterval(gameover)
});


