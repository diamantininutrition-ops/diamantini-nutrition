create table if not exists contact_messages (
  id bigint generated always as identity primary key,
  last_name text not null,
  first_name text not null,
  subject text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);
