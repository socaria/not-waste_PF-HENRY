import React, { PureComponent } from "react";
import "./dashboard.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCustomer, getSellers } from "../../redux/actions";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';


function Dashboard() {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customer)
    const sellers = useSelector(state => state.seller)
    
    console.log("🚀 ~ file: Dashboard.jsx ~ line 14 ~ Dashboard ~ customers", customers)
    useEffect(() => {
        dispatch(getCustomer());
        dispatch(getSellers());
    }, [dispatch]);

        
    
    const data = [
        { name: 'Proveedores', value: sellers?.length },
        { name: 'Consumidores', value: customers?.length },
    ];
    const COLORS = ['#FFBB28', '#FF8042'];

    // '#0088FE', '#00C49F', 
    // static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';


    return (

        <div>
            <h1>Dashboard Admin</h1>
            <div className="containerCarousel">
                <h2 className="sellerTitle">Usuarios registrados </h2>
                <PieChart width={400} height={200} onMouseEnter={PureComponent.onPieEnter}>
                    <Pie
                        data={data}
                        cx={250}
                        cy={100}
                        innerRadius={40}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            {/* <div className="containerCarousel">
                <h2 className="sellerTitle">Categoría de proveedores </h2>
                <BarChart width={600} height={300} data={data}>
                    <XAxis dataKey="name" tick={renderCustomAxisTick} />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8"
                        shape={<TriangleBar />} />
                </BarChart>
            </div> */}
            <div className="containerCarousel">
                <h1 className="sellerTitle">
                    Reclamos
                </h1>
            </div>
        </div>
    )
}

export default Dashboard;