var Twit = require('twit');
var fs= require('fs');
var exec =require('child_process').exec;
var T = new Twit({
  consumer_key:         'om3V4t27xPDXuO82Z8yD9N94H',
  consumer_secret:      'a1WWqJ0BLW3u02K4h1fnHsF47gfIUhZLbTkjfxmZMyP7hpoNn0',
  access_token:         '1315161035075018753-zg3kQcJTWHidoxPmSTt9nIB2L3rLXY',
  access_token_secret:  'LkZrlsrsXnsnOFO8u9GLsWQU9ZJIYq3ZfoGopI9E6R7RZ',
})

processing();

  function processing(){
      var filename = 'Krabs/Mr.Krabs_.png';
      var params ={
          encoding: 'base64'
      }
      var b64content = fs.readFileSync(filename, params);
      T.post('media/upload', { media_data: b64content }, uploaded);

      function uploaded(err , data, response){
        var id = data.media_id_string ;
        var tweet = {
            status:' Test',
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
  



// first we must post the media to Twitter
 

    // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreter