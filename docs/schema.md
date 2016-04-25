# Schema Information

## books
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
author      | string    | not null
owner_id    | integer   | not null, foreign key (references users), indexed

## borrowings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
book_id     | string    | not null, unique
owner_id    | integer   | not null, foreign key (references users), indexed
borrower_id | integer   | foreign key (references users), indexed
request     | integer   | not null, indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
