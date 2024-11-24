export const getUser = async () => {
    const token = JSON.parse(sessionStorage.getItem("accessToken"));
    const userId = JSON.parse(sessionStorage.getItem("useId"));

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    }

    const response = await fetch(`http://localhost:1305/600/users/${userId}`, options);
    return await response.json();
}

export const getUserOrders = async () => {
    const token = JSON.parse(sessionStorage.getItem("accessToken"));
    const userId = JSON.parse(sessionStorage.getItem("useId"));

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const response = await fetch(`http://localhost:1305/660/orders?${userId}`, options);
    return await response.json();
}

export const createOrder = async (cartList, total, user) => {
    const token = JSON.parse(sessionStorage.getItem("accessToken"));
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id,
        }
    }

    const options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(order)
    }

    const response = await fetch("http://localhost:1305/660/orders", options);
    return await response.json();
}