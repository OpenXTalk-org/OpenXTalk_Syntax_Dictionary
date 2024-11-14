{
			"id":"com.livecode.widget.colorswatch-1",
			"name":"com.livecode.widget.colorswatch",
			"display name":"Color Swatch",
			"library":"com.livecode.widget.colorswatch",
			"type":"widget",
			"display syntax":[
				"Color Swatch"
			],
			"associations":["com.livecode.widget.colorswatch"],
			"summary":"This widget displays a color with optional alpha channel.",
			"description":"This widget displays a color with optional alpha channel."
		},{
			"id":"com.livecode.widget.colorswatch-2",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"com.livecode.widget.colorswatch",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["com.livecode.widget.colorswatch"],
			"summary":"Sent when the color swatch is clicked",
			"description":"Sent when the color swatch is clicked"
		},{
			"id":"com.livecode.widget.colorswatch-3",
			"name":"swatchcolor",
			"display name":"swatchColor",
			"library":"com.livecode.widget.colorswatch",
			"type":"property",
			"syntax":[
				"set the swatchColor of <widget> to <pColor>\nget the swatchColor of <widget>"
			],
			"display syntax":[
				"set the swatchColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.colorswatch"],
			"summary":"Determines the color displayed by the swatch.",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The color of the swatch in RGB or RGBA format, or empty."
			}],
			"examples":[{
				"script":"set the swatchColor of widget \"Color Swatch\" to empty"
			},{
				"script":"    on copySwatchColorToGraphic pSwatchName, pGraphicName\n        local tColorWithAlpha\n        put the swatchColor of widget pSwatchName into tColorWithAlpha\n\n        local tColor, tBlendLevel\n        put item 1 to 3 of tColorWithAlpha into tColor\n        put (255 - item 4 of tColorWithAlpha) / 2.55 into tBlendLevel\n\n        set the backcolor of graphic pGraphicName to tColor\n        set the blendLevel of graphic pGraphicName to tBlendLevel\n    end copySwatchColorToGraphic"
			}],
			"description":"Use the iconColor property to set the color of the widget icon. The color is\nin the form of a 3 or 4 item string, the 4th optional item being the alpha value,\nall between 0 and 255.\n\n>*Note:* The color returned by the <swatchColor> property, if not empty,\nalways includes an alpha value which is 255 by default.\n"
		}