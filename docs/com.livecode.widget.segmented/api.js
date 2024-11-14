{
			"id":"com.livecode.widget.segmented-1",
			"name":"com.livecode.widget.segmented",
			"display name":"Segmented Control",
			"library":"com.livecode.widget.segmented",
			"type":"widget",
			"display syntax":[
				"Segmented Control"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"A widget that shows a row of selectable horizontal segments.\n\nA segmented control is a horizontal control that is made up of\nmultiple segments, where each segment functions as a discrete button.\nEach segment can either show a <itemLabels|label> or an\n<itemIcons|icon>.\n\nOne or more of the segments can be <hilitedItems|highlighted> by\nclicking on them.  By default, only one segment at a time can be\nhighlighted, but it is possible to\n<multipleHilites|allow multiple segments to be highlighted>.\n\nThe segmented control is great for:\n\n- displaying a set of different options in a settings window (for\n  example, it is used to display text alignment in the LiveCode\n  property inspector)\n- switching between different cards in a stack\n- displaying a set of toggleable settings",
			"description":"A widget that shows a row of selectable horizontal segments.\n\nA segmented control is a horizontal control that is made up of\nmultiple segments, where each segment functions as a discrete button.\nEach segment can either show a <itemLabels|label> or an\n<itemIcons|icon>.\n\nOne or more of the segments can be <hilitedItems|highlighted> by\nclicking on them.  By default, only one segment at a time can be\nhighlighted, but it is possible to\n<multipleHilites|allow multiple segments to be highlighted>.\n\nThe segmented control is great for:\n\n- displaying a set of different options in a settings window (for\n  example, it is used to display text alignment in the LiveCode\n  property inspector)\n- switching between different cards in a stack\n- displaying a set of toggleable settings",
			"references":{
				"property":["itemLabels","itemIcons","hilitedItems","multipleHilites"]
			}
		},{
			"id":"com.livecode.widget.segmented-2",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"com.livecode.widget.segmented",
			"type":"message",
			"syntax":[
				"hiliteChanged"
			],
			"display syntax":[
				"hiliteChanged"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"Sent when the hilite of the segmented control widget changes",
			"description":"Handle the <hiliteChanged> message in order to respond to a change in the hilited items\nof the segmented control."
		},{
			"id":"com.livecode.widget.segmented-3",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the foreColor of <widget>",
				"set the foreColor of <widget> to <color>"
			],
			"display syntax":[
				"get the foreColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The default label or icon color",
			"description":"The <foreColor> property controls the color used to draw segments'\nlabels or icons when they are not highlighted.",
			"references":{
				"property":["hilitedTextColor"]
			}
		},{
			"id":"com.livecode.widget.segmented-4",
			"name":"backcolor",
			"display name":"backColor",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the backColor of <widget>",
				"set the backColor of <widget> to <color>"
			],
			"display syntax":[
				"get the backColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The default background color",
			"description":"The <backColor> property controls the background color of segments\nwhen they are not highlighted.",
			"references":{
				"property":["hiliteColor"]
			}
		},{
			"id":"com.livecode.widget.segmented-5",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the hiliteColor of <widget>",
				"set the hiliteColor of <widget> to <color>"
			],
			"display syntax":[
				"get the hiliteColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The background color of highlighted segments",
			"description":"The <hiliteColor> property controls the background color\nof the segments that are currently highlighted.",
			"references":{
				"property":["hilitedItems","hilitedItemNames","backColor"]
			}
		},{
			"id":"com.livecode.widget.segmented-6",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the borderColor of <widget>",
				"set the borderColor of <widget> to <color>"
			],
			"display syntax":[
				"get the borderColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The border color",
			"description":"The <borderColor> property controls the color used to draw the\nsegmented control's background and the color of the dividers between\nthe segments.",
			"references":{
				"property":["showBorder"]
			}
		},{
			"id":"com.livecode.widget.segmented-7",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the itemLabels of <widget>",
				"set the itemLabels of <widget> to <labelList>"
			],
			"display syntax":[
				"get the itemLabels of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The labels displayed by each segment",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of labels for the segments."
			}],
			"description":"The labels of each segment in the control.  The <itemLabels> are\ndisplayed by the widget when the <itemStyle> is set to show labels.\n\nIf any of the <itemLabels> are empty, those segments have no label.\n\nWhen you set the <itemLabels> to a string that has fewer labels than\nthe <itemCount>, the remaining segments' labels are set to empty.\n\nWhen you set the <itemLabels> to a string that has more labels than\nthe <itemCount>, the extra labels are ignored.",
			"references":{
				"property":["itemCount","itemStyle","foreColor"]
			}
		},{
			"id":"com.livecode.widget.segmented-8",
			"name":"hiliteditems",
			"display name":"hilitedItems",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the hilitedItems of <widget>",
				"set the hilitedItems of <widget> to <indexList>"
			],
			"display syntax":[
				"get the hilitedItems of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The currently highlighted segment indices",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of segment indices."
			}],
			"description":"The segment numbers of the highlighted segments of the control.  Each\nitem in the <hilitedItems> is a positive integer.\n\nIf the <multipleHilites> is `false` when setting the <hilitedItems>,\nthen the first index in the <hilitedItems> determines which segment is\nhighlighted, and the remainder of the <hilitedItems> are ignored.\n\nThe <hiliteChanged> message is sent when setting the <hilitedItems>,\nunless it doesn't change which segments are highlighted.",
			"references":{
				"property":["hilitedItemNames","multipleHilites"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"com.livecode.widget.segmented-9",
			"name":"multiplehilites",
			"display name":"multipleHilites",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the multipleHilites of <widget>",
				"set the multipleHilites of <widget> to { true | false }"
			],
			"display syntax":[
				"get the multipleHilites of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"Whether multiple segments may be highlighted simultaneously",
			"description":"When the <multipleHilites> property is `true`, more than one segemnt\ncan be highlighted at once.  If it is `false`, then highlighting a\nsegment removes the highlight from all other segments.\n\nIf the <multipleHilites> is set to `false` while there is more than\none segment highlighted, then all segments are immediately\ndehighlighted and the <hiliteChanged> message is sent.",
			"references":{
				"property":["hilitedItems","hilitedItemNames"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"com.livecode.widget.segmented-10",
			"name":"showborder",
			"display name":"showBorder",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to { true | false }"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"Whether the widget has a border or not",
			"description":"If the <showBorder> property is `true`, the segmented control is drawn\nwith an outline.",
			"references":{
				"property":["borderColor"]
			}
		},{
			"id":"com.livecode.widget.segmented-11",
			"name":"hiliteditemnames",
			"display name":"hilitedItemNames",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the hilitedItemNames of <widget>",
				"set the hilitedItemNames of <widget> to <nameList>"
			],
			"display syntax":[
				"get the hilitedItemNames of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The currently highlighted segment names",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of segment names."
			}],
			"description":"The names of the highlighted segments of the control.  Each item in\nthe <hilitedItemNames> is a segment <itemNames|name>.\n\nIf the <multipleHilites> is `false` when setting the\n<hilitedItemNames>, then the first name in the <hilitedItemNames>\ndetermines which segment is highlighted, and the remainder of the\n<hilitedItemNames> are ignored.\n\nThe <hiliteChanged> message is sent when setting the\n<hilitedItemNames>, unless it doesn't change which segments are\nhighlighted.",
			"references":{
				"property":["hilitedItems","itemNames","multipleHilites"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"com.livecode.widget.segmented-12",
			"name":"itemminextents",
			"display name":"itemMinExtents",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the itemMinExtents of <widget>",
				"set the itemMinExtents of <widget> to <numberList>"
			],
			"display syntax":[
				"get the itemMinExtents of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The minimum width of each segment",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of positive numbers."
			}],
			"description":"The minimum width of each segment in the control.  Each of the\n<itemMinExtents> must be a positive number.\n\nWhen you set the <itemMinExtents> to a string that has fewer than\n<itemCount> numbers in it, the remaining segments are given a minimum\na width of 0.\n\nWhen you set the <itemMinExtents> to a string that has more than\n<itemCount> numbers in it, the extra numbers are ignored.",
			"references":{
				"property":["itemCount"]
			}
		},{
			"id":"com.livecode.widget.segmented-13",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the itemIcons of <widget>",
				"set the itemIcons of <widget> to <iconNames>"
			],
			"display syntax":[
				"get the itemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The icons displayed by each segment",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of icon names for the segments"
			}],
			"description":"The icons displayed for each segment in the control when not\nhighlighted.  The <itemIcons> are displayed by the widget when the\n<itemStyle> is set to show icons.\n\nThe <itemIcons> must each be one of the predefined graphics provided\nby the \"IconSVG\" library.  You can get a list of available predefined\npath names by running `put iconNames()` in the Message Box.  If any of\nthe <itemIcons> are empty, those segments have no icon when not\nhilited.\n\nWhen you set the <itemIcons> to a string that has fewer icon names\nthan the <itemCount>, the remaining segments' icons are set to empty\n(no icon).\n\nWhen you set the <itemIcons> to a string that has more icon names than\nthe <itemCount>, the extra icons are ignored.",
			"references":{
				"property":["itemCount","itemStyle","itemHilitedIcons","foreColor","hilitedItems"]
			}
		},{
			"id":"com.livecode.widget.segmented-14",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the hilitedItemIcons of <widget>",
				"set the hilitedItemIcons of <widget> to <iconNames>"
			],
			"display syntax":[
				"get the hilitedItemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The icons displayed by each segment when highlighted",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of icon names for the segments"
			}],
			"description":"The icons displayed for each segment in the control when highlighted.\nThe <hilitedItemIcons> are displayed by the widget when the\n<itemStyle> is set to show icons.\n\nEach icon name must be one of the predefined graphics provided by the\n\"IconSVG\" library.  You can get a list of available predefined path\nnames by running `put iconNames()` in the Message Box.  If any of the\n<hilitedItemIcons> are empty, those segments have no icon when\nhilited.\n\nWhen you set the <hilitedItemIcons> to a string that has fewer icon\nnames than the <itemCount>, the remaining segments' icons are set to\nempty (no icon).\n\nWhen you set the <hilitedItemIcons> to a string that has more icon\nnames than the <itemCount>, the extra icons are ignored.",
			"references":{
				"property":["itemCount","itemStyle","itemIcons","foreColor","hilitedItems"]
			}
		},{
			"id":"com.livecode.widget.segmented-15",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the itemStyle of <widget>",
				"set the itemStyle of <widget> to <segmentStyle>"
			],
			"display syntax":[
				"get the itemStyle of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The segment display style",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The way that segments are displayed\n- \"icons\": Show the icons\n- \"text\": Show the labels"
			}],
			"description":"Determines whether segments of the segmented control are displayed\nwith their <itemIcons|icons> or their <itemLabels|labels>.",
			"references":{
				"property":["itemIcons","hilitedItemIcons","itemLabels"]
			}
		},{
			"id":"com.livecode.widget.segmented-16",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the itemNames of <widget>",
				"set the itemNames of <widget> to <nameList>"
			],
			"display syntax":[
				"get the itemNames of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The names used to identify segments",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of names for the segments."
			}],
			"description":"The names of each segment in the control.  The <itemNames> can be a\nmore convenient way to identify the segments than by their positions.\n\nYou are recommended to use a non-empty, unique name for each segment.\n\nWhen you set the <itemNames> to a string that has fewer names than\nthe <itemCount>, the remaining segments' names are set to empty.\n\nWhen you set the <itemNames> to a string that that has more names than\nthe <itemCount>, the extra names are ignored.",
			"references":{
				"property":["itemLabels","hilitedItemNames"]
			}
		},{
			"id":"com.livecode.widget.segmented-17",
			"name":"togglehilites",
			"display name":"toggleHilites",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the toggleHilites of <widget>",
				"set the toggleHilites of <widget> to {true | false}"
			],
			"display syntax":[
				"get the toggleHilites of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"Whether a segment can be unhighlighted by clicking",
			"description":"The <toggleHilites> property controls whether a click on\na highlighted segment causes it to be unhighlighted or not."
		},{
			"id":"com.livecode.widget.segmented-18",
			"name":"horizontal",
			"display name":"horizontal",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the horizontal of <widget>",
				"set the horizontal of <widget> to {true | false}"
			],
			"display syntax":[
				"get the horizontal of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"Whether the segmented widget is horizontal or not",
			"description":"Use the <horizontal> property to control whether the segmented widget\nis laid out horizontally or vertically."
		},{
			"id":"com.livecode.widget.segmented-19",
			"name":"cornerradius",
			"display name":"cornerRadius",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the cornerRadius of <widget>",
				"set the cornerRadius of <widget> to <value>"
			],
			"display syntax":[
				"get the cornerRadius of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The corner radius of the widget",
			"description":"The cornerRadius is the radius (in pixels) of the corner curve of the <widget>. The default value is usually suitable for horizantal orientations, however with a vertical orientation, depending on the size of the labels, you may wish to adjust."
		},{
			"id":"com.livecode.widget.segmented-20",
			"name":"itemcount",
			"display name":"itemCount",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the itemCount of <widget>",
				"set the itemCount of <widget> to <number>"
			],
			"display syntax":[
				"get the itemCount of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The number of segments shown",
			"description":"The <itemCount> property can be used to obtain or to set the number of\nsegments shown by the segmented control.\n\nWhen you set the <itemCount> to a number larger than the current\nnumber of segments in the control, new segments are added to the end\nof the control with unique <itemNames|names> and <itemLabels|labels>.\n\nWhen you set the <itemCount> to a number smaller than the current\nnumber of segments in the control, segments are discarded from the end\nof the control.  If this results in discarding a segment that's\ncurrently highlighted, the <hiliteChanged> message may be sent.\n\nThe segmented control must always have at least one segment.",
			"references":{
				"property":["itemNames","itemLabels"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"com.livecode.widget.segmented-21",
			"name":"hilitedtextcolor",
			"display name":"hilitedTextColor",
			"library":"com.livecode.widget.segmented",
			"type":"property",
			"syntax":[
				"get the hilitedTextColor of <widget>",
				"set the hilitedTextColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the hilitedTextColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"The label or icon color for highlighted segments",
			"description":"The <hilitedTextColor> property controls the color used to draw\nsegments' labels or icons when they are highlighted.",
			"references":{
				"property":["foreColor"]
			}
		}