import SidebarLink from "./SidebarLink"
import { AddBooksIcon, CheckOutBooksIcon, DashboardIcon, HelpIcon, MembersIcon, SettingsIcon } from "./Icons"

const Sidebar = () => {
    return (
        <aside className="fixed left-0 top-16 w-56 border-r h-screen bg-white">
            <div className="h-full px-2 mt-8">
                <ul className="space-y-4 text-gray-700">
                    <SidebarLink
                        to="/dashboard"
                        icon={DashboardIcon}
                        text="Dashboard"
                    />
                    <SidebarLink
                        to="/members"
                        icon={MembersIcon}
                        text="Member"
                    />
                    <SidebarLink
                        to="/add_books"
                        icon={AddBooksIcon}
                        text="Add Books"
                    />
                    <SidebarLink
                        to="/check_out"
                        icon={CheckOutBooksIcon}
                        text="Check-out Books"
                    />
                    <SidebarLink
                        to="/settings"
                        icon={SettingsIcon}
                        text="Settings"
                    />
                    <SidebarLink
                        to="/help"
                        icon={HelpIcon}
                        text="Help"
                    />
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar