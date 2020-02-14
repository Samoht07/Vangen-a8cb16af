function gooiButton() {
    bal.gooi();
}

function vangButton() {
    bal.vang();
}

function resetButton() {
    bal.reset();
}

// Code gebruikt in een spelletje als voorbeeld.
// canvasContext.font = "30px Comic Sans MS";
// canvasContext.fillStyle = "red";
// canvasContext.fillText("Jouw   score is: " + score, 10, 50);

var bal = {
    canvasBal: constructBal(),
    balPositie: "links",

    gooi: function() {
        if (this.balPositie !== "links") {
            // throw Error("bal in verkeerde positie");
            document.getElementById("positie").innerHTML = "De bal is niet aan het begin!";
        }
        this.draw(300, 50);
        this.balPositie = "midden";
    },

    vang: function() {
        if (this.balPositie !== "midden") {
            // throw Error("bal in verkeerde positie");
            document.getElementById("positie").innerHTML = "De bal is niet in het midden!";
        }
        this.draw(500, 250);
        this.balPositie = "rechts";
    },

    reset: function() {
        this.draw(100, 250);
        this.balPositie = "links";
    },

    draw: function(x, y) {
        this.canvasBal.clearRect(0, 0, 600, 300);
        this.canvasBal.beginPath();
        this.canvasBal.arc(x, y, 50, 0, 2 * Math.PI);
        this.canvasBal.closePath();
        this.canvasBal.fill();
    }
}

function constructBal() {
    let bal = document.getElementById("bal").getContext("2d");
    bal.fillStyle = "red";
    bal.beginPath();
    bal.arc(100, 250, 50, 0, 2 * Math.PI);
    bal.closePath();
    bal.fill();
    return bal
}