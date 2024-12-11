"use server"

import { cookies } from "next/headers";

export const createCookies = async (key : string, value : string) => {
    const oneDayCookie = 24 * 60 * 60 * 1000;
    const cookieStore = await cookies();
    cookieStore.set(key, value, { expires: Date.now() + oneDayCookie });
}