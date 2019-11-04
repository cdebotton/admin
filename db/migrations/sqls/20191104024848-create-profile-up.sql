create table app_public.profiles (
  user_id uuid not null unique references app_public.users(id) on delete cascade,
  first_name text,
  last_name text
);

comment on constraint profiles_user_id_fkey on app_public.profiles is
  E'@fieldName app_public.users\n@foreignFieldName profile';

grant select on app_public.profiles to app_anonymous, app_user;
grant update, insert, delete on app_public.profiles to app_user;

create policy select_profile on app_public.profiles for select to app_user, app_anonymous
  using (true);
create policy update_profile on app_public.profiles for update to app_user
  using (true);
create policy insert_profile on app_public.profiles for insert to app_user
  with check (true);
create policy delete_profile on app_public.profiles for delete to app_user
  using (true);