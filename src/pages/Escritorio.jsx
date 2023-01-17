import React, { useState } from 'react'
import { Row, Col, Typography, Button, Divider } from 'antd'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import useHideMenu from '../hooks/useHideMenu'
import { getUserStorage } from '../helpers/getUserStorage'
import { Navigate, useNavigate } from 'react-router-dom'

const { Title, Text } = Typography

const Escritorio = () => {
  useHideMenu( false )
  const [ user ] = useState( getUserStorage )
  const navigate = useNavigate()

  const exit = () => {
    console.log('salir');
    localStorage.clear()
    navigate('/login')
  }

  const nextTicket = () => {
    console.log('nextTicket');
  }

  if ( !user.agente || !user.escritorio ) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Row>
        <Col span={ 20 }>
          <Title level={ 2 }>{ user.agente }</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type='success'>{ user.escritorio }</Text>
        </Col>
        <Col span={ 4 } align="right">
          <Button
            shape='round'
            danger
            type='primary'
            onClick={ exit }
          >
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider/>
      <Row>
        <Col>
          <Text>Está atendiendo el ticket número: </Text>
          <Text
            style={{ fontSize: 30 }}
            type='danger'
          >
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={ 18 } span={ 6 } align="right">
          <Button
            onClick={ nextTicket }
            shape="round"
            type='primary'
          >
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Escritorio