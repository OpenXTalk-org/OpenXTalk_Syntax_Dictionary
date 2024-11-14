{
			"id":"com.livecode.widget.native.android.field-1",
			"name":"com.livecode.widget.native.android.field",
			"display name":"Android Native Field",
			"library":"com.livecode.widget.native.android.field",
			"type":"widget",
			"display syntax":[
				"Android Native Field"
			],
			"associations":["com.livecode.widget.native.android.field"],
			"summary":"This widget is a native field on Android.",
			"OS":["android"],
			"description":"This widget is a native field on Android."
		},{
			"id":"com.livecode.widget.native.android.field-2",
			"name":"enabled",
			"display name":"enabled",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-3",
			"name":"openfield",
			"display name":"openField",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-4",
			"name":"closefield",
			"display name":"closeField",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-5",
			"name":"exitfield",
			"display name":"exitField",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-6",
			"name":"textchanged",
			"display name":"textChanged",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-7",
			"name":"keyboardtype",
			"display name":"keyboardType",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-8",
			"name":"editable",
			"display name":"editable",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-9",
			"name":"text",
			"display name":"text",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-10",
			"name":"multiline",
			"display name":"multiline",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-11",
			"name":"textalign",
			"display name":"textAlign",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-12",
			"name":"autocorrectiontype",
			"display name":"autoCorrectionType",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-13",
			"name":"selectedrange",
			"display name":"selectedRange",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-14",
			"name":"autocapitalizationtype",
			"display name":"autoCapitalizationType",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-15",
			"name":"contenttype",
			"display name":"contentType",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-16",
			"name":"verticaltextalign",
			"display name":"verticalTextAlign",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-17",
			"name":"returnkeytype",
			"display name":"returnKeyType",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-18",
			"name":"fieldtextcolor",
			"display name":"fieldTextColor",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-19",
			"name":"scrollingenabled",
			"display name":"scrollingEnabled",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-20",
			"name":"passreturnkey",
			"display name":"passReturnKey",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-21",
			"name":"focused",
			"display name":"focused",
			"library":"com.livecode.widget.native.android.field",
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
			"id":"com.livecode.widget.native.android.field-22",
			"name":"datadetectortypes",
			"display name":"dataDetectorTypes",
			"library":"com.livecode.widget.native.android.field",
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
		}