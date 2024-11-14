{
			"id":"com.livecode.widget.native.android.button-1",
			"name":"com.livecode.widget.native.android.button",
			"display name":"Android Native Button",
			"library":"com.livecode.widget.native.android.button",
			"type":"widget",
			"display syntax":[
				"Android Native Button"
			],
			"associations":["com.livecode.widget.native.android.button"],
			"summary":"This widget is a native button on Android.",
			"OS":["android"],
			"platforms":["mobile"],
			"description":"This widget is a native button on Android."
		},{
			"id":"com.livecode.widget.native.android.button-2",
			"name":"enabled",
			"display name":"enabled",
			"library":"com.livecode.widget.native.android.button",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.button"],
			"summary":"Whether the button is active and responds to user action",
			"OS":["android"],
			"platforms":["mobile"],
			"description":"Use the <enabled> property to enable or disable the native button. When\ndisabled, the button has a greyed out appearance and does not accept \nclicks or touches."
		},{
			"id":"com.livecode.widget.native.android.button-3",
			"name":"labelcolor",
			"display name":"labelColor",
			"library":"com.livecode.widget.native.android.button",
			"type":"property",
			"syntax":[
				"set the labelColor of <widget> to <pLabel>\nget the labelColor of <widget>"
			],
			"display syntax":[
				"set the labelColor of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.native.android.button"],
			"summary":"The color of the text of the button label",
			"OS":["android"],
			"platforms":["mobile"],
			"examples":[{
				"script":"set the labelColor of widget \"Android Button\" to \"255,0,0,128\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma delimited string representing a color in RGB / RGBA format"
			}],
			"description":"Use the <labeColor> property to change the color of the label text of \nthe button."
		},{
			"id":"com.livecode.widget.native.android.button-4",
			"name":"label",
			"display name":"label",
			"library":"com.livecode.widget.native.android.button",
			"type":"property",
			"syntax":[
				"set the label of <widget> to <pLabel>\nget the label of <widget>"
			],
			"display syntax":[
				"set the label of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.native.android.button"],
			"summary":"The label displayed by the button.",
			"OS":["android"],
			"platforms":["mobile"],
			"examples":[{
				"script":"set the label of widget \"Android Button\" to \"Click me!\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The string to use as the button label"
			}],
			"description":"The <label> property is the label displayed by the button.\n"
		}