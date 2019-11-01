create table app_private.accounts (
  user_id uuid not null unique,
  email citext not null unique,
  password varchar not null
);