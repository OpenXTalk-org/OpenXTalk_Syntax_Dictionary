{
			"id":"com.livecode.widget.paletteactions-1",
			"name":"com.livecode.widget.paletteactions",
			"display name":"Palette Actions",
			"library":"com.livecode.widget.paletteactions",
			"type":"widget",
			"display syntax":[
				"Palette Actions"
			],
			"associations":["com.livecode.widget.paletteactions"],
			"summary":"Palette header bar widget.",
			"description":"Palette header bar widget."
		},{
			"id":"com.livecode.widget.paletteactions-2",
			"name":"menupick",
			"display name":"menuPick",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-3",
			"name":"actionselected",
			"display name":"actionSelected",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-4",
			"name":"navselected",
			"display name":"navSelected",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-5",
			"name":"navchanged",
			"display name":"navChanged",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-6",
			"name":"minwidth",
			"display name":"minWidth",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-7",
			"name":"selectednavitem",
			"display name":"selectedNavItem",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-8",
			"name":"selectednavcolor",
			"display name":"selectedNavColor",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-9",
			"name":"navicons",
			"display name":"navIcons",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-10",
			"name":"navbarright",
			"display name":"navBarRight",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-11",
			"name":"navdata",
			"display name":"navData",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-12",
			"name":"actionnames",
			"display name":"actionNames",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-13",
			"name":"navnames",
			"display name":"navNames",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-14",
			"name":"showactionicons",
			"display name":"showActionIcons",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-15",
			"name":"isheader",
			"display name":"isHeader",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-16",
			"name":"shownavicons",
			"display name":"showNavIcons",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-17",
			"name":"actionicons",
			"display name":"actionIcons",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-18",
			"name":"navlabels",
			"display name":"navLabels",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-19",
			"name":"actionlabels",
			"display name":"actionLabels",
			"library":"com.livecode.widget.paletteactions",
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
			"id":"com.livecode.widget.paletteactions-20",
			"name":"actiondata",
			"display name":"actionData",
			"library":"com.livecode.widget.paletteactions",
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
		}