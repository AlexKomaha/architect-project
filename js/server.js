// const express = require('express');
// const bodyParser = require('body-parser');
// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Initialize SQLite database
// const dbPath = path.join(__dirname, 'contacts_db.sqlite');
// const db = new sqlite3.Database(dbPath, err => {
//   if (err) {
//     console.error('Error connecting to the database:', err.message);
//     return;
//   }
//   console.log('Connected to the SQLite database.');

//   // Create the table if it does not exist
//   db.run(`CREATE TABLE IF NOT EXISTS contacts (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT NOT NULL,
//     phone TEXT,
//     email TEXT,
//     interested TEXT,
//     message TEXT
//   )`, err => {
//     if (err) {
//       console.error('Error creating table:', err.message);
//     } else {
//       console.log('Contacts table ensured.');
//     }
//   });
// });

// // Processing POST request
// app.post('/submit', (req, res) => {
//   const { name, phone, email, interested, message } = req.body;

//   if (!name || !email) {
//     return res.status(400).send('Name and email are required.');
//   }

//   app.post('/submit', (req, res) => {
//     console.log('Received data:', req.body); // Добавь эту строку для отладки
//     const { name, phone, email, interested, message } = req.body;

//     if (!name || !email) {
//       return res.status(400).send('Name and email are required.');
//     }

//     const sql = `INSERT INTO contacts (name, phone, email, interested, message) VALUES (?, ?, ?, ?, ?)`;
//     db.run(sql, [name, phone, email, interested, message], function (err) {
//       if (err) {
//         console.error('Error saving data:', err.message);
//         return res.status(500).send('Error saving data to the database.');
//       }
//       res.send('Data saved successfully!');
//     });
//   });

//   db.all('SELECT * FROM contacts', [], (err, rows) => {
//     if (err) {
//       console.error('Error fetching data:', err.message);
//     } else {
//       console.log('Current contacts in the database:', rows);
//     }
//   });


//   const sql = `INSERT INTO contacts (name, phone, email, interested, message) VALUES (?, ?, ?, ?, ?)`;
//   db.run(sql, [name, phone, email, interested, message], function (err) {
//     if (err) {
//       console.error('Error saving data:', err.message);
//       return res.status(500).send('Error saving data to the database.');
//     }
//     res.send('Data saved successfully!');
//   });
// });

// // Starting the server
// const PORT = 4000;
// app.listen(PORT, () => {
//   console.log(`The server is running on port ${PORT}`);
// });
