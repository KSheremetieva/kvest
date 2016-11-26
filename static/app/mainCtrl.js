import angular from "angular";
import $ from 'jquery';
import {app} from './app.js';
import {quest} from '../../questing.js'


app.controller('mainCtrl', function($scope){
	$scope.data = quest.pass1;
});