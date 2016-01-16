'use Strict';

var shortenList = {},
	shortenReverse = {},
	counter = 0;

var URLObj = function() {
	this.valid = function(ori, shrt) {
		return {
			"original_url" : ori,
			"short_url" : shrt 
		}
	}

	this.invalid = function() {
		return {"error": "URL invalid"}
	}
}

function Controller() {
	this.process = function(hostname, url) {		
		
		//check valid URL		
		var urlObj = new URLObj();
		if (/^(https?):\/\/[^\s/$.?#].[^\s]*/.test(url)) {

			//check if it's existing url
			if (shortenReverse[url]) {
				return urlObj.valid(url,shortenReverse[url]);
			}

			counter++;
			shortenList[counter] = url;
			shortenReverse[url] = hostname + '/' +counter;
			return urlObj.valid(url,hostname + '/' +counter);
		} else {
			return urlObj.invalid();
		}		
	}

	this.redirect = function(shorten_string) {
		if (shortenList[shorten_string]) {
			return shortenList[shorten_string];
		} else {
			return ('/');
		}
	}
}

module.exports = Controller;