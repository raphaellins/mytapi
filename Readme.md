

# API to Manager Activities

# Command to run migrations on database
yarn knex-migration


# Command to run server
yarn dev

# Example of use

/POST/activies
{
 "title": "Activity 1",
 "priority": 2,
 "start_date": "2020-06-06 09:30",
 "end_date": "2020-06-06 10:30",
 "type": "Reading",
 "project": "Personal Development Books",
 "Description": "First chapter of Limits of Power"
}
