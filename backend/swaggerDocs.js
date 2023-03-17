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
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                },
            },
            post: {
                tags: ["Packagestations"],
                summary: "Add a new packagestation",
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
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    400: {
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                },
            },
        },

        "/packagestations/number": {
            get: {
                tags: ["Packagestations"],
                summary: "Get a specific packagestation by number",
                parameters: [
                    {
                        name: "number",
                        in: "query",
                        description: "Number of the packagestation searched for",
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
                    400: {
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                },
            },
            delete: {
                tags: ["Packagestations"],
                summary: "Delete a specific packagestation by number",
                parameters: [
                    {
                        name: "number",
                        in: "query",
                        description: "Number of the packagestation for deletion",
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
                    400: {
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                },
            },
            patch: {
                tags: ["Packagestations"],
                summary: "Change a Packagestation with certain number",
                parameters: [
                    {
                        name: "number",
                        in: "query",
                        description: "Packagestation number to be changed",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    {
                        name: "street",
                        in: "query",
                        description: "Packagestation street to be changed",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    {
                        name: "city",
                        in: "query",
                        description: "Packagestation city to be changed",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    {
                        name: "zip",
                        in: "query",
                        description: "Packagestation zip to be changed",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    {
                        name: "country",
                        in: "query",
                        description: "Packagestation country to be changed",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    {
                        name: "status",
                        in: "query",
                        description: "Packagestation status to be changed",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Patched",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    400: {
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/Packagestation",
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
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                },
            },
            post: {
                tags: ["Shipments"],
                summary: "Add a new shipment",
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
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                },
            },
        },

        "/shipments/trackingNumber": {
            get: {
                tags: ["Shipments"],
                summary: "Get a specific shipment by trackingNumber",
                parameters: [
                    {
                        name: "trackingNumber",
                        in: "query",
                        description: "Trackingnumber of the shipment searched for",
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
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                },
            },
            delete: {
                tags: ["Shipments"],
                summary: "Delete a specific shipment by number",
                parameters: [
                    {
                        name: "trackingNumber",
                        in: "query",
                        description: "Number of the shipment for deletion",
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
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                },
            },
            patch: {
                tags: ["Shipments"],
                summary: "Change a Shipment with certain number",
                parameters: [
                    {
                        name: "trackingNumber",
                        in: "query",
                        description: "Shipment Trackingnumber to be changed",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    {
                        name: "street",
                        in: "query",
                        description: "Shipment street to be changed",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    {
                        name: "city",
                        in: "query",
                        description: "Shipment city to be changed",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    {
                        name: "zip",
                        in: "query",
                        description: "Shipment zip to be changed",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    {
                        name: "country",
                        in: "query",
                        description: "Shipment country to be changed",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    {
                        name: "status",
                        in: "query",
                        description: "Shipment status to be changed",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    {
                        name: "weight",
                        in: "query",
                        description: "Shipment weight to be changed",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Patched",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    400: {
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/Shipment",
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
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                },
            },
            post: {
                tags: ["Users"],
                summary: "Add a new user",
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
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    400: {
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                },
            },
        },

        "/users/postnumber": {
            get: {
                tags: ["Users"],
                summary: "Get a specific user by number",
                parameters: [
                    {
                        name: "postnumber",
                        in: "query",
                        description: "Postnumber of the user searched for",
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
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                },
            },
            delete: {
                tags: ["Users"],
                summary: "Delete a specific user by number",
                parameters: [
                    {
                        name: "postnumber",
                        in: "query",
                        description: "Number of the user for deletion",
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
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                },
            },
            
            patch: {
                tags: ["Users"],
                summary: "Change a User with certain number",
                parameters: [
                    {
                        name: "postnumber",
                        in: "query",
                        description: "User postnumber to be changed",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    {
                        name: "firstName",
                        in: "query",
                        description: "User first name to be changed",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    {
                        name: "name",
                        in: "query",
                        description: "User name to be changed",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    {
                        name: "street",
                        in: "query",
                        description: "User street to be changed",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    {
                        name: "city",
                        in: "query",
                        description: "User city to be changed",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    {
                        name: "zip",
                        in: "query",
                        description: "User zip to be changed",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    {
                        name: "country",
                        in: "query",
                        description: "User country to be changed",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    {
                        name: "status",
                        in: "query",
                        description: "User status to be changed",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Patched",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    400: {
                        description: "Bad request",
                        schema: {
                            $ref: "#/definitions/User",
                        },
                    },
                    404: {
                        description: "Not found",
                        schema: {
                            $ref: "#/definitions/User",
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
                    type: "integer",
                },
                street: {
                    type: "string",
                },
                city: {
                    type: "string",
                },
                zip: {
                    type: "integer",
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
                trackingNumber: {
                    type: "integer",
                },
                street: {
                    type: "string",
                },
                city: {
                    type: "string",
                },
                zip: {
                    type: "integer",
                },
                country: {
                    type: "string",
                },
                status: {
                    type: "string",
                },
                weight: {
                    type: "integer"
                },
            },
        },
        User: {
            required: ["postnumber", "firstname", "name", "street","city,","zip","country","status"],
            properties: {
                postnumber: {
                    type: "integer",
                },
                firstName: {
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
                    type: "integer",
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