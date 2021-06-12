# angular-intro

Angular is an MVC framework - it consists 

M - models - can be thought of as data (JSON)
V - views - Displays content and data through expressions(html)
C - controllers - interaction between models and views

They exist as a separation of concerns.

Download angulur and script source it into the index.html file with:
--- npm install angular@1.8.2

put ng-app tag on html tag in index file , ng is a directive

<!-- <input type="text" ng-model="favMeat" placeholder="enter fav meat"> -->

^^ stores the input to the model of "favMeat" and can be called with {{favMeat}}

This is called 2 way data binding