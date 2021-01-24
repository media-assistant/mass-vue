const default_init = {
    // TODO auth token etc.
};

export const get = (input: RequestInfo, init?: RequestInit | undefined): Promise<Response> => {
    return fetch(
        input,
        {
            ...default_init,
            ...init,
        }
    );
};

export const post = (input: RequestInfo, init?: RequestInit | undefined): Promise<Response> => {
    return fetch(
        input,
        {
            ...default_init,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            ...init,
        }
    );
};

export const put = (input: RequestInfo, init?: RequestInit | undefined): Promise<Response> => {
    return fetch(
        input,
        {
            ...default_init,
            method: 'PUT',
            ...init,
        }
    );
};

export const patch = (input: RequestInfo, init?: RequestInit | undefined): Promise<Response> => {
    return fetch(
        input,
        {
            ...default_init,
            method: 'PATCH',
            ...init,
        }
    );
};

export const del = (input: RequestInfo, init?: RequestInit | undefined): Promise<Response> => {
    return fetch(
        input,
        {
            ...default_init,
            method: 'DELETE',
            ...init,
        }
    );
};

export const upload = (input: RequestInfo, form_data: FormData, init?: RequestInit | undefined): Promise<Response> => {
    return fetch(
        input,
        {
            ...default_init,
            method: 'PUT',
            ...init,
            body: form_data,
        }
    );
};