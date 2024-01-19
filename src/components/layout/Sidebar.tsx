import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
const { Sider } = Layout;
const userRole = {
    admin: "admin",
    faculty: "faculty",
    student: "student"
}

const Sidebar = () => {
    const role = userRole.admin;
    let sidebarItems;
    switch (role) {
        case userRole.admin:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.admin);
            break;
        case userRole.faculty:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.faculty);
            break;
        case userRole.student:
            sidebarItems = sidebarItemsGenerator(studentPaths, userRole.student);
            break;
        default:
            break;
    }
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div style={{ color: "whitesmoke", textAlign: "center", height: '4rem', display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{}}>Ph University</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
        </Sider>
    )
}

export default Sidebar