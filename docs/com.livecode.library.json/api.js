{
			"id":"com.livecode.library.json-1",
			"name":"com.livecode.library.json",
			"display name":"JSON Library",
			"library":"com.livecode.library.json",
			"type":"library",
			"display syntax":[
				"JSON Library"
			],
			"associations":["com.livecode.library.json"],
			"summary":"This library provides support for generating and parsing JavaScript\nObject Notation (JSON) data.  See also <http://json.org> and\n<https://tools.ietf.org/html/rfc7159>.",
			"description":"This library provides support for generating and parsing JavaScript\nObject Notation (JSON) data.  See also <http://json.org> and\n<https://tools.ietf.org/html/rfc7159>."
		},{
			"id":"com.livecode.library.json-2",
			"name":"jsonimport",
			"display name":"JsonImport",
			"library":"com.livecode.library.json",
			"type":"handler",
			"syntax":[
				"JsonImport(<pJson>)"
			],
			"display syntax":[
				"JsonImport(<i>pJson</i>)"
			],
			"associations":["com.livecode.library.json"],
			"summary":"Parse JSON text into a LiveCode value.",
			"parameters":[{
				"name":"pJson",
				"type":"",
				"refparam":"false",
				"description":"String containing JSON text"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The top level value.  The type depends on the JSON content."
			}],
			"description":"<JsonImport> is used to convert data encoded in JSON format into a LiveCode\nvalue.  It parses <pJson> and returns the first top-level value found.  If any\nsyntax errors are found in <pJson>, an error is thrown.\n\nThe return value may be any of the following types, depending on the content\nof the file:\n\n* Array (for a JSON object)\n* List  (for a JSON array)\n* String (for a JSON string)\n* Number (for any JSON number)\n* Boolean (for JSON `true` or `false`)\n* nothing (for JSON `null`)",
			"tags":["json","library","json"]
		},{
			"id":"com.livecode.library.json-3",
			"name":"jsonexport",
			"display name":"JsonExport",
			"library":"com.livecode.library.json",
			"type":"handler",
			"syntax":[
				"JsonExport(<pValue>)"
			],
			"display syntax":[
				"JsonExport(<i>pValue</i>)"
			],
			"associations":["com.livecode.library.json"],
			"summary":"Format a LiveCode value as JSON text",
			"parameters":[{
				"name":"pValue",
				"type":"",
				"refparam":"false",
				"description":"A LiveCode value (Array, List, String, Number, Boolean, or nothing)"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string containing JSON-formatted text."
			}],
			"description":"<JsonExport> is used to convert a LiveCode value into data encoded in JSON\nformat.  If <pValue> is of a type that cannot be converted to JSON, an error is\nthrown.",
			"tags":["json","library","json"]
		}