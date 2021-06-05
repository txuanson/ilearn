[![HCMUS](https://www.hcmus.edu.vn/images/logo81.png)](https://www.hcmus.edu.vn/)
# iLearn - Online learning platform with Zoom intergrated

iLearn is an online learning platform which bring the convinient to users who is an amatuer tutors and who want to study online with just a click!

## Features

- Account service
   - Sign in/Sign up as Member/Tutor with email and password
   - Connect Zoom account to Tutor account
   - Member sign in/sign up through social account (facebook)
   - Custom profile
   - Upcoming event
- Admin
   - Account management (for tutor and normal user)
   - Courses management
   - Category management
   - Website resources management
- Tutor's courses management
   - CRUD courses: To create, read, upload, and delete the courses.
   - Set the course pay or not! Public or private (need approval of the course’s tutor)
   - CRUD sections in each course.
   - Manage zoom’s meeting (attached to sections).
   - Import course/ section content by uploading doc/ docx file
   - Create quiz (multiple-choice)
   - Limit number of participants
   - Manage member’s subscribe status (kick member with reason): Manage the users who subscribed the course and are able to kick the members out of the course. 
   - Upload meeting record after meeting session ended (optional): The tutors upload the recorded meeting after the online meeting.
- User's feature
   - Subcribe to course
   - Join section meeting
   - Watch section record
   - Note in section (watching the record)
   - Rate course
   - Comment in section (Q&A)
## Tech

iLearn uses a number of tools to work properly:

- [Postgresql] - powerful, open source object-relational database system
- [Yarn] - fast, reliable, and secure dependency management
- [Node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Swagger] - online api document
- ...

## Installation

### Backend
iLearn server-side requires [Node.js] v14+ and [Yarn] to run.

Install the dependencies and devDependencies and start the server.

```sh
cd ilearn/src/backend
yarn
yarn start
```
   [Yarn]: <https://yarnpkg.com/>
   [Node.js]: <http://nodejs.org>
   [Postgresql]: <http://www.postgresql.org>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [Swagger]: <https://swagger.io>
