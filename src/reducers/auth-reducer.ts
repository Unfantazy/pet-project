import { Dispatch } from 'redux'

const initialState = {
    isLoggedIn: false
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const loginTC = (data: any) => (dispatch: Dispatch<ActionsType>) => {
    // dispatch(setAppStatusAC('loading'))
    // authAPI.login(data)
    //     .then(res => {
    //         if(res.data.resultCode === 0) {
    //             dispatch(setIsLoggedInAC(true))
    //             dispatch(setAppStatusAC('succeeded'))
    //         } else {
    //             handleServerAppError(res.data, dispatch);
    //         }
    //     })
    //     .catch((error) => {
    //         handleServerNetworkError(error, dispatch)
    //     })
}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>