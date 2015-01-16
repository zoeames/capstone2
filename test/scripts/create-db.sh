#!/bin/bash

if [ -z "$1" ] ; then
  echo "Enter a database name"
  exit 1
fi

psql $1 -f ../../db/tables/users.sql
psql $1 -f ../../db/tables/courses.sql
psql $1 -f ../../db/tables/lessons.sql
psql $1 -f ../../db/tables/quizzes.sql
psql $1 -f ../../db/tables/mycourses.sql
psql $1 -f ../../db/tables/photos.sql
psql $1 -f ../../db/tables/quizanswers.sql


psql $1 -f ../../db/functions/add_course.sql
psql $1 -f ../../db/functions/add_lesson.sql
psql $1 -f ../../db/functions/add_mycourse.sql
psql $1 -f ../../db/functions/add_quiz.sql
psql $1 -f ../../db/functions/find_courses.sql
psql $1 -f ../../db/functions/find_lessons.sql
psql $1 -f ../../db/functions/find_quizzes.sql
psql $1 -f ../../db/functions/quiz_count.sql
psql $1 -f ../../db/functions/show_course.sql
psql $1 -f ../../db/functions/show_lesson.sql
psql $1 -f ../../db/functions/show_quiz.sql
