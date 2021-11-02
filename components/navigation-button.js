import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './navigation-button.module.css'

function NavigationButton({ notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  )
}

export default NavigationButton



{/*
Burada şimdi biz ilk olarak butonun içine propslar dışında
  selected ve notift adında 2 değişken yolluyoruz.
    Eğer selected değeri doğru olarak verilmişse .
        Butonun renginin değişmesini sağlıyoruz.
    Eğer selected değeri yoksa rengi sabit kalıyor.

    Eğer notify değeri yoksa bildirim yok dicez.
      Eğer notify değeri varsa span içinde o değeri yazırmak istiyoruuz.
    
    Propslar yerine kullanılabilir.
    
*/}