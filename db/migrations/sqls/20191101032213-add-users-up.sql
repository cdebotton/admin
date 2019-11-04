create table app_public.users (
  id uuid primary key not null default uuid_generate_v4(),
  username CITEXT not null unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table app_public.users enable row level security;

grant select on table app_public.users to app_anonymous, app_user;
grant insert, update, delete on table app_public.users to app_user;

create policy select_user on app_public.users for select
  using (true);

create policy update_user on app_public.users for update to app_user
  using (true);

create function app_public.current_user() returns app_public.users as $$
  select *
  from app_public.users
  where id = nullif(current_setting('jwt.claims.user_id', true), '')::uuid
$$ language sql stable;

grant execute on function app_public.current_user() to app_anonymous, app_user;