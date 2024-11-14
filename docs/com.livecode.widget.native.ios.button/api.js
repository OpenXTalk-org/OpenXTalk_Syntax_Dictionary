{
			"id":"com.livecode.widget.native.ios.button-1",
			"name":"com.livecode.widget.native.ios.button",
			"display name":"iOS Native Button",
			"library":"com.livecode.widget.native.ios.button",
			"type":"widget",
			"display syntax":[
				"iOS Native Button"
			],
			"associations":["com.livecode.widget.native.ios.button"],
			"summary":"This widget is a native push button on iOS.",
			"OS":["ios"],
			"description":"This widget is a native push button on iOS."
		},{
			"id":"com.livecode.widget.native.ios.button-2",
			"name":"enabled",
			"display name":"enabled",
			"library":"com.livecode.widget.native.ios.button",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.ios.button"],
			"summary":"Whether the field is active and responds to user action",
			"OS":["ios"],
			"description":"Use the <enabled> property to enable or disable the native button. When\ndisabled, the button has a greyed out appearance and does not accept \nclicks or touches."
		},{
			"id":"com.livecode.widget.native.ios.button-3",
			"name":"label",
			"display name":"label",
			"library":"com.livecode.widget.native.ios.button",
			"type":"property",
			"syntax":[
				"set the label of <widget> to <pLabel>\nget the label of <widget>"
			],
			"display syntax":[
				"set the label of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.native.ios.button"],
			"summary":"The label displayed by the button.",
			"OS":["ios"],
			"examples":[{
				"script":"set the label of widget \"iOS Button\" to \"Click me!\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The string to use as the button label"
			}],
			"description":"The <label> property is the label displayed by the button.\n"
		}