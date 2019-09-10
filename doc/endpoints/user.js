require('./template');

// USER GET BY ID, GET  /user/:id
/**
 * @api {get} /user/:id Get User
 * @apiName Get User
 * @apiGroup User
 *
 * @apiParam (URL Params) {String} id User Id.
 *
 * @apiParamExample id:
 *     507f1f77bcf86cd799439011
 *
 * @apiSuccess {String} _id User Id.
 * @apiSuccess {String} displayName User display name.
 * @apiSuccess {String} username User username.
 * @apiSuccess {String} photo User display photo.
 * @apiSuccess {Array} follower Array of follower user Ids.
 * @apiSuccess {Array} following Array of following user Ids.
 * @apiSuccess {Date} createAt User creation date.
 * @apiSuccess {Date} updatedAt User last modified date.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "eyJ0eXAiOiJKV1QiLCJhbGciO",
 *       "displayName": "Raggi Hosni",
 *       "username": "ragy96",
 *       "photo": "https://graph.facebook.com/v3.0/10157447733196877/picture?type=large",
 *       "following": ["eyJ0eXAiOiJKV1QiLCJhbGciO" ,"eyJ0eXAiOiJKV1QiLCJhbGciO"  ],
 *       "createdAt": '2019-09-09T23:36:15.602Z',
 *       "updatedAt": '2019-09-09T23:36:15.602Z'
 *     }
 *
 * @apiUse UserNotFoundError
 *
 * @apiUse InvalidIdError
 *
 * @apiUse ServerError
 */

// USER UPDATE, PATCH  /user
/**
 * @api {patch} /user Update User
 * @apiName Update User
 * @apiGroup User
 *
 * @apiUse AuthorizationHeader
 *
 * @apiParam (Request Body) {String} [displayName] User display name.
 * @apiParam (Request Body) {String} [username] User username.
 * @apiParam (Request Body) {Image} [photo] User photo.
 *
 * @apiParamExample Request-Body:
 *     HTTP/1.1
 *     {
 *       "displayName": "Raggi Hosni",
 *       "username": "ragy96",
 *       "photo": "image.png",
 *     }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 *
 * @apiUse UserNotFoundError
 *
 * @apiUse InvalidIdError
 *
 * @apiUse ServerError
 */

// User Delete, DELETE  /user
/**
 * @api {delete} /user Delete User
 * @apiName Delete User
 * @apiGroup User
 *
 * @apiUse AuthorizationHeader
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiUse ServerError
 */
