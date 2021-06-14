# angular-intro

Angular is an MVC framework - it consists 

M - models - can be thought of as data (JSON)
V - views - Displays content and data through expressions(html)
C - controllers - interaction between models and views

They exist as a separation of concerns.

Download angulur and script source it into the index.html file with:
--- npm install angular@1.8.2

put ng-app tag on html tag in index file , ng is a directive

^^ stores the input to the model of "favMeat" and can be called with {{favMeat}}

--- This is called 2 way data binding

- I learned you can make custom directives, I will make a kerf tag that does some weird stuff

- ng-init can allow us to initialize some data that we can access in the same way as the message model

-- we can also create a css style that lives in style.css and can be accessed through ng-init

- ng-repeat acts much the same way as .map in react

- modules allow us to structure our code into logical chunks - see myArrowApp
    - We can then use that data in components that have the controllers tag added to them

- I have come up with a plan. After doing some research, I think it will be possible for me to build a full CRUD app out of angular and some other DB system.

So My plan is to eventually recreate my SQL to do list app with angular and something other than postico/postgreSQL