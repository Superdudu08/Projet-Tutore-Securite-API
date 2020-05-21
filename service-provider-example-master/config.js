// FD_URL: process.env.FD_URL || 'https://fournisseur-de-donnees.dev-franceconnect.fr'
const config = {
  FC_URL: process.env.FC_URL || 'https://fcp.integ01.dev-franceconnect.fr',
  FD_URL: process.env.FD_URL || 'http://localhost:4000',
  FS_URL: process.env.FS_URL || 'http://localhost:3000',
  AUTHENTICATION_CLIENT_ID: process.env.CLIENT_ID || '211286433e39cce01db448d80181bdfd005554b19cd51b3fe7943f6b3b86ab6e',
  AUTHENTICATION_CLIENT_SECRET: process.env.CLIENT_SECRET || '2791a731e6a59f56b6b4dd0d08c9b1f593b5f3658b9fd731cb24248e2669af4b',
  DATA_CLIENT_ID: process.env.DATA_CLIENT_ID || '211286433e39cce01db448d80181bdfd005554b19cd51b3fe7943f6b3b86ab6e',
  DATA_CLIENT_SECRET: process.env.DATA_CLIENT_SECRET || '2791a731e6a59f56b6b4dd0d08c9b1f593b5f3658b9fd731cb24248e2669af4b',
  FRANCE_CONNECT_KIT_PATH: process.env.FRANCE_CONNECT_KIT_PATH || '/js/franceconnect.js',
  AUTHORIZATION_FC_PATH: process.env.AUTHORIZATION_FC_PATH || '/api/v1/authorize',
  TOKEN_FC_PATH: process.env.TOKEN_FC_PATH || '/api/v1/token',
  USERINFO_FC_PATH: process.env.USERINFO_FC_PATH || '/api/v1/userinfo',
  LOGOUT_FC_PATH: process.env.LOGOUT_FC_PATH || '/api/v1/logout',
  LOGIN_CALLBACK_FS_PATH: '/login-callback',
  DATA_CALLBACK_FS_PATH: '/data-callback',
  LOGOUT_CALLBACK_FS_PATH: '/logout-callback',
  MANDATORY_SCOPES: process.env.MANDATORY_SCOPES || 'openid',
  FC_SCOPES: process.env.FC_SCOPES || 'given_name family_name birthdate gender birthplace birthcountry email preferred_username address phone',
  DGFIP_SCOPES: 'dgfip_rfr dgfip_nbpart dgfip_sitfam dgfip_pac dgfip_aft',
  DGFIP_DATA_FD_PATH: '/situations/ir/assiettes/annrev/2018',
  OPENID_ERRORS: [
    'invalid_request',
    'unauthorized_client',
    'access_denied',
    'unsupported_response_type',
    'invalid_scope',
    'server_error',
    'temporarily_unavailable',
  ],
};

export default config;
