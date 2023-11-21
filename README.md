# Microservice-API
 
## Requesting Data from the Microservice

To request data from the microservice, make a GET requuest to the endpoint with the appropriate parameters.

### Example Call

To fetch all D&D characters:

```http
GET http://<host>/api/dnd/characters

This will return a JSON array of all the D&D characters stored in the microservice.

UML diagram

[Client] -> (HTTP GET) -> [Server: /api/dnd/characters]
[Server] -> (Fetch Data) -> [MongoDB]
[MongoDB] -> (Return Data) -> [Server]
[Server] -> (JSON Response) -> [Client]

![UML Diagram](/UML.png)