import { Ilogin, IRegister } from "../types/types";


export const loginUser = async (data : Ilogin) => {
    const fetchData = await fetch(`${process.env.BACKEND_API}users/auth/login`,{
        headers : {
            "Content-type" : "application/json"
        },
        method : "POST",
        body : JSON.stringify(data),
    })
    const response = await fetchData.json()
    console.log(response)
    return { result : response, ok : fetchData.ok }
}

export const registerUser = async (data : IRegister) => {
    const fetchData = await fetch(`${process.env.BACKEND_API}users/create`, {
        headers : {
            "Content-type" : "application/json"
        },
        method : "POST",
        body : JSON.stringify(data)
    })

    const response = await fetchData.json()
    return { result : response, ok : fetchData.ok}
}