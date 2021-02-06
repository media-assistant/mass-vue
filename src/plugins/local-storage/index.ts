export const setStorage = <T>(key: string, value: T): void => {
    if (value === undefined) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const getStorage = <T>(key: string, default_value: T): T => {
    const value = localStorage.getItem(key);

    if (value === null) {
        return default_value;
    }

    return JSON.parse(value) as T;
};
