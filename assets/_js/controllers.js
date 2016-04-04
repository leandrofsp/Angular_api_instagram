angular
	.module('app')
	.controller('IndexCtrl', IndexCtrl);

IndexCtrl.$inject = ['Instagram'];

function IndexCtrl(Instagram){

	var vm = this;
	

	vm.medias = [];

	Instagram.getRecentsMediasByTag('spfc', function(medias){

		vm.medias = medias;
	});
};