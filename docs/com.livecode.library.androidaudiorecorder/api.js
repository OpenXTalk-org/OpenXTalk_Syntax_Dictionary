{
			"id":"com.livecode.library.androidaudiorecorder-1",
			"name":"com.livecode.library.androidaudiorecorder",
			"display name":"Android Audio Recorder",
			"library":"com.livecode.library.androidaudiorecorder",
			"type":"library",
			"display syntax":[
				"Android Audio Recorder"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"This library provides Android audio recording functionality, via the \nandroid.media.MediaRecorder class.",
			"OS":["android"],
			"description":"Use this library to record audio on Android. \n\n>*Note:* This library requires RECORD_AUDIO, WRITE_EXTERNAL_STORAGE and\n> CAPTURE_AUDIO_OUTPUT permissions. These will be automatically added to \n> the application manifest when an application including this library is \n> built."
		},{
			"id":"com.livecode.library.androidaudiorecorder-2",
			"name":"androidrecorderstartrecording",
			"display name":"androidRecorderStartRecording",
			"library":"com.livecode.library.androidaudiorecorder",
			"type":"handler",
			"syntax":[
				"androidRecorderStartRecording(<pFileName>)"
			],
			"display syntax":[
				"androidRecorderStartRecording(<i>pFileName</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Start recording an audio file, using the given filename",
			"OS":["android"],
			"parameters":[{
				"name":"pFileName",
				"type":"",
				"refparam":"false",
				"description":"The absolute filename of the output file"
			}],
			"examples":[{
				"script":"   local tFilePath\n   put specialFolderPath(\"external documents\") & slash & \"recording.mp4\" \\\n      into tFilePath   \n   androidRecorderStartRecording tFilePath"
			}],
			"description":"Use the <androidRecorderStartRecording> handler to start recording audio\non Android using the input source, compression type and output format \nselected using the <androidRecorderSetRecordInput>, \n<androidRecorderSetRecordCompressionType>, and <androidRecorderSetRecordFormat>\nhandlers. The default input source, compression and output format are \nbuilt-in microphone, AMR-NB and 3gpp respectively.",
			"references":{
				"handler":["androidRecorderSetRecordInput","androidRecorderSetRecordCompressionType","androidRecorderSetRecordFormat"]
			}
		},{
			"id":"com.livecode.library.androidaudiorecorder-3",
			"name":"androidrecordersetrecordcompressiontype",
			"display name":"androidRecorderSetRecordCompressionType",
			"library":"com.livecode.library.androidaudiorecorder",
			"type":"handler",
			"syntax":[
				"androidRecorderSetRecordCompressionType(<pCompressionType>)"
			],
			"display syntax":[
				"androidRecorderSetRecordCompressionType(<i>pCompressionType</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Set the record compression type",
			"OS":["android"],
			"parameters":[{
				"name":"pCompressionType",
				"type":"",
				"refparam":"false",
				"description":"The record compression type\n- \"Default\": The default compression type\n- \"AMR NB\": AMR Narrowband\n- \"AMR WB\": AMR Wideband\n- \"AAC\": AAC Low Complexity (AAC-LC)\n- \"HE AAC\": High Efficiency AAC (HE-AAC)\n- \"AAC ELD\": Enhanced Low Delay AAC (AAC-ELD)\n- \"Vorbis\" : Ogg Vorbis"
			}],
			"examples":[{
				"script":"androidRecorderSetRecordCompressionType \"AMR NB\""
			}],
			"description":"Use the <androidRecorderSetRecordCompressionType> handler to control the \naudio encoding used by the audio recorder."
		},{
			"id":"com.livecode.library.androidaudiorecorder-4",
			"name":"androidrecordersetrecordformat",
			"display name":"androidRecorderSetRecordFormat",
			"library":"com.livecode.library.androidaudiorecorder",
			"type":"handler",
			"syntax":[
				"androidRecorderSetRecordFormat(<pRecordFormat>)"
			],
			"display syntax":[
				"androidRecorderSetRecordFormat(<i>pRecordFormat</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Set the record output format",
			"OS":["android"],
			"parameters":[{
				"name":"pRecordFormat",
				"type":"",
				"refparam":"false",
				"description":"The record output format\n\"ThreeGPP\":\n\"MPEG-4\":\n\"AMR WB\":\n\"AAC ADTS\":\n\"WebM\":"
			}],
			"examples":[{
				"script":"androidRecorderSetRecordFormat \"ThreeGPP\""
			}],
			"description":"Use the <androidRecorderSetRecordFormat> handler to set the format of \nthe output file."
		},{
			"id":"com.livecode.library.androidaudiorecorder-5",
			"name":"androidrecordersetrecordinput",
			"display name":"androidRecorderSetRecordInput",
			"library":"com.livecode.library.androidaudiorecorder",
			"type":"handler",
			"syntax":[
				"androidRecorderSetRecordInput(<pInputSource>)"
			],
			"display syntax":[
				"androidRecorderSetRecordInput(<i>pInputSource</i>)"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Set the record input source",
			"OS":["android"],
			"parameters":[{
				"name":"pInputSource",
				"type":"",
				"refparam":"false",
				"description":"The record input source\n- \"Default\": The device's default record input source\n- \"Mic\": Microphone audio source\n- \"VoiceUplink\": Voice call uplink (Tx) audio source\n- \"VoiceDownlink\": Voice call uplink (Tx) audio source.\n- \"VoiceCall\": Voice call uplink + downlink audio source\n- \"Camcorder\": Microphone audio source tuned for video recording, with the same orientation as the camera if available\n- \"VoiceRecognition\": Microphone audio source tuned for voice recognition\n- \"VoiceCommunication\": Microphone audio source tuned for voice recognition\n- \"RemoteSubmix\": Audio source for a submix of audio streams to be presented remotely\n- \"Unprocessed\": Microphone audio source tuned for unprocessed (raw) sound if available, behaves like Default otherwise"
			}],
			"examples":[{
				"script":"androidRecorderSetRecordInput \"mic\""
			}],
			"description":"Use the <androidRecorderSetRecordInput> handler to control the source \nand tuning of the record input."
		},{
			"id":"com.livecode.library.androidaudiorecorder-6",
			"name":"androidrecorderstoprecording",
			"display name":"androidRecorderStopRecording",
			"library":"com.livecode.library.androidaudiorecorder",
			"type":"handler",
			"syntax":[
				"androidRecorderStopRecording()"
			],
			"display syntax":[
				"androidRecorderStopRecording()"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Stop recording",
			"OS":["android"],
			"examples":[{
				"script":"on mouseUp\n    try\n        androidRecorderStopRecording\n    catch tError\n        answer tError\n    end try\nend mouseUp"
			}],
			"description":"Use the <androidRecorderStopRecording> handler to stop the current \nrecording. If no recording is currently happening, this handler will\nthrow an error."
		},{
			"id":"com.livecode.library.androidaudiorecorder-7",
			"name":"androidrecordergetmaxamplitude",
			"display name":"androidRecorderGetMaxAmplitude",
			"library":"com.livecode.library.androidaudiorecorder",
			"type":"handler",
			"syntax":[
				"androidRecorderGetMaxAmplitude()"
			],
			"display syntax":[
				"androidRecorderGetMaxAmplitude()"
			],
			"associations":["com.livecode.library.androidaudiorecorder"],
			"summary":"Returns the max amplitude of the recording since last sampled",
			"OS":["android"],
			"examples":[{
				"script":"-- Poll amplitude every 30 millisecs, and output values\ncommand LogAmplitude\n   put androidRecorderGetMaxAmplitude()\n   send \"LogAmplitude\" to me in 30 millisecs\nend LogAmplitude"
			}],
			"description":"Use the <androidRecorderGetMaxAmplitude> handler to retrieve the maximum\namplitude value reached during recording from the selected input source\nsince the amplitude was last retrieved.\n\n<androidRecorderGetMaxAmplitude> returns 0 if no recording is currently\nhappening.\n"
		}