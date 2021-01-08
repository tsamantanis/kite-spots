import axios from 'axios';
const bearer = axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

export async function get<T>(
    path: string
): Promise<T> {
    try {
        const { data } = await axios.get(path);
        return data;
    } catch (err) {
        return err;
    }
};

export async function getParams<T>(
    path: string,
    params: object
): Promise<T> {
    try {
        const { data } = await axios.get(path, params);
        return data;
    } catch (err) {
        return err;
    }
};

export async function postBody<T>(
    path: string,
    body: object
): Promise<T> {
    try {
        const { data } = await axios.post(path, body);
        return data;
    } catch (err) {
        return err;
    }
};
