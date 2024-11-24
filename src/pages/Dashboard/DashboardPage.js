import React, {useEffect, useState} from 'react';
import DashboardEmpty from "./components/DashboardEmpty";
import DashboardCard from "./components/DashboardCard";

const DashboardPage = () => {
    const [orders, setOrders] = useState([]);
    console.log("Orders", orders);
    const token = JSON.parse(sessionStorage.getItem("accessToken"));
    const userId = JSON.parse(sessionStorage.getItem("useId"));
    useEffect(() => {
        const fetchOrders = async () => {
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

        fetchOrders()
            .then(data => {
                console.log('data', data);
                setOrders(data)
            });
    }, [token, userId])

    return (
        <main>
            <section>
                <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My
                    Dashboard</p>
            </section>

            <section>
                { orders.length === 0 ?
                    <DashboardEmpty/> :
                    orders.map((order) => (
                        <DashboardCard key={order.id} order={order}/>
                    )) }
            </section>
        </main>
    );
};

export default DashboardPage;