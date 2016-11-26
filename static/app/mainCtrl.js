import angular from "angular";
import $ from 'jquery';
import {app} from './app.js';
import quest from '../../questing.js'


app.controller('mainCtrl', function($scope){
	$scope.data = quest;
	$scope.checkPass = pass=> {
	for (var i= 0; i< data.length; i++) {
			if(data[i].pass === pass)
				return data[i].pass;
		}
		return false;
	}
});