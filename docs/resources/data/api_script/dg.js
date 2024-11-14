{
			"id":"Datagrid-1",
			"name":"datagrid",
			"display name":"Data Grid",
			"library":"Datagrid",
			"type":"object",
			"display syntax":[
				"Data Grid"
			],
			"associations":["datagrid"],
			"summary":"An object for forms or tables",
			"description":"The Data Grid enables you to integrate powerful tables and forms into\nyour projects. Data grids combine groups and behaviors\nto provide you with a simple, yet flexible means of displaying your data\nin just about any way you want. See [the datagrid lessson](http://lessons.livecode.com/m/datagrid/l/7301-what-is-the-data-grid)\nfor full documentation, lessons, and tutorials."
		},{
			"id":"Datagrid-2",
			"name":"datagrid_general_properties",
			"display name":"Datagrid General Properties",
			"library":"Datagrid",
			"type":"glossary",
			"syntax":[
				"Datagrid General Properties"
			],
			"display syntax":[
				"Datagrid General Properties"
			],
			"associations":["datagrid"],
			"summary":"General properties of the datagrid are applicable whether the\n'style' property is set to 'form' or 'table'",
			"description":"All general data grid properties are stored in the dgProps custom\nproperty set. To access a property you can use dgProps or dgProp:\n\n\tput the dgProp[ \"PROPERTY_NAME\" ] of group \"Data Grid\""
		},{
			"id":"Datagrid-3",
			"name":"allow_editing",
			"display name":"allow editing",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgProp[\"allow editing\"] of group \"Data Grid\""
			],
			"display syntax":[
				"set the dgProp[\"allow editing\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set to true to allow users to edit the cells of a table or the\nfields in a form.",
			"description":"Set to true to allow users to edit the cells of a table or the fields in\na form. Note that when customizing templates for form rows or table\ncolumns you would check this property to determine if fields should\nallow editing. The default Row Behavior script contains an Example of\n\nhow to do this."
		},{
			"id":"Datagrid-4",
			"name":"alternate_row_color",
			"display name":"alternate row color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"alternate row color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"alternate row color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"The color of every other row's background.",
			"description":"The color of every other row's background. Default value is empty in\nwhich case a default hilite color is used. Only applicable when\n'alternate row colors' is true. Prefix property name with \"effective\" to\nget the color being used."
		},{
			"id":"Datagrid-5",
			"name":"alternate_row_colors",
			"display name":"alternate row colors",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"alternate row colors\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"alternate row colors\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set to true to alternate the background colors of every other\nrow.",
			"description":"Set to true to alternate the background colors of every other row."
		},{
			"id":"Datagrid-6",
			"name":"auto_hilite",
			"display name":"auto hilite",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"auto hilite\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"auto hilite\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Enables the data grid to automatically handle row highlighting.",
			"description":"Set to true if you would like the data grid to automatically handle row\nhighlighting in response to user interaction."
		},{
			"id":"Datagrid-7",
			"name":"background_color",
			"display name":"background color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"background color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"background color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"The background color of the data grid.",
			"description":"The background color of the data grid. Note that if 'alternate row\ncolors' is true then the alternating row colors will cover the\nbackground."
		},{
			"id":"Datagrid-8",
			"name":"cache_controls",
			"display name":"cache controls",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"cache controls\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"cache controls\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Caches all controls for rendering.",
			"description":"By default the data grid only draws the controls that are visible on the\nscreen. In circumstances where you don't have large amounts of records\nbut the records you have take a long time to draw you may cache all of\nthe controls when the data grid is drawn. This takes a little longer to\ndisplay at the beginning but will offer smooth scrolling when the user\ninteracts with the data grid."
		},{
			"id":"Datagrid-9",
			"name":"column_divider_color",
			"display name":"column divider color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"column divider color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"column divider color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Sets the color of the table column dividers.",
			"description":"Sets the color of the table column dividers. Prefix property name with\n\"effective\" to get the color being used when this property is set to\nempty"
		},{
			"id":"Datagrid-10",
			"name":"column_margins",
			"display name":"column margins",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"column margins\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"column margins\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Specifies the margins to be applied to each cell in a column.",
			"description":"Specifies the margins to be applied to each cell in a column."
		},{
			"id":"Datagrid-11",
			"name":"control_type",
			"display name":"control type",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"control type\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"control type\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Returns \"data grid\"",
			"description":"Returns \"data grid\". You can check this property to determine if a group\nis a data grid."
		},{
			"id":"Datagrid-12",
			"name":"dim_on_focusout",
			"display name":"dim on focusOut",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"dim on focusOut\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"dim on focusOut\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Dims the highlighted lines when the data grid does not have\nfocus.",
			"description":"If true then the highlighted lines will be dimmed to 'dimmed hilite\ncolor' when the data grid does not have focus. Default is true."
		},{
			"id":"Datagrid-13",
			"name":"dimmed_hilite_color",
			"display name":"dimmed hilite color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"dimmed hilite color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"dimmed hilite color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Color that highlighted lines will be when control is not\nfocused.",
			"description":"Color that highlighted lines will be when control is not focused. Prefix\nproperty name with \"effective\" to get the color being used when this\nproperty is set to empty."
		},{
			"id":"Datagrid-14",
			"name":"fixed_row_height",
			"display name":"fixed row height",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"fixed row height\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"fixed row height\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set to true if all of your data will be drawn at the same\nheight.",
			"description":"Set to true if all of your data will be drawn at the same height.\nSetting this to true will dramatically improve performance the first\ntime the data grid is drawn as the data grid does not have to determine\nthe height of all of your records before drawing. Default value is true."
		},{
			"id":"Datagrid-15",
			"name":"hilite_color",
			"display name":"hilite color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"hilite color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"hilite color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"The color to use when highlighting a row.",
			"description":"The color to use when highlighting a row. If empty then the hiliteColor\nproperty is used. Prefix property name with \"effective\" to get the color\nbeing used when this property is set to empty."
		},{
			"id":"Datagrid-16",
			"name":"hilited_text_color",
			"display name":"hilited text color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"hilited text color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"hilited text color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"The color to apply to text when a row is highlighted.",
			"description":"The color to apply to text when a row is highlighted. By default this\nproperty is empty in which case the color is black if the average of the\nRGB value for the hilite color > 128, white otherwise."
		},{
			"id":"Datagrid-17",
			"name":"multiple_lines",
			"display name":"multiple lines",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"multiple lines\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"multiple lines\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set to true to allow the user to select multiple lines in the\ndata grid.",
			"description":"Set to true to allow the user to select multiple lines in the data grid."
		},{
			"id":"Datagrid-18",
			"name":"opaque",
			"display name":"opaque",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"opaque\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"opaque\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Shows or hides the data grid background.",
			"description":"Shows or hides the data grid background."
		},{
			"id":"Datagrid-19",
			"name":"persistent_data",
			"display name":"persistent data",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"persistent data\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"persistent data\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set to true if you would like the data grid to store the data\nbeing displayed between sessions.",
			"description":"Set to true if you would like the data grid to store the data being\ndisplayed between sessions. The data grid always works with data stored\nin a script local variable but if this value is true then the data will\nbe cached in a custom property as well. This will double the memory used\nso this is suitable for small lists. For large data sets you should set\nthis property to 'false' and set the data grid data each time the data\ngrid is opened. The default value is 'true'."
		},{
			"id":"Datagrid-20",
			"name":"row_color",
			"display name":"row color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"row color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"row color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"The primary row color.",
			"description":"The primary row color. This color alternates with 'alternate row color'.\nPrefix property name with \"effective\" to get the color being used when\nthis property is set to empty"
		},{
			"id":"Datagrid-21",
			"name":"row_height",
			"display name":"row height",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"row height\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"row height\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"This represents the height that your rows will be drawn at.",
			"description":"For tables and forms whose 'fixed row height' property is true this\nrepresents the height that your rows will be drawn at. If this property\nis not set for a form whose 'fixed control height' is true then the\nrecord template group height is used. For forms whose 'fixed control\nheight' is false this represents the height that alternating rows that\ncontain no data will be drawn at."
		},{
			"id":"Datagrid-22",
			"name":"row_template",
			"display name":"row template",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"row template\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"row template\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"This is the group that represents a record in your data grid.",
			"description":"This is the group that represents a record in your data grid. If the\nstyle of the data grid is form then this group will be copied into the\ndata grid. If the data grid style is table then the data grid looks in\nthis group for controls named after the columns in your table. If the\ndata grid finds a control in this group that matches a column name then\nthe control will be used to visually represent the column. Otherwise a\nfield is used. By default the IDE creates this group on a card\nin a stack whose name starts with \"Data Grid Template\". Clicking the\n\"Row Template\" button in the Property Inspector reveal the card\ncontaining this group."
		},{
			"id":"Datagrid-23",
			"name":"scroll_when_hscrollbar_is_hidden",
			"display name":"scroll when hscrollbar is hidden",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"scroll when hscrollbar is hidden\"] of group\n\"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"scroll when hscrollbar is hidden\"] of group"
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"This overrides the default horizontal scrolling behavior.",
			"description":"By default a data grid will not respond to the mouse scroll wheel, page\nup, page down, home or end if the scrollbar is hidden. Set this property\nto true if you would like to override this behavior. This is useful if\nyou want to create custom scrollbars."
		},{
			"id":"Datagrid-24",
			"name":"scroll_when_vscrollbar_is_hidden",
			"display name":"scroll when vscrollbar is hidden",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"scroll when vscrollbar is hidden\"] of group\n\"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"scroll when vscrollbar is hidden\"] of group"
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"This overrides the default vertical scrolling behavior.",
			"description":"By default a data grid will not respond to the mouse scroll wheel, page\nup, page down, home or end if the scrollbar is hidden. Set this property\nto true if you would like to override this behavior. This is useful if\nyou want to create custom scrollbars."
		},{
			"id":"Datagrid-25",
			"name":"scrollbar_corner_offset",
			"display name":"scrollbar corner offset",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"scrollbar corner offset\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"scrollbar corner offset\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Scrollbar ofset from the corner when only one is visible.",
			"description":"This property is an integer that specifies the distance from the corner\nof the window that the vertical and horizontal scrollbars position\nthemselves when only one of them is visible. This is primarily useful on\nOS X when your data grid reaches all the way to the bottom right corner\nof the window where the window drag handle appears. Setting this to a\nvalue like \"15\" will keep your scrollbar controls from being hidden\nbehind the window drag handle. Default value is \"0\"."
		},{
			"id":"Datagrid-26",
			"name":"show_vscrollbar",
			"display name":"show vscrollbar",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"show vscrollbar\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"show vscrollbar\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Toggles the visibility of the vertical scrollbar. True, false,\nor auto.",
			"description":"Toggles the visibility of the vertical scrollbar. True, false, or auto."
		},{
			"id":"Datagrid-27",
			"name":"show_hscrollbar",
			"display name":"show hscrollbar",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"show hscrollbar\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"show hscrollbar\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Toggles the visibility of the horizontal scrollbar for a table.\nTrue, false or auto.",
			"description":"Toggles the visibility of the horizontal scrollbar for a table. True,\nfalse or auto."
		},{
			"id":"Datagrid-28",
			"name":"scrollbar_width",
			"display name":"scrollbar width",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"scrollbar width\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"scrollbar width\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set the width of the scrollbars",
			"description":"Set to an integer or to auto if you would like the data grid to set the\nappropriate width based on the platform it is being displayed on.\nDefault is auto. When set to auto you can retrieve the actual width in\npixels using effective scrollbar width."
		},{
			"id":"Datagrid-29",
			"name":"style",
			"display name":"style",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"style\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"style\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Gets the style of the data grid, either 'form' or 'table'.",
			"description":"Gets the style of the data grid, either 'form' or 'table'."
		},{
			"id":"Datagrid-30",
			"name":"text_color",
			"display name":"text color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"text color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"text color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"The text color to apply to the data area of a table or form.",
			"description":"The text color to apply to the data area of a table or form. Prefix\nproperty name with \"effective\" to get the color being used when this\nproperty is set to empty"
		},{
			"id":"Datagrid-31",
			"name":"text_font",
			"display name":"text font",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"text font\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"text font\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"The font to apply to the data area of a table or form.",
			"description":"The font to apply to the data area of a table or form. Prefix property\nname with \"effective\" to get the font being used when this property is\nset to empty."
		},{
			"id":"Datagrid-32",
			"name":"text_size",
			"display name":"text size",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"text size\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"text size\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"The text size to apply to the data area of a table or form.",
			"description":"The text size to apply to the data area of a table or form. Prefix\nproperty name with \"effective\" to get the size being used when this\nproperty is set to empty."
		},{
			"id":"Datagrid-33",
			"name":"text_style",
			"display name":"text style",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"text style\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"text style\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"The text style to apply to the data area of a table or form.",
			"description":"The text style to apply to the data area of a table or form. Prefix\nproperty name with \"effective\" to get the style being used when this\nproperty is set to empty."
		},{
			"id":"Datagrid-34",
			"name":"datagrid_table_properties",
			"display name":"Datagrid Table Properties",
			"library":"Datagrid",
			"type":"glossary",
			"syntax":[
				"Datagrid Table Properties"
			],
			"display syntax":[
				"Datagrid Table Properties"
			],
			"associations":["datagrid"],
			"summary":"Table properties of the datagrid are applicable when the 'style'\nproperty is set to 'table'.",
			"description":"All data grid table properties are stored in the dgProps custom property\nset. To access a property you can use dgProps or dgProp:\n\n\tput the dgProp[ \"PROPERTY_NAME\" ] of group \"Data Grid\""
		},{
			"id":"Datagrid-35",
			"name":"allow_column_resizing",
			"display name":"allow column resizing",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"allow column resizing\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"allow column resizing\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"If true then the user can resize columns in the table header.",
			"description":"If true then the user can resize columns in the table header. Note that\nyou can also turn off resizing for individual columns which would\noverride this setting."
		},{
			"id":"Datagrid-36",
			"name":"column_divider_color",
			"display name":"column divider color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"column divider color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"column divider color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"The color of the column dividers in a table.",
			"description":"The color of the column dividers in a table."
		},{
			"id":"Datagrid-37",
			"name":"column_alignments",
			"display name":"column alignments",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"column alignments\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"column alignments\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Allows you to set all column alignment values at once.",
			"description":"Allows you to set all column alignment values at once. Line delimited\nlist of alignment values."
		},{
			"id":"Datagrid-38",
			"name":"column_visibility",
			"display name":"column visibility",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"column visibility\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"column visibility\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Allows you to set the visible property for all columns at once.",
			"description":"Allows you to set the visible property for all columns at once. Line\ndelimited list of boolean values."
		},{
			"id":"Datagrid-39",
			"name":"column_widths",
			"display name":"column widths",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"column widths\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"column widths\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Allows you to set all column widths at once. Comma delimited\nlist of integers.",
			"description":"Allows you to set all column widths at once. Comma delimited list of\nintegers."
		},{
			"id":"Datagrid-40",
			"name":"columns",
			"display name":"columns",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"columns\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"columns\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Line delimited list of columns in your table.",
			"description":"Line delimited list of columns in your table."
		},{
			"id":"Datagrid-41",
			"name":"column_labels",
			"display name":"column labels",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"column labels\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"column labels\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Line delimited list of labels for columns in your table.",
			"description":"Line delimited list of labels for columns in your table."
		},{
			"id":"Datagrid-42",
			"name":"corner_color",
			"display name":"corner color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"corner color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"corner color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"The color of the corner piece that appears when both horizontal\nand vertical scrollbars are visible.",
			"description":"The color of the corner piece that appears when both horizontal and\nvertical scrollbars are visible. You set set to a solid color, a\ngradient (two colors, one per line) or an array containing the keys of\nthe fillGradient property."
		},{
			"id":"Datagrid-43",
			"name":"default_column_behavior",
			"display name":"default column behavior",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"default column behavior\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"default column behavior\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Used to set the default column behavior.",
			"description":"The table style has an internal behavior that is used for columns which\nhave no custom control defined for them. This behavior sets the text of\na field as well as the alignment, etc. You can set this property to a\nbutton containing the default behavior you would like. This can be\nuseful if you need to display html, unicode or rtf text among other\nthings. The default value is empty. To see the script that the data grid\nuses by default for columns you can edit the script of button \"Default\nColumn\" of group \"Behaviors\" of stack \"revDataGridLibrary\""
		},{
			"id":"Datagrid-44",
			"name":"default_header_behavior",
			"display name":"default header behavior",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"default header behavior\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"default header behavior\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Used to set the default header behavior.",
			"description":"The table style has an internal behavior that is used for column\nheaders. If you would like to override the default behavior for column\nheaders you can set this property to point to a button with your own\nbehavior script. To see the script that the data grid uses by default\nyou can edit the script of button \"Default Header\" of group \"Behaviors\"\nof stack \"revDataGridLibrary\""
		},{
			"id":"Datagrid-45",
			"name":"header_background_color",
			"display name":"header background color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"header background color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"header background color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"The background color of the header.",
			"description":"The background color of the header. You set set to a solid color, a\ngradient (two colors, one per line) or an array containing the keys of\nthe fillGradient property."
		},{
			"id":"Datagrid-46",
			"name":"header_background_hilite_color",
			"display name":"header background hilite color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"header background hilite color\"] of group \"Data\nGrid\""
			],
			"display syntax":[
				"put the dgProp[\"header background hilite color\"] of group \"Data"
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"The background color of the header that is being sorted by.",
			"description":"The background color of the header that is being sorted by. You set set\nto a solid color, a gradient (two colors, one per line) or an array\ncontaining the keys of the fillGradient property."
		},{
			"id":"Datagrid-47",
			"name":"header_height",
			"display name":"header height",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"header height\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"header height\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"The height of the header are of the table.",
			"description":"The height of the header are of the table."
		},{
			"id":"Datagrid-48",
			"name":"header_margins",
			"display name":"header margins",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"header margins\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"header margins\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Specifies the margins to be applied to the fields that display\nthe header text.",
			"description":"Specifies the margins to be applied to the fields that display the\nheader text."
		},{
			"id":"Datagrid-49",
			"name":"header_text_color",
			"display name":"header text color",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"header text color\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"header text color\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"The text color to apply to the header area of a table.",
			"description":"The text color to apply to the header area of a table. Prefix property\nname with \"effective\" to get the color being used when this property is\nset to empty"
		},{
			"id":"Datagrid-50",
			"name":"header_text_font",
			"display name":"header text font",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"header text font\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"header text font\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"The font to apply to the header area of a table.",
			"description":"The font to apply to the header area of a table. Prefix property name\nwith \"effective\" to get the font being used when this property is set to\nempty"
		},{
			"id":"Datagrid-51",
			"name":"header_text_size",
			"display name":"header text size",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"header text size\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"header text size\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"The text size to apply to the header area of a table.",
			"description":"The text size to apply to the header area of a table. Prefix property\nname with \"effective\" to get the size being used when this property is\nset to empty"
		},{
			"id":"Datagrid-52",
			"name":"header_text_style",
			"display name":"header text style",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"header text style\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"header text style\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"The text style to apply to the header area of a table.",
			"description":"The text style to apply to the header area of a table. Prefix property\nname with \"effective\" to get the style being used when this property is\nset to empty"
		},{
			"id":"Datagrid-53",
			"name":"show_column_dividers",
			"display name":"show column dividers",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"show column dividers\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"show column dividers\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Toggles the visibility of the column dividers in the data\ndisplay area.",
			"description":"Toggles the visibility of the column dividers in the data display area.\nDefault value is true."
		},{
			"id":"Datagrid-54",
			"name":"show_header",
			"display name":"show header",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"show header\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"show header\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Toggles the visibility of the header. Default value is true.",
			"description":"Toggles the visibility of the header. Default value is true."
		},{
			"id":"Datagrid-55",
			"name":"sort_by_column",
			"display name":"sort by column",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"sort by column\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"sort by column\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"The column that the table data is currently being sorted by.",
			"description":"The column that the table data is currently being sorted by. You can set\nthis property to sort by a new column."
		},{
			"id":"Datagrid-56",
			"name":"visible_columns",
			"display name":"visible columns",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgProp[\"visible columns\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgProp[\"visible columns\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid table properties"],
			"summary":"Line delimited list of columns in your table that are visible.",
			"description":"Line delimited list of columns in your table that are visible."
		},{
			"id":"Datagrid-57",
			"name":"datagrid_column_properties",
			"display name":"Datagrid Column Properties",
			"library":"Datagrid",
			"type":"glossary",
			"syntax":[
				"Datagrid Column Properties"
			],
			"display syntax":[
				"Datagrid Column Properties"
			],
			"associations":["datagrid"],
			"summary":"These properties allow you to set properties of individual\ncolumns in a table when the 'style' property is set to 'table'.",
			"description":"These properties allow you to set properties of individual columns in a\ntable. The syntax you use resembles: set the dgColumnSortType [\"COLUMN\"]\nof group \"Data Grid\" to \"numeric\" where \"COLUMN\" is the name of the\ncolumn you are targeting."
		},{
			"id":"Datagrid-58",
			"name":"dgcolumnalignment",
			"display name":"dgColumnAlignment",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnAlignment[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnAlignment[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/set the alignment for a column.",
			"description":"Get/set the alignment for a column. Valid values are 'left', 'right' or\n'center'."
		},{
			"id":"Datagrid-59",
			"name":"dgcolumniseditable",
			"display name":"dgColumnIsEditable",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnIsEditable[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnIsEditable[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Toggle whether or not a column is editable by the user.",
			"description":"Toggle whether or not a column is editable by the user. Set to\ntrue/false."
		},{
			"id":"Datagrid-60",
			"name":"dgcolumnisvisible",
			"display name":"dgColumnIsVisible",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnIsVisible[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnIsVisible[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/set the visibility of the column.",
			"description":"Get/set the visibility of the column."
		},{
			"id":"Datagrid-61",
			"name":"dgcolumnisresizable",
			"display name":"dgColumnIsResizable",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnIsResizable[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnIsResizable[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/set whether or not a column is resizable.",
			"description":"Get/set whether or not a column is resizable."
		},{
			"id":"Datagrid-62",
			"name":"dgcolumnlabel",
			"display name":"dgColumnLabel",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnLabel[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnLabel[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/set the label used for the column.",
			"description":"Get/set the label used for the column. If the label is empty then the\ncolumn name is used."
		},{
			"id":"Datagrid-63",
			"name":"dgcolumnmaxwidth",
			"display name":"dgColumnMaxWidth",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnMaxWidth[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnMaxWidth[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/Set the maximum width that a column can be resized to.",
			"description":"Get/Set the maximum width that a column can be resized to."
		},{
			"id":"Datagrid-64",
			"name":"dgcolumnminwidth",
			"display name":"dgColumnMinWidth",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnMinWidth[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnMinWidth[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/Set the minimum width that a column can be resized to.",
			"description":"Get/Set the minimum width that a column can be resized to."
		},{
			"id":"Datagrid-65",
			"name":"dgcolumnname",
			"display name":"dgColumnName",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgColumnName[\"col1\"] of group \"Data Grid\" to pNewName"
			],
			"display syntax":[
				"set the dgColumnName[\"col1\"] of group \"Data Grid\" to pNewName"
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Set a new name for a column.",
			"description":"Set a new name for a column."
		},{
			"id":"Datagrid-66",
			"name":"dgcolumntemplate",
			"display name":"dgColumnTemplate",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnTemplate[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnTemplate[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get the control that is used to visually represent the column\nin the table.",
			"description":"Get the control that is used to visually represent the column in the\ntable. This control will be a control in the 'row template' group with\nthe same name as the column. If no matching control exists then a field\nis used."
		},{
			"id":"Datagrid-67",
			"name":"dgcolumntooltip",
			"display name":"dgColumnTooltip",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnTooltip[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnTooltip[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Set the tooltip that appears when the mouse is over the column\nheader.",
			"description":"Set the tooltip that appears when the mouse is over the column header."
		},{
			"id":"Datagrid-68",
			"name":"dgheadertemplate",
			"display name":"dgHeaderTemplate",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgHeaderTemplate[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgHeaderTemplate[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get the control that is used to visually represent the header\nfor a column.",
			"description":"Get the control that is used to visually represent the header for a\ncolumn. This control will be a control in the 'row template' group name\n\"COLUMN [Header]\". If no matching control exists then the deafult header\ncontrol is used."
		},{
			"id":"Datagrid-69",
			"name":"dgcolumnsortdirection",
			"display name":"dgColumnSortDirection",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnSortDirection[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnSortDirection[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/set the direction of the sort for the column.",
			"description":"Get/set the direction of the sort for the column. Valid values are\n'ascending' or 'descending'."
		},{
			"id":"Datagrid-70",
			"name":"dgcolumnsortiscasesensitive",
			"display name":"dgColumnSortIsCaseSensitive",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnSortIsCaseSensitive[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnSortIsCaseSensitive[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/set whether or not column sort is case sensitive.",
			"description":"Get/set whether or not column sort is case sensitive. Default value is\nfalse."
		},{
			"id":"Datagrid-71",
			"name":"dgcolumnsorttype",
			"display name":"dgColumnSortType",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnSortType[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnSortType[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/set the sort type of the column.",
			"description":"Get/set the sort type of the column to 'text', 'numeric', 'datetime' or\n'system datetime'."
		},{
			"id":"Datagrid-72",
			"name":"dgcolumnwidth",
			"display name":"dgColumnWidth",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgColumnWidth[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgColumnWidth[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/set the width of a column.",
			"description":"Get/set the width of a column."
		},{
			"id":"Datagrid-73",
			"name":"dgheaderalignment",
			"display name":"dgHeaderAlignment",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgHeaderAlignment[\"col1\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgHeaderAlignment[\"col1\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid column properties"],
			"summary":"Get/set the alignment for a column's header.",
			"description":"Get/set the alignment for a column's header."
		},{
			"id":"Datagrid-74",
			"name":"template_field_editor_properties",
			"display name":"Template Field Editor Properties",
			"library":"Datagrid",
			"type":"glossary",
			"syntax":[
				"Template Field Editor Properties"
			],
			"display syntax":[
				"Template Field Editor Properties"
			],
			"associations":["datagrid"],
			"summary":"Datagrid cells can be edited. These property configure that\neditor.",
			"description":"The template field editor properties are set using the\ndgTemplateFieldEditor custom property.\n\n\tset the dgTemplateFieldEditor[\"PROPERTY_NAME\"] \\\n\t\tof group \"Data Grid\" to SOME_VALUE"
		},{
			"id":"Datagrid-75",
			"name":"select_text",
			"display name":"select text",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgTemplateFieldEditor[\"select text\"] of group \"Data\nGrid\" to true"
			],
			"display syntax":[
				"set the dgTemplateFieldEditor[\"select text\"] of group \"Data"
			],
			"associations":["datagrid","template field editor properties"],
			"summary":"Set to true to select all text in the field editor.",
			"description":"Set to true to select all text in the field editor."
		},{
			"id":"Datagrid-76",
			"name":"text",
			"display name":"text",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgTemplateFieldEditor[\"text\"] of group \"Data Grid\" to\npText"
			],
			"display syntax":[
				"set the dgTemplateFieldEditor[\"text\"] of group \"Data Grid\" to"
			],
			"associations":["datagrid","template field editor properties"],
			"summary":"Set to a string that will be assigned to the text property of\nthe field editor.",
			"description":"Set to a string that will be assigned to the text property of the field\neditor."
		},{
			"id":"Datagrid-77",
			"name":"htmltext",
			"display name":"htmltext",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgTemplateFieldEditor[\"htmltext\"] of group \"Data Grid\"\nto \"<p>Hello World</p>\""
			],
			"display syntax":[
				"set the dgTemplateFieldEditor[\"htmltext\"] of group \"Data Grid\""
			],
			"associations":["datagrid","template field editor properties"],
			"summary":"Set to a string that will be assigned to the htmltext property\nof the field editor.",
			"description":"Set to a string that will be assigned to the htmltext property of the\nfield editor."
		},{
			"id":"Datagrid-78",
			"name":"rtftext",
			"display name":"rtftext",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgTemplateFieldEditor[\"rtftext\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgTemplateFieldEditor[\"rtftext\"] of group \"Data Grid\""
			],
			"associations":["datagrid","template field editor properties"],
			"summary":"Set to a string that will be assigned to the rtftext property\nof the field editor.",
			"description":"Set to a string that will be assigned to the rtftext property of the\nfield editor."
		},{
			"id":"Datagrid-79",
			"name":"unicodetext",
			"display name":"unicodetext",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgTemplateFieldEditor[\"unicodetext\"] of group \"Data\nGrid\""
			],
			"display syntax":[
				"put the dgTemplateFieldEditor[\"unicodetext\"] of group \"Data"
			],
			"associations":["datagrid","template field editor properties"],
			"summary":"Set to a string that will be assigned to the unicodetext\nproperty of the field editor.",
			"description":"Set to a string that will be assigned to the unicodetext property of the\nfield editor."
		},{
			"id":"Datagrid-80",
			"name":"utf8text",
			"display name":"utf8text",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgTemplateFieldEditor[\"utf8text\"] of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgTemplateFieldEditor[\"utf8text\"] of group \"Data Grid\""
			],
			"associations":["datagrid","template field editor properties"],
			"summary":"Set to a string that will be assigned to the unicodetext\nproperty of the field editor after being converted from UTF-8 to UTF16.",
			"description":"Set to a string that will be assigned to the unicodetext property of the\nfield editor after being converted from UTF-8 to UTF16."
		},{
			"id":"Datagrid-81",
			"name":"dgheader",
			"display name":"dgHeader",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgHeader of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgHeader of group \"Data Grid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the long id of the group that contains the controls for\nthe table header.",
			"description":"Returns the long id of the group that contains the controls for the\ntable header. Use this property in a mouseDown/mouseUp handler to\ndetermine if the user clicked on a the table header. If the dgHeader of\nthe target is not empty then ... (user clicked in table header)."
		},{
			"id":"Datagrid-82",
			"name":"dgheadercontrol",
			"display name":"dgHeaderControl",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgHeaderControl of group \"Data Grid\""
			],
			"display syntax":[
				"put the dgHeaderControl of group \"Data Grid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the long id of the group that contains the controls for\na column header.",
			"description":"Returns the long id of the group that contains the controls for a column\nheader. Use this property in a mouseDown/mouseUp handler to determine if\nthe user clicked on a column header. If the dgHeaderControl of the\ntarget is not empty then... (user clicked in a column header)."
		},{
			"id":"Datagrid-83",
			"name":"dgcontrol",
			"display name":"dgControl",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgControl of the target"
			],
			"display syntax":[
				"get the dgControl of the target"
			],
			"associations":["datagrid"],
			"summary":"Returns the long id of the data grid.",
			"description":"Returns the long id of the data grid. Useful in row/column template\nbehaviors when you need to get properties of the data grid."
		},{
			"id":"Datagrid-84",
			"name":"dgdata",
			"display name":"dgData",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgData of group \"DataGrid\" to <pDataArray>"
			],
			"display syntax":[
				"set the dgData of group \"DataGrid\" to <i>pDataArray</i>"
			],
			"associations":["datagrid"],
			"summary":"Get or set the data array that the data grid will display.",
			"examples":[{
				"script":"get the dgData of grp \"Data Grid\""
			}],
			"description":"Get or set the data array that the data grid will display. The first\ndimension of the array uses numeric keys and the value of each is an\narray. You can store anything you would like in each numeric key's\narray. For data grid tables the keys should match the column names in\norder for the data grid to correctly map the array value to the column\ncell. The following array would represent two records in the data grid:\n\n\tput \"Hi\" into theA[1][\"message\"]\n\tput \"Bye\" into theA[2][\"message\"]\n\tset the dgData of group \"DataGrid\" to theA"
		},{
			"id":"Datagrid-85",
			"name":"dgdatacontrolofindex",
			"display name":"dgDataControlOfIndex",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgDataControlOfIndex[pIndex] of group \"DataGrid\""
			],
			"display syntax":[
				"get the dgDataControlOfIndex[pIndex] of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the long id of the data control associated with an\nindex.",
			"description":"Returns the long id of the data control associated with an index.\nIf \"cache controls\" is not turned on then this property returns empty\nif the index has no control associated with it because it is offscreen.\n\n>*Important:* The <dgDataControlOfIndex> property is available only for\nDatagrids whose <style> property is set to 'form'.",
			"references":{
				"property":["style"]
			}
		},{
			"id":"Datagrid-86",
			"name":"dgdatacontrolofline",
			"display name":"dgDataControlOfLine",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgDataControlOfLine[pLine] of group \"DataGrid\""
			],
			"display syntax":[
				"get the dgDataControlOfLine[pLine] of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the long id of the data control associated with a\nline number.",
			"description":"Same as dgDataControlOfIndex but takes a line number as the parameter."
		},{
			"id":"Datagrid-87",
			"name":"dgdataofindex",
			"display name":"dgDataOfIndex",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgDataOfIndex[pIndex] of group \"DataGrid\"",
				"set the dgDataOfIndex[pIndex] of group \"DataGrid\" to <value>"
			],
			"display syntax":[
				"get the dgDataOfIndex[pIndex] of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Get or set the data associated with a particular index.",
			"examples":[{
				"script":"set the dgDataOfIndex[pIndex] of group \"DataGrid\" to pDataA"
			},{
				"script":"put the dgDataOfIndex[1] of group \"DataGrid\" into theMessageA\nput theMessageA[\"message\"] -- puts \"hi\""
			}],
			"description":"Get or set the data associated with a particular index. The value is\nthe array assigned to that index.\n\n>*Note:* Setting the data of an index will cause the data grid to\nrefresh the row associated with the index if it is visible on screen."
		},{
			"id":"Datagrid-88",
			"name":"dgdataofline",
			"display name":"dgDataOfLine",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgDataOfLine[pLine] of group \"DataGrid\" summary: Get or\nset the data associated with a particular line."
			],
			"display syntax":[
				"get the dgDataOfLine[pLine] of group \"DataGrid\" summary: Get or"
			],
			"associations":["datagrid"],
			"examples":[{
				"script":"set the dgDataOfLine [ pLine ] of group \"DataGrid\" to pDataA"
			},{
				"script":"put the dgDataOfLine[1] of group \"DataGrid\" into theMessageA\nput theMessageA[\"message\"] -- puts \"hi\""
			}],
			"description":"Get or set the data associated with a particular line. The value is\nthe array assigned to that line.\n\n>*Note:* Setting the data of a line will cause the data grid to refresh\nthe line if it is visible on screen."
		},{
			"id":"Datagrid-89",
			"name":"dgfocus",
			"display name":"dgFocus",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgFocus of group \"DataGrid\" to true"
			],
			"display syntax":[
				"set the dgFocus of group \"DataGrid\" to true"
			],
			"associations":["datagrid"],
			"summary":"Set to true to focus on a data grid.",
			"description":"Set to true to focus on a data grid."
		},{
			"id":"Datagrid-90",
			"name":"dgformattedheight",
			"display name":"dgFormattedHeight",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgFormattedHeight of group \"DataGrid\""
			],
			"display syntax":[
				"get the dgFormattedHeight of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the formatted height of the data in the data grid.",
			"description":"Returns the formatted height of the data in the data grid. The table\nheader is not included in the formatted height."
		},{
			"id":"Datagrid-91",
			"name":"dgformattedwidth",
			"display name":"dgFormattedWidth",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgFormattedWidth of group \"DataGrid\""
			],
			"display syntax":[
				"get the dgFormattedWidth of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the formatted width of the columns in a data grid.",
			"description":"Returns the formatted width of the columns in a data grid. This is only\nuseful in tables as forms don't scroll horizonally."
		},{
			"id":"Datagrid-92",
			"name":"dgnumberoflines",
			"display name":"dgNumberOfLines",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgNumberOfLines of group \"DataGrid\""
			],
			"display syntax":[
				"get the dgNumberOfLines of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the number of lines displayed in the data grid.",
			"description":"Returns the number of lines displayed in the data grid."
		},{
			"id":"Datagrid-93",
			"name":"dgnumberofrecords",
			"display name":"dgNumberOfRecords",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgNumberOfRecords of group \"DataGrid\" to 20"
			],
			"display syntax":[
				"set the dgNumberOfRecords of group \"DataGrid\" to 20"
			],
			"associations":["datagrid"],
			"summary":"For use with fetching data from a database cursor.",
			"description":"Getting the dgNumberOfRecords is the same as getting the\ndgNumberOfLines. Setting the dgNumberOfRecords has a special\nsignificance however. If you set the dgNumberOfRecords then you are\ntelling the data grid that you know how many total records there are and\nyou are going to supply the data for each record on an as-needed basis.\nThis is useful when you have data in a database cursor that you would\nlike to feed into the data grid. After setting this property the data\ngrid will send the GetDataForLine message to the data grid whenever it\nneeds to display data for a particular line. You can define this command\nin the data grid script or elsewhere in the hierarchy. The definition is\nas follows: command GetDataForLine pLine, @pDataA -- end GetDataForLine\nYou should fill pDataA with the appropriate data based on the line of\ndata being requested. pDataA should not have a numeric index. It is the\narray that would be assigned to one of the numeric indexes if you were\nassigning the dgData property."
		},{
			"id":"Datagrid-94",
			"name":"dgtext",
			"display name":"dgText",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgText[pIncludeColumnNames] | set the\ndgText[pIncludeColumnNames] of group \"DataGrid\" to 20"
			],
			"display syntax":[
				"get the dgText[pIncludeColumnNames] | set the"
			],
			"associations":["datagrid"],
			"summary":"The dgText property always reflects the same value as the\ndgData but in tab delimited form.",
			"description":"The data grid works with arrays behind the scenes but in the interest of\nmaking life easier for some folks there is a dgText property. The dgText\nproperty always reflects the same value as the dgData but in tab\ndelimited form. pText is assumed to be a collection of data where each\nrow is delimited by the return character and each item is delimited by a\ntab.\n\nYou can map each item of each line in pText to a particular key in\nan array (and thus a table column) by passing in true for\npFirstLineContainsHeaders. If true then the data grid will extract the\nfirst line of pText and match the values for existing internal key/column\nnames.\n\nThe default value for pFirstLineContainsHeaders is false.\n\nIf you set the dgText of a data grid table then all data will be imported\nand assigned to the appropriate column depending on the value of\npFirstLineContainsHeaders. Normally you should set this property to true\nand provide the header that maps each item of each line to a specific\ncolumn.\n\n>*Note:* that if pFirstLineContainsHeaders is true then the columns\n>must already exist in your data grid table in order to be displayed.\n>Setting pFirstLineContainsHeaders to true does not create the headers for you.\n\nIf pFirstLineContainsHeaders is false then the columns property of the data\ngrid is used for mapping. For Example, the first item of a line of pText\nwould be assigned to the column that appears on the first line in the\ncolumns property of the data grid. If line 1 of pText contains more\nitems than there are columns in the table then new columns are added.\nAny new columns are named \"Col 1\", \"Col 2\", etc.\n\nIf you set the dgText property of a data grid form then the data will be\nimported but it is up to you to modify your Row Template Behavior to\ndisplay the imported data correctly. If pFirstLineContainsHeaders is\nfalse then each item of each line in pText will be named \"Label X\"\n(where X is the item number) in the array that is passed to FillInData.\n\nWhen retrieving the dgText property, setting the pIncludeColumnNames to true\nwill cause the column names to be included in the first line."
		},{
			"id":"Datagrid-95",
			"name":"dghilitedindexes",
			"display name":"dgHilitedIndexes",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgHilitedIndexes of group \"DataGrid\" to pIndex"
			],
			"display syntax":[
				"set the dgHilitedIndexes of group \"DataGrid\" to pIndex"
			],
			"synonyms":["dghilitedindex"],
			"associations":["datagrid"],
			"summary":"Returns a comma delimited list of the indexes that are currently\nselected.",
			"description":"Returns a comma delimited list of the indexes that are currently\nselected."
		},{
			"id":"Datagrid-96",
			"name":"dghilitedlines",
			"display name":"dgHilitedLines",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgHilitedLines of group \"DataGrid\" to pLine"
			],
			"display syntax":[
				"set the dgHilitedLines of group \"DataGrid\" to pLine"
			],
			"synonyms":["dghilitedline"],
			"associations":["datagrid"],
			"summary":"Returns a comma delimited list of the line numbers that are currently\nselected.",
			"description":"Returns a comma delimited list of the line numbers that are currently\nselected."
		},{
			"id":"Datagrid-97",
			"name":"dghscroll",
			"display name":"dgHScroll",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgHScroll to of group \"DataGrid\" to pInteger"
			],
			"display syntax":[
				"set the dgHScroll to of group \"DataGrid\" to pInteger"
			],
			"associations":["datagrid"],
			"summary":"Get/set the horizontal scroll of the data grid.",
			"description":"Get/set the horizontal scroll of the data grid. This only applies to\ntables as forms do not scroll horizontally."
		},{
			"id":"Datagrid-98",
			"name":"dghscrollpercent",
			"display name":"dgHScrollPercent",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgHScrollPercent of group \"DataGrid\" to pPercent"
			],
			"display syntax":[
				"set the dgHScrollPercent of group \"DataGrid\" to pPercent"
			],
			"associations":["datagrid"],
			"summary":"Get/set the percentage of the horizontal scroll.",
			"description":"Get/set the percentage of the horizontal scroll. A number between 0 and\n1. This only applies to tables as forms do not scroll horizontally."
		},{
			"id":"Datagrid-99",
			"name":"dgindexes",
			"display name":"dgIndexes",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgIndexes of group \"DataGrid\""
			],
			"display syntax":[
				"get the dgIndexes of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the internal list of indexes in the order in which they\nappear in the data grid.",
			"description":"Returns the internal list of indexes in the order in which they appear\nin the data grid. Indexes are the numeric indices used when setting the\ndgData property."
		},{
			"id":"Datagrid-100",
			"name":"dgindexofline",
			"display name":"dgIndexOfLine",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgIndexOfLine[pLine] of group \"DataGrid\""
			],
			"display syntax":[
				"put the dgIndexOfLine[pLine] of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the index associated with the given line.",
			"description":"Returns the index associated with the given line."
		},{
			"id":"Datagrid-101",
			"name":"dgrectofindex",
			"display name":"dgRectOfIndex",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgRectOfIndex[pIndex] of group \"DataGrid\""
			],
			"display syntax":[
				"get the dgRectOfIndex[pIndex] of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Get/set the rect of the control associated with the given index",
			"description":"Returns the rect of the control connected with pIndex. Rect\nis relative to this group but takes into account the current vScroll.\nThis may not prove very useful if you don't have control caching on."
		},{
			"id":"Datagrid-102",
			"name":"dgrectofline",
			"display name":"dgRectOfLine",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgRectOfLine[pLine] of group \"DataGrid\""
			],
			"display syntax":[
				"get the dgRectOfLine[pLine] of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Get/set the rect of the control associated with the given line",
			"description":"Returns the rect of the control connected with pLine. Rect\nis relative to this group but takes into account the current vScroll.\nThis may not prove very useful if you don't have control caching on."
		},{
			"id":"Datagrid-103",
			"name":"dglineofindex",
			"display name":"dgLineOfIndex",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"put the dgLineOfIndex[pIndex] of group \"DataGrid\""
			],
			"display syntax":[
				"put the dgLineOfIndex[pIndex] of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the line associated with the given index.",
			"description":"Returns the line associated with the given index."
		},{
			"id":"Datagrid-104",
			"name":"dgvscroll",
			"display name":"dgVScroll",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgVScroll of group \"DataGrid\" to pInteger"
			],
			"display syntax":[
				"set the dgVScroll of group \"DataGrid\" to pInteger"
			],
			"associations":["datagrid"],
			"summary":"Get/set the vertical scroll of the data grid.",
			"description":"Get/set the vertical scroll of the data grid."
		},{
			"id":"Datagrid-105",
			"name":"dgvscrollpercent",
			"display name":"dgVScrollPercent",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgVScrollPercent of group \"DataGrid\" to pPercent"
			],
			"display syntax":[
				"set the dgVScrollPercent of group \"DataGrid\" to pPercent"
			],
			"associations":["datagrid"],
			"summary":"Get/set the percentage of the vertical scroll.",
			"description":"Get/set the percentage of the vertical scroll. A number between 0 and 1."
		},{
			"id":"Datagrid-106",
			"name":"dgvisiblelines",
			"display name":"dgVisibleLines",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgVisibleLines of group \"DataGrid\""
			],
			"display syntax":[
				"get the dgVisibleLines of group \"DataGrid\""
			],
			"associations":["datagrid"],
			"summary":"Returns the first and last line being displayed in the data\ngrid as a comma delimited list.",
			"description":"Returns the first and last line being displayed in the data grid as a\ncomma delimited list. Useful if you want to provide visual feedback as\nto which lines are being displayed."
		},{
			"id":"Datagrid-107",
			"name":"datagrid_commands",
			"display name":"Datagrid Commands",
			"library":"Datagrid",
			"type":"glossary",
			"syntax":[
				"Datagrid Commands"
			],
			"display syntax":[
				"Datagrid Commands"
			],
			"associations":["datagrid"],
			"summary":"Datagrid commands are issued via 'dispatch' or 'send'.",
			"description":"To issue a command to the datagrid you can use 'dispatch' or 'send'.\n'Dispatch' is preferred as it has the nice 'with' syntax for sending\nparameters. Using dispatch:\n\n\tput \"value\" into theArray[\"property\"]\n\tdispatch \"AddData\" to group \"DataGrid\" with theArray\n\nUsing send:\n\n\tput \"value\" into theArray[\"property\"]\n\tsend \"AddData theArray\" to group \"DataGrid\""
		},{
			"id":"Datagrid-108",
			"name":"adddata",
			"display name":"AddData",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"AddData\" to group \"DataGrid\" with pDataArray,pLine"
			],
			"display syntax":[
				"dispatch \"AddData\" to group \"DataGrid\" with pDataArray,pLine"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Use this command to add data to the data grid after you have\nalready populated it by setting the dgData or dgText.",
			"description":"pDataArray is an array of custom data to add to the data grid and pLine\nis the line number where it should be added. All data appearing at or\nafter pLine will be shifted down 1. You will not overwrite any data. If\npLine is empty then the data will be added to the end of the existing\ndata. If the data is successfully added then the index of the data will\nbe returned in the result, otherwise an error is returned."
		},{
			"id":"Datagrid-109",
			"name":"addline",
			"display name":"AddLine",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"AddLine\" to group \"DataGrid\" with pText, pColumns,\npLine"
			],
			"display syntax":[
				"dispatch \"AddLine\" to group \"DataGrid\" with pText, pColumns,"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Add tab delimited text to the data grid after you have already\npopulated it by setting the dgData or dgText.",
			"description":"Use this command to add tab delimited text to the data grid after you\nhave already populated it by setting the dgData or dgText. pText is tab\ndelimited text to add to the data grid. pColumns is a cr delimited list\nof column names that text items map to. pLine is the line number where\nit should be added. All data appearing at or after pLine will be shifted\ndown 1. You will not overwrite any data. If pColumns is empty then the\n\"columns\" property of the data grid is assumed. If pLine is empty then\nthe data will be added to the end of the existing data."
		},{
			"id":"Datagrid-110",
			"name":"deleteindex",
			"display name":"DeleteIndex",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"DeleteIndex\" to group \"DataGrid\" with pIndex"
			],
			"display syntax":[
				"dispatch \"DeleteIndex\" to group \"DataGrid\" with pIndex"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Deletes the specified indexes from the data grid.",
			"description":"Deletes the specified indexes from the data grid. pIndex is an\ninteger."
		},{
			"id":"Datagrid-111",
			"name":"deleteindexes",
			"display name":"DeleteIndexes",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"DeleteIndexes\" to group \"DataGrid\" with pIndexes"
			],
			"display syntax":[
				"dispatch \"DeleteIndexes\" to group \"DataGrid\" with pIndexes"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Deletes the specified indexes from the data grid.",
			"description":"Deletes the specified indexes from the data grid. pIndexes is a comma\ndelimited list of integers."
		},{
			"id":"Datagrid-112",
			"name":"deleteline",
			"display name":"DeleteLine",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"DeleteLine\" to group \"DataGrid\" with pLine"
			],
			"display syntax":[
				"dispatch \"DeleteLine\" to group \"DataGrid\" with pLine"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Deletes the specified lines from the data grid.",
			"description":"Deletes the specified line from the data grid. pLine is an\ninteger."
		},{
			"id":"Datagrid-113",
			"name":"deletelines",
			"display name":"DeleteLines",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"DeleteLine\" to group \"DataGrid\" with pLines"
			],
			"display syntax":[
				"dispatch \"DeleteLine\" to group \"DataGrid\" with pLines"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Deletes the specified lines from the data grid.",
			"description":"Deletes the specified lines from the data grid. pLines is a comma\ndelimited list of integers."
		},{
			"id":"Datagrid-114",
			"name":"editcell",
			"display name":"EditCell",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"EditCell\" to group \"DataGrid\" with pColumnName,\npLineNo"
			],
			"display syntax":[
				"dispatch \"EditCell\" to group \"DataGrid\" with pColumnName,"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Sends the EditValue message to the column control for column\npColumnName of line pLineNo.",
			"description":"Sends the EditValue message to the column control for column pColumnName\nof line pLineNo. The default behaviors for columns handle the EditValue\nmessage and open the cell for editing by calling EditFieldText. Can only\nbe used with tables."
		},{
			"id":"Datagrid-115",
			"name":"editcellofindex",
			"display name":"EditCellOfIndex",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"EditCellOfIndex\" to group \"DataGrid\" with pColumnName,\npIndex"
			],
			"display syntax":[
				"dispatch \"EditCellOfIndex\" to group \"DataGrid\" with pColumnName,"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Same as EditCell but uses an index rather than a line number to\nlocate the line to edit.",
			"description":"Same as EditCell but uses an index rather than a line number to locate\nthe line to edit."
		},{
			"id":"Datagrid-116",
			"name":"editfieldtext",
			"display name":"EditFieldText",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"EditFieldText\" to group \"DataGrid\" with pField,\npIndex, pKey"
			],
			"display syntax":[
				"dispatch \"EditFieldText\" to group \"DataGrid\" with pField,"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Creates an editable field for editing the contents of pField.",
			"description":"This command will dynamically create an editable field for editing the\ncontents of pField (pass in the long id of a field for pField). Calling\nEditFieldText will trigger additional messages related to field editing.\nScenario 1: Pass in one parameter If you just pass in pField and leave\npIndex and pKey empty then the data grid behaves as follows:\n\n1. Creates field editor\n2. Assign text of pField to field editor\n3. Sends preOpenFieldEditor pFieldEditor to pField.\n\npFieldEditor is the long id of the field editor created in step 1.\nWhen editing stops (focus leaves\nfield, user presses escape key, etc.) the message DeleteFieldEditor is\nsent to the data grid. This in turn sends CloseFieldEditor pFieldEditor\nto pField if the user changed the content or ExitFieldEditor\npFieldEditor if no change was made. You can use these messages to save\nany changes the user made in pFieldEditor. Scenario 2: Pass in all three\nparameters If you pass in all three parameters (pField, pIndex, pKey)\nthen the data grid will automatically save any changes made while\nediting. The new value will be assigned to the key pKey for index pIndex\nin the dgData array of the data grid. In this scenarios CloseFieldEditor\npFieldEditor and ExitFieldEditor pFieldEditor are still sent. The\ndifference is that after CloseFieldEditor is sent to pField the contents\nof pFieldEditor are saved in the dgData. If for any reason you do not\nwant the data to be saved then you can return \"cancel\" from\nCloseFieldEditor. Note: If the user presses the tab key while editing\nand the autotab property of pField is true then the message\nOpenNextFieldEditor pDirection is sent to pField. If you don't handle\nthis message and the data grid is a table then the data grid\nautomatically opens the next cell for editing. For data grid forms you\ncan handle this message in order to open another field for editing. You\ncould call EditKeyOfIndex for Example. Note 2: The default behavior for\n\npFieldEditor is located in button \"Field Editor\" of stack\n\"revDataGridLibrary\". If you want to override this behavior then you can\nassign the behavior of pFieldEditor to another button in the\npreOpenFieldEditor message."
		},{
			"id":"Datagrid-117",
			"name":"editkey",
			"display name":"EditKey",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"EditKey\" to group \"DataGrid\" with pKey, pLineNo"
			],
			"display syntax":[
				"dispatch \"EditKey\" to group \"DataGrid\" with pKey, pLineNo"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Sends the EditValue pKey message to the row control for line\npLineNo.",
			"description":"Sends the EditValue pKey message to the row control for line pLineNo.\nHandle the EditValue message in your data grid form row behavior in\norder to open a field in the row for editing. See EditFieldText."
		},{
			"id":"Datagrid-118",
			"name":"editkeyofindex",
			"display name":"EditKeyOfIndex",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"EditKeyOfIndex\" to group \"DataGrid\" with pKey, pIndex"
			],
			"display syntax":[
				"dispatch \"EditKeyOfIndex\" to group \"DataGrid\" with pKey, pIndex"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Same as EditKey but uses an index rather than a line number to\nlocated the line to edit.",
			"description":"Same as EditKey but uses an index rather than a line number to located\nthe line to edit."
		},{
			"id":"Datagrid-119",
			"name":"findindex",
			"display name":"FindIndex",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"FindIndex\" to group \"DataGrid\" with pKey,\npSearchString"
			],
			"display syntax":[
				"dispatch \"FindIndex\" to group \"DataGrid\" with pKey,"
			],
			"synonyms":["findline"],
			"associations":["datagrid","datagrid commands"],
			"summary":"Same as EditKey but uses an index rather than a line number to\nlocated the line to edit.",
			"description":"Search for data in pKey that matches pSearchString. pKey is one of the\ncustom defined keys you defined for your data. pSearchingString is the\nvalue to look for in that key. You can pass multiple pKey=pSearchString\ncombinations to match multiple criteria. -- Find the index where\n\"message\" is \"hi\" dispatch \"FindIndex\" to group \"DataGrid\" with\n\"message\", \"hi\" put the result into theIndex Note that pKey can also be\nan array if you want to use array-valued array indexing to locate\npSearchingString. FindLine returns the found line number vs the found\nindex number."
		},{
			"id":"Datagrid-120",
			"name":"refreshindex",
			"display name":"RefreshIndex",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"RefreshIndex\" to group \"DataGrid\" with pIndexes"
			],
			"display syntax":[
				"dispatch \"RefreshIndex\" to group \"DataGrid\" with pIndexes"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Redraws row associated with pIndexes using latest data.",
			"description":"Redraws row associated with pIndexes using latest data. Use this\ncommand in conjunction with\n\nSetDataOfIndex. pIndexes can be a comma delimited list of indexes."
		},{
			"id":"Datagrid-121",
			"name":"refreshline",
			"display name":"RefreshLine",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"RefreshLine\" to group \"DataGrid\" with pLines"
			],
			"display syntax":[
				"dispatch \"RefreshLine\" to group \"DataGrid\" with pLines"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Redraws row using latest data.",
			"description":"Redraws row using latest data. Use this command in conjunction with\nSetDataOfLine. pLines can be a comma delimited list of lines."
		},{
			"id":"Datagrid-122",
			"name":"scrollindexintoview",
			"display name":"ScrollIndexIntoView",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"ScrollIndexIntoView\" to group \"DataGrid\" with pIndex"
			],
			"display syntax":[
				"dispatch \"ScrollIndexIntoView\" to group \"DataGrid\" with pIndex"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Scrolls the data grid so that the line associated with pIndex\nin the internal data array is in view.",
			"description":"Scrolls the data grid so that the line associated with pIndex in the\ninternal data array is in view."
		},{
			"id":"Datagrid-123",
			"name":"scrolllineintoview",
			"display name":"ScrollLineIntoView",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"ScrollLineIntoView\" to group \"DataGrid\" with pLine"
			],
			"display syntax":[
				"dispatch \"ScrollLineIntoView\" to group \"DataGrid\" with pLine"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Scrolls the data grid so that pLine is in view.",
			"description":"Scrolls the data grid so that pLine is in view."
		},{
			"id":"Datagrid-124",
			"name":"selectall",
			"display name":"SelectAll",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"SelectAll\" to group \"DataGrid\""
			],
			"display syntax":[
				"dispatch \"SelectAll\" to group \"DataGrid\""
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Selects all lines in the data grid.",
			"description":"Selects all lines in the data grid."
		},{
			"id":"Datagrid-125",
			"name":"setdataofindex",
			"display name":"SetDataOfIndex",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"SetDataOfIndex\" to group \"DataGrid\" with pIndex, pKey,\npValue"
			],
			"display syntax":[
				"dispatch \"SetDataOfIndex\" to group \"DataGrid\" with pIndex, pKey,"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Updates the key pIndex in the internal data array.",
			"description":"Updates the key pIndex in the internal data array. If pKey is empty then\npValue should be an array. pValue will be assigned to key pIndex in the\ninternal data array. If pKey is not empty then pValue will be assigned\nto key pKey of key pIndex in the internal data array. The data grid\ndisplay will not be updated to reflect the new values. To update the\ndisplay call RefreshIndex. Use dgDataOfIndex if you want to\nautomatically refresh the data grid when you update the data."
		},{
			"id":"Datagrid-126",
			"name":"setdataofline",
			"display name":"SetDataOfLine",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"SetDataOfLine\" to group \"DataGrid\" with pLine, pKey,\npValue"
			],
			"display syntax":[
				"dispatch \"SetDataOfLine\" to group \"DataGrid\" with pLine, pKey,"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Updates the internal array of line pLine in the data grid.",
			"description":"Updates the internal array of line pLine in the data grid. See notes for\nSetDataOfIndex."
		},{
			"id":"Datagrid-127",
			"name":"sortbycolumn",
			"display name":"SortByColumn",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"SortByColumn\" to group \"DataGrid\" with pColumn"
			],
			"display syntax":[
				"dispatch \"SortByColumn\" to group \"DataGrid\" with pColumn"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Pass in a column to sort by.",
			"description":"Pass in a column to sort by. The current sort properties of the column\nwill be used to perform the sort."
		},{
			"id":"Datagrid-128",
			"name":"sortdatabykey",
			"display name":"SortDataByKey",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"SortDataByKey\" to group \"DataGrid\" with pArrayKey,\npSortType, pDirection, pCaseSensitive"
			],
			"display syntax":[
				"dispatch \"SortDataByKey\" to group \"DataGrid\" with pArrayKey,"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"SortDataByKey is the underlying command that all column sorts\ncall.",
			"description":"SortDataByKey is the underlying command that all column sorts call. It\ncan be used to sort data grid forms. pArrayKey is one the keys you\ncreated when you assigned set dgData property. If you used the dgText\nproperty then the key will be \"Label 1\" or \"Label 2\", etc. pSortType,\npDirection and pCaseSensitive all reflect the equivalent parameters for\nthe built-in 'sort container' command in Revolution. pSortType is\n\"text\", \"numeric', \"dateTime\" or \"international\". pDirection is\n\"ascending\" or \"descending\". pCaseSensitive is true/false."
		},{
			"id":"Datagrid-129",
			"name":"refreshlist",
			"display name":"RefreshList",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"RefreshList\" to group \"DataGrid\""
			],
			"display syntax":[
				"dispatch \"RefreshList\" to group \"DataGrid\""
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Redraws the data displayed in the data grid.",
			"description":"Redraws the data displayed in the data grid."
		},{
			"id":"Datagrid-130",
			"name":"resetcontrol",
			"display name":"ResetControl",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"ResetControl\" to group \"DataGrid\""
			],
			"display syntax":[
				"dispatch \"ResetControl\" to group \"DataGrid\""
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Resets the control by clearing out any data.",
			"description":"Resets the control by clearing out any data."
		},{
			"id":"Datagrid-131",
			"name":"resetlist",
			"display name":"ResetList",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"ResetList\" to group \"DataGrid\""
			],
			"display syntax":[
				"dispatch \"ResetList\" to group \"DataGrid\""
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Redraws the data grid data after having copied in fresh copies\nof any templates.",
			"description":"Redraws the data grid data after having copied in fresh copies of any\ntemplates."
		},{
			"id":"Datagrid-132",
			"name":"resizetofit",
			"display name":"ResizeToFit",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"ResizeToFit\" to group \"DataGrid\""
			],
			"display syntax":[
				"dispatch \"ResizeToFit\" to group \"DataGrid\""
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Used internally when the rect of the data grid changes.",
			"description":"Used internally when the rect of the data grid changes. Normally you\nwill not need to call this handler as setting the rect of the data grid\nwill trigger it."
		},{
			"id":"Datagrid-133",
			"name":"columncontrolofindex",
			"display name":"ColumnControlOfIndex",
			"library":"Datagrid",
			"type":"function",
			"syntax":[
				"put ColumnControlOfIndex(pColumnName, pIndex)"
			],
			"display syntax":[
				"put ColumnControlOfIndex(pColumnName, pIndex)"
			],
			"associations":["datagrid"],
			"summary":"Returns the control for the column of index pIndex in the Data\nGrid.",
			"description":"DATA GRID TABLES ONLY! Returns the control for the column of index\npIndex in the Data Grid. If \"cache\" controls\" is not true then this may\nreturn empty if the row the index is displayed in is currently\noffscreen."
		},{
			"id":"Datagrid-134",
			"name":"getdataofindex",
			"display name":"GetDataOfIndex",
			"library":"Datagrid",
			"type":"function",
			"syntax":[
				"put GetDataOfIndex(pIndex, pKey)"
			],
			"display syntax":[
				"put GetDataOfIndex(pIndex, pKey)"
			],
			"associations":["datagrid"],
			"summary":"Retrieves the internal array for key pIndex of the internal\narray in the data grid.",
			"description":"Retrieves the internal array for key pIndex of the internal array in the\ndata grid. If pKey is empty then the array associated with key pIndex\nin the internal data array will be returned. If pKey is not empty\n\nthen the value of that key for key pIndex of the internal data array\nwill be returned."
		},{
			"id":"Datagrid-135",
			"name":"getdataofline",
			"display name":"GetDataOfLine",
			"library":"Datagrid",
			"type":"function",
			"syntax":[
				"put GetDataOfLine(pLine, pKey)"
			],
			"display syntax":[
				"put GetDataOfLine(pLine, pKey)"
			],
			"associations":["datagrid"],
			"summary":"Retrieves the internal array associated with line pLine in\nthe data grid.",
			"description":"Retrieves the internal array associated with line pLine in the data\ngrid. See notes for GetDataOfIndex."
		},{
			"id":"Datagrid-136",
			"name":"selectionchanged",
			"display name":"selectionChanged",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on selectionChanged pHilitedIndexes, pPreviouslyHilitedIndexes"
			],
			"display syntax":[
				"on selectionChanged pHilitedIndexes, pPreviouslyHilitedIndexes"
			],
			"associations":["datagrid"],
			"summary":"Sent whenever the user changes the selection through some sort\nof user interaction.",
			"examples":[{
				"script":"on selectionChanged pHilitedIndex, pPrevHilitedIndex\n\tput the dgDataOfIndex [ pHilitedIndex ] of me into theSelDataA\n\tuiViewRecordOfID theSelDataA[\"id\"]\nend selectionChanged"
			}],
			"description":"Sent whenever the user changes the selection through some sort of user\ninteraction. Handle this message in order to update your UI when the\nuser makes a selection."
		},{
			"id":"Datagrid-137",
			"name":"editvalue",
			"display name":"EditValue",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on EditValue pKey"
			],
			"display syntax":[
				"on EditValue pKey"
			],
			"associations":["datagrid"],
			"summary":"The EditValue message is sent to a table column control when\nEditCell or EditCellOfIndex is called.",
			"description":"The EditValue message is sent to a table column control when EditCell or\nEditCellOfIndex is called. In this scenario there is no pKey parameter\nsince the key is the column associated with the column control\n\nthe message was sent to. Tip: use the dgColumn property of a column\ntemplate to get the name of a column in the column control. The\nEditValue message is sent to a row when EditKey or EditKeyOfIndex is\ncalled. In this case the first parameter is the name of the key in\ndgData that should be edited. Normally you will call EditFieldText from\nwithin the EditValue message in order to open a field editor for\nchanging the contents."
		},{
			"id":"Datagrid-138",
			"name":"datagrid_template_custom_properties_%26_messages",
			"display name":"Datagrid Template Custom Properties & Messages",
			"library":"Datagrid",
			"type":"glossary",
			"syntax":[
				"Datagrid Template Custom Properties & Messages"
			],
			"display syntax":[
				"Datagrid Template Custom Properties & Messages"
			],
			"associations":["datagrid"],
			"summary":"The properties and messages associated with the Data Grid\ntemplate",
			"description":"When you are coding behaviors for custom templates the following\nproperties and messages are applicable."
		},{
			"id":"Datagrid-139",
			"name":"fillindata",
			"display name":"FillInData",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on FillInData pData"
			],
			"display syntax":[
				"on FillInData pData"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"The EditValue message is sent to a table column control when\nEditCell or EditCellOfIndex is called.",
			"examples":[{
				"script":"# Datagrid row behavior\non FillInData pDataA\n  ## Assign FirstName value to the \"FirstName\" field of this row template\n  set the text of field \"FirstName\" of me to pDataA[\"FirstName\"]\nend FillInData"
			},{
				"script":"# Data Grid table\non FillInData pData\n  ## Assign Column value to field 1 of this column template\n  set the text of field 1 of me to pData\nend FillInData"
			}],
			"description":"The <FillInData> message is where you move data for a row or column into\nthe controls for that row or column. Normally you will just assign data\nto controls in the template. You most likely will not resize any of the\ncontrols at this point. If your data grid is of type \"form\" then pData\nwill be an array holding the row values. If your data grid is of type\n\"table\" then pData is the value for the column that is being populated."
		},{
			"id":"Datagrid-140",
			"name":"layoutcontrol",
			"display name":"LayoutControl",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on LayoutControl pControlRect, pWorkingRect"
			],
			"display syntax":[
				"on LayoutControl pControlRect, pWorkingRect"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"The EditValue message is sent to a table column control when\nEditCell or EditCellOfIndex is called.",
			"examples":[{
				"script":"on LayoutControl pControlRect, pWorkingRect\n\tset the rect of field \"FirstName\" to pControlRect\nend LayoutControl"
			}],
			"description":"LayoutControl is sent to your custom template when it is time to\nposition all of the controls. pControlRect is the rectangle that the\ndata grid has resized your control to. This is useful for knowing the\nleft (item 1 of pControlRect), top (item 2 of pControlRect), right (item\n3 of pControlRect) and bottom (item 4 of pControlRect) bounds you can\nposition controls at. pWorkingRect is the rectangle within which you can safely\nposition your controls without overlapping with any edit mode controls. Note\nthat if you have a data grid form that does not have fixed height set to true\nthen you can ignore the bottom (item 4 of pControlRect) and make your control as\ntall as you need."
		},{
			"id":"Datagrid-141",
			"name":"dgline",
			"display name":"dgLine",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgLine of this control"
			],
			"display syntax":[
				"get the dgLine of this control"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"The line (or row) number that is being displayed in the copy of\nthe template.",
			"description":"The line (or row) number that is being displayed in the copy of the\ntemplate."
		},{
			"id":"Datagrid-142",
			"name":"dgindex",
			"display name":"dgIndex",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgIndex of this control"
			],
			"display syntax":[
				"get the dgIndex of this control"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"The index used to uniquely identify the record being displayed\nin the copy of the template.",
			"description":"The index used to uniquely identify the record being displayed in the\ncopy of the template."
		},{
			"id":"Datagrid-143",
			"name":"dgcolumn",
			"display name":"dgColumn",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgColumn of me"
			],
			"display syntax":[
				"get the dgColumn of me"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Get the name of the column the instance of the template is\nAssociations with.",
			"description":"When working with a data grid table you can use the dgColumn of me in a\ncustom template behavior to get the name of the column the instance of\nthe template is associated with. To use this property in\n\nother scripts you use the target or the mousecontrol as the target as\nwell."
		},{
			"id":"Datagrid-144",
			"name":"dgcolumnnumber",
			"display name":"dgColumnNumber",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"get the dgColumnNumber of me"
			],
			"display syntax":[
				"get the dgColumnNumber of me"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Get the column number relative to all visible columns.",
			"description":"When working with a data grid table you can use the dgColumnNumber of me\nin a custom template behavior to get the column number relative to all\nvisible columns. To use this property in other scripts you use the\ntarget or the mousecontrol as the target as well."
		},{
			"id":"Datagrid-145",
			"name":"dgdatacontrol",
			"display name":"dgDataControl",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"getProp dgDataControl"
			],
			"display syntax":[
				"getProp dgDataControl"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"This is a custom property defined in the behavior script for\nyour template",
			"description":"Your template should 'return the long id of me' in this getprop handler.\nThis helps the data grid identify your row template.\n\n>*Important:* This is required for the Datagrid to work properly"
		},{
			"id":"Datagrid-146",
			"name":"dghilite",
			"display name":"dgHilite",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"setProp dgHilite {true | false}"
			],
			"display syntax":[
				"setProp dgHilite {true | false}"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"This is a custom property are defined in the behavior script\nfor your template",
			"description":"This property is set by the data grid to set the highlighted state of\nthe row or column control. If the value is \"true\" then the control should\nbe highlighted. If \"false\" then it should not be."
		},{
			"id":"Datagrid-147",
			"name":"dgeditmode",
			"display name":"dgEditMode",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgEditMode of group \"DataGrid\" to {true | false}"
			],
			"display syntax":[
				"set the dgEditMode of group \"DataGrid\" to {true | false}"
			],
			"associations":["datagrid"],
			"summary":"Take the data grid into or out of edit mode.",
			"description":"Use the <dgEditMode> property to put the data grid into or take it out of edit\nmode. When in edit mode, the data grid displays an action control of the left\nhand side of each row (as defined by <edit mode action control>) and a reorder\ncontrol on the right. The appearance and behavior of these controls can be\ncustomized.\n\nOnly data grids form type data grids with <fixed row height> can be put into\nedit mode.",
			"references":{
				"property":["edit mode action control","edit mode action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-148",
			"name":"animate_actions",
			"display name":"animate actions",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgProp[\"animate actions\"] of group \"Data Grid\" to {true | false}"
			],
			"display syntax":[
				"set the dgProp[\"animate actions\"] of group \"Data Grid\" to {true | false}"
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Turn animations on or off for the data grid.",
			"description":"When <animate actions> is set to true, the data grid will animate the deleting\nof rows, entering and exiting edit mode, row reordering, showing and hiding of\naction controls and row drag and swipe actions.\n\nTo prevent these actions from being animated, set <animate actions> to false."
		},{
			"id":"Datagrid-149",
			"name":"enable_swipe",
			"display name":"enable swipe",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgProp[\"enable swipe\"] of group \"Data Grid\" to {true | false}"
			],
			"display syntax":[
				"set the dgProp[\"enable swipe\"] of group \"Data Grid\" to {true | false}"
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Turn drag and swipe actions on or off for the data grid.",
			"description":"When <enable swipe> is set to true, users can drag and swipe rows of form style\ndata grids left and right, gradually revealing controls at either side of the\nrow. The default appearance of the revealed controls and the behavior of the\nswipe actions can be customized.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedRight","","RowLeftSwipeControlClicked","","RowRightSwipeControlClicked","","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-150",
			"name":"edit_mode_action_control",
			"display name":"edit mode action control",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgProp[\"edit mode action control\"] of group \"Data Grid\" to\nthe long id of <control>"
			],
			"display syntax":[
				"set the dgProp[\"edit mode action control\"] of group \"Data Grid\" to"
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set the action control to display when the data grid is in edit mode.",
			"description":"Use <edit mode action control> to specify the action control to display when the\ndata grid is in edit mode. This defaults to a red delete button. Set to empty to\nprevent the action control from being displayed.",
			"references":{
				"property":["dgEditMode","edit mode action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-151",
			"name":"edit_mode_action_select_control",
			"display name":"edit mode action select control",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgProp[\"edit mode action select control\"] of group \"Data Grid\"\nto the long id of <control>"
			],
			"display syntax":[
				"set the dgProp[\"edit mode action select control\"] of group \"Data Grid\""
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set the action select control to display when the data grid is in edit\nmode.",
			"description":"Use <edit mode action select control> to specify the action select control to\ndisplay when the data grid is in edit mode. This defaults to a red stop icon.\nSet to empty to prevent the action select control from being displayed.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-152",
			"name":"edit_mode_reorder_control",
			"display name":"edit mode reorder control",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgProp[\"edit mode reorder control\"] of group \"Data Grid\" to\nthe long id of <control>"
			],
			"display syntax":[
				"set the dgProp[\"edit mode reorder control\"] of group \"Data Grid\" to"
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set the reorder control to display when the data grid is in edit mode.",
			"description":"Use <edit mode reorder control> to specify the reorder control to display when\nthe data grid is in edit mode. This defaults to a grey reorder icon. Set to\nempty to prevent the reorder control from being displayed, turning dynamic\nreordering off for the data grid.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode action select control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-153",
			"name":"left_swipe_control",
			"display name":"left swipe control",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgProp[\"left swipe control\"] of group \"Data Grid\" to the long\nid of <control>"
			],
			"display syntax":[
				"set the dgProp[\"left swipe control\"] of group \"Data Grid\" to the long"
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set the control to display when a data grid row is dragged to the right.",
			"description":"Use <left swipe control> to specify the control to display when when a data grid\nrow is dragged to the right. This defaults to a trash icon on a red background.\nSet to empty to prevent drags and swipes to the right.",
			"references":{
				"property":["enable swipe","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedRight","RowSwipedLeft","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowLeftSwipeControlHidden","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-154",
			"name":"right_swipe_control",
			"display name":"right swipe control",
			"library":"Datagrid",
			"type":"property",
			"syntax":[
				"set the dgProp[\"right swipe control\"] of group \"Data Grid\" to the long\nid of <control>"
			],
			"display syntax":[
				"set the dgProp[\"right swipe control\"] of group \"Data Grid\" to the long"
			],
			"associations":["datagrid","datagrid general properties"],
			"summary":"Set the control to display when a data grid row is dragged to the left.",
			"description":"Use <right swipe control> to specify the control to display when when a data\ngrid row is dragged to the left. This defaults to a trash icon on a red\nbackground. Set to empty to prevent drags and swipes to the left.",
			"references":{
				"property":["enable swipe","left swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedRight","RowSwipedLeft","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowLeftSwipeControlHidden","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-155",
			"name":"editmodeshowactioncontrolforindex",
			"display name":"EditModeShowActionControlForIndex",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"EditModeShowActionControlForIndex\" to group \"DataGrid\" with\n<row index>"
			],
			"display syntax":[
				"dispatch \"EditModeShowActionControlForIndex\" to group \"DataGrid\" with"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Display the action control for the data grid row with the given index.",
			"description":"Display the action control for the data grid row with the given index. The data\ngrid must be in edit mode for the action control to be displayed.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode action select control","edit mode reorder control"],
				"command":["EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-156",
			"name":"editmodehideactioncontrol",
			"display name":"EditModeHideActionControl",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"EditModeHideActionControl\" to group \"DataGrid\" with {true | false}"
			],
			"display syntax":[
				"dispatch \"EditModeHideActionControl\" to group \"DataGrid\" with {true | false}"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Hide any visible data grid action control.",
			"description":"Hide any visible data grid action control. Passing true as the first parameter\nwill prevent the hide from being animated. This is useful if you wish to hide\nthe row instantly, for example when deleting, but don't want to turn off\nanimations globally.",
			"references":{
				"property":["dgEditMode","edit mode action control","action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex"],
				"message":["","EditModeActionControlClicked","","GetEditModeActionControl","","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-157",
			"name":"rowswipeshowcontrolforindexandside",
			"display name":"RowSwipeShowControlForIndexAndSide",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"RowSwipeShowControlForIndexAndSide\" to group \"DataGrid\" with\n<row index>, {\"left\" | \"right\"}"
			],
			"display syntax":[
				"dispatch \"RowSwipeShowControlForIndexAndSide\" to group \"DataGrid\" with"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Display the data grid swipe control on the given side of the row with\nthe given index.",
			"description":"Display the data grid swipe control on the given side of the row with the given\nindex. <enable swipe> must be true for swipe controls to be displayed.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"message":["RowSwipeHideControl","RowSwipedRight","RowSwipedLeft","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowLeftSwipeControlHidden","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-158",
			"name":"rowswipehidecontrol",
			"display name":"RowSwipeHideControl",
			"library":"Datagrid",
			"type":"command",
			"syntax":[
				"dispatch \"RowSwipeHideControl\" to group \"DataGrid\" with {true | false}"
			],
			"display syntax":[
				"dispatch \"RowSwipeHideControl\" to group \"DataGrid\" with {true | false}"
			],
			"associations":["datagrid","datagrid commands"],
			"summary":"Hide any visible data grid swipe control.",
			"description":"Hide any visible data grid swipe control. Passing true as the first parameter\nwill prevent the hide from being animated. This is useful if you wish to hide\nthe row instantly, for example when deleting, but don't want to turn off\nanimations globally.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipedRight","RowSwipedLeft","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowLeftSwipeControlHidden","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-159",
			"name":"editmodeactionselectcontrolclicked",
			"display name":"EditModeActionSelectControlClicked",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on EditModeActionSelectControlClicked pTarget"
			],
			"display syntax":[
				"on EditModeActionSelectControlClicked pTarget"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Sent when a user clicks on a data grid edit mode action select control.",
			"parameters":[{
				"name":"pTarget",
				"type":"",
				"refparam":"false",
				"description":"The target of the click. Use this to determine where in the action\nselect control the user clicked."
			}],
			"examples":[{
				"script":"on EditModeActionSelectControlClicked pTarget\n   switch the name of the target\n      case \"show\"\n         dispatch \"EditModeShowActionControlForIndex\" to group \"DataGrid\" with the dgIndex of me\n         break\n      default\n         set the dgEditMode of group \"DataGrid\" to false\n         break\n   end switch\nend EditModeActionSelectControlClicked"
			}],
			"description":"<EditModeActionSelectControlClicked> is sent to your data grid's custom row\ntemplate when the user clicks on a row's action select control. Handle\n<EditModeActionSelectControlClicked> if you wish to perform a custom behavior.\n\nThe default behavior is to show the edit mode action control.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-160",
			"name":"editmodeactioncontrolclicked",
			"display name":"EditModeActionControlClicked",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on EditModeActionControlClicked pTarget"
			],
			"display syntax":[
				"on EditModeActionControlClicked pTarget"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Sent when a user clicks on a data grid edit mode action control.",
			"parameters":[{
				"name":"pTarget",
				"type":"",
				"refparam":"false",
				"description":"The target of the click. Use this to determine where in the action\ncontrol the user clicked."
			}],
			"examples":[{
				"script":"on EditModeActionControlClicked pTarget\n   answer \"Confirm delete\" with \"Yes\" and \"No\"\n   if it is \"Yes\" then\n      dispatch \"DeleteIndex\" to group \"DataGrid\" with the dgIndex of me\n   else\n      dispatch \"EditModeHideActionControl\" to group \"DataGrid\" with the dgIndex of me.\n   end if\nend EditModeActionControlClicked\n\non EditModeActionControlClicked pTarget\n   switch the name of the target\n      case \"show\"\n         dispatch \"DeleteIndex\" to group \"DataGrid\" with the dgIndex of me\n         break\n      case \"archive\"\n         dispatch \"EditModeHideActionControl\" to group \"DataGrid\"\n         break\n   end switch\nend EditModeActionControlClicked"
			}],
			"description":"<EditModeActionControlClicked> is sent to your data grid's custom row template\nwhen the user clicks on a row's action control. Handle\n<EditModeActionControlClicked> if you wish to perform a custom behavior.\n\nThe default behavior is to delete the current row.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-161",
			"name":"editmodeactioncontrolhidden",
			"display name":"EditModeActionControlHidden",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on EditModeActionControlHidden"
			],
			"display syntax":[
				"on EditModeActionControlHidden"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Sent when the datagrid's edit mode action control is hidden.",
			"description":"<EditModeActionControlHidden> is sent to your data grid's custom row template\nwhen an action control is visible and the user clicks on the data grid,\nresulting in the action control being hidden. Handle\n<EditModeActionControlHidden> to perform a custom action on hide.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","GetEditModeActionControl","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-162",
			"name":"rowswipedright",
			"display name":"RowSwipedRight",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on RowSwipedRight"
			],
			"display syntax":[
				"on RowSwipedRight"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Sent when the user swipes a data grid row right.",
			"examples":[{
				"script":"on RowSwipedRight\n   dispatch \"DeleteIndex\" to group \"DataGrid\" with the dgIndex of me\nend RowSwipedRight"
			}],
			"description":"<RowSwipedRight> is sent to your data grid's custom row template when the user\nswipes a row of the data grid right. Handle <RowSwipedRight> if you want to\nperform a custom action on a right swipe.\n\nThe default action is to show the left swipe control.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedLeft","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowLeftSwipeControlHidden","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-163",
			"name":"rowswipedleft",
			"display name":"RowSwipedLeft",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on RowSwipedLeft"
			],
			"display syntax":[
				"on RowSwipedLeft"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Sent when the user swipes a data grid row left.",
			"examples":[{
				"script":"on RowSwipedLeft\n   dispatch \"DeleteIndex\" to group \"DataGrid\" with the dgIndex of me\nend RowSwipedLeft"
			}],
			"description":"<RowSwipedLeft> is sent to your data grid's custom row template when the user\nswipes a row of the data grid left. Handle <RowSwipedLeft> if you want to\nperform a custom action on a left swipe.\n\nThe default action is to show the right swipe control.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedRight","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowLeftSwipeControlHidden","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-164",
			"name":"rowleftswipecontrolclicked",
			"display name":"RowLeftSwipeControlClicked",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on RowLeftSwipeControlClicked pTarget"
			],
			"display syntax":[
				"on RowLeftSwipeControlClicked pTarget"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Sent when the left hand side data grid swipe control is clicked.",
			"parameters":[{
				"name":"pTarget",
				"type":"",
				"refparam":"false",
				"description":"The target of the click. Use this to determine where in the swipe\ncontrol the user clicked."
			}],
			"examples":[{
				"script":"on RowLeftSwipeControlClicked\n   dispatch \"DeleteIndex\" to group \"DataGrid\" with the dgIndex of me\nend RowLeftSwipeControlClicked\n\non RowLeftSwipeControlClicked pTarget\n   switch the name of the target\n      case \"show\"\n         dispatch \"DeleteIndex\" to group \"DataGrid\" with the dgIndex of me\n         break\n      case \"archive\"\n         dispatch \"RowSwipeHideControl\" to group \"DataGrid\"\n         break\n   end switch\nend RowLeftSwipeControlClicked"
			}],
			"description":"<RowLeftSwipeControlClicked> is sent to your data grid's custom row template\nwhen the user clicks on the left hand side swipe control. Handle\n<RowLeftSwipeControlClicked> if you want to perform a custom action on click.\n\nThe default action is to delete the current row.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedRight","RowSwipedLeft","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowLeftSwipeControlHidden","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-165",
			"name":"rowrightswipecontrolclicked",
			"display name":"RowRightSwipeControlClicked",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on RowRightSwipeControlClicked pTarget"
			],
			"display syntax":[
				"on RowRightSwipeControlClicked pTarget"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Sent when the right hand side data grid swipe control is clicked.",
			"parameters":[{
				"name":"pTarget",
				"type":"",
				"refparam":"false",
				"description":"The target of the click. Use this to determine where in the action\ncontrol the user clicked."
			}],
			"examples":[{
				"script":"on RowRightSwipeControlClicked\n   dispatch \"DeleteIndex\" to group \"DataGrid\" with the dgIndex of me\nend RowRightSwipeControlClicked\n\non RowRightSwipeControlClicked pTarget\n   switch the name of the target\n      case \"show\"\n         dispatch \"DeleteIndex\" to group \"DataGrid\" with the dgIndex of me\n         break\n      case \"archive\"\n         dispatch \"RowSwipeHideControl\" to group \"DataGrid\"\n         break\n   end switch\nend RowRightSwipeControlClicked"
			}],
			"description":"<RowRightSwipeControlClicked> is sent to your data grid's custom row template\nwhen the user clicks on the right hand side swipe control. Handle\n<RowRightSwipeControlClicked> if you want to perform a custom action on click.\n\nThe default action is to delete the current row.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedRight","RowSwipedLeft","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowLeftSwipeControlHidden","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-166",
			"name":"rowleftswipecontrolhidden",
			"display name":"RowLeftSwipeControlHidden",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on RowLeftSwipeControlHidden"
			],
			"display syntax":[
				"on RowLeftSwipeControlHidden"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Sent when the left hand side data grid swipe control is hidden.",
			"description":"<RowLeftSwipeControlHidden> is sent to your data grid's custom row template when\nan left hand side swipe control is visible and the user clicks on the data grid,\nresulting in the swipe control being hidden. Handle <RowLeftSwipeControlHidden>\nto perform a custom action on hide.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedRight","RowSwipedLeft","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-167",
			"name":"rowrightswipecontrolhidden",
			"display name":"RowRightSwipeControlHidden",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on RowRightSwipeControlHidden"
			],
			"display syntax":[
				"on RowRightSwipeControlHidden"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Sent when the right hand side data grid swipe control is hidden.",
			"description":"<RowRightSwipeControlHidden> is sent to your data grid's custom row template\nwhen an right hand side swipe control is visible and the user clicks on the data\ngrid, resulting in the swipe control being hidden. Handle\n<RowRightSwipeControlHidden> to perform a custom action on hide.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedRight","RowSwipedLeft","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowRightSwipeControlHidden","GetLeftSwipeControl","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-168",
			"name":"geteditmodeactioncontrol",
			"display name":"GetEditModeActionControl",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on GetEditModeActionControl"
			],
			"display syntax":[
				"on GetEditModeActionControl"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Handle this message to specify a custom data grid action control.",
			"examples":[{
				"script":"on GetEditModeActionControl\n   return group \"my custom action control\"\nend GetEditModeActionControl\n\non GetEditModeActionControl\n   -- Hide for the data grid row number 5\n   if the dgIndex of me is 5 then\n      return empty\n   end if\n   pass GetEditModeActionControl\nend GetEditModeActionControl"
			}],
			"description":"<GetEditModeActionControl> is sent to your data grid's custom row template.\nHandle <GetEditModeActionControl> if you want to specify a custom action\ncontrol. Return the id of the control you want to display. Returning empty will\nresult in no control being displayed.\n\nHanding this message will override the <edit mode action control> property.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-169",
			"name":"geteditmodeactionselectcontrol",
			"display name":"GetEditModeActionSelectControl",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on GetEditModeActionSelectControl"
			],
			"display syntax":[
				"on GetEditModeActionSelectControl"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Handle this message to specify a custom data grid action select control.",
			"examples":[{
				"script":"on GetEditModeActionSelectControl\n   return group \"my custom action select control\"\nend GetEditModeActionSelectControl\n\non GetEditModeActionSelectControl\n   -- Hide for the data grid row number 5\n   if the dgIndex of me is 5 then\n      return empty\n   end if\n   pass GetEditModeActionSelectControl\nend GetEditModeActionSelectControl\n\non GetEditModeActionSelectControl\n   -- Turn action select off\n   return empty\nend GetEditModeActionSelectControl"
			}],
			"description":"<GetEditModeActionSelectControl> is sent to your data grid's custom row\ntemplate. Handle <GetEditModeActionSelectControl> if you want to specify a\ncustom action select control. Return the id of the control you want to display.\nReturning empty will result in no control being displayed.\n\nHanding this message will override the <edit mode action select control>\nproperty.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-170",
			"name":"geteditmodereordercontrol",
			"display name":"GetEditModeReorderControl",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on GetEditModeReorderControl"
			],
			"display syntax":[
				"on GetEditModeReorderControl"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Handle this message to specify a custom data grid action select\ncontrol.",
			"examples":[{
				"script":"on GetEditModeReorderControl\n   return group \"my custom reorder control\"\nend GetEditModeReorderControl\n\non GetEditModeReorderControl\n   -- Hide for the data grid row number 5\n   if the dgIndex of me is 5 then\n      return empty\n   end if\n   pass GetEditModeReorderControl\nend GetEditModeReorderControl\n\non GetEditModeReorderControl\n   -- Turn reordering off\n   return empty\nend GetEditModeReorderControl"
			}],
			"description":"<GetEditModeReorderControl> is sent to your data grid's custom row template.\nHandle <GetEditModeReorderControl> if you want to specify a custom reorder\ncontrol. Return the id of the control you want to display. Returning empty will\nresult in no control being displayed.\n\nHanding this message will override the <edit mode reorder control> property.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeActionSelectControl"]
			}
		},{
			"id":"Datagrid-171",
			"name":"getleftswipecontrol",
			"display name":"GetLeftSwipeControl",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on GetLeftSwipeControl"
			],
			"display syntax":[
				"on GetLeftSwipeControl"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Handle this message to specify a custom data grid left hand side swipe\ncontrol.",
			"examples":[{
				"script":"on GetLeftSwipeControl\n   return group \"my custom left swipe control\"\nend GetLeftSwipeControl\n\non GetLeftSwipeControl\n   -- Hide for the data grid row number 5\n   if the dgIndex of me is 5 then\n      return empty\n   end if\n   pass GetLeftSwipeControl\nend GetLeftSwipeControl\n\non GetLeftSwipeControl\n   -- Turn right drags and swipes off\n   return empty\nend GetLeftSwipeControl"
			}],
			"description":"<GetLeftSwipeControl> is sent to your data grid's custom row template. Handle\n<GetLeftSwipeControl> if you want to specify a custom left hand side swipe\ncontrol. Return the id of the control you want to display. Returning empty will\nresult in no control being displayed.\n\nHanding this message will override the <left swipe control> property.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedRight","RowSwipedLeft","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowLeftSwipeControlHidden","RowRightSwipeControlHidden","GetRightSwipeControl"]
			}
		},{
			"id":"Datagrid-172",
			"name":"getrightswipecontrol",
			"display name":"GetRightSwipeControl",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"on GetRightSwipeControl"
			],
			"display syntax":[
				"on GetRightSwipeControl"
			],
			"associations":["datagrid","datagrid template custom properties & messages"],
			"summary":"Handle this message to specify a custom data grid right hand side swipe\ncontrol.",
			"examples":[{
				"script":"on GetRightSwipeControl\n   return group \"my custom right swipe control\"\nend GetRightSwipeControl\n\non GetRightSwipeControl\n   -- Hide for the data grid row number 5\n   if the dgIndex of me is 5 then\n      return empty\n   end if\n   pass GetRightSwipeControl\nend GetRightSwipeControl\n\non GetRightSwipeControl\n   -- Turn left drags and swipes off\n   return empty\nend GetRightSwipeControl"
			}],
			"description":"<GetRightSwipeControl> is sent to your data grid's custom row template. Handle\n<GetRightSwipeControl> if you want to specify a custom right hand side swipe\ncontrol. Return the id of the control you want to display. Returning empty will\nresult in no control being displayed.\n\nHanding this message will override the <right swipe control> property.",
			"references":{
				"property":["enable swipe","left swipe control","right swipe control"],
				"command":["RowSwipeShowControlForIndexAndSide"],
				"message":["RowSwipeHideControl","RowSwipedRight","RowSwipedLeft","RowLeftSwipeControlClicked","RowLeftSwipeControlClicked","RowRightSwipeControlClicked","RowLeftSwipeControlHidden","RowRightSwipeControlHidden","GetLeftSwipeControl"]
			}
		},{
			"id":"Datagrid-173",
			"name":"editmodereorderstarted",
			"display name":"EditModeReorderStarted",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"EditModeReorderStarted pIndex, pLineNo"
			],
			"display syntax":[
				"EditModeReorderStarted pIndex, pLineNo"
			],
			"associations":["datagrid"],
			"summary":"Sent when a user starts a dynamic reordering of a data grid.",
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"The index of the row being reordered."
			},{
				"name":"pLineNo",
				"type":"",
				"refparam":"false",
				"description":"The line sequence number of the row within the data grid."
			}],
			"description":"<EditModeReorderStarted> is sent to your data grid when a user starts a dynamic\nreordering.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		},{
			"id":"Datagrid-174",
			"name":"editmodereordercompleted",
			"display name":"EditModeReorderCompleted",
			"library":"Datagrid",
			"type":"message",
			"syntax":[
				"EditModeReorderCompleted pIndex, pStartLineNo, pNewLineNo"
			],
			"display syntax":[
				"EditModeReorderCompleted pIndex, pStartLineNo, pNewLineNo"
			],
			"associations":["datagrid"],
			"summary":"Sent when a user completes a dynamic reordering of a data grid.",
			"parameters":[{
				"name":"pIndex",
				"type":"",
				"refparam":"false",
				"description":"The index of the reordered row."
			},{
				"name":"pStartLineNo",
				"type":"",
				"refparam":"false",
				"description":"The original line sequence number of the row within the data grid."
			},{
				"name":"pNewLineNo",
				"type":"",
				"refparam":"false",
				"description":"The new line sequence number of the row within the data grid."
			}],
			"description":"<EditModeReorderCompleted> is sent to your data grid when a user completes a\ndynamic reordering.",
			"references":{
				"property":["dgEditMode","edit mode action control","edit mode action select control","edit mode reorder control"],
				"command":["EditModeShowActionControlForIndex","EditModeHideActionControl"],
				"message":["EditModeActionSelectControlClicked","EditModeActionControlClicked","EditModeActionControlHidden","GetEditModeActionControl","GetEditModeActionSelectControl","GetEditModeReorderControl"]
			}
		}