import HttpMethods from "../../@types/httpMethods";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRequestOptions {
    method: HttpMethods;
    body?: Record<string, any>;
    url: string;
}

async function request({
    method,
    body,
    url,
}: IRequestOptions): Promise<Record<string, any>> {
    return fetch(url, {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        ...(body && { body: JSON.stringify(body) }),
    })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => error);
}

export default request;
