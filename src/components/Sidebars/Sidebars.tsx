import './sidebars.module.scss';
import styles from './sidebars.module.scss';

export const Sidebars = () => (
    <div className={styles.sidebars}>
        <ul className={styles.first_block}>
            <li><a href="#">
                <span>Home</span>
            </a></li>
            <li><a href="#">
                <span>Create</span>
            </a></li>
            <li><a href="#">
                <span>My Profile</span>
            </a></li>
            <li><a href="#" className={styles.disabled}>
                <span>Messenger</span>
            </a></li>
            <li><a href="#">
                <span>Search</span>
            </a></li>
        </ul>
        <ul className={styles.second_block}>
            <li><a href="#">
                <span>Statistics</span>
            </a></li>
            <li><a href="#">
                <span>Favorites</span>
            </a></li>
        </ul>

        <ul>
            <li><a href="#">
                <span>Log Out</span>
            </a></li>
        </ul>
    </div>

);




