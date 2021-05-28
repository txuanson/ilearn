[![HCMUS](https://www.hcmus.edu.vn/images/logo81.png)](https://www.hcmus.edu.vn/)
# Online learning platform with Zoom intergrated

iLearn is an online learning platform which bring the convinient to users who is an amatuer tutors and who want to study online with just a click!

## Features

- Account service
   - Sign in/Sign up as Member/Tutor
   - Connect Zoom account to Tutor account
   - Member sign in through social account (facebook/google)
   - Import social account avatar(info) to platform
   - Custom profile
- Tutor's courses management
   - Manage zoom's meetings through sections
   - Sections have rescourses and written content
   - Import section content by uploading doc/docx file
   - Option to set the course free or not
   - Limit the number of participants
   - Member's subcribe 
- User's feature
   - Can subcribe to course
   - Participate in the course (after subcribed to course)
   - Note in course/section
   - Rate course
   - Comment in course

## Tech

iLearn uses a number of tools to work properly:

- [Postgresql] - powerful, open source object-relational database system
- [Yarn] - fast, reliable, and secure dependency management
- [Node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Swagger] - online api document
- ...

## Installation

iLearn requires [Node.js] v10+ and [Yarn] to run.

Install the dependencies and devDependencies and start the server.

```sh
cd ilearn
yarn
yarn start
```
   [Yarn]: <https://yarnpkg.com/>
   [Node.js]: <http://nodejs.org>
   [Postgresql]: <http://www.postgresql.org>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [Swagger]: <https://swagger.io>
