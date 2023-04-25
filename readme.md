 ## User Model
 
 # Register 
This endpoint will help users to register themselves

# Register endpoint

- Method - POST
- Request 
 ` POST /api/register` 

- Body 

``` "name" : "Prerna",
    "email" : "prerna@123",
    "password" : "12345"

```   

- response 
status code  - `201` 
message - `user registered successfully`

- if user already existed then response will be `You are already registered. please login.`

# Login

This endpoint will help users to login themselves

# Login endpoint

- Method - POST
- Request 
 ` POST /api/login` 

- Body 

``` 
    "email" : "prerna@123",
    "password" : "12345"

```   

- response 
status code  - `201` 
message - `user login successfully`

- if user doesn't exists then response will be `Please register first.`

## Flights Model

# Flight GET 
This endpoint will return all the flights which are present in DB.

# Flights GET endpoint

- Method - GET
- Request 
 `GET/api/flights` 

- response 
status code  - `200`  and `flight data`


- if flight doesn't  exists then response will be `Flights not found.`


# Flight GET by ID (Single flight)
This endpoint will return only single flight by id which is present in DB.

# Flights GET by ID endpoint

- Method - GET
- Request 
 `GET/api/flights/:id` 
- response 
status code  - `200`  and ` single flight data`


- if flight doesn't  exists then response will be `Flights not found.`



# Flight POST 
This endpoint will Add flights in DB

# Flights POST endpoint

- Method - POST
- Request 
 `POST/api/flights` 

- Body 

``` {
  "airline": "AirWays",
  "flightNo": "644500",
  "departure": "21:50 pm",
  "arrival": "23:50 pm",
  "departureTime": "2023-04-01",
  "arrivalTime": "2023-04-01",
  "seats": 90,
  "price": 40000
}

```   

- response 
status code  - `201`  and ` flight added successfuly`


- if error comes then response will be `Can not add flights.`


# Update existing Flight  
This endpoint should allow users to update the details of a specific flight identified by its ID

# Flights PUT endpoint

- Method - PUT
- Request 
 `PUT/api/flights/:id` 

- Body 
 we will make ammends whatever we want to
``` {
  "airline": "AirWays",
  "flightNo": "644500",
  "departure": "21:50 pm",
  "arrival": "23:50 pm",
  "departureTime": "2023-04-01",
  "arrivalTime": "2023-04-01",
  "seats": 90,
  "price": 40000
}

```   

- response 
status code  - `204`  and ` flight updated successfuly`


- if error comes then response will be `Can not update flight.`





# Delete existing Flight  
This endpoint should allow users to DELETE the details of a specific flight identified by its ID

# Flights DELETE endpoint

- Method - DELETE
- Request 
 `DELETE/api/flights/:id` 

- Body 
 we will put id in params
 

- response 
status code  - `202`  and ` flight deleted successfuly`


- if error comes then response will be `Can not delete flight.`















