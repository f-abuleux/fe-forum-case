import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface Routing {
    route : string
}

const initialState : Routing = {
    route : "beranda"
}

const routeSlice = createSlice({
    name: "route",
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.route = action.payload;
        },
    },
});


export const { setValue } = routeSlice.actions;
export default routeSlice.reducer