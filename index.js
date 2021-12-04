var inputDate = document.querySelector("#inputdate");
var buttonClicked = document.querySelector("#checkbutton");
var outputShown = document.querySelector("#output");
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
        outputShown.innerText = "Hurray!! your birthday is palindrome";
    }
    else
    {
        //console.log("Not a palindrome");
        calculatenoDaystoPalindrome(dateSelected);
    }

}
function calculatenoDaystoPalindrome(bdayDate){
    
    var inwhileset= 1;
    var count = 0;
    var index= 1;
    while(inwhileset){
       var incrementedbdayDate = new Date(bdayDate);//Passing date in yyyy-MM-DD format later I need to change it
       incrementedbdayDate.setDate(incrementedbdayDate.getDate()+index);
       
       count = count+1;

       if((incrementedbdayDate.getMonth()+1)<10){
        var incrementedbdayDateCombined = (incrementedbdayDate.getDate()+"-0"+(incrementedbdayDate.getMonth()+1)+"-"+incrementedbdayDate.getFullYear());
       }
       else if(incrementedbdayDate.getDate()<10){
        var incrementedbdayDateCombined = ("0"+incrementedbdayDate.getDate()+"-"+(incrementedbdayDate.getMonth()+1)+"-"+incrementedbdayDate.getFullYear());
       }
       else{
       var incrementedbdayDateCombined = (incrementedbdayDate.getDate()+"-"+(incrementedbdayDate.getMonth()+1)+"-"+incrementedbdayDate.getFullYear());//Changed format to DDMMYYYY
       }
       //console.log(incrementedbdayDateCombined+"index"+index);
       var incrementedbdayDateFormatted = incrementedbdayDateCombined.replaceAll("-","");
      var incrementedbdayDateReversed = incrementedbdayDateFormatted.split("").reverse().join("");
       //console.log(incrementedbdayDateFormatted,incrementedbdayDateReversed);
       if(incrementedbdayDateFormatted === incrementedbdayDateReversed){
           //console.log(" Palindrome nearby after your birthday is "+incrementedbdayDateCombined+" you missed it by "+ count+" days");
           outputShown.innerText = " Nearby Palindrome after your birthday is "+incrementedbdayDateCombined+" you missed it by "+ count+" days";
           inwhileset = 0;
           break; 
       }
       else{
           if(count>365){inwhileset = 0;}
           index= index+1;
       }
       //inwhileset--;
    }


}
