import { useSession } from '../../compositions/session';
import router from '../router';
import { LOGIN } from './routes/mass-api';
import type { GenericObject } from '../../types/object';

// TODO Change to VueUse fetch stuff :)

const api_url = import.meta.env.VITE_API_URL as string | undefined || '';

export const prefix = `${window.location.protocol}//${api_url}/api`;

const getDefaults = (): RequestInit => {
    const { token } = useSession();

    const auth_header = token.value !== undefined ? {
        'Authorization': `Bearer ${token.value}`
    } : {};

    return {
        headers: {
            'Content-Type': 'application/json',
            ...auth_header
        },
    } as RequestInit;
};

const customFetch = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    init = { ...getDefaults(), ...init };

    if (input instanceof Request) {
        input = new Request({ ...input, url: prefix + input.url });
    } else {
        input = prefix + input;
    }

    const response = await fetch(input, init);

    if (response.status === 401) {
        void router.push(LOGIN);
    }

    if (! response.ok) {
        throw await responseToError(response);
    }

    return response.json().then(data => data as T);
};

const responseToError = async (response: Response): Promise<Error> => {
    let response_errors = {} as GenericObject;

    try {
        response_errors = (await response.json()) as GenericObject;
    } catch (error) {
        return new Error(response.statusText);
    }
    const errors = (response_errors.errors ?? {}) as GenericObject;

    let message = String(response_errors.message ?? response.statusText);

    for (const key of Object.keys(errors)) {
        message += ' ' + String(errors[key]);
    }

    return new Error(message);
};

export const dataToInit = (data: GenericObject): RequestInit => {
    return { body: JSON.stringify(data) };
};

export const get = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    return customFetch<T>(input, init);
};

export const post = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    return customFetch<T>(input, { method: 'POST', ...init });
};

export const put = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    return customFetch(input, { method: 'PUT', ...init });
};

export const patch = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    return customFetch(input, { method: 'PATCH', ...init });
};

export const del = async<T>(input: RequestInfo, init?: RequestInit | undefined): Promise<T> => {
    return customFetch(input, { method: 'DELETE', ...init });
};

export const upload = async<T>(input: RequestInfo, form_data: FormData, init?: RequestInit | undefined): Promise<T> => {
    return customFetch(
        input,
        {
            method: 'PUT',
            ...init,
            body: form_data,
        }
    );
};