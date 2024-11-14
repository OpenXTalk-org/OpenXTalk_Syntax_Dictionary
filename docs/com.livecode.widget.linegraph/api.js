{
			"id":"com.livecode.widget.linegraph-1",
			"name":"com.livecode.widget.linegraph",
			"display name":"Line Graph",
			"library":"com.livecode.widget.linegraph",
			"type":"widget",
			"display syntax":[
				"Line Graph"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"A configurable line graph widget.\n\nThe graph has labelled axes and allows multiple lines to be displayed.\n\n- Load comma-delimited data into the graph with the <graphData> property\n- Set the <graphColors> to control the color of each line in the graph\n- Call out a specific point on the graph by setting the\n  <hilitedCoordinates>",
			"description":"A configurable line graph widget.\n\nThe graph has labelled axes and allows multiple lines to be displayed.\n\n- Load comma-delimited data into the graph with the <graphData> property\n- Set the <graphColors> to control the color of each line in the graph\n- Call out a specific point on the graph by setting the\n  <hilitedCoordinates>",
			"references":{
				"property":["graphData","graphColors","hilitedCoordinates"]
			}
		},{
			"id":"com.livecode.widget.linegraph-2",
			"name":"showlines",
			"display name":"showLines",
			"library":"com.livecode.widget.linegraph",
			"type":"property",
			"syntax":[
				"set the showLines of <widget> to { true | false }\nget the showLines of <widget>"
			],
			"display syntax":[
				"set the showLines of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"Whether chart lines are displayed",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if lines should be shown; false otherwise"
			}],
			"description":"If true, the graph widget will draw graph lines on the graph.",
			"references":{
				"property":["markerStyles","markerScale"]
			}
		},{
			"id":"com.livecode.widget.linegraph-3",
			"name":"graphcolors",
			"display name":"graphColors",
			"library":"com.livecode.widget.linegraph",
			"type":"property",
			"syntax":[
				"set the graphColors of <widget> to <pColors>\nget the graphColors of <widget>"
			],
			"display syntax":[
				"set the graphColors of <i>widget</i> to <i>pColors</i>"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"The colors for drawing lines on the graph",
			"examples":[{
				"script":"local tVar\nput \"255,0,155,255\\n155,100,255,255\\n100,255,100,255\" into tVar\nreplace \"\\n\" with return in tVar\nset the graphColors of widget \"My Graph\" to tVar"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A line-delimited list of the colors for each line on the graph"
			}],
			"description":"The <graphColors> are the colors of each line in the graph widget.\n\nEach line of the <graphColors> should be a comma delimited list with\nfour items.  The items are the red, green, blue, and alpha (opacity)\ncomponents of the line color."
		},{
			"id":"com.livecode.widget.linegraph-4",
			"name":"markerscale",
			"display name":"markerScale",
			"library":"com.livecode.widget.linegraph",
			"type":"property",
			"syntax":[
				"set the markerScale of <widget> to <real>\nget the markerScale of <widget>"
			],
			"display syntax":[
				"set the markerScale of <i>widget</i> to <i>real</i>"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"A scale factor to apply to markers",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A scale factor to apply to markers"
			}],
			"description":"The default scale factor is 1 which corresponds to an 8x8 point marker.",
			"references":{
				"property":["markerStyles","showLines"]
			}
		},{
			"id":"com.livecode.widget.linegraph-5",
			"name":"graphxlines",
			"display name":"graphXLines",
			"library":"com.livecode.widget.linegraph",
			"type":"property",
			"syntax":[
				"set the graphXLines of <widget> to { true | false }\nget the graphXLines of <widget>"
			],
			"display syntax":[
				"set the graphXLines of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"Whether horizontal grid lines are displayed",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if grid lines should be shown; false otherwise"
			}],
			"description":"If true, the graph widget will draw horizontal grid lines on the\ngraph.  The number and spacing of the grid lines is determined\nautomatically.",
			"references":{
				"property":["graphYLines"]
			}
		},{
			"id":"com.livecode.widget.linegraph-6",
			"name":"hilitedcoordinates",
			"display name":"hilitedCoordinates",
			"library":"com.livecode.widget.linegraph",
			"type":"property",
			"syntax":[
				"set the hilitedCoordinates of <widget> to { <point> | empty }\nget the hilitedCoordinates of <widget>"
			],
			"display syntax":[
				"set the hilitedCoordinates of <i>widget</i> to { <i>point</i> | empty }"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"The coordinates of a highlighted point on the graph",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The comma-delimited coordinates of a point, or empty."
			}],
			"description":"If the <hilitedCoordinates> of the graph widget is not empty, then the\nwidget will highlight the specified coordinates with a dot and dashed\nhorizontal and vertical lines.\n\n>*Note:* If the x-axis values in the graph data are non-numeric,\n>then the x-value of the point set must match one of those values.",
			"references":{
				"property":["hilitedCoordinatesColor"]
			}
		},{
			"id":"com.livecode.widget.linegraph-7",
			"name":"markerstyles",
			"display name":"markerStyles",
			"library":"com.livecode.widget.linegraph",
			"type":"property",
			"syntax":[
				"set the markerStyles of <widget> to { <string> | empty }\nget the markerStyles of <widget>"
			],
			"display syntax":[
				"set the markerStyles of <i>widget</i> to { <i>string</i> | empty }"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"The marker styles for drawing vertices on the graph",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A line-delimited list of the marker styles for each line\non the graph"
			}],
			"description":"The <markerStyles> are the marker styles of each line in the graph\nwidget.\n\nIf set to empty then no markers will be shown and\nshowLines will be set to true. Available marker styles may be one of:\n\n- \"filled circle\"\n- \"filled square\"\n- \"filled diamond\"\n- \"circle\"\n- \"square\"\n- \"diamond\"\n- any icon name from the svg icon library\n\nBy default the markerStyles will repeat in the following order:\n\n- \"filled circle\"\n- \"filled square\"\n- \"filled diamond\"\n- \"circle\"\n- \"square\"\n- \"diamond\"",
			"references":{
				"property":["showLines","markerScale"]
			}
		},{
			"id":"com.livecode.widget.linegraph-8",
			"name":"graphdata",
			"display name":"graphData",
			"library":"com.livecode.widget.linegraph",
			"type":"property",
			"syntax":[
				"set the graphData of <widget> to <pData>\nget the graphData of <widget>"
			],
			"display syntax":[
				"set the graphData of <i>widget</i> to <i>pData</i>"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"The data displayed by the graph.",
			"examples":[{
				"script":"    local tVar\n    put \"mon,1000,300,0\\ntue,720,340,123\\nwed,889,400,80\\nthu,800,360,10\\nfri,1000,301,234\\nsat,964,400,200\\nsun,1000,500,0\" into tVar\n    replace \"\\n\" with return in tVar\n    set the graphData of widget \"My Graph\" to tVar"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A line delimited list of the data for each point on the x-axis."
			}],
			"description":"The <graphData> is the data to be displayed by the graph widget.\n\nEach line of the <graphData> should be a a comma delimited list.  The\nfirst item of each line is the label for that point on the x-axis.\nThe second and following items are the values for each series of data\nto plot."
		},{
			"id":"com.livecode.widget.linegraph-9",
			"name":"hilitedcoordinatescolor",
			"display name":"hilitedCoordinatesColor",
			"library":"com.livecode.widget.linegraph",
			"type":"property",
			"syntax":[
				"set the hilitedCoordinatesColor of <widget> to <color>\nget the hilitedCoordinatesColor of <widget>"
			],
			"display syntax":[
				"set the hilitedCoordinatesColor of <i>widget</i> to <i>color</i>"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"The color for drawing the highlighted point",
			"value":[{
				"name":"value",
				"type":"",
				"description":"Any string which is a valid color, including RGBA values."
			}],
			"description":"If the widget currently has some <hilitedCoordinates|highlighted\ncoordinates> set, the <hilitedCoordinatesColor> determines the color\nused to draw the highlighting dot and lines.",
			"references":{
				"property":["hilitedCoordinates"]
			}
		},{
			"id":"com.livecode.widget.linegraph-10",
			"name":"graphylines",
			"display name":"graphYLines",
			"library":"com.livecode.widget.linegraph",
			"type":"property",
			"syntax":[
				"set the graphYLines of <widget> to { true | false }\nget the graphYLines of <widget>"
			],
			"display syntax":[
				"set the graphYLines of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"Whether vertical grid lines are displayed",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if grid lines should be shown; false otherwise"
			}],
			"description":"If true, the graph widget will draw vertical grid lines on the graph.\nThe number and spacing of the grid lines is determined automatically.",
			"references":{
				"property":["graphXLines"]
			}
		}