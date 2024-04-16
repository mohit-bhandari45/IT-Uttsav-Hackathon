import { createContext } from "react";

export const DetailsContext = createContext({
    "personal": {
        "uname": "",
        "phone": "",
        "email": ""
    },
    "items":{
            "name": "",
            "types": "",
            "file": []
    }
})