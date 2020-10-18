var Twit = require('twit');
var configs = require('./configs.js');
var fs= require('fs');



var T = new Twit(configs)



Processing();
function Processing(){
    var filename = 'Krabs/VidoeofKrabs.mp4'
    var params ={
        encoding: 'base64'
    }
  
    var b64content = fs.readFileSync(filename, params);
    var filePath = 'Krabs/VidoeofKrabs.mp4'
   
    
    T.post('media/upload', { media_data: b64content }, uploaded);

    function uploaded(err , data, response){
      var id = data.media_id_string ;
     
      var tweet = {
          status:'comon',
          media_ids: [id]
      }

      T.postMediaChunked({ file_path: filePath }, function(err,data,response){})+
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
  



// first we must post the media to Twitter
 

    // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreter