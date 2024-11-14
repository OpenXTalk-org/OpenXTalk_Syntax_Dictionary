{
			"id":"com.livecode.widget.iconpicker-1",
			"name":"com.livecode.widget.iconpicker",
			"display name":"Icon Picker",
			"library":"com.livecode.widget.iconpicker",
			"type":"widget",
			"display syntax":[
				"Icon Picker"
			],
			"associations":["com.livecode.widget.iconpicker"],
			"summary":"This widget is an icon picker, using icons from the iconSVG library.",
			"description":"This widget is an icon picker, using icons from the iconSVG library."
		},{
			"id":"com.livecode.widget.iconpicker-2",
			"name":"iconsize",
			"display name":"iconSize",
			"library":"com.livecode.widget.iconpicker",
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
			"id":"com.livecode.widget.iconpicker-3",
			"name":"selectedicon",
			"display name":"selectedIcon",
			"library":"com.livecode.widget.iconpicker",
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
			"id":"com.livecode.widget.iconpicker-4",
			"name":"filterstring",
			"display name":"filterString",
			"library":"com.livecode.widget.iconpicker",
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
			"id":"com.livecode.widget.iconpicker-5",
			"name":"preferredsize",
			"display name":"preferredSize",
			"library":"com.livecode.widget.iconpicker",
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
			"id":"com.livecode.widget.iconpicker-6",
			"name":"showframeborder",
			"display name":"showFrameBorder",
			"library":"com.livecode.widget.iconpicker",
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
			"id":"com.livecode.widget.iconpicker-7",
			"name":"showselectedelement",
			"display name":"showSelectedElement",
			"library":"com.livecode.widget.iconpicker",
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
			"id":"com.livecode.widget.iconpicker-8",
			"name":"shownames",
			"display name":"showNames",
			"library":"com.livecode.widget.iconpicker",
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
		}