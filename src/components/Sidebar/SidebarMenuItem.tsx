import {Icon} from "../Icon";
import styles from "./sidebar.module.scss"
import {clsx} from "clsx";
import {useState} from "react";

type SidebarMenuItemProps = {
    id: string;
    label: string;
    onActivate?: () => void;
    isActive?: boolean;
    isDisabled?: boolean
}
const SidebarMenuItem = (props: SidebarMenuItemProps) => {
    const {id, label, onActivate, isActive, isDisabled} = props

    const [isHover, setHover] = useState(false);

    const iconColor =
        isActive ? 'var(--color-accent-500)' : isDisabled ? 'var(--color-dark-100)' :
            isHover ? 'var(--color-accent-100)' : 'var(--color-light-100)';

    const handleMouseEnter = () => {
        if (!isDisabled) {
            setHover(true);
        }
    }
    const handleMouseLeave = () => {
        setHover(false)
    }

    return (
        <li className={styles.menuItem} onClick={!isDisabled ? onActivate : undefined} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <a className={clsx(styles.menuItemLink, isDisabled ? styles.menuItemLinkDisabled : "")} href="#">
                <Icon height={24} width={24} color={iconColor} id={id}/>
                <span
                    className={clsx(styles.span, isActive ? styles.spanActive : isHover ? styles.spanHover : isDisabled ? styles.spanDisabled : "")}>{label}</span>
            </a>
        </li>
    )

}
export default SidebarMenuItem;