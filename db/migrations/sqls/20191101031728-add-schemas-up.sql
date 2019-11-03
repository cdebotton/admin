create schema app_public;
create schema app_private;

create role app_user;
grant app_user to app_postgraphile;

create role app_anonymous;
grant app_anonymous to app_postgraphile;

alter default privileges revoke execute on functions from public;

grant usage on schema app_public to app_anonymous, app_user;