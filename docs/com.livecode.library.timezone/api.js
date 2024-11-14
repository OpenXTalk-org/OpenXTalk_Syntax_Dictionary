{
			"id":"com.livecode.library.timezone-1",
			"name":"com.livecode.library.timezone",
			"display name":"Time zone Library",
			"library":"com.livecode.library.timezone",
			"type":"library",
			"display syntax":[
				"Time zone Library"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"This library provides access to the tz timezone database",
			"description":"This library provides access to the tz timezone database"
		},{
			"id":"com.livecode.library.timezone-2",
			"name":"fromuniversaltime",
			"display name":"FromUniversalTime",
			"library":"com.livecode.library.timezone",
			"type":"handler",
			"syntax":[
				"FromUniversalTime(<pSeconds>,<pTimeZone>)"
			],
			"display syntax":[
				"FromUniversalTime(<i>pSeconds</i>,<i>pTimeZone</i>)"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"Convert universal time to local time",
			"parameters":[{
				"name":"pSeconds",
				"type":"",
				"refparam":"false",
				"description":"The universal time, i.e. seconds since the beginning of the epoch."
			},{
				"name":"pTimeZone",
				"type":"",
				"refparam":"false",
				"description":"The time zone, in the form returned by the <TimeZones> function."
			}],
			"examples":[{
				"script":"local tDateTime\nput \"2018,2,14,13,38,0,4\" into tDateTime\nconvert tDateTime to seconds\nput FromUniversalTime(tDateTime, \"Antarctica/Vostok\") into tDateTime\nconvert tDateTime to dateitems\n-- tDateTime contains \"2018,2,14,19,38,0,4\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The local time"
			}],
			"description":"Use the <FromUniversalTime> function to find the local time for the \nspecified timezone, given the universal time.",
			"references":{
				"handler":["TimeZones"]
			},
			"tags":["datetime","library"]
		},{
			"id":"com.livecode.library.timezone-3",
			"name":"touniversaltime",
			"display name":"ToUniversalTime",
			"library":"com.livecode.library.timezone",
			"type":"handler",
			"syntax":[
				"ToUniversalTime(<pSeconds>,<pTimeZone>)"
			],
			"display syntax":[
				"ToUniversalTime(<i>pSeconds</i>,<i>pTimeZone</i>)"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"Convert local time to universal time",
			"parameters":[{
				"name":"pSeconds",
				"type":"",
				"refparam":"false",
				"description":"The local time"
			},{
				"name":"pTimeZone",
				"type":"",
				"refparam":"false",
				"description":"The time zone, in the form returned by the <TimeZones> function."
			}],
			"examples":[{
				"script":"local tDateTime\nput \"2018,2,14,13,38,0,4\" into tDateTime\nconvert tDateTime to seconds\nput ToUniversalTime(tDateTime, \"Africa/Windhoek\") into tDateTime\nconvert tDateTime to dateitems\n-- tDateTime contains \"2018,2,14,11,38,0,4\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The universal time"
			}],
			"description":"Use the <ToUniversalTime> function to find the universal time, given the \nlocal time for the specified time zone. ",
			"references":{
				"handler":["TimeZones"]
			},
			"tags":["datetime","library"]
		},{
			"id":"com.livecode.library.timezone-4",
			"name":"timezones",
			"display name":"TimeZones",
			"library":"com.livecode.library.timezone",
			"type":"handler",
			"syntax":[
				"TimeZones()"
			],
			"display syntax":[
				"TimeZones()"
			],
			"associations":["com.livecode.library.timezone"],
			"summary":"List the time zones used by the Time zone library",
			"examples":[{
				"script":"-- List all time zones and their times\nlocal tList, tTime, tData\nput the seconds into tTime\nrepeat for each line tLine in TimeZones()\n   put tLine & tab & FromUniversalTime(tTime, tLine) into tData\n   if tList is empty then\n      put tData into tList\n   else\n      put tData & return after tList\n   end if\nend repeat"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list of time zones, one per line."
			}],
			"description":"Use the <TimeZones> function to find a list of valid timezones used by <ToUniversalTime> and <FromUniversalTime>,",
			"references":{
				"handler":["ToUniversalTime","FromUniversalTime"]
			},
			"tags":["datetime","library"]
		}