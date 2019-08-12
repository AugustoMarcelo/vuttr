FORMAT: 1A

# VUTTR (Very Useful Tools to Remember)

The application is a simple repository to managing tools with their `titles`, `links`, `descriptions` and `tags`.


# Group Tools

Tools related resources in the API.

## Tools Collection [/tools]

### List all tools [GET /tools]
+ Response 200 (application/json)

  ```json
    [
      {
        "_id": "5d5158995253fe44fc78acfb",
        "title": "json-server",
        "link": "https://github.com/typicode/json-server",
        "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        "tags": [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest"
        ],
        "createdAt": "2019-08-12T12:16:25.792Z",
        "updatedAt": "2019-08-12T12:16:25.792Z",
        "__v": 0
      },
      {
        "_id": "5d5158995253fe44fc78acfc",
        "title": "fastify",
        "link": "https://www.fastify.io/",
        "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        "tags": [
            "web",
            "framework",
            "node",
            "http2",
            "https",
            "localhost"
        ],
        "createdAt": "2019-08-12T12:16:25.793Z",
        "updatedAt": "2019-08-12T12:16:25.793Z",
        "__v": 0
      }
    ]
  ```
---

### Seacrh tools by tag [GET /tools{?tag}]

You can search for tools entering a `tag` in the URL

+ Parameters

  + tag (string, required) - tag to search

+ Response 200 (application/json)
  ```json
    [
      {
        "_id": "5d5158995253fe44fc78acfb",
        "title": "json-server",
        "link": "https://github.com/typicode/json-server",
        "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        "tags": [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest"
        ],
        "createdAt": "2019-08-12T12:16:25.792Z",
        "updatedAt": "2019-08-12T12:16:25.792Z",
        "__v": 0
      }
  ```
---

### Add a new tool [POST /tools]

You can add a new tool using this route. It receives a `JSON` object containing the information of the tool you want to add.

+ **title *(string)*** - Tool name
+ **link *(string)*** - Link to tool repository
+ **description *(string)*** - Tool description
+ **tags *(array[string])*** - A set of tags than can make the search easier

This route receives a `JSON` in request body as follow:

+ Request (application/json)

  ```json
    {
      "title": "unform",
      "link": "https://github.com/Rocketseat/unform",
      "description": "ReactJS form library to create uncontrolled form structures with nested fields, validations and much more!",
      "tags": [
        "react",
        "form",
        "forms"
      ]
    }
  ```

This request returns a `201` status code with a HTTP header and the created tool data.

+ Response 201 (application/json)

    + Headers

        `Location: /tools/id`

    + Body

      ```json
        {
          "_id": "5d5162116cf720244cf2885d",
          "title": "unform",
          "link": "https://github.com/Rocketseat/unform",
          "description": "ReactJS form library to create uncontrolled form structures with nested fields, validations and much more!",
          "tags": [
              "react",
              "form",
              "forms"
          ],
          "createdAt": "2019-08-12T12:56:49.057Z",
          "updatedAt": "2019-08-12T12:56:49.057Z",
          "__v": 0
        }
      ```
---

### Delete a tool [DELETE /tools/{tool_id}]

This route removes a tool from the repository. The server will return a `204` response with no body content.

+ Parameters

    + tool_id (string) - Tool ID

+ Response 204

