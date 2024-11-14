{
			"id":"builder-1",
			"name":"text",
			"display name":"text",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the text of <widget> to <pText>\nget the text of <widget>"
			],
			"display syntax":[
				"set the text of <i>widget</i> to <i>pText</i>"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"The text displayed by the widget",
			"OS":["mac"],
			"examples":[{
				"script":"local sEntered\non returnKey\n    -- store the entered text and clear the field\n    put the text of the target into sEntered\n    set the text of the target to empty\nend returnKey"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The text of the widget"
			}],
			"description":"Use the <text> property to get or set the text displayed\nby the field widget.\n"
		},{
			"id":"builder-2",
			"name":"com.livecode.widget.native.mac.textfield",
			"display name":"com.livecode.widget.native.mac.textfield",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.mac.textfield"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"This widget wraps the native NSTextField on Mac. Since this is\na single-line field, the return key does not enter a new line,\ninstead it triggers the returnKey action and the contents of\nthe field is selected.",
			"OS":["mac"],
			"description":"This widget wraps the native NSTextField on Mac. Since this is\na single-line field, the return key does not enter a new line,\ninstead it triggers the returnKey action and the contents of\nthe field is selected."
		},{
			"id":"builder-3",
			"name":"enabled",
			"display name":"enabled",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"The enabled state of the text field",
			"OS":["mac"],
			"description":"Use the <enabled> property to enable or disable the native field. When\ndisabled, the text has a greyed out appearance and the field contents\ncannot be edited."
		},{
			"id":"builder-4",
			"name":"returnkey",
			"display name":"returnKey",
			"library":"builder",
			"type":"message",
			"syntax":[
				"on returnKey"
			],
			"display syntax":[
				"on returnKey"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"Sent when the user presses the return key",
			"OS":["mac"],
			"examples":[{
				"script":"on returnKey\n    -- ensure the user has entered a number\n    if the text of the target is not a number then\n      beep\n      answer \"Invalid number entered!\"\n    end if\nend returnKey"
			}],
			"description":"Use the <returnKey> message to respond to the user pressing the return\nkey whilst the field is focused."
		},{
			"id":"builder-5",
			"name":"showfocusborder",
			"display name":"showFocusBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showFocusBorder of <widget> to { true | false }\nget the showFocusBorder of <widget>"
			],
			"display syntax":[
				"set the showFocusBorder of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"Whether the text field has a focus border or not",
			"OS":["mac"],
			"description":"Use the <showFocusBorder> property to control whether the field\nwidget displays a blue border when focused or not."
		},{
			"id":"builder-6",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showBorder of <widget> to { true | false }\nget the showBorder of <widget>"
			],
			"display syntax":[
				"set the showBorder of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.native.mac.textfield"],
			"summary":"Whether the text field has a border or not",
			"OS":["mac"],
			"description":"Use the <showBorder> property to control whether the field\nwidget has a border or not."
		},{
			"id":"builder-7",
			"name":"onmouseup",
			"display name":"OnMouseUp",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnMouseUp"
			],
			"display syntax":[
				"OnMouseUp"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the user releases the mouse button.",
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n    if the mouse position is not within my bounds then\n       return\n    end if\n\n    if the click button is 1 then\n       -- do primary button action\n    else\n       -- do secondary button action\n    end if\nend handler"
			}],
			"description":"The <OnMouseUp> message is sent when a mouse button is released.\n\n**Note:** A widget may receive the <OnMouseUp> message even if the\nmouse pointer isn't within the widget's bounds.",
			"references":{
				"expression":["TheClickButton","TheMouseLocation"]
			},
			"tags":["widget"]
		},{
			"id":"builder-8",
			"name":"ondragmove",
			"display name":"OnDragMove",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnDragMove"
			],
			"display syntax":[
				"OnDragMove"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when a dragged object is moved within the widget rect.",
			"description":"Sent when a dragged object is moved within the widget rect.",
			"tags":["widget"]
		},{
			"id":"builder-9",
			"name":"theclickbutton",
			"display name":"TheClickButton",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the ( current ) click button"
			],
			"display syntax":[
				"the ( current ) click button"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines the mouse button which started the mouse click.",
			"examples":[{
				"script":"    variable tButton as integer\n    put the click button into tButton\n\n    if tButton is 1 then\n        // do primary button action\n    else\n        // do secondary button action\n    end if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The index of the mouse button which started the mouse click."
			}],
			"description":"Determines the mouse button which started the mouse click.",
			"tags":["widget"]
		},{
			"id":"builder-10",
			"name":"mypaint",
			"display name":"MyPaint",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my ( foreground |             background |             highlight |             border |             top |             bottom |             shadow |             focus ) paint"
			],
			"display syntax":[
				"my ( foreground |             background |             highlight |             border |             top |             bottom |             shadow |             focus ) paint"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns a particular paint of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The current setting of the specified paint of the widget."
			}],
			"description":"Use 'my ... paint' to fetch the paint to use for the given theme\nproperty of the widget. The returned paint will either be a solid\ncolor, or a pattern depending on the effective color and pattern\nproperties of the widget's object.",
			"tags":["widget"]
		},{
			"id":"builder-11",
			"name":"onparentpropertychanged",
			"display name":"OnParentPropertyChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnParentPropertyChanged"
			],
			"display syntax":[
				"OnParentPropertyChanged"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when a property of the widget parent is changed.",
			"description":"Handle the <OnParentPropertyChanged> message when a widget property depends on the properties of a parent object.",
			"tags":["widget"]
		},{
			"id":"builder-12",
			"name":"ondoubleclick",
			"display name":"OnDoubleClick",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnDoubleClick"
			],
			"display syntax":[
				"OnDoubleClick"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is double-clicked.",
			"description":"Sent when the widget is double-clicked.",
			"tags":["widget"]
		},{
			"id":"builder-13",
			"name":"mydisabled",
			"display name":"MyDisabled",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my disabled"
			],
			"display syntax":[
				"my disabled"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the disabled state of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The disabled state of the widget."
			}],
			"description":"Returns the disabled state of the widget.",
			"tags":["widget"]
		},{
			"id":"builder-14",
			"name":"onmousecancelhover",
			"display name":"OnMouseCancelHover",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnMouseCancelHover"
			],
			"display syntax":[
				"OnMouseCancelHover"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer continues to hover outside of the widget's rect.",
			"description":"Sent when the mouse pointer continues to hover outside of the widget's rect.",
			"tags":["widget"]
		},{
			"id":"builder-15",
			"name":"ontimer",
			"display name":"OnTimer",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnTimer"
			],
			"display syntax":[
				"OnTimer"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when a timer message has been scheduled.",
			"examples":[{
				"script":"// Create a timer loop\npublic handler OnTimer()\n\t...\n\tschedule timer in 1 seconds\nend handler"
			}],
			"description":"Handle the <OnTimer> message to perform an action at a scheduled time.\n>*Note:* OnTimer messages are only sent whilst in browse tool mode. If a timer is\ndelivered whilst in pointer tool mode it will be deferred until browser tool mode is\nre-entered.",
			"references":{
				"statement":["ScheduleTimerIn"]
			},
			"tags":["widget"]
		},{
			"id":"builder-16",
			"name":"com.livecode.widget",
			"display name":"com.livecode.widget",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.widget"
			],
			"associations":["com.livecode.widget"],
			"summary":"This library consists of the operations on widgets provided by Extension Builder.",
			"description":"This library consists of the operations on widgets provided by Extension Builder."
		},{
			"id":"builder-17",
			"name":"propertyofwidget",
			"display name":"PropertyOfWidget",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"property <mName> of <mWidget>"
			],
			"display syntax":[
				"property <i>mName</i> of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates a property implemented by a child widget.",
			"parameters":[{
				"name":"mName",
				"type":"",
				"refparam":"false",
				"description":"The name of a property declared by <mWidget>"
			},{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"variable tChild as Widget\nput a new widget \"com.livecode.widget.navbar\" into tChild\nplace tChild\n-- Initialise selected element of nav bar to 1\nset property \"selectedItem\" of tChild to 1"
			}],
			"description":"Use the <PropertyOfWidget> operator to get or set properties of a child widget that are not and of the built-in\nwidget properties.",
			"tags":["widget"]
		},{
			"id":"builder-18",
			"name":"onlayerchanged",
			"display name":"OnLayerChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnLayerChanged"
			],
			"display syntax":[
				"OnLayerChanged"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget layer is changed.",
			"description":"Sent when the widget layer is changed.",
			"tags":["widget"]
		},{
			"id":"builder-19",
			"name":"onkeypress",
			"display name":"OnKeyPress",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnKeyPress <keyText>"
			],
			"display syntax":[
				"OnKeyPress <i>keyText</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when a key is pressed while the widget has focus.",
			"parameters":[{
				"name":"keyText",
				"type":"string",
				"refparam":"false",
				"description":"The key pressed"
			}],
			"description":"Sent when a key is pressed while the widget has focus.",
			"tags":["widget"]
		},{
			"id":"builder-20",
			"name":"mypixelscale",
			"display name":"MyPixelScale",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my pixel scale"
			],
			"display syntax":[
				"my pixel scale"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the scaling factor of pixels for the widget",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The current scaling factor of pixels for the widget"
			}],
			"description":"Use the widget's pixel scale to calculate the size of an image to draw. For example,\nwhen drawing an image to `my bounds` create an image sized using\n`my width * my pixel scale, my height * my pixel scale` otherwise the image will be\nstretched to match the pixel scale. The pixel scale is a per-window/screen property\nso may change if the user moves a window to a new screen.",
			"tags":["widget"]
		},{
			"id":"builder-21",
			"name":"theclicklocation",
			"display name":"TheClickLocation",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the ( current ) click position"
			],
			"display syntax":[
				"the ( current ) click position"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines the location of a mouse click.",
			"examples":[{
				"script":"variable tClick as Point\nput the click position into tClick\n\nvariable tRect as Rectangle\nput my bounds into tRect\n\nif tClick is within tRect then\n\t// click was within widget bounds\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The location of the mouse pointer when it was clicked."
			}],
			"description":"Use the mouse location to obtain the location of the mouse pointer when it was last clicked. Use the 'current' form to obtain the asynchronous click position.",
			"tags":["widget"]
		},{
			"id":"builder-22",
			"name":"onpaint",
			"display name":"OnPaint",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnPaint"
			],
			"display syntax":[
				"OnPaint"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is to be drawn.",
			"examples":[{
				"script":"public handler OnPaint()\n\tvariable tCirclePath as Path\n\tput circle path centered at point [the width of my bounds/2,the height of my bounds/2] with radius (the width of my bounds/2) into tFacePath\n\tset the paint of this canvas to solid paint with color [1, 0, 1]\n\tfill tFacePath on this canvas\nend handler"
			}],
			"description":"Handle the <OnPaint> message to draw the widget when it needs to be updated.\n>*Note:* Access to most script object operations is not allowed whilst an OnPaint\nhandler is running.",
			"references":{
				"statement":["RedrawAll"]
			},
			"tags":["widget"]
		},{
			"id":"builder-23",
			"name":"popupwidget",
			"display name":"PopupWidget",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"popup widget <Kind> at <Location> [ with properties <Properties> ]"
			],
			"display syntax":[
				"popup widget <i>Kind</i> at <i>Location</i> [ with properties <i>Properties</i> ]"
			],
			"associations":["com.livecode.widget"],
			"summary":"Opens a widget within a popup window.",
			"parameters":[{
				"name":"Kind",
				"type":"",
				"refparam":"false",
				"description":"The unique identifier of the widget to use for the popup."
			},{
				"name":"Location",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <Point> relative to the current widget. The topleft corner of the popup window will be placed here."
			},{
				"name":"Properties",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an <array>. For each key of the array, the popup widget will be initialized by setting that property to the value for that key."
			}],
			"examples":[{
				"script":"private variable mColor as Color\n\npublic handler OnClick()\n\tvariable tProperties as Array\n\tput the empty array into tProperties\n\tput mColor into tProperties[\"currentColor\"]\n\n\tpopup widget \"com.livecode.widget.ColorPicker\" at the mouse position with properties tProperties\n\tif the result is not nothing then\n\t\tput the result into mColor\n\t\tredraw all\n\tend if\nend handler\n\npublic handler OnPaint()\n\t...\n\tset the paint of this canvas to solid paint with color mColor\n\t...\nend handler"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The result returned by the popup. If the popup is dismissed (by clicking outside the bounds of the popup) this value will be nothing."
			}],
			"description":"Use to display a widget within a popup window, for example as a tooltip or picker dialog.",
			"references":{
				"expression":["IsPoppedUp"],
				"statement":["ClosePopupWithResult"],
				"operator":["IsDefined"]
			},
			"tags":["widget"]
		},{
			"id":"builder-24",
			"name":"onfocusleave",
			"display name":"OnFocusLeave",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnFocusLeave"
			],
			"display syntax":[
				"OnFocusLeave"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget loses focus.",
			"description":"Sent when the widget loses focus.",
			"tags":["widget"]
		},{
			"id":"builder-25",
			"name":"widgetlocationproperty",
			"display name":"WidgetLocationProperty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the location of <mWidget>"
			],
			"display syntax":[
				"the location of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the location property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    -- place the child widget at the center of this widget\n    variable tLoc as Point\n    put point [my width / 2, my height / 2] into tLoc\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\n    set the location of mChild to tLoc\nend handler"
			}],
			"description":"Use the location property to set the location of a child widget relative to the top left of the parent.\nThe location property is of type com.livecode.canvas.Point.",
			"tags":["widget"]
		},{
			"id":"builder-26",
			"name":"ondragenter",
			"display name":"OnDragEnter",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnDragEnter"
			],
			"display syntax":[
				"OnDragEnter"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when an object is dragged onto the widget rect.",
			"description":"Sent when an object is dragged onto the widget rect.",
			"tags":["widget"]
		},{
			"id":"builder-27",
			"name":"mynativelayer",
			"display name":"MyNativeLayer",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my native layer"
			],
			"display syntax":[
				"my native layer"
			],
			"associations":["com.livecode.widget"],
			"summary":"Get the current widget's native layer pointer",
			"value":[{
				"name":"return",
				"type":"",
				"description":"A platform-specific native layer pointer"
			}],
			"description":"Get the current widget's native layer pointer",
			"references":{
				"operator":["NativeLayerOfWidget"]
			},
			"tags":["widget","native layer"]
		},{
			"id":"builder-28",
			"name":"thiswidget",
			"display name":"ThisWidget",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"this widget"
			],
			"display syntax":[
				"this widget"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the current widget.",
			"examples":[{
				"script":"-- In a widget\nprivate variable mSelf as Widget\npublic handler OnCreate() returns nothing\n\t-- Keep a reference to this widget\n\tput this widget into mSelf\n\n\t-- defined in separate module library\n\tSetEventCallback(EventCallback)\nend handler\n\n-- may be called from another module library\nprivate handler EventCallback() returns nothing\n\t-- update internal variables\n\n\t-- notify ide of changes\n\ttrigger all in mSelf\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A widget object."
			}],
			"description":"This widget evaluates to the current widget. This can be used to retain a\nreference for occasions where widget handlers may be called from another module,\nwhere the current widget may not be valid.\n\nThis is useful when LCB handlers within a widget module are used as\nasynchronous callback functions passed to foreign functions, as these may be\ncalled at a time when the widget is not the currently active widget. Using the\nreference prevents updates being seen as coming from the wrong widget.",
			"tags":["widget"]
		},{
			"id":"builder-29",
			"name":"annotationofwidget",
			"display name":"AnnotationOfWidget",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"annotation <mName> of <mWidget>"
			],
			"display syntax":[
				"annotation <i>mName</i> of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates an annotation of a child widget",
			"examples":[{
				"script":"-- variable storing the last child widget the mouse was over\nvariable mLastChild as String\n\npublic handler OnCreate() returns nothing\n    variable tChildWidget as Widget\n    variable tCount as Number\n    repeat with tCount from 1 up to 10\n        put a new widget \"com.livecode.widget.button\" into tChildWidget\n        set annotation \"Name\" of tChildWidget to (\"Child\" && tCount formatted as string)\n    end repeat\nend handler\n\npublic handler OnMouseEnter() returns nothing\n    if the target is not nothing then\n        put annotation \"Name\" of the target into mLastChild\n    end if\nend handler"
			}],
			"description":"An annotation is a named value assigned to a widget. They do not affect any intrinsic properties of the widget are are intended\nto be used to disambiguate widget objects returned from operators such as <TheTarget> or <MyChildren>.",
			"references":{
				"operator":["TheTarget","MyChildren"]
			},
			"tags":["widget"]
		},{
			"id":"builder-30",
			"name":"onsave",
			"display name":"OnSave",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnSave"
			],
			"display syntax":[
				"OnSave"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is saved.",
			"description":"Handler the <OnSave> message to execute code when a stack containing the widget is saved.\n>*Note:* Access to most script object operations is not allowed whilst an <OnSave>\nhandler is running.",
			"tags":["widget"]
		},{
			"id":"builder-31",
			"name":"nativelayerofwidget",
			"display name":"NativeLayerOfWidget",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"native layer of <Widget>"
			],
			"display syntax":[
				"native layer of <i>Widget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Get a widget's native layer pointer",
			"parameters":[{
				"name":"Widget",
				"type":"",
				"refparam":"false",
				"description":"The widget to examine"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A platform-specific native layer pointer"
			}],
			"description":"Get a widget's native layer pointer",
			"references":{
				"expression":["MyNativeLayer"]
			},
			"tags":["widget","native layer"]
		},{
			"id":"builder-32",
			"name":"widgetrectangleproperty",
			"display name":"WidgetRectangleProperty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the rectangle of <mWidget>"
			],
			"display syntax":[
				"the rectangle of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the rectangle property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\nend handler\n\npublic handler OnGeometryChanged() returns nothing\n    -- ensure child widget rect is that of the parent\n    set the rectangle of mChild to my bounds\nend handler"
			}],
			"description":"Use the rectangle property to set the rectangle of a child widget.",
			"tags":["widget"]
		},{
			"id":"builder-33",
			"name":"anewwidget",
			"display name":"ANewWidget",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"a new widget <mKind>"
			],
			"display syntax":[
				"a new widget <i>mKind</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Create a widget object of the specified kind",
			"examples":[{
				"script":"variable tNavbar as Widget\nput a new widget \"com.livecode.widget.navbar\" into tNavbar"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A widget object."
			}],
			"description":"Create a new widget object of the specified kind. The widget can then be placed with the <PlaceWidget|place> statement.",
			"references":{
				"statement":["PlaceWidget"]
			},
			"tags":["widget"]
		},{
			"id":"builder-34",
			"name":"onmousescroll",
			"display name":"OnMouseScroll",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnMouseScroll"
			],
			"display syntax":[
				"OnMouseScroll"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse wheel is scrolled within the widget's rect.",
			"description":"Sent when the mouse wheel is scrolled within the widget's rect.",
			"tags":["widget"]
		},{
			"id":"builder-35",
			"name":"widgetenabledproperty",
			"display name":"WidgetEnabledProperty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the enabled of <mWidget>"
			],
			"display syntax":[
				"the enabled of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the enabled property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\n    -- mChild is initially disabled\n    set the enabled of mChild to false\nend handler"
			}],
			"description":"Use the enabled property to control the disabled/enabled state of child widgets.\nThe child widget can change its appearance and behavior based on the result of the '<MyEnabled|my enabled>' expression.",
			"references":{
				"expression":["MyDisabled"]
			},
			"tags":["widget"]
		},{
			"id":"builder-36",
			"name":"ondestroy",
			"display name":"OnDestroy",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnDestroy"
			],
			"display syntax":[
				"OnDestroy"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is deleted.",
			"description":"Handle the OnDestroy message to have the widget perform an action when it is deleted.",
			"tags":["widget"]
		},{
			"id":"builder-37",
			"name":"ontouchstart",
			"display name":"OnTouchStart",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnTouchStart"
			],
			"display syntax":[
				"OnTouchStart"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is the target for touch events and a touch is started.",
			"description":"The widget becomes the target for touch events when the first touch is\nwithin its rect. The widget remains the target for touch events until\nall touches end or are cancelled.",
			"tags":["widget"]
		},{
			"id":"builder-38",
			"name":"onopen",
			"display name":"OnOpen",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnOpen"
			],
			"display syntax":[
				"OnOpen"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the card containing the widget becomes the current card.",
			"examples":[{
				"script":"public handler OnOpen()\n  \t\t-- Schedule a timer to perform an action every 5 seconds\n \t\t schedule timer in 5 seconds\nend handler"
			}],
			"description":"Handle the <OnOpen> message to have the widget perform an action when the card containing the widget becomes the current card, for example setting default values of instance variables.",
			"tags":["widget"]
		},{
			"id":"builder-39",
			"name":"ondragstart",
			"display name":"OnDragStart",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnDragStart"
			],
			"display syntax":[
				"OnDragStart"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget begins to be dragged",
			"description":"Sent when the widget begins to be dragged",
			"tags":["widget"]
		},{
			"id":"builder-40",
			"name":"ontouchmove",
			"display name":"OnTouchMove",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnTouchMove"
			],
			"display syntax":[
				"OnTouchMove"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent to the target for touch events when a touch moves.",
			"description":"Sent to the target for touch events when a touch moves.",
			"tags":["widget"]
		},{
			"id":"builder-41",
			"name":"themouselocation",
			"display name":"TheMouseLocation",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the ( current ) mouse position"
			],
			"display syntax":[
				"the ( current ) mouse position"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines the location of the mouse pointer relative to the widget.",
			"examples":[{
				"script":"variable tPosition as Point\nput the mouse position into tPosition\n\nvariable tRect as Rectangle\nput my bounds into tRect\n\nif tPosition is within tRect then\n\t// mouse position is within the widget bounds\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The location of the mouse pointer."
			}],
			"description":"Use the 'current' form to obtain the asynchronous mouse position.",
			"tags":["widget"]
		},{
			"id":"builder-42",
			"name":"ongeometrychanged",
			"display name":"OnGeometryChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnGeometryChanged"
			],
			"display syntax":[
				"OnGeometryChanged"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget geometry changed.",
			"examples":[{
				"script":"private variable mLabel as String\n\npublic handler OnGeometryChanged()\n\tif my width is not my height then\n\t\tput \"Rectangle\" into mLabel\n\telse\n\t\tput \"Square\" into mLabel\n\tend if\n\tredraw all\nend handler"
			}],
			"description":"Handle the <OnGeometryChanged> message to perform specific actions that depend on the geometry of the widget, for example the locations on the canvas where parts of the widget are drawn.",
			"tags":["widget"]
		},{
			"id":"builder-43",
			"name":"myname",
			"display name":"MyName",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my name"
			],
			"display syntax":[
				"my name"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the name of the widget's script object",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The name of the widget's script object"
			}],
			"description":"Returns the name of the widget's script object",
			"tags":["widget"]
		},{
			"id":"builder-44",
			"name":"onstartediting",
			"display name":"OnStartEditing",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnStartEditing"
			],
			"display syntax":[
				"OnStartEditing"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the pointer tool is selected.",
			"description":"Handle the <OnStartEditing> message to perform an action when the edit tool is selected.",
			"tags":["widget"]
		},{
			"id":"builder-45",
			"name":"thetarget",
			"display name":"TheTarget",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the target"
			],
			"display syntax":[
				"the target"
			],
			"associations":["com.livecode.widget"],
			"summary":"The child widget that started the current execution.",
			"examples":[{
				"script":"-- In the child widget\npublic handler OnMouseUp() returns nothing\n    -- handled in the parent\nend handler\n\n-- in the parent\npublic handler OnMouseUp() returns nothing\n    variable tComponent as optional Widget\n    put the target into tComponent\n    if tComponent is not nothing then\n        variable tName as String\n        put annotation \"Name\" of tComponent into tName\n        -- notify the parent or the script object which component was clicked\n        post \"componentClicked\" with [tName]\n    else\n        -- the mouseUp was not over a child widget\n    end if\nend handler"
			},{
				"script":"-- In the child widget\npublic handler OnClick() returns nothing\n    post \"componentClicked\"\nend handler\n\n-- In the parent widget\npublic handler OnComponentClicked() returns nothing\n    variable tComponent as optional Widget\n    put the target into tComponent\n    if tComponent is not nothing then\n        variable tName as String\n        put annotation \"Name\" of tComponent into tName\n        -- notify the parent or the script object which component was clicked\n        post \"componentClicked\" with [tName]\n    end if\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A widget object."
			}],
			"description":"The target evaluates to either the first widget object in a chain of event handlers (eg <OnMouseUp>)\nor the widget from which a message was <Post|posted>.",
			"tags":["widget"]
		},{
			"id":"builder-46",
			"name":"thetouchids",
			"display name":"TheTouchIDs",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the touch ids"
			],
			"display syntax":[
				"the touch ids"
			],
			"associations":["com.livecode.widget"],
			"summary":"The touch IDs",
			"examples":[{
				"script":"variable tIDs as optional List\nput the touch ids into tIDs\nif tIDs is not nothing then\n    variable tPosition as Point\n    put the position of touch tIDs[1] into tPosition\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The a list of currently active touch IDs"
			}],
			"description":"The touch IDs",
			"tags":["widget"]
		},{
			"id":"builder-47",
			"name":"onactionkeypress",
			"display name":"OnActionKeyPress",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnActionKeyPress <keyText>"
			],
			"display syntax":[
				"OnActionKeyPress <i>keyText</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when an action key is pressed while the widget has focus.",
			"parameters":[{
				"name":"keyText",
				"type":"string",
				"refparam":"false",
				"description":"The key pressed"
			}],
			"description":"Sent when an action key is pressed while the widget has focus.",
			"tags":["widget"]
		},{
			"id":"builder-48",
			"name":"widgetfontproperty",
			"display name":"WidgetFontProperty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the font of <Widget>"
			],
			"display syntax":[
				"the font of <i>Widget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"The font of a widget",
			"parameters":[{
				"name":"Widget",
				"type":"",
				"refparam":"false",
				"description":"The widget to examine"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A font handle for the widget's effective font"
			}],
			"description":"Return a font which reflects the current (effective) settings of\n<Widget>'s LiveCode `textFont`, `textSize` and `textStyle` properties.",
			"references":{
				"expression":["MyFont"]
			},
			"tags":["widget"]
		},{
			"id":"builder-49",
			"name":"theclickcount",
			"display name":"TheClickCount",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the ( current ) click count"
			],
			"display syntax":[
				"the ( current ) click count"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines the number of successive clicks within the click distance.",
			"examples":[{
				"script":"    variable tClickCount as integer\n    put the click count into tClickCount\n\n    if tClickCount is 1 then\n        // do single click action\n    else if tClickCount is 2 then\n        // do double click action\n    end if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of clicks which have occurred since the initial click within the standard 'click distance' from the original point."
			}],
			"description":"Determines the number of successive clicks within the click distance.",
			"tags":["widget"]
		},{
			"id":"builder-50",
			"name":"thetouchid",
			"display name":"TheTouchId",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the touch id"
			],
			"display syntax":[
				"the touch id"
			],
			"associations":["com.livecode.widget"],
			"summary":"The id of the current touch",
			"examples":[{
				"script":"   variable tID as Number\n   put the touch id into tID\n\n   variable tPosition as Point\n   put the position of touch tID into tPosition"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An integer id for the current touch"
			}],
			"description":"The id of the current touch",
			"tags":["widget"]
		},{
			"id":"builder-51",
			"name":"closepopupwithresult",
			"display name":"ClosePopupWithResult",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"close popup [ returning <Result> ]"
			],
			"display syntax":[
				"close popup [ returning <i>Result</i> ]"
			],
			"associations":["com.livecode.widget"],
			"summary":"Closes the current widget popup.",
			"parameters":[{
				"name":"Result",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to any type. The result of popping up this widget."
			}],
			"examples":[{
				"script":"variable mSelected\n\npublic handler OnClick()\n\tvariable tOption\n\tput getOptionAtPosition(the click position) into tOption\n\tif tOption is not empty then\n\t\tput tOption into mSelected\n\n\t\t// If this widget is being used as a popup then we close the popup and return a value to the caller\n\t\tif currently popped up then\n\t\t\tif mSelected is \"Cancel\" then\n\t\t\t\t// Dismiss the popup without returning a value - the result will be nothing\n\t\t\t\tclose popup\n\t\t\telse\n\t\t\t\t// Dismiss the popup - the result will be the value of mSelected\n\t\t\t\tclose popup returning mSelected\n\t\t\tend if\n\t\tend if\n\tend if\nend handler\n\nprivate handler getOptionAtPosition(in pPosition as Point) returns String\n\t// Return the name of the option at the given point\n\t...\nend handler"
			}],
			"description":"Use to close the current popup, and optionally set a return value for the <PopupWidget> statement that launched it.",
			"references":{
				"statement":["PopupWidget"],
				"expression":["IsPoppedUp"]
			},
			"tags":["widget"]
		},{
			"id":"builder-52",
			"name":"redrawall",
			"display name":"RedrawAll",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"redraw all"
			],
			"display syntax":[
				"redraw all"
			],
			"associations":["com.livecode.widget"],
			"summary":"Redraws the widget.",
			"examples":[{
				"script":"private variable mColor as Color\n\npublic handler OnClick()\n\tput color [ any number, any number, any number ] into mColor\n\tredraw all\nend handler\n\npublic handler OnPaint()\n\t...\n\tset the paint of this canvas to solid paint with color mColor\n\t...\nend handler"
			}],
			"description":"Use redraw all to redraw the widget, for example after setting a property which should trigger a change in appearance.",
			"references":{
				"message":["OnPaint"]
			},
			"tags":["widget"]
		},{
			"id":"builder-53",
			"name":"placewidget",
			"display name":"PlaceWidget",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"place <mWidget>"
			],
			"display syntax":[
				"place <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Add a child widget to the parent.",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object."
			}],
			"examples":[{
				"script":"variable tNavbar as Widget\nput a new widget \"com.livecode.widget.navbar\" into tNavbar\nplace tNavbar"
			}],
			"description":"Adds a the specified child object to the widget in which the place statement is used.\n<mWidget> will reside on the layer above all previously placed widgets.",
			"tags":["widget"]
		},{
			"id":"builder-54",
			"name":"mychildren",
			"display name":"MyChildren",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my children"
			],
			"display syntax":[
				"my children"
			],
			"associations":["com.livecode.widget"],
			"summary":"The currently placed child widgets of this widget.",
			"examples":[{
				"script":"public handler OnCreate() returns nothing\n    repeat 10 times\n        place a new widget \"com.livecode.widget.button\"\n    end repeat\nend handler\n\npublic handler OnGeometryChanged() returns nothing\n    variable tChildren as List\n    put my children into tChildren\n\n    variable tChild as Widget\n    variable tLeft as Number\n    put 0 into tLeft\n    -- arrange children from left to right\n    repeat for each element tChild in tChildren\n        set the rectangle of tChild to [tLeft, 0, tLeft + 50, my height]\n        add 50 to tLeft\n    end repeat\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list of the child widgets of this widget."
			}],
			"description":"The list of widget objects returned by <MyChildren|my children> is in placement (i.e. layer) order.",
			"tags":["widget"]
		},{
			"id":"builder-55",
			"name":"onmousemove",
			"display name":"OnMouseMove",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnMouseMove"
			],
			"display syntax":[
				"OnMouseMove"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer moves within the widget's rect.",
			"description":"Sent when the mouse pointer moves within the widget's rect.",
			"tags":["widget"]
		},{
			"id":"builder-56",
			"name":"mywidth",
			"display name":"MyWidth",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my width"
			],
			"display syntax":[
				"my width"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the width of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The width of the widget."
			}],
			"description":"Returns the width of the widget.",
			"tags":["widget"]
		},{
			"id":"builder-57",
			"name":"onload",
			"display name":"OnLoad",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnLoad"
			],
			"display syntax":[
				"OnLoad"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is loaded.",
			"description":"Handler the <OnLoade> message to execute code when a stack containing the widget is loaded, for example setting default values of instance variables.\n>*Note:* Access to most script object operations is not allowed whilst an <OnLoad>\nhandler is running.",
			"tags":["widget"]
		},{
			"id":"builder-58",
			"name":"myheight",
			"display name":"MyHeight",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my height"
			],
			"display syntax":[
				"my height"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the height of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The height of the widget."
			}],
			"description":"Returns the height of the widget.",
			"tags":["widget"]
		},{
			"id":"builder-59",
			"name":"myscriptobject",
			"display name":"MyScriptObject",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my script object"
			],
			"display syntax":[
				"my script object"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the widget script object.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The widget script object.\n"
			}],
			"description":"Returns the widget script object.",
			"tags":["widget"]
		},{
			"id":"builder-60",
			"name":"ispoppedup",
			"display name":"IsPoppedUp",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"currently popped up"
			],
			"display syntax":[
				"currently popped up"
			],
			"associations":["com.livecode.widget"],
			"summary":"Tests if the current widget is in a popup window.\nResturns:True if the current widget is in a popup window, False otherwise.",
			"examples":[{
				"script":"variable mSelected\n\npublic handler OnClick()\n\tvariable tOption\n\tput getOptionAtPosition(the click position) into tOption\n\tif tOption is not empty then\n\t\tput tOption into mSelected\n\n\t\t// If this widget is being used as a popup then we close the popup and return a value to the caller\n\t\tif currently popped up then\n\t\t\tif mSelected is \"Cancel\" then\n\t\t\t\t// Dismiss the popup without returning a value - the result will be nothing\n\t\t\t\tclose popup\n\t\t\telse\n\t\t\t\t// Dismiss the popup - the result will be the value of mSelected\n\t\t\t\tclose popup returning mSelected\n\t\t\tend if\n\t\tend if\n\tend if\nend handler\n\nprivate handler getOptionAtPosition(in pPosition as Point) returns String\n\t// Return the name of the option at the given point\n\t...\nend handler"
			}],
			"description":"Use to determine if this widget is being displayed within a popup window.",
			"references":{
				"statement":["PopupWidget","ClosePopupWithResult"]
			},
			"tags":["widget"]
		},{
			"id":"builder-61",
			"name":"widgetheightproperty",
			"display name":"WidgetHeightProperty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the height of <mWidget>"
			],
			"display syntax":[
				"the height of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the height property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\nend handler\n\npublic handler OnGeometryChanged() returns nothing\n    -- ensure child widget remains same height as parent\n    set the height of mChild to my height\nend handler"
			}],
			"description":"Use the height property to set the height of a child widget.",
			"tags":["widget"]
		},{
			"id":"builder-62",
			"name":"onmousehover",
			"display name":"OnMouseHover",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnMouseHover"
			],
			"display syntax":[
				"OnMouseHover"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer hovers over the widget's rect.",
			"description":"Sent when the mouse pointer hovers over the widget's rect.",
			"tags":["widget"]
		},{
			"id":"builder-63",
			"name":"onclose",
			"display name":"OnClose",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnClose"
			],
			"display syntax":[
				"OnClose"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when card containing the widget is navigated away from.",
			"examples":[{
				"script":"public handler OnClose()\n  \t\t-- Schedule a timer to perform an action every 5 seconds\n \t\t cancel timer\nend handler"
			}],
			"description":"Handle the <OnClose> message to have the widget perform an action when the card containing the widget is navigated away from.",
			"tags":["widget"]
		},{
			"id":"builder-64",
			"name":"iseditmode",
			"display name":"IsEditMode",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"in edit mode"
			],
			"display syntax":[
				"in edit mode"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines whether the IDE is in edit mode.",
			"description":"Determines whether the IDE is in edit mode.",
			"tags":["widget"]
		},{
			"id":"builder-65",
			"name":"oncreate",
			"display name":"OnCreate",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnCreate"
			],
			"display syntax":[
				"OnCreate"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is created.",
			"examples":[{
				"script":"private variable mPrimaryColor as Color\nprivate variable mSecondaryColor as Color\n\npublic handler OnCreate()\n\tput color [ 0.5, 0.5, 1.0 ] into mPrimaryColor\n\tput color [ 0.0, 0.0, 1.0 ] into mSecondaryColor\nend handler"
			}],
			"description":"Handle the <OnCreate> message to have the widget perform an action when it is created, for example setting default values of instance variables.\n>*Note:* Access to most script object operations is not allowed whilst an <OnCreate>\nhandler is running.",
			"tags":["widget"]
		},{
			"id":"builder-66",
			"name":"ondragfinish",
			"display name":"OnDragFinish",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnDragFinish"
			],
			"display syntax":[
				"OnDragFinish"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget finishes being dragged",
			"description":"Sent when the widget finishes being dragged",
			"tags":["widget"]
		},{
			"id":"builder-67",
			"name":"placewidgetat",
			"display name":"PlaceWidgetAt",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"place <mWidget> at ( bottom | top )"
			],
			"display syntax":[
				"place <i>mWidget</i> at ( bottom | top )"
			],
			"associations":["com.livecode.widget"],
			"summary":"Add a child widget to the parent on the top or bottom layer",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object."
			}],
			"examples":[{
				"script":"variable tNavbar as Widget\nput a new widget \"com.livecode.widget.navbar\" into tNavbar\nplace tNavbar at top"
			}],
			"description":"Adds a the specified child object to the widget in which the place statement is used.\nUsing the \"top\" (resp. \"bottom\") variant will cause <mWidget> to be placed on the layer above (resp. below) all previously placed widgets.",
			"tags":["widget"]
		},{
			"id":"builder-68",
			"name":"ontouchfinish",
			"display name":"OnTouchFinish",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnTouchFinish"
			],
			"display syntax":[
				"OnTouchFinish"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent to the target for touch events when a touch event ends.",
			"description":"Sent to the target for touch events when a touch event ends.",
			"tags":["widget"]
		},{
			"id":"builder-69",
			"name":"myfont",
			"display name":"MyFont",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my font"
			],
			"display syntax":[
				"my font"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the font of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The font of the widget"
			}],
			"description":"Use to return a font which reflects the current (effective) settings of the\nwidget's textFont, textSize and textStyle properties.",
			"tags":["widget"]
		},{
			"id":"builder-70",
			"name":"onvisibilitychanged",
			"display name":"OnVisibilityChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnVisibilityChanged <isVisible>"
			],
			"display syntax":[
				"OnVisibilityChanged <i>isVisible</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget visibility changed.",
			"parameters":[{
				"name":"isVisible",
				"type":"bool",
				"refparam":"false",
				"description":"Whether the widget is now visible or not."
			}],
			"examples":[{
				"script":"private variable mAnimate as Boolean\n\npublic handler OnVisibilityChanged(in pVisible as Boolean)\n\tput pVisible into mAnimate\nend handler"
			}],
			"description":"Handle the <OnVisibilityChanged> message to execute code when the widget becomes visible or invisible.",
			"tags":["widget"]
		},{
			"id":"builder-71",
			"name":"canceltimer",
			"display name":"CancelTimer",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"cancel timer"
			],
			"display syntax":[
				"cancel timer"
			],
			"associations":["com.livecode.widget"],
			"summary":"Cancels a timer.",
			"examples":[{
				"script":"// Cancel the timer when the widget is no longer on the current card.\npublic handler OnClose()\n\tcancel timer\nend handler"
			}],
			"description":"Use to cancel a timer scheduled by the <ScheduleTimerIn|schedule> statement.",
			"references":{
				"statement":["ScheduleTimerIn"],
				"message":["OnTimer"]
			},
			"tags":["widget"]
		},{
			"id":"builder-72",
			"name":"onfocusenter",
			"display name":"OnFocusEnter",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnFocusEnter"
			],
			"display syntax":[
				"OnFocusEnter"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget gains focus.",
			"description":"Sent when the widget gains focus.",
			"tags":["widget"]
		},{
			"id":"builder-73",
			"name":"unplacewidget",
			"display name":"UnplaceWidget",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"unplace <mWidget>"
			],
			"display syntax":[
				"unplace <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Remove a child widget from the parent.",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object."
			}],
			"examples":[{
				"script":"-- Remove any child widgets that are clicked on\npublic handler OnMouseUp() returns nothing\n    if the target is not nothing then\n        unplace the target\n    end if\nend handler"
			}],
			"description":"Unplaces the child widget from the widget in which the unplace statement is used.\nThe widget is no longer drawn.",
			"tags":["widget"]
		},{
			"id":"builder-74",
			"name":"onmodifierschanged",
			"display name":"OnModifiersChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnModifiersChanged"
			],
			"display syntax":[
				"OnModifiersChanged"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the keyboard modifiers are changed.",
			"description":"Sent when the keyboard modifiers are changed.",
			"tags":["widget"]
		},{
			"id":"builder-75",
			"name":"ispointnotwithinrect",
			"display name":"IsPointNotWithinRect",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Point> is not within <Rect>"
			],
			"display syntax":[
				"<i>Point</i> is not within <i>Rect</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines whether a point is within a rectangle.",
			"parameters":[{
				"name":"Point",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a Point."
			},{
				"name":"Rect",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a Rectangle."
			}],
			"examples":[{
				"script":"variable tClick as Point\nput the click position into tClick\n\nvariable tRect as Rectangle\nput my bounds into tRect\n\nif tClick is not within tRect then\n\t// click was outside of widget bounds\nend if"
			}],
			"description":"Determines whether a point is within a rectangle.",
			"tags":["widget"]
		},{
			"id":"builder-76",
			"name":"onmouseleave",
			"display name":"OnMouseLeave",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnMouseLeave"
			],
			"display syntax":[
				"OnMouseLeave"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer leaves the widget's rect.",
			"description":"Sent when the mouse pointer leaves the widget's rect.",
			"tags":["widget"]
		},{
			"id":"builder-77",
			"name":"myrectangle",
			"display name":"MyRectangle",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my rectangle"
			],
			"display syntax":[
				"my rectangle"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the rectangle of the widget in the parent",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The rectangle of the widget in the parent"
			}],
			"description":"Returns the rectangle of the widget in the parent",
			"tags":["widget"]
		},{
			"id":"builder-78",
			"name":"onmousecancel",
			"display name":"OnMouseCancel",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnMouseCancel"
			],
			"display syntax":[
				"OnMouseCancel"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when something happens which should cause the previous mouse down\naction to be considered cancelled. For example, opening a popup during OnMouseDown.",
			"description":"Sent when something happens which should cause the previous mouse down\naction to be considered cancelled. For example, opening a popup during OnMouseDown.",
			"tags":["widget"]
		},{
			"id":"builder-79",
			"name":"ispointwithinrect",
			"display name":"IsPointWithinRect",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Point> is within <Rect>"
			],
			"display syntax":[
				"<i>Point</i> is within <i>Rect</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Determines whether a point is within a rectangle.",
			"parameters":[{
				"name":"Point",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a Point."
			},{
				"name":"Rect",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a Rectangle."
			}],
			"examples":[{
				"script":"variable tClick as Point\nput the click position into tClick\n\nvariable tRect as Rectangle\nput my bounds into tRect\n\nif tClick is within tRect then\n\t// click was within widget bounds\nend if"
			}],
			"description":"Determines whether a point is within a rectangle.",
			"tags":["widget"]
		},{
			"id":"builder-80",
			"name":"ondragdrop",
			"display name":"OnDragDrop",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnDragDrop"
			],
			"display syntax":[
				"OnDragDrop"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when a dragged object is released within the widget rect.",
			"description":"Sent when a dragged object is released within the widget rect.",
			"tags":["widget"]
		},{
			"id":"builder-81",
			"name":"widgetdisabledproperty",
			"display name":"WidgetDisabledProperty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the disabled of <mWidget>"
			],
			"display syntax":[
				"the disabled of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the disabled property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\n    -- mChild is initially disabled\n    set the disabled of mChild to true\nend handler"
			}],
			"description":"Use the disabled property to control the disabled/enabled state of child widgets.\nThe child widget can change its appearance and behavior based on the result of the '<MyDiabled|my disabled>' expression.",
			"references":{
				"expression":["MyDisabled"]
			},
			"tags":["widget"]
		},{
			"id":"builder-82",
			"name":"onstopediting",
			"display name":"OnStopEditing",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnStopEditing"
			],
			"display syntax":[
				"OnStopEditing"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the browse tool is selected.",
			"description":"Handle the <OnStopEditing> message to perform an action when the browse tool is selected.",
			"tags":["widget"]
		},{
			"id":"builder-83",
			"name":"onmousedown",
			"display name":"OnMouseDown",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnMouseDown"
			],
			"display syntax":[
				"OnMouseDown"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse button is pushed within the widget's rect.",
			"description":"Sent when the mouse button is pushed within the widget's rect.",
			"tags":["widget"]
		},{
			"id":"builder-84",
			"name":"onmousestillhover",
			"display name":"OnMouseStillHover",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnMouseStillHover"
			],
			"display syntax":[
				"OnMouseStillHover"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer continues to hover over the widget's rect.",
			"description":"Sent when the mouse pointer continues to hover over the widget's rect.",
			"tags":["widget"]
		},{
			"id":"builder-85",
			"name":"onclick",
			"display name":"OnClick",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnClick"
			],
			"display syntax":[
				"OnClick"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is clicked.",
			"description":"Sent when the widget is clicked.",
			"tags":["widget"]
		},{
			"id":"builder-86",
			"name":"thetouchlocation",
			"display name":"TheTouchLocation",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the touch position"
			],
			"display syntax":[
				"the touch position"
			],
			"associations":["com.livecode.widget"],
			"summary":"The location of the current touch",
			"examples":[{
				"script":"   variable tPosition as Point\n   put the touch position into tPosition\n\n   variable tRect as Rectangle\n   put my bounds into tRect\n\n   if tPosition is within tRect then\n      // touch position is within the widget bounds\n   end if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The position of the current touch relative to the widget"
			}],
			"description":"The location of the current touch",
			"tags":["widget"]
		},{
			"id":"builder-87",
			"name":"onmouseenter",
			"display name":"OnMouseEnter",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnMouseEnter"
			],
			"display syntax":[
				"OnMouseEnter"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the mouse pointer enters the widget's rect.",
			"description":"Sent when the mouse pointer enters the widget's rect.",
			"tags":["widget"]
		},{
			"id":"builder-88",
			"name":"onattach",
			"display name":"OnAttach",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnAttach"
			],
			"display syntax":[
				"OnAttach"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is attached.",
			"description":"Sent when the widget is attached.",
			"tags":["widget"]
		},{
			"id":"builder-89",
			"name":"thenumberoftouches",
			"display name":"TheNumberOfTouches",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the number of touches"
			],
			"display syntax":[
				"the number of touches"
			],
			"associations":["com.livecode.widget"],
			"summary":"The number of touches",
			"examples":[{
				"script":"   if the number of touches is 2 then\n      // pinch gesture\n   end if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of currently active touches"
			}],
			"description":"The number of touches",
			"tags":["widget"]
		},{
			"id":"builder-90",
			"name":"ondetach",
			"display name":"OnDetach",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnDetach"
			],
			"display syntax":[
				"OnDetach"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when the widget is detached.",
			"description":"Sent when the widget is detached.",
			"tags":["widget"]
		},{
			"id":"builder-91",
			"name":"ontouchcancel",
			"display name":"OnTouchCancel",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnTouchCancel"
			],
			"display syntax":[
				"OnTouchCancel"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent to the target for touch events when a touch event is cancelled.",
			"description":"Sent to the target for touch events when a touch event is cancelled.",
			"tags":["widget"]
		},{
			"id":"builder-92",
			"name":"popupmenu",
			"display name":"PopupMenu",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"popup menu <mMenu> at <mAt>"
			],
			"display syntax":[
				"popup menu <i>mMenu</i> at <i>mAt</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Displays a popup menu.\nMenu:An expression that evaluates to a string, which describes the menu items.\nLocation:An expression that evaluates to a <Point> relative to the current widget. The topleft corner of the popup window will be placed here.",
			"examples":[{
				"script":"private variable mFont as Font\n\npublic handler OnMouseDown()\n\tpopup menu \"Helvetica\\nTimes New Roman\\nArial\" at the mouse position\n\tif the result is not nothing then\n\t\tput font (the result) at size 20 into mFont\n\t\tredraw all\n\tend if\nend handler\n\npublic handler OnPaint()\n\t...\n\tset the font of this canvas to mFont\n\t...\nend handler"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The selected menu item. If the menu is dismissed (by clicking outside the bounds of the menu) this value will be nothing."
			}],
			"description":"Use to popup a menu at the specified location.",
			"tags":["widget"]
		},{
			"id":"builder-93",
			"name":"triggerall",
			"display name":"TriggerAll",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"trigger all [ in <mWidget> ]"
			],
			"display syntax":[
				"trigger all [ in <i>mWidget</i> ]"
			],
			"associations":["com.livecode.widget"],
			"summary":"Causes all of a widget's property triggers to be fired.",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a widget."
			}],
			"examples":[{
				"script":"handler TextChangedCallback()\n        UpdateTextProperty()\n        trigger all\nend handler"
			},{
				"script":"private variable mSelf as Widget\nhandler TextChangedCallback()\n\tUpdateTextProperty()\n\ttrigger all in mSelf\nend handler"
			}],
			"description":"Use trigger all to cause all triggers for all a widget's properties to\nbe fired, for example when user action causes a native widget's\nproperties to change, to signal the property change to the IDE.",
			"tags":["widget"]
		},{
			"id":"builder-94",
			"name":"mybounds",
			"display name":"MyBounds",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my bounds"
			],
			"display syntax":[
				"my bounds"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the bounds of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounds of the widget."
			}],
			"description":"Returns the bounds of the widget.",
			"tags":["widget"]
		},{
			"id":"builder-95",
			"name":"ondragleave",
			"display name":"OnDragLeave",
			"library":"builder",
			"type":"message",
			"syntax":[
				"OnDragLeave"
			],
			"display syntax":[
				"OnDragLeave"
			],
			"associations":["com.livecode.widget"],
			"summary":"Sent when an object is dragged outside of the widget rect.",
			"description":"Sent when an object is dragged outside of the widget rect.",
			"tags":["widget"]
		},{
			"id":"builder-96",
			"name":"myenabled",
			"display name":"MyEnabled",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my enabled"
			],
			"display syntax":[
				"my enabled"
			],
			"associations":["com.livecode.widget"],
			"summary":"Returns the enabled state of the widget.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The enabled state of the widget."
			}],
			"description":"Returns the enabled state of the widget.",
			"tags":["widget"]
		},{
			"id":"builder-97",
			"name":"widgetwidthproperty",
			"display name":"WidgetWidthProperty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the width of <mWidget>"
			],
			"display syntax":[
				"the width of <i>mWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Manipulates the height property of a child widget",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object"
			}],
			"examples":[{
				"script":"private variable mChild as Widget\n\npublic handler OnCreate() returns nothing\n    put a new widget \"com.livecode.widget.button\" into mChild\n    place mChild\nend handler\n\npublic handler OnGeometryChanged() returns nothing\n    -- ensure child widget remains half the width of the parent\n    set the width of mChild to my width / 2\nend handler"
			}],
			"description":"Use the width property to set the width of a child widget.",
			"tags":["widget"]
		},{
			"id":"builder-98",
			"name":"placewidgetrelative",
			"display name":"PlaceWidgetRelative",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"place <mWidget> ( below | above ) <mOtherWidget>"
			],
			"display syntax":[
				"place <i>mWidget</i> ( below | above ) <i>mOtherWidget</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"Add a child widget to the parent on a layer relative to that of a previously placed child.",
			"parameters":[{
				"name":"mWidget",
				"type":"",
				"refparam":"false",
				"description":"The child widget object."
			},{
				"name":"mOtherWidget",
				"type":"",
				"refparam":"false",
				"description":"The child to place <mWidget> relative to."
			}],
			"examples":[{
				"script":"variable tNavbar as Widget\nput a new widget \"com.livecode.widget.navbar\" into tNavbar\nplace tNavbar\n\nvariable tTreeView as Widget\nput a new widget \"com.livecode.widget.treeView\" into tTreeView\nplace tTreeView below tNavbar"
			}],
			"description":"Adds a the specified child object to the widget in which the place statement is used. <mWidget> is placed either below or above\nthe layer on which <mOtherWidget> is placed, depending on which variant is used.",
			"tags":["widget"]
		},{
			"id":"builder-99",
			"name":"scheduletimerin",
			"display name":"ScheduleTimerIn",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"schedule timer in <Time> seconds"
			],
			"display syntax":[
				"schedule timer in <i>Time</i> seconds"
			],
			"associations":["com.livecode.widget"],
			"summary":"Schedules a timer.",
			"parameters":[{
				"name":"Time",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create a timer loop\npublic handler OnTimer()\n\t...\n\tschedule timer in 1 seconds\nend handler"
			}],
			"description":"Scheduling a timer causes an <OnTimer> message to be sent to the widget in <Time> seconds.",
			"references":{
				"message":["OnTimer"]
			},
			"tags":["widget"]
		},{
			"id":"builder-100",
			"name":"thelocationoftouch",
			"display name":"TheLocationOfTouch",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the position of touch <Id>"
			],
			"display syntax":[
				"the position of touch <i>Id</i>"
			],
			"associations":["com.livecode.widget"],
			"summary":"The location of a specific touch",
			"examples":[{
				"script":"   variable tID as Number\n   put the touch id into tID\n\n   variable tPosition as Point\n   put the position of touch tID into tPosition"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The positon of a specific touch id relative to the widget"
			}],
			"description":"The location of a specific touch",
			"tags":["widget"]
		},{
			"id":"builder-101",
			"name":"elementsofarray",
			"display name":"ElementsOfArray",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the elements of <Target>"
			],
			"display syntax":[
				"the elements of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Returns the elements of an array.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput 1 into tArray[\"key1\"]\nput 2 into tArray[\"key2\"]\nput 3 into tArray[\"key3\"]\n\nvariable tElements as List\nput the elements of tArray into tElements\nsort tElements in ascending numeric order\n\n// tElements is [1, 2, 3]"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list whose elements are the elements of <Target>."
			}],
			"description":">*Note:* The resulting list is not necessarily ordered in any way. Use the <com.livecode.sort> library to sort the elements.",
			"references":{
				"library":["com.livecode.sort"]
			},
			"tags":["arrays"]
		},{
			"id":"builder-102",
			"name":"emptyarray",
			"display name":"EmptyArray",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the empty array"
			],
			"display syntax":[
				"the empty array"
			],
			"associations":["com.livecode.array"],
			"summary":"Designates the array with no elements.",
			"examples":[{
				"script":"variable tVar as Array\nvariable tCount as Number\nput the empty array into tVar\nput the number of elements in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty array``` to initialise an array variable.",
			"tags":["arrays"]
		},{
			"id":"builder-103",
			"name":"repeatforeachelementinarray",
			"display name":"RepeatForEachElementInArray",
			"library":"builder",
			"type":"iterator",
			"syntax":[
				"element <Iterand>"
			],
			"display syntax":[
				"element <i>Iterand</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Repeat over the elements of an array.",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"Any variable of appropriate type."
			}],
			"examples":[{
				"script":"    variable tArray as Array\n    put the empty array into tArray\n    put 1 into tArray[\"key1\"]\n    put 2 into tArray[\"key2\"]\n    put 3 into tArray[\"key3\"]\n\n\tvariable tSum as Number\n\tput 0 into tSum\n\n    variable tElement\n    repeat for each element tElement in tArray\n        add tElement to tSum\n    end repeat\n\n    // tSum is 6"
			}],
			"description":"Use repeat for each element to iterate over the elements of an array in no particular order. On each iteration, the <Iterand> will contain the next element of the array being iterated over.\n\n>*Note:* If <Iterand> is typed, then an error will be thrown if the array being iterated over contains any elements of a different type.",
			"tags":["arrays"]
		},{
			"id":"builder-104",
			"name":"singletonelementofarray",
			"display name":"SingletonElementOfArray",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> [ <Key> ]"
			],
			"display syntax":[
				"<i>Target</i> [ <i>Key</i> ]"
			],
			"associations":["com.livecode.array"],
			"summary":"Designates the element with key <Key> in <Target>.\nIndex:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput \"value\" into tArray[\"key\"]\n\nvariable tVar as String\nput tArray[\"key\"] into tVar -- tVar contains \"value\""
			}],
			"description":"Either locates the element container with the given key for use as the target container of another operation, or evaluates the element with the given key as the source of another operation.",
			"tags":["arrays"]
		},{
			"id":"builder-105",
			"name":"deleteelementofarray",
			"display name":"DeleteElementOfArray",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete <Target> [ <Key> ]"
			],
			"display syntax":[
				"delete <i>Target</i> [ <i>Key</i> ]"
			],
			"associations":["com.livecode.array"],
			"summary":"Deletes the element with key <Key> in <Target>.\nIndex:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput \"value\" into tArray[\"key\"]\n\ndelete tArray[\"key\"] -- tArray is the empty array"
			}],
			"description":"Either locates the element container with the given key for use as the target container of another operation, or evaluates the element with the given key as the source of another operation.",
			"tags":["arrays"]
		},{
			"id":"builder-106",
			"name":"amongkeysofarray",
			"display name":"AmongKeysOfArray",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Needle> ( is not | is ) among the keys of <Target>"
			],
			"display syntax":[
				"<i>Needle</i> ( is not | is ) among the keys of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Determines if an array has a given key",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer, string, or list of integers."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput \"value\" into tArray[\"key\"]\n\nvariable tIsAmong as Boolean\nput \"key\" is among the keys of tArray into tIsAmong -- tIsAmong is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Needle> can be found among the keys of <Target>."
			}],
			"description":"The keys of an array are case insensitive. Thus\n``` tVar is among the keys of tArray```\nis not equivalent to\n``` tVar is in (the keys of tArray) ```\nas the latter <IsInList> operation *is* case sensitive.",
			"references":{
				"operator":["IsInList"]
			},
			"tags":["arrays"]
		},{
			"id":"builder-107",
			"name":"keysofarray",
			"display name":"KeysOfArray",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the keys of <Target>"
			],
			"display syntax":[
				"the keys of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Returns the keys of an array.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput \"value1\" into tArray[\"key1\"]\nput \"value2\" into tArray[\"key2\"]\nput \"value3\" into tArray[\"key3\"]\n\nvariable tKeys as List\nput the keys of tArray into tKeys\nsort tKeys in ascending order\n\nvariable tKeysString as String\ncombine tKeys with \",\" into tKeysString\n// tKeysString is \"key1,key2,key3\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list whose elements are the keys of <Target>."
			}],
			"description":">*Note:* The resulting list is not necessarily ordered in any way. Use the <com.livecode.sort> library to sort the keys.",
			"references":{
				"library":["com.livecode.sort"]
			},
			"tags":["arrays"]
		},{
			"id":"builder-108",
			"name":"countelementsofarray",
			"display name":"CountElementsOfArray",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the number of elements in <Target>"
			],
			"display syntax":[
				"the number of elements in <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Returns the number of elements in <Target>",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput the empty array into tArray\nput 1 into tArray[\"key1\"]\nput 2 into tArray[\"key2\"]\nput 3 into tArray[\"key3\"]\n\nvariable tVar as Number\nput the number of elements in tArray into tVar -- tVar contains 3"
			}],
			"description":"The number of elements in tArray returns the number of key-value pairs stored in the array.",
			"tags":["arrays"]
		},{
			"id":"builder-109",
			"name":"amongelementsofarray",
			"display name":"AmongElementsOfArray",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Needle> ( is not | is ) among the elements of <Target>"
			],
			"display syntax":[
				"<i>Needle</i> ( is not | is ) among the elements of <i>Target</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Determines if an array contains a given element",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"variable tArray as Array\nput \"value\" into tArray[\"key\"]\n\nvariable tIsAmong as Boolean\nput \"value\" is among the elements of tArray into tIsAmong -- tIsAmong is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Needle> can be found among the elements of <Target>."
			}],
			"description":"Elements are compared using the default comparison for that type. Thus for a string, ```tString```,\n```tString is among the elements of tArray```\nis a case sensitive search.",
			"tags":["arrays"]
		},{
			"id":"builder-110",
			"name":"repeatforeachkey",
			"display name":"RepeatForEachKey",
			"library":"builder",
			"type":"iterator",
			"syntax":[
				"key <Iterand>"
			],
			"display syntax":[
				"key <i>Iterand</i>"
			],
			"associations":["com.livecode.array"],
			"summary":"Repeat over the keys of an array.",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"    variable tArray as Array\n    put the empty array into tArray\n    put 1 into tArray[\"abc\"]\n    put 2 into tArray[\"def\"]\n    put 3 into tArray[\"ghi\"]\n\n\tvariable tString as String\n\tput \"\" into tString\n\n    variable tKey as String\n    repeat for each key tKey in tArray\n        put tKey after tString\n    end repeat\n\n    variable tBool as Boolean\n    put tString contains \"abc\" into tBool -- tBool is true"
			}],
			"description":"Use repeat for each key to iterate over the keys of an array in no particular order. On each iteration, the <Iterand> will contain the next key of the array being iterated over.",
			"tags":["arrays","control structures"]
		},{
			"id":"builder-111",
			"name":"com.livecode.array",
			"display name":"com.livecode.array",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.array"
			],
			"associations":["com.livecode.array"],
			"summary":"This library consists of the operations on arrays included in the standard library of Extension Builder.",
			"description":"This library consists of the operations on arrays included in the standard library of Extension Builder."
		},{
			"id":"builder-112",
			"name":"pointerfromjobject",
			"display name":"PointerFromJObject",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"PointerFromJObject(<pObj>)"
			],
			"display syntax":[
				"PointerFromJObject(<i>pObj</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a JObject into a Pointer",
			"parameters":[{
				"name":"pObj",
				"type":"",
				"refparam":"false",
				"description":"The JObject to convert"
			}],
			"examples":[{
				"script":"handler SetNativeLayerToView(in pView as JObject)\n\tvariable tViewPtr as Pointer\n\tput PointerFromJObject(pView) into tViewPtr\n\tset my native layer to tViewPtr\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The jobject Pointer wrapped by the JObject type"
			}],
			"description":"Use <PointerFromJObject> to convert a variable of type JObject to one of\ntype Pointer, i.e. to extract the underlying jobject pointer from a JObject\n"
		},{
			"id":"builder-113",
			"name":"com.livecode.java",
			"display name":"com.livecode.java",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.java"
			],
			"associations":["com.livecode.java"],
			"summary":"This module provides utility handlers for converting to and from Java types.",
			"description":"> **Important:** This library is currently supported on Android, Mac and\n> Linux. Binding to java classes requires the availability of a Java \n> runtime and access to the appropriate libraries. On Mac, \n> the `JAVA_HOME` environment variable must be set to the path to your \n> Java installation (usually at \n> `/Library/Java/JavaVirtualMachines/jdk1.7.0_55.jdk/Contents/Home`). \n> On Linux, your `LD_LIBRARY_PATH` must be set to the folder containing \n> the `libjvm.so` library (usually at `${JAVA_HOME}/jre/lib/amd64/server`\n> on 64-bit Linux)."
		},{
			"id":"builder-114",
			"name":"stringfromjstring",
			"display name":"StringFromJString",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"StringFromJString(<pObj>)"
			],
			"display syntax":[
				"StringFromJString(<i>pObj</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a java string into a String",
			"parameters":[{
				"name":"pObj",
				"type":"",
				"refparam":"false",
				"description":"The JString to convert"
			}],
			"examples":[{
				"script":"foreign handler JavaGetDefaultLocale() returns JObject binds to \"java:java.util.Locale>getDefault()Ljava/util/Locale;!static\"\nforeign handler JavaLocaleDisplayName(in pLocale as JObject) returns JObject binds to \"java:java.util.Locale>getDisplayName()Ljava/lang/String;\"\n\npublic handler GetDefaultLocaleDisplayName() returns String\n\tunsafe \n\t\tvariable tLocale as JObject\n\t\tput JavaGetDefaultLocale() into tLocale\n\n\t\tvariable tDisplay as JString\n\t\tput JavaLocaleDisplayName(tLocale) into tDisplay\n\n\t\treturn StringFromJString(tDisplay)\n\tend unsafe\nend handler"
			}],
			"description":"Use <StringFromJString> to convert an instance of the class java.lang.String\nto a variable of type String."
		},{
			"id":"builder-115",
			"name":"pointertojobject",
			"display name":"PointerToJObject",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"PointerToJObject(<pPointer>)"
			],
			"display syntax":[
				"PointerToJObject(<i>pPointer</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a Pointer into a JObject",
			"parameters":[{
				"name":"pPointer",
				"type":"",
				"refparam":"false",
				"description":"The Pointer to convert"
			}],
			"examples":[{
				"script":"foreign handler _JNI_SetTextViewText(in pView as JObject, in pValue as JString) returns nothing binds to \"java:android.widget.TextView>setText(Ljava/lang/CharSequence;)V\"\n\n-- set the text of a view\nunsafe handler ViewSetText(in pString as String)\n\tvariable tViewPtr as Pointer\n\tput my native layer into tPointer\n\n\tvariable tView as JObject\n\tput PointerToJObject into tView\n\t_JNI_SetTextViewText(tView, StringToJString(pString))\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A JObject wrapping the jobject Pointer"
			}],
			"description":"Use <PointerToJObject> to convert a variable of type Pointer to one of \ntype JObject. \n\n> *Important:* Your application will likely crash if the underlying type\n> of the Pointer is not actually jobject."
		},{
			"id":"builder-116",
			"name":"getjavaclassname",
			"display name":"GetJavaClassName",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"GetJavaClassName(<pObj>)"
			],
			"display syntax":[
				"GetJavaClassName(<i>pObj</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Get Java class name of a Java object",
			"parameters":[{
				"name":"pObj",
				"type":"",
				"refparam":"false",
				"description":"A JObject"
			}],
			"examples":[{
				"script":"foreign handler CreateJavaObject() returns JObject binds to \"java:java.lang.Object>new()\"\n\npublic handler GetNewJavaObject() returns JObject\nvariable tObj as JObject\nunsafe\n\tput CreateJavaObject() into tObj\n\n\tvariable tClassName as String\n\tput GetJavaClassName(pObj) into tClassName\n\n\t-- tClassName contains \"java.lang.Object\"\nend unsafe\n\nreturn tObj\nend handler"
			}],
			"description":"Use <GetJavaClassName> to find out what class a given Java object is an\ninstance of."
		},{
			"id":"builder-117",
			"name":"stringtojstring",
			"display name":"StringToJString",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"StringToJString(<pString>)"
			],
			"display syntax":[
				"StringToJString(<i>pString</i>)"
			],
			"associations":["com.livecode.java"],
			"summary":"Convert a String into a java string",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The String to convert"
			}],
			"examples":[{
				"script":"foreign handler CreateJavaCurrencyWithCode(in pString as JString) returns JObject binds to \"java:java.util.Currency>getInstance(Ljava/lang/String;)Ljava/util/Currency;!static\"\n\n-- Create a new Currency object\nvariable tCurrency as JObject\nunsafe\n\tvariable tCode as JString\n\tput StringToJString(\"AMD\") into tCode\n\n\tput CreateJavaCurrencyWithCode(tCode) into tCurrency\nend unsafe"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A JObject of type java.lang.String"
			}],
			"description":"Use <StringToJString> to convert a variable of type String to an instance\nof the class java.lang.String."
		},{
			"id":"builder-118",
			"name":"com.livecode.widget.native.android.button",
			"display name":"com.livecode.widget.native.android.button",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.android.button"
			],
			"associations":["com.livecode.widget.native.android.button"],
			"summary":"This widget is a native button on Android.",
			"OS":["android"],
			"platforms":["mobile"],
			"description":"This widget is a native button on Android."
		},{
			"id":"builder-119",
			"name":"enabled",
			"display name":"enabled",
			"library":"builder",
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
			"id":"builder-120",
			"name":"labelcolor",
			"display name":"labelColor",
			"library":"builder",
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
			"id":"builder-121",
			"name":"label",
			"display name":"label",
			"library":"builder",
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
		},{
			"id":"builder-122",
			"name":"com.livecode.assert",
			"display name":"com.livecode.assert",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.assert"
			],
			"associations":["com.livecode.assert"],
			"summary":"Sometimes there are restrictions about how some LCB code can be used\ncorrectly.  It may only be possible to make it work in a sensible way\nif is passed a particular range of values, or if the system is in a\nparticular state.  These are known as \"preconditions\" for the code.\n\nMany preconditions can be expressed via the LCB type system.  For\nexample, you can declare that the parameters passed to handler must be\nparticular types of value.  For example, when you write `in pName as\nString`, you are saying that the handler can only work when the\n`pName` parameter is a character string.  This is a precondition that\ncan be checked automatically by the LCB compiler and virtual machine.\n\nSome preconditions can't yet be automatically checked by LCB.  An\nexample would be a requirement that a string contains only ASCII\ncharacters, or that an array has a particular key.\n\nThis module provides syntax to assist with explicit precondition\nchecks.",
			"description":"Sometimes there are restrictions about how some LCB code can be used\ncorrectly.  It may only be possible to make it work in a sensible way\nif is passed a particular range of values, or if the system is in a\nparticular state.  These are known as \"preconditions\" for the code.\n\nMany preconditions can be expressed via the LCB type system.  For\nexample, you can declare that the parameters passed to handler must be\nparticular types of value.  For example, when you write `in pName as\nString`, you are saying that the handler can only work when the\n`pName` parameter is a character string.  This is a precondition that\ncan be checked automatically by the LCB compiler and virtual machine.\n\nSome preconditions can't yet be automatically checked by LCB.  An\nexample would be a requirement that a string contains only ASCII\ncharacters, or that an array has a particular key.\n\nThis module provides syntax to assist with explicit precondition\nchecks."
		},{
			"id":"builder-123",
			"name":"expectpreconditionwithreason",
			"display name":"ExpectPreconditionWithReason",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"expect [that] <Condition> because <Reason>"
			],
			"display syntax":[
				"expect [that] <i>Condition</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.assert"],
			"summary":"Check a precondition, with a reason",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"Expression that must be true for code to work"
			},{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"Description of the precondition"
			}],
			"examples":[{
				"script":"-- Draw a random variate from the Bernoulli distribution with\n-- parameter pParam.  A Bernoulli variate may be 0 or 1; the\n-- parameter pParam is the probability that the result is 1.\nhandler BernoulliVariate(in pParam as Number) returns Number\n\texpect (pParam >= 0 and pParam <= 1) \\\n\t\t because \"Bernoulli parameter must be a probability in [0,1]\"\n\tif (any number <= pParam) then\n\t\treturn 1\n\telse\n\t\treturn 0\n\tend if\nend handler"
			}],
			"description":"Use this statement at the start of a handler to check that necessary\npreconditions for the handler are satisfied.  For example, the handler\nmay require that its parameters have a particular structure or fall\nwithin a particular range, or may need the system to be in a specific\nstate.\n\nIf the <Condition> is false, an error will be thrown including the\n<Reason> for the check.",
			"references":{
				"statement":["ExpectPrecondition"]
			},
			"tags":["assertions"]
		},{
			"id":"builder-124",
			"name":"expectprecondition",
			"display name":"ExpectPrecondition",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"expect [that] <Condition>"
			],
			"display syntax":[
				"expect [that] <i>Condition</i>"
			],
			"associations":["com.livecode.assert"],
			"summary":"Check a precondition",
			"examples":[{
				"script":"handler BoxValue(in pValue as any) returns Array\n\treturn { \"__VALUE\": pValue }\nend handler\n\nhandler UnBoxValue(in pBox as Array) returns any\n\texpect that \"__VALUE\" is among the elements of pBox\n\treturn pBox[\"__VALUE\"]\nend handler"
			}],
			"description":"Use this statement at the start of a handler to check that necessary\npreconditions for the handler are satisfied.  For example, the handler\nmay require that its parameters have a particular structure or fall\nwithin a particular range, or may need the system to be in a specific\nstate.\n\nNote that if the <Condition> is false, this statement will throw an\nerror with the slightly-unhelpful message that \"assertion failed\".\nUsually, it will be more useful to use <ExpectsPreconditionWithReason>\ninstead.",
			"references":{
				"statement":["ExpectPreconditionWithReason"]
			},
			"tags":["assertions"]
		},{
			"id":"builder-125",
			"name":"androidpermissionexists",
			"display name":"AndroidPermissionExists",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"AndroidPermissionExists(<pPermission>)"
			],
			"display syntax":[
				"AndroidPermissionExists(<i>pPermission</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Returns true if <pPermission> is a valid Android permission name",
			"OS":["android"],
			"parameters":[{
				"name":"pPermission",
				"type":"",
				"refparam":"false",
				"description":"The name of the permission to check."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <pPermission> is a valid Android permission name, false otherwise."
			}],
			"description":"Use the <AndroidPermissionExists> function to check if <pPermission> is a valid\nAndroid permission name.\n\n>*Note:* Permission names are case sensitive."
		},{
			"id":"builder-126",
			"name":"androidunregisterlifecyclelistener",
			"display name":"AndroidUnregisterLifecycleListener",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"AndroidUnregisterLifecycleListener(<pListener>)"
			],
			"display syntax":[
				"AndroidUnregisterLifecycleListener(<i>pListener</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Unregister an object that is listening on application lifecycle events.",
			"OS":["android"],
			"parameters":[{
				"name":"pListener",
				"type":"",
				"refparam":"false",
				"description":"The listener object to be unregistered"
			}],
			"examples":[{
				"script":"private variable mLifecycleListener as optional JObject\n\npublic handler OnOpen() returns nothing\n    put AndroidRegisterLifecycleListener(OnMyWidgetPaused, OnMyWidgetResumed) into mLifecycleListener\nend handler\n\npublic handler OnClose() returns nothing\n    AndroidUnregisterLifecycleListener(mLifecycleListener)\n    put nothing into mLifecycleListener\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the listener object was previously registered and has been successfully\nunregistered."
			}],
			"description":"Use the <AndroidUnregisterLifecycleListener> handler to unregister an object\ncreated with <AndroidRegisterLifecycleListener> that is listening to application\nlifecycle events. This will have the effect that any handlers that the listener\nobject is wrapping will no longer be called."
		},{
			"id":"builder-127",
			"name":"androidrequestpermission",
			"display name":"AndroidRequestPermission",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"AndroidRequestPermission(<pPermission>)"
			],
			"display syntax":[
				"AndroidRequestPermission(<i>pPermission</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Displays a dialog showing a permission request for <pPermission>. If a user\nhas already granted permission for <pPermission>, this function does nothing.\n\nReturns true if permission <pPermission> has been granted by the user.",
			"OS":["android"],
			"parameters":[{
				"name":"pPermission",
				"type":"",
				"refparam":"false",
				"description":"The name of the permission to request.\n\n-   \"android.permission.READ_CALENDAR\": permission to allow an application to read the device's calendar.\n-   \"android.permission.WRITE_CALENDAR\": permission to allow an application to write to the device's calendar.\n-   \"android.permission.CAMERA\": permission to allow an application to access the device's camera.\n-   \"android.permission.ACCESS_COARSE_LOCATION\": permission to allow an application to access the device's coarse location.\n-   \"android.permission.ACCESS_FINE_LOCATION\": permission to allow an application to access the device's fine location.\n-   \"android.permission.READ_CONTACTS\": permission to allow an application to read data from the device's contacts.\n-   \"android.permission.WRITE_CONTACTS\": permission to allow an application to write date to the device's contacts.\n-   \"android.permission.GET_ACCOUNTS\": permission to allow an application to access to the list of accounts in the Accounts Service.\n-   \"android.permission.RECORD_AUDIO\": permission to allow an application to allow an application to record audio.\n-   \"android.permission.READ_EXTERNAL_STORAGE\": permission to allow an application to read data from the device's external storage.\n-   \"android.permission.WRITE_EXTERNAL_STORAGE\": permission to allow an application to write data to the device's external storage.\n-   \"android.permission.READ_PHONE_STATE\": permission to allow an application to access phone state, including the phone number of the device, current cellular network information, the status of any ongoing calls, and a list of any PhoneAccounts registered on the device.\n-   \"android.permission.READ_PHONE_NUMBERS\": permission to allow an application to access the device's phone number(s).\n-   \"android.permission.CALL_PHONE\": permission to allow an application to initiate a phone call without going through the Dialer user interface for the user to confirm the call.\n-   \"android.permission.ANSWER_PHONE_CALLS\": permission to allow an application to answer an incoming phone call.\n-   \"android.permission.READ_CALL_LOG\": permission to allow an application to read the user's call log.\n-   \"android.permission.WRITE_CALL_LOG\": permission to allow an application to write to the user's call log.\n-   \"android.permission.ADD_VOICEMAIL\": permission to allow an application to add voicemails into the system.\n-   \"android.permission.USE_SIP\": permission to allow an application to use SIP service.\n-   \"android.permission.PROCESS_OUTGOING_CALLS\": permission to allow an application to see the number being dialed during an outgoing call with the option to redirect the call to a different number or abort the call altogether.\n-   \"android.permission.SEND_SMS\": permission to allow an application to send SMS messages.\n-   \"android.permission.RECEIVE_SMS\": permission to allow an application to receive SMS messages\n-   \"android.permission.READ_SMS\": permission to allow an application to read SMS messages.\n-   \"android.permission.RECEIVE_WAP_PUSH\": permission to allow an application to receive WAP push messages.\n-   \"android.permission.RECEIVE_MMS\": permission to allow an application to receive MMS messages.\n-   \"android.permission.BODY_SENSORS\": permission to allow an application to access data from sensors that the user uses to measure what is happening inside his/her body, such as heart rate."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if permission has been granted, false otherwise."
			}],
			"description":"Use the <AndroidRequestPermission> command to request permission for\n<pPermission> from the user.\n\n>*Note:* Permission names are case sensitive."
		},{
			"id":"builder-128",
			"name":"androidregisterlifecyclelistener",
			"display name":"AndroidRegisterLifecycleListener",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"AndroidRegisterLifecycleListener(<pPauseHandler>,<pResumeHandler>)"
			],
			"display syntax":[
				"AndroidRegisterLifecycleListener(<i>pPauseHandler</i>,<i>pResumeHandler</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Register handlers to be called when on application lifecycle events.",
			"OS":["android"],
			"parameters":[{
				"name":"pPauseHandler",
				"type":"",
				"refparam":"false",
				"description":"The handler to be called when the application is paused"
			},{
				"name":"pResumeHandler",
				"type":"",
				"refparam":"false",
				"description":"The handler to be called when the application is resumed"
			}],
			"examples":[{
				"script":"private variable mLifecycleListener as optional JObject\n\npublic handler OnOpen() returns nothing\n    put AndroidRegisterLifecycleListener(OnMyWidgetPaused, OnMyWidgetResumed) into mLifecycleListener\nend handler\n\npublic handler OnClose() returns nothing\n    AndroidUnregisterLifecycleListener(mLifecycleListener)\n    put nothing into mLifecycleListener\nend handler\n\nprivate handler OnMyWidgetPaused() returns nothing\n    -- Perform pause actions\nend handler\n\nprivate handler OnMyWidgetResumed() returns nothing\n    -- Perform resume actions\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A listener object that wraps the registered handlers."
			}],
			"description":"Use the <AndroidRegisterLifecycleListener> handler to register handlers to\napplication lifecycle events. The handler <pPauseHandler> will be called when\nthe application is paused and enters into the background. The handler\n<pResumeHandler> will be called when the application is resumed and returns from\nthe background.\n\nA listener object will be returned that wraps the registered handlers and can be\nused with <AndroidUnregisterLifecycleListener> to cancel the registration."
		},{
			"id":"builder-129",
			"name":"androidhaspermission",
			"display name":"AndroidHasPermission",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"AndroidHasPermission(<pPermission>)"
			],
			"display syntax":[
				"AndroidHasPermission(<i>pPermission</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Returns true if permission <pPermission> has been granted by the user.",
			"OS":["android"],
			"parameters":[{
				"name":"pPermission",
				"type":"",
				"refparam":"false",
				"description":"The name of the permission to request.\n\n-   \"android.permission.READ_CALENDAR\": permission to allow an application to read the device's calendar.\n-   \"android.permission.WRITE_CALENDAR\": permission to allow an application to write to the device's calendar.\n-   \"android.permission.CAMERA\": permission to allow an application to access the device's camera.\n-   \"android.permission.ACCESS_COARSE_LOCATION\": permission to allow an application to access the device's coarse location.\n-   \"android.permission.ACCESS_FINE_LOCATION\": permission to allow an application to access the device's fine location.\n-   \"android.permission.READ_CONTACTS\": permission to allow an application to read data from the device's contacts.\n-   \"android.permission.WRITE_CONTACTS\": permission to allow an application to write date to the device's contacts.\n-   \"android.permission.GET_ACCOUNTS\": permission to allow an application to access to the list of accounts in the Accounts Service.\n-   \"android.permission.RECORD_AUDIO\": permission to allow an application to allow an application to record audio.\n-   \"android.permission.READ_EXTERNAL_STORAGE\": permission to allow an application to read data from the device's external storage.\n-   \"android.permission.WRITE_EXTERNAL_STORAGE\": permission to allow an application to write data to the device's external storage.\n-   \"android.permission.READ_PHONE_STATE\": permission to allow an application to access phone state, including the phone number of the device, current cellular network information, the status of any ongoing calls, and a list of any PhoneAccounts registered on the device.\n-   \"android.permission.READ_PHONE_NUMBERS\": permission to allow an application to access the device's phone number(s).\n-   \"android.permission.CALL_PHONE\": permission to allow an application to initiate a phone call without going through the Dialer user interface for the user to confirm the call.\n-   \"android.permission.ANSWER_PHONE_CALLS\": permission to allow an application to answer an incoming phone call.\n-   \"android.permission.READ_CALL_LOG\": permission to allow an application to read the user's call log.\n-   \"android.permission.WRITE_CALL_LOG\": permission to allow an application to write to the user's call log.\n-   \"android.permission.ADD_VOICEMAIL\": permission to allow an application to add voicemails into the system.\n-   \"android.permission.USE_SIP\": permission to allow an application to use SIP service.\n-   \"android.permission.PROCESS_OUTGOING_CALLS\": permission to allow an application to see the number being dialed during an outgoing call with the option to redirect the call to a different number or abort the call altogether.\n-   \"android.permission.SEND_SMS\": permission to allow an application to send SMS messages.\n-   \"android.permission.RECEIVE_SMS\": permission to allow an application to receive SMS messages\n-   \"android.permission.READ_SMS\": permission to allow an application to read SMS messages.\n-   \"android.permission.RECEIVE_WAP_PUSH\": permission to allow an application to receive WAP push messages.\n-   \"android.permission.RECEIVE_MMS\": permission to allow an application to receive MMS messages.\n-   \"android.permission.BODY_SENSORS\": permission to allow an application to access data from sensors that the user uses to measure what is happening inside his/her body, such as heart rate."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if permission has been granted, false otherwise."
			}],
			"description":"Use the <AndroidHasPermission> function to find out if permission\n<pPermission> has been granted by the user.\n\n>*Note:* Permission names are case sensitive."
		},{
			"id":"builder-130",
			"name":"applicationcontext",
			"display name":"ApplicationContext",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"ApplicationContext()"
			],
			"display syntax":[
				"ApplicationContext()"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Get the application Context",
			"OS":["android"],
			"examples":[{
				"script":"__safe foreign handler _JNI_CreateButton(in pContext as JObject) returns JObject \\\n\tbinds to \"java:android.widget.Button>new(Landroid/content/Context;)?ui\"\n\nhandler NativeButtonView() returns JObject\n\treturn _JNI_CreateButton(ApplicationContext())\nend handler"
			}],
			"description":"Use the <ApplicationContext> handler to fetch the current application's\nContext object."
		},{
			"id":"builder-131",
			"name":"stringtoandroidcolor",
			"display name":"StringToAndroidColor",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"StringToAndroidColor(<pString>)"
			],
			"display syntax":[
				"StringToAndroidColor(<i>pString</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Convert a color string to an integer for Android",
			"OS":["android"],
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The color string"
			}],
			"description":"Use the <StringToAndroidColor> handler to convert a string representing\na color to an integer that can be used with Android color APIs.\n"
		},{
			"id":"builder-132",
			"name":"com.livecode.library.androidutils",
			"display name":"com.livecode.library.androidutils",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.library.androidutils"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"A library of utility handlers for functions commonly needed by Android widgets.",
			"OS":["android"],
			"description":"A library of utility handlers for functions commonly needed by Android widgets."
		},{
			"id":"builder-133",
			"name":"isnotnothing",
			"display name":"IsNotNothing",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> is not nothing"
			],
			"display syntax":[
				"<i>Target</i> is not nothing"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is nothing or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"examples":[{
				"script":"public handler CanBeNumber(in pString as String) returns Boolean\n    variable tNum as optional Number\n    put pString parsed as number into tNum\n    return tNum is not nothing\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns false if the given expression <Target> is nothing, and true otherwise."
			}],
			"description":"Use the <IsNotNothing> operator to test if operators or handlers have returned anything."
		},{
			"id":"builder-134",
			"name":"isnotempty",
			"display name":"IsNotEmpty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> is not empty"
			],
			"display syntax":[
				"<i>Target</i> is not empty"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is empty or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns false if the given expression <Target> evaluates to the empty value of that type, and true otherwise."
			}],
			"description":"Determines whether <Target> is empty or not."
		},{
			"id":"builder-135",
			"name":"isanumber",
			"display name":"IsANumber",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> is a number"
			],
			"display syntax":[
				"<i>Target</i> is a number"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a number or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a number, and false if not."
			}],
			"description":"Determines whether <Target> is a number or not."
		},{
			"id":"builder-136",
			"name":"isastring",
			"display name":"IsAString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> is a string"
			],
			"display syntax":[
				"<i>Target</i> is a string"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a string or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a string, and false if not."
			}],
			"description":"Determines whether <Target> is a string or not."
		},{
			"id":"builder-137",
			"name":"isempty",
			"display name":"IsEmpty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> is empty"
			],
			"display syntax":[
				"<i>Target</i> is empty"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is empty or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> evaluates to the empty value of that type, and false otherwise."
			}],
			"description":"Determines whether <Target> is empty or not."
		},{
			"id":"builder-138",
			"name":"isnothing",
			"display name":"IsNothing",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> is nothing"
			],
			"display syntax":[
				"<i>Target</i> is nothing"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is nothing or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is nothing, and false otherwise."
			}],
			"description":"Use the <IsNothing> operator to test if operators or handlers have returned anything."
		},{
			"id":"builder-139",
			"name":"isalist",
			"display name":"IsAList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> is a list"
			],
			"display syntax":[
				"<i>Target</i> is a list"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a list or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a list, and false if not."
			}],
			"description":"Determines whether <Target> is a list or not."
		},{
			"id":"builder-140",
			"name":"isaboolean",
			"display name":"IsABoolean",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> is a boolean"
			],
			"display syntax":[
				"<i>Target</i> is a boolean"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is a boolean or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is a boolean, and false if not."
			}],
			"description":"Determines whether <Target> is a boolean or not."
		},{
			"id":"builder-141",
			"name":"isadata",
			"display name":"IsAData",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> is a data"
			],
			"display syntax":[
				"<i>Target</i> is a data"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is data or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is data, and false if not."
			}],
			"description":"Determines whether <Target> is data or not."
		},{
			"id":"builder-142",
			"name":"isanarray",
			"display name":"IsAnArray",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> is an array"
			],
			"display syntax":[
				"<i>Target</i> is an array"
			],
			"associations":["com.livecode.type"],
			"summary":"Determines whether <Target> is an array or not.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"Any expression"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the given expression <Target> is an array, and false if not.\n"
			}],
			"description":"Determines whether <Target> is an array or not."
		},{
			"id":"builder-143",
			"name":"com.livecode.type",
			"display name":"com.livecode.type",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.type"
			],
			"associations":["com.livecode.type"],
			"summary":"This library consists of the general operations on types provided by the standard library of Builder.",
			"description":"This library consists of the general operations on types provided by the standard library of Builder."
		},{
			"id":"builder-144",
			"name":"sortlistascendingbinary",
			"display name":"SortListAscendingBinary",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in ascending byte order"
			],
			"display syntax":[
				"sort <i>Target</i> in ascending byte order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending binary order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of binary data."
			}],
			"description":"Binary sort is performed by comparing data elements on a byte by byte basis.\n>*Note:* It is an error if <Target> contains any elements of non-data type.",
			"tags":["sorting"]
		},{
			"id":"builder-145",
			"name":"sortlistusinghandler",
			"display name":"SortListUsingHandler",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"sort <Target> using handler <Handler>"
			],
			"display syntax":[
				"sort <i>Target</i> using handler <i>Handler</i>"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> using <Handler> as a comparison function.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list."
			},{
				"name":"Handler",
				"type":"",
				"refparam":"false",
				"description":"A handler of type <SortCompare>"
			}],
			"examples":[{
				"script":"variable sKeyIndex as Number\n\nprivate handler CompareListsByElement(in pLeft as any, in pRight as any) returns Integer\n   variable tLeft as Number\n   variable tRight as Number\n   put pLeft[sKeyIndex] into tLeft\n   put pRight[sKeyIndex] into tRight\n\n   if tLeft > tRight then\n      return 1\n   else if tLeft < tRight then\n      return -1\n   else\n      return 0\n   end if\nend handler\n\n-- Sort lists according to value at specified index of each list\npublic handler TestSortListOfLists(in pList as List, in pKeyIndex as Number) returns List\n   put pKeyIndex into sKeyIndex\n   sort pList using handler CompareListsByElement\n   return pList\nend handler"
			}],
			"description":"<SortListUsingHandler> sorts a list by comparing the elements of a list according to the\ncomparison implemented by the <Handler> argument.\n\n>*Note:* Supplying an inconsistent comparison operator to <SortListUsingHandler> causes\nundefined behavior.",
			"tags":["sorting"]
		},{
			"id":"builder-146",
			"name":"sortlistdescendingnumeric",
			"display name":"SortListDescendingNumeric",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending numeric order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending numeric order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending numeric order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of numbers."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n    put [3,4,5,1,2] into tTestList\n\n    sort tTestList in descending numeric order -- tTestList is [5,4,3,2,1]"
			}],
			"description":"Numeric sort is performed by comparing numeric elements by cardinality.\n>*Note:* It is an error if <Target> contains any elements of non-numeric type.",
			"tags":["sorting"]
		},{
			"id":"builder-147",
			"name":"sortlistascendingnumeric",
			"display name":"SortListAscendingNumeric",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in ascending numeric order"
			],
			"display syntax":[
				"sort <i>Target</i> in ascending numeric order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending numeric order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of numbers."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n    put [3,4,5,1,2] into tTestList\n\n    sort tTestList in ascending numeric order -- tTestList is [1,2,3,4,5]"
			}],
			"description":"Numeric sort is performed by comparing numeric elements by cardinality.\n>*Note:* It is an error if <Target> contains any elements of non-numeric type.",
			"tags":["sorting"]
		},{
			"id":"builder-148",
			"name":"sortlistascending",
			"display name":"SortListAscending",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"sort <Target> [in ascending order]"
			],
			"display syntax":[
				"sort <i>Target</i> [in ascending order]"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n\tput [4,3,1,5,2] into tTestList\n\n    sort tTestList -- tTestList is [1,2,3,4,5]"
			}],
			"description":"Generic sort is performed by comparing the elements of a homogeneous list according to the default comparison function associated to the type of its elements.\n>*Note:* It is an error if <Target> is not homogeneous, i.e. if it contains any elements of differing type.",
			"tags":["sorting"]
		},{
			"id":"builder-149",
			"name":"sortlistdescendingtext",
			"display name":"SortListDescendingText",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending text order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending text order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending text order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n    put the empty list into tTestList\n\n    push \"abcd\" onto tTestList\n    push \"xyz\" onto tTestList\n\n    sort tTestList in descending text order -- tTestList is [\"xyz\", \"abcd\"]"
			}],
			"description":"Text sort is performed by comparing string elements on a codepoint by codepoint basis.\n>*Note:* It is an error if <Target> contains any elements of non-string type.",
			"tags":["sorting"]
		},{
			"id":"builder-150",
			"name":"sortlistascendingtext",
			"display name":"SortListAscendingText",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in ascending text order"
			],
			"display syntax":[
				"sort <i>Target</i> in ascending text order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in ascending text order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"    variable tTestList as List\n\n\tvariable tChar\n\trepeat for each char tChar in \"spoilage\"\n\t\tpush tChar onto tTestList\n\tend repeat\n\n    sort tTestList in ascending text order\n    variable tString as String\n    combine tTestList with \"\" into tString -- tString is \"aegilops\""
			}],
			"description":"Text sort is performed by comparing string elements on a codepoint by codepoint basis.\n>*Note:* It is an error if <Target> contains any elements of non-string type.",
			"tags":["sorting"]
		},{
			"id":"builder-151",
			"name":"sortlistdescendingbinary",
			"display name":"SortListDescendingBinary",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending byte order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending byte order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending binary order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of binary data."
			}],
			"description":"Binary sort is performed by comparing data elements on a byte by byte basis.\n>*Note:* It is an error if <Target> contains any elements of non-data type.",
			"tags":["sorting"]
		},{
			"id":"builder-152",
			"name":"sortlistdescending",
			"display name":"SortListDescending",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"sort <Target> in descending order"
			],
			"display syntax":[
				"sort <i>Target</i> in descending order"
			],
			"associations":["com.livecode.sort"],
			"summary":"Sorts <Target> in descending text order.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"   \tvariable tTestList as List\n\tput [\"a\", \"b\", \"c\"] into tTestList\n\n    sort tTestList in descending order -- tTestList is [\"c\", \"b\", \"a\"]"
			}],
			"description":"Generic sort is performed by comparing the elements of a homogeneous list according to the default comparison function associated to the type of its elements.\n>*Note:* It is an error if <Target> is not homogeneous, i.e. if it contains any elements of differing type.",
			"tags":["sorting"]
		},{
			"id":"builder-153",
			"name":"com.livecode.sort",
			"display name":"com.livecode.sort",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.sort"
			],
			"associations":["com.livecode.sort"],
			"summary":"This library consists of the sorting operations provided by the standard library of Extension Builder.",
			"description":"This library consists of the sorting operations provided by the standard library of Extension Builder."
		},{
			"id":"builder-154",
			"name":"pathoperationaddpath",
			"display name":"PathOperationAddPath",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"add <mSource> to <mDest>"
			],
			"display syntax":[
				"add <i>mSource</i> to <i>mDest</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Extend a path by adding another path.",
			"parameters":[{
				"name":"mSource",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			},{
				"name":"mDest",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath\n\n// Add another rectangle subpath to tPath\nadd rectangle path of rectangle [110,10,310,60] to tPath"
			}],
			"description":"Adds the path defined by <mSource> to <mDest>.",
			"tags":["canvas"]
		},{
			"id":"builder-155",
			"name":"imagemakewithpixels",
			"display name":"ImageMakeWithPixels",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"image of size <mSize> with pixels <mPixels>"
			],
			"display syntax":[
				"image of size <i>mSize</i> with pixels <i>mPixels</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new image using raw pixel data.",
			"parameters":[{
				"name":"mSize",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of integers."
			},{
				"name":"mPixels",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data"
			}],
			"examples":[{
				"script":"// Read pixel data from file\nvariable tPixelData as Data\nput the contents of file \"image_argb_320x480.bin\" into tPixelData\n\n// Create image from pixel data\nvariable tImage as Image\nput image of size [320, 480] with pixels tPixelData into tImage"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new image of the given size, using the provided ARGB pixel data."
			}],
			"description":"Creates a new image using raw pixel data.",
			"tags":["canvas"]
		},{
			"id":"builder-156",
			"name":"canvasoperationmeasuretext",
			"display name":"CanvasOperationMeasureText",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"measure <mText> on <mCanvas>"
			],
			"display syntax":[
				"measure <i>mText</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Measure text when drawn to a canvas.",
			"parameters":[{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Measure text drawn on the canvas\nvariable tBounds as Rectangle\nmeasure \"Sample text\" on this canvas\nput the result into tBounds"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounding box of <mText> when drawn at point 0,0 with the current font of <mCanvas>. Returns the bounds as a rectangle in the result."
			}],
			"description":"Measure text when drawn to a canvas.",
			"tags":["canvas"]
		},{
			"id":"builder-157",
			"name":"effectpropertydistance",
			"display name":"EffectPropertyDistance",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the distance of <mEffect>"
			],
			"display syntax":[
				"the distance of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The distance of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with distance 5\nvariable tProps as Array\nput the empty array into tProps\n\nput 5 into tProps[\"distance\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Set the effect distance\nset the distance of tEffect to 50"
			}],
			"description":"The distance of <mEffect> as a number. Distance applies to inner shadow, and outer shadow effect types",
			"tags":["canvas"]
		},{
			"id":"builder-158",
			"name":"rectanglepropertywidth",
			"display name":"RectanglePropertyWidth",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the width of <mRect>"
			],
			"display syntax":[
				"the width of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The width of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the width of the rectangle in a variable\nvariable tWidth\nput the width of tRect into tWidth\n\n// Increase the width of the rectangle\nset the width of tRect to (tWidth + 10)"
			}],
			"description":"The width of the rectangle.\n\n>*Note:* Setting the width of a rectangle will resize it without moving the left edge, expanding or contracting from the right.",
			"tags":["canvas"]
		},{
			"id":"builder-159",
			"name":"gradientpropertytransform",
			"display name":"GradientPropertyTransform",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the transform of <mGradient>"
			],
			"display syntax":[
				"the transform of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The transform of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput radial gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\nvariable tRect\nput rectangle [ 20, 10, 120, 60 ] into tRect\n\n// Use the transform property to make the radial gradient spread out from the center of tRect\nvariable tTransform\nput the identity transform into tTransform\n\n// Offset transform to the center of tRect\ntranslate tTransform by [(the left of tRect + the right of tRect) / 2, (the top of tRect + the bottom of tRect) / 2]\n\n// Scale out to the right & bottom of tRect\nscale tTransform by [the width of tRect / 2, the height of tRect / 2]\n\n// Set the gradient transform\nset the transform of tGradient to tTransform"
			}],
			"description":"The transform of <mGradient> as a transform. This can be used to scale, position, and skew the gradient instead of setting the from, to, and via points.",
			"tags":["canvas"]
		},{
			"id":"builder-160",
			"name":"pointpropertyx",
			"display name":"PointPropertyX",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the x of <mPoint>"
			],
			"display syntax":[
				"the x of <i>mPoint</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The x coordinate of a point value.",
			"parameters":[{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"variable tPoint\nput point [50, 100] into tPoint\n\n// Store the x-coordinate of the point in a variable\nvariable tX\nput the x of tPoint into tX\n\n// Move the point 10 units to the right\nset the x of tPoint to (tX + 10)"
			}],
			"description":"The x coordinate of <mPoint>.",
			"tags":["canvas"]
		},{
			"id":"builder-161",
			"name":"transformpropertyinverse",
			"display name":"TransformPropertyInverse",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the inverse of <mTransform>"
			],
			"display syntax":[
				"the inverse of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The inverse of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with matrix [0,2,-2,0,50,100] into tTransform\n\n// Get the inverse of the current transform\nvariable tInverse\nput the inverse of tTransform into tInverse\n\n// Combine the transform with its inverse to produce the identity transform\nconcat tTransform with tInverse"
			}],
			"description":"The inverse of <mTransform>\n\n>*Note:* The inverse of a transform matrix is the transform that reverses the effect of the original. Combining a transform with its inverse will produce the identity transform.",
			"tags":["canvas"]
		},{
			"id":"builder-162",
			"name":"canvasoperationfill",
			"display name":"CanvasOperationFill",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"fill [ <mPath> on ] <mCanvas>"
			],
			"display syntax":[
				"fill [ <i>mPath</i> on ] <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Fill a path on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Fill a circle path on the canvas\nfill circle path centered at point [100,100] with radius 50 on this canvas"
			},{
				"script":"// Add a path to the canvas\nmove to point [50,50] on this canvas\nline to point [50,100] on this canvas\nline to point [100,100] on this canvas\n\n// Fill the current canvas path\nfill this canvas"
			}],
			"description":"Fills the region bound by <mPath> with the current canvas paint. If mPath is not specified then the current canvas path will be closed and filled, then emptied from the canvas.",
			"tags":["canvas"]
		},{
			"id":"builder-163",
			"name":"imagepropertypixels",
			"display name":"ImagePropertyPixels",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the pixels of <mImage>"
			],
			"display syntax":[
				"the pixels of <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The pixel data of an image.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// Get the pixels of the image\nvariable tPixelData as Data\nput the pixels of tImage into tPixelData"
			}],
			"description":"The raw ARGB pixel data of the image.",
			"tags":["canvas"]
		},{
			"id":"builder-164",
			"name":"getpixelheightofcanvas",
			"display name":"GetPixelHeightOfCanvas",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the pixel height of <Canvas>"
			],
			"display syntax":[
				"the pixel height of <i>Canvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Get the height of a canvas in pixels.",
			"parameters":[{
				"name":"Canvas",
				"type":"",
				"refparam":"false",
				"description":"The canvas to be examined."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The height of the canvas, in pixels."
			}],
			"description":"Get the height of a canvas in pixels.",
			"tags":["canvas"]
		},{
			"id":"builder-165",
			"name":"fontoperationtextimagebounds",
			"display name":"FontOperationTextImageBounds",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the image bounds of text <mText> with <mFont>"
			],
			"display syntax":[
				"the image bounds of text <i>mText</i> with <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Measure text precisely when drawn with a font.",
			"parameters":[{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Set up tFont as size 18 Arial\nvariable tFont as Font\nput font \"Arial\" at size 18 into tFont\n\n// Measure text with tFont\nvariable tBounds as Rectangle\nput the image bounds of text \"Sample text\" with tFont into tBounds"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounding box of <mText> when drawn at point 0,0 with font <mFont>. Returns the bounds as a rectangle."
			}],
			"description":"The exact bounds of the text, which will fully enclose each character.\n\n>*Note:* This can be more time-consuming to compute than the layout bounds.",
			"tags":["canvas"]
		},{
			"id":"builder-166",
			"name":"patternmake",
			"display name":"PatternMake",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"pattern with <mImage>"
			],
			"display syntax":[
				"pattern with <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new pattern paint.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load the pattern image.\nvariable tImage\nput image from file \"images/backgroundpattern.png\" into tImage\n\n// Create a new pattern based on the image\nvariable tPaint\nput pattern with tImage into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new pattern paint based on <mImage>."
			}],
			"description":"Creates a new pattern paint.",
			"tags":["canvas"]
		},{
			"id":"builder-167",
			"name":"gradientpropertyrepeat",
			"display name":"GradientPropertyRepeat",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the repeat of <mGradient>"
			],
			"display syntax":[
				"the repeat of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The repeat count of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Store the old gradient repeat count\nvariable tRepeat\nput the repeat of tGradient into tRepeat\n\n// Make the gradient repeat 3 times\nset the repeat of tGradient to 3"
			}],
			"description":"The repeat count of <mGradient> as a number. This determines how many times the ramp is repeated over the length of the gradient.",
			"tags":["canvas"]
		},{
			"id":"builder-168",
			"name":"canvaspropertyfillrule",
			"display name":"CanvasPropertyFillRule",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the fill rule of <mCanvas>"
			],
			"display syntax":[
				"the fill rule of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current fill rule of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Set canvas fill rule to non-zero.\nset the fill rule of this canvas to \"non-zero\""
			}],
			"description":"The rule used to determine when to fill enclosed regions of a path. Can be \"even odd\" or \"non-zero\".",
			"tags":["canvas"]
		},{
			"id":"builder-169",
			"name":"imagedensityproperty",
			"display name":"ImageDensityProperty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the density of <mImage>"
			],
			"display syntax":[
				"the density of <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The density of an image.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// scale down image based on standard DPI of 72.\nvariable tScale as Number\nput (72 / the density of tImage) into tScale\nscale this canvas by [tScale, tScale]\ndraw tImage into rectangle [0,0,the width of tImage,the height of tImage] of this canvas"
			}],
			"description":"The image density in DPI (dots per inch)",
			"tags":["canvas"]
		},{
			"id":"builder-170",
			"name":"transformpropertytranslation",
			"display name":"TransformPropertyTranslation",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the translation of <mTransform>"
			],
			"display syntax":[
				"the translation of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The translation component of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with matrix [0, 2, -2, 0, 50, 100] into tTransform\n\n// Store the old translation component\nvariable tTranslation\nput the translation of tTransform into tTranslation\n\n// Adjust the offset of the transformation\nset the translation of tTransform to [element 1 of tTranslation + 5, element 2 of tTranslation + 5]"
			}],
			"description":"The translation of <mTransform> as a list of 2 numbers (the x and y offset values).",
			"tags":["canvas"]
		},{
			"id":"builder-171",
			"name":"pathoperationscale",
			"display name":"PathOperationScale",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"scale <mPath> by <mScale>"
			],
			"display syntax":[
				"scale <i>mPath</i> by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a scale to a path.",
			"parameters":[{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath\n\n// Scale the path\nscale tPath by [2,2]"
			}],
			"description":"Scales <mPath> by <mScale>.",
			"tags":["canvas"]
		},{
			"id":"builder-172",
			"name":"patternpropertyimage",
			"display name":"PatternPropertyImage",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the image of <mPattern>"
			],
			"display syntax":[
				"the image of <i>mPattern</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The image of a pattern value.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			}],
			"examples":[{
				"script":"// Create a new pattern based on an image file\nvariable tPattern\nput pattern with image from file \"images/patternframe1.png\" into tPattern\n\n// Store the old image of tPattern\nvariable tImage\nput the image of tPattern into tImage\n\n// Set the pattern to draw the next image\nset the image of tPattern to image from file \"images/patternframe2.png\""
			}],
			"description":"The image of <mPattern>.",
			"tags":["canvas"]
		},{
			"id":"builder-173",
			"name":"canvaspropertyopacity",
			"display name":"CanvasPropertyOpacity",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the opacity of <mCanvas>"
			],
			"display syntax":[
				"the opacity of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current opacity setting of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// make subsequent drawing operations render with half transparency\nset the opacity of this canvas to 0.5"
			}],
			"description":"The opacity of drawing operations on <mCanvas>, as a number between 0 and 1.",
			"tags":["canvas"]
		},{
			"id":"builder-174",
			"name":"canvaspropertyfont",
			"display name":"CanvasPropertyFont",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the font of <mCanvas>"
			],
			"display syntax":[
				"the font of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current font of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Use 20pt Arial for text drawing on canvas\nset the font of this canvas to font \"Arial\" at size 20"
			}],
			"description":"The font used when drawing text on <mCanvas> as a font.",
			"tags":["canvas"]
		},{
			"id":"builder-175",
			"name":"canvasoperationclosepath",
			"display name":"CanvasOperationClosePath",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"close path on <mCanvas>"
			],
			"display syntax":[
				"close path on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Closes the current subpath of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Begin a new subpath on the canvas\nmove to point [25, 50] on this canvas\n\n// Continue path with a curve through 25,100 to 50,100\ncurve through point [25,100] to point [50,100] on this canvas\n\n// Close the path\nclose path on this canvas\n\n// stroke the canvas path\nstroke this canvas"
			}],
			"description":"Adds a line from the previous point to the start of current subpath, signaling the end of the subpath.",
			"tags":["canvas"]
		},{
			"id":"builder-176",
			"name":"getpixeldataofcanvas",
			"display name":"GetPixelDataOfCanvas",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the pixel data of <Canvas>"
			],
			"display syntax":[
				"the pixel data of <i>Canvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Get the current contents of a canvas as raw pixel data",
			"parameters":[{
				"name":"Canvas",
				"type":"",
				"refparam":"false",
				"description":"The canvas to be examined."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The raw pixel values as binary data."
			}],
			"description":"Capture the current contents of the <Canvas> as raw pixel data in RGBA\nformat with 8 bits per colour component, i.e. 32 bits or 4 bytes per\npixel.",
			"tags":["canvas"]
		},{
			"id":"builder-177",
			"name":"canvasoperationscale",
			"display name":"CanvasOperationScale",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"scale <mCanvas> by <mScale>"
			],
			"display syntax":[
				"scale <i>mCanvas</i> by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a scale to a canvas.",
			"parameters":[{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Scale the canvas\nscale this canvas by [2,2]"
			}],
			"description":"Scales the transform of <mCanvas> by <mScale>.",
			"tags":["canvas"]
		},{
			"id":"builder-178",
			"name":"solidpaintpropertycolor",
			"display name":"SolidPaintPropertyColor",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the color of <mSolid>"
			],
			"display syntax":[
				"the color of <i>mSolid</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The color of a solid paint value.\nmPaint:An expression which evaluates to a solid paint.",
			"examples":[{
				"script":"// Create a new green paint\nvariable tPaint\nput solid paint with color [0,1,0] into tPaint\n\n// Store the old color of tPaint\nvariable tColor\nput the color of tPaint into tColor\n\n// Set the color of tPaint to blue\nset the color of tPaint to color [0,0,1]"
			}],
			"description":"The color of <mPaint>.",
			"tags":["canvas"]
		},{
			"id":"builder-179",
			"name":"effectpropertyknockout",
			"display name":"EffectPropertyKnockOut",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the knockout of <mEffect>"
			],
			"display syntax":[
				"the knockout of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The knockout of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with knockout set to false\nvariable tProps as Array\nput the empty array into tProps\n\nput false into tProps[\"knockout\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Set the effect knockout to true\nset the knockout of tEffect to true"
			}],
			"description":"The knockout setting of <mEffect> as a boolean. Knockout applies to outer shadow effects and determines whether or not the alpha channel of the source image is applied to the blurred shadow created by the effect. Defaults to true.",
			"tags":["canvas"]
		},{
			"id":"builder-180",
			"name":"pathmakewithroundedrectanglewithradii",
			"display name":"PathMakeWithRoundedRectangleWithRadii",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"rounded rectangle path of <Rectangle> with radii <Radii>"
			],
			"display syntax":[
				"rounded rectangle path of <i>Rectangle</i> with radii <i>Radii</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Create a new rectangle path with elliptical corner rounding",
			"parameters":[{
				"name":"Rectangle",
				"type":"",
				"refparam":"false",
				"description":"A rectangle to create the path from"
			},{
				"name":"Radii",
				"type":"",
				"refparam":"false",
				"description":"A list of the horizontal radius and vertical radius for rounding"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A newly-created canvas path"
			}],
			"description":"Create a new rounded rectangle path based on <Rectangle>.\n\nThe <Radii> is a list of two numbers.  The first specifies the\nhorizontal rounding radius and the second specifies the vertical\nrounding radius.",
			"tags":["canvas"]
		},{
			"id":"builder-181",
			"name":"rectanglepropertybottom",
			"display name":"RectanglePropertyBottom",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the bottom of <mRect>"
			],
			"display syntax":[
				"the bottom of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The bottom edge of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the bottom edge of the rectangle in a variable\nvariable tBottom\nput the bottom of tRect into tBottom\n\n// Move the rectangle vertically to a new position.\nset the bottom of tRect to (tBottom + 10)"
			}],
			"description":"The location along the y-axis of the bottom edge of the rectangle.\n\n>*Note:* Setting the bottom of a rectangle will reposition it without altering the width or height.",
			"tags":["canvas"]
		},{
			"id":"builder-182",
			"name":"fontmakewithstyleandsize",
			"display name":"FontMakeWithStyleAndSize",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"font <mName> with ( bold  | italic  | bold italic  ) style at size <mSize>"
			],
			"display syntax":[
				"font <i>mName</i> with ( bold  | italic  | bold italic  ) style at size <i>mSize</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new instance of the named font.",
			"parameters":[{
				"name":"mName",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mSize",
				"type":"",
				"refparam":"false",
				"description":"An Expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create 20pt bold Arial font\nvariable tFont as Font\nput font \"Arial\" with bold style at size 20 into tFont"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new instance of the named font with style bold, italic, or bold italic, at size <mSize> points."
			}],
			"description":"Creates a new instance of the named font.",
			"tags":["canvas"]
		},{
			"id":"builder-183",
			"name":"fontpropertybold",
			"display name":"FontPropertyBold",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the bold of <mFont>"
			],
			"display syntax":[
				"the bold of <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The bold setting of a font.",
			"parameters":[{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Create a font\nvariable tFont as Font\nput font \"Arial\" at size 20 into tFont\n\n// Set the font to bold\nset the bold of tFont to true"
			}],
			"description":"The bold flag of <mFont> as a boolean. If true, then <mFont> is bold.",
			"tags":["canvas"]
		},{
			"id":"builder-184",
			"name":"pathmake",
			"display name":"PathMake",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"path <mInstructions>"
			],
			"display syntax":[
				"path <i>mInstructions</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mInstructions",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"// Create a closed path with a line and some curves\nvariable tPath as Path\nput path \"M10,10 L50,100 Q100,100 100,50 C75,50 50,25 50,10z\" into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new path created from the instructions provided. The format of the path instructions is the same as that used for SVG path data as defined here - http://www.w3.org/TR/SVG/paths.html#PathData"
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"builder-185",
			"name":"com.livecode.canvas",
			"display name":"com.livecode.canvas",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.canvas"
			],
			"associations":["com.livecode.canvas"],
			"summary":"This module specifies the syntax definitions and bindings for canvas drawing operations in Extension Builder.",
			"description":"This module specifies the syntax definitions and bindings for canvas drawing operations in Extension Builder."
		},{
			"id":"builder-186",
			"name":"transformmakeskew",
			"display name":"TransformMakeSkew",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"transform with skew <mSkew>"
			],
			"display syntax":[
				"transform with skew <i>mSkew</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new skewing transform value.\nmScale:An expression which evaluates to a list of 2 numbers, the x-axis skew and y-axis skew.",
			"examples":[{
				"script":"// Create skew transform\nvariable tTransform\nput transform with skew [1,0] into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new skew transform."
			}],
			"description":"Creates a new skewing transform value.\nmScale:An expression which evaluates to a list of 2 numbers, the x-axis skew and y-axis skew.",
			"tags":["canvas"]
		},{
			"id":"builder-187",
			"name":"pointpropertyy",
			"display name":"PointPropertyY",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the y of <mPoint>"
			],
			"display syntax":[
				"the y of <i>mPoint</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The y coordinate of a point value.",
			"parameters":[{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"variable tPoint\nput point [50, 100] into tPoint\n\n// Store the y-coordinate of the point in a variable\nvariable tY\nput the y of tPoint into tY\n\n// Move the point 10 units downward.\nset the y of tPoint to (tY + 10)"
			}],
			"description":"The y coordinate of <mPoint>.",
			"tags":["canvas"]
		},{
			"id":"builder-188",
			"name":"thiscanvas",
			"display name":"ThisCanvas",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"this canvas"
			],
			"display syntax":[
				"this canvas"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The canvas used when drawing a widget.",
			"examples":[{
				"script":"// Draw the label centered on the rect of the widget\nset the paint of this canvas to solid paint with color [1,1,1]\nfill text \"Start\" at center of my rectangle on this canvas"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The target canvas for widget drawing operations."
			}],
			"description":"The canvas used when drawing a widget.",
			"tags":["canvas"]
		},{
			"id":"builder-189",
			"name":"patternmakescaledby",
			"display name":"PatternMakeScaledBy",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"pattern with <mImage> scaled by <mScale>"
			],
			"display syntax":[
				"pattern with <i>mImage</i> scaled by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new scaled pattern paint.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			},{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 1 or 2 numbers, the x-axis scale and y-axis scale, or the uniform scale when only a single value is given."
			}],
			"examples":[{
				"script":"// Load the pattern image.\nvariable tImage\nput image from file \"images/backgroundpattern.png\" into tImage\n\n// Create a new pattern paint, scaling the image to half size\nvariable tPaint\nput pattern with tImage scaled by [0.5] into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new pattern paint based on <mImage> with the specified scale applied."
			}],
			"description":"Creates a new scaled pattern paint.",
			"tags":["canvas"]
		},{
			"id":"builder-190",
			"name":"canvasoperationcurvethrough",
			"display name":"CanvasOperationCurveThrough",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"curve through <mThroughA> [ then <mThroughB> ] to <mPoint> on <mCanvas>"
			],
			"display syntax":[
				"curve through <i>mThroughA</i> [ then <i>mThroughB</i> ] to <i>mPoint</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Add a curve to a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mThroughA",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mThroughA",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// Begin a new subpath on the canvas\nmove to point [25, 50] on this canvas\n\n// Continue path with a curve through 25,100 to 50,100\ncurve through point [25,100] to point [50,100] on this canvas\n\n// Continue path with a curve through 50,75 then 50,50 to 50,100\ncurve through point [50,75] then point [50,50] to point [25,50] on this canvas\n\n// stroke the canvas path\nstroke this canvas"
			}],
			"description":"Adds a curve through 1 or 2 points to <mPoint> on the current path of <mCanvas>",
			"tags":["canvas"]
		},{
			"id":"builder-191",
			"name":"transformpropertyskew",
			"display name":"TransformPropertySkew",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the skew of <mTransform>"
			],
			"display syntax":[
				"the skew of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The skew component of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with matrix [0, 2, -2, 0, 50, 100] into tTransform\n\n// Store the old skew component\nvariable tSkew\nput the skew of tTransform into tSkew\n\n// Remove the skew\nset the skew of tTransform to [0,0]"
			}],
			"description":"The skew of <mTransform> as a list of 2 numbers (the x and y skew values).",
			"tags":["canvas"]
		},{
			"id":"builder-192",
			"name":"colorpropertyalpha",
			"display name":"ColorPropertyAlpha",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the alpha of <mColor>"
			],
			"display syntax":[
				"the alpha of <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The alpha component of a color value.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"variable tColor\nput color [0.75, 1.0, 0.5] into tColor\n\n// Store the old alpha value\nvariable tAlpha\nput the alpha of tColor into tAlpha\n\n// Make the color semi-transparent\nset the alpha of tColor to 0.5"
			}],
			"description":"The alpha component of <mColor>\n\n>*Note:* The alpha value represents the opacity of the color, expressed as a real number between 0 (fully transparent) and 1 (fully opaque).",
			"tags":["canvas"]
		},{
			"id":"builder-193",
			"name":"effectpropertytype",
			"display name":"EffectPropertyType",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the type of <mEffect>"
			],
			"display syntax":[
				"the type of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The type of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an outer shadow effect\nvariable tEffect as Effect\nput outer shadow effect into tEffect\n\n// Get the type of the effect, in this case it will be \"outer shadow\"\nvariable tType as String\nput the type of tEffect into tType"
			}],
			"description":"The type of <mEffect> as a string. Can be one of \"color overlay\", \"inner shadow\", \"outer shadow\", \"inner glow\", \"outer glow\".",
			"tags":["canvas"]
		},{
			"id":"builder-194",
			"name":"gradientstopmake",
			"display name":"GradientStopMake",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"gradient stop at <mOffset> with <mColor>"
			],
			"display syntax":[
				"gradient stop at <i>mOffset</i> with <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new gradient stop.",
			"parameters":[{
				"name":"mOffset",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"// List to hold gradient stops\nvariable tRamp\nput the empty list into tRamp\n\n// First gradient stop is red at position 0\npush gradient stop at 0 with color [1,0,0] onto tRamp\n\n// Second stop is half-transparent green at position 0.5\npush gradient stop at 0.5 with color [0,1,0,0.5] onto tRamp\n\n// Third stop is blue at position 1\npush gradient stop at 1 with color [0,0,1] onto tRamp"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new gradient stop."
			}],
			"description":"Creates a new gradient stop.",
			"tags":["canvas"]
		},{
			"id":"builder-195",
			"name":"gradientoperationtransform",
			"display name":"GradientOperationTransform",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"transform <mGradient> by <mTransform>"
			],
			"display syntax":[
				"transform <i>mGradient</i> by <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a transform to a gradient paint.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Scale the gradient with a transform\ntransform tGradient by transform with scale [2,2]"
			}],
			"description":"Concatenates the transform of <mGradient> with <mTransform>.",
			"tags":["canvas"]
		},{
			"id":"builder-196",
			"name":"fontoperationtextlayoutboundsoncanvas",
			"display name":"FontOperationTextLayoutBoundsOnCanvas",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the [ layout ] bounds of text <mText> on <mCanvas>"
			],
			"display syntax":[
				"the [ layout ] bounds of text <i>mText</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Measure text when drawn to a canvas.",
			"parameters":[{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Set the canvas font\nset the font of this canvas to font \"Arial\" at size 18\n\nvariable tBounds as Rectangle\nput the bounds of text \"Sample text\" on this canvas into tBounds"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounding box of <mText> when drawn at point 0,0 with the current font of <mCanvas>. Returns the bounds as a rectangle."
			}],
			"description":"The layout bounds of the text, constructed from the ascent and descent values of the font, and the width of the text string.\n\n>*Note:* The layout bounds is used to position blocks of text relative to each other, so the text may overlap these bounds.",
			"tags":["canvas"]
		},{
			"id":"builder-197",
			"name":"transformmakeidentity",
			"display name":"TransformMakeIdentity",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the identity transform"
			],
			"display syntax":[
				"the identity transform"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The identity transform.",
			"examples":[{
				"script":"variable tTransform\nput the identity transform into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new identity transform."
			}],
			"description":"The identity transform represents a coordinate transformation where the set of coordinates remain the same after it is applied. This can be useful when specifying that coordinates should not be altered, or as a starting point when combining transforms to produce a more complex one.",
			"tags":["canvas"]
		},{
			"id":"builder-198",
			"name":"canvaspropertydashes",
			"display name":"CanvasPropertyDashes",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the dashes of <mCanvas>"
			],
			"display syntax":[
				"the dashes of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current dashes of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw a rectangle with short, widely spaced dashes\nset the dashes of this canvas to [10, 40]\nstroke rectangle path of rectangle [50, 50, 200, 200] on this canvas"
			}],
			"description":"The dashes as a list of numbers. The dashes specifies a sequence of lengths that alternately represent space and dash lengths when stroking a path.",
			"tags":["canvas"]
		},{
			"id":"builder-199",
			"name":"effectmake",
			"display name":"EffectMake",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"<mType> effect"
			],
			"display syntax":[
				"<i>mType</i> effect"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new effect.",
			"parameters":[{
				"name":"mType",
				"type":"",
				"refparam":"false",
				"description":"One of color overlay, inner shadow, outer shadow, inner glow, outer glow."
			}],
			"examples":[{
				"script":"// Create an effect with default properties\nvariable tEffect as Effect\nput outer shadow effect into tEffect"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new effect of type <mType> with default property values."
			}],
			"description":"Creates a new effect.",
			"tags":["canvas"]
		},{
			"id":"builder-200",
			"name":"imagemakefromdata",
			"display name":"ImageMakeFromData",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"image from data <mData>"
			],
			"display syntax":[
				"image from data <i>mData</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new image.",
			"parameters":[{
				"name":"mData",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data"
			}],
			"examples":[{
				"script":"// Load image from a block of data\nvariable tData\nput the contents of file \"images/logo.png\" into tData\n\nvariable tImage\nput image from data tData into tImage"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new image decoded from the data provided."
			}],
			"description":"Creates a new image.",
			"tags":["canvas"]
		},{
			"id":"builder-201",
			"name":"fontmakewithsize",
			"display name":"FontMakeWithSize",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"font <mName>  at size <mSize>"
			],
			"display syntax":[
				"font <i>mName</i>  at size <i>mSize</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new instance of the named font.",
			"parameters":[{
				"name":"mName",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mSize",
				"type":"",
				"refparam":"false",
				"description":"An Expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create 20pt Arial font\nvariable tFont as Font\nput font \"Arial\" at size 20 into tFont"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new instance of the named font at size <mSize> points."
			}],
			"description":"Creates a new instance of the named font.",
			"tags":["canvas"]
		},{
			"id":"builder-202",
			"name":"effectpropertyspread",
			"display name":"EffectPropertySpread",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the spread of <mEffect>"
			],
			"display syntax":[
				"the spread of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The spread of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with spread 0\nvariable tProps as Array\nput the empty array into tProps\n\nput 0 into tProps[\"spread\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Set the effect spread\nset the spread of tEffect to 0.1"
			}],
			"description":"The spread of <mEffect> as a number between 0 and 1. Spread applies to inner shadow, outer shadow, inner glow, and outer glow effect types",
			"tags":["canvas"]
		},{
			"id":"builder-203",
			"name":"newcanvaswithsize",
			"display name":"NewCanvasWithSize",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"a new canvas with size <Size>"
			],
			"display syntax":[
				"a new canvas with size <i>Size</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Create a new canvas",
			"parameters":[{
				"name":"Size",
				"type":"",
				"refparam":"false",
				"description":"A list containing the width and height of the new canvas in pixels"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A newly-created canvas"
			}],
			"description":"Create and return a new temporary canvas of the specified pixel width\nand height.",
			"tags":["canvas"]
		},{
			"id":"builder-204",
			"name":"gradientpropertyto",
			"display name":"GradientPropertyTo",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the to of <mGradient>"
			],
			"display syntax":[
				"the to of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The to point of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\nvariable tRect\nput rectangle [ 20, 10, 120, 60 ] into tRect\n\n// Set the end point of the gradient to the right of tRect\nset the from of tGradient to point [the right of tRect, (the top of tRect + the bottom of tRect) / 2]"
			}],
			"description":"The to point of <mGradient> as a point. Defines the end point when drawing the gradient.",
			"tags":["canvas"]
		},{
			"id":"builder-205",
			"name":"pathoperationarcto",
			"display name":"PathOperationArcTo",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"arc through <mThrough> to <mTo> with radius <mRadius> on <mPath>"
			],
			"display syntax":[
				"arc through <i>mThrough</i> to <i>mTo</i> with radius <i>mRadius</i> on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Adds an arc to a path.",
			"parameters":[{
				"name":"mThrough",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mTo",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Construct a path tracing out a rectangle with rounded bottom corners.\nvariable tPath\nput the empty path into tPath\n\n// Begin a new subpath\nmove to point [0, 0] on tPath\n\n// Continue path with an arc to the bottom edge\narc through point [0, my height] to point [25, my height] with radius 25 on tPath\n\n// Continue path with an arc to the right edge\narc through point [my width, my height] to point [my width, 0] with radius 25 on tPath\n\n// Close the path with a line back to the starting point\nclose path on tPath"
			}],
			"description":"Adds an arc between the points of a circle with radius <mRadius> tangent to the lines from the current point to <mThrough>, and from <mThrough> to <mTo>.",
			"tags":["canvas"]
		},{
			"id":"builder-206",
			"name":"gradientoperationaddstop",
			"display name":"GradientOperationAddStop",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"add <mStop> to <mGradient>"
			],
			"display syntax":[
				"add <i>mStop</i> to <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Add a new stop to the ramp of a gradient paint.",
			"parameters":[{
				"name":"mStop",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient stop"
			},{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint with empty ramp\nvariable tGradient\nput linear gradient with ramp [] into tGradient\n\n// Add stops to the gradient\nadd gradient stop at 0 with color [0,0,0] to tGradient\nadd gradient stop at 1 with color [1,1,1] to tGradient"
			}],
			"description":"Appends the stop to the ramp of <mGradient>. The offset of the new gradient should not be before the offset of the last stop.",
			"tags":["canvas"]
		},{
			"id":"builder-207",
			"name":"canvasoperationtransform",
			"display name":"CanvasOperationTransform",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"transform <mCanvas> by <mTransform>"
			],
			"display syntax":[
				"transform <i>mCanvas</i> by <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a transform to a canvas.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Scale the canvas with a transform\ntransform this canvas by transform with scale [2,2]"
			}],
			"description":"Concatenates the transform of <mCanvas> with <mTransform>.",
			"tags":["canvas"]
		},{
			"id":"builder-208",
			"name":"canvaspropertydashphase",
			"display name":"CanvasPropertyDashPhase",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the dash phase of <mCanvas>"
			],
			"display syntax":[
				"the dash phase of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current dash phase of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw a rectangle with short, widely spaced dashes, offset to begin from the middle of the dash pattern\nset the dashes of this canvas to [10, 40]\nset the dash phase of this canvas to 25\nstroke rectangle path of rectangle [50, 50, 200, 200] on this canvas"
			}],
			"description":"The offset into the dashes at which to begin applying the dash pattern.",
			"tags":["canvas"]
		},{
			"id":"builder-209",
			"name":"canvasoperationbeginlayer",
			"display name":"CanvasOperationBeginLayer",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"begin layer [ with <mEffect> ] on <mCanvas>"
			],
			"display syntax":[
				"begin layer [ with <i>mEffect</i> ] on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Begin a new drawing layer on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Draw two overlapping rectangles grouped with half transparency\nset the opacity of this canvas to 0.5\nbegin layer on this canvas\nfill rectangle path of rectangle path [50,50,100,100] on this canvas\nfill rectangle path of rectangle path [75,75,125,125] on this canvas\nend layer on this canvas"
			},{
				"script":"// Create an effect for the new layer\nvariable tEffect as Effect\nput outer shadow effect into tEffect\n\n// Draw rectangle with an effect applied\nbegin layer with tEffect on this canvas\nfill rectangle path of rectangle [50,50,100,100] on this canvas\nend layer on this canvas"
			}],
			"description":"Begins a new layer on <mCanvas> to group drawing operations for which the opacity, blend mode, and optional effect are to be applied to as a whole rather than individually.",
			"tags":["canvas"]
		},{
			"id":"builder-210",
			"name":"pathmakewithline",
			"display name":"PathMakeWithLine",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"line path from <mFrom> to <mTo>"
			],
			"display syntax":[
				"line path from <i>mFrom</i> to <i>mTo</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mFrom",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mTo",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// Create a line path\nvariable tPath as Path\nput line path from point [50,100] to point [100,50] into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new line path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"builder-211",
			"name":"fontoperationtextlayoutbounds",
			"display name":"FontOperationTextLayoutBounds",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the [ layout ] bounds of text <mText> with <mFont>"
			],
			"display syntax":[
				"the [ layout ] bounds of text <i>mText</i> with <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Measure text when drawn with a font.",
			"parameters":[{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Set up tFont as size 18 Arial\nvariable tFont as Font\nput font \"Arial\" at size 18 into tFont\n\n// Measure text with tFont\nvariable tBounds as Rectangle\nput the bounds of text \"Sample text\" with tFont into tBounds"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounding box of <mText> when drawn at point 0,0 with font <mFont>. Returns the bounds as a rectangle."
			}],
			"description":"The layout bounds of the text, constructed from the ascent and descent values of the font, and the width of the text string.\n\n>*Note:* The layout bounds is used to position blocks of text relative to each other, so the text may overlap these bounds.",
			"tags":["canvas"]
		},{
			"id":"builder-212",
			"name":"imagepropertywidth",
			"display name":"ImagePropertyWidth",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the width of <mImage>"
			],
			"display syntax":[
				"the width of <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The width of an image.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// Get the image width\nvariable tWidth as Integer\nput the width of tImage into tWidth"
			}],
			"description":"The width of the image in pixels.",
			"tags":["canvas"]
		},{
			"id":"builder-213",
			"name":"pathmakeempty",
			"display name":"PathMakeEmpty",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the empty path"
			],
			"display syntax":[
				"the empty path"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new empty path.",
			"examples":[{
				"script":"// Initialize the path to empty\nvariable tPath as Path\nput the empty path into tPath\n\n// add a line to the path\nmove to point [0,50] on tPath\nline to point [100,50] on tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An empty path."
			}],
			"description":"Creates a new empty path.",
			"tags":["canvas"]
		},{
			"id":"builder-214",
			"name":"gradientoperationrotate",
			"display name":"GradientOperationRotate",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"rotate <mGradient> by <mRotation>"
			],
			"display syntax":[
				"rotate <i>mGradient</i> by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a rotation to a gradient paint.",
			"parameters":[{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Rotate the gradient\nrotate tGradient by 45"
			}],
			"description":"Rotates the transform of <mGradient> by <mRotation> degrees.",
			"tags":["canvas"]
		},{
			"id":"builder-215",
			"name":"solidpaintmake",
			"display name":"SolidPaintMake",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"solid paint with <mColor>"
			],
			"display syntax":[
				"solid paint with <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new solid color paint.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"// Create a new green paint\nvariable tPaint\nput solid paint with color [0,1,0] into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new paint using <mColor>."
			}],
			"description":"Creates a new solid color paint.",
			"tags":["canvas"]
		},{
			"id":"builder-216",
			"name":"canvasoperationclippath",
			"display name":"CanvasOperationClipPath",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"clip to <mPath> on <mCanvas>"
			],
			"display syntax":[
				"clip to <i>mPath</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Clip to a path on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Set the canvas clip\nclip to circle path centered at point [100,100] with radius 50 on this canvas\n\n// Fill rectangle path on canvas. only the region of the rectangle that falls within the canvas clip will be rendered.\nfill rectangle path of rectangle [25, 25, 75, 75] on this canvas"
			}],
			"description":"Modifies the clip of <mCanvas> by intersecting with <mRect>. Drawing operations on <mCanvas> will be confined to the clip region.",
			"tags":["canvas"]
		},{
			"id":"builder-217",
			"name":"colormake",
			"display name":"ColorMake",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"color <mColor>"
			],
			"display syntax":[
				"color <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new color value.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 3 or 4 numbers, the red, green, blue, and (optional) alpha components of the color."
			}],
			"examples":[{
				"script":"variable tColor\n// Set tColor to opaque red\nput color [1.0, 0.0, 0.0] into tColor\n\n// Set tColor to partially transparent cyan\nput color [0.0, 1.0, 1.0, 0.75] into tColor"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new color with the given RGBA values."
			}],
			"description":">*Note:* The component value denotes the intensity of that component, expressed as a real number between 0 and 1. The alpha component represents the opacity of the color. If the alpha component is not specified then it is assumed to be 1 (fully opaque).",
			"tags":["canvas"]
		},{
			"id":"builder-218",
			"name":"pathmakewitharc",
			"display name":"PathMakeWithArc",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"arc path centered at <mCenter> with [ radius <mRadius> | radii <mRadii> ] from <mStartAngle> to <mEndAngle>"
			],
			"display syntax":[
				"arc path centered at <i>mCenter</i> with [ radius <i>mRadius</i> | radii <i>mRadii</i> ] from <i>mStartAngle</i> to <i>mEndAngle</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mCenter",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mStartAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mEndAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create an elliptical arc path\nvariable tPath as Path\nput arc path centered at point [100,100] with radii [100,75] from 0 to 270 into tPath"
			},{
				"script":"// Create a circular arc path\nvariable tPath as Path\nput arc path centered at point [100,100] with radius 100 from 0 to 270 into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new arc path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"builder-219",
			"name":"transformoperationtranslate",
			"display name":"TransformOperationTranslate",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"translate <mTransform> by <mTranslation>"
			],
			"display syntax":[
				"translate <i>mTransform</i> by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a translation to a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x and y offsets of the translation."
			}],
			"examples":[{
				"script":"// Create a new transform\nvariable tTransform\nput the identity transform into tTransform\n\nvariable tRect\nput rectangle [10, 20, 110, 170] into tRect\n\n// Translate the transform to the top-left of tRect\ntranslate tTransform by [the left of tRect, the top of tRect]"
			}],
			"description":"Apply a translation to <mTransform>. This is equivalent to concatenating <mTransform> with a new translation transform.",
			"tags":["canvas"]
		},{
			"id":"builder-220",
			"name":"pathoperationclosepath",
			"display name":"PathOperationClosePath",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"close path on <mPath>"
			],
			"display syntax":[
				"close path on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Closes the current subpath of a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a new empty path\nvariable tPath as Path\nput the empty path into tPath\n\n// Begin a new subpath of tPath\nmove to point [25, 50] on tPath\n\n// Continue path with a curve through 25,100 to 50,100\ncurve through [25,100] to [50,100] on tPath\n\n// Close the path\nclose path on tPath"
			}],
			"description":"Adds a line from the previous point to the start of current subpath, signaling the end of the subpath.",
			"tags":["canvas"]
		},{
			"id":"builder-221",
			"name":"canvasoperationlineto",
			"display name":"CanvasOperationLineTo",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"line to <mPoint> on <mCanvas>"
			],
			"display syntax":[
				"line to <i>mPoint</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Add a line to a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// move to a point on the canvas\nmove to point [0,50] on this canvas\n\n// add a line to the canvas path\nline to point [50,50] on this canvas\n\n// stroke the canvas path\nstroke this canvas"
			}],
			"description":"Adds a line to <mPoint> on the current path of <mCanvas>",
			"tags":["canvas"]
		},{
			"id":"builder-222",
			"name":"pathoperationtransform",
			"display name":"PathOperationTransform",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"transform <mPath> by <mTransform>"
			],
			"display syntax":[
				"transform <i>mPath</i> by <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a transform to a path.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath\n\n// Scale the path with a transform\ntransform tPath by transform with scale [2,2]"
			}],
			"description":"Transforms the points of <mPath> with <mTransform>.",
			"tags":["canvas"]
		},{
			"id":"builder-223",
			"name":"gradientstoppropertyoffset",
			"display name":"GradientStopPropertyOffset",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the offset of <mStop>"
			],
			"display syntax":[
				"the offset of <i>mStop</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The offset of a gradient stop value.",
			"parameters":[{
				"name":"mStop",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient stop."
			}],
			"examples":[{
				"script":"variable tStop\nput gradient stop at 0 with color [1,1,1] into tStop\n\n// Get the offset of a stop\nvariable tOffset\nput the offset of tStop into tOffset\n\n// Move the stop to a new offset\nset the offset of tStop to 0.75"
			}],
			"description":"The offset of <mStop>.",
			"tags":["canvas"]
		},{
			"id":"builder-224",
			"name":"effectpropertysource",
			"display name":"EffectPropertySource",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the source of <mEffect>"
			],
			"display syntax":[
				"the source of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The source of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with source set to \"center\"\nvariable tProps as Array\nput the empty array into tProps\n\nput \"center\" into tProps[\"source\"]\n\nvariable tEffect as Effect\nput inner glow effect with properties tProps into tEffect\n\n// Set the effect source to \"edge\"\nset the source of tEffect to \"edge\""
			}],
			"description":"The source of <mEffect> as a string. Can be one of \"center\" or \"edge\". Source applies to inner glow effects and determines where the glow extends from. Defaults to \"edge\".",
			"tags":["canvas"]
		},{
			"id":"builder-225",
			"name":"colorpropertyblue",
			"display name":"ColorPropertyBlue",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the blue of <mColor>"
			],
			"display syntax":[
				"the blue of <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The blue component of a color value.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"variable tColor\nput color [0.75, 1.0, 0.5] into tColor\n\n// Store the old blue value\nvariable tBlue\nput the blue of tColor into tBlue\n\n// Set the blue component of the color to full intensity\nset the blue of tColor to 1"
			}],
			"description":"The blue component of <mColor>\n\n>*Note:* The component value denotes the intensity of that component, expressed as a real number between 0 and 1.",
			"tags":["canvas"]
		},{
			"id":"builder-226",
			"name":"patternmakerotatedby",
			"display name":"PatternMakeRotatedBy",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"pattern with <mImage> rotated by <mRotation>"
			],
			"display syntax":[
				"pattern with <i>mImage</i> rotated by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new rotated pattern paint.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			},{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number of degrees."
			}],
			"examples":[{
				"script":"// Load the pattern image.\nvariable tImage\nput image from file \"images/backgroundpattern.png\" into tImage\n\n// Create a new pattern paint, rotating the image through 90 degrees\nvariable tPaint\nput pattern with tImage rotated by 90 into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new pattern paint based on <mImage> with the specified rotation applied."
			}],
			"description":"Creates a new rotated pattern paint.",
			"tags":["canvas"]
		},{
			"id":"builder-227",
			"name":"pathpropertyboundingbox",
			"display name":"PathPropertyBoundingBox",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the bounding box of <mPath>"
			],
			"display syntax":[
				"the bounding box of <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The bounding box of a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a circle path\nvariable tPath as Path\nput circle path centered at point [100,100] with radius 50 into tPath\n\n// Get the bounds of the path\nvariable tBounds as Rectangle\nput the bounding box of tPath into tBounds"
			}],
			"description":"The smallest rectangle that competely encloses <mPath>.",
			"tags":["canvas"]
		},{
			"id":"builder-228",
			"name":"colorpropertygreen",
			"display name":"ColorPropertyGreen",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the green of <mColor>"
			],
			"display syntax":[
				"the green of <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The green component of a color value.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"variable tColor\nput color [0.75, 1.0, 0.5] into tColor\n\n// Store the old green value\nvariable tGreen\nput the green of tColor into tGreen\n\n// Remove any green component from the color\nset the green of tColor to 0"
			}],
			"description":"The green component of <mColor>\n\n>*Note:* The component value denotes the intensity of that component, expressed as a real number between 0 and 1.",
			"tags":["canvas"]
		},{
			"id":"builder-229",
			"name":"pathoperationmoveto",
			"display name":"PathOperationMoveTo",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"move to <mPoint> on <mPath>"
			],
			"display syntax":[
				"move to <i>mPoint</i> on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Move to a new point on a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			},{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// Create a new empty path\nvariable tPath as Path\nput the empty path into tPath\n\n// Begin a new subpath of tPath\nmove to point [50, 50] on tPath\n\n// Add a line to tPath\nline to point [100, 50] on tPath\n\n// Begin a new subpath of tPath\nmove to point [50, 100] on tPath\n\n// Add a line to tPath\nline to point [100, 100] on tPath"
			}],
			"description":"Ends the current subpath and sets the starting point for new components of <mPath> to <mPoint>.",
			"tags":["canvas"]
		},{
			"id":"builder-230",
			"name":"pathoperationellipticarcto",
			"display name":"PathOperationEllipticArcTo",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"arc to <mEnd> with radii <mRadii> rotated by <mAngle> on <mPath>"
			],
			"display syntax":[
				"arc to <i>mEnd</i> with radii <i>mRadii</i> rotated by <i>mAngle</i> on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Adds an arc to a path.",
			"parameters":[{
				"name":"mEnd",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Construct a path tracing out a rectangle with rounded bottom corners.\nvariable tPath\nput the empty path into tPath\n\n// Begin a new subpath\nmove to point [0, 0] on tPath\n\n// Trace the left edge\nline to point [0, my height - 25] on tPath\n\n// Continue path with an arc to the bottom edge\narc to point [my height, 25] with radii [25, 25] rotated by 0 on tPath\n\n// Trace the bottom edge\nline to point [my width - 25, my height] on tPath\n\n// Continue path with an arc to the right edge\narc to point [my width, my height - 25] with radii [25, 25] rotated by 0 on tPath\n\n// Trace the right edge\nline to point [my width, 0] on tPath\n\n// Close the path with a line back to the starting point\nclose path on tPath"
			}],
			"description":"Adds an arc from the previous point to <mEnd> on <mPath>, following a section of an ellipse with the given radii & angle.\nAs there can be two different ellipses that match the parameters, and two potential arcs for each ellipse, this variation of \"arc to ...\" will select the arc that most closely matches the direction from the last point to the current position on <mPath>.",
			"tags":["canvas"]
		},{
			"id":"builder-231",
			"name":"transformoperationrotate",
			"display name":"TransformOperationRotate",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"rotate <mTransform> by <mRotation>"
			],
			"display syntax":[
				"rotate <i>mTransform</i> by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a rotation to a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number of degrees."
			}],
			"examples":[{
				"script":"// Create a new transform\nvariable tTransform\nput the identity transform into tTransform\n\n// Rotate the transform by 90 degrees\nrotate tTransform by 90"
			}],
			"description":"Apply a rotation by <mRotation> degrees to <mTransform>. This is equivalent to concatenating <mTransform> with a new rotation transform.",
			"tags":["canvas"]
		},{
			"id":"builder-232",
			"name":"gradientpropertymirror",
			"display name":"GradientPropertyMirror",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the mirror of <mGradient>"
			],
			"display syntax":[
				"the mirror of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The mirror of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Toggle the mirroring of a gradient\nvariable tMirror\nput the mirror of tGradient into tMirror\nset the mirror of tGradient to not tMirror"
			}],
			"description":"The mirror of <mGradient> as a boolean. If mirror is true then the ramp will be reversed on each repeat.",
			"tags":["canvas"]
		},{
			"id":"builder-233",
			"name":"patternpropertytransform",
			"display name":"PatternPropertyTransform",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the transform of <mPattern>"
			],
			"display syntax":[
				"the transform of <i>mPattern</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The transform of a pattern value.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			}],
			"examples":[{
				"script":"// Create a new pattern paint from a scaled-down image file\nvariable tPattern\nput pattern with image from file \"images/pattern.png\" scaled by [0.5] into tPattern\n\n// Get the current transform\nvariable tTransform\nput the transform of tPattern into tTransform\n\n// Modify the transform by rotation\nrotate tTransform by tDegrees\n\n// Set the pattern to the modified transform\nset the transform of tPattern to tTransform"
			}],
			"description":"The transform of <mPattern>.",
			"tags":["canvas"]
		},{
			"id":"builder-234",
			"name":"canvaspropertymiterlimit",
			"display name":"CanvasPropertyMiterLimit",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the miter limit of <mCanvas>"
			],
			"display syntax":[
				"the miter limit of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current miter limit of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw a right-angled triangle, setting the miter limit so only the right-angle corner is mitered.\nset the miter limit of this canvas to 1.5\nstroke polygon path with points [point [50,50], point [50,100], point [100,50]] on this canvas"
			}],
			"description":"The limit of miter joins as a number. Specifies how far miter joins can extend from the meeting point of two lines before a bevel join is used instead.",
			"tags":["canvas"]
		},{
			"id":"builder-235",
			"name":"transformmaketranslation",
			"display name":"TransformMakeTranslation",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"transform with translation <mTranslation>"
			],
			"display syntax":[
				"transform with translation <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new translation transform.",
			"parameters":[{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x and y offsets of the translation."
			}],
			"examples":[{
				"script":"// Create translation transform to offset coordinates by 50,100\nvariable tTransform\nput transform with translation [50,100] into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new translation transform."
			}],
			"description":"Creates a new translation transform.",
			"tags":["canvas"]
		},{
			"id":"builder-236",
			"name":"transformpropertyrotation",
			"display name":"TransformPropertyRotation",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the rotation of <mTransform>"
			],
			"display syntax":[
				"the rotation of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The rotation component of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with matrix [0, 2, -2, 0, 50, 100] into tTransform\n\n// Store the old rotation component\nvariable tRotation\nput the rotation of tTransform into tRotation\n\n// Double the rotation\nset the rotation of tTransform to tRotation * 2"
			}],
			"description":"The rotation of <mTransform> as a number of degrees.",
			"tags":["canvas"]
		},{
			"id":"builder-237",
			"name":"canvaspropertypaint",
			"display name":"CanvasPropertyPaint",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the paint of <mCanvas>"
			],
			"display syntax":[
				"the paint of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current paint of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Set canvas to paint with solid blue\nset the paint of this canvas to solid paint with color [0,0,1]"
			}],
			"description":"The paint used for fill / stroke operations on <mCanvas>.",
			"tags":["canvas"]
		},{
			"id":"builder-238",
			"name":"gradientpropertywrap",
			"display name":"GradientPropertyWrap",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the wrap of <mGradient>"
			],
			"display syntax":[
				"the wrap of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The wrap of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Toggle the wrapping of a gradient\nvariable tWrap\nput the wrap of tGradient into tWrap\nset the wrap of tGradient to not tWrap"
			}],
			"description":"The wrap of <mGradient> as a boolean. If wrap is true then the gradient ramp will be repeated continually outside the defined extent of the gradient.",
			"tags":["canvas"]
		},{
			"id":"builder-239",
			"name":"pathmakewithcircle",
			"display name":"PathMakeWithCircle",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"circle path centered at <mCenter> with radius <mRadius>"
			],
			"display syntax":[
				"circle path centered at <i>mCenter</i> with radius <i>mRadius</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mCenter",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create a circle path\nvariable tPath as Path\nput circle path centered at point [100,100] with radius 50 into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new circle path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"builder-240",
			"name":"pathpropertyinstructions",
			"display name":"PathPropertyInstructions",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the instructions of <mPath>"
			],
			"display syntax":[
				"the instructions of <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The instructions of a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rounded rectangle path\nvariable tPath as Path\nput rounded rectangle path of rectangle [10,10,210,60] with radius 15 into tPath\n\n// Get the instructions of the path\nvariable tPathData as String\nput the instructions of tPath into tPathData"
			}],
			"description":"A string containing the series of instructions and point arguments used to construct <mPath>.\n>*Note:* The format of the path instructions is the same as that used for SVG path data as defined here - http://www.w3.org/TR/SVG/paths.html#PathData",
			"tags":["canvas"]
		},{
			"id":"builder-241",
			"name":"gradientpropertyvia",
			"display name":"GradientPropertyVia",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the via of <mGradient>"
			],
			"display syntax":[
				"the via of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The via point of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\nvariable tRect\nput rectangle [ 20, 10, 120, 60 ] into tRect\n\n// Set the via of the gradient to the bottom of tRect\nset the via of tGradient to point [(the left of tRect + the right of tRect) / 2, the bottom of tRect]"
			}],
			"description":"The via point of <mGradient> as a point. This is used to skew and scale the gradient when drawing.",
			"tags":["canvas"]
		},{
			"id":"builder-242",
			"name":"transformmakewithmatrixaslist",
			"display name":"TransformMakeWithMatrixAsList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"transform with matrix <mMatrix>"
			],
			"display syntax":[
				"transform with matrix <i>mMatrix</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new transform.\nmTranslation:An expression which evaluates to a list of 6 numbers, the a, b, c, d, tx and ty values of the transform matrix.",
			"examples":[{
				"script":"// Create combined rotate, scale, and translate transform\nvariable tTransform\nput transform with matrix [0, 2, -2, 0, 50, 100] into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new translation transform."
			}],
			"description":"Creates a new transform.\nmTranslation:An expression which evaluates to a list of 6 numbers, the a, b, c, d, tx and ty values of the transform matrix.",
			"tags":["canvas"]
		},{
			"id":"builder-243",
			"name":"patternoperationscale",
			"display name":"PatternOperationScale",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"scale <mPattern> by <mScale>"
			],
			"display syntax":[
				"scale <i>mPattern</i> by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a scale to a pattern.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			},{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 1 or 2 numbers, the x-axis scale and y-axis scale, or the uniform scale when only a single value is given."
			}],
			"examples":[{
				"script":"// Create a new pattern paint from an image file\nvariable tPattern\nput pattern with image from file \"images/pattern.png\" into tPattern\n\n// Scale the pattern to twice the current width\nscale tPattern by [2,1]"
			}],
			"description":"Scales the transform of <mPattern> by <mScale>",
			"tags":["canvas"]
		},{
			"id":"builder-244",
			"name":"patternmaketranslatedby",
			"display name":"PatternMakeTranslatedBy",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"pattern with <mImage> translated by <mTranslation>"
			],
			"display syntax":[
				"pattern with <i>mImage</i> translated by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new translated pattern paint.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			},{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x and y offsets of the translation."
			}],
			"examples":[{
				"script":"// Load the pattern image.\nvariable tImage\nput image from file \"images/backgroundpattern.png\" into tImage\n\n// Create a new pattern paint, offsetting the image to the top-left of tRect\nvariable tPaint\nvariable tRect\nput rectangle [20, 50, 120, 100] into tRect\nput pattern with tImage translated by [the left of tRect, the top of tRect] into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new pattern paint based on <mImage> with the specified translation applied."
			}],
			"description":"Creates a new translated pattern paint.",
			"tags":["canvas"]
		},{
			"id":"builder-245",
			"name":"canvaspropertyimageresizequality",
			"display name":"CanvasPropertyImageResizeQuality",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the image resize quality of <mCanvas>"
			],
			"display syntax":[
				"the image resize quality of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current image resize quality of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Use low (but faster) image resize algorithm to draw scaled images\nset the image resize quality of this canvas to \"low\""
			}],
			"description":"The image resize quality used when drawing scaled images and patterns on <mCanvas> as a string. Can be one of \"none\", \"low\", \"medium\", \"high\".",
			"tags":["canvas"]
		},{
			"id":"builder-246",
			"name":"pathoperationcurvethrough",
			"display name":"PathOperationCurveThrough",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"curve through <mThroughA> [ then <mThroughB> ] to <mTo> on <mPath>"
			],
			"display syntax":[
				"curve through <i>mThroughA</i> [ then <i>mThroughB</i> ] to <i>mTo</i> on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Adds a curve to a path.",
			"parameters":[{
				"name":"mThroughA",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mThroughB",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mTo",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a new empty path\nvariable tPath as Path\nput the empty path into tPath\n\n// Begin a new subpath of tPath\nmove to point [25, 50] on tPath\n\n// Continue path with a curve through 25,100 to 50,100\ncurve through point [25,100] to point [50,100] on tPath\n\n// Continue path with a curve through 50,75 then 50,50 to 50,100\ncurve through point [50,75] then point [50,50] to point [25,50] on tPath"
			}],
			"description":"Adds a curve from the previous point through one or two control points to <mTo> on <mPath>.",
			"tags":["canvas"]
		},{
			"id":"builder-247",
			"name":"gradientpropertyramp",
			"display name":"GradientPropertyRamp",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ramp of <mGradient>"
			],
			"display syntax":[
				"the ramp of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The ramp of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Get the gradient ramp\nvariable tRamp\nput the ramp of tGradient into tRamp\n\n// Change the color of the first stop\nset the color of element 1 of tRamp to color [1,0,0]\n\n// Set the new gradient ramp\nset the ramp of tGradient to tRamp"
			}],
			"description":"The ramp of <mGradient>. The ramp is a list of gradient stops that describes the color transitions along the length of the gradient",
			"tags":["canvas"]
		},{
			"id":"builder-248",
			"name":"effectpropertyblendmode",
			"display name":"EffectPropertyBlendMode",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the blend mode of <mEffect>"
			],
			"display syntax":[
				"the blend mode of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The blend mode of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with blend mode \"source over\"\nvariable tProps as Array\nput the empty array into tProps\n\nput \"source over\" into tProps[\"blend mode\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Use color dodge mode for effect\nset the blend mode of tEffect to \"color dodge\""
			}],
			"description":"The blend mode of <mEffect> as a string. Can be any one of:\n- clear\n- copy\n- source over\n- source in\n- source out\n- destination over\n- destination in\n- destination out\n- destination atop\n- xor\n- plus darker\n- plus lighter\n- multiply\n- screen\n- overlay\n- darken\n- lighten\n- color dodge\n- color burn\n- soft light\n- hard light\n- difference\n- exclusion\n- hue\n- saturation\n- color\n- luminosity",
			"references":{
				"operator":["CanvasPropertyBlendMode"]
			},
			"tags":["canvas"]
		},{
			"id":"builder-249",
			"name":"transformmakerotation",
			"display name":"TransformMakeRotation",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"transform with rotation by <mRotation>"
			],
			"display syntax":[
				"transform with rotation by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new rotation transform value.",
			"parameters":[{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number, the number of degrees of the rotation."
			}],
			"examples":[{
				"script":"// Create 30 degree rotation transform\nvariable tTransform\nput transform with rotation by 30 into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new rotation transform."
			}],
			"description":"Creates a new rotation transform value.",
			"tags":["canvas"]
		},{
			"id":"builder-250",
			"name":"canvasoperationrestorestate",
			"display name":"CanvasOperationRestoreState",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"restore state of <mCanvas>"
			],
			"display syntax":[
				"restore state of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Restore the previously saved state of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Save the current canvas properties\nsave state of this canvas\n\n// Change various properties of the canvas\nset the paint of this canvas to solid paint with color [1,1,0,0.5]\nset the blend mode of this canvas to \"color dodge\"\nrotate this canvas by 30\nset the font of this canvas to font \"Helvetica\" with size 15\n\n// Restore the previous canvas properties\nrestore state of this canvas"
			}],
			"description":"Restores the properties of <mCanvas> from the top of the saved property stack.",
			"tags":["canvas"]
		},{
			"id":"builder-251",
			"name":"rectanglepropertyleft",
			"display name":"RectanglePropertyLeft",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the left of <mRect>"
			],
			"display syntax":[
				"the left of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The left edge of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the left edge of the rectangle in a variable\nvariable tLeft\nput the left of tRect into tLeft\n\n// Move the rectangle horizontally to a new position.\nset the left of tRect to 20"
			}],
			"description":"The location along the x-axis of the left edge of the rectangle.\n\n>*Note:* Setting the left of a rectangle will reposition it without altering the width or height.",
			"tags":["canvas"]
		},{
			"id":"builder-252",
			"name":"transformpropertyscale",
			"display name":"TransformPropertyScale",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the scale of <mTransform>"
			],
			"display syntax":[
				"the scale of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The scale component of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with matrix [0, 2, -2, 0, 50, 100] into tTransform\n\n// Store the old scale component\nvariable tScale\nput the scale of tTransform into tScale\n\n// Modify the scale by adding 1 to the x scale value\nset the scale of tTransform to [element 1 of tScale + 1, element 2 of tScale]"
			}],
			"description":"The scale of <mTransform> as a list of 2 numbers (the x and y scales)",
			"tags":["canvas"]
		},{
			"id":"builder-253",
			"name":"canvaspropertystrokewidth",
			"display name":"CanvasPropertyStrokeWidth",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the stroke width of <mCanvas>"
			],
			"display syntax":[
				"the stroke width of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current stroke width of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw paths with line width 20\nset the stroke width of this canvas to 20"
			}],
			"description":"The width of lines used when stroking a path on <mCanvas> as a number.",
			"tags":["canvas"]
		},{
			"id":"builder-254",
			"name":"canvasoperationaddpath",
			"display name":"CanvasOperationAddPath",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"add <mPath> to <mCanvas>"
			],
			"display syntax":[
				"add <i>mPath</i> to <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Add a path to a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Add a path to the canvas\nadd rectangle path of rectangle [0,0,50,100] to this canvas\n\n// Fill the canvas path\nfill this canvas"
			}],
			"description":"Adds <mPath> to the current path of <mCanvas>",
			"tags":["canvas"]
		},{
			"id":"builder-255",
			"name":"patternoperationrotate",
			"display name":"PatternOperationRotate",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"rotate <mPattern> by <mRotation>"
			],
			"display syntax":[
				"rotate <i>mPattern</i> by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a rotation to a pattern.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			},{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number of degrees."
			}],
			"examples":[{
				"script":"// Create a new pattern paint from an image file\nvariable tPattern\nput pattern with image from file \"images/pattern.png\" into tPattern\n\n// Rotate the pattern through 30 degrees\nrotate tPattern by 30"
			}],
			"description":"Rotates the transform of <mPattern> by <mRotation>",
			"tags":["canvas"]
		},{
			"id":"builder-256",
			"name":"fontmake",
			"display name":"FontMake",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"font <mName>"
			],
			"display syntax":[
				"font <i>mName</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new instance of the named font.",
			"parameters":[{
				"name":"mName",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"// Create Arial font\nvariable tFont as Font\nput font \"Arial\" into tFont"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new instance of the named font with the default size of 12pts."
			}],
			"description":"Creates a new instance of the named font.",
			"tags":["canvas"]
		},{
			"id":"builder-257",
			"name":"canvaspropertyclippingbounds",
			"display name":"CanvasPropertyClippingBounds",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the clipping bounds of <mCanvas>"
			],
			"display syntax":[
				"the clipping bounds of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current clipping bounds of the canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Set the canvas clip\nclip to rectangle [50,50,100,100] on this canvas\n\n// Fill rectangle path on canvas, covering only the current clip region.\nvariable tBounds as Rectangle\nput the clipping bounds of this canvas into tBounds\nfill rectangle path of tBounds on this canvas"
			}],
			"description":"The clipping bounds of the canvas. Drawing operations on <mCanvas> will be confined to the clip region.",
			"tags":["canvas"]
		},{
			"id":"builder-258",
			"name":"patternmaketransformed",
			"display name":"PatternMakeTransformed",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"pattern with <mImage> transformed by <mTransform>"
			],
			"display syntax":[
				"pattern with <i>mImage</i> transformed by <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new transformed pattern paint.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			},{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"// Load the pattern image.\nvariable tImage\nput image from file \"images/backgroundpattern.png\" into tImage\n\n// Set up the pattern transform\nvariable tTransform\nput transform from matrix [0,2,-2,0,0,0] into tTransform\n\n// Create a new pattern paint, applying a transform to the image\nvariable tPaint\nput pattern with tImage transformed by tTransform into tPaint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new pattern paint based on <mImage> with the specified transform applied."
			}],
			"description":"Creates a new transformed pattern paint.",
			"tags":["canvas"]
		},{
			"id":"builder-259",
			"name":"canvasoperationmoveto",
			"display name":"CanvasOperationMoveTo",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"move to <mPoint> on <mCanvas>"
			],
			"display syntax":[
				"move to <i>mPoint</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Move to a point on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// move to a point on the canvas\nmove to point [0,50] on this canvas\n\n// add a line to the canvas path\nline to point [50,50] on this canvas\n\n// stroke the canvas path\nstroke this canvas"
			}],
			"description":"Moves to <mPoint> on the current path of <mCanvas>",
			"tags":["canvas"]
		},{
			"id":"builder-260",
			"name":"fontoperationtextimageboundsoncanvas",
			"display name":"FontOperationTextImageBoundsOnCanvas",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the image bounds of text <mText> on <mCanvas>"
			],
			"display syntax":[
				"the image bounds of text <i>mText</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Measure text precisely when drawn to a canvas.",
			"parameters":[{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Set the canvas font\nset the font of this canvas to font \"Arial\" at size 18\n\nvariable tBounds as Rectangle\nput the image bounds of text \"Sample text\" on this canvas into tBounds"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The bounding box of <mText> when drawn at point 0,0 with the current font of <mCanvas>. Returns the bounds as a rectangle."
			}],
			"description":"The exact bounds of the text, which will fully enclose each character.\n\n>*Note:* This can be more time-consuming to compute than the layout bounds.",
			"tags":["canvas"]
		},{
			"id":"builder-261",
			"name":"canvasoperationdrawimage",
			"display name":"CanvasOperationDrawImage",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"draw [ from <mSrcRect> of ] <mImage> into <mDestRect> of <mCanvas>"
			],
			"display syntax":[
				"draw [ from <i>mSrcRect</i> of ] <i>mImage</i> into <i>mDestRect</i> of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Draw an image on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			},{
				"name":"mSrcRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			},{
				"name":"mDestRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// Draw the image on the canvas\ndraw tImage into rectangle [0,0,the width of tImage,the height of tImage] of this canvas"
			},{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// Draw a section of the image\ndraw from rectangle[0,0,16,16] of tImage into rectangle [0,0,16,16] of this canvas"
			}],
			"description":"Renders from <mSrcRect> (or the bounds, if not specified) of <mImage> into <mDestRect> of <mCanvas>. The canvas image resize quality determines how the image is scaled if necessary.",
			"tags":["canvas"]
		},{
			"id":"builder-262",
			"name":"getpixelwidthofcanvas",
			"display name":"GetPixelWidthOfCanvas",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the pixel width of <Canvas>"
			],
			"display syntax":[
				"the pixel width of <i>Canvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Get the width of a canvas in pixels.",
			"parameters":[{
				"name":"Canvas",
				"type":"",
				"refparam":"false",
				"description":"The canvas to be examined."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The width of the canvas, in pixels."
			}],
			"description":"Get the width of a canvas in pixels.",
			"tags":["canvas"]
		},{
			"id":"builder-263",
			"name":"canvasoperationtranslate",
			"display name":"CanvasOperationTranslate",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"translate <mCanvas> by <mTranslation>"
			],
			"display syntax":[
				"translate <i>mCanvas</i> by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a translation to a canvas.",
			"parameters":[{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Translate the canvas\ntranslate this canvas by [50,100]"
			}],
			"description":"Translates the transform of <mCanvas> by <mTranslation>.",
			"tags":["canvas"]
		},{
			"id":"builder-264",
			"name":"rectanglemake",
			"display name":"RectangleMake",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"rectangle <mRect>"
			],
			"display syntax":[
				"rectangle <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 4 numbers, the left, top, right and bottom edges of the rectangle."
			}],
			"examples":[{
				"script":"// Initialize tRect to a rectangle value with origin at point 50,50 and size 100x50\nvariable tRect\nput rectangle [50, 50, 150, 100] into tRect"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new rectange with the given edges."
			}],
			"description":"Creates a new rectangle value.",
			"tags":["canvas"]
		},{
			"id":"builder-265",
			"name":"gradientstoppropertycolor",
			"display name":"GradientStopPropertyColor",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the color of <mStop>"
			],
			"display syntax":[
				"the color of <i>mStop</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The color of a gradient stop value.",
			"parameters":[{
				"name":"mStop",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient stop."
			}],
			"examples":[{
				"script":"variable tStop\nput gradient stop at 0 with color [1,1,1] into tStop\n\n// Get the color of a stop\nvariable tColor\nput the color of tStop into tColor\n\n// Set the stop color to red\nset the color of tStop to color [1,0,0]"
			}],
			"description":"The color of <mStop>.",
			"tags":["canvas"]
		},{
			"id":"builder-266",
			"name":"gradientpropertyfrom",
			"display name":"GradientPropertyFrom",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the from of <mGradient>"
			],
			"display syntax":[
				"the from of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The from point of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\nvariable tRect\nput rectangle [ 20, 10, 120, 60 ] into tRect\n\n// Set the start point of the gradient to the center of tRect\nset the from of tGradient to point [(the left of tRect + the right of tRect) / 2, (the top of tRect + the bottom of tRect) / 2]"
			}],
			"description":"The from point of <mGradient> as a point. Defines the starting point from which to begin drawing the gradient.",
			"tags":["canvas"]
		},{
			"id":"builder-267",
			"name":"transformoperationscale",
			"display name":"TransformOperationScale",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"scale <mTransform> by <mScale>"
			],
			"display syntax":[
				"scale <i>mTransform</i> by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a scale to a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 1 or 2 numbers, the x-axis scale and y-axis scale, or the uniform scale when only a single value is given."
			}],
			"examples":[{
				"script":"// Create a new transform\nvariable tTransform\nput the identity transform into tTransform\n\n// Apply a uniform scale to the transform\nscale tTransform by [0.5]\n\n// Apply a non-uniform scale to the transform\nscale tTransform by [2.2, 3]"
			}],
			"description":"Apply the given scale to <mTransform>. This is equivalent to concatenating <mTransform> with a new scale transform.",
			"tags":["canvas"]
		},{
			"id":"builder-268",
			"name":"canvasoperationclip",
			"display name":"CanvasOperationClip",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"clip to <mRect> on <mCanvas>"
			],
			"display syntax":[
				"clip to <i>mRect</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Clip to a rectangle on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"// Set the canvas clip\nclip to rectangle [50,50,100,100] on this canvas\n\n// Fill rectangle path on canvas. only the region of the rectangle that falls within the canvas clip will be rendered.\nfill rectangle path of rectangle [25, 25, 75, 75] on this canvas"
			}],
			"description":"Modifies the clip of <mCanvas> by intersecting with <mRect>. Drawing operations on <mCanvas> will be confined to the clip region.",
			"tags":["canvas"]
		},{
			"id":"builder-269",
			"name":"imagemetadataproperty",
			"display name":"ImageMetadataProperty",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the metadata of <mImage>"
			],
			"display syntax":[
				"the metadata of <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"the metadata associated with an image.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// get the image metadata\nvariable tMetadata as Array\nput the metadata of tImage into tMetadata\n\n// get image density in DPI from the image metadata\nvariable tDPI as Number\nif \"density\" is among the keys of tMetadata then\n\tput tMetadata[\"density\"] into tDPI\nelse\n\tput 72 into tDPI\nend if"
			}],
			"description":"An array containing metadata associated with an image.",
			"tags":["canvas"]
		},{
			"id":"builder-270",
			"name":"imagepropertyheight",
			"display name":"ImagePropertyHeight",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the height of <mImage>"
			],
			"display syntax":[
				"the height of <i>mImage</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The height of an image.",
			"parameters":[{
				"name":"mImage",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an image."
			}],
			"examples":[{
				"script":"// Load an image from a file\nvariable tImage as Image\nput image from file \"images/logo.png\" into tImage\n\n// Get the image height\nvariable tHeight as Integer\nput the height of tImage into tHeight"
			}],
			"description":"The height of the image in pixels.",
			"tags":["canvas"]
		},{
			"id":"builder-271",
			"name":"effectpropertysize",
			"display name":"EffectPropertySize",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the size of <mEffect>"
			],
			"display syntax":[
				"the size of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The size of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with size 5\nvariable tProps as Array\nput the empty array into tProps\n\nput 5 into tProps[\"size\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Set the effect size\nset the size of tEffect to 15"
			}],
			"description":"The size of <mEffect> as a number. Size applies to inner shadow, outer shadow, inner glow, and outer glow effect types",
			"tags":["canvas"]
		},{
			"id":"builder-272",
			"name":"pointmake",
			"display name":"PointMake",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"point <mPoint>"
			],
			"display syntax":[
				"point <i>mPoint</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new point value.",
			"parameters":[{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x and y coordinates of the point."
			}],
			"examples":[{
				"script":"variable tPoint\nput point [50, 100] into tPoint"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new point with the given coordinates"
			}],
			"description":"Creates a new point value.",
			"tags":["canvas"]
		},{
			"id":"builder-273",
			"name":"transformoperationconcat",
			"display name":"TransformOperationConcat",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"concat <mTransformA> with <mTransformB>"
			],
			"display syntax":[
				"concat <i>mTransformA</i> with <i>mTransformB</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Concatenate transform a with transform b.",
			"parameters":[{
				"name":"mTransformA",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mTransformB",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"// Create a new scaling transform\nvariable tScale\nput transform with scale [5,10] into tScale\n\n// Create a new rotation transform\nvariable tRotation\nput transform with rotation by 30 into tRotation\n\nvariable tTransform\n\n// Create a transform representing a rotation followed by a scale\nput tScale into tTransform\nconcat tTransform with tRotation\n\n// Create a transform representing a scale followed by a rotation\nput tRotation into tTransform\nconcat tTransform with tScale"
			}],
			"description":"Concatenating transforms modifies the original transform to produce a single transform that is the equivalent of applying the new transform followed by the original. Changing the order of concatenation will result in a transform with different effects.",
			"tags":["canvas"]
		},{
			"id":"builder-274",
			"name":"pathmakewithsector",
			"display name":"PathMakeWithSector",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"sector path centered at <mCenter> with [ radius <mRadius> | radii <mRadii> ] from <mStartAngle> to <mEndAngle>"
			],
			"display syntax":[
				"sector path centered at <i>mCenter</i> with [ radius <i>mRadius</i> | radii <i>mRadii</i> ] from <i>mStartAngle</i> to <i>mEndAngle</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mCenter",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mStartAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mEndAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create an elliptical sector path\nvariable tPath as Path\nput sector path centered at point [100,100] with radii [100,75] from 0 to 270 into tPath"
			},{
				"script":"// Create a circular sector path\nvariable tPath as Path\nput sector path centered at point [100,100] with radius 100 from 0 to 270 into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new sector path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"builder-275",
			"name":"effectmakewithproperties",
			"display name":"EffectMakeWithProperties",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<mType> effect with properties <mProperties>"
			],
			"display syntax":[
				"<i>mType</i> effect with properties <i>mProperties</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new effect.",
			"parameters":[{
				"name":"mType",
				"type":"",
				"refparam":"false",
				"description":"One of color overlay, inner shadow, outer shadow, inner glow, outer glow."
			},{
				"name":"mProperties",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an array."
			}],
			"examples":[{
				"script":"// Create an effect from an array of properties\nvariable tProps as Array\nput the empty array into tProps\n\nput color [0,0,0] into tProps[\"color\"]\nput \"source over\" into tProps[\"blend mode\"]\nput 0 into tProps[\"spread\"]\nput 5 into tProps[\"size\"]\nput 5 into tProps[\"distance\"]\nput 60 into tProps[\"angle\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new effect of type <mType> with properties read from <mProperties>."
			}],
			"description":"Creates a new effect.",
			"tags":["canvas"]
		},{
			"id":"builder-276",
			"name":"effectpropertycolor",
			"display name":"EffectPropertyColor",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the color of <mEffect>"
			],
			"display syntax":[
				"the color of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The color of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with color \"black\"\nvariable tProps as Array\nput the empty array into tProps\n\nput color [0,0,0] into tProps[\"color\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Change effect color to green.\nset the color of tEffect to color [0,1,0]"
			}],
			"description":"The color of <mEffect> as a color.",
			"tags":["canvas"]
		},{
			"id":"builder-277",
			"name":"canvaspropertyjoinstyle",
			"display name":"CanvasPropertyJoinStyle",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the join style of <mCanvas>"
			],
			"display syntax":[
				"the join style of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current join style of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw a square with beveled corners.\nset the join style of this canvas to \"bevel\"\nstroke rectangle path of rectangle [25, 25, 75, 75] on this canvas"
			}],
			"description":"Determines how to draw the join between the lines of a path when stroking. Can be one of \"bevel\", \"round\", or \"miter\".",
			"tags":["canvas"]
		},{
			"id":"builder-278",
			"name":"fontpropertyname",
			"display name":"FontPropertyName",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the name of <mFont>"
			],
			"display syntax":[
				"the name of <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The name of a font.",
			"parameters":[{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Create a font\nvariable tFont as Font\nput font \"Arial\" at size 20 into tFont\n\n// Get the old font name\nvariable tFontName as String\nput the name of tFont into tName\n\n// Set the font to helvetica\nset the name of tFont to \"Helvetica\""
			}],
			"description":"The name of <mFont>.",
			"tags":["canvas"]
		},{
			"id":"builder-279",
			"name":"canvasoperationfilltext",
			"display name":"CanvasOperationFillText",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"fill text <mText> at <mPoint> on <mCanvas>"
			],
			"display syntax":[
				"fill text <i>mText</i> at <i>mPoint</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Render filled text on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// Set the canvas font\nset the font of this canvas to font \"Helvetica\"\n\n// Draw the text\nfill text \"Widget Label\" at point [50,50] on this canvas"
			}],
			"description":"Renders <mText> at <mPoint> on <mCanvas> using the current font setting.",
			"tags":["canvas"]
		},{
			"id":"builder-280",
			"name":"imagemakefromresourcefile",
			"display name":"ImageMakeFromResourceFile",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"image from resource file <mResource>"
			],
			"display syntax":[
				"image from resource file <i>mResource</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new image.",
			"parameters":[{
				"name":"mResource",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"// Load image from a bundled resource file\nvariable tImage\nput image from resource file \"images/logo.png\" into tImage"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new image decoded from the named module resource file."
			}],
			"description":"Creates a new image.",
			"tags":["canvas"]
		},{
			"id":"builder-281",
			"name":"gradientpropertytype",
			"display name":"GradientPropertyType",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the type of <mGradient>"
			],
			"display syntax":[
				"the type of <i>mGradient</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The type of a gradient paint.",
			"parameters":[{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Store the old gradient type\nvariable tType\nput the type of tGradient into tType\n\n// Change the gradient type to radial\nset the type of tGradient to \"radial\""
			}],
			"description":"The type of <mGradient> as a string. This can be one of \"linear\", \"radial\", \"conical\", \"diamond\", \"spiral\", \"xy\", \"sqrtxy\".",
			"tags":["canvas"]
		},{
			"id":"builder-282",
			"name":"transformpropertymatrixaslist",
			"display name":"TransformPropertyMatrixAsList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the matrix of <mTransform>"
			],
			"display syntax":[
				"the matrix of <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The matrix values of a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"variable tTransform\nput transform with translation [20,50] into tTransform\n\n// Get the current transform matrix\nvariable tMatrix\nput the matrix of tTransform into tMatrix\n\n// Directly set the components\nput 2.5 into element 1 of tMatrix\nput 0 into element 2 of tMatrix\nput 0 into element 3 of tMatrix\nput 2.5 into element 4 of tMatrix\n\n// Update the transform with the new values\nset the matrix of tTransform to tMatrix"
			}],
			"description":"The matrix values of <mTransform> as a list of 6 numbers.",
			"tags":["canvas"]
		},{
			"id":"builder-283",
			"name":"canvaspropertystippled",
			"display name":"CanvasPropertyStippled",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the stippled of <mCanvas>"
			],
			"display syntax":[
				"the stippled of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current stippled setting of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw with stippled red paint on canvas\nset the paint of this canvas to solid paint with color [1,0,0]\nset the stippled of this canvas to true"
			}],
			"description":"A boolean value that determines whether or not stippling will be used when drawing with a solid color paint on <mCanvas>.",
			"tags":["canvas"]
		},{
			"id":"builder-284",
			"name":"canvasoperationstroke",
			"display name":"CanvasOperationStroke",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"stroke [ <mPath> on ] <mCanvas>"
			],
			"display syntax":[
				"stroke [ <i>mPath</i> on ] <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Stroke a path on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Draw a circle path on the canvas\nstroke circle path centered at point [100,100] with radius 50 on this canvas"
			},{
				"script":"// Add a path to the canvas\nmove to point [50,50] on this canvas\nline to point [50,100] on this canvas\nline to point [100,100] on this canvas\n\n// Stroke the current canvas path\nstroke this canvas"
			}],
			"description":"Strokes <mPath> with the current canvas paint and stroke settings. If mPath is not specified then the current canvas path will be stroked, then emptied from the canvas.",
			"tags":["canvas"]
		},{
			"id":"builder-285",
			"name":"transformmakescale",
			"display name":"TransformMakeScale",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"transform with scale <mScale>"
			],
			"display syntax":[
				"transform with scale <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new scaling transform value.",
			"parameters":[{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 1 or 2 numbers, the x-axis scale and y-axis scale, or the uniform scale when only a single value is given."
			}],
			"examples":[{
				"script":"// Create x2 uniformly scaling transform\nvariable tTransform\nput transform with scale [2] into tTransform\n\n// Create transform which only scales in the direction of the x axis\nput transform with scale [ 2, 1 ] into tTransform"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new scale transform."
			}],
			"description":"Creates a new scaling transform value.",
			"tags":["canvas"]
		},{
			"id":"builder-286",
			"name":"gradientoperationscale",
			"display name":"GradientOperationScale",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"scale <mGradient> by <mScale>"
			],
			"display syntax":[
				"scale <i>mGradient</i> by <i>mScale</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a scale to a gradient paint.",
			"parameters":[{
				"name":"mScale",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Scale the gradient\nscale tGradient by [2,2]"
			}],
			"description":"Scales the transform of <mGradient> by <mScale>.",
			"tags":["canvas"]
		},{
			"id":"builder-287",
			"name":"pathoperationtranslate",
			"display name":"PathOperationTranslate",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"translate <mPath> by <mTranslation>"
			],
			"display syntax":[
				"translate <i>mPath</i> by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a translation to a path.",
			"parameters":[{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath\n\n// Translate the path\ntranslate tPath by [50,100]"
			}],
			"description":"Translates <mPath> by <mTranslation>.",
			"tags":["canvas"]
		},{
			"id":"builder-288",
			"name":"canvasoperationsavestate",
			"display name":"CanvasOperationSaveState",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"save state of <mCanvas>"
			],
			"display syntax":[
				"save state of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Save the current state of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Save the current canvas properties\nsave state of this canvas\n\n// Change various properties of the canvas\nset the paint of this canvas to solid paint with color [1,1,0,0.5]\nset the blend mode of this canvas to \"color dodge\"\nrotate this canvas by 30\nset the font of this canvas to font \"Helvetica\" with size 15\n\n// Restore the previous canvas properties\nrestore state of this canvas"
			}],
			"description":"Saves the current properties of <mCanvas> to the top of a stack so that they can be restored later.",
			"tags":["canvas"]
		},{
			"id":"builder-289",
			"name":"pathpropertysubpath",
			"display name":"PathPropertySubpath",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"subpath <mStart> [ to <mEnd> ] of <mPath>"
			],
			"display syntax":[
				"subpath <i>mStart</i> [ to <i>mEnd</i> ] of <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The subpaths of a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			},{
				"name":"mStart",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mEnd",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create a path with multiple subpaths\nvariable tPath as Path\nput path \"M50,50 L100,50 M100,100 L150,100 M150,150 L200,150\"\n\n// Split out the first subpath of a path\nvariable tSubPath as Path\nput subpath 1 of tPath into tSubPath\n\n// Store the remaining subpaths in the original path\nput subpath 2 to -1 of tPath into tPath"
			}],
			"description":"The subpaths of <mPath> in the range <mStart> to <mEnd>. Each subpath or range of subpaths is itself a path.",
			"tags":["canvas"]
		},{
			"id":"builder-290",
			"name":"pathmakewithellipse",
			"display name":"PathMakeWithEllipse",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"ellipse path centered at <mPoint> with radii <mRadii>"
			],
			"display syntax":[
				"ellipse path centered at <i>mPoint</i> with radii <i>mRadii</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.\nmCenter:An expression which evaluates to a point.",
			"parameters":[{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			}],
			"examples":[{
				"script":"// Create an ellipse path\nvariable tPath as Path\nput ellipse path centered at point [100,100] with radii [100,75] into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new ellipse path."
			}],
			"description":"Creates a new path.\nmCenter:An expression which evaluates to a point.",
			"tags":["canvas"]
		},{
			"id":"builder-291",
			"name":"pathmakewithpoints",
			"display name":"PathMakeWithPoints",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"( polygon | polyline ) path with points <mPoints>"
			],
			"display syntax":[
				"( polygon | polyline ) path with points <i>mPoints</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mPoints",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of points."
			}],
			"examples":[{
				"script":"// Create a polyline path\nvariable tPath as Path\nput polyline path with points [point [0,0], point [25,50], point [75,50], point [50,0]] into tPath"
			},{
				"script":"// Create a closed polygon path (rhombus)\nvariable tPath as Path\nput polygon path with points [point [0,0], point [25,50], point [75,50], point [50,0]] into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new polyline or polygon path. A polygon path will be closed with an additional line from the last point to the first."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"builder-292",
			"name":"rectanglepropertytop",
			"display name":"RectanglePropertyTop",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the top of <mRect>"
			],
			"display syntax":[
				"the top of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The top edge of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the top edge of the rectangle in a variable\nvariable tTop\nput the top of tRect into tTop\n\n// Move the rectangle vertically to a new position.\nset the top of tRect to 120"
			}],
			"description":"The location along the y-axis of the top edge of the rectangle.\n\n>*Note:* Setting the top of a rectangle will reposition it without altering the width or height.",
			"tags":["canvas"]
		},{
			"id":"builder-293",
			"name":"colorpropertyred",
			"display name":"ColorPropertyRed",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the red of <mColor>"
			],
			"display syntax":[
				"the red of <i>mColor</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The red component of a color value.",
			"parameters":[{
				"name":"mColor",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a color."
			}],
			"examples":[{
				"script":"variable tColor\nput color [0.75, 1.0, 0.5] into tColor\n\n// Store the old red value\nvariable tRed\nput the red of tColor into tRed\n\n// Invert the intensity of the red color component\nset the red of tColor to 1.0 - tRed"
			}],
			"description":"The red component of <mColor>\n\n>*Note:* The component value denotes the intensity of that component, expressed as a real number between 0 and 1.",
			"tags":["canvas"]
		},{
			"id":"builder-294",
			"name":"pathmakewithrectangle",
			"display name":"PathMakeWithRectangle",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"rectangle path of <mRect>"
			],
			"display syntax":[
				"rectangle path of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new rectangle path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"builder-295",
			"name":"imagemakefromfile",
			"display name":"ImageMakeFromFile",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"image from file <mPath>"
			],
			"display syntax":[
				"image from file <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new image.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"// Load image from a file path\nvariable tImage\nput image from file \"images/logo.png\" into tImage"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new image loaded from the file path provided."
			}],
			"description":"If the file path is relative it will be resolved relative to\n`this card of the defaultStack` in a library handler or the current\nwidget instance script object if in a widget handler.",
			"tags":["canvas"]
		},{
			"id":"builder-296",
			"name":"canvaspropertyblendmode",
			"display name":"CanvasPropertyBlendMode",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the blend mode of <mCanvas>"
			],
			"display syntax":[
				"the blend mode of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current blend mode of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Use color dodge mode to draw on canvas\nset the blend mode of this canvas to \"color dodge\""
			}],
			"description":"The blend mode used for drawing operations on <mCanvas> as a string. Can be any one of:\n- clear\n- copy\n- source over\n- source in\n- source out\n- destination over\n- destination in\n- destination out\n- destination atop\n- xor\n- plus darker\n- plus lighter\n- multiply\n- screen\n- overlay\n- darken\n- lighten\n- color edge\n- color burn\n- soft light\n- hard light\n- difference\n- exclusion\n- hue\n- saturation\n- color\n- luminosity",
			"tags":["canvas"]
		},{
			"id":"builder-297",
			"name":"effectpropertyangle",
			"display name":"EffectPropertyAngle",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the angle of <mEffect>"
			],
			"display syntax":[
				"the angle of <i>mEffect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The angle of an effect.",
			"parameters":[{
				"name":"mEffect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an effect."
			}],
			"examples":[{
				"script":"// Create an effect with angle 60\nvariable tProps as Array\nput the empty array into tProps\n\nput 60 into tProps[\"angle\"]\n\nvariable tEffect as Effect\nput outer shadow effect with properties tProps into tEffect\n\n// Set the effect angle\nset the angle of tEffect to 30"
			}],
			"description":"The angle of <mEffect> as a number of degrees. Angle applies to inner shadow, and outer shadow effect types",
			"tags":["canvas"]
		},{
			"id":"builder-298",
			"name":"fontmakewithstyle",
			"display name":"FontMakeWithStyle",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"font <mName> with ( bold  | italic  | bold italic  ) style"
			],
			"display syntax":[
				"font <i>mName</i> with ( bold  | italic  | bold italic  ) style"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new instance of the named font.",
			"parameters":[{
				"name":"mName",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"// Create italic Arial font\nvariable tFont as Font\nput font \"Arial\" with italic style into tFont"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new instance of the named font with style bold, italic, or bold italic, and the default size of 12pts."
			}],
			"description":"Creates a new instance of the named font.",
			"tags":["canvas"]
		},{
			"id":"builder-299",
			"name":"canvasoperationfilltextaligned",
			"display name":"CanvasOperationFillTextAligned",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"fill text <mText> at <mAlignment> of <mRect> on <mCanvas>"
			],
			"display syntax":[
				"fill text <i>mText</i> at <i>mAlignment</i> of <i>mRect</i> on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Render filled text on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			},{
				"name":"mText",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"// Set the canvas font\nset the font of this canvas to font \"Helvetica\"\n\n// Draw the text in the top-left corner of the target rectangle\nfill text \"Widget Label\" at top left of rectangle [50, 100, 250, 200] on this canvas"
			}],
			"description":"Renders <mText> aligned to the specified sides of <mRect> on <mCanvas> using the current font setting.",
			"tags":["canvas"]
		},{
			"id":"builder-300",
			"name":"canvasoperationendlayer",
			"display name":"CanvasOperationEndLayer",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"end layer on <mCanvas>"
			],
			"display syntax":[
				"end layer on <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"End the current drawing layer on a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw two overlapping rectangles grouped with half transparency\nset the opacity of this canvas to 0.5\nbegin layer on this canvas\nfill rectangle path of rectangle path [50,50,100,100] on this canvas\nfill rectangle path of rectangle path [75,75,125,125] on this canvas\nend layer on this canvas"
			},{
				"script":"// Create an effect for the new layer\nvariable tEffect as Effect\nput outer shadow effect into tEffect\n\n// Draw rectangle with an effect applied\nbegin layer with tEffect on this canvas\nfill rectangle path of rectangle [50,50,100,100] on this canvas\nend layer on this canvas"
			}],
			"description":"Ends the layer on <mCanvas>, rendering to the previous layer with the opacity, blend mode, and effect properties set when the layer began.",
			"tags":["canvas"]
		},{
			"id":"builder-301",
			"name":"pathoperationrotate",
			"display name":"PathOperationRotate",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"rotate <mPath> by <mRotation>"
			],
			"display syntax":[
				"rotate <i>mPath</i> by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a rotation to a path.",
			"parameters":[{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"// Create a rectangle path\nvariable tPath as Path\nput rectangle path of rectangle [10,10,210,60] into tPath\n\n// Rotate the path\nrotate tPath by 45"
			}],
			"description":"Rotates <mPath> by <mRotation> degrees.",
			"tags":["canvas"]
		},{
			"id":"builder-302",
			"name":"gradientmakewithramp",
			"display name":"GradientMakeWithRamp",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<mType> gradient with ramp <mRamp>"
			],
			"display syntax":[
				"<i>mType</i> gradient with ramp <i>mRamp</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new gradient paint.",
			"parameters":[{
				"name":"mRamp",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of gradient stops."
			}],
			"examples":[{
				"script":"// List to hold gradient stops\nvariable tRamp\nput the empty list into tRamp\n\n// Set up gradient stops\npush gradient stop at 0 with color [1,0,0] onto tRamp\npush gradient stop at 0.5 with color [0,1,0,0.5] onto tRamp\npush gradient stop at 1 with color [0,0,1] onto tRamp\n\n// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp tRamp into tGradient"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new gradient paint."
			}],
			"description":"Creates a new gradient paint.",
			"tags":["canvas"]
		},{
			"id":"builder-303",
			"name":"canvaspropertycapstyle",
			"display name":"CanvasPropertyCapStyle",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the cap style of <mCanvas>"
			],
			"display syntax":[
				"the cap style of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current cap style of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Draw a line with rounded ends.\nset the cap style of this canvas to \"round\"\nstroke line path from point [50,100] to point [100,50] on this canvas"
			}],
			"description":"Determines how to draw the end points of a path when stroking. Can be one of \"butt\", \"square\", or \"round\".",
			"tags":["canvas"]
		},{
			"id":"builder-304",
			"name":"pathmakewithroundedrectanglewithradius",
			"display name":"PathMakeWithRoundedRectangleWithRadius",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"rounded rectangle path of <mRect> with radius <mRadius>"
			],
			"display syntax":[
				"rounded rectangle path of <i>mRect</i> with radius <i>mRadius</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.\nmRadii:An expression which evaluates to a list of numbers.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create a rounded rectangle path\nvariable tPath as Path\nput rounded rectangle path of rectangle [10,10,210,60] with radius 15 into tPath"
			},{
				"script":"// Create a rounded rectangle path with different horizontal & vertical radii\nvariable tPath as Path\nput rounded rectangle path of rectangle [10,10,210,60] with radii [10,5] into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new rounded rectangle path."
			}],
			"description":"Creates a new path.\nmRadii:An expression which evaluates to a list of numbers.",
			"tags":["canvas"]
		},{
			"id":"builder-305",
			"name":"gradientoperationtranslate",
			"display name":"GradientOperationTranslate",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"translate <mGradient> by <mTranslation>"
			],
			"display syntax":[
				"translate <i>mGradient</i> by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a translation to a gradient paint.",
			"parameters":[{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mGradient",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a gradient."
			}],
			"examples":[{
				"script":"// Create new gradient paint\nvariable tGradient\nput linear gradient with ramp [gradient stop at 0 with color [0,0,0], gradient stop at 1 with color [1,1,1]] into tGradient\n\n// Translate the gradient\ntranslate tGradient by [50,100]"
			}],
			"description":"Translates the transform of <mGradient> by <mTranslation>.",
			"tags":["canvas"]
		},{
			"id":"builder-306",
			"name":"transformoperationskew",
			"display name":"TransformOperationSkew",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"skew <mTransform> by <mSkew>"
			],
			"display syntax":[
				"skew <i>mTransform</i> by <i>mSkew</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a skew to a transform.",
			"parameters":[{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"mSkew",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x-axis skew and y-axis skew."
			}],
			"examples":[{
				"script":"variable tTransform\n// Create a new transform\nput the identity transform into tTransform\n// Apply a skew to the transform\nskew tTransform by [1, 0]"
			}],
			"description":"Apply the given skew to <mTransform>",
			"tags":["canvas"]
		},{
			"id":"builder-307",
			"name":"pathmakewithsegment",
			"display name":"PathMakeWithSegment",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"segment path centered at <mCenter> with [ radius <mRadius> | radii <mRadii> ] from <mStartAngle> to <mEndAngle>"
			],
			"display syntax":[
				"segment path centered at <i>mCenter</i> with [ radius <i>mRadius</i> | radii <i>mRadii</i> ] from <i>mStartAngle</i> to <i>mEndAngle</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Creates a new path.",
			"parameters":[{
				"name":"mCenter",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadius",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mStartAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mEndAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			}],
			"examples":[{
				"script":"// Create an elliptical segment path\nvariable tPath as Path\nput segment path centered at point [100,100] with radii [100,75] from 0 to 270 into tPath"
			},{
				"script":"// Create a circular segment path\nvariable tPath as Path\nput segment path centered at point [100,100] with radius 100 from 0 to 270 into tPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A new segment path."
			}],
			"description":"Creates a new path.",
			"tags":["canvas"]
		},{
			"id":"builder-308",
			"name":"patternoperationtransform",
			"display name":"PatternOperationTransform",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"transform <mPattern> by <mTransform>"
			],
			"display syntax":[
				"transform <i>mPattern</i> by <i>mTransform</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a transform to a pattern.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			},{
				"name":"mTransform",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"// Create a new pattern paint from an image file\nvariable tPattern\nput pattern with image from file \"images/pattern.png\" into tPattern\n\n// Apply transform to the pattern.\ntransform tPattern by transform with matrix [0,2,-2,0,5,10]"
			}],
			"description":"Modifies the transform of <mPattern> by concatentation with <mTransform>",
			"tags":["canvas"]
		},{
			"id":"builder-309",
			"name":"canvaspropertyantialias",
			"display name":"CanvasPropertyAntialias",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the antialias of <mCanvas>"
			],
			"display syntax":[
				"the antialias of <i>mCanvas</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The current antialias setting of a canvas.",
			"parameters":[{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Disable antialiasing on the canvas\nset the antialias of this canvas to false"
			}],
			"description":"A boolean value which determines whether or not antialiasing will be used when rendering paths on <mCanvas>.",
			"tags":["canvas"]
		},{
			"id":"builder-310",
			"name":"rectanglepropertyheight",
			"display name":"RectanglePropertyHeight",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the height of <mRect>"
			],
			"display syntax":[
				"the height of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The height of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the height of the rectangle in a variable\nvariable tHeight\nput the height of tRect into tHeight\n\n// Increase the height of the rectangle\nset the height of tRect to (tHeight + 10)"
			}],
			"description":"The height of the rectangle.\n\n>*Note:* Setting the height of a rectangle will resize it without moving the top edge, expanding or contracting from the bottom.",
			"tags":["canvas"]
		},{
			"id":"builder-311",
			"name":"canvasoperationrotate",
			"display name":"CanvasOperationRotate",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"rotate <mCanvas> by <mRotation>"
			],
			"display syntax":[
				"rotate <i>mCanvas</i> by <i>mRotation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a rotation to a canvas.",
			"parameters":[{
				"name":"mRotation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mCanvas",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a canvas."
			}],
			"examples":[{
				"script":"// Rotate the canvas\nrotate this canvas by 45"
			}],
			"description":"Rotates the transform of <mCanvas> by <mRotation> degrees.",
			"tags":["canvas"]
		},{
			"id":"builder-312",
			"name":"fontpropertysize",
			"display name":"FontPropertySize",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the size of <mFont>"
			],
			"display syntax":[
				"the size of <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The size of a font.",
			"parameters":[{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Create a font\nvariable tFont as Font\nput font \"Arial\" at size 20 into tFont\n\n// Set the font size to 30pt\nset the size of tFont to 30"
			}],
			"description":"The size of <mFont> as a number of points.",
			"tags":["canvas"]
		},{
			"id":"builder-313",
			"name":"rectanglepropertyright",
			"display name":"RectanglePropertyRight",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the right of <mRect>"
			],
			"display syntax":[
				"the right of <i>mRect</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The right edge of a rectangle value.",
			"parameters":[{
				"name":"mRect",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a rectangle."
			}],
			"examples":[{
				"script":"variable tRect\nput rectangle [50,100,150,200] into tRect\n\n// Store the right edge of the rectangle in a variable\nvariable tRight\nput the right of tRect into tRight\n\n// Move the rectangle horizontally to a new position.\nset the right of tRect to (tRight + 10)"
			}],
			"description":"The location along the x-axis of the right edge of the rectangle.\n\n>*Note:* Setting the right of a rectangle will reposition it without altering the width or height.",
			"tags":["canvas"]
		},{
			"id":"builder-314",
			"name":"patternoperationtranslate",
			"display name":"PatternOperationTranslate",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"translate <mPattern> by <mTranslation>"
			],
			"display syntax":[
				"translate <i>mPattern</i> by <i>mTranslation</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Apply a translation to a pattern.",
			"parameters":[{
				"name":"mPattern",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a pattern."
			},{
				"name":"mTranslation",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of 2 numbers, the x and y offsets of the translation."
			}],
			"examples":[{
				"script":"// Create a new pattern paint from an image file\nvariable tPattern\nput pattern with image from file \"images/pattern.png\" into tPattern\n\n// Translate the pattern 20 units to the left.\ntranslate tPattern by [-20,0]"
			}],
			"description":"translates the transform of <mPattern> by <mTranslation>",
			"tags":["canvas"]
		},{
			"id":"builder-315",
			"name":"fontpropertyitalic",
			"display name":"FontPropertyItalic",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the italic of <mFont>"
			],
			"display syntax":[
				"the italic of <i>mFont</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"The italic setting of a font.",
			"parameters":[{
				"name":"mFont",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a font."
			}],
			"examples":[{
				"script":"// Create a font\nvariable tFont as Font\nput font \"Arial\" at size 20 into tFont\n\n// Set the font to italic\nset the italic of tFont to true"
			}],
			"description":"The italic flag of <mFont> as a boolean. If true, then <mFont> is italic.",
			"tags":["canvas"]
		},{
			"id":"builder-316",
			"name":"pathoperationellipticarctowithflags",
			"display name":"PathOperationEllipticArcToWithFlags",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"arc to <mEnd> with radii <mRadii> rotated by <mAngle> taking ( largest | smallest ) ( clockwise | anticlockwise ) route on <mPath>"
			],
			"display syntax":[
				"arc to <i>mEnd</i> with radii <i>mRadii</i> rotated by <i>mAngle</i> taking ( largest | smallest ) ( clockwise | anticlockwise ) route on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Adds an arc to a path.",
			"parameters":[{
				"name":"mEnd",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			},{
				"name":"mRadii",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list of numbers."
			},{
				"name":"mAngle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a number."
			},{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			}],
			"examples":[{
				"script":"variable tPath\nput the empty path into tPath\n\n// Begin a new subpath\nmove to point [25, 50] on tPath\n\n// Continue path with an arc to 50,25\narc to point [50, 25] with radii [25, 25] rotated by 0 taking smallest clockwise route on tPath\n\n// Begin a new subpath\nmove to point [75, 50] on tPath\n// Continue path with a large arc to 50,75\narc to point [50, 75] with radii [25, 25] rotated by 0 taking largest clockwise route on tPath"
			}],
			"description":"Adds an arc from the previous point to <mEnd> on <mPath>, following a section of an ellipse with the given radii & angle.\n  As there can be two different ellipses that match the parameters, and two potential arcs for each ellipse, the *largest*, *smallest*, *clockwise*, and *anticlockwise* options allow one arc to specified from the four potential arcs.",
			"tags":["canvas"]
		},{
			"id":"builder-317",
			"name":"pathoperationlineto",
			"display name":"PathOperationLineTo",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"line to <mPoint> on <mPath>"
			],
			"display syntax":[
				"line to <i>mPoint</i> on <i>mPath</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Adds a line to a path.",
			"parameters":[{
				"name":"mPath",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a path."
			},{
				"name":"mPoint",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a point."
			}],
			"examples":[{
				"script":"// Create a new empty path\nvariable tPath as Path\nput the empty path into tPath\n\n// Begin a new subpath of tPath\nmove to point [25, 50] on tPath\n\n// Continue path with a line to 50,100\nline to [50,100] on tPath"
			}],
			"description":"Adds a line from the previous point to <mPoint> on <mPath>.",
			"tags":["canvas"]
		},{
			"id":"builder-318",
			"name":"transformoperationmultiply",
			"display name":"TransformOperationMultiply",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> * <Right>"
			],
			"display syntax":[
				"<i>Left</i> * <i>Right</i>"
			],
			"associations":["com.livecode.canvas"],
			"summary":"Multiply two transforms together.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a transform."
			}],
			"examples":[{
				"script":"// Create a rotation transform\nvariable tRotate\nput transform with rotation by 45 into tRotate\n\n// Create a scale transform\nvariable tScale\nput transform with scale [2,3] into tScale\n\n// Create a translation transform\nvariable tTranslate\nput transform with translation [50,100] into tTranslate\n\n// Combine transforms by multiplying them together\nvariable tTransform\nput tTranslate * tRotate * tScale into tTransform"
			}],
			"description":"Returns the transform created by concatentating <Left> with <Right>\nNote:The order of the arguments is important when multiplying transforms. <Left> * <Right> can result in a different transform from <Right> * <Left> (in mathematical terms, transform multiplication is non-commutative).",
			"tags":["canvas"]
		},{
			"id":"builder-319",
			"name":"putbytesafter",
			"display name":"PutBytesAfter",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"put <Source> after <Target>"
			],
			"display syntax":[
				"put <i>Source</i> after <i>Target</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Appends <Source> bytes to <Target> bytes.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a binary container."
			}],
			"description":"Use to insert bytes into data without replacement. Can be used either with a chunk expression to insert at a specified location, or without to append to the target data.",
			"tags":["binary"]
		},{
			"id":"builder-320",
			"name":"putbytesbefore",
			"display name":"PutBytesBefore",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"put <Source> before <Target>"
			],
			"display syntax":[
				"put <i>Source</i> before <i>Target</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Prepends <Source> bytes to <Target> bytes.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a binary container."
			}],
			"description":"Use to insert bytes into data without replacement. Can be used either with a chunk expression to insert at a specified location, or without to prepend to the target data.",
			"tags":["binary"]
		},{
			"id":"builder-321",
			"name":"emptydata",
			"display name":"EmptyData",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the empty data"
			],
			"display syntax":[
				"the empty data"
			],
			"associations":["com.livecode.binary"],
			"summary":"Designates data of length 0.",
			"examples":[{
				"script":"variable tVar as Data\nvariable tCount as Number\nput the empty data into tVar\nput the number of bytes in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty data``` to initialise a data variable.",
			"tags":["binary"]
		},{
			"id":"builder-322",
			"name":"dataislessthandata",
			"display name":"DataIsLessThanData",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt; <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> is less than <Right> under a byte by byte comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is less than <Right>, and false otherwise."
			}],
			"description":"<Left> is less than <Right> if they are not equal, and the first byte in <Right> that is not equal to the corresponding byte in <Left> is of greater value.",
			"tags":["binary"]
		},{
			"id":"builder-323",
			"name":"concatenatebytes",
			"display name":"ConcatenateBytes",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> & <Right>"
			],
			"display syntax":[
				"<i>Left</i> & <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Concatenates <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Binary data consisting of the value of the left hand expression with the value of the right hand expression appended to the end."
			}],
			"description":"The result consists of the bytes of <Left> followed by those of <Right>.",
			"tags":["binary"]
		},{
			"id":"builder-324",
			"name":"dataisnotdata",
			"display name":"DataIsNotData",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns false if the result of evaluating <Left> is the same as that of <Right>, and true otherwise."
			}],
			"description":"Performs a byte by byte comparison of <Left> and <Right>, returning true if there is any difference.",
			"tags":["binary"]
		},{
			"id":"builder-325",
			"name":"dataisdata",
			"display name":"DataIsData",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if the result of evaluating <Left> is the same as that of <Right>, and false otherwise."
			}],
			"description":"Performs a byte by byte comparison of <Left> and <Right>, returning false if there is any difference.",
			"tags":["binary"]
		},{
			"id":"builder-326",
			"name":"dataisgreaterthandata",
			"display name":"DataIsGreaterThanData",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt; <i>Right</i>"
			],
			"associations":["com.livecode.binary"],
			"summary":"Determines whether <Left> is greater than <Right> under a byte by byte comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is greater than <Right>, and false otherwise."
			}],
			"description":"<Left> is greater than <Right> if they are not equal, and the first byte in <Left> that is not equal to the corresponding byte in <Right> is of greater value.",
			"tags":["binary"]
		},{
			"id":"builder-327",
			"name":"com.livecode.binary",
			"display name":"com.livecode.binary",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.binary"
			],
			"associations":["com.livecode.binary"],
			"summary":"This library consists of the operations on binary strings provided by the standard library of Extension Builder.",
			"description":"This library consists of the operations on binary strings provided by the standard library of Extension Builder."
		},{
			"id":"builder-328",
			"name":"byteisindata",
			"display name":"ByteIsInData",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Needle> is in <Target>"
			],
			"display syntax":[
				"<i>Needle</i> is in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Needle> is in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a single byte of binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Needle> is among the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* It is an error if <Needle> evaluates to data consisting of more than one byte.",
			"tags":["binary"]
		},{
			"id":"builder-329",
			"name":"byteoffset",
			"display name":"ByteOffset",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Finds the first or last occurrence of <Needle> within <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of bytes between the first byte of <Target> and the first (respectively last) occurrence of <Needle>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in <Target>, then the output is 0.",
			"tags":["binary"]
		},{
			"id":"builder-330",
			"name":"deletefirstbyteof",
			"display name":"DeleteFirstByteOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete the first byte of <Target>"
			],
			"display syntax":[
				"delete the first byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the first byte in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A binary data container."
			}],
			"description":"Replaces the first byte in <Target> with the empty data.\n\n>*Note:* It is an error if <Target> is the empty data.",
			"tags":["binary"]
		},{
			"id":"builder-331",
			"name":"singletonbyteof",
			"display name":"SingletonByteOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"byte <Index> of <Target>"
			],
			"display syntax":[
				"byte <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the byte of data at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the byte at the given index for use as the target container of another operation, or evaluates the byte at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["binary"]
		},{
			"id":"builder-332",
			"name":"deletesingletonbyteof",
			"display name":"DeleteSingletonByteOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete byte <Index> of <Target>"
			],
			"display syntax":[
				"delete byte <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the byte of data at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A container of binary data."
			}],
			"description":"Replaces the byte at the given index with the empty data.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["binary"]
		},{
			"id":"builder-333",
			"name":"randombytes",
			"display name":"RandomBytes",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Count> random bytes"
			],
			"display syntax":[
				"<i>Count</i> random bytes"
			],
			"associations":["com.livecode.byte"],
			"summary":"Generate random data",
			"parameters":[{
				"name":"Count",
				"type":"",
				"refparam":"false",
				"description":"Expression evaluating to the number of bytes to generate"
			}],
			"description":"Generates the requested number of bytes of cryptographic-quality\nrandom data.",
			"tags":["binary","random"]
		},{
			"id":"builder-334",
			"name":"repeatforeachbyte",
			"display name":"RepeatForEachByte",
			"library":"builder",
			"type":"iterator",
			"syntax":[
				"byte <Iterand>"
			],
			"display syntax":[
				"byte <i>Iterand</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Repeat over the bytes of some data",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A container of binary data."
			}],
			"description":"Use repeat for each to perform an operation on each byte of some data. On each iteration, the <Iterand> will contain the next char of the string being iterated over.",
			"tags":["binary","control structures"]
		},{
			"id":"builder-335",
			"name":"deleterangebyteof",
			"display name":"DeleteRangeByteOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete byte <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete byte <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the bytes of data between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A container of binary data."
			}],
			"description":"Replaces the bytes between the given indices with the empty data.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["binary"]
		},{
			"id":"builder-336",
			"name":"bytewithcode",
			"display name":"ByteWithCode",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the byte with code <Value>"
			],
			"display syntax":[
				"the byte with code <i>Value</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Create a 1-byte data value from a number",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"The value for the new data value"
			}],
			"description":"Returns a byte of binary data, created using the given value.  The\n<Value> must be between 0 and 255 (inclusive).",
			"tags":["binary"]
		},{
			"id":"builder-337",
			"name":"countbytesof",
			"display name":"CountBytesOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the number of bytes in <Target>"
			],
			"display syntax":[
				"the number of bytes in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Counts the number of bytes in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of bytes in <Target>"
			}],
			"description":"Counts the number of bytes in <Target>.",
			"tags":["binary"]
		},{
			"id":"builder-338",
			"name":"byteoffsetafter",
			"display name":"ByteOffsetAfter",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> after <After> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> after <i>After</i> in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Finds the first or last occurrence of <Needle> after a specified index in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> after index <After> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of bytes between byte <After> of <Target> and the first (respectively last) occurrence of <Needle> after <After>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur after <After> in <Target>, then the output is 0.",
			"tags":["binary"]
		},{
			"id":"builder-339",
			"name":"com.livecode.byte",
			"display name":"com.livecode.byte",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.byte"
			],
			"associations":["com.livecode.byte"],
			"summary":"This library consists of the operations on bytes included in the standard library of Extension Builder.",
			"description":"This library consists of the operations on bytes included in the standard library of Extension Builder."
		},{
			"id":"builder-340",
			"name":"beginswithbytes",
			"display name":"BeginsWithBytes",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> begins with <Needle>"
			],
			"display syntax":[
				"<i>Target</i> begins with <i>Needle</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Target> begins with <Needle>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the bytes of <Needle> occur as an initial subsequence of the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* Since the empty data is an initial subsequence of every sequence of bytes, every sequence of bytes begins with the empty data.",
			"tags":["binary"]
		},{
			"id":"builder-341",
			"name":"endswithbytes",
			"display name":"EndsWithBytes",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> ends with <Needle>"
			],
			"display syntax":[
				"<i>Target</i> ends with <i>Needle</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Target> ends with <Needle>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the bytes of <Needle> occur as a final subsequence of the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* Since the empty data is a final subsequence of every sequence of bytes, every sequence of bytes ends with the empty data.",
			"tags":["binary"]
		},{
			"id":"builder-342",
			"name":"containsbytes",
			"display name":"ContainsBytes",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> contains <Needle>"
			],
			"display syntax":[
				"<i>Target</i> contains <i>Needle</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Determines whether <Needle> contains <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the bytes of <Needle> occur as a subsequence of the bytes of <Target>, and false otherwise."
			}],
			"description":">*Note:* Since the empty data is a subsequence of every sequence of bytes, every sequence of bytes contains the empty data.",
			"tags":["binary"]
		},{
			"id":"builder-343",
			"name":"lastbyteof",
			"display name":"LastByteOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the last byte of <Target>"
			],
			"display syntax":[
				"the last byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the first byte of data in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the first byte for use as the target container of another operation, or evaluates the first byte as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["binary"]
		},{
			"id":"builder-344",
			"name":"deletelastbyteof",
			"display name":"DeleteLastByteOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete the last byte of <Target>"
			],
			"display syntax":[
				"delete the last byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Deletes the last byte in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A binary data container."
			}],
			"description":"Replaces the last byte in <Target> with the empty data.\n\n>*Note:* It is an error if <Target> is the empty data.",
			"tags":["binary"]
		},{
			"id":"builder-345",
			"name":"byteoffsetbefore",
			"display name":"ByteOffsetBefore",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> before <Before> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> before <i>Before</i> in <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Finds the first or last occurrence of <Needle> before a specified index in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> before index <Before> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of bytes between the first byte of <Target> and the first (respectively last) occurrence of <Needle> before <Before>. If neither first or last is specified, then the last offset is found. If <Needle> does not occur before <Before> in <Target>, then the output is 0.",
			"tags":["binary"]
		},{
			"id":"builder-346",
			"name":"firstbyteof",
			"display name":"FirstByteOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the first byte of <Target>"
			],
			"display syntax":[
				"the first byte of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the first byte of data in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the first byte for use as the target container of another operation, or evaluates the first byte as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["binary"]
		},{
			"id":"builder-347",
			"name":"codeofbyte",
			"display name":"CodeOfByte",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the code of <Target>"
			],
			"display syntax":[
				"the code of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Get the numeric value of a single byte.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A 1-byte binary data value."
			}],
			"description":"Returns the numeric representation of a single byte of binary data.",
			"tags":["binary"]
		},{
			"id":"builder-348",
			"name":"rangebyteof",
			"display name":"RangeByteOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"byte <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"byte <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Designates the bytes of data between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to binary data."
			}],
			"description":"Either locates the bytes between the given indices for use as the target container of another operation, or evaluates the bytes at the given indices as the source of another operation.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["binary"]
		},{
			"id":"builder-349",
			"name":"reversebytesof",
			"display name":"ReverseBytesOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"reverse <Target>"
			],
			"display syntax":[
				"reverse <i>Target</i>"
			],
			"associations":["com.livecode.byte"],
			"summary":"Reverse binary data",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A binary data string"
			}],
			"examples":[{
				"script":"variable tForward\nput 5 random bytes into tForward\n\nvariable tReversed\nput tForward into tReversed\nreverse tReversed\n\nexpect that the first byte of tForward is the last byte of tReversed\nexpect that the last byte of tForward is the first byte of tReversed"
			}],
			"description":"Reverses the order of bytes in the <Target>.",
			"tags":["binary"]
		},{
			"id":"builder-350",
			"name":"androidrecordergetmaxamplitude",
			"display name":"androidRecorderGetMaxAmplitude",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderGetMaxAmplitude()"
			],
			"display syntax":[
				"androidRecorderGetMaxAmplitude()"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Returns the max amplitude of the recording since last sampled",
			"OS":["android"],
			"examples":[{
				"script":"-- Poll amplitude every 30 millisecs, and output values\ncommand LogAmplitude\n   put androidRecorderGetMaxAmplitude()\n   send \"LogAmplitude\" to me in 30 millisecs\nend LogAmplitude"
			}],
			"description":"Use the <androidRecorderGetMaxAmplitude> handler to retrieve the maximum\namplitude value reached during recording from the selected input source\nsince the amplitude was last retrieved.\n\n<androidRecorderGetMaxAmplitude> returns 0 if no recording is currently\nhappening.\n"
		},{
			"id":"builder-351",
			"name":"androidrecordersetrecordcompressiontype",
			"display name":"androidRecorderSetRecordCompressionType",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderSetRecordCompressionType(<pCompressionType>)"
			],
			"display syntax":[
				"androidRecorderSetRecordCompressionType(<i>pCompressionType</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Set the record compression type",
			"OS":["android"],
			"parameters":[{
				"name":"pCompressionType",
				"type":"",
				"refparam":"false",
				"description":"The record compression type\n- \"Default\": The default compression type\n- \"AMR NB\": AMR Narrowband\n- \"AMR WB\": AMR Wideband\n- \"AAC\": AAC Low Complexity (AAC-LC)\n- \"HE AAC\": High Efficiency AAC (HE-AAC)\n- \"AAC ELD\": Enhanced Low Delay AAC (AAC-ELD)\n- \"Vorbis\" : Ogg Vorbis"
			}],
			"examples":[{
				"script":"androidRecorderSetRecordCompressionType \"AMR NB\""
			}],
			"description":"Use the <androidRecorderSetRecordCompressionType> handler to control the \naudio encoding used by the audio recorder."
		},{
			"id":"builder-352",
			"name":"androidrecordersetrecordformat",
			"display name":"androidRecorderSetRecordFormat",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderSetRecordFormat(<pRecordFormat>)"
			],
			"display syntax":[
				"androidRecorderSetRecordFormat(<i>pRecordFormat</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Set the record output format",
			"OS":["android"],
			"parameters":[{
				"name":"pRecordFormat",
				"type":"",
				"refparam":"false",
				"description":"The record output format\n\"ThreeGPP\":\n\"MPEG-4\":\n\"AMR WB\":\n\"AAC ADTS\":\n\"WebM\":"
			}],
			"examples":[{
				"script":"androidRecorderSetRecordFormat \"ThreeGPP\""
			}],
			"description":"Use the <androidRecorderSetRecordFormat> handler to set the format of \nthe output file."
		},{
			"id":"builder-353",
			"name":"androidrecorderstoprecording",
			"display name":"androidRecorderStopRecording",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderStopRecording()"
			],
			"display syntax":[
				"androidRecorderStopRecording()"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Stop recording",
			"OS":["android"],
			"examples":[{
				"script":"on mouseUp\n    try\n        androidRecorderStopRecording\n    catch tError\n        answer tError\n    end try\nend mouseUp"
			}],
			"description":"Use the <androidRecorderStopRecording> handler to stop the current \nrecording. If no recording is currently happening, this handler will\nthrow an error."
		},{
			"id":"builder-354",
			"name":"androidrecorderstartrecording",
			"display name":"androidRecorderStartRecording",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderStartRecording(<pFileName>)"
			],
			"display syntax":[
				"androidRecorderStartRecording(<i>pFileName</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Start recording an audio file, using the given filename",
			"OS":["android"],
			"parameters":[{
				"name":"pFileName",
				"type":"",
				"refparam":"false",
				"description":"The absolute filename of the output file"
			}],
			"examples":[{
				"script":"   local tFilePath\n   put specialFolderPath(\"external documents\") & slash & \"recording.mp4\" \\\n      into tFilePath   \n   androidRecorderStartRecording tFilePath"
			}],
			"description":"Use the <androidRecorderStartRecording> handler to start recording audio\non Android using the input source, compression type and output format \nselected using the <androidRecorderSetRecordInput>, \n<androidRecorderSetRecordCompressionType>, and <androidRecorderSetRecordFormat>\nhandlers. The default input source, compression and output format are \nbuilt-in microphone, AMR-NB and 3gpp respectively.",
			"references":{
				"handler":["androidRecorderSetRecordInput","androidRecorderSetRecordCompressionType","androidRecorderSetRecordFormat"]
			}
		},{
			"id":"builder-355",
			"name":"androidrecordersetrecordinput",
			"display name":"androidRecorderSetRecordInput",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidRecorderSetRecordInput(<pInputSource>)"
			],
			"display syntax":[
				"androidRecorderSetRecordInput(<i>pInputSource</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Set the record input source",
			"OS":["android"],
			"parameters":[{
				"name":"pInputSource",
				"type":"",
				"refparam":"false",
				"description":"The record input source\n- \"Default\": The device's default record input source\n- \"Mic\": Microphone audio source\n- \"VoiceUplink\": Voice call uplink (Tx) audio source\n- \"VoiceDownlink\": Voice call uplink (Tx) audio source.\n- \"VoiceCall\": Voice call uplink + downlink audio source\n- \"Camcorder\": Microphone audio source tuned for video recording, with the same orientation as the camera if available\n- \"VoiceRecognition\": Microphone audio source tuned for voice recognition\n- \"VoiceCommunication\": Microphone audio source tuned for voice recognition\n- \"RemoteSubmix\": Audio source for a submix of audio streams to be presented remotely\n- \"Unprocessed\": Microphone audio source tuned for unprocessed (raw) sound if available, behaves like Default otherwise"
			}],
			"examples":[{
				"script":"androidRecorderSetRecordInput \"mic\""
			}],
			"description":"Use the <androidRecorderSetRecordInput> handler to control the source \nand tuning of the record input."
		},{
			"id":"builder-356",
			"name":"com.livecode.library.androidaudiorecorder",
			"display name":"com.livecode.library.androidaudiorecorder",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.androidaudiorecorder"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"This library provides Android audio recording functionality, via the \nandroid.media.MediaRecorder class.",
			"OS":["android"],
			"description":"Use this library to record audio on Android. \n\n>*Note:* This library requires RECORD_AUDIO, WRITE_EXTERNAL_STORAGE and\n> CAPTURE_AUDIO_OUTPUT permissions. These will be automatically added to \n> the application manifest when an application including this library is \n> built."
		},{
			"id":"builder-357",
			"name":"nighthourhandcolor",
			"display name":"nightHourHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the nightHourHandColor of <widget>",
				"set the nightHourHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightHourHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the hour hand on the clock during the night",
			"description":"Use the <nightHourHandColor> property to get or set the color of the hour\nhand of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-358",
			"name":"timezone",
			"display name":"timeZone",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the timeZone of <widget>",
				"set the timeZone of <widget> to <pOffset>"
			],
			"display syntax":[
				"get the timeZone of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"The time zone offset from UTC, in seconds, or the empty string",
			"description":"The <timeZone> is used to allow the clock widget to display a time other than\nthe local time.  If the <timeZone> is empty, then the clock displays the local\ntime.  Otherwise, the <timeZone> should be the number of seconds different from\nUTC that the clock should display.\n"
		},{
			"id":"builder-359",
			"name":"nightfacecolor",
			"display name":"nightFaceColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the nightFaceColor of <widget>",
				"set the nightFaceColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightFaceColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the face of the clock during the night",
			"description":"Use the <nightFaceColor> property to get or set the color of the face\nof the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-360",
			"name":"nightsecondhandcolor",
			"display name":"nightSecondHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the nightSecondHandColor of <widget>",
				"set the nightSecondHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightSecondHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the second hand on the clock during the night",
			"description":"Use the <nightSecondHandColor> property to get or set the color of the second\nhand of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-361",
			"name":"daynumbercolor",
			"display name":"dayNumberColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the dayNumberColor of <widget>",
				"set the dayNumberColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayNumberColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the numbers on the clock during the day",
			"description":"Use the <dayNumberColor> property to get or set the text color of the numbers\non the face of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors use the read-only property\n<isDay>."
		},{
			"id":"builder-362",
			"name":"dayfacecolor",
			"display name":"dayFaceColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the dayFaceColor of <widget>",
				"set the dayFaceColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayFaceColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the face of the clock during the day",
			"description":"Use the <dayFaceColor> property to get or set the color of the face\nof the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-363",
			"name":"nightnumbercolor",
			"display name":"nightNumberColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the nightNumberColor of <widget>",
				"set the nightNumberColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightNumberColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the numbers on the clock during the night",
			"description":"Use the <nightNumberColor> property to get or set the text color of the numbers\non the face of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors use the read-only property\n<isDay>."
		},{
			"id":"builder-364",
			"name":"nightminutehandcolor",
			"display name":"nightMinuteHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the nightMinuteHandColor of <widget>",
				"set the nightMinuteHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightMinuteHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the minute hand on the clock during the night",
			"description":"Use the <nightMinuteHandColor> property to get or set the color of the minute\nhand of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-365",
			"name":"dayminutehandcolor",
			"display name":"dayMinuteHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the dayMinuteHandColor of <widget>",
				"set the dayMinuteHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayMinuteHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the minute hand on the clock during the day",
			"description":"Use the <dayMinuteHandColor> property to get or set the color of the minute\nhand of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-366",
			"name":"daysecondhandcolor",
			"display name":"daySecondHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the daySecondHandColor of <widget>",
				"set the daySecondHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the daySecondHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the second hand on the clock during the day",
			"description":"Use the <daySecondHandColor> property to get or set the color of the second\nhand of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-367",
			"name":"com.livecode.widget.clock",
			"display name":"com.livecode.widget.clock",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.clock"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"This widget consists of an analogue clock. The clock has day and night style displays which\nare used depending on the time. The period interpreted as day by the clock is controlled by\na pair of constants kStartDay and kEndDay, currently set at 6 and 20 respectively. Thus the\nclock will display in night style between the hours of 8pm and 6am. The style of the clock,\ncan be controlled by setting the appropriate colors of the different components. For daytime\nthis is through the dayNumberColor, dayHourHandColor, dayMinuteHandColor, daySecondHandColor\nand dayFaceColor properties. There are equivalent properties for the night style. The time\ndisplayed by the clock can differ from the current system local time by setting the timeZone\nproperty, an integer which adjusts the time displayed relative to universal time (UTC).",
			"description":"This widget consists of an analogue clock. The clock has day and night style displays which\nare used depending on the time. The period interpreted as day by the clock is controlled by\na pair of constants kStartDay and kEndDay, currently set at 6 and 20 respectively. Thus the\nclock will display in night style between the hours of 8pm and 6am. The style of the clock,\ncan be controlled by setting the appropriate colors of the different components. For daytime\nthis is through the dayNumberColor, dayHourHandColor, dayMinuteHandColor, daySecondHandColor\nand dayFaceColor properties. There are equivalent properties for the night style. The time\ndisplayed by the clock can differ from the current system local time by setting the timeZone\nproperty, an integer which adjusts the time displayed relative to universal time (UTC)."
		},{
			"id":"builder-368",
			"name":"isday",
			"display name":"isDay",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the isDay of <widget>"
			],
			"display syntax":[
				"get the isDay of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Whether the clock's current display is in \"day\" mode.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if the widget is in \"day\" mode; false otherwise"
			}],
			"description":"The <isDay> property indicates whether the clock widget is using its\n\"day\" mode or \"night\" mode.  Its value depends on the current time,\nand is read-only."
		},{
			"id":"builder-369",
			"name":"dayhourhandcolor",
			"display name":"dayHourHandColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the dayHourHandColor of <widget>",
				"set the dayHourHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayHourHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the hour hand on the clock during the day",
			"description":"Use the <dayHourHandColor> property to get or set the color of the hour\nhand of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"builder-370",
			"name":"formattedheight",
			"display name":"formattedHeight",
			"library":"builder",
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
			"id":"builder-371",
			"name":"autofoldstatereset",
			"display name":"autoFoldStateReset",
			"library":"builder",
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
			"id":"builder-372",
			"name":"showhover",
			"display name":"showHover",
			"library":"builder",
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
			"id":"builder-373",
			"name":"charstotrimfromkey",
			"display name":"charsToTrimFromKey",
			"library":"builder",
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
			"id":"builder-374",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"builder",
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
			"id":"builder-375",
			"name":"arraystyle",
			"display name":"arrayStyle",
			"library":"builder",
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
			"id":"builder-376",
			"name":"actioninspect",
			"display name":"actionInspect",
			"library":"builder",
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
			"id":"builder-377",
			"name":"datachanged",
			"display name":"dataChanged",
			"library":"builder",
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
			"id":"builder-378",
			"name":"arraydata",
			"display name":"arrayData",
			"library":"builder",
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
			"id":"builder-379",
			"name":"hilitenewelement",
			"display name":"hiliteNewElement",
			"library":"builder",
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
			"id":"builder-380",
			"name":"separatorratio",
			"display name":"separatorRatio",
			"library":"builder",
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
			"id":"builder-381",
			"name":"hilitedelement",
			"display name":"hilitedElement",
			"library":"builder",
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
			"id":"builder-382",
			"name":"scrollhilitedelementintoview",
			"display name":"scrollHilitedElementIntoView",
			"library":"builder",
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
			"id":"builder-383",
			"name":"formattedheightchanged",
			"display name":"formattedHeightChanged",
			"library":"builder",
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
			"id":"builder-384",
			"name":"pathdelimiter",
			"display name":"pathDelimiter",
			"library":"builder",
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
			"id":"builder-385",
			"name":"textheight",
			"display name":"textHeight",
			"library":"builder",
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
		},{
			"id":"builder-386",
			"name":"alternaterowbackgrounds",
			"display name":"alternateRowBackgrounds",
			"library":"builder",
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
			"id":"builder-387",
			"name":"vscrollbar",
			"display name":"vScrollbar",
			"library":"builder",
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
			"id":"builder-388",
			"name":"sortorder",
			"display name":"sortOrder",
			"library":"builder",
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
			"id":"builder-389",
			"name":"hilitedelementisfolded",
			"display name":"hilitedElementIsFolded",
			"library":"builder",
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
			"id":"builder-390",
			"name":"com.livecode.widget.treeview",
			"display name":"com.livecode.widget.treeview",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.treeview"
			],
			"associations":["com.livecode.widget.treeview"],
			"summary":"A widget to display array data in a tree view",
			"description":"A widget to display array data in a tree view"
		},{
			"id":"builder-391",
			"name":"iconheight",
			"display name":"iconHeight",
			"library":"builder",
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
			"id":"builder-392",
			"name":"foldstate",
			"display name":"foldState",
			"library":"builder",
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
			"id":"builder-393",
			"name":"readonly",
			"display name":"readOnly",
			"library":"builder",
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
			"id":"builder-394",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
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
			"id":"builder-395",
			"name":"showseparator",
			"display name":"showSeparator",
			"library":"builder",
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
			"id":"builder-396",
			"name":"hilitedelementfoldstate",
			"display name":"hilitedElementFoldState",
			"library":"builder",
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
			"id":"builder-397",
			"name":"showvalues",
			"display name":"showValues",
			"library":"builder",
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
			"id":"builder-398",
			"name":"actiondoubleclick",
			"display name":"actionDoubleClick",
			"library":"builder",
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
			"id":"builder-399",
			"name":"sorttype",
			"display name":"sortType",
			"library":"builder",
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
			"id":"builder-400",
			"name":"scroll",
			"display name":"scroll",
			"library":"builder",
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
			"id":"builder-401",
			"name":"com.livecode.typeconvert",
			"display name":"com.livecode.typeconvert",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.typeconvert"
			],
			"associations":["com.livecode.typeconvert"],
			"summary":"This library consists of the operations for performing complex type conversion in Extension Builder.",
			"description":"This library consists of the operations for performing complex type conversion in Extension Builder."
		},{
			"id":"builder-402",
			"name":"stringsplitby",
			"display name":"StringSplitBy",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"split <Target> by <Delimiter>"
			],
			"display syntax":[
				"split <i>Target</i> by <i>Delimiter</i>"
			],
			"associations":["com.livecode.typeconvert"],
			"summary":"Splits the string in <Target> into a list of strings, using <Delimiter>\n                as the delimiter.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string container."
			},{
				"name":"Delimiter",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\n    put \"first,second,third,fourth,fifth\" into tVar\n    variable tSplit as List\n    split tVar by \",\" into tSplit\n    put element 1 of tSplit into tFirstElement // tFirstElement contains \"first\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The list of strings."
			}],
			"description":"Use the split command to convert a string representation of a list into a genuine (ordered) list.",
			"tags":["type conversion"]
		},{
			"id":"builder-403",
			"name":"combinelistwith",
			"display name":"CombineListWith",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"combine <Target> with <Delimiter>"
			],
			"display syntax":[
				"combine <i>Target</i> with <i>Delimiter</i>"
			],
			"associations":["com.livecode.typeconvert"],
			"summary":"Combines the list of strings in <Target>, using <Delimiter>\n                as the delimiter.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list container."
			},{
				"name":"Delimiter",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tWords as List\nput [\"A\",\"List\",\"of\",\"words\"] into tWords\n\nvariable tString as String\ncombine tWords with \" \" into tString\n-- tString contains \"A List of words\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The combined string."
			}],
			"description":"Use the combine command to convert a list into a string representation of the list.\n\n>*Note:* The list *must* consist entirely of string elements, otherwise the combine command will throw an error.",
			"tags":["type conversion"]
		},{
			"id":"builder-404",
			"name":"highlight",
			"display name":"highlight",
			"library":"builder",
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
			"id":"builder-405",
			"name":"backcolor",
			"display name":"backColor",
			"library":"builder",
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
			"id":"builder-406",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"builder",
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
			"id":"builder-407",
			"name":"theme",
			"display name":"theme",
			"library":"builder",
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
			"id":"builder-408",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"builder",
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
			"id":"builder-409",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"builder",
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
			"id":"builder-410",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
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
		},{
			"id":"builder-411",
			"name":"com.livecode.widget.switchbutton",
			"display name":"com.livecode.widget.switchbutton",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.switchbutton"
			],
			"associations":["com.livecode.widget.switchbutton"],
			"summary":"This widget is a switch button, consisting of two mutually exclusive choices or states.",
			"description":"This widget is a switch button, consisting of two mutually exclusive choices or states."
		},{
			"id":"builder-412",
			"name":"browserframedocumentloadfailed",
			"display name":"browserFrameDocumentLoadFailed",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserFrameDocumentLoadFailed <pUrl>, <pError>"
			],
			"display syntax":[
				"browserFrameDocumentLoadFailed <i>pUrl</i>, <i>pError</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document has failed to load in a frame of the\nbrowser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the document."
			},{
				"name":"pError",
				"type":"string",
				"refparam":"false",
				"description":"An error message describing the reason for the failure."
			}],
			"description":"The <browserFrameDocumentLoadFailed> message is sent to the widget's\nscript object when a new document has failed to load in a frame of the\nbrowser. The <pUrl> parameter contains the URL of the document, and the\n<pError> parameter gives the reason for the failure."
		},{
			"id":"builder-413",
			"name":"browsernavigatebegin",
			"display name":"browserNavigateBegin",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserNavigateBegin <pUrl>"
			],
			"display syntax":[
				"browserNavigateBegin <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when the browser begins navigation to a new page.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the new page."
			}],
			"description":"The <browserNavigateBegin> message is sent to the widget's script object\nwhen the browser begins navigation to a new page. This can be triggered\nby launching a URL in the browser, or clicking a link within the\nbrowser. The <pUrl> parameter contains the URL of the new page."
		},{
			"id":"builder-414",
			"name":"browserframedocumentloadbegin",
			"display name":"browserFrameDocumentLoadBegin",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserFrameDocumentLoadBegin <pUrl>"
			],
			"display syntax":[
				"browserFrameDocumentLoadBegin <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document begins loading in a frame of the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the loading document."
			}],
			"description":"The <browserFrameDocumentLoadBegin> message is sent to the widget's\nscript object when a new document begins to load in a frame of the\nbrowser. This will happen whenever the browser navigates to a new page\nwith multiple frames. The <pUrl> parameter contains the URL of the\nloading document."
		},{
			"id":"builder-415",
			"name":"allowuserinteraction",
			"display name":"allowUserInteraction",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the allowUserInteraction of <widget> to <allowInteraction>\nget the allowUserInteraction of <widget>"
			],
			"display syntax":[
				"set the allowUserInteraction of <i>widget</i> to <i>allowInteraction</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Controls whether the browser responds to user interaction.",
			"value":[{
				"name":"value",
				"type":"boolean",
				"description":"`true` if the browser should respond to user interaction;\n`false` otherwise."
			}],
			"description":"Use the <allowUserInteraction> property to control if the browser should respond\nto user interaction."
		},{
			"id":"builder-416",
			"name":"browserdocumentloadbegin",
			"display name":"browserDocumentLoadBegin",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserDocumentLoadBegin <pUrl>"
			],
			"display syntax":[
				"browserDocumentLoadBegin <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document begins loading in the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the loading document."
			}],
			"description":"The <browserDocumentLoadBegin> message is sent to the widget's script\nobject when a new document begins to load in the browser. This will\nhappen whenever the browser navigates to a new page. The <pUrl>\nparameter contains the URL of the loading document."
		},{
			"id":"builder-417",
			"name":"com.livecode.widget.browser",
			"display name":"com.livecode.widget.browser",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.browser"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"This widget displays web content within a native web browser view.\n\nThe browser widget can display HTML content generated from xTalk script, or\nfetch content over the Internet.  It supports JavaScript and allows\nfor interaction between xTalk scripts and JavaScript code.\n\nThe [browser SVG icon](https://www.iconfinder.com/icons/309064/browser_globe_international_internet_web_world_icon)\nis copyright ¬© Ivan Boyko, and is licensed under the terms of the\n[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/).",
			"description":"This widget displays web content within a native web browser view.\n\nThe browser widget can display HTML content generated from xTalk script, or\nfetch content over the Internet.  It supports JavaScript and allows\nfor interaction between xTalk scripts and JavaScript code.\n\nThe [browser SVG icon](https://www.iconfinder.com/icons/309064/browser_globe_international_internet_web_world_icon)\nis copyright ¬© Ivan Boyko, and is licensed under the terms of the\n[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/)."
		},{
			"id":"builder-418",
			"name":"browserdocumentloadfailed",
			"display name":"browserDocumentLoadFailed",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserDocumentLoadFailed <pUrl>, <pError>"
			],
			"display syntax":[
				"browserDocumentLoadFailed <i>pUrl</i>, <i>pError</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document has failed to load in the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the document."
			},{
				"name":"pError",
				"type":"string",
				"refparam":"false",
				"description":"An error message describing the reason for the failure."
			}],
			"description":"The <browserDocumentLoadFailed> message is sent to the widget's script\nobject when a new document has failed to load in the browser. The <pUrl>\nparameter contains the URL of the document, and the <pError> parameter\ngives the reason for the failure."
		},{
			"id":"builder-419",
			"name":"browserdocumentloadcomplete",
			"display name":"browserDocumentLoadComplete",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserDocumentLoadComplete <pUrl>"
			],
			"display syntax":[
				"browserDocumentLoadComplete <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document has completed loading in the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the loaded document."
			}],
			"description":"The <browserDocumentLoadComplete> message is sent to the widget's script\nobject when a new document has completed loading in the browser. The\n<pUrl> parameter contains the URL of the loaded document."
		},{
			"id":"builder-420",
			"name":"hscrollbar",
			"display name":"hScrollbar",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the hScrollbar of <widget> to <pEnabled>\nget the hScrollbar of <widget>"
			],
			"display syntax":[
				"set the hScrollbar of <i>widget</i> to <i>pEnabled</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Controls the visibility of the browser's horizontal scrollbar.",
			"value":[{
				"name":"value",
				"type":"boolean",
				"description":"`true` if the horizontal scrollbar should be enabled and displayed;\n`false` otherwise."
			}],
			"description":"Use the <hScrollbar> property to control the visibility of the browser's\nhorizontal scrollbar",
			"references":{
				"property":["vScrollbar"]
			}
		},{
			"id":"builder-421",
			"name":"issecure",
			"display name":"isSecure",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the isSecure of <widget>"
			],
			"display syntax":[
				"get the isSecure of <i>widget</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Indicates if all resources in the current document have been loaded\nthrough securely encrypted connections.",
			"value":[{
				"name":"value",
				"type":"boolean",
				"description":"`true` if all resources in the current document have been loaded through\nsecurely encrypted connections;\n`false` otherwise."
			}],
			"description":"Use the <isSecure> property to determine if all resources in the current\ndocument have been loaded through securely encrypted connections. If the current\ndocument is still loading, this will return false\n"
		},{
			"id":"builder-422",
			"name":"browsernavigatefailed",
			"display name":"browserNavigateFailed",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserNavigateFailed <pUrl>, <pError>"
			],
			"display syntax":[
				"browserNavigateFailed <i>pUrl</i>, <i>pError</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when the browser has failed to navigate to a new page.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the document."
			},{
				"name":"pError",
				"type":"string",
				"refparam":"false",
				"description":"An error message describing the reason for the failure."
			}],
			"description":"The <browserNavigateFailed> message is sent to the widget's script\nobject when the browser has failed to navigate to a new page. The <pUrl>\nparameter contains the URL of the new page, and the <pError> parameter\ngives the reason for the failure."
		},{
			"id":"builder-423",
			"name":"browsernavigatecomplete",
			"display name":"browserNavigateComplete",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserNavigateComplete <pUrl>"
			],
			"display syntax":[
				"browserNavigateComplete <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when the browser successfully navigates to a new page.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the new page."
			}],
			"description":"The <browserNavigateComplete> message is sent to the widget's script\nobject when the browser successfully navigates to a new page. The <pUrl>\nparameter contains the URL of the new page."
		},{
			"id":"builder-424",
			"name":"useragent",
			"display name":"userAgent",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the userAgent of <widget> to <pUserAgent>\nget the userAgent of <widget>"
			],
			"display syntax":[
				"set the userAgent of <i>widget</i> to <i>pUserAgent</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"The identifier sent by the browser when fetching content from remote URLs.",
			"OS":["mac","windows","linux","android","ios"],
			"examples":[{
				"script":"-- Set a custom User-Agent header. The remote web server may\n-- be configured to deliver custom content for browsers using\n-- this User-Agent.\nset the userAgent of widget \"myBrowser\" to \"myAppEmbeddedBrowser\"\nlaunch url \"https://myexampleserver.com/content.html\" in widget \"myBrowser\""
			}],
			"value":[{
				"name":"value",
				"type":"string",
				"description":"A suitable HTTP user agent string."
			}],
			"description":"The <userAgent> is the identifier sent by the browser when fetching\ncontent from remote HTTP servers.\n\nThe <userAgent> must conform to the requirements for the `User-Agent`\nheader described in the HTTP specification.  See [RFC 2616, section\n14.43](https://tools.ietf.org/html/rfc2616#section-14.43)."
		},{
			"id":"builder-425",
			"name":"javascripthandlers",
			"display name":"javascriptHandlers",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the javascriptHandlers of <widget> to <pHanderList>\nget the javascriptHandlers of <widget>"
			],
			"display syntax":[
				"set the javascriptHandlers of <i>widget</i> to <i>pHanderList</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"A list of handlers that are made available to JavaScript calls within the browser.",
			"examples":[{
				"script":"-- Define a handler to respond to javascript calls.\non myJSHandler pMessage, pValue\n\t-- Do appropriate actions here.\n\t-- ...\nend myJSHandler\n\n-- Set up the browser javascript handler list\n-- This code goes in a suitable setup handler\nset the javascriptHandlers to \"myJSHandler\" & return & \"myOtherJSHandler\"\n\n// Calling the handler from JavaScript within the browser\nliveCode.myJSHandler(\"myMessage\", 12345);"
			}],
			"value":[{
				"name":"value",
				"type":"string",
				"description":"A return-separated list of handler names."
			}],
			"description":"The <javascriptHandlers> is a list of handlers that are made\navailable to JavaScript calls within the browser. The handlers will\nappear as methods attached to a global `liveCode` object. You can call\nthese methods as you would any other JavaScript function and pass\nwhatever parameters you require.\n\n>*Warning:* Setting the <javascriptHandlers> property gives JavaScript\nrunning within the Web browser permission to execute parts of your\napplication through the handlers you choose to expose. If using this\nfeature, make sure that you have complete control over the webpages\nwhich you load into the browser widget, and consider using HTTPS to\nensure that third-parties cannot inject malicious code into them."
		},{
			"id":"builder-426",
			"name":"vscrollbar",
			"display name":"vScrollbar",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the vScrollbar of <widget> to <pEnabled>\nget the vScrollbar of <widget>"
			],
			"display syntax":[
				"set the vScrollbar of <i>widget</i> to <i>pEnabled</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Controls the visibility of the browser's vertical scrollbar.",
			"value":[{
				"name":"value",
				"type":"boolean",
				"description":"`true` if the vertical scrollbar should be enabled and displayed;\n`false` otherwise."
			}],
			"description":"Use the <vScrollbar> property to control the visibility of the browser's\nvertical scrollbar",
			"references":{
				"property":["hScrollbar"]
			}
		},{
			"id":"builder-427",
			"name":"url",
			"display name":"URL",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the URL of <widget> to <pUrl>\nget the URL of <widget>"
			],
			"display syntax":[
				"set the URL of <i>widget</i> to <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"The URL displayed by the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"A string specifying a URL."
			}],
			"examples":[{
				"script":"-- Navigate to openxtalk.org by setting the url property,\n-- keeping a copy of the previous URL\nlocal tOldUrl\nput the URL of widget \"myBrowser\" into tOldUrl\nset the URL of widget \"myBrowser\" to \"https://openxtalk.org\""
			}],
			"description":"The <URL> is the URL of the content be displayed in the browser.\n\n>*Note:* The <URL> must be a standards-compliant URL.  In particular,\n> `file:` URLs must be of the form `file://<absolute path>`, and the\n> path should be URL-encoded.\n> See [RFC 1738, section 2.2](https://tools.ietf.org/html/rfc1738#section-2.2).\n\n>*Note:* The <URL> reflects the currently displaying page in the\n> browser, and will change when navigating to another page. Setting the\n> htmlText will result in the <URL> being empty.\n\n>*Note:* Setting the <URL> won't necessarily cause resources to be\n> reloaded unless URLs of the resources explicitly change. However,\n> you can force the browser widget to reload a page using\n> `do \"location.reload()\" in widget \"browser\"` after setting the url.\n\n>*Note:* Setting the <URL> to empty will clear the currently loaded\n> page, resulting in a blank page being displayed and the <URL> and\n> <htmlText> of the widget being empty.",
			"references":{
				"property":["htmlText"]
			}
		},{
			"id":"builder-428",
			"name":"browserframedocumentloadcomplete",
			"display name":"browserFrameDocumentLoadComplete",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserFrameDocumentLoadComplete <pUrl>"
			],
			"display syntax":[
				"browserFrameDocumentLoadComplete <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when a document has completed loading in a frame of the browser.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the loaded document."
			}],
			"description":"The <browserFrameDocumentLoadComplete> message is sent to the widget's\nscript object when a new document has completed loading in a frame of\nthe browser. The <pUrl> parameter contains the URL of the loaded\ndocument."
		},{
			"id":"builder-429",
			"name":"browserprogresschanged",
			"display name":"browserProgressChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserProgressChanged <pUrl>, <pProgress>"
			],
			"display syntax":[
				"browserProgressChanged <i>pUrl</i>, <i>pProgress</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when the load progress of the current document changes.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the loading document."
			},{
				"name":"pProgress",
				"type":"number",
				"refparam":"false",
				"description":"The percentage of the document loaded."
			}],
			"description":"The <browserProgressChanged> message is sent to the widget's script\nobject when a the loading progress of the current document changes. The <pUrl>\nparameter contains the URL of the loading document. The <pProgress> parameter\ncontains the percentage (between 0 and 100) of the document loaded."
		},{
			"id":"builder-430",
			"name":"htmltext",
			"display name":"htmlText",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the htmlText of <widget> to <pHtmlText>\nget the htmlText of <widget>"
			],
			"display syntax":[
				"set the htmlText of <i>widget</i> to <i>pHtmlText</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"The HTML text of the content displayed by the browser.",
			"parameters":[{
				"name":"pHtmlText",
				"type":"string",
				"refparam":"false",
				"description":"A string containing HTML data to be displayed by the\nbrowser."
			}],
			"examples":[{
				"script":"-- Render a web page in the browser by specifying custom HTML\n-- content\nlocal tHTML\nput \"<html><head><title>My Page Title</title></head>\" & \\\n\t  \"<body>My Page Contents</body></html>\" into tHTML\nset the htmlText of widget \"myBrowser\" to tHTML"
			}],
			"description":"The <htmlText> is the HTML representation of the content displayed in\nthe browser.\n\n*Note:* When the <htmlText> has been set, the <URL> property will be\nempty. When the <URL> property is not empty, the <htmlText> will\ncontain the source of the current URL displayed in the browser.",
			"references":{
				"property":["URL"]
			}
		},{
			"id":"builder-431",
			"name":"browserunhandledloadrequest",
			"display name":"browserUnhandledLoadRequest",
			"library":"builder",
			"type":"message",
			"syntax":[
				"browserUnhandledLoadRequest <pUrl>"
			],
			"display syntax":[
				"browserUnhandledLoadRequest <i>pUrl</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"Sent when the browser is unable to handle a load request.",
			"parameters":[{
				"name":"pUrl",
				"type":"string",
				"refparam":"false",
				"description":"The URL of the request."
			}],
			"description":"The <browserUnhandledLoadRequest> message is sent to the widget's script\nobject when the browser is unable to load a URL, typically due to an\nunrecognised URL scheme. The <pUrl> parameter contains the URL of the\nunhandled request."
		},{
			"id":"builder-432",
			"name":"androidpauseaudioplayinginbackground",
			"display name":"androidPauseAudioPlayingInBackground",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidPauseAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidPauseAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Pause the currently playing background audio",
			"OS":["android"],
			"description":"Use the <androidPauseAudioPlayingInBackground> handler to pause the\naudio playback in the background started by the last call to \n<androidStartAudioPlayingInBackground>. It can be resumed by calling\n<androidResumeAudioPlayingInBackground>.",
			"references":{
				"handler":["androidStartAudioPlayingInBackground","androidResumeAudioPlayingInBackground"]
			}
		},{
			"id":"builder-433",
			"name":"com.livecode.library.androidbgaudio",
			"display name":"com.livecode.library.androidbgaudio",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.androidbgaudio"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"This library provides an API for playing background audio on Android",
			"OS":["android"],
			"description":"Use this library to start and control a background audio service that\nwill continue playing when the current application is suspended."
		},{
			"id":"builder-434",
			"name":"androidresumeaudioplayinginbackground",
			"display name":"androidResumeAudioPlayingInBackground",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidResumeAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidResumeAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Resume the currently paused background audio",
			"OS":["android"],
			"description":"Use the <androidResumeAudioPlayingInBackground> handler to resume the\naudio playback in the background paused by the last call to \n<androidPauseAudioPlayingInBackground>.",
			"references":{
				"handler":["androidPauseAudioPlayingInBackground"]
			}
		},{
			"id":"builder-435",
			"name":"androidisaudioplayinginbackground",
			"display name":"androidIsAudioPlayingInBackground",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidIsAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidIsAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Whether there is currently any audio playing in the background",
			"OS":["android"],
			"examples":[{
				"script":"    if androidIsAudioPlayingInBackground() then\n       androidPauseAudioPlayingInBackground\n    end if"
			}],
			"description":"Use the <androidIsAudioPlayingInBackground> to find out if there is any\naudio playback currently occurring in the background."
		},{
			"id":"builder-436",
			"name":"androidstopaudioplayinginbackground",
			"display name":"androidStopAudioPlayingInBackground",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidStopAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidStopAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Stop playing audio in the background.",
			"OS":["android"],
			"description":"Use the <androidStopAudioPlayingInBackground> handler to stop playing\nthe audio playback in the background started by the last call to \n<androidStartAudioPlayingInBackground>.",
			"references":{
				"handler":["androidStartAudioPlayingInBackground"]
			}
		},{
			"id":"builder-437",
			"name":"androidstartaudioplayinginbackground",
			"display name":"androidStartAudioPlayingInBackground",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"androidStartAudioPlayingInBackground(<pAudio>)"
			],
			"display syntax":[
				"androidStartAudioPlayingInBackground(<i>pAudio</i>)"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Start playing audio in the background.",
			"OS":["android"],
			"parameters":[{
				"name":"pAudio",
				"type":"",
				"refparam":"false",
				"description":"The full path to the audio file to start playing"
			}],
			"description":"Use the <androidStartAudioPlayingInBackground> handler to start playing\nthe audio contained in the file <pAudio> in the background. The audio\ncontinues playing until it finishes while the app is suspended, or until\nit is paused or stopped using the <androidStopAudioPlayingInBackground> \nor <androidPauseAudioPlayingInBackground> handlers are used.",
			"references":{
				"handler":["androidStopAudioPlayingInBackground","androidPauseAudioPlayingInBackground"]
			}
		},{
			"id":"builder-438",
			"name":"com.livecode.widget.native.ios.button",
			"display name":"com.livecode.widget.native.ios.button",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.ios.button"
			],
			"associations":["com.livecode.widget.native.ios.button"],
			"summary":"This widget is a native push button on iOS.",
			"OS":["ios"],
			"description":"This widget is a native push button on iOS."
		},{
			"id":"builder-439",
			"name":"enabled",
			"display name":"enabled",
			"library":"builder",
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
			"id":"builder-440",
			"name":"label",
			"display name":"label",
			"library":"builder",
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
		},{
			"id":"builder-441",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"builder",
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
			"id":"builder-442",
			"name":"hiliteditems",
			"display name":"hilitedItems",
			"library":"builder",
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
			"id":"builder-443",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"builder",
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
			"id":"builder-444",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"builder",
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
			"id":"builder-445",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"builder",
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
			"id":"builder-446",
			"name":"com.livecode.widget.segmented",
			"display name":"com.livecode.widget.segmented",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.segmented"
			],
			"associations":["com.livecode.widget.segmented"],
			"summary":"A widget that shows a row of selectable horizontal segments.\n\nA segmented control is a horizontal control that is made up of\nmultiple segments, where each segment functions as a discrete button.\nEach segment can either show a <itemLabels|label> or an\n<itemIcons|icon>.\n\nOne or more of the segments can be <hilitedItems|highlighted> by\nclicking on them.  By default, only one segment at a time can be\nhighlighted, but it is possible to\n<multipleHilites|allow multiple segments to be highlighted>.\n\nThe segmented control is great for:\n\n- displaying a set of different options in a settings window (for\n  example, it is used to display text alignment in the LiveCode\n  property inspector)\n- switching between different cards in a stack\n- displaying a set of toggleable settings",
			"description":"A widget that shows a row of selectable horizontal segments.\n\nA segmented control is a horizontal control that is made up of\nmultiple segments, where each segment functions as a discrete button.\nEach segment can either show a <itemLabels|label> or an\n<itemIcons|icon>.\n\nOne or more of the segments can be <hilitedItems|highlighted> by\nclicking on them.  By default, only one segment at a time can be\nhighlighted, but it is possible to\n<multipleHilites|allow multiple segments to be highlighted>.\n\nThe segmented control is great for:\n\n- displaying a set of different options in a settings window (for\n  example, it is used to display text alignment in the LiveCode\n  property inspector)\n- switching between different cards in a stack\n- displaying a set of toggleable settings",
			"references":{
				"property":["itemLabels","itemIcons","hilitedItems","multipleHilites"]
			}
		},{
			"id":"builder-447",
			"name":"backcolor",
			"display name":"backColor",
			"library":"builder",
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
			"id":"builder-448",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"builder",
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
			"id":"builder-449",
			"name":"cornerradius",
			"display name":"cornerRadius",
			"library":"builder",
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
			"id":"builder-450",
			"name":"hilitedtextcolor",
			"display name":"hilitedTextColor",
			"library":"builder",
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
		},{
			"id":"builder-451",
			"name":"itemcount",
			"display name":"itemCount",
			"library":"builder",
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
			"id":"builder-452",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
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
			"id":"builder-453",
			"name":"multiplehilites",
			"display name":"multipleHilites",
			"library":"builder",
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
			"id":"builder-454",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"builder",
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
			"id":"builder-455",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"builder",
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
			"id":"builder-456",
			"name":"togglehilites",
			"display name":"toggleHilites",
			"library":"builder",
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
			"id":"builder-457",
			"name":"horizontal",
			"display name":"horizontal",
			"library":"builder",
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
			"id":"builder-458",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"builder",
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
			"id":"builder-459",
			"name":"itemminextents",
			"display name":"itemMinExtents",
			"library":"builder",
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
			"id":"builder-460",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"builder",
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
			"id":"builder-461",
			"name":"hiliteditemnames",
			"display name":"hilitedItemNames",
			"library":"builder",
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
			"id":"builder-462",
			"name":"canvassetcolor",
			"display name":"canvasSetColor",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"canvasSetColor(<pRed>,<pGreen>,<pBlue>,<pAlpha>)"
			],
			"display syntax":[
				"canvasSetColor(<i>pRed</i>,<i>pGreen</i>,<i>pBlue</i>,<i>pAlpha</i>)"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Sets the current color of the canvas to the given RGBA value.",
			"parameters":[{
				"name":"pRed",
				"type":"",
				"refparam":"false",
				"description":"The red component of the color to set."
			},{
				"name":"pGreen",
				"type":"",
				"refparam":"false",
				"description":"The green component of the color to set."
			},{
				"name":"pBlue",
				"type":"",
				"refparam":"false",
				"description":"The blue component of the color to set."
			},{
				"name":"pAlpha",
				"type":"",
				"refparam":"false",
				"description":"The alpha value of the color to set."
			}],
			"description":"Sets the current color of the canvas to the given RGBA value.\n",
			"tags":["canvas library"]
		},{
			"id":"builder-463",
			"name":"canvasapplytoimage",
			"display name":"canvasApplyToImage",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"canvasApplyToImage(<pObjectId>)"
			],
			"display syntax":[
				"canvasApplyToImage(<i>pObjectId</i>)"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Copies the current contents of the canvas to the specified image object.",
			"parameters":[{
				"name":"pObjectId",
				"type":"",
				"refparam":"false",
				"description":"A string which is an object chunk referring to an image."
			}],
			"description":"This handler copies the current contents of the canvas to the specified image object.",
			"tags":["canvas library"]
		},{
			"id":"builder-464",
			"name":"canvascomputeboundingboxofpath",
			"display name":"canvasComputeBoundingBoxOfPath",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"canvasComputeBoundingBoxOfPath(<pPathString>)"
			],
			"display syntax":[
				"canvasComputeBoundingBoxOfPath(<i>pPathString</i>)"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Returns the bounding box of an SVG path.",
			"parameters":[{
				"name":"pPathString",
				"type":"",
				"refparam":"false",
				"description":"The SVG Path string to process"
			}],
			"description":"Parses the SVG path string and computes the tight bounding box.",
			"tags":["canvas library"]
		},{
			"id":"builder-465",
			"name":"canvasdestroy",
			"display name":"canvasDestroy",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"canvasDestroy()"
			],
			"display syntax":[
				"canvasDestroy()"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Destroys the canvas",
			"description":"Destroys the canvas by simply assigning nothing to the canvas variable.",
			"tags":["canvas library"]
		},{
			"id":"builder-466",
			"name":"canvasfillcircle",
			"display name":"canvasFillCircle",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"canvasFillCircle(<pX>,<pY>,<pRadius>)"
			],
			"display syntax":[
				"canvasFillCircle(<i>pX</i>,<i>pY</i>,<i>pRadius</i>)"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Draws a filled circle.",
			"parameters":[{
				"name":"pX",
				"type":"",
				"refparam":"false",
				"description":"The x-coordinate of the centre of the circle."
			},{
				"name":"pY",
				"type":"",
				"refparam":"false",
				"description":"The y-coordinate of the centre of the circle."
			},{
				"name":"pRadius",
				"type":"",
				"refparam":"false",
				"description":"The radius of the circle."
			}],
			"description":"Fills a circle of the given radius at the given position in the canvas.",
			"tags":["canvas library"]
		},{
			"id":"builder-467",
			"name":"canvascreate",
			"display name":"canvasCreate",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"canvasCreate(<pWidth>,<pHeight>)"
			],
			"display syntax":[
				"canvasCreate(<i>pWidth</i>,<i>pHeight</i>)"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Creates a canvas of the given size for the other handlers to use.",
			"parameters":[{
				"name":"pWidth",
				"type":"",
				"refparam":"false",
				"description":"The width of the created canvas."
			},{
				"name":"pHeight",
				"type":"",
				"refparam":"false",
				"description":"The height of the created canvas."
			}],
			"description":"Creates a canvas of the given size for the other handlers to use.",
			"tags":["canvas library"]
		},{
			"id":"builder-468",
			"name":"com.livecode.library.canvas",
			"display name":"com.livecode.library.canvas",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.canvas"
			],
			"associations":["com.livecode.library.canvas"],
			"summary":"Gives access to the Extension Builder canvas syntax from xTalk Script",
			"description":"This library wraps a few simple handlers of the Extension Builder Canvas\nmodule to provide access to the syntax for creating and manipulating\ncanvas objects.\n\nFor example:\n\n    canvasCreate 100, 100\n\tcanvasSetColor 1, 0, 0, 1\n\tcanvasFillCircle 50, 50, 25\n\tcanvasApplyToImage \"image 1\"\n    canvasDestroy\n\nThis creates a canvas of size 100x100, fills a circle of radius 25 at\nthe centre, then copies the contents of the canvas to 'image 1' (which\nmust already exist)."
		},{
			"id":"builder-469",
			"name":"com.livecode.widget.colorswatch",
			"display name":"com.livecode.widget.colorswatch",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.colorswatch"
			],
			"associations":["com.livecode.widget.colorswatch"],
			"summary":"This widget displays a color with optional alpha channel.",
			"description":"This widget displays a color with optional alpha channel."
		},{
			"id":"builder-470",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"builder",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["com.livecode.widget.colorswatch"],
			"summary":"Sent when the color swatch is clicked",
			"description":"Sent when the color swatch is clicked"
		},{
			"id":"builder-471",
			"name":"swatchcolor",
			"display name":"swatchColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the swatchColor of <widget> to <pColor>\nget the swatchColor of <widget>"
			],
			"display syntax":[
				"set the swatchColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.colorswatch"],
			"summary":"Determines the color displayed by the swatch.",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"The color of the swatch in RGB or RGBA format, or empty."
			}],
			"examples":[{
				"script":"set the swatchColor of widget \"Color Swatch\" to empty"
			},{
				"script":"    on copySwatchColorToGraphic pSwatchName, pGraphicName\n        local tColorWithAlpha\n        put the swatchColor of widget pSwatchName into tColorWithAlpha\n\n        local tColor, tBlendLevel\n        put item 1 to 3 of tColorWithAlpha into tColor\n        put (255 - item 4 of tColorWithAlpha) / 2.55 into tBlendLevel\n\n        set the backcolor of graphic pGraphicName to tColor\n        set the blendLevel of graphic pGraphicName to tBlendLevel\n    end copySwatchColorToGraphic"
			}],
			"description":"Use the iconColor property to set the color of the widget icon. The color is\nin the form of a 3 or 4 item string, the 4th optional item being the alpha value,\nall between 0 and 255.\n\n>*Note:* The color returned by the <swatchColor> property, if not empty,\nalways includes an alpha value which is 255 by default.\n"
		},{
			"id":"builder-472",
			"name":"roundtonearest",
			"display name":"RoundToNearest",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"round <Target>"
			],
			"display syntax":[
				"round <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Rounds <Target> to the nearest integer.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric container."
			}],
			"examples":[{
				"script":"variable tNum as Number\nput -5.5 into tNum\nround tNum -- tNum contains -6"
			}],
			"description":"Replaces <Target> with the greatest integer less than or equal to <Target>, or the least integer greater than or equal to <Target> depending on which is closest. If <Target> is exactly halfway between two integers, rounds to the one with greatest absolute value, i.e. away from 0.",
			"tags":["math"]
		},{
			"id":"builder-473",
			"name":"com.livecode.mathfoundation",
			"display name":"com.livecode.mathfoundation",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.mathfoundation"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"This library consists of the foundational mathematical operations included in the standard library of Extension Builder.",
			"description":"This library consists of the foundational mathematical operations included in the standard library of Extension Builder."
		},{
			"id":"builder-474",
			"name":"ceiloperator",
			"display name":"CeilOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ceiling of <Target>"
			],
			"display syntax":[
				"the ceiling of <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Returns the ceiling of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tCeiling as Number\nput -5.5 into tNum\nput the ceiling of tNum into tCeiling -- tCeiling contains -5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The ceiling of <Target>"
			}],
			"description":"The ceiling of <Target> is the least integer greater than or equal to <Target>.",
			"tags":["math"]
		},{
			"id":"builder-475",
			"name":"flooroperator",
			"display name":"FloorOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the floor of <Target>"
			],
			"display syntax":[
				"the floor of <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Returns the floor of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tFloor as Number\nput -5.5 into tNum\nput the floor of tNum into tFloor -- tFloor contains -6"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The floor of <Target>"
			}],
			"description":"The floor of <Target> is the greatest integer less than or equal to <Target>.",
			"tags":["math"]
		},{
			"id":"builder-476",
			"name":"roundedtonearest",
			"display name":"RoundedToNearest",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the rounded of <Target>"
			],
			"display syntax":[
				"the rounded of <i>Target</i>"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"Rounds <Target> to the nearest integer.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tRounded as Number\nput -5.5 into tNum\nput the rounded of tNum into tRounded -- tRounded contains -6"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The rounded value of <Target>"
			}],
			"description":"Return the greatest integer less than or equal to <Target>, or the least integer greater than or equal to <Target> depending on which is closest. If <Target> is exactly halfway between two integers, returns the one with greatest absolute value, i.e. away from 0.",
			"tags":["math"]
		},{
			"id":"builder-477",
			"name":"piconstant",
			"display name":"PiConstant",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"pi"
			],
			"display syntax":[
				"pi"
			],
			"associations":["com.livecode.mathfoundation"],
			"summary":"The constant pi",
			"examples":[{
				"script":"variable tVar as Number\nput the cos of pi into tVar -- tVar contains -1"
			}],
			"description":"The ratio of a circle's circumference to its diameter.",
			"tags":["math"]
		},{
			"id":"builder-478",
			"name":"reversecharsof",
			"display name":"ReverseCharsOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"reverse <Target>"
			],
			"display syntax":[
				"reverse <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Reverse a string",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string"
			}],
			"examples":[{
				"script":"variable tString\nput \"abcdef\" into tString\nreverse tString\nexpect that tString is \"fedcba\""
			}],
			"description":"Reverses the order of characters in the <Target>.",
			"tags":["strings"]
		},{
			"id":"builder-479",
			"name":"deletesingletoncharof",
			"display name":"DeleteSingletonCharOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete char <Index> of <Target>"
			],
			"display syntax":[
				"delete char <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the char at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"thorough\" into tVar\ndelete char 3 of tVar -- tVar contains \"through\""
			}],
			"description":"Replaces the char at the given index with the empty string.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"builder-480",
			"name":"repeatforeachchar",
			"display name":"RepeatForEachChar",
			"library":"builder",
			"type":"iterator",
			"syntax":[
				"char <Iterand>"
			],
			"display syntax":[
				"char <i>Iterand</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Repeat over the chars of a string",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tChar as String\nvariable tSpaceCount as Number\nrepeat for each char tChar in \\\n\t\t\"the quick brown fox jumps over the lazy dog\"\n\tif tChar is \" \" then\n\t\tadd 1 to tSpaceCount\n\tend if\nend repeat\nexpect that tSpaceCount is 8"
			}],
			"description":"Use repeat for each to perform an operation on each char of a string. On each iteration, the <Iterand> will contain the next char of the string being iterated over.",
			"tags":["strings","control structures"]
		},{
			"id":"builder-481",
			"name":"deletelastcharof",
			"display name":"DeleteLastCharOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete the last char of <Target>"
			],
			"display syntax":[
				"delete the last char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the last char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"deadliness\" into tVar\ndelete the last char of tVar -- tVar contains \"deadlines\""
			}],
			"description":"Replaces the last char in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"builder-482",
			"name":"charoffset",
			"display name":"CharOffset",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Finds the first or last occurrence of <Needle> within <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the first offset of \"art\" in \"cartoon\" into tVar -- tVar contains 2"
			},{
				"script":"variable tVar as Number\nvariable tFilePath as String\nput \"/Users/user/Documents/file.txt\" into tFilePath\nput the last offset of \"/\" in tFilePath into tVar\n\nvariable tFileName as String\nput char 1 to tVar of tFilePath into tFileName -- tVar contains \"file.txt\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of chars between the first char of <Target> and the first (respectively last) occurrence of <Needle>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"builder-483",
			"name":"stringbeginswithstring",
			"display name":"StringBeginsWithString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Source> begins with <Prefix>"
			],
			"display syntax":[
				"<i>Source</i> begins with <i>Prefix</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Source> begins with <Prefix>",
			"parameters":[{
				"name":"Prefix",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nvariable tResult as String\nput \"abcde\" into tVar\nif tVar begins with \"abc\" then\n\tput \"success\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> begins with <Prefix>."
			}],
			"description":"<Source> begins with <Prefix> if and only if the chars of <Prefix> occur as an initial subsequence of the chars of <Source>.\n\n>*Note:* Since \"\" is an initial substring of every string, every string begins with the empty string.",
			"tags":["strings"]
		},{
			"id":"builder-484",
			"name":"newlinecharacter",
			"display name":"NewLineCharacter",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"newline"
			],
			"display syntax":[
				"newline"
			],
			"associations":["com.livecode.char"],
			"summary":"The new line character",
			"examples":[{
				"script":"variable tList as List\npush \"line 1\" onto tList\npush \"line 2\" onto tList\npush \"line 3\" onto tList\n\nvariable tLines as String\ncombine tList with newline into tLines -- tLines has 3 lines"
			}],
			"description":"Use the <newline> constant to add new lines to a string variable.",
			"tags":["strings"]
		},{
			"id":"builder-485",
			"name":"deleterangecharof",
			"display name":"DeleteRangeCharOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete char <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete char <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the chars between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"surround\" into tVar\ndelete char 2 to 4 of tVar -- tVar contains \"sound\""
			}],
			"description":"Replaces the chars between the given indices with the empty string.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"builder-486",
			"name":"charisinstring",
			"display name":"CharIsInString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Needle> is in <Source>"
			],
			"display syntax":[
				"<i>Needle</i> is in <i>Source</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Needle> is in <Target>.\nTarget:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a char."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Needle> is among the chars of <Target>, and false otherwise."
			}],
			"description":">*Note:* It is an error if <Needle> evaluates to a string consisting of more than one char.",
			"tags":["strings"]
		},{
			"id":"builder-487",
			"name":"countcharsof",
			"display name":"CountCharsOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the number of chars in <Target>"
			],
			"display syntax":[
				"the number of chars in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Counts the number of chars in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tSource as String\nput \"hello\" into tString\nput the number of chars in tString into tVar\n\nvariable tString as String\nput the empty string into tString\nrepeat tVar times\n\tput \"a\" after tString\nend repeat\n\n// tString contains \"aaaaa\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of chars in <Target>."
			}],
			"description":">*Note:* The number of chars returns the number of codeunits of the target string. It does not perform any grapheme boundary analysis.",
			"tags":["strings"]
		},{
			"id":"builder-488",
			"name":"rangecharof",
			"display name":"RangeCharOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"char <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"char <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the chars between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put tChars into char 5 to 10 of tString // Locates chars 5 to 10 of tString and replace them with tChars"
			},{
				"script":"get char 5 to 10 of tString // Evaluates chars 5 to 10"
			}],
			"description":"Either locates the chars between the given indices for use as the target container of another operation, or evaluates the chars at the given indices as the source of another operation.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"builder-489",
			"name":"com.livecode.char",
			"display name":"com.livecode.char",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.char"
			],
			"associations":["com.livecode.char"],
			"summary":"This library consists of the operations on chars included in the standard library of Extension Builder.",
			"description":"This library consists of the operations on chars included in the standard library of Extension Builder."
		},{
			"id":"builder-490",
			"name":"lastcharof",
			"display name":"LastCharOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the last char of <Target>"
			],
			"display syntax":[
				"the last char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the last char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"char\" into tVar\n\nvariable tLast as String\nput the last char of tVar into tLast -- tLast contains \"r\""
			}],
			"description":"Either locates the last char for use as the target container of another operation, or evaluates the last char as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"builder-491",
			"name":"firstcharof",
			"display name":"FirstCharOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the first char of <Target>"
			],
			"display syntax":[
				"the first char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the first char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"char\" into tVar\n\nvariable tFirst as String\nput the first char of tVar into tFirst -- tFirst contains \"c\""
			}],
			"description":"Either locates the first char for use as the target container of another operation, or evaluates the first char as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"builder-492",
			"name":"charoffsetafter",
			"display name":"CharOffsetAfter",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> after <After> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> after <i>After</i> in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Finds the first or last occurrence of <Needle> after a specified index in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the offset of \"nse\" after 4 in \"nonsense\" into tVar -- tVar contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> after <After> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of chars between the first char of the substring of <Target> beginning at char <After> + 1, and the first (respectively last) occurrence of <Needle> in the substring. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"builder-493",
			"name":"charoffsetbefore",
			"display name":"CharOffsetBefore",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> before <Before> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> before <i>Before</i> in <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Finds the first or last occurrence of <Needle> before a specified index in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tLastDot as Number\nvariable tAddress as String\nvariable tTLD as String\nput \"http://www.openxtalk.org/index.html\" into tAddress\nput the last offset of \".\" in tAddress into tLastDot\nput the offset of \".\" before tLastDot in tAddress into tVar\nput char tVar + 1 to tVar + 3 of tAddress into tTLD -- tTLD contains \"org\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> before <Before> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of chars between the first char of <Target>, and the first (respectively last) occurrence of <Needle> in the substring of <Target> ending at char <Before> - 1. If neither first or last is specified, then the last offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"builder-494",
			"name":"stringendswithstring",
			"display name":"StringEndsWithString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Source> ends with <Suffix>"
			],
			"display syntax":[
				"<i>Source</i> ends with <i>Suffix</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Source> ends with <Suffix>",
			"parameters":[{
				"name":"Suffix",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nvariable tResult as String\nput \"abcde\" into tVar\nif tVar ends with \"cde\" then\n\tput \"success\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> ends with <Suffix>."
			}],
			"description":"<Source> ends with <Suffix> if and only if the chars of <Suffix> occur as a final subsequence of the chars of <Source>.\n\n>*Note:* Since \"\" is a final substring of every string, every string ends with the empty string.",
			"tags":["strings"]
		},{
			"id":"builder-495",
			"name":"codeofchar",
			"display name":"CodeOfChar",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the code of <Target>"
			],
			"display syntax":[
				"the code of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Get the numeric value of a single char",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string containing one character"
			}],
			"description":"Returns the Unicode codepoint index of a single character.",
			"tags":["strings"]
		},{
			"id":"builder-496",
			"name":"singletoncharof",
			"display name":"SingletonCharOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"char <Index> of <Target>"
			],
			"display syntax":[
				"char <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Designates the char at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put the empty string into char 5 of tString // Locates char 5 and removes it from tString"
			},{
				"script":"get char 5 of tString // Evaluates char 5"
			}],
			"description":"Either locates the char at the given index for use as the target container of another operation, or evaluates the char at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"builder-497",
			"name":"containschars",
			"display name":"ContainsChars",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Source> contains <Needle>"
			],
			"display syntax":[
				"<i>Source</i> contains <i>Needle</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Determines whether <Source> contains <Needle>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> contains <Needle>."
			}],
			"description":"<Source> contains <Needle> if and only if the chars of <Needle> occur as a subsequence of the chars of <Source>.\n\n>*Note:* Since \"\" is a substring of every string, every string contains the empty string.",
			"tags":["strings"]
		},{
			"id":"builder-498",
			"name":"deletefirstcharof",
			"display name":"DeleteFirstCharOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete the first char of <Target>"
			],
			"display syntax":[
				"delete the first char of <i>Target</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Deletes the first char in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"seven\" into tVar\ndelete the first char of tVar -- tVar contains \"even\""
			}],
			"description":"Replaces the first char in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"builder-499",
			"name":"charwithcode",
			"display name":"CharWithCode",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the char with code <Index>"
			],
			"display syntax":[
				"the char with code <i>Index</i>"
			],
			"associations":["com.livecode.char"],
			"summary":"Create a 1-char string from a number",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"A Unicode codepoint index"
			}],
			"description":"Returns a string containing one Unicode character created using the\ngiven value.",
			"tags":["strings"]
		},{
			"id":"builder-500",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the borderColor of <widget>",
				"set the borderColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the borderColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The border color",
			"description":"The <borderColor> property controls the color of the header bar's\nborder.",
			"references":{
				"property":["showBorder"]
			}
		},{
			"id":"builder-501",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"builder",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Sent when the header bar is clicked",
			"examples":[{
				"script":"on mouseUp\n   local tActionName\n   put the mouseAction of the target into tActionName\n   if tActionName is not empty then\n      answer merge(\"The [[tActionName]] action was clicked\")\n   else\n      answer \"Try clicking on an action\"\n   end if\nend mouseUp"
			}],
			"description":"The <mouseUp> message is sent when the header bar is clicked.",
			"references":{
				"property":["mouseAction"]
			}
		},{
			"id":"builder-502",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hilitedItemIcons of <widget>",
				"set the hilitedItemIcons of <widget> to <iconNames>"
			],
			"display syntax":[
				"get the hilitedItemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The icons for actions when highlighted.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma delimited list of icon names."
			}],
			"description":"The icons of the header bar actions.  These are the icons displayed by\neach action when highlighted.\n\nEach icon name must be one of the predefined graphics provided by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.\n\nIf you set the <hilitedItemIcons> to a string that has more items than the\ncurrent number of actions, the header bar will automatically create a\nnew header action with a default label and name.\n\nHowever, setting the <hilitedItemIcons> to a string that has _fewer_ items\nthan the current number of actions doesn't remove an action; it just\nresets any further actions to the default icon.",
			"references":{
				"property":["itemArray","itemIcons"]
			}
		},{
			"id":"builder-503",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemNames of <widget>",
				"set the itemNames of <widget> to <names>"
			],
			"display syntax":[
				"get the itemNames of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The identifying names for header actions.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of action names"
			}],
			"description":"The names of the header bar actions.\n\nThe <itemNames> are used to identify the header bar actions, but are\nnot ever displayed by the header bar.  Use the <itemLabels> to control\nthe text displayed for each action.",
			"references":{
				"property":["itemArray","itemLabels"]
			}
		},{
			"id":"builder-504",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemIcons of <widget>",
				"set the itemIcons of <widget> to <iconNames>"
			],
			"display syntax":[
				"get the itemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The icons for actions when not highlighted.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma delimited list of icon names."
			}],
			"description":"The icons of the header bar actions.  These are the icons displayed by\neach action when not currently highlighted.\n\nEach icon name must be one of the predefined graphics provided by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.\n\nIf you set the <itemIcons> to a string that has more items than the\ncurrent number of actions, the header bar will automatically create a\nnew header action with a default label and name.\n\nHowever, setting the <itemIcons> to a string that has _fewer_ items\nthan the current number of actions doesn't remove an action; it just\nresets any further actions to the default icon.",
			"references":{
				"property":["itemArray","hilitedItemIcons"]
			}
		},{
			"id":"builder-505",
			"name":"showlabel",
			"display name":"showLabel",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the showLabel of <widget>",
				"set the showLabel of <widget> to {true | false}"
			],
			"display syntax":[
				"get the showLabel of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether or not to display a title",
			"description":"Controls whether the header bar displays the <label(property)> as a\ntitle (`true`) or whether no title is shown (`false`).",
			"references":{
				"property":["label"]
			}
		},{
			"id":"builder-506",
			"name":"firstitemleft",
			"display name":"firstItemLeft",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the firstItemLeft of <widget>",
				"set the firstItemLeft of <widget> to { true | false }"
			],
			"display syntax":[
				"get the firstItemLeft of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether to display the first action on the left",
			"description":"If the <firstItemLeft> property is `true`, then the first action in the\n<itemArray> is displayed on the left hand side of the header bar.\n\n**Note:** In some <theme|themes>, the first action always has its\nlabel displayed when <firstItemLeft> is `true`.  If you don't want\nthis to happen, you can set the action's <itemLabels|label> to the\nempty string.",
			"references":{
				"property":["itemArray","theme","itemLabels"]
			}
		},{
			"id":"builder-507",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemStyle of <widget>",
				"set the itemStyle of <widget> to <actionStyle>"
			],
			"display syntax":[
				"get the itemStyle of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The display style for header actions.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The way that actions are displayed.\n- \"icons\": Show the icons\n- \"text\": Show the labels"
			}],
			"description":"Determines whether header bar actions are displayed with their icons\nor their labels.",
			"references":{
				"property":["firstItemLeft"]
			}
		},{
			"id":"builder-508",
			"name":"itemarray",
			"display name":"itemArray",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemArray of <widget>",
				"set the itemArray of <widget> to <array>"
			],
			"display syntax":[
				"get the itemArray of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The full header action data.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An array containing all the action data"
			}],
			"description":"The <itemArray> is a number-indexed array that contains all of the\ninformation about the header widget's actions.  It combines the data\naccessible via the <itemIcons>, <hilitedItemIcons>, <itemLabels> and\n<itemNames> properties.\n\nThe structure of the <itemArray> must be:\n\n```\n{\n\tkey (integer): The index of the navigation item\n\tvalue (array): The array containing the data for the item at this index\n\t{\n\t\tkey : \"name\"\n\t\tvalue (string): The name of this item\n\t\tkey : \"label\"\n\t\tvalue (string): The label of this item\n\t\tkey : \"icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is not highlighted\n\t\tkey : \"hilited_icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is highlighted\n\t}\n}\n```",
			"references":{
				"property":["itemIcons","hilitedItemIcons","itemLabels","itemNames"]
			}
		},{
			"id":"builder-509",
			"name":"theme",
			"display name":"theme",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the theme of <widget>",
				"set the theme of <widget> to <widgetTheme>"
			],
			"display syntax":[
				"get the theme of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The theme to use when drawing the header bar.",
			"value":[{
				"name":"value",
				"type":"string",
				"description":"The name of a theme supported by the header bar."
			}],
			"description":"The <theme> controls the general appearance of the header bar.  The\nheader widget currently supports \"native\", \"iOS\" and \"Android\".  If\nthe <theme> is set to \"native\", then the header widget will use either\nthe \"iOS\" or \"Android\" theme depending on the platform that the engine\nis running on.\n\n>*Note*: The value of the <theme> property is not saved by the header\nbar. Set the <theme> property to preview the way the header bar will\nappear when used on an Android or iOS device.\n\n>*Warning*: The meaning and behaviour of the <theme> property is\nexperimental and is subject to change in a future release."
		},{
			"id":"builder-510",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the foreColor of <widget>",
				"set the foreColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the foreColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The text color",
			"description":"The <foreColor> property controls the color of the header bar's\n<label|title text>.",
			"references":{
				"property":["label"]
			}
		},{
			"id":"builder-511",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to {true | false}"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether the header bar has a dividing line at the bottom",
			"description":"If the <showBorder> property is `true`, a dividing line at the bottom\nof the header bar is drawn using the <borderColor>.",
			"references":{
				"property":["borderColor"]
			}
		},{
			"id":"builder-512",
			"name":"mouseaction",
			"display name":"mouseAction",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the mouseAction of <widget>"
			],
			"display syntax":[
				"get the mouseAction of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The header action that the mouse pointer is currently over.",
			"examples":[{
				"script":"-- Go to the previous card when the header's \"back\" action is\n-- clicked.\non mouseUp\n   if the mouseAction of the target is \"back\" then\n      go previous\n   end if\nend mouseUp"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The name of the header action that the mouse pointer is currently\nover."
			}],
			"description":"The <mouseAction> property contains the <itemNames|name> of the action\nthat was just clicked, or empty when no action was clicked.\n\nYou can read the <mouseAction> property to detect which action was\nactivated when handling the <mouseUp> message.",
			"references":{
				"property":["itemNames"],
				"message":["mouseUp"]
			}
		},{
			"id":"builder-513",
			"name":"backcolor",
			"display name":"backColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the backColor of <widget>",
				"set the backColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the backColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The background color",
			"description":"The <backColor> property controls the color of the header bar's\nbackground.",
			"references":{
				"property":["opaque"]
			}
		},{
			"id":"builder-514",
			"name":"opaque",
			"display name":"opaque",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the opaque of <widget>",
				"set the opaque of <widget> to {true | false}"
			],
			"display syntax":[
				"get the opaque of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"Whether the background of the header bar is filled",
			"description":"If the <opaque> property is `true`, the background of the header bar\nis filled with the <backColor>.",
			"references":{
				"property":["backColor"]
			}
		},{
			"id":"builder-515",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemLabels of <widget>",
				"set the itemLabels of <widget> to <labels>"
			],
			"display syntax":[
				"get the itemLabels of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The labels for header actions.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of action labels."
			}],
			"description":"The labels of the header bar actions.\n\nThe <itemLabels> are displayed by the header bar widget when the\n<itemStyle> is set to show text for each action.",
			"references":{
				"property":["itemArray","itemStyle"]
			}
		},{
			"id":"builder-516",
			"name":"com.livecode.widget.headerbar",
			"display name":"com.livecode.widget.headerbar",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.headerbar"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"A header bar intended for use by mobile apps.\n\nThe header bar has a <label(property)>, which is displayed as its\ntitle, along with a set of actions.  Each action has a\n<itemNames|name>, which is used to identify it internally, and an\n<itemIcons|icon> and <itemLabels|label> which are displayed (depending\non the chosen <itemStyle>).  One of the actions can optionally be\ndisplayed to the left of the header bar's title, when the\n<firstItemLeft> property is enabled.\n\nThe header bar widget provides two theme modes, one for Android apps\nand one for iOS apps.  By default, it automatically selects the\nappropriate one depending on which platform it is running on.  To\ntemporarily select a non-default different appearance, set the\n<theme(property)> property.\n\nThe header bar widget works well when paired with the navigation bar\nwidget.",
			"description":"A header bar intended for use by mobile apps.\n\nThe header bar has a <label(property)>, which is displayed as its\ntitle, along with a set of actions.  Each action has a\n<itemNames|name>, which is used to identify it internally, and an\n<itemIcons|icon> and <itemLabels|label> which are displayed (depending\non the chosen <itemStyle>).  One of the actions can optionally be\ndisplayed to the left of the header bar's title, when the\n<firstItemLeft> property is enabled.\n\nThe header bar widget provides two theme modes, one for Android apps\nand one for iOS apps.  By default, it automatically selects the\nappropriate one depending on which platform it is running on.  To\ntemporarily select a non-default different appearance, set the\n<theme(property)> property.\n\nThe header bar widget works well when paired with the navigation bar\nwidget.",
			"references":{
				"property":["firstItemLeft","itemIcons","itemLabels","itemNames","itemStyle","label","theme"]
			}
		},{
			"id":"builder-517",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hiliteColor of <widget>",
				"set the hiliteColor of <widget> to <pColor>"
			],
			"display syntax":[
				"get the hiliteColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The color of the actions' icons and text",
			"description":"The <hiliteColor> property controls the color of the text and icons of\nthe header bar's actions.",
			"references":{
				"property":["itemIcons","hilitedItemIcons","itemLabels","itemStyle"]
			}
		},{
			"id":"builder-518",
			"name":"label",
			"display name":"label",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the label of <widget>",
				"set the label of <widget> to <title>"
			],
			"display syntax":[
				"get the label of <i>widget</i>"
			],
			"associations":["com.livecode.widget.headerbar"],
			"summary":"The title displayed by the header bar.",
			"value":[{
				"name":"value",
				"type":"string",
				"description":"The text of the title of the header bar."
			}],
			"description":"The text displayed by the header bar as its title.",
			"references":{
				"property":["showLabel"]
			}
		},{
			"id":"builder-519",
			"name":"com.livecode.library.scriptitems",
			"display name":"com.livecode.library.scriptitems",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.library.scriptitems"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Utility functions for xTalk Script-compatible item lists.\n\nMany Extension Builder widget and library extensions expose APIs to\nxTalk script that use item lists.  This library provides a set of\nfunctions for converting `List` values to-and-from comma-delimited\nitem strings.",
			"description":"Utility functions for xTalk Script-compatible item lists.\n\nMany Extension Builder widget and library extensions expose APIs to\nxTalk script that use item lists.  This library provides a set of\nfunctions for converting `List` values to-and-from comma-delimited\nitem strings."
		},{
			"id":"builder-520",
			"name":"parseitemsasnumberlist",
			"display name":"parseItemsAsNumberList",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"parseItemsAsNumberList(<pStringValue>,<pListLength>,<pDefaultValue>)"
			],
			"display syntax":[
				"parseItemsAsNumberList(<i>pStringValue</i>,<i>pListLength</i>,<i>pDefaultValue</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Parse a comma-delimited \"item\" string as a list of numbers",
			"parameters":[{
				"name":"pStringValue",
				"type":"",
				"refparam":"false",
				"description":"A string containing comma-delimited \"items\""
			},{
				"name":"pListLength",
				"type":"",
				"refparam":"false",
				"description":"The number of elements the parsed list should contain"
			},{
				"name":"pDefaultValue",
				"type":"",
				"refparam":"false",
				"description":"Value to be used for extra elements"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The parsed items as a list of strings"
			}],
			"description":"Helper function for converting a xTalk Script \"item\" list into a\nlist of numbers, obeying the xTalk script rules for items.\n\nIf <pListLength> is provided, then the returned list will always\ncontain that number of elements: extra elements will be discarded, and\nmissing elements will be set to <pDefaultValue>.",
			"references":{
				"handler":["parseItemsAsStringList","formatNumberListAsItems"]
			}
		},{
			"id":"builder-521",
			"name":"parseitemsasstringlist",
			"display name":"parseItemsAsStringList",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"parseItemsAsStringList(<pStringValue>,<pListLength>,<pDefaultValue>)"
			],
			"display syntax":[
				"parseItemsAsStringList(<i>pStringValue</i>,<i>pListLength</i>,<i>pDefaultValue</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Parse a comma-delimited \"item\" string as a list of strings",
			"parameters":[{
				"name":"pStringValue",
				"type":"",
				"refparam":"false",
				"description":"A string containing comma-delimited \"items\""
			},{
				"name":"pListLength",
				"type":"",
				"refparam":"false",
				"description":"The number of elements the parsed list should contain"
			},{
				"name":"pDefaultValue",
				"type":"",
				"refparam":"false",
				"description":"Value to be used for extra elements"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The parsed items as a list of strings"
			}],
			"description":"Helper function for converting a xTalk script \"item\" list into list\nof strings, obeying the xTalk script rules for items.\n\nIf <pListLength> is provided, then the returned list will always\ncontain that number of elements: extra elements will be discarded, and\nmissing elements will be set to <pDefaultValue>.",
			"references":{
				"handler":["parseItemsAsNumberList","formatStringListAsItems"]
			}
		},{
			"id":"builder-522",
			"name":"formatstringlistasitems",
			"display name":"formatStringListAsItems",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"formatStringListAsItems(<pList>)"
			],
			"display syntax":[
				"formatStringListAsItems(<i>pList</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Format a list of strings as a comma-delimited \"item\" string",
			"parameters":[{
				"name":"pList",
				"type":"",
				"refparam":"false",
				"description":"A list of strings"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A comma-delimited xTalk script-compatible \"item\" string"
			}],
			"description":"Helper function for converting a list of strings into a LiveCode\nScript \"item\" list, obeying the xTalk script rules for items.",
			"references":{
				"handler":["parseItemsAsStringList","formatNumberListAsItems"]
			}
		},{
			"id":"builder-523",
			"name":"formatnumberlistasitems",
			"display name":"formatNumberListAsItems",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"formatNumberListAsItems(<pList>)"
			],
			"display syntax":[
				"formatNumberListAsItems(<i>pList</i>)"
			],
			"associations":["com.livecode.library.scriptitems"],
			"summary":"Format a list of numbers as a comma-delimited \"item\" string",
			"parameters":[{
				"name":"pList",
				"type":"",
				"refparam":"false",
				"description":"A list of numbers"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A comma-delimited xTalk script-compatible \"item\" string"
			}],
			"description":"Helper function for converting a list of numbers into a LiveCode\nScript \"item\" list, obeying the xTalk script rules for items.",
			"references":{
				"handler":["formatStringListAsItems","parseItemsAsNumberList"]
			}
		},{
			"id":"builder-524",
			"name":"com.livecode.date",
			"display name":"com.livecode.date",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.date"
			],
			"associations":["com.livecode.date"],
			"summary":"This library provides low-level system functionality for modular\nLiveCode programs.",
			"description":"This library provides low-level system functionality for modular\nLiveCode programs."
		},{
			"id":"builder-525",
			"name":"universaltime",
			"display name":"UniversalTime",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the universal time"
			],
			"display syntax":[
				"the universal time"
			],
			"associations":["com.livecode.date"],
			"summary":"The seconds",
			"examples":[{
				"script":"variable tTime as real\nput the universal time into tTime"
			}],
			"description":"Returns the current universal time relative to the start of the UNIX epoch - 1st\nJanuary 1970 in seconds.",
			"tags":["date and time"]
		},{
			"id":"builder-526",
			"name":"localdate",
			"display name":"LocalDate",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the local date"
			],
			"display syntax":[
				"the local date"
			],
			"associations":["com.livecode.date"],
			"summary":"The local Gregorian date",
			"examples":[{
				"script":"variable tDateTime as List\nput the local date into tDateTime\n\nvariable tDayOfMonth as Number\nput tDateTime[3] into tDayOfMonth"
			}],
			"description":"Returns the local date as a list of seven numeric components.  The\nelements of the list are:\n\n* The year\n* The month (1-12)\n* The day of the month (1-31, depending on the month)\n* The hour (0-23)\n* The minute (0-59)\n* The second (0-59)\n* The offset from UTC in seconds",
			"references":{
				"expression":["UniversalDate"]
			},
			"tags":["date and time"]
		},{
			"id":"builder-527",
			"name":"universaldate",
			"display name":"UniversalDate",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the universal date"
			],
			"display syntax":[
				"the universal date"
			],
			"associations":["com.livecode.date"],
			"summary":"The UTC Gregorian date",
			"examples":[{
				"script":"variable tDateTime as List\nput the universal date into tDateTime\n\nvariable tMinuteOfHour as Number\nput tDateTime[5] into tMinuteOfHour"
			}],
			"description":"Returns the universal date (i.e. the current date in the UTC+00:00\ntime zone) as a list of seven numeric components.  The elements of the\nlist are the same as for <LocalDate>.",
			"references":{
				"expression":["LocalDate"]
			},
			"tags":["date and time"]
		},{
			"id":"builder-528",
			"name":"editable",
			"display name":"editable",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the editable of <widget> to {true | false}\nget the editable of <widget>"
			],
			"display syntax":[
				"set the editable of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the field can be edited or not",
			"OS":["android"],
			"description":"Use the <editable> property to allow or disallow the user to enter text in the\nfield."
		},{
			"id":"builder-529",
			"name":"exitfield",
			"display name":"exitField",
			"library":"builder",
			"type":"message",
			"syntax":[
				"exitField"
			],
			"display syntax":[
				"exitField"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Sent to the field with the selection when the selection is being removed from\nthe field, and its contents have not changed.",
			"OS":["android"],
			"examples":[{
				"script":"on exitField -- remove visual signs that the field is being edited\n   set the enabled of the target to false\nend exitField"
			}],
			"description":"Handle the <exitField> message if you want to do something when the user leaves\na field that hasn't been changed."
		},{
			"id":"builder-530",
			"name":"selectedrange",
			"display name":"selectedRange",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the selectedRange of <widget> to <pRange>\nget the selectedRange of <widget>"
			],
			"display syntax":[
				"set the selectedRange of <i>widget</i> to <i>pRange</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The range of text of the widget that is selected.",
			"OS":["android"],
			"examples":[{
				"script":"-- Select the first 20 chars of the field widget\nset the selectedRange of widget \"Android Text\" to \"1,20\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimiter pair of the (1-based) start index and length."
			}],
			"description":"Use the <selectedRange> property to determine the start index and the length of\nthe text that is to appear as selected."
		},{
			"id":"builder-531",
			"name":"autocapitalizationtype",
			"display name":"autoCapitalizationType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the autoCapitalizationType of <widget> to <pType>\nget the autoCapitalizationType of <widget>"
			],
			"display syntax":[
				"set the autoCapitalizationType of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The auto-capitalization behavior of the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the autoCapitalizationType of widget \"Android Field\" to \"sentences\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"none\": the shift-key is never automatically enabled\n- \"words\": the shift-key is enabled at the start of words\n- \"sentences\": the shift-key is enabled at the start of sentences\n- \"all characters\": the shift-key is enabled at the start of each character"
			}],
			"description":"Use the <autoCapitalizationType> property to determine when the shift-key is\nautomatically enabled when typing."
		},{
			"id":"builder-532",
			"name":"enabled",
			"display name":"enabled",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the field is active and responds to user action",
			"OS":["android"],
			"description":"Use the <enabled> property to enable or disable the native field. When disabled,\nthe field has a greyed out appearance."
		},{
			"id":"builder-533",
			"name":"datadetectortypes",
			"display name":"dataDetectorTypes",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the dataDetectorTypes of <widget> to <pType>\nget the dataDetectorTypes of <widget>"
			],
			"display syntax":[
				"set the dataDetectorTypes of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"What types of data should be clickable in the field.",
			"OS":["android"],
			"examples":[{
				"script":"set the dataDetectorTypes of widget \"Android Field\" to \"email,link\""
			},{
				"script":"set the dataDetectorTypes of widget \"Android Field\" to empty"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"phone number\": Phone numbers should be clickable\n- \"link\": Links should be clickable\n- \"email\": Email addresses should be clickable\n- \"address\": Addresses should be clickable"
			}],
			"description":"Use the <dataDetectorTypes> property to determine what kind of data should be\ndetected and automatically converted to clikckable URLs.\n"
		},{
			"id":"builder-534",
			"name":"closefield",
			"display name":"closeField",
			"library":"builder",
			"type":"message",
			"syntax":[
				"closeField"
			],
			"display syntax":[
				"closeField"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Sent to a field when the focus is being removed from that field and the field's\ncontent has changed.",
			"OS":["android"],
			"examples":[{
				"script":"on closeField -- make sure the user has entered a valid date\n  local tText\n  put the text of me into tText\n  if tText is not a date then\n    beep\n    answer \"Please enter a date.\"\n    set the selectedRange of the target to \"1,\" & \\\n       the number of chars in tText\n  end if\nend closeField"
			}],
			"description":"Handle the <closeField> message if you want to make sure a field's content is\ncorrect after it has been changed."
		},{
			"id":"builder-535",
			"name":"openfield",
			"display name":"openField",
			"library":"builder",
			"type":"message",
			"syntax":[
				"openField"
			],
			"display syntax":[
				"openField"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Sent to an unlocked field when you click or select text in that field.",
			"OS":["android"],
			"examples":[{
				"script":"on openField -- when clicking in the field, select all its text\n  local tText\n  put the text of the target into tText\n  set the selectedRange of the target to \"1,\" & \\\n     the number of chars in tText\nend openField"
			}],
			"description":"Handle the <openField> message if you want to do something when the user enters\na field widget. The message is not sent if the field is locked."
		},{
			"id":"builder-536",
			"name":"scrollingenabled",
			"display name":"scrollingEnabled",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the scrollingEnabled of <widget> to {true | false}\nget the scrollingEnabled of <widget>"
			],
			"display syntax":[
				"set the scrollingEnabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the field can be scrolled or not.",
			"OS":["android"],
			"description":"Use the <scrollingEnabled> property to allow or disallow the user to scroll the\nfield."
		},{
			"id":"builder-537",
			"name":"focused",
			"display name":"focused",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the focused of <widget> to {true | false}\nget the focused of <widget>"
			],
			"display syntax":[
				"set the focused of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the field is focused or not.",
			"OS":["android"],
			"description":"Use the <focused> property to request focus for the native field, or remove it."
		},{
			"id":"builder-538",
			"name":"passreturnkey",
			"display name":"passReturnKey",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the passReturnKey of <widget> to {true|false}\nget the passReturnKey of <widget>"
			],
			"display syntax":[
				"set the passReturnKey of <i>widget</i> to {true|false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the return key adds a new line to the field",
			"OS":["android"],
			"examples":[{
				"script":"command createField\n   create widget as \"com.livecode.widget.native.android.field\"\n   set the passReturnKey of it to false\nend createField\n\n-- In the widget script\non returnKey\n   answer \"You entered\" && the text of the target\nend returnKey"
			}],
			"description":"Use the <passReturnKey> property to control whether the\nnative keyboard return key adds a new line to the field or\nnot."
		},{
			"id":"builder-539",
			"name":"com.livecode.widget.native.android.field",
			"display name":"com.livecode.widget.native.android.field",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.android.field"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"This widget is a native field on Android.",
			"OS":["android"],
			"description":"This widget is a native field on Android."
		},{
			"id":"builder-540",
			"name":"multiline",
			"display name":"multiline",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the multiline of <widget> to {true | false}\nget the multiline of <widget>"
			],
			"display syntax":[
				"set the multiline of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Whether the field can contain multiple lines or not.",
			"OS":["android"],
			"description":"Use the <multiline> property to allow or disallow the user to enter multiple\nlines of text in the field."
		},{
			"id":"builder-541",
			"name":"text",
			"display name":"text",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the text of <widget> to <pText>\nget the text of <widget>"
			],
			"display syntax":[
				"set the text of <i>widget</i> to <i>pText</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The text contained in the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the text of widget \"Android Field\" to \"Some text\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A string."
			}],
			"description":"Use the <text> property to change the text of the field widget."
		},{
			"id":"builder-542",
			"name":"contenttype",
			"display name":"contentType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the contentType of <widget> to <pType>\nget the contentType of <widget>"
			],
			"display syntax":[
				"set the contentType of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"What kind of content the field contains.",
			"OS":["android"],
			"examples":[{
				"script":"set the contentType of widget \"Android Field\" to \"password\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"plain\": plain, unstyled text\n- \"password\": plain text displayed in the standard password style"
			}],
			"description":"Use the <contentType> property to determine what kind of content the control\ncontains."
		},{
			"id":"builder-543",
			"name":"verticaltextalign",
			"display name":"verticalTextAlign",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the verticalTextAlign of <widget> to <pAlign>\nget the verticalTextAlign of <widget>"
			],
			"display syntax":[
				"set the verticalTextAlign of <i>widget</i> to <i>pAlign</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The vertical text alignment of the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the verticalTextAlign of widget \"Android Field\" to \"middle\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"top\": Top-aligned text\n- \"middle\": Middle-aligned text\n- \"bottom\": Bottom-aligned text"
			}],
			"description":"Use the <textAlign> property to change the vertical text alignment of the\nfield widget."
		},{
			"id":"builder-544",
			"name":"returnkeytype",
			"display name":"returnKeyType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the returnKeyType of <widget> to <pType>\nget the returnKeyType of <widget>"
			],
			"display syntax":[
				"set the returnKeyType of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The type of action assigned to the return key on the keyboard\nassociated with this field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the returnKeyType of widget \"Android Field\" to \"previous\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"default\": the normal return key action\n- \"none\": no return key action\n- \"go\": take the user to the target of the text they typed\n- \"next\": move to the next field that will accept text\n- \"previous\": move to the previous field that will accept text\n- \"search\": take the user to the results of searching for the text they have typed\n- \"send\": deliver the text to its target\n- \"done\": close IME"
			}],
			"description":"Use the <returnKeyType> property to determine what kind of action should be\nperformed when the return key on the keyboard associated with this field widget\nis pressed."
		},{
			"id":"builder-545",
			"name":"fieldtextcolor",
			"display name":"fieldTextColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the fieldTextColor of <widget> to <pColor>\nget the fieldTextColor of <widget>"
			],
			"display syntax":[
				"set the fieldTextColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The color of the text of the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the fieldTextColor of widget \"Android Field\" to \"255,0,0,128\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma delimited string representing a color in RGB / RGBA format"
			}],
			"description":"Use the <fieldTextColor> property to change the color of the text of the field\nwidget."
		},{
			"id":"builder-546",
			"name":"textchanged",
			"display name":"textChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"textChanged"
			],
			"display syntax":[
				"textChanged"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"Sent when the native field widget text is changed.",
			"OS":["android"],
			"examples":[{
				"script":"on textChanged\n   if the text of me is not a number then\n      beep\n   end if\nend textChanged"
			}],
			"description":"Handle the <textChanged> message if you want to do something when the text of\nthe field is changed through typing."
		},{
			"id":"builder-547",
			"name":"autocorrectiontype",
			"display name":"autoCorrectionType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the autoCorrectionType of <widget> to <pType>\nget the autoCorrectionType of <widget>"
			],
			"display syntax":[
				"set the autoCorrectionType of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The auto-correction behavior of the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the autoCorrectionType of widget \"Android Field\" to \"no\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"default\": use the appropriate auto-correct behavior for the current script system\n- \"no\": disable auto-correct behavior\n- \"yes\": enable auto-correct behavior"
			}],
			"description":"Use the <autoCorrectionType> property to determine whether auto-correct behavior\nshould be enabled."
		},{
			"id":"builder-548",
			"name":"textalign",
			"display name":"textAlign",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the textAlign of <widget> to <pAlign>\nget the textAlign of <widget>"
			],
			"display syntax":[
				"set the textAlign of <i>widget</i> to <i>pAlign</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The horizontal text alignment of the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the textAlign of widget \"Android Field\" to \"center\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"left\": Left-aligned text\n- \"center\": Center-aligned text\n- \"right\": Right-aligned text"
			}],
			"description":"Use the <textAlign> property to change the horizontal text alignment of the\nfield widget."
		},{
			"id":"builder-549",
			"name":"keyboardtype",
			"display name":"keyboardType",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the keyboardType of <widget> to <pType>\nget the keyboardType of <widget>"
			],
			"display syntax":[
				"set the keyboardType of <i>widget</i> to <i>pType</i>"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"The type of keyboard associated to the field widget.",
			"OS":["android"],
			"examples":[{
				"script":"set the keyboardType of widget \"Android Field\" to \"URL\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"- \"default\": the default keyboard\n- \"alphabet\": the alphabetic keyboard\n- \"numeric\": the numeric keyboard with punctuation\n- \"URL\": the URL entry keyboard\n- \"number\": the number pad keyboard\n- \"phone\": the phone number pad keyboard\n- \"contact\": the phone contact pad keyboard\n- \"email\": the email keyboard\n- \"decimal\": the decimal numeric pad keyboard"
			}],
			"description":"Use the <keyboardType> property to determine what kind of keyboard should be\ndisplayed when this field widget is focused."
		},{
			"id":"builder-550",
			"name":"absoperator",
			"display name":"AbsOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the abs of <Operand>"
			],
			"display syntax":[
				"the abs of <i>Operand</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Absolute value operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the trunc of 3.9 into tVar -- tVar contains 3"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The absolute value of <Operand>."
			}],
			"description":"The absolute value of <Operand> is the value of <Operand> if it is greater than or equal to 0, or the negation of the value of <Operand> if it is less than zero.",
			"tags":["math"]
		},{
			"id":"builder-551",
			"name":"baseelogoperator",
			"display name":"BaseELogOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"ln(<Operand>)"
			],
			"display syntax":[
				"ln(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Natural log operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput ln(exp(3)) into tVar -- tVar contains approximately 3"
			}],
			"description":"Natural log operator.",
			"tags":["math"]
		},{
			"id":"builder-552",
			"name":"maxlistoperator",
			"display name":"MaxListOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the maximum value of <ValueList>"
			],
			"display syntax":[
				"the maximum value of <i>ValueList</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Max operator.\nList:An expression that evaluates to a list.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The maximum value attained by the elements of <List>."
			}],
			"description":">*Note:* It is an error if any element of <List> is non-numeric.",
			"tags":["math"]
		},{
			"id":"builder-553",
			"name":"baseconvert",
			"display name":"BaseConvert",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Operand> converted from base <Source> to base <Target>"
			],
			"display syntax":[
				"<i>Operand</i> converted from base <i>Source</i> to base <i>Target</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Converts the base of <Operand>",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string representation <Operand> interpreted as a number in base <From>, converted to base <To>."
			}],
			"description":"Interprets a string in the desired source base and converts it to the desired target base, and returns a string representation.\n\n>*Note:* The source and destination bases must be integers between 2 and 32.",
			"tags":["math"]
		},{
			"id":"builder-554",
			"name":"minlistoperator",
			"display name":"MinListOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the minimum value of <ValueList>"
			],
			"display syntax":[
				"the minimum value of <i>ValueList</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Min operator.\nList:An expression that evaluates to a list.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The minimal value attained by the elements of <List>."
			}],
			"description":">*Note:* It is an error if any element of <List> is non-numeric.",
			"tags":["math"]
		},{
			"id":"builder-555",
			"name":"expoperator",
			"display name":"ExpOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"exp(<Operand>)"
			],
			"display syntax":[
				"exp(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Exponentiation operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the exp(ln(100)) into tVar -- tVar contains approximately 100"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"e to the power of <Operand>"
			}],
			"description":"Exponentiation operator.",
			"tags":["math"]
		},{
			"id":"builder-556",
			"name":"baseconvertto",
			"display name":"BaseConvertTo",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Operand> converted to base <Target>"
			],
			"display syntax":[
				"<i>Operand</i> converted to base <i>Target</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Converts the base of <Operand>",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string representation of <Operand> in base <Target>."
			}],
			"description":"Converts a decimal into the desired base, and returns a string representation.\n\n>*Note:* The destination base must be an integer between 2 and 32.",
			"tags":["math"]
		},{
			"id":"builder-557",
			"name":"base10logoperator",
			"display name":"Base10LogOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"log(<Operand>)"
			],
			"display syntax":[
				"log(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Base 10 log operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the log of 10000 into tVar -- tVar contains 5"
			}],
			"description":"Base 10 log operator.",
			"tags":["math"]
		},{
			"id":"builder-558",
			"name":"squarerootoperator",
			"display name":"SquareRootOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"sqrt(<Operand>)"
			],
			"display syntax":[
				"sqrt(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Square root operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput sqrt(9) into tVar -- tVar contains 3"
			},{
				"script":"variable tVar as Number\nput the square root of 4 into tVar -- tVar contains 2"
			}],
			"description":"The square root of a number is the number which must be\nsquared to obtain number : sqrt(number)^2 is equal to number.",
			"tags":["math"]
		},{
			"id":"builder-559",
			"name":"binaryarctanoperator",
			"display name":"BinaryArctanOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"atan2(<yCoord>,<xCoord>)"
			],
			"display syntax":[
				"atan2(<i>yCoord</i>,<i>xCoord</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Binary arctan operator.",
			"parameters":[{
				"name":"yCoord",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"xCoord",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"    variable tVar as Number\n    put atan2(-1,-1) into tVar --tVar contains ‚àí3œÄ/4."
			},{
				"script":"    variable tVar as Number\n    put the binary arctangent of -1 and -1 into tVar --tVar contains ‚àí3œÄ/4."
			}],
			"description":"The binary arctan operator returns the angle in radians between the x-axis and the line from the origin to the point (xCoord, yCoord).\nThe angle returned has absolute value less than pi: ‚àíœÄ < arctan2(y, x) ‚â§ œÄ.",
			"tags":["math"]
		},{
			"id":"builder-560",
			"name":"arcsinoperator",
			"display name":"ArcsinOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"asin(<Operand>)"
			],
			"display syntax":[
				"asin(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Arcsin operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the asin(-1) into tVar -- tVar contains -pi/2"
			},{
				"script":"variable tVar as Number\nput the arcsine of 1 into tVar -- tVar contains pi/2"
			}],
			"description":"The inverse of the sin operator.",
			"tags":["math"]
		},{
			"id":"builder-561",
			"name":"truncoperator",
			"display name":"TruncOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the trunc of <Operand>"
			],
			"display syntax":[
				"the trunc of <i>Operand</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Truncation operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the trunc of 3.9 into tVar -- tVar contains 3"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> truncated."
			}],
			"description":"The trunc of <Operand> is the integer part of the decimal representation of <Operand>.",
			"tags":["math"]
		},{
			"id":"builder-562",
			"name":"com.livecode.math",
			"display name":"com.livecode.math",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.math"
			],
			"associations":["com.livecode.math"],
			"summary":"This library consists of the mathematical operations included in the standard library of Extension Builder.",
			"description":"This library consists of the mathematical operations included in the standard library of Extension Builder."
		},{
			"id":"builder-563",
			"name":"sinoperator",
			"display name":"SinOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"sin(<Operand>)"
			],
			"display syntax":[
				"sin(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Sin operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput sin(pi / 2) into tVar -- tVar contains 1"
			},{
				"script":"variable tVar as Number\nput the sine of pi into tVar -- tVar contains 0"
			}],
			"description":"Sin operator.",
			"tags":["math"]
		},{
			"id":"builder-564",
			"name":"arctanoperator",
			"display name":"ArctanOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"atan(<Operand>)"
			],
			"display syntax":[
				"atan(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Arctan operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput atan(-1) into tVar -- tVar contains -pi / 4"
			},{
				"script":"variable tVar as Number\nput the arctangent of 1 into tVar -- tVar contains pi / 4"
			}],
			"description":"The inverse of the tan operator.",
			"tags":["math"]
		},{
			"id":"builder-565",
			"name":"cosoperator",
			"display name":"CosOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"cos(<Operand>)"
			],
			"display syntax":[
				"cos(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Cos operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput cos(pi) into tVar -- tVar contains -1"
			}],
			"description":"Cos operator.",
			"tags":["math"]
		},{
			"id":"builder-566",
			"name":"maxoperator",
			"display name":"MaxOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the maximum of <Left> and <Right>"
			],
			"display syntax":[
				"the maximum of <i>Left</i> and <i>Right</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Max operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The value of <Left>, if it is greater than the value of <Right>, and the value of <Right> otherwise."
			}],
			"description":"Max operator.",
			"tags":["math"]
		},{
			"id":"builder-567",
			"name":"arccosoperator",
			"display name":"ArccosOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"acos(<Operand>)"
			],
			"display syntax":[
				"acos(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Arccos operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput acos(0) into tVar -- tVar contains pi/2"
			},{
				"script":"variable tVar as Number\nput the arccosine of -1 into tVar -- tVar contains pi"
			}],
			"description":"The inverse of the cos operator.",
			"tags":["math"]
		},{
			"id":"builder-568",
			"name":"minoperator",
			"display name":"MinOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the minimum of <Left> and <Right>"
			],
			"display syntax":[
				"the minimum of <i>Left</i> and <i>Right</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Min operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The value of <Left>, if it is less than the value of <Right>, and the value of <Right> otherwise."
			}],
			"description":"Min operator.",
			"tags":["math"]
		},{
			"id":"builder-569",
			"name":"randomnumber",
			"display name":"RandomNumber",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"any number"
			],
			"display syntax":[
				"any number"
			],
			"associations":["com.livecode.math"],
			"summary":"Generates a pseudo-random number.",
			"examples":[{
				"script":"variable tVar as Number\nput any number into tVar -- 0 <= tVar <= 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A real between 0.0 and 1.0."
			}],
			"description":"Generates a pseudo-random number.",
			"tags":["math"]
		},{
			"id":"builder-570",
			"name":"baseconvertfrom",
			"display name":"BaseConvertFrom",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Operand> converted from base <Source>"
			],
			"display syntax":[
				"<i>Operand</i> converted from base <i>Source</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Converts the base of <Operand>",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to an integer."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> converted to base 10."
			}],
			"description":"Interprets a string in the desired base and converts it to decimal.\n\n>*Note:* The source base must be an integer between 2 and 32.",
			"tags":["math"]
		},{
			"id":"builder-571",
			"name":"powoperator",
			"display name":"PowOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> ^ <Right>"
			],
			"display syntax":[
				"<i>Left</i> ^ <i>Right</i>"
			],
			"associations":["com.livecode.math"],
			"summary":"Binary exponentiation operation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5^2 into tVar -- tVar contains 25"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of raising <Left> to the power <Right>."
			}],
			"description":"Binary exponentiation operation.",
			"tags":["math"]
		},{
			"id":"builder-572",
			"name":"tanoperator",
			"display name":"TanOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"tan(<Operand>)"
			],
			"display syntax":[
				"tan(<i>Operand</i>)"
			],
			"associations":["com.livecode.math"],
			"summary":"Tan operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the tan(pi) into tVar -- tVar contains 0"
			},{
				"script":"variable tVar as Number\nput the tangent of pi /4 into tVar -- tVar contains approximately 1"
			}],
			"description":"Tan operator.",
			"tags":["math"]
		},{
			"id":"builder-573",
			"name":"hilitedcoordinatescolor",
			"display name":"hilitedCoordinatesColor",
			"library":"builder",
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
			"id":"builder-574",
			"name":"graphylines",
			"display name":"graphYLines",
			"library":"builder",
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
		},{
			"id":"builder-575",
			"name":"markerstyles",
			"display name":"markerStyles",
			"library":"builder",
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
			"id":"builder-576",
			"name":"graphcolors",
			"display name":"graphColors",
			"library":"builder",
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
			"id":"builder-577",
			"name":"markerscale",
			"display name":"markerScale",
			"library":"builder",
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
			"id":"builder-578",
			"name":"hilitedcoordinates",
			"display name":"hilitedCoordinates",
			"library":"builder",
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
			"id":"builder-579",
			"name":"showlines",
			"display name":"showLines",
			"library":"builder",
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
			"id":"builder-580",
			"name":"graphxlines",
			"display name":"graphXLines",
			"library":"builder",
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
			"id":"builder-581",
			"name":"graphdata",
			"display name":"graphData",
			"library":"builder",
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
			"id":"builder-582",
			"name":"com.livecode.widget.linegraph",
			"display name":"com.livecode.widget.linegraph",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.linegraph"
			],
			"associations":["com.livecode.widget.linegraph"],
			"summary":"A configurable line graph widget.\n\nThe graph has labelled axes and allows multiple lines to be displayed.\n\n- Load comma-delimited data into the graph with the <graphData> property\n- Set the <graphColors> to control the color of each line in the graph\n- Call out a specific point on the graph by setting the\n  <hilitedCoordinates>",
			"description":"A configurable line graph widget.\n\nThe graph has labelled axes and allows multiple lines to be displayed.\n\n- Load comma-delimited data into the graph with the <graphData> property\n- Set the <graphColors> to control the color of each line in the graph\n- Call out a specific point on the graph by setting the\n  <hilitedCoordinates>",
			"references":{
				"property":["graphData","graphColors","hilitedCoordinates"]
			}
		},{
			"id":"builder-583",
			"name":"thecolumndelimiter",
			"display name":"TheColumnDelimiter",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the column delimiter"
			],
			"display syntax":[
				"the column delimiter"
			],
			"associations":["com.livecode.engine"],
			"summary":"Fetches the `columnDelimiter` property from script context",
			"examples":[{
				"script":"   -- Split a string into a list using the column delimiter\n   variable tItems\n   put \"alice\\tbob\\teve\" into tItems\n   split tItems by the column delimiter\n   -- tItems is now a list: [\"alice\", \"bob\", \"eve\"]"
			}],
			"description":"Fetches the calling (script) handler's `columnDelimiter` property, or horizontal\ntab (U+0009) if no script context is available.",
			"references":{
				"expression":["TheRowDelimiter","TheItemDelimiter","TheLineDelimiter"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"builder-584",
			"name":"propertyofscriptobject",
			"display name":"PropertyOfScriptObject",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"property <Property> of <Object>"
			],
			"display syntax":[
				"property <i>Property</i> of <i>Object</i>"
			],
			"associations":["com.livecode.engine"],
			"summary":"The property of a script object.",
			"parameters":[{
				"name":"Property",
				"type":"",
				"refparam":"false",
				"description":"The name of the property to manipulate"
			},{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <ScriptObject>."
			}],
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n\tset property \"name\" of my script object to \"Clicked Widget\"\nend handler"
			},{
				"script":"resolve script object \"this stack\"\nset property \"invisible\" of the result to true\n    get property \"script\" of my script object"
			}],
			"description":"Use to manipulate properties of a script object.\n\n>*Note:* An error is thrown if the script object does not exist.\n\n>*Note:* An error is thrown if this syntax is used in a context where access\nto script objects is not allowed.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-585",
			"name":"resolvefilepath",
			"display name":"ResolveFilePath",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"resolve file <FilePath> [ relative to <Object> ]"
			],
			"display syntax":[
				"resolve file <i>FilePath</i> [ relative to <i>Object</i> ]"
			],
			"associations":["com.livecode.engine"],
			"summary":"Resolves a file path relative to a script object.",
			"parameters":[{
				"name":"FilePath",
				"type":"",
				"refparam":"false",
				"description":"A string relative or full file path."
			},{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"The string describing the script object."
			}],
			"examples":[{
				"script":"variable tObject as ScriptObject\nresolve script object \"this stack\"\nput the result into tObject\nvariable tIconPath as String\nif tObject exists then\n    resolve file \"images/icon.png\" relative to tObject\n    put the result into tIconPath\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The resolved file path string."
			}],
			"description":"Use the <ResolveFilePath|resolve file path> statement to resolve a relative file\npath in LCB using the same file path resolution semantics used by LCS.\nIf no object is specified the file path will be resolved relative to either\n`the defaultStack` or if in a widget handler the stack the current widget is on.\n\n>*Note:* An error is thrown if this syntax is used in a context where access\nto script objects is not allowed.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-586",
			"name":"resolvescriptobject",
			"display name":"ResolveScriptObject",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"resolve script object <Object>"
			],
			"display syntax":[
				"resolve script object <i>Object</i>"
			],
			"associations":["com.livecode.engine"],
			"summary":"Resolves a string to a script object.",
			"parameters":[{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"The string describing the script object."
			}],
			"examples":[{
				"script":"variable tObject as ScriptObject\nresolve script object \"button 1 of card 1 of this stack\"\nput the result into tObject\nif tObject exists then\n\tget property \"name\" of tObject\n\tlog the result\nelse\n\tlog \"No such button\"\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The resolved script object."
			}],
			"description":"Use the <ResolveScriptObject|resolve script object> statement to obtain a <ScriptObject> in Extension Builder, in order to interact with it.\n\n>*Note:* An error is thrown if this syntax is used in a context where access\nto script objects is not allowed.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-587",
			"name":"scriptobject",
			"display name":"ScriptObject",
			"library":"builder",
			"type":"type",
			"syntax":[
				"ScriptObject"
			],
			"display syntax":[
				"ScriptObject"
			],
			"associations":["com.livecode.engine"],
			"summary":"An opaque type corresponding to a script object.",
			"description":"Use the <ResolveScriptObject|resolve script object>, or <MyScriptObject|my script object> to obtain an object of type <ScriptObject>",
			"references":{
				"statement":["ResolveScriptObject"],
				"expression":["MyScriptObject"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"builder-588",
			"name":"log",
			"display name":"Log",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"log <Value> [ with <Arguments> ]"
			],
			"display syntax":[
				"log <i>Value</i> [ with <i>Arguments</i> ]"
			],
			"associations":["com.livecode.engine"],
			"summary":"Logs a value.",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"The value to log."
			},{
				"name":"Arguments",
				"type":"",
				"refparam":"false",
				"description":"A list of arguments."
			}],
			"examples":[{
				"script":"variable tList as List\nget property \"name\" of my script object\npush the result onto tList\n\nget property \"id\" of my script object\npush the result onto tList\n\nlog \"Widget %@ has id %@\" with tList"
			},{
				"script":"variable tList as List\nput [1,2,3,4] into tList\nlog tList"
			}],
			"description":"The log command triggers a logChanged message with the\naccumulated log messages since the logChanged message\nwas last handled.\nThis can be handled in xTalk Script, for example:\n\n    on logChanged pLog\n        write pLog to stdout\n    end logChanged\n\nIf using the 'with arguments' form, the <Value> must be a String.\nEach occurrence of %@ in the String is replaced by a string\nrepresentation of subsequent values in the <Arguments> List.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-589",
			"name":"sendtoscriptobject",
			"display name":"SendToScriptObject",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"send ( function | command ) <Message> [ to <Object> ] [ with <Arguments> ]"
			],
			"display syntax":[
				"send ( function | command ) <i>Message</i> [ to <i>Object</i> ] [ with <i>Arguments</i> ]"
			],
			"associations":["com.livecode.engine"],
			"summary":"Send a message to a script object.",
			"parameters":[{
				"name":"Message",
				"type":"",
				"refparam":"false",
				"description":"The message to dispatch."
			},{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"The script object to dispatch the message to."
			},{
				"name":"Arguments",
				"type":"",
				"refparam":"false",
				"description":"A list of arguments for the message."
			}],
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n\t// Send a message to the script so it can handle it.\n\tsend \"buttonClicked\" to my script object\nend handler"
			},{
				"script":"// myScriptFunction takes three arguments and performs some kind of calculation\n\nvariable tObject as ScriptObject\nresolve script object \"this stack\"\nput the result into tObject\nsend function \"myScriptFunction\" to tObject with [ 2, 3, 4 ]\n\n// the result contains the return value of 'myScriptFunction'"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The result of the message dispatch"
			}],
			"description":"Sends a message to the given script object and waits for it to finish so that it\ncan return a value.\n\nIf no target object is specified, the message is sent to the widget's\nscript object (if used in a root widget module), or to the default stack\notherwise.\n\nAfter a send, 'the message was handled' predicate can be used to determine if the\nmessage passed through the message path untouched.\n\n>*Note:* An error is thrown if this syntax is used in a context where access\nto script objects is not allowed.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-590",
			"name":"scriptobjectdoesnotexist",
			"display name":"ScriptObjectDoesNotExist",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Object> does not exist"
			],
			"display syntax":[
				"<i>Object</i> does not exist"
			],
			"associations":["com.livecode.engine"],
			"summary":"Tests the existence of a script object.",
			"parameters":[{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <ScriptObject>."
			}],
			"examples":[{
				"script":"variable tObject as ScriptObject\nresolve script object \"card 5 of this stack\"\nput the result into tObject\nif tObject does not exist then\n\tlog \"No such card\"\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"True if the object <Object> exists, and false otherwise."
			}],
			"description":"Use to test the non-existence or otherwise of a script object, for example after attempting to resolve the object from a string using <ResolveScriptObject|resolve script object>",
			"references":{
				"statement":["ResolveScriptObject"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"builder-591",
			"name":"myresourcesfolder",
			"display name":"MyResourcesFolder",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"my resources folder"
			],
			"display syntax":[
				"my resources folder"
			],
			"associations":["com.livecode.engine"],
			"summary":"Returns the resources folder for the current module",
			"examples":[{
				"script":"    -- Work out the filename of a file in the module's\n    -- resources folder.\n    variable tResourceFile as String\n    put my resources folder & \"/foobar.txt\" into tResourceFile"
			}],
			"description":"Returns the full path to the resources folder for the calling\nmodule. If there is no resources folder attached to the calling\nmodule, nothing is returned.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-592",
			"name":"posttoscriptobject",
			"display name":"PostToScriptObject",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"post <Message> [ to <Object> ] [ with <Arguments> ]"
			],
			"display syntax":[
				"post <i>Message</i> [ to <i>Object</i> ] [ with <i>Arguments</i> ]"
			],
			"associations":["com.livecode.engine"],
			"summary":"Post a message to a script object.",
			"parameters":[{
				"name":"Message",
				"type":"",
				"refparam":"false",
				"description":"The message to dispatch."
			},{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"The script object to dispatch the message to."
			},{
				"name":"Arguments",
				"type":"",
				"refparam":"false",
				"description":"A list of arguments for the message."
			}],
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n\t// Send a message to the script so it can handle it.\n\tpost \"buttonClicked\" to my script object\nend handler"
			}],
			"description":"Post a message to the given script object and returns immediately. Posting a message\nwill cause the message to be sent at the next wait point (usually when the current\nevent has finished being handled).\n\nIf no target object is specified, the message is posted to the widget's\nscript object (if used in a root widget module), or to the widget's\nparent (if used in a non-root widget module), or to the default stack\notherwise.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-593",
			"name":"executescript",
			"display name":"ExecuteScript",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"execute script <Script> [ in <Object> ] [ with <Arguments> ]"
			],
			"display syntax":[
				"execute script <i>Script</i> [ in <i>Object</i> ] [ with <i>Arguments</i> ]"
			],
			"associations":["com.livecode.engine"],
			"summary":"Executes some xTalk script.",
			"parameters":[{
				"name":"Script",
				"type":"",
				"refparam":"false",
				"description":"The script to execute."
			},{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"The object to execute the script in."
			},{
				"name":"Arguments",
				"type":"",
				"refparam":"false",
				"description":"A list of arguments for the script."
			}],
			"examples":[{
				"script":"public handler SnapshotMe() returns nothing\n\tvariable tVar as String\n\tget property \"number\" of my script object\n\tput the result formatted as string into tVar\n\n\t// Create a snapshot from the rect of the widget\n\texecute script \"import snapshot from rect (the rect of widget \" & tVar & \") of widget \" & tVar\nend handler"
			},{
				"script":"   public handler SnapshotMeAtSize(in pWidth as Integer, in pHeight as Integer) returns nothing\n\t\tvariable tVar as String\n\t\tget property \"number\" of my script object\n\t\tput the result formatted as string into tVar\n\n\t\t// Create a snapshot from the rect of the widget\n\t\texecute script \"import snapshot from me at size at size param(1),param(2)\" \\\n            with [ pWidth, pHeight ]\n\tend handler"
			}],
			"description":"Executes the given fragment of xTalk script in the context of the target\nscript object. If no object is specified then execution occurs in the context of\n`this card of the defaultStack` in a library handler or the current widget\ninstance script object if in a widget handler.\n\nThe list of arguments is accessible from the script fragment using the\n`paramCount()` and `param()` functions.\n\n>*Note:* An error is thrown if this syntax is used in a context where access\nto script objects is not allowed.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-594",
			"name":"com.livecode.engine",
			"display name":"com.livecode.engine",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.engine"
			],
			"associations":["com.livecode.engine"],
			"summary":"This library provides operations for interacting with xTalk Script from Extension Builder.",
			"description":"This library provides operations for interacting with xTalk Script from Extension Builder."
		},{
			"id":"builder-595",
			"name":"messagewashandled",
			"display name":"MessageWasHandled",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the message was handled"
			],
			"display syntax":[
				"the message was handled"
			],
			"associations":["com.livecode.engine"],
			"summary":"Determines whether a message was handled",
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n\tsend \"buttonClicked\" to my script object\n\tif the message was handled then\n\t\treturn\n\tend if\n\tlog \"The message was not handled\"\nend handler"
			}],
			"description":"Determines if a dispatched message was handled by any script objects in the message path.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-596",
			"name":"keyisdown",
			"display name":"KeyIsDown",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the ( shift |             command |             control |             alt |             option |             caps lock ) key is ( currently ) down"
			],
			"display syntax":[
				"the ( shift |             command |             control |             alt |             option |             caps lock ) key is ( currently ) down"
			],
			"associations":["com.livecode.engine"],
			"summary":"Returns true if the key is down",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The state of the key"
			}],
			"description":"Use 'the ... key is down' to determine if the key was down at the start of the\ncurrent event. Use 'the ... key is currently down' to determine if the key is\ndown at the time it is being checked.\n\nAs in script, command and control keys return the state of the same key on non-macOS\nsystems while on macOS they are separate keys. Additionally alt and option are\ndifferent names for the same key.",
			"tags":["engine"]
		},{
			"id":"builder-597",
			"name":"caller",
			"display name":"Caller",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the caller"
			],
			"display syntax":[
				"the caller"
			],
			"associations":["com.livecode.engine"],
			"summary":"The caller's script object",
			"examples":[{
				"script":"public handler NotifyMe() returns nothing\n\tpost \"notify\" to the caller\nend handler"
			}],
			"description":"Returns the script object which called the handler at the beginning\nof the current chain of Extension Builder handler execution.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-598",
			"name":"scriptobjectexists",
			"display name":"ScriptObjectExists",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Object> exists"
			],
			"display syntax":[
				"<i>Object</i> exists"
			],
			"associations":["com.livecode.engine"],
			"summary":"Tests the existence of a script object.",
			"parameters":[{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <ScriptObject>."
			}],
			"examples":[{
				"script":"variable tObject as ScriptObject\nresolve script object \"card 5 of this stack\"\nput the result into tObject\nif tObject exists then\n\tset property \"name\" of tObject to \"Card5\"\nelse\n\tlog \"No such card\"\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"True if the object <Object> exists, and false otherwise."
			}],
			"description":"Use to test the existence or otherwise of a script object, for example after attempting to resolve the object from a string using <ResolveScriptObject | resolve script object>",
			"references":{
				"statement":["ResolveScriptObject"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"builder-599",
			"name":"messagewasnothandled",
			"display name":"MessageWasNotHandled",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the message was not handled"
			],
			"display syntax":[
				"the message was not handled"
			],
			"associations":["com.livecode.engine"],
			"summary":"Determines whether a message was handled",
			"examples":[{
				"script":"public handler OnMouseUp() returns nothing\n\tsend \"buttonClicked\" to my script object\n\tif the message was not handled then\n\t\tlog \"The message was not handled\"\n\tend if\nend handler"
			}],
			"description":"Determines if a dispatched message was handled by any script objects in the message path.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-600",
			"name":"therowdelimiter",
			"display name":"TheRowDelimiter",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the row delimiter"
			],
			"display syntax":[
				"the row delimiter"
			],
			"associations":["com.livecode.engine"],
			"summary":"Fetches the `rowDelimiter` property from script context",
			"examples":[{
				"script":"  -- Split a string into a list using the row delimiter\n   variable tItems\n   put \"alice\\nbob\\neve\" into tItems\n   split tItems by the row delimiter\n   -- tItems is now a list: [\"alice\", \"bob\", \"eve\"]"
			}],
			"description":"Fetches the calling (script) handler's `rowDelimiter` property, or linefeed\n(U+000A) if no script context is available.",
			"references":{
				"expression":["TheColumnDelimiter","TheItemDelimiter","TheLineDelimiter"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"builder-601",
			"name":"theitemdelimiter",
			"display name":"TheItemDelimiter",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the item delimiter"
			],
			"display syntax":[
				"the item delimiter"
			],
			"associations":["com.livecode.engine"],
			"summary":"Fetches the `itemDelimiter` property from script context",
			"examples":[{
				"script":"  -- Split a string into a list using the item delimiter\n   variable tItems\n   put \"alice,bob,eve\" into tItems\n   split tItems by the item delimiter\n   -- tItems is now a list: [\"alice\", \"bob\", \"eve\"]"
			}],
			"description":"Fetches the calling (script) handler's `itemDelimiter` property, or the comma\nchar if no script context is available.",
			"references":{
				"expression":["TheColumnDelimiter","TheLineDelimiter","TheRowDelimiter"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"builder-602",
			"name":"childrenofscriptobject",
			"display name":"ChildrenOfScriptObject",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the children of <Object>"
			],
			"display syntax":[
				"the children of <i>Object</i>"
			],
			"associations":["com.livecode.engine"],
			"summary":"Get the child objects of a script object.",
			"parameters":[{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <ScriptObject>"
			}],
			"examples":[{
				"script":"public handler GetSiblings(in pObject as ScriptObject) returns List\n\t// Return the sibling objects of an object\n\treturn the children of the owner of pObject\nend handler"
			},{
				"script":"// Unset the highlight of all the controls in a group\nresolve script object \"group \\qcheckboxes\\q of this card\"\nvariable tObject\nrepeat for each element tObject in the children of the result\n\tset property \"hilite\" of tObject to false\nend repeat"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"A list of <ScriptObject>s that are contained within <Object>."
			}],
			"description":"Use to get the script objects contained within a script object.\n\n>*Note:* An error is thrown if the script object does not exist.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-603",
			"name":"thelinedelimiter",
			"display name":"TheLineDelimiter",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the line delimiter"
			],
			"display syntax":[
				"the line delimiter"
			],
			"associations":["com.livecode.engine"],
			"summary":"Fetches the `lineDelimiter` property from script context",
			"examples":[{
				"script":"  -- Split a string into a list using the line delimiter\n   variable tItems\n   put \"alice\\nbob\\neve\" into tItems\n   split tItems by the line delimiter\n   -- tItems is now a list: [\"alice\", \"bob\", \"eve\"]"
			}],
			"description":"Fetches the calling (script) handler's `lineDelimiter` property, or linefeed\n(U+000A) if no script context is available.",
			"references":{
				"expression":["TheColumnDelimiter","TheItemDelimiter","TheRowDelimiter"]
			},
			"tags":["engine","script engine"]
		},{
			"id":"builder-604",
			"name":"ownerofscriptobject",
			"display name":"OwnerOfScriptObject",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the owner of <Object>"
			],
			"display syntax":[
				"the owner of <i>Object</i>"
			],
			"associations":["com.livecode.engine"],
			"summary":"Get the parent object of a script object.",
			"parameters":[{
				"name":"Object",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a <ScriptObject>."
			}],
			"examples":[{
				"script":"public handler MyName() returns String\n\tget property \"short name\" of my script object\n\treturn the result\nend handler\n\npublic handler OnMouseUp() returns nothing\n\t// Send a message to the widget's parent so it can handle the click\n\tsend \"widgetClicked\" to the owner of my script object with [ MyName() ]\nend handler"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"The <ScriptObject> that is the owner of <Object>."
			}],
			"description":"Use to get the script object that contains a script object.\n\n>*Note:* An error is thrown if the script object does not exist.",
			"tags":["engine","script engine"]
		},{
			"id":"builder-605",
			"name":"fghovercolor",
			"display name":"fgHoverColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the fgHoverColor of <widget> to <pColor>\nget the fgHoverColor of <widget>"
			],
			"display syntax":[
				"set the fgHoverColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The foreground hover color of the tile",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A color in RGB form - comma separated values from 0 - 255"
			}],
			"description":"The foreground hover color of the tile"
		},{
			"id":"builder-606",
			"name":"hoverstate",
			"display name":"hoverState",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the hoverState of <widget> to { true | false }\nget the hoverState of <widget>"
			],
			"display syntax":[
				"set the hoverState of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The hover state of the tile\n",
			"description":"The hover state of the tile\n"
		},{
			"id":"builder-607",
			"name":"hovericonname",
			"display name":"hoverIconName",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the hoverIconName of <widget> to <pName>\nget the hoverIconName of <widget>"
			],
			"display syntax":[
				"set the hoverIconName of <i>widget</i> to <i>pName</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The name of the icon to display when hovering over the tile",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The icon name"
			}],
			"description":"The name of the icon to display when hovering over the tile"
		},{
			"id":"builder-608",
			"name":"bgcolor",
			"display name":"bgColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the bgColor of <widget> to <pColor>\nget the bgColor of <widget>"
			],
			"display syntax":[
				"set the bgColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The background color of the tile",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A color in RGB form - comma separated values from 0 - 255"
			}],
			"description":"The background color of the tile"
		},{
			"id":"builder-609",
			"name":"fgcolor",
			"display name":"fgColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the fgColor of <widget> to <pColor>\nget the fgColor of <widget>"
			],
			"display syntax":[
				"set the fgColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The foreground color of the tile",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A color in RGB form - comma separated values from 0 - 255"
			}],
			"description":"The foreground color of the tile"
		},{
			"id":"builder-610",
			"name":"mouseenter",
			"display name":"mouseEnter",
			"library":"builder",
			"type":"message",
			"syntax":[
				"mouseEnter"
			],
			"display syntax":[
				"mouseEnter"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"Sent when the mouse enters the tile",
			"description":"Sent when the mouse enters the tile"
		},{
			"id":"builder-611",
			"name":"bghovercolor",
			"display name":"bgHoverColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the bgHoverColor of <widget> to <pColor>\nget the bgHoverColor of <widget>"
			],
			"display syntax":[
				"set the bgHoverColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The background hover color of the tile",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A color in RGB form - comma separated values from 0 - 255"
			}],
			"description":"The background hover color of the tile"
		},{
			"id":"builder-612",
			"name":"mouseleave",
			"display name":"mouseLeave",
			"library":"builder",
			"type":"message",
			"syntax":[
				"mouseLeave"
			],
			"display syntax":[
				"mouseLeave"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"Sent when the mouse leaves the tile",
			"description":"Sent when the mouse leaves the tile"
		},{
			"id":"builder-613",
			"name":"iconname",
			"display name":"iconName",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the iconName of <widget> to <pName>\nget the iconName of <widget>"
			],
			"display syntax":[
				"set the iconName of <i>widget</i> to <i>pName</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The name of the icon to display",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The icon name"
			}],
			"description":"The name of the icon to display"
		},{
			"id":"builder-614",
			"name":"com.livecode.widget.tile",
			"display name":"com.livecode.widget.tile",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.tile"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"A tile widget with icon and label",
			"description":"A tile widget with icon and label"
		},{
			"id":"builder-615",
			"name":"tilelabel",
			"display name":"tileLabel",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the titleLabel of <widget> to <pLabel>\nget the titleLabel of <widget>"
			],
			"display syntax":[
				"set the titleLabel of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"The label to display",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The label string"
			}],
			"description":"The label to display"
		},{
			"id":"builder-616",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"builder",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["com.livecode.widget.tile"],
			"summary":"Sent when the tile is clicked",
			"description":"Sent when the tile is clicked"
		},{
			"id":"builder-617",
			"name":"com.livecode.widget.spinner",
			"display name":"com.livecode.widget.spinner",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.spinner"
			],
			"associations":["com.livecode.widget.spinner"],
			"summary":"This widget is a spinner or activity indicator. Spinners provide visual\nfeedback to users use when performing an activity for an unknown\nduration such as processing a large amount of data or presenting a\ncomplex user interface.",
			"description":"This widget is a spinner or activity indicator. Spinners provide visual\nfeedback to users use when performing an activity for an unknown\nduration such as processing a large amount of data or presenting a\ncomplex user interface."
		},{
			"id":"builder-618",
			"name":"markercount",
			"display name":"markerCount",
			"library":"builder",
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
			"id":"builder-619",
			"name":"scalemarkers",
			"display name":"scaleMarkers",
			"library":"builder",
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
		},{
			"id":"builder-620",
			"name":"iconlist",
			"display name":"iconList",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconList()"
			],
			"display syntax":[
				"iconList()"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icons in the current icon family.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon names for which SVG paths are available."
			}],
			"description":"Return an LCB list of the icon names in the iconsvg library's current\nicon family.\n\nFor each icon name, the SVG path string can be obtained with\n<iconSVGPathFromName> or its corresponding codepoint with\n<iconCodepointFromName>.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconFamilies","iconListForFamily","iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-621",
			"name":"setcurrenticonfamily",
			"display name":"setCurrentIconFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"setCurrentIconFamily(<pFamily>)"
			],
			"display syntax":[
				"setCurrentIconFamily(<i>pFamily</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Set the current icon family.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The icon family."
			}],
			"description":"Sets the iconsvg library's current icon family.  Handlers that do not specify\nan icon family will use the current icon family.",
			"references":{
				"handler":["addIconFamily","iconData","iconFamilies","iconList","iconNames"]
			}
		},{
			"id":"builder-622",
			"name":"icondata",
			"display name":"iconData",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconData()"
			],
			"display syntax":[
				"iconData()"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icon data in the current icon family.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The current icon family's data (name, SVG path, codepoint)."
			}],
			"description":"Return an LCB array of the icon data in the iconsvg library's current\nicon family.",
			"references":{
				"handler":["iconList","iconNames"]
			}
		},{
			"id":"builder-623",
			"name":"getcurrenticonfamily",
			"display name":"getCurrentIconFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"getCurrentIconFamily()"
			],
			"display syntax":[
				"getCurrentIconFamily()"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the current icon family.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The current icon family."
			}],
			"description":"Returns the iconsvg library's current icon family.  Handlers that do not specify\nan icon family will use the current icon family.  \"fontawesome\" is the\ncurrent family when the library is first initialized.",
			"references":{
				"handler":["addIconFamily","iconData","iconFamilies","iconList","iconNames"]
			}
		},{
			"id":"builder-624",
			"name":"iconnamesforfamily",
			"display name":"iconNamesForFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconNamesForFamily(<pFamily>)"
			],
			"display syntax":[
				"iconNamesForFamily(<i>pFamily</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Returns the available icons in the specified icon family.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon family"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon names for which SVG paths are available, one per line."
			}],
			"description":"The <iconNamesForFamily> handler returns the names of the icons in the \nlibrary of the specified icon family.\n\nCall <iconSVGPathFromName> or <iconCodepointFromName> to retrieve either the\nSVG path string or codepoint corresponding to the icon with this name.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconFamilies","iconList","iconListForFamily"]
			}
		},{
			"id":"builder-625",
			"name":"iconarraymatchinginallfamilies",
			"display name":"iconArrayMatchingInAllFamilies",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconArrayMatchingInAllFamilies(<pSearch>)"
			],
			"display syntax":[
				"iconArrayMatchingInAllFamilies(<i>pSearch</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icons in all icon families that match the\nsearch string.",
			"parameters":[{
				"name":"pSearch",
				"type":"",
				"refparam":"false",
				"description":"The string used to search icon names."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Each key is a family that contained icon matches to the\nsearch string.  Each value is a list of the icon matches."
			}],
			"description":"Returns an array of families with icon names matching the search string.\nEach value is a list of the icon matches.\n\nFor each icon name, the SVG path string can be obtained with\n<iconSVGPathFromName> or its corresponding codepoint with\n<iconCodepointFromName>.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconList","iconListForFamily"]
			}
		},{
			"id":"builder-626",
			"name":"icondataforfamily",
			"display name":"iconDataForFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconDataForFamily(<pFamily>)"
			],
			"display syntax":[
				"iconDataForFamily(<i>pFamily</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icon data in the specified icon family.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon family"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The specified icon family's data (name, SVG path, codepoint)."
			}],
			"description":"Return an LCB array of the icon data in the iconsvg library's specified\nicon family.",
			"references":{
				"handler":["addIconFamily","deleteIconFamily","iconFamilies","iconListForFamily","iconNamesForFamily"]
			}
		},{
			"id":"builder-627",
			"name":"addiconfamily",
			"display name":"addIconFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"addIconFamily(<pFamily>,<pIconData>)"
			],
			"display syntax":[
				"addIconFamily(<i>pFamily</i>,<i>pIconData</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Add an icon family to the iconsvg library.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The family for the icons."
			},{
				"name":"pIconData",
				"type":"",
				"refparam":"false",
				"description":"The icon data.  Each key is an icon name with\na key for the SVG data and a key for the codepoint."
			}],
			"description":"Add icons to the iconsvg library.\n\n> Note:  If the family already exists, then the data will be merged.\nIcons with matching names will be replaced.\nTo replace a family, use <deleteIconFamily> first.",
			"references":{
				"handler":["addIcon","deleteIconFamily","iconFamilies","iconList","iconListForFamily","iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-628",
			"name":"deleteiconfamily",
			"display name":"deleteIconFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"deleteIconFamily(<pFamily>)"
			],
			"display syntax":[
				"deleteIconFamily(<i>pFamily</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Delete an icon family from the iconsvg library.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The family to delete."
			}],
			"description":"Delete an icon family from the iconsvg library.\n\n> Note:  The current icon family may not be deleted.",
			"references":{
				"handler":["addIconFamily","iconFamilies","iconListForFamily","iconNamesForFamily"]
			}
		},{
			"id":"builder-629",
			"name":"iconcodepointfromname",
			"display name":"iconCodepointFromName",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconCodepointFromName(<pName>)"
			],
			"display syntax":[
				"iconCodepointFromName(<i>pName</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Returns the codepoint corresponding to the given icon in the current font.",
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The codepoint of the icon with name <pName>"
			}],
			"description":"Returns the codepoint corresponding to the icon with name <pName> in the \ncurrent font.  Use the <iconNames> handler to obtain the names of the \nicons for which this library is able to access SVG paths.\n\n>Note:  The icon name is accepted in the form \"name\" or \"family/name\".  \nIf no family is specified, then the current family is searched first.  \nIf not found, other families are searched for the provided name.",
			"references":{
				"handler":["iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-630",
			"name":"iconnames",
			"display name":"iconNames",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconNames()"
			],
			"display syntax":[
				"iconNames()"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Returns the available icons in the current icon family.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon names for which SVG paths are available,\none per line."
			}],
			"description":"The <iconNames> handler returns the names of the icons in the library's\ncurrent icon family.\n\nCall <iconSVGPathFromName> or <iconCodepointFromName> to retrieve either the\nSVG path string or codepoint corresponding to the icon with this name.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconFamilies","iconList","iconListForFamily","iconNamesForFamily"]
			}
		},{
			"id":"builder-631",
			"name":"iconlistforfamily",
			"display name":"iconListForFamily",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconListForFamily(<pFamily>)"
			],
			"display syntax":[
				"iconListForFamily(<i>pFamily</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icons in the specified icon family.",
			"parameters":[{
				"name":"pFamily",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon family"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon names for which SVG paths are available."
			}],
			"description":"Return an LCB list of the icon names of the specified family in the \niconsvg library.\n\nFor each icon name, the SVG path string can be obtained with\n<iconSVGPathFromName> or its corresponding codepoint with\n<iconCodepointFromName>.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconFamilies","iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-632",
			"name":"iconlistmatching",
			"display name":"iconListMatching",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconListMatching(<pSearch>)"
			],
			"display syntax":[
				"iconListMatching(<i>pSearch</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Return the available icons in the current icon family that match the\nsearch string.",
			"parameters":[{
				"name":"pSearch",
				"type":"",
				"refparam":"false",
				"description":"The string used to search icon names."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon names for which SVG paths are available matching\nthe search string."
			}],
			"description":"Return an LCB list of the icon names in the current icon family that match \nthe search string.\n\nFor each icon name, the SVG path string can be obtained with\n<iconSVGPathFromName> or its corresponding codepoint with\n<iconCodepointFromName>.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconList","iconListForFamily"]
			}
		},{
			"id":"builder-633",
			"name":"iconsvgpathfromname",
			"display name":"iconSVGPathFromName",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconSVGPathFromName(<pName>)"
			],
			"display syntax":[
				"iconSVGPathFromName(<i>pName</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Returns the SVG path for the given icon.",
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The SVG path to draw the icon with name <pName>"
			}],
			"description":"Returns the SVG path for the icon with name <pName>. Use the \n<iconNames> handler to obtain the names of the icons for which this \nlibrary is able to access SVG paths.\n\n>Note:  The icon name is accepted in the form \"name\" or \"family/name\".  \nIf no family is specified, then the current family is searched first.  \nIf not found, other families are searched for the provided name.",
			"references":{
				"handler":["iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-634",
			"name":"com.livecode.library.iconsvg",
			"display name":"com.livecode.library.iconsvg",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.iconsvg"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"This is an SVG icon path library.",
			"description":"This is an SVG icon path library."
		},{
			"id":"builder-635",
			"name":"addicon",
			"display name":"addIcon",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"addIcon(<pName>,<pSVG>,<pCodepoint>)"
			],
			"display syntax":[
				"addIcon(<i>pName</i>,<i>pSVG</i>,<i>pCodepoint</i>)"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Add an icon to the iconsvg library.",
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon.  By default, new icons are added to the\n\"custom\" family.  The family may be specified by including the family \nname and a \"/\" before the icon name (`bootstrap/adjust`)."
			},{
				"name":"pSVG",
				"type":"",
				"refparam":"false",
				"description":"The SVG path for the icon."
			},{
				"name":"pCodepoint",
				"type":"",
				"refparam":"false",
				"description":"The codepoint for the icon."
			}],
			"description":"Add an icon to the iconsvg library.  By default, new icons are added to\nthe \"custom\" family.  The family may be specified by including the \nfamily name and a \"/\" before the icon name (`bootstrap/adjust`).",
			"references":{
				"handler":["addIconFamily","iconFamilies","iconList","iconListForFamily","iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-636",
			"name":"iconfamilies",
			"display name":"iconFamilies",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"iconFamilies()"
			],
			"display syntax":[
				"iconFamilies()"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"Returns the available icons families.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The icon family names for which SVG paths are available, one per line."
			}],
			"description":"The <iconFamilies> handler returns the names of the families in the icon library.",
			"references":{
				"handler":["iconSVGPathFromName","iconCodepointFromName","iconList","iconListForFamily","iconNames","iconNamesForFamily"]
			}
		},{
			"id":"builder-637",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the borderColor of <widget>",
				"set the borderColor of <widget> to <color>"
			],
			"display syntax":[
				"get the borderColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The color of the navigation bar border",
			"description":"The top border of the navigation bar is drawn using the <borderColor>.",
			"references":{
				"property":["showBorder"]
			}
		},{
			"id":"builder-638",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"hiliteChanged"
			],
			"display syntax":[
				"hiliteChanged"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"Sent when a navigation item is selected",
			"examples":[{
				"script":"on hiliteChanged\n\tgo card the hilitedItemName of me\nend hiliteChanged"
			}],
			"description":"The <hiliteChanged> message is sent when the highlighted navigation\nitem changes, either by clicking on the navigation bar or by setting\nthe <hilitedItem> or <hilitedItemName> properties.",
			"references":{
				"property":["hilitedItem","hilitedItemName"]
			}
		},{
			"id":"builder-639",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemNames of <widget>",
				"set the itemNames of <widget> to <names>"
			],
			"display syntax":[
				"get the itemNames of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The names of the navigation items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of navigation item names."
			}],
			"description":"The names of the navigation items of the widget.  These are the names\nused internally to identify each navigation item, rather than the\n<itemLabels> displayed to the user.\n\nSetting the <itemNames> can add or remove items to the navigation bar.\n\nIf the new value of the <itemNames> has more items than the navigation\nbar, as many new navigation items as necessary are created and added\nto the end of the navigation bar, using the default label and icons.\n\nIf the new value of the <itemNames> has fewer items than the\nnavigation bar, items are removed from the end of the navigation bar\nas required.\n\nIt is not possible to re-order the navigation items by setting the\n<itemNames>.",
			"references":{
				"property":["itemLabels"]
			}
		},{
			"id":"builder-640",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hilitedItemIcons of <widget>",
				"set the hilitedItemIcons of <widget> to <icons>"
			],
			"display syntax":[
				"get the hilitedItemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The highlighted-state icons for the navigation icons",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of icon names."
			}],
			"description":"The names of the icons displayed by the navigation items when\nhighlighted.\n\nEach icon name must be one of the graphics supplied by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.  See the \n<com.livecode.library.iconsvg|Icon SVG Library>\ndocumentation for handlers to manage user icon families.\n\nSetting the <hilitedItemIcons> can add items to the navigation bar.\nIf the new value of the <hilitedItemIcons> has more items than the\nnavigation bar, as many new navigation items as necessary are created\nand added to the end of the navigation bar, using a default\n<itemNames|name>, <itemLabels|label> and <itemIcons|normal icon>.\n\nIf the new value of the <hilitedItemIcons> has fewer items than the\nnavigation bar, the remaining navigation items have their\nhighlighted-state icons reset to the default icon.",
			"references":{
				"property":["itemIcons","itemLabels","itemNames"],
				"library":["com.livecode.library.iconsvg"]
			}
		},{
			"id":"builder-641",
			"name":"opaque",
			"display name":"opaque",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the opaque of <widget>",
				"set the opaque of <widget> to {true | false}"
			],
			"display syntax":[
				"get the opaque of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"Whether the background of the widget is filled",
			"description":"If the <opaque> property is `true`, the background of the navigation\nbar is filled with the <backColor>.  If it is `false` the background\nis transparent.",
			"references":{
				"property":["backColor"]
			}
		},{
			"id":"builder-642",
			"name":"editmode",
			"display name":"editMode",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the editMode of <widget>",
				"set the editMode of <widget> to {true | false}"
			],
			"display syntax":[
				"get the editMode of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"Whether the widget is in edit mode",
			"description":"**Note:** This feature is currently **experimental** and may change or\nbe removed in future versions.\n\nWhen the <editMode> is enabled, the navigation items' icons can be\nchanged by clicking on the outlined regions, and new items can be added\nwith the add button."
		},{
			"id":"builder-643",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemStyle of <widget>",
				"set the itemStyle of <widget> to <style>"
			],
			"display syntax":[
				"get the itemStyle of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The style with which navigation items are displayed",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The display style\n- \"icons\": display icons only\n- \"text\": display names only\n- \"both\": display icons and names"
			}],
			"description":"The <itemStyle> property determines whether navigation items are\ndisplayed with icons, with labels, or with icons positioned below\nlabels.",
			"references":{
				"property":["hilitedItemIcons","itemIcons","itemLabels"]
			}
		},{
			"id":"builder-644",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemIcons of <widget>",
				"set the itemIcons of <widget> to <icons>"
			],
			"display syntax":[
				"get the itemIcons of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The normal-state icons for the navigation items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of icon names."
			}],
			"description":"The names of the icons displayed by the navigation items when not\nhighlighted.\n\nEach icon name must be one of the graphics supplied by the \"IconSVG\"\nlibrary.  You can get a list of available predefined path names by running\n`put iconNames()` in the Message Box.  See the \n<com.livecode.library.iconsvg|Icon SVG Library>\ndocumentation for handlers to manage user icon families.\n\nSetting the <itemIcons> can add items to the navigation bar.  If the\nnew value of the <itemIcons> has more items than the navigation bar,\nas many new navigation items as necessary are created and added to the\nend of the navigation bar, using a default <itemNames|name>,\n<itemLabels|label> and <hilitedItemIcons|highlighted icon>.\n\nIf the new value of the <itemIcons> has fewer items than the\nnavigation bar, the remaining navigation items have their icons reset\nto the default icon.",
			"references":{
				"property":["hilitedItemIcons","itemLabels","itemNames"],
				"library":["com.livecode.library.iconsvg"]
			}
		},{
			"id":"builder-645",
			"name":"hiliteditem",
			"display name":"hilitedItem",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hilitedItem of <widget>",
				"set the hilitedItem of <widget> to <itemNumber>"
			],
			"display syntax":[
				"get the hilitedItem of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The index of the highlighted navigation item",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The item number of the navigation item that is highlighted."
			}],
			"description":"The <hilitedItem> is the item number of the currently-highlighted navigation\nitem.  It can be used as a key into the <itemArray>.\n\nSetting 0 will cause nothing to be highlighted.",
			"references":{
				"property":["itemArray"]
			}
		},{
			"id":"builder-646",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemLabels of <widget>",
				"set the itemLabels of <widget> to <labels>"
			],
			"display syntax":[
				"get the itemLabels of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The labels of the navigation items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A comma-delimited list of labels."
			}],
			"description":"The display labels for the navigation items of the widget.\n\nSetting the <itemLabels> can add items to the navigation bar.  If the\nnew value of the <itemLabels> has more items than the navigation bar,\nas many new navigation items as necessary are created and added to the\nend of the navigation bar, using a default <itemNames|name>,\n<itemIcons|icon> and <hilitedItemIcons|highlighted icon>.\n\nIf the new value of the <itemLabels> has fewer items than the\nnavigation bar, the remaining navigation items have their labels reset\nto the default icon.",
			"references":{
				"property":["hilitedItemIcons","itemIcons","itemNames"]
			}
		},{
			"id":"builder-647",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hiliteColor of <widget>",
				"set the hiliteColor of <widget> to <color>"
			],
			"display syntax":[
				"get the hiliteColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The color of the highlighted navigation item",
			"description":"The <hiliteColor> is used to draw the icon and/or label of the\nnavigation item that is <hilitedItemName|currently highlighted>.",
			"references":{
				"property":["hilitedItemName"]
			}
		},{
			"id":"builder-648",
			"name":"showborder",
			"display name":"showBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the showBorder of <widget>",
				"set the showBorder of <widget> to {true | false}"
			],
			"display syntax":[
				"get the showBorder of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"Whether there is a dividing line at the top of the widget",
			"description":"When the <showBorder> property is `true`, the navigation bar has a\ndividing line along its top edge.",
			"references":{
				"property":["borderColor"]
			}
		},{
			"id":"builder-649",
			"name":"itemarray",
			"display name":"itemArray",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the itemArray of <widget>",
				"set the itemArray of <widget> to <array>"
			],
			"display syntax":[
				"get the itemArray of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The full navigation item data.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An array containing all the navigation data."
			}],
			"description":"The <itemArray> is a numerically keyed array.  Each element of the\narray contains an array describing the name, label and icons of the\nnavigation item at that index.\n\nThe <itemArray> can be used to access and modify all of the navigation\ndata at once, rather than setting the <itemNames>, <itemLabels>,\n<itemIcons> and <hilitedItemIcons> individually.\n\nThe structure of the <itemArray> is:\n\n```\n{ key (integer): The index of the navigation item\n\tvalue (array): The array containing the data for the item at this index\n\t{ key : \"label\"\n\t\tvalue (string): The label of this item\n\t\tkey : \"name\"\n\t\tvalue (string): The name of this item\n\t\tkey : \"icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is not highlighted\n\t\tkey : \"hilited_icon_name\"\n\t\tvalue (string) : The name of the icon to display when the item is highlighted\n\t}\n}\n```\n\nAny individual keys (\"label\", \"icon_name\", \"hilited_icon_name\") missing when\nsetting the <itemArray> will be added, and set to their defaults - \"circle\" for\nthe icons, and \"New Item\" for the label.\n\n**Note:** When setting the <itemArray>, an error will be thrown if the\nnew value is not a numerically-keyed array.",
			"references":{
				"property":["hilitedItemIcons","itemIcons","itemLabels","itemNames"]
			}
		},{
			"id":"builder-650",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the foreColor of <widget>",
				"set the foreColor of <widget> to <color>"
			],
			"display syntax":[
				"get the foreColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The color of the navigation items that are not highlighted",
			"description":"The <foreColor> is used to draw the icons and/or labels of the\nnavigation items that are not <hilitedItemName|currently highlighted>.",
			"references":{
				"property":["hilitedItemName"]
			}
		},{
			"id":"builder-651",
			"name":"hiliteditemname",
			"display name":"hilitedItemName",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the hilitedItemName of <widget>",
				"set the hilitedItemName of <widget> to <pName>"
			],
			"display syntax":[
				"get the hilitedItemName of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The name of the highlighted navigation item",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The name of the navigation item that is highlighted."
			}],
			"description":"The <hilitedItemName> is the name of the currently-highlighted navigation\nitem.  If nothing is highlighted, the value is an empty string.",
			"references":{
				"property":["hilitedItem"]
			}
		},{
			"id":"builder-652",
			"name":"com.livecode.widget.navbar",
			"display name":"com.livecode.widget.navbar",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.navbar"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The navigation bar widget is intended for use in mobile apps for\nswitching between cards, although there are many other possible uses.\n\nThe widget displays a row of navigation items.  Each of these has a\n<itemNames|name>, which identifies it.  Depending on the selected\n<itemStyle>, the items may display a <itemLabels|label>,\n<itemIcons|icon>, or both.  All of the navigation item data is\navailable as a single array via the <itemArray> property.\n\nAt any time, zero or one of the navigation items may be\n<hilitedItemName|highlighted>.  This is useful, for example, for\nindicating the current card.  When the user clicks one of the\nnavigation items, the widget sends a <hiliteChanged> message.",
			"description":"The navigation bar widget is intended for use in mobile apps for\nswitching between cards, although there are many other possible uses.\n\nThe widget displays a row of navigation items.  Each of these has a\n<itemNames|name>, which identifies it.  Depending on the selected\n<itemStyle>, the items may display a <itemLabels|label>,\n<itemIcons|icon>, or both.  All of the navigation item data is\navailable as a single array via the <itemArray> property.\n\nAt any time, zero or one of the navigation items may be\n<hilitedItemName|highlighted>.  This is useful, for example, for\nindicating the current card.  When the user clicks one of the\nnavigation items, the widget sends a <hiliteChanged> message.",
			"references":{
				"property":["hilitedItemName","itemArray","itemIcons","itemLabels","itemNames","itemStyle"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"builder-653",
			"name":"backcolor",
			"display name":"backColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the backColor of <widget>",
				"set the backColor of <widget> to <color>"
			],
			"display syntax":[
				"get the backColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The color of the navigation bar background",
			"description":"When the navigation bar has an <opaque> background, it is filled with\nthe <backColor>.",
			"references":{
				"property":["opaque"]
			}
		},{
			"id":"builder-654",
			"name":"desiredheight",
			"display name":"desiredHeight",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the desiredHeight of <widget>"
			],
			"display syntax":[
				"get the desiredHeight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The optimal height for the widget",
			"examples":[{
				"script":"create widget as \"com.livecode.widget.navbar\"\nset the height of it to the desiredHeight of it"
			}],
			"description":"**Note:** This feature is currently **experimental** and may change or\nbe removed in future versions.\n\nReturns the preferred height for widget, calculated from its current\nstate."
		},{
			"id":"builder-655",
			"name":"com.livecode.widget.native.mac.button",
			"display name":"com.livecode.widget.native.mac.button",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.mac.button"
			],
			"associations":["com.livecode.widget.native.mac.button"],
			"summary":"This widget is a native push button on Mac.",
			"OS":["mac"],
			"description":"This widget is a native push button on Mac."
		},{
			"id":"builder-656",
			"name":"enabled",
			"display name":"enabled",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.native.mac.button"],
			"summary":"Whether the button is active and responds to user action",
			"OS":["mac"],
			"description":"Use the <enabled> property to enable or disable the native button. When\ndisabled, the button has a greyed out appearance and does not accept \nclicks or touches."
		},{
			"id":"builder-657",
			"name":"label",
			"display name":"label",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the label of <widget> to <pLabel>\nget the label of <widget>"
			],
			"display syntax":[
				"set the label of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.native.mac.button"],
			"summary":"The label displayed by the button.",
			"OS":["mac"],
			"examples":[{
				"script":"set the label of widget \"Mac Button\" to \"Click me!\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The string to use as the button label"
			}],
			"description":"The <label> property is the label displayed by the button.\n"
		},{
			"id":"builder-658",
			"name":"repeatwhile",
			"display name":"RepeatWhile",
			"library":"builder",
			"type":"control structure",
			"syntax":[
				"repeat while <Condition>\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat while <i>Condition</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements while a condition continues to be true.",
			"parameters":[{
				"name":"Condition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"description":"Use the repeat while <Condition> structure to execute a set of statements repeatedly, while the <Condition> continues to evaluate to true."
		},{
			"id":"builder-659",
			"name":"if",
			"display name":"If",
			"library":"builder",
			"type":"control structure",
			"syntax":[
				"if <IfCondition> then\n\t<IfStatementList>\n[else if <ElseCondition> then\n\t<ElseIfStatementList>]\n[else\n\t<ElseStatementList>]\nend if"
			],
			"display syntax":[
				"if <i>IfCondition</i> then"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements depending on the value of a condition.",
			"parameters":[{
				"name":"IfCondition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"IfStatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			},{
				"name":"ElseCondition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"ElseIfStatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			},{
				"name":"ElseStatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"description":"Use the if control structure to execute a statement (or list of statements) only under certain circumstances. If <IfCondition> evaluates to true, the statements in <IfStatementList> are executed. For each condition <ElseCondition> such that none of the previous conditions evaluates to true, the condition is evaluated and the corresponding statements in <ElseIfStatementList> are executed. If none of the conditions evaluate to true, the statements in <ElseStatementList> are executed."
		},{
			"id":"builder-660",
			"name":"putinto",
			"display name":"PutInto",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"put <sourceValue> into <targetContainer>"
			],
			"display syntax":[
				"put <i>sourceValue</i> into <i>targetContainer</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Put a value into a container.",
			"parameters":[{
				"name":"sourceValue",
				"type":"any",
				"refparam":"false",
				"description":"The value to put into the <targetContainer>"
			},{
				"name":"targetContainer",
				"type":"any",
				"refparam":"false",
				"description":"A valid target for <sourceValue>"
			}],
			"description":"Assigns the result of evaluating <sourceValue> to <targetContainer>.\n>*Note:* It is a checked runtime error for the source value's type to not be compatible with the target expression's type."
		},{
			"id":"builder-661",
			"name":"throwerror",
			"display name":"ThrowError",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"throw <errorString>"
			],
			"display syntax":[
				"throw <i>errorString</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Causes an error to be raised.",
			"parameters":[{
				"name":"errorString",
				"type":"string",
				"refparam":"false",
				"description":"The error to throw."
			}],
			"examples":[{
				"script":"\tvariable tVar as optional number\n\tput \"Z\" parsed as string into tVar\n\tif tVar is not defined then\n\t\tthrow tVar && \"is not a number\n\tend if"
			}],
			"description":"The throw statement causes an error to be raised. This causes execution to terminate, and the error is passed back to environment.\n\nThe Error expression must be an expression that evaluates to a string.\nNote:There is currently no try / catch mechanism in Extension Builder, so throwing an error will cause the error to be raised in xTalk Script in the appropriate context."
		},{
			"id":"builder-662",
			"name":"nextrepeat",
			"display name":"NextRepeat",
			"library":"builder",
			"type":"control structure",
			"syntax":[
				"next repeat"
			],
			"display syntax":[
				"next repeat"
			],
			"associations":["com.livecode.language"],
			"summary":"Begin the next iteration of a repeat loop.",
			"examples":[{
				"script":"\tvariable tList as list\n\tvariable tElement\n\tput [1, 2, 3, \"a\", 4, \"b\", 5] into tList\n\n\tvariable tSum as number\n\tput 0 into tSum\n\trepeat for each element tElement in tList\n\t\tif tElement is not a number then\n\t\t\tnext repeat\n\t\tend if\n\n\t\tadd tElement to tSum\n\tend repeat"
			}],
			"description":"Use <NextRepeat|next repeat> to skip to the next iteration of a repeat loop. This is particularly useful when operations are only to be performed on iterands which satisfy certain criteria."
		},{
			"id":"builder-663",
			"name":"theresult",
			"display name":"TheResult",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the result"
			],
			"display syntax":[
				"the result"
			],
			"associations":["com.livecode.language"],
			"summary":"The result of the previous statement.",
			"examples":[{
				"script":"\tresolve script object \"this stack\"\n\tget property \"name\" of the result\n\tlog the result"
			},{
				"script":"\tget 20\n\tsubtract 1 from the result\n\tdivide the result by 2\n\tround the result\n\t-- the result is 10"
			}],
			"description":"Use <TheResult|the result> to obtain the return value of the previous (executed) non-control structure statement.\n>*Note:* Result expressions are not assignable.\n"
		},{
			"id":"builder-664",
			"name":"return",
			"display name":"Return",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"return [<returnValue>]"
			],
			"display syntax":[
				"return [<i>returnValue</i>]"
			],
			"associations":["com.livecode.language"],
			"summary":"Causes execution of the current handler to end, and control return to the caller.",
			"parameters":[{
				"name":"returnValue",
				"type":"any",
				"refparam":"false",
				"description":"The value to return"
			}],
			"description":"Use the return control structure to halt execution of the current handler, to return control to the caller, and optionally to return a value.\nNote:It is a checked runtime error for a value returned from a handler to not match the return type of the handler it is in."
		},{
			"id":"builder-665",
			"name":"exitrepeat",
			"display name":"ExitRepeat",
			"library":"builder",
			"type":"control structure",
			"syntax":[
				"exit repeat"
			],
			"display syntax":[
				"exit repeat"
			],
			"associations":["com.livecode.language"],
			"summary":"Exit a repeat loop.",
			"examples":[{
				"script":"\tpublic handler ListUpToSentinel(in pList as list, in pSentinel as string) as list\n\n\t\tvariable tElement\n\t\tvariable tNewList as list\n\t\tput the empty list into tNewList\n\n\t\trepeat for each element tElement in pList\n\t\t\tif tElement is a string and tElement is pSentinel then\n\t\t\t\texit repeat\n\t\t\tend if\n\t\t\tpush tElement onto tNewList\n\t\tend repeat\n\n\t\treturn tNewList\n\tend handler"
			}],
			"description":"Use <ExitRepeat|exit repeat> to exit a repeat loop, for example when a certain condition is met."
		},{
			"id":"builder-666",
			"name":"get",
			"display name":"Get",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"get <expression>"
			],
			"display syntax":[
				"get <i>expression</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Evaluate an expression and put it into the result.",
			"parameters":[{
				"name":"expression",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			}],
			"description":"The get statement evaluates the Value expression and returns it as the result of the statement. The value is subsequently available by using <TheResult|the result> expression.",
			"references":{
				"expression":["TheResult"]
			}
		},{
			"id":"builder-667",
			"name":"repeatforeach",
			"display name":"RepeatForEach",
			"library":"builder",
			"type":"control structure",
			"syntax":[
				"repeat for each <Iterator> in <Container>\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat for each <i>Iterator</i> in <i>Container</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements until the <Iterator> is exhausted.",
			"parameters":[{
				"name":"Iterator",
				"type":"",
				"refparam":"false",
				"description":"Any iterator expression."
			},{
				"name":"Container",
				"type":"",
				"refparam":"false",
				"description":"The container over which to iterate."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"\tvariable tElement\n\tvariable tNumbers as list\n\tput the empty list into tNumbers\n\n\trepeat for each element tElement in [\"a\", 1, 2, 3, \"b\", \"c\", 4]\n\t\tif tElement is a number then\n\t\t\tpush tElement onto tNumbers\n\t\tend if\n\tend repeat\n\n\t// tNumbers contains [1, 2, 3, 4]"
			}],
			"description":"Use the repeat for each control structure to iterate though the chars of a string, bytes of data, elements of a list or array, or keys of an array.\n>*Note:* The variable which contains the iterand must be declared prior to being used in the repeat loop.",
			"references":{
				"iterator":["RepeatForEachChar","RepeatForEachByte","RepeatForEachKey","RepeatForEachElementInList","RepeatForEachElementInArray"]
			}
		},{
			"id":"builder-668",
			"name":"repeatuntil",
			"display name":"RepeatUntil",
			"library":"builder",
			"type":"control structure",
			"syntax":[
				"repeat until <Condition>\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat until <i>Condition</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements until a condition becomes true.",
			"parameters":[{
				"name":"Condition",
				"type":"bool",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"description":"Use the repeat until <Condition> structure to execute a set of statements repeatedly, until the <Condition> evaluates to true."
		},{
			"id":"builder-669",
			"name":"repeatforever",
			"display name":"RepeatForever",
			"library":"builder",
			"type":"control structure",
			"syntax":[
				"repeat forever\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat forever"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements continually.",
			"parameters":[{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"\tvariable tCount as number\n\tvariable tList as list\n\tput [ 1, 2, 3, 4, 5, 6, 7, 8, \"A\", 9, 10 ] into tList\n\tput 0 into tCount\n\trepeat forever\n\t\tif tList[tCount] is not a number then\n\t\t\texit repeat\n\t\tend if\n\t\tadd 1 to tCount\n\tend repeat\n\n\t// tCount is 8"
			}],
			"description":"Use the repeat forever structure to execute a set of statements until either an error is thrown, or exit repeat is executed."
		},{
			"id":"builder-670",
			"name":"repeatwith",
			"display name":"RepeatWith",
			"library":"builder",
			"type":"control structure",
			"syntax":[
				"repeat with <Counter> from <Start> ( up | down ) to <Finish> [ by <Step> ]\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat with <i>Counter</i> from <i>Start</i> ( up | down ) to <i>Finish</i> [ by <i>Step</i> ]"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements",
			"parameters":[{
				"name":"Counter",
				"type":"",
				"refparam":"false",
				"description":"A numeric variable."
			},{
				"name":"Start",
				"type":"number",
				"refparam":"false",
				"description":"The initial value of <Counter>"
			},{
				"name":"Finish",
				"type":"number",
				"refparam":"false",
				"description":"The boundary value of <Counter>"
			},{
				"name":"Step",
				"type":"number",
				"refparam":"false",
				"description":"The value by which to increase or decrease the <Counter>"
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"\tpublic handler Factorial(in pOperand as integer) as number\n\t\tif pOperand < 1 then\n\t\t\treturn 0\n\t\tend if\n\n\t\tvariable tTotal as number\n\t\tput 1 into tTotal\n\n\t\tvariable tCounter as integer\n\t\trepeat with tCounter from 1 up to pOperand\n\t\t\tmultiply tTotal by tCounter\n\t\tend repeat\n\n\t\treturn tCounter\n\tend handler"
			}],
			"description":"Use the repeat with <Counter> structure to execute a set of statements until the value of <Counter> reaches or crosses (depending on iteration direction) the value of <Finish>. The counter is increased (or decreased) by <Step> on each iteration of the loop."
		},{
			"id":"builder-671",
			"name":"com.livecode.language",
			"display name":"com.livecode.language",
			"library":"builder",
			"type":"",
			"display syntax":[
				"com.livecode.language"
			],
			"associations":["com.livecode.language"]
		},{
			"id":"builder-672",
			"name":"repeattimes",
			"display name":"RepeatTimes",
			"library":"builder",
			"type":"control structure",
			"syntax":[
				"repeat <Count> times\n\t<StatementList>\nend repeat"
			],
			"display syntax":[
				"repeat <i>Count</i> times"
			],
			"associations":["com.livecode.language"],
			"summary":"Executes a list of statements a given number of times.",
			"parameters":[{
				"name":"Count",
				"type":"integer",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"StatementList",
				"type":"",
				"refparam":"false",
				"description":"A set of statements."
			}],
			"examples":[{
				"script":"public handler TwoToThePower(in pOperand as integer) as number\n\n\tif pOperand is 0 then\n\t\treturn 1\n\tend if\n\n\tvariable tCount as number\n\tput the abs of pOperand into tCount\n\n\tvariable tResult as number\n\tput 1 into tResult\n\trepeat tCount times\n\t\tmultiply tResult by 2\n\tend repeat\n\n\tif pOperand < 0 then\n\t\treturn 1 / tResult\n\tend if\n\n\treturn tResult\nend handler"
			}],
			"description":"Use the repeat <Count> times structure to execute a set of statements a given number of times, when the statements executed do not rely on knowing which iteration the repeat loop is on."
		},{
			"id":"builder-673",
			"name":"setto",
			"display name":"SetTo",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"set <targetContainer> to <sourceValue>"
			],
			"display syntax":[
				"set <i>targetContainer</i> to <i>sourceValue</i>"
			],
			"associations":["com.livecode.language"],
			"summary":"Put a value into a container.",
			"parameters":[{
				"name":"targetContainer",
				"type":"any",
				"refparam":"false",
				"description":"A valid target for <sourceValue>"
			},{
				"name":"sourceValue",
				"type":"any",
				"refparam":"false",
				"description":"The value to put into the <targetContainer>"
			}],
			"description":"Assigns the result of evaluating <sourceValue> to <targetContainer>.\n>*Note:* It is a checked runtime error for the source value's type to not be compatible with the target expression's type."
		},{
			"id":"builder-674",
			"name":"com.livecode.commercial.license",
			"display name":"com.livecode.commercial.license",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.commercial.license"
			],
			"associations":["com.livecode.commercial.license"],
			"summary":"This library provides license entitlement related operations for Extension Builder (commercial).\nIt remains in OpenXTalk for compatibility with LiveCode, but since this only applies to closed source usage\nit should be considered as deprecated in OpenXTalk builds and may be removed in the future.",
			"description":"This library provides license entitlement related operations for Extension Builder (commercial).\nIt remains in OpenXTalk for compatibility with LiveCode, but since this only applies to closed source usage\nit should be considered as deprecated in OpenXTalk builds and may be removed in the future."
		},{
			"id":"builder-675",
			"name":"ensurelicense",
			"display name":"EnsureLicense",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"ensure license for [ feature <Feature> of ] extension <Extension> [ or edition <Edition> ]"
			],
			"display syntax":[
				"ensure license for [ feature <i>Feature</i> of ] extension <i>Extension</i> [ or edition <i>Edition</i> ]"
			],
			"associations":["com.livecode.commercial.license"],
			"summary":"Throws if license is not satisfied",
			"examples":[{
				"script":"ensure license for edition \"indy\""
			},{
				"script":"ensure license for extension \"com.foo.bar\" or edition \"indy\""
			},{
				"script":"ensure license for feature \"baz\" of extension \"com.foo.bar\" or edition \"indy\""
			}],
			"description":"Causes an error to be thrown if the license requirement is not satisfied. All\nfurther calls to the module will then also cause an error to be thrown.",
			"tags":["license","license"]
		},{
			"id":"builder-676",
			"name":"licensededition",
			"display name":"LicensedEdition",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"licensed for edition <Edition>"
			],
			"display syntax":[
				"licensed for edition <i>Edition</i>"
			],
			"associations":["com.livecode.commercial.license"],
			"summary":"Returns true if licensed",
			"examples":[{
				"script":"variable tLicensed as Boolean\nput licensed for edition \"business\" into tLicensed"
			}],
			"description":"Returns true if the license is for the named editon or greater.",
			"tags":["license","license"]
		},{
			"id":"builder-677",
			"name":"licensedextension",
			"display name":"LicensedExtension",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"licensed for [ feature <Feature> of ] extension <Extension>"
			],
			"display syntax":[
				"licensed for [ feature <i>Feature</i> of ] extension <i>Extension</i>"
			],
			"associations":["com.livecode.commercial.license"],
			"summary":"Returns true if licensed",
			"examples":[{
				"script":"variable tLicensed as Boolean\nput licensed for extension \"com.foo.bar\" into tLicensed\nput licensed for feature \"baz\" of extension \"com.foo.bar\" into tLicensed"
			}],
			"description":"Returns true if the license includes the named extension or extension\nand feature.",
			"tags":["license","license"]
		},{
			"id":"builder-678",
			"name":"booleanisequaltoboolean",
			"display name":"BooleanIsEqualToBoolean",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.logic"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tBool is bool\nput true is true into tBool -- tBool is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> evaluates to the same value as <Right>."
			}],
			"description":"Determines whether <Left> and <Right> are equal or not.",
			"tags":["logic"]
		},{
			"id":"builder-679",
			"name":"booleanformattedasstring",
			"display name":"BooleanFormattedAsString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Operand> formatted as string"
			],
			"display syntax":[
				"<i>Operand</i> formatted as string"
			],
			"associations":["com.livecode.logic"],
			"summary":"Formats a boolean value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tBool as Boolean\nput (false is not not true) is false into tBool\nput tBool formatted as string into tString -- tString contains \"true\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"\"true\" or \"false\""
			}],
			"description":"Use <BooleanFormattedAsString> when you want to manipulate a boolean value as text."
		},{
			"id":"builder-680",
			"name":"logicnot",
			"display name":"LogicNot",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"not <Operand>"
			],
			"display syntax":[
				"not <i>Operand</i>"
			],
			"associations":["com.livecode.logic"],
			"summary":"Returns the boolean-logical value of the expression 'not <Operand>'",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a boolean value"
			}],
			"examples":[{
				"script":"variable tBool is bool\nput not not not not true into tBool is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"If the operand expression evaluates to true, the value of the expression is false.\n            Otherwise, the value of the expression is true."
			}],
			"description":"Returns the boolean-logical value of the expression 'not <Operand>'",
			"tags":["logic"]
		},{
			"id":"builder-681",
			"name":"booleanisnotequaltoboolean",
			"display name":"BooleanIsNotEqualToBoolean",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.logic"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tBool is bool\nput true is not false into tBool -- tBool is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> evaluates to the opposite boolean value as <Right>."
			}],
			"description":"Determines whether <Left> and <Right> are equal or not.",
			"tags":["logic"]
		},{
			"id":"builder-682",
			"name":"formatbooleanasstring",
			"display name":"FormatBooleanAsString",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"format <Operand> as string"
			],
			"display syntax":[
				"format <i>Operand</i> as string"
			],
			"associations":["com.livecode.logic"],
			"summary":"Formats a boolean value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a boolean value."
			}],
			"examples":[{
				"script":"variable tVar as String\nformat 1 = 0 as String into tVar\nput \"e\" into char 3 of tVar -- tVar is \"tree\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"\"true\" or \"false\""
			}],
			"description":"Use <FormatBooleanAsString> when you want to manipulate a boolean value as text."
		},{
			"id":"builder-683",
			"name":"stringparsedasboolean",
			"display name":"StringParsedAsBoolean",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Operand> parsed as boolean"
			],
			"display syntax":[
				"<i>Operand</i> parsed as boolean"
			],
			"associations":["com.livecode.logic"],
			"summary":"Parses a string as a boolean value",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tBool as optional Boolean\nput \"false\" into tString\nput tString parsed as boolean into tBool -- tBool contains false"
			},{
				"script":"variable tBool as optional Boolean\nput \"flase\" parsed as boolean into tBool -- tBool is nothing"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"true or false"
			}],
			"description":"Use <StringParsedAsBoolean> when you want to determine if a string contains \"true\" or \"false\"\n\n>*Note:* Only the strings \"true\" and \"false\" will parse to give a boolean value. Any other input will cause an error to be thrown."
		},{
			"id":"builder-684",
			"name":"parsestringasboolean",
			"display name":"ParseStringAsBoolean",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"parse <Operand> as boolean"
			],
			"display syntax":[
				"parse <i>Operand</i> as boolean"
			],
			"associations":["com.livecode.logic"],
			"summary":"Parses a string as a boolean value",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tBool as optional Boolean\ncombine [\"f\", \"a\", \"l\", \"s\" \"e\"] with \"\" into tString\nput tString parsed as boolean into tBool -- tBool contains false"
			},{
				"script":"variable tResult as String\nvariable tCheck as optional Boolean\nparse \"sdfsdf\" as boolean into tCheck\nif tCheck is nothing then\n\tput \"not a valid boolean\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"true or false"
			}],
			"description":"Use <StringParsedAsBoolean> when you want to determine if a string contains \"true\" or \"false\"\n\n>*Note:* Only the strings \"true\" and \"false\" will parse to give a boolean value. Any other input will cause an error to be thrown.\n"
		},{
			"id":"builder-685",
			"name":"com.livecode.logic",
			"display name":"com.livecode.logic",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.logic"
			],
			"associations":["com.livecode.logic"],
			"summary":"This library consists of the logical operations included in the standard library of Extension Builder.",
			"description":"This library consists of the logical operations included in the standard library of Extension Builder."
		},{
			"id":"builder-686",
			"name":"firstelementof",
			"display name":"FirstElementOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the first element of <Target>"
			],
			"display syntax":[
				"the first element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the first element in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"description":"Either locates the first element for use as the target container of another operation, or evaluates the first element as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["lists"]
		},{
			"id":"builder-687",
			"name":"com.livecode.list",
			"display name":"com.livecode.list",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.list"
			],
			"associations":["com.livecode.list"],
			"summary":"This library consists of the operations on lists included in the standard library of Extension Builder.",
			"description":"This library consists of the operations on lists included in the standard library of Extension Builder."
		},{
			"id":"builder-688",
			"name":"repeatforeachelementinlist",
			"display name":"RepeatForEachElementInList",
			"library":"builder",
			"type":"iterator",
			"syntax":[
				"element <Iterand>"
			],
			"display syntax":[
				"element <i>Iterand</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Repeat over the elements of a list",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"Any variable of appropriate type."
			}],
			"examples":[{
				"script":"    variable tList as List\n    put [1, 1, 2, 3, 5, 8, 13] into tList\n\n    variable tRelist as List\n    variable tElement as any\n    put the empty list into tRelist\n\n    repeat for each element tElement in tList\n        push tElement onto tRelist\n    end repeat\n\n    // tRelist is the same as tList"
			}],
			"description":"Use repeat for each to perform an operation on each element of a list. On each iteration, the Iterand will contain the next element of the list being iterated over.\n>*Note:* If <Iterand> is typed, then an error will be thrown if the list being iterated over contains any elements of a different type.",
			"tags":["lists","control structures"]
		},{
			"id":"builder-689",
			"name":"splicebeforeelementoflist",
			"display name":"SpliceBeforeElementOfList",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"splice <Source> before element <Index> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> before element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Inserts each of the elements of <Source> into <Target> before element at index <Index>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 2 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush 1 onto tVar2\npush 5 onto tVar2\n\nsplice tVar before element 2 of tVar2 -- tVar2 contains the list [1,2,3,4,5]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list.\n\n>*Note:* ```put tList before element 2 of tList2``` results in the insertion of tList **as an element**, i.e. tList2 becomes the list [element 1 of tList2,tList,element 2 of tList2, element 3 of tList2 ...]\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"builder-690",
			"name":"listoffset",
			"display name":"ListOffset",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\", \"c\"]\nput the offset of [\"b\",\"c\"] in tVar into tOffset\n-- tOffset contains 2\n\nput the last offset of [\"b\", \"c\"] in tVar into tOffset\n-- tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index from the start of <Haystack>."
			}],
			"description":"Use `the offset of` to find where a particular sub-list occurs within\na list.  <Haystack> is scanned for a sequence of elements that are\nequal to the elements of <Needle>, and the position of the start of\nthe sequence found is returned.  If neither the \"first offset\" nor\n\"last offset\" are specified, the index of the first matching sub-list\nfound is returned.  If no sub-list of <Haystack> is equal to <Needle>,\nthe return value is 0.",
			"tags":["lists"]
		},{
			"id":"builder-691",
			"name":"pushontolist",
			"display name":"PushOntoList",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"push <Value> onto ( front of | back of ) <Target>"
			],
			"display syntax":[
				"push <i>Value</i> onto ( front of | back of ) <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Pushes <Value> onto <Target>.",
			"parameters":[{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"something\" onto tVar\npush \"something else\" onto front of tVar\n\nvariable tResult as String\nif tVar[1] is \"something else\" then\n\tput \"success\" into tResult\nend if"
			}],
			"description":"When <Value> is pushed onto <Target>, <Value> (by default) becomes the tail of the list, with an index one greater than the previous tail.\nUse the 'front of' variant to push onto the front of a list instead.",
			"tags":["lists"]
		},{
			"id":"builder-692",
			"name":"listindexafter",
			"display name":"ListIndexAfter",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) index of <Needle> after <After> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) index of <i>Needle</i> after <i>After</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the tail of <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any value."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\"]\nput the index of \"b\" after 1 in tVar into tOffset\n--tOffset contains 2\n\nput the last index of \"b\" after 2 in tVar into tOffset\n--tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack> relative to <After>."
			}],
			"description":"Use `the index of‚Ä¶ after` to find where particular elements occur\nwithin a list.  Starting from but not including the position <After>,\n<Haystack> is scanned for an element that is equal to <Needle>, and\nthe position of the element found is returned.  If no element of\n<Haystack> is equal to <Needle>, the return value is 0.",
			"tags":["lists"]
		},{
			"id":"builder-693",
			"name":"concatenatelists",
			"display name":"ConcatenateLists",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> & <Right>"
			],
			"display syntax":[
				"<i>Left</i> & <i>Right</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Concatenate two lists.\nLeftList:The List to go at the start of the resulting list.\nRightList:The List to go at the end of the resulting list.",
			"examples":[{
				"script":"variable tVar\nput [\"a\", \"b\"] & [\"c\", \"d\"] into tVar\n-- tVar contains [\"a\", \"b\", \"c\", \"d\"]"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A newly created List built from <LeftList> and <RightList>."
			}],
			"description":"Returns a newly-created list consisting of the elements of <LeftList>\nfollowed by the elements of <RightList>.",
			"tags":["lists"]
		},{
			"id":"builder-694",
			"name":"reverseelementsoflist",
			"display name":"ReverseElementsOfList",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"reverse <Target>"
			],
			"display syntax":[
				"reverse <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Reverse a list",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list"
			}],
			"examples":[{
				"script":"variable tList\nput [1, 2, 3] into tList\nreverse tList\nexpect that tList is [3, 2, 1]"
			}],
			"description":"Reverses the order of elements in the <Target>.",
			"tags":["lists"]
		},{
			"id":"builder-695",
			"name":"deletesingletonelementof",
			"display name":"DeleteSingletonElementOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete element <Index> of <Target>"
			],
			"display syntax":[
				"delete element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the element at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the element at the given index from the list.\n\n>*Note:* It is an error if either <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"builder-696",
			"name":"singletonelementoflist",
			"display name":"SingletonElementOfList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"element <Index> of <Target>"
			],
			"display syntax":[
				"element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the element at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1,2,3] into tVar\nput \"A\" into element 1 of tVar -- tVar is [\"A\",2,3]\n\nvariable tNum as Number\nput element 2 of tVar into tNum -- tNum is 2"
			}],
			"description":"Either locates the element container at the given index for use as the target container of another operation, or evaluates the element at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"builder-697",
			"name":"listendswithlist",
			"display name":"ListEndsWithList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Source> ends with <Suffix>"
			],
			"display syntax":[
				"<i>Source</i> ends with <i>Suffix</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Source> ends with <Suffix>\nPrefix:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1, 2, 3, 4, 5] into tVar\n\nvariable tEnds as Boolean\n// put tList ends with tList[5] into tEnds -- error: tList[5] is not a list\n\nput tList ends with element 1 to 5 of tList into tEnds -- tEnds is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> ends with <Suffix>."
			}],
			"description":"<Source> ends with <Suffix> if and only if the elements of <Suffix> occur as a final subsequence of the elements of <Source>.\n\n>*Note:* Since the empty list is a final subsequence of every list, every list ends with the empty list.",
			"tags":["lists"]
		},{
			"id":"builder-698",
			"name":"listindexbefore",
			"display name":"ListIndexBefore",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) index of <Needle> before <Before> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) index of <i>Needle</i> before <i>Before</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the head of <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any value."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\"]\nput the index of \"b\" before 2 in tVar into tOffset\n--tOffset contains 0\n\nput the first index of \"b\" before 5 in tVar into tOffset\n--tOffset contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack>."
			}],
			"description":"Use `the index of‚Ä¶ before` to find where particular elements occur\nwithin a list.  <Haystack> is scanned for an element that is equal to\n<Needle>, stopping before the position <Before>, and the position of\nthe element found is returned.  If no element of <Haystack> is equal\nto <Needle>, the return value is 0.  If neither \"first\" nor \"last\" is\nspecified, the last matching element is found.",
			"tags":["lists"]
		},{
			"id":"builder-699",
			"name":"spliceintorangeoflist",
			"display name":"SpliceIntoRangeOfList",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"splice <Source> into element <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> into element <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Removes the elements of <Target> from <Start > to <Finish> and inserts each of the elements of\n                    <Source> into <Target> at <Start>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 1 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush \"these\" onto tVar2\npush \"are\" onto tVar2\npush \"unwanted\" onto tVar2\npush 4 onto tVar2\n\nsplice tVar into element 1 to 3 of tVar2 -- tVar2 contains the list [1,2,3,4]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list.\n\n>*Note:* ```put tList into element 1 to 3 of tList2``` results in the removal of elements 1 to 3 of tList2 and the insertion of tList **as an element**, i.e. tList2 becomes the list [tList,element 4 of tList2, element 5 of tList2 ...]\n\n>*Note:* It is an error if either <Start> or <Finish> is out of range.",
			"tags":["lists"]
		},{
			"id":"builder-700",
			"name":"poplist",
			"display name":"PopList",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"pop ( front of | back of ) <Source>"
			],
			"display syntax":[
				"pop ( front of | back of ) <i>Source</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Pops the last element from <Source> into <Target>\nTarget:An expression which evaluates to a container.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"something\" onto tVar\npush \"something else\" onto tVar\n\nvariable tPopped as String\npop tVar into tPopped -- tPopped contains \"something else\""
			},{
				"script":"variable tList as List\nput [1,2,3] into tList\nvariable tNum as Number\npop front of tList into tNum -- tNum is 1, tList is [2,3]"
			}],
			"description":"When <Source> is popped into <Target>, the last element of the list <Source> is removed and put into the container <Target>.\nUse the 'front of' variant to pop from the front of a list instead.",
			"tags":["lists"]
		},{
			"id":"builder-701",
			"name":"headoflist",
			"display name":"HeadOfList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the head of <Target>"
			],
			"display syntax":[
				"the head of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Returns the first element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"first element\" onto tVar\n\nvariable tResult as Boolean\nif the head of tVar is \"first element\" then\n\tput \"success\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The first element of <Target>"
			}],
			"description":"Returns the first element of the list <Target> without modifying <Target>.\n```\tthe head of tVar```\nis equivalent to using the <IndexedElementOfList> operator with index 1\n```\ttVar[1]```",
			"references":{
				"operator":["IndexedElementOfList"]
			},
			"tags":["lists"]
		},{
			"id":"builder-702",
			"name":"spliceintoelementoflist",
			"display name":"SpliceIntoElementOfList",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"splice <Source> into element <Index> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> into element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Removes the element of <Target> at <Index> and inserts each of the elements of <Source> into\n                    <Target> at <Index>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 1 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush \"this is unwanted\" onto tVar2\npush 4 onto tVar2\n\nsplice tVar into element 1 of tVar2 -- tVar2 contains the list [1,2,3,4]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list.\n\n>*Note:* ```put tList into element 1 of tList2``` results in the removal of element 1 of tList2 and the insertion of tList **as an element**, i.e. tList2 becomes the list [tList,element 2 of tList2, element 3 of tList2 ...]\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"builder-703",
			"name":"listcontainselements",
			"display name":"ListContainsElements",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> contains <Needle>"
			],
			"display syntax":[
				"<i>Target</i> contains <i>Needle</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines if <Target> contains <Needle> as a subsequence.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"Any expression which evaluates to a list."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [ \"a\", \"b\", \"c\", \"d\" ] into tList\n\nvariable tContains as Boolean\n\n// put tList contains tList[1] into tContains -- error: tList[1] is not a list\n\nput tList contains element 1 to 2 of tList into tContains -- tContains is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Target> contains <Needle>."
			}],
			"description":"<Target> contains <Needle> if and only if the elements of <Needle> occur as a subsequence of the elements of <Target>.\n\n>*Note:* Since \"\" is a subsequence of elements of every list, every list contains the empty list.",
			"tags":["lists"]
		},{
			"id":"builder-704",
			"name":"emptylist",
			"display name":"EmptyList",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the empty list"
			],
			"display syntax":[
				"the empty list"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the list of length zero.",
			"examples":[{
				"script":"variable tVar as List\nvariable tCount as Number\nput the empty list into tVar\nput the number of elements in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty list``` to initialise a list variable.",
			"tags":["lists"]
		},{
			"id":"builder-705",
			"name":"countelementsoflist",
			"display name":"CountElementsOfList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the number of elements in <Target>"
			],
			"display syntax":[
				"the number of elements in <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Returns the number of elements in <Target>",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1,2,3,4,5] into tVar\nvariable tNum as Number\nput the number of elements in tVar into tNum -- tNum is 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of elements in the list <Target>."
			}],
			"description":"Returns the number of elements in the list.",
			"tags":["lists"]
		},{
			"id":"builder-706",
			"name":"deleterangeelementof",
			"display name":"DeleteRangeElementOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete element <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete element <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the elements between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the elements between the given indices from the list.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["lists"]
		},{
			"id":"builder-707",
			"name":"indexedelementoflist",
			"display name":"IndexedElementOfList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Target> [ <Index> ]"
			],
			"display syntax":[
				"<i>Target</i> [ <i>Index</i> ]"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the element at index <Index> in <Target>.\nSynonym:SingletonElementOf",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1,2,3] into tVar\nput \"A\" into tVar[1] -- tVar is [\"A\",2,3]\n\nvariable tNum as Number\nput tVar[2] into tNum -- tNum is 2"
			}],
			"description":"Either locates the element container at the given index for use as the target container of another operation, or evaluates the element at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"builder-708",
			"name":"tailoflist",
			"display name":"TailOfList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the tail of <Target>"
			],
			"display syntax":[
				"the tail of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Returns the last element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\npush \"first element\" onto tVar\npush \"last element\" onto tVar\n\nvariable tResult as String\nif the tail of tVar is \"last element\" then\n\tput \"success\" into tResult\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The last element of <Target>"
			}],
			"description":"Returns the first element of the list <Target> without modifying <Target>.\n```\tthe tail of tVar```\nis equivalent to using the <IndexedElementOfList> operator with index -1\n```\ttVar[-1]```",
			"references":{
				"operator":["IndexedElementOfList"]
			},
			"tags":["lists"]
		},{
			"id":"builder-709",
			"name":"listislist",
			"display name":"ListIsList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [\"a\", \"b\", \"c\"] into tList\nvariable tIs as Boolean\n\nput tList is [\"A\", \"b\", \"c\"] into tIs -- tIs is false\nput tList is element 1 to -1 of tList into tIs -- tIs is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is identical to <Right>."
			}],
			"description":"Two lists are equal if each corresponding element is of comparable type, and if the default equality of that type holds between the elements.\nIn particular, this means that comparison between string elements is case sensitive.",
			"tags":["lists"]
		},{
			"id":"builder-710",
			"name":"listoffsetafter",
			"display name":"ListOffsetAfter",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> after <After> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> after <i>After</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the tail of <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any list."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\", \"c\"]\nput the offset of [\"b\",\"c\"] after 1 in tVar into tOffset\n--tOffset contains 2\n\nput the last offset of [\"b\",\"c\"] after 1 in tVar into tOffset\n--tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack> relative to <After>."
			}],
			"description":"Use `the offset of‚Ä¶ after` to find where a particular sub-list occurs\nwithin a list.  Starting from but not including the position <After>,\n<Haystack> is scanned for an sequence of elements that are equal to\nthe elements of <Needle>, and the position of the start of the\nsequence found is returned.  If neither the \"first offset\" nor \"last\noffset\" are specified, the position of the first matching sub-list\nfound is returned.  If no sub-list of <Haystack> starting after the\nposition <After> is equal to <Needle>, the return value is 0.",
			"tags":["lists"]
		},{
			"id":"builder-711",
			"name":"listindex",
			"display name":"ListIndex",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) index of <Needle> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) index of <i>Needle</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within <Haystack>\nTarget:An expression which evaluates to a list.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to any value."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\"]\nput the index of \"b\" in tVar into tOffset\n-- tOffset contains 2\n\nput the last index of \"b\" in tVar into tOffset\n-- tOffset contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index from the start of <Haystack>."
			}],
			"description":"Use `the index of` to find where particular elements occur within a\nlist.  <Haystack> is scanned for an element that is equal to <Needle>,\nand the position of the element found is returned.  If neither the\n\"first index\" nor \"last index\" are specified, the index of the first\nelement found is returned.  If no element of <Haystack> is equal to\n<Needle>, the return value is 0.",
			"tags":["lists"]
		},{
			"id":"builder-712",
			"name":"listoffsetbefore",
			"display name":"ListOffsetBefore",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of <Needle> before <Before> in <Haystack>"
			],
			"display syntax":[
				"the ( first | last ) offset of <i>Needle</i> before <i>Before</i> in <i>Haystack</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Find the first or last occurrence of <Needle> within the head of <Haystack>\nTarget:An expression which evaluates to a List.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to List."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid index in Target."
			}],
			"examples":[{
				"script":"variable tVar as List\nvariable tOffset as Number\nput [\"a\", \"b\", \"c\", \"d\", \"b\",\"c\"]\nput the offset of [\"b\",\"c\"] before 5 in tVar into tOffset\n--tOffset contains 2\n\nput the first offset of [\"b\",\"c\"] before 6 in tVar into tOffset\n--tOffset contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the index in <Haystack>."
			}],
			"description":"Use `the offset of‚Ä¶ before` to find where a particular sub-list occurs\nwithin a list.  <Haystack> is scanned for a sequence of elements that\nare equal to the elements of <Needle>, stopping before the position\n<Before>, and the position of the start of the sequence found is\nreturned.  If no sub-list of <Haystack> before the position <Before>\nis equal to <Needle>, the return value is 0.  If neither \"first\" nor\n\"last\" is specified, the last matching subsequence is found.",
			"tags":["lists"]
		},{
			"id":"builder-713",
			"name":"deletefirstelementof",
			"display name":"DeleteFirstElementOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete the first element of <Target>"
			],
			"display syntax":[
				"delete the first element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the first element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the first element of <Target>.\n\n>*Note:* It is an error if <Target> is the empty list.",
			"tags":["lists"]
		},{
			"id":"builder-714",
			"name":"spliceafterelementoflist",
			"display name":"SpliceAfterElementOfList",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"splice <Source> after element <Index> of <Target>"
			],
			"display syntax":[
				"splice <i>Source</i> after element <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Inserts each of the elements of <Source> into <Target> after element at index <Index>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput the empty list into tVar\n\nvariable tCount as Number\nput 2 into tCount\nrepeat 3 times\n\tpush tCount onto tVar\nend repeat\n\nvariable tVar2 as List\npush 1 onto tVar2\npush 5 onto tVar2\n\nsplice tVar after element 1 of tVar2 -- tVar2 contains the list [1,2,3,4,5]"
			}],
			"description":"Use the splice syntax to insert the elements of one list into another list.\n\n>*Note:* ```put tList after element 1 of tList2``` results in the insertion of tList **as an element**, i.e. tList2 becomes the list [element 1 of tList2,tList,element 2 of tList2, element 3 of tList2 ...]\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["lists"]
		},{
			"id":"builder-715",
			"name":"listbeginswithlist",
			"display name":"ListBeginsWithList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Source> begins with <Prefix>"
			],
			"display syntax":[
				"<i>Source</i> begins with <i>Prefix</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Source> begins with <Prefix>",
			"parameters":[{
				"name":"Prefix",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tVar as List\nput [1, 2, 3, 4, 5] into tVar\n\nvariable tBegins as Boolean\n// put tList begins with tList[1] into tBegins -- error: tList[1] is not a list\n\nput tList begins with [1, 2] into tBegins -- tBegins is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Source> begins with <Prefix>."
			}],
			"description":"<Source> begins with <Prefix> if and only if the elements of <Prefix> occur as an initial subsequence of the elements of <Source>.\n\n>*Note:* Since the empty list is an initial subsequence of every list, every list begins with the empty list.",
			"tags":["lists"]
		},{
			"id":"builder-716",
			"name":"rangeelementsoflist",
			"display name":"RangeElementsOfList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"element <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"element <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the elements between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [1,2,3] into tList\n\nput tList into element 1 to 2 of tList -- tList is [[1,2,3],3]"
			}],
			"description":"Either locates the element containers between the given indices for use as a list container for the target of another operation, or evaluates the elements between the given indices as a list.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.\n\n>*Note:* If a list is the source of ``put tList into element 1 to 3 of tOtherList```, then tList is *not* inserted element-wise. The entire list is inserted as an element, so that element 1 of tOtherList is tList.",
			"tags":["lists"]
		},{
			"id":"builder-717",
			"name":"elementisinlist",
			"display name":"ElementIsInList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Needle> is in <Target>"
			],
			"display syntax":[
				"<i>Needle</i> is in <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines if a given element is in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"Any expression."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [ \"a\", \"b\", \"c\", \"d\" ] into tList\n\nvariable tIsIn as Boolean\nput \"a\" is in tList into tIsIn -- tIsIn contains true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Needle> can be found among the elements of <Target>."
			}],
			"description":"<Needle> must be an element of <Target> rather than a sublist, or contained within a list element of <Target>.",
			"tags":["lists"]
		},{
			"id":"builder-718",
			"name":"lastelementof",
			"display name":"LastElementOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the last element of <Target>"
			],
			"display syntax":[
				"the last element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Designates the last element in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"description":"Either locates the first element for use as the target container of another operation, or evaluates the first element as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["lists"]
		},{
			"id":"builder-719",
			"name":"deletelastelementof",
			"display name":"DeleteLastElementOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete the last element of <Target>"
			],
			"display syntax":[
				"delete the last element of <i>Target</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Deletes the last element of <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A list container."
			}],
			"description":"Removes the last element of <Target>.\n\n>*Note:* It is an error if <Target> is the empty list.",
			"tags":["lists"]
		},{
			"id":"builder-720",
			"name":"listisnotlist",
			"display name":"ListIsNotList",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.list"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a list."
			}],
			"examples":[{
				"script":"variable tList as List\nput [\"a\", \"b\", \"c\"] into tList\nvariable tIsNot as Boolean\n\nput tList is not [\"A\", \"b\", \"c\"] into tIsNot -- tIs is true"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is not identical to <Right>."
			}],
			"description":"Two lists are not equal if any corresponding elements are of non-comparable types, or if the default equality of that type does not holds between the elements.\nIn particular, this means that comparison between string elements is case sensitive.",
			"tags":["lists"]
		},{
			"id":"builder-721",
			"name":"paintplaceholderimage",
			"display name":"paintPlaceholderImage",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"paintPlaceholderImage(<pCanvas>,<pBounds>,<pSVGIcon>,<pLabel>,<pFont>,<pColor>)"
			],
			"display syntax":[
				"paintPlaceholderImage(<i>pCanvas</i>,<i>pBounds</i>,<i>pSVGIcon</i>,<i>pLabel</i>,<i>pFont</i>,<i>pColor</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Paint a placeholder image using an SVG icon and name",
			"parameters":[{
				"name":"pCanvas",
				"type":"",
				"refparam":"false",
				"description":"The canvas on which to draw the placeholder"
			},{
				"name":"pBounds",
				"type":"",
				"refparam":"false",
				"description":"The rectangle in which to draw the placeholder on the canvas"
			},{
				"name":"pSVGIcon",
				"type":"",
				"refparam":"false",
				"description":"The placeholder icon to use"
			},{
				"name":"pLabel",
				"type":"",
				"refparam":"false",
				"description":"The label to use"
			},{
				"name":"pFont",
				"type":"",
				"refparam":"false",
				"description":"A font to draw the label with. If none specified, Arial 14pt is used."
			},{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"A color to draw the label with. If none specified, #404040 is used"
			}],
			"description":"Use the <paintPlaceHolder> image handler to draw a placeholder on the\ngiven canvas when, for example, the widget shouldn't be displayed as\nactive in browse mode, or is not available on the current platform.\n"
		},{
			"id":"builder-722",
			"name":"constrainpathtorect",
			"display name":"constrainPathToRect",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"constrainPathToRect(<pTargetRect>,<xPath>)"
			],
			"display syntax":[
				"constrainPathToRect(<i>pTargetRect</i>,<i>xPath</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Scales and translates a path to fit within a rectangle",
			"parameters":[{
				"name":"pTargetRect",
				"type":"",
				"refparam":"false",
				"description":"The rectangle to fit the path within"
			},{
				"name":"xPath",
				"type":"",
				"refparam":"false",
				"description":"The path to transform"
			}],
			"examples":[{
				"script":"use com.livecode.library.iconsvg\n\npublic handler OnPaint() returns nothing\n\t-- get the 'shopping cart' icon from the icon library\n\tvariable tPathString as String\n \tput iconSVGPathFromName(\"shopping cart\") into tPathString\n\n\t-- create the path\n\tvariable tPath as Path\n\tput path tPathString into tPath\n\n\t-- scale the path to fit within the bounds of the widget\n\tconstrainPathToRect(my bounds, tPath)\n\n\t-- fill the path\n\tfill tPath on this canvas\nend handler"
			}],
			"description":"Scales and transforms <xPath> so that it fits within <pTargetRect> whilst maintaining its\naspect ratio."
		},{
			"id":"builder-723",
			"name":"stringtocolor",
			"display name":"stringToColor",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"stringToColor(<pString>)"
			],
			"display syntax":[
				"stringToColor(<i>pString</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Converts a string to a color",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"A comma delimited string representing a color in RGB / RGBA format"
			}],
			"examples":[{
				"script":"property widgetColor \tget getColor\tset setColor\nmetadata widgetColor.editor is \"com.livecode.pi.colorwithalpha\"\n\nprivate variable mColor as Color\n\npublic handler OnLoad(in pProperties as Array)\n\tsetColor(pProperties[\"color\"])\nend handler\n\npublic handler setColor(in pColor as String)\n\tput stringToColor(pColor) into mColor\n\tredraw all\nend handler"
			}],
			"description":"Use the <stringToColor> handler when receiving colors from a script\nvia a property setter, or from the widget's stored properties array when loading."
		},{
			"id":"builder-724",
			"name":"inttostring",
			"display name":"intToString",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"intToString(<pNumber>)"
			],
			"display syntax":[
				"intToString(<i>pNumber</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Formats an integer as a string",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The integer to format"
			}],
			"examples":[{
				"script":"log 5 formatted as string \t\t\t-- logs 5.000000\nlog intToString(5)\t\t\t\t\t\t -- logs 5"
			}],
			"description":"<intToString> formats an integer as a string, removing the decimal place and any zeros\nthereafter."
		},{
			"id":"builder-725",
			"name":"stripzeros",
			"display name":"stripZeros",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"stripZeros(<pString>)"
			],
			"display syntax":[
				"stripZeros(<i>pString</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Removes any superfluous zeros and decimal places.",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The string to remove zeros from"
			}],
			"examples":[{
				"script":"log stripZeros(\"5.0000000\")\t\t\t-- logs 5\nlog stripZeros(\"5.432100\")\t\t\t-- logs 5.4321"
			}],
			"description":"Use <stripZeros> to remove any superfluous zeros and decimal places from <pString>\nwhich have been added by the\n\n`tNumber formatted as string`\n\nsyntax."
		},{
			"id":"builder-726",
			"name":"colortostring",
			"display name":"colorToString",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"colorToString(<pColor>,<pIncludeAlpha>)"
			],
			"display syntax":[
				"colorToString(<i>pColor</i>,<i>pIncludeAlpha</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Converts a color to a string representing the color",
			"parameters":[{
				"name":"pColor",
				"type":"",
				"refparam":"false",
				"description":"A value of type com.livecode.canvas.Color"
			},{
				"name":"pIncludeAlpha",
				"type":"",
				"refparam":"false",
				"description":"Whether to include the alpha value in the string or not"
			}],
			"examples":[{
				"script":"property widgetColor \tget getColor\nmetadata widgetColor.editor is \"com.livecode.pi.colorwithalpha\"\n\nprivate variable mColor as Color\n\npublic handler OnSave(out rProperties as Array)\n\tput colorToString(mColor, true) into rProperties[\"color with alpha\"]\nend handler\n\npublic handler getColor() returns String\n\t-- the editor used for the widgetColor property expects the alpha value to be included\n\treturn colorToString(mColor, true)\nend handler"
			},{
				"script":"log colorToString(color [0.4,0.4,0.4,0.4])\t\t\t-- logs \"102,102,102,102\""
			}],
			"description":"Use the <colorToString> handler when logging colors, returning them to a script\nvia a property getter, or serialising them in the widget's stored properties array for saving."
		},{
			"id":"builder-727",
			"name":"placeholdericon",
			"display name":"placeholderIcon",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"placeholderIcon(<pOS>)"
			],
			"display syntax":[
				"placeholderIcon(<i>pOS</i>)"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Returns a placeholder icon for a given operating system",
			"parameters":[{
				"name":"pOS",
				"type":"",
				"refparam":"false",
				"description":"The operating system.\n- \"mac\"\n- \"ios\"\n- \"android\"\n- \"windows\"\n- \"linux\"\n- \"emscripten\""
			}],
			"description":"Use <placeholderIcon> to fetch an SVG icon that can be\nused as the placeholder image for a widget that is native to, and\ntherefore only available on, a given operating system."
		},{
			"id":"builder-728",
			"name":"getnativethemename",
			"display name":"getNativeThemeName",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"getNativeThemeName()"
			],
			"display syntax":[
				"getNativeThemeName()"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"Get the canonical name of the current \"native\" mobile theme",
			"examples":[{
				"script":"variable tNativeTheme as String\nput getNativeThemeName() into tNativeTheme\n\nif tNativeTheme is \"android\" then\n\t-- Draw Android themed UI\nelse\n\t-- Draw iOS themed UI\nend if"
			}],
			"description":"Returns the name of the current theme that should be used when the theme is\n\"native\".\n\nCurrently, this will return either \"iOS\" or \"Android\"."
		},{
			"id":"builder-729",
			"name":"com.livecode.library.widgetutils",
			"display name":"com.livecode.library.widgetutils",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.library.widgetutils"
			],
			"associations":["com.livecode.library.widgetutils"],
			"summary":"A library of utility handlers for functions commonly needed by widgets.",
			"description":"A library of utility handlers for functions commonly needed by widgets."
		},{
			"id":"builder-730",
			"name":"evaljavascript",
			"display name":"EvalJavaScript",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"EvalJavaScript(<pScript>)"
			],
			"display syntax":[
				"EvalJavaScript(<i>pScript</i>)"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"Evaluate JavaScript code within the browser",
			"parameters":[{
				"name":"pScript",
				"type":"",
				"refparam":"false",
				"description":"The script to evaluate"
			}],
			"examples":[{
				"script":"public handler GetInputText() returns String\n\treturn EvalJavaScript(\"document.getElementById('myText').value\")\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A value of any type"
			}],
			"description":"Use <EvalJavaScript> to get the result of running a block of JavaScript code\n"
		},{
			"id":"builder-731",
			"name":"com.livecode.emscripten",
			"display name":"com.livecode.emscripten",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.emscripten"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"This module provides utility handlers for converting to and from Emscripten types.",
			"description":"This module provides utility handlers for converting to and from Emscripten types."
		},{
			"id":"builder-732",
			"name":"evaljavascriptwitharguments",
			"display name":"EvalJavaScriptWithArguments",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"EvalJavaScriptWithArguments(<pScript>,<pArgs>)"
			],
			"display syntax":[
				"EvalJavaScriptWithArguments(<i>pScript</i>,<i>pArgs</i>)"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"Evaluate JavaScript code within the browser with arguments",
			"parameters":[{
				"name":"pScript",
				"type":"",
				"refparam":"false",
				"description":"The script to evaluate"
			},{
				"name":"pArgs",
				"type":"",
				"refparam":"false",
				"description":"The list of arguments to pass to the script"
			}],
			"examples":[{
				"script":"variable mButton as JSObject\n\npublic handler SetButtonText(in pText as String)\n\tEvalJavaScriptWithArguments(\"arguments[0].innerHTML = arguments[1]\", [mButton, pText])\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A value of any type"
			}],
			"description":"Use <EvalJavaScriptWithArguments> to get the result of running a block of JavaScript code, where you need to pass values to the script."
		},{
			"id":"builder-733",
			"name":"handlerasjsfunction",
			"display name":"HandlerAsJSFunction",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"HandlerAsJSFunction(<pHandler>)"
			],
			"display syntax":[
				"HandlerAsJSFunction(<i>pHandler</i>)"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"Wrap a Extension Builder handler within a JavaScript function, suitable for passing as an event handler.",
			"parameters":[{
				"name":"pHandler",
				"type":"",
				"refparam":"false",
				"description":"The handler to wrap"
			}],
			"examples":[{
				"script":"variable mButton as JSObject\nvariable mOnClickHandler as JSObject\n\nprivate handler OnJSClick(pEvent as JSObject) returns nothing\n\tSetLabel(\"Clicked!\")\nend handler\n\nprivate handler SetJSEventHandler(in pElement as JSObject, in pEvent as String, in pHandler as JSObject)\n\tEvalJavaScriptWithArguments(\"arguments[0].addEventListener(arguments[1], arguments[2]);\", [pElement, pEvent, pHandler])\nend handler\n\nprivate handler SetupEventHandler()\n\tput HandlerAsJSFunction(OnJSClick) into mOnClickHandler\n\tSetJSEventHandler(mButton, \"click\", mOnClickHandler)\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A JavaScript function object, wrapping the handler"
			}],
			"description":"Use <HandlerAsJSFunction> to convert a handler reference to a JavaScript function object reference."
		},{
			"id":"builder-734",
			"name":"pointerfromjsobject",
			"display name":"PointerFromJSObject",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"PointerFromJSObject(<pObj>)"
			],
			"display syntax":[
				"PointerFromJSObject(<i>pObj</i>)"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"Convert a JavaScript object value to a pointer",
			"parameters":[{
				"name":"pObj",
				"type":"",
				"refparam":"false",
				"description":"The object to convert"
			}],
			"examples":[{
				"script":"public handler InitNativeButton()\n\tvariable tButton as JSObject\n\tput EvalJavaScript(\"document.createElement('button')\") into tButton\n\n\tvariable tPointer as Pointer\n\tput PointerFromJSObject(tButton) into tPointer\n\n\tset my native layer to tPointer\nend handler"
			}],
			"description":"Use <PointerFromJSObject> to convert a JavaScript object to a variable of type Pointer."
		},{
			"id":"builder-735",
			"name":"pointertojsobject",
			"display name":"PointerToJSObject",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"PointerToJSObject(<pPointer>)"
			],
			"display syntax":[
				"PointerToJSObject(<i>pPointer</i>)"
			],
			"associations":["com.livecode.emscripten"],
			"summary":"Convert a Pointer into a JavaScript object",
			"parameters":[{
				"name":"pPointer",
				"type":"",
				"refparam":"false",
				"description":"The Pointer to convert"
			}],
			"examples":[{
				"script":"variable mButtonPointer as Pointer\n\npublic handler SetButtonText(in pText as String)\n\tvariable tJSButton as JSObject\n\tput PointerToJSObject(mButtonPointer) into tJSButton\n\n\tEvalJavaScriptWithArguments(\"arguments[0].innerHTML = arguments[1]\", [tJSButton, pText])\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An value of type JSObject"
			}],
			"description":"Use <PointerToJSObject> to convert a variable of type Pointer to a JavaScript object."
		},{
			"id":"builder-736",
			"name":"numbertonsnumber",
			"display name":"NumberToNSNumber",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"NumberToNSNumber(<pNumber>)"
			],
			"display syntax":[
				"NumberToNSNumber(<i>pNumber</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Number into an Objective-C number",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The Number to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSNumber\n\nDescription\nUse <NumberToNSNumber> to convert a variable of type Number to an Objective-C\nnumber object (NSNumber)."
			}],
			"description":"Convert a Number into an Objective-C number"
		},{
			"id":"builder-737",
			"name":"listfromnsarray",
			"display name":"ListFromNSArray",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"ListFromNSArray(<pObjcArray>)"
			],
			"display syntax":[
				"ListFromNSArray(<i>pObjcArray</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C array into a List",
			"parameters":[{
				"name":"pObjcNumber",
				"type":"",
				"refparam":"false",
				"description":"The NSArray to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Number value\n\nDescription\nUse <ListFromNSArray> to convert an Objective-C array object (NSArray) to\na variable of type List."
			}],
			"description":"Convert a Objective-C array into a List"
		},{
			"id":"builder-738",
			"name":"createobjcinformaldelegatewithcontext",
			"display name":"CreateObjcInformalDelegateWithContext",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"CreateObjcInformalDelegateWithContext(<pProtocol>,<pHandlerMapping>,<pContext>)"
			],
			"display syntax":[
				"CreateObjcInformalDelegateWithContext(<i>pProtocol</i>,<i>pHandlerMapping</i>,<i>pContext</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of an informal protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"A list of foreign handlers which bind to protocol methods"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			}],
			"examples":[{
				"script":"foreign handler Objc_NSPortMessageGetMsgId(in pMessage as ObjcId) returns UInt32 \\\n    binds to \"objc:NSPort.-msgid\"\n\nhandler HandlePortMessageCallback(in pPortIndex as Integer, in pMessage as ObjcId) returns nothing\n    post \"portMessage\" with [mPortList[pPortIndex][\"name\"], \\\n                             Objc_NSPortMessageGetMsgId(pMessage)]\nend handler\n\nforeign handler Objc_NSPortDelegateHandlePortMessage(in pTarget as ObjcId, in pPortMessage as ObjcId) returns nothing \\\n    binds to \"objc:.-handlePortMessage:\"\n\npublic handler GetNSPortDelegate(in pPortIndex as Integer)\n    return CreateObjcInformalDelegateWithContext([Objc_NSPortDelegateHandlePortMessage], \\\n                                                 { \"handlePortMessage:\": \\\n                                                   HandlePortMessageCalback }, \\\n                                                 pPortIndex)\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcInformalDelegateWithContext> handler to create instances of \nObjective-C delegate classes with LCB implementations of protocol \nmethods, when the Protocol object cannot be found at runtime. This \noccurs for example when all of the protocol methods are optional. \n\nInstead of a protocol name (as with <CreateObjcDelegateWithContext>), \nthe <pProtocol> argument of <CreateObjcInformalDelegateWithContext> must \nbe a proper list of foreign handlers for each of the methods of the \nprotocol for which LCB callbacks are provided in the <pHandlerMapping> \narray.\n\nOnce created an informal delegate can be set in the usual way on an \ninstance of the appropriate class (by binding to `-setDelegate:`), \ntypically so that callbacks triggered by user interaction with a widget \ncan be handled in LCB.\n\nIf no context is required to be passed as a parameter to the callback,\nuse <CreateObjcInformalDelegate>.\n\nIf the protocol can be resolved at runtime, it is generally easier to \nuse the <CreateObjcDelegateWithContext> handler.",
			"references":{
				"handler":["CreateObjcDelegate","CreateObjcDelegateWithContext","CreateObjcInformalDelegate"]
			}
		},{
			"id":"builder-739",
			"name":"createobjcdelegate",
			"display name":"CreateObjcDelegate",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"CreateObjcDelegate(<pProtocol>,<pHandlerMapping>)"
			],
			"display syntax":[
				"CreateObjcDelegate(<i>pProtocol</i>,<i>pHandlerMapping</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of a protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"The name of the protocol"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			}],
			"examples":[{
				"script":"handler ControlIsValidObjectCallback(in pControl as ObjcId, in pObject as ObjcId) returns CSChar\n    return 1\nend handler\n\npublic handler GetNSControlTextEditingDelegate() returns ObjcObject\n    return CreateObjcDelegate(\"NSControlTextEditingDelegate\", \\\n                              { \"control:isValidObject:\": \\\n                                ControlIsValidObjectCallback })\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcDelegate> handler to create instances of Objective-C \ndelegate classes with LCB implementations of protocol methods. Once \ncreated these can be set in the usual way on an instance of the \nappropriate class (by binding to `-setDelegate:`), typically so that \ncallbacks triggered by user interaction with a widget can be handled in\nLCB.\n\nIf any context is required to be passed as a parameter to the callback,\nuse <CreateObjcDelegateWithContext>.\n\nSome protocols consist of purely optional methods. In this case the \ninformation about the protocol's methods are not available from the     \nobjective-c runtime API. In this situation <CreateObjcInformalDelegate> \nshould be used instead.",
			"references":{
				"handler":["CreateObjcDelegateWithContext","CreateObjcInformalDelegate","CreateObjcInformalDelegateWithContext"]
			}
		},{
			"id":"builder-740",
			"name":"arrayfromnsdictionary",
			"display name":"ArrayFromNSDictionary",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"ArrayFromNSDictionary(<pObjcArray>)"
			],
			"display syntax":[
				"ArrayFromNSDictionary(<i>pObjcArray</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C dictionary into a Array",
			"parameters":[{
				"name":"pObjcNumber",
				"type":"",
				"refparam":"false",
				"description":"The NSDictionary to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Array value\n\nDescription\nUse <ArrayFromNSDictionary> to convert an Objective-C dictionary object (NSDictionary) to\na variable of type Array."
			}],
			"description":"Convert a Objective-C dictionary into a Array"
		},{
			"id":"builder-741",
			"name":"stringfromnsstring",
			"display name":"StringFromNSString",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"StringFromNSString(<pObjcString>)"
			],
			"display syntax":[
				"StringFromNSString(<i>pObjcString</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C string into a String",
			"parameters":[{
				"name":"pObjcString",
				"type":"",
				"refparam":"false",
				"description":"The NSString to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A String value\n\nDescription\nUse <StringFromNSString> to convert an Objective-C string object (NSString) to\na variable of type String."
			}],
			"description":"Convert a Objective-C string into a String"
		},{
			"id":"builder-742",
			"name":"createobjcblockpointerfromhandler",
			"display name":"CreateObjcBlockPointerFromHandler",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"CreateObjcBlockPointerFromHandler(<pHandler>,<rBlockPtr>)"
			],
			"display syntax":[
				"CreateObjcBlockPointerFromHandler(<i>pHandler</i>,<i>rBlockPtr</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C block pointer that wraps an LCB handler.",
			"parameters":[{
				"name":"pHandler",
				"type":"",
				"refparam":"false",
				"description":"The handler the block pointer should wrap."
			},{
				"name":"rBlockPtr",
				"type":"",
				"refparam":"false",
				"description":"The variable into which the block pointer should be returned."
			}],
			"examples":[{
				"script":"private variable sRequestPermissionsCompletionHandler as optional ObjcBlockPointer\nprivate variable sTarget as ScriptObject\n\npublic handler AudioLibraryInitialize() returns Boolean\n\tif not CreateObjcBlockPointerFromHandler(RequestPermissionsCompletionHandler, sRequestPermissionsCompletionHandler) then\n\t\tput nothing into sRequestPermissionsCompletionHandler\n\t\treturn false\n\tend if\n\tput the caller into sTarget\n\treturn true\nend handler\n\nprivate foreign handler ObjC_AVCaptureDeviceRequestAccessForMediaType(in pMediaType as ObjcId, in pCompletionHandler as ObjcBlockPointer) \\\n\treturns nothing \\\n\tbinds to \"objc:AVCaptureDevice.+requestAccessForMediaType:completionHandler:\"\n\npublic handler AudioLibraryRequestPermissions()\n\tunsafe\n\t\tObjC_AVCaptureDeviceRequestAccessForMediaType(StringToNSString(\"soun\"), sRequestPermissionsCompletionHandler)\n\tend unsafe\nend handler\n\npublic handler RequestPermissionsCompletionHandler(in pBlock as ObjcBlockPointer, in pGranted as CBool)\n\tpost \"AudioLibraryRequestPermissionsCallback\" to sTarget with [pGranted]\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the block pointer was successfully created, false otherwise."
			}],
			"description":"Use the <CreateObjcBlockPointerFromHandler> handler to create a pointer to an\nObjective-C block that wraps an LCB handler. The block pointer can be used in\ncalls to Objective-C foreign functions that expect a block as a parameter.\n\nThe wrapped handler will be called whenever the block is invoked, with the first\nparameter of its signature being the block pointer. The remaining parameters\nshould match those of the Objective-C block.\n\nThe lifetime of a created `ObjcBlockPointer` is not automatically managed. When\nsuch a value has no more references to it and it is no longer going to be used,\n<DeleteObjcBlockPointer> should be used to free the resources used by it.",
			"references":{
				"handler":["DeleteObjcBlockPointer"]
			}
		},{
			"id":"builder-743",
			"name":"createobjcdelegatewithcontext",
			"display name":"CreateObjcDelegateWithContext",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"CreateObjcDelegateWithContext(<pProtocol>,<pHandlerMapping>,<pContext>)"
			],
			"display syntax":[
				"CreateObjcDelegateWithContext(<i>pProtocol</i>,<i>pHandlerMapping</i>,<i>pContext</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of a protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"The name of the protocol"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			},{
				"name":"pContext",
				"type":"",
				"refparam":"false",
				"description":"Any context required in the callback."
			}],
			"examples":[{
				"script":"handler NumberOfItemsInMenuCallback(in pContext as String, in pMenu as ObjcId) returns CLong\n    -- pContext is the tag for this menu\n    return the number of elements in mMenuArray[pContext]\nend handler\n\npublic handler GetNSMenuDelegate(in pMenuTag as String) returns ObjcObject\n    return CreateObjcDelegateWithContext(\"NSMenuDelegate\", \\\n                                           { \"numberOfItemsInMenu:\": \\\n                                           NumberOfItemsInMenuCallback }, \\\n                                           pMenuTag)\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcDelegateWithContext> handler to create instances of \nObjective-C delegate classes with LCB implementations of protocol \nmethods. Once created these can be set in the usual way on an instance \nof the appropriate class (by binding to `-setDelegate:`), typically so \nthat callbacks triggered by user interaction with a widget can be\nhandled in LCB.\n\nIf no context is required to be passed as a parameter to the callback,\nuse <CreateObjcDelegate>.\n\nSome protocols consist of purely optional methods. In this case the \ninformation about the protocol's methods are not available from the     \nobjective-c runtime API. In this situation \n<CreateObjcInformalDelegateWithContext> should be used instead.",
			"references":{
				"handler":["CreateObjcDelegate","CreateObjcInformalDelegate","CreateObjcInformalDelegateWithContext"]
			}
		},{
			"id":"builder-744",
			"name":"datatonsdata",
			"display name":"DataToNSData",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"DataToNSData(<pData>)"
			],
			"display syntax":[
				"DataToNSData(<i>pData</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Data into an Objective-C data",
			"parameters":[{
				"name":"pData",
				"type":"",
				"refparam":"false",
				"description":"The Data to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSData\n\nDescription\nUse <DataToNSData> to convert a variable of type Data to an Objective-C\ndata object (NSData)."
			}],
			"description":"Convert a Data into an Objective-C data"
		},{
			"id":"builder-745",
			"name":"stringtonsstring",
			"display name":"StringToNSString",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"StringToNSString(<pString>)"
			],
			"display syntax":[
				"StringToNSString(<i>pString</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a String into an Objective-C string",
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The String to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSString\n\nDescription\nUse <StringToNSString> to convert a variable of type String to an Objective-C\nstring object (NSString)."
			}],
			"description":"Convert a String into an Objective-C string"
		},{
			"id":"builder-746",
			"name":"listtonsarray",
			"display name":"ListToNSArray",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"ListToNSArray(<pList>)"
			],
			"display syntax":[
				"ListToNSArray(<i>pList</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a List into an Objective-C array",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The List to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSArray\n\nDescription\nUse <ListToNSArray> to convert a variable of type List to an Objective-C\narray object (NSArray)."
			}],
			"description":"Convert a List into an Objective-C array"
		},{
			"id":"builder-747",
			"name":"pointerfromobjcobject",
			"display name":"PointerFromObjcObject",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"PointerFromObjcObject(<pObjcObject>)"
			],
			"display syntax":[
				"PointerFromObjcObject(<i>pObjcObject</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert an ObjcObject into a Pointer",
			"parameters":[{
				"name":"pObjcObject",
				"type":"",
				"refparam":"false",
				"description":"The ObjcObject to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The Pointer wrapped by the ObjcObject"
			}],
			"description":"Use <PointerFromObjcObject> to convert a variable of type ObjcObject to one of\ntype Pointer."
		},{
			"id":"builder-748",
			"name":"pointertoobjcobject",
			"display name":"PointerToObjcObject",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"PointerToObjcObject(<pPointer>)"
			],
			"display syntax":[
				"PointerToObjcObject(<i>pPointer</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Pointer into an ObjcObject",
			"parameters":[{
				"name":"pPointer",
				"type":"",
				"refparam":"false",
				"description":"The Pointer to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An ObjcObject wrapping the Pointer"
			}],
			"description":"Use <PointerToObjcObject> to convert a variable of type Pointer to one of type\nObjcObject."
		},{
			"id":"builder-749",
			"name":"arraytonsdictionary",
			"display name":"ArrayToNSDictionary",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"ArrayToNSDictionary(<pArray>)"
			],
			"display syntax":[
				"ArrayToNSDictionary(<i>pArray</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert an Array into an Objective-C dictionary",
			"parameters":[{
				"name":"pNumber",
				"type":"",
				"refparam":"false",
				"description":"The Array to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Objective-C object of type NSDictionary\n\nDescription\nUse <ArrayToNSDictionary> to convert a variable of type Array to an Objective-C\ndictionary object (NSDictionary)."
			}],
			"description":"Convert an Array into an Objective-C dictionary"
		},{
			"id":"builder-750",
			"name":"createobjcinformaldelegate",
			"display name":"CreateObjcInformalDelegate",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"CreateObjcInformalDelegate(<pProtocol>,<pHandlerMapping>)"
			],
			"display syntax":[
				"CreateObjcInformalDelegate(<i>pProtocol</i>,<i>pHandlerMapping</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Create an Objective-C object with LCB implementations of methods of an informal protocol.",
			"parameters":[{
				"name":"pProtocol",
				"type":"",
				"refparam":"false",
				"description":"A list of foreign handlers which bind to protocol methods"
			},{
				"name":"pHandlerMapping",
				"type":"",
				"refparam":"false",
				"description":"A mapping from the protocol's selector names to LCB handlers"
			}],
			"examples":[{
				"script":"foreign handler Objc_NSPortMessageGetMsgId(in pMessage as ObjcId) returns UInt32 \\\n    binds to \"objc:NSPort.-msgid\"\n\nhandler HandlePortMessageCallback(in pMessage as ObjcId) returns nothing\n    post \"portMessage\" with [Objc_NSPortMessageGetMsgId(pMessage)]\nend handler\n\nforeign handler Objc_NSPortDelegateHandlePortMessage(in pTarget as ObjcId, in pPortMessage as ObjcId) returns nothing \\\n    binds to \"objc:.-handlePortMessage:\"\n\npublic handler GetNSPortDelegate()\n    return CreateObjcInformalDelegate([Objc_NSPortDelegateHandlePortMessage], \\\n                                      { \"handlePortMessage:\": \\\n                                        HandlePortMessageCalback })\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An Objective-C object which calls the appropriate LCB handler\non receiving any of the specified selectors. "
			}],
			"description":"Use the <CreateObjcInformalDelegate> handler to create instances of \nObjective-C delegate classes with LCB implementations of protocol \nmethods, when the Protocol object cannot be found at runtime. This \noccurs for example when all of the protocol methods are optional. \n\nInstead of a protocol name (as with <CreateObjcDelegate>), the \n<pProtocol> argument of <CreateObjcInformalDelegate> must be a proper \nlist of foreign handlers for each of the methods of the protocol for \nwhich LCB callbacks are provided in the <pHandlerMapping> array.\n\nOnce created an informal delegate can be set in the usual way on an \ninstance of the appropriate class (by binding to `-setDelegate:`), \ntypically so that callbacks triggered by user interaction with a widget \ncan be handled in LCB.\n\nIf any context is required to be passed as a parameter to the callback,\nuse <CreateObjcInformalDelegateWithContext>.\n\nIf the protocol can be resolved at runtime, it is generally easier to \nuse the <CreateObjcDelegate> handler.",
			"references":{
				"handler":["CreateObjcDelegate","CreateObjcDelegateWithContext","CreateObjcInformalDelegateWithContext"]
			}
		},{
			"id":"builder-751",
			"name":"datafromnsdata",
			"display name":"DataFromNSData",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"DataFromNSData(<pObjcData>)"
			],
			"display syntax":[
				"DataFromNSData(<i>pObjcData</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C data into a Data",
			"parameters":[{
				"name":"pObjcData",
				"type":"",
				"refparam":"false",
				"description":"The NSData to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Data value\n\nDescription\nUse <DataFromNSData> to convert an Objective-C data object (NSData) to\na variable of type Data.\n"
			}],
			"description":"Convert a Objective-C data into a Data"
		},{
			"id":"builder-752",
			"name":"com.livecode.objc",
			"display name":"com.livecode.objc",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.objc"
			],
			"associations":["com.livecode.objc"],
			"summary":"This module provides utility handlers for converting to and from Obj-C types.",
			"description":"This module provides utility handlers for converting to and from Obj-C types."
		},{
			"id":"builder-753",
			"name":"numberfromnsnumber",
			"display name":"NumberFromNSNumber",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"NumberFromNSNumber(<pObjcNumber>)"
			],
			"display syntax":[
				"NumberFromNSNumber(<i>pObjcNumber</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Convert a Objective-C number into a Number",
			"parameters":[{
				"name":"pObjcNumber",
				"type":"",
				"refparam":"false",
				"description":"The NSNumber to convert"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A Number value\n\nDescription\nUse <NumberFromNSNumber> to convert an Objective-C number object (NSNumber) to\na variable of type Number."
			}],
			"description":"Convert a Objective-C number into a Number"
		},{
			"id":"builder-754",
			"name":"deleteobjcblockpointer",
			"display name":"DeleteObjcBlockPointer",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"DeleteObjcBlockPointer(<pBlockPointer>)"
			],
			"display syntax":[
				"DeleteObjcBlockPointer(<i>pBlockPointer</i>)"
			],
			"associations":["com.livecode.objc"],
			"summary":"Delete an Objective-C block pointer.",
			"parameters":[{
				"name":"pBlockPointer",
				"type":"",
				"refparam":"false",
				"description":"An Objective-C block pointer created with\n<CreateObjcBlockPointerFromHandler>"
			}],
			"examples":[{
				"script":"public handler AudioLibraryFinalize()\n\tif sRequestPermissionsCompletionHandler is not nothing then\n\t\tDeleteObjcBlockPointer(sRequestPermissionsCompletionHandler)\n\t\tput nothing into sRequestPermissionsCompletionHandler\n\tend if\nend handler"
			}],
			"description":"Use the <DeleteObjcBlockPointer> handler to delete an Objective-C block pointer\ncreated with <CreateObjcBlockPointerFromHandler>",
			"references":{
				"handler":["CreateObjcBlockPointerFromHandler"]
			}
		},{
			"id":"builder-755",
			"name":"flipped",
			"display name":"flipped",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the flipped of <widget> to {true|false}\nget the flipped of <widget>"
			],
			"display syntax":[
				"set the flipped of <i>widget</i> to {true|false}"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"`true` if the SVG path is flipped top-to-bottom; `false` otherwise",
			"description":"When <flipped> is set to `true`, the SVG path is drawn upside down."
		},{
			"id":"builder-756",
			"name":"iconpresetname",
			"display name":"iconPresetName",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the iconPresetName of <widget> to <pIconName>\nget the iconPresetName of <widget>"
			],
			"display syntax":[
				"set the iconPresetName of <i>widget</i> to <i>pIconName</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"A predefined SVG icon path names.",
			"parameters":[{
				"name":"pIconName",
				"type":"",
				"refparam":"false",
				"description":"The name of the icon to display."
			}],
			"examples":[{
				"script":"set the iconPresetName of widget \"SVG Icon\" to \"thumbs up\""
			}],
			"description":"Use the <iconPresetName> property to set the icon of the widget to one of the\npredefined graphics provided by the \"IconSVG\" library.\n\nYou can get a list of available predefined path names by running\n`put iconNames()` in the Message Box."
		},{
			"id":"builder-757",
			"name":"iconname",
			"display name":"iconName",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the iconName of <widget>"
			],
			"display syntax":[
				"get the iconName of <i>widget</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The name of the currently chosen icon.",
			"examples":[{
				"script":"put the iconName of widget \"SVG Icon\""
			}],
			"description":"use the <IconName> to get the name of the currently chosen icon.\n\nYou can get a list of available predefined path names by running\n`put iconNames()` in the Message Box."
		},{
			"id":"builder-758",
			"name":"iconpath",
			"display name":"iconPath",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the iconPath of <widget> to <pSVGPath>\nget the iconPath of <widget>"
			],
			"display syntax":[
				"set the iconPath of <i>widget</i> to <i>pSVGPath</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The path data displayed by the SVG path widget.",
			"parameters":[{
				"name":"pSVGPath",
				"type":"",
				"refparam":"false",
				"description":"A string containing valid SVG path syntax."
			}],
			"examples":[{
				"script":"-- Create a filled triangle\nset the iconPath of widget \"SVG Icon\" to \"M150 0 L75 200 L225 200 Z\""
			}],
			"description":"The SVG path string to be displayed by the SVG path widget.\n\nSee https://www.w3.org/TR/SVG/paths.html#PathData for the SVG path data\nspecification."
		},{
			"id":"builder-759",
			"name":"scaledwidth",
			"display name":"scaledWidth",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the scaledWidth of <widget>"
			],
			"display syntax":[
				"get the scaledWidth of <i>widget</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The width of the bounding rect of the SVG path, in fractional pixels.",
			"description":"If the <maintainAspectRatio> of the SVG path is `true`, then the <scaledWidth>\nof the object will return the width of the bounding rect of the SVG path.\nOtherwise, it will return the width of the widget.",
			"references":{
				"property":["scaledHeight","maintainAspectRatio"]
			}
		},{
			"id":"builder-760",
			"name":"angle",
			"display name":"angle",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the angle of <widget> to <pAngle>\nget the angle of <widget>"
			],
			"display syntax":[
				"set the angle of <i>widget</i> to <i>pAngle</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The angle of rotation of the SVG path, in degrees clockwise.",
			"description":"The <angle> property controls the angle of rotation of for the SVG path\naround the centre of the path's bounding box.  The rotation is in clockwise\ndegrees."
		},{
			"id":"builder-761",
			"name":"highlight",
			"display name":"highlight",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the highlight of <widget> to {true|false}\nget the highlight of <widget>"
			],
			"display syntax":[
				"set the highlight of <i>widget</i> to {true|false}"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"`true` if the SVG path is highlighted; `false` otherwise",
			"description":"Use the `highlight` property to test or control whether the SVG path is\ndisplayed as highlighted or not."
		},{
			"id":"builder-762",
			"name":"scaledheight",
			"display name":"scaledHeight",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the scaledHeight of <widget>"
			],
			"display syntax":[
				"get the scaledHeight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The height of the bounding rect of the SVG path, in fractional pixels.",
			"description":"If the <maintainAspectRatio> of the SVG path is `true`, then the <scaledHeight>\nof the object will return the height of the bounding rect of the SVG path.\nOtherwise, it will return the height of the widget.",
			"references":{
				"property":["scaledWidth","maintainAspectRatio"]
			}
		},{
			"id":"builder-763",
			"name":"maintainaspectratio",
			"display name":"maintainAspectRatio",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the maintainAspectRatio of <widget> to {true|false}\nget the maintainAspectRatio of <widget>"
			],
			"display syntax":[
				"set the maintainAspectRatio of <i>widget</i> to {true|false}"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"Whether the SVG path maintains its aspect ratio when resized.",
			"description":"If the <maintainAspectRatio> of the SVG path is `true`, the icon will be its\nmaximum size within its bounds while maintaining the original ratio of width\nto height. If `false`, it will stretch to fit the extent of its bounds."
		},{
			"id":"builder-764",
			"name":"fillrule",
			"display name":"fillRule",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the fillRule of <widget> to <pRule>\nget the fillRule of <widget>"
			],
			"display syntax":[
				"set the fillRule of <i>widget</i> to <i>pRule</i>"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"The fill rule to be used when rendering the SVG path.",
			"parameters":[{
				"name":"pRule",
				"type":"",
				"refparam":"false",
				"description":"The fill rule to be used.\n- \"non-zero\": Fill regions encircled at least once by the path.\n- \"even odd\": Fill regions encircled an even number of times by the path."
			}],
			"description":"Use the <fillRule> property to set the fill rule to be used for the widget.\nYou may need to adjust it to ensure that paths that cross themselves, and paths\nthat are made up of overlapping subpaths, are filled correctly.\n\nThe areas enclosed by the path are each filled or not filled depending on the\nfill rule used and the number of times the path loops around them.  When the\npath goes around a region clockwise, it adds 1 to number of encirclements.\nWhen it goes around a region anticlockwise, it subtracs 1 from the number of\nencirclements.\n\nSee https://www.w3.org/TR/SVG/painting.html#FillRuleProperty for examples of\nthe \"non-zero\" and \"even odd\" fill rules.\n"
		},{
			"id":"builder-765",
			"name":"com.livecode.widget.svgpath",
			"display name":"com.livecode.widget.svgpath",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.svgpath"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"This widget displays an SVG path as an icon.  It has a default state and a\n\"highlighted\" state.",
			"description":"This widget displays an SVG path as an icon.  It has a default state and a\n\"highlighted\" state."
		},{
			"id":"builder-766",
			"name":"com.livecode.library.timezone",
			"display name":"com.livecode.library.timezone",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.timezone"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"This library provides access to the tz timezone database",
			"description":"This library provides access to the tz timezone database"
		},{
			"id":"builder-767",
			"name":"fromuniversaltime",
			"display name":"FromUniversalTime",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"FromUniversalTime(<pSeconds>,<pTimeZone>)"
			],
			"display syntax":[
				"FromUniversalTime(<i>pSeconds</i>,<i>pTimeZone</i>)"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"Convert universal time to local time",
			"parameters":[{
				"name":"pSeconds",
				"type":"",
				"refparam":"false",
				"description":"The universal time, i.e. seconds since the beginning of the epoch."
			},{
				"name":"pTimeZone",
				"type":"",
				"refparam":"false",
				"description":"The time zone, in the form returned by the <TimeZones> function."
			}],
			"examples":[{
				"script":"local tDateTime\nput \"2018,2,14,13,38,0,4\" into tDateTime\nconvert tDateTime to seconds\nput FromUniversalTime(tDateTime, \"Antarctica/Vostok\") into tDateTime\nconvert tDateTime to dateitems\n-- tDateTime contains \"2018,2,14,19,38,0,4\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The local time"
			}],
			"description":"Use the <FromUniversalTime> function to find the local time for the \nspecified timezone, given the universal time.",
			"references":{
				"handler":["TimeZones"]
			},
			"tags":["datetime","library"]
		},{
			"id":"builder-768",
			"name":"touniversaltime",
			"display name":"ToUniversalTime",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"ToUniversalTime(<pSeconds>,<pTimeZone>)"
			],
			"display syntax":[
				"ToUniversalTime(<i>pSeconds</i>,<i>pTimeZone</i>)"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"Convert local time to universal time",
			"parameters":[{
				"name":"pSeconds",
				"type":"",
				"refparam":"false",
				"description":"The local time"
			},{
				"name":"pTimeZone",
				"type":"",
				"refparam":"false",
				"description":"The time zone, in the form returned by the <TimeZones> function."
			}],
			"examples":[{
				"script":"local tDateTime\nput \"2018,2,14,13,38,0,4\" into tDateTime\nconvert tDateTime to seconds\nput ToUniversalTime(tDateTime, \"Africa/Windhoek\") into tDateTime\nconvert tDateTime to dateitems\n-- tDateTime contains \"2018,2,14,11,38,0,4\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The universal time"
			}],
			"description":"Use the <ToUniversalTime> function to find the universal time, given the \nlocal time for the specified time zone. ",
			"references":{
				"handler":["TimeZones"]
			},
			"tags":["datetime","library"]
		},{
			"id":"builder-769",
			"name":"timezones",
			"display name":"TimeZones",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"TimeZones()"
			],
			"display syntax":[
				"TimeZones()"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"List the time zones used by the Time zone library",
			"examples":[{
				"script":"-- List all time zones and their times\nlocal tList, tTime, tData\nput the seconds into tTime\nrepeat for each line tLine in TimeZones()\n   put tLine & tab & FromUniversalTime(tTime, tLine) into tData\n   if tList is empty then\n      put tData into tList\n   else\n      put tData & return after tList\n   end if\nend repeat"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list of time zones, one per line."
			}],
			"description":"Use the <TimeZones> function to find a list of valid timezones used by <ToUniversalTime> and <FromUniversalTime>,",
			"references":{
				"handler":["ToUniversalTime","FromUniversalTime"]
			},
			"tags":["datetime","library"]
		},{
			"id":"builder-770",
			"name":"showselectedelement",
			"display name":"showSelectedElement",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showSelectedElement of <widget> to {true | false}\nget the showSelectedElement of <widget>"
			],
			"display syntax":[
				"set the showSelectedElement of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"Controls whether a title bar is drawn displaying the currently selected icon",
			"description":"Controls whether a title bar is drawn displaying the currently selected icon"
		},{
			"id":"builder-771",
			"name":"selectedicon",
			"display name":"selectedIcon",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the selectedIcon of <widget> to pIcon\nget the selectedIcon of <widget>"
			],
			"display syntax":[
				"set the selectedIcon of <i>widget</i> to pIcon"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"The selected icon name",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An icon name, from the IconSVG library"
			}],
			"description":"The selected icon name"
		},{
			"id":"builder-772",
			"name":"filterstring",
			"display name":"filterString",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the filterString of <widget> to pString\nget the filterString of <widget>"
			],
			"display syntax":[
				"set the filterString of <i>widget</i> to pString"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"Filters the list of icons to display according to a string",
			"description":"Filters the list of icons to display according to a string"
		},{
			"id":"builder-773",
			"name":"showframeborder",
			"display name":"showFrameBorder",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showFrameBorder of <widget> to {true | false}\nget the showFrameBorder of <widget>"
			],
			"display syntax":[
				"set the showFrameBorder of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"Whether the icon picker has a border or not",
			"description":"Whether the icon picker has a border or not"
		},{
			"id":"builder-774",
			"name":"iconsize",
			"display name":"iconSize",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the iconSize of <widget> to pSize\nget the iconSize of <widget>"
			],
			"display syntax":[
				"set the iconSize of <i>widget</i> to pSize"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"The width and height of the rectangles in which the icons are rendered",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A two-item list with the width and height of the rect in which the icons are rendered"
			}],
			"description":"The width and height of the rectangles in which the icons are rendered"
		},{
			"id":"builder-775",
			"name":"preferredsize",
			"display name":"preferredSize",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the preferredSize of <widget>"
			],
			"display syntax":[
				"get the preferredSize of <i>widget</i>"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"The preferred size of the widget.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A two-item list with the width and height needed to display the widget\nwith the current display preferences."
			}],
			"description":"The <preferredSize> property is used when the icon widget is popped up\nusing the 'popup widget' syntax"
		},{
			"id":"builder-776",
			"name":"shownames",
			"display name":"showNames",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showNames of <widget> to {true | false}\nget the showNames of <widget>"
			],
			"display syntax":[
				"set the showNames of <i>widget</i> to {true | false}"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"Whether to display the names of the icons or not\n",
			"description":"Whether to display the names of the icons or not\n"
		},{
			"id":"builder-777",
			"name":"com.livecode.widget.iconpicker",
			"display name":"com.livecode.widget.iconpicker",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.iconpicker"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"This widget is an icon picker, using icons from the iconSVG library.",
			"description":"This widget is an icon picker, using icons from the iconSVG library."
		},{
			"id":"builder-778",
			"name":"lowercasestring",
			"display name":"LowercaseString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the lower of <Source>"
			],
			"display syntax":[
				"the lower of <i>Source</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Lowercases <Source>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Source> with each of its chars lowercased."
			}],
			"description":"Uppercase letters, including special characters with diacritical marks, are converted to the lowercase equivalents. All other characters, including lowercase letters, numbers, punctuation, and special characters with no upper or lower case, are left unchanged.",
			"tags":["strings"]
		},{
			"id":"builder-779",
			"name":"putstringbefore",
			"display name":"PutStringBefore",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"put <Source> before <Target>"
			],
			"display syntax":[
				"put <i>Source</i> before <i>Target</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Prepends <Source> to <Target>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"\" into tVar\nput \"abc\" before tVar -- tVar contains \"abc\"\nput \"lpha\" before char 2 of tVar\nput \"eti\" before char -1 of tVar -- tVar contains \"alphabetic\""
			}],
			"description":"Use to insert a string without replacement. Can be used either with a chunk expression to insert at a specified location, or without to prepend to the target string.",
			"tags":["strings"]
		},{
			"id":"builder-780",
			"name":"stringisstring",
			"display name":"StringIsString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is identical to <Right>."
			}],
			"description":"The ```is``` operator is case sensitive.",
			"tags":["strings"]
		},{
			"id":"builder-781",
			"name":"emptystring",
			"display name":"EmptyString",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the empty string"
			],
			"display syntax":[
				"the empty string"
			],
			"associations":["com.livecode.string"],
			"summary":"Designates the string of length zero.",
			"examples":[{
				"script":"variable tVar as String\nvariable tCount as Number\nput the empty string into tVar\nput the number of chars in tVar into tCount -- tCount is 0"
			}],
			"description":"Use ```the empty string``` to initialise a string variable. The empty string is synonymous with the string literal \"\"",
			"tags":["strings"]
		},{
			"id":"builder-782",
			"name":"stringisgreaterthanstring",
			"display name":"StringIsGreaterThanString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt; <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> is greater than <Right> under a char by char comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is greater than <Right>."
			}],
			"description":"<Left> is greater than <Right> if and only if <Left> and <Right> are not equal, and the unicode codepoint of the first char in <Left> that is not equal to the corresponding char in <Right> is of greater value.",
			"tags":["strings"]
		},{
			"id":"builder-783",
			"name":"uppercasestring",
			"display name":"UppercaseString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the upper of <Source>"
			],
			"display syntax":[
				"the upper of <i>Source</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Uppercases <Source>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Source> with each of its chars uppercased."
			}],
			"description":"Lowercase letters, including special characters with diacritical marks, are converted to the uppercase equivalents. All other characters, including uppercase letters, numbers, punctuation, and special characters with no upper or lower case, are left unchanged.",
			"tags":["strings"]
		},{
			"id":"builder-784",
			"name":"putstringafter",
			"display name":"PutStringAfter",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"put <Source> after <Target>"
			],
			"display syntax":[
				"put <i>Source</i> after <i>Target</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Appends <Source> to <Target>.",
			"parameters":[{
				"name":"Source",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"\" into tVar\nput \"rent\" after tVar -- tVar contains \"rent\"\nput \"placeme\" after char 2 of tVar -- tVar contains \"replacement\""
			}],
			"description":"Use to insert a string without replacement. Can be used either with a chunk expression to insert at a specified location, or without to append to the target string.",
			"tags":["strings"]
		},{
			"id":"builder-785",
			"name":"stringislessthanstring",
			"display name":"StringIsLessThanString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt; <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> is less than <Right> under a char by char comparison",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is less than <Right>"
			}],
			"description":"<Left> is greater than <Right> if and only if <Left> and <Right> are not equal, and the unicode codepoint of the first char in <Left> that is not equal to the corresponding char in <Right> is of greater value.",
			"tags":["strings"]
		},{
			"id":"builder-786",
			"name":"replacestring",
			"display name":"ReplaceString",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"replace <Pattern> with <Replacement> in <Target>"
			],
			"display syntax":[
				"replace <i>Pattern</i> with <i>Replacement</i> in <i>Target</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Replaces occurrences of <Pattern> within <Target> in <Replacement>\nSource:An expression which evaluates to a string.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string container."
			},{
				"name":"Replacement",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nput \"purple\" into tString\nreplace \"p\" with \"t\" in tString -- tString is \"turtle\""
			}],
			"description":"Replaces each occurrence of the string <Pattern> in <Target> with <Replacement>.",
			"tags":["strings"]
		},{
			"id":"builder-787",
			"name":"stringisnotstring",
			"display name":"StringIsNotString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Determines whether <Left> and <Right> are equal or not.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns true if <Left> is not identical to <Right>."
			}],
			"description":"The ```is not``` operator is case sensitive.",
			"tags":["strings"]
		},{
			"id":"builder-788",
			"name":"com.livecode.string",
			"display name":"com.livecode.string",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.string"
			],
			"associations":["com.livecode.string"],
			"summary":"This library consists of the operations on strings included in the standard library of Extension Builder.",
			"description":"This library consists of the operations on strings included in the standard library of Extension Builder."
		},{
			"id":"builder-789",
			"name":"concatenatestringswithspace",
			"display name":"ConcatenateStringsWithSpace",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> && <Right>"
			],
			"display syntax":[
				"<i>Left</i> && <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Concatenates <Left> and <Right> with a space between.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"This\" && \"is\" && \"a\" && \"sentence.\" into tVar -- tVar contains \"This is a sentence.\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of concatenating <Left> and <Right> with a space between."
			}],
			"description":"The result consists of the chars of <Left> followed by a space, and then the chars of <Right>.",
			"tags":["strings"]
		},{
			"id":"builder-790",
			"name":"concatenatestrings",
			"display name":"ConcatenateStrings",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> & <Right>"
			],
			"display syntax":[
				"<i>Left</i> & <i>Right</i>"
			],
			"associations":["com.livecode.string"],
			"summary":"Concatenates <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"car\" & \"pet\" into tVar -- tVar contains \"carpet\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of concatenating <Left> and <Right>."
			}],
			"description":"The result consists of the chars of <Left> followed by those of <Right>.",
			"tags":["strings"]
		},{
			"id":"builder-791",
			"name":"countcodeunitsof",
			"display name":"CountCodeunitsOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the number of codeunits in <Target>"
			],
			"display syntax":[
				"the number of codeunits in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Counts the number of codeunits in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tSource as String\nput \"hello\" into tString\nput the number of codeunits in tString into tVar\n\nvariable tString as String\nput the empty string into tString\nrepeat tVar times\n\tput \"a\" after tString\nend repeat\n\n// tString contains \"aaaaa\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The number of codeunits in <Target>."
			}],
			"description":">*Note:* The number of codeunits returns the number of codeunits of the target string. It does not perform any grapheme boundary analysis.",
			"tags":["strings"]
		},{
			"id":"builder-792",
			"name":"deletelastcodeunitof",
			"display name":"DeleteLastCodeunitOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete the last codeunit of <Target>"
			],
			"display syntax":[
				"delete the last codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the last codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"deadliness\" into tVar\ndelete the last codeunit of tVar -- tVar contains \"deadlines\""
			}],
			"description":"Replaces the last codeunit in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"builder-793",
			"name":"repeatforeachcodeunit",
			"display name":"RepeatForEachCodeunit",
			"library":"builder",
			"type":"iterator",
			"syntax":[
				"codeunit <Iterand>"
			],
			"display syntax":[
				"codeunit <i>Iterand</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Repeat over the codeunits of a string",
			"parameters":[{
				"name":"Iterand",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tString as String\nput \"stressed\" into tString\n\nvariable tReversed as String\nvariable tCodeunit as String\nput \"\" into tReversed\nrepeat for each codeunit tCodeunit in tString\n\tput tCodeunit before tReversed\nend repeat\n\n    // tReversed is \"desserts\""
			}],
			"description":"Use repeat for each to perform an operation on each codeunit of a string. On each iteration, the <Iterand> will contain the next codeunit of the string being iterated over.",
			"tags":["strings","control structures"]
		},{
			"id":"builder-794",
			"name":"deletesingletoncodeunitof",
			"display name":"DeleteSingletonCodeunitOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete codeunit <Index> of <Target>"
			],
			"display syntax":[
				"delete codeunit <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the codeunit at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"thorough\" into tVar\ndelete codeunit 3 of tVar -- tVar contains \"through\""
			}],
			"description":"Replaces the codeunit at the given index with the empty string.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"builder-795",
			"name":"codeunitoffset",
			"display name":"CodeunitOffset",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of codeunits <Needle> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of codeunits <i>Needle</i> in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Finds the first or last occurrence of <Needle> within <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the first offset of codeunits \"art\" in \"cartoon\" into tVar -- tVar contains 2"
			},{
				"script":"variable tVar as Number\nvariable tFilePath as String\nput \"/Users/user/Documents/file.txt\" into tFilePath\nput the last offset of \"/\" in tFilePath into tVar\n\nvariable tFileName as String\nput codeunit 1 to tVar of tFilePath into tFileName -- tVar contains \"file.txt\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of codeunits between the first codeunit of <Target> and the first (respectively last) occurrence of <Needle>. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"builder-796",
			"name":"singletoncodeunitof",
			"display name":"SingletonCodeunitOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"codeunit <Index> of <Target>"
			],
			"display syntax":[
				"codeunit <i>Index</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the codeunit at index <Index> in <Target>.",
			"parameters":[{
				"name":"Index",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put the empty string into codeunit 5 of tString // Locates codeunit 5 and removes it from tString"
			},{
				"script":"get codeunit 5 of tString // Evaluates codeunit 5"
			}],
			"description":"Either locates the codeunit at the given index for use as the target container of another operation, or evaluates the codeunit at the given index as the source of another operation.\n\n>*Note:* It is an error if <Index> is out of range.",
			"tags":["strings"]
		},{
			"id":"builder-797",
			"name":"codeunitoffsetafter",
			"display name":"CodeunitOffsetAfter",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of codeunits <Needle> after <After> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of codeunits <i>Needle</i> after <i>After</i> in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Finds the first or last occurrence of <Needle> after a specified index in <Target>",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"After",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput the offset of codeunits \"nse\" after 4 in \"nonsense\" into tVar -- tVar contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> after <After> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of codeunits between the first codeunit of the substring of <Target> beginning at codeunit <After> + 1, and the first (respectively last) occurrence of <Needle> in the substring. If neither first or last is specified, then the first offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"builder-798",
			"name":"lastcodeunitof",
			"display name":"LastCodeunitOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the last codeunit of <Target>"
			],
			"display syntax":[
				"the last codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the last codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"codeunit\" into tVar\n\nvariable tLast as String\nput the last codeunit of tVar into tLast -- tLast contains \"r\""
			}],
			"description":"Either locates the last codeunit for use as the target container of another operation, or evaluates the last codeunit as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"builder-799",
			"name":"deletefirstcodeunitof",
			"display name":"DeleteFirstCodeunitOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete the first codeunit of <Target>"
			],
			"display syntax":[
				"delete the first codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the first codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"seven\" into tVar\ndelete the first codeunit of tVar -- tVar contains \"even\""
			}],
			"description":"Replaces the first codeunit in <Target> with the empty string.\n\n>*Note:* It is an error if <Target> is the empty string.",
			"tags":["strings"]
		},{
			"id":"builder-800",
			"name":"codeunitoffsetbefore",
			"display name":"CodeunitOffsetBefore",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the ( first | last ) offset of codeunits <Needle> before <Before> in <Target>"
			],
			"display syntax":[
				"the ( first | last ) offset of codeunits <i>Needle</i> before <i>Before</i> in <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Finds the first or last occurrence of <Needle> before a specified index in <Target>.",
			"parameters":[{
				"name":"Needle",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			},{
				"name":"Before",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of Target."
			}],
			"examples":[{
				"script":"variable tVar as Number\nvariable tLastDot as Number\nvariable tAddress as String\nvariable tTLD as String\nput \"http://www.livecode.com/index.html\" into tAddress\nput the last offset of \".\" in tAddress into tLastDot\nput the offset of \".\" before tLastDot in tAddress into tVar\nput codeunit tVar + 1 to tVar + 3 of tAddress into tTLD -- tTLD contains \"com\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the offset of <Needle> before <Before> in <Target>."
			}],
			"description":"The first (respectively last) offset of <Needle> in <Target> is number of codeunits between the first codeunit of <Target>, and the first (respectively last) occurrence of <Needle> in the substring of <Target> ending at codeunit <Before> - 1. If neither first or last is specified, then the last offset is found. If <Needle> does not occur in the given substring of <Target>, then the output is 0.",
			"tags":["strings"]
		},{
			"id":"builder-801",
			"name":"rangecodeunitof",
			"display name":"RangeCodeunitOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"codeunit <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"codeunit <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the codeunits between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"put tCodeunits into codeunit 5 to 10 of tString // Locates codeunits 5 to 10 of tString and replace them with tCodeunits"
			},{
				"script":"get codeunit 5 to 10 of tString // Evaluates codeunits 5 to 10"
			}],
			"description":"Either locates the codeunits between the given indices for use as the target container of another operation, or evaluates the codeunits at the given indices as the source of another operation.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"builder-802",
			"name":"com.livecode.codeunit",
			"display name":"com.livecode.codeunit",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.codeunit"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"This library consists of the operations on codeunits included in the standard library of Extension Builder.",
			"description":"This library consists of the operations on codeunits included in the standard library of Extension Builder."
		},{
			"id":"builder-803",
			"name":"deleterangecodeunitof",
			"display name":"DeleteRangeCodeunitOf",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete codeunit <Start> to <Finish> of <Target>"
			],
			"display syntax":[
				"delete codeunit <i>Start</i> to <i>Finish</i> of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Deletes the codeunits between indices <Start> and <Finish> in <Target>.",
			"parameters":[{
				"name":"Start",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Finish",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a valid integer index of <Target>."
			},{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"A string container."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"surround\" into tVar\ndelete codeunit 2 to 4 of tVar -- tVar contains \"sound\""
			}],
			"description":"Replaces the codeunits between the given indices with the empty string.\n\n>*Note:* It is an error if either <Start> or <Finish> are out of range.",
			"tags":["strings"]
		},{
			"id":"builder-804",
			"name":"firstcodeunitof",
			"display name":"FirstCodeunitOf",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the first codeunit of <Target>"
			],
			"display syntax":[
				"the first codeunit of <i>Target</i>"
			],
			"associations":["com.livecode.codeunit"],
			"summary":"Designates the first codeunit in <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to a string."
			}],
			"examples":[{
				"script":"variable tVar as String\nput \"codeunit\" into tVar\n\nvariable tFirst as String\nput the last codeunit of tVar into tFirst -- tFirst contains \"c\""
			}],
			"description":"Either locates the first codeunit for use as the target container of another operation, or evaluates the first codeunit as the source of another operation.\n\n>*Note:* It is an error if <Target> is empty.",
			"tags":["strings"]
		},{
			"id":"builder-805",
			"name":"com.livecode.library.json",
			"display name":"com.livecode.library.json",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.json"
			],
			"associations":["com.livecode.library.json"],
			"summary":"This library provides support for generating and parsing JavaScript\nObject Notation (JSON) data.  See also <http://json.org> and\n<https://tools.ietf.org/html/rfc7159>.",
			"description":"This library provides support for generating and parsing JavaScript\nObject Notation (JSON) data.  See also <http://json.org> and\n<https://tools.ietf.org/html/rfc7159>."
		},{
			"id":"builder-806",
			"name":"jsonimport",
			"display name":"JsonImport",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"JsonImport(<pJson>)"
			],
			"display syntax":[
				"JsonImport(<i>pJson</i>)"
			],
			"associations":["com.livecode.library.json"],
			"summary":"Parse JSON text into a xTalk value.",
			"parameters":[{
				"name":"pJson",
				"type":"",
				"refparam":"false",
				"description":"String containing JSON text"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The top level value.  The type depends on the JSON content."
			}],
			"description":"<JsonImport> is used to convert data encoded in JSON format into a xTalk\nvalue.  It parses <pJson> and returns the first top-level value found.  If any\nsyntax errors are found in <pJson>, an error is thrown.\n\nThe return value may be any of the following types, depending on the content\nof the file:\n\n* Array (for a JSON object)\n* List  (for a JSON array)\n* String (for a JSON string)\n* Number (for any JSON number)\n* Boolean (for JSON `true` or `false`)\n* nothing (for JSON `null`)",
			"tags":["json","library","json"]
		},{
			"id":"builder-807",
			"name":"jsonexport",
			"display name":"JsonExport",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"JsonExport(<pValue>)"
			],
			"display syntax":[
				"JsonExport(<i>pValue</i>)"
			],
			"associations":["com.livecode.library.json"],
			"summary":"Format a xTalk value as JSON text",
			"parameters":[{
				"name":"pValue",
				"type":"",
				"refparam":"false",
				"description":"A xTalk value (Array, List, String, Number, Boolean, or nothing)"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A string containing JSON-formatted text."
			}],
			"description":"<JsonExport> is used to convert a xTalk value into data encoded in JSON\nformat.  If <pValue> is of a type that cannot be converted to JSON, an error is\nthrown.",
			"tags":["json","library","json"]
		},{
			"id":"builder-808",
			"name":"selectednavitem",
			"display name":"selectedNavItem",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the selectedNavItem of <widget> to <pItemName>\nget the selectedNavItem of <widget>"
			],
			"display syntax":[
				"set the selectedNavItem of <i>widget</i> to <i>pItemName</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The name of the currently selected nav item",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The item in the <navNames> corresponding to the selected nav item"
			}],
			"description":"The name of the currently selected nav item"
		},{
			"id":"builder-809",
			"name":"selectednavcolor",
			"display name":"selectedNavColor",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the selectedNavColor of <widget> to <pColor>\nget the selectedNavColor of <widget>"
			],
			"display syntax":[
				"set the selectedNavColor of <i>widget</i> to <i>pColor</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The color to use for the selected nav item",
			"value":[{
				"name":"value",
				"type":"",
				"description":"The color of the selected nav item, in RGB form"
			}],
			"description":"The color to use for the selected nav item"
		},{
			"id":"builder-810",
			"name":"navchanged",
			"display name":"navChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"navChanged"
			],
			"display syntax":[
				"navChanged"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Sent when the nav items property is changed",
			"description":"Sent when the nav items property is changed"
		},{
			"id":"builder-811",
			"name":"showactionicons",
			"display name":"showActionIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showActionIcons of <widget> to { true | false }\nget the showActionIcons of <widget>"
			],
			"display syntax":[
				"set the showActionIcons of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Whether to show the action icons or not",
			"description":"Whether to show the action icons or not"
		},{
			"id":"builder-812",
			"name":"menupick",
			"display name":"menuPick",
			"library":"builder",
			"type":"message",
			"syntax":[
				"menuPick <pPick>"
			],
			"display syntax":[
				"menuPick <i>pPick</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Sent when a menu item is chosen",
			"parameters":[{
				"name":"pPick",
				"type":"",
				"refparam":"false",
				"description":"The item picked"
			}],
			"description":"Sent when a menu item is chosen"
		},{
			"id":"builder-813",
			"name":"com.livecode.widget.paletteactions",
			"display name":"com.livecode.widget.paletteactions",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.paletteactions"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Palette header bar widget.",
			"description":"Palette header bar widget."
		},{
			"id":"builder-814",
			"name":"navselected",
			"display name":"navSelected",
			"library":"builder",
			"type":"message",
			"syntax":[
				"navSelected <pItemName>"
			],
			"display syntax":[
				"navSelected <i>pItemName</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Sent when a nav item is selected",
			"parameters":[{
				"name":"pItemName",
				"type":"",
				"refparam":"false",
				"description":"The name of the selected nav item"
			}],
			"description":"Sent when a nav item is selected"
		},{
			"id":"builder-815",
			"name":"actionselected",
			"display name":"actionSelected",
			"library":"builder",
			"type":"message",
			"syntax":[
				"actionSelected <pItemName>"
			],
			"display syntax":[
				"actionSelected <i>pItemName</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Sent when an action item is clicked",
			"parameters":[{
				"name":"pItemName",
				"type":"",
				"refparam":"false",
				"description":"The name of the clicked action item"
			}],
			"description":"Sent when an action item is clicked"
		},{
			"id":"builder-816",
			"name":"actionlabels",
			"display name":"actionLabels",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the actionLabels of <widget> to <pLabelList>\nget the actionLabels of <widget>"
			],
			"display syntax":[
				"set the actionLabels of <i>widget</i> to <i>pLabelList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The labels of the action items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of labels of the action items"
			}],
			"description":"The labels of the action items"
		},{
			"id":"builder-817",
			"name":"actiondata",
			"display name":"actionData",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the actionData of <widget> to <pActionArray>\nget the actionData of <widget>"
			],
			"display syntax":[
				"set the actionData of <i>widget</i> to <i>pActionArray</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The array of action data",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An array describing the <actionNames>, <actionIcons> and <actionLabels> of the widget."
			}],
			"description":"The array of action data"
		},{
			"id":"builder-818",
			"name":"navbarright",
			"display name":"navBarRight",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the navBarRight of <widget>"
			],
			"display syntax":[
				"get the navBarRight of <i>widget</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The horizontal extent of the rendered navigation items",
			"description":"The horizontal extent of the rendered navigation items"
		},{
			"id":"builder-819",
			"name":"navicons",
			"display name":"navIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the navIcons of <widget> to <pIconList>\nget the navIcons of <widget>"
			],
			"display syntax":[
				"set the navIcons of <i>widget</i> to <i>pIconList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The icons of the nav items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of icons of the nav items"
			}],
			"description":"The icons of the nav items"
		},{
			"id":"builder-820",
			"name":"isheader",
			"display name":"isHeader",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the isHeader of <widget> to { true | false }\nget the isHeader of <widget>"
			],
			"display syntax":[
				"set the isHeader of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Whether the widget is a header or footer",
			"description":"Whether the widget is a header or footer"
		},{
			"id":"builder-821",
			"name":"shownavicons",
			"display name":"showNavIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the showNavIcons of <widget> to { true | false }\nget the showNavIcons of <widget>"
			],
			"display syntax":[
				"set the showNavIcons of <i>widget</i> to { true | false }"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Whether to show the nav icons or not",
			"description":"Whether to show the nav icons or not"
		},{
			"id":"builder-822",
			"name":"actionicons",
			"display name":"actionIcons",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the actionIcons of <widget> to <pIconList>\nget the actionIcons of <widget>"
			],
			"display syntax":[
				"set the actionIcons of <i>widget</i> to <i>pIconList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The icons of the action items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of icons of the action items"
			}],
			"description":"The icons of the action items"
		},{
			"id":"builder-823",
			"name":"navlabels",
			"display name":"navLabels",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the navLabels of <widget> to <pLabelList>\nget the navLabels of <widget>"
			],
			"display syntax":[
				"set the navLabels of <i>widget</i> to <i>pLabelList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The labels of the nav items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of labels of the nav items"
			}],
			"description":"The labels of the nav items"
		},{
			"id":"builder-824",
			"name":"minwidth",
			"display name":"minWidth",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the minWidth of <widget>"
			],
			"display syntax":[
				"get the minWidth of <i>widget</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The minimum width needed to display nav items and action items",
			"description":"The minimum width needed to display nav items and action items"
		},{
			"id":"builder-825",
			"name":"actionnames",
			"display name":"actionNames",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the actionNames of <widget> to <pNameList>\nget the actionNames of <widget>"
			],
			"display syntax":[
				"set the actionNames of <i>widget</i> to <i>pNameList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The names of the action items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of names of the action items"
			}],
			"description":"The names of the action items"
		},{
			"id":"builder-826",
			"name":"navnames",
			"display name":"navNames",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the navNames of <widget> to <pNameList>\nget the navNames of <widget>"
			],
			"display syntax":[
				"set the navNames of <i>widget</i> to <i>pNameList</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The names of the nav items",
			"value":[{
				"name":"value",
				"type":"",
				"description":"A list of names of the nav items"
			}],
			"description":"The names of the nav items"
		},{
			"id":"builder-827",
			"name":"navdata",
			"display name":"navData",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the navData of <widget> to <pNavArray>\nget the navData of <widget>"
			],
			"display syntax":[
				"set the navData of <i>widget</i> to <i>pNavArray</i>"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"The array of navigation data",
			"value":[{
				"name":"value",
				"type":"",
				"description":"An array describing the <navNames>, <navIcons> and <navLabels> of the widget."
			}],
			"description":"The array of navigation data"
		},{
			"id":"builder-829",
			"name":"listofstringparsedaslistofnumber",
			"display name":"ListOfStringParsedAsListOfNumber",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Operand> parsed as list of number"
			],
			"display syntax":[
				"<i>Operand</i> parsed as list of number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a list of strings as a list of numbers",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"variable tListOfString as List\nvariable tListOfNum as List\nsplit \"1,2,3,4\" by \",\" into tListOfString\nput tListOfString parsed as list of number into tNum -- tListOfNum contains [ 1, 2, 3, 4 ]"
			},{
				"script":"variable tList as List\nput [\"1\", \"b\", \"3\"] parsed as list of number into tList\n\nvariable tElt as Number\nrepeat with tElt from 1 up to the number of elements in tList\n\tif tList[tElt] is nothing then\n\t\tput 0 into element tElt of tList\n\tend if\nend repeat\n\n// tList contains [ 1, 0, 3 ]"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> parsed as a list of numbers."
			}],
			"description":"Use <ListOfStringParsedAsListOfNumber> when you want to interpret pieces of text numerically. If the input list contains elements which cannot be parsed as numbers, the corresponding element will be nothing.\n\n*Note:* It is an error if any element of <Operand> is not a string.\n"
		},{
			"id":"builder-830",
			"name":"plusunaryoperator",
			"display name":"PlusUnaryOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"+ <Operand>"
			],
			"display syntax":[
				"+ <i>Operand</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Unary plus operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput +5 into tVar -- tVar contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of evaluating <Operand>."
			}],
			"description":"The unary plus operator is a no-op on the predefined numeric types.",
			"tags":["math"]
		},{
			"id":"builder-831",
			"name":"numberformattedasstring",
			"display name":"NumberFormattedAsString",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Operand> formatted as string"
			],
			"display syntax":[
				"<i>Operand</i> formatted as string"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Formats a numeric value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tNum as Number\nput 5 into tNum\nput tNum formatted as string into tString -- tString contains \"5\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> formatted as a string."
			}],
			"description":"Use <NumberFormattedAsString> when you want to manipulate a numeric value as text."
		},{
			"id":"builder-832",
			"name":"plusoperator",
			"display name":"PlusOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> + <Right>"
			],
			"display syntax":[
				"<i>Left</i> + <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary plus operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5 + 4 + 3 into tVar -- tVar contains 12"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of adding the numbers <Left> and <Right>."
			}],
			"description":"Binary plus operator.",
			"tags":["math"]
		},{
			"id":"builder-833",
			"name":"minusunaryoperator",
			"display name":"MinusUnaryOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"- <Operand>"
			],
			"display syntax":[
				"- <i>Operand</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Unary minus operator.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput -(5 + 4) into tVar -- tVar contains -9"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The negated result of evaluating <Operand>."
			}],
			"description":"Unary minus operator.",
			"tags":["math"]
		},{
			"id":"builder-834",
			"name":"numberisgreaterthanorequaltonumber",
			"display name":"NumberIsGreaterThanOrEqualToNumber",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt;= <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt;= <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Greater than or equal to relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is greater than or equal to <Right>, and false otherwise."
			}],
			"description":"Greater than or equal to relation."
		},{
			"id":"builder-835",
			"name":"addnumberto",
			"display name":"AddNumberTo",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"add <Value> to <Target>"
			],
			"display syntax":[
				"add <i>Value</i> to <i>Target</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Adds <Value> to <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric container."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"    variable tVar as Number\n    put 2 into tVar\n    add 10 to tVar -- tVar contains 12"
			}],
			"description":"Adds the number <Value> to <Target>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"builder-836",
			"name":"subtractnumberfrom",
			"display name":"SubtractNumberFrom",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"subtract <Value> from <Target>"
			],
			"display syntax":[
				"subtract <i>Value</i> from <i>Target</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Subtracts <Value> from <Target>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric variable."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as real\nput 10 into tVar\nsubtract 2.5 from tVar -- tVar contains 7.5"
			}],
			"description":"Subtracts the number <Value> from <Target>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"builder-837",
			"name":"numberislessthannumber",
			"display name":"NumberIsLessThanNumber",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt; <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Less than relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is less than <Right>, and false otherwise."
			}],
			"description":"Less than relation.",
			"tags":["math"]
		},{
			"id":"builder-838",
			"name":"numberisequaltonumber",
			"display name":"NumberIsEqualToNumber",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> = <Right>"
			],
			"display syntax":[
				"<i>Left</i> = <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Equal to relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is equal to <Right>, and false otherwise."
			}],
			"description":"Equal to relation.",
			"tags":["math"]
		},{
			"id":"builder-839",
			"name":"dividenumberby",
			"display name":"DivideNumberBy",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"divide <Target> by <Value>"
			],
			"display syntax":[
				"divide <i>Target</i> by <i>Value</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Divides <Target> by <Value>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric variable."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar\nput 3 into tVar\ndivide tVar by 2 -- tVar contains 1.5"
			}],
			"description":"Divides the number <Target> by <Value>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"builder-840",
			"name":"numberislessthanorequaltonumber",
			"display name":"NumberIsLessThanOrEqualToNumber",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> &lt;= <Right>"
			],
			"display syntax":[
				"<i>Left</i> &lt;= <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Less than or equal to relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is less than or equal to <Right>, and false otherwise."
			}],
			"description":"Less than or equal to relation.",
			"tags":["math"]
		},{
			"id":"builder-841",
			"name":"overoperator",
			"display name":"OverOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> / <Right>"
			],
			"display syntax":[
				"<i>Left</i> / <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary division operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 / 5 into tVar -- tVar contains 0.6"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of dividing the number <Left> by <Right>."
			}],
			"description":"Binary division operator.",
			"tags":["math"]
		},{
			"id":"builder-842",
			"name":"numberisnotnumber",
			"display name":"NumberIsNotNumber",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> is not <Right>"
			],
			"display syntax":[
				"<i>Left</i> is not <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Determines if <Left> is not <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is not equal to <Right>, and false otherwise."
			}],
			"description":"Returns the opposite of the <NumberIsNumber> operator.",
			"references":{
				"operator":["NumberIsNumber"]
			},
			"tags":["math"]
		},{
			"id":"builder-843",
			"name":"modoperator",
			"display name":"ModOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> mod <Right>"
			],
			"display syntax":[
				"<i>Left</i> mod <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Mod operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 4^((7 - 1)/2) mod 7 into tVar -- tVar contains 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Left> mod <Right>."
			}],
			"description":"Returns the remainder on dividing <Left> by <Right>"
		},{
			"id":"builder-844",
			"name":"com.livecode.arithmetic",
			"display name":"com.livecode.arithmetic",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.arithmetic"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"This library consists of the basic arithmetic operations of standard library of Extension Builder.",
			"description":"This library consists of the basic arithmetic operations of standard library of Extension Builder."
		},{
			"id":"builder-845",
			"name":"parsestringasnumber",
			"display name":"ParseStringAsNumber",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"parse <Operand> as number"
			],
			"display syntax":[
				"parse <i>Operand</i> as number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a string as an number",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nput \"5.6\" into tString\nparse tString as number -- the result is 5.6"
			},{
				"script":"variable tResult as optional String\nvariable tNum as optional Number\n\nparse \"aaaa\" as number into tNum\n\nif tNum is nothing then\n\tput \"unable to parse string\" into tResult\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"<Operand> parsed as a number, or nothing."
			}],
			"description":"Use <ParseStringAsNumber> when you want to interpret text numerically. The result is nothing if parsing was not possible."
		},{
			"id":"builder-846",
			"name":"parselistofstringaslistofnumber",
			"display name":"ParseListOfStringAsListOfNumber",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"parse <Operand> as list of number"
			],
			"display syntax":[
				"parse <i>Operand</i> as list of number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a list of strings as a list of numbers",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a list of strings."
			}],
			"examples":[{
				"script":"variable tListOfString as List\nvariable tListOfNum as List\nsplit \"1,2,3,4\" by \",\" into tListOfString\nparse tListOfString as list of number into tListOfNum\n-- tListOfNum contains [ 1, 2, 3, 4 ]"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"<Operand> parsed as a list of numbers."
			}],
			"description":"Use <ParseListOfStringAsListOfNumber> when you want to interpret pieces of text numerically. If the input list contains elements which cannot be parsed as numbers, the corresponding element will be nothing.\n\n*Note:* It is an error if any element of <Operand> is not a string."
		},{
			"id":"builder-847",
			"name":"minusoperator",
			"display name":"MinusOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> - <Right>"
			],
			"display syntax":[
				"<i>Left</i> - <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary minus operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5 - 3 - 1 into tVar -- tVar contains 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of subtracting the number <Right> from <Left>."
			}],
			"description":"Binary minus operator.",
			"tags":["math"]
		},{
			"id":"builder-848",
			"name":"wrapoperator",
			"display name":"WrapOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> wrap <Right>"
			],
			"display syntax":[
				"<i>Left</i> wrap <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Wrap operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 5 wrap 3 into tVar -- tVar contains 2"
			},{
				"script":"variable tVar as Number\nput -3 wrap 3 into tVar -- tVar contains -3"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"If x >= 0, then x wrap y returns ((x-1) mod abs(y)) + 1.\n\t\t\tIf x < 0, then x wrap y returns -((x-1) mod abs(y)) + 1."
			}],
			"description":"Use wrap to ensure the value of a variable stays within a specified range. For x,y > 0,\nsuccessive values of x wrap y cycle through the sequence 1, 2, ..., y."
		},{
			"id":"builder-849",
			"name":"numberisnumber",
			"display name":"NumberIsNumber",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> is <Right>"
			],
			"display syntax":[
				"<i>Left</i> is <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Determines if <Left> is <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is equal to <Right>, and false otherwise."
			}],
			"description":"Identical to the <NumberIsEqualToNumber> operator.",
			"references":{
				"operator":["NumberIsEqualToNumber"]
			},
			"tags":["math"]
		},{
			"id":"builder-850",
			"name":"formatnumberasstring",
			"display name":"FormatNumberAsString",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"format <Operand> as string"
			],
			"display syntax":[
				"format <i>Operand</i> as string"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Formats a numeric value as a string",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tNum as Number\nvariable tString as String\nput 5 into tNum\nformat tNum as string into tString\n-- tString contains \"5\""
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"<Operand> formatted as a string."
			}],
			"description":"Use <FormatNumberAsString> when you want to manipulate a numeric value as text."
		},{
			"id":"builder-851",
			"name":"timesoperator",
			"display name":"TimesOperator",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> * <Right>"
			],
			"display syntax":[
				"<i>Left</i> * <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Binary multiplication operator.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 * 5 into tVar -- tVar contains 15"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of multiplying the numbers <Left> and <Right>."
			}],
			"description":"Binary multiplication operator.",
			"tags":["math"]
		},{
			"id":"builder-852",
			"name":"stringparsedasnumber",
			"display name":"StringParsedAsNumber",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Operand> parsed as number"
			],
			"display syntax":[
				"<i>Operand</i> parsed as number"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Parses a string as an number",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a string."
			}],
			"examples":[{
				"script":"variable tString as String\nvariable tNum as optional Number\nput \"5.6\" into tString\nput tString parsed as number into tNum -- tNum contains 5.6"
			},{
				"script":"variable tNum as optional Number\nput \"aaaa\" parsed as number into tNum\n\nif tNum is nothing then\n\tput 0 into tNum\nend if\n\n// tNum contains 0"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"<Operand> parsed as a number, or nothing."
			}],
			"description":"Use <StringParsedAsNumber> when you want to interpret text numerically. nothing is returned if parsing was not possible."
		},{
			"id":"builder-853",
			"name":"numberisgreaterthannumber",
			"display name":"NumberIsGreaterThanNumber",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> &gt; <Right>"
			],
			"display syntax":[
				"<i>Left</i> &gt; <i>Right</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Greater than relation.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <Left> is greater than <Right>, and false otherwise."
			}],
			"description":"Greater than relation."
		},{
			"id":"builder-854",
			"name":"multiplynumberby",
			"display name":"MultiplyNumberBy",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"multiply <Target> by <Value>"
			],
			"display syntax":[
				"multiply <i>Target</i> by <i>Value</i>"
			],
			"associations":["com.livecode.arithmetic"],
			"summary":"Multiplies <Target> by <Value>.",
			"parameters":[{
				"name":"Target",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a numeric variable."
			},{
				"name":"Value",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a number."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 2 into tVar\nmultiply tVar by 2 -- tVar contains 4"
			}],
			"description":"Multiplies the number <Target> by <Value>.\n\n>*Note:* It is a syntax error if <Target> does not evaluate to a variable.",
			"tags":["math"]
		},{
			"id":"builder-855",
			"name":"com.livecode.library.objectrepository",
			"display name":"com.livecode.library.objectrepository",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.objectrepository"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"This library provides support persistent object references within a session",
			"description":"This library provides support persistent object references within a session"
		},{
			"id":"builder-856",
			"name":"objectrepositorystore",
			"display name":"objectRepositoryStore",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"objectRepositoryStore(<pObject>)"
			],
			"display syntax":[
				"objectRepositoryStore(<i>pObject</i>)"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"Store an object in the object repository and get its ID",
			"parameters":[{
				"name":"pObject",
				"type":"",
				"refparam":"false",
				"description":"An object long ID"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An object repository ID which can be used to get the current long id of\nthe object"
			}],
			"description":"As long ID of an object may mutate during a session the IDE needs an\nobject reference that can handle that mutation."
		},{
			"id":"builder-857",
			"name":"objectrepositoryflush",
			"display name":"objectRepositoryFlush",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"objectRepositoryFlush()"
			],
			"display syntax":[
				"objectRepositoryFlush()"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"Flush deleted objects from the repository",
			"description":"As long ID of an object may mutate during a session the IDE needs an\nobject reference that can handle that mutation."
		},{
			"id":"builder-858",
			"name":"objectrepositoryretrieve",
			"display name":"objectRepositoryRetrieve",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"objectRepositoryRetrieve(<pID>)"
			],
			"display syntax":[
				"objectRepositoryRetrieve(<i>pID</i>)"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"Retrieve an object long id from the object repository",
			"parameters":[{
				"name":"pID",
				"type":"",
				"refparam":"false",
				"description":"An object repository ID"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An object long ID or empty if the object is not in the repository or\nno longer exists"
			}],
			"description":"As long ID of an object may mutate during a session the IDE needs an\nobject reference that can handle that mutation."
		},{
			"id":"builder-859",
			"name":"objectrepositoryremove",
			"display name":"objectRepositoryRemove",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"objectRepositoryRemove(<pID>)"
			],
			"display syntax":[
				"objectRepositoryRemove(<i>pID</i>)"
			],
			"associations":["com.livecode.library.objectrepository"],
			"summary":"Remove and object from the object repository",
			"parameters":[{
				"name":"pID",
				"type":"",
				"refparam":"false",
				"description":"An object repository ID\n"
			}],
			"description":"As long ID of an object may mutate during a session the IDE needs an\nobject reference that can handle that mutation."
		},{
			"id":"builder-860",
			"name":"com.livecode.stream",
			"display name":"com.livecode.stream",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.stream"
			],
			"associations":["com.livecode.stream"],
			"summary":"This module specifies the syntax definitions and bindings for\nstream input and output operations in modular LiveCode.",
			"description":"This module specifies the syntax definitions and bindings for\nstream input and output operations in modular LiveCode."
		},{
			"id":"builder-861",
			"name":"writetostream",
			"display name":"WriteToStream",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"write <Buffer> to <Destination>"
			],
			"display syntax":[
				"write <i>Buffer</i> to <i>Destination</i>"
			],
			"associations":["com.livecode.stream"],
			"summary":"Write data to a stream.\nStream:An expression that evaluates to a stream.",
			"parameters":[{
				"name":"Buffer",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to binary data."
			}],
			"description":"Write some data to a stream.  If not all of the data can be written,\nfails with an error.\n\n>*Warning:* If the stream is able to accept only part of the data,\n>some streams will write that part of the data and discard the rest.\n>This may cause loss of data.",
			"tags":["io"]
		},{
			"id":"builder-862",
			"name":"defaulterrorstream",
			"display name":"DefaultErrorStream",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the error stream"
			],
			"display syntax":[
				"the error stream"
			],
			"associations":["com.livecode.stream"],
			"summary":"Default error stream.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The default error stream."
			}],
			"description":"The default error stream for diagnostic information.\n\nIn command-line programs, this is usually used to display error\nmessages.  In server programs, data output through this stream may be\nstored in the system log, depending on the server configuration.",
			"tags":["io"]
		},{
			"id":"builder-863",
			"name":"defaultoutputstream",
			"display name":"DefaultOutputStream",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the output stream"
			],
			"display syntax":[
				"the output stream"
			],
			"associations":["com.livecode.stream"],
			"summary":"Default output stream.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"The default output stream."
			}],
			"description":"The default output stream for output from the program.\n\nIn command-line programs, this is usually used to output the results\nof running the program.  In CGI programs running on servers, this is\nusually used to output the data to be sent to the client.",
			"tags":["io"]
		},{
			"id":"builder-864",
			"name":"unitplan",
			"display name":"UnitPlan",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"plan <Count> tests"
			],
			"display syntax":[
				"plan <i>Count</i> tests"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Announce how many test results are expected from the unit test.",
			"examples":[{
				"script":"plan 3 tests"
			}],
			"description":"Log the number of unit test assertions which are expected to occur in the\ncurrent unit test.  This may be used by the test framework to flag an error if\ntoo few test results appear in the test result.  For example, this allows the\ntest framework to detect whether a unit test failed silently.\n\nUsing `plan _ tests` is optional, and a unit test is valid even if its omitted.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-865",
			"name":"unittestfailsdescription",
			"display name":"UnitTestFailsDescription",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"broken test <Description> when <Condition>"
			],
			"display syntax":[
				"broken test <i>Description</i> when <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion with a description",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			}],
			"examples":[{
				"script":"broken test \"weird comparison\" when 1 > 2"
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail. The test is\nconsidered to have passed if <Condition> is true.  The <Description> string is\na short message that summarises what the test is checking.\n\nIf the test fails, it will not cause a test suite failure; instead, an\n\"expected failure\" will be recorded.  If the test passes, an \"unexpected pass\"\nwill be recorded instead of a normal test pass.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-866",
			"name":"unittestfailsdescriptionandreason",
			"display name":"UnitTestFailsDescriptionAndReason",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"broken test <Description> when <Condition> because <Reason>"
			],
			"display syntax":[
				"broken test <i>Description</i> when <i>Condition</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion with a reason for brokenness",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			},{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"A short explanation of why the test is broken"
			}],
			"examples":[{
				"script":"broken test \"weird comparison\" when 1 > 2 because \"bug 12345\""
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail. The test is\nconsidered to have passed if <Condition> is true.  The <Description> is a\nmessage that summarises the broken test, and the <Reason> explains why the test\nis broken (usually referencing a bug report).\n\nIf the test fails, it will not cause a test suite failure; instead, an\n\"expected failure\" will be recorded.  If the test passes, an \"unexpected pass\"\nwill be recorded instead of a normal test pass.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-867",
			"name":"unittestfailsreason",
			"display name":"UnitTestFailsReason",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"broken test <Condition> because <Reason>"
			],
			"display syntax":[
				"broken test <i>Condition</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion with a reason for brokenness",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			},{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"A short explanation of why the test is broken"
			}],
			"examples":[{
				"script":"broken test 1 > 2 because \"bug 12345\""
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail. The test is\nconsidered to have passed if <Condition> is true.  The <Reason> is a shor\nmessage that describes why the test is broken (usually referencing a bug\nreport).\n\nIf the test fails, it will not cause a test suite failure; instead, an\n\"expected failure\" will be recorded.  If the test passes, an \"unexpected pass\"\nwill be recorded instead of a normal test pass.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-868",
			"name":"unittestfails",
			"display name":"UnitTestFails",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"broken test <Condition>"
			],
			"display syntax":[
				"broken test <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a failing unit test assertion",
			"examples":[{
				"script":"broken test 1 > 2"
			}],
			"description":"Make a unit test assertion, in the expectation that it will fail, and without\nproviding a description or reason.  It is usually more helpful to use\n<UnitTestFailsDescriptionAndReason>.",
			"references":{
				"statement":["UnitTestFailsDescriptionAndReason"]
			},
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-869",
			"name":"unittestskipdescriptionandreason",
			"display name":"UnitTestSkipDescriptionAndReason",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"skip test <Description> because <Reason>"
			],
			"display syntax":[
				"skip test <i>Description</i> because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test with a test description and reason for skipping",
			"parameters":[{
				"name":"Reason",
				"type":"",
				"refparam":"false",
				"description":"A brief explanation of why the test was skipped"
			}],
			"examples":[{
				"script":"skip test \"open web socket\" because \"not implemented\""
			}],
			"description":"Record that a test was skipped.  The <Description> is a message that summarises\nthe test that was skipped, and the <Reason> explains why the test couldn't be\ndone.  For example, the feature being tested isn't supported by the platform\nthat the test is running on.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-870",
			"name":"unittestskip",
			"display name":"UnitTestSkip",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"skip test"
			],
			"display syntax":[
				"skip test"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test",
			"description":"Record that a test was skipped, with no description or reason.  It is usually\nmore helpful to use <UnitTestSkipDescriptionAndReason>.",
			"references":{
				"statement":["UnitTestSkipDescriptionAndReason"]
			},
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-871",
			"name":"unittestskipreason",
			"display name":"UnitTestSkipReason",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"skip test because <Reason>"
			],
			"display syntax":[
				"skip test because <i>Reason</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test with a reason for skipping",
			"examples":[{
				"script":"skip test because \"not implemented\""
			}],
			"description":"Record that a test was skipped, including a reason for skipping the test.  The\n<Reason> is a short message that describes why the test has to be skipped.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-872",
			"name":"unitdiagnostic",
			"display name":"UnitDiagnostic",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"test diagnostic <Message>"
			],
			"display syntax":[
				"test diagnostic <i>Message</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Log unit test diagnostic message.",
			"examples":[{
				"script":"test diagnostic \"File access tests\""
			}],
			"description":"Log a message as a test diagnostic.  The <Message> may have multiple lines.\nYou may wish to log diagnostic messages to help make the test log easier to\nread by adding info about what's being tested, or add information when a test\nfails to help understand why the failure occurred.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-873",
			"name":"unittestskipdescription",
			"display name":"UnitTestSkipDescription",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"skip test <Description>"
			],
			"display syntax":[
				"skip test <i>Description</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Record a skipped test with a description",
			"examples":[{
				"script":"skip test \"open web socket\""
			}],
			"description":"Record that a test was skipped.  The <Description> string is a short message\nthat summarises the test that was skipped.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-874",
			"name":"com.livecode.unittest",
			"display name":"com.livecode.unittest",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.unittest"
			],
			"associations":["com.livecode.unittest"],
			"summary":"This library provides syntax for unit testing Builder\nprograms.  It is used by the Extension Builder standard library's\ntestsuite.\n\nTo use this library, write your tests in a Builder source code file.\nEach group of tests should be a public handler with a name beginning\nwith `Test`.  If possible, use one test per handler.  Otherwise, add a\n`plan N tests` statement at the start of the handler.",
			"examples":[{
				"script":"public handler TestSelf()\n\tplan 10 tests\n\n\ttest diagnostic \"Normal tests\"\n\ttest 2 > 1\n\ttest \"Basic test\" when true\n\n\ttest diagnostic \"Skipped tests\"\n\tskip test\n\tskip test \"Skipped 2\"\n\tskip test because \"Not implemented\"\n\tskip test \"Skipped 4\" because \"Not supported on this platform\"\n\n\ttest diagnostic \"Tests which are expected to fail\"\n\tbroken test false\n\tbroken test \"Failed 2\" when false\n\tbroken test false because \"broken\"\n\tbroken test \"Failed 4\" when false because \"really broken\"\nend handler\n\nThe test results are output on standard output in TAP (Test Anything\nProtocol) format."
			}],
			"description":"This library provides syntax for unit testing Builder\nprograms.  It is used by the Extension Builder standard library's\ntestsuite.\n\nTo use this library, write your tests in a Builder source code file.\nEach group of tests should be a public handler with a name beginning\nwith `Test`.  If possible, use one test per handler.  Otherwise, add a\n`plan N tests` statement at the start of the handler."
		},{
			"id":"builder-875",
			"name":"unittest",
			"display name":"UnitTest",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"test <Condition>"
			],
			"display syntax":[
				"test <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a unit test assertion",
			"examples":[{
				"script":"test 2 > 1"
			}],
			"description":"Make a basic unit test assertion, with no test description.  It is usually more\nhelpful to use <UnitTestDescription>.",
			"references":{
				"statement":["UnitTestDescription"]
			},
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-876",
			"name":"unittestdescription",
			"display name":"UnitTestDescription",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"test <Description> when <Condition>"
			],
			"display syntax":[
				"test <i>Description</i> when <i>Condition</i>"
			],
			"associations":["com.livecode.unittest"],
			"summary":"Make a unit test assertion with a description",
			"parameters":[{
				"name":"Condition",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to `true` if the test is successful"
			}],
			"examples":[{
				"script":"test \"integer greater than\" when 2 > 1"
			}],
			"description":"Make a unit test assertion.  The test is considered to have passed if\n<Condition> is true.  The <Description> string is a short message that\nsummarises what the test is checking.",
			"tags":["unit tests","unit tests"]
		},{
			"id":"builder-877",
			"name":"label",
			"display name":"label",
			"library":"builder",
			"type":"property",
			"syntax":[
				"set the label of <widget> to <pLabel>\nget the label of <widget>"
			],
			"display syntax":[
				"set the label of <i>widget</i> to <i>pLabel</i>"
			],
			"associations":["com.livecode.widget.native.emscripten.button"],
			"summary":"The label displayed by the button.",
			"OS":["html5"],
			"examples":[{
				"script":"set the label of widget \"HTML5 Button\" to \"Click me!\""
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The string to use as the button label"
			}],
			"description":"The <label> property is the label displayed by the button.\n"
		},{
			"id":"builder-878",
			"name":"com.livecode.widget.native.emscripten.button",
			"display name":"com.livecode.widget.native.emscripten.button",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.native.emscripten.button"
			],
			"associations":["com.livecode.widget.native.emscripten.button"],
			"summary":"This widget is a native button in HTML5.",
			"OS":["html5"],
			"description":"This widget is a native button in HTML5."
		},{
			"id":"builder-879",
			"name":"deletedirectory",
			"display name":"DeleteDirectory",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete directory <Directory>"
			],
			"display syntax":[
				"delete directory <i>Directory</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"Delete a directory.",
			"parameters":[{
				"name":"Directory",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Deletes a directory.  The directory must be empty.",
			"tags":["io","filesystem"]
		},{
			"id":"builder-880",
			"name":"com.livecode.file",
			"display name":"com.livecode.file",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.file"
			],
			"associations":["com.livecode.file"],
			"summary":"This module specifies the syntax definitions and bindings for\nfilesystem operations in Extension Builder.\n\n>*Note:* This module is currently experimental and unstable.  The\n>syntax is may change in future versions of Extension Builder.",
			"description":"This module specifies the syntax definitions and bindings for\nfilesystem operations in Extension Builder.\n\n>*Note:* This module is currently experimental and unstable.  The\n>syntax is may change in future versions of Extension Builder."
		},{
			"id":"builder-881",
			"name":"getdirectoryentries",
			"display name":"GetDirectoryEntries",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the entries of directory <Directory>"
			],
			"display syntax":[
				"the entries of directory <i>Directory</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"List the contents of a directory.",
			"parameters":[{
				"name":"Directory",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Returns a List containing the directory entries of a directory.  The\ndirectory must exist.",
			"tags":["io","filesystem"]
		},{
			"id":"builder-882",
			"name":"deletefile",
			"display name":"DeleteFile",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"delete file <File>"
			],
			"display syntax":[
				"delete file <i>File</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"Delete a file from the filesystem.",
			"parameters":[{
				"name":"File",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Deletes the specified file.  The file must exist.",
			"tags":["io","filesystem"]
		},{
			"id":"builder-883",
			"name":"createdirectory",
			"display name":"CreateDirectory",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"create directory <Directory>"
			],
			"display syntax":[
				"create directory <i>Directory</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"Create a named directory.",
			"parameters":[{
				"name":"Directory",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"Creates a new, empty directory.  The directory must not already exist.",
			"tags":["io","filesystem"]
		},{
			"id":"builder-884",
			"name":"filecontents",
			"display name":"FileContents",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"the contents of file <File>"
			],
			"display syntax":[
				"the contents of file <i>File</i>"
			],
			"associations":["com.livecode.file"],
			"summary":"The data stored in a file.",
			"parameters":[{
				"name":"File",
				"type":"",
				"refparam":"false",
				"description":"An expression that evaluates to a filesystem path."
			}],
			"description":"The raw data stored in a file.\n\n>*Note:* Setting the contents of a file will replace the file with a\n>newly-created file with the new contents.",
			"tags":["io","filesystem"]
		},{
			"id":"builder-885",
			"name":"macstatusmenusetcustomicon",
			"display name":"macStatusMenuSetCustomIcon",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"macStatusMenuSetCustomIcon(<pCharacter>,<pImage>)"
			],
			"display syntax":[
				"macStatusMenuSetCustomIcon(<i>pCharacter</i>,<i>pImage</i>)"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Create a custom icon for use when setting menu items",
			"OS":["mac"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pCharacter",
				"type":"",
				"refparam":"false",
				"description":"a single character to associate with the icon. May not be\nc, n or m as those characters are reserved"
			},{
				"name":"pImage",
				"type":"",
				"refparam":"false",
				"description":"the path to an image file or a reference to an image object. If\nit is an imported image then it must be in a format supported by\n`NSImage -initWithContentsOfFile`."
			}],
			"examples":[{
				"script":"macStatusMenuCreate \"r\", the long id of image \"dot\""
			}],
			"description":"When creating the menu items the icon to use for the item is identified by `!`\nfollowed by a character. The builtin icons are `c` (checkmark), `n` (no checkmark)\nand `m` (mixed state). Use <macStatusMenuSetCustomIcon> to add another custom icon\nto use.\n"
		},{
			"id":"builder-886",
			"name":"macstatusmenucreate",
			"display name":"macStatusMenuCreate",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"macStatusMenuCreate(<pName>)"
			],
			"display syntax":[
				"macStatusMenuCreate(<i>pName</i>)"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Create a status menu",
			"OS":["mac"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of the status menu to create"
			}],
			"examples":[{
				"script":"macStatusMenuCreate \"mymenu\""
			}],
			"description":"Use <pName> to refer to the status menu when setting properties and deleting\nthe status menu."
		},{
			"id":"builder-887",
			"name":"macstatusmenunames",
			"display name":"macStatusMenuNames",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"macStatusMenuNames()"
			],
			"display syntax":[
				"macStatusMenuNames()"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Get the names of any menus that have been created",
			"OS":["mac"],
			"platforms":["desktop"],
			"examples":[{
				"script":"if \"mymenu\" is among the lines of macStatusMenuNames() then\n\tmacStatusMenuDelete \"mymenu\"\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A return delimited list of menu names."
			}],
			"description":"Use macStatusMenuNames to ensure that a menu has been created before calling a\nhandler that may throw an error if called with a menu that does not exist."
		},{
			"id":"builder-888",
			"name":"macstatusmenudelete",
			"display name":"macStatusMenuDelete",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"macStatusMenuDelete(<pName>)"
			],
			"display syntax":[
				"macStatusMenuDelete(<i>pName</i>)"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Delete a status menu",
			"OS":["mac"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of a previously created status menu"
			}],
			"examples":[{
				"script":"macStatusMenuDelete \"mymenu\""
			}],
			"description":"Deleting the status menu removes it from the staus menubar"
		},{
			"id":"builder-889",
			"name":"macstatusmenupick",
			"display name":"macStatusMenuPick",
			"library":"builder",
			"type":"message",
			"syntax":[
				"macStatusMenuPick <pName>, <pChosenItem>"
			],
			"display syntax":[
				"macStatusMenuPick <i>pName</i>, <i>pChosenItem</i>"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Sent when an item is picked from the menu",
			"OS":["mac"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of the status menu that the item was picked from"
			},{
				"name":"pChosenItem",
				"type":"",
				"refparam":"false",
				"description":"The label of the menu item the user chose. If the menu item chosen\nis part of a submenu, the menu item label is followed by a vertical bar (|) and\nthe submenu's label."
			}],
			"description":"The <macStatusMenuPick> message is sent to the object that created the status\nmenu using the <macStatusMenuCreate> handler.",
			"references":{
				"handler":["macStatusMenuCreate"]
			}
		},{
			"id":"builder-890",
			"name":"macstatusmenuset",
			"display name":"macStatusMenuSet",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"macStatusMenuSet(<pName>,<pProperty>,<pValue>)"
			],
			"display syntax":[
				"macStatusMenuSet(<i>pName</i>,<i>pProperty</i>,<i>pValue</i>)"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Set a property on a status menu",
			"OS":["mac"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pName",
				"type":"",
				"refparam":"false",
				"description":"The name of a previously created status menu"
			},{
				"name":"pProperty",
				"type":"",
				"refparam":"false",
				"description":" - \"visible\" - (boolean) set to false to hide the menu. Defaults to true.\n - \"enabled\" - (boolean) set to false to make the menu appear disabled. Use in\n comination with setting the items to empty so that the menu does not show when\n the user clicks on it. Defaults to true.\n - \"tooltip\" - (string) the tooltip to show over the status menu\n - \"icongravity\" - (enum) one of \"left\", \"right\" or \"center\". Used when displaying\n both a menu title and icon\n - \"length\" - one of \"square\", \"variable\" or a number. Note \"variable\" mode does\n not appear to dynamically update the width as stated in Apple documentation.\n - \"icon\" - (string) the full path to an image file or a reference to an image object. If\n the image object has its filename set it must be a full path. If it is an imported\n image then it must be in a format supported by NSImage -initWithContentsOfFile.\n Setting the icon to empty to clear it.\n - \"title\" - (string) the title of the menu. Set to empty (the default) to only use an icon.\n - \"items\" - (string) the items of is a similar format used by the script engines menus"
			},{
				"name":"pValue",
				"type":"",
				"refparam":"false",
				"description":"The value as described for each property"
			}],
			"examples":[{
				"script":"on EnableStatusMenu pEnabled\n   macStatusMenuSet \"mymenu\", \"enabled\", pEnabled\n   if pEnabled then\n      macStatusMenuSet \"mymenu\", \"icon\", the long id of image \"enabled\"\n      macStatusMenuSet \"mymenu\", \"items\", \"Open\" & return & \"-\" & return & \"Settings\"\n   else\n      macStatusMenuSet \"mymenu\", \"icon\", the long id of image \"disabled\"\n      macStatusMenuSet \"mymenu\", \"items\", empty\n   end if\nend EnableStatusMenu"
			}],
			"description":"Specify the menu items in the following form:\n\n    [<flags>] <label> ['/' <accelerator> ['|' <tag>]]\n\nWhere <flags> may include:\n\n!c, !n, !m: the menu item has respectively, a check, no check, or a mixed state icon\n\n>**Note:** A difference between standard xTalk script engine menus and the macStatusMenu\n> library is that the radio button (!r) used in the script engine menus is not supported,\n> however, the mixed state (!m) is. Additionally you can use the <macStatusMenuSetCustomIcon>\n> command to specify a custom icon.\n\n(: the menu item is disabled\n\n-: the menu item is replaced with a menu separator\n\nmultiple tab characters: the number of tabs specifes the depth of the menu item;\nuse this to create submenus\n\nThe <accelerator> can be specified as one of:\nchar:Command key + specified char\nkeyname:Named key without modifiers\nmodifiers char: Specified modifiers + character\nmodifiers keyname: Specified modifiers + named key\nIn the accelerator, modifiers is either a space separated list of:\n\n- 'command' or 'cmd'\n- 'control' or 'ctrl'\n- 'option' or 'opt', 'alt', 'shift'\n\nIn this case the keyname/char should be separated from the list by a space\n\nOr modifiers may be a sequence of characters, including:\n\n^: Command\n@: Shift\n#: Option\n%: Control\n\nIn this case no space between the sequence and keyname/char is required\n\nThe following named keys are supported:\n\nF1, F2, F3, F4, ... F15,\nLeft, Up, Right, Down,\nBackspace, Delete,\nTab, Space,\nReturn, Enter,\nHome, End, Escape,\nPgUp, PgDown\n\nA tag can be specified as a | character followed by a string of ASCII characters.\nIf such a tag is present then that tag will take the place of the menu label as\nthe parameter to the menuPick.\n\nA tag will only be recognised following the <accelerator>. To specify a menu tag\nwithout an accelerator shortcut, an empty <accelerator> can be specified using /|\nfollowed by the tag text.",
			"references":{
				"handler":["macStatusMenuSetCustomIcon"]
			}
		},{
			"id":"builder-891",
			"name":"com.livecode.library.native.mac.statusmenu",
			"display name":"com.livecode.library.native.mac.statusmenu",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.native.mac.statusmenu"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Manage mac status menus",
			"description":"This library allows the creation and management of mac status menus"
		},{
			"id":"builder-892",
			"name":"com.livecode.library.toast",
			"display name":"com.livecode.library.toast",
			"library":"builder",
			"type":"library",
			"display syntax":[
				"com.livecode.library.toast"
			],
			"associations":["com.livecode.library.toast"],
			"summary":"A library for displaying toasts on mobile",
			"OS":["android"],
			"description":"A toast is a non-modal temporary notification displayed to the user."
		},{
			"id":"builder-893",
			"name":"mobiletoastcancel",
			"display name":"mobileToastCancel",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"mobileToastCancel()"
			],
			"display syntax":[
				"mobileToastCancel()"
			],
			"associations":["com.livecode.library.toast"],
			"summary":"Cancel the current toast",
			"OS":["android"],
			"description":"Use <mobileToastCancel> to cancel the currently displayed toast."
		},{
			"id":"builder-894",
			"name":"mobiletoast",
			"display name":"mobileToast",
			"library":"builder",
			"type":"handler",
			"syntax":[
				"mobileToast(<pMessage>,<pDuration>)"
			],
			"display syntax":[
				"mobileToast(<i>pMessage</i>,<i>pDuration</i>)"
			],
			"associations":["com.livecode.library.toast"],
			"summary":"Display a toast notification",
			"OS":["android"],
			"parameters":[{
				"name":"pMessage",
				"type":"",
				"refparam":"false",
				"description":"The message to display"
			},{
				"name":"pDuration",
				"type":"",
				"refparam":"false",
				"description":"The duration of the notification. Either a positive integer, the string\n\"long\" or the string \"short\"."
			}],
			"examples":[{
				"script":"mobileToast \"Hello, I am a toast!\", \"short\""
			}],
			"description":"Use the <mobileToast> handler to display a temporary non-modal \nnotification with a specified message, for the given duration.\n"
		},{
			"id":"builder-895",
			"name":"bitwiseshiftleft",
			"display name":"BitwiseShiftLeft",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Operand> shifted left by <Shift> bitwise"
			],
			"display syntax":[
				"<i>Operand</i> shifted left by <i>Shift</i> bitwise"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Shifts the bits of <Operand> left.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Shift",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar\nput 7 shifted left by 2 bitwise into tVar -- tVar contains 28"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of bit-shifting <Operand> left by <Shift> places."
			}],
			"description":"Shifts the bits of <Operand> left. Shifting the bits of <Operand> left\nby x is equivalent to multiplying by 2^x.",
			"tags":["bitwise operations"]
		},{
			"id":"builder-896",
			"name":"bitwiseor",
			"display name":"BitwiseOr",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> bitwise or <Right>"
			],
			"display syntax":[
				"<i>Left</i> bitwise or <i>Right</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise OR operation on the binary representations of <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 bitwise or 6 into tVar -- tVar contains 7"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise OR operation."
			}],
			"description":"Each bit of <Left> bitwise or <Right> is 0 if and only if both the corresponding bit of the binary representation of <Left> and that of <Right> is 0. Otherwise it is 1.",
			"tags":["bitwise operations"]
		},{
			"id":"builder-897",
			"name":"bitwisexor",
			"display name":"BitwiseXor",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> bitwise xor <Right>"
			],
			"display syntax":[
				"<i>Left</i> bitwise xor <i>Right</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise XOR operation on the binary representations of <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 bitwise xor 6 into tVar -- tVar contains 5"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise XOR operation."
			}],
			"description":"Each bit of <Left> bitwise xor <Right> is 1 if and only if exactly one of the corresponding bits of the binary representation of <Left> and that of <Right> is 1. Otherwise it is 0.",
			"tags":["bitwise operations"]
		},{
			"id":"builder-898",
			"name":"bitwisenot",
			"display name":"BitwiseNot",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"bitwise not <Operand>"
			],
			"display syntax":[
				"bitwise not <i>Operand</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise NOT operation on the binary representation of <Operand>.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput bitwise not -5 into tVar -- tVar contains 4"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise NOT operation."
			}],
			"description":"Bitwise not returns the complement of <Operand> as a signed two's\ncomplement integer, i.e. equivalent to -(x + 1).",
			"tags":["bitwise operations"]
		},{
			"id":"builder-899",
			"name":"bitwiseshiftright",
			"display name":"BitwiseShiftRight",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Operand> shifted right by <Shift> bitwise"
			],
			"display syntax":[
				"<i>Operand</i> shifted right by <i>Shift</i> bitwise"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Shifts the bits of <Operand> right.",
			"parameters":[{
				"name":"Operand",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Shift",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar\nput 7 shifted right by 2 bitwise into tVar -- tVar contains 1"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The result of bit-shifting <Operand> right by <Shift> places."
			}],
			"description":"Shifts the bits of <Operand> right. Shifting the bits of <Operand>\nright by x is equivalent to dividing by 2^x (rounding down)",
			"tags":["bitwise operations"]
		},{
			"id":"builder-900",
			"name":"bitwiseand",
			"display name":"BitwiseAnd",
			"library":"builder",
			"type":"operator",
			"syntax":[
				"<Left> bitwise and <Right>"
			],
			"display syntax":[
				"<i>Left</i> bitwise and <i>Right</i>"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"Performs a bitwise AND operation on the binary representations of <Left> and <Right>.",
			"parameters":[{
				"name":"Left",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			},{
				"name":"Right",
				"type":"",
				"refparam":"false",
				"description":"An expression which evaluates to an integer."
			}],
			"examples":[{
				"script":"variable tVar as Number\nput 3 bitwise and 6 into tVar -- tVar contains 2"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The integer whose binary representation is the result of the bitwise AND operation."
			}],
			"description":"Each bit of <Left> bitwise and <Right> is 1 if and only if both the corresponding bit of the binary representation of <Left> and that of <Right> is 1. Otherwise it is 0.",
			"tags":["bitwise operations"]
		},{
			"id":"builder-901",
			"name":"com.livecode.bitwise",
			"display name":"com.livecode.bitwise",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.bitwise"
			],
			"associations":["com.livecode.bitwise"],
			"summary":"This module specifies the bitwise operations on integers included in the standard library of Extension Builder.",
			"description":"This module specifies the bitwise operations on integers included in the standard library of Extension Builder."
		},{
			"id":"builder-902",
			"name":"commandname",
			"display name":"CommandName",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the command name"
			],
			"display syntax":[
				"the command name"
			],
			"associations":["com.livecode.system"],
			"summary":"The command name",
			"examples":[{
				"script":"-- Program that only succeeds if it's run as the \"true\"\n-- command.\nvariable tCommand as String\nput the command name into tCommand\nif tCommand ends with \"true\" then\n\tquit with status 0\nelse\n\tquit with status 1\nend if"
			}],
			"description":"Evaluates to the name that was used to execute the program, possibly\nincluding path information.\n"
		},{
			"id":"builder-903",
			"name":"systemerrorcode",
			"display name":"SystemErrorCode",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the system error code"
			],
			"display syntax":[
				"the system error code"
			],
			"associations":["com.livecode.system"],
			"summary":"The system error code.",
			"description":"Evaluates to the current platform-dependent system error code.\n\n- On Windows, returns the result of `GetLastError()`.\n\n- On other platforms, returns the current value of `errno`.\n\n> **Note:** The system error code may be modified or cleared by any\n> syntax that interacts with the operating system (e.g. by performing\n> input or output).  You should check the system error code as soon as\n> possible after any platform operation that might fail.",
			"tags":["system"]
		},{
			"id":"builder-904",
			"name":"operatingsystem",
			"display name":"OperatingSystem",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the operating system"
			],
			"display syntax":[
				"the operating system"
			],
			"associations":["com.livecode.system"],
			"summary":"The operating system",
			"examples":[{
				"script":"if the operating system is \"linux\" then\n\t- Platform specific-code\nend if"
			}],
			"description":"Returns a string describing the operating system that LiveCode is\nrunning on.  The possible values are:\n\n* \"windows\" - 32-bit and 64-bit Windows\n* \"mac\" - Desktop OS X\n* \"ios\" - iOS (iPhone and iPad)\n* \"android\" - Android Linux devices\n* \"linux\" - All other Linux platforms",
			"tags":["system"]
		},{
			"id":"builder-905",
			"name":"resetsystemerror",
			"display name":"ResetSystemError",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"reset system error"
			],
			"display syntax":[
				"reset system error"
			],
			"associations":["com.livecode.system"],
			"summary":"Clear the system error code.",
			"description":"Reset the system error code to its platform-dependent default (\"no\nerror\") value.",
			"tags":["system"]
		},{
			"id":"builder-906",
			"name":"commandarguments",
			"display name":"CommandArguments",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the command arguments"
			],
			"display syntax":[
				"the command arguments"
			],
			"associations":["com.livecode.system"],
			"summary":"The command arguments",
			"examples":[{
				"script":"-- Program that only succeeds if it's run as the \"true\"\n-- command.\nvariable tCommand as String\nput the command name into tCommand\nif tCommand ends with \"true\" then\n\tquit with status 0\nelse\n\tquit with status 1\nend if"
			}],
			"description":"Evaluates to a list of command-line arguments passed to the program.\nSome arguments may not be passed in if they are \"used up\" by the\nLiveCode run-time environment (for example, the LiveCode IDE will\ndetect and \"use\" the `-mmap` argument).\n\n> **Note:** No filename conversion is performed on command line\n> arguments, so some processing may be required before using a command\n> line argument with any of the file handling syntax provided by the\n> `com.livecode.file` module."
		},{
			"id":"builder-907",
			"name":"quitwithstatus",
			"display name":"QuitWithStatus",
			"library":"builder",
			"type":"statement",
			"syntax":[
				"quit [ with status <Status> ]"
			],
			"display syntax":[
				"quit [ with status <i>Status</i> ]"
			],
			"associations":["com.livecode.system"],
			"summary":"Quit the application",
			"examples":[{
				"script":"-- Quit, indicating that the application ran successfully (code 0)\nquit\n\n-- Quit, with a specific error code\nquit with status 42"
			}],
			"description":"Exit the program immediately and unconditionally, returning a status\nnumber to the operating system.  If no status is provided, the default\nvalue of 0 is used.",
			"tags":["system"]
		},{
			"id":"builder-908",
			"name":"architecture",
			"display name":"Architecture",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the architecture"
			],
			"display syntax":[
				"the architecture"
			],
			"associations":["com.livecode.system"],
			"summary":"The architecture",
			"examples":[{
				"script":"    if the architecture is \"x86_64\" then\n        -- Do something x86_64 specific\n    end if"
			}],
			"description":"Returns a string describing the instruction set architecture\nthat is being used by the machine LiveCode is running on.\nThe possible values are:\n\n* \"x86\" - 32-bit x86 builds\n* \"x86_64\" - 64-bit x86 builds\n* \"arm\" - 32-bit arm builds\n* \"arm64\" - 64-bit arm builds\n* \"js\" - Emscripten",
			"tags":["system"]
		},{
			"id":"builder-909",
			"name":"systemerrordescription",
			"display name":"SystemErrorDescription",
			"library":"builder",
			"type":"expression",
			"syntax":[
				"the system error message"
			],
			"display syntax":[
				"the system error message"
			],
			"associations":["com.livecode.system"],
			"summary":"The system error description.",
			"description":"Evaluates to a string describing the current platform-dependent system\nerror code.\n\n> **Note:** The system error code may be modified or cleared by any\n> syntax that interacts with the operating system (e.g. by performing\n> input or output).  You should check the system error code as soon as\n> possible after any platform operation that might fail.",
			"tags":["system"]
		},{
			"id":"builder-910",
			"name":"com.livecode.system",
			"display name":"com.livecode.system",
			"library":"builder",
			"type":"module",
			"display syntax":[
				"com.livecode.system"
			],
			"associations":["com.livecode.system"],
			"summary":"This library provides low-level system functionality for modular\nLiveCode programs.",
			"description":"This library provides low-level system functionality for modular\nLiveCode programs."
		},{
			"id":"builder-911",
			"name":"com.livecode.widget.gradientrampeditor",
			"display name":"com.livecode.widget.gradientrampeditor",
			"library":"builder",
			"type":"widget",
			"display syntax":[
				"com.livecode.widget.gradientrampeditor"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"This widget is displays a gradient according to the value of its *gradientStops* property.",
			"description":"This widget is displays a gradient according to the value of its *gradientStops* property."
		},{
			"id":"builder-912",
			"name":"gradientstopschanged",
			"display name":"gradientStopsChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"gradientStopsChanged"
			],
			"display syntax":[
				"gradientStopsChanged"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"Sent when the gradientStops property of the widget changes",
			"examples":[{
				"script":"    on gradientStopsChanged\n        set the fillGradient[\"ramp\"] of graphic 1 to \\\n           the gradientStops of the target\n    end gradientStopsChanged"
			}],
			"description":"Handle the <gradientStopsChanged> message to perform an operation when \nthe gradientStops property of a gradient ramp editor widget changes."
		},{
			"id":"builder-913",
			"name":"selectedstopchanged",
			"display name":"selectedStopChanged",
			"library":"builder",
			"type":"message",
			"syntax":[
				"on selectedStopChanged <pIndex>"
			],
			"display syntax":[
				"on selectedStopChanged <i>pIndex</i>"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"Sent when a new gradient stop is selected",
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"The new selected stop index, or 0 if no stop is selected."
			}],
			"examples":[{
				"script":"    on selectedStopChanged pIndex\n        if pIndex is 0 then\n            exit selectedStopChanged\n        end if\n\n        answer color\n        if the result is not \"cancel\" then\n            local tStops\n            put the gradientStops of the target into tStops\n            put it into item 2 to 4 of line pIndex of tStops\n            set the gradientStops of the target to tStops\n        end if\n\n    end selectedStopChanged"
			}],
			"description":"Handle the <selectedStopChanged> message to perform an operation when \nthe selectedStop property of a gradient ramp editor widget changes."
		},{
			"id":"builder-914",
			"name":"selectedstop",
			"display name":"selectedStop",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the selectedStop of <widget>",
				"set the selectedStop of <widget> to <pIndex>"
			],
			"display syntax":[
				"get the selectedStop of <i>widget</i>"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"The <selectedStop> property controls which gradient stop (if any) is selected.",
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"An integer between 0 and the current number of gradient stops"
			}],
			"examples":[{
				"script":"    -- Create 10 equally spaced stops with random color values\n    local tGradientStops, tStop\n    repeat with x = 1 to 10\n        put x/10 & comma & random(255) & comma & random(255) & comma & random(255) & comma & random(255) into tStop\n        if tGradientStops is empty then\n            put tStop into tGradientStops\n        else\n            put return & tStop after tGradientStops\n        end if\n    end repeat\n    set the gradientStops of widget \"Gradient Ramp Editor\" to tGradientStops\n\n    -- if no stop is selected, select the first one\n    if the selectedStop of widget \"Gradient Ramp Editor\" is 0 then\n        set the selectedStop of widget \"Gradient Ramp Editor\" to 1\n    end if"
			}],
			"description":"If any gradient stop is selected, its index is returned by the <selectedStop>\nproperty. Otherwise the property returns 0. Setting the <selectedStop> property\nto 0 causes the currently selected gradient stop to be deselected."
		},{
			"id":"builder-915",
			"name":"gradientstops",
			"display name":"gradientStops",
			"library":"builder",
			"type":"property",
			"syntax":[
				"get the gradientStops of <widget>",
				"set the gradientStops of <widget> to <pGradientStops>"
			],
			"display syntax":[
				"get the gradientStops of <i>widget</i>"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"The <gradientStops> property controls the offset and color of each division of the gradient.",
			"parameters":[{
				"name":"pGradientStops",
				"type":"",
				"refparam":"false",
				"description":"A list, one per line, of comma-delimited strings consisting of the offset of the gradient stop, followed by the color and alpha."
			}],
			"examples":[{
				"script":"    -- Create 10 equally spaced stops with random color values\n    local tGradientStops, tStop\n    repeat with x = 1 to 10\n        put x/10 & comma & random(255) & comma & random(255) & comma & random(255) & comma & random(255) into tStop\n        if tGradientStops is empty then\n            put tStop into tGradientStops\n        else\n            put return & tStop after tGradientStops\n        end if\n    end repeat\n    set the gradientStops of widget \"Gradient Ramp Editor\" to tGradientStops"
			}],
			"description":"Color gradients are smooth transitions between the colors defined at consecutive offsets. The <gradientStops> property represents the offset and color of each of these stops.\n"
		}