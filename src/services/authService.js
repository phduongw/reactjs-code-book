
export const login = async (authDetails) => {
    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(authDetails)
    }

    const response = await fetch("http://localhost:1305/login", options);
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        sessionStorage.setItem("useId", JSON.stringify(data.user.id));
    }

    return data
}

export const register = async (authDetails) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(authDetails)
    }

    const response = await fetch("http://localhost:1305/register", requestOptions);
    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("accessToken", JSON.stringify(data.accessToken));
        sessionStorage.setItem("useId", JSON.stringify(data.user.id));
    }

    return data;
}

export const logout = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("useId");
}