/**
 * @swagger
 * /clients:
 *  post:
 *    tags:
 *    - "Clients"
 *    summary: "Criação de um usuário."
 *    description: "Criação de um único usuário com os campos de nome e email"
 *    operationId: "saveClient"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: "body"
 *      in: "body"
 *      description: "body"
 *      required: true
 *      schema:
 *        $ref: "#/definitions/SaveClient"
 *    responses:
 *      '201':
 *         description: Cliente cadastrado.
 *         schema:
 *           $ref: '#/definitions/CreateClientSuccess'
 *      '400':
 *        description: Cliente já cadastrado
 *        schema:
 *          $ref: '#/definitions/CreateClientFailed'
 *    security:
 *    - authorization: []
 *  get:
 *    tags:
 *    - "Clients"
 *    summary: "Retorna a listagem de clientes na base."
 *    description: "Lista contendo todos os clientes cadastrados."
 *    operationId: "clientsList"
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: "email"
 *      in: "query"
 *      description: "filtro válido para email."
 *      required: false
 *      schema:
 *        $ref: "#/definitions/ClientsFilter"
 *    responses:
 *      '200':
 *         description: OK
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/GetClientsListResponse"
 *    security:
 *    - authorization: []
 * /clients/{id}:
 *  get:
 *    tags:
 *    - "Clients"
 *    summary: "Retorna um único cliente."
 *    description: "Retorna um cliente."
 *    operationId: "findClient"
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
 *         description: Cliente
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/GetClientResponse"
 *      '404':
 *         description: "Cliente não localizado"
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/GetClientFailed"
 *    security:
 *    - authorization: []
 *  patch:
 *    tags:
 *    - "Clients"
 *    summary: "Realiza o update do cliente."
 *    description: "Update dos dados do cliente."
 *    operationId: "updateClient"
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
 *      description: "Dados para a atualização."
 *      required: true
 *      schema:
 *        $ref: "#/definitions/SaveClient"
 *    responses:
 *      '200':
 *         description: Cliente
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/UpdatedClientSuccess"
 *      '404':
 *         description: Cliente não localizado
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/GetClientFailed"
 *    security:
 *    - authorization: []
 *  delete:
 *    tags:
 *    - "Clients"
 *    summary: "Inativa um cliente na base."
 *    description: "Inativa um cliente."
 *    operationId: "removeClient"
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
 *         description: Cliente
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/RemovedClientSuccess"
 *      '404':
 *         description: Cliente não localizado
 *         schema:
 *           type: "object"
 *           $ref: "#/definitions/GetClientFailed"
 *    security:
 *    - authorization: []
 */
