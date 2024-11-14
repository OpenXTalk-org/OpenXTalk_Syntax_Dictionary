{
			"id":"com.livecode.library.mime-1",
			"name":"com.livecode.library.mime",
			"display name":"MIME Library",
			"library":"com.livecode.library.mime",
			"type":"library",
			"display syntax":[
				"MIME Library"
			],
			"associations":["com.livecode.library.mime"],
			"description":"This script library implements portions of Multipurpose Internet Mail \nExtensions (MIME) as described in RFCs 2045 - 2049. Use this library to \nimplement common data formats such as email message bodies and form \nencoding in HTTP."
		},{
			"id":"com.livecode.library.mime-2",
			"name":"mimethemimetypeofextension",
			"display name":"mimeTheMIMETypeOfExtension",
			"library":"com.livecode.library.mime",
			"type":"function",
			"syntax":[
				"mimeTheMIMETypeOfExtension(<pExtension>)"
			],
			"display syntax":[
				"mimeTheMIMETypeOfExtension(<i>pExtension</i>)"
			],
			"associations":["com.livecode.library.mime"],
			"summary":"Determine the MIME type for a file extension",
			"parameters":[{
				"name":"pExtension",
				"type":"",
				"refparam":"false",
				"description":"A file extension"
			}],
			"examples":[{
				"script":"put \"Content-Type:\" && mimeTheMIMETypeOfExtension(\"xls\") & crlf after tHeaders"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A mime type for the given file extension."
			}],
			"description":"The mime types listed are the default mime types in an Apache web server installation\nfor a given file extension. If the file extension is not found then `application/octet-stream`\nwill be returned."
		},{
			"id":"com.livecode.library.mime-3",
			"name":"mimetheextensionsofmimetype",
			"display name":"mimeTheExtensionsOfMIMEType",
			"library":"com.livecode.library.mime",
			"type":"function",
			"syntax":[
				"mimeTheExtensionsOfMIMEType(<pMimeType>)"
			],
			"display syntax":[
				"mimeTheExtensionsOfMIMEType(<i>pMimeType</i>)"
			],
			"associations":["com.livecode.library.mime"],
			"summary":"List extensions that match a MIME type or MIME type wildcard pattern",
			"parameters":[{
				"name":"pMIMEType",
				"type":"",
				"refparam":"false",
				"description":"A MIME type or wildcard pattern for matching a MIME type"
			}],
			"examples":[{
				"script":"put line 1 of mimeTheExtensionsOfMIMEType(\"application/epub+zip\") into tExtension"
			},{
				"script":"put mimeTheExtensionsOfMIMEType(\"image/*\") into tImageExtensions"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list of extensions or empty if none were found."
			}],
			"description":"List the extensions associated with a given MIME type or with a MIME type matching\na wildcard pattern."
		},{
			"id":"com.livecode.library.mime-4",
			"name":"mimeencodefieldasmimemultipartdocument",
			"display name":"mimeEncodeFieldAsMIMEMultipartDocument",
			"library":"com.livecode.library.mime",
			"type":"function",
			"syntax":[
				"mimeEncodeFieldAsMIMEMultipartDocument(<pField>)"
			],
			"display syntax":[
				"mimeEncodeFieldAsMIMEMultipartDocument(<i>pField</i>)"
			],
			"associations":["com.livecode.library.mime"],
			"summary":"Generate multipart content from a field control",
			"parameters":[{
				"name":"pField",
				"type":"",
				"refparam":"false",
				"description":"The long id of the field to encode"
			}],
			"examples":[{
				"script":"put mimeEncodeFieldAsMIMEMultipartDocument(the long id of field \"email\") into tBody\nSendEmail tBody"
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"Set to the multipart content generated from the field content"
			},{
				"name":"the result",
				"type":"",
				"description":"An error message if an error was encountered"
			}],
			"description":"Parses the content of a field to create multipart content"
		},{
			"id":"com.livecode.library.mime-5",
			"name":"mimeencodeformimetransfer",
			"display name":"mimeEncodeForMIMETransfer",
			"library":"com.livecode.library.mime",
			"type":"function",
			"syntax":[
				"mimeEncodeForMIMETransfer(<pData>,<pEncoding>)"
			],
			"display syntax":[
				"mimeEncodeForMIMETransfer(<i>pData</i>,<i>pEncoding</i>)"
			],
			"associations":["com.livecode.library.mime"],
			"summary":"Encode data in content transfer encoding",
			"parameters":[{
				"name":"pData",
				"type":"",
				"refparam":"false",
				"description":"The data to be encoded. If the parameter is not binary data then it will\nbe encoded to binary as UTF-8 encoded text before encoding with the\nrequested form. "
			},{
				"name":"pEncoding",
				"type":"",
				"refparam":"false",
				"description":"The encoding to return the data in\n- \"quoted-printable\": Quoted printable encoding. Most likely used for text with many ASCII characters\n- \"base64\": Base 64 encoding"
			}],
			"examples":[{
				"script":"put tHeaders & crlf & crlf & \\\n      mimeEncodeForMIMETransfer(tEmailBody, \"quoted-printable\") into tContentA[1]"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The encoded data"
			}],
			"description":"Use the <mimeEncodeForMIMETransfer> function to encode data for transfer",
			"references":{
				"function":["textEncode"]
			}
		},{
			"id":"com.livecode.library.mime-6",
			"name":"mimeencodeasmimemultipartdocument",
			"display name":"mimeEncodeAsMIMEMultipartDocument",
			"library":"com.livecode.library.mime",
			"type":"function",
			"syntax":[
				"mimeEncodeAsMIMEMultipartDocument(<pContentA>,<pMultipartType>,<pParamA>)"
			],
			"display syntax":[
				"mimeEncodeAsMIMEMultipartDocument(<i>pContentA</i>,<i>pMultipartType</i>,<i>pParamA</i>)"
			],
			"associations":["com.livecode.library.mime"],
			"summary":"Build a multipart mime content type from an array of pre-encoded content",
			"parameters":[{
				"name":"pContentA",
				"type":"",
				"refparam":"false",
				"description":"A numerically indexed array of pre-encoded parts including headers. If no headers are present\na leading crlf should be present."
			},{
				"name":"pMultipartType",
				"type":"",
				"refparam":"false",
				"description":"The type of multipart content. If not provided the default type will be `mixed`."
			},{
				"name":"pParamA",
				"type":"",
				"refparam":"false",
				"description":"Array of key : value pairs of additional options to be included in the Content-Type header"
			}],
			"examples":[{
				"script":"put \"text/html\" into tParamA[\"type\"]\nput mimeEncodeAsMIMEMultipartDocument(tContentA, \"related\", tParamA) into tMailBody"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The multipart encoded content"
			}],
			"description":"This command takes an array of pre-encoded content and creates a multipart\ncontent type header and boundary to build a single multipart encoded value."
		},{
			"id":"com.livecode.library.mime-7",
			"name":"mimeencodeasmimeemail",
			"display name":"mimeEncodeAsMIMEEmail",
			"library":"com.livecode.library.mime",
			"type":"command",
			"syntax":[
				"mimeEncodeAsMIMEEmail <pBody>,<pFrom>,<pTo>,<pCc>,<pSubject>,<pAttachmentA>"
			],
			"display syntax":[
				"mimeEncodeAsMIMEEmail <i>pBody</i>,<i>pFrom</i>,<i>pTo</i>,<i>pCc</i>,<i>pSubject</i>,<i>pAttachmentA</i>"
			],
			"associations":["com.livecode.library.mime"],
			"summary":"Create data to be sent as an email",
			"parameters":[{
				"name":"pBody",
				"type":"",
				"refparam":"false",
				"description":"The pre-encoded body of the email. See the <mimeEncodeFieldAsMIMEMultipartDocument>\n<function> for an easy way to generate the body from field content."
			},{
				"name":"pFrom",
				"type":"",
				"refparam":"false",
				"description":"From email address"
			},{
				"name":"pTo",
				"type":"",
				"refparam":"false",
				"description":"Recipient email addresses with one per line"
			},{
				"name":"pCc",
				"type":"",
				"refparam":"false",
				"description":"Copy to email addresses with one per line"
			},{
				"name":"pSubject",
				"type":"",
				"refparam":"false",
				"description":"Email subject line"
			},{
				"name":"pAttachmentA",
				"type":"",
				"refparam":"false",
				"description":"A numerically indexed (1..N) multi-dimensional\narray. Each element describes a different attachment. The elements of\nthe array may contain the following keys.\n\n- \"filepath\": The full path to the file. Optional if the \"data\" element has a value\n- \"data\": The file data. Optional if the \"filepath\" element has a value\n- \"name\": The file name. Optional if the \"filepath\" element has a value\n- \"mimetype\": The file mime type. Optional if the \"filepath\" or \"name\" element has an extension"
			}],
			"examples":[{
				"script":"put mimeEncodeFieldAsMIMEMultipartDocument(the long id of field \"email\") into tBody\nmimeEncodeAsMIMEEmail tBody, \"sales@livecode.com\", field \"email\", , \"Purchase order\"\n\nlocal tBytes, tSettings, tResponseHeaders\nput \"username\" into tSettings[\"username\"]\nput \"p@$$w0rd\" into tSettings[\"password\"]\n\nlocal tResult\nput tsNetSmtpSync(\"smtps://mail.livecode.com:465\", \"sales@livecode.com\", field \"email\", it, tResponseHeaders,tBytes,tSettings) into tResult\nif tResult begins with \"tsneterr:\" then\n   answer error \"Error:\" & word 2 to -1 of tResult\nend if"
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"Set to the email body including headers"
			},{
				"name":"the result",
				"type":"",
				"description":"An error message if an error was encountered"
			}],
			"description":"Creates the data to be sent as an email via an SMTP server"
		},{
			"id":"com.livecode.library.mime-8",
			"name":"mimethemimeversion",
			"display name":"mimeTheMIMEVersion",
			"library":"com.livecode.library.mime",
			"type":"function",
			"syntax":[
				"mimeTheMIMEVersion()"
			],
			"display syntax":[
				"mimeTheMIMEVersion()"
			],
			"associations":["com.livecode.library.mime"],
			"summary":"The MIME version this implemented in the library",
			"examples":[{
				"script":"put \"MIME-Version:\" && mimeTheMIMEVersion() & crlf after tHeaders"
			}],
			"description":"Use the <mimeTheMIMEVersion> function create a `MIME-Version` header.\n"
		}