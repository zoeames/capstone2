CourseControl
========

[![Build Status](https://travis-ci.org/zoeames/capstone2.svg)](https://travis-ci.org/zoeames/capstone2)
[![Coverage Status](https://coveralls.io/repos/zoeames/capstone2/badge.png)](https://coveralls.io/r/zoeames/capstone2)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

### Live Version
Click [HERE](http://coursecontrol.zoeames.com/) to try the live version!

### Description
CourseControl allows teachers to bring technology into their classrooms by providing a platform where teachers can ask questions and students can vote with their smartphones.  Additionally this app keeps track of students votes so teachers can track participation.

### Screenshots
![Image1](https://raw.githubusercontent.com/zoeames/capstone2/master/docs/screenshots/profile.png)
![Image2](https://raw.githubusercontent.com/zoeames/capstone2/master/docs/screenshots/vote.png)
### Technologies
```
Node
```


```
Hapi
```

```
PostgreSQL
```

```
AngularJS
```

```
Foundation
```

### Models
```
User
```
* .register
* .login

```
Gradebook
```
* .query

```
Course
```
* .create
* .add
* .query
* .show

```
Lesson
```
* .create
* .query
* .show

```
Quiz
```
* .create
* .query
* .show
* .vote
* .start
* .closeQuiz
* .quizcount
* .upload


### Features
- [x] register
- [x] login
- [x] logout
- [ ] update profile
- [x] students can add course to their profile
- [x] students can vote on desktop version
- [x] student responses are saved to the database
- [x] instructors can create courses
- [x] instructors can create lessons
- [x] instructors can create quizzes
- [x] instructors can activate quizzes
- [x] instructors can close quizzes
- [x] once a quiz is closed statistics are displayed
- [x] instructors can view all students in a course
- [ ] instructors can see how students voted on each quiz

### Contributors
- [Zoe Ames](https://github.com/zoeames)

### License
[MIT](LICENSE)
