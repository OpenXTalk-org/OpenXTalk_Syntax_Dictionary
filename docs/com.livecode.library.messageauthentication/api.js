{
			"id":"com.livecode.library.messageauthentication-1",
			"name":"com.livecode.library.messageauthentication",
			"display name":"Message Authentication Library",
			"library":"com.livecode.library.messageauthentication",
			"type":"library",
			"display syntax":[
				"Message Authentication Library"
			],
			"associations":["com.livecode.library.messageauthentication"],
			"description":"This script library implements message authentication codes"
		},{
			"id":"com.livecode.library.messageauthentication-2",
			"name":"messageauthenticationcode",
			"display name":"messageAuthenticationCode",
			"library":"com.livecode.library.messageauthentication",
			"type":"function",
			"syntax":[
				"messageAuthenticationCode(<message>, <key>, <codeType>)"
			],
			"display syntax":[
				"messageAuthenticationCode(<i>message</i>, <i>key</i>, <i>codeType</i>)"
			],
			"associations":["com.livecode.library.messageauthentication"],
			"summary":"Compute a message authentication code.",
			"parameters":[{
				"name":"message",
				"type":"",
				"refparam":"false",
				"description":"A <binary data> string."
			},{
				"name":"key",
				"type":"",
				"refparam":"false",
				"description":"A <binary data> string."
			},{
				"name":"codeType",
				"type":"",
				"refparam":"false",
				"description":"The cryptographic hash function to use\n- \"HMAC-SHA3-224\":\n- \"HMAC-SHA3-256\":\n- \"HMAC-SHA3-384\":\n- \"HMAC-SHA3-512\":\n- \"HMAC-SHA-224\":\n- \"HMAC-SHA-256\":\n- \"HMAC-SHA-384\":\n- \"HMAC-SHA-512\":\n- \"HMAC-SHA-1\": Use only for backwards compatibility\n- \"HMAC-MD5\": Use only for backwards compatibility"
			}],
			"examples":[{
				"script":"local tHMAC\nput messageAuthenticationCode(\"My Data\", \"My Secret\", \"HMAC-SHA-256\") into tHMAC"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Compute a message digest of <message>"
			}],
			"description":"<messageAuthenticationCode> provides a way to check the integrity of\ninformation transmitted over or stored in an unreliable medium is a\nprime necessity in the world of open computing and communications.\nMechanisms that provide such integrity check based on a secret key are\nusually called \"message authentication codes\" (MAC). Typically, message\nauthentication codes are used between two parties that share a secret\nkey in order to validate information transmitted between these\nparties. <messageAuthenticationCode> also uses a secret key for calculation\nof the message authentication values.",
			"references":{
				"function":["messageDigest"],
				"glossary":["binary data"]
			}
		}