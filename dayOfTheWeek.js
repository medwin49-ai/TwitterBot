
function DayOfWeek(){
    var d = new Date()
    var weekday = new Array(7);
    weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

var n = weekday[d.getDay()];
  var myText = '';
if( n == weekday[0]){
    return 'Krabs/itbeasunday.jpg';
} 
else if( n == weekday[1]){
    return 'Krabs/itbeamonday.jpeg';
} 

else if(n == weekday[3]) {
    return 'Krabs/itbeawens.jpg';
}

else if ( n == weekday[4]){
    return 'Krabs/itbeathurs.jpg';
}

else if( n == weekday[5]){
    return Mess='Krabs/itbeafriday.jpg';
}
else if( n == weekday[6]){
    return 'Krabs/itbeasat.jpg';
}
else {
    return "Krabs/krabsmad.png"
}


}


