'use strict';

var url = process.env.CT_URL || 'my.ctapp.io'
var base_url, api_url, auth_url;

if (process.env.NODE_ENV === 'production') {

  api_url = process.env.API_URL || 'https://api.ctapp.io/api/v1'
  auth_url = process.env.AUTH_URL || 'https://id.ctapp.io'
  base_url = process.env.CT_URL || 'my.ctapp.io'

  module.exports = {
    callbackURL: 'https://' + base_url + '/auth/login/callback',
    authorizationURL: auth_url + "/oauth/authorize",
    profileURL: api_url + "/me.json",
    tokenURL: auth_url + "/oauth/token",
    baseURL: "https://" + base_url
  }

} else if (process.env.NODE_ENV === 'beta') {

  api_url = process.env.API_URL || 'https://beta.ctapp.io/api/v1'
  auth_url = process.env.AUTH_URL || 'https://id.ctapp.io'
  base_url = process.env.CT_URL || 'my.ctapp.io'

  module.exports = {
    callbackURL: 'https://' + base_url + '/auth/login/callback',
    authorizationURL: auth_url + "/oauth/authorize",
    profileURL: api_url + "/me.json",
    tokenURL: auth_url + "/oauth/token",
    baseURL: "https://" + base_url
  }

} else {

  api_url = process.env.API_URL || 'http://mywifi.dev:8080/api/v1'
  auth_url = process.env.AUTH_URL || 'http://mywifi.dev:8080'
  base_url = process.env.CT_URL || 'my.ctapp.dev:9090'

  module.exports = {
    callbackURL: "http://" + base_url + "/auth/login/callback",
    authorizationURL: auth_url + "/oauth/authorize",
    profileURL: api_url + "/me.json",
    tokenURL: auth_url + "/oauth/token",
    APP_ID: "ba34b75eb5ec4e04e9062fa6233fc37dab92e038b75b09e5f7dc66606a1afb86",
    APP_SECRET: "da7a4e927c6b1c13a221cdac843337f08591cda23b9dd6eb8da03225911c3223",
    baseURL: "http://" + base_url,
    DEBUG: ''
  }

}
