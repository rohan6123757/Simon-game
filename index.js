function activeButton(n) {
    var a = $("." + n).addClass("pressed");
    setTimeout(function () {
        a.removeClass("pressed");
    }, 100);
}

function redAlert() {
    document.querySelector('body').style.backgroundColor = 'red';
    setTimeout(function () {
        document.querySelector('body').style.backgroundColor = '#011F3F';
    }, 100);
}


function sound(n) {
    audio = new Audio("sounds/" + n + ".mp3");
    audio.play();
}

function random() {
    var lis = ['r', 'b', 'g', 'y'];
    var c = Math.floor(Math.random() * 4)
    activeButton(lis[c])
    sound(lis[c]);
    return lis[c];
}


var comp = [];
$(document).keypress(function (event) {
    if (event.key === 's') {
        $("h1").text("Game started");

        setTimeout(function () {
            comp.push(random());
        }, 500);
        // ----------------------------------------------------
        lis = ['r', 'b', 'g', 'y'];
        for (var i = 0; i < 4; i++) {
            var user = [];
            $("." + lis[i]).click(function () {
                activeButton(this.innerHTML);
                sound(this.innerHTML);
                user.push(this.innerHTML);

                if (user.length==comp.length){
                    $("h1").text("level:-" + String(comp.length));
                    if (JSON.stringify(comp) == JSON.stringify(user)){
                        setTimeout(function () {
                            comp.push(random());
                        }, 500);
                        user=[]
                         
                    }else{
                        $("h1").text("Game Over please Refresh!");
                        audio = new Audio("sounds/wrong.mp3");
                        audio.play();
                        $("h1").css('color', 'red');
                        redAlert(); 
                    }
                } 
                 
 

            })
        }
        // ------------------------------------------------------------        
    }
});



 

