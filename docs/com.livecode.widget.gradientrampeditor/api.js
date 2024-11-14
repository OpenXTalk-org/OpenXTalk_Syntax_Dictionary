{
			"id":"com.livecode.widget.gradientrampeditor-1",
			"name":"com.livecode.widget.gradientrampeditor",
			"display name":"Gradient Ramp Editor",
			"library":"com.livecode.widget.gradientrampeditor",
			"type":"widget",
			"display syntax":[
				"Gradient Ramp Editor"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"This widget is displays a gradient according to the value of its *gradientStops* property.",
			"description":"This widget is displays a gradient according to the value of its *gradientStops* property."
		},{
			"id":"com.livecode.widget.gradientrampeditor-2",
			"name":"gradientstopschanged",
			"display name":"gradientStopsChanged",
			"library":"com.livecode.widget.gradientrampeditor",
			"type":"message",
			"syntax":[
				"gradientStopsChanged"
			],
			"display syntax":[
				"gradientStopsChanged"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"Sent when the gradientStops property of the widget changes",
			"examples":[{
				"script":"    on gradientStopsChanged\n        set the fillGradient[\"ramp\"] of graphic 1 to \\\n           the gradientStops of the target\n    end gradientStopsChanged"
			}],
			"description":"Handle the <gradientStopsChanged> message to perform an operation when\nthe gradientStops property of a gradient ramp editor widget changes."
		},{
			"id":"com.livecode.widget.gradientrampeditor-3",
			"name":"selectedstopchanged",
			"display name":"selectedStopChanged",
			"library":"com.livecode.widget.gradientrampeditor",
			"type":"message",
			"syntax":[
				"on selectedStopChanged <pIndex>"
			],
			"display syntax":[
				"on selectedStopChanged <i>pIndex</i>"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"Sent when a new gradient stop is selected",
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"The new selected stop index, or 0 if no stop is selected."
			}],
			"examples":[{
				"script":"    on selectedStopChanged pIndex\n        if pIndex is 0 then\n            exit selectedStopChanged\n        end if\n\n        answer color\n        if the result is not \"cancel\" then\n            local tStops\n            put the gradientStops of the target into tStops\n            put it into item 2 to 4 of line pIndex of tStops\n            set the gradientStops of the target to tStops\n        end if\n\n    end selectedStopChanged"
			}],
			"description":"Handle the <selectedStopChanged> message to perform an operation when\nthe selectedStop property of a gradient ramp editor widget changes."
		},{
			"id":"com.livecode.widget.gradientrampeditor-4",
			"name":"selectedstop",
			"display name":"selectedStop",
			"library":"com.livecode.widget.gradientrampeditor",
			"type":"property",
			"syntax":[
				"get the selectedStop of <widget>",
				"set the selectedStop of <widget> to <pIndex>"
			],
			"display syntax":[
				"get the selectedStop of <i>widget</i>"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"The <selectedStop> property controls which gradient stop (if any) is selected.",
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"An integer between 0 and the current number of gradient stops"
			}],
			"examples":[{
				"script":"    -- Create 10 equally spaced stops with random color values\n    local tGradientStops, tStop\n    repeat with x = 1 to 10\n        put x/10 & comma & random(255) & comma & random(255) & comma & random(255) & comma & random(255) into tStop\n        if tGradientStops is empty then\n            put tStop into tGradientStops\n        else\n            put return & tStop after tGradientStops\n        end if\n    end repeat\n    set the gradientStops of widget \"Gradient Ramp Editor\" to tGradientStops\n\n    -- if no stop is selected, select the first one\n    if the selectedStop of widget \"Gradient Ramp Editor\" is 0 then\n        set the selectedStop of widget \"Gradient Ramp Editor\" to 1\n    end if"
			}],
			"description":"If any gradient stop is selected, its index is returned by the <selectedStop>\nproperty. Otherwise the property returns 0. Setting the <selectedStop> property\nto 0 causes the currently selected gradient stop to be deselected."
		},{
			"id":"com.livecode.widget.gradientrampeditor-5",
			"name":"gradientstops",
			"display name":"gradientStops",
			"library":"com.livecode.widget.gradientrampeditor",
			"type":"property",
			"syntax":[
				"get the gradientStops of <widget>",
				"set the gradientStops of <widget> to <pGradientStops>"
			],
			"display syntax":[
				"get the gradientStops of <i>widget</i>"
			],
			"associations":["com.livecode.widget.gradientrampeditor"],
			"summary":"The <gradientStops> property controls the offset and color of each division of the gradient.",
			"parameters":[{
				"name":"pGradientStops",
				"type":"",
				"refparam":"false",
				"description":"A list, one per line, of comma-delimited strings consisting of the offset of the gradient stop, followed by the color and alpha."
			}],
			"examples":[{
				"script":"    -- Create 10 equally spaced stops with random color values\n    local tGradientStops, tStop\n    repeat with x = 1 to 10\n        put x/10 & comma & random(255) & comma & random(255) & comma & random(255) & comma & random(255) into tStop\n        if tGradientStops is empty then\n            put tStop into tGradientStops\n        else\n            put return & tStop after tGradientStops\n        end if\n    end repeat\n    set the gradientStops of widget \"Gradient Ramp Editor\" to tGradientStops"
			}],
			"description":"Color gradients are smooth transitions between the colors defined at consecutive offsets. The <gradientStops> property represents the offset and color of each of these stops.\n"
		}