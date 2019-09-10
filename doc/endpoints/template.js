/**
 * @apiDefine ServerError
 *
 * @apiError (Error 5xx) ServerError Internal server error.
 *
 * @apiErrorExample ServerError:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       message
 *     }
 */

/**
 * @apiDefine AuthorizationHeader
 *
 * @apiHeader (Headers) {String} Authorization Bearer Authorization token.
 *
 */

/**
 * @apiDefine InvalidIdError
 *
 * @apiError InvalidId Invalid Id
 *
 * @apiErrorExample InvalidId:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       invalid resource ID
 *     }
 *
 */

/**
 * @apiDefine UserNotFoundError
 *
 * @apiError UserNotFound User not found
 *
 * @apiErrorExample UserNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       user doesn't exist
 *     }
 *
 */

/**
 * @apiDefine ValidationError
 *
 *
 * @apiError ValidationError Invalid data
 *
 * @apiErrorExample ValidationError:
 *     HTTP/1.1 400 ValidationError
 *     {
 *       message
 *     }
 *
 */

/**
 * @apiDefine Pagination
 *
 * @apiParam (Query Params) {Number} page=1 Pagination page
 * @apiParam (Query Params) {Number} limit=10 Pagination limit per page
 *
 */
