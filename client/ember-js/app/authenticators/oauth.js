// Imports
import OAuth2PasswordGrant from "ember-simple-auth/authenticators/oauth2-password-grant";
import ENV from "../config/environment";

// Path Configuration
const serverTokenPath = "/oauth/login";
const serverTokenEndpoint = ENV.API_HOST
  ? ENV.API_HOST + serverTokenPath
  : serverTokenPath;

// Return OAuthPasswordGrant
export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint,
});
