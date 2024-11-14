{
			"id":"com.livecode.library.toast-1",
			"name":"com.livecode.library.toast",
			"display name":"Toast Notification Library",
			"library":"com.livecode.library.toast",
			"type":"library",
			"display syntax":[
				"Toast Notification Library"
			],
			"associations":["com.livecode.library.toast"],
			"summary":"A library for displaying toasts on mobile",
			"OS":["android"],
			"description":"A toast is a non-modal temporary notification displayed to the user."
		},{
			"id":"com.livecode.library.toast-2",
			"name":"mobiletoastcancel",
			"display name":"mobileToastCancel",
			"library":"com.livecode.library.toast",
			"type":"handler",
			"syntax":[
				"mobileToastCancel()"
			],
			"display syntax":[
				"mobileToastCancel()"
			],
			"associations":["com.livecode.library.toast"],
			"summary":"Cancel the current toast",
			"OS":["android"],
			"description":"Use <mobileToastCancel> to cancel the currently displayed toast."
		},{
			"id":"com.livecode.library.toast-3",
			"name":"mobiletoast",
			"display name":"mobileToast",
			"library":"com.livecode.library.toast",
			"type":"handler",
			"syntax":[
				"mobileToast(<pMessage>,<pDuration>)"
			],
			"display syntax":[
				"mobileToast(<i>pMessage</i>,<i>pDuration</i>)"
			],
			"associations":["com.livecode.library.toast"],
			"summary":"Display a toast notification",
			"OS":["android"],
			"parameters":[{
				"name":"pMessage",
				"type":"",
				"refparam":"false",
				"description":"The message to display"
			},{
				"name":"pDuration",
				"type":"",
				"refparam":"false",
				"description":"The duration of the notification. Either a positive integer, the string\n\"long\" or the string \"short\"."
			}],
			"examples":[{
				"script":"mobileToast \"Hello, I am a toast!\", \"short\""
			}],
			"description":"Use the <mobileToast> handler to display a temporary non-modal \nnotification with a specified message, for the given duration.\n"
		}