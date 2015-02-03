/**
 * Applies a `User-Agent` header to each request
 * @param   {string} useragent
 * @returns {function(Client)}
 */
module.exports = function(useragent) {
	return function(client) {
		client.on('before', function(event) {
			event.request.setHeader('User-Agent', useragent);
		});
	};
};