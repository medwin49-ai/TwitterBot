var Twit = require('twit');
var configs = require('./configs.js');
var fs= require('fs');

var T = new Twit(configs)
var D = require('./dayOfTheWeek.js');

var dayInMilliseconds = 1000 * 60 * 60 * 24;
Processing();
setInterval(Processing ,dayInMilliseconds );
function Processing(){
    var filename = DayOfWeek();
    var params ={
        encoding: 'base64'
    }
    var b64content = fs.readFileSync(filename, params);
   
   
    
    T.post('media/upload', { media_data: b64content }, uploaded);

    function uploaded(err , data, response){
      var id = data.media_id_string ;
     
      var tweet = {
          status:' ',
          media_ids: [id]
      }

      T.post('statuses/update', tweet, tweeted);
  }

      function tweeted (err, data, response) {

          if ( err){
              console.log(data);
              console.log('Something went wrongs.');
          }
          else{
              console.log('Ahoy there Sailor!');
          }
  }
}
  

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


// first we must post the media to Twitter
 

    // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreter