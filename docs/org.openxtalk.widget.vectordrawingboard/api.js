{
			"id":"org.openxtalk.widget.vectordrawingboard-1",
			"name":"org.openxtalk.widget.vectordrawingboard",
			"display name":"VectorDrawWidget",
			"library":"org.openxtalk.widget.vectordrawingboard",
			"type":"widget",
			"display syntax":[
				"VectorDrawWidget"
			],
			"associations":["org.openxtalk.widget.vectordrawingboard"],
			"summary":"A widget that allows for basic vector path drawing",
			"description":"A widget that allows for basic vector path drawing"
		},{
			"id":"org.openxtalk.widget.vectordrawingboard-2",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"org.openxtalk.widget.vectordrawingboard",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["org.openxtalk.widget.vectordrawingboard"],
			"summary":"Sent when the tile is clicked",
			"description":"Sent when the tile is clicked"
		},{
			"id":"org.openxtalk.widget.vectordrawingboard-3",
			"name":"mouseenter",
			"display name":"mouseEnter",
			"library":"org.openxtalk.widget.vectordrawingboard",
			"type":"message",
			"syntax":[
				"mouseEnter"
			],
			"display syntax":[
				"mouseEnter"
			],
			"associations":["org.openxtalk.widget.vectordrawingboard"],
			"summary":"Sent when the mouse enters the tile",
			"description":"Sent when the mouse enters the tile"
		},{
			"id":"org.openxtalk.widget.vectordrawingboard-4",
			"name":"mouseleave",
			"display name":"mouseLeave",
			"library":"org.openxtalk.widget.vectordrawingboard",
			"type":"messages",
			"syntax":[
				"mouseLeave"
			],
			"display syntax":[
				"mouseLeave"
			],
			"associations":["org.openxtalk.widget.vectordrawingboard"],
			"summary":"Sent when the mouse leaves the tile",
			"description":"Sent when the mouse leaves the tile"
		},{
			"id":"org.openxtalk.widget.vectordrawingboard-5",
			"name":"foregroundcolor",
			"display name":"foregroundColor",
			"library":"org.openxtalk.widget.vectordrawingboard",
			"type":"property",
			"display syntax":[
				"foregroundColor"
			],
			"associations":["org.openxtalk.widget.vectordrawingboard"]
		},{
			"id":"org.openxtalk.widget.vectordrawingboard-6",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"org.openxtalk.widget.vectordrawingboard",
			"type":"property",
			"display syntax":[
				"borderColor"
			],
			"associations":["org.openxtalk.widget.vectordrawingboard"]
		},{
			"id":"org.openxtalk.widget.vectordrawingboard-7",
			"name":"linesize",
			"display name":"lineSize",
			"library":"org.openxtalk.widget.vectordrawingboard",
			"type":"property",
			"syntax":[
				"set the lineSize of <widget> to <pLineWidth>\nget the lineSize of <widget>"
			],
			"display syntax":[
				"set the lineSize of <i>widget</i> to <i>pLineWidth</i>"
			],
			"associations":["org.openxtalk.widget.vectordrawingboard"],
			"summary":"Set or get the line thisckness for drawing strokes.",
			"description":"Use the <lineSize> property to set or get the line thisckness for drawing strokes."
		},{
			"id":"org.openxtalk.widget.vectordrawingboard-8",
			"name":"backingfillcolor",
			"display name":"backingFillColor",
			"library":"org.openxtalk.widget.vectordrawingboard",
			"type":"property",
			"syntax":[
				"set the backingFillColor of <widget> to <pColor>\nget the backingFillColor of <widget>"
			],
			"display syntax":[
				"set the backingFillColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["org.openxtalk.widget.vectordrawingboard"],
			"summary":"Determines the color of the bounding box of the widget.",
			"description":"Use the <backingFillColor> property to set the color of the bounding box of the widget."
		},{
			"id":"org.openxtalk.widget.vectordrawingboard-9",
			"name":"opaque",
			"display name":"opaque",
			"library":"org.openxtalk.widget.vectordrawingboard",
			"type":"property",
			"syntax":[
				"set the opaque of <widget> to {true|false}\nget the opaque of <widget>"
			],
			"display syntax":[
				"set the opaque of <i>widget</i> to {true|false}"
			],
			"associations":["org.openxtalk.widget.vectordrawingboard"],
			"summary":"`true` if the SVG path is filled; `false` otherwise",
			"description":"Use the `opaque` property to test or control whether the SVG path is\ndisplayed as filled or not.\n"
		}