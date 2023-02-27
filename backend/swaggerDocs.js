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
    },
    definitions: {
        Packagestations: {
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
                    type: "String",
                },
                status: {
                    type: "String",
                },
            },
        },
    },

    paths: {
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
    },
    definitions: {
        Shipments: {
            required: ["trackingnumber", "street","city,","zip","country","status"],
            properties: {
                trackingnumber: {
                    type: "Number",
                },
                street: {
                    type: "String",
                },
                city: {
                    type: "String",
                },
                zip: {
                    type: "Number",
                },
                country: {
                    type: "String",
                },
                status: {
                    type: "String",
                },
                weight: {
                    type: "String"
                },
            },
        },
    },

    paths: {
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
        Users: {
            required: ["trackingnumber", "street","city,","zip","country","status"],
            properties: {
                postnumber: {
                    type: "Number",
                },
                firstname: {
                    type: "String",
                },
                name: {
                    type: "String",
                },
                street: {
                    type: "String",
                },
                city: {
                    type: "String",
                },
                zip: {
                    type: "Number",
                },
                country: {
                    type: "String",
                },
                status: {
                    type: "String",
                },
            },
        },
    },
};

export default swaggerDocs;