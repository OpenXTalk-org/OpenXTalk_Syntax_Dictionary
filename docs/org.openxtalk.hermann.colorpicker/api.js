{
			"id":"org.openxtalk.hermann.colorpicker-1",
			"name":"org.openxtalk.hermann.colorpicker",
			"display name":"hhColor",
			"library":"org.openxtalk.hermann.colorpicker",
			"type":"widget",
			"display syntax":[
				"hhColor"
			],
			"associations":["org.openxtalk.hermann.colorpicker"],
			"summary":"Color picker v1.0.1 [-hh fecit, Oct 2018]\nThis widget displays a modeless color dialog for selecting a RGBA color.\nThese are four 0-255 integer items R,G,B,A where A may be used in LCS as blendLevel.\nYou may use the widget as popup (using \"it\") or as 'ordinary' widget (using \"colorChosen\")\nSee the \"typical scripts\" of the widget in contents section of the property inspector.\nClick  _and hold down_  the mouse while moving for picking a color of any screen pixel.\nIf not popped up grab the widget by its border.",
			"description":"Color picker v1.0.1 [-hh fecit, Oct 2018]\nThis widget displays a modeless color dialog for selecting a RGBA color.\nThese are four 0-255 integer items R,G,B,A where A may be used in LCS as blendLevel.\nYou may use the widget as popup (using \"it\") or as 'ordinary' widget (using \"colorChosen\")\nSee the \"typical scripts\" of the widget in contents section of the property inspector.\nClick  _and hold down_  the mouse while moving for picking a color of any screen pixel.\nIf not popped up grab the widget by its border."
		},{
			"id":"org.openxtalk.hermann.colorpicker-2",
			"name":"typicalscript",
			"display name":"typicalScript",
			"library":"org.openxtalk.hermann.colorpicker",
			"type":"property",
			"syntax":[
				"get the typicalScript of <widget>"
			],
			"display syntax":[
				"get the typicalScript of <i>widget</i>"
			],
			"associations":["org.openxtalk.hermann.colorpicker"],
			"examples":[{
				"script":"set the script of graphic 1 to the typicalScript of widget \"hhColorPicker\"."
			}],
			"description":"Make a rectangle graphic of size 16x16 with the typical script.\nThis may serve as color swatch option (use the backcolor and the blendlevel of the graphic for other objects)."
		},{
			"id":"org.openxtalk.hermann.colorpicker-3",
			"name":"widgetcolor",
			"display name":"widgetColor",
			"library":"org.openxtalk.hermann.colorpicker",
			"type":"property",
			"syntax":[
				"set the widgetColor of <widget> to <pColor>\nget the widgetColor of <widget>"
			],
			"display syntax":[
				"set the widgetColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["org.openxtalk.hermann.colorpicker"],
			"summary":"Sets or gets the RGBA color of the widget.",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"is a RGBA color = 4 integers in range 0-255. When setting the widgetColor at least 3 items (R,G,B) are needed, item 4 may be omitted.\nGetting the widgetColor always returns the 4 values R,G,B,A."
			}],
			"examples":[{
				"script":"set the widgetColor of widget \"hhColorPicker\" to the effective backColor of this card"
			}],
			"description":"Sets or gets the RGBA color of the widget."
		},{
			"id":"org.openxtalk.hermann.colorpicker-4",
			"name":"usemousecolor",
			"display name":"useMouseColor",
			"library":"org.openxtalk.hermann.colorpicker",
			"type":"property",
			"syntax":[
				"set the useMouseColor of <widget> to <pTrueOrFalse>\nget the useMouseColor of <widget>"
			],
			"display syntax":[
				"set the useMouseColor of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["org.openxtalk.hermann.colorpicker"],
			"summary":"Sets or gets the mode for getting a screenPixel. If true then the LCS-mouseColor is used, if false the imageData of a snapshot is used. The colors are up to 1/32 \"off\" and are moreover are only valid if the pixel's transparency is zero.\nFor picking up the color of any screen pixel click the \"pipette\" and hold down the mouse while moving.\n",
			"examples":[{
				"script":"set the useMouseColor of widget \"hhColorPicker\" to not \\\n        the useMouseColor of widget \"hhColorPicker\""
			}],
			"description":"Sets or gets the mode for getting a screenPixel. If true then the LCS-mouseColor is used, if false the imageData of a snapshot is used. The colors are up to 1/32 \"off\" and are moreover are only valid if the pixel's transparency is zero.\nFor picking up the color of any screen pixel click the \"pipette\" and hold down the mouse while moving.\n"
		}