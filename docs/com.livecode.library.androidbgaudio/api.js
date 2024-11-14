{
			"id":"com.livecode.library.androidbgaudio-1",
			"name":"com.livecode.library.androidbgaudio",
			"display name":"Android Background Audio",
			"library":"com.livecode.library.androidbgaudio",
			"type":"library",
			"display syntax":[
				"Android Background Audio"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"This library provides an API for playing background audio on Android",
			"OS":["android"],
			"description":"Use this library to start and control a background audio service that\nwill continue playing when the current application is suspended."
		},{
			"id":"com.livecode.library.androidbgaudio-2",
			"name":"androidresumeaudioplayinginbackground",
			"display name":"androidResumeAudioPlayingInBackground",
			"library":"com.livecode.library.androidbgaudio",
			"type":"handler",
			"syntax":[
				"androidResumeAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidResumeAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Resume the currently paused background audio",
			"OS":["android"],
			"description":"Use the <androidResumeAudioPlayingInBackground> handler to resume the\naudio playback in the background paused by the last call to \n<androidPauseAudioPlayingInBackground>.",
			"references":{
				"handler":["androidPauseAudioPlayingInBackground"]
			}
		},{
			"id":"com.livecode.library.androidbgaudio-3",
			"name":"androidisaudioplayinginbackground",
			"display name":"androidIsAudioPlayingInBackground",
			"library":"com.livecode.library.androidbgaudio",
			"type":"handler",
			"syntax":[
				"androidIsAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidIsAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Whether there is currently any audio playing in the background",
			"OS":["android"],
			"examples":[{
				"script":"    if androidIsAudioPlayingInBackground() then\n       androidPauseAudioPlayingInBackground\n    end if"
			}],
			"description":"Use the <androidIsAudioPlayingInBackground> to find out if there is any\naudio playback currently occurring in the background."
		},{
			"id":"com.livecode.library.androidbgaudio-4",
			"name":"androidstopaudioplayinginbackground",
			"display name":"androidStopAudioPlayingInBackground",
			"library":"com.livecode.library.androidbgaudio",
			"type":"handler",
			"syntax":[
				"androidStopAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidStopAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Stop playing audio in the background.",
			"OS":["android"],
			"description":"Use the <androidStopAudioPlayingInBackground> handler to stop playing\nthe audio playback in the background started by the last call to \n<androidStartAudioPlayingInBackground>.",
			"references":{
				"handler":["androidStartAudioPlayingInBackground"]
			}
		},{
			"id":"com.livecode.library.androidbgaudio-5",
			"name":"androidstartaudioplayinginbackground",
			"display name":"androidStartAudioPlayingInBackground",
			"library":"com.livecode.library.androidbgaudio",
			"type":"handler",
			"syntax":[
				"androidStartAudioPlayingInBackground(<pAudio>)"
			],
			"display syntax":[
				"androidStartAudioPlayingInBackground(<i>pAudio</i>)"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Start playing audio in the background.",
			"OS":["android"],
			"parameters":[{
				"name":"pAudio",
				"type":"",
				"refparam":"false",
				"description":"The full path to the audio file to start playing"
			}],
			"description":"Use the <androidStartAudioPlayingInBackground> handler to start playing\nthe audio contained in the file <pAudio> in the background. The audio\ncontinues playing until it finishes while the app is suspended, or until\nit is paused or stopped using the <androidStopAudioPlayingInBackground> \nor <androidPauseAudioPlayingInBackground> handlers are used.",
			"references":{
				"handler":["androidStopAudioPlayingInBackground","androidPauseAudioPlayingInBackground"]
			}
		},{
			"id":"com.livecode.library.androidbgaudio-6",
			"name":"androidpauseaudioplayinginbackground",
			"display name":"androidPauseAudioPlayingInBackground",
			"library":"com.livecode.library.androidbgaudio",
			"type":"handler",
			"syntax":[
				"androidPauseAudioPlayingInBackground()"
			],
			"display syntax":[
				"androidPauseAudioPlayingInBackground()"
			],
			"associations":["com.livecode.library.androidbgaudio"],
			"summary":"Pause the currently playing background audio",
			"OS":["android"],
			"description":"Use the <androidPauseAudioPlayingInBackground> handler to pause the\naudio playback in the background started by the last call to \n<androidStartAudioPlayingInBackground>. It can be resumed by calling\n<androidResumeAudioPlayingInBackground>.",
			"references":{
				"handler":["androidStartAudioPlayingInBackground","androidResumeAudioPlayingInBackground"]
			}
		}