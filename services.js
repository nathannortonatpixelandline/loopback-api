// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Library
 * @header lbServices.Library
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Library` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Library",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/libraries/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Library.books.findById() instead.
        "prototype$__findById__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/:fk",
          method: "GET"
        },

        // INTERNAL. Use Library.books.destroyById() instead.
        "prototype$__destroyById__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Library.books.updateById() instead.
        "prototype$__updateById__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Library.books.link() instead.
        "prototype$__link__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Library.books.unlink() instead.
        "prototype$__unlink__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Library.books.exists() instead.
        "prototype$__exists__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Library.books() instead.
        "prototype$__get__books": {
          isArray: true,
          url: urlBase + "/libraries/:id/books",
          method: "GET"
        },

        // INTERNAL. Use Library.books.create() instead.
        "prototype$__create__books": {
          url: urlBase + "/libraries/:id/books",
          method: "POST"
        },

        // INTERNAL. Use Library.books.destroyAll() instead.
        "prototype$__delete__books": {
          url: urlBase + "/libraries/:id/books",
          method: "DELETE"
        },

        // INTERNAL. Use Library.books.count() instead.
        "prototype$__count__books": {
          url: urlBase + "/libraries/:id/books/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#create
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/libraries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#createMany
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/libraries",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#upsert
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/libraries",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#exists
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/libraries/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#findById
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/libraries/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#find
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/libraries",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#findOne
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/libraries/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#updateAll
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/libraries/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#deleteById
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/libraries/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#count
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/libraries/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#prototype$updateAttributes
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/libraries/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Library#createChangeStream
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/libraries/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Book.libraries.findById() instead.
        "::findById::book::libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Book.libraries.destroyById() instead.
        "::destroyById::book::libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Book.libraries.updateById() instead.
        "::updateById::book::libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Book.libraries.link() instead.
        "::link::book::libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Book.libraries.unlink() instead.
        "::unlink::book::libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Book.libraries.exists() instead.
        "::exists::book::libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Book.libraries() instead.
        "::get::book::libraries": {
          isArray: true,
          url: urlBase + "/books/:id/libraries",
          method: "GET"
        },

        // INTERNAL. Use Book.libraries.create() instead.
        "::create::book::libraries": {
          url: urlBase + "/books/:id/libraries",
          method: "POST"
        },

        // INTERNAL. Use Book.libraries.createMany() instead.
        "::createMany::book::libraries": {
          isArray: true,
          url: urlBase + "/books/:id/libraries",
          method: "POST"
        },

        // INTERNAL. Use Book.libraries.destroyAll() instead.
        "::delete::book::libraries": {
          url: urlBase + "/books/:id/libraries",
          method: "DELETE"
        },

        // INTERNAL. Use Book.libraries.count() instead.
        "::count::book::libraries": {
          url: urlBase + "/books/:id/libraries/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Library#updateOrCreate
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Library#update
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Library#destroyById
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Library#removeById
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Library#modelName
    * @propertyOf lbServices.Library
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Library`.
    */
    R.modelName = "Library";

    /**
     * @ngdoc object
     * @name lbServices.Library.books
     * @header lbServices.Library.books
     * @object
     * @description
     *
     * The object `Library.books` groups methods
     * manipulating `Book` instances related to `Library`.
     *
     * Call {@link lbServices.Library#books Library.books()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Library#books
         * @methodOf lbServices.Library
         *
         * @description
         *
         * Queries books of library.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::get::library::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Library.books#count
         * @methodOf lbServices.Library.books
         *
         * @description
         *
         * Counts books of library.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.books.count = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::count::library::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Library.books#create
         * @methodOf lbServices.Library.books
         *
         * @description
         *
         * Creates a new instance in books of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.create = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::create::library::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Library.books#createMany
         * @methodOf lbServices.Library.books
         *
         * @description
         *
         * Creates a new instance in books of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.createMany = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::createMany::library::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Library.books#destroyAll
         * @methodOf lbServices.Library.books
         *
         * @description
         *
         * Deletes all books of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.books.destroyAll = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::delete::library::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Library.books#destroyById
         * @methodOf lbServices.Library.books
         *
         * @description
         *
         * Delete a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.books.destroyById = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::destroyById::library::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Library.books#exists
         * @methodOf lbServices.Library.books
         *
         * @description
         *
         * Check the existence of books relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.exists = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::exists::library::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Library.books#findById
         * @methodOf lbServices.Library.books
         *
         * @description
         *
         * Find a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.findById = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::findById::library::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Library.books#link
         * @methodOf lbServices.Library.books
         *
         * @description
         *
         * Add a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.link = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::link::library::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Library.books#unlink
         * @methodOf lbServices.Library.books
         *
         * @description
         *
         * Remove the books relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.books.unlink = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::unlink::library::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Library.books#updateById
         * @methodOf lbServices.Library.books
         *
         * @description
         *
         * Update a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.updateById = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::updateById::library::books"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Book
 * @header lbServices.Book
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Book` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Book",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/books/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Book.libraries.findById() instead.
        "prototype$__findById__libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/:fk",
          method: "GET"
        },

        // INTERNAL. Use Book.libraries.destroyById() instead.
        "prototype$__destroyById__libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Book.libraries.updateById() instead.
        "prototype$__updateById__libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Book.libraries.link() instead.
        "prototype$__link__libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Book.libraries.unlink() instead.
        "prototype$__unlink__libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Book.libraries.exists() instead.
        "prototype$__exists__libraries": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/libraries/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Book.patrons.findById() instead.
        "prototype$__findById__patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Book.patrons.destroyById() instead.
        "prototype$__destroyById__patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Book.patrons.updateById() instead.
        "prototype$__updateById__patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Book.patrons.link() instead.
        "prototype$__link__patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Book.patrons.unlink() instead.
        "prototype$__unlink__patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Book.patrons.exists() instead.
        "prototype$__exists__patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Book.author() instead.
        "prototype$__get__author": {
          url: urlBase + "/books/:id/author",
          method: "GET"
        },

        // INTERNAL. Use Book.libraries() instead.
        "prototype$__get__libraries": {
          isArray: true,
          url: urlBase + "/books/:id/libraries",
          method: "GET"
        },

        // INTERNAL. Use Book.libraries.create() instead.
        "prototype$__create__libraries": {
          url: urlBase + "/books/:id/libraries",
          method: "POST"
        },

        // INTERNAL. Use Book.libraries.destroyAll() instead.
        "prototype$__delete__libraries": {
          url: urlBase + "/books/:id/libraries",
          method: "DELETE"
        },

        // INTERNAL. Use Book.libraries.count() instead.
        "prototype$__count__libraries": {
          url: urlBase + "/books/:id/libraries/count",
          method: "GET"
        },

        // INTERNAL. Use Book.patrons() instead.
        "prototype$__get__patrons": {
          isArray: true,
          url: urlBase + "/books/:id/patrons",
          method: "GET"
        },

        // INTERNAL. Use Book.patrons.create() instead.
        "prototype$__create__patrons": {
          url: urlBase + "/books/:id/patrons",
          method: "POST"
        },

        // INTERNAL. Use Book.patrons.destroyAll() instead.
        "prototype$__delete__patrons": {
          url: urlBase + "/books/:id/patrons",
          method: "DELETE"
        },

        // INTERNAL. Use Book.patrons.count() instead.
        "prototype$__count__patrons": {
          url: urlBase + "/books/:id/patrons/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#create
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/books",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#createMany
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/books",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#upsert
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/books",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#exists
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/books/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#findById
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/books/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#find
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/books",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#findOne
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/books/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#updateAll
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/books/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#deleteById
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/books/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#count
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/books/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#prototype$updateAttributes
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/books/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Book#createChangeStream
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/books/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Library.books.findById() instead.
        "::findById::library::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/:fk",
          method: "GET"
        },

        // INTERNAL. Use Library.books.destroyById() instead.
        "::destroyById::library::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Library.books.updateById() instead.
        "::updateById::library::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Library.books.link() instead.
        "::link::library::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Library.books.unlink() instead.
        "::unlink::library::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Library.books.exists() instead.
        "::exists::library::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/libraries/:id/books/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Library.books() instead.
        "::get::library::books": {
          isArray: true,
          url: urlBase + "/libraries/:id/books",
          method: "GET"
        },

        // INTERNAL. Use Library.books.create() instead.
        "::create::library::books": {
          url: urlBase + "/libraries/:id/books",
          method: "POST"
        },

        // INTERNAL. Use Library.books.createMany() instead.
        "::createMany::library::books": {
          isArray: true,
          url: urlBase + "/libraries/:id/books",
          method: "POST"
        },

        // INTERNAL. Use Library.books.destroyAll() instead.
        "::delete::library::books": {
          url: urlBase + "/libraries/:id/books",
          method: "DELETE"
        },

        // INTERNAL. Use Library.books.count() instead.
        "::count::library::books": {
          url: urlBase + "/libraries/:id/books/count",
          method: "GET"
        },

        // INTERNAL. Use Patron.books.findById() instead.
        "::findById::patron::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/:fk",
          method: "GET"
        },

        // INTERNAL. Use Patron.books.destroyById() instead.
        "::destroyById::patron::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Patron.books.updateById() instead.
        "::updateById::patron::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patron.books.link() instead.
        "::link::patron::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patron.books.unlink() instead.
        "::unlink::patron::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Patron.books.exists() instead.
        "::exists::patron::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Patron.books() instead.
        "::get::patron::books": {
          isArray: true,
          url: urlBase + "/patrons/:id/books",
          method: "GET"
        },

        // INTERNAL. Use Patron.books.create() instead.
        "::create::patron::books": {
          url: urlBase + "/patrons/:id/books",
          method: "POST"
        },

        // INTERNAL. Use Patron.books.createMany() instead.
        "::createMany::patron::books": {
          isArray: true,
          url: urlBase + "/patrons/:id/books",
          method: "POST"
        },

        // INTERNAL. Use Patron.books.destroyAll() instead.
        "::delete::patron::books": {
          url: urlBase + "/patrons/:id/books",
          method: "DELETE"
        },

        // INTERNAL. Use Patron.books.count() instead.
        "::count::patron::books": {
          url: urlBase + "/patrons/:id/books/count",
          method: "GET"
        },

        // INTERNAL. Use BookRental.book() instead.
        "::get::bookRental::book": {
          url: urlBase + "/bookRentals/:id/book",
          method: "GET"
        },

        // INTERNAL. Use Author.books.findById() instead.
        "::findById::author::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/authors/:id/books/:fk",
          method: "GET"
        },

        // INTERNAL. Use Author.books.destroyById() instead.
        "::destroyById::author::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/authors/:id/books/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Author.books.updateById() instead.
        "::updateById::author::books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/authors/:id/books/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Author.books() instead.
        "::get::author::books": {
          isArray: true,
          url: urlBase + "/authors/:id/books",
          method: "GET"
        },

        // INTERNAL. Use Author.books.create() instead.
        "::create::author::books": {
          url: urlBase + "/authors/:id/books",
          method: "POST"
        },

        // INTERNAL. Use Author.books.createMany() instead.
        "::createMany::author::books": {
          isArray: true,
          url: urlBase + "/authors/:id/books",
          method: "POST"
        },

        // INTERNAL. Use Author.books.destroyAll() instead.
        "::delete::author::books": {
          url: urlBase + "/authors/:id/books",
          method: "DELETE"
        },

        // INTERNAL. Use Author.books.count() instead.
        "::count::author::books": {
          url: urlBase + "/authors/:id/books/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Book#updateOrCreate
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Book#update
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Book#destroyById
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Book#removeById
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Book#modelName
    * @propertyOf lbServices.Book
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Book`.
    */
    R.modelName = "Book";

    /**
     * @ngdoc object
     * @name lbServices.Book.libraries
     * @header lbServices.Book.libraries
     * @object
     * @description
     *
     * The object `Book.libraries` groups methods
     * manipulating `Library` instances related to `Book`.
     *
     * Call {@link lbServices.Book#libraries Book.libraries()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Book#libraries
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Queries libraries of book.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        R.libraries = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::get::book::libraries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.libraries#count
         * @methodOf lbServices.Book.libraries
         *
         * @description
         *
         * Counts libraries of book.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.libraries.count = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::count::book::libraries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.libraries#create
         * @methodOf lbServices.Book.libraries
         *
         * @description
         *
         * Creates a new instance in libraries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        R.libraries.create = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::create::book::libraries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.libraries#createMany
         * @methodOf lbServices.Book.libraries
         *
         * @description
         *
         * Creates a new instance in libraries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        R.libraries.createMany = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::createMany::book::libraries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.libraries#destroyAll
         * @methodOf lbServices.Book.libraries
         *
         * @description
         *
         * Deletes all libraries of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.libraries.destroyAll = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::delete::book::libraries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.libraries#destroyById
         * @methodOf lbServices.Book.libraries
         *
         * @description
         *
         * Delete a related item by id for libraries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for libraries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.libraries.destroyById = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::destroyById::book::libraries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.libraries#exists
         * @methodOf lbServices.Book.libraries
         *
         * @description
         *
         * Check the existence of libraries relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for libraries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        R.libraries.exists = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::exists::book::libraries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.libraries#findById
         * @methodOf lbServices.Book.libraries
         *
         * @description
         *
         * Find a related item by id for libraries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for libraries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        R.libraries.findById = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::findById::book::libraries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.libraries#link
         * @methodOf lbServices.Book.libraries
         *
         * @description
         *
         * Add a related item by id for libraries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for libraries
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        R.libraries.link = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::link::book::libraries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.libraries#unlink
         * @methodOf lbServices.Book.libraries
         *
         * @description
         *
         * Remove the libraries relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for libraries
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.libraries.unlink = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::unlink::book::libraries"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.libraries#updateById
         * @methodOf lbServices.Book.libraries
         *
         * @description
         *
         * Update a related item by id for libraries.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for libraries
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Library` object.)
         * </em>
         */
        R.libraries.updateById = function() {
          var TargetResource = $injector.get("Library");
          var action = TargetResource["::updateById::book::libraries"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Book.patrons
     * @header lbServices.Book.patrons
     * @object
     * @description
     *
     * The object `Book.patrons` groups methods
     * manipulating `Patron` instances related to `Book`.
     *
     * Call {@link lbServices.Book#patrons Book.patrons()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Book#patrons
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Queries patrons of book.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R.patrons = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::get::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.patrons#count
         * @methodOf lbServices.Book.patrons
         *
         * @description
         *
         * Counts patrons of book.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.patrons.count = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::count::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.patrons#create
         * @methodOf lbServices.Book.patrons
         *
         * @description
         *
         * Creates a new instance in patrons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R.patrons.create = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::create::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.patrons#createMany
         * @methodOf lbServices.Book.patrons
         *
         * @description
         *
         * Creates a new instance in patrons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R.patrons.createMany = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::createMany::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.patrons#destroyAll
         * @methodOf lbServices.Book.patrons
         *
         * @description
         *
         * Deletes all patrons of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.patrons.destroyAll = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::delete::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.patrons#destroyById
         * @methodOf lbServices.Book.patrons
         *
         * @description
         *
         * Delete a related item by id for patrons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for patrons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.patrons.destroyById = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::destroyById::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.patrons#exists
         * @methodOf lbServices.Book.patrons
         *
         * @description
         *
         * Check the existence of patrons relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for patrons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R.patrons.exists = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::exists::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.patrons#findById
         * @methodOf lbServices.Book.patrons
         *
         * @description
         *
         * Find a related item by id for patrons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for patrons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R.patrons.findById = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::findById::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.patrons#link
         * @methodOf lbServices.Book.patrons
         *
         * @description
         *
         * Add a related item by id for patrons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for patrons
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R.patrons.link = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::link::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.patrons#unlink
         * @methodOf lbServices.Book.patrons
         *
         * @description
         *
         * Remove the patrons relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for patrons
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.patrons.unlink = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::unlink::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book.patrons#updateById
         * @methodOf lbServices.Book.patrons
         *
         * @description
         *
         * Update a related item by id for patrons.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for patrons
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R.patrons.updateById = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::updateById::book::patrons"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Book#author
         * @methodOf lbServices.Book
         *
         * @description
         *
         * Fetches belongsTo relation author.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        R.author = function() {
          var TargetResource = $injector.get("Author");
          var action = TargetResource["::get::book::author"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Patron
 * @header lbServices.Patron
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Patron` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Patron",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/patrons/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Patron.books.findById() instead.
        "prototype$__findById__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/:fk",
          method: "GET"
        },

        // INTERNAL. Use Patron.books.destroyById() instead.
        "prototype$__destroyById__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Patron.books.updateById() instead.
        "prototype$__updateById__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patron.books.link() instead.
        "prototype$__link__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Patron.books.unlink() instead.
        "prototype$__unlink__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Patron.books.exists() instead.
        "prototype$__exists__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/patrons/:id/books/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Patron.books() instead.
        "prototype$__get__books": {
          isArray: true,
          url: urlBase + "/patrons/:id/books",
          method: "GET"
        },

        // INTERNAL. Use Patron.books.create() instead.
        "prototype$__create__books": {
          url: urlBase + "/patrons/:id/books",
          method: "POST"
        },

        // INTERNAL. Use Patron.books.destroyAll() instead.
        "prototype$__delete__books": {
          url: urlBase + "/patrons/:id/books",
          method: "DELETE"
        },

        // INTERNAL. Use Patron.books.count() instead.
        "prototype$__count__books": {
          url: urlBase + "/patrons/:id/books/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#create
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/patrons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#createMany
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/patrons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#upsert
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/patrons",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#exists
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/patrons/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#findById
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/patrons/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#find
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/patrons",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#findOne
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/patrons/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#updateAll
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/patrons/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#deleteById
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/patrons/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#count
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/patrons/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#prototype$updateAttributes
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/patrons/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Patron#createChangeStream
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/patrons/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Book.patrons.findById() instead.
        "::findById::book::patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/:fk",
          method: "GET"
        },

        // INTERNAL. Use Book.patrons.destroyById() instead.
        "::destroyById::book::patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Book.patrons.updateById() instead.
        "::updateById::book::patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Book.patrons.link() instead.
        "::link::book::patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Book.patrons.unlink() instead.
        "::unlink::book::patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Book.patrons.exists() instead.
        "::exists::book::patrons": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/books/:id/patrons/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Book.patrons() instead.
        "::get::book::patrons": {
          isArray: true,
          url: urlBase + "/books/:id/patrons",
          method: "GET"
        },

        // INTERNAL. Use Book.patrons.create() instead.
        "::create::book::patrons": {
          url: urlBase + "/books/:id/patrons",
          method: "POST"
        },

        // INTERNAL. Use Book.patrons.createMany() instead.
        "::createMany::book::patrons": {
          isArray: true,
          url: urlBase + "/books/:id/patrons",
          method: "POST"
        },

        // INTERNAL. Use Book.patrons.destroyAll() instead.
        "::delete::book::patrons": {
          url: urlBase + "/books/:id/patrons",
          method: "DELETE"
        },

        // INTERNAL. Use Book.patrons.count() instead.
        "::count::book::patrons": {
          url: urlBase + "/books/:id/patrons/count",
          method: "GET"
        },

        // INTERNAL. Use BookRental.patron() instead.
        "::get::bookRental::patron": {
          url: urlBase + "/bookRentals/:id/patron",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Patron#updateOrCreate
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Patron#update
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Patron#destroyById
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Patron#removeById
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Patron#modelName
    * @propertyOf lbServices.Patron
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Patron`.
    */
    R.modelName = "Patron";

    /**
     * @ngdoc object
     * @name lbServices.Patron.books
     * @header lbServices.Patron.books
     * @object
     * @description
     *
     * The object `Patron.books` groups methods
     * manipulating `Book` instances related to `Patron`.
     *
     * Call {@link lbServices.Patron#books Patron.books()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Patron#books
         * @methodOf lbServices.Patron
         *
         * @description
         *
         * Queries books of patron.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::get::patron::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patron.books#count
         * @methodOf lbServices.Patron.books
         *
         * @description
         *
         * Counts books of patron.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.books.count = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::count::patron::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patron.books#create
         * @methodOf lbServices.Patron.books
         *
         * @description
         *
         * Creates a new instance in books of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.create = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::create::patron::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patron.books#createMany
         * @methodOf lbServices.Patron.books
         *
         * @description
         *
         * Creates a new instance in books of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.createMany = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::createMany::patron::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patron.books#destroyAll
         * @methodOf lbServices.Patron.books
         *
         * @description
         *
         * Deletes all books of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.books.destroyAll = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::delete::patron::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patron.books#destroyById
         * @methodOf lbServices.Patron.books
         *
         * @description
         *
         * Delete a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.books.destroyById = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::destroyById::patron::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patron.books#exists
         * @methodOf lbServices.Patron.books
         *
         * @description
         *
         * Check the existence of books relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.exists = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::exists::patron::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patron.books#findById
         * @methodOf lbServices.Patron.books
         *
         * @description
         *
         * Find a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.findById = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::findById::patron::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patron.books#link
         * @methodOf lbServices.Patron.books
         *
         * @description
         *
         * Add a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.link = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::link::patron::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patron.books#unlink
         * @methodOf lbServices.Patron.books
         *
         * @description
         *
         * Remove the books relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.books.unlink = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::unlink::patron::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Patron.books#updateById
         * @methodOf lbServices.Patron.books
         *
         * @description
         *
         * Update a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.updateById = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::updateById::patron::books"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.BookRental
 * @header lbServices.BookRental
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BookRental` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "BookRental",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/bookRentals/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use BookRental.book() instead.
        "prototype$__get__book": {
          url: urlBase + "/bookRentals/:id/book",
          method: "GET"
        },

        // INTERNAL. Use BookRental.patron() instead.
        "prototype$__get__patron": {
          url: urlBase + "/bookRentals/:id/patron",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#create
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/bookRentals",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#createMany
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/bookRentals",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#upsert
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/bookRentals",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#exists
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/bookRentals/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#findById
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/bookRentals/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#find
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/bookRentals",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#findOne
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/bookRentals/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#updateAll
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/bookRentals/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#deleteById
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/bookRentals/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#count
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/bookRentals/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#prototype$updateAttributes
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/bookRentals/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BookRental#createChangeStream
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/bookRentals/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.BookRental#updateOrCreate
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.BookRental#update
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.BookRental#destroyById
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.BookRental#removeById
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BookRental` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.BookRental#modelName
    * @propertyOf lbServices.BookRental
    * @description
    * The name of the model represented by this $resource,
    * i.e. `BookRental`.
    */
    R.modelName = "BookRental";


        /**
         * @ngdoc method
         * @name lbServices.BookRental#book
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Fetches belongsTo relation book.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.book = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::get::bookRental::book"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.BookRental#patron
         * @methodOf lbServices.BookRental
         *
         * @description
         *
         * Fetches belongsTo relation patron.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Patron` object.)
         * </em>
         */
        R.patron = function() {
          var TargetResource = $injector.get("Patron");
          var action = TargetResource["::get::bookRental::patron"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Author
 * @header lbServices.Author
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Author` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Author",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/authors/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Author.books.findById() instead.
        "prototype$__findById__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/authors/:id/books/:fk",
          method: "GET"
        },

        // INTERNAL. Use Author.books.destroyById() instead.
        "prototype$__destroyById__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/authors/:id/books/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Author.books.updateById() instead.
        "prototype$__updateById__books": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/authors/:id/books/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Author.books() instead.
        "prototype$__get__books": {
          isArray: true,
          url: urlBase + "/authors/:id/books",
          method: "GET"
        },

        // INTERNAL. Use Author.books.create() instead.
        "prototype$__create__books": {
          url: urlBase + "/authors/:id/books",
          method: "POST"
        },

        // INTERNAL. Use Author.books.destroyAll() instead.
        "prototype$__delete__books": {
          url: urlBase + "/authors/:id/books",
          method: "DELETE"
        },

        // INTERNAL. Use Author.books.count() instead.
        "prototype$__count__books": {
          url: urlBase + "/authors/:id/books/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#create
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/authors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#createMany
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/authors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#upsert
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/authors",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#exists
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/authors/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#findById
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/authors/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#find
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/authors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#findOne
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/authors/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#updateAll
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/authors/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#deleteById
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/authors/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#count
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/authors/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#prototype$updateAttributes
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/authors/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Author#createChangeStream
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/authors/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Book.author() instead.
        "::get::book::author": {
          url: urlBase + "/books/:id/author",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Author#updateOrCreate
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Author#update
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Author#destroyById
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Author#removeById
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Author` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Author#modelName
    * @propertyOf lbServices.Author
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Author`.
    */
    R.modelName = "Author";

    /**
     * @ngdoc object
     * @name lbServices.Author.books
     * @header lbServices.Author.books
     * @object
     * @description
     *
     * The object `Author.books` groups methods
     * manipulating `Book` instances related to `Author`.
     *
     * Call {@link lbServices.Author#books Author.books()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Author#books
         * @methodOf lbServices.Author
         *
         * @description
         *
         * Queries books of author.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::get::author::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Author.books#count
         * @methodOf lbServices.Author.books
         *
         * @description
         *
         * Counts books of author.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.books.count = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::count::author::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Author.books#create
         * @methodOf lbServices.Author.books
         *
         * @description
         *
         * Creates a new instance in books of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.create = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::create::author::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Author.books#createMany
         * @methodOf lbServices.Author.books
         *
         * @description
         *
         * Creates a new instance in books of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.createMany = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::createMany::author::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Author.books#destroyAll
         * @methodOf lbServices.Author.books
         *
         * @description
         *
         * Deletes all books of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.books.destroyAll = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::delete::author::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Author.books#destroyById
         * @methodOf lbServices.Author.books
         *
         * @description
         *
         * Delete a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.books.destroyById = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::destroyById::author::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Author.books#findById
         * @methodOf lbServices.Author.books
         *
         * @description
         *
         * Find a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.findById = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::findById::author::books"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Author.books#updateById
         * @methodOf lbServices.Author.books
         *
         * @description
         *
         * Update a related item by id for books.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for books
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Book` object.)
         * </em>
         */
        R.books.updateById = function() {
          var TargetResource = $injector.get("Book");
          var action = TargetResource["::updateById::author::books"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
