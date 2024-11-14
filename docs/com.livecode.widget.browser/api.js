{
			"id":"com.livecode.widget.browser-1",
			"name":"com.livecode.widget.browser",
			"display name":"Browser",
			"library":"com.livecode.widget.browser",
			"type":"widget",
			"display syntax":[
				"Browser"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"This widget displays web content within a native web browser view.\n\nThe browser widget can display HTML content generated in LiveCode, or\nfetch content over the Internet.  It supports JavaScript and allows\nfor interaction between LiveCode scripts and JavaScript code.\n\nThe [browser SVG icon](https://www.iconfinder.com/icons/309064/browser_globe_international_internet_web_world_icon)\nis copyright © Ivan Boyko, and is licensed under the terms of the\n[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/).",
			"description":"This widget displays web content within a native web browser view.\n\nThe browser widget can display HTML content generated in LiveCode, or\nfetch content over the Internet.  It supports JavaScript and allows\nfor interaction between LiveCode scripts and JavaScript code.\n\nThe [browser SVG icon](https://www.iconfinder.com/icons/309064/browser_globe_international_internet_web_world_icon)\nis copyright © Ivan Boyko, and is licensed under the terms of the\n[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/)."
		},{
			"id":"com.livecode.widget.browser-2",
			"name":"browserdocumentloadbegin",
			"display name":"browserDocumentLoadBegin",
			"library":"com.livecode.widget.browser",
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
			"description":"The <browserDocumentLoadBegin> message is sent to the widget's script \nobject when a new document begins to load in the browser. This will \nhappen whenever the browser navigates to a new page. The <pUrl> \nparameter contains the URL of the loading document."
		},{
			"id":"com.livecode.widget.browser-3",
			"name":"browserdocumentloadcomplete",
			"display name":"browserDocumentLoadComplete",
			"library":"com.livecode.widget.browser",
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
			"description":"The <browserDocumentLoadComplete> message is sent to the widget's script \nobject when a new document has completed loading in the browser. The \n<pUrl> parameter contains the URL of the loaded document."
		},{
			"id":"com.livecode.widget.browser-4",
			"name":"browserdocumentloadfailed",
			"display name":"browserDocumentLoadFailed",
			"library":"com.livecode.widget.browser",
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
			"description":"The <browserDocumentLoadFailed> message is sent to the widget's script \nobject when a new document has failed to load in the browser. The <pUrl> \nparameter contains the URL of the document, and the <pError> parameter \ngives the reason for the failure."
		},{
			"id":"com.livecode.widget.browser-5",
			"name":"browserframedocumentloadbegin",
			"display name":"browserFrameDocumentLoadBegin",
			"library":"com.livecode.widget.browser",
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
			"description":"The <browserFrameDocumentLoadBegin> message is sent to the widget's \nscript object when a new document begins to load in a frame of the \nbrowser. This will happen whenever the browser navigates to a new page \nwith multiple frames. The <pUrl> parameter contains the URL of the \nloading document."
		},{
			"id":"com.livecode.widget.browser-6",
			"name":"browserframedocumentloadcomplete",
			"display name":"browserFrameDocumentLoadComplete",
			"library":"com.livecode.widget.browser",
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
			"description":"The <browserFrameDocumentLoadComplete> message is sent to the widget's \nscript object when a new document has completed loading in a frame of \nthe browser. The <pUrl> parameter contains the URL of the loaded \ndocument."
		},{
			"id":"com.livecode.widget.browser-7",
			"name":"browserframedocumentloadfailed",
			"display name":"browserFrameDocumentLoadFailed",
			"library":"com.livecode.widget.browser",
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
			"description":"The <browserFrameDocumentLoadFailed> message is sent to the widget's \nscript object when a new document has failed to load in a frame of the \nbrowser. The <pUrl> parameter contains the URL of the document, and the \n<pError> parameter gives the reason for the failure."
		},{
			"id":"com.livecode.widget.browser-8",
			"name":"browsernavigatebegin",
			"display name":"browserNavigateBegin",
			"library":"com.livecode.widget.browser",
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
			"description":"The <browserNavigateBegin> message is sent to the widget's script object \nwhen the browser begins navigation to a new page. This can be triggered \nby launching a URL in the browser, or clicking a link within the \nbrowser. The <pUrl> parameter contains the URL of the new page."
		},{
			"id":"com.livecode.widget.browser-9",
			"name":"browsernavigatecomplete",
			"display name":"browserNavigateComplete",
			"library":"com.livecode.widget.browser",
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
			"description":"The <browserNavigateComplete> message is sent to the widget's script \nobject when the browser successfully navigates to a new page. The <pUrl> \nparameter contains the URL of the new page."
		},{
			"id":"com.livecode.widget.browser-10",
			"name":"browsernavigatefailed",
			"display name":"browserNavigateFailed",
			"library":"com.livecode.widget.browser",
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
			"description":"The <browserNavigateFailed> message is sent to the widget's script \nobject when the browser has failed to navigate to a new page. The <pUrl> \nparameter contains the URL of the new page, and the <pError> parameter \ngives the reason for the failure."
		},{
			"id":"com.livecode.widget.browser-11",
			"name":"browserunhandledloadrequest",
			"display name":"browserUnhandledLoadRequest",
			"library":"com.livecode.widget.browser",
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
			"description":"The <browserUnhandledLoadRequest> message is sent to the widget's script \nobject when the browser is unable to load a URL, typically due to an \nunrecognised URL scheme. The <pUrl> parameter contains the URL of the \nunhandled request."
		},{
			"id":"com.livecode.widget.browser-12",
			"name":"browserprogresschanged",
			"display name":"browserProgressChanged",
			"library":"com.livecode.widget.browser",
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
			"id":"com.livecode.widget.browser-13",
			"name":"htmltext",
			"display name":"htmlText",
			"library":"com.livecode.widget.browser",
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
			"description":"The <htmlText> is the HTML representation of the content displayed in \nthe browser.\n\n*Note:* When the <htmlText> has been set, the <URL> property will be\nempty. When the <URL> property is not empty, the <htmlText> will\ncontain the source of the current URL displayed in the browser.",
			"references":{
				"property":["URL"]
			}
		},{
			"id":"com.livecode.widget.browser-14",
			"name":"allowuserinteraction",
			"display name":"allowUserInteraction",
			"library":"com.livecode.widget.browser",
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
			"id":"com.livecode.widget.browser-15",
			"name":"useragent",
			"display name":"userAgent",
			"library":"com.livecode.widget.browser",
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
			"id":"com.livecode.widget.browser-16",
			"name":"javascripthandlers",
			"display name":"javascriptHandlers",
			"library":"com.livecode.widget.browser",
			"type":"property",
			"syntax":[
				"set the javascriptHandlers of <widget> to <pHanderList>\nget the javascriptHandlers of <widget>"
			],
			"display syntax":[
				"set the javascriptHandlers of <i>widget</i> to <i>pHanderList</i>"
			],
			"associations":["com.livecode.widget.browser"],
			"summary":"A list of LiveCode handlers that are made available to JavaScript calls within the browser.",
			"examples":[{
				"script":"-- Define a handler to respond to javascript calls.\non myJSHandler pMessage, pValue\n\t-- Do appropriate actions here.\n\t-- ...\nend myJSHandler\n\n-- Set up the browser javascript handler list\n-- This code goes in a suitable setup handler\nset the javascriptHandlers to \"myJSHandler\" & return & \"myOtherJSHandler\"\n\n// Calling the handler from JavaScript within the browser\nliveCode.myJSHandler(\"myMessage\", 12345);"
			}],
			"value":[{
				"name":"value",
				"type":"string",
				"description":"A return-separated list of handler names."
			}],
			"description":"The <javascriptHandlers> is a list of LiveCode handlers that are made\navailable to JavaScript calls within the browser. The handlers will\nappear as methods attached to a global `liveCode` object. You can call\nthese methods as you would any other JavaScript function and pass\nwhatever parameters you require.\n\n>*Warning:* Setting the <javascriptHandlers> property gives JavaScript\nrunning within the Web browser permission to execute parts of your\napplication through the handlers you choose to expose. If using this\nfeature, make sure that you have complete control over the webpages\nwhich you load into the browser widget, and consider using HTTPS to\nensure that third-parties cannot inject malicious code into them."
		},{
			"id":"com.livecode.widget.browser-17",
			"name":"vscrollbar",
			"display name":"vScrollbar",
			"library":"com.livecode.widget.browser",
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
			"id":"com.livecode.widget.browser-18",
			"name":"url",
			"display name":"URL",
			"library":"com.livecode.widget.browser",
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
				"script":"-- Navigate to livecode.com by setting the url property,\n-- keeping a copy of the previous URL\nlocal tOldUrl\nput the URL of widget \"myBrowser\" into tOldUrl\nset the URL of widget \"myBrowser\" to \"https://livecode.com\""
			}],
			"description":"The <URL> is the URL of the content be displayed in the browser.\n\n>*Note:* The <URL> must be a standards-compliant URL.  In particular, \n> `file:` URLs must be of the form `file://<absolute path>`, and the \n> path should be URL-encoded.  \n> See [RFC 1738, section 2.2](https://tools.ietf.org/html/rfc1738#section-2.2).\n\n>*Note:* The <URL> reflects the currently displaying page in the \n> browser, and will change when navigating to another page. Setting the \n> htmlText will result in the <URL> being empty.\n\n>*Note:* Setting the <URL> won't necessarily cause resources to be\n> reloaded unless URLs of the resources explicitly change. However, \n> you can force the browser widget to reload a page using \n> `do \"location.reload()\" in widget \"browser\"` after setting the url.\n\n>*Note:* Setting the <URL> to empty will clear the currently loaded \n> page, resulting in a blank page being displayed and the <URL> and \n> <htmlText> of the widget being empty.",
			"references":{
				"property":["htmlText"]
			}
		},{
			"id":"com.livecode.widget.browser-19",
			"name":"hscrollbar",
			"display name":"hScrollbar",
			"library":"com.livecode.widget.browser",
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
			"id":"com.livecode.widget.browser-20",
			"name":"issecure",
			"display name":"isSecure",
			"library":"com.livecode.widget.browser",
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
		}