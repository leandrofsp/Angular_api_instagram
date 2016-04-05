angular
	.module('app')
	.directive('picturesWall', picturesWall);

function picturesWall(){
	return{
		scope: {
			pictures: '=pictures'
		},
		template: '<img ng-repeat="media in pictures" class="fotos" ng-src="{{ media.images.thumbnail.url }}" alt="">'
	}
	
};