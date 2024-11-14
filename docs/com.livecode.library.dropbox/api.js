{
			"id":"com.livecode.library.dropbox-1",
			"name":"com.livecode.library.dropbox",
			"display name":"Dropbox Library",
			"library":"com.livecode.library.dropbox",
			"type":"library",
			"display syntax":[
				"Dropbox Library"
			],
			"associations":["com.livecode.library.dropbox"],
			"description":"Implements the Dropbox v2 API.\nDoesn't include business pro API."
		},{
			"id":"com.livecode.library.dropbox-2",
			"name":"dropboxuploadsessionstart",
			"display name":"dropboxUploadSessionStart",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxUploadSessionStart <pAccessToken>, <pData>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxUploadSessionStart <i>pAccessToken</i>, <i>pData</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Upload sessions allow you to upload a single file in one or more requests, for example where the size of the\nfile is greater than 150 MB.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pData",
				"type":"",
				"refparam":"false",
				"description":"The binary file data"
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"session_id\": \"1234faaf0678bcde\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"This call starts a new upload session with the given data. You can then use \ndropboxUploadSessionAppend with the returned session id to add more data and \ndropboxUploadSessionFinish to save all the data to a file in Dropbox. \n\n> *Note:* A single request should not upload more than 150 MB of file contents.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-3",
			"name":"dropboxgetfoldermetadata",
			"display name":"dropboxGetFolderMetadata",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxGetFolderMetadata <pAccessToken>, <pSharedFolderId>, [<pActions>, <pCallback>]"
			],
			"display syntax":[
				"dropboxGetFolderMetadata <i>pAccessToken</i>, <i>pSharedFolderId</i>, [<i>pActions</i>, <i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Returns shared folder metadata by its folder ID.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderID",
				"type":"",
				"refparam":"false",
				"description":"The ID for the shared folder."
			},{
				"name":"pActions",
				"type":"",
				"refparam":"false",
				"description":"This is a return delimited list indicating whether the returned folder data will\ninclude a boolean value FolderPermission.allow that describes whether the current user can \nperform the folder action on the folder. This field is optional.\n\nActions that may be taken on shared folders. The value will be one of the following datatypes.\nNew values may be introduced as our API evolves.\n\n- \"change_options\": Change folder options, such as who can be invited to join the folder.\n- \"edit_contents\": Change or edit contents of the folder.\n- \"invite_editor\": Invite a user or group to join the folder with read and write permission.\n- \"invite_viewer\": Invite a user or group to join the folder with read permission.\n- \"invite_viewer_no_comment\": Invite a user or group to join the folder with read permission but no comment permissions.\n- \"relinquish_membership\": Relinquish one's own membership in the folder.\n- \"unmount\": Unmount the folder.\n- \"unshare\": Stop sharing this folder.\n- \"leave_a_copy\": Keep a copy of the contents upon leaving or being kicked from the folder.\n- \"share_link\": This action is deprecated. Use create_link instead.\n- \"create_link\": Create a shared link for folder."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"access_type\": {\n\".tag\": \"owner\"\n},\n\"is_team_folder\": false,\n\"policy\": {\n\"acl_update_policy\": {\n\".tag\": \"owner\"\n},\n\"shared_link_policy\": {\n\".tag\": \"anyone\"\n},\n\"member_policy\": {\n\".tag\": \"anyone\"\n},\n\"resolved_member_policy\": {\n\".tag\": \"team\"\n}\n},\n\"name\": \"dir\",\n\"shared_folder_id\": \"84528192421\",\n\"time_invited\": \"2016-01-20T00:00:00Z\",\n\"preview_url\": \"https://www.dropbox.com/scl/fo/fir9vjelf\",\n\"path_lower\": \"/dir\",\n\"permissions\": []\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Apps must have full Dropbox access to use this endpoint.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-4",
			"name":"dropboxcreatesharedlinkwithsettings",
			"display name":"dropboxCreateSharedLinkWithSettings",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxCreateSharedLinkWithSettings <pAccessToken>, <pPath>, [<pSettings>, <pCallback>]"
			],
			"display syntax":[
				"dropboxCreateSharedLinkWithSettings <i>pAccessToken</i>, <i>pPath</i>, [<i>pSettings</i>, <i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Create a shared link with custom settings",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"The path to be shared by the shared link"
			},{
				"name":"pSettings",
				"type":"",
				"refparam":"false",
				"description":"````\n{\n\"requested_visibility\" (enum): The requested access for this shared link. This field is optional.\n\n- \"public\": Anyone who has received the link can access it. No login required.\n- \"team_only\": Only members of the same team can access the link. Login is required.\n- \"password\": A link-specific password is required to access the link. Login is not required.\n\"link_password\": If requested_visibility is password this is needed to specify the password to access the link. This field is optional.\n\"expires\": format=\"%Y-%m-%dT%H:%M:%SZ\" - Expiration time of the shared link. By default the link won't expire. This field is optional.\n}\n````"
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": \"file\",\n\"url\": \"https://www.dropbox.com/s/2sn712vy1ovegw8/Prime_Numbers.txt?dl=0\",\n\"name\": \"Prime_Numbers.txt\",\n\"link_permissions\": {\n\"can_revoke\": false,\n\"resolved_visibility\": {\n\".tag\": \"public\"\n},\n\"revoke_failure_reason\": {\n\".tag\": \"owner_only\"\n}\n},\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"team_member_info\": {\n\"team_info\": {\n\"id\": \"dbtid:AAFdgehTzw7WlXhZJsbGCLePe8RvQGYDr-I\",\n\"name\": \"Acme, Inc.\"\n},\n\"display_name\": \"Roger Rabbit\",\n\"member_id\": \"dbmid:abcd1234\"\n}\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If no settings are given then the default visibility is RequestedVisibility.public \n(The resolved visibility, though, may depend on other aspects such as team and \nshared folder settings).\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-5",
			"name":"dropboxmountfolder",
			"display name":"dropboxMountFolder",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxMountFolder <pAccessToken>, <pSharedFolderId>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxMountFolder <i>pAccessToken</i>, <i>pSharedFolderId</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"The current user mounts the designated folder.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderId",
				"type":"",
				"refparam":"false",
				"description":"The ID of the shared folder to mount."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"access_type\": {\n\".tag\": \"owner\"\n},\n\"is_team_folder\": false,\n\"policy\": {\n\"acl_update_policy\": {\n\".tag\": \"owner\"\n},\n\"shared_link_policy\": {\n\".tag\": \"anyone\"\n},\n\"member_policy\": {\n\".tag\": \"anyone\"\n},\n\"resolved_member_policy\": {\n\".tag\": \"team\"\n}\n},\n\"name\": \"dir\",\n\"shared_folder_id\": \"84528192421\",\n\"time_invited\": \"2016-01-20T00:00:00Z\",\n\"preview_url\": \"https://www.dropbox.com/scl/fo/fir9vjelf\",\n\"path_lower\": \"/dir\",\n\"permissions\": []\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Mount a shared folder for a user after they have been added as a member. Once \nmounted, the shared folder will appear in their Dropbox.\nApps must have full Dropbox access to use this endpoint.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-6",
			"name":"dropboxunmountfolder",
			"display name":"dropboxUnmountFolder",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxUnmountFolder <pAccessToken>, <pSharedFolderId>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxUnmountFolder <i>pAccessToken</i>, <i>pSharedFolderId</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"The current user unmounts the designated folder.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderID",
				"type":"",
				"refparam":"false",
				"description":"The ID for the shared folder."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function.\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"The user can re-mount the folder at a later time using dropboxMountFolder.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-7",
			"name":"dropboxgetspaceusage",
			"display name":"dropboxGetSpaceUsage",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxGetSpaceUsage <pAccessToken>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxGetSpaceUsage <i>pAccessToken</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Get the space usage information for the current user's account.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"used\": 314159265,\n\"allocation\": {\n\".tag\": \"individual\",\n\"allocated\": 10000000000\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-8",
			"name":"dropboxgetthumbnail",
			"display name":"dropboxGetThumbnail",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxGetThumbnail <pAccessToken>, <pPath>, <pFormat>, <pSize>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxGetThumbnail <i>pAccessToken</i>, <i>pPath</i>, <i>pFormat</i>, <i>pSize</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Get a thumbnail for an image.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be deleted."
			},{
				"name":"pFormat",
				"type":"",
				"refparam":"false",
				"description":"The format for the thumbnail image\n\n- \"jpeg\"\n- \"png\""
			},{
				"name":"pSize",
				"type":"",
				"refparam":"false",
				"description":"The value will be one of the following datatypes:\n\n- \"w32h32\": 32 by 32 px.\n- \"w64h64\": 64 by 64 px.\n- \"w128h128\": 128 by 128 px.\n- \"w640h480\": 640 by 480 px.\n- \"w1024h768\": 1024 by 768 px."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will contain the data of the thumbnail image.\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"This method currently supports files with the following file extensions:\njpg, jpeg, png, tiff, tif, gif and bmp. Photos that are larger than 20MB in\nsize won't be converted to a thumbnail.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-9",
			"name":"dropboxgetpreview",
			"display name":"dropboxGetPreview",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxGetPreview <pAccessToken>, <pPath>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxGetPreview <i>pAccessToken</i>, <i>pPath</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Get a preview for a file.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be deleted."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will contain the data of the preview PDF.\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Currently previews are only generated for the files with the following extensions: \n.doc, .docx, .docm, .ppt, .pps, .ppsx, .ppsm, .pptx, .pptm, .xls, .xlsx, .xlsm, .rtf.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-10",
			"name":"dropboxrestore",
			"display name":"dropboxRestore",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxRestore <pAccessToken>, <pPath>, <pRevision>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxRestore <i>pAccessToken</i>, <i>pPath</i>, <i>pRevision</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Restore a file to a specific revision.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be restored."
			},{
				"name":"pRevision",
				"type":"",
				"refparam":"false",
				"description":"The revision to restore for the file."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"name\": \"Prime_Numbers.txt\",\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"path_display\": \"/Homework/math/Prime_Numbers.txt\",\n\"sharing_info\": {\n\"read_only\": true,\n\"parent_shared_folder_id\": \"84528192421\",\n\"modified_by\": \"dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc\"\n},\n\"property_groups\": [\n{\n\"template_id\": \"ptid:1a5n2i6d3OYEAAAAAAAAAYa\",\n\"fields\": [\n{\n\"name\": \"Security Policy\",\n\"value\": \"Confidential\"\n}\n]\n}\n],\n\"has_explicit_shared_members\": false\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-11",
			"name":"dropboxsearch",
			"display name":"dropboxSearch",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxSearch <pAccessToken>, <pPath>, <pQuery>, <pStart>, <pMaxResults>, <pMode>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxSearch <i>pAccessToken</i>, <i>pPath</i>, <i>pQuery</i>, <i>pStart</i>, <i>pMaxResults</i>, <i>pMode</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Searches for files and folders.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be searched."
			},{
				"name":"pQuery",
				"type":"",
				"refparam":"false",
				"description":"The string to search for. The search string is split on spaces into multiple tokens.\nFor file name searching, the last token is used for prefix matching (i.e. \"bat c\" matches \n\"bat cave\" but not \"batman car\")."
			},{
				"name":"pStart",
				"type":"",
				"refparam":"false",
				"description":"The starting index within the search results (used for paging). The default\nfor this field is 0."
			},{
				"name":"pMaxResults",
				"type":"",
				"refparam":"false",
				"description":"The maximum number of search results to return. The default for this field is 100."
			},{
				"name":"pMode",
				"type":"",
				"refparam":"false",
				"description":"The search mode. Note that searching file content is only available for Dropbox Business accounts.\n\n- \"filename\"\n- \"filename_and_content\"\n- \"deleted_filename\""
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"matches\": [\n{\n\"match_type\": {\n\".tag\": \"content\"\n},\n\"metadata\": {\n\".tag\": \"file\",\n\"name\": \"Prime_Numbers.txt\",\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"path_display\": \"/Homework/math/Prime_Numbers.txt\",\n\"sharing_info\": {\n\"read_only\": true,\n\"parent_shared_folder_id\": \"84528192421\",\n\"modified_by\": \"dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc\"\n},\n\"property_groups\": [\n{\n\"template_id\": \"ptid:1a5n2i6d3OYEAAAAAAAAAYa\",\n\"fields\": [\n{\n\"name\": \"Security Policy\",\n\"value\": \"Confidential\"\n}\n]\n}\n],\n\"has_explicit_shared_members\": false\n}\n}\n],\n\"more\": false,\n\"start\": 1\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"> *Note:* Recent changes may not immediately be reflected in search results due\n> to a short delay in indexing.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-12",
			"name":"dropboxlistrevisions",
			"display name":"dropboxListRevisions",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListRevisions <pAccessToken>, <pPath>, <pLimit>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxListRevisions <i>pAccessToken</i>, <i>pPath</i>, <i>pLimit</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Return revisions of a file.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"The path to the file you want to see the revisions of."
			},{
				"name":"pLimit",
				"type":"",
				"refparam":"false",
				"description":"The maximum number of revision entries returned. The default for this field is 10."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"is_deleted\": false,\n\"entries\": [\n{\n\"name\": \"Prime_Numbers.txt\",\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"path_display\": \"/Homework/math/Prime_Numbers.txt\",\n\"sharing_info\": {\n\"read_only\": true,\n\"parent_shared_folder_id\": \"84528192421\",\n\"modified_by\": \"dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc\"\n},\n\"property_groups\": [\n{\n\"template_id\": \"ptid:1a5n2i6d3OYEAAAAAAAAAYa\",\n\"fields\": [\n{\n\"name\": \"Security Policy\",\n\"value\": \"Confidential\"\n}\n]\n}\n],\n\"has_explicit_shared_members\": false\n}\n]\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-13",
			"name":"dropboxgetmetadata",
			"display name":"dropboxGetMetadata",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxGetMetadata <pAccessToken>, <pPath>, <pIncludeMediaInfo>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxGetMetadata <i>pAccessToken</i>, <i>pPath</i>, <i>pIncludeMediaInfo</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Returns the metadata for a file or folder.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path to a file or folder in the user's Dropbox to be queried"
			},{
				"name":"pIncludeMediaInfo",
				"type":"",
				"refparam":"false",
				"description":"If true, FileMetadata.media_info is set for photo and\nvideo. The default for this field is False."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": string,\n\"name\": string,\n\"id\": string,\n\"client_modified\": string,\n\"server_modified\": string,\n\"rev\": string,\n\"size\": integer,\n\"path_lower\": string,\n\"path_display\": string,\n\"sharing_info\": {\n\"read_only\": boolean,\n\"parent_shared_folder_id\": string,\n\"modified_by\": string\n},\n\"property_groups\": [\n{\n\"template_id\": string,\n\"fields\": [\n{\n\"name\": string,\n\"value\": string\n}\n]\n}\n],\n\"has_explicit_shared_members\": boolean\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":">*Note:* Metadata for the root folder is unsupported.\n\nIf the path is a folder, then a folderMetadata json is returned.\nIf the path is a file then a fileMetadata json is returned.\nIf the path is a file or folder that has been deleted, then a deletedMetadata json is returned.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-14",
			"name":"dropboxlistfolderscontinue",
			"display name":"dropboxListFoldersContinue",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListFoldersContinue <pAccessToken>, <pCursor>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxListFoldersContinue <i>pAccessToken</i>, <i>pCursor</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Once a cursor has been retrieved from dropboxListFolders, use this to paginate through all shared folder members.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pCursor",
				"type":"",
				"refparam":"false",
				"description":"The cursor returned by your last call to dropboxListFolders or dropboxListFoldersContinue."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"entries\": [\n{\n\"access_type\": {\n\".tag\": \"owner\"\n},\n\"is_team_folder\": false,\n\"policy\": {\n\"acl_update_policy\": {\n\".tag\": \"owner\"\n},\n\"shared_link_policy\": {\n\".tag\": \"anyone\"\n},\n\"member_policy\": {\n\".tag\": \"anyone\"\n},\n\"resolved_member_policy\": {\n\".tag\": \"team\"\n}\n},\n\"name\": \"dir\",\n\"shared_folder_id\": \"84528192421\",\n\"time_invited\": \"2016-01-20T00:00:00Z\",\n\"preview_url\": \"https://www.dropbox.com/scl/fo/fir9vjelf\",\n\"path_lower\": \"/dir\",\n\"permissions\": []\n}\n],\n\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Apps must have full Dropbox access to use this endpoint.\n\nIf a cursor is present then use the value with dropboxListFolderMembersContinue to obtain\nmore results.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-15",
			"name":"dropboxgetaccount",
			"display name":"dropboxGetAccount",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxGetAccount <pAccessToken>, <pUserAccountID>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxGetAccount <i>pAccessToken</i>, <i>pUserAccountID</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Get information about a user's account.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pUserAccountID",
				"type":"",
				"refparam":"false",
				"description":"The user's unique Dropbox ID"
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"account_id\": string,\n\"name\": {\n\"given_name\": string,\n\"surname\": string,\n\"familiar_name\": string,\n\"display_name\": string,\n\"abbreviated_name\": string\n},\n\"email\": string,\n\"email_verified\": boolean,\n\"disabled\": boolean,\n\"is_teammate\": boolean,\n\"profile_photo_url\": string\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-16",
			"name":"dropboxrelinquishfoldermembership",
			"display name":"dropboxRelinquishFolderMembership",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxRelinquishFolderMembership <pAccessToken>, <pSharedFolderId>, <pLeaveACopy>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxRelinquishFolderMembership <i>pAccessToken</i>, <i>pSharedFolderId</i>, <i>pLeaveACopy</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"The current user relinquishes their membership in the designated shared folder and will no longer have access to the folder.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderId",
				"type":"",
				"refparam":"false",
				"description":"The ID for the shared folder."
			},{
				"name":"pLeaveACopy",
				"type":"",
				"refparam":"false",
				"description":"Keep a copy of the folder's contents upon relinquishing membership. The default\nfor this field is False."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": \"complete\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"A folder owner cannot relinquish membership in their own folder.\nThis will run synchronously if leave_a_copy is false, and asynchronously if leave_a_copy \nis true. Apps must have full Dropbox access to use this endpoint.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-17",
			"name":"dropboxunsharefolder",
			"display name":"dropboxUnshareFolder",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxUnshareFolder <pAccessToken>, <pSharedFolderId>, <pLeaveACopy>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxUnshareFolder <i>pAccessToken</i>, <i>pSharedFolderId</i>, <i>pLeaveACopy</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Allows a shared folder owner to unshare the folder.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderID",
				"type":"",
				"refparam":"false",
				"description":"The ID for the shared folder."
			},{
				"name":"pLeaveACopy",
				"type":"",
				"refparam":"false",
				"description":"If true, members of this shared folder will get a copy of this folder after\nit's unshared. Otherwise, it will be removed from their Dropbox. The current user, who is an owner, \nwill always retain their copy. The default for this field is False."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": \"complete\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"You'll need to call droboxCheckJobStatus to determine if the action has completed successfully.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-18",
			"name":"dropboxupdatefolderpolicy",
			"display name":"dropboxUpdateFolderPolicy",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxUpdateFolderPolicy <pAccessToken>, <pSharedFolderId>, <pMemberPolicy>, <pAclUpdatePolicy>, <pSharedLinkPolicy>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxUpdateFolderPolicy <i>pAccessToken</i>, <i>pSharedFolderId</i>, <i>pMemberPolicy</i>, <i>pAclUpdatePolicy</i>, <i>pSharedLinkPolicy</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Update the sharing policies for a shared folder.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderID",
				"type":"",
				"refparam":"false",
				"description":"The ID for the shared folder."
			},{
				"name":"pMemberPolicy",
				"type":"",
				"refparam":"false",
				"description":"Who can be a member of this shared folder. Only applicable if the current user is on a team. The default for this union is anyone.\n\n- \"anyone\": Anyone can become a member.\n- \"team\": Only a teammate can become a member."
			},{
				"name":"pAclUpdatePolicy",
				"type":"",
				"refparam":"false",
				"description":"Who can add and remove members of this shared folder. The default for this union is owner.\nPolicy governing who can change a shared folder's access control list (ACL). In other words, who can add, remove, or change the privileges of members. The value will be one of the following datatypes. New values may be introduced as our API evolves.\n\n- \"owner\": Only the owner can update the ACL.\n- \"editors\": Any editor can update the ACL. This may be further restricted to editors on the same team."
			},{
				"name":"pSharedLinkPolicy",
				"type":"",
				"refparam":"false",
				"description":"The policy to apply to shared links created for content inside this shared folder. The current\nuser must be on a team to set this policy to SharedLinkPolicy.members. The default for this union is anyone.\nPolicy governing who can view shared links. The value will be one of the following datatypes. New values may be \nintroduced as our API evolves.\n\n- \"anyone\": Links can be shared with anyone.\n- \"members\": Links can only be shared among members of the shared folder."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"access_type\": {\n\".tag\": \"owner\"\n},\n\"is_team_folder\": false,\n\"policy\": {\n\"acl_update_policy\": {\n\".tag\": \"owner\"\n},\n\"shared_link_policy\": {\n\".tag\": \"anyone\"\n},\n\"member_policy\": {\n\".tag\": \"anyone\"\n},\n\"resolved_member_policy\": {\n\".tag\": \"team\"\n}\n},\n\"name\": \"dir\",\n\"shared_folder_id\": \"84528192421\",\n\"time_invited\": \"2016-01-20T00:00:00Z\",\n\"preview_url\": \"https://www.dropbox.com/scl/fo/fir9vjelf\",\n\"path_lower\": \"/dir\",\n\"permissions\": []\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"User must have AccessLevel.owner access to the shared folder to update its policies.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-19",
			"name":"dropboxcheckjobstatus",
			"display name":"dropboxCheckJobStatus",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxCheckJobStatus <pAccessToken>, <pAsyncJobId>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxCheckJobStatus <i>pAccessToken</i>, <i>pAsyncJobId</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Returns the status of an asynchronous job.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pAsyncJobID",
				"type":"",
				"refparam":"false",
				"description":"Id of the asynchronous job. This is the value of a response returned\nfrom the method that launched the job."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": \"in_progress\"\n}\n````\n\nThe tag will be one of:\n\n- in_progress - The asynchronous job is still in progress.\n- complete - The asynchronous job has finished.\n- failed - The asynchronous job returned an error.\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Apps must have full Dropbox access to use this endpoint.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-20",
			"name":"dropboxupload",
			"display name":"dropboxUpload",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxUpload <pAccessToken>, <pPath>, <pMode>, <pAutorename>, <pMute>, <pData>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxUpload <i>pAccessToken</i>, <i>pPath</i>, <i>pMode</i>, <i>pAutorename</i>, <i>pMute</i>, <i>pData</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Create a new file with the contents provided in the request.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to upload to."
			},{
				"name":"pMode",
				"type":"",
				"refparam":"false",
				"description":"Selects what to do if the file already exists. The default for this union is add.\n\n- \"add\": Do not overwrite an existing file if there is a conflict. The autorename strategy is \nto append a number to the file name. For example, \"document.txt\" might become \"document (2).txt\".\n- \"overwrite\": Always overwrite the existing file. The autorename strategy is the same as it is for add.\n- \"update\": Overwrite if the given \"rev\" matches the existing file's \"rev\". The autorename \nstrategy is to append the string \"conflicted copy\" to the file name. For example, \"document.txt\" \nmight become \"document (conflicted copy).txt\" or \"document (Panda's conflicted copy).txt\"."
			},{
				"name":"pAutoRename",
				"type":"",
				"refparam":"false",
				"description":"If there's a conflict, as determined by mode, have the Dropbox server try to autorename\nthe file to avoid conflict. The default for this field is False."
			},{
				"name":"pMute",
				"type":"",
				"refparam":"false",
				"description":"Normally, users are made aware of any file modifications in their Dropbox account via\nnotifications in the client software. If true, this tells the clients that this modification \nshouldn't result in a user notification. The default for this field is False"
			},{
				"name":"pData",
				"type":"",
				"refparam":"false",
				"description":"The binary file data"
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"name\": \"Prime_Numbers.txt\",\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"path_display\": \"/Homework/math/Prime_Numbers.txt\",\n\"sharing_info\": {\n\"read_only\": true,\n\"parent_shared_folder_id\": \"84528192421\",\n\"modified_by\": \"dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc\"\n},\n\"property_groups\": [\n{\n\"template_id\": \"ptid:1a5n2i6d3OYEAAAAAAAAAYa\",\n\"fields\": [\n{\n\"name\": \"Security Policy\",\n\"value\": \"Confidential\"\n}\n]\n}\n],\n\"has_explicit_shared_members\": false\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"> *Note:* Do not use this to upload a file larger than 150 MB. Instead, create an upload \n> session with dropboxUploadSessionStart.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-21",
			"name":"dropboxlistfoldermembers",
			"display name":"dropboxListFolderMembers",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListFolderMembers <pAccessToken>, <pSharedFolderId>, [<pActions>, <pLimit>, <pCallback>]"
			],
			"display syntax":[
				"dropboxListFolderMembers <i>pAccessToken</i>, <i>pSharedFolderId</i>, [<i>pActions</i>, <i>pLimit</i>, <i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Returns shared folder membership by its folder ID.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderId",
				"type":"",
				"refparam":"false",
				"description":"The ID for the shared folder."
			},{
				"name":"pActions",
				"type":"",
				"refparam":"false",
				"description":"This is a list indicating whether each returned member will include a boolean value\nMemberPermission.allow that describes whether the current user can perform the member Aaction on\nthe member. This field is optional.\n\nActions that may be taken on members of a shared folder. The value will be one of the following \ndatatypes. New values may be introduced as our API evolves.\n\n- \"leave_a_copy\": Allow the member to keep a copy of the folder when removing.\n- \"make_editor\": Make the member an editor of the folder.\n- \"make_owner\": Make the member an owner of the folder.\n- \"make_viewer\": Make the member a viewer of the folder.\n- \"make_viewer_no_comment\": Make the member a viewer of the folder without commenting permissions.\n- \"remove\": Remove the member from the folder."
			},{
				"name":"pLimit",
				"type":"",
				"refparam":"false",
				"description":"The maximum number of results that include members, groups and invitees to return per request.\nThe default for this field is 1000."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"users\": [\n{\n\"access_type\": {\n\".tag\": \"owner\"\n},\n\"user\": {\n\"account_id\": \"dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc\",\n\"same_team\": true,\n\"team_member_id\": \"dbmid:abcd1234\"\n},\n\"permissions\": [],\n\"is_inherited\": false\n}\n],\n\"groups\": [\n{\n\"access_type\": {\n\".tag\": \"editor\"\n},\n\"group\": {\n\"group_name\": \"Test group\",\n\"group_id\": \"g:e2db7665347abcd600000000001a2b3c\",\n\"group_management_type\": {\n\".tag\": \"user_managed\"\n},\n\"group_type\": {\n\".tag\": \"user_managed\"\n},\n\"is_member\": false,\n\"is_owner\": false,\n\"same_team\": true,\n\"member_count\": 10\n},\n\"permissions\": [],\n\"is_inherited\": false\n}\n],\n\"invitees\": [\n{\n\"access_type\": {\n\".tag\": \"viewer\"\n},\n\"invitee\": {\n\".tag\": \"email\",\n\"email\": \"jessica@example.com\"\n},\n\"permissions\": [],\n\"is_inherited\": false\n}\n],\n\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Apps must have full Dropbox access to use this endpoint.\n\nIf a cursor is present then use the value with dropboxListFolderMembersContinue to obtain\nmore results.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-22",
			"name":"dropboxlistfoldermemberscontinue",
			"display name":"dropboxListFolderMembersContinue",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListFolderMembersContinue <pAccessToken>, <pCursor>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxListFolderMembersContinue <i>pAccessToken</i>, <i>pCursor</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Once a cursor has been retrieved from dropboxListFolderMembers, use this to paginate through all shared folder members.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pCursor",
				"type":"",
				"refparam":"false",
				"description":"The cursor returned by your last call to dropboxListFolderMembers or dropboxListFolderMembersContinue."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"users\": [\n{\n\"access_type\": {\n\".tag\": \"owner\"\n},\n\"user\": {\n\"account_id\": \"dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc\",\n\"same_team\": true,\n\"team_member_id\": \"dbmid:abcd1234\"\n},\n\"permissions\": [],\n\"is_inherited\": false\n}\n],\n\"groups\": [\n{\n\"access_type\": {\n\".tag\": \"editor\"\n},\n\"group\": {\n\"group_name\": \"Test group\",\n\"group_id\": \"g:e2db7665347abcd600000000001a2b3c\",\n\"group_management_type\": {\n\".tag\": \"user_managed\"\n},\n\"group_type\": {\n\".tag\": \"user_managed\"\n},\n\"is_member\": false,\n\"is_owner\": false,\n\"same_team\": true,\n\"member_count\": 10\n},\n\"permissions\": [],\n\"is_inherited\": false\n}\n],\n\"invitees\": [\n{\n\"access_type\": {\n\".tag\": \"viewer\"\n},\n\"invitee\": {\n\".tag\": \"email\",\n\"email\": \"jessica@example.com\"\n},\n\"permissions\": [],\n\"is_inherited\": false\n}\n],\n\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Apps must have full Dropbox access to use this endpoint.\n\nIf a cursor is present then use the value with dropboxListFolderMembersContinue to obtain\nmore results.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-23",
			"name":"dropboxchecksharejobstatus",
			"display name":"dropboxCheckShareJobStatus",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxCheckShareJobStatus <pAccessToken>, <pAsyncJobId>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxCheckShareJobStatus <i>pAccessToken</i>, <i>pAsyncJobId</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Returns the status of an asynchronous job for sharing a folder.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pAsyncJobID",
				"type":"",
				"refparam":"false",
				"description":"Id of the asynchronous job. This is the value of a response returned\nfrom the method that launched the job."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": \"in_progress\"\n}\n````\n\nThe tag will be one of:\n\n- in_progress - The asynchronous job is still in progress.\n- complete - The asynchronous job has finished.\n- failed - The asynchronous job returned an error.\n\nIf complete the JSON includes the metadata of the shared folder:\n\n````\n{\n\".tag\": \"complete\",\n\"access_type\": {\n\".tag\": \"owner\"\n},\n\"is_team_folder\": false,\n\"policy\": {\n\"acl_update_policy\": {\n\".tag\": \"owner\"\n},\n\"shared_link_policy\": {\n\".tag\": \"anyone\"\n},\n\"member_policy\": {\n\".tag\": \"anyone\"\n},\n\"resolved_member_policy\": {\n\".tag\": \"team\"\n}\n},\n\"name\": \"dir\",\n\"shared_folder_id\": \"84528192421\",\n\"time_invited\": \"2016-01-20T00:00:00Z\",\n\"preview_url\": \"https://www.dropbox.com/scl/fo/fir9vjelf\",\n\"path_lower\": \"/dir\",\n\"permissions\": []\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Apps must have full Dropbox access to use this endpoint.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-24",
			"name":"dropboxlistfolder",
			"display name":"dropboxListFolder",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListFolder <pAccessToken>, <pPath>, <pRecursive>, <pIncludeMediaInfo>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxListFolder <i>pAccessToken</i>, <i>pPath</i>, <i>pRecursive</i>, <i>pIncludeMediaInfo</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Starts returning the contents of a folder.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be deleted."
			},{
				"name":"pRecursive",
				"type":"",
				"refparam":"false",
				"description":"If true, the list folder operation will be applied recursively to all subfolders and\nthe response will contain contents of all subfolders. The default for this field is False."
			},{
				"name":"pIncludeMediaInfo",
				"type":"",
				"refparam":"false",
				"description":"If true, FileMetadata.media_info is set for photo and\nvideo. The default for this field is False."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"entries\": [\n{\n\".tag\": \"file\",\n\"name\": \"Prime_Numbers.txt\",\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"path_display\": \"/Homework/math/Prime_Numbers.txt\",\n\"sharing_info\": {\n\"read_only\": true,\n\"parent_shared_folder_id\": \"84528192421\",\n\"modified_by\": \"dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc\"\n},\n\"property_groups\": [\n{\n\"template_id\": \"ptid:1a5n2i6d3OYEAAAAAAAAAYa\",\n\"fields\": [\n{\n\"name\": \"Security Policy\",\n\"value\": \"Confidential\"\n}\n]\n}\n],\n\"has_explicit_shared_members\": false\n},\n{\n\".tag\": \"folder\",\n\"name\": \"math\",\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXz\",\n\"path_lower\": \"/homework/math\",\n\"path_display\": \"/Homework/math\",\n\"sharing_info\": {\n\"read_only\": false,\n\"parent_shared_folder_id\": \"84528192421\",\n\"traverse_only\": false,\n\"no_access\": false\n},\n\"property_groups\": [\n{\n\"template_id\": \"ptid:1a5n2i6d3OYEAAAAAAAAAYa\",\n\"fields\": [\n{\n\"name\": \"Security Policy\",\n\"value\": \"Confidential\"\n}\n]\n}\n]\n}\n],\n\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\",\n\"has_more\": false\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the result's ListFolderResult.has_more field is true, call list_folder/continue with \nthe returned ListFolderResult.cursor to retrieve more entries.\n\nIf you're using ListFolderArg.recursive set to true to keep a local cache of the contents\nof a Dropbox account, iterate through each entry in order and process them as follows to\nkeep your local state in sync:\n\n- For each FileMetadata, store the new entry at the given path in your local state. \nIf the required parent folders don't exist yet, create them. If there's already something\nelse at the given path, replace it and remove all its children.\n- For each FolderMetadata, store the new entry at the given path in your local state. If the\nrequired parent folders don't exist yet, create them. If there's already something else at \nthe given path, replace it but leave the children as they are. Check the new entry's \nFolderSharingInfo.read_only and set all its children's read-only statuses to match.\n- For each DeletedMetadata, if your local state has something at the given path, remove it and \nall its children. If there's nothing at the given path, ignore this entry.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-25",
			"name":"dropboxuploadsessionfinish",
			"display name":"dropboxUploadSessionFinish",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxUploadSessionFinish <pAccessToken>, <pSession>, <pOffset>, <pPath>, <pMode>, <pAutorename>, <pMute>, <pData>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxUploadSessionFinish <i>pAccessToken</i>, <i>pSession</i>, <i>pOffset</i>, <i>pPath</i>, <i>pMode</i>, <i>pAutorename</i>, <i>pMute</i>, <i>pData</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Finish an upload session and save the uploaded data to the given file path.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSession",
				"type":"",
				"refparam":"false",
				"description":"A session ID as returned by dropboxUploadSessionStart."
			},{
				"name":"pOffset",
				"type":"",
				"refparam":"false",
				"description":"The amount of data that has been uploaded so far. We use this to\nmake sure upload data isn't lost or duplicated in the event of a network error."
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to upload to."
			},{
				"name":"pMode",
				"type":"",
				"refparam":"false",
				"description":"Selects what to do if the file already exists. The default for this union is add.\n\n- \"add\": Do not overwrite an existing file if there is a conflict. The autorename strategy is \nto append a number to the file name. For example, \"document.txt\" might become \"document (2).txt\".\n- \"overwrite\": Always overwrite the existing file. The autorename strategy is the same as it is for add.\n- \"update\": Overwrite if the given \"rev\" matches the existing file's \"rev\". The autorename \nstrategy is to append the string \"conflicted copy\" to the file name. For example, \"document.txt\" \nmight become \"document (conflicted copy).txt\" or \"document (Panda's conflicted copy).txt\"."
			},{
				"name":"pAutoRename",
				"type":"",
				"refparam":"false",
				"description":"If there's a conflict, as determined by mode, have the Dropbox server try to autorename\nthe file to avoid conflict. The default for this field is False."
			},{
				"name":"pMute",
				"type":"",
				"refparam":"false",
				"description":"Normally, users are made aware of any file modifications in their Dropbox account via\nnotifications in the client software. If true, this tells the clients that this modification \nshouldn't result in a user notification. The default for this field is False"
			},{
				"name":"pData",
				"type":"",
				"refparam":"false",
				"description":"The binary file data"
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"name\": \"Prime_Numbers.txt\",\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"path_display\": \"/Homework/math/Prime_Numbers.txt\",\n\"sharing_info\": {\n\"read_only\": true,\n\"parent_shared_folder_id\": \"84528192421\",\n\"modified_by\": \"dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc\"\n},\n\"property_groups\": [\n{\n\"template_id\": \"ptid:1a5n2i6d3OYEAAAAAAAAAYa\",\n\"fields\": [\n{\n\"name\": \"Security Policy\",\n\"value\": \"Confidential\"\n}\n]\n}\n],\n\"has_explicit_shared_members\": false\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"> *Note:* A single request should not upload more than 150 MB of file contents.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-26",
			"name":"dropboxremovefoldermember",
			"display name":"dropboxRemoveFolderMember",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxRemoveFolderMember <pAccessToken>, <pSharedFolderId>, <pMember>, <pLeaveACopy>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxRemoveFolderMember <i>pAccessToken</i>, <i>pSharedFolderId</i>, <i>pMember</i>, <i>pLeaveACopy</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Allows an owner or editor (if the ACL update policy allows) of a shared folder to remove another member.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderId",
				"type":"",
				"refparam":"false",
				"description":"The ID for the shared folder."
			},{
				"name":"pMember",
				"type":"",
				"refparam":"false",
				"description":"An array with either an email key or a dropbox_id key to identify the\nmember to remove"
			},{
				"name":"pLeaveACopy",
				"type":"",
				"refparam":"false",
				"description":"Keep a copy of the folder's contents upon relinquishing membership. The default\nfor this field is False."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": \"complete\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Apps must have full Dropbox access to use this endpoint.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-27",
			"name":"dropboxrevokesharedlink",
			"display name":"dropboxRevokeSharedLink",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxRevokeSharedLink <pAccessToken>, <pURL>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxRevokeSharedLink <i>pAccessToken</i>, <i>pURL</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Revoke a shared link.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pURL",
				"type":"",
				"refparam":"false",
				"description":"URL of the shared link."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If an error occurred the JSON string will be in\nthe following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Note that even after revoking a shared link to a file, the file may be accessible if there are shared \nlinks leading to any of the file parent folders. To list all shared links that enable access to a specific \nfile, you can use the list_shared_links with the file as the ListSharedLinksArg.path argument.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-28",
			"name":"dropboxdownload",
			"display name":"dropboxDownload",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxDownload <pAccessToken>, <pPath>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxDownload <i>pAccessToken</i>, <i>pPath</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Download a file from a user's Dropbox.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be download."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be the binary data of the file.\n\nIf an error occurred it will be a JSON string in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-29",
			"name":"dropboxcopy",
			"display name":"dropboxCopy",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxCopy <pAccessToken>, <pPathFrom>, <pPathTo>, <pAllowSharedFolder>, <pAutoRename>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxCopy <i>pAccessToken</i>, <i>pPathFrom</i>, <i>pPathTo</i>, <i>pAllowSharedFolder</i>, <i>pAutoRename</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Copy a file or folder to a different location in the user's Dropbox.\nIf the source path is a folder all its contents will be copied.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPathFrom",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be copied."
			},{
				"name":"pPathTo",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox that is the destination."
			},{
				"name":"pAllowSharedFolder",
				"type":"",
				"refparam":"false",
				"description":"If true, copy will copy contents in shared folder, otherwise RelocationError.cant_copy_shared_folder will be returned if pFromPath contains shared folder. The default for this field is false."
			},{
				"name":"pAutoRename",
				"type":"",
				"refparam":"false",
				"description":"If there's a conflict, have the Dropbox server try to autorename the file to avoid the conflict. The default for this field is false."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": string,\n\"name\": string,\n\"id\": string,\n\"client_modified\": string,\n\"server_modified\": string,\n\"rev\": string,\n\"size\": integer,\n\"path_lower\": string,\n\"path_display\": string,\n\"sharing_info\": {\n\"read_only\": boolean,\n\"parent_shared_folder_id\": string,\n\"modified_by\": string\n},\n\"property_groups\": [\n{\n\"template_id\": string,\n\"fields\": [\n{\n\"name\": string,\n\"value\": string\n}\n]\n}\n],\n\"has_explicit_shared_members\": boolean\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-30",
			"name":"dropboxcreatefolder",
			"display name":"dropboxCreateFolder",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxCreateFolder <pAccessToken>, <pPath>, <pAutoRename>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxCreateFolder <i>pAccessToken</i>, <i>pPath</i>, <i>pAutoRename</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Create a folder at a given path.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be created."
			},{
				"name":"pAutoRename",
				"type":"",
				"refparam":"false",
				"description":"If there's a conflict, have the Dropbox server try to autorename the file to avoid the conflict. The default for this field is false."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"name\": string,\n\"id\": string,\n\"path_lower\": string,\n\"path_display\": string,\n\"sharing_info\": {\n\"read_only\": boolean,\n\"parent_shared_folder_id\": string,\n\"traverse_only\": boolean,\n\"no_access\": boolean\n},\n\"property_groups\": [\n{\n\"template_id\": string,\n\"fields\": [\n{\n\"name\": string,\n\"value\": string\n}\n]\n}\n]\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-31",
			"name":"dropboxdelete",
			"display name":"dropboxDelete",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxDelete <pAccessToken>, <pPath>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxDelete <i>pAccessToken</i>, <i>pPath</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Delete the file or folder at a given path.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be deleted."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": string,\n\"name\": string,\n\"id\": string,\n\"client_modified\": string,\n\"server_modified\": string,\n\"rev\": string,\n\"size\": integer,\n\"path_lower\": string,\n\"path_display\": string,\n\"sharing_info\": {\n\"read_only\": boolean,\n\"parent_shared_folder_id\": string,\n\"modified_by\": string\n},\n\"property_groups\": [\n{\n\"template_id\": string,\n\"fields\": [\n{\n\"name\": string,\n\"value\": string\n}\n]\n}\n],\n\"has_explicit_shared_members\": boolean\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the path is a folder, all its contents will be deleted too.\nA successful response indicates that the file or folder was deleted. The returned\nmetadata will be the corresponding FileMetadata or FolderMetadata for the item at\ntime of deletion, and not a DeletedMetadata object.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-32",
			"name":"dropboxgetaccountbatch",
			"display name":"dropboxGetAccountBatch",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxGetAccountBatch <pAccessToken>, <pUserAccountIDs>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxGetAccountBatch <i>pAccessToken</i>, <i>pUserAccountIDs</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Get information about multiple user accounts. At most 300 accounts may be queried per request.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pUserAccountIDs",
				"type":"",
				"refparam":"false",
				"description":"A return delimited list of unique Dropbox IDs."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n[\n{\n\"account_id\": string,\n\"name\": {\n\"given_name\": string,\n\"surname\": string,\n\"familiar_name\": string,\n\"display_name\": string,\n\"abbreviated_name\": string\n},\n\"email\": string,\n\"email_verified\": boolean,\n\"disabled\": boolean,\n\"is_teammate\": boolean,\n\"profile_photo_url\": string\n}\n]\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-33",
			"name":"dropboxaddfoldermember",
			"display name":"dropboxAddFolderMember",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxAddFolderMember <pAccessToken>, <pSharedFolderId>, <pMembers>, <pQuiet>, <pCustomMessage>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxAddFolderMember <i>pAccessToken</i>, <i>pSharedFolderId</i>, <i>pMembers</i>, <i>pQuiet</i>, <i>pCustomMessage</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Allows an owner or editor (if the ACL update policy allows) of a shared folder to add another member.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderId",
				"type":"",
				"refparam":"false",
				"description":"The ID for the shared folder."
			},{
				"name":"pMembers",
				"type":"",
				"refparam":"false",
				"description":"The intended list of members to add. Added members will\nreceive invites to join the shared folder.\n\n````\n[\n{\n\"email\" : email address of member (optional if dropbox_id is set)\n\"drobox_id\" : a unique dropbox user id\n\"access_level\" (enum): \n- \"owner\" : The collaborator is the owner of the shared folder. Owners can \nview and edit the shared folder as well as set the folder's policies using \nupdate_folder_policy.\n- \"editor: The collaborator can both view and edit the shared folder.\n- \"viewer\": The collaborator can only view the shared folder.\n- \"viewer_no_comment\": The collaborator can only view the shared folder \nand does not have any access to comments.\n}\n]\n````"
			},{
				"name":"pQuiet",
				"type":"",
				"refparam":"false",
				"description":"Whether added members should be notified via email and\ndevice notifications of their invite. The default for this field is False."
			},{
				"name":"pCustomMessage",
				"type":"",
				"refparam":"false",
				"description":"Optional message to display to added members in their invitation."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If an error occurred the JSON string will be in\nthe following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"For the new member to get access to all the functionality for this folder, you will need \nto call dropboxMountFolder on their behalf. Apps must have full Dropbox access to use \nthis endpoint.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-34",
			"name":"dropboxlistfolders",
			"display name":"dropboxListFolders",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListFolders <pAccessToken>, [<pActions>, <pLimit>, <pCallback>]"
			],
			"display syntax":[
				"dropboxListFolders <i>pAccessToken</i>, [<i>pActions</i>, <i>pLimit</i>, <i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Return the list of all shared folders the current user has access to.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pActions",
				"type":"",
				"refparam":"false",
				"description":"This is a return delimited list indicating whether the returned folder data will\ninclude a boolean value FolderPermission.allow that describes whether the current user can \nperform the folder action on the folder. This field is optional.\n\nActions that may be taken on shared folders. The value will be one of the following datatypes.\nNew values may be introduced as our API evolves.\n\n- \"change_options\": Change folder options, such as who can be invited to join the folder.\n- \"edit_contents\": Change or edit contents of the folder.\n- \"invite_editor\": Invite a user or group to join the folder with read and write permission.\n- \"invite_viewer\": Invite a user or group to join the folder with read permission.\n- \"invite_viewer_no_comment\": Invite a user or group to join the folder with read permission but no comment permissions.\n- \"relinquish_membership\": Relinquish one's own membership in the folder.\n- \"unmount\": Unmount the folder.\n- \"unshare\": Stop sharing this folder.\n- \"leave_a_copy\": Keep a copy of the contents upon leaving or being kicked from the folder.\n- \"share_link\": This action is deprecated. Use create_link instead.\n- \"create_link\": Create a shared link for folder."
			},{
				"name":"pLimit",
				"type":"",
				"refparam":"false",
				"description":"The maximum number of results that include members, groups and invitees to return per request.\nThe default for this field is 1000."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"entries\": [\n{\n\"access_type\": {\n\".tag\": \"owner\"\n},\n\"is_team_folder\": false,\n\"policy\": {\n\"acl_update_policy\": {\n\".tag\": \"owner\"\n},\n\"shared_link_policy\": {\n\".tag\": \"anyone\"\n},\n\"member_policy\": {\n\".tag\": \"anyone\"\n},\n\"resolved_member_policy\": {\n\".tag\": \"team\"\n}\n},\n\"name\": \"dir\",\n\"shared_folder_id\": \"84528192421\",\n\"time_invited\": \"2016-01-20T00:00:00Z\",\n\"preview_url\": \"https://www.dropbox.com/scl/fo/fir9vjelf\",\n\"path_lower\": \"/dir\",\n\"permissions\": []\n}\n],\n\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Apps must have full Dropbox access to use this endpoint.\n\nIf a cursor is present then use the value with dropboxListFolderMembersContinue to obtain\nmore results.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-35",
			"name":"dropboxlistsharedlinks",
			"display name":"dropboxListSharedLinks",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListSharedLinks <pAccessToken>, [<pPath>, <pDirectOnly>, <pCursor>, <pCallback>]"
			],
			"display syntax":[
				"dropboxListSharedLinks <i>pAccessToken</i>, [<i>pPath</i>, <i>pDirectOnly</i>, <i>pCursor</i>, <i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"List shared links of this user.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"If no path is given, returns a list of all shared links for the current user.\nIf a non-empty path is given, returns a list of all shared links that allow access \nto the given path - direct links to the given path and links to parent folders of \nthe given path."
			},{
				"name":"pDirectOnly",
				"type":"",
				"refparam":"false",
				"description":"Links to parent folders can be suppressed by setting direct_only to true."
			},{
				"name":"pCursor",
				"type":"",
				"refparam":"false",
				"description":"The cursor returned by your last call to list_shared_links. This field is optional."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"links\": [\n{\n\".tag\": \"file\",\n\"url\": \"https://www.dropbox.com/s/2sn712vy1ovegw8/Prime_Numbers.txt?dl=0\",\n\"name\": \"Prime_Numbers.txt\",\n\"link_permissions\": {\n\"can_revoke\": false,\n\"resolved_visibility\": {\n\".tag\": \"public\"\n},\n\"revoke_failure_reason\": {\n\".tag\": \"owner_only\"\n}\n},\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"team_member_info\": {\n\"team_info\": {\n\"id\": \"dbtid:AAFdgehTzw7WlXhZJsbGCLePe8RvQGYDr-I\",\n\"name\": \"Acme, Inc.\"\n},\n\"display_name\": \"Roger Rabbit\",\n\"member_id\": \"dbmid:abcd1234\"\n}\n}\n],\n\"has_more\": true,\n\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-36",
			"name":"dropboxmodifysharedlinksettings",
			"display name":"dropboxModifySharedLinkSettings",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxModifySharedLinkSettings <pAccessToken>, <pUrl>, [<pSettings>, <pRemoveExpiration>, <pCallback>]"
			],
			"display syntax":[
				"dropboxModifySharedLinkSettings <i>pAccessToken</i>, <i>pUrl</i>, [<i>pSettings</i>, <i>pRemoveExpiration</i>, <i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Modify the shared link's settings.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pURL",
				"type":"",
				"refparam":"false",
				"description":"URL of the shared link to change its settings"
			},{
				"name":"pSettings",
				"type":"",
				"refparam":"false",
				"description":"````\n{\n\"requested_visibility\" (enum): The requested access for this shared link. This field is optional.\n\n- \"public\": Anyone who has received the link can access it. No login required.\n- \"team_only\": Only members of the same team can access the link. Login is required.\n- \"password\": A link-specific password is required to access the link. Login is not required.\n\"link_password\": If requested_visibility is password this is needed to specify the password to access the link. This field is optional.\n\"expires\": format=\"%Y-%m-%dT%H:%M:%SZ\" - Expiration time of the shared link. By default the link won't expire. This field is optional.\n}\n````"
			},{
				"name":"pRemoveExpiration",
				"type":"",
				"refparam":"false",
				"description":"f set to true, removes the expiration of the shared link.\nThe default for this field is False."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": \"file\",\n\"url\": \"https://www.dropbox.com/s/2sn712vy1ovegw8/Prime_Numbers.txt?dl=0\",\n\"name\": \"Prime_Numbers.txt\",\n\"link_permissions\": {\n\"can_revoke\": false,\n\"resolved_visibility\": {\n\".tag\": \"public\"\n},\n\"revoke_failure_reason\": {\n\".tag\": \"owner_only\"\n}\n},\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"team_member_info\": {\n\"team_info\": {\n\"id\": \"dbtid:AAFdgehTzw7WlXhZJsbGCLePe8RvQGYDr-I\",\n\"name\": \"Acme, Inc.\"\n},\n\"display_name\": \"Roger Rabbit\",\n\"member_id\": \"dbmid:abcd1234\"\n}\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the requested visibility conflict with the shared links policy of the team or the shared folder \n(in case the linked file is part of a shared folder) then the LinkPermissions.resolved_visibility \nof the returned SharedLinkMetadata will reflect the actual visibility of the shared link and the \nLinkPermissions.requested_visibility will reflect the requested visibility.\n\nIf no settings are given then the default visibility is RequestedVisibility.public \n(The resolved visibility, though, may depend on other aspects such as team and \nshared folder settings).\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-37",
			"name":"dropboxpermanentlydelete",
			"display name":"dropboxPermanentlyDelete",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxPermanentlyDelete <pAccessToken>, <pPath>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxPermanentlyDelete <i>pAccessToken</i>, <i>pPath</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Permanently delete the file or folder at a given path.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be deleted."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function.\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"> *Note:* This endpoint is only available for Dropbox Indy apps.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-38",
			"name":"dropboxlistmountablefolders",
			"display name":"dropboxListMountableFolders",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListMountableFolders <pAccessToken>, [<pActions>, <pLimit>, <pCallback>]"
			],
			"display syntax":[
				"dropboxListMountableFolders <i>pAccessToken</i>, [<i>pActions</i>, <i>pLimit</i>, <i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Return the list of all shared folders the current user can mount or unmount.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pActions",
				"type":"",
				"refparam":"false",
				"description":"This is a return delimited list indicating whether the returned folder data will\ninclude a boolean value FolderPermission.allow that describes whether the current user can \nperform the folder action on the folder. This field is optional.\n\nActions that may be taken on shared folders. The value will be one of the following datatypes.\nNew values may be introduced as our API evolves.\n\n- \"change_options\": Change folder options, such as who can be invited to join the folder.\n- \"edit_contents\": Change or edit contents of the folder.\n- \"invite_editor\": Invite a user or group to join the folder with read and write permission.\n- \"invite_viewer\": Invite a user or group to join the folder with read permission.\n- \"invite_viewer_no_comment\": Invite a user or group to join the folder with read permission but no comment permissions.\n- \"relinquish_membership\": Relinquish one's own membership in the folder.\n- \"unmount\": Unmount the folder.\n- \"unshare\": Stop sharing this folder.\n- \"leave_a_copy\": Keep a copy of the contents upon leaving or being kicked from the folder.\n- \"share_link\": This action is deprecated. Use create_link instead.\n- \"create_link\": Create a shared link for folder."
			},{
				"name":"pLimit",
				"type":"",
				"refparam":"false",
				"description":"The maximum number of results that include members, groups and invitees to return per request.\nThe default for this field is 1000."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"entries\": [\n{\n\"access_type\": {\n\".tag\": \"owner\"\n},\n\"is_team_folder\": false,\n\"policy\": {\n\"acl_update_policy\": {\n\".tag\": \"owner\"\n},\n\"shared_link_policy\": {\n\".tag\": \"anyone\"\n},\n\"member_policy\": {\n\".tag\": \"anyone\"\n},\n\"resolved_member_policy\": {\n\".tag\": \"team\"\n}\n},\n\"name\": \"dir\",\n\"shared_folder_id\": \"84528192421\",\n\"time_invited\": \"2016-01-20T00:00:00Z\",\n\"preview_url\": \"https://www.dropbox.com/scl/fo/fir9vjelf\",\n\"path_lower\": \"/dir\",\n\"permissions\": []\n}\n],\n\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Apps must have full Dropbox access to use this endpoint.\n\nIf a cursor is present then use the value with dropboxListMountableFoldersContinue to obtain\nmore results.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-39",
			"name":"dropboxmove",
			"display name":"dropboxMove",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxMove <pAccessToken>, <pPathFrom>, <pPathTo>, <pAllowSharedFolder>, <pAutoRename>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxMove <i>pAccessToken</i>, <i>pPathFrom</i>, <i>pPathTo</i>, <i>pAllowSharedFolder</i>, <i>pAutoRename</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Move a file or folder to a different location in the user's Dropbox.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPathFrom",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox to be moved."
			},{
				"name":"pPathTo",
				"type":"",
				"refparam":"false",
				"description":"Path in the user's Dropbox that is the destination."
			},{
				"name":"pAllowSharedFolder",
				"type":"",
				"refparam":"false",
				"description":"If true, copy will copy contents in shared folder, otherwise RelocationError.cant_copy_shared_folder will be returned if pFromPath contains shared folder. The default for this field is false."
			},{
				"name":"pAutoRename",
				"type":"",
				"refparam":"false",
				"description":"If there's a conflict, have the Dropbox server try to autorename the file to avoid the conflict. The default for this field is false."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": \"file\",\n\"name\": \"Prime_Numbers.txt\",\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"path_display\": \"/Homework/math/Prime_Numbers.txt\",\n\"sharing_info\": {\n\"read_only\": true,\n\"parent_shared_folder_id\": \"84528192421\",\n\"modified_by\": \"dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc\"\n},\n\"property_groups\": [\n{\n\"template_id\": \"ptid:1a5n2i6d3OYEAAAAAAAAAYa\",\n\"fields\": [\n{\n\"name\": \"Security Policy\",\n\"value\": \"Confidential\"\n}\n]\n}\n],\n\"has_explicit_shared_members\": false\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-40",
			"name":"dropboxlistfolderlongpoll",
			"display name":"dropboxListFolderLongPoll",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListFolderLongPoll <pCursor>, <pTimeout>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxListFolderLongPoll <i>pCursor</i>, <i>pTimeout</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"A longpoll endpoint to wait for changes on an account.",
			"parameters":[{
				"name":"pCursor",
				"type":"",
				"refparam":"false",
				"description":"A cursor as returned by dropboxListFolder or dropboxListFolderContinue. Cursors retrieved\nby setting ListFolderArg.include_media_info to true are not supported."
			},{
				"name":"pTimeOut",
				"type":"",
				"refparam":"false",
				"description":"A timeout in seconds. The request will block for at most this length of time, plus up to\n90 seconds of random jitter added to avoid the thundering herd problem. Care should be taken when\nusing this parameter, as some network infrastructure does not support long timeouts. The default for\nthis field is 30."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"changes\": true\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"In conjunction with dropboxListFolderContinue, this call gives you a low-latency way to monitor an account\nfor file changes. The connection will block until there are changes available or a timeout occurs.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-41",
			"name":"dropboxgetsharedlinkfile",
			"display name":"dropboxGetSharedLinkFile",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxGetSharedLinkFile <pAccessToken>, <pUrl>, [<pPath>, <pLinkPassword>, <pCallback>]"
			],
			"display syntax":[
				"dropboxGetSharedLinkFile <i>pAccessToken</i>, <i>pUrl</i>, [<i>pPath</i>, <i>pLinkPassword</i>, <i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Download the shared link's file from a user's Dropbox.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pURL",
				"type":"",
				"refparam":"false",
				"description":"URL of the shared link"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"If the shared link is to a folder, this parameter can be used to retrieve the metadata\nfor a specific file or sub-folder in this folder. A relative path should be used. This field is optional."
			},{
				"name":"pLinkPassword",
				"type":"",
				"refparam":"false",
				"description":"If the shared link has a password, this parameter can be used. This field is optional."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be the binary data of the file.\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-42",
			"name":"dropboxupdatefoldermember",
			"display name":"dropboxUpdateFolderMember",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxUpdateFolderMember <pAccessToken>, <pSharedFolderId>, <pMember>, <pAccessLevel>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxUpdateFolderMember <i>pAccessToken</i>, <i>pSharedFolderId</i>, <i>pMember</i>, <i>pAccessLevel</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Allows an owner or editor of a shared folder to update another member's permissions.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderID",
				"type":"",
				"refparam":"false",
				"description":"The ID for the shared folder."
			},{
				"name":"pMember",
				"type":"",
				"refparam":"false",
				"description":"An array with either an email key or a dropbox_id key to identify the\nmember to remove"
			},{
				"name":"pAccessLevel",
				"type":"",
				"refparam":"false",
				"description":"The new access level for member. Defines the access levels for collaborators.\nThe value will be one of the following datatypes. New values may be introduced as our API evolves.\n\n- \"editor\": The collaborator can both view and edit the shared folder.\n- \"viewer\": The collaborator can only view the shared folder.\n- \"viewer_no_comment\": The collaborator can only view the shared folder and does not have any access to comments."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string that contains information about a member's \naccess level to content after an operation.\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-43",
			"name":"dropboxgetsharedlinkmetadata",
			"display name":"dropboxGetSharedLinkMetadata",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxGetSharedLinkMetadata <pAccessToken>, <pUrl>, [<pPath>, <pLinkPassword>, <pCallback>]"
			],
			"display syntax":[
				"dropboxGetSharedLinkMetadata <i>pAccessToken</i>, <i>pUrl</i>, [<i>pPath</i>, <i>pLinkPassword</i>, <i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Get the shared link's metadata.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pURL",
				"type":"",
				"refparam":"false",
				"description":"URL of the shared link"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"If the shared link is to a folder, this parameter can be used to retrieve the metadata\nfor a specific file or sub-folder in this folder. A relative path should be used. This field is optional."
			},{
				"name":"pLinkPassword",
				"type":"",
				"refparam":"false",
				"description":"If the shared link has a password, this parameter can be used. This field is optional."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": \"file\",\n\"url\": \"https://www.dropbox.com/s/2sn712vy1ovegw8/Prime_Numbers.txt?dl=0\",\n\"name\": \"Prime_Numbers.txt\",\n\"link_permissions\": {\n\"can_revoke\": false,\n\"resolved_visibility\": {\n\".tag\": \"public\"\n},\n\"revoke_failure_reason\": {\n\".tag\": \"owner_only\"\n}\n},\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"team_member_info\": {\n\"team_info\": {\n\"id\": \"dbtid:AAFdgehTzw7WlXhZJsbGCLePe8RvQGYDr-I\",\n\"name\": \"Acme, Inc.\"\n},\n\"display_name\": \"Roger Rabbit\",\n\"member_id\": \"dbmid:abcd1234\"\n}\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-44",
			"name":"dropboxlistfoldercontinue",
			"display name":"dropboxListFolderContinue",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListFolderContinue <pAccessToken>, <pCursor>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxListFolderContinue <i>pAccessToken</i>, <i>pCursor</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Once a cursor has been retrieved from list_folder, use this to paginate through all files and\nretrieve updates to the folder, following the same rules as documented for list folder.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pCursor",
				"type":"",
				"refparam":"false",
				"description":"The cursor returned by your last call to list folder or list folder continue."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"entries\": [\n{\n\".tag\": \"file\",\n\"name\": \"Prime_Numbers.txt\",\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXw\",\n\"client_modified\": \"2015-05-12T15:50:38Z\",\n\"server_modified\": \"2015-05-12T15:50:38Z\",\n\"rev\": \"a1c10ce0dd78\",\n\"size\": 7212,\n\"path_lower\": \"/homework/math/prime_numbers.txt\",\n\"path_display\": \"/Homework/math/Prime_Numbers.txt\",\n\"sharing_info\": {\n\"read_only\": true,\n\"parent_shared_folder_id\": \"84528192421\",\n\"modified_by\": \"dbid:AAH4f99T0taONIb-OurWxbNQ6ywGRopQngc\"\n},\n\"property_groups\": [\n{\n\"template_id\": \"ptid:1a5n2i6d3OYEAAAAAAAAAYa\",\n\"fields\": [\n{\n\"name\": \"Security Policy\",\n\"value\": \"Confidential\"\n}\n]\n}\n],\n\"has_explicit_shared_members\": false\n},\n{\n\".tag\": \"folder\",\n\"name\": \"math\",\n\"id\": \"id:a4ayc_80_OEAAAAAAAAAXz\",\n\"path_lower\": \"/homework/math\",\n\"path_display\": \"/Homework/math\",\n\"sharing_info\": {\n\"read_only\": false,\n\"parent_shared_folder_id\": \"84528192421\",\n\"traverse_only\": false,\n\"no_access\": false\n},\n\"property_groups\": [\n{\n\"template_id\": \"ptid:1a5n2i6d3OYEAAAAAAAAAYa\",\n\"fields\": [\n{\n\"name\": \"Security Policy\",\n\"value\": \"Confidential\"\n}\n]\n}\n]\n}\n],\n\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\",\n\"has_more\": false\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the result's ListFolderResult.has_more field is true, call list_folder/continue with \nthe returned ListFolderResult.cursor to retrieve more entries.\n\nIf you're using ListFolderArg.recursive set to true to keep a local cache of the contents\nof a Dropbox account, iterate through each entry in order and process them as follows to\nkeep your local state in sync:\n\n- For each FileMetadata, store the new entry at the given path in your local state. \nIf the required parent folders don't exist yet, create them. If there's already something\nelse at the given path, replace it and remove all its children.\n- For each FolderMetadata, store the new entry at the given path in your local state. If the\nrequired parent folders don't exist yet, create them. If there's already something else at \nthe given path, replace it but leave the children as they are. Check the new entry's \nFolderSharingInfo.read_only and set all its children's read-only statuses to match.\n- For each DeletedMetadata, if your local state has something at the given path, remove it and \nall its children. If there's nothing at the given path, ignore this entry.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-45",
			"name":"dropboxsharefolder",
			"display name":"dropboxShareFolder",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxShareFolder <pAccessToken>, <pPath>, <pMemberPolicy>, <pAclUpdatePolicy>, <pSharedLinkPolicy>, <pForceAsync>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxShareFolder <i>pAccessToken</i>, <i>pPath</i>, <i>pMemberPolicy</i>, <i>pAclUpdatePolicy</i>, <i>pSharedLinkPolicy</i>, <i>pForceAsync</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Share a folder with collaborators.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"The path to the folder to share. If it does not exist, then a new one is created."
			},{
				"name":"pMemberPolicy",
				"type":"",
				"refparam":"false",
				"description":"Who can be a member of this shared folder. Only applicable if the current user is on a team. The default for this union is anyone.\n\n- \"anyone\": Anyone can become a member.\n- \"team\": Only a teammate can become a member."
			},{
				"name":"pAclUpdatePolicy",
				"type":"",
				"refparam":"false",
				"description":"Who can add and remove members of this shared folder. The default for this union is owner.\nPolicy governing who can change a shared folder's access control list (ACL). In other words, who can add, remove, or change the privileges of members. The value will be one of the following datatypes. New values may be introduced as our API evolves.\n\n- \"owner\": Only the owner can update the ACL.\n- \"editors\": Any editor can update the ACL. This may be further restricted to editors on the same team."
			},{
				"name":"pSharedLinkPolicy",
				"type":"",
				"refparam":"false",
				"description":"The policy to apply to shared links created for content inside this shared folder. The current\nuser must be on a team to set this policy to SharedLinkPolicy.members. The default for this union is anyone.\nPolicy governing who can view shared links. The value will be one of the following datatypes. New values may be \nintroduced as our API evolves.\n\n- \"anyone\": Links can be shared with anyone.\n- \"members\": Links can only be shared among members of the shared folder."
			},{
				"name":"pForceAsync",
				"type":"",
				"refparam":"false",
				"description":"Whether to force the share to happen asynchronously. The default for this field is False."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\".tag\": \"complete\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Most sharing will be completed synchronously. Large folders will be completed asynchronously. To make\ntesting the async case repeatable, set `ShareFolderArg.force_async`.\nIf a ShareFolderLaunch.async_job_id is returned, you'll need to call check_share_job_status until the \naction completes to get the metadata for the folder.\nApps must have full Dropbox access to use this endpoint.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-46",
			"name":"dropboxtransferfolder",
			"display name":"dropboxTransferFolder",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxTransferFolder <pAccessToken>, <pSharedFolderId>, <pToDropboxId>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxTransferFolder <i>pAccessToken</i>, <i>pSharedFolderId</i>, <i>pToDropboxId</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Transfer ownership of a shared folder to a member of the shared folder.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSharedFolderID",
				"type":"",
				"refparam":"false",
				"description":"The ID for the shared folder."
			},{
				"name":"pToDropboxId",
				"type":"",
				"refparam":"false",
				"description":"A account or team member ID to transfer ownership to."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"User must have AccessLevel.owner access to the shared folder to perform a transfer.\nApps must have full Dropbox access to use this endpoint.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-47",
			"name":"dropboxgetcurrentaccount",
			"display name":"dropboxGetCurrentAccount",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxGetCurrentAccount <pAccessToken>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxGetCurrentAccount <i>pAccessToken</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Get information about the current user's account.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"account_id\": string,\n\"name\": {\n\"given_name\": string,\n\"surname\": string,\n\"familiar_name\": string,\n\"display_name\": string,\n\"abbreviated_name\": string\n},\n\"email\": string,\n\"email_verified\": boolean,\n\"disabled\": boolean,\n\"is_teammate\": boolean,\n\"profile_photo_url\": string\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"If the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-48",
			"name":"dropboxlistmountablefolderscontinue",
			"display name":"dropboxListMountableFoldersContinue",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListMountableFoldersContinue <pAccessToken>, <pCursor>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxListMountableFoldersContinue <i>pAccessToken</i>, <i>pCursor</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Once a cursor has been retrieved from dropboxListMountableFolders, use this to paginate through all shared folder members.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pCursor",
				"type":"",
				"refparam":"false",
				"description":"The cursor returned by your last call to dropboxListMountableFolders or dropboxListMountableFoldersContinue."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"entries\": [\n{\n\"access_type\": {\n\".tag\": \"owner\"\n},\n\"is_team_folder\": false,\n\"policy\": {\n\"acl_update_policy\": {\n\".tag\": \"owner\"\n},\n\"shared_link_policy\": {\n\".tag\": \"anyone\"\n},\n\"member_policy\": {\n\".tag\": \"anyone\"\n},\n\"resolved_member_policy\": {\n\".tag\": \"team\"\n}\n},\n\"name\": \"dir\",\n\"shared_folder_id\": \"84528192421\",\n\"time_invited\": \"2016-01-20T00:00:00Z\",\n\"preview_url\": \"https://www.dropbox.com/scl/fo/fir9vjelf\",\n\"path_lower\": \"/dir\",\n\"permissions\": []\n}\n],\n\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Apps must have full Dropbox access to use this endpoint.\n\nIf a cursor is present then use the value with dropboxListFolderMembersContinue to obtain\nmore results.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-49",
			"name":"dropboxuploadsessionappend",
			"display name":"dropboxUploadSessionAppend",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxUploadSessionAppend <pAccessToken>, <pSession>, <pOffset>, <pData>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxUploadSessionAppend <i>pAccessToken</i>, <i>pSession</i>, <i>pOffset</i>, <i>pData</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"Append more data to an upload session.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pSession",
				"type":"",
				"refparam":"false",
				"description":"A session ID as returned by dropboxUploadSessionStart."
			},{
				"name":"pOffset",
				"type":"",
				"refparam":"false",
				"description":"The amount of data that has been uploaded so far. We use this to\nmake sure upload data isn't lost or duplicated in the event of a network error."
			},{
				"name":"pData",
				"type":"",
				"refparam":"false",
				"description":"The binary file data"
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. \n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"> *Note:* A single request should not upload more than 150 MB of file contents.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		},{
			"id":"com.livecode.library.dropbox-50",
			"name":"dropboxlistfoldergetlatestcursor",
			"display name":"dropboxListFolderGetLatestCursor",
			"library":"com.livecode.library.dropbox",
			"type":"command",
			"syntax":[
				"dropboxListFolderGetLatestCursor <pAccessToken>, <pPath>, <pRecursive>, <pIncludeMediaInfo>, [<pCallback>]"
			],
			"display syntax":[
				"dropboxListFolderGetLatestCursor <i>pAccessToken</i>, <i>pPath</i>, <i>pRecursive</i>, <i>pIncludeMediaInfo</i>, [<i>pCallback</i>]"
			],
			"associations":["com.livecode.library.dropbox"],
			"summary":"A way to get a cursor for the folder's state.",
			"parameters":[{
				"name":"pAccessToken",
				"type":"",
				"refparam":"false",
				"description":"An OAuth2 Access token to access the user's account"
			},{
				"name":"pPath",
				"type":"",
				"refparam":"false",
				"description":"The path to the folder you want to see the contents of."
			},{
				"name":"pRecursive",
				"type":"",
				"refparam":"false",
				"description":"If true, the list folder operation will be applied recursively to all subfolders and\nthe response will contain contents of all subfolders. The default for this field is False."
			},{
				"name":"pIncludeMediaInfo",
				"type":"",
				"refparam":"false",
				"description":"If true, FileMetadata.media_info is set for photo and\nvideo. The default for this field is False."
			},{
				"name":"pCallback",
				"type":"",
				"refparam":"false",
				"description":"The handler to call when the request is complete. If empty the command\nwill block until complete. Requires tsNet with LiveCode Indy License."
			}],
			"value":[{
				"name":"it",
				"type":"",
				"description":"For asynchronous requests it will contain a request ID. This may be used with\ntsNet's tsNetGetStatus function. If the request is synchronous and successful the it\nvariable will be a UTF-8 encoded JSON string in the form:\n\n````\n{\n\"cursor\": \"ZtkX9_EHj3x7PMkVuFIhwKYXEpwpLwyxp9vMKomUhllil9q7eWiAu\"\n}\n````\n\nIf an error occurred the JSON string will be in the following form:\n\n````\n{\n\"error_summary\": string,\n\"error\": {\n\".tag\": string\n}\n}\n````\n"
			},{
				"name":"the result",
				"type":"",
				"description":"An error if the HTTP request failed"
			}],
			"description":"Unlike dropboxListFolder, dropboxListFolderGetLatestCursor doesn't return any entries. This endpoint is \nfor app which only needs to know about new files and modifications and doesn't need to know\nabout files that already exist in Dropbox. Use the returned cursor with dropboxListFolderContinue to\nobtain the entries.\n\nIf the callback parameter is not empty the request will be asynchronus and\nwhen complete the callback will be sent to the object that accessed the API.\nThe callback will be sent with three parameters:\n\n- The request ID which will be the value of the it variable after calling the command\n- The HTTP response code\n- The data returned which will be the same data as documented for the it variable in a synchronous request."
		}