{
			"id":"org.openxtalk.avmidiplay.paulmcclernan-1",
			"name":"org.openxtalk.avmidiplay.paulmcclernan",
			"display name":"AVMIDIPlayer library",
			"library":"org.openxtalk.avmidiplay.paulmcclernan",
			"type":"library",
			"display syntax":[
				"AVMIDIPlayer library"
			],
			"associations":["org.openxtalk.avmidiplay.paulmcclernan"],
			"summary":"This Library is a wrapper for macOS & iOS AVIMIDIPlayer, useful for playing MIDI musical performance data.",
			"description":"This Library is a wrapper for macOS & iOS AVIMIDIPlayer.\n\n>*Note:* This library is provided as-is under GPL3 license.\n> Please share and share a like."
		},{
			"id":"org.openxtalk.avmidiplay.paulmcclernan-2",
			"name":"avmidiplayerloadurls",
			"display name":"AVMIDIPlayerLoadURLs",
			"library":"org.openxtalk.avmidiplay.paulmcclernan",
			"type":"handler",
			"syntax":[
				"AVMIDIPlayerLoadURLs(<MIDIFileURL>,<SoundFontURL>)"
			],
			"display syntax":[
				"AVMIDIPlayerLoadURLs(<i>MIDIFileURL</i>,<i>SoundFontURL</i>)"
			],
			"associations":["org.openxtalk.avmidiplay.paulmcclernan"],
			"summary":"Loads a MIDI file from and a Soundbank file from URLs and prepares for playback.",
			"parameters":[{
				"name":"MIDIFileURL",
				"type":"",
				"refparam":"false",
				"description":"A local file URL that points to a MIDI file"
			},{
				"name":"SoundFontURL",
				"type":"",
				"refparam":"false",
				"description":"A local file URL that points to SoundBank SF2 or DLS file"
			}],
			"examples":[{
				"script":"AVMIDIPlayerLoad \"file:///Users/Me/MIDIMusic.mid\",\"file:///System/Library/Components/CoreAudio.component/Contents/Resources/gs_instruments.dls\""
			}],
			"description":"Loads a MIDI file from and a Soundbank file in either SoundFont2 or\nDownloadable Sound DLS format from local file URLs passed in and\n\"prerolls\" the data, preparing it for playback."
		},{
			"id":"org.openxtalk.avmidiplay.paulmcclernan-3",
			"name":"avmidiplayergetcurrentposition",
			"display name":"AVMIDIPlayerGetCurrentPosition",
			"library":"org.openxtalk.avmidiplay.paulmcclernan",
			"type":"handler",
			"syntax":[
				"AVMIDIPlayerGetCurrentPosition()"
			],
			"display syntax":[
				"AVMIDIPlayerGetCurrentPosition()"
			],
			"associations":["org.openxtalk.avmidiplay.paulmcclernan"],
			"summary":"Returns the current position of playing sequence in seconds and microseconds.",
			"examples":[{
				"script":"function SecsToHrsMinSecs pSecs -- in seconds.millisecs\n   lock screen\n   split pSecs by \".\"\n   put trunc(pSecs[1]) into deltaTime\n   put trunc(deltaTime div 3600) into h -- hours\n   put trunc((deltaTime - (h * 3600)) / 60) into m -- minutes\n   put deltaTime - (h * 3600) - (m * 60) into s -- seconds\n   put format( \"%01i:%02i:%02i\", h, m, s ) &\":\"& pSecs[2] into displayTime\n   return displayTime\nend SecsToHrsMinSecs\nput SecsToHrsMinSecs(AVMIDIPlayerSetCurrentPosition())"
			},{
				"script":"set the thumbPosition of scrollBar \"PlayBackProgress\" to AVMIDIPlayerSetCurrentPosition()"
			}],
			"description":"Returns the current position of playback in seconds and microseconds.\nUse for displaying the current playback progress or current time within a sequence.\nNote that current position will continue to increment past the sequence duration\nuntil a stop command is issued."
		},{
			"id":"org.openxtalk.avmidiplay.paulmcclernan-4",
			"name":"avmidiplayerplay",
			"display name":"AVMIDIPlayerPlay",
			"library":"org.openxtalk.avmidiplay.paulmcclernan",
			"type":"handler",
			"syntax":[
				"AVMIDIPlayerPlay()"
			],
			"display syntax":[
				"AVMIDIPlayerPlay()"
			],
			"associations":["org.openxtalk.avmidiplay.paulmcclernan"],
			"summary":"Plays the data that was loaded with either AVMIDIPlayerLoad or AVMIDIPlayerLoadURLs",
			"examples":[{
				"script":"AVMIDIPlayerPlay"
			}],
			"description":"Plays the data that was loaded with either AVMIDIPlayerLoad or AVMIDIPlayerLoadURLs"
		},{
			"id":"org.openxtalk.avmidiplay.paulmcclernan-5",
			"name":"avmidiplayerload",
			"display name":"AVMIDIPlayerLoad",
			"library":"org.openxtalk.avmidiplay.paulmcclernan",
			"type":"handler",
			"syntax":[
				"AVMIDIPlayerLoad(<MIDIfilePath>,<SoundFontPath>)"
			],
			"display syntax":[
				"AVMIDIPlayerLoad(<i>MIDIfilePath</i>,<i>SoundFontPath</i>)"
			],
			"associations":["org.openxtalk.avmidiplay.paulmcclernan"],
			"summary":"Loads a MIDI file from and a Soundbank file from file paths and prepares for playback.",
			"parameters":[{
				"name":"MIDIfilePath",
				"type":"",
				"refparam":"false",
				"description":"the file path to a MIDI file"
			},{
				"name":"SoundFontPath",
				"type":"",
				"refparam":"false",
				"description":"the file path to a SoundBank SF2 or DLS file"
			}],
			"examples":[{
				"script":"AVMIDIPlayerLoad \"/Users/Me/MIDIMusic.mid\",\"/System/Library/Components/CoreAudio.component/Contents/Resources/gs_instruments.dls\""
			}],
			"description":"Loads a MIDI file from and a Soundbank file in either SoundFont2 or\nDownloadable Sound DLS format from absolute file paths passed in and\n\"prerolls\" the data, preparing it for playback."
		},{
			"id":"org.openxtalk.avmidiplay.paulmcclernan-6",
			"name":"avmidiplayerisplaying",
			"display name":"AVMIDIPlayerIsPlaying",
			"library":"org.openxtalk.avmidiplay.paulmcclernan",
			"type":"handler",
			"syntax":[
				"AVMIDIPlayerIsPlaying()"
			],
			"display syntax":[
				"AVMIDIPlayerIsPlaying()"
			],
			"associations":["org.openxtalk.avmidiplay.paulmcclernan"],
			"summary":"Checks to see if MIDI Data is currently being played back",
			"examples":[{
				"script":"if AVMIDIPlayerIsPlaying() then AVMIDIPlayerStop"
			}],
			"description":"A boolean that indicates if MIDI Data is currently being played back."
		},{
			"id":"org.openxtalk.avmidiplay.paulmcclernan-7",
			"name":"avmidiplayerstop",
			"display name":"AVMIDIPlayerStop",
			"library":"org.openxtalk.avmidiplay.paulmcclernan",
			"type":"handler",
			"syntax":[
				"AVMIDIPlayerStop()"
			],
			"display syntax":[
				"AVMIDIPlayerStop()"
			],
			"associations":["org.openxtalk.avmidiplay.paulmcclernan"],
			"summary":"Stops playback",
			"examples":[{
				"script":"AVMIDIPlayerStop"
			}],
			"description":"Stops playback of data playback stated with AVMIDIPlayerPlay."
		},{
			"id":"org.openxtalk.avmidiplay.paulmcclernan-8",
			"name":"avmidiplayerduration",
			"display name":"AVMIDIPlayerDuration",
			"library":"org.openxtalk.avmidiplay.paulmcclernan",
			"type":"handler",
			"syntax":[
				"AVMIDIPlayerDuration()"
			],
			"display syntax":[
				"AVMIDIPlayerDuration()"
			],
			"associations":["org.openxtalk.avmidiplay.paulmcclernan"],
			"summary":"Returns the length of a loaded sequence in seconds and microseconds.",
			"examples":[{
				"script":"function SecsToHrsMinSecs pSecs -- in seconds.millisecs\n   lock screen\n   split pSecs by \".\"\n   put trunc(pSecs[1]) into deltaTime\n   put trunc(deltaTime div 3600) into h -- hours\n   put trunc((deltaTime - (h * 3600)) / 60) into m -- minutes\n   put deltaTime - (h * 3600) - (m * 60) into s -- seconds\n   put format( \"%01i:%02i:%02i\", h, m, s ) &\":\"& pSecs[2] into displayTime\n   return displayTime\nend SecsToHrsMinSecs\nput \"The MIDI Sequence is \" & SecsToHrsMinSecs(AVMIDIPlayerDuration()) & \" long\""
			},{
				"script":"set the endValue of scrollbar \"PlayBackProgress\" to AVMIDIPlayerDuration()"
			}],
			"description":"Returns the length of a sequence in seconds and microseconds. A sequence\nmust first be loaded into memory using AVMIDIPlayerLoad or AVMIDIPlayetLoadURLs."
		},{
			"id":"org.openxtalk.avmidiplay.paulmcclernan-9",
			"name":"avmidiplayersetcurrentposition",
			"display name":"AVMIDIPlayerSetCurrentPosition",
			"library":"org.openxtalk.avmidiplay.paulmcclernan",
			"type":"handler",
			"syntax":[
				"AVMIDIPlayerSetCurrentPosition(<pNewPosition>)"
			],
			"display syntax":[
				"AVMIDIPlayerSetCurrentPosition(<i>pNewPosition</i>)"
			],
			"associations":["org.openxtalk.avmidiplay.paulmcclernan"],
			"summary":"Sets the current position in seconds.microseconds for a sequence to play from.",
			"examples":[{
				"script":"AVMIDIPlayerSetCurrentPosition(the thumbPosition of scrollBar \"PlayBackProgress\")"
			},{
				"script":"AVMIDIPlayerSetCurrentPosition 10.1 -- sets the position to 10 and 1/10th of a second."
			}],
			"description":"Sets the current position in seconds.microseconds for a sequence to play from.\nA sequence must first be loaded into memory using AVMIDIPlayerLoad or AVMIDIPlayetLoadURLs\nbefore the current position can be set.\nUse for \"scrubbing\" to different points within a sequence or for pause-resume functionality."
		},{
			"id":"org.openxtalk.avmidiplay.paulmcclernan-10",
			"name":"avmidiplayersetrate",
			"display name":"AVMIDIPlayerSetRate",
			"library":"org.openxtalk.avmidiplay.paulmcclernan",
			"type":"handler",
			"syntax":[
				"AVMIDIPlayerSetRate(<playbackRate>)"
			],
			"display syntax":[
				"AVMIDIPlayerSetRate(<i>playbackRate</i>)"
			],
			"associations":["org.openxtalk.avmidiplay.paulmcclernan"],
			"summary":"Sets the decimal rate of playback; 1.0 being original, 0.5 half, and 2.0 double speed.",
			"parameters":[{
				"name":"playbackRate",
				"type":"",
				"refparam":"false",
				"description":"a decimal number to set the playback rate to."
			}],
			"examples":[{
				"script":"AVMIDIPlayerSetRate 0.75 -- 3/4 the speed of original MIDI file tempo."
			}],
			"description":"Sets the decimal rate of playback; 1.0 being the original tempo of the MIDI File.\nSet playbackRate to 0.5 for half the speed or the original tempo or 2.0 to double the speed.\n"
		}