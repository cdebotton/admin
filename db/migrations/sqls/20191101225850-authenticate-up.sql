create type app_public.jwt_token as (
  role text,
  user_id uuid
);

create function app_public.authenticate (
  email text,
  password text
) returns app_public.jwt_token as $$
  select ('admin', user_id)::app_public.jwt_token
    from app_private.accounts
    where
      app_private.accounts.email = $1
      and app_private.accounts.password = crypt($2, app_private.accounts.password);
$$ language sql strict security definer;