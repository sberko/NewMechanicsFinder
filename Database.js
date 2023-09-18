import React, { useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'newMechanicsFinder.db', location: 'default' });

const Database = ({ children }) => {
  useEffect(() => {
    // Create 'users' table if it doesn't exist
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (userId INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, phone NUMBER, email  STRING, password TEXT)'
      );
    });

    // Create 'mechanics' table if it doesn't exist
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS mechanics (mechanicId INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone NUMBER, address STRING)'
      );
    });

    // Create 'reviews' table if it doesn't exist
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS reviews (id INTEGER PRIMARY KEY AUTOINCREMENT, userId INTEGER, mechanicId INTEGER, rating INTEGER, comment TEXT)',
      );
    });
  }, []);

  return <>{children}</>;
};

export default Database;


export const saveReview = (userId, mechanicId, rating, comment) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO reviews (userId, mechanicId, rating, comment) VALUES (?, ?, ?, ?)',
      [userId, mechanicId, rating, comment],
      (tx, results) => {
        console.log('Review Inserted ID: ', results.insertId);
      }
    );
  });
};
