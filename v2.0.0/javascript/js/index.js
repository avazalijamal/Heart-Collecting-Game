window.addEventListener("load",function(){

//DOMLARIN OLDUQU HISSE

const ad=document.querySelector("#ad");
const unvan=document.querySelector("#unvan");
const can=document.querySelector("#can");
const xal=document.querySelector("#xal");
const home=document.querySelector("#home");
const play=document.querySelector("#play");
const rang=document.querySelector("#rang");
const gameObj=document.querySelectorAll("#game div");

//DEYISENLER

var interval;
var timer=1000;
var count=0;
var status=true;
const obj=`<img src="./img/heart.png">`;


if(!localStorage.getItem("ad") || !localStorage.getItem("unvan")){

    const a=prompt("Adiniz yazin");
    localStorage.setItem("ad",a);

    const u=prompt("Unvaninizi yazin");
    localStorage.setItem("unvan",u);

}

ad.innerText=localStorage.getItem("ad");
unvan.innerText=localStorage.getItem("unvan");


if(!localStorage.getItem("can") || !localStorage.getItem("xal")){

    localStorage.setItem("can",10);
    localStorage.setItem("xal",0);

}

can.innerText=localStorage.getItem("can");
xal.innerText=localStorage.getItem("xal");



//Control Game
Control();

//PLAY GAME

play.addEventListener("click",function(){

    
    if(status){
        status=false;
        
        count=gameObj.length-1;

        for(let i=0;i<gameObj.length;i++){

            gameObj[i].addEventListener("click",function(){


                if(!status){
                
                    if(gameObj[i].innerHTML==obj){
                        xal.innerText=(parseInt(xal.innerText)+1);
                        localStorage.setItem("xal",xal.innerText);
                        Clear();
                    }else{
                        can.innerText=(parseInt(can.innerText)-1);
                        localStorage.setItem("can",can.innerText);
                        Control();
                    }

                }

            });

        }


        interval=window.setInterval(function(){

            if(!status){

                Clear();
                let r=Random(count);
                gameObj[r].innerHTML=obj;
            }else{
                window.clearInterval(interval);
            }

        },timer);

    }


});


//GAME CLEAR
function Clear(){
    for(let i=0;i<gameObj.length;i++){
        gameObj[i].innerHTML="";
    }
}

//RANDOM FUNCTION
function Random(end=100,start=0){

    return Math.round(start+Math.random()*(end-start));

}

//CONTROL GAME

function Control(){


    if(parseInt(can.innerText)<=0){
        status=true;
        window.clearInterval(interval);

        let s=window.confirm("OYUNU UDUZDUNUZ YENIDEN BASLAMAQ ISTEYIRSINIZMI");

        if(s){

            localStorage.setItem("can",10);
            localStorage.setItem("xal",0);
            can.innerText=localStorage.getItem("can");
            xal.innerText=localStorage.getItem("xal");

        }else{
            Control();
        }

    }


}


//oyundan cixis

home.addEventListener("click",function(){

    let s=window.confirm("OYUNDAN CIXMAQ ISDEYIRSINIZMI?");

    if(s){
        localStorage.clear();
        window.open("game.html","_parent");
    }
    
});



});