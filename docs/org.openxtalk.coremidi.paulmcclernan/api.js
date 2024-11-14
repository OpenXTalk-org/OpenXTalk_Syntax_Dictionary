{
			"id":"org.openxtalk.coremidi.paulmcclernan-1",
			"name":"org.openxtalk.coremidi.paulmcclernan",
			"display name":"CoreMIDI library",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"library",
			"display syntax":[
				"CoreMIDI library"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"This library contains bindings for macOS & iOS CoreMIDI, useful sending musical performance data to other applications or communicating with external musical devices.",
			"edition":"Community",
			"OS":["macos","ios (untested)"],
			"description":"This library is a (currently incomplete) wrapper for Apple's CoreMIDI API.\n\n>*Note:* This library is MIT licensed (permissive).\n> Please share and share a like."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-2",
			"name":"coremidicontroller",
			"display name":"CoreMIDIController",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDIController(<pController>,<pControllerVal><pMIDIChanNum>)"
			],
			"display syntax":[
				"CoreMIDIController(<i>pController</i>,<i>pControllerVal</i><i>pMIDIChanNum</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"The send a controller with a single data byte value to on a given channel",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pController",
				"type":"",
				"refparam":"false",
				"description":"The number of the MIDI Controller to set values for"
			},{
				"name":"pControllerVal",
				"type":"",
				"refparam":"false",
				"description":"The value byte one"
			},{
				"name":"pMIDIChanNum",
				"type":"",
				"refparam":"false",
				"description":"MIDI Channel to send the controller value on, 1 to 16"
			}],
			"examples":[{
				"script":"CoreMIDIController 7,127,1 -- 7 = Volume Controller, Data Byte 1, channel 1"
			}],
			"description":"The send a controller with a single data byte value to on a given channel"
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-3",
			"name":"coremidisendmidibytesnow",
			"display name":"CoreMIDISendMIDIbytesNow",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDISendMIDIbytesNow(<pMIDIMsgData>)"
			],
			"display syntax":[
				"CoreMIDISendMIDIbytesNow(<i>pMIDIMsgData</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Sends arbitrary bytes to the MIDI Client.",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pMIDIMsgData",
				"type":"",
				"refparam":"false",
				"description":"arbitrary bytes, does not check for the bytes for validity as MIDI messages"
			}],
			"examples":[{
				"script":"CoreMIDISendMIDIbytesNow <pMIDIMsgData>"
			}],
			"description":"Sends arbitrary bytes to the MIDI Client immediately (as fast as possible).\nA MIDI Client must be created first using CoreMIDIClientCreate."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-4",
			"name":"coremidipitchbend",
			"display name":"CoreMIDIPitchbend",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDIPitchbend <pPitchBendCoarse>,<pMIDIChannelNum>"
			],
			"display syntax":[
				"CoreMIDIPitchbend <i>pPitchBendCoarse</i>,<i>pMIDIChannelNum</i>"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"The send pitchbend with coarse range from 0 to 127, 64 is centered (no bend)",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pPitchBendCoarse",
				"type":"",
				"refparam":"false",
				"description":"The number of the pitch bend 'position'"
			},{
				"name":"pMIDIChanNum",
				"type":"",
				"refparam":"false",
				"description":"MIDI Channel to send the bend value on, 1 to 16"
			}],
			"examples":[{
				"script":"CoreMIDIPitchbendFine 0,1 -- Pitchbend Maximum Down, channel 1\nCoreMIDIPitchbendFine 127,1 -- Pitchbend Maximum Up, channel 1\nCoreMIDIPitchbendFine 64,1 -- Centered No Bend, channel 1"
			}],
			"description":"The send a controller with a single data byte value to on a given channel"
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-5",
			"name":"coremidigetsourcenameandid",
			"display name":"CoreMIDIGetSourceNameAndID",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDIGetSourceNameAndID(<pIndex>)"
			],
			"display syntax":[
				"CoreMIDIGetSourceNameAndID(<i>pIndex</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Given an index number of a MIDI Source returns Display Name and Unique ID Number.",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"Index number of a source currently available to CoreMIDI."
			}],
			"examples":[{
				"script":"put CoreMIDIGetSourceNameAndID(1) into line 1 of button \"Sources\""
			}],
			"description":"Given an index number of a MIDI Source returns Display Name and Unique ID Number seperated by a comma."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-6",
			"name":"coremidiobjecttypefromid",
			"display name":"CoreMIDIObjectTypeFromID",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDIObjectTypeFromID(<uniqueIDnum>)"
			],
			"display syntax":[
				"CoreMIDIObjectTypeFromID(<i>uniqueIDnum</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Given the unique ID number of an object in the current MIDI setup returns the object's type.",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"uniqueIDnum",
				"type":"",
				"refparam":"false",
				"description":"Unique ID number of an object in the current MIDI setup"
			}],
			"examples":[{
				"script":"CoreMIDIObjectTypeFromID( uniqueIDnum )"
			}],
			"description":"Given the unique ID number of an object in the current MIDI setup returns the object's type.\n(Source, Destination, Extenal Device, etc.)"
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-7",
			"name":"coremidinoteon",
			"display name":"CoreMIDINoteOn",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDINoteOn <MIDINoteNumber>,pMIDIVelocityNumber,<pMIDIChannelNumber>"
			],
			"display syntax":[
				"CoreMIDINoteOn <i>MIDINoteNumber</i>,pMIDIVelocityNumber,<i>pMIDIChannelNumber</i>"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Immediately sends a MIDI Note On message with the given pitch and velocity on the given channel.",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pMIDINoteNum",
				"type":"",
				"refparam":"false",
				"description":"The number of the pitch to turn on, 0 to 127, 60 = Middle C"
			},{
				"name":"pMIDIVeloNum",
				"type":"",
				"refparam":"false",
				"description":"The velocity to play the given pitch at, 0 to 127"
			},{
				"name":"pMIDIChanNum",
				"type":"",
				"refparam":"false",
				"description":"The MIDI Channel to play the note on, 1 to 16"
			}],
			"examples":[{
				"script":"CoreMIDINoteOn 60,127,1 -- 60=Middle C, 127=Full velocity, 1=MIDI channel 1"
			}],
			"description":"Immediately sends a MIDI Note On message with the given pitch and velocity on the given channel."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-8",
			"name":"coremidistart",
			"display name":"CoreMIDIStart",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDIStart()"
			],
			"display syntax":[
				"CoreMIDIStart()"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Sends System Realtime Start message",
			"OS":["macos","ios (untested)"],
			"examples":[{
				"script":"CoreMIDIStart"
			}],
			"description":"Sends Start message for receivers such as Drum Machines that respond to System Realtime messages"
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-9",
			"name":"coremidigetnumberofdestinations",
			"display name":"CoreMIDIGetNumberOfDestinations",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDIGetNumberOfDestinations()"
			],
			"display syntax":[
				"CoreMIDIGetNumberOfDestinations()"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Returns a count of MIDI Destinations in the MIDI Setup that are currently available.",
			"OS":["macos","ios (untested)"],
			"examples":[{
				"script":"put CoreMIDIGetNumberOfDestinations() into tDestinationsCount"
			}],
			"description":"Returns a count of MIDI Destinations in the MIDI Setup that are currently available.\nDestinations in the setup that are powered off or not connected will not be included in the count."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-10",
			"name":"coremidiaftertouch",
			"display name":"CoreMIDIAftertouch",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDIAftertouch(<pNoteNum>,<pKeyPressure>,<pMIDIChanNum>)"
			],
			"display syntax":[
				"CoreMIDIAftertouch(<i>pNoteNum</i>,<i>pKeyPressure</i>,<i>pMIDIChanNum</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"The send Aftertouch (key pressure) for specified note on the given channel",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pNoteNum",
				"type":"",
				"refparam":"false",
				"description":"The number of the pitch/key to apply pressure value to"
			},{
				"name":"pKeyPressure",
				"type":"",
				"refparam":"false",
				"description":"The pitch/key pressure value, range 0 to 127"
			},{
				"name":"pMIDIChanNum",
				"type":"",
				"refparam":"false",
				"description":"MIDI Channel to send the value on, 1 to 16"
			}],
			"examples":[{
				"script":"CoreMIDIAftertouch 60,127,1 -- Middle C=60, 127=Maximum Pressure, channel 1"
			}],
			"description":"The send Aftertouch (key pressure) for specified note on the given channel. MIDI Controllers can have pressure sensors under each key that can transmit this value for each note."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-11",
			"name":"coremidiprogramchange",
			"display name":"CoreMIDIProgramChange",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDIProgramChange(<pPatch>,<pMIDIChanNum>)"
			],
			"display syntax":[
				"CoreMIDIProgramChange(<i>pPatch</i>,<i>pMIDIChanNum</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Sends Program Change message on the given channel",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pPatch",
				"type":"",
				"refparam":"false",
				"description":"The patch number to change to, range 1 to 128"
			},{
				"name":"pMIDIChanNum",
				"type":"",
				"refparam":"false",
				"description":"MIDI Channel to send the value on, 1 to 16"
			}],
			"examples":[{
				"script":"CoreMIDIProgramChange 10,1 -- 10=, channel 1"
			}],
			"description":"Sends Program Change message on the given channel."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-12",
			"name":"coremidisendmidibytesintime",
			"display name":"CoreMIDISendMIDIbytesInTime",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDISendMIDIbytesInTime(<pTimeOffsetMillisecs>,<pMIDIMsgData>)"
			],
			"display syntax":[
				"CoreMIDISendMIDIbytesInTime(<i>pTimeOffsetMillisecs</i>,<i>pMIDIMsgData</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Sends arbitrary bytes to the MIDI Client's Queue in millisecond Offsets from now.",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pTimeOffsetMillisecs",
				"type":"",
				"refparam":"false",
				"description":"the millesecond offset from now to hold in queue"
			},{
				"name":"pMIDIMsgData",
				"type":"",
				"refparam":"false",
				"description":"arbitrary bytes, does not check for the bytes for validity as MIDI messages"
			}],
			"examples":[{
				"script":"CoreMIDISendMIDIbytesInTime(0,pMIDIMsgData) -- sends pMIDIMsgData immediately\nCoreMIDISendMIDIbytesInTime(1000,pMIDIMsgData) -- sends pMIDIMsgData in 1 second"
			}],
			"description":"Sends arbitrary bytes to the MIDI Client's Queue in millisecond Offsets from now.\nA MIDI Client must be created first using CoreMIDIClientCreate."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-13",
			"name":"coremidistop",
			"display name":"CoreMIDIStop",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDIStop()"
			],
			"display syntax":[
				"CoreMIDIStop()"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Sends System Realtime Stop message",
			"OS":["macos","ios (untested)"],
			"examples":[{
				"script":"CoreMIDIStop"
			}],
			"description":"Sends Stop message for receivers such as Drum Machines that respond to System Realtime messages"
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-14",
			"name":"coremidiselectsourcebyid",
			"display name":"CoreMIDISelectSourceByID",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDISelectSourceByID(<uniqueIDnum>)"
			],
			"display syntax":[
				"CoreMIDISelectSourceByID(<i>uniqueIDnum</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Selects the MIDI Source of the corrisponding unique ID as the data output source.",
			"OS":["macos","ios (untested)"],
			"examples":[{
				"script":"CoreMIDISelectSourceByID(uniqueIDnum)"
			}],
			"description":"Given an index number of a MIDI Source returns Display Name and Unique ID Number seperated by a comma."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-15",
			"name":"coremidigetdestinationinfo",
			"display name":"CoreMIDIGetDestinationInfo",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDIGetDestinationInfo(<pIndex>)"
			],
			"display syntax":[
				"CoreMIDIGetDestinationInfo(<i>pIndex</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Given an index number of a MIDI Destination returns Text of it's XML/Plist Data",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"Index number of a destination in the currently available to CoreMIDI."
			}],
			"examples":[{
				"script":"put CoreMIDIGetDestinationInfo(1) into fld \"Destination Plist Info\" -- info for the 1st detination found"
			}],
			"description":"Given an index number of a MIDI Destination returns Text of it's XML/Plist Data"
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-16",
			"name":"coremidinoteoff",
			"display name":"CoreMIDINoteOff",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDINoteOff <MIDINoteNumber>,<MIDIChannelNumber>"
			],
			"display syntax":[
				"CoreMIDINoteOff <i>MIDINoteNumber</i>,<i>MIDIChannelNumber</i>"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Immediately sends a MIDI Note Off message with the given pitch and velocity on the given channel.",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pMIDINoteNum",
				"type":"",
				"refparam":"false",
				"description":"The number of the pitch to turn off, 0 to 127, 60 = Middle C"
			},{
				"name":"pMIDIChanNum",
				"type":"",
				"refparam":"false",
				"description":"The MIDI Channel to send the message to, 0 to 15, 0 = Channel 1"
			}],
			"examples":[{
				"script":"CoreMIDINoteOff 60,1 -- Turns off Middle C on MIDI channel 1"
			}],
			"description":"Immediately sends a MIDI Note Off message with the given pitch on the given channel."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-17",
			"name":"coremidichannelpressure",
			"display name":"CoreMIDIChannelPressure",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDIChannelPressure(<pChannelPressure>,<pMIDIChanNum>)"
			],
			"display syntax":[
				"CoreMIDIChannelPressure(<i>pChannelPressure</i>,<i>pMIDIChanNum</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"The send Channel Pressure on the given channel",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pChannelPressure",
				"type":"",
				"refparam":"false",
				"description":"The channel pressure value, range 0 to 127"
			},{
				"name":"pMIDIChanNum",
				"type":"",
				"refparam":"false",
				"description":"MIDI Channel to send the value on, 1 to 16"
			}],
			"examples":[{
				"script":"CoreMIDIChannelPressure 127,1 -- 127=Maximum Pressure, channel 1"
			}],
			"description":"Send Channel Pressure on the given channel. MIDI Controllers can have a single pressure sensor strip for the full range of keys."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-18",
			"name":"coremidicontinue",
			"display name":"CoreMIDIContinue",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDIContinue()"
			],
			"display syntax":[
				"CoreMIDIContinue()"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Sends System Realtime Continue message",
			"OS":["macos","ios (untested)"],
			"examples":[{
				"script":"CoreMIDIContinue"
			}],
			"description":"Sends Continue message for receivers such as Drum Machines that respond to System Realtime messages"
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-19",
			"name":"coremidigetnumberofsources",
			"display name":"CoreMIDIGetNumberOfSources",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDIGetNumberOfSources()"
			],
			"display syntax":[
				"CoreMIDIGetNumberOfSources()"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Returns a count of MIDI Sources in the MIDI Setup that are currently available.",
			"OS":["macos","ios (untested)"],
			"examples":[{
				"script":"put CoreMIDIGetNumberOfSources() into tDestinationsCount"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Count of currently available MIDI Sources"
			}],
			"description":"Returns a count of MIDI Sources in the MIDI Setup that are currently available.\nDestinations in the setup that are powered off or not connected will not be included in the count."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-20",
			"name":"coremidigetdestinationnameandid",
			"display name":"CoreMIDIGetDestinationNameAndID",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDIGetDestinationNameAndID(<pIndex>)"
			],
			"display syntax":[
				"CoreMIDIGetDestinationNameAndID(<i>pIndex</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Given an index number of a MIDI Destination returns Display Name and Unique ID Number.",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"Index number of a destination in the currently available to CoreMIDI."
			}],
			"examples":[{
				"script":"put CoreMIDIGetDestinationNameAndID(1) into line 1 of button \"Destinations\""
			}],
			"description":"Given an index number of a MIDI Destination returns Display Name and Unique ID Number seperated by a comma."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-21",
			"name":"coremidipitchbendfine",
			"display name":"CoreMIDIPitchbendFine",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDIPitchbendFine <pPitchBendCoarseNFine>,<pMIDIChanNum>"
			],
			"display syntax":[
				"CoreMIDIPitchbendFine <i>pPitchBendCoarseNFine</i>,<i>pMIDIChanNum</i>"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"The send pitchbend with fine range from 0 to 16384, 8192 is centered (no bend)",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pMIDIChanNum",
				"type":"",
				"refparam":"false",
				"description":"MIDI Channel to send the bend value on, 1 to 16"
			}],
			"examples":[{
				"script":"CoreMIDIPitchbendFine 0,1 -- Pitchbend Maximum Down, channel 1\nCoreMIDIPitchbendFine 16384,1 -- Pitchbend Maximum Up, channel 1\nCoreMIDIPitchbendFine 8192,1 -- Centered / No Bend, channel 1"
			}],
			"description":"The send pitchbend with fine range from 0 to 16384, 8192 is centered (no bend)"
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-22",
			"name":"coremidisystemreset",
			"display name":"CoreMIDISystemReset",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"command",
			"syntax":[
				"CoreMIDISystemReset()"
			],
			"display syntax":[
				"CoreMIDISystemReset()"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Sends System Realtime Reset message",
			"OS":["macos","ios (untested)"],
			"examples":[{
				"script":"CoreMIDISystemReset"
			}],
			"description":"Sends System Reset message for receivers such that respond to such messages.\n\nThe receiver should be reset to the following states if available:\n- Omni on, Polyphonic\n- Local control on\n- All notes turned off\n- All controllers returned to their 'normal' settings\n- Any song playing stopped\n- Song Position Pointer = 0\n- Running Status is cleared\n- Reset to power-up conditions"
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-23",
			"name":"coremidigetsourceinfo",
			"display name":"CoreMIDIGetSourceInfo",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDIGetSourceInfo(<pIndex>)"
			],
			"display syntax":[
				"CoreMIDIGetSourceInfo(<i>pIndex</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Given an index number of a MIDI Source returns Text of it's XML/Plist Data.",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"Index number of a source currently available to CoreMIDI."
			}],
			"examples":[{
				"script":"put CoreMIDIGetSourceInfo(1) into fld \"Source Plist Info\" -- info for the 1st detination found"
			}],
			"description":"Given an index number of a MIDI Source returns text of it's XML/Plist Data."
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-24",
			"name":"coremidisourcecreate",
			"display name":"CoreMIDISourceCreate",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDISourceCreate(<sourceName>,<uniqueIDnum>)"
			],
			"display syntax":[
				"CoreMIDISourceCreate(<i>sourceName</i>,<i>uniqueIDnum</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Creates a Virtual MIDI Source with the given name.",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"sourceName",
				"type":"",
				"refparam":"false",
				"description":"The name to use for the MIDI source"
			},{
				"name":"uniqueIDnum",
				"type":"",
				"refparam":"false",
				"description":"A number to use as the unique ID number for your source, if an\nempty value is passed an ID number will be generated by the system."
			}],
			"examples":[{
				"script":"CoreMIDISourceCreate(\"MIDI Output from my LiveCode Stack\")"
			}],
			"description":"Creates a Virtual MIDI Source with the given name.\nThe name will appear as a source of MIDI data in other applications (such as GarageBand or LogicPro)"
		},{
			"id":"org.openxtalk.coremidi.paulmcclernan-25",
			"name":"coremidiclientcreate",
			"display name":"CoreMIDIClientCreate",
			"library":"org.openxtalk.coremidi.paulmcclernan",
			"type":"handler",
			"syntax":[
				"CoreMIDIClientCreate(<clientName>)"
			],
			"display syntax":[
				"CoreMIDIClientCreate(<i>clientName</i>)"
			],
			"associations":["org.openxtalk.coremidi.paulmcclernan"],
			"summary":"Creates a MIDI Client and asigns it a name.",
			"OS":["macos","ios (untested)"],
			"parameters":[{
				"name":"clientName",
				"type":"",
				"refparam":"false",
				"description":"The text string to use as the MIDI Client's name"
			}],
			"examples":[{
				"script":"CoreMIDIClientCreate(\"My LiveCode CoreMIDI Client\")"
			}],
			"description":"Creates a MIDI Client named with string provided (client name is not generally visible to other applications)\n"
		}