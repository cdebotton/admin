create function app_public.register_user(
  email text,
  username text,
  password text
) returns app_public.users as $$
declare
  registrant app_public.users;
begin
  insert into app_public.users (username) values
    (username)
    returning * into registrant;
  
  insert into app_private.accounts (user_id, email, password) values
    (registrant.id, email, crypt(password, gen_salt('bf')));
  
  return registrant;
end;
$$ language plpgsql strict security definer;