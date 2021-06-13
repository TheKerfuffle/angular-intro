// I misspelled angular wrong and it broke everything in index and beyond. jesus heckin butts
const myArrowApp = angular.module('myArrowApp', []);

myArrowApp.config(() => {



})

myArrowApp.run(() => {

})

myArrowApp.controller('ArrowController', ($scope) => {

$scope.message = 'I took an arrow in the knee';

$scope.arrows = ['bodkin', 'bolt', 'needle'];

})