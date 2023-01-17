import React, { useContext } from 'react'

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
const { Sider, Content } = Layout

import {
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom"

import Ingresar from "./Ingresar";
import Cola from './Cola'
import CrearTicket from './CrearTicket'
import Escritorio from './Escritorio'
import { UiContext } from '../context/UiContext'

const RouterPage = () => {
  const { hideMenuState } = useContext( UiContext )

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsedWidth="0" 
        breakpoint='md'
        hidden={ hideMenuState }>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to='/login'>Ingresar</Link>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to='/cola'>Cola</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to='/create'>Crear Ticket</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route path='/login' element={ <Ingresar /> }></Route>
            <Route path='/create' element={ <CrearTicket /> }></Route>
            <Route path='/cola' element={ <Cola /> }></Route>
            <Route path='/escritorio' element={ <Escritorio /> }></Route>
            <Route path='/*' element={ <Navigate to='/login' /> }></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default RouterPage