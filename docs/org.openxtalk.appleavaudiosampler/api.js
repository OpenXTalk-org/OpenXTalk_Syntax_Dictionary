{
			"id":"org.openxtalk.appleavaudiosampler-1",
			"name":"org.openxtalk.appleavaudiosampler",
			"display name":"Apple AVAudioSampler library",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"library",
			"display syntax":[
				"Apple AVAudioSampler library"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"This library contains bindings for Apple's AVAudio Sampler Instrument AudioUnit, useful for creating musical audio output using Sounds (aif, wav, mp3) or Soundbank files (SF2, DLS, and some EXS format).",
			"edition":"Community",
			"OS":["mac","ios (untested)"],
			"description":"This library is a wrapper for Apple's AVAudio Sampler Instrument AudioUnit.\n\n>*Note:* This library is GPL3 licensed.\n> Please share and share a like."
		},{
			"id":"org.openxtalk.appleavaudiosampler-2",
			"name":"avaudiosamplerloadsoundfiles",
			"display name":"AVAudioSamplerLoadSoundFiles",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerLoadSoundFiles pSoundFilesPathsListStr"
			],
			"display syntax":[
				"AVAudioSamplerLoadSoundFiles pSoundFilesPathsListStr"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Attempts one or more individual sound files into the AVAudioSampler.",
			"OS":["mac","ios (untested)"],
			"parameters":[{
				"name":"pSoundFilesPathsListStr",
				"type":"",
				"refparam":"false",
				"description":"The file or paths (line delimited) to one or more sound files."
			}],
			"examples":[{
				"script":"put \"/System/Library/Sounds/Sosumi.aiff\" into pSoundFilesPathsListStr\nAVAudioSamplerLoadSoundFiles pSoundFilesPathsListStr"
			}],
			"description":"Attempts one or more individual sound files from given line delimited list of file paths into the AVAudioSampler.\nThe sounds maybe in any of a number of natively supported formats such as (.caf, .mp3, .aif)."
		},{
			"id":"org.openxtalk.appleavaudiosampler-3",
			"name":"avaudiosamplerpitchbend",
			"display name":"AVAudioSamplerPitchbend",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerPitchbend <pPitchBendCoarseNFine>,<pMIDIChanNum>"
			],
			"display syntax":[
				"AVAudioSamplerPitchbend <i>pPitchBendCoarseNFine</i>,<i>pMIDIChanNum</i>"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"The send pitchbend with fine range from 0 to 16384, 8192 is centered (no bend)",
			"OS":["mac","ios (untested)"],
			"parameters":[{
				"name":"pPitchBendCoarseNFine",
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
				"script":"AVAudioSamplerPitchbend 0,1 -- Pitchbend Maximum Down, channel 1\nAVAudioSamplerPitchbend 16384,1 -- Pitchbend Maximum Up, channel 1\nAVAudioSamplerPitchbend 8192,1 -- Centered / No Bend, channel 1"
			}],
			"description":"The send pitchbend with fine range from 0 to 16384, 8192 is centered (no bend)"
		},{
			"id":"org.openxtalk.appleavaudiosampler-4",
			"name":"avaudiosamplergetmastergain",
			"display name":"AVAudioSamplerGetMasterGain",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"function",
			"syntax":[
				"AVAudioSamplerGetMasterGain()"
			],
			"display syntax":[
				"AVAudioSamplerGetMasterGain()"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Gets the value of the current gain amount (dB) that the AVAudioSampler sound output is set for.",
			"OS":["mac","ios (untested)"],
			"examples":[{
				"script":"AVAudioSamplerGetMasterGain()"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"number in the range of -90.0 to 12.0, the amount of gain (dB) that sound output is currently set for."
			}],
			"description":"Gets the value of the current gain amount (dB) that the AVAudioSampler sound output is set for."
		},{
			"id":"org.openxtalk.appleavaudiosampler-5",
			"name":"avaudiosamplernoteoff",
			"display name":"AVAudioSamplerNoteOff",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerNoteOff <MIDINoteNumber>,<MIDIChannelNumber>"
			],
			"display syntax":[
				"AVAudioSamplerNoteOff <i>MIDINoteNumber</i>,<i>MIDIChannelNumber</i>"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Immediately sends a MIDI Note Off message with the given pitch and velocity on the given channel.",
			"OS":["mac","ios (untested)"],
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
				"script":"AVAudioSamplerNoteOff 60,1 -- Turns off Middle C on MIDI channel 1"
			}],
			"description":"Immediately sends a MIDI Note Off message with the given pitch on the given channel."
		},{
			"id":"org.openxtalk.appleavaudiosampler-6",
			"name":"avaudiosamplercontroller",
			"display name":"AVAudioSamplerController",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerController <pController>, <pControllerVal>, <pMIDIChanNum>"
			],
			"display syntax":[
				"AVAudioSamplerController <i>pController</i>, <i>pControllerVal</i>, <i>pMIDIChanNum</i>"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"The send a controller with a single data byte value to on a given channel",
			"OS":["mac","ios (untested)"],
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
				"script":"AVAudioSamplerController 7,127,1 -- 7 = Volume Controller, Data Byte 1, channel 1"
			}],
			"description":"The send a controller with a single data byte value to on a given channel"
		},{
			"id":"org.openxtalk.appleavaudiosampler-7",
			"name":"avaudiosamplerenginestop",
			"display name":"AVAudioSamplerEngineStop",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerEngineStop()"
			],
			"display syntax":[
				"AVAudioSamplerEngineStop()"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Stops the AVAudioSampler Engine running.",
			"OS":["mac","ios (untested)"],
			"examples":[{
				"script":"AVAudioSamplerEngineStop"
			}],
			"description":"Stops the running AVAudioSampler Engine. The Engine should be stopped or paused when not in use to avoid device CPU and battery useage."
		},{
			"id":"org.openxtalk.appleavaudiosampler-8",
			"name":"avaudiosamplersetmastergain",
			"display name":"AVAudioSamplerSetMasterGain",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerSetMasterGain <pGain>"
			],
			"display syntax":[
				"AVAudioSamplerSetMasterGain <i>pGain</i>"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Sets the master gain value for the AVAudioSampler in the dB range of -90.0 to 12.0",
			"OS":["mac","ios (untested)"],
			"parameters":[{
				"name":"pGain",
				"type":"",
				"refparam":"false",
				"description":"The amount of gain on sound output in the dB range of -90.0 to 12.0"
			}],
			"examples":[{
				"script":"AVAudioSamplerSetMasterGain 12.0 -- Amplified!\nAVAudioSamplerSetMasterGain 0 -- Normal Gain\nAVAudioSamplerSetMasterGain -90.0 -- Can't even hear this!"
			}],
			"description":"Sets the master gain value for the AVAudioSampler sound output in the dB range of -90.0 (silent) to 12.0 (amplified)"
		},{
			"id":"org.openxtalk.appleavaudiosampler-9",
			"name":"avaudiosamplerloadexspresetorsound",
			"display name":"AVAudioSamplerLoadEXSPresetOrSound",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerLoadEXSPresetOrSound pEXSPresetOrSoundPath"
			],
			"display syntax":[
				"AVAudioSamplerLoadEXSPresetOrSound pEXSPresetOrSoundPath"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Attempts to Load an EXS or AUPreset file into the AVAudioSampler.",
			"OS":["mac","ios (untested)"],
			"parameters":[{
				"name":"pEXSPresetOrSoundPath",
				"type":"",
				"refparam":"false",
				"description":"The file path to a EXS or AUPreset file"
			}],
			"examples":[{
				"script":"put \"/Library/Application Support/GarageBand/Instrument Library/Sampler/Sampler Instruments/iOS Instruments/Flute iOS KB.exs\" into pEXSPresetOrSoundPath\nAVAudioSamplerLoadEXSPresetOrSound pEXSPresetOrSoundPath"
			}],
			"description":"Attempts to Load an EXS Patch (Logic or GarageBand Instrument) or an AUPreset file into the AVAudioSampler."
		},{
			"id":"org.openxtalk.appleavaudiosampler-10",
			"name":"avaudiosamplernoteon",
			"display name":"AVAudioSamplerNoteOn",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerNoteOn <MIDINoteNumber>,pMIDIVelocityNumber,<pMIDIChannelNumber>"
			],
			"display syntax":[
				"AVAudioSamplerNoteOn <i>MIDINoteNumber</i>,pMIDIVelocityNumber,<i>pMIDIChannelNumber</i>"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Immediately sends a MIDI Note On message with the given pitch and velocity on the given channel.",
			"OS":["mac","ios (untested)"],
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
				"script":"AVAudioSamplerNoteOn 60,127,1 -- 60=Middle C, 127=Full velocity, 1=MIDI channel 1"
			}],
			"description":"Immediately sends a MIDI Note On message with the given pitch and velocity on the given channel."
		},{
			"id":"org.openxtalk.appleavaudiosampler-11",
			"name":"avaudiosamplersetglobaltuning",
			"display name":"AVAudioSamplerSetGlobalTuning",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerSetGlobalTuning <pCents>"
			],
			"display syntax":[
				"AVAudioSamplerSetGlobalTuning <i>pCents</i>"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Sets the global tuning value for the AVAudioSampler in cents (-2400 to 2400)",
			"OS":["mac","ios (untested)"],
			"parameters":[{
				"name":"pCents",
				"type":"",
				"refparam":"false",
				"description":"The amount in cents to shift all pitches"
			}],
			"examples":[{
				"script":"AVAudioSamplerSetGlobalTuning 2400 -- shifts all pitches up 2400 cents (two octaves)"
			}],
			"description":"Sets the global tuning value for the AVAudioSampler, shifting all pitches down or up in the range of -2400 to 2400"
		},{
			"id":"org.openxtalk.appleavaudiosampler-12",
			"name":"avaudiosamplerenginerestart",
			"display name":"AVAudioSamplerEngineRestart",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerEngineRestart()"
			],
			"display syntax":[
				"AVAudioSamplerEngineRestart()"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Restarts the AVAudioSampler Engine.",
			"OS":["mac","ios (untested)"],
			"examples":[{
				"script":"AVAudioSamplerEngineRestart"
			}],
			"description":"Restarts the AVAudioSampler Engine after it has been stopped or paused."
		},{
			"id":"org.openxtalk.appleavaudiosampler-13",
			"name":"avaudiosamplerinfo",
			"display name":"AVAudioSamplerInfo",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"function",
			"syntax":[
				"AVAudioSamplerInfo()"
			],
			"display syntax":[
				"AVAudioSamplerInfo()"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Gets info About the running AVAudioSampler.",
			"OS":["mac","ios (untested)"],
			"examples":[{
				"script":"get AVAudioSamplerInfo()"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"Comma seperated string of items. Name, Manufacturer, Version, Number of Inputs, Number of Outputs, AudioComponentDescription"
			}],
			"description":"Gets info About the running AVAudioSampler, mostly here for developement usage for now."
		},{
			"id":"org.openxtalk.appleavaudiosampler-14",
			"name":"avaudiosamplerenginepause",
			"display name":"AVAudioSamplerEnginePause",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerEnginePause()"
			],
			"display syntax":[
				"AVAudioSamplerEnginePause()"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Temporarily pauses the running AVAudioSampler Engine.",
			"OS":["mac","ios (untested)"],
			"examples":[{
				"script":"AVAudioSamplerEnginePause"
			}],
			"description":"Temporarily pauses the running AVAudioSampler Engine. The Engine should be stopped or paused when not in use to avoid device CPU and battery useage."
		},{
			"id":"org.openxtalk.appleavaudiosampler-15",
			"name":"avaudiosamplerinit",
			"display name":"AVAudioSamplerInit",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"function",
			"syntax":[
				"AVAudioSamplerInit()"
			],
			"display syntax":[
				"AVAudioSamplerInit()"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Setup Audio Engine with attached Sampler AudioUnit.",
			"OS":["mac","ios (untested)"],
			"examples":[{
				"script":"AVAudioEngineSamplerInit()"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True on success, False or error string on failure, or the string \"AVAudioSampler is already running.\""
			}],
			"description":"Attempts to initializes instances of Audio Engine, Output Mixer, and Sampler AudioUnit and attach them together."
		},{
			"id":"org.openxtalk.appleavaudiosampler-16",
			"name":"avaudiosamplersetstereopan",
			"display name":"AVAudioSamplerSetStereoPan",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerSetStereoPan <pBalance>"
			],
			"display syntax":[
				"AVAudioSamplerSetStereoPan <i>pBalance</i>"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Sets the Stereo pan values in the range of -1.0 (left) to 1.0 (right)",
			"OS":["mac","ios (untested)"],
			"parameters":[{
				"name":"pBalance",
				"type":"",
				"refparam":"false",
				"description":"The amount to shift sound output to the left or the right"
			}],
			"examples":[{
				"script":"AVAudioSamplerSetStereoPan -1.0 -- all sounds output in left speaker\nAVAudioSamplerSetStereoPan 0 -- all sounds centered\nAVAudioSamplerSetStereoPan 1.0 -- all sounds output in right speaker"
			}],
			"description":"Sets the amount to shift sound output to the left or right in the range of -1.0 (left) to 1.0 (right)"
		},{
			"id":"org.openxtalk.appleavaudiosampler-17",
			"name":"avaudiosamplerloadsf2dls",
			"display name":"AVAudioSamplerLoadSF2DLS",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerLoadSF2DLS pSoundBankPath, pProgramNum, pBankMSB, pBankLSB"
			],
			"display syntax":[
				"AVAudioSamplerLoadSF2DLS pSoundBankPath, pProgramNum, pBankMSB, pBankLSB"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Loads a soundbank file or type SF2 or DLS into AVAudioSampler and optional sets it to a given program or patch and bank.",
			"OS":["mac","ios (untested)"],
			"parameters":[{
				"name":"pSoundFontPath",
				"type":"",
				"refparam":"false",
				"description":"The path to a Soundbank file"
			},{
				"name":"pProgramNum",
				"type":"",
				"refparam":"false",
				"description":"A Program number to set 0 to 127"
			},{
				"name":"pBankMSB",
				"type":"",
				"refparam":"false",
				"description":"Bank number Most Significant Byte"
			},{
				"name":"pBankLSB",
				"type":"",
				"refparam":"false",
				"description":"Bank number Least Significant Byte"
			}],
			"examples":[{
				"script":"put \"/System/Library/Components/CoreAudio.component/Contents/Resources/gs_instruments.dls\" into pSoundFontPath -- Apple's default instrument sounds\nAVAudioSamplerLoadSF2DLS pSoundFontPath,19,,  -- General MIDI Rock Organ"
			}],
			"description":"Loads a soundbank file or type SF2 or DLS into AVAudioSampler and optional sets it to a given program or patch and bank."
		},{
			"id":"org.openxtalk.appleavaudiosampler-18",
			"name":"avaudiosamplerenginereset",
			"display name":"AVAudioSamplerEngineReset",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"command",
			"syntax":[
				"AVAudioSamplerEngineReset()"
			],
			"display syntax":[
				"AVAudioSamplerEngineReset()"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Resets the AVAudioSampler Engine to default state.",
			"OS":["mac","ios (untested)"],
			"examples":[{
				"script":"AVAudioSamplerEngineReset"
			}],
			"description":"This resets AVAudioSampler Engine to it's default state. Use it, for example, to silence effects such as delay echoes."
		},{
			"id":"org.openxtalk.appleavaudiosampler-19",
			"name":"avaudiosamplerengineisrunning",
			"display name":"AVAudioSamplerEngineIsRunning",
			"library":"org.openxtalk.appleavaudiosampler",
			"type":"function",
			"syntax":[
				"AVAudioSamplerEngineIsRunning()"
			],
			"display syntax":[
				"AVAudioSamplerEngineIsRunning()"
			],
			"associations":["org.openxtalk.appleavaudiosampler"],
			"summary":"Check if AVAudioSampler's AudioEngine is already running.",
			"OS":["mac","ios (untested)"],
			"examples":[{
				"script":"AVAudioSamplerEngineIsRunning()"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the AVAudioSampler's AudioEngine is already running, false if it is not."
			}],
			"description":"Check if AVAudioSampler's AudioEngine instance is already running.\n"
		}