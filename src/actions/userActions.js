export const loginUser = userObj => {
    return {
        type: 'LOGIN_USER',
        payload: userObj
    }
}

export const logOutUser = () => {
    return {
        type: 'LOGOUT_USER'
    }
}

export function loginUserFetch(userInfo){
    return dispatch=>fetch(`http://localhost:3001/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
    .then(r=>r.json())
    .then(data=>{
        if(data.error){
            alert(data.error)
        } else {
            let user_json = JSON.parse(data.user)
            localStorage.setItem("token", data.jwt)
            dispatch(loginUser(user_json))
        }
    })
} 