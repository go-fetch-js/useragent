var HttpClient = require('go-fetch');
var useragent  = require('..');

HttpClient()
	.use(useragent('go-fetch'))
	.get('https://api.github.com/repos/go-fetch-js/useragent', function(error, response) {
		console.log(error, response.getStatus());
	})
;