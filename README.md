# spring-boot-angular8
This simple CRUD app has two parts:
1. apiportal
2. angular-app

**1.apiportal** - Spring Boot API which uses H2 in-memory database
- Clone the project
- Using terminal or command prompt, go to "apiportal" folder
- run mvn clean install
- run mvn spring-boot:run

By default it runs on port 8080.
You may verify it (http://localhost:8080/apiportal/users) in the browser and will return JSON object

**2.angular-app** - Angular8 application for the user interface
- Clone the project
- Using terminal or command prompt, go to "angular-app" folder
- run ng server -o

It will automatically open the below in browser
http://localhost:4200/users

**Note:

This was built using the below
- Java 1.8
- Angular CLI: 8.2.0
- Node: 12.7.0
- OS: darwin x64



