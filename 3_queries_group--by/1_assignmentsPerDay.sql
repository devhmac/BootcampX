SELECT day, count(*) AS total_assignmnets FROM assignments
GROUP BY day
ORDER BY day;