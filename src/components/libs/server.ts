'use server';

import { cookies } from 'next/headers';

export const createCookie = async (key: string, value: string) => {
    const oneDay = 24 * 60 * 60 * 1000;
    (await cookies()).set(key, value, { expires: Date.now() + oneDay });
};

export const getCookie = async (key: string) => {
    const cookieStore = await cookies();
    return cookieStore.get(key)?.value;
};

export const deleteCookie = async (key: string) => {
    const deleteCookie = await cookies();
    return deleteCookie.delete(key);
};
