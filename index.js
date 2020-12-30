var Twit = require('twit');
// var configs = require('./configs.js');
var fs= require('fs');

require('dotenv').config();

var T = new Twit({
    consumer_key:       process.env.API_KEY,
    consumer_secret:    process.env.SECRET,
    access_token:        process.env.ACCESS,
    access_token_secret:  process.env.TOKEN,
})


setInterval(function(){ // Set interval for checking
   var date = new Date(); // Create a Date object to find out what time it is
    if(date.getHours() === 8 && date.getMinutes() === 0){ // Check the time
       Processing();
    }
} , 60000); // Repeat every 60000 milliseconds (1 minute)

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
  
// Making the days of the week into an array
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
// Calculating the day of the week.
var n = weekday[d.getDay()];
var j   
for( j= 0 ; j <=weekday.length; j++){
    if( n == weekday[j]){
        var numday = j.toString() 
        return 'Krabs/pic' + numday + '.jpg';
}

}
}



// first we must post the media to Twitter
 

    // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreter