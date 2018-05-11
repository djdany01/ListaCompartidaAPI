/**
 * @api {post} /getlist/ GetList
 * @apiName GetList
 * @apiGroup Wish
 * @apiDescription Return requested wish list without admin privileges
 *
 * @apiParam {String} lista List name.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  List requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "get list",
 *       data: list{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample List Not Found:
 *     HTTP/1.1 404 Not Found
 *     {
 *       accion: "get list",
 *       error: "Wish 404"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "get list",
 *       error: "Server Error 500"
 *     }
 */

 /**
 * @api {post} /getpass/ GetPass
 * @apiName GetPass
 * @apiGroup Wish
 * @apiDescription Return requested wish list with admin privileges
 *
 * @apiParam {String} lista List name.
 * @apiParam {String} pass List password.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  List requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "get list",
 *       data: list{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample List Not Found:
 *     HTTP/1.1 404 Not Found
 *     {
 *       accion: "get list",
 *       error: "Wish 404"
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "get list",
 *       error: "Server Error 500"
 *     }
 */

 /**
 * @api {post} /list/ NewList
 * @apiName NewList
 * @apiGroup Wish
 * @apiDescription Create a new list
 *
 * @apiParam {String} lista List name.
 * @apiParam {String} pass List password.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  List requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "new list",
 *       data: listCreated{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample List-Exists:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "new list",
 *       error: "Wish con esa contraseña ya existe"
 *     }
 */

  /**
 * @api {post} /renamelist/ EditList
 * @apiName EditList
 * @apiGroup Wish
 * @apiDescription Rename requested list
 *
 * @apiParam {String} listaOld Actual list name.
 * @apiParam {String} listaNew New list name.
 * @apiParam {String} pass List password.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data List renamed.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "new list",
 *       data: renamedList{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample List-NOT-Exists:
 *     HTTP/1.1 404 Server Error
 *     {
 *       accion: "rename list",
 *       error: "Wish 404"
 *     }
 * 
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "rename list",
 *       error: "Server Error"
 *     }
 */

  /**
 * @api {post} /item/ AddItem
 * @apiName AddItem
 * @apiGroup Wish
 * @apiDescription Add item to the list
 *
 * @apiParam {String} lista List name.
 * @apiParam {String} pass List password.
 * @apiParam {String} categoria Item category.
 * @apiParam {String} nombre Item name.
 * @apiParam {Number} precio Item price.
 * @apiParam {String} url Item url.
 * @apiParam {String} image Item image url.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  Item requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "add item",
 *       data: newItem{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "add item",
 *       error: err{data}
 *     }
 */

   /**
 * @api {delete} /list/ DelList
 * @apiName DelList
 * @apiGroup Wish
 * @apiDescription Delete requested list
 *
 * @apiParam {String} lista List name.
 * @apiParam {String} pass List password.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  List requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "delete lsit",
 *       data: listDeleted{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "delete list",
 *       error: "Server Error 500"
 *     }
 */

 /**
 * @api {delete} /item/ DelItem
 * @apiName DelItem
 * @apiGroup Wish
 * @apiDescription Delete requested item from list
 *
 * @apiParam {String} lista List name.
 * @apiParam {String} pass List password.
 * @apiParam {String} itemId Item ID.
 *
 * @apiSuccess {String} accion Action made.
 * @apiSuccess {JSON} data  Item requested.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       accion: "delete item",
 *       data: delItem{data}
 *     }
 *
 * @apiError accion Action made.
 * @apiError error  Error caught.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Server Error
 *     {
 *       accion: "delete item",
 *       error: "Server Error 500"
 *     }
 */
