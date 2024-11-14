{
			"id":"com.livecode.library.diff-1",
			"name":"com.livecode.library.diff",
			"display name":"Unified Diff Library",
			"library":"com.livecode.library.diff",
			"type":"library",
			"display syntax":[
				"Unified Diff Library"
			],
			"associations":["com.livecode.library.diff"],
			"description":"Text comparison library, handling differences in unified diff format"
		},{
			"id":"com.livecode.library.diff-2",
			"name":"diffcompare",
			"display name":"DiffCompare",
			"library":"com.livecode.library.diff",
			"type":"function",
			"syntax":[
				"DiffCompare(<pFrom>,<pTo>,<pContext>)"
			],
			"display syntax":[
				"DiffCompare(<i>pFrom</i>,<i>pTo</i>,<i>pContext</i>)"
			],
			"associations":["com.livecode.library.diff"],
			"summary":"Produce a diff representing the changes between two text strings",
			"parameters":[{
				"name":"pFrom",
				"type":"",
				"refparam":"false",
				"description":"The original source string. The produced diff will describe how to transform this string."
			},{
				"name":"pTo",
				"type":"",
				"refparam":"false",
				"description":"The updated source string. This will be compared to pFrom to produce the output diff."
			},{
				"name":"pContext",
				"type":"",
				"refparam":"false",
				"description":"The number of unchanged lines to include before / after each change in the diff."
			}],
			"examples":[{
				"script":""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string representing the changes between pFrom and pTo in unified diff format."
			}],
			"description":"Compare two strings, producing a string representing the changes between them in unified-diff format."
		},{
			"id":"com.livecode.library.diff-3",
			"name":"diffpatch",
			"display name":"DiffPatch",
			"library":"com.livecode.library.diff",
			"type":"function",
			"syntax":[
				"DiffPatch(<pSource>,<pDiff>)"
			],
			"display syntax":[
				"DiffPatch(<i>pSource</i>,<i>pDiff</i>)"
			],
			"associations":["com.livecode.library.diff"],
			"summary":"Patch a string with a previously computed diff.",
			"parameters":[{
				"name":"pSource",
				"type":"",
				"refparam":"false",
				"description":"The original string"
			},{
				"name":"pDiff",
				"type":"",
				"refparam":"false",
				"description":"The diff representing changes to apply to pSource"
			}],
			"examples":[{
				"script":""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An updated version of pSource with the changes from pDiff applied."
			}],
			"description":"Apply the diff to the source string, returning an updated string with the diff changes applied."
		},{
			"id":"com.livecode.library.diff-4",
			"name":"diffcomparefiles",
			"display name":"DiffCompareFiles",
			"library":"com.livecode.library.diff",
			"type":"function",
			"syntax":[
				"DiffCompareFiles(<pFrom>,<pTo>,<pContext>)"
			],
			"display syntax":[
				"DiffCompareFiles(<i>pFrom</i>,<i>pTo</i>,<i>pContext</i>)"
			],
			"associations":["com.livecode.library.diff"],
			"summary":"Produce a diff representing the changes between two text files",
			"parameters":[{
				"name":"pFrom",
				"type":"",
				"refparam":"false",
				"description":"The original source file. The produced diff will describe how to transform the contents of this file."
			},{
				"name":"pTo",
				"type":"",
				"refparam":"false",
				"description":"The updated source file. This will be compared to pFrom to produce the output diff."
			},{
				"name":"pContext",
				"type":"",
				"refparam":"false",
				"description":"The number of unchanged lines to include before / after each change in the diff."
			}],
			"examples":[{
				"script":""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string representing the changes between pFrom and pTo in unified diff format.\n"
			}],
			"description":"Compare two files, producing a string representing the changes between them in unified-diff format."
		}