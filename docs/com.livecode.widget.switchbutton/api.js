{
			"id":"com.livecode.widget.switchbutton-1",
			"name":"com.livecode.widget.switchbutton",
			"display name":"Switch Button",
			"library":"com.livecode.widget.switchbutton",
			"type":"widget",
			"display syntax":[
				"Switch Button"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"This widget is a switch button, consisting of two mutually exclusive choices or states.",
			"description":"This widget is a switch button, consisting of two mutually exclusive choices or states."
		},{
			"id":"com.livecode.widget.switchbutton-2",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"com.livecode.widget.switchbutton",
			"type":"message",
			"syntax":[
				"hiliteChanged"
			],
			"display syntax":[
				"hiliteChanged"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Sent when the switch is changed to either the on or off position",
			"examples":[{
				"script":"on hiliteChanged\n\tset the visible of group 1 to the highlight of me\nend hiliteChanged"
			}],
			"description":"Handle the hiliteChanged message in the widget's object script to respond to\nthe user switching the button on or off."
		},{
			"id":"com.livecode.widget.switchbutton-3",
			"name":"backcolor",
			"display name":"backColor",
			"library":"com.livecode.widget.switchbutton",
			"type":"property",
			"syntax":[
				"get the backColor of <widget>",
				"set the backColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the backColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Controls the background color of the switch button",
			"description":"Use the <backColor> property to control the off-position fill color of the\nswitch button."
		},{
			"id":"com.livecode.widget.switchbutton-4",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"com.livecode.widget.switchbutton",
			"type":"property",
			"syntax":[
				"get the hiliteColor of <widget>",
				"set the hiliteColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the hiliteColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Controls the color of the switch button when it is in the on position",
			"description":"Use the <hiliteColor> property to control the on-position fill color of the\nswitch button."
		},{
			"id":"com.livecode.widget.switchbutton-5",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"com.livecode.widget.switchbutton",
			"type":"property",
			"syntax":[
				"get the borderColor of <widget>",
				"set the borderColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the borderColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Controls the color of the switch button when it is in the on position",
			"description":"Use the <borderColor> property to control the on-position fill color of the\nswitch button."
		},{
			"id":"com.livecode.widget.switchbutton-6",
			"name":"theme",
			"display name":"theme",
			"library":"com.livecode.widget.switchbutton",
			"type":"property",
			"syntax":[
				"get the theme of <widget>",
				"set the theme of <widget> to <pWidgetTheme>"
			],
			"display syntax":[
				"get the theme of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Specifies the theme to use when drawing the switch button.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The <theme> of the switch button is a name identifying the\nstyle to use when drawing it."
			}],
			"description":"Use the <theme> property to control the general appearance of the switch\nbutton.  The currently-supported values are \"native\", \"iOS\" and \"Android\".\n\n**Note**: The value of the <theme> property is not saved by the switch button.\nSet the <theme> property to preview the way the switch button will appear when\nused on an Android or iOS device."
		},{
			"id":"com.livecode.widget.switchbutton-7",
			"name":"highlight",
			"display name":"highlight",
			"library":"com.livecode.widget.switchbutton",
			"type":"property",
			"syntax":[
				"get the highlight of <widget>",
				"set the highlight of <widget> to {true | false}"
			],
			"display syntax":[
				"get the highlight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Whether the switch is on or off",
			"value":[{
				"name":"value",
				"type":"",
				"description":"`true` if the switch is in the on position; `false` otherwise."
			}],
			"description":"Use this property to determine whether the switch button displays as on."
		},{
			"id":"com.livecode.widget.switchbutton-8",
			"name":"showborder",
			"display name":"showBorder",
			"library":"com.livecode.widget.switchbutton",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to {true|false}"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"Whether the widget has a border or not.",
			"description":"Use the <showBorder> property to control whether the switch button has a border\naround it or not\n"
		}