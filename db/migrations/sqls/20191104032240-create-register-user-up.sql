create function app_public.register_user(
  email text,
  username text,
  password text,
  first_name text,
  last_name text
) returns app_public.users as $$
declare
  registrant app_public.users;
begin
  insert into app_public.users (username) values
    (username)
    returning * into registrant;

  insert into app_public.profiles(user_id, first_name, last_name) values
    (registrant.id, first_name, last_name);
  
  insert into app_private.accounts (user_id, email, password) values
    (registrant.id, email, crypt(password, gen_salt('bf')));
  
  return registrant;
end;
$$ language plpgsql strict security definer;

grant execute on function app_public.register_user(text, text, text, text, text) to app_anonymous;