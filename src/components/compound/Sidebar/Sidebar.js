import React from 'react'
import styles from "./Sidebar.module.scss";
import { SidebarData } from './SidebarData';


const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
        <header className={styles.sidebarHeader}>proform.</header>
        <ul className={styles.sidebarList}>
            {
                SidebarData.map((SidebarItem, Key)=>{
                    return(
                        <>
                        <li
                            key={Key}
                            className={styles.sidebarItem}
                            id={window.location.pathname === SidebarItem.link ? styles.active : "" }
                            onClick={()=>{window.location.pathname = SidebarItem.link}}
                            style={{
                                borderRight: `${window.location.pathname === SidebarItem.link ? "2px solid #4040F2" : "" }`
                                }}
                            >
                            <div 
                            style={{
                                color:`${window.location.pathname === SidebarItem.link ? "#4040F2" : "#A8B0B9" }`, 
                                }}>
                                    {SidebarItem.icon}
                            </div>
                            <div>{SidebarItem.title}</div>
                        </li>

                        </>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Sidebar