{
			"id":"com.livecode.widget.piechart-1",
			"name":"com.livecode.widget.piechart",
			"display name":"Pie Chart",
			"library":"com.livecode.widget.piechart",
			"type":"widget",
			"display syntax":[
				"Pie Chart"
			],
			"associations":["com.livecode.widget.piechart"],
			"summary":"A pie chart control. A pie chart displays a set of values and labels as sectors of a circular chart. The labels are displayed alongside the chart, and can be shown or hidden.",
			"description":"A pie chart control. A pie chart displays a set of values and labels as sectors of a circular chart. The labels are displayed alongside the chart, and can be shown or hidden."
		},{
			"id":"com.livecode.widget.piechart-2",
			"name":"sectorclicked",
			"display name":"sectorClicked",
			"library":"com.livecode.widget.piechart",
			"type":"message",
			"syntax":[
				"on sectorClicked pSectorNumber"
			],
			"display syntax":[
				"on sectorClicked pSectorNumber"
			],
			"associations":["com.livecode.widget.piechart"],
			"summary":"Sent when a sector of the pie chart is clicked.",
			"parameters":[{
				"name":"pSectorNumber",
				"type":"",
				"refparam":"false",
				"description":"The sector number of the clicked segment."
			}],
			"description":"The <sectorClicked > message is sent when a sector in the pie chart is clicked. The <pSectorNumber> parameter number of the sector which was clicked."
		},{
			"id":"com.livecode.widget.piechart-3",
			"name":"sectorvalues",
			"display name":"sectorValues",
			"library":"com.livecode.widget.piechart",
			"type":"property",
			"syntax":[
				"get the sectorValues of <widget>",
				"set the sectorValues of <widget> to <pValueList>"
			],
			"display syntax":[
				"get the sectorValues of <i>widget</i>"
			],
			"associations":["com.livecode.widget.piechart"],
			"summary":"The list of values to be displayed on the pie chart.",
			"parameters":[{
				"name":"pValueList",
				"type":"",
				"refparam":"false",
				"description":"A comma separated string of values."
			}],
			"description":"Use the <sectorValues> property to set the values to be displayed in the pie chart."
		},{
			"id":"com.livecode.widget.piechart-4",
			"name":"sectorlabels",
			"display name":"sectorLabels",
			"library":"com.livecode.widget.piechart",
			"type":"property",
			"syntax":[
				"get the sectorLabels of <widget>",
				"set the sectorLabels of <widget> to <pLabelList>"
			],
			"display syntax":[
				"get the sectorLabels of <i>widget</i>"
			],
			"associations":["com.livecode.widget.piechart"],
			"summary":"The list of labels associated with the pie chart sectors.",
			"parameters":[{
				"name":"pLabelList",
				"type":"",
				"refparam":"false",
				"description":"A comma separated string of labels."
			}],
			"description":"Use the <sectorLabels> property to set the labels to be displayed in the pie chart."
		},{
			"id":"com.livecode.widget.piechart-5",
			"name":"showlabels",
			"display name":"showLabels",
			"library":"com.livecode.widget.piechart",
			"type":"property",
			"syntax":[
				"get the showLabels of <widget>",
				"set the showLabels of <widget> to { true | false }"
			],
			"display syntax":[
				"get the showLabels of <i>widget</i>"
			],
			"associations":["com.livecode.widget.piechart"],
			"summary":"Whether the sector labels are shown or not.",
			"description":"Use the <showLabels> property to control whether the sector labels are shown or not.\n"
		}