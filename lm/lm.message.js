module.exports = require("protobufjs").newBuilder({})['import']({
    "package": "lm",
    "syntax": "proto2",
    "messages": [
        {
            "name": "helloworld",
            "syntax": "proto2",
            "fields": [
                {
                    "rule": "required",
                    "type": "int32",
                    "name": "id",
                    "id": 1
                },
                {
                    "rule": "required",
                    "type": "string",
                    "name": "str",
                    "id": 2
                },
                {
                    "rule": "optional",
                    "type": "int32",
                    "name": "opt",
                    "id": 3
                }
            ]
        }
    ],
    "isNamespace": true
}).build();