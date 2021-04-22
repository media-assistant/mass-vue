import { createFetch } from '@vueuse/core';
import { useAuth } from '../../compositions/auth';

const api_url = import.meta.env.VITE_API_URL as string | undefined || '';

export const prefix = `${window.location.protocol}//${api_url}/api`;

const getHeaders = (headers: HeadersInit | undefined): HeadersInit => {
    const { token } = useAuth();

    if (headers === undefined) {
        headers = {};
    }

    if (token.value !== undefined) {
        headers = {
            'Authorization': `Bearer ${token.value}`,
            ...headers,
        };
    }

    return headers as HeadersInit;
};

export const useFetch = createFetch({
    baseUrl: prefix,
    options: {
        beforeFetch({ options }) {
            return {
                options: {
                    ...options,
                    headers: getHeaders(options.headers),
                }
            };
        },
    }
});