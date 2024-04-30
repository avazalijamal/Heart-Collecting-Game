window.addEventListener("load",function(){

    //DOM selcimi
    const ad=document.querySelector("#ad");
    const unvan=document.querySelector("#unvan");
    const can=document.querySelector("#can");
    const xal=document.querySelector("#xal");
    const play=document.querySelector("#play");
    const home=document.querySelector("#home");

    //deyisenler
    var interval;
    var timer=2000;
    var count=0;
    var gameObj=[];
    var status=true;
    const obj='<img src="./img/heart.png">';


    //baslanqic konfuqrasiyalar (ad, unvan, xal, can teini)
    if(!localStorage.getItem('ad') && !localStorage.getItem("unvan")){
   
        const a=prompt("Adinizi yazin");
        localStorage.setItem("ad",a);
        const u=prompt("Unavninizi yazin");
        localStorage.setItem("unvan",u);
        
    }

    ad.innerText=localStorage.getItem("ad");
    unvan.innerText=localStorage.getItem("unvan");


    if(!localStorage.getItem("can") && !localStorage.getItem("xal")){
        localStorage.setItem("can",10);
        localStorage.setItem("xal",0);
    }

    can.innerText=localStorage.getItem("can");
    xal.innerText=localStorage.getItem("xal");


    //play game
    play.addEventListener("click",function(){

        if(status){
        
            status=false;
            
            gameObj=document.querySelectorAll("#game div");
            count=(gameObj.length-1);

            for(let i=0;i<gameObj.length;i++){
                
                gameObj[i].addEventListener("click",function(){
                    
                if(!status){

                  if(gameObj[i].innerHTML==obj){
                        xal.innerText=(parseInt(xal.innerText)+1);
                    }else{
                        can.innerText=(parseInt(can.innerText)-1);
                  }

                  Clear();
                  localStorage.setItem("xal",xal.innerText);
                  localStorage.setItem("can",can.innerText);
                  Control();

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

    //tablonu temizle
    function Clear(){
        for(let i=0;i<gameObj.length;i++){
            gameObj[i].innerHTML="";
        }
    }

    //can kontrolu

   function Control(){
       if(parseInt(can.innerText)<=0){
           status=true;
         
           let s=window.confirm("Uyunu uduzdunuz Yeniden baslamaq isdeyisinizmi?");

           if(s){  
               localStorage.setItem("can",10);
               localStorage.setItem("xal",0);
               can.innerText=localStorage.getItem("can");
               xal.innerText=localStorage.getItem("xal");
            }
       }
   }

    //random function
    function Random(m=100,n=0){
        return Math.round(n+Math.random()*(m-n));
    }


    //cixis et homa get
    home.addEventListener("click",function(){

        let s=window.confirm("Oyundan cixirsinizmi? NOT: Xaliniz ve Caniniz sifirlanacaq");

        if(s){
            localStorage.clear();
            window.open("game.html","_parent");
        }

    });


});