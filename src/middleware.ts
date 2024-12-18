import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "./components/libs/server";


const protectedUser = [/^\/user(\/.*)?$/];
const protectedAdmin = [/^\/admin-dashboard(\/.*)?$/];

export async function middleware(request: NextRequest) {
    let cookie = await getCookie("token");
    const url = request.nextUrl.pathname;
    let payload;

    console.log("Middleware : " ,cookie)

    return NextResponse.next();
}