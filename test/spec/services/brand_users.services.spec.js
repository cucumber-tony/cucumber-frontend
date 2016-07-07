'use strict';

describe("Brand Users Unit Tests", function() {

  beforeEach(module('myApp'));

  var $httpBackend;
  var BrandUser;

  beforeEach(inject(function($injector, _BrandUser_) {

    BrandUser = _BrandUser_;
    $httpBackend = $injector.get('$httpBackend');

    $httpBackend.when('GET', 'http://mywifi.dev:8080/api/v1/brands/xxx/brand_users')
      .respond(200, [{}]);

    $httpBackend.when('GET', 'http://mywifi.dev:8080/api/v1/brands/xxx/brand_users/123')
      .respond(200, {id: 123});

    $httpBackend.when('PATCH', 'http://mywifi.dev:8080/api/v1/brands/xxx/brand_users/123')
      .respond(200, {id: 123});

    $httpBackend.when('DELETE', 'http://mywifi.dev:8080/api/v1/brands/xxx/brand_users/123')
      .respond(200, {id: 123});

    $httpBackend.whenGET('/translations/en_GB.json').respond("");

   }));

  afterEach(function() {
   $httpBackend.verifyNoOutstandingExpectation();
   $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have sent a GET request to location codes', function() {
    var result = BrandUser.get({brand_id: 'xxx'})
    $httpBackend.expectGET('http://mywifi.dev:8080/api/v1/brands/xxx/brand_users')
    $httpBackend.flush();
  });

  it('should have sent a PATCH request to location show codes', function() {
    var result = BrandUser.update({brand_id: 'xxx', id: 123})
    $httpBackend.expectPATCH('http://mywifi.dev:8080/api/v1/brands/xxx/brand_users/123')
    $httpBackend.flush();
  });

  it('should have sent a GET request to location show codes', function() {
    var result = BrandUser.query({brand_id: 'xxx', id: 123})
    $httpBackend.expectGET('http://mywifi.dev:8080/api/v1/brands/xxx/brand_users/123')
    $httpBackend.flush();
  });

  it('should have sent a DELETE request to location show codes', function() {
    var result = BrandUser.destroy({brand_id: 'xxx', id: 123})
    $httpBackend.expectDELETE('http://mywifi.dev:8080/api/v1/brands/xxx/brand_users/123')
    $httpBackend.flush();
  });

})

