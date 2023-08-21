

SELECT sum(taxi_queue_count) AS taxi_queue_count FROM taxi_queue;

SELECT sum(passenger_queue_count) AS queueCount FROM taxi_queue;


INSERT INTO taxi_queue (passenger_queue_count) VALUES (1);


INSERT INTO taxi_queue (taxi_queue_count) VALUES (1);

SELECT * FROM taxi_queue

DELETE FROM taxi_queue


SELECT sum(taxi_queue_count) - 1 FROM taxi_queue;


SELECT sum(passenger_queue_count) - 1 as bbb FROM taxi_queue;


-- const sql = `update greetings set langage= ?, greeting=? where id= ?`
--     await db.run(sql, [langage, greeting, id])

SELECT passenger_queue_count FROM taxi_queue

update taxi_queue set passenger_queue_count = passenger_queue_count + 1

update taxi_queue set taxi_queue_count = taxi_queue_count + 1


update taxi_queue set taxi_queue_count = taxi_queue_count - 1, passenger_queue_count = passenger_queue_count - 5
