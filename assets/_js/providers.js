angular
	.module('app')
	.provider('Instagram', Instagram);

function Instagram() {
	var token;
	
	this.setToken = function(newToken){
		token = newToken;
	};

	this.$get = ['$http', function($http){
		return{

	getRecentsMediasByTag: function(tag, callback){

	var endpoint = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent',
		count = '30',
		path = endpoint + '?access_token=' + token + '&count=' + count + '&callback=JSON_CALLBACK';


	$http
		.jsonp(path)
		.then(function(response) {
			callback(response.data.data);
		});

	}

		};

	}];
};