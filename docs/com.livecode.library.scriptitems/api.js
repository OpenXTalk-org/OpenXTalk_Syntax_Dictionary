{
			"id":"com.livecode.library.scriptitems-1",
			"name":"com.livecode.library.scriptitems",
			"display name":"LiveCode Script item list handling",
			"library":"com.livecode.library.scriptitems",
			"type":"module",
			"display syntax":[
				"LiveCode Script item list handling"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Utility functions for LiveCode Script-compatible item lists.\n\nMany LiveCode Builder widget and library extensions expose APIs to\nLiveCode Script that use item lists.  This library provides a set of\nfunctions for converting `List` values to-and-from comma-delimited\nitem strings.",
			"description":"Utility functions for LiveCode Script-compatible item lists.\n\nMany LiveCode Builder widget and library extensions expose APIs to\nLiveCode Script that use item lists.  This library provides a set of\nfunctions for converting `List` values to-and-from comma-delimited\nitem strings."
		},{
			"id":"com.livecode.library.scriptitems-2",
			"name":"parseitemsasnumberlist",
			"display name":"parseItemsAsNumberList",
			"library":"com.livecode.library.scriptitems",
			"type":"handler",
			"syntax":[
				"parseItemsAsNumberList(<pStringValue>,<pListLength>,<pDefaultValue>)"
			],
			"display syntax":[
				"parseItemsAsNumberList(<i>pStringValue</i>,<i>pListLength</i>,<i>pDefaultValue</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Parse a comma-delimited \"item\" string as a list of numbers",
			"parameters":[{
				"name":"pStringValue",
				"type":"",
				"refparam":"false",
				"description":"A string containing comma-delimited \"items\""
			},{
				"name":"pListLength",
				"type":"",
				"refparam":"false",
				"description":"The number of elements the parsed list should contain"
			},{
				"name":"pDefaultValue",
				"type":"",
				"refparam":"false",
				"description":"Value to be used for extra elements"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The parsed items as a list of strings"
			}],
			"description":"Helper function for converting a LiveCode Script \"item\" list into a\nlist of numbers, obeying the LiveCode Script rules for items.\n\nIf <pListLength> is provided, then the returned list will always\ncontain that number of elements: extra elements will be discarded, and\nmissing elements will be set to <pDefaultValue>.",
			"references":{
				"handler":["parseItemsAsStringList","formatNumberListAsItems"]
			}
		},{
			"id":"com.livecode.library.scriptitems-3",
			"name":"parseitemsasstringlist",
			"display name":"parseItemsAsStringList",
			"library":"com.livecode.library.scriptitems",
			"type":"handler",
			"syntax":[
				"parseItemsAsStringList(<pStringValue>,<pListLength>,<pDefaultValue>)"
			],
			"display syntax":[
				"parseItemsAsStringList(<i>pStringValue</i>,<i>pListLength</i>,<i>pDefaultValue</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Parse a comma-delimited \"item\" string as a list of strings",
			"parameters":[{
				"name":"pStringValue",
				"type":"",
				"refparam":"false",
				"description":"A string containing comma-delimited \"items\""
			},{
				"name":"pListLength",
				"type":"",
				"refparam":"false",
				"description":"The number of elements the parsed list should contain"
			},{
				"name":"pDefaultValue",
				"type":"",
				"refparam":"false",
				"description":"Value to be used for extra elements"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The parsed items as a list of strings"
			}],
			"description":"Helper function for converting a LiveCode Script \"item\" list into list\nof strings, obeying the LiveCode Script rules for items.\n\nIf <pListLength> is provided, then the returned list will always\ncontain that number of elements: extra elements will be discarded, and\nmissing elements will be set to <pDefaultValue>.",
			"references":{
				"handler":["parseItemsAsNumberList","formatStringListAsItems"]
			}
		},{
			"id":"com.livecode.library.scriptitems-4",
			"name":"formatstringlistasitems",
			"display name":"formatStringListAsItems",
			"library":"com.livecode.library.scriptitems",
			"type":"handler",
			"syntax":[
				"formatStringListAsItems(<pList>)"
			],
			"display syntax":[
				"formatStringListAsItems(<i>pList</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Format a list of strings as a comma-delimited \"item\" string",
			"parameters":[{
				"name":"pList",
				"type":"",
				"refparam":"false",
				"description":"A list of strings"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A comma-delimited LiveCode Script-compatible \"item\" string"
			}],
			"description":"Helper function for converting a list of strings into a LiveCode\nScript \"item\" list, obeying the LiveCode Script rules for items.",
			"references":{
				"handler":["parseItemsAsStringList","formatNumberListAsItems"]
			}
		},{
			"id":"com.livecode.library.scriptitems-5",
			"name":"formatnumberlistasitems",
			"display name":"formatNumberListAsItems",
			"library":"com.livecode.library.scriptitems",
			"type":"handler",
			"syntax":[
				"formatNumberListAsItems(<pList>)"
			],
			"display syntax":[
				"formatNumberListAsItems(<i>pList</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Format a list of numbers as a comma-delimited \"item\" string",
			"parameters":[{
				"name":"pList",
				"type":"",
				"refparam":"false",
				"description":"A list of numbers"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A comma-delimited LiveCode Script-compatible \"item\" string"
			}],
			"description":"Helper function for converting a list of numbers into a LiveCode\nScript \"item\" list, obeying the LiveCode Script rules for items.",
			"references":{
				"handler":["formatStringListAsItems","parseItemsAsNumberList"]
			}
		}