{
			"id":"com.livecode.library.oauth2-1",
			"name":"com.livecode.library.oauth2",
			"display name":"OAuth2 Library",
			"library":"com.livecode.library.oauth2",
			"type":"library",
			"display syntax":[
				"OAuth2 Library"
			],
			"associations":["com.livecode.library.oauth2"],
			"description":"Present an authorization dialog for any web service that supports \nOAuth2 Authorization Code Flow "
		},{
			"id":"com.livecode.library.oauth2-2",
			"name":"oauth2refresh",
			"display name":"OAuth2Refresh",
			"library":"com.livecode.library.oauth2",
			"type":"command",
			"syntax":[
				"OAuth2Refresh <pTokenURL>,<pClientID>,<pClientSecret>,<pRefreshToken>,<pPort>"
			],
			"display syntax":[
				"OAuth2Refresh <i>pTokenURL</i>,<i>pClientID</i>,<i>pClientSecret</i>,<i>pRefreshToken</i>,<i>pPort</i>"
			],
			"associations":["com.livecode.library.oauth2"],
			"summary":"Obtain a new authorization token using a refresh token",
			"parameters":[{
				"name":"pTokenURL",
				"type":"",
				"refparam":"false",
				"description":"The URL to obtain the authorization token from once an authorization code is\nsent to the redirect uri. This can be obtained from the API documentation of the service being\nauthorized."
			},{
				"name":"pClientID",
				"type":"",
				"refparam":"false",
				"description":"The application client ID obtained when setting up your application with\nthe web service."
			},{
				"name":"pClientSecret",
				"type":"",
				"refparam":"false",
				"description":"The application client secret obtained when setting up your application with\nthe web service."
			},{
				"name":"pRefreshToken",
				"type":"",
				"refparam":"false",
				"description":"The refresh token obtained from a previous OAuth 2 authorization."
			},{
				"name":"pPort",
				"type":"",
				"refparam":"false",
				"description":"The port to use for the redirect uri. It is recommended to use the range 49152-65535."
			}],
			"examples":[{
				"script":"constant kTokenURL = \"https://www.googleapis.com/oauth2/v4/token\"\nconstant kClientID = \"XXXXXXXXXXXXXXXXXXXXXXX\"\nconstant kClientSecret = \"XXXXXXXXXXXXXXXXXXXXXXX\"\n\nlocal sAuth\n\nprivate command __RefreshAuth\n   if sAuth is not an array then\n      return \"No authorization info available\" for error\n   end if\n\n   OAuth2Refresh kTokenURL, kClientID, kClientSecret, sAuth[\"refresh_token\"], 59004\n   if the result is empty then\n      put it into sAuth\n   else\n      return \"Not authorized\" for error\n   end if\n\n   set the httpHeaders to \"Authorization: Bearer \"& sAuth[\"access_token\"]\n   return empty for error\nend __RefreshAuth"
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"An array containing the parsed JSON data returned by the token url"
			},{
				"name":"the result",
				"type":"",
				"description":"An error string if an error occurred during authorization"
			}],
			"description":"Access tokens have limited lifetimes. If your application needs access to\nan API beyond the lifetime of a single access token, it can obtain a refresh \ntoken. A refresh token allows your application to obtain new access tokens.\n\n> *Note*: Save refresh tokens in secure long-term storage and continue to\n> use them as long as they remain valid. Limits apply to the number of\n> refresh tokens that are issued per client-user combination, and per\n> user across all clients, and these limits are different. If your application\n> requests enough refresh tokens to go over one of the limits, older refresh\n> tokens stop working."
		},{
			"id":"com.livecode.library.oauth2-3",
			"name":"oauth2",
			"display name":"OAuth2",
			"library":"com.livecode.library.oauth2",
			"type":"command",
			"syntax":[
				"OAuth2 <pAuthURL>,<pTokenURL>,<pClientID>,<pClientSecret>,<pScopes>,<pPort>,<pParams>"
			],
			"display syntax":[
				"OAuth2 <i>pAuthURL</i>,<i>pTokenURL</i>,<i>pClientID</i>,<i>pClientSecret</i>,<i>pScopes</i>,<i>pPort</i>,<i>pParams</i>"
			],
			"associations":["com.livecode.library.oauth2"],
			"summary":"Present an authorization dialog for any web service that supports OAuth2 Authorization Code Flow",
			"parameters":[{
				"name":"pAuthURL",
				"type":"",
				"refparam":"false",
				"description":"The URL to present for the authorization page. This can be obtained from the\nAPI documentation of the service being authorized."
			},{
				"name":"pTokenURL",
				"type":"",
				"refparam":"false",
				"description":"The URL to obtain the authorization token from once an authorization code is\nsent to the redirect uri. This can be obtained from the API documentation of the service being\nauthorized."
			},{
				"name":"pClientID",
				"type":"",
				"refparam":"false",
				"description":"The application client ID obtained when setting up your application with\nthe web service."
			},{
				"name":"pClientSecret",
				"type":"",
				"refparam":"false",
				"description":"The application client secret obtained when setting up your application with\nthe web service."
			},{
				"name":"pScopes",
				"type":"",
				"refparam":"false",
				"description":"A comma delimited list of authorization scopes. Valid scopes will be found\nin the API documentation of the service being authorized. If empty the scope parameter will be\nomitted."
			},{
				"name":"pPort",
				"type":"",
				"refparam":"false",
				"description":"The port to use for the redirect uri. It is recommended to use the range 49152-65535."
			},{
				"name":"pParams",
				"type":"",
				"refparam":"false",
				"description":"An array of additional key -> value pairs of extra parameters to be sent to\nthe authorization url. Some services implement additional options that require extra parameters."
			}],
			"examples":[{
				"script":"constant kAuthURL = \"https://slack.com/oauth/authorize\"\nconstant kTokenURL = \"https://slack.com/api/oauth.access\"\nconstant kClientID = \"XXXXXXXXX.XXXXXXXX\"\nconstant kClientSecret = \"XXXXXXXXXXXXXXXXXXXXX\"\nconstant kScopes = \"incoming-webhook\"\n\nOAuth2 kAuthURL, kTokenURL, kClientID, kClientSecret, kScopes, 54303\nif the result is not empty then\n   answer error \"Not authorized!\" \nelse\n   local tAuth\n   put it into tAuth\n   local tMessage\n   ask question \"What do you want to send?\"\n   if it is empty then\n      exit mouseUp\n   end if\n\n   put it into tMessage[\"text\"]\n   put ArrayToJSON(tMessage) into tMessage\n\n   set the httpHeaders to \"Content-type: application/json\" & \\\n         return & \"Authorization: token \" & sAuth[\"access_token\"]\n   post tMessage to url tAuth[\"incoming_webhook\"][\"url\"]\nend if"
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"An array containing the parsed JSON data returned by the token url\n"
			},{
				"name":"the result",
				"type":"",
				"description":"An error string if an error occurred during authorization"
			}],
			"description":"In order to handle the redirect the library accepts socket connections on localhost on a\nconfigurable port. The redirect uri configured when setting up your application with the\nweb service should be `http://127.0.0.1:port` where `port` is the port that can be\nconfigured with the port parameter. It is recommended to use the range 49152-65535.\n\n> **Warning:** The client secret should be kept securely when distributing an application in\n> order to protect your application from malicious use. The recommended way to do this is to\n> include the client secret into a script in a password protected stack. If that is not possible\n> allow users to configure their own application with the web service and enter their own\n> client id and secret into a preference instead of distributing your client id and  secret."
		}