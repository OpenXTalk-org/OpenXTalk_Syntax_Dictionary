{
			"id":"com.livecode.library.androidutils-1",
			"name":"com.livecode.library.androidutils",
			"display name":"Android Utilities",
			"library":"com.livecode.library.androidutils",
			"type":"module",
			"display syntax":[
				"Android Utilities"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"A library of utility handlers for functions commonly needed by Android widgets.",
			"OS":["android"],
			"description":"A library of utility handlers for functions commonly needed by Android widgets."
		},{
			"id":"com.livecode.library.androidutils-2",
			"name":"androidhaspermission",
			"display name":"AndroidHasPermission",
			"library":"com.livecode.library.androidutils",
			"type":"handler",
			"syntax":[
				"AndroidHasPermission(<pPermission>)"
			],
			"display syntax":[
				"AndroidHasPermission(<i>pPermission</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Returns true if permission <pPermission> has been granted by the user.",
			"OS":["android"],
			"parameters":[{
				"name":"pPermission",
				"type":"",
				"refparam":"false",
				"description":"The name of the permission to request.\n\n-   \"android.permission.READ_CALENDAR\": permission to allow an application to read the device's calendar.\n-   \"android.permission.WRITE_CALENDAR\": permission to allow an application to write to the device's calendar.\n-   \"android.permission.CAMERA\": permission to allow an application to access the device's camera.\n-   \"android.permission.ACCESS_COARSE_LOCATION\": permission to allow an application to access the device's coarse location.\n-   \"android.permission.ACCESS_FINE_LOCATION\": permission to allow an application to access the device's fine location.\n-   \"android.permission.READ_CONTACTS\": permission to allow an application to read data from the device's contacts.\n-   \"android.permission.WRITE_CONTACTS\": permission to allow an application to write date to the device's contacts.\n-   \"android.permission.GET_ACCOUNTS\": permission to allow an application to access to the list of accounts in the Accounts Service.\n-   \"android.permission.RECORD_AUDIO\": permission to allow an application to allow an application to record audio.\n-   \"android.permission.READ_EXTERNAL_STORAGE\": permission to allow an application to read data from the device's external storage.\n-   \"android.permission.WRITE_EXTERNAL_STORAGE\": permission to allow an application to write data to the device's external storage.\n-   \"android.permission.READ_PHONE_STATE\": permission to allow an application to access phone state, including the phone number of the device, current cellular network information, the status of any ongoing calls, and a list of any PhoneAccounts registered on the device.\n-   \"android.permission.READ_PHONE_NUMBERS\": permission to allow an application to access the device's phone number(s).\n-   \"android.permission.CALL_PHONE\": permission to allow an application to initiate a phone call without going through the Dialer user interface for the user to confirm the call.\n-   \"android.permission.ANSWER_PHONE_CALLS\": permission to allow an application to answer an incoming phone call.\n-   \"android.permission.READ_CALL_LOG\": permission to allow an application to read the user's call log.\n-   \"android.permission.WRITE_CALL_LOG\": permission to allow an application to write to the user's call log.\n-   \"android.permission.ADD_VOICEMAIL\": permission to allow an application to add voicemails into the system.\n-   \"android.permission.USE_SIP\": permission to allow an application to use SIP service.\n-   \"android.permission.PROCESS_OUTGOING_CALLS\": permission to allow an application to see the number being dialed during an outgoing call with the option to redirect the call to a different number or abort the call altogether.\n-   \"android.permission.SEND_SMS\": permission to allow an application to send SMS messages.\n-   \"android.permission.RECEIVE_SMS\": permission to allow an application to receive SMS messages\n-   \"android.permission.READ_SMS\": permission to allow an application to read SMS messages.\n-   \"android.permission.RECEIVE_WAP_PUSH\": permission to allow an application to receive WAP push messages.\n-   \"android.permission.RECEIVE_MMS\": permission to allow an application to receive MMS messages.\n-   \"android.permission.BODY_SENSORS\": permission to allow an application to access data from sensors that the user uses to measure what is happening inside his/her body, such as heart rate."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if permission has been granted, false otherwise."
			}],
			"description":"Use the <AndroidHasPermission> function to find out if permission\n<pPermission> has been granted by the user.\n\n>*Note:* Permission names are case sensitive."
		},{
			"id":"com.livecode.library.androidutils-3",
			"name":"androidunregisterlifecyclelistener",
			"display name":"AndroidUnregisterLifecycleListener",
			"library":"com.livecode.library.androidutils",
			"type":"handler",
			"syntax":[
				"AndroidUnregisterLifecycleListener(<pListener>)"
			],
			"display syntax":[
				"AndroidUnregisterLifecycleListener(<i>pListener</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Unregister an object that is listening on application lifecycle events.",
			"OS":["android"],
			"parameters":[{
				"name":"pListener",
				"type":"",
				"refparam":"false",
				"description":"The listener object to be unregistered"
			}],
			"examples":[{
				"script":"private variable mLifecycleListener as optional JObject\n\npublic handler OnOpen() returns nothing\n    put AndroidRegisterLifecycleListener(OnMyWidgetPaused, OnMyWidgetResumed) into mLifecycleListener\nend handler\n\npublic handler OnClose() returns nothing\n    AndroidUnregisterLifecycleListener(mLifecycleListener)\n    put nothing into mLifecycleListener\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if the listener object was previously registered and has been successfully\nunregistered."
			}],
			"description":"Use the <AndroidUnregisterLifecycleListener> handler to unregister an object\ncreated with <AndroidRegisterLifecycleListener> that is listening to application\nlifecycle events. This will have the effect that any handlers that the listener\nobject is wrapping will no longer be called."
		},{
			"id":"com.livecode.library.androidutils-4",
			"name":"androidrequestpermission",
			"display name":"AndroidRequestPermission",
			"library":"com.livecode.library.androidutils",
			"type":"handler",
			"syntax":[
				"AndroidRequestPermission(<pPermission>)"
			],
			"display syntax":[
				"AndroidRequestPermission(<i>pPermission</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Displays a dialog showing a permission request for <pPermission>. If a user\nhas already granted permission for <pPermission>, this function does nothing.\n\nReturns true if permission <pPermission> has been granted by the user.",
			"OS":["android"],
			"parameters":[{
				"name":"pPermission",
				"type":"",
				"refparam":"false",
				"description":"The name of the permission to request.\n\n-   \"android.permission.READ_CALENDAR\": permission to allow an application to read the device's calendar.\n-   \"android.permission.WRITE_CALENDAR\": permission to allow an application to write to the device's calendar.\n-   \"android.permission.CAMERA\": permission to allow an application to access the device's camera.\n-   \"android.permission.ACCESS_COARSE_LOCATION\": permission to allow an application to access the device's coarse location.\n-   \"android.permission.ACCESS_FINE_LOCATION\": permission to allow an application to access the device's fine location.\n-   \"android.permission.READ_CONTACTS\": permission to allow an application to read data from the device's contacts.\n-   \"android.permission.WRITE_CONTACTS\": permission to allow an application to write date to the device's contacts.\n-   \"android.permission.GET_ACCOUNTS\": permission to allow an application to access to the list of accounts in the Accounts Service.\n-   \"android.permission.RECORD_AUDIO\": permission to allow an application to allow an application to record audio.\n-   \"android.permission.READ_EXTERNAL_STORAGE\": permission to allow an application to read data from the device's external storage.\n-   \"android.permission.WRITE_EXTERNAL_STORAGE\": permission to allow an application to write data to the device's external storage.\n-   \"android.permission.READ_PHONE_STATE\": permission to allow an application to access phone state, including the phone number of the device, current cellular network information, the status of any ongoing calls, and a list of any PhoneAccounts registered on the device.\n-   \"android.permission.READ_PHONE_NUMBERS\": permission to allow an application to access the device's phone number(s).\n-   \"android.permission.CALL_PHONE\": permission to allow an application to initiate a phone call without going through the Dialer user interface for the user to confirm the call.\n-   \"android.permission.ANSWER_PHONE_CALLS\": permission to allow an application to answer an incoming phone call.\n-   \"android.permission.READ_CALL_LOG\": permission to allow an application to read the user's call log.\n-   \"android.permission.WRITE_CALL_LOG\": permission to allow an application to write to the user's call log.\n-   \"android.permission.ADD_VOICEMAIL\": permission to allow an application to add voicemails into the system.\n-   \"android.permission.USE_SIP\": permission to allow an application to use SIP service.\n-   \"android.permission.PROCESS_OUTGOING_CALLS\": permission to allow an application to see the number being dialed during an outgoing call with the option to redirect the call to a different number or abort the call altogether.\n-   \"android.permission.SEND_SMS\": permission to allow an application to send SMS messages.\n-   \"android.permission.RECEIVE_SMS\": permission to allow an application to receive SMS messages\n-   \"android.permission.READ_SMS\": permission to allow an application to read SMS messages.\n-   \"android.permission.RECEIVE_WAP_PUSH\": permission to allow an application to receive WAP push messages.\n-   \"android.permission.RECEIVE_MMS\": permission to allow an application to receive MMS messages.\n-   \"android.permission.BODY_SENSORS\": permission to allow an application to access data from sensors that the user uses to measure what is happening inside his/her body, such as heart rate."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if permission has been granted, false otherwise."
			}],
			"description":"Use the <AndroidRequestPermission> command to request permission for\n<pPermission> from the user.\n\n>*Note:* Permission names are case sensitive."
		},{
			"id":"com.livecode.library.androidutils-5",
			"name":"applicationcontext",
			"display name":"ApplicationContext",
			"library":"com.livecode.library.androidutils",
			"type":"handler",
			"syntax":[
				"ApplicationContext()"
			],
			"display syntax":[
				"ApplicationContext()"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Get the application Context",
			"OS":["android"],
			"examples":[{
				"script":"__safe foreign handler _JNI_CreateButton(in pContext as JObject) returns JObject \\\n\tbinds to \"java:android.widget.Button>new(Landroid/content/Context;)?ui\"\n\nhandler NativeButtonView() returns JObject\n\treturn _JNI_CreateButton(ApplicationContext())\nend handler"
			}],
			"description":"Use the <ApplicationContext> handler to fetch the current application's\nContext object."
		},{
			"id":"com.livecode.library.androidutils-6",
			"name":"androidregisterlifecyclelistener",
			"display name":"AndroidRegisterLifecycleListener",
			"library":"com.livecode.library.androidutils",
			"type":"handler",
			"syntax":[
				"AndroidRegisterLifecycleListener(<pPauseHandler>,<pResumeHandler>)"
			],
			"display syntax":[
				"AndroidRegisterLifecycleListener(<i>pPauseHandler</i>,<i>pResumeHandler</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Register handlers to be called when on application lifecycle events.",
			"OS":["android"],
			"parameters":[{
				"name":"pPauseHandler",
				"type":"",
				"refparam":"false",
				"description":"The handler to be called when the application is paused"
			},{
				"name":"pResumeHandler",
				"type":"",
				"refparam":"false",
				"description":"The handler to be called when the application is resumed"
			}],
			"examples":[{
				"script":"private variable mLifecycleListener as optional JObject\n\npublic handler OnOpen() returns nothing\n    put AndroidRegisterLifecycleListener(OnMyWidgetPaused, OnMyWidgetResumed) into mLifecycleListener\nend handler\n\npublic handler OnClose() returns nothing\n    AndroidUnregisterLifecycleListener(mLifecycleListener)\n    put nothing into mLifecycleListener\nend handler\n\nprivate handler OnMyWidgetPaused() returns nothing\n    -- Perform pause actions\nend handler\n\nprivate handler OnMyWidgetResumed() returns nothing\n    -- Perform resume actions\nend handler"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"A listener object that wraps the registered handlers."
			}],
			"description":"Use the <AndroidRegisterLifecycleListener> handler to register handlers to\napplication lifecycle events. The handler <pPauseHandler> will be called when\nthe application is paused and enters into the background. The handler\n<pResumeHandler> will be called when the application is resumed and returns from\nthe background.\n\nA listener object will be returned that wraps the registered handlers and can be\nused with <AndroidUnregisterLifecycleListener> to cancel the registration."
		},{
			"id":"com.livecode.library.androidutils-7",
			"name":"androidpermissionexists",
			"display name":"AndroidPermissionExists",
			"library":"com.livecode.library.androidutils",
			"type":"handler",
			"syntax":[
				"AndroidPermissionExists(<pPermission>)"
			],
			"display syntax":[
				"AndroidPermissionExists(<i>pPermission</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Returns true if <pPermission> is a valid Android permission name",
			"OS":["android"],
			"parameters":[{
				"name":"pPermission",
				"type":"",
				"refparam":"false",
				"description":"The name of the permission to check."
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"True if <pPermission> is a valid Android permission name, false otherwise."
			}],
			"description":"Use the <AndroidPermissionExists> function to check if <pPermission> is a valid\nAndroid permission name.\n\n>*Note:* Permission names are case sensitive."
		},{
			"id":"com.livecode.library.androidutils-8",
			"name":"stringtoandroidcolor",
			"display name":"StringToAndroidColor",
			"library":"com.livecode.library.androidutils",
			"type":"handler",
			"syntax":[
				"StringToAndroidColor(<pString>)"
			],
			"display syntax":[
				"StringToAndroidColor(<i>pString</i>)"
			],
			"associations":["com.livecode.library.androidutils"],
			"summary":"Convert a color string to an integer for Android",
			"OS":["android"],
			"parameters":[{
				"name":"pString",
				"type":"",
				"refparam":"false",
				"description":"The color string"
			}],
			"description":"Use the <StringToAndroidColor> handler to convert a string representing\na color to an integer that can be used with Android color APIs.\n"
		}