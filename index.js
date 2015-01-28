/**
 * Applies a `User-Agent` header to each request
 * @param   {string} useragent
 * @returns {function(HttpClient)}
 */
module.exports = function(useragent) {
	return function(client) {
		client.on('before', function(request, response) {
			request.setHeader('User-Agent', useragent);
		});
	};
};