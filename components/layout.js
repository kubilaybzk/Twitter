import React from 'react'
import cn from 'classnames'
import styles from './layout.module.css'

function Layout({children,...props }) {
  return (
   <div className={styles.Layout}>
       {children}
   </div>
  )
}

export default Layout
