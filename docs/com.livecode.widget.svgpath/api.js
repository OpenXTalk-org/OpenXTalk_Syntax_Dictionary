{
			"id":"com.livecode.widget.svgpath-1",
			"name":"com.livecode.widget.svgpath",
			"display name":"SVG Icon",
			"library":"com.livecode.widget.svgpath",
			"type":"widget",
			"display syntax":[
				"SVG Icon"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"This widget displays an SVG path as an icon.  It has a default state and a\n\"highlighted\" state.",
			"description":"This widget displays an SVG path as an icon.  It has a default state and a\n\"highlighted\" state."
		},{
			"id":"com.livecode.widget.svgpath-2",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"com.livecode.widget.svgpath",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"Sent when the SVG icon is released",
			"description":"Sent when the SVG icon is released"
		},{
			"id":"com.livecode.widget.svgpath-3",
			"name":"mousedoubleup",
			"display name":"mouseDoubleUp",
			"library":"com.livecode.widget.svgpath",
			"type":"message",
			"syntax":[
				"mouseUp"
			],
			"display syntax":[
				"mouseUp"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"Sent when the SVG icon is double-clicked",
			"description":"Sent when the SVG icon is double-clicked"
		},{
			"id":"com.livecode.widget.svgpath-4",
			"name":"mousedown",
			"display name":"mouseDown",
			"library":"com.livecode.widget.svgpath",
			"type":"message",
			"syntax":[
				"mouseDown"
			],
			"display syntax":[
				"mouseDown"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"Sent when SVG icon is clicked",
			"examples":[{
				"script":"on mouseDown\n   -- Toggle the hilited property when clicked\n   set the hilited of me to (not the hilited of me)\nend mouseDown"
			}],
			"description":"Sent when SVG icon is clicked"
		},{
			"id":"com.livecode.widget.svgpath-5",
			"name":"mouseenter",
			"display name":"mouseEnter",
			"library":"com.livecode.widget.svgpath",
			"type":"message",
			"syntax":[
				"mouseEnter"
			],
			"display syntax":[
				"mouseEnter"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"Sent when the mouse enters the SVG icon",
			"description":"Sent when the mouse enters the SVG icon"
		},{
			"id":"com.livecode.widget.svgpath-6",
			"name":"mouseleave",
			"display name":"mouseLeave",
			"library":"com.livecode.widget.svgpath",
			"type":"message",
			"syntax":[
				"mouseLeave"
			],
			"display syntax":[
				"mouseLeave"
			],
			"associations":["com.livecode.widget.svgpath"],
			"summary":"Sent when the mouse leaves the SVG icon",
			"description":"Sent when the mouse leaves the SVG icon"
		},{
			"id":"com.livecode.widget.svgpath-7",
			"name":"highlight",
			"display name":"highlight",
			"library":"com.livecode.widget.svgpath",
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
			"id":"com.livecode.widget.svgpath-8",
			"name":"iconpath",
			"display name":"iconPath",
			"library":"com.livecode.widget.svgpath",
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
			"id":"com.livecode.widget.svgpath-9",
			"name":"scaledwidth",
			"display name":"scaledWidth",
			"library":"com.livecode.widget.svgpath",
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
			"id":"com.livecode.widget.svgpath-10",
			"name":"scaledheight",
			"display name":"scaledHeight",
			"library":"com.livecode.widget.svgpath",
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
			"id":"com.livecode.widget.svgpath-11",
			"name":"angle",
			"display name":"angle",
			"library":"com.livecode.widget.svgpath",
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
			"id":"com.livecode.widget.svgpath-12",
			"name":"iconname",
			"display name":"iconName",
			"library":"com.livecode.widget.svgpath",
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
			"id":"com.livecode.widget.svgpath-13",
			"name":"maintainaspectratio",
			"display name":"maintainAspectRatio",
			"library":"com.livecode.widget.svgpath",
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
			"id":"com.livecode.widget.svgpath-14",
			"name":"flipped",
			"display name":"flipped",
			"library":"com.livecode.widget.svgpath",
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
			"id":"com.livecode.widget.svgpath-15",
			"name":"iconpresetname",
			"display name":"iconPresetName",
			"library":"com.livecode.widget.svgpath",
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
			"id":"com.livecode.widget.svgpath-16",
			"name":"fillrule",
			"display name":"fillRule",
			"library":"com.livecode.widget.svgpath",
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
		}