{
			"id":"com.livecode.library.native.mac.statusmenu-1",
			"name":"com.livecode.library.native.mac.statusmenu",
			"display name":"Mac Status Menu",
			"library":"com.livecode.library.native.mac.statusmenu",
			"type":"library",
			"display syntax":[
				"Mac Status Menu"
			],
			"associations":["com.livecode.library.native.mac.statusmenu"],
			"summary":"Manage mac status menus",
			"description":"This library allows the creation and management of mac status menus"
		},{
			"id":"com.livecode.library.native.mac.statusmenu-2",
			"name":"macstatusmenupick",
			"display name":"macStatusMenuPick",
			"library":"com.livecode.library.native.mac.statusmenu",
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
			"id":"com.livecode.library.native.mac.statusmenu-3",
			"name":"macstatusmenucreate",
			"display name":"macStatusMenuCreate",
			"library":"com.livecode.library.native.mac.statusmenu",
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
			"id":"com.livecode.library.native.mac.statusmenu-4",
			"name":"macstatusmenunames",
			"display name":"macStatusMenuNames",
			"library":"com.livecode.library.native.mac.statusmenu",
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
			"id":"com.livecode.library.native.mac.statusmenu-5",
			"name":"macstatusmenuset",
			"display name":"macStatusMenuSet",
			"library":"com.livecode.library.native.mac.statusmenu",
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
				"description":" - \"visible\" - (boolean) set to false to hide the menu. Defaults to true.\n - \"enabled\" - (boolean) set to false to make the menu appear disabled. Use in\n comination with setting the items to empty so that the menu does not show when\n the user clicks on it. Defaults to true.\n - \"tooltip\" - (string) the tooltip to show over the status menu\n - \"icongravity\" - (enum) one of \"left\", \"right\" or \"center\". Used when displaying\n both a menu title and icon\n - \"length\" - one of \"square\", \"variable\" or a number. Note \"variable\" mode does\n not appear to dynamically update the width as stated in Apple documentation.\n - \"icon\" - (string) the full path to an image file or a reference to an image object. If\n the image object has its filename set it must be a full path. If it is an imported\n image then it must be in a format supported by NSImage -initWithContentsOfFile.\n Setting the icon to empty to clear it.\n - \"title\" - (string) the title of the menu. Set to empty (the default) to only use an icon.\n - \"items\" - (string) the items of is a similar format used by LiveCode menus"
			},{
				"name":"pValue",
				"type":"",
				"refparam":"false",
				"description":"The value as described for each property"
			}],
			"examples":[{
				"script":"on EnableStatusMenu pEnabled\n   macStatusMenuSet \"mymenu\", \"enabled\", pEnabled\n   if pEnabled then\n      macStatusMenuSet \"mymenu\", \"icon\", the long id of image \"enabled\"\n      macStatusMenuSet \"mymenu\", \"items\", \"Open\" & return & \"-\" & return & \"Settings\" \n   else\n      macStatusMenuSet \"mymenu\", \"icon\", the long id of image \"disabled\"\n      macStatusMenuSet \"mymenu\", \"items\", empty\n   end if\nend EnableStatusMenu"
			}],
			"description":"Specify the menu items in the following form:\n\n    [<flags>] <label> ['/' <accelerator> ['|' <tag>]]\n\nWhere <flags> may include:\n\n!c, !n, !m: the menu item has respectively, a check, no check, or a mixed state icon\n\n>**Note:** A difference between standard LiveCode menus and the macStatusMenu\n> library is that the radio button (!r) used in LiveCode menus is not supported,\n> however, the mixed state (!m) is. Additionally you can use the <macStatusMenuSetCustomIcon>\n> command to specify a custom icon.\n\n(: the menu item is disabled\n\n-: the menu item is replaced with a menu separator\n\nmultiple tab characters: the number of tabs specifes the depth of the menu item;\nuse this to create submenus \n\nThe <accelerator> can be specified as one of:\nchar:Command key + specified char\nkeyname:Named key without modifiers\nmodifiers char: Specified modifiers + character\nmodifiers keyname: Specified modifiers + named key\nIn the accelerator, modifiers is either a space separated list of: \n\n- 'command' or 'cmd'\n- 'control' or 'ctrl'\n- 'option' or 'opt', 'alt', 'shift'\n\nIn this case the keyname/char should be separated from the list by a space\n\nOr modifiers may be a sequence of characters, including:\n\n^: Command\n@: Shift\n#: Option\n%: Control\n\nIn this case no space between the sequence and keyname/char is required\n\nThe following named keys are supported:\n\nF1, F2, F3, F4, ... F15,\nLeft, Up, Right, Down,\nBackspace, Delete,\nTab, Space,\nReturn, Enter,\nHome, End, Escape,\nPgUp, PgDown\n\nA tag can be specified as a | character followed by a string of ASCII characters. \nIf such a tag is present then that tag will take the place of the menu label as \nthe parameter to the menuPick.\n\nA tag will only be recognised following the <accelerator>. To specify a menu tag \nwithout an accelerator shortcut, an empty <accelerator> can be specified using /| \nfollowed by the tag text.",
			"references":{
				"handler":["macStatusMenuSetCustomIcon"]
			}
		},{
			"id":"com.livecode.library.native.mac.statusmenu-6",
			"name":"macstatusmenudelete",
			"display name":"macStatusMenuDelete",
			"library":"com.livecode.library.native.mac.statusmenu",
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
			"id":"com.livecode.library.native.mac.statusmenu-7",
			"name":"macstatusmenusetcustomicon",
			"display name":"macStatusMenuSetCustomIcon",
			"library":"com.livecode.library.native.mac.statusmenu",
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
		}