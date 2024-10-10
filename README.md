# How to initialize repository

## Prerequisite

- npm/nodejs
- mysql or equivalent database system

## Instructions

1. npm install
2. mysql -> source ./db/schema.sql
3. (.env): DB_USER (root), DB_NAME (see schema.sql), DB_PASSWORD (root pass), DB_SECRET (Can be anything)
4. npm run seed
5. npm start
