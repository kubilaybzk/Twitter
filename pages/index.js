import React from 'react'

import Layout from '../components/layout'

import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'

import useWindowSize from '../hooks/useWindowSize';

import CONST from '../constants/index'



function HomePage() {

  const size = useWindowSize();

  return (
    <Layout>

      <Sidebar flat={size.width < CONST.DESKTOP_SIZE }> Sidebar </Sidebar>
      <Main> Şuan ayarlanan boyut {size.width}px {size.height}px</Main>
      {size.width>CONST.TABLET_SIZE && <Extra>Extra</Extra>}

    </Layout>
  )
}

export default HomePage
