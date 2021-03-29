SELECT day, count(*) AS total_assignmnets FROM assignments
GROUP BY day
HAVING count(*) >= 10
ORDER BY day;