import {useState} from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import styles from "./sidebar.module.scss"

type menuItemsType = Array<menuItem>
type menuItem = {
    id: string, label: string, isActive: boolean, isDisabled: boolean, activeId: string
}
export const Sidebar = () => {
    const [menuItems, setMenuItems] = useState<menuItemsType>([
        {id: "home-outline", label: "Home", isActive: false, isDisabled: false, activeId: "home"},
        {id: "plus-square-outline", label: "Create", isActive: false, isDisabled: true, activeId: "plus-square"},
        {id: "person-outline", label: "My Profile", isActive: false, isDisabled: false, activeId: "person"},
        {id: "message-circle-outline", label: "Messenger", isActive: false, isDisabled: false, activeId: "message-circle"},
        {id: "search-outline", label: "Search", isActive: false, isDisabled: false, activeId: "search"},
        {id: "trending-up-outline", label: "Statistics", isActive: false, isDisabled: false, activeId: "trending-up"},
        {id: "bookmark-outline", label: "Search", isActive: false, isDisabled: false, activeId: "bookmark"},
        {id: "log-out-outline", label: "Log Out", isActive: false, isDisabled: false, activeId: "log-out"}]
    )

    const handleActivate = (id: string) => {
        setMenuItems((prevItems: menuItemsType) => prevItems.map((item) => item.id === id ?
                {...item, isActive: true}
                : {...item, isActive: false}
            )
        )
    }

    return (
        <ul className={styles.sidebar}>
            {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}
                                 id={item.isActive ? item.activeId : item.id}
                                 label={item.label}
                                 isActive={item.isActive}
                                 isDisabled={item.isDisabled}
                                 onActivate={() => handleActivate(item.id)}
                />

            ))}
        </ul>
    )
}


