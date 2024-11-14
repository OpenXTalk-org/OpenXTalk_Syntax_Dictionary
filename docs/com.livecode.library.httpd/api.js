{
			"id":"com.livecode.library.httpd-1",
			"name":"com.livecode.library.httpd",
			"display name":"HTTPD Library",
			"library":"com.livecode.library.httpd",
			"type":"library",
			"display syntax":[
				"HTTPD Library"
			],
			"associations":["com.livecode.library.httpd"],
			"description":"Handle HTTP requests in your application"
		},{
			"id":"com.livecode.library.httpd-2",
			"name":"httpdstop",
			"display name":"httpdStop",
			"library":"com.livecode.library.httpd",
			"type":"command",
			"syntax":[
				"httpdStop <pPorts>"
			],
			"display syntax":[
				"httpdStop <i>pPorts</i>"
			],
			"associations":["com.livecode.library.httpd"],
			"summary":"Stop a HTTP server",
			"parameters":[{
				"name":"pPorts",
				"type":"",
				"refparam":"false",
				"description":"A return delimited list of server ports to stop. If empty all servers are\nstopped."
			}],
			"description":"Stop all or some HTTP servers by closing the socket and deleting\nserver metadata."
		},{
			"id":"com.livecode.library.httpd-3",
			"name":"httpdresponse",
			"display name":"httpdResponse",
			"library":"com.livecode.library.httpd",
			"type":"command",
			"syntax":[
				"httpdResponse <pSocketID>,<pResponseCode>,<pContent>,<pHeaders>"
			],
			"display syntax":[
				"httpdResponse <i>pSocketID</i>,<i>pResponseCode</i>,<i>pContent</i>,<i>pHeaders</i>"
			],
			"associations":["com.livecode.library.httpd"],
			"summary":"Respond to a HTTP request",
			"parameters":[{
				"name":"pSocketID",
				"type":"",
				"refparam":"false",
				"description":"The socket ID sent to the request callback"
			},{
				"name":"pResponseCode",
				"type":"",
				"refparam":"false",
				"description":"A HTTP response code. See [here](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) for more detail."
			},{
				"name":"pContent",
				"type":"",
				"refparam":"false",
				"description":"This is the content to respond to the request with."
			},{
				"name":"pHeaders",
				"type":"",
				"refparam":"false",
				"description":"Any additional headers to send with the response. Content-Length, Server, Date and Connection are set by default."
			}],
			"examples":[{
				"script":"on mouseUp\n   httpdStart \"NewRequest\", 12345, \"My Server\"\n   launch url (\"http://localhost:\" & it)\nend mouseUp\n\non NewRequest pSocketID, pRequest\n   local tPath\n   put the effective filename of me into tPath\n   set the itemDelimiter to slash\n\n   put \"files/\" & pRequest[\"resource\"] into the last item of tPath\n\n   if there is a file tPath then\n      local tData\n      put url (\"binfile:\" & tPath) into tData\n      httpdResponse pSocketID, 200, tData\n   else\n      -- not found\n      httpdResponse pSocketID, 404\n   end if\nend NewRequest"
			}],
			"description":"Handle the callback set when starting the server and respond to the request according to your requirements."
		},{
			"id":"com.livecode.library.httpd-4",
			"name":"httpdstart",
			"display name":"httpdStart",
			"library":"com.livecode.library.httpd",
			"type":"command",
			"syntax":[
				"httpdStart <pCallback>,<pPort>,<pServerName>"
			],
			"display syntax":[
				"httpdStart <i>pCallback</i>,<i>pPort</i>,<i>pServerName</i>"
			],
			"associations":["com.livecode.library.httpd"],
			"summary":"Start a HTTP server",
			"parameters":[{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"A handler name to be sent to the caller when a new HTTP request\nis handled by the server."
			},{
				"name":"pPort",
				"type":"",
				"refparam":"false",
				"description":"The port to accept HTTP requests on. If empty then port 8080 will be\nused and if the accept command fails with 8080 an available ephemeral\nport will be used. If pPort is 0 an available ephemeral port will be\nused."
			},{
				"name":"pServerName",
				"type":"",
				"refparam":"false",
				"description":"Optional server name defaults to `LiveCode`"
			}],
			"examples":[{
				"script":"on mouseUp\n   httpdStart \"NewRequest\", 12345, \"My Server\"\n   launch url (\"http://localhost:\" & it)\nend mouseUp\n\non NewRequest pSocketID, pRequest\n   httpdResponse pSocketID, 200\nend NewRequest"
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"The port the server was started on. Use this if pPort was empty or 0 to\ndetermine which port was used.\n"
			},{
				"name":"the result",
				"type":"",
				"description":"An error string if an error occurred"
			}],
			"description":"Start a HTTP server. Once started any HTTP requests to the server will\nresult in a callback to the caller with the message specified with pCallback.\n\nIf the callback will have two parameters. The socket ID of the request. And an\narray describing the request. The array has the following keys:\n\n- \"method\": The HTTP request method\n- \"resource\": The request resource path e.g /images/foo.gif\n- \"parameters\": For GET requests with parameters or application/x-www-form-urlencoded encoded\nthis key will be an array of parameters\n- \"headers\": An array of request headers\n- \"content\": The request body (empty for application/x-www-form-urlencoded)"
		}