SELECT students.name AS student, 
  avg(assignment_submissions.duration) AS average_assignment_duration, 
  avg(assignments.duration) AS average_estimated_duration
  from assignments 
  JOIN assignment_submissions ON assignment_id = assignments.id
  JOIN students ON students.id = assignment_submissions.student_id
  WHERE students.end_date IS NULL
  GROUP BY student
  HAVING avg(assignment_submissions.duration) < avg(assignments.duration)
  ORDER BY average_assignment_duration;