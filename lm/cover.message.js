module.exports = require("protobufjs").newBuilder({})['import']({
    "package": "cover",
    "syntax": "proto2",
    "messages": [
        {
            "name": "helloworld",
            "syntax": "proto2",
            "fields": [],
            "messages": [
                {
                    "name": "helloCoverReq",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "string",
                            "name": "name",
                            "id": 1
                        }
                    ]
                },
                {
                    "name": "helloCoverRsp",
                    "syntax": "proto2",
                    "fields": [
                        {
                            "rule": "required",
                            "type": "int32",
                            "name": "retcode",
                            "id": 1
                        },
                        {
                            "rule": "optional",
                            "type": "string",
                            "name": "reply",
                            "id": 2
                        }
                    ]
                }
            ]
        }
    ],
    "isNamespace": true
}).build();