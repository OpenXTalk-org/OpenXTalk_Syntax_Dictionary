{
			"id":"com.livecode.widget.navbar-1",
			"name":"com.livecode.widget.navbar",
			"display name":"Navigation Bar",
			"library":"com.livecode.widget.navbar",
			"type":"widget",
			"display syntax":[
				"Navigation Bar"
			],
			"associations":["com.livecode.widget.navbar"],
			"summary":"The navigation bar widget is intended for use in mobile apps for\nswitching between cards, although there are many other possible uses.\n\nThe widget displays a row of navigation items.  Each of these has a\n<itemNames|name>, which identifies it.  Depending on the selected\n<itemStyle>, the items may display a <itemLabels|label>,\n<itemIcons|icon>, or both.  All of the navigation item data is\navailable as a single array via the <itemArray> property.\n\nAt any time, zero or one of the navigation items may be\n<hilitedItemName|highlighted>.  This is useful, for example, for\nindicating the current card.  When the user clicks one of the\nnavigation items, the widget sends a <hiliteChanged> message.",
			"description":"The navigation bar widget is intended for use in mobile apps for\nswitching between cards, although there are many other possible uses.\n\nThe widget displays a row of navigation items.  Each of these has a\n<itemNames|name>, which identifies it.  Depending on the selected\n<itemStyle>, the items may display a <itemLabels|label>,\n<itemIcons|icon>, or both.  All of the navigation item data is\navailable as a single array via the <itemArray> property.\n\nAt any time, zero or one of the navigation items may be\n<hilitedItemName|highlighted>.  This is useful, for example, for\nindicating the current card.  When the user clicks one of the\nnavigation items, the widget sends a <hiliteChanged> message.",
			"references":{
				"property":["hilitedItemName","itemArray","itemIcons","itemLabels","itemNames","itemStyle"],
				"message":["hiliteChanged"]
			}
		},{
			"id":"com.livecode.widget.navbar-2",
			"name":"hilitechanged",
			"display name":"hiliteChanged",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-3",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-4",
			"name":"forecolor",
			"display name":"foreColor",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-5",
			"name":"backcolor",
			"display name":"backColor",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-6",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-7",
			"name":"showborder",
			"display name":"showBorder",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-8",
			"name":"hiliteditemname",
			"display name":"hilitedItemName",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-9",
			"name":"opaque",
			"display name":"opaque",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-10",
			"name":"itemicons",
			"display name":"itemIcons",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-11",
			"name":"itemstyle",
			"display name":"itemStyle",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-12",
			"name":"hiliteditemicons",
			"display name":"hilitedItemIcons",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-13",
			"name":"itemnames",
			"display name":"itemNames",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-14",
			"name":"desiredheight",
			"display name":"desiredHeight",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-15",
			"name":"hiliteditem",
			"display name":"hilitedItem",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-16",
			"name":"editmode",
			"display name":"editMode",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-17",
			"name":"itemarray",
			"display name":"itemArray",
			"library":"com.livecode.widget.navbar",
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
			"id":"com.livecode.widget.navbar-18",
			"name":"itemlabels",
			"display name":"itemLabels",
			"library":"com.livecode.widget.navbar",
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
		}