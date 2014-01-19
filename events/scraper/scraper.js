var EventEmitter = require('events').EventEmitter;
var request = require('request');

function Scraper()
{
	this.getContent = function(url)
	{
		var anEventEmitter = new EventEmitter();
		process.nextTick(function() {

			anEventEmitter.emit('start','scraping started from: '+url);

			request(url,function(error,response,body){
				if(!error && response.statusCode == 200)
				{
					anEventEmitter.emit('done',body);
				}
				else
				{
					anEventEmitter.emit('error',error,response);
				}
			});
		});
		
		return (anEventEmitter);
	}
}
module.exports = Scraper;