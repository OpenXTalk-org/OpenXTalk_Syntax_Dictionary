{
			"id":"com.livecode.widget.clock-1",
			"name":"com.livecode.widget.clock",
			"display name":"Clock",
			"library":"com.livecode.widget.clock",
			"type":"widget",
			"display syntax":[
				"Clock"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"This widget consists of an analogue clock. The clock has day and night style displays which\nare used depending on the time. The period interpreted as day by the clock is controlled by\na pair of constants kStartDay and kEndDay, currently set at 6 and 20 respectively. Thus the\nclock will display in night style between the hours of 8pm and 6am. The style of the clock,\ncan be controlled by setting the appropriate colors of the different components. For daytime\nthis is through the dayNumberColor, dayHourHandColor, dayMinuteHandColor, daySecondHandColor\nand dayFaceColor properties. There are equivalent properties for the night style. The time\ndisplayed by the clock can differ from the current system local time by setting the timeZone\nproperty, an integer which adjusts the time displayed relative to universal time (UTC).",
			"description":"This widget consists of an analogue clock. The clock has day and night style displays which\nare used depending on the time. The period interpreted as day by the clock is controlled by\na pair of constants kStartDay and kEndDay, currently set at 6 and 20 respectively. Thus the\nclock will display in night style between the hours of 8pm and 6am. The style of the clock,\ncan be controlled by setting the appropriate colors of the different components. For daytime\nthis is through the dayNumberColor, dayHourHandColor, dayMinuteHandColor, daySecondHandColor\nand dayFaceColor properties. There are equivalent properties for the night style. The time\ndisplayed by the clock can differ from the current system local time by setting the timeZone\nproperty, an integer which adjusts the time displayed relative to universal time (UTC)."
		},{
			"id":"com.livecode.widget.clock-2",
			"name":"dayhourhandcolor",
			"display name":"dayHourHandColor",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the dayHourHandColor of <widget>",
				"set the dayHourHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayHourHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the hour hand on the clock during the day",
			"description":"Use the <dayHourHandColor> property to get or set the color of the hour\nhand of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"com.livecode.widget.clock-3",
			"name":"nightnumbercolor",
			"display name":"nightNumberColor",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the nightNumberColor of <widget>",
				"set the nightNumberColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightNumberColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the numbers on the clock during the night",
			"description":"Use the <nightNumberColor> property to get or set the text color of the numbers\non the face of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors use the read-only property\n<isDay>."
		},{
			"id":"com.livecode.widget.clock-4",
			"name":"dayminutehandcolor",
			"display name":"dayMinuteHandColor",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the dayMinuteHandColor of <widget>",
				"set the dayMinuteHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayMinuteHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the minute hand on the clock during the day",
			"description":"Use the <dayMinuteHandColor> property to get or set the color of the minute\nhand of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"com.livecode.widget.clock-5",
			"name":"isday",
			"display name":"isDay",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the isDay of <widget>"
			],
			"display syntax":[
				"get the isDay of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Whether the clock's current display is in \"day\" mode.",
			"value":[{
				"name":"value",
				"type":"",
				"description":"True if the widget is in \"day\" mode; false otherwise"
			}],
			"description":"The <isDay> property indicates whether the clock widget is using its\n\"day\" mode or \"night\" mode.  Its value depends on the current time,\nand is read-only."
		},{
			"id":"com.livecode.widget.clock-6",
			"name":"nighthourhandcolor",
			"display name":"nightHourHandColor",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the nightHourHandColor of <widget>",
				"set the nightHourHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightHourHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the hour hand on the clock during the night",
			"description":"Use the <nightHourHandColor> property to get or set the color of the hour\nhand of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"com.livecode.widget.clock-7",
			"name":"nightminutehandcolor",
			"display name":"nightMinuteHandColor",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the nightMinuteHandColor of <widget>",
				"set the nightMinuteHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightMinuteHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the minute hand on the clock during the night",
			"description":"Use the <nightMinuteHandColor> property to get or set the color of the minute\nhand of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"com.livecode.widget.clock-8",
			"name":"daysecondhandcolor",
			"display name":"daySecondHandColor",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the daySecondHandColor of <widget>",
				"set the daySecondHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the daySecondHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the second hand on the clock during the day",
			"description":"Use the <daySecondHandColor> property to get or set the color of the second\nhand of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"com.livecode.widget.clock-9",
			"name":"nightsecondhandcolor",
			"display name":"nightSecondHandColor",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the nightSecondHandColor of <widget>",
				"set the nightSecondHandColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightSecondHandColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the second hand on the clock during the night",
			"description":"Use the <nightSecondHandColor> property to get or set the color of the second\nhand of the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"com.livecode.widget.clock-10",
			"name":"dayfacecolor",
			"display name":"dayFaceColor",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the dayFaceColor of <widget>",
				"set the dayFaceColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayFaceColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the face of the clock during the day",
			"description":"Use the <dayFaceColor> property to get or set the color of the face\nof the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"com.livecode.widget.clock-11",
			"name":"daynumbercolor",
			"display name":"dayNumberColor",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the dayNumberColor of <widget>",
				"set the dayNumberColor of <widget> to <color>"
			],
			"display syntax":[
				"get the dayNumberColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the numbers on the clock during the day",
			"description":"Use the <dayNumberColor> property to get or set the text color of the numbers\non the face of the clock during the day. To determine if the clock is\ndisplaying its daytime or night-time colors use the read-only property\n<isDay>."
		},{
			"id":"com.livecode.widget.clock-12",
			"name":"nightfacecolor",
			"display name":"nightFaceColor",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the nightFaceColor of <widget>",
				"set the nightFaceColor of <widget> to <color>"
			],
			"display syntax":[
				"get the nightFaceColor of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"Determines the color of the face of the clock during the night",
			"description":"Use the <nightFaceColor> property to get or set the color of the face\nof the clock during the night. To determine if the clock is\ndisplaying its daytime or night-time colors, use the read-only property\n<isDay>."
		},{
			"id":"com.livecode.widget.clock-13",
			"name":"timezone",
			"display name":"timeZone",
			"library":"com.livecode.widget.clock",
			"type":"property",
			"syntax":[
				"get the timeZone of <widget>",
				"set the timeZone of <widget> to <pOffset>"
			],
			"display syntax":[
				"get the timeZone of <i>widget</i>"
			],
			"associations":["com.livecode.widget.clock"],
			"summary":"The time zone offset from UTC, in seconds, or the empty string",
			"description":"The <timeZone> is used to allow the clock widget to display a time other than\nthe local time.  If the <timeZone> is empty, then the clock displays the local\ntime.  Otherwise, the <timeZone> should be the number of seconds different from\nUTC that the clock should display.\n"
		}