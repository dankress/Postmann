const swaggerDocs={
    swagger: "2.0",
    info: {
        info:{
            title: "Postmann",
            version: "1.0.0",
            description: "Simple example API for dockerized MongoDB"
        }
    },
    host: "localhost:4000",
    basePath: "/",
    tags: [
        {
          name: "Packagestations",
          description: "packagestation in the database",
        },
      ],
      consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
        "/packagestations": {
            get: {
                tags: ["Packagestations"],
                summary: "Get all packagestations in the system",
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            post: {
                tags: ["Packagestations"],
                summary: "Add a new packagestations",
                parameters: [
                    {
                        name: "packagestation",
                        in: "body",
                        description: "Packagestation to be added",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    201:{
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            delete: {
                tags: ["Packagestations"],
                summary: "Delete a Packagestation with certain ID",
                parameters: [
                    {
                        name: "packagestation",
                        in: "body",
                        description: "PackagestationID to be deleted",
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    201:{
                        description: "Deleted",
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            patch: {
                tags: ["Packagestations"],
                summary: "Change a Packagestation with certain ID",
                parameters: [
                    {
                        name: "packagestation",
                        in: "body",
                        description: "PackagestationID to be changed",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    201:{
                        description: "Patched",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            "/{id}": {
                get: {
                    tags: ["Packagestations"],
                    summary: "Get a specific packagestations by id",
                    parameters: [
                        {
                            name: "id",
                            in: "body",
                            description: "Id of the packagestations searched for",
                            schema: {
                            $ref: "#/definitions/Packagestation",
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: "OK",
                            schema: {
                            $ref: "#/definitions/Package",
                            },
                        },
                        400: {
                            description: "Bad Request",
                        },
                        404: {
                            description: "not found",
                        },
                    },
                },
            },
            "/search": {
                get: {
                    tags: ["Packagestations"],
                    summary: "Get a specific packagestation by title",
                    parameters: [
                        {
                            name: "title",
                            in: "path",
                            description: "Title of the packagestation searched for",
                            schema: {
                            $ref: "#/definitions/Packagestation",
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: "OK",
                            schema: {
                                $ref: "#/definitions/Packagestation",
                            },
                        },
                        
                    },
                },
            },
    	},
        "/shipments": {
          get: {
            tags: ["Shipments"],
            summary: "Get all shipments in the system",
            responses: {
                200: {
                    description: "OK",
                    schema: {
                        $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            post: {
                tags: ["Shipments"],
                summary: "Add a new shipments",
                parameters: [
                    {
                        name: "shipment",
                        in: "body",
                        description: "Shipment to be added",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    201:{
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            delete: {
                tags: ["Shipments"],
                summary: "Delete a Shipment with certain ID",
                parameters: [
                    {
                        name: "shipment",
                        in: "body",
                        description: "ShipmentID to be deleted",
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    201:{
                        description: "Deleted",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
                
            },
            patch: {
                tags: ["Shipments"],
                summary: "Change a Shipment with certain ID",
                parameters: [
                    {
                        name: "shipment",
                        in: "body",
                        description: "ShipmentID to be changed",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    201:{
                        description: "Patched",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            "/{id}": {
                get: {
                    tags: ["Shipments"],
                    summary: "Get a specific shipments by id",
                    parameters: [
                        {
                            name: "id",
                            in: "body",
                            description: "Id of the shipments searched for",
                            schema: {
                            $ref: "#/definitions/Shipment",
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: "OK",
                            schema: {
                            $ref: "#/definitions/Package",
                            },
                        },
                    },
                },
            },
            "/search": {
                get: {
                    tags: ["Shipments"],
                    summary: "Get a specific shipment by title",
                    parameters: [
                        {
                            name: "title",
                            in: "path",
                            description: "Title of the shipment searched for",
                            schema: {
                            $ref: "#/definitions/Shipment",
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: "OK",
                            schema: {
                                $ref: "#/definitions/Shipment",
                            },
                        },
                        400: {
                            description: "Bad Request",
                        },
                        404: {
                            description: "not found",
                        },
                    },
                },
            },
    	},
        "/users": {
            get: {
                tags: ["Users"],
                summary: "Get all users in the system",
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            post: {
                tags: ["Users"],
                summary: "Add a new users",
                parameters: [
                    {
                        name: "user",
                        in: "body",
                        description: "User to be added",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    201:{
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            delete: {
                tags: ["Users"],
                summary: "Delete a User with certain ID",
                parameters: [
                    {
                        name: "user",
                        in: "body",
                        description: "UserID to be deleted",
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    201:{
                        description: "Deleted",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            patch: {
                tags: ["Users"],
                summary: "Change a User with certain ID",
                parameters: [
                    {
                        name: "user",
                        in: "body",
                        description: "UserID to be changed",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    201:{
                        description: "Patched",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad Request",
                    },
                    404: {
                        description: "not found",
                    },
                },
            },
            "/{id}": {
                get: {
                    tags: ["Users"],
                    summary: "Get a specific users by id",
                    parameters: [
                        {
                            name: "id",
                            in: "body",
                            description: "Id of the users searched for",
                            schema: {
                            $ref: "#/definitions/User",
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: "OK",
                            schema: {
                            $ref: "#/definitions/Package",
                            },
                        },
                        400: {
                            description: "Bad Request",
                        },
                        404: {
                            description: "not found",
                        },
                    },
                },
            },
            "/search": {
                get: {
                    tags: ["Users"],
                    summary: "Get a specific user by title",
                    parameters: [
                        {
                            name: "title",
                            in: "path",
                            description: "Title of the user searched for",
                            schema: {
                            $ref: "#/definitions/User",
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: "OK",
                            schema: {
                                $ref: "#/definitions/User",
                            },
                        },
                        400: {
                            description: "Bad Request",
                        },
                        404: {
                            description: "not found",
                        },
                    },
                },
            },
    	},
    },
    definitions: {
        Packagestation: {
            required: ["number", "street","city,","zip","country","status"],
            properties: {
                number: {
                    type: "Number",
                },
                street: {
                    type: "string",
                },
                city: {
                    type: "string",
                },
                zip: {
                    type: "Number",
                },
                country: {
                    type: "string",
                },
                status: {
                    type: "string",
                },
            },
        },
        Shipment: {
            required: ["trackingnumber", "street","city,","zip","country","status","weight"],
            properties: {
                trackingnumber: {
                    type: "Number",
                },
                street: {
                    type: "string",
                },
                city: {
                    type: "string",
                },
                zip: {
                    type: "Number",
                },
                country: {
                    type: "string",
                },
                status: {
                    type: "string",
                },
                weight: {
                    type: "string"
                },
            },
        },
        User: {
            required: ["postnumber", "firstname", "name", "street","city,","zip","country","status"],
            properties: {
                postnumber: {
                    type: "Number",
                },
                firstname: {
                    type: "string",
                },
                name: {
                    type: "string",
                },
                street: {
                    type: "string",
                },
                city: {
                    type: "string",
                },
                zip: {
                    type: "Number",
                },
                country: {
                    type: "string",
                },
                status: {
                    type: "string",
                },
            },
        },
        
    },
};

export default swaggerDocs;