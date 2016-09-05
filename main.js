require.config({
	paths:{
		"angular":"bower_components/angular/angular"
	},

	shim:{
		'angular':{
			exports:"angular"
		}
	}
});

require(["controllers/mainController"], function(){

})