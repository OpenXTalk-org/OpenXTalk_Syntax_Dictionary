{
			"id":"com.livecode.library.qr-1",
			"name":"com.livecode.library.qr",
			"display name":"QR Code Generator",
			"library":"com.livecode.library.qr",
			"type":"library",
			"display syntax":[
				"QR Code Generator"
			],
			"associations":["com.livecode.library.qr"],
			"description":"The QR Code Generator library for LiveCode generates QR codes\naccording to the ISO international standard (ISO/IEC18004).\n\n'QR Code' is a registered trademark of DENSO WAVE INCORPORATED.\n\nAll versions (1 - 40) and all error correction levels\n(L, M, Q, H) are supported."
		},{
			"id":"com.livecode.library.qr-2",
			"name":"qrcreate",
			"display name":"qrCreate",
			"library":"com.livecode.library.qr",
			"type":"command",
			"syntax":[
				"qrCreate <pImg>,<pData>,<pECC>,<pSize>,<pMask>,<pMinVersion>,<pMaxVersion>"
			],
			"display syntax":[
				"qrCreate <i>pImg</i>,<i>pData</i>,<i>pECC</i>,<i>pSize</i>,<i>pMask</i>,<i>pMinVersion</i>,<i>pMaxVersion</i>"
			],
			"associations":["com.livecode.library.qr"],
			"summary":"Create a QR code",
			"parameters":[{
				"name":"pImg",
				"type":"",
				"refparam":"false",
				"description":"The name of an image object on the card, a filename or the special code \"!\" which\nwill return the image data in the result."
			},{
				"name":"pData",
				"type":"",
				"refparam":"false",
				"description":"The data to be encoded."
			},{
				"name":"pECC",
				"type":"",
				"refparam":"false",
				"description":"The error correction level\n\n- \"L\" : 7% error correction\n- \"M\" : 15% error correction\n- \"Q\" : 25% error correction\n- \"H\" : 30% error correction"
			},{
				"name":"pSize",
				"type":"",
				"refparam":"false",
				"description":"Module size you can make the code larger/smaller.  You can also just\nrescale the image after the code has been created."
			},{
				"name":"pMask",
				"type":"",
				"refparam":"false",
				"description":"An integer value between 0 and 7. When encoding a QR code, there are\neight mask patterns that you can use to change the outputted matrix.\nEach mask pattern changes the bits according to their coordinates in\nthe QR matrix. The purpose of a mask pattern is to make the QR code\neasier for a QR scanner to read."
			},{
				"name":"pMinVersion",
				"type":"",
				"refparam":"false",
				"description":"An integer value between 1 and 40. It must be lower or equal to pMaxVersion.\nIf pMinVersion is not specified then the default value of 1 is used."
			},{
				"name":"pMaxVersion",
				"type":"",
				"refparam":"false",
				"description":"An integer value between 1 and 40. It must be higher or equal to pMinVersion.\nIf pMaxVersion is not specified then the default value of 40 is used."
			}],
			"examples":[{
				"script":"qrCreate \"MyImage\", \"QR data\", \"M\", 3"
			},{
				"script":"--creating QR Code with ECC level M, Size 3, Mask 7 and version 14\nqrCreate \"MyImage\", \"QR data\", \"M\", 3, 7, 14, 14"
			},{
				"script":"-- example how to use qrCreate with LiveCode server\nqrCreate \"!\", tData, tECC, tSize\nput the result into tData\nif tData begins with \"Error\" then\n   put tData\nelse\n   # line 1 of the result contains some info\n   # the remaining lines contain the png image data\n   put line 1 of tData into tInfo\n   delete line 1 of tData\n\n   put \"&lt;b&gt;Qr code info&lt;/b&gt;&lt;br/&gt;\" & LF\n   put \"Version: \" & item 1 of tInfo & \"&lt;br/&gt;\" & LF\n   put \"ECC: \" & item 2 of tInfo & \"&lt;br/&gt;\" & LF\n   put \"Mode: \" & item 3 of tInfo & \"&lt;br/&gt;\" & LF\n   put \"Mask: \" & item 4 of tInfo & \"&lt;br/&gt;\" & LF\n\n   # show the image\n   put base64Encode(tData) into tData\n   replace LF with empty in tData\n   put \"&lt;img src='data:image/png;base64,\" & tData & \"'/&gt;&lt;br/&gt;\" & LF\nend if"
			}],
			"value":[{
				"name":"the result",
				"type":"",
				"description":"If successful, the first line of the result will be the following values: \n- QR version\n- ECC\n- Mode\n- Mask\n- Image size with quiet zone (based on module size 1)\n\nIf there was an error the result will contain \"Error:\" and then an error\ndescription.\n\nIf the special character '!' is used for pImg, then the result also\ncontains the raw output of a png image.  You can use this data, for example,\nwith LiveCode server to generate QR codes on web pages."
			}],
			"description":"Set the text of an image to a QR code or get the PMG data of the QR code image.",
			"tags":["barcode"]
		},{
			"id":"com.livecode.library.qr-3",
			"name":"qrsetcolors",
			"display name":"qrSetColors",
			"library":"com.livecode.library.qr",
			"type":"command",
			"syntax":[
				"qrSetColors <pForeground>,<pBackground>"
			],
			"display syntax":[
				"qrSetColors <i>pForeground</i>,<i>pBackground</i>"
			],
			"associations":["com.livecode.library.qr"],
			"summary":"Set colors other than the default black and white",
			"parameters":[{
				"name":"pForeground",
				"type":"",
				"refparam":"false",
				"description":"A color name or RGB triplet"
			},{
				"name":"pBackground",
				"type":"",
				"refparam":"false",
				"description":"A color name or RGB triplet"
			}],
			"examples":[{
				"script":"qrSetColors \"Blue\", \"Yellow\""
			}],
			"description":"Optionally use colors other than black and white there must be a high\nenough contrast between colors for scanning the foreground color\nshould be darker than the background color.\n",
			"tags":["barcode"]
		}