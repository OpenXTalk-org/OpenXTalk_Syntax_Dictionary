{
			"id":"org.openxtalk.library.generalmusic-1",
			"name":"org.openxtalk.library.generalmusic",
			"display name":"OpenXTalk.org General Music Library",
			"library":"org.openxtalk.library.generalmusic",
			"type":"library",
			"display syntax":[
				"OpenXTalk.org General Music Library"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"description":"The General Music script library contains handlers for various musicality\nrelated tasks. Currently this incorporates a slightly modified version of UDI's\nmakeSMF library for creating MIDI data from xTalk 'ABC' style text music notation,\nhandlers for reading patch information from SoundFont2 and Douwnloadable Sounds\nfiles (.sf2 / .dls), handlers for coverting MIDI numeric values to and from\nhuman readable names (for example a MIDI note number to/from an\nactual note name/octave), functions for reading and  writing MIDI files to and from\nhuman readable timestampled event lists, handlers for converting time measurements\n(such as Beats Per Minute to Milliseconds), and more!\n\nThe plan is to add a few more soon as well, such as incorporate music related\nSVG-Icon family which would include icons such as note-duration symbols\nfor use in creating GUIs for musical stacks.\nThe intention is that this library will grow to include many\nmore useful music and sound composition related scripts."
		},{
			"id":"org.openxtalk.library.generalmusic-2",
			"name":"gsinstrumentnames",
			"display name":"gsInstrumentNames",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"gsInstrumentNames()"
			],
			"display syntax":[
				"gsInstrumentNames()"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"get a list of names of the GeneralMIDI standard instrument names, suitable for\nassigning to the text of a menu-button",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android","html5"],
			"platforms":["desktop","mobile"],
			"examples":[{
				"script":"put gsInstrumentNames()"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"a line delimited list of GeneralMIDI standard instrument names"
			}],
			"description":"Use gsInstrumentNames to get a 127 line-delimited list of the human readable\nnames for the GeneralMIDI standard instrument names. This list is in GeneralMIDI\norder (starting with Accoustic Piano, ending with Gunshot FX) and is suitable\nfor assigning to the text of a menu-button.",
			"tags":["music","midi"]
		},{
			"id":"org.openxtalk.library.generalmusic-3",
			"name":"getsf2instruments",
			"display name":"getSF2Instruments",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"getSF2Instruments( pSF2FilePath )"
			],
			"display syntax":[
				"getSF2Instruments( pSF2FilePath )"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"getSF2Instruments returns a line delimited list of sound patches from a SoundFont(.sf2) file.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pSF2FilePath",
				"type":"",
				"refparam":"false",
				"description":"A file path that points to a SoundFont2 (.SF2) file"
			}],
			"examples":[{
				"script":"put getSF2Instruments(\"/Path/To/ASoundFont.sf2\") into btn \"Select Sound Patch >\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list of Sound Patches that are in the SoundFont file."
			}],
			"description":"getSF2Instruments returns a line delimited list of sound patches from a SoundFont(.sf2) file.\nThe each list line is in the format: banknumber-patchnumber patchname,\nso for a general midi soundbank the first line would be \"0-1 Piano 1\"",
			"tags":["music","midi","soundfont","soundbank"]
		},{
			"id":"org.openxtalk.library.generalmusic-4",
			"name":"playpmd_avmidiplayer",
			"display name":"playPMD_AVMIDIPlayer",
			"library":"org.openxtalk.library.generalmusic",
			"type":"command",
			"syntax":[
				"playPMD_AVMIDIPlayer pPlaySentenceMusicalData, pTempoBPM,[pProgramNumber,[<pSoundBankFile>]"
			],
			"display syntax":[
				"playPMD_AVMIDIPlayer pPlaySentenceMusicalData, pTempoBPM,[pProgramNumber,[<i>pSoundBankFile</i>]"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"plays the Playsentence Musical Data (PMD) starting at the specified beats per minute,\nwith the given sound patch number using Apple's AVMIDIPlayer API.",
			"introduced":"1.0",
			"OS":["mac","ios"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pPlaySentenceMusicalData",
				"type":"",
				"refparam":"false",
				"description":"string containing extended-HyperTalk / xTalk 'ABC' textual music notation."
			},{
				"name":"pTempoBPM",
				"type":"",
				"refparam":"false",
				"description":"Intitial playback tenmpo in Beats Per Minute, this may be overridden"
			},{
				"name":"pProgramNumber",
				"type":"",
				"refparam":"false",
				"description":"number in range 0-127 is the sound patch to use as the initial\nor default instrument sound. This nay be overridden by patchchange messages within\nthe playSentence string."
			},{
				"name":"pSoundBankFile",
				"type":"",
				"refparam":"false",
				"description":"An optional filePath to a soundBank (.sf2 or .dls) file to use for playback."
			}],
			"examples":[{
				"script":"playPMD_AVMIDIPlayer (\"C4q Ee. Gs..\",120,1)"
			}],
			"description":"Attempts to play the Playsentence Music Data (PMD), optionally starting at the specified tempo\nin beats per minute, optionally with a given MIDI patch number (need to add 'bank-patch' suport),\nwith the optionally provided Soubdbank (.sf2 or .dls) file. The default values are 120(BPM)\nand sound patch 1 (GM \"Piano 1\"),loading the first SoundBankFile found in default locations.\nOn macOS this should load the default Roland GS Soundbank, a small Soundbank\nfrom the 1990s that came with QuickTime v2.5+, on iOS no default soundbank is provided\nby the OS and so one must be provided.\nPLEASE NOTE that this command will do nothing (fail silently) if the AVMIDIPLayer\nbuilder extension is not loaded therefore scripts should check for the presence of\nthe AVMIDIPLayer libray before calling this command directly, or use the platform aware\nversion, PlayPMD which should try to use the best musical playback engine currenlty availble.",
			"tags":["music","midi","audioclip"]
		},{
			"id":"org.openxtalk.library.generalmusic-5",
			"name":"playpmd_mcisendstring",
			"display name":"playPMD_MCISendString",
			"library":"org.openxtalk.library.generalmusic",
			"type":"command",
			"syntax":[
				"playPMD_MCISendString pPlaySentenceMusicalData, pTempoBPM,[pProgramNumber,[<pSoundBankFile>]"
			],
			"display syntax":[
				"playPMD_MCISendString pPlaySentenceMusicalData, pTempoBPM,[pProgramNumber,[<i>pSoundBankFile</i>]"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"plays the Playsentence Musical Data (PMD) starting at the specified beats per minute,\nwith the given sound patch number using MCISendString to playback on Windows default MIDI Player.",
			"introduced":"1.0",
			"OS":["windows"],
			"platforms":["desktop"],
			"parameters":[{
				"name":"pPlaySentenceMusicalData",
				"type":"",
				"refparam":"false",
				"description":"string containing extended-HyperTalk / xTalk 'ABC' textual music notation."
			},{
				"name":"pTempoBPM",
				"type":"",
				"refparam":"false",
				"description":"Intitial playback tenmpo in Beats Per Minute, this may be overridden"
			},{
				"name":"pProgramNumber",
				"type":"",
				"refparam":"false",
				"description":"number in range 0-127 is the sound patch to use as the initial\nor default instrument sound. This nay be overridden by patchchange messages within\nthe playSentence string."
			}],
			"examples":[{
				"script":"playPMD_MCISendString (\"C4q Ee. Gs..\",120,1)"
			}],
			"description":"Attempts to play the Playsentence Music Data (PMD), optionally starting at the specified tempo\nin beats per minute, optionally with a given MIDI patch number (need to add 'bank-patch' suport).\nThe default values are 120(BPM) and sound patch 1 (GM \"Piano 1\"), using MCISendString to\nplayback on Windows default MIDI Player",
			"tags":["music","midi","audioclip"]
		},{
			"id":"org.openxtalk.library.generalmusic-6",
			"name":"getsf2info",
			"display name":"getSF2Info",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"getSF2Info( pSF2FilePath )"
			],
			"display syntax":[
				"getSF2Info( pSF2FilePath )"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"getSF2Info extracts and returns various metadata information for a given\nSoundFont(.sf2) file.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pSF2FilePath",
				"type":"",
				"refparam":"false",
				"description":"A file path that points to SoundFont2 (.sf2) file"
			}],
			"examples":[{
				"script":"put getSF2Info(\"/Path/To/My/SoundBank.sf2\") into tSoundbankInfo"
			}],
			"description":"getSF2Info extracts and returns various metadata information for a given\nSoundFont(.sf2) file, or empty if no metadata is found."
		},{
			"id":"org.openxtalk.library.generalmusic-7",
			"name":"getdlscopyrightinfo",
			"display name":"getDLSCopyRightInfo",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"getDLSCopyRightInfo( pDLSFilePath )"
			],
			"display syntax":[
				"getDLSCopyRightInfo( pDLSFilePath )"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"getDLSCopyRightInfo returns the copyright information for a DownLoadable\nSoundbank(.dls) file, if the property is set.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pDLSFilePath",
				"type":"",
				"refparam":"false",
				"description":"A file path that points to DownLoadable Soundbank(.dls) file"
			}],
			"examples":[{
				"script":"put getDLSCopyRightInfo(\"/Path/To/ASoundBank.dls\") into tCopyRight"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"copyright information or empty if the property is not found in the target file."
			}],
			"description":"getDLSCopyRightInfo returns the copyright information for a DownLoadable\nSoundbank(.dls) file, or returns empty if the property is not found in the target file.",
			"tags":["music","midi","soundfont","soundbank"]
		},{
			"id":"org.openxtalk.library.generalmusic-8",
			"name":"playpmd",
			"display name":"playPMD",
			"library":"org.openxtalk.library.generalmusic",
			"type":"command",
			"syntax":[
				"playPMD [<pInstrumentName>],pPlaySentenceMusicalData,[<pTempoBPM>],[<pProgramNumber>],[<pShellpAppPath>]"
			],
			"display syntax":[
				"playPMD [<i>pInstrumentName</i>],pPlaySentenceMusicalData,[<i>pTempoBPM</i>],[<i>pProgramNumber</i>],[<i>pShellpAppPath</i>]"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"plays the Playsentence Musical Data (PMD) starting at the specified tempo\nin beats per minute, with the given sound patch number, using the current best\nplayback available on the current platform.",
			"introduced":"1.0",
			"OS":["mac","ios","android","linux","windows"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pPlaySentenceMusicalData",
				"type":"",
				"refparam":"false",
				"description":"string containing extended-HyperTalk / xTalk 'ABC' textual music notation."
			},{
				"name":"pTempoBPM",
				"type":"",
				"refparam":"false",
				"description":"Intitial playback tenmpo in Beats Per Minute, this may be overridden"
			},{
				"name":"pProgramNumber",
				"type":"",
				"refparam":"false",
				"description":"number in range 0-127 is the sound patch to use as the initial\nor default instrument sound. This nay be overridden by patchchange messages within\nthe playSentence string."
			}],
			"examples":[{
				"script":"playPMD \"C4q Ee. Gs..\",120,1"
			}],
			"description":"plays the Playsentence Musical Data (PMD) starting at the specified tempo\nin beats per minute, with the given sound patch number, using the current best\nplayback available on the current platform.",
			"tags":["music","midi","audioclip"]
		},{
			"id":"org.openxtalk.library.generalmusic-9",
			"name":"playpmd_shell",
			"display name":"playPMD_Shell",
			"library":"org.openxtalk.library.generalmusic",
			"type":"command",
			"syntax":[
				"playPMD_Shell pPlaySentenceMusicalData,[<pTempoBPM>],[<pProgramNumber>],[<pShellpAppPath>]"
			],
			"display syntax":[
				"playPMD_Shell pPlaySentenceMusicalData,[<i>pTempoBPM</i>],[<i>pProgramNumber</i>],[<i>pShellpAppPath</i>]"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Plays the Playsentence Musical Data (PMD) starting at the specified tempo\nin beats per minute, with the given sound initial patch number, using the shell app at a provided path.",
			"introduced":"1.0",
			"OS":["mac","ios","android","linux","windows"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pPlaySentenceMusicalData",
				"type":"",
				"refparam":"false",
				"description":"string containing extended-HyperTalk / xTalk 'ABC' textual music notation."
			},{
				"name":"pTempoBPM",
				"type":"",
				"refparam":"false",
				"description":"Intitial playback tenmpo in Beats Per Minute, this may be overridden"
			},{
				"name":"pProgramNumber",
				"type":"",
				"refparam":"false",
				"description":"number in range 0-127 is the sound patch to use as the initial\nor default instrument sound. This nay be overridden by patchchange messages within\nthe playSentence string."
			},{
				"name":"pShellpAppPath",
				"type":"",
				"refparam":"false",
				"description":"the path to a player shell app to pass a generated MIDI file to for playback."
			}],
			"examples":[{
				"script":"playPMD_Shell \"C4q Ee. Gs..\",120,1,\"/Path/To/WildMIDI\""
			}],
			"description":"Plays the Playsentence Musical Data (PMD) starting at the specified tempo\nin beats per minute, with the given sound initial patch number, using the shell app at a provided path.",
			"tags":["music","midi","audioclip"]
		},{
			"id":"org.openxtalk.library.generalmusic-10",
			"name":"playsentencetomididata",
			"display name":"playSentenceToMIDIData",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"playSentenceToMIDIData <playSentence>,[<playTempo>],[<soundPatchNum>]"
			],
			"display syntax":[
				"playSentenceToMIDIData <i>playSentence</i>,[<i>playTempo</i>],[<i>soundPatchNum</i>]"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"playSentenceToMIDIData retruns Standard MIDI File Binary Data,\nconverted from the given PlaySentenceMusicData,\nstarting at the specified beats per minute, with the given patch number,",
			"parameters":[{
				"name":"playSentence",
				"type":"",
				"refparam":"false",
				"description":"string containing extended-HyperTalk / xTalk 'ABC' textual music notation.\nplayTempo; Intitial playback tenmpo in Beats Per Minute, this may be overridden\nby tempo messages within the playSentence string."
			},{
				"name":"soundPatchNum",
				"type":"",
				"refparam":"false",
				"description":"a number in range 0-127 is the sound patch to use as the initial\nor default instrument sound. This nay be overridden by patchchange messages within\nthe playSentence string."
			}],
			"examples":[{
				"script":"put playSentenceToMIDIData(\"C4q Ee. Gs..\",120,0) -- get MIDI data at 120BPM plays on \"Piano 1\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"MIDI formated binary data suitable for playback or writing to a standard midi file."
			}],
			"description":"Converts PlaySentence Musical Data (PMD) starting at the specified tempo,\nwith the given sound patch number. The binary data returned may be written directly to a standard MIDI file or\npassed along to some MIDI playback handler."
		},{
			"id":"org.openxtalk.library.generalmusic-11",
			"name":"getdlsinfo",
			"display name":"getDLSInfo",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"getDLSInfo( pDLSFilePath )"
			],
			"display syntax":[
				"getDLSInfo( pDLSFilePath )"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"getDLSInfo returns the copyright information and the sound engineers info\nfor a given DownLoadable Soundbank(.dls) file, if the property is set.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pDLSFilePath",
				"type":"",
				"refparam":"false",
				"description":"A file path that points to DownLoadable Soundbank(.dls) file"
			}],
			"examples":[{
				"script":"put getDLSInfo(\"/Path/To/My/SoundBank.dls\")"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"information about a DLS file or empty if no metadata is found in the target file."
			}],
			"description":"getDLSInfo returns the copyright information and the sound engineers info\nfor a given DownLoadable Soundbank(.dls) file, if the property is set, or empty."
		},{
			"id":"org.openxtalk.library.generalmusic-12",
			"name":"midinotenametonum",
			"display name":"midiNoteNameToNum",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"midiNoteNameToNum(<pNoteNumber>)"
			],
			"display syntax":[
				"midiNoteNameToNum(<i>pNoteNumber</i>)"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Get the pitch number corrisponding to the given MIDI note name.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pNoteName",
				"type":"",
				"refparam":"false",
				"description":"The MIDI note name to get the pitch number of."
			}],
			"examples":[{
				"script":"put midiNoteNameToNum(\"C4\") -- returns \"60\", aka middle C"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A number (0-127) containing a pitch number corresponding to the name parameter."
			}],
			"description":"use midiNoteNameToNum to translate a Note Name from a human readable name into a MIDI pitch number.\nFor eaxmples \"C4\" would return 60, \"C#4\" would return 61, and so on.\nGeneral MIDI Drum kit drum names such as \"Bass Drum 1\" (36) are also acceptable.",
			"tags":["music","midi","sound","playpmd","playsentence"]
		},{
			"id":"org.openxtalk.library.generalmusic-13",
			"name":"midinotenumtoname",
			"display name":"midiNoteNumToName",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"midiNoteNumToName(<pNoteNumber>)"
			],
			"display syntax":[
				"midiNoteNumToName(<i>pNoteNumber</i>)"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Get the pitch name corrisponding to the given MIDI note number.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pNoteNumber",
				"type":"",
				"refparam":"false",
				"description":"The MIDI note number to get the pitchname of."
			}],
			"examples":[{
				"script":"put midiNoteNumToName(60) -- returns \"C4\", aka middle C"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"String containing a pitchname such as \"C#4\",\"Db5\" or \"Bass Drum 1\""
			}],
			"description":"use midiNoteNumToName to translate MIDI Note Numbers to a more humaan readable format.\nFor eaxmples \"C#5\" is easier to recognize as C sharp on octave 5 than the '61' is, and\n\"Bass Drum 1\" is more recognizable than it's general MIDI number '36' is.",
			"tags":["music","midi","sound","playpmd","playsentence"]
		},{
			"id":"org.openxtalk.library.generalmusic-14",
			"name":"bpmppbdurationtomillisecs",
			"display name":"BPMppbDurationToMillisecs",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"BPMppbDurationToMillisecs( pBPM, pPulsesPerBeat, [pDur])"
			],
			"display syntax":[
				"BPMppbDurationToMillisecs( pBPM, pPulsesPerBeat, [pDur])"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Given Beats-Per-Minute and Pulses Per Beat values returns a time-length in milleseconds",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pBPM",
				"type":"",
				"refparam":"false",
				"description":"Beats-Per-Minute, 120 BPM is default"
			},{
				"name":"pPulsesPerBeat",
				"type":"",
				"refparam":"false",
				"description":"defines is the resolution of MIDI timing information, 96 pulses per beat is the default"
			},{
				"name":"pDur",
				"type":"",
				"refparam":"false",
				"description":"an xTalk playSentence duration such as \"w\" for whole note, down to \"x\" for 128th notes"
			}],
			"examples":[{
				"script":"put BPMppbDurationToMillisecs(120,48,\"s\") into tDurationInMilliseconds -- milliseconds length of sixteenth note at 120bpm"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Time-length in milleseconds"
			}],
			"description":"Given Beats-Per-Minute and Pulses Per-Beat-values returns time-lengths in milleseconds.\nUse this to convert xTalk note durations into milliseconds.\nDotted-length duration modifiers are allowed (\"s.\" is dotted-sixtenth note, \"q3\" is a quarter-note-triplet).\nIf the duration parameter is empty the returned data will be a line delimited\nlist of all playSentence valid note lengths in milliseconds.",
			"tags":["music","midi"]
		},{
			"id":"org.openxtalk.library.generalmusic-15",
			"name":"getmidiheader",
			"display name":"getMIDIHeader",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"getMIDIHeader(<theMIDIFile>)"
			],
			"display syntax":[
				"getMIDIHeader(<i>theMIDIFile</i>)"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Use getMIDIHeader to validate MIDI file formatted data and parse\nits header information into a human readable format",
			"examples":[{
				"script":"put getMIDIHeader(\"/path/to/MIDIFile.mid\") into fld \"MIDI File Info\""
			}],
			"description":"Use getMIDIHeader to validate MIDI file formatted data and parse\nits header for information about the file, intial timing info, channels used,\natc., into a human readable format"
		},{
			"id":"org.openxtalk.library.generalmusic-16",
			"name":"playpmd_videoclip",
			"display name":"playPMD_videoClip",
			"library":"org.openxtalk.library.generalmusic",
			"type":"command",
			"syntax":[
				"playPMD_videoClip pPlaySentenceMusicalData,[<pTempoBPM>],[<pProgramNumber>]"
			],
			"display syntax":[
				"playPMD_videoClip pPlaySentenceMusicalData,[<i>pTempoBPM</i>],[<i>pProgramNumber</i>]"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"plays the Playsentence Musical Data (PMD) starting at the specified tempo\nin beats per minute, with the given sound patch number, using the current operating\nsystem's media play APIs, which must support MIDI in order for playback to be heard.",
			"introduced":"1.0",
			"OS":["android","linux","windows"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pPlaySentenceMusicalData",
				"type":"",
				"refparam":"false",
				"description":"string containing extended-HyperTalk / xTalk 'ABC' textual music notation."
			},{
				"name":"pTempoBPM",
				"type":"",
				"refparam":"false",
				"description":"Intitial playback tenmpo in Beats Per Minute, this may be overridden"
			},{
				"name":"pProgramNumber",
				"type":"",
				"refparam":"false",
				"description":"number in range 0-127 is the sound patch to use as the initial\nor default instrument sound. This nay be overridden by patchchange messages within\nthe playSentence string."
			}],
			"examples":[{
				"script":"playPMD_videoClip (\"C4q Ee. Gs..\",120,1)"
			}],
			"description":"plays the Playsentence Musical Data (PMD) starting at the specified tempo\nin beats per minute, with the given sound patch number, using the current operating\nsystem's media play APIs, which must support MIDI in order for playback to be heard.",
			"tags":["music","midi","audioclip"]
		},{
			"id":"org.openxtalk.library.generalmusic-17",
			"name":"getdlsinstruments",
			"display name":"getDLSInstruments",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"getDLSInstruments( pDLSFilePath )"
			],
			"display syntax":[
				"getDLSInstruments( pDLSFilePath )"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Get a line delimited list of sound patches from a DownLoadableSoundbank(.dls) file.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pDLSFilePath",
				"type":"",
				"refparam":"false",
				"description":"A file path that points to a DownLoadableSoundbank(.dls) file"
			}],
			"examples":[{
				"script":"put getDLSInstruments(\"/System/Library/Components/CoreAudio.component/Contents/Resources/gs_instruments.dls\") into btn \"Select Sound Patch >\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list of Sound Patches that are in the SoundFont file."
			}],
			"description":"getDLSInstruments returns a line delimited list of sound patches from a\nDownLoadableSoundbank(.dls) file. Each list line is in the format:\nbanknumber-patchnumber patchname, and so for a general midi soundbank\nthe first line would be \"0-1 Piano 1\"",
			"tags":["music","midi","soundfont","soundbank"]
		},{
			"id":"org.openxtalk.library.generalmusic-18",
			"name":"getdlsengineersinfo",
			"display name":"getDLSEngineersInfo",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"getDLSEngineersInfo( pDLSFilePath )"
			],
			"display syntax":[
				"getDLSEngineersInfo( pDLSFilePath )"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"getDLSEngineersInfo returns the names of the Sound Engineers\nresponsible for creating the DownLoadable Soundbank(.dls) file.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pSF2FilePath",
				"type":"",
				"refparam":"false",
				"description":"A file path that points to DownLoadable Soundbank(.dls) file"
			}],
			"examples":[{
				"script":"put getDLSEngineersInfo(\"/Path/To/ASoundBank.dls\") into tSoundEngineering"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A list of Sound Engineers responsible for creating the Soundbank file"
			}],
			"description":"getDLSEngineersInfo returns the names of the Sound Engineers\nresponsible for creating a SoundFont (sf2) or DownLoadable Soundbank(.dls) file,\nor returns empty property is not set for the target file.",
			"tags":["music","midi","soundfont","soundbank"]
		},{
			"id":"org.openxtalk.library.generalmusic-19",
			"name":"controllernumtoname",
			"display name":"controllerNumToName",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"controllerNumToName(pMIDICCNumber)"
			],
			"display syntax":[
				"controllerNumToName(pMIDICCNumber)"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Retrieve the path to the HyperSounds font included with General Music Library resources.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pMIDICCNumber",
				"type":"",
				"refparam":"false",
				"description":"The MIDI Continuous Controller number, 0-127, to get the huamn readable name of."
			}],
			"examples":[{
				"script":"put controllerNumToName(7) into tContinuousControllerName -- string:\"Volume (coarse)\"\""
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Returns the human readale name of a MIDI Continuous Controller (CC) corrisponding to a number parameter"
			}],
			"description":"Returns the human readale name of a MIDI Continuous Controller (CC) corrisponding\nto a number parameter.",
			"tags":["music","midi"]
		},{
			"id":"org.openxtalk.library.generalmusic-20",
			"name":"generalmusiclibversion",
			"display name":"generalMusicLibVersion",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"generalMusicLibVersion()"
			],
			"display syntax":[
				"generalMusicLibVersion()"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Get the General Music Library version number.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"examples":[{
				"script":"put \"Version:\" && generalMusicLibVersion()"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"The version number of the General Music Library."
			}],
			"description":"Use the <generalMusicLibVersion> function get the version number of the library.",
			"tags":["music","midi","audioclip"]
		},{
			"id":"org.openxtalk.library.generalmusic-21",
			"name":"issf2ordls",
			"display name":"isSF2orDLS",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"isSF2orDLS(<pFile>)"
			],
			"display syntax":[
				"isSF2orDLS(<i>pFile</i>)"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Use isSF2orDLS to ensure that the given file contains a RIFF\nheader and has a type signature for either an SF2 or DLS Soundbank.",
			"description":"Use isSF2orDLS to ensure that the given file contains a RIFF\nheader and has a type signature for either an SF2 or DLS Soundbank."
		},{
			"id":"org.openxtalk.library.generalmusic-22",
			"name":"sf2ordlsmagicnumcheck",
			"display name":"SF2orDLSmagicNumCheck",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"isSF2orDLS(<pFile>)"
			],
			"display syntax":[
				"isSF2orDLS(<i>pFile</i>)"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"examples":[{
				"script":"if SF2orDLSmagicNumCheck(\"~/Path/To/ASoundbank.exs\") is false then exit to top"
			}],
			"description":"SF2orDLSmagicNumCheck returns true if the given file contains a RIFF\nheader and also conatains a type signature for either an SF2 or DLS Soundbank."
		},{
			"id":"org.openxtalk.library.generalmusic-23",
			"name":"makesmf",
			"display name":"makeSMF",
			"library":"org.openxtalk.library.generalmusic",
			"type":"command",
			"syntax":[
				"makeSMF <notes>,<playTempo>,<defInst>,<savePath>"
			],
			"display syntax":[
				"makeSMF <i>notes</i>,<i>playTempo</i>,<i>defInst</i>,<i>savePath</i>"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"creates a Standard MIDI File from the given PlaySentenceMusicData,\nstarting at the specified beats per minute, with the given patch number,\nwriting it to the provided file path.",
			"parameters":[{
				"name":"notes",
				"type":"",
				"refparam":"false",
				"description":"A string of xTalk playSentence data"
			},{
				"name":"playTempo",
				"type":"",
				"refparam":"false",
				"description":"The intial tempo to set in the output MIDI"
			},{
				"name":"defInst",
				"type":"",
				"refparam":"false",
				"description":"The intial sound patch to set in the output MIDI"
			},{
				"name":"savePath",
				"type":"",
				"refparam":"false",
				"description":"a file path to save the MIDI file to"
			}],
			"examples":[{
				"script":"makeSMF (\"C4q Ee. Gs..\",120,1,\"~/testSMF.mid\")"
			}],
			"description":"makeSMF creates a Standard MIDI Fike (SMF) from the given PlaySentenceMusicData (PMD)\nstarting at the specified beats per minute, with the given patch number, to the provided file path."
		},{
			"id":"org.openxtalk.library.generalmusic-24",
			"name":"midicontrollernames",
			"display name":"midiControllerNames",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"midiControllerNames()"
			],
			"display syntax":[
				"midiControllerNames()"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Get a line-delimited list of the human readable names for the\nGeneralMIDI standard Continuous Controller (CC) names.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"examples":[{
				"script":"put midiControllerNames()"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"a line delimited list of GeneralMIDI standard controller names"
			}],
			"description":"Returns 127 line-delimited list of the human readable names for the GeneralMIDI\nstandard MIDI Continuous Controller (CC) names. The list is suitable for assigning\nto the text of a menu-button.",
			"tags":["music","midi"]
		},{
			"id":"org.openxtalk.library.generalmusic-25",
			"name":"playpmd_fluidsynth",
			"display name":"playPMD_FluidSynth",
			"library":"org.openxtalk.library.generalmusic",
			"type":"command",
			"syntax":[
				"playPMD_FluidSynth pPlaySentenceMusicalData,[<pTempoBPM>],[<pProgramNumber>],[<pSoundBankFile>]"
			],
			"display syntax":[
				"playPMD_FluidSynth pPlaySentenceMusicalData,[<i>pTempoBPM</i>],[<i>pProgramNumber</i>],[<i>pSoundBankFile</i>]"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"plays the Playsentence Musical Data (PMD) starting at the specified beats per minute,\n   with the given sound patch number using the FluidSynth engine.",
			"introduced":"OXT 1.963.1",
			"OS":["mac","ios","win","linux"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pPlaySentenceMusicalData",
				"type":"",
				"refparam":"false",
				"description":"string containing extended-HyperTalk / xTalk 'ABC' textual music notation."
			},{
				"name":"pTempoBPM",
				"type":"",
				"refparam":"false",
				"description":"Intitial playback tenmpo in Beats Per Minute, this may be overridden"
			},{
				"name":"pProgramNumber",
				"type":"",
				"refparam":"false",
				"description":"number in range 0-127 is the sound patch to use as the initial\n   or default instrument sound. This nay be overridden by patchchange messages within\n   the playSentence string."
			},{
				"name":"pSoundBankFile",
				"type":"",
				"refparam":"false",
				"description":"An optional filePath to a soundBank (.sf2 or .dls) file to use for playback."
			}],
			"examples":[{
				"script":"playPMD_FluidSynth (\"C4q Ee. Gs..\",120,1)"
			}],
			"description":"Attempts to play the Playsentence Music Data (PMD), optionally starting at the specified tempo\nin beats per minute, optionally with a given MIDI patch number (need to add 'bank-patch' suport),\nwith the optionally provided Soubdbank (.sf2 or .dls) file. The default values are 120(BPM)\nand sound patch 1 (GM \"Piano 1\"), loading the first SoundBankFile found in the default\nlocations for the current OS. If no soundBank file is available then the fallback\nFreeFont.sf2 soundbank, included with the OXT FuildSynth library, will be used.\n\nPLEASE NOTE that this command will do nothing (fail silently) if the AVMIDIPLayer\nbuilder extension is not loaded therefore scripts should check for the presence of\nthe AVMIDIPLayer libray before calling this command directly, or use the platform aware\nversion, PlayPMD which should try to use the best musical playback engine currenlty availble. \\Tags: Music, MIDI, audioClip"
		},{
			"id":"org.openxtalk.library.generalmusic-26",
			"name":"scanstdsoundbankdirectories",
			"display name":"scanStdSoundBankDirectories",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"scanStdSoundBankDirectories()"
			],
			"display syntax":[
				"scanStdSoundBankDirectories()"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Use scanStdSoundBankDirectories to scan filesysten directories where\nsoundbank files are normally found. On macOS and Windows this should return the\npath to the standard Roland GS Soundbank.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"examples":[{
				"script":"put scanStdSoundBankDirectories()"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A line-deimited list of any SoundBank files found"
			}],
			"description":"Use scanStdSoundBankDirectories to scan filesysten directories where\nsoundbank files are normally found. On macOS and Windows this should return\nthe path to the standard Roland GS Soundbank.",
			"tags":["music","midi","soundbank"]
		},{
			"id":"org.openxtalk.library.generalmusic-27",
			"name":"gethypersoundsfont",
			"display name":"GetHyperSoundsFont",
			"library":"org.openxtalk.library.generalmusic",
			"type":"function",
			"syntax":[
				"GetHyperSoundsFont()"
			],
			"display syntax":[
				"GetHyperSoundsFont()"
			],
			"associations":["org.openxtalk.library.generalmusic"],
			"summary":"Retrieve the path to the HyperSounds font included with General Music Library resources.",
			"introduced":"1.0",
			"OS":["mac","win","linux","ios","android"],
			"platforms":["desktop","mobile"],
			"examples":[{
				"script":"put GetHyperSoundsFont() into tSoundFontPath"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"path to the HyperSounds soundfont included with General Music.\nThis is a tiny sound bank consisting of only 3 patches"
			}],
			"description":"Retrieve the path to the HyperSounds soundfont included with General Music.\nHyperSounds is a tiny soundbank consisting of only the three sound patches based on the\nthree sounds included with the original xTalk IDE, HyperCard.\nThe sounds are 1) Harpsichord or HypsiChord, 2) Flute or HyperFlute, and 3) Boing\nor HyperBoing. You can select these sounds by name when using the PlayPMD command.",
			"tags":["music","midi","audioclip","hypercard"]
		}