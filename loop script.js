function calculateSum() {
    sum = 0; //my sum start from 0, later on, i add numbers on
    number = Number(document.getElementById("numFrom").value); //my number start from1 ,this number wiill counter my loop
    while (number <= Number(document.getElementById("numTo").value)){ //my condition is number less equal to 50. loop doesnt use ; it uses {
        //actions
        sum = sum + number; //on the left of = it is a variable, on the right of
        console.log("number: " + number + "sum" + sum); //we need to print them out as a string
        number = number + 1;//add on one number, in order to update to update my condition


    }
    document.getElementById("sumResult").innerText = sum;
}
function goNextStep() {
    inputText = document.getElementById("userInput").value;
    if (inputText !="yes"){
        alert("type again");
    }else {
        alert("you type right");
    }


}