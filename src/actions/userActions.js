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

export const createTrade = tradeObj => {
    return {
        type: 'CREATE_TRADE',
        payload: tradeObj
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

export function fetchLoggedInUser() {
    return dispatch=>{
        const token = localStorage.token
        if (token) {
            return fetch(`http://localhost:3001/auto-login`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                    localStorage.removeItem('token')
                } else {
                    // console.log("Fetch Logged In User")
                    dispatch(loginUser(data))
                }
            })
        } 
    }
}

export function createUser(userinfo){
    return dispatch => fetch(`http://localhost:3001/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userinfo) 
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

export function createTradeFetch(tradeInfo){
    return dispatch => fetch(`http://localhost:3001/trades`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(tradeInfo) 
    })
    .then(r=>r.json())
    .then(data=>{
        if(data.error){
            alert(data.error)
        } else {
            // console.log("Created!")
            // let user_json = JSON.parse(data.user)
            let trade_json = JSON.parse(data.user)
            // console.log(data)
            // localStorage.setItem("token", data.jwt)
            // dispatch(loginUser(user_json))
            dispatch(createTrade(trade_json))
        }
    })
}