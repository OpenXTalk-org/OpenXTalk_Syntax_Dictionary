{
			"id":"community.livecode.hermann.polygon-1",
			"name":"community.livecode.hermann.polygon",
			"display name":"hhPoly",
			"library":"community.livecode.hermann.polygon",
			"type":"widget",
			"display syntax":[
				"hhPoly"
			],
			"associations":["community.livecode.hermann.polygon"],
			"description":"Polygon v121 [-hh fecit, Oct 2016/Oct 2018]\n\nWidget 'hhPolygon' displays a N-sided polygon that may be filled with built-in patterns.\n++ DoubleClick starts/stops edit mode of vertices (moves them).\n++ RightClick a vertex to have a menu for deleting it or insert one further vertex.\n++ RightClicking and dragging _inside_ the (opaque parts of the) polygon moves the shape.\n\nThe widget passes the following messages to LC Script (you can use them in your widget's script):\nmouseEnter, mouseLeave, mouseUp."
		},{
			"id":"community.livecode.hermann.polygon-2",
			"name":"verticescolor",
			"display name":"verticesColor",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the verticesColor of <widget> to <pColor>\nget the verticesColor of <widget>"
			],
			"display syntax":[
				"set the verticesColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"Sets or gets the color of the oval \"handles\"/\"markers\" at the vertices in editMode.",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The color of the vertices (markers) , in RGB or RGBA format"
			}],
			"examples":[{
				"script":"set the verticesColor of widget \"hhPolygon\" to \"255,127,0\"\n-- returns a _four-item_ string\nget the verticesColor of widget \"hhPolygon\" -- \"255,127,0,255\"\nset the verticesColor of widget \"hhPolygon\" to \"255,127,0,127\""
			}],
			"description":"Use the verticesColor property to set the color of the oval \"handles\"/\"markers\" at the vertices in editMode.\nThe color is in the form of a 3 or 4 item string, the 4th optional item being the alpha value, all integers between 0 and 255.\n[You may also use numbers containing a decimal point between 0.0 and 1.0, for example \"0.2,0.1,0.2\".\n.: The \"get\" always returns _four_ items in the integer form (each in range 0-255). :."
		},{
			"id":"community.livecode.hermann.polygon-3",
			"name":"strokepoly",
			"display name":"strokePoly",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the strokePoly of <widget> to <pTrueOrFalse>\nget the strokePoly of <widget>"
			],
			"display syntax":[
				"set the strokePoly of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"If set to true property strokePoly causes the polygon path to be stroked (outlined) with the current strokeColor.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the strokePoly of widget \"hhPolygon\" to not \\\n\t\tthe strokePoly of widget \"hhPolygon\""
			}],
			"description":"Use the strokePoly property to stroke (outline) the polygon's path. Setting the strokePoly of the widget (for the polygon path) to false sets the fillPoly of the widget (for the polygon path) to true."
		},{
			"id":"community.livecode.hermann.polygon-4",
			"name":"scalepatternstroke",
			"display name":"scalePatternStroke",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the scalePatternStroke of <widget> to <pTrueOrFalse>\nget the scalePatternStroke of <widget>"
			],
			"display syntax":[
				"set the scalePatternStroke of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"If set to true property scalePatternStroke causes the the current stroke-pattern image to be scaled to fit.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the scalePatternStroke of widget \"hhPolygon\" to not \\\n\t\tthe scalePatternStroke of widget \"hhPolygon\""
			}],
			"description":"Use the scalePatternStroke property to determine the dimensions of the stroke-pattern. If true then the stroke-pattern paint is scaled to fit. Else the unscaled stroke-pattern is repeated (if small enough)."
		},{
			"id":"community.livecode.hermann.polygon-5",
			"name":"builtinimgstroke",
			"display name":"builtInImgStroke",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the builtInImgStroke of <widget> to <pString>"
			],
			"display syntax":[
				"set the builtInImgStroke of <i>widget</i> to <i>pString</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"Chooses one of the widget-built-in images as the available stroke-pattern",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"is the name of a 'widget-built-in' image to use for the stroke-pattern."
			}],
			"examples":[{
				"script":"set the builtInImgStroke of widget \"hhPolygon\" to \"water.jpg\""
			}],
			"description":"Sets the name of the image to use as a stroke-pattern to one of the widget-built-in images. This is typically set from the popup menu in the property inspector.\nAvailable choices are currently buchenberg.jpg, burg.jpg, water.jpg, gs01.png, gs02.png, gs03.png, gs04.png, gs05.png, gs06.png, gs07.png, gs08.png, gs09.png, gs10.png, gs11.png, gs12.png, patt01.jpg and patt02.jpg."
		},{
			"id":"community.livecode.hermann.polygon-6",
			"name":"whitepositioncolor",
			"display name":"whitePositionColor",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the whitePositionColor of <widget> to <pTrueOrFalse>\nget the whitePositionColor of <widget>"
			],
			"display syntax":[
				"set the whitePositionColor of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"whitePositionColor sets the color of an activated showMouseDownPosition to white (or black).",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the whitePositionColor of widget \"hhPolygon\" to not \\\n\t\tthe whitePositionColor of widget \"hhPolygon\""
			}],
			"description":"If set to true property whitePositionColor shows while showMouseDownPosition is active the coordinates in white color, else in black color."
		},{
			"id":"community.livecode.hermann.polygon-7",
			"name":"strokewidth",
			"display name":"strokeWidth",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the strokeWidth of <widget> to <pWidth>\nget the strokeWidth of <widget>"
			],
			"display syntax":[
				"set the strokeWidth of <i>widget</i> to <i>pWidth</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"Set or get the strokeWidth property for stroking (outlining) the polygon's path.\nThe bounds of the path are accordingly adjusted.",
			"parameters":[{
				"name":"pWidth",
				"type":"",
				"refparam":"false",
				"description":"A positive number"
			}],
			"examples":[{
				"script":"set the strokeWidth of widget \"hhPolygon\" to 4.2"
			}],
			"description":"Use the strokeWidth property to determine the with of a stroked path. It's not poss\nto set the strokeWidth to a value smaller than 1. Set the strokePoly property to false to disable to have no stroke/outline."
		},{
			"id":"community.livecode.hermann.polygon-8",
			"name":"usepatternstroke",
			"display name":"usePatternStroke",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the usePatternStroke of <widget> to <pTrueOrFalse>\nget the usePatternStroke of <widget>"
			],
			"display syntax":[
				"set the usePatternStroke of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"If set to true property usePatternStroke causes the polygon's Stroke (outline) to be filled with the current pattern image.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the usePatternStroke of widget \"hhPolygon\" to not \\\n\t\tthe usePatternStroke of widget \"hhPolygon\""
			}],
			"description":"Use the usePatternStroke property to determine the stroke (outline) of the polygon's path. If true then the stroke-pattern paint is used for stroking, else the strokeColor."
		},{
			"id":"community.livecode.hermann.polygon-9",
			"name":"strokecolor",
			"display name":"strokeColor",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the strokeColor of <widget> to <pColor>\nget the strokeColor of <widget>"
			],
			"display syntax":[
				"set the strokeColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"Sets or gets the color of the path outline (stroke).",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The stroke (outline) color of the text, in RGB or RGBA format"
			}],
			"examples":[{
				"script":"set the strokeColor of widget \"hhPolygon\" to \"255,127,0\"\n-- returns a _four-item_ string\nget the strokeColor of widget \"hhPolygon\" -- \"255,127,0,255\"\nset the strokeColor of widget \"hhPolygon\" to \"255,127,0,127\""
			}],
			"description":"Use the strokeColor property to set the color of the path outline.\nThe color is in the form of a 3 or 4 item string, the 4th optional item being the alpha value, all integers between 0 and 255.\n[You may also use numbers containing a decimal point between 0.0 and 1.0, for example \"0.2,0.1,0.2\".\n.: The \"get\" always returns _four_ items in the integer form (each in range 0-255). :."
		},{
			"id":"community.livecode.hermann.polygon-10",
			"name":"regularstarpolygon",
			"display name":"regularStarPolygon",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the regularStarPolygon of <widget> to <pString>\nget the regularStarPolygon of <widget>"
			],
			"display syntax":[
				"set the regularStarPolygon of <i>widget</i> to <i>pString</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"The regularStarPolygon sets the Schlaefli symbol \"N_M\" of the regular star polygon.",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"is a string of the form \"N_M\". N is the number of vertices, M the step when setting the order of the vertices of the regular polygon (this combination is called a Schlaefli symbol)."
			},{
				"name":"Examples",
				"type":"",
				"refparam":"false",
				"description":"set the regularStarPolygon of widget \"hhPolygon\" to \"8_3\"\nget the regularStarPolygon of widget \"hhPolygon\""
			}],
			"description":"The regularStarPolygon is a string of the form \"N_M\". N is the number of vertices, M the step when setting the order of the vertices of the regular polygon; this combination is called a Schlaefli symbol. It is M < N/2 and N and M have no common divisor.\n(See https://en.wikipedia.org/wiki/List_of_regular_polytopes_and_compounds#Stars)"
		},{
			"id":"community.livecode.hermann.polygon-11",
			"name":"showmousedownposition",
			"display name":"showMouseDownPosition",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the showMouseDownPosition of <widget> to <pTrueOrFalse>\nget the showMouseDownPosition of <widget>"
			],
			"display syntax":[
				"set the showMouseDownPosition of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"If set to true property showMouseDownPosition shows (x,y) coordinates of the mouse position",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the showMouseDownPosition of widget \"hhPolygon\" to not \\\n\t\tthe showMouseDownPosition of widget \"hhPolygon\""
			}],
			"description":"If set to true property showMouseDownPosition shows (x,y) coordinates of the mouse position that are local to the widget's bounds and also the 'usual' card coordinates. Use property\t whitePositionColor to improve visibilty if necessary."
		},{
			"id":"community.livecode.hermann.polygon-12",
			"name":"editmode",
			"display name":"editMode",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the editMode of <widget> to <pTrueOrFalse>\nget the editMode of <widget>"
			],
			"display syntax":[
				"set the editMode of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"If set to true property editMode shows \"handles\"/\"markers\" at the vertices that you can grab and move.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the editMode of widget \"hhPolygon\" to not \\\n\t\tthe editMode of widget \"hhPolygon\""
			}],
			"description":"If set to true property editMode shows \"handles\"/\"markers\" at the vertices that you can grab and move. The mode may also be started by double-clicking the widget at the polygons 'interior' (opaque parts)."
		},{
			"id":"community.livecode.hermann.polygon-13",
			"name":"scalepatternfill",
			"display name":"scalePatternFill",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the scalePatternFill of <widget> to <pTrueOrFalse>\nget the scalePatternFill of <widget>"
			],
			"display syntax":[
				"set the scalePatternFill of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"If set to true property scalePatternFill causes the the current fill-pattern image to be scaled to fit.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the scalePatternFill of widget \"hhPolygon\" to not \\\n\t\tthe scalePatternFill of widget \"hhPolygon\""
			}],
			"description":"Use the scalePatternFill property to determine the dimensions of the fill-pattern. If true then the fill-pattern paint is scaled to fit. Else the unscaled fill-pattern is repeated (if small enough)."
		},{
			"id":"community.livecode.hermann.polygon-14",
			"name":"filenamestroke",
			"display name":"filenameStroke",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the filenameStroke of <widget> to <pPath>"
			],
			"display syntax":[
				"set the filenameStroke of <i>widget</i> to <i>pPath</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"Sets any LC-readable image by its filePath as the available stroke-pattern.",
			"parameters":[{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"is a full valid filePath to an image to use for the stroke-pattern."
			}],
			"examples":[{
				"script":"set the filenameStroke of widget \"hhPolygon\" to \"/Users/admin/pictures/water.jpg\""
			}],
			"description":"Sets the filePath of the image to use as the stroke-pattern. This is typically set from the popup menu in the property inspector (and it's 'answer file'-dialog button right of the filename's text box)."
		},{
			"id":"community.livecode.hermann.polygon-15",
			"name":"radius",
			"display name":"radius",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the radius of <widget> to <pNum>\nget the radius of <widget>"
			],
			"display syntax":[
				"set the radius of <i>widget</i> to <i>pNum</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"The radius sets the radius of the circle that contains the vertices of the regular polygon.",
			"parameters":[{
				"name":"pNum",
				"type":"",
				"refparam":"false",
				"description":"is a positive number"
			},{
				"name":"Examples",
				"type":"",
				"refparam":"false",
				"description":"set the radius of widget \"hhPolygon\" to 100 -- 100 pixels\nget the radius of widget \"hhPolygon\""
			}],
			"description":"Use the radius property to determine the width and height the regular N-gon. Choosing a new value for the radius changes the width and height of the widget to 2*radius also if it isn't a regular polygon any more."
		},{
			"id":"community.livecode.hermann.polygon-16",
			"name":"builtinimgfill",
			"display name":"builtInImgFill",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the builtInImgFill of <widget> to <pString>"
			],
			"display syntax":[
				"set the builtInImgFill of <i>widget</i> to <i>pString</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"Chooses one of the widget-built-in images as the available fill-pattern",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"is the name of a 'widget-built-in' image to use for the fill-pattern."
			}],
			"examples":[{
				"script":"set the builtInImgFill of widget \"hhPolygon\" to \"water.jpg\""
			}],
			"description":"Sets the name of the image to use as a fill-pattern to one of the widget-built-in images. This is typically set from the popup menu in the property inspector.\nAvailable choices are currently buchenberg.jpg, burg.jpg, water.jpg, gs01.png, gs02.png, gs03.png, gs04.png, gs05.png, gs06.png, gs07.png, gs08.png, gs09.png, gs10.png, gs11.png, gs12.png, patt01.jpg and patt02.jpg."
		},{
			"id":"community.livecode.hermann.polygon-17",
			"name":"usestarpolygon",
			"display name":"useStarPolygon",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the useStarPolygon of <widget> to <pTrueOrFalse>\nget the useStarPolygon of <widget>"
			],
			"display syntax":[
				"set the useStarPolygon of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"useStarPolygon activates a star polygon (with current Schlaefli symbol) to be drawn.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the useStarPolygon of widget \"hhPolygon\" to not \\\n\t\tthe useStarPolygon of widget \"hhPolygon\""
			}],
			"description":"Use the useStarPolygon property to determine that a star polygon (with current Schlaefli symbol) is used. If set to false a 'usual' regular polygon is drawn."
		},{
			"id":"community.livecode.hermann.polygon-18",
			"name":"filenamefill",
			"display name":"filenameFill",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the filenameFill of <widget> to <pPath>"
			],
			"display syntax":[
				"set the filenameFill of <i>widget</i> to <i>pPath</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"Sets any LC-readable image by its filePath as the available fill-pattern.",
			"parameters":[{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"is a full valid filePath to an image to use for the fill-pattern."
			}],
			"examples":[{
				"script":"set the filenameFill of widget \"hhPolygon\" to \"/Users/admin/pictures/water.jpg\""
			}],
			"description":"Sets the filePath of the image to use as the fill-pattern. This is typically set from the popup menu in the property inspector (and it's 'answer file'-dialog button right of the filename's text box)."
		},{
			"id":"community.livecode.hermann.polygon-19",
			"name":"numofvertices",
			"display name":"numOfVertices",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the numOfVertices of <widget> to <pNum>\nget the numOfVertices of <widget>"
			],
			"display syntax":[
				"set the numOfVertices of <i>widget</i> to <i>pNum</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"The numOfVertices sets the number of vertices of the (regular) polygon.",
			"parameters":[{
				"name":"pNum",
				"type":"",
				"refparam":"false",
				"description":"is an Integer (at least 3)."
			},{
				"name":"Examples",
				"type":"",
				"refparam":"false",
				"description":"set the numOfVertices of widget \"hhPolygon\" to 12 -- regular 12-gon\nget the numOfVertices of widget \"hhPolygon\""
			}],
			"description":"Use the numOfVertices property to determine the number N of the regular N-gon. Choosing a new number of vertices RESETS the current vertices of widget!"
		},{
			"id":"community.livecode.hermann.polygon-20",
			"name":"fillcolor",
			"display name":"fillColor",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the fillColor of <widget> to <pColor>\nget the fillColor of <widget>"
			],
			"display syntax":[
				"set the fillColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"Sets or gets the color of the chars fill.",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The color of the text, in RGB or RGBA format"
			}],
			"examples":[{
				"script":"set the fillColor of widget \"hhPolygon\" to \"255,127,0\"\n-- returns a _four-item_ string\nget the fillColor of widget \"hhPolygon\" -- \"255,127,0,255\"\nset the fillColor of widget \"hhPolygon\" to \"255,127,0,127\""
			}],
			"description":"Use the fillColor property to set the color of the chars fill.\nThe color is in the form of a 3 or 4 item string, the 4th optional item being the alpha value, all integers between 0 and 255.\n[You may also use numbers containing a decimal point between 0.0 and 1.0, for example \"0.2,0.1,0.2\".\n.: The \"get\" always returns _four_ items in the integer form (each in range 0-255). :."
		},{
			"id":"community.livecode.hermann.polygon-21",
			"name":"polypoints",
			"display name":"polyPoints",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the polyPoints of <widget> to <pLinesOfPoints>\nget the polyPoints of <widget>"
			],
			"display syntax":[
				"set the polyPoints of <i>widget</i> to <i>pLinesOfPoints</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"The polyPoints is intended to be a 'connector' to polygon graphic objects in LC Script.",
			"parameters":[{
				"name":"pLinesOfPoints",
				"type":"",
				"refparam":"false",
				"description":"is a string of points, one point per line, NO empty lines (as the polygon is not 'interrupted')."
			},{
				"name":"Examples",
				"type":"",
				"refparam":"false",
				"description":"set the polyPoints of widget \"hhPolygon\" to the points of graphic 1\nget the polyPoints of widget \"hhPolygon\""
			}],
			"description":"The polyPoints is a string of at least two lines containing a point \"x,y\" in each line. Empty lines are not allowed. You may use this property also for exact positioning in the property inspector."
		},{
			"id":"community.livecode.hermann.polygon-22",
			"name":"showbounds",
			"display name":"showBounds",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the showBounds of <widget> to <pTrueOrFalse>\nget the showBounds of <widget>"
			],
			"display syntax":[
				"set the showBounds of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"Whether to show the bounds of the widget.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the showBounds of widget \"hhPolygon\" to not \\\n\t\tthe showBounds of widget \"hhPolygon\""
			}],
			"description":"If set to true property showBounds shows as dashed line the bounds of the widget. These has always  to be adjusted, so that the widget is the smallest enclosing rectangleof the polygon."
		},{
			"id":"community.livecode.hermann.polygon-23",
			"name":"usepatternfill",
			"display name":"usePatternFill",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the usePatternFill of <widget> to <pTrueOrFalse>\nget the usePatternFill of <widget>"
			],
			"display syntax":[
				"set the usePatternFill of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"If set to true property usePatternFill causes the polygon's path to be filled with the current fill-pattern image.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the usePatternFill of widget \"hhPolygon\" to not \\\n\t\tthe usePatternFill of widget \"hhPolygon\""
			}],
			"description":"Use the usePatternFill property to determine the fill of the polygon's path. If true then the fill-pattern paint is used, else the fillColor."
		},{
			"id":"community.livecode.hermann.polygon-24",
			"name":"rotateby",
			"display name":"rotateBy",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the rotateBy of <widget> to <pAngle>\nget the rotateBy of <widget>"
			],
			"display syntax":[
				"set the rotateBy of <i>widget</i> to <i>pAngle</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"The angle of additive or subtractive rotation of the polygon path (NOT of the pattern). RotateBy is NOT a 'rotateTo'.",
			"parameters":[{
				"name":"pAngle",
				"type":"",
				"refparam":"false",
				"description":"angle in degrees, negative values rotate counter-clockwise, positive values clockwise in degrees."
			},{
				"name":"Examples",
				"type":"",
				"refparam":"false",
				"description":"-- rotate 30 degress cw from current rotation\nset the rotateBy of widget \"hhPolygon\" to\t 30\n-- rotate 15 degress ccw from current rotation\nset the rotateBy of widget \"hhPolygon\" to -15"
			}],
			"description":"Use the rotateBy property to rotate the polygon <pAngle> degrees clockwise (cw) on base of the current state.\nYou may also give negative angles which rotate their absolute value counterclockwise (ccw)\nFor example -15 cw is equivalent to 360-15 cw is equivalent to 15 ccw."
		},{
			"id":"community.livecode.hermann.polygon-25",
			"name":"fillpoly",
			"display name":"fillPoly",
			"library":"community.livecode.hermann.polygon",
			"type":"property",
			"syntax":[
				"set the fillPoly of <widget> to <pTrueOrFalse>\nget the fillPoly of <widget>"
			],
			"display syntax":[
				"set the fillPoly of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.polygon"],
			"summary":"If set to true property fillPoly causes the polygon path to be filled with the current fillColor.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the fillPoly of widget \"hhPolygon\" to not \\\n\t\tthe fillPoly of widget \"hhPolygon\""
			}],
			"description":"Use the fillPoly property to fill the polygon's path. Setting the fillPoly of the widget (for the polygon path) to false sets the strokePoly of the widget (for the polygon path) to true.\n"
		}