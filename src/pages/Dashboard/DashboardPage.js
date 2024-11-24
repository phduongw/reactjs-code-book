import React, {useEffect, useState} from 'react';
import DashboardEmpty from "./components/DashboardEmpty";
import DashboardCard from "./components/DashboardCard";
import { getUserOrders } from "../../services";

const DashboardPage = () => {
    const [orders, setOrders] = useState([]);
    console.log("Orders", orders);
    const token = JSON.parse(sessionStorage.getItem("accessToken"));
    const userId = JSON.parse(sessionStorage.getItem("useId"));
    useEffect(() => {
        getUserOrders()
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