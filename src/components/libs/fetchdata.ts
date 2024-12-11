import { Ilogin } from "../types/types";


export const loginUser = async (data : Ilogin) => {
    const fetchData = await fetch("http://localhost:8080/user/auth/login",{
        headers : {
            "Content-type" : "json/application"
        },
        method : "POST",
        body : JSON.stringify(data),
    })

    const response = await fetchData.json()
    return { result : response, ok : fetchData.ok }
}