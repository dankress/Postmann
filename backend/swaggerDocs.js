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
            tags: ["Packagesations"],
            summary: "Get all packagestations in the system",
            responses: {
                200: {
                    description: "OK",
                    schema: {
                        $ref: "#/definitions/Package",
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
                            $ref: "#/definitions/Package",
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
    	}
    }
}