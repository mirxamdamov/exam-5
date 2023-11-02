export const saveToLocalStorage = (key: string, data: any) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.error('LocalStorage error:', error);
    }
};

export const getFromLocalStorage = (key: string, defaultValue: any = null) => {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) {
            return defaultValue;
        }
        return JSON.parse(serializedData);
    } catch (error) {
        console.error('LocalStorage error:', error);
        return defaultValue;
    }
};