const default_init = {
    // TODO auth token etc.
    headers: {
        'Content-Type': 'application/json',
    },
} as RequestInit;

const prefix = '/api';

export const jsonFetch = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    init = { ...default_init, ...init };

    if (input instanceof Request) {
        input = new Request({ ...input, url: prefix + input.url });
    } else {
        input = prefix + input;
    }

    const response = await fetch(input, init);

    if (! response.ok) {
        throw new Error(response.statusText);
    }

    return response.json().then(data => data as T);
};

export const get = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    return jsonFetch<T>(input, init);
};

export const post = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    return jsonFetch<T>(input, { method: 'POST', ...init, });
};

export const put = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    return jsonFetch(input, { method: 'PUT', ...init, });
};

export const patch = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    return jsonFetch(input, { method: 'PATCH', ...init, });
};

export const del = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    return jsonFetch(input, { method: 'DELETE', ...init });
};

export const upload = async<T>(input: RequestInfo, form_data: FormData, init?: RequestInit | undefined): Promise<T> => {
    return jsonFetch(
        input,
        {
            method: 'PUT',
            ...init,
            body: form_data,
        }
    );
};