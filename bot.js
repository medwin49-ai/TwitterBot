
var Twit = require('twit');
var T = new Twit({
    consumer_key:         'hdo3H2E0gV3GbzX7SMnDkJ58L'
  , consumer_secret:      'Agl8vstdZM8fh4FAqnytYwZKLqxUB7HPjJwrzrYM9FUIMtZtoP'
  , access_token:         '1315161035075018753-julJqgGQv239e1VTJOp8mLJvJ237P4'
  , access_token_secret:  'rQxmGEuIzgkdiNJPJk0ezyfOdtiBZDdaS4qUx076IQa6U'
})


var tweet = {
  status: 'hello world!'
}

T.post('statuses/update', tweet  , tweeted);

function tweeted (err, data, response) {
  if(err){
    console.log("Something went wrong");
  }
  else{
    console.log("Ahoy!");
  }
}
