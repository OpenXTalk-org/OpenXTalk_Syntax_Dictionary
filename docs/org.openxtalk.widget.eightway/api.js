{
			"id":"org.openxtalk.widget.eightway-1",
			"name":"org.openxtalk.widget.eightway",
			"display name":"EightWay",
			"library":"org.openxtalk.widget.eightway",
			"type":"widget",
			"display syntax":[
				"EightWay"
			],
			"associations":["org.openxtalk.widget.eightway"],
			"summary":"This widget is an eight-way on-screen controller, a virtual D-pad like the ones found on game controllers.",
			"description":"This widget is an eight-way on-screen controller, a virtual D-pad like the ones found on game controllers."
		},{
			"id":"org.openxtalk.widget.eightway-2",
			"name":"dpadon",
			"display name":"DPadOn",
			"library":"org.openxtalk.widget.eightway",
			"type":"message",
			"syntax":[
				"DPadOn pNumber"
			],
			"display syntax":[
				"DPadOn pNumber"
			],
			"associations":["org.openxtalk.widget.eightway"],
			"summary":"Sent when a virtual button is clicked.",
			"examples":[{
				"script":"on DPadOn pButtonNum\n\tput \"DPadOn \" & pButtonNum\nend DPadOn"
			}],
			"description":"Handle the DPadOn message in the widget's object script to respond to clicks in the the virtual DPad."
		},{
			"id":"org.openxtalk.widget.eightway-3",
			"name":"dpadoff",
			"display name":"DPadOff",
			"library":"org.openxtalk.widget.eightway",
			"type":"message",
			"syntax":[
				"DPadOff pNumber"
			],
			"display syntax":[
				"DPadOff pNumber"
			],
			"associations":["org.openxtalk.widget.eightway"],
			"summary":"Sent when a virtual button is clicked.",
			"examples":[{
				"script":"on DPad pButtonNum\n\tput \"DPadOff \" & pButtonNum\nend DPadOn"
			}],
			"description":"Handle the DPadOff message in the widget's object script to respond to release of the virtual DPad buttons\n"
		}