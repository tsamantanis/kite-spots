import axios from 'axios';

export async function get<T>(
    path: string
): Promise<T> {
    const { data } = await axios.get(path);
    return data;
};

export async function getParams<T>(
    path: string,
    params: object
): Promise<T> {
    const { data } = await axios.get(path, params);
    return data;
};

export async function postBody<T>(
    path: string,
    body: object
): Promise<T> {
    const { data } = await axios.post(path, body);
    return data;
};
