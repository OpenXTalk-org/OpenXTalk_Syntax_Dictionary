{
			"id":"org.openxtalk.library.libsvgicons-1",
			"name":"org.openxtalk.library.libsvgicons",
			"display name":"OpenXTalk libSVGIcons",
			"library":"org.openxtalk.library.libsvgicons",
			"type":"library",
			"display syntax":[
				"OpenXTalk libSVGIcons"
			],
			"associations":["org.openxtalk.library.libsvgicons"],
			"summary":"This is the OpenXtalk SVG icon path library.",
			"description":"This is the OpenXtalk SVG icon path library."
		},{
			"id":"org.openxtalk.library.libsvgicons-2",
			"name":"horizontalflippedofsvgpath",
			"display name":"horizontalFlippedOfSVGPath",
			"library":"org.openxtalk.library.libsvgicons",
			"type":"handler",
			"syntax":[
				"horizontalFlippedOfSVGPath( pInSVGPath )"
			],
			"display syntax":[
				"horizontalFlippedOfSVGPath( pInSVGPath )"
			],
			"associations":["org.openxtalk.library.libsvgicons"],
			"summary":"\npOutSVGPath:A modified SVG path string",
			"parameters":[{
				"name":"pInSVGPath",
				"type":"",
				"refparam":"false",
				"description":"An SVG path string"
			}],
			"examples":[{
				"script":"put horizontalFlippedOfSVGPath(pInSVGPath) into tOutSVGPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":""
			}],
			"description":"horizontalFlippedOfSVGPath function takes an input SVG Path and returns a new\nSVG path string that has been flipped horizontally."
		},{
			"id":"org.openxtalk.library.libsvgicons-3",
			"name":"vertscaledofsvgpath",
			"display name":"vertScaledOfSVGPath",
			"library":"org.openxtalk.library.libsvgicons",
			"type":"handler",
			"syntax":[
				"vertScaledOfSVGPath( pSVGPath )"
			],
			"display syntax":[
				"vertScaledOfSVGPath( pSVGPath )"
			],
			"associations":["org.openxtalk.library.libsvgicons"],
			"parameters":[{
				"name":"pScale",
				"type":"",
				"refparam":"false",
				"description":"Percentage of original to scale"
			},{
				"name":"pSVGPath",
				"type":"",
				"refparam":"false",
				"description":"An SVG path string"
			}],
			"examples":[{
				"script":"put vertScaledOfSVGPath( 1.5, pInSVGPath) into tOutSVGPath -- tOutSVGPath is 150% of the height of pInSVGPath"
			}],
			"description":"Use vertScaledOfSVGPath function to get a path that is scaled height-wise."
		},{
			"id":"org.openxtalk.library.libsvgicons-4",
			"name":"horizscaledofsvgpath",
			"display name":"horizScaledOfSVGPath",
			"library":"org.openxtalk.library.libsvgicons",
			"type":"handler",
			"syntax":[
				"horizSquishFlippedOfSVGPath( pSVGPath )"
			],
			"display syntax":[
				"horizSquishFlippedOfSVGPath( pSVGPath )"
			],
			"associations":["org.openxtalk.library.libsvgicons"],
			"parameters":[{
				"name":"pScale",
				"type":"",
				"refparam":"false",
				"description":"Percentage of original to scale"
			},{
				"name":"pSVGPath",
				"type":"",
				"refparam":"false",
				"description":"An SVG path string"
			}],
			"examples":[{
				"script":"put horizScaledOfSVGPath( 1.5, pInSVGPath) into tOutSVGPath -- tOutSVGPath is 150% of the width of pInSVGPath"
			}],
			"description":"Use horizScaledOfSVGPath function to get a path that is scaled width-wise."
		},{
			"id":"org.openxtalk.library.libsvgicons-5",
			"name":"loadiconsetfromtsvfile",
			"display name":"loadIconSetFromTSVFile",
			"library":"org.openxtalk.library.libsvgicons",
			"type":"handler",
			"syntax":[
				"loadIconSetFromTSVFile pFilePathToTSVfile"
			],
			"display syntax":[
				"loadIconSetFromTSVFile pFilePathToTSVfile"
			],
			"associations":["org.openxtalk.library.libsvgicons"],
			"parameters":[{
				"name":"pFilePathToTSVfile",
				"type":"",
				"refparam":"false",
				"description":"A file path to an SVG glyphs collection in Tab Seperated Values format."
			}],
			"examples":[{
				"script":"put horizontalFlippedOfSVGPath(pInSVGPath) into tOutSVGPath"
			}],
			"description":"Use loadIconSetFromTSVFile command to load an SVG glyphs collection in\nTab Seperated Values format. The will then be parsed and loaded into memory into\nthe font family array compatible with the IconSVG library.\nLibSVGIcons comes with glyph several sets ready to be used."
		},{
			"id":"org.openxtalk.library.libsvgicons-6",
			"name":"verticalflippedofsvgpath",
			"display name":"verticalFlippedOfSVGPath",
			"library":"org.openxtalk.library.libsvgicons",
			"type":"handler",
			"syntax":[
				"verticalFlippedOfSVGPath( pInSVGPath )"
			],
			"display syntax":[
				"verticalFlippedOfSVGPath( pInSVGPath )"
			],
			"associations":["org.openxtalk.library.libsvgicons"],
			"summary":"\npOutSVGPath:A modified SVG path string",
			"parameters":[{
				"name":"pInSVGPath",
				"type":"",
				"refparam":"false",
				"description":"An SVG path string"
			}],
			"examples":[{
				"script":"put verticalFlippedOfSVGPath(pInSVGPath) into tOutSVGPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":""
			}],
			"description":"verticalFlippedOfSVGPath function takes an input SVG Path and returns a new\nSVG path string that has been flipped vertically.\n"
		}