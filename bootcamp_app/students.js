const { Pool } = require('pg');
const cliArgs = process.argv.slice(2)

console.log(cliArgs)
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query(`
SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE '%${cliArgs[0]}%'
LIMIT ${cliArgs[1]};
`)
  .then(res => {
    // console.log(res.rows)
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`)
    })
  })
  .catch(err => console.log('query error ', err.stack));

