create table app_public.users (
  id uuid not null default uuid_generate_v4(),
  username CITEXT not null unique check(username ~ '^[a-zA-Z]([a-zA-Z0-9][_]?)+$'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table app_public.users enable row level security;