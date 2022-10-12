console.log("Welcome To Tic Tac Toe")
let music=new Audio("music.mp3");
let audioTurn=new Audio("ting.mp3")
let gameOver=new Audio("gameover.mp3")
let turn ='X';
let isgameOver=false;

//function to change the turn
const changeTurn =()=>{
    return turn=="X"?"0":"X"

}
//function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[   [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText) && (boxtext[e[1]].innerText==boxtext[e[2]].innerText) &&(boxtext[e[0]].innerText!=="")){
            document.querySelector('#info').innerText="Hurray " + boxtext[e[0]].innerText+" won!!";
            isgameOver=true;
            music.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";

        }
    })
                                    
}

//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxText.innerText==''){
            boxText.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameOver){
                document.getElementById('info').innerText="Turn for"+ turn;
            }
            
            
        }
    })
})

//script for reset button
reset.addEventListener('click',()=>{
    let boxText=document.querySelectorAll('.boxtext');
    Array.from(boxText).forEach(element=>{
        element.innerText="";
        music.pause();

        music.currentTime=0;

    });
    turn='X';
    isgameOver=false;
    document.getElementById('info').innerText="Turn for"+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";




})