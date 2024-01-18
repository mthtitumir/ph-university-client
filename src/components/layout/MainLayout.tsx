import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const { Content, Header } = Layout;


const MainLayout = () => {
    return (
        <Layout style={{height: "100vh"}}>
            < Sidebar />
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {/* <h1>The main content should go here.</h1> */}
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout



// const items: MenuProps["items"] = [
//     {
//         key: "Dashboard",
//         label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
//     },
//     {
//         key: "Profile",
//         label: "Profile",
//     },
//     {
//         key: "User Management",
//         label: "User Management",
//         children: [
//             {
//                 key: "Create Admin",
//                 label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
//             },
//             {
//                 key: "Create Faculty",
//                 label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
//             },
//             {
//                 key: "Create Student",
//                 label: <NavLink to="/admin/create-student">Create Student</NavLink>,
//             },
//         ]
//     },
// ];