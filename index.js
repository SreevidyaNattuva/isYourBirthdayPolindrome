var inputDate = document.querySelector("#inputdate");
var buttonClicked = document.querySelector("#checkbutton");
var outputShown = document.querySelector("#output");
// function CheckIfDateIsPalindrome(){
//     // dateSelected = new Date();
//     // dateIncremented = new Date();
//     console.log(inputDate.value);
//    var dateSelected = inputDate;
// //    dateSelected.setDate(dateSelected.getDate()+1);
// //    console.log(dateSelected);
//     console.log(Date(dateSelected.stepUp(1)));
//     //console.log(dateIncremented);
// }
buttonClicked.addEventListener("click", CheckIfDateIsPalindrome)
function CheckIfDateIsPalindrome(){ 
    var dateSelected = inputDate.value;
    //console.log(dateSelected);
    var bdayDate = dateSelected.split("-").reverse().join("-");//DD-MM-YYYY
    //console.log("Check"+ bdayDate);
    var bdayDateFormatted = bdayDate.replaceAll("-","");
    //console.log(dateFormatted);
    var bdayDateReversed = bdayDateFormatted.split("").reverse().join("");
    //console.log(bdayDateReversed);
    if(bdayDateFormatted === bdayDateReversed)
    {
        console.log("It is palindrome");
    }
    else
    {
        console.log("Hi");
        calculatenoDaystoPalindrome(bdayDate);
    }

}
function calculatenoDaystoPalindrome(bdayDate){
    
    var index=1;
    flag = true;
    while(index){
       var incrementedbdayDate = new Date(bdayDate);
       incrementedbdayDate.setDate(incrementedbdayDate.getDate()+1);
       console.log(incrementedbdayDate);
       index=0;
    }


}
