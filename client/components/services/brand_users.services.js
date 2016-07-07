'use strict';

var app = angular.module('myApp.brand_users.services', ['ngResource',]);

app.factory('BrandUser', ['$resource', 'API_END_POINT',
  function($resource, API_END_POINT){
    return $resource(API_END_POINT + '/brands/:brand_id/brand_users/:id',
      {
        q: '@q',
        id: '@id'
      },
      {
      get: {
        method: 'GET',
        isArray: true,
        dataType: 'json',
        params: {
          q: '@q',
          brand_id: '@brand_id'
        }
      },
      update: {
        method: 'PATCH',
        isArray: false,
        dataType: 'json',
        params: {
          id: '@id',
          brand_id: '@brand_id'
        }
      },
      query: {
        method: 'GET',
        isArray: false,
        dataType: 'json',
        params: {
          id: '@id',
          brand_id: '@brand_id'
        }
      },
      destroy: {
        method: 'DELETE',
        isArray: false,
        dataType: 'json',
        params: {
          id: '@id',
          brand_id: '@brand_id'
        }
      }
    });
  }]);


