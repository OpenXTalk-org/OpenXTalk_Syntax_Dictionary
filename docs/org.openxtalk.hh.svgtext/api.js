{
			"id":"org.openxtalk.hh.svgtext-1",
			"name":"org.openxtalk.hh.svgtext",
			"display name":"hhSVGT",
			"library":"org.openxtalk.hh.svgtext",
			"type":"widget",
			"display syntax":[
				"hhSVGT"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"SVGText v151 [-hh fecit, Sep 2016/Oct 2018]\n\nWidget SVGText displays (short) text as a SVG.\nThis uses SVG paths of one of two fonts: font 'ComfortaaSVG' or 'AclonicaSVG'.\nAlso a path with svg instructions is an optional input.\nSeveral (documented) properties are available for the display.\n\nThe following handlers are \"passed\" to LC Script (you can use them in your widget's script):\nmouseEnter, mouseLeave, mouseRelease, mouseUp.",
			"description":"SVGText v151 [-hh fecit, Sep 2016/Oct 2018]\n\nWidget SVGText displays (short) text as a SVG.\nThis uses SVG paths of one of two fonts: font 'ComfortaaSVG' or 'AclonicaSVG'.\nAlso a path with svg instructions is an optional input.\nSeveral (documented) properties are available for the display.\n\nThe following handlers are \"passed\" to LC Script (you can use them in your widget's script):\nmouseEnter, mouseLeave, mouseRelease, mouseUp."
		},{
			"id":"org.openxtalk.hh.svgtext-2",
			"name":"svgfontname",
			"display name":"svgFontName",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the svgFontName of <widget> to <pName>\nget the svgFontName of <widget> -- returns \"A\",\"B\" or \"C\""
			],
			"display syntax":[
				"set the svgFontName of <i>widget</i> to <i>pName</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Sets or gets the svgFontName.",
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The svgFontName of the svgFont"
			}],
			"examples":[{
				"script":"set the svgFontName of widget \"SVG_Text\" to \"A\""
			}],
			"description":"Use the svgFontName property to set the svgFont by choosing the svgFontName.\nCurrently only \"A\" (AclonicaSVG), \"B\" (Bitstream MONO VeraSansBold) or \"C\" (ComfortaaSVG)\nare available. Default is \"C\"."
		},{
			"id":"org.openxtalk.hh.svgtext-3",
			"name":"grabme",
			"display name":"grabMe",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the grabMe of <widget> to <pTrueOrFalse>\nget the grabMe of <widget>"
			],
			"display syntax":[
				"set the grabMe of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"If set to true grabMe causes a mouseDown in the svgText's bounds to grab the widget.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the grabMe of widget \"SVG_Text\" to not \\\n    the grabMe of widget \"SVG_Text\""
			}],
			"description":"Use the grabMe property to grab the widget by mouseDown on the svgText's bounds. These bounds are shown as a dashed light gray rectangle (transformed as the svgTextPath) while grabMe is true."
		},{
			"id":"org.openxtalk.hh.svgtext-4",
			"name":"mousedown",
			"display name":"mouseDown",
			"library":"org.openxtalk.hh.svgtext",
			"type":"message",
			"syntax":[
				"mouseDown pMouseBtnNum"
			],
			"display syntax":[
				"mouseDown pMouseBtnNum"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"examples":[{
				"script":"on mouseDown pMouseButton\n   if pMouseButton = 1 then\n      set the strokeColor of me to 100,0,0,127\n   end if\nend mouseDown"
			}]
		},{
			"id":"org.openxtalk.hh.svgtext-5",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"org.openxtalk.hh.svgtext",
			"type":"message",
			"syntax":[
				"mouseUp pMouseBtnNum"
			],
			"display syntax":[
				"mouseUp pMouseBtnNum"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"examples":[{
				"script":"on mouseUp pMouseButton\n   if pMouseButton = 1 then\n      set the strokeColor of me to 0,0,0,0\n   end if\nend mouseUp"
			}]
		},{
			"id":"org.openxtalk.hh.svgtext-6",
			"name":"mouseenter",
			"display name":"mouseEnter",
			"library":"org.openxtalk.hh.svgtext",
			"type":"message",
			"syntax":[
				"mouseEnter"
			],
			"display syntax":[
				"mouseEnter"
			],
			"associations":["org.openxtalk.hh.svgtext"]
		},{
			"id":"org.openxtalk.hh.svgtext-7",
			"name":"mouseleave",
			"display name":"mouseLeave",
			"library":"org.openxtalk.hh.svgtext",
			"type":"message",
			"syntax":[
				"mouseLeave"
			],
			"display syntax":[
				"mouseLeave"
			],
			"associations":["org.openxtalk.hh.svgtext"]
		},{
			"id":"org.openxtalk.hh.svgtext-8",
			"name":"hilitenow",
			"display name":"hiliteNow",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the hiliteNow of <widget> to <pTrueOrFalse>\nget the hiliteNow of <widget>"
			],
			"display syntax":[
				"set the hiliteNow of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"If set to true hilightNow causes the svgText path to constantly show its pushColor.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the hiliteNow of widget \"SVG_Text\" to not \\\n    the hiliteNow of widget \"SVG_Text\""
			}],
			"description":"Use the hiliteNow property to cause the svgText path to constantly show it's pushColor by script. Use the widget's showHilite property for \"autohilighting\" the svgText when clicked."
		},{
			"id":"org.openxtalk.hh.svgtext-9",
			"name":"pathrotate",
			"display name":"pathRotate",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the pathRotate of <widget> to <pAngle>\nget the pathRotate of <widget>"
			],
			"display syntax":[
				"set the pathRotate of <i>widget</i> to <i>pAngle</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"The angle of rotation of the svgText (= path).\n** The canvas bounds are adjusted after rotating. **",
			"parameters":[{
				"name":"pAngle",
				"type":"",
				"refparam":"false",
				"description":"The angle of rotation of the svgText in degrees\nis any integer, negative or positive.\n[<pAngle> is equivalent to 360 + <pAngle>]"
			}],
			"examples":[{
				"script":"-- rotate 30 degress cw\nset the pathRotate of widget \"SVG_Text\" to  30\n-- rotate 15 degress ccw\nset the pathRotate of widget \"SVG_Text\" to -15"
			}],
			"description":"Use the pathRotate property to rotate the svgText <pAngle> degrees clockwise (cw).\nYou may also give negative angles which rotate their absolute value counterclockwise (ccw)\nFor example -15 cw is equivalent to 360-15 cw is equivalent to 15 ccw.\nYou may also use \"the pathAngle\" as a synonym for \"the pathRotate\".\n[Note that pathRotate, pathAngleX and pathAngleY do _not_ depend on each other, their effects act additive.]"
		},{
			"id":"org.openxtalk.hh.svgtext-10",
			"name":"builtinimg",
			"display name":"builtInImg",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the builtInImg of <widget> to <pString>"
			],
			"display syntax":[
				"set the builtInImg of <i>widget</i> to <i>pString</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Chooses one of the widget-built-in images as the available pattern",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"is the name of a 'widget-built-in' image to use for the pattern."
			}],
			"examples":[{
				"script":"set the builtInImg of widget \"SVG_Text\" to \"water.jpg\""
			}],
			"description":"Sets the name of the image to use as a pattern to one of the widget-built-in images. This is typically set from the popup menu in the property inspector.\nAvailable choices are currently buchenberg.jpg, burg.jpg, water.jpg, gs01.png, gs02.png, gs03.png, gs04.png, gs05.png, gs06.png, gs07.png, gs08.png, gs09.png, gs10.png, gs11.png, gs12.png, patt01.jpg and patt02.jpg."
		},{
			"id":"org.openxtalk.hh.svgtext-11",
			"name":"filename",
			"display name":"filename",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the filename of <widget> to <pPath>"
			],
			"display syntax":[
				"set the filename of <i>widget</i> to <i>pPath</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Sets any LC-readable image by its filePath as the available pattern.",
			"parameters":[{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"is a full valid filePath to an image to use for the pattern."
			}],
			"examples":[{
				"script":"set the filename of widget \"SVG_Text\" to \"/Users/admin/pictures/water.jpg\""
			}],
			"description":"Sets the filePath of the image to use as the pattern. This is typically set from the popup menu in the property inspector (and it's 'answer file'-dialog button right of the filename's text box)."
		},{
			"id":"org.openxtalk.hh.svgtext-12",
			"name":"showhilite",
			"display name":"showHilite",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the showHilite of <widget> to <pTrueOrFalse>\nget the showHilite of <widget>"
			],
			"display syntax":[
				"set the showHilite of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"showHilite determines whether the svgText \"hilights\" on mouseDown (using the pushColor of the widget).",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the showHilite of widget \"SVG_Text\" to not \\\n    the showHilite of widget \"SVG_Text\""
			}],
			"description":"Use the showHilite property to determine whether the widget's color indicates a mouseDown (a 'push') on the svgText's bounding box."
		},{
			"id":"org.openxtalk.hh.svgtext-13",
			"name":"stroke",
			"display name":"stroke",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the stroke of <widget> to <pTrueOrFalse>\nget the stroke of <widget>"
			],
			"display syntax":[
				"set the stroke of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"If set to true property stroke causes the svgText's path to be stroked (outlined) with the current strokeColor.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the stroke of widget \"SVG_Text\" to not \\\n    the stroke of widget \"SVG_Text\""
			}],
			"description":"Use the stroke property to fill the svgText's path. Setting the stroke of the widget (for the svgText path) to false sets the fill of the widget (for the svgText path) to true."
		},{
			"id":"org.openxtalk.hh.svgtext-14",
			"name":"pathrotatey",
			"display name":"pathRotateY",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the pathRotateY of <widget> to <pTrueOrFalse>\nget the pathRotateY of widget \"SVG_Text\""
			],
			"display syntax":[
				"set the pathRotateY of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"The pathRotateY causes the pathScaleY to rotate  the widget's path in y-direction (around its x-axis).",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the pathRotateY of widget \"SVG_Text\" to not \\\n    the pathRotateY of widget \"SVG_Text\""
			}],
			"description":"Use property pathRotateY to set the action range of pathScaleY from -1 (=flip vertical) to +1 (= unscaled y-coordinate). Use then pathScaleY for rotating.\n** It needs property resizeProportional set to true for working as 'expected'. **"
		},{
			"id":"org.openxtalk.hh.svgtext-15",
			"name":"pathrotatex",
			"display name":"pathRotateX",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the pathRotateX of <widget> to <pTrueOrFalse>\nget the pathRotateX of widget \"SVG_Text\""
			],
			"display syntax":[
				"set the pathRotateX of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"The pathRotateX causes the pathScaleX to rotate  the widget's path in x-direction (around its y-axis).",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the pathRotateX of widget \"SVG_Text\" to not \\\n    the pathRotateX of widget \"SVG_Text\""
			}],
			"description":"Use property pathRotateX to set the action range of pathScaleX from -1 (=flip vertical) to +1 (= unscaled x-coordinate). Use then pathScaleX for rotating.\n** It needs property resizeProportional set to true for working as 'expected'. **"
		},{
			"id":"org.openxtalk.hh.svgtext-16",
			"name":"pushcolor",
			"display name":"pushColor",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the pushColor of <widget> to <pColor>\nget the pushColor of <widget>"
			],
			"display syntax":[
				"set the pushColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Sets or gets the color of the chars fill and outline used while pushed (\"hilight color\").",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The push color of the text, in RGB or RGBA format"
			}],
			"examples":[{
				"script":"set the pushColor of widget \"SVG_Text\" to \"255,127,0\"\n-- returns a _four-item_ string\nget the pushColor of widget \"SVG_Text\" -- \"255,127,0,255\"\nset the pushColor of widget \"SVG_Text\" to \"255,127,0,127\""
			}],
			"description":"Use the pushColor property to set the color of the chars fill when pushed (\"hilight\").\nThe color is in the form of a 3 or 4 item string, the 4th optional item being the alpha value, all integers between 0 and 255.\n[You may also use numbers containing a decimal point between 0.0 and 1.0, for example \"0.2,0.1,0.2\".\n.: The \"get\" always returns _four_ items in the integer form (each in range 0-255). :."
		},{
			"id":"org.openxtalk.hh.svgtext-17",
			"name":"pathtranslatex",
			"display name":"pathTranslateX",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the pathTranslateX of <widget> to <pTranslate>\nget the pathTranslateX of <widget>"
			],
			"display syntax":[
				"set the pathTranslateX of <i>widget</i> to <i>pTranslate</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"The pathTranslateX amount is _added_ to each x-coordinate of the svgText (= path).\n** The canvas bounds are _NOT_ adjusted after translating. **",
			"parameters":[{
				"name":"pTranslate",
				"type":"",
				"refparam":"false",
				"description":"The pathTranslateX of the svgText in current units ('pixels')\nis any number. [Negative values shift left, positive values shift right.]"
			}],
			"examples":[{
				"script":"-- don't translate\nset the pathTranslateX of widget \"SVG_Text\" to   0\n-- shift 90.5 right\nset the pathTranslateX of widget \"SVG_Text\" to  90.5\n-- shift 42.2 left\nset the pathTranslateX of widget \"SVG_Text\" to -42.2"
			}],
			"description":"Use the pathTranslateX property to shift the svgText in x-direction\n(_after rotation, scaling and skewing_)."
		},{
			"id":"org.openxtalk.hh.svgtext-18",
			"name":"strokecolor",
			"display name":"strokeColor",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the strokeColor of <widget> to <pColor>\nget the strokeColor of <widget>"
			],
			"display syntax":[
				"set the strokeColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Sets or gets the color of the path outline (stroke).",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The stroke (outline) color of the text, in RGB or RGBA format"
			}],
			"examples":[{
				"script":"set the strokeColor of widget \"SVG_Text\" to \"255,127,0\"\n-- returns a _four-item_ string\nget the strokeColor of widget \"SVG_Text\" -- \"255,127,0,255\"\nset the strokeColor of widget \"SVG_Text\" to \"255,127,0,127\""
			}],
			"description":"Use the strokeColor property to set the color of the path outline.\nThe color is in the form of a 3 or 4 item string, the 4th optional item being the alpha value, all integers between 0 and 255.\n[You may also use numbers containing a decimal point between 0.0 and 1.0, for example \"0.2,0.1,0.2\".\n.: The \"get\" always returns _four_ items in the integer form (each in range 0-255). :."
		},{
			"id":"org.openxtalk.hh.svgtext-19",
			"name":"pathtranslatey",
			"display name":"pathTranslateY",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the pathTranslateY of <widget> to <pTranslate>\nget the pathTranslateY of <widget> -- returns a number"
			],
			"display syntax":[
				"set the pathTranslateY of <i>widget</i> to <i>pTranslate</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"The pathTranslateY amount is _added_ to each y-coordinate of the svgText (= path).\n** The canvas bounds are _NOT_ adjusted after translating. **",
			"parameters":[{
				"name":"pTranslate",
				"type":"",
				"refparam":"false",
				"description":"The pathTranslateY of the svgText in current units ('pixels')\nis any number. [Negative values shift up, positive values shift down.]"
			}],
			"examples":[{
				"script":"-- don't translate\nset the pathTranslateY of widget \"SVG_Text\" to   0\n-- shift 90.5 down\nset the pathTranslateY of widget \"SVG_Text\" to  90.5\n-- shift 42.2 up\nset the pathTranslateY of widget \"SVG_Text\" to -42.2"
			}],
			"description":"Use the pathTranslateY property to shift the svgText in x-direction\n(_after rotation, scaling and skewing_)."
		},{
			"id":"org.openxtalk.hh.svgtext-20",
			"name":"svgtext",
			"display name":"svgText",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the svgText of <widget> to <pString>\nget the svgText of <widget>"
			],
			"display syntax":[
				"set the svgText of <i>widget</i> to <i>pString</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Sets the chars of the text display.\n[\"the text of widget\" is a synonym of \"the svgText of widget\"]",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The chars of the widget's text display, containing no newline or tab."
			}],
			"examples":[{
				"script":"set the svgText of widget \"SVG_Text\" to \"Thistle\""
			}],
			"description":"Use the svgText property to set the (unicode-)string to display.\nUnavailable chars are converted to \"_\" (underscore)."
		},{
			"id":"org.openxtalk.hh.svgtext-21",
			"name":"usepatternstroke",
			"display name":"usePatternStroke",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the usePatternStroke of <widget> to <pTrueOrFalse>\nget the usePatternStroke of <widget>"
			],
			"display syntax":[
				"set the usePatternStroke of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"If set to true property usePatternStroke causes the svgText's Stroke (outline) to be filled with the current pattern image.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the usePatternStroke of widget \"SVG_Text\" to not \\\n    the usePatternStroke of widget \"SVG_Text\""
			}],
			"description":"Use the usePatternStroke property to determine the stroke (outline) of the svgText's path. If true then a pattern paint is used for stroking, else the strokeColor."
		},{
			"id":"org.openxtalk.hh.svgtext-22",
			"name":"strokewidth",
			"display name":"strokeWidth",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the strokeWidth of <widget> to <pWidth>\nget the strokeWidth of <widget>"
			],
			"display syntax":[
				"set the strokeWidth of <i>widget</i> to <i>pWidth</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Set or get the strokeWidth property for stroking (outlining) the svgText's path.\nThe bounds of the path are accordingly adjusted.",
			"parameters":[{
				"name":"pWidth",
				"type":"",
				"refparam":"false",
				"description":"A positive number"
			}],
			"examples":[{
				"script":"set the strokeWidth of widget \"SVG_Text\" to 4.2"
			}],
			"description":"Use the strokeWidth property to determine the with of a stroked path. It's not poss\nto set the strokeWidth to a value smaller than 1. Set the stroke property to false to disable to have no stroke/outline."
		},{
			"id":"org.openxtalk.hh.svgtext-23",
			"name":"fillcolor",
			"display name":"fillColor",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the fillColor of <widget> to <pColor>\nget the fillColor of <widget>"
			],
			"display syntax":[
				"set the fillColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Sets or gets the color of the chars fill.",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The color of the text, in RGB or RGBA format"
			}],
			"examples":[{
				"script":"set the fillColor of widget \"SVG_Text\" to \"255,127,0\"\n-- returns a _four-item_ string\nget the fillColor of widget \"SVG_Text\" -- \"255,127,0,255\"\nset the fillColor of widget \"SVG_Text\" to \"255,127,0,127\""
			}],
			"description":"Use the fillColor property to set the color of the chars fill.\nThe color is in the form of a 3 or 4 item string, the 4th optional item being the alpha value, all integers between 0 and 255.\n[You may also use numbers containing a decimal point between 0.0 and 1.0, for example \"0.2,0.1,0.2\".\n.: The \"get\" always returns _four_ items in the integer form (each in range 0-255). :."
		},{
			"id":"org.openxtalk.hh.svgtext-24",
			"name":"scalepattern",
			"display name":"scalePattern",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the scalePattern of <widget> to <pTrueOrFalse>\nget the scalePattern of <widget>"
			],
			"display syntax":[
				"set the scalePattern of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"If set to true property scalePattern causes the the current pattern image to be scaled to fit.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the scalePattern of widget \"SVG_Text\" to not \\\n    the scalePattern of widget \"SVG_Text\""
			}],
			"description":"Use the scalePattern property to determine the dimensions of the pattern. If true then a pattern paint is scaled to fit. Else the unscaled pattern is repeated (if small enough)."
		},{
			"id":"org.openxtalk.hh.svgtext-25",
			"name":"pathscalex",
			"display name":"pathScaleX",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the pathScaleX of <widget> to <pScale>\nget the pathScaleX of <widget>"
			],
			"display syntax":[
				"set the pathScaleX of <i>widget</i> to <i>pScale</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Each x-coordinate of the svgText (= path) is _multiplied_ by the pathScaleX amount.\n** The canvas bounds are adjusted after scaling. **\nThus the effect is 'limited' if the resizeProportional property is set to true!",
			"parameters":[{
				"name":"pScale",
				"type":"",
				"refparam":"false",
				"description":"The pathScaleX of the svgText is any number.\n[Negative values scale the _horizontally flipped_ svgText.]"
			}],
			"examples":[{
				"script":"-- don't scale\nset the pathScaleX of widget \"SVG_Text\" to 1\n-- compress horizontally\nset the pathScaleX of widget \"SVG_Text\" to 0.62\n-- stretch horizontally\nset the pathScaleX of widget \"SVG_Text\" to 1.62\n-- flip horizontally\nset the pathScaleX of widget \"SVG_Text\" to -1.0"
			}],
			"description":"Use the pathScaleX property to scale the svgText in x-direction (_before rotation_)."
		},{
			"id":"org.openxtalk.hh.svgtext-26",
			"name":"inputpathinstructions",
			"display name":"inputPathInstructions",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the inputPathInstructions of <widget> to <pTrueOrFalse>\nget the inputPathInstructions of widget \"SVG_Text\""
			],
			"display syntax":[
				"set the inputPathInstructions of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Property inputPathInstructions determines the 'input mode' which is svgText or svgTextPath.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the inputPathInstructions of widget \"SVG_Text\" to not \\\n    the inputPathInstructions of widget \"SVG_Text\""
			}],
			"description":"Use the inputPathInstructions property to determine the 'input mode'. If set to true then the svgTextPath is used, which may be edited or copied from widget \"SVG Icon\" is used, Else (= default) the svgText is used as input and translated to a svgTextPath."
		},{
			"id":"org.openxtalk.hh.svgtext-27",
			"name":"pathangley",
			"display name":"pathAngleY",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the pathAngleY of <widget> to <pAngle>\nget the pathAngleY of <widget>"
			],
			"display syntax":[
				"set the pathAngleY of <i>widget</i> to <i>pAngle</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"The angle of Y-rotation (Y-skew) of the svgText (= path).\n** The canvas bounds are adjusted after skewing. **",
			"parameters":[{
				"name":"pAngle",
				"type":"",
				"refparam":"false",
				"description":"The angle of Y-rotation (Y-skew) in degrees\nis any integer, negative or positive.\n[<pAngle> is equivalent to 360 + <pAngle>]"
			}],
			"examples":[{
				"script":"-- Y-rotate 30 degress cw\nset the pathAngleY of widget \"SVG_Text\" to  30\n-- Y-rotate 15 degress ccw\nset the pathAngleY of widget \"SVG_Text\" to -15"
			}],
			"description":"Use the pathAngleY property to Y-rotate (= Y-shear = Y-skew) the svgText <pAngle> degrees clockwise (cw).\nYou may also give negative angles which Y-rotate their absolute value counterclockwise (ccw)\nFor example -15 cw is equivalent to 360-15 cw is equivalent to 15 ccw.\n[Note that pathRotate, pathAngleX and pathAngleY do _not_ depend on each other, their effects act additive.]"
		},{
			"id":"org.openxtalk.hh.svgtext-28",
			"name":"pathanglex",
			"display name":"pathAngleX",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the pathAngleX of <widget> to <pAngle>\nget the pathAngleX of <widget>"
			],
			"display syntax":[
				"set the pathAngleX of <i>widget</i> to <i>pAngle</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"The angle of X-rotation (X-skew) of the svgText (= path).\n** The canvas bounds are adjusted after skewing. **",
			"parameters":[{
				"name":"pAngle",
				"type":"",
				"refparam":"false",
				"description":"The angle of X-rotation (X-skew) in degrees\nis any integer, negative or positive.\n[<pAngle> is equivalent to 360 + <pAngle>]"
			}],
			"examples":[{
				"script":"-- X-rotate 30 degress cw\nset the pathAngleX of widget \"SVG_Text\" to  30\n-- X-rotate 15 degress ccw\nset the pathAngleX of widget \"SVG_Text\" to -15"
			}],
			"description":"Use the pathAngleX property to X-rotate (= X-shear = X-skew) the svgText <pAngle> degrees clockwise (cw).\nYou may also give negative angles which X-rotate their absolute value counterclockwise (ccw)\nFor example -15 cw is equivalent to 360-15 cw is equivalent to 15 ccw.\n[Note that pathRotate, pathAngleX and pathAngleY do _not_ depend on each other, their effects act additive.]"
		},{
			"id":"org.openxtalk.hh.svgtext-29",
			"name":"resizeproportional",
			"display name":"resizeProportional",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the resizeProportional of <widget> to <pTrueOrFalse>\nget the resizeProportional of widget \"SVG_Text\""
			],
			"display syntax":[
				"set the resizeProportional of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Property resizeProportional determines the 'mode of scaling' for resizing the widget.\n** The canvas bounds are adjusted to fit the smaller of width and height. **",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the resizeProportional of widget \"SVG_Text\" to not \\\n    the resizeProportional of widget \"SVG_Text\""
			}],
			"description":"Use the resizeProportional to scale proportionally both in x- and y-direction."
		},{
			"id":"org.openxtalk.hh.svgtext-30",
			"name":"pathscaley",
			"display name":"pathScaleY",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the pathScaleY of <widget> to <pScale>\nget the pathScaleY of <widget>"
			],
			"display syntax":[
				"set the pathScaleY of <i>widget</i> to <i>pScale</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Each y-coordinate of the svgText (= path) is _multiplied_ by the pathScaleY amount.\n** The canvas bounds are adjusted after scaling. **\nThus the effect is 'limited' if the resizeProportional property is set to true!",
			"parameters":[{
				"name":"pScale",
				"type":"",
				"refparam":"false",
				"description":"The pathScaleY of the svgText is any number.\n[Negative values scale the _vertically flipped_ svgText.]"
			}],
			"examples":[{
				"script":" -- don't scale\nset the pathScaleY of widget \"SVG_Text\" to 1\n-- compress vertically\nset the pathScaleY of widget \"SVG_Text\" to 0.62\n-- stretch vertically\nset the pathScaleY of widget \"SVG_Text\" to 1.62\n-- flip vertically\nset the pathScaleY of widget \"SVG_Text\" to -1.0"
			}],
			"description":"Use the pathScaleY property to scale the svgText in y-direction (_before rotation_)."
		},{
			"id":"org.openxtalk.hh.svgtext-31",
			"name":"resetallsliders",
			"display name":"resetAllSliders",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the resetAllSliders of <widget> to true"
			],
			"display syntax":[
				"set the resetAllSliders of <i>widget</i> to true"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"parameters":[{
				"name":"true",
				"type":"",
				"refparam":"false",
				"description":"No other choice."
			}],
			"examples":[{
				"script":"set the resetAllSliders of widget \"SVG_Text\" to true"
			}],
			"description":"The resetAllSliders property can only be set to true. It is set to false immediately after doing the \"true\"-Action: All angles become zero, all scales become 1, the strokeWidth becomes 2 and the size of the widget is to the default \"250,250\"."
		},{
			"id":"org.openxtalk.hh.svgtext-32",
			"name":"usepatternfill",
			"display name":"usePatternFill",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the usePatternFill of <widget> to <pTrueOrFalse>\nget the usePatternFill of <widget>"
			],
			"display syntax":[
				"set the usePatternFill of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"If set to true property usePatternFill causes the svgText's path to be filled with the current pattern image.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the usePatternFill of widget \"SVG_Text\" to not \\\n    the usePatternFill of widget \"SVG_Text\""
			}],
			"description":"Use the usePatternFill property to determine the fill of the svgText's path. If true then a pattern paint is used for fill, else the fillColor."
		},{
			"id":"org.openxtalk.hh.svgtext-33",
			"name":"useshadow",
			"display name":"useShadow",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the useShadow of <widget> to <pTrueOrFalse>\nget the useShadow of <widget>"
			],
			"display syntax":[
				"set the useShadow of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"If set to true useShadow applies a (fixed, but scaled) dropShadow effect to the widget.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the useShadow of widget \"SVG_Text\" to not \\\n    the useShadow of widget \"SVG_Text\""
			}],
			"description":"Use the useShadow property to add adropShadow effect to the svgText's path. (No property of the effect is currently adjustable)."
		},{
			"id":"org.openxtalk.hh.svgtext-34",
			"name":"svgtextpath",
			"display name":"svgTextPath",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"get the svgTextPath of <widget>\nset the svgTextPath of <widget> to <pString>"
			],
			"display syntax":[
				"get the svgTextPath of <i>widget</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"Gets or sets the instructions (=path) of the widget's display.\nSet property inputPathInstructions to true in order to use the svgTextPath!",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"is a string of svgPath instructions"
			}],
			"examples":[{
				"script":"get the svgTextPath of widget \"SVG_Text\"\nset the svgTextPath of <widget> to \"M1152 1088Q1152 1114 1133 1133 1114 1152 1088 1152L448 1152Q422 1152 403 1133 384 1114 384 1088 384 1062 403 1043 422 1024 448 1024L1088 1024Q1114 1024 1133 1043 1152 1062 1152 1088ZM640 640Q640 693 602.5 730.5 565 768 512 768 459 768 421.5 730.5 384 693 384 640 384 587 421.5 549.5 459 512 512 512 565 512 602.5 549.5 640 587 640 640ZM1152 640Q1152 693 1114.5 730.5 1077 768 1024 768 971 768 933.5 730.5 896 693 896 640 896 587 933.5 549.5 971 512 1024 512 1077 512 1114.5 549.5 1152 587 1152 640ZM1408 896Q1408 766 1357 647.5 1306 529 1220.5 443.5 1135 358 1016.5 307 898 256 768 256 638 256 519.5 307 401 358 315.5 443.5 230 529 179 647.5 128 766 128 896 128 1026 179 1144.5 230 1263 315.5 1348.5 401 1434 519.5 1485 638 1536 768 1536 898 1536 1016.5 1485 1135 1434 1220.5 1348.5 1306 1263 1357 1144.5 1408 1026 1408 896ZM1536 896Q1536 1105 1433 1281.5 1330 1458 1153.5 1561 977 1664 768 1664 559 1664 382.5 1561 206 1458 103 1281.5 0 1105 0 896 0 687 103 510.5 206 334 382.5 231 559 128 768 128 977 128 1153.5 231 1330 334 1433 510.5 1536 687 1536 896Z\""
			}],
			"description":"Use the svgTextPath property to get the path of the current display. You may then use it for example as a path with the SVG-Icon widget. Use the inputPathInstructions check to use the path instructions as input."
		},{
			"id":"org.openxtalk.hh.svgtext-35",
			"name":"fill",
			"display name":"fill",
			"library":"org.openxtalk.hh.svgtext",
			"type":"property",
			"syntax":[
				"set the fill of <widget> to <pTrueOrFalse>\nget the fill of <widget>"
			],
			"display syntax":[
				"set the fill of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hh.svgtext"],
			"summary":"If set to true property fill causes the svgText's path to be filled with the current fillColor.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the fill of widget \"SVG_Text\" to not \\\n    the fill of widget \"SVG_Text\""
			}],
			"description":"Use the fill property to fill the svgText's path. Setting the fill of the widget (for the svgText path) to false sets the stroke of the widget (for the svgText path) to true.\n"
		}