angular
	.module('app')
	.factory('Instagram', Instagram);

Instagram.$inject = ['$http'];

function Instagram($http){
	var _public = {},
		_private = {};

	_private.token = '2130400132.5b9e1e6.70b6e8b69ac346d0b794750ccb483ce0';
	
	
	_public.getRecentsMediasByTag = function(tag, callback){

	var endpoint = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent',
		count = '30',
		path = endpoint + '?access_token=' + _private.token + '&count=' + count + '&callback=JSON_CALLBACK';


	$http
		.jsonp(path)
		.then(function(response) {
			callback(response.data.data);
		});

	};

	return _public;
};
		