# back-end
Node.js back-end for Lambda School build week project PostHere

# Overview
This API is used as part of the application PostHere and allows for CRUD operations to be performed on both on the application's users.

This documentation will cover all of the data models and endpoints which can be access via: Not Deployed yet


# Endpoints

# Authentication

| Request Type  |	Endpoints             |	        Description       |
| ------------  |  --------------         |       ------------------  | 
| POST	        |    /api/auth/register	  |           Creates User    |
| POST	        |    /api/auth/login	  |           Creates JTW*    |

*JSON Web Tokens Used to Verify Users


# Users

| Request Type  |	Endpoints                 |	        Description       |
| ------------  |  --------------             |       ------------------  | 
| GET	        |    /api/users	              |   Returns All Users       |
| GET           |    /api/users/:id           |   Returns Specific User   |
| DELETE        |    /api/users/:id           |   Deletes  Specific User  |

# Post

| Request Type  |	Endpoints              |	        Description           |
| ------------  |  --------------          |       ------------------         | 
| GET	        |   /api/posts	           |   Returns All Posts              |
| GET           |   /api/posts/:id         |   Returns Specific Post          |
| GET           |   /api/posts/:id/user    |   Returns Specific User's Post   |
| POST          |   /api/posts             |   Creates a post                 |
| PUT           |   /api/posts/:id         |   Updates a post                 |
| DELETE        |   /api/posts/:id         |   Deletes a post                 |




