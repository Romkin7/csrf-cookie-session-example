import HttpMethods from '../../@types/httpMethods';

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
        .then(async (response) => {
            if (!response.ok) {
                throw response;
            }
            return await response.json();
        })
        .then((data) => {
            return data;
        })
        .catch(async (error) => {
            const errorResponse = await error.json();
            throw errorResponse;
        });
}

export default request;
