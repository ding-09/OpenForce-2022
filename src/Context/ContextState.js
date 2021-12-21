import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../FirebaseInit";
import BaseContext from "./BaseContext.js";

const BaseState = (props) => {

    //endpoint is the server endpoint
    //type -> POST, GET, PUT etc
    //data is the data to be sent to server
    const callApi = async (endpoint, type, data) => {
        const url = `http://localhost:5000${endpoint}`;
        const resp = await fetch(url, {
            method: type,
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data),
        });

        const parsed = await resp.json();
        return parsed;
    };

    //type is the extension and media type like for photo it will be image/jpg or image/png
    //e is the id for the input tag whose data to be uploaded
    // filename is the name to be given to file
    const upload = async (type, e, fileName) => {
        e = document.getElementById(e);
        const file = e.files[0];
        var fileRef = ref(storage, fileName);
        const metadata = {
            contentType: type,
        };

        await uploadBytesResumable(fileRef, file, metadata);

        const url = await getDownloadURL(fileRef);

        return url;
    };


    return (
        <BaseContext.Provider
            value={upload,callApi}
        >
            {props.children}
        </BaseContext.Provider>
    );
};

export default BaseState;