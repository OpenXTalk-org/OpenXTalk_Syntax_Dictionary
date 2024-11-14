{
			"id":"community.livecode.hermann.progress-1",
			"name":"community.livecode.hermann.progress",
			"display name":"hhProgress",
			"library":"community.livecode.hermann.progress",
			"type":"widget",
			"display syntax":[
				"hhProgress"
			],
			"associations":["community.livecode.hermann.progress"],
			"description":"progress v1.3.0 [-hh fecit, Nov 2017/Oct 2018]\n\nWidget 'hhProgress' displays progress, in elliptical or rectangular mode.\n++ Resize with pointer tool and shiftKey down to get a proportional resizing.\n++ Resize with pointer tool and optionKey down to get a shape of equal width and height.\n++ Drag with pointer tool and optionKey down to 'duplicate' the widget (may be the copy loses some properties).\n++ The rectangle progress moves left-right or bottom-up, depending on the chosen width and height.\n++ Drag the widget by mouseDown (if property allowGrab is true)\n++ RightClick the widget for a menu of basic options (if property allowContextMenu is true)\n\nThe widget passes the following mouse messages for your own use in the widget's script:\nmouseDown (late), mouseEnter, mouseLeave, mouseRelease, mouseUp."
		},{
			"id":"community.livecode.hermann.progress-2",
			"name":"textdrawsdifferent",
			"display name":"textDrawsDifferent",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the textDrawsDifferent of <widget> to <pTrueOrFalse>\nget the textDrawsDifferent of <widget>"
			],
			"display syntax":[
				"set the textDrawsDifferent of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Whether the progress text draws with blend mode \"difference\"",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the textDrawsDifferent of widget \"hhProgress\" to not \\\n    the textDrawsDifferent of widget \"hhProgress\""
			}],
			"description":"Use the textDrawsDifferent property to draw with inverting the text color by the progress (blend mode different). Whether the text is shown determines property \"showProgressText\"."
		},{
			"id":"community.livecode.hermann.progress-3",
			"name":"fillface",
			"display name":"fillFace",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the fillFace of <widget> to <pTrueOrFalse>\nget the fillFace of <widget>"
			],
			"display syntax":[
				"set the fillFace of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"If set to true property fillFace causes the \"face\" of the progress ellipse or the background of the progress rectangle filled with the current faceColor.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the fillFace of widget \"hhProgress\" to not \\\n    the fillFace of widget \"hhProgress\""
			}],
			"description":"Use the fillFace property to fill the face (ellipse or rectangle) or not."
		},{
			"id":"community.livecode.hermann.progress-4",
			"name":"ellipseinnerpercent",
			"display name":"ellipseInnerPercent",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the ellipseInnerPercent of <widget> to <pPerc>\nget the ellipseInnerPercent of <widget>"
			],
			"display syntax":[
				"set the ellipseInnerPercent of <i>widget</i> to <i>pPerc</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Set or get the ellipseInnerPercent",
			"parameters":[{
				"name":"pPerc",
				"type":"",
				"refparam":"false",
				"description":"A positive number in Range 0-100"
			}],
			"examples":[{
				"script":"set the ellipseInnerPercent of widget \"hhProgress\" to 42"
			}],
			"description":"Use the strokeWidthRect property to get or set the area percentage of the inner part. Property ellipseShowInner setsthe visibility of that part."
		},{
			"id":"community.livecode.hermann.progress-5",
			"name":"strokewidthcirc",
			"display name":"strokeWidthCirc",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the strokeWidthCirc of <widget> to <pWidth>\nget the strokeWidthCirc of <widget>"
			],
			"display syntax":[
				"set the strokeWidthCirc of <i>widget</i> to <i>pWidth</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Set or get the strokeWidthCirc property for stroking the \"progress\"/percentage sector of the ellipse.",
			"parameters":[{
				"name":"pWidth",
				"type":"",
				"refparam":"false",
				"description":"A non-negative number"
			}],
			"examples":[{
				"script":"set the strokeWidthCirc of widget \"hhProgress\" to 4.2"
			}],
			"description":"Use the strokeWidthRect property to set the width for stroking (the 'outline' of) the \"progress\"/percentage sector  the sector) of the ellipse with the current strokeColor."
		},{
			"id":"community.livecode.hermann.progress-6",
			"name":"strokecolor",
			"display name":"strokeColor",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the strokeColor of <widget> to <pColor>\nget the strokeColor of <widget>"
			],
			"display syntax":[
				"set the strokeColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Sets or gets the color of the progress indicator's stroke (= current percentage stroke, the \"progress\" stroke).",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The stroke color of the progress/percentage, in RGB or RGBA format"
			}],
			"examples":[{
				"script":"set the strokeColor of widget \"hhProgress\" to \"255,127,0\"\n-- returns a _four-item_ string\nget the strokeColor of widget \"hhProgress\" -- \"255,127,0,255\"\nset the strokeColor of widget \"hhProgress\" to \"255,127,0,127\""
			}],
			"description":"Use the strokeColor property to set the color of the progress indicator's stroke (= current percentage stroke, the \"progress\" stroke).\nThe color is in the form of a 3 or 4 item string, the 4th optional item being the alpha value, all integers between 0 and 255.\n[You may also use numbers containing a decimal point between 0.0 and 1.0, for example \"0.2,0.1,0.2\".\n.: The \"get\" always returns _four_ items in the integer form (each in range 0-255). :."
		},{
			"id":"community.livecode.hermann.progress-7",
			"name":"allowgrab",
			"display name":"allowGrab",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the allowGrab of <widget> to <pTrueOrFalse>\nget the allowGrab of <widget>"
			],
			"display syntax":[
				"set the allowGrab of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Whether to allow the widget to grab on mouseDown.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the allowGrab of widget \"hhProgress\" to not \\\n    the allowGrab of widget \"hhProgress\""
			}],
			"description":"Use the allowGrab to disable/enable the widget's \"grab\" (on mouseDown). You can still use YOUR mouseDown handler in the widget's script."
		},{
			"id":"community.livecode.hermann.progress-8",
			"name":"strokeellipseprogress",
			"display name":"strokeEllipseProgress",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the strokeEllipseProgress of <widget> to <pTrueOrFalse>\nget the strokeEllipseProgress of <widget>"
			],
			"display syntax":[
				"set the strokeEllipseProgress of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"If set to true property strokeEllipseProgress causes the two ellipsearcs to be stroked with the current strokeColor.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the strokeEllipseProgress of widget \"hhProgress\" to not \\\n    the strokeEllipseProgress of widget \"hhProgress\""
			}],
			"description":"Use the fillFace property to fill the face (ellipse or rectangle) or not."
		},{
			"id":"community.livecode.hermann.progress-9",
			"name":"ellipseshowinner",
			"display name":"ellipseShowInner",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the ellipseShowInner of <widget> to <pTrueOrFalse>\nget the ellipseShowInner of <widget>"
			],
			"display syntax":[
				"set the ellipseShowInner of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Whether to show the 'complementary' inner part in ellipse mode.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the ellipseShowInner of widget \"hhProgress\" to not \\\n    the ellipseShowInner of widget \"hhProgress\""
			}],
			"description":"If set to true property ellipseShowInner shows a complementary filled inner part. The area percentage of that inner part is set by property ellipseInnerPercent."
		},{
			"id":"community.livecode.hermann.progress-10",
			"name":"facecolor",
			"display name":"faceColor",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the faceColor of <widget> to <pColor>\nget the faceColor of <widget>"
			],
			"display syntax":[
				"set the faceColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Sets or gets the color of the \"face\" of the progress ellipse or the background of the progress rectangle. Property fillFace determines, whether the fill occurs.",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The color of the \"face\" or background fill, in RGB or RGBA format"
			}],
			"examples":[{
				"script":"set the faceColor of widget \"hhProgress\" to \"255,127,0\"\n-- returns a _four-item_ string\nget the faceColor of widget \"hhProgress\" -- \"255,127,0,255\"\nset the faceColor of widget \"hhProgress\" to \"255,127,0,127\""
			}],
			"description":"Use the faceColor property to set the color of the \"face\" of the progress ellipse or the background of the progress rectangle.\nThe color is in the form of a 3 or 4 item string, the 4th optional item being the alpha value, all integers between 0 and 255.\n[You may also use numbers containing a decimal point between 0.0 and 1.0, for example \"0.2,0.1,0.2\".\n.: The \"get\" always returns _four_ items in the integer form (each in range 0-255). :."
		},{
			"id":"community.livecode.hermann.progress-11",
			"name":"mode",
			"display name":"mode",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the mode of <widget> to <pMode>\nget the mode of <widget>"
			],
			"display syntax":[
				"set the mode of <i>widget</i> to <i>pMode</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Set property mode to switch between Ellipse and Rectangle.  Also choosable from a popup menu by rightClicking the widget.",
			"parameters":[{
				"name":"pMode",
				"type":"",
				"refparam":"false",
				"description":"A string, either \"Ellipse\" or \"Rectangle\"."
			}],
			"examples":[{
				"script":"set the mode of widget \"hhProgress\" to \"Ellipse\"\nget the mode of widget \"hhProgress\""
			}],
			"description":"Set property mode to switch between Ellipse and Rectangle.\nResize the widget with shiftKeyDown and pointer tool to get a proportional resize, resize it with optionKey down to get a shape with equal width and height (= a ellipse or a square).\nProperty _mode2_ is a synonym and for your comfort available in section \"Colors\"."
		},{
			"id":"community.livecode.hermann.progress-12",
			"name":"insetrect",
			"display name":"insetRect",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the insetRect of <widget> to <pNum>\nget the insetRect of <widget>"
			],
			"display syntax":[
				"set the insetRect of <i>widget</i> to <i>pNum</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Use insetRect amount of pixels before start and after end of progress indicator's background rect.",
			"parameters":[{
				"name":"pNum",
				"type":"",
				"refparam":"false",
				"description":"A positive number (of pixels)"
			}],
			"examples":[{
				"script":"set the insetRect of widget \"hhProgress\" to 4"
			}],
			"description":"Use the insetRect property to set the inset of progress indicator's background rect within the filled background rectangle. Useful for adjusting the widget's display to the chosen roundRectRadius."
		},{
			"id":"community.livecode.hermann.progress-13",
			"name":"fillcolor",
			"display name":"fillColor",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the fillColor of <widget> to <pColor>\nget the fillColor of <widget>"
			],
			"display syntax":[
				"set the fillColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Sets or gets the color of the progress indicator's background fill (=100%).",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The color of the fill, in RGB or RGBA format"
			}],
			"examples":[{
				"script":"set the fillColor of widget \"hhProgress\" to \"255,127,0\"\n-- returns a _four-item_ string\nget the fillColor of widget \"hhProgress\" -- \"255,127,0,255\"\nset the fillColor of widget \"hhProgress\" to \"255,127,0,127\""
			}],
			"description":"Use the fillColor property to set the color of the of the progress indicator's background fill (=100%).\nThe color is in the form of a 3 or 4 item string, the 4th optional item being the alpha value, all integers between 0 and 255.\n[You may also use numbers containing a decimal point between 0.0 and 1.0, for example \"0.2,0.1,0.2\".\n.: The \"get\" always returns _four_ items in the integer form (each in range 0-255). :."
		},{
			"id":"community.livecode.hermann.progress-14",
			"name":"demomode",
			"display name":"demoMode",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the demoMode of <widget> to <pMode>\nget the demoMode of <widget>"
			],
			"display syntax":[
				"set the demoMode of <i>widget</i> to <i>pMode</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Set property demoMode to display one of the 5 modes FastDemo, Seconds, Minutes, Hours12 or Hours24 as percentages.",
			"parameters":[{
				"name":"pMode",
				"type":"",
				"refparam":"false",
				"description":"One of the strings \"FastDemo\", \"Seconds\", \"Minutes\", \"Hours12\", \"Hours24\"."
			}],
			"examples":[{
				"script":"set the demoMode of widget \"hhProgress\" to \"Seconds\"\nget the demoMode of widget \"hhProgress\""
			}],
			"description":"Use the demoMode property to display timed preview when adjusting the options or as part of a time display. Needs property showDemo set to true for working."
		},{
			"id":"community.livecode.hermann.progress-15",
			"name":"showprogresstext",
			"display name":"showProgressText",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the showProgressText of <widget> to <pTrueOrFalse>\nget the showProgressText of <widget>"
			],
			"display syntax":[
				"set the showProgressText of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Whether to show the percentage as text",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the showProgressText of widget \"hhProgress\" to not \\\n    the showProgressText of widget \"hhProgress\""
			}],
			"description":"Use the showProgressText property to display the progress centered as text (percentage)."
		},{
			"id":"community.livecode.hermann.progress-16",
			"name":"strokewidthrect",
			"display name":"strokeWidthRect",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the strokeWidthRect of <widget> to <pWidth>\nget the strokeWidthRect of <widget>"
			],
			"display syntax":[
				"set the strokeWidthRect of <i>widget</i> to <i>pWidth</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Set or get the strokeWidthRect property for stroking the \"progress\"/percentage.",
			"parameters":[{
				"name":"pWidth",
				"type":"",
				"refparam":"false",
				"description":"A positive number"
			}],
			"examples":[{
				"script":"set the strokeWidthRect of widget \"hhProgress\" to 4.2"
			}],
			"description":"Use the strokeWidthRect property to set the width for stroking the \"progress\"/percentage in the \"rectangle\"-mode with the current strokeColor."
		},{
			"id":"community.livecode.hermann.progress-17",
			"name":"percentage",
			"display name":"percentage",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the percentage of <widget> to <pPercents>\nget the percentage of <widget>"
			],
			"display syntax":[
				"set the percentage of <i>widget</i> to <i>pPercents</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"The progress of the progress indicator as a percentage (in range 0-100)",
			"parameters":[{
				"name":"pPercents",
				"type":"",
				"refparam":"false",
				"description":"The percentage of the progress is any number in range 0-100."
			}],
			"examples":[{
				"script":"set the percentage of widget \"hhProgress\" to 61.8\nget the percentage of widget \"hhProgress\" -- returns a number in range 0-100"
			}],
			"description":"Use the percentage property to set the 'progress' of the progress indicator]"
		},{
			"id":"community.livecode.hermann.progress-18",
			"name":"showdemo",
			"display name":"showDemo",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the showDemo of <widget> to <pTrueOrFalse>\nget the showDemo of <widget>"
			],
			"display syntax":[
				"set the showDemo of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"If set to true property showDemo displays timed percentages accorting to th chosen demoMode.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the showDemo of widget \"hhProgress\" to not \\\n    the showDemo of widget \"hhProgress\""
			}],
			"description":"Use the showDemo property for a preview when adjusting the options or as part of a time display. Choose also an appropriate demoMode."
		},{
			"id":"community.livecode.hermann.progress-19",
			"name":"progresstextcolor",
			"display name":"progressTextColor",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the progressTextColor of <widget> to <pColor>\nget the progressTextColor of <widget>"
			],
			"display syntax":[
				"set the progressTextColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Sets or gets the color of the progress indicator's stroke (= current percentage stroke, the \"progress\" stroke).",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The text color of the progress/percentage text"
			}],
			"examples":[{
				"script":"set the progressTextColor of widget \"hhProgress\" to \"255,127,0\"\n-- returns a _four-item_ string\nget the progressTextColor of widget \"hhProgress\" -- \"255,127,0,255\"\nset the progressTextColor of widget \"hhProgress\" to \"255,127,0,127\""
			}],
			"description":"Use the progressTextColor property to set the color of the progress indicator text (= current percentage).\nThe color is in the form of a 3 or 4 item string, the 4th optional item being the alpha value, all integers between 0 and 255.\n[You may also use numbers containing a decimal point between 0.0 and 1.0, for example \"0.2,0.1,0.2\".\n.: The \"get\" always returns _four_ items in the integer form (each in range 0-255). :."
		},{
			"id":"community.livecode.hermann.progress-20",
			"name":"roundrectradius",
			"display name":"roundRectRadius",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the roundRectRadius of <widget> to <pNum>\nget the roundRectRadius of <widget>"
			],
			"display syntax":[
				"set the roundRectRadius of <i>widget</i> to <i>pNum</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Use roundRectRadius of 0-32 pixels for adjusting the rounded background rectangle (parameter 0 = not rounded).",
			"parameters":[{
				"name":"pNum",
				"type":"",
				"refparam":"false",
				"description":"A non-negative number (of pixels)"
			}],
			"examples":[{
				"script":"set the roundRectRadius of widget \"hhProgress\" to 4"
			}],
			"description":"Use the roundRectRadius property for adjusting the rounded background rectangle.\nThe roundRectRadius can be set to zero (= no rounding of edges, the usual rectangle). The property insetRect may need changes after changing the roundRectRadius."
		},{
			"id":"community.livecode.hermann.progress-21",
			"name":"allowcontextmenu",
			"display name":"allowContextMenu",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the allowContextMenu of <widget> to <pTrueOrFalse>\nget the allowContextMenu of <widget>"
			],
			"display syntax":[
				"set the allowContextMenu of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Whether to allow the ContextMenu (by rightClick).",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the allowContextMenu of widget \"hhProgress\" to not \\\n    the allowContextMenu of widget \"hhProgress\""
			}],
			"description":"Use the allowContextMenu to disable/enable the widget's contextMenu."
		},{
			"id":"community.livecode.hermann.progress-22",
			"name":"utchoursoffset",
			"display name":"UTCHoursOffset",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the UTCHoursOffset of <widget> to <pOffset>\nget the UTCHoursOffset of <widget>"
			],
			"display syntax":[
				"set the UTCHoursOffset of <i>widget</i> to <i>pOffset</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"Set property UTCHoursOffset to shift the time display if demoMode is set to true and one of the demoModes is Seconds, Minutes, Hours12 or Hours24.",
			"parameters":[{
				"name":"pOffset",
				"type":"",
				"refparam":"false",
				"description":"A number between -12.0 and 12.0, choosable in steps of 0.25 (hours)."
			}],
			"examples":[{
				"script":"set the UTCHoursOffset of widget \"hhProgress\" to 4.5\nget the UTCHoursOffset of widget \"hhProgress\""
			}],
			"description":"Use the UTCHoursOffset property to shift the timed setting of percentages by an UTC offset. Need the demoMode set to true."
		},{
			"id":"community.livecode.hermann.progress-23",
			"name":"autostrokewidthrect",
			"display name":"autoStrokeWidthRect",
			"library":"community.livecode.hermann.progress",
			"type":"property",
			"syntax":[
				"set the autoStrokeWidthRect of <widget> to <pTrueOrFalse>\nget the autoStrokeWidthRect of <widget>"
			],
			"display syntax":[
				"set the autoStrokeWidthRect of <i>widget</i> to <i>pTrueOrFalse</i>"
			],
			"associations":["community.livecode.hermann.progress"],
			"summary":"If set to true property autoStrokeWidthRect is chosen to fill the rectangle's outline up to 1 pixel inset. This overrides \"rounded\"-settings, the rectangle becomes not rounded.",
			"parameters":[{
				"name":"pTrueOrFalse",
				"type":"",
				"refparam":"false",
				"description":"is true or false"
			}],
			"examples":[{
				"script":"set the autoStrokeWidthRect of widget \"hhProgress\" to not \\\n    the autoStrokeWidthRect of widget \"hhProgress\""
			}],
			"description":"Use the autoStrokeWidthRect property for a default setting of the strokeWidthRect. If set to true this overrides \"rounded\"-settings, the rectangle becomes not rounded.\n"
		}