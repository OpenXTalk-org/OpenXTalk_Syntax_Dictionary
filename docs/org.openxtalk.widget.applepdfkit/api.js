{
			"id":"org.openxtalk.widget.applepdfkit-1",
			"name":"org.openxtalk.widget.applepdfkit",
			"display name":"OpenXTalk Apple PDF View Widget",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"widget",
			"display syntax":[
				"OpenXTalk Apple PDF View Widget"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"summary":"This widget wraps parts of Apple's PDFKit API available on macOS (since 10.4) and iOS (11)",
			"OS":["mac","ios"],
			"description":"This widget wraps parts of Apple's PDFKit API available on macOS (since 10.4) and iOS (11)"
		},{
			"id":"org.openxtalk.widget.applepdfkit-2",
			"name":"enabled",
			"display name":"enabled",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"property",
			"syntax":[
				"set the enabled of <widget> to {true | false}\nget the enabled of <widget>"
			],
			"display syntax":[
				"set the enabled of <i>widget</i> to {true | false}"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"summary":"The enabled state of the text field",
			"OS":["mac","ios"],
			"description":"Use the <enabled> property to enable or disable the native field. When\ndisabled, the text has a greyed out appearance and the field contents\ncannot be edited."
		},{
			"id":"org.openxtalk.widget.applepdfkit-3",
			"name":"returnkey",
			"display name":"returnKey",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"message",
			"syntax":[
				"on returnKey"
			],
			"display syntax":[
				"on returnKey"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"summary":"Sent when the user presses the return key",
			"OS":["mac","ios"],
			"examples":[{
				"script":"on returnKey\n    -- ensure the user has entered a number\n    if the text of the target is not a number then\n      beep\n      answer \"Invalid number entered!\"\n    end if\nend returnKey"
			}],
			"description":"Sent when the user presses the return key"
		},{
			"id":"org.openxtalk.widget.applepdfkit-4",
			"name":"mouseleave",
			"display name":"mouseLeave",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"message",
			"syntax":[
				"on mouseLeave"
			],
			"display syntax":[
				"on mouseLeave"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"summary":"Sent when the cursor leaves the widget area.",
			"OS":["mac","ios"],
			"examples":[{
				"script":"on mouseLeave\n    put \"Current Page Label\" & the PDFPageLabel of widget \"Apple PDFView Widget\"\nend mouseLeave"
			}],
			"description":"Use the <returnKey> message to respond to the user pressing the return\nkey whilst the field is focused."
		},{
			"id":"org.openxtalk.widget.applepdfkit-5",
			"name":"mousedown",
			"display name":"mouseDown",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"message",
			"syntax":[
				"on mouseDown"
			],
			"display syntax":[
				"on mouseDown"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"OS":["mac","ios"]
		},{
			"id":"org.openxtalk.widget.applepdfkit-6",
			"name":"mouseup",
			"display name":"mouseUp",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"message",
			"syntax":[
				"on mouseUp"
			],
			"display syntax":[
				"on mouseUp"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"OS":["mac","ios"]
		},{
			"id":"org.openxtalk.widget.applepdfkit-7",
			"name":"mousescroll",
			"display name":"mouseScroll",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"message",
			"syntax":[
				"on mouseScroll"
			],
			"display syntax":[
				"on mouseScroll"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"OS":["mac","ios"]
		},{
			"id":"org.openxtalk.widget.applepdfkit-8",
			"name":"mousestillhover",
			"display name":"mouseStillHover",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"message",
			"syntax":[
				"on mouseStillHover"
			],
			"display syntax":[
				"on mouseStillHover"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"OS":["mac","ios"]
		},{
			"id":"org.openxtalk.widget.applepdfkit-9",
			"name":"pdfviewgopage",
			"display name":"PDFViewGoPage",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"property",
			"syntax":[
				"set the PDFViewGoPage of <widget> to \"Next\""
			],
			"display syntax":[
				"set the PDFViewGoPage of <i>widget</i> to \"Next\""
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"summary":"Set the PDFViewGoPage to navigate through a PDF Document.",
			"OS":["mac","ios"],
			"examples":[{
				"script":"on mouesUp\n    set the PDFViewGoPage of \"My PDF View\" to \"Last\" -- go to last page of PDF\n    wait 3\n    set the PDFViewGoPage of \"My PDF View\" to \"Previous\" -- now 2nd from last page\n    wait 3\n    set the PDFViewGoPage of \"My PDF View\" to 7 -- now go to page 7\nend mouesUp"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"Either a page number or navigational command."
			}],
			"description":"Set the <PDFViewGoPage> property to mavigate though a PDF.\nUse a page number to go to that page, if it exists, in the PDF, or use a\nnavigational command, which can be any of the following item list:\nNext,next,>,Previous,previous,Prev,prev,<,First,first,Last,last."
		},{
			"id":"org.openxtalk.widget.applepdfkit-10",
			"name":"pdfurl",
			"display name":"PDFURL",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"property",
			"syntax":[
				"set the PDFURL of <widget> to <url>\nget the PDFURL of <widget>"
			],
			"display syntax":[
				"set the PDFURL of <i>widget</i> to <i>url</i>"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"summary":"The URL of the PDF for display.",
			"OS":["mac","ios"],
			"examples":[{
				"script":"on mouesUp\n    set the PDFURL of \"My PDF View\" to \"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf\"\nend mouesUp"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The PDF URL if any."
			}],
			"description":"Use the <PDFURL> property to get or set the URL of the PDF file being displayed\nby the widget. A URL can be a local file:// URL or a remote (such as https//) URL."
		},{
			"id":"org.openxtalk.widget.applepdfkit-11",
			"name":"pdfpagelabel",
			"display name":"PDFPageLabel",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"property",
			"syntax":[
				"get the PDFPageLabel of <widget>"
			],
			"display syntax":[
				"get the PDFPageLabel of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"summary":"The label of the current page as embedded in the current PDF.",
			"OS":["mac","ios"],
			"examples":[{
				"script":"on mouesUp\n    put the PDFPageLabel of \"My PDF View\" into fld \"Folio\"\nend mouesUp"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The current page label."
			}],
			"description":"The  of the current page as embedded in the current PDF.\nGet the <PDFPageLabel> property to get any embedded folio label of the current page.\nThe label is a not neccessarily equivalent to the page number and could be\nsomething like \"Index IV\" for example."
		},{
			"id":"org.openxtalk.widget.applepdfkit-12",
			"name":"pdfpagetext",
			"display name":"PDFPageText",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"property",
			"syntax":[
				"get the PDFPageText of <widget>"
			],
			"display syntax":[
				"get the PDFPageText of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"summary":"The text, if any, embedded in the current page of the PDF.",
			"OS":["mac","ios"],
			"examples":[{
				"script":"on mouesUp\n    put the PDFPageText of \"My PDF View\" into fld \"PDF Page Text Dump\"\nend mouesUp"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The current page label."
			}],
			"description":"Get the <PDFPageText> property to get any text that may, or may not be embedded\nin the current page of the PDF."
		},{
			"id":"org.openxtalk.widget.applepdfkit-13",
			"name":"pdfpath",
			"display name":"PDFPath",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"property",
			"syntax":[
				"set the PDFPath of <widget> to <pPath>\nget the PDFPath of <widget>"
			],
			"display syntax":[
				"set the PDFPath of <i>widget</i> to <i>pPath</i>"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"summary":"The File Path of the PDF to display in the widget",
			"OS":["mac","ios"],
			"examples":[{
				"script":"on mouesUp\n    set the PDFPath of \"My PDF View\" to \"Applications/Utilities/System Information.app/Contents/Resources/ProductGuides/ENERGY STAR.pdf\"\nend mouesUp"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"The PDF File Path if any."
			}],
			"description":"Use the <PDFPath> property to get or set the path of the PDF file\nbeing displayed by the widget."
		},{
			"id":"org.openxtalk.widget.applepdfkit-14",
			"name":"pdfdisplaymode",
			"display name":"PDFDisplayMode",
			"library":"org.openxtalk.widget.applepdfkit",
			"type":"property",
			"syntax":[
				"set the PDFDisplayMode of <widget> to <PDFDisplayMode>\nget the PDFDisplayMode of <widget>"
			],
			"display syntax":[
				"set the PDFDisplayMode of <i>widget</i> to <i>PDFDisplayMode</i>"
			],
			"associations":["org.openxtalk.widget.applepdfkit"],
			"summary":"The mode to display the PDF in the widget",
			"OS":["mac","ios"],
			"examples":[{
				"script":"on mouesUp\n   -- display only one page at a time\n    set the PDFDisplayMode of \"My PDF View\" to \"Single\"\nend mouesUp"
			}],
			"value":[{
				"name":"value",
				"type":"",
				"description":"An item from Single,Single-Continuous,TwoUp,TwoUp-Continuous"
			}],
			"description":"Use the <PDFDisplayMode> property to get or set the style in which\npages are displayed by the widget. For example, use \"Single\" to display\none page at a time.\n"
		}