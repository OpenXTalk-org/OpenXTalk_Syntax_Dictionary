{
			"id":"com.livecode.widget.treeview-1",
			"name":"com.livecode.widget.treeview",
			"display name":"Tree View",
			"library":"com.livecode.widget.treeview",
			"type":"widget",
			"display syntax":[
				"Tree View"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"A widget to display array data in a tree view",
			"description":"A widget to display array data in a tree view"
		},{
			"id":"com.livecode.widget.treeview-2",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"com.livecode.widget.treeview",
			"type":"message",
			"syntax":[
				"hiliteChanged"
			],
			"display syntax":[
				"hiliteChanged"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Sent when an element is hilited",
			"description":"The <hiliteChanged> message is sent to the widget's script object when a row of the \nwidget's display is clicked on, causing that row to be highlighted. Use the <hilitedElement>\nproperty to fetch the row's associated array keys.",
			"references":{
				"property":["hilitedElement"]
			}
		},{
			"id":"com.livecode.widget.treeview-3",
			"name":"datachanged",
			"display name":"dataChanged",
			"library":"com.livecode.widget.treeview",
			"type":"message",
			"syntax":[
				"dataChanged"
			],
			"display syntax":[
				"dataChanged"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Sent when the arrayData of the widget changes",
			"description":"The <dataChanged> message is sent to the widget's script object when the underlying\n<arrayData> of the tree view changes.",
			"references":{
				"property":["arrayData"]
			}
		},{
			"id":"com.livecode.widget.treeview-4",
			"name":"actioninspect",
			"display name":"actionInspect",
			"library":"com.livecode.widget.treeview",
			"type":"message",
			"syntax":[
				"actionInspect <pPath>"
			],
			"display syntax":[
				"actionInspect <i>pPath</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Sent when an the inspect icon is clicked in read only mode",
			"parameters":[{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"The path to the clicked element"
			}],
			"description":"The actionInspect message is sent to the widget's script object when the inspect icon is clicked on.\nThe inspect icon appears when the value string of a particular array element contains a newline character,\nor if it is too large to fit in the space provided. The <pPath> parameter contains the path to the \nelement whose icon was clicked."
		},{
			"id":"com.livecode.widget.treeview-5",
			"name":"actiondoubleclick",
			"display name":"actionDoubleClick",
			"library":"com.livecode.widget.treeview",
			"type":"message",
			"syntax":[
				"actionDoubleClick <pPath>"
			],
			"display syntax":[
				"actionDoubleClick <i>pPath</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Sent when a leaf node of the tree view is double-clicked.",
			"parameters":[{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"The path to the clicked element"
			}],
			"description":"The actionDoubleClick message is sent to the widget's script object when a row of the widget\nis double-clicked. The <pPath> parameter contains the path to the element whose row was clicked."
		},{
			"id":"com.livecode.widget.treeview-6",
			"name":"formattedheightchanged",
			"display name":"formattedHeightChanged",
			"library":"com.livecode.widget.treeview",
			"type":"message",
			"syntax":[
				"formattedHeightChanged"
			],
			"display syntax":[
				"formattedHeightChanged"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Sent when the formatted height of the displayed data changes.",
			"description":"The formattedHeightChanged message is sent to the widget's script object when\nthe formatted height of the displayed data changes.  This is useful when\nusing a mobileScroller to control the widget view."
		},{
			"id":"com.livecode.widget.treeview-7",
			"name":"scroll",
			"display name":"scroll",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the vScroll of <widget>",
				"get the scroll of <widget>",
				"set the scroll of <widget> to <pScroll>"
			],
			"display syntax":[
				"get the vScroll of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Vertical scroll position of the widget",
			"parameters":[{
				"name":"pScroll",
				"type":"",
				"refparam":"false",
				"description":"Vertical scroll position of the widget"
			}],
			"description":"Use the <scroll> property to get or set the scroll position of\nthe widget."
		},{
			"id":"com.livecode.widget.treeview-8",
			"name":"sorttype",
			"display name":"sortType",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the sortType of <widget>",
				"set the sortType of <widget> to <pType>"
			],
			"display syntax":[
				"get the sortType of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Manipulates the type of ordering in which elements of the tree view are displayed.",
			"parameters":[{
				"name":"pType",
				"type":"",
				"refparam":"false",
				"description":"The type of ordering to use in displaying elements of the tree view.\n- \"text\": Display in alphabetical order of the keys\n- \"numeric\": Display in numeric order of the keys. This is the default"
			}],
			"description":"Use the <sortType> property to use text or numeric comparison when ordering the keys of the <arrayData>\nof the tree view widget.",
			"references":{
				"property":["sortOrder"]
			}
		},{
			"id":"com.livecode.widget.treeview-9",
			"name":"vscrollbar",
			"display name":"vScrollbar",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"set the vScrollbar of <widget> to <pEnabled>\nget the vScrollbar of <widget>"
			],
			"display syntax":[
				"set the vScrollbar of <i>widget</i> to <i>pEnabled</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Controls the visibility of the browser's vertical scrollbar.",
			"value":[{
				"name":"value",
				"type":"boolean",
				"description":"`true` if the vertical scrollbar should be enabled and displayed;\n`false` otherwise."
			}],
			"description":"Use the <vScrollbar> property to control the visibility of the widget's\nvertical scrollbar"
		},{
			"id":"com.livecode.widget.treeview-10",
			"name":"alternaterowbackgrounds",
			"display name":"alternateRowBackgrounds",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the alternateRowBackgrounds of <widget>",
				"set the alternateRowBackgrounds of <widget> to {true|false}"
			],
			"display syntax":[
				"get the alternateRowBackgrounds of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the alternate rows of the widget have different backgrounds or not.",
			"description":"Use the alternateRowBackgrounds property if you want to more clearly distinguish the rows displayed by the widget."
		},{
			"id":"com.livecode.widget.treeview-11",
			"name":"showvalues",
			"display name":"showValues",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the showValues of <widget>",
				"set the showValues of <widget> to {true|false}"
			],
			"display syntax":[
				"get the showValues of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the values are displayed or not",
			"description":"Use the <showValues> property to display or hide the values of the <arrayData>  \nof the tree view widget.  This setting will be useful when using the\nwidget as a menu for navigation purposes.\n\nHiding values effectively hides the separator as well.",
			"references":{
				"property":["showSeparator"]
			}
		},{
			"id":"com.livecode.widget.treeview-12",
			"name":"pathdelimiter",
			"display name":"pathDelimiter",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the pathDelimiter of <widget>",
				"set the pathDelimiter of <widget> to <pType>"
			],
			"display syntax":[
				"get the pathDelimiter of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Manipulates the separator between the elements of the array viewer",
			"description":"Use the <pathDelimiter> property as the separator between the elements describing\na path in the tree view widget."
		},{
			"id":"com.livecode.widget.treeview-13",
			"name":"sortorder",
			"display name":"sortOrder",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the sortOrder of <widget>",
				"set the sortOrder of <widget> to <pOrder>"
			],
			"display syntax":[
				"get the sortOrder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Manipulates the order in which elements of the tree view are displayed, with respect to the current <sortType>.",
			"parameters":[{
				"name":"pOrder",
				"type":"",
				"refparam":"false",
				"description":"The order in which to display elements of the tree view.\n- \"ascending\": Display from first to last in the order. This is the default\n- \"descending\": Display from last to first in the order."
			}],
			"description":"Use the <sortOrder> property to display the elements of the tree view in ascending or descending order of the\nkeys of its <arrayData>, given the current <sortType>.",
			"references":{
				"property":["arrayData","sortType"]
			}
		},{
			"id":"com.livecode.widget.treeview-14",
			"name":"hilitedelementisfolded",
			"display name":"hilitedElementIsFolded",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the hilitedElementIsFolded of <widget>",
				"set the hilitedElementIsFolded of <widget> to {true|false}"
			],
			"display syntax":[
				"get the hilitedElementIsFolded of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Determine if the selected element is folded",
			"description":"Value is true if the selected element is folded.  False is returned in\nall other cases including when nothing is selected and when a leaf node is\nselected.  When setting the fold state, attempts to set the value for a leaf \nnode will have no effect.  Setting the fold state when no element is selected \nhas no effect."
		},{
			"id":"com.livecode.widget.treeview-15",
			"name":"iconheight",
			"display name":"iconHeight",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the iconHeight of <widget>",
				"set the iconHeight of <widget> to <pIconHeight>"
			],
			"display syntax":[
				"get the iconHeight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Custom icon height for the widget",
			"parameters":[{
				"name":"pIconHeight",
				"type":"",
				"refparam":"false",
				"description":"Custom icon height for the widget"
			}],
			"description":"Use the <iconHeight> property to set a custom icon size for\nthe widget.  The default value is 10."
		},{
			"id":"com.livecode.widget.treeview-16",
			"name":"foldstate",
			"display name":"foldState",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the foldState of <widget>",
				"set the foldState of <widget> to <pFoldState>"
			],
			"display syntax":[
				"get the foldState of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"The fold state of the array being displayed by the widget",
			"parameters":[{
				"name":"pFoldState",
				"type":"",
				"refparam":"false",
				"description":"The fold state data.  See description for details."
			}],
			"description":"The foldState is the fold state currently being displayed by the tree view widget.\n\nThe fold state array only contains elements of the data array where the\nvalue is a subarray.  The value for each `folded` key must be a boolean.\nOnly the unfolded keys need to be specified.\n\n```\n\t[key1]\n\t\t[\"folded\"]\n\t\t[\"array\"]\n\t\t\t[subkey1]\n\t\t\t\t[\"folded\"]\n\t[key2]\n\t\t[\"folded\"]\n```\n\nSetting the foldState to empty will fold all keys."
		},{
			"id":"com.livecode.widget.treeview-17",
			"name":"showseparator",
			"display name":"showSeparator",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the showSeparator of <widget>",
				"set the showSeparator of <widget> to {true|false}"
			],
			"display syntax":[
				"get the showSeparator of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the separator bar between keys and values is showing or not",
			"description":"Use the <showSeparator> property to display the keys and values of the <arrayData>  \nof the tree view widget in columns separated by a movable divide.",
			"references":{
				"property":["separatorRatio"]
			}
		},{
			"id":"com.livecode.widget.treeview-18",
			"name":"hilitedelementfoldstate",
			"display name":"hilitedElementFoldState",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the hilitedElementFoldState of <widget>",
				"set the hilitedElementFoldState of <widget> to <pFoldState>"
			],
			"display syntax":[
				"get the hilitedElementFoldState of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Get/set the fold state of the selected element",
			"parameters":[{
				"name":"pFoldState",
				"type":"",
				"refparam":"false",
				"description":"The fold state of the selected element.\n- \"folded\": Sub-array for the selected element is hidden.\n- \"unfolded\": Sub-array for the selected element is visible.\n- \"leaf\": Selected element is a leaf node.  This value may not be set."
			}],
			"description":"<pFoldState> is the fold state of the selected element.  When setting\nthe fold state, attempts to set the value for a leaf node will have no\neffect.  Setting the fold state when no element is selected has no effect."
		},{
			"id":"com.livecode.widget.treeview-19",
			"name":"arraydata",
			"display name":"arrayData",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the arrayData of <widget>",
				"set the arrayData of <widget> to <pArray>"
			],
			"display syntax":[
				"get the arrayData of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"The array being displayed by the widget",
			"parameters":[{
				"name":"pArray",
				"type":"",
				"refparam":"false",
				"description":"The array data."
			}],
			"description":"The arrayData is the data currently being displayed by the tree view widget."
		},{
			"id":"com.livecode.widget.treeview-20",
			"name":"separatorratio",
			"display name":"separatorRatio",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the separatorRatio of <widget>",
				"set the separatorRatio of <widget> to {true|false}"
			],
			"display syntax":[
				"get the separatorRatio of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Manipulates the size of the arrayData view columns.",
			"description":"Use the <separatorRatio> property to display the keys and values of the <arrayData>  \nof the tree view widget in columns separated by a movable divide.\n\nThe <separatorRatio> is the size of the first column as a ratio of the total view area.",
			"references":{
				"property":["showSeparator"]
			}
		},{
			"id":"com.livecode.widget.treeview-21",
			"name":"hilitenewelement",
			"display name":"hiliteNewElement",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the hiliteNewElement of <widget>",
				"set the hiliteNewElement of <widget> to {true|false}"
			],
			"display syntax":[
				"get the hiliteNewElement of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Automatically select new elements when created interactively.",
			"description":"If the <readOnly> property is false and the <hiliteNewElement> property is true,\nthen when new array elements are added, they will be automatically selected.",
			"references":{
				"property":["readOnly"]
			}
		},{
			"id":"com.livecode.widget.treeview-22",
			"name":"scrollhilitedelementintoview",
			"display name":"scrollHilitedElementIntoView",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the scrollHilitedElementIntoView of <widget>",
				"set the scrollHilitedElementIntoView of <widget> to {true|false}"
			],
			"display syntax":[
				"get the scrollHilitedElementIntoView of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Automatically scroll selected row into view.",
			"description":"If the <scrollHilitedElementIntoView> property is true, then when the \n<hilitedElement> property changes the view will be scrolled such that the \nselected row is visible.",
			"references":{
				"property":["hilitedElement"]
			}
		},{
			"id":"com.livecode.widget.treeview-23",
			"name":"charstotrimfromkey",
			"display name":"charsToTrimFromKey",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the charsToTrimFromKey of <widget>",
				"set the charsToTrimFromKey of <widget> to <pChars>"
			],
			"display syntax":[
				"get the charsToTrimFromKey of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"The number of leading characters to trim from the key for display.",
			"parameters":[{
				"name":"pChars",
				"type":"",
				"refparam":"false",
				"description":"Number of leading characters to trim from the key."
			}],
			"description":"The <charsToTrimFromKey> property controls the number of leading characters that \nare removed from the keys of the <arrayData> of the widget.  This allows\na custom sort where the sort portion of the key is not displayed.\n\nWith <charsToTrimFromKey> set to 2, the following array:\n```\n\t[1 CCC]\n\t[2 BBB]\n\t[3 AAA]\n```\n\nWould display in the widget as:\n```\n[CCC]\n[BBB]\n[AAA]\n```",
			"references":{
				"property":["arrayData"]
			}
		},{
			"id":"com.livecode.widget.treeview-24",
			"name":"showhover",
			"display name":"showHover",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the showHover of <widget>",
				"set the showHover of <widget> to {true|false}"
			],
			"display syntax":[
				"get the showHover of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the widget has a hover row displayed or not.",
			"description":"Use the <showHover> property to show or hide the hover row of the widget \nobject."
		},{
			"id":"com.livecode.widget.treeview-25",
			"name":"autofoldstatereset",
			"display name":"autoFoldStateReset",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the autoFoldStateReset of <widget>",
				"set the autoFoldStateReset of <widget> to {true|false}"
			],
			"display syntax":[
				"get the autoFoldStateReset of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Automatically reset fold state when array data is set.",
			"description":"Use the <autoFoldStateReset> property to determine if the fold state is\nreset (tree is completely folded) when the <arrayData> property is set.",
			"references":{
				"property":["arrayData"]
			}
		},{
			"id":"com.livecode.widget.treeview-26",
			"name":"formattedheight",
			"display name":"formattedHeight",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the formattedHeight of <widget>"
			],
			"display syntax":[
				"get the formattedHeight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Height of the data displayed by the widget",
			"description":"Use the <formattedHeight> property to get the height of the data displayed\nby the widget in the current fold state."
		},{
			"id":"com.livecode.widget.treeview-27",
			"name":"arraystyle",
			"display name":"arrayStyle",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the arrayStyle of <widget>",
				"set the arrayStyle of <widget> to {true|false}"
			],
			"display syntax":[
				"get the arrayStyle of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the tree view should display its contents in array style or as a standard tree view.",
			"description":"The <arrayStyle> property controls whether the keys of the <arrayData> of the widget are displayed with\nsquare brackets around them or not.",
			"references":{
				"property":["arrayData"]
			}
		},{
			"id":"com.livecode.widget.treeview-28",
			"name":"hilitedelement",
			"display name":"hilitedElement",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the hilitedElement of <widget>",
				"set the hilitedElement of <widget> to <pPath>"
			],
			"display syntax":[
				"get the hilitedElement of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Select the row corresponding to <pPath>",
			"parameters":[{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"A comma delimited list of array keys."
			}],
			"description":"<pPath> is a list of the keys which determine the row to be selected. For example, if tArray is the arrayData\nof the widget, to select a row corresponding to tArray[\"key1\"][\"subkey2\"][\"subsubkey5\"], simply execute\n\n``` set the hilitedElement of widget \"Array Viewer\" to \"key1,subkey2,subsubkey5\" ```\n\nSetting to an invalid path or to `empty` will unselect the currently selected row."
		},{
			"id":"com.livecode.widget.treeview-29",
			"name":"showborder",
			"display name":"showBorder",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to {true|false}"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the widget has a border or not.",
			"description":"Use the <showBorder> property to show or hide the bounds of the widget \nobject."
		},{
			"id":"com.livecode.widget.treeview-30",
			"name":"readonly",
			"display name":"readOnly",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the readOnly of <widget>",
				"set the readOnly of <widget> to {true|false}"
			],
			"display syntax":[
				"get the readOnly of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Whether the options to modify elements of the underlying array are present or not.",
			"description":"The <readOnly> property controls whether the widget presents the option to add elements to arrays or not.\nIf false, the first row of the widget is always \"Add new element\", and when rows are hovered over, icons\nappear at the right to enable the removal of that element, or the addition of a new subelement."
		},{
			"id":"com.livecode.widget.treeview-31",
			"name":"textheight",
			"display name":"textHeight",
			"library":"com.livecode.widget.treeview",
			"type":"property",
			"syntax":[
				"get the textHeight of <widget>",
				"set the textHeight of <widget> to <pTextHeight>"
			],
			"display syntax":[
				"get the textHeight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"Custom text height for the widget",
			"parameters":[{
				"name":"pTextHeight",
				"type":"",
				"refparam":"false",
				"description":"Custom text height for the widget"
			}],
			"description":"Use the <textHeight> property to set a custom text (row) height for\nthe widget.  The default value is 0 which will use the calculated height\nbased on the currently selected font and size.\n"
		}