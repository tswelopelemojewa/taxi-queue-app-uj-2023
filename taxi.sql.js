// riwu

import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

export async function joinQueue() {
    // console.log('join queue')
    await db.run(`update taxi_queue set passenger_queue_count = passenger_queue_count + 1`);

}

export async function leaveQueue() {
    await db.run(`update taxi_queue set passenger_queue_count = passenger_queue_count - 1`);
}

export async function joinTaxiQueue() {
   await db.run(`update taxi_queue set taxi_queue_count = taxi_queue_count + 1`)
}

export async function queueLength() {
    const passengers = await db.all(`SELECT passenger_queue_count FROM taxi_queue`)
    return passengers;
}

export async function taxiQueueLength() {
  const p = await db.all(`SELECT taxi_queue_count FROM taxi_queue`);
  return p;

}

const result1 = await taxiQueueLength()
console.log(result1)


const result2 = await queueLength()
console.log(result2)
// console.log(taxiQueueLength())

export async function taxiDepart() {
    await db.run(`update taxi_queue set taxi_queue_count = taxi_queue_count - 1, passenger_queue_count = passenger_queue_count - 12`)
}