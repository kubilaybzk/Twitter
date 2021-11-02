import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

function photo ({src,alt,children}){
    return(

        <div className={cn([styles.photo])}>
                <img 
                src="https://pbs.twimg.com/profile_images/1435300553416917000/vavcTO0Z_400x400.jpg"
                alt="Kubilay" 
                className={styles.img}/> 
        </div>
    )
}

export default photo