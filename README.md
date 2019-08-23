# spring-boot-angular8
This simple CRUD app has two parts:
1. apiportal
2. angular-app

**a) apiportal** - Spring Boot API which uses H2 in-memory database

To run this:
-a - Clone the project
-b - Using terminal or command prompt, go to "apiportal" folder
-c - run mvn clean install
-d - run mvn spring-boot:run

By default it runs on port 8080.
You may verify it (http://localhost:8080/apiportal/users) in the browser and will return JSON object

**b) angular-app** - Angular8 application for the user interface

To run this:
-a - Clone the project
-b - Using terminal or command prompt, go to "angular-app" folder
-c - run ng server -o

It will automatically open the below in browser
http://localhost:4200/users


