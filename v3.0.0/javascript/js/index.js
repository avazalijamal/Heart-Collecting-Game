window.addEventListener("load",function(){

    const ad=document.querySelector("#ad");
    const unvan=document.querySelector("#unvan");
    const can=document.querySelector("#can");
    const xal=document.querySelector("#xal");
    const game=document.querySelectorAll("#game div");
    const home=document.querySelector("#home");
    const play=document.querySelector("#play");
    const rang=document.querySelector("#rang");

    const img='<img src="./img/heart.png">';
    var status=true;
    var interval;
    const time=1000;
    var count=0;

    if(!localStorage.getItem("ad") || !localStorage.getItem("unvan")){

    localStorage.setItem("ad",prompt("Adinizi yazin"));
    localStorage.setItem("unvan",prompt("Unvani yazin"));

    }

    ad.innerText=localStorage.getItem("ad");
    unvan.innerText=localStorage.getItem("unvan");


    if(!localStorage.getItem("can") || !localStorage.getItem("xal")){

        localStorage.setItem("can",10);
        localStorage.setItem("xal",0);

    }

    can.innerText=localStorage.getItem("can");
    xal.innerText=localStorage.getItem("xal");

    Control();

    play.addEventListener("click",function(){

        if(status){
            
            status=false;
            count=game.length-1;


        for(let i=0;i<=count;i++){
            game[i].addEventListener("click",function(){

        if(!status){
            if(game[i].innerHTML == img){
            Clear();
            xal.innerText=parseInt(xal.innerText)+1
            localStorage.setItem("xal", xal.innerText);
            }else{
            can.innerText=parseInt(can.innerText)-1;
            localStorage.setItem("can", can.innerText);
            Control();

            }
        }


            })
        }


            interval=window.setInterval(function(){
                if(!status){
                    Clear();
                    let i=Random(count);
                    game[i].innerHTML=img;
                }else{
                    window.clearInterval(interval);
                }

            },time);

        }

    });

    home.addEventListener("click",function(){

        if(window.confirm("Gedirsinizmi?")){
            localStorage.clear();
            window.open("index.html","_parent");
        }

    });

    function Control(){
        if(parseInt(can.innerText)<=0){
            status=true;
            window.clearInterval(interval);

            if(window.confirm("Oyunu uduzdun yeniden balayaqmi?")){

        localStorage.setItem("can",10);
        localStorage.setItem("xal",0);
        can.innerText=localStorage.getItem("can");
        xal.innerText=localStorage.getItem("xal");
        Clear();


            }else{
                Control();
            }
        }
    }

    function Clear(){
        for(let i=0;i<=count;i++){
            game[i].innerHTML="";
        }
    }

    function Random(end,start=0){
    return Math.round(start+Math.random()*(end-start));
    }


});