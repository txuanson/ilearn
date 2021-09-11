[![HCMUS](https://www.hcmus.edu.vn/images/logo81.png)](https://www.hcmus.edu.vn/)
# iLearn - Online learning platform with Zoom intergrated

iLearn is an online learning platform which bring the convinient to users who is an amateur tutors and who want to study online with just a click!

## Features

- Account service
   - Sign in / sign up as Tutor / Student with email and password
   - Connect Zoom account to Tutor account
   - Custom profile
   - Upcoming event
- Admin
   - Account management
   - Courses management
   - Category management
   - Website resources management
- Tutor's courses management
   - CRUD courses: To create, read, upload, and delete the courses.
   - Set the course Public or private (need approval of the course’s tutor)
   - CRUD sections in each course.
   - Manage zoom’s meeting (attached to section).
   - Import course/ section content by uploading doc/ docx file
   - Create quiz (multiple-choice)
   - Limit number of participants
   - Manage member’s subscribe status (kick member with reason): Manage the users who subscribed the course and are able to kick the members out of the course. 
   - Upload meeting record after meeting session ended (optional): The tutors upload the recorded meeting after the online meeting.
- User's feature
   - Subcribe to course
   - Join section meeting
   - Watch section record
   - Comment in section (Q&A)
## Tech

iLearn uses a number of tools to work properly:

- [Mongodb] - a source-available cross-platform document-oriented database program
- [Mongoose] - a MongoDB object modeling tool designed to work in an asynchronous environment
- [Yarn] - fast, reliable, and secure dependency management
- [Node.js] - evented I/O for the backend
- [React.js] - an open-source front-end JavaScript library for building user interfaces or UI components.
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Swagger] - online api document
- [Antd] - A Reactjs component library
- [Tailwind] - A atomic CSS library
- ...

## Installation

### Backend

#### API-DOC: <https://ilearn.yurineko.net/api-docs>

iLearn server-side requires [Node.js] v14+ and [Yarn] to run.

Install the dependencies and devDependencies and start the server.

```sh
# Location: root
cd src/backend
yarn
yarn start
```

### Frontend

iLearn client-side require [React.js] and [Yarn] to run.

Install the dependencies and devDependencies and start the server.
```sh
# Location: root
cd src/frontend
yarn
yarn start
```

   [Yarn]: <https://yarnpkg.com/>
   [React.js]: <https://reactjs.org/>
   [Node.js]: <https://nodejs.org>
   [Mongodb]: <https://www.mongodb.com>
   [Mongoose]: <https://mongoosejs.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [Swagger]: <https://swagger.io>
   [Tailwind]: <https://tailwindcss.com>
   [Antd]: <https://ant.design>
