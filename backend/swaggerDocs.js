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
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
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
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
                    },
                ],
                responses: {
                    200: {
                        description: "Deleted",
                        schema: {
                            $ref: "#/definitions/Packagestation",
                        },
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
                        description: "Patched",
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
                },
            },
        },
        "/packagestations/search": {
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
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
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
                        description: "Deleted",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
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
                        description: "Patched",
                        schema: {
                            $ref: "#/definitions/Shipment",
                        },
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
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/User",
                        },
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
                        description: "Deleted",
                        schema: {
                            $ref: "#/definitions/User",
                        },
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
                        description: "Patched",
                        schema: {
                            $ref: "#/definitions/User",
                        },
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
                trackingnumber: {
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
                    type: "string"
                },
            },
        },
        User: {
            required: ["postnumber", "firstname", "name", "street","city,","zip","country","status"],
            properties: {
                postnumber: {
                    type: "integer",
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