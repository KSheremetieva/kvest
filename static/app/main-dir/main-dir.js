import angular from "angular";
import $ from 'jquery';
import {app} from '../app.js';
import '../mainCtrl.js';
import main_template from './template/main-dir.html'

app.directive('mainDir', function(){
	return{
		restrict: 'E',
		replase: false,
		controller: ('mainCtrl'),
		template: main_template,
		link: function(scope, element, attributes){
			scope.password = 'enter your pass';
			scope.flag = true;
			scope.check = password=>{
				// alert(password);
				scope.recuest = scope.checkPass(password);
				scope.flag = false;
				console.log(scope.recuest);
			}

			scope.back=()=>{
				scope.flag = true;
			}

		}
	}
})