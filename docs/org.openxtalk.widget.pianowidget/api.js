{
			"id":"org.openxtalk.widget.pianowidget-1",
			"name":"org.openxtalk.widget.pianowidget",
			"display name":"Piano Widget",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"widget",
			"display syntax":[
				"Piano Widget"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"Widget is a virtual mouse piano",
			"description":"This widget allows for creation of scalable piano controls.\nNote that this is a purely graphical control that produces no\nsound on it's own. It is meant to be attached to a musical engine\nsuch as a MIDI playback library.\n\n------------------------------------------------------------------------------------------------------------------------------------"
		},{
			"id":"org.openxtalk.widget.pianowidget-2",
			"name":"noteon",
			"display name":"noteOn",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"message",
			"syntax":[
				"noteOn <pNoteNum>, <pNoteName>"
			],
			"display syntax":[
				"noteOn <i>pNoteNum</i>, <i>pNoteName</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"Sent when a key on the piano set to it's 'on' state.",
			"OS":["mac","ios","android","win"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pNoteNum",
				"type":"",
				"refparam":"false",
				"description":"The MIDI note number(s) of the note key (exp. 63), this can be an item delimited list of multiple key numbers (chords)"
			},{
				"name":"pNoteName",
				"type":"",
				"refparam":"false",
				"description":"The Name of the note key (exp. D#Eb), this can be an item delimited list of multiple key numbers (chords)"
			}],
			"examples":[{
				"script":"on noteOn pNoteNum,pNoteName\n\tput \"noteOn \" & pNoteNum && pNoteName\nend noteOn"
			}],
			"description":"Handle the <noteOn> message in the widget's object script to respond to\n'note down' clicks on the piano's individual note keys."
		},{
			"id":"org.openxtalk.widget.pianowidget-3",
			"name":"noteoff",
			"display name":"noteOff",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"message",
			"syntax":[
				"noteOff <pNoteNum>, <pNoteName>"
			],
			"display syntax":[
				"noteOff <i>pNoteNum</i>, <i>pNoteName</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"Sent when a key on the piano released from it's 'on' state.",
			"OS":["mac","ios","android","win"],
			"platforms":["desktop","mobile"],
			"parameters":[{
				"name":"pNoteNum",
				"type":"",
				"refparam":"false",
				"description":"The MIDI note number(s) of the note key (exp. 63), this can be an item delimited list of multiple key numbers (chords)"
			},{
				"name":"pNoteName",
				"type":"",
				"refparam":"false",
				"description":"The Name of the note key (exp. D#Eb), this can be an item delimited list of multiple key names (chords)"
			}],
			"examples":[{
				"script":"on noteOff pNoteNum,pNoteName\n\tput \"noteOff \" & pNoteNum && pNoteName\nend noteOff"
			}],
			"description":"Handle the <noteOff> message in the widget's object script to respond to\n'note release' messages from the piano's individual note keys.\n\n------------------------------------------------------------------------------------------------------------------------------------"
		},{
			"id":"org.openxtalk.widget.pianowidget-4",
			"name":"borderwidth",
			"display name":"borderWidth",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the borderWidth of <widget>",
				"set the borderWidth of <widget> to <number>"
			],
			"display syntax":[
				"get the borderWidth of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The stroke width for piano keys outlines",
			"description":"The <borderWidth> property controls thickness of lines used to draw the\nwidget's piano keys outlines."
		},{
			"id":"org.openxtalk.widget.pianowidget-5",
			"name":"bordercolor",
			"display name":"borderColor",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"set the borderColor of widget to <color>",
				"get the borderColor of widget"
			],
			"display syntax":[
				"set the borderColor of widget to <i>color</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The color used to draw the outlinnes of the piano keys",
			"description":"The <borderColor> property controls the color used to draw the outlinnes of the piano keys.\n\n------------------------------------------------------------------------------------------------------------------------------------"
		},{
			"id":"org.openxtalk.widget.pianowidget-6",
			"name":"accidentalscolor",
			"display name":"accidentalsColor",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the accidentalsColor of <widget>",
				"set the accidentalsColor of <widget> to <color>"
			],
			"display syntax":[
				"get the accidentalsColor of <i>widget</i>"
			],
			"synonyms":["blackkeyscolors"],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The fill color for accidentals (black) keys",
			"description":"The <accidentalsColor> property controls the default color used to fill\nthe piano's accidentals (black) keys. This property is the same as <blackKeysColors>"
		},{
			"id":"org.openxtalk.widget.pianowidget-7",
			"name":"blackkeyscolor",
			"display name":"blackKeysColor",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the blackKeysColor of <widget>",
				"set the blackKeysColor of <widget> to <color>"
			],
			"display syntax":[
				"get the blackKeysColor of <i>widget</i>"
			],
			"synonyms":["accidentalscolor"],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The fill color for accidentals (black) keys",
			"description":"The <blackKeysColor> property controls the default color used to fill\nthe piano's accidentals (black) keys. This property is the same as <accidentalsColor>"
		},{
			"id":"org.openxtalk.widget.pianowidget-8",
			"name":"whitekeyscolor",
			"display name":"whiteKeysColor",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the whiteKeysColor of <widget>",
				"set the whiteKeysColor of <widget> to <color>"
			],
			"display syntax":[
				"get the whiteKeysColor of <i>widget</i>"
			],
			"synonyms":["naturalscolor"],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The fill color for naturals (white) keys",
			"description":"The <whiteKeysColor> property controls the default color used to fill\nthe piano's naturals (white) keys. This property is the same as <naturalsColor>"
		},{
			"id":"org.openxtalk.widget.pianowidget-9",
			"name":"naturalscolor",
			"display name":"naturalsColor",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the naturalsColor of <widget>",
				"set the naturalsColor of <widget> to <color>"
			],
			"display syntax":[
				"get the naturalsColor of <i>widget</i>"
			],
			"synonyms":["whitekeyscolors"],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The fill color for naturals (white) keys",
			"description":"The <naturalsColor> property controls the default color used to fill\nthe piano's naturals (white) keys. This property is the same as <whiteKeysColors>\n\n------------------------------------------------------------------------------------------------------------------------------------"
		},{
			"id":"org.openxtalk.widget.pianowidget-10",
			"name":"hilitecolor",
			"display name":"hiliteColor",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the hiliteColor of <widget>",
				"set the hiliteColor of <widget> to <color>"
			],
			"display syntax":[
				"get the hiliteColor of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The fill color when piano keys are hilited",
			"description":"The <hiliteColor> property controls the color used to draw the\nwidget's piano key fill color while hilighted."
		},{
			"id":"org.openxtalk.widget.pianowidget-11",
			"name":"colornotes",
			"display name":"colorNotes",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the colorNotes of <widget>",
				"set the colorNotes of <widget> to <pColorsSpaceNotesPairedLineList>"
			],
			"display syntax":[
				"get the colorNotes of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The colorNotes piano keys as line list or colors and note pairs",
			"examples":[{
				"script":"on mouseUp\n  -- clear all keys individual color settings:\n  set the colorNotes of widget \"Piano Widget\" to reset\n  -- set color white and 50% transparency for ALL C# keys, MIDI note 60, D#4 (same as Eb4), Gb 5th octave\n  -- and then also set color to 50% grey, no transparency, for all Ab/G# keys:\n  set the colorNotes of widget \"Piano Widget\" to \"255,255,255,127 C#,60,D#4,F#Gb5\" & \\\n   cr & \"127,127,127,255 G#\"\n  put the colorNotes of widget \"Piano Widget\"\nend mouseUp"
			}],
			"description":"The <colorNotes> property can be used to set colors for individual\npiano keys using the format R,G,B,A followed by a comma delimited list\nof keys, by MIDI note numbers or note names, seperated by a single space.\nIf a note name is used without an octave number then that note is colorized\non all 10.5 octaves. Set the <colorNotes> to empty, reset or pass an empty\nstring to clear all key colorization, reverting key colors to those\nspecified by the <accidentalsColor>/<blackKeysColor> and\n<naturalsColor>/<whiteKeysColor> properties.\nMultiple lines of color and note-lists can be set, any duplicates\nwill ovewrite previously set colorKeys.\nThe property returns a line delimited list of RGBA, blank space, with\na note number-list, followed by a space, and then the same note list\nas note-names, for any keys that have been colorized."
		},{
			"id":"org.openxtalk.widget.pianowidget-12",
			"name":"hilitednotes",
			"display name":"hilitedNotes",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the hilitedNotes of <widget>",
				"set the hilitedNotes of <widget> to <pHilightNotes>"
			],
			"display syntax":[
				"get the hilitedNotes of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The hilighted piano keys as list of notes",
			"examples":[{
				"script":"on mouseUp\n  -- clear all\n  set the hilitedNotes of widget \"Piano Widget\" to empty\n  -- hilte ALL C# keys, MIDI note 60, D#4 (same as Eb4), Gb 5th octave:\n  set the hilitedNotes of widget \"Piano Widget\" to \"C#,60,D#4,F#Gb5\"\n  put the hilitedNotes of widget \"Piano Widget\"\nend mouseUp"
			}],
			"description":"The <hilitedNotes> property can be used to set the piano keys\nto hilite using a comma seperated list of keys, by MIDI note number or note name.\nIf a note name is used without an octave number then that note is\nhilited on all 10.5 octaves.\nSet to empty or pass an empty string to clear all key hilites.\nThe property returns the list as two lines,\nLine one lists MIDI note numbers and the second line list same keys as note names.\n\nlockToTonicWithScale"
		},{
			"id":"org.openxtalk.widget.pianowidget-13",
			"name":"locktotonicwithscale",
			"display name":"lockToTonicWithScale",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the lockToTonicWithScale of <widget>",
				"set the lockToTonicWithScale of <widget> to <pRootAndScaleFormula>"
			],
			"display syntax":[
				"get the lockToTonicWithScale of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"lockToTonicWithScale are the  piano keys that are enabled or empty if no scale",
			"examples":[{
				"script":"on mouseUp\n  -- clear any previously set scale:\n  set the lockToTonicWithScale of widget \"Piano Widget\" to empty\n  -- the following form locks to a scale of the C,C#,D#,E keys enabled:\n  set the lockToTonicWithScale of widget \"Piano Widget\" to \"C 1,3,4\"\n\n  -- the following form sets to a same scale of the C,C#,D#,E keys enabled:\n  set the lockToTonicWithScale of widget \"Piano Widget\" to \"C H,W,h\"\n\n  get the lockToTonicWithScale of widget \"Piano Widget\"\n  -- 'it' now contains \"C,C#,D#,E\"\nend mouseUp"
			}],
			"description":"The <lockToTonicWithScale> property can be set to Root Note as a NoteName followed\nby a space and then by a comma delimited list of either numeric offsets,\nbetween 1 and 11 that represent half-steps from the root note, or using the\nstyle H,W,WH (case insenstive) often used to describe musical scales or modes.\nH meaning Halfstep, W for Wholestep, and combining H and W for Halfstep+Wholestep.\nPiano keys that will be enabled are then determine from this root + formula pair\nand any keys that are not in the resulting note-name list will be locked.\nSet <lockToTonicWithScale> to empty to clear the scale and unlock all piano keys.\nGetting the <lockToTonicWithScale> returns a comma delimited list of notes in the\nscale, rather than the formula used, or empty. This returned list can then be\nused with the <lockToScale> property."
		},{
			"id":"org.openxtalk.widget.pianowidget-14",
			"name":"locktoscale",
			"display name":"lockToScale",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the lockToScale of <widget>",
				"set the lockToScale of <widget> to <pNoteNamesList>"
			],
			"display syntax":[
				"get the lockToScale of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"lockToScale are the  piano keys that are enabled or empty if no scale",
			"examples":[{
				"script":"on mouseUp\n  -- clear any previously set scale:\n  set the lockToScale of widget \"Piano Widget\" to empty\n  --  and then lock all piano keys that are NOT in the list of Note Names,\n  -- any octave number on the end of NoteNames will be ignored, and the full\n  -- Sharp AND Flat NoteName will appear in the returned list\n  set the lockToScale of widget \"Piano Widget\" to \"C#,D#4,F#Gb,G#\"\n  get the lockToScale of widget \"Piano Widget\"\n  -- 'it' now contains \"C#Db,D#Eb,F#Gb,G#Ab\"\nend mouseUp"
			}],
			"description":"The <lockToScale> property can be set to a comma delimited list of Note Names\n(ie C#,D,Eb,A#Bb,etc.) any piano keys with note names that are NOT in the list\nwill be disabled. Use this property to lock the Piano to a musical scale.\nGet the lockToScale property to see a list of notes that are currently enabled.\nIf no scale has been applied then the property will contain empty."
		},{
			"id":"org.openxtalk.widget.pianowidget-15",
			"name":"chordformula",
			"display name":"chordFormula",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the chordFormula of <widget>",
				"set the chordFormula of <widget> to <pChordFormula>"
			],
			"display syntax":[
				"get the chordFormula of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"Specifies additional keys that each key should trigger",
			"examples":[{
				"script":"on mouseUp\n   -- keys will trigger a 1st-Inversion Major Triad Chord:\n  set the chordFormula of widget \"Piano Widget\" -5,-8\nend mouseUp"
			}],
			"description":"The <chordFormula> property if optionally specified, can be set to a list\nof integers to indicate which additional piano key(s) should be triggered\nbased on the half-step distance from the origin root key. For example,\nto trigger the same note name as the root key but 1 octave lower set\nthis property to -12, for one octave lower and one octave higher set\nthis property to -12,12. To clear the current <chordFormula> set it to empty."
		},{
			"id":"org.openxtalk.widget.pianowidget-16",
			"name":"chordpreset",
			"display name":"chordPreset",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"set the chordPreset of <widget> to <pChordPresetName>"
			],
			"display syntax":[
				"set the chordPreset of <i>widget</i> to <i>pChordPresetName</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"A name from a list of names of premade <chordFormula>",
			"examples":[{
				"script":"on mouseUp\n   -- the chordFormula will be set to \"3,7\":\n  set the chordPreset of widget \"Piano Widget\" to \"Minor Triad\"\nend mouseUp"
			}],
			"description":"The <chordPreset> is a convience property that can be set to a chord\nname from a list of premade named <chordFormula>. Use the <chordPresets>\nproperty to retreive a line delimited list of valid chord names.\n<chordPreset> is a \"write-only\" property, after a <chordPreset> name is passed\nand the <chordFormula> is updated, this property is reset and returns \"...\"."
		},{
			"id":"org.openxtalk.widget.pianowidget-17",
			"name":"chordpresets",
			"display name":"chordPresets",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the chordPresets of <widget>"
			],
			"display syntax":[
				"get the chordPresets of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"Line delimited list of preset names of premade <chordFormula>",
			"examples":[{
				"script":"on mouseUp\n  put the chordPresets of widget \"Piano Widget\"\nend mouseUp"
			}],
			"description":"Use the <chordPresets> property to retreive a line delimited list of\nvalid names to use in conjunction with the <chordPreset> property.\n\n------------------------------------------------------------------------------------------------------------------------------------"
		},{
			"id":"org.openxtalk.widget.pianowidget-18",
			"name":"lowoctave",
			"display name":"lowOctave",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the lowOctave of <widget>",
				"set the lowOctave of <widget> to <number>"
			],
			"display syntax":[
				"get the lowOctave of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The starting, left most octave for the piano's visible note range",
			"examples":[{
				"script":"on mouseUp\n  -- set the left most octave to start at MIDI Note Number 0 (C-1)\n  set the lowOctave of widget \"Piano Widget\" to -1\n  -- set the right most octave to start at MIDI Note Number 36 (C2)\n  set the highOctave of widget \"Piano Widget\" to 2\n  get the octaveCount of of widget \"Piano Widget\" -- octaveCount containss 4\nend mouseUp"
			}],
			"description":"The <lowOctave> property is used in conjunction with <highOctave> to\nspecify the visible note range of the piano's keyboard by specifying the\nstarting octave and ending octave between -1 (which starts at MIDI note 0 C)\nto 9 (Which starts at MIDI number 120 C and is actually 7/12th of an octave\nending at the MIDI Note 127 G). If lowOctave is greater than highOctave or\nhighOctave is less than lowOctave then the opposite property will\nautomatically be ajusted to match, resulting in a single octave range."
		},{
			"id":"org.openxtalk.widget.pianowidget-19",
			"name":"highoctave",
			"display name":"highOctave",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the highOctave of <widget>",
				"set the highOctave of <widget> to <number>"
			],
			"display syntax":[
				"get the highOctave of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The ending, right most octave for the piano's visible note range",
			"examples":[{
				"script":"on mouseUp\n  -- set the left most octave to start at MIDI Note Number 0 (C-1)\n  set the lowOctave of widget \"Piano Widget\" to -1\n  -- set the right most octave to start at MIDI Note Number 36 (C2)\n  set the highOctave of widget \"Piano Widget\" to 2\n  get the octaveCount of of widget \"Piano Widget\" -- octaveCount containss 4\nend mouseUp"
			}],
			"description":"The <highOctave> property is used in conjunction with <lowOctave> to\nspecify the visible note range of the piano's keyboard by specifying the\nstarting octave and ending octave between -1 (which starts at MIDI note 0 C)\nto 9 (Which starts at MIDI number 120 C and is actually 7/12th of an octave\nending at the MIDI Note 127 G). If lowOctave is greater than highOctave or\nhighOctave is less than lowOctave then the opposite property will\nautomatically be ajusted to match, resulting in a single octave range."
		},{
			"id":"org.openxtalk.widget.pianowidget-20",
			"name":"octavecount",
			"display name":"octaveCount",
			"library":"org.openxtalk.widget.pianowidget",
			"type":"property",
			"syntax":[
				"get the octaveCount of <widget>"
			],
			"display syntax":[
				"get the octaveCount of <i>widget</i>"
			],
			"associations":["org.openxtalk.widget.pianowidget"],
			"summary":"The amount of octaves in the piano's current visible note range.",
			"examples":[{
				"script":"on mouseUp\n  -- set the left most octave to start at MIDI Note Number 0 (C-1)\n  set the lowOctave of widget \"Piano Widget\" to -1\n  -- set the right most octave to start at MIDI Note Number 36 (C2)\n  set the highOctave of widget \"Piano Widget\" to 2\n  get the octaveCount of of widget \"Piano Widget\" -- octaveCount containss 4\nend mouseUp"
			}],
			"description":"The <octaveCount> is a read-only property that returns the amount of\noctaves  that are currently visible on the Piano's keyboard. It is the\nsame as the count from <lowOctave> to <highOctave>.\n"
		}