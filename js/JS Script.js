function showAlert() {
    //we will use alert and console.log fo rdebeugging

    //alert =what comes up after you press button
    // alert("hello world");
    // console.log("hello world in console");

    //console is used to pause actions
    //setTimeout is used to pause the actions
    setTimeout(function () {
        alert("hello world");
        console.log("hello world in console");
    },3000);
}
function showLoop() {
    // setInterval is used to lop animation or functions in
    //function hello() {
    // alert ("hello world from loop);
    //console.log(hello world from loop);

    setInterval(function () {
        alert("hello world from loop");
        console.log("hello world from loop");
    }, 3000);
}

function moveImage() {
    image = document.getElementById("moveImg");
    x = 10;   //left
    y = 10;     //to
    speed = Number(document.getElementById("speedInput").value);
    // create a function in loop it each half second
    setInterval(function () {
        if (x <500 && y <= 10){
            x = x + speed; //move right
        }
        if (x >= 500 && y < 500){
            y = y + speed; //move down
        }
        if (x > 10 && y >= 500){
            x = x - speed; //move left
        }
        if (x <= 10 && y >10){
            y = y - speed; //move up
        }

        image.style.left = x+"px";
        image.style.top = y+"px";
    }, 500);
}