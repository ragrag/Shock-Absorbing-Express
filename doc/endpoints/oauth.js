require('./template');

// FACEBOOK AUTHENTICATION, POST /outh/facebook
/**
 * @api {post} /oauth/facebook Facebook Authentication
 * @apiName Authenticate with facebook
 * @apiGroup Authentication
 *
 * @apiParam (Request Body) {String} access_token Facebook user access token.
 *
 * @apiParamExample Request-Body:
 *     HTTP/1.1
 *     {
 *       "access_token": "EAAHaCPMHT84BABGkBwelZCnZBNmUuGBjb3"
 *     }
 *
 * @apiSuccess {String} token jwt authentication token.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJ0eXAiOiJKV1QiLCJhbGciO"
 *     }
 *
 * @apiError InvalidToken  Invalid authentication token.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       failed to fetch user profile
 *     }
 *
 * @apiUse ServerError
 */

// TWITTER AUTHENTICATION, POST /outh/twitter
/**
 * @api {post} /oauth/twitter Twitter Authentication
 * @apiName Authenticate with twitter
 * @apiGroup Authentication
 *
 * @apiParam (Request Body) {String} oauth_token Twitter user access token.
 * @apiParam (Request Body) {String} oauth_token_secret Twitter user access token.
 *
 * @apiParamExample Request-Body:
 *     HTTP/1.1
 *     {
 *       "oauth_token": "1899122905-5GDFyV",
 *       "oauth_token_secret": "Wa8hAbl9SVK1U5X3YTAIeg2T1PhviAG6p"
 *     }
 *
 * @apiSuccess {String} token jwt authentication token.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJ0eXAiOiJKV1QiLCJhbGciO"
 *     }
 *
 * @apiError InvalidToken  Invalid authentication token.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       failed to fetch user profile
 *     }
 *
 * @apiUse ServerError
 */
