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

        x=x+speed;
        y=y+speed;
        console.log("x=",x);
        console.log("y=",y);
        image.style.left = x+"px";
        image.style.top = y+"px";
    }, 500);
}