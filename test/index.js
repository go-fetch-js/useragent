var assert      = require('assert');
var Client  = require('go-fetch');
var useragent   = require('..');

describe('useragent', function() {

	it('should add a `User-Agent` header with the value of `go-fetch`', function() {

		var client    = new Client();
		var request   = new Client.Request('GET', 'https://api.github.com/users/digitaledgeit/repos', {'Content-Type': 'application/json'});
		var response  = new Client.Response();
		var event     = new Client.Event({
			name:       'before',
			request:    request,
			response:   response
		});

		client.use(useragent('go-fetch'));

		client.emit(event, function(error, event) {
			assert.equal(event.request.getHeader('User-Agent'), 'go-fetch');
		});

	});

});