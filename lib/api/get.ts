import axios from 'axios';

export const Apiget = async (url: string, params: { [key: string]: string | number | boolean } = {}): Promise<any> => {
    try {
        const response = await axios.get(url, { params });
        return response.data.docs;
    } catch (error) {
        return [];
    }
};

