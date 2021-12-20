/**
 * @swagger
 * /clients/{id}/list:
 *  post:
 *    tags:
 *    - "ClientsProductsList"
 *    summary: "Inserção de produtos na lista."
 *    description: "Inserção de um produto na lista do cliente."
 *    operationId: "saveClientProductList"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Identificador do cliente."
 *      required: true
 *    - name: "body"
 *      in: "body"
 *      description: "body."
 *      required: true
 *      schema:
 *        $ref: "#/definitions/AddProduct"
 *    responses:
 *      '201':
 *         description: Cliente cadastrado.
 *         schema:
 *           $ref: '#/definitions/AddedProductSuccess'
 *      '400':
 *        description: Cliente não localizado
 *        schema:
 *          $ref: '#/definitions/GetClientFailed'
 *    security:
 *    - authorization: []
 *  get:
 *    tags:
 *    - "ClientsProductsList"
 *    summary: "Retorna a lista de produtos do cliente."
 *    description: "Lista contendo todos os produtos do cliente."
 *    operationId: "productsList"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: "id"
 *      in: "path"
 *      description: "Identificador do cliente."
 *      required: true
 *    responses:
 *      '200':
 *         description: OK
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/GetClientsProductsList"
 *      '400':
 *        description: Cliente não localizado
 *        schema:
 *          $ref: '#/definitions/GetClientFailed'
 *    security:
 *    - authorization: []
 * /clients/{clientId}/list/{productId}:
 *  delete:
 *    tags:
 *    - "ClientsProductsList"
 *    summary: "Remove um produto da lista do cliente."
 *    description: "Remove um produto da lista do cliente."
 *    operationId: "removeProduct"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: "clientId"
 *      in: "path"
 *      description: "Identificador do cliente."
 *      required: true
 *    - name: "productId"
 *      in: "path"
 *      description: "Identificador do produto."
 *      required: true
 *    responses:
 *      '200':
 *         description: OK
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/ProductRemovedSuccess"
 *      '400':
 *        description: Cliente não localizado
 *        schema:
 *          $ref: '#/definitions/GetClientFailed'
 *    security:
 *    - authorization: []
 */
