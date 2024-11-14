{
			"id":"com.livecode.library.getopt-1",
			"name":"com.livecode.library.getopt",
			"display name":"Command-line Option Parser",
			"library":"com.livecode.library.getopt",
			"type":"library",
			"display syntax":[
				"Command-line Option Parser"
			],
			"associations":["com.livecode.library.getopt"],
			"description":"Command-line argument parser library."
		},{
			"id":"com.livecode.library.getopt-2",
			"name":"getopt",
			"display name":"GetOpt",
			"library":"com.livecode.library.getopt",
			"type":"function",
			"syntax":[
				"GetOpt(<grammar> [, <argumentArray>])"
			],
			"display syntax":[
				"GetOpt(<i>grammar</i> [, <i>argumentArray</i>])"
			],
			"associations":["com.livecode.library.getopt"],
			"summary":"Parse options from command line arguments\nAssociated:GetOptLibrary",
			"parameters":[{
				"name":"grammar",
				"type":"",
				"refparam":"false",
				"description":"A string describing the valid options for the program"
			},{
				"name":"argumentArray",
				"type":"",
				"refparam":"false",
				"description":"A numerically keyed array containing arguments to be parsed"
			}],
			"examples":[{
				"script":"local tInfo\nput GetOpt(\"h,help\") into tInfo\nif the number of elements in tInfo[\"errors\"] > 0 then\n   write \"ERROR:\" && tInfo[\"errors\"][1] to stderr\nelse if \"help\" is among the keys of tInfo[\"options\"] then\n   write \"Usage: my-program [--help]\" to stderr\nend if"
			}],
			"value":[{
				"name":"return",
				"type":"",
				"description":"An array containing options, arguments and error info"
			}],
			"description":"Parse UNIX-like command line arguments, extracting options and their\narguments.\n\nThe <GetOpt> function parses the command-line arguments.  The optional\nparameter <argumentArray> is a numerically-keyed array containing the\narguments to be parsed; if it is omitted, it is set to\n`the commandArguments`.\n\nThe <grammar> describes the possible options that <GetOpt> should\nunderstand.  It is a string containing a series of option\nspecifications, separated by spaces.  Each option specification is\na series of option names which should be treated as synonyms of each\nother, separated by commas.  Single-character synonyms are treated\nas short (`-h`) options, and multi-character synonyms are treated as\nlong (`--help`) options.  Option names can't start with a `-` or\ncontain `=`.  The last synonym in each option specification is\ntreated as the \"proper\" name of the option.\n\nFor example, `h,help` indicates that both `-h` and `--help` options\nare supported, and they are both properly known as the \"help\" option.\n\nEach option specification can end with a `=`.  This indicates that\nthe option expects an argument.  For example, with the grammar\n`-o,--output=`, the option can be specified like `-o file`, `-ofile`,\n`--output file`, or `--output=file`.\n\nIf a non-option argument is found in <argumentArray>, <GetOpt> stops\nparsing options and all subsequent arguments are returned as they are.\n`-` is always treated as a non-option argument.  The special `--`\noption ends option parsing, but is otherwise ignored.  This makes it\npossible to pass filenames on the command line that\nare named the same as options.  For example, `-- --help`\nwill treat `--help` as a normal argument, not an option.\n\nShort options can be run together.  For example, if <grammar> is\n`h,help v,verbose`, then `-hv` is treated as if both `--help` and\n`--verbose` were passed as options to the command.\n\nIf an option is specified more than once, only the last occurrence\nis reflected in the return  value of <GetOpt>\n\nThe return value of <GetOpt> is an array with three keys:\n\n* \"options\": an array where the keys are option names and the \nvalues are the arguments to those options.\n* \"arguments\": a numerically-indexed array where the values are the\nnon-option arguments\n* \"errors\": a numerically-indexed array where the values are error\nmessages from <GetOpt>'s processing of the <argumentArray>\n\nArgument processing errors occur if:\n\n* an option is found that wasn't in the <grammar>\n* an option has an argument, but the <grammar> says it shouldn't\n* an option doesn't have an argument, but the <grammar> says it should\n"
		}