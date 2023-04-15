var score=0;
cross=true;
audiogo= new Audio('boss.mp3')
audio1=new Audio('music1.mp3')
audio2=new Audio('music2.mp3')

audio1.play();

// setInterval(()=>{

//     audio2.play();
// },6000)

    audio2.loop=true;
    audio2.play();



document.onkeydown=function(e){
    console.log("key code is:", e.keyCode);
    if(e.keyCode==38 || e.keyCode==87 || e.keyCode==32){  
       dino =document.querySelector('.dino');
       dino.classList.add('animateDino');

        setTimeout(()=>{
       dino.classList.remove('animateDino')
        },800);
    }
    if(e.keyCode==39 || e.keyCode==68){  
        dino =document.querySelector('.dino');
        dinox=parseInt( window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinox +112 +"px";
    
    }
    
    if(e.keyCode==37 ||  e.keyCode==65){  
        dino =document.querySelector('.dino');
        dinox=parseInt( window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=(dinox-112) +"px";
    
    }
}
setInterval(( )=>{
    dino=document.querySelector('.dino');
    gameOver =document.querySelector('.gameOver');
    obstacle=document.querySelector('.obstacle');

    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    dx=parseInt( window.getComputedStyle(dino,null).getPropertyValue('left'));
    
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    console.log(offsetX,offsetY);
    if(offsetX<120 && offsetY<80){
        gameOver.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
      
      setInterval(()=>{
        audiogo.play()
    },10)  
        audio1.pause();
        audio2.pause();
    }

    else if(offsetX<140 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000)
    
 setTimeout(()=>{
    aniDur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.1;
    obstacle.style.animationDuration= newDur+ 's';

  },500)
}

}, 10)




function updateScore(score){
    scoreCont.innerHTML = " Your Score:" +score ;
}