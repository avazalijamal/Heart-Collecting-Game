// &#129409;


window.addEventListener("load", function () {

    var score = Number(localStorage.getItem("score"));
    var heart = 10;
    var index = 0;
    const item = "🦁";
    const can = document.querySelector("#can");
    const xal = document.querySelector("#xal");
    const games = document.querySelectorAll("#game div");

    can.innerText = heart;
    xal.innerText = score;

    ClickAll();

    setInterval(function () {
        RemoveItem(index);
        index = Random(0, 8);
        games[index].innerHTML = item;
    }, 2000);

    function ClickAll() {

        for (let i = 0; i < games.length; i++) {
            games[i].addEventListener("click", function () {
                let temp = games[i].innerHTML;

                RemoveItem(i);

                if (temp == item) {
                    score++;
                    localStorage.setItem("score",score);
                    xal.innerText = score;
                } else {
                    heart--;
                    can.innerText = heart;

                    if (heart < 1) {

                        do {
                            var izin = confirm("Oyunu uduzdunuz yeniden baslayaqmi?");
                        } while (!izin);

                        window.open("index.html", "_parent");
                    }
                }

            });
        }
    }



    function Random(start, end) {
        return Math.round(start + Math.random() * (end - start));
    }

    function RemoveItem(index) {
        games[index].innerHTML = "";
    }




});