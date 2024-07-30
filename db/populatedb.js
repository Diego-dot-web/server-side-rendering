#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
username VARCHAR ( 255 ), 
message TEXT, 
date TIMESTAMP
);

INSERT INTO messages (username, message, date) 
VALUES 
('alice', 'Hello, world!', '2024-07-30 10:00:00'),
('bob', 'Good morning!', '2024-07-30 11:00:00'),
('carol', 'How are you?', '2024-07-30 12:00:00'),
('dave', 'I am doing great, thanks!', '2024-07-30 13:00:00'),
('eve', 'What are you up to?', '2024-07-30 14:00:00');
`;

async function main() {
  console.log("seeding");
  const client = new Client({
    connectionString:
      "postgresql://diegos:MiloyLupe678@localhost:5432/mini_board",
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
