{
			"id":"org.openxtalk.library.macosnativeapptools-1",
			"name":"org.openxtalk.library.macosnativeapptools",
			"display name":"Openxtalk.org macOS Native Tools",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"library",
			"display syntax":[
				"Openxtalk.org macOS Native Tools"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"This Library is a collection of macOS Cocoa and AppKit related FFI wrappers.",
			"description":"A collection of macOS Cocoa AppKit related handlers\n\n>*Note:* This library is MIT licensed (permissive).\n> Please share and share a like."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-2",
			"name":"setapptolightmode",
			"display name":"setAppToLightMode",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"setAppToLightMode()"
			],
			"display syntax":[
				"setAppToLightMode()"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Assign the macOS native \"Vibrant Light Mode\" appearance style to all app windows",
			"examples":[{
				"script":"setAppToDarkMode"
			}],
			"description":"This sets an Apps appearance to Light Mode, with all app windows inheriting the dark appearance"
		},{
			"id":"org.openxtalk.library.macosnativeapptools-3",
			"name":"setwindowtodarkmode",
			"display name":"setWindowToDarkMode",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"setWindowToDarkMode(<pWindowID>)"
			],
			"display syntax":[
				"setWindowToDarkMode(<i>pWindowID</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Assign the macOS native \"dark mode\" window style to a stack's window",
			"parameters":[{
				"name":"windowID",
				"type":"",
				"refparam":"false",
				"description":"retrieved from a stack's windowID property."
			}],
			"examples":[{
				"script":"setWindowToDarkMode the windowID of this stack"
			}],
			"description":"This handler will set the macOS dark appearance of the window passed."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-4",
			"name":"sethfscreatorcodeoffile",
			"display name":"SetHFSCreatorCodeOfFile",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"SetHFSCreatorCodeOfFile(<pPathToFile>,<pFourCharOSType>)"
			],
			"display syntax":[
				"SetHFSCreatorCodeOfFile(<i>pPathToFile</i>,<i>pFourCharOSType</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Sets the Mac HFS Creator Code of a file.",
			"parameters":[{
				"name":"pFilePath",
				"type":"",
				"refparam":"false",
				"description":"Path to the file to examine."
			},{
				"name":"pFourCharOSType",
				"type":"",
				"refparam":"false",
				"description":"An 'OSType' four character creator code, such as 'WILD' or 'OXTk'"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"true on success, otherwise false"
			}],
			"description":"Sets the Mac HFS Creator Code of a file. A creator code is a four-character\n'OSType' code, such as 'WILD' or 'OXTk, used to associate an application with\na file for legacy classic macOS files.\nNOTE:Mac HFS Type and Creator Codes are legacy macOS classic file system attributes\nwhich have long been marked as 'deprecatred' by Apple, however since this potentially\neffects many legacy files, Apple has included HFS Type and Creator in the\ncontemporary APFS file system."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-5",
			"name":"sethfstypecodeoffile",
			"display name":"SetHFSTypeCodeOfFile",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"SetHFSTypeCodeOfFile(<pPathToFile>,<pFourCharOSType>)"
			],
			"display syntax":[
				"SetHFSTypeCodeOfFile(<i>pPathToFile</i>,<i>pFourCharOSType</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Sets the Mac HFS Type Code of a file.",
			"parameters":[{
				"name":"pFilePath",
				"type":"",
				"refparam":"false",
				"description":"Path to the file to examine."
			},{
				"name":"pFourCharOSType",
				"type":"",
				"refparam":"false",
				"description":"An 'OSType' four character type code, such as STAK or JFIF"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"true on success, otherwise false"
			}],
			"description":"Sets the Mac HFS Type Code of a file. A type code is a four-character\nOSType code, such as MIDI or TIFF, used to associate a file type with a file for\nlegacy classic macOS files, which did not use filename extensions to detirmine a files type.\nNOTE:Mac HFS Type and Creator Codes are legacy macOS classic file system attributes\nwhich have long been marked as 'deprecatred' by Apple, however since this potentially\neffects many legacy files, Apple has included HFS Type and Creator in the\ncontemporary APFS file system."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-6",
			"name":"setapptodarkmode",
			"display name":"setAppToDarkMode",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"setAppToDarkMode()"
			],
			"display syntax":[
				"setAppToDarkMode()"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Assign the macOS native \"Vibrant Dark\" appearance style to all app windows",
			"examples":[{
				"script":"setAppToDarkMode"
			}],
			"description":"This sets an Apps appearance to Dark Mode, with all app windows inheriting the\ndark appearance.\n\nNOTE your existing stacks may need to be edited for a proper look when in darkMode."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-7",
			"name":"isfullscreenallowed",
			"display name":"IsFullScreenAllowed",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"IsFullScreenAllowed(<windowID>)"
			],
			"display syntax":[
				"IsFullScreenAllowed(<i>windowID</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Returns the mac native Full Screen behavior state of stack's window.",
			"parameters":[{
				"name":"windowID",
				"type":"",
				"refparam":"false",
				"description":"retrieved from a stack's windowID property."
			}],
			"examples":[{
				"script":"if IsFullScreenAllowed(the windowID of this stack) then put \"Ready to go mac native full screen.\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The mac native Full Screen allowed state of a stack's window."
			}],
			"description":"Geven the windowID of a stack this returns the mac native Full Screen behavior\nstate of the stack."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-8",
			"name":"postusernotification",
			"display name":"PostUserNotification",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"PostUserNotification(<postTitle>,<subTitle>,<informativeText>,<postIdentifier>,<soundName>)"
			],
			"display syntax":[
				"PostUserNotification(<i>postTitle</i>,<i>subTitle</i>,<i>informativeText</i>,<i>postIdentifier</i>,<i>soundName</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Creates macOS notification center notes",
			"parameters":[{
				"name":"postTitle",
				"type":"",
				"refparam":"false",
				"description":"title of the notification"
			},{
				"name":"subTitle",
				"type":"",
				"refparam":"false",
				"description":"subtitle of the notification"
			},{
				"name":"informativeText",
				"type":"",
				"refparam":"false",
				"description":"The body text of the notification"
			},{
				"name":"postIdentifier",
				"type":"",
				"refparam":"false",
				"description":"identifier for a notification, usefull for overwriting"
			},{
				"name":"soundName",
				"type":"",
				"refparam":"false",
				"description":"name of a sound in the system\npass empty for no sound, pass \"default\" for default \"ding\" sound"
			}],
			"examples":[{
				"script":"PostUserNotification \"Download Completed\", \"freelibs.net\", \"Your download of macOS.lce is completed\", \"DLNote001\", \"sosumi\""
			}],
			"description":"Creates macOS notification center notes.\nString values should be localized as it is presented to the user.\nString values for postTitle and subTitle truncated to a length appropriate for\ndisplay and it's properties modified to reflect any truncations.\nFor soundName Pass empty for silent or pass any sound file in any of the OS\nLibrary/Audio/Sounds folders, if no match is found a default alert sound is used."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-9",
			"name":"fullscreenallowed",
			"display name":"FullScreenAllowed",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"FullScreenAllowed(<windowID>,<isAllowed>)"
			],
			"display syntax":[
				"FullScreenAllowed(<i>windowID</i>,<i>isAllowed</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Sets the mac native fullscreen attribute for a windowID passed to it.",
			"parameters":[{
				"name":"windowID",
				"type":"",
				"refparam":"false",
				"description":"retrieved from a stack's windowID property."
			},{
				"name":"isAllowed",
				"type":"",
				"refparam":"false",
				"description":"If true then allow, if false don't allow."
			}],
			"examples":[{
				"script":"FullScreenAllowed the windowID of this stack, TRUE"
			}],
			"description":"This handler will set the mac native Full Screen behaviour on the windowID passed.\nDepending on the OS version, this will either display an icon in the window’s\ntop-right corner, or change the maximize button to display double arrows."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-10",
			"name":"requestuserattention",
			"display name":"RequestUserAttention",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"RequestUserAttention(<criticalRequest>)"
			],
			"display syntax":[
				"RequestUserAttention(<i>criticalRequest</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"When the app is in the background, RequestUserAttention calls for user\nattention by bouncy the App's icon in the Dock",
			"parameters":[{
				"name":"criticalRequest",
				"type":"",
				"refparam":"false",
				"description":"Set wether or not attention is immediately needed.\n- TRUE: the user attention request is a critical request. The dock icon will\n continue to bounce until the application is brought forward.\n- FALSE: the user attention request is an informational request.\n The dock icon will bounce once."
			}],
			"examples":[{
				"script":"do \"tell application \"& quote & \"Finder.app\" & quote & \" to activate\" as AppleScript\nwait 1 second with messages\nRequestUserAttention TRUE"
			}],
			"description":"When the app is in the background <RequestUserAttention> will call for the users\nattention by bouncy the App's icon in the Dock. If <criticalRequest> is false it will\nbounce the icon only once, otherwise the icon will continue to bounce until\nthe app is the active foreground app."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-11",
			"name":"setdocktilebadge",
			"display name":"SetDockTileBadge",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"SetDockTileBadge(<badgeText>)"
			],
			"display syntax":[
				"SetDockTileBadge(<i>badgeText</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Badge the App's Dock Icon with a small string of text.",
			"parameters":[{
				"name":"badgeText",
				"type":"",
				"refparam":"false",
				"description":"a small string of text to badge the app's dock icon with."
			}],
			"examples":[{
				"script":"setDockTileBadge \"Hello\""
			}],
			"description":"Badge the App's Dock Icon with a small string of text. If badgeText string is\ntoo long it will be automatically truncated to fit."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-12",
			"name":"revealfileinfinder",
			"display name":"RevealFileInFinder",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"RevealFileInFinder(<pFilePath>)"
			],
			"display syntax":[
				"RevealFileInFinder(<i>pFilePath</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Reveals a file or folder in the Finder.",
			"parameters":[{
				"name":"pFilePath",
				"type":"",
				"refparam":"false",
				"description":"Path to the file or folder to reveal."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Boolean"
			}],
			"description":"Reveals a file or folder in the Finder."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-13",
			"name":"getfrontmostapplication",
			"display name":"GetFrontmostApplication",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"GetFrontmostApplication(<pReturnType>)"
			],
			"display syntax":[
				"GetFrontmostApplication(<i>pReturnType</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Returns information about the frontmost application.",
			"parameters":[{
				"name":"pReturnType",
				"type":"",
				"refparam":"false",
				"description":"`ProcessID`, `Path`,`BundleID`, empty"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Requested return type or a return delimited list"
			}],
			"description":"Returns information about the frontmost application."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-14",
			"name":"miniaturizeall",
			"display name":"MiniaturizeAll",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"MiniaturizeAll()"
			],
			"display syntax":[
				"MiniaturizeAll()"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Minimize all document windows (does not effect on modal dialogs or modeless palette windows)",
			"examples":[{
				"script":"MiniaturizeAll"
			}],
			"description":"Minimize all document windows (does not effect on modal dialogs or modeless palette windows).\nThis is the programatic equivelant to option-clicking the yellow minimize button on the windowframe"
		},{
			"id":"org.openxtalk.library.macosnativeapptools-15",
			"name":"apphide",
			"display name":"AppHide",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"AppHide()"
			],
			"display syntax":[
				"AppHide()"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Hides the app sending it in the background and activates the next active app.",
			"examples":[{
				"script":"AppHide"
			}],
			"description":"Hides the app, sending it in the background and activates the next active app.\nThis is the programatic equivelant to selcting Hide from the app's Dock menu."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-16",
			"name":"getnswindowframerect",
			"display name":"getNSWindowFrameRect",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"getNSWindowFrameRect(<pWindowID>)"
			],
			"display syntax":[
				"getNSWindowFrameRect(<i>pWindowID</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Get the real rect of a stack's window including decorations and titlebar.",
			"parameters":[{
				"name":"pWindowID",
				"type":"",
				"refparam":"false",
				"description":"retrieved from a stack's windowID property."
			}],
			"examples":[{
				"script":"put getNSWindowFrameRect( the windowID of this stack ) into message"
			}],
			"description":"Gets the actual rect of a stack's window on macOS, including the windows decorations,\ntitlebar, etc. This will likely be a different in height than a stacks rect property\n( 19 pixel height differnece for a palette window type for example).\nNOTE:macOS system use bottom/left start point and height/width size to define a\nwindows rect."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-17",
			"name":"gethfscreatortypecodesoffile",
			"display name":"GetHFSCreatorTypeCodesOfFile",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"GetHFSCreatorTypeCodesOfFile(<pPathToFile>)"
			],
			"display syntax":[
				"GetHFSCreatorTypeCodesOfFile(<i>pPathToFile</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"retrieves Mac HFS Creator and Type Codes Of File.",
			"parameters":[{
				"name":"pPathToFile",
				"type":"",
				"refparam":"false",
				"description":"Path to the file to examine."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A two-line list. Line 1 is creator code. Line 2 is the file type code, or empty property is not set."
			}],
			"description":"Retrieves the Mac HFS (Hierarchial File System) creator and type codes of a file.\nReturns empty if the file does not have HFS type codes set, otherwise a two-line\nlist will be returned. Line 1 is creator code. Line 2 is the file type code.\nNOTE:Mac HFS Type and Creator Codes are legacy macOS classic file system attributes\nwhich have long been marked as 'deprecatred' by Apple, however since this potentially\neffects many legacy files, Apple has included HFS Type and Creator in the\ncontemporary APFS file system."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-18",
			"name":"togglefullscreen",
			"display name":"ToggleFullScreen",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"ToggleFullScreen(<windowID>)"
			],
			"display syntax":[
				"ToggleFullScreen(<i>windowID</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Toggle the mac native Full Screen state of a stack's window",
			"parameters":[{
				"name":"windowID",
				"type":"",
				"refparam":"false",
				"description":"retrieved from a stack's windowID property."
			}],
			"examples":[{
				"script":"ToggleFullScreen the windowID of this stack"
			}],
			"description":"This handler will toggle the Full Screen state of the window passed.\nThe FullScreenAllowed must first be enabled for this to work (system requirement)"
		},{
			"id":"org.openxtalk.library.macosnativeapptools-19",
			"name":"getrunningapplications",
			"display name":"GetRunningApplications",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"GetRunningApplications()"
			],
			"display syntax":[
				"GetRunningApplications()"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Returns a information about running applications as a line demilited list.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns a line delimited list of information about the currently\nrunning applications as a line demilited list."
			}],
			"description":"Returns a information about running applications as a line demilited list."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-20",
			"name":"getrcurrentuserhome",
			"display name":"GetrCurrentUserHome",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"GetrCurrentUserHome()"
			],
			"display syntax":[
				"GetrCurrentUserHome()"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Returns the users home directory as URL and as a Path.",
			"value":[{
				"name":"return",
				"type":"",
				"description":"Users home directory as a URL string and as a Path string seperated by a newline."
			}],
			"description":"Returns the users home directory as URL and as a Path."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-21",
			"name":"setwindowtolightmode",
			"display name":"setWindowToLightMode",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"setWindowToLightMode(<pWindowID>)"
			],
			"display syntax":[
				"setWindowToLightMode(<i>pWindowID</i>)"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Assign the macOS native \"light mode\" window style to a stack's window",
			"parameters":[{
				"name":"windowID",
				"type":"",
				"refparam":"false",
				"description":"retrieved from a stack's windowID property."
			}],
			"examples":[{
				"script":"setWindowToLightMode the windowID of this stack"
			}],
			"description":"This handler will set the macOS \"light\" appearance of the window passed."
		},{
			"id":"org.openxtalk.library.macosnativeapptools-22",
			"name":"appunhide",
			"display name":"AppUnhide",
			"library":"org.openxtalk.library.macosnativeapptools",
			"type":"handler",
			"syntax":[
				"AppUnhide()"
			],
			"display syntax":[
				"AppUnhide()"
			],
			"associations":["org.openxtalk.library.macosnativeapptools"],
			"summary":"Unhides the app revealing any document windows that were hidden.",
			"examples":[{
				"script":"AppUnhide"
			}],
			"description":"Unhides the app revealing any document windows that were hidden, but it does not\nactivate the app which remains in the background.\n"
		}