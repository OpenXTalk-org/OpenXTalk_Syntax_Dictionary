{
			"id":"com.livecode.widget.spinner-1",
			"name":"com.livecode.widget.spinner",
			"display name":"Spinner",
			"library":"com.livecode.widget.spinner",
			"type":"widget",
			"display syntax":[
				"Spinner"
			],
			"associations":["com.livecode.widget.spinner"],
			"summary":"This widget is a spinner or activity indicator. Spinners provide visual\nfeedback to users use when performing an activity for an unknown\nduration such as processing a large amount of data or presenting a\ncomplex user interface.",
			"description":"This widget is a spinner or activity indicator. Spinners provide visual\nfeedback to users use when performing an activity for an unknown\nduration such as processing a large amount of data or presenting a\ncomplex user interface."
		},{
			"id":"com.livecode.widget.spinner-2",
			"name":"markercount",
			"display name":"markerCount",
			"library":"com.livecode.widget.spinner",
			"type":"property",
			"syntax":[
				"set the markerCount of <widget> to <markers>\nget the markerCount of <widget>"
			],
			"display syntax":[
				"set the markerCount of <i>widget</i> to <i>markers</i>"
			],
			"associations":["com.livecode.widget.spinner"],
			"summary":"The number of markers to display in the spinner",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The number of markers to display around the circle"
			}],
			"description":"The markerCount is an integer greater than 4. The default value is 8."
		},{
			"id":"com.livecode.widget.spinner-3",
			"name":"scalemarkers",
			"display name":"scaleMarkers",
			"library":"com.livecode.widget.spinner",
			"type":"property",
			"syntax":[
				"set the scaleMarkers of <widget> to { true | false }\nget the scaleMarkers of <widget>"
			],
			"display syntax":[
				"set the scaleMarkers of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.spinner"],
			"summary":"Whether to scale the markers to or maintain a constant size",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if markers should be scaled; false otherwise"
			}],
			"description":"If true, the markers will be scaled as in addition to changing\ntransparency. The default value is true.\n"
		}