{
			"id":"com.livecode.library.iconsvg-1",
			"name":"com.livecode.library.iconsvg",
			"display name":"Icon SVG Library",
			"library":"com.livecode.library.iconsvg",
			"type":"library",
			"display syntax":[
				"Icon SVG Library"
			],
			"associations":["com.livecode.library.iconsvg"],
			"summary":"This is an SVG icon path library.",
			"description":"This is an SVG icon path library."
		},{
			"id":"com.livecode.library.iconsvg-2",
			"name":"setcurrenticonfamily",
			"display name":"setCurrentIconFamily",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-3",
			"name":"iconcodepointfromname",
			"display name":"iconCodepointFromName",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-4",
			"name":"iconlistmatching",
			"display name":"iconListMatching",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-5",
			"name":"addicon",
			"display name":"addIcon",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-6",
			"name":"iconlist",
			"display name":"iconList",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-7",
			"name":"iconnames",
			"display name":"iconNames",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-8",
			"name":"iconsvgpathfromname",
			"display name":"iconSVGPathFromName",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-9",
			"name":"iconnamesforfamily",
			"display name":"iconNamesForFamily",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-10",
			"name":"addiconfamily",
			"display name":"addIconFamily",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-11",
			"name":"icondataforfamily",
			"display name":"iconDataForFamily",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-12",
			"name":"getcurrenticonfamily",
			"display name":"getCurrentIconFamily",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-13",
			"name":"icondata",
			"display name":"iconData",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-14",
			"name":"iconfamilies",
			"display name":"iconFamilies",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-15",
			"name":"deleteiconfamily",
			"display name":"deleteIconFamily",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-16",
			"name":"iconarraymatchinginallfamilies",
			"display name":"iconArrayMatchingInAllFamilies",
			"library":"com.livecode.library.iconsvg",
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
			"id":"com.livecode.library.iconsvg-17",
			"name":"iconlistforfamily",
			"display name":"iconListForFamily",
			"library":"com.livecode.library.iconsvg",
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
		}