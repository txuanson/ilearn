import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { postAttachZoom } from '../api/LinkZoom';
import handleErrorApi from "../util/handleErrorApi";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function AuthenZoom() {
    const history = useHistory();
    const query = useQuery();
    const token = query.get("code");

    useEffect(async () => {
        try {
            if (token) {
                const res = await postAttachZoom({ token });
                window.location.href = "/";
            }
        } catch (err) {
            handleErrorApi(err);
        }
    }, [token]);
    return null;
}