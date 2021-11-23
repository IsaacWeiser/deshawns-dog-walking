Table Walkers {
  id int [pk]
  name varchar
  email varchar
  city varchar
}

Table Pets {
  id int [pk]
  name varchar
  walkerId int
}

Ref: "Walkers"."id" < "Pets"."walkerId"