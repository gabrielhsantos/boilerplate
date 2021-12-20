/**
 * @swagger
 * definitions:
 *   SaveClient:
 *    type: "object"
 *    properties:
 *      name:
 *        type: "string"
 *        example: "Gabriel"
 *      email:
 *        type: "string"
 *        example: "gabriel@email.com"
 *    required:
 *      - name
 *      - email
 *   CreateClientSuccess:
 *    type: "object"
 *    properties:
 *      message:
 *        type: "string"
 *        example: "Client created!"
 *   CreateClientFailed:
 *    type: "object"
 *    properties:
 *      message:
 *        type: "string"
 *        example: "Client already exists."
 *   ClientsFilter:
 *    type: "string"
 *    example: "gabriel@email.com"
 *   GetClientsListResponse:
 *     type: "object"
 *     properties:
 *       message:
 *         type: "string"
 *         example: "Clients"
 *       data:
 *         type: "array"
 *         items:
 *           type: "object"
 *           $ref: "#/definitions/GetClients"
 *   GetClientsProductListResponse:
 *     type: "object"
 *     properties:
 *       message:
 *         type: "string"
 *         example: "Clients"
 *       data:
 *         type: "array"
 *         items:
 *           type: "object"
 *           $ref: "#/definitions/GetClients"
 *   GetClientResponse:
 *     type: "object"
 *     properties:
 *       message:
 *         type: "string"
 *         example: "Client"
 *       data:
 *         type: "object"
 *         $ref: "#/definitions/GetClients"
 *   GetProducts:
 *     type: "object"
 *     properties:
 *       id:
 *         type: "string"
 *         example: "f135e27d-b78c-4325-a1e8-1fec4914b365"
 *       externalId:
 *         type: "string"
 *         example: "2b505fab-d865-e164-345d-efbd4c2045b6"
 *       title:
 *         type: "string"
 *         example: "Guitarra Original Ibanez DN 520K"
 *       brand:
 *         type: "string"
 *         example: "ibanez"
 *       image:
 *         type: "string"
 *         example: "http://example.com/api"
 *       price:
 *         type: "number"
 *         example: 6309.9
 *   GetClients:
 *     type: "object"
 *     properties:
 *       id:
 *         type: "string"
 *         example: "f135e27d-b78c-4325-a1e8-1fec4914b365"
 *       name:
 *         type: "string"
 *         example: "Gabriel"
 *       email:
 *         type: "string"
 *         example: "gabriel@email.com"
 *   GetClientsProductsList:
 *     type: "object"
 *     properties:
 *       id:
 *         type: "string"
 *         example: "f135e27d-b78c-4325-a1e8-1fec4914b365"
 *       name:
 *         type: "string"
 *         example: "Gabriel"
 *       email:
 *         type: "string"
 *         example: "gabriel@email.com"
 *       productsList:
 *         type: "array"
 *         items:
 *           type: "object"
 *           $ref: "#/definitions/GetProducts"
 *   GetClientFailed:
 *    type: "object"
 *    properties:
 *      message:
 *        type: "string"
 *        example: "Client not found."
 *   UpdatedClientSuccess:
 *    type: "object"
 *    properties:
 *      message:
 *        type: "string"
 *        example: "Client updated!"
 *   ProductRemovedSuccess:
 *    type: "object"
 *    properties:
 *      message:
 *        type: "string"
 *        example: "Product removed!"
 *   RemovedClientSuccess:
 *    type: "object"
 *    properties:
 *      message:
 *        type: "string"
 *        example: "Client removed!"
 *   AddedProductSuccess:
 *    type: "object"
 *    properties:
 *      message:
 *        type: "string"
 *        example: "Product added!"
 *   AddProduct:
 *    type: "object"
 *    properties:
 *      productId:
 *        type: "string"
 *        example: "2b505fab-d865-e164-345d-efbd4c2045b6"
 *    required:
 *      - productId
 */
