{
			"id":"com.livecode.library.drawing-1",
			"name":"com.livecode.library.drawing",
			"display name":"Drawing Library",
			"library":"com.livecode.library.drawing",
			"type":"library",
			"display syntax":[
				"Drawing Library"
			],
			"associations":["com.livecode.library.drawing"],
			"description":"This script library implements an SVG compiler for turning SVG files into\n'drawing metafiles'. A simple and efficient binary format for representing\ncomplex vector graphics, supported directly by the image object."
		},{
			"id":"com.livecode.library.drawing-2",
			"name":"drawingsvgcompile",
			"display name":"drawingSvgCompile",
			"library":"com.livecode.library.drawing",
			"type":"function",
			"syntax":[
				"drawingSvgCompile(<pXmlText>)"
			],
			"display syntax":[
				"drawingSvgCompile(<i>pXmlText</i>)"
			],
			"associations":["com.livecode.library.drawing"],
			"summary":"Compile an SVG XML file to a drawing metafile.",
			"parameters":[{
				"name":"pXmlText",
				"type":"",
				"refparam":"false",
				"description":"The text of the SVG XML document to compile."
			}],
			"examples":[{
				"script":"on mouseUp\n\tset the text of image 1 to drawingSvgCompile(url (\"file:clock.svg\"))\nend mouseUp"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A binary string containing the encoded drawing - this can be used as the text\nof an image directly."
			},{
				"name":"the result",
				"type":"",
				"description":"An error string if an error occurred."
			}],
			"description":"Use <drawingSvgCompile> to build a binary string representing an SVG file\nwhich can be used as the 'text' of an image object for display.\n\nThe text of the SVG XML document is parsed using revXML and then stripped of all\nattributes and elements not currently understood by the SVG compiler. The\nresulting SVG is then converted to a lower-level form and encoded. This form can\nbe used as the text of an image.\n\nThe following SVG features are currently supported:\n\n  - 'svg' elements (percentage width/height only allowed on the root element)\n  - 'g' and 'defs' elements\n  - 'use' elements\n  - 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon' and 'path' elements\n  - 'fill', 'fill-opacity', fill-rule' properties\n  - 'stroke', 'stroke-opacity', stroke-width', 'stroke-dash-array',\n    'stroke-dash-offset', 'stroke-line-cap', 'stroke-line-join' and\n    'stroke-miter-limit' properties\n  - 'solidColor', 'linearGradient', 'radialGradient' paint servers\n  - 'solid-color' and 'solid-opacity' solid color server properties\n  - 'stop-color' and 'stop-opacity' gradient ramp properties\n  - absolute unit specifiers in, cm, mm, pt, pc, px\n\nColor values of the following forms are supported:\n\n  - &#35;rgb\n  - &#35;rrggbb\n  - rgb(rrr, ggg, bbb)\n  - standard SVG 1.1 named colors (https://www.w3.org/TR/SVG/types.html#ColorKeywords)\n\nRadial gradients support focal point (fx, fy) and SVG2's focal radius (fr).\n\nThe rendering of an SVG file inside an image object respects the width, height,\nviewBox and preserveAspectRatio attributes on the root SVG node in the document.\n\nIf the width and height attributes are specified, and they are not percentages,\nthen they are taken to be the formattedWidth/Height of the image object. In this\ncase the SVG will always display at that fixed size, clipped to the rect of the\nimage.\n\nIf the width and height attributes are not specified, or are percentages, and\na viewBox attribute is specified then the width and height of the viewBox are\ntaken to be the formattedWidth/Height of the image object. In this case the SVG\nwill scale to fit within the rect of the image object, respecting the setting\nof the SVG's preserveAspectRatio attribute.\n\nFinally if the width and height are not specified, or are percentages and there\nis no viewBox attribute then the intrinsic width and height are taken to be\n256.\n\n>*Note:* The drawing binary format is not currently considered stable and is\n> subject to change until the end of the RC cycle for 9. At present it is advised\n> that SVG files be compiled as needed when developing in the IDE, and then\n> compiled ahead-of-time when building a standalone.\n\n\n>*Note:* To use this function in a standalone, you must include the XML\n> extension.",
			"references":{
				"function":["drawingSvgCompileFile"]
			}
		},{
			"id":"com.livecode.library.drawing-3",
			"name":"drawingsvgcompilefile",
			"display name":"drawingSvgCompileFile",
			"library":"com.livecode.library.drawing",
			"type":"function",
			"syntax":[
				"drawingSvgCompileFile(<pXmlFile>)"
			],
			"display syntax":[
				"drawingSvgCompileFile(<i>pXmlFile</i>)"
			],
			"associations":["com.livecode.library.drawing"],
			"summary":"Compile an SVG XML file to a drawing metafile.",
			"parameters":[{
				"name":"pXmlFile",
				"type":"",
				"refparam":"false",
				"description":"The filename of the SVG XML file to load."
			}],
			"examples":[{
				"script":"on mouseUp\n\tset the text of image 1 to drawingSvgCompileFile(\"clock.svg\")\nend mouseUp"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A binary string containing the encoded drawing - this can be used as the text\nof an image directly."
			},{
				"name":"the result",
				"type":"",
				"description":"An error string if an error occurred."
			}],
			"description":"Use <drawingSvgCompileFile> to build a binary string representing an SVG file\nwhich can be used as the 'text' of an image object for display.\n\nThe SVG XML file is parsed using revXML and then stripped of all attributes\nand elements not currently understood by the SVG compiler. The resulting SVG\nis then converted to a lower-level form and encoded. This form can be used\nas the text of an image.\n\nThe following SVG features are currently supported:\n\n  - 'svg' elements (percentage width/height only allowed on the root element)\n  - 'g' and 'defs' elements\n  - 'use' elements\n  - 'rect', 'circle', 'ellipse', 'line', 'polyline', 'polygon' and 'path' elements\n  - 'fill', 'fill-opacity', fill-rule' properties\n  - 'stroke', 'stroke-opacity', stroke-width', 'stroke-dash-array',\n    'stroke-dash-offset', 'stroke-line-cap', 'stroke-line-join' and\n    'stroke-miter-limit' properties\n  - 'solidColor', 'linearGradient', 'radialGradient' paint servers\n  - 'solid-color' and 'solid-opacity' solid color server properties\n  - 'stop-color' and 'stop-opacity' gradient ramp properties\n  - absolute unit specifiers in, cm, mm, pt, pc, px\n\nColor values of the following forms are supported:\n\n  - &#35;rgb\n  - &#35;rrggbb\n  - rgb(rrr, ggg, bbb)\n  - standard SVG 1.1 named colors (https://www.w3.org/TR/SVG/types.html#ColorKeywords)\n\nRadial gradients support focal point (fx, fy) and SVG2's focal radius (fr).\n\nThe rendering of an SVG file inside an image object respects the width, height,\nviewBox and preserveAspectRatio attributes on the root SVG node in the document.\n\nIf the width and height attributes are specified, and they are not percentages,\nthen they are taken to be the formattedWidth/Height of the image object. In this\ncase the SVG will always display at that fixed size, clipped to the rect of the\nimage.\n\nIf the width and height attributes are not specified, or are percentages, and\na viewBox attribute is specified then the width and height of the viewBox are\ntaken to be the formattedWidth/Height of the image object. In this case the SVG\nwill scale to fit within the rect of the image object, respecting the setting\nof the SVG's preserveAspectRatio attribute.\n\nFinally if the width and height are not specified, or are percentages and there\nis no viewBox attribute then the intrinsic width and height are taken to be\n256.\n\n>*Note:* The drawing binary format is not currently considered stable and is\nsubject to change until the end of the RC cycle for 9. At present it is advised\nthat SVG files be compiled as needed when developing in the IDE, and then\ncompiled ahead-of-time when building a standalone.\n\n\n>*Note:* To use this function in a standalone, you must include the XML\nextension.\n\n\n>*Note:* The <XML library> (and by extension, this function) can not load\n> files from the resources folder on Android. You must either copy the\n> resources to the documents folder or use the <drawingSvgCompile>\n> function instead.",
			"references":{
				"function":["drawingSvgCompile"],
				"library":["XML library"]
			}
		}