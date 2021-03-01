import {BiAward, BiHomeAlt} from 'react-icons/bi';
import Link from 'next/link';

import styles from '../styles/components/NavigationBar.module.css';

interface NavigationBarProps {
  activeMenu?: number;
}

function NavigationBar({activeMenu = 0}: NavigationBarProps) {
  return (
    <div className={styles.navigationContainer}>
      <img src="icons/Logo.svg" alt="Moveit"/>

      <Link href='/'>
        <div className={activeMenu == 0 && styles.selectedMenu}>
          <BiHomeAlt size={35}/>
        </div>
      </Link>

      <Link href='/leaderboard'>
        <div className={activeMenu == 1 && styles.selectedMenu}>
          <BiAward size={35}/>
        </div>
      </Link>
    </div>
  )
}

export default NavigationBar;