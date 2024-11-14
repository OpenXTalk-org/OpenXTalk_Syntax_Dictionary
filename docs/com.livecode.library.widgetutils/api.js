{
			"id":"com.livecode.library.widgetutils-1",
			"name":"com.livecode.library.widgetutils",
			"display name":"Widget Utilities",
			"library":"com.livecode.library.widgetutils",
			"type":"module",
			"display syntax":[
				"Widget Utilities"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"A library of utility handlers for functions commonly needed by widgets.",
			"description":"A library of utility handlers for functions commonly needed by widgets."
		},{
			"id":"com.livecode.library.widgetutils-2",
			"name":"colortostring",
			"display name":"colorToString",
			"library":"com.livecode.library.widgetutils",
			"type":"handler",
			"syntax":[
				"colorToString(<pColor>,<pIncludeAlpha>)"
			],
			"display syntax":[
				"colorToString(<i>pColor</i>,<i>pIncludeAlpha</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Converts a color to a string representing the color",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"A value of type com.livecode.canvas.Color"
			},{
				"name":"pIncludeAlpha",
				"type":"",
				"refparam":"false",
				"description":"Whether to include the alpha value in the string or not"
			}],
			"examples":[{
				"script":"property widgetColor \tget getColor\nmetadata widgetColor.editor is \"com.livecode.pi.colorwithalpha\"\n\nprivate variable mColor as Color\n\npublic handler OnSave(out rProperties as Array)\n\tput colorToString(mColor, true) into rProperties[\"color with alpha\"]\nend handler\n\npublic handler getColor() returns String\n\t-- the editor used for the widgetColor property expects the alpha value to be included\n\treturn colorToString(mColor, true)\nend handler"
			},{
				"script":"log colorToString(color [0.4,0.4,0.4,0.4])\t\t\t-- logs \"102,102,102,102\""
			}],
			"description":"Use the <colorToString> handler when logging colors, returning them to LiveCode script \nvia a property getter, or serialising them in the widget's stored properties array for saving."
		},{
			"id":"com.livecode.library.widgetutils-3",
			"name":"stringtocolor",
			"display name":"stringToColor",
			"library":"com.livecode.library.widgetutils",
			"type":"handler",
			"syntax":[
				"stringToColor(<pString>)"
			],
			"display syntax":[
				"stringToColor(<i>pString</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Converts a string to a color",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"A comma delimited string representing a color in RGB / RGBA format"
			}],
			"examples":[{
				"script":"property widgetColor \tget getColor\tset setColor\nmetadata widgetColor.editor is \"com.livecode.pi.colorwithalpha\"\n\nprivate variable mColor as Color\n\npublic handler OnLoad(in pProperties as Array)\n\tsetColor(pProperties[\"color\"])\nend handler\n\npublic handler setColor(in pColor as String)\n\tput stringToColor(pColor) into mColor\n\tredraw all\nend handler"
			}],
			"description":"Use the <stringToColor> handler when receiving colors from LiveCode script \nvia a property setter, or from the widget's stored properties array when loading."
		},{
			"id":"com.livecode.library.widgetutils-4",
			"name":"inttostring",
			"display name":"intToString",
			"library":"com.livecode.library.widgetutils",
			"type":"handler",
			"syntax":[
				"intToString(<pNumber>)"
			],
			"display syntax":[
				"intToString(<i>pNumber</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Formats an integer as a string",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The integer to format"
			}],
			"examples":[{
				"script":"log 5 formatted as string \t\t\t-- logs 5.000000\nlog intToString(5)\t\t\t\t\t\t -- logs 5"
			}],
			"description":"<intToString> formats an integer as a string, removing the decimal place and any zeros\nthereafter."
		},{
			"id":"com.livecode.library.widgetutils-5",
			"name":"placeholdericon",
			"display name":"placeholderIcon",
			"library":"com.livecode.library.widgetutils",
			"type":"handler",
			"syntax":[
				"placeholderIcon(<pOS>)"
			],
			"display syntax":[
				"placeholderIcon(<i>pOS</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Returns a placeholder icon for a given operating system",
			"parameters":[{
				"name":"pOS",
				"type":"",
				"refparam":"false",
				"description":"The operating system.\n- \"mac\"\n- \"ios\"\n- \"android\"\n- \"windows\"\n- \"linux\"\n- \"emscripten\""
			}],
			"description":"Use <placeholderIcon> to fetch an SVG icon that can be\nused as the placeholder image for a widget that is native to, and\ntherefore only available on, a given operating system."
		},{
			"id":"com.livecode.library.widgetutils-6",
			"name":"stripzeros",
			"display name":"stripZeros",
			"library":"com.livecode.library.widgetutils",
			"type":"handler",
			"syntax":[
				"stripZeros(<pString>)"
			],
			"display syntax":[
				"stripZeros(<i>pString</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Removes any superfluous zeros and decimal places.",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The string to remove zeros from"
			}],
			"examples":[{
				"script":"log stripZeros(\"5.0000000\")\t\t\t-- logs 5\nlog stripZeros(\"5.432100\")\t\t\t-- logs 5.4321"
			}],
			"description":"Use <stripZeros> to remove any superfluous zeros and decimal places from <pString>\nwhich have been added by the \n\n`tNumber formatted as string`\n\nsyntax."
		},{
			"id":"com.livecode.library.widgetutils-7",
			"name":"constrainpathtorect",
			"display name":"constrainPathToRect",
			"library":"com.livecode.library.widgetutils",
			"type":"handler",
			"syntax":[
				"constrainPathToRect(<pTargetRect>,<xPath>)"
			],
			"display syntax":[
				"constrainPathToRect(<i>pTargetRect</i>,<i>xPath</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Scales and translates a path to fit within a rectangle",
			"parameters":[{
				"name":"pTargetRect",
				"type":"",
				"refparam":"false",
				"description":"The rectangle to fit the path within"
			},{
				"name":"xPath",
				"type":"",
				"refparam":"false",
				"description":"The path to transform"
			}],
			"examples":[{
				"script":"use com.livecode.library.iconsvg\n\npublic handler OnPaint() returns nothing\n\t-- get the 'shopping cart' icon from the icon library\n\tvariable tPathString as String\n \tput iconSVGPathFromName(\"shopping cart\") into tPathString\n\n\t-- create the path\n\tvariable tPath as Path\n\tput path tPathString into tPath\n\n\t-- scale the path to fit within the bounds of the widget\n\tconstrainPathToRect(my bounds, tPath)\n\n\t-- fill the path\n\tfill tPath on this canvas\nend handler"
			}],
			"description":"Scales and transforms <xPath> so that it fits within <pTargetRect> whilst maintaining its\naspect ratio."
		},{
			"id":"com.livecode.library.widgetutils-8",
			"name":"getnativethemename",
			"display name":"getNativeThemeName",
			"library":"com.livecode.library.widgetutils",
			"type":"handler",
			"syntax":[
				"getNativeThemeName()"
			],
			"display syntax":[
				"getNativeThemeName()"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Get the canonical name of the current \"native\" mobile theme",
			"examples":[{
				"script":"variable tNativeTheme as String\nput getNativeThemeName() into tNativeTheme\n\nif tNativeTheme is \"android\" then\n\t-- Draw Android themed UI\nelse\n\t-- Draw iOS themed UI\nend if"
			}],
			"description":"Returns the name of the current theme that should be used when the theme is\n\"native\".\n\nCurrently, this will return either \"iOS\" or \"Android\"."
		},{
			"id":"com.livecode.library.widgetutils-9",
			"name":"paintplaceholderimage",
			"display name":"paintPlaceholderImage",
			"library":"com.livecode.library.widgetutils",
			"type":"handler",
			"syntax":[
				"paintPlaceholderImage(<pCanvas>,<pBounds>,<pSVGIcon>,<pLabel>,<pFont>,<pColor>)"
			],
			"display syntax":[
				"paintPlaceholderImage(<i>pCanvas</i>,<i>pBounds</i>,<i>pSVGIcon</i>,<i>pLabel</i>,<i>pFont</i>,<i>pColor</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Paint a placeholder image using an SVG icon and name",
			"parameters":[{
				"name":"pCanvas",
				"type":"",
				"refparam":"false",
				"description":"The canvas on which to draw the placeholder"
			},{
				"name":"pBounds",
				"type":"",
				"refparam":"false",
				"description":"The rectangle in which to draw the placeholder on the canvas"
			},{
				"name":"pSVGIcon",
				"type":"",
				"refparam":"false",
				"description":"The placeholder icon to use"
			},{
				"name":"pLabel",
				"type":"",
				"refparam":"false",
				"description":"The label to use"
			},{
				"name":"pFont",
				"type":"",
				"refparam":"false",
				"description":"A font to draw the label with. If none specified, Arial 14pt is used."
			},{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"A color to draw the label with. If none specified, #404040 is used"
			}],
			"description":"Use the <paintPlaceHolder> image handler to draw a placeholder on the \ngiven canvas when, for example, the widget shouldn't be displayed as \nactive in browse mode, or is not available on the current platform.\n"
		}