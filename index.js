var Twit = require('twit')

var T = new Twit({
  consumer_key:         'om3V4t27xPDXuO82Z8yD9N94H',
  consumer_secret:      'a1WWqJ0BLW3u02K4h1fnHsF47gfIUhZLbTkjfxmZMyP7hpoNn0',
  access_token:         '1315161035075018753-zg3kQcJTWHidoxPmSTt9nIB2L3rLXY',
  access_token_secret:  'LkZrlsrsXnsnOFO8u9GLsWQU9ZJIYq3ZfoGopI9E6R7RZ',
})

var tweet = { 
    status: 'hello world!'
}



T.post('statuses/update', tweet, tweered );


function tweeed (err, data, response) {
    console.log(data)
    if ( err){
        console.log(data);
        console.log('Something went wrongs.');
    }
    else{
        console.log('Ahoy there Sailor!');
    }

  }