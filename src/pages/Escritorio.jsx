import React, { useContext, useState } from 'react'
import { Row, Col, Typography, Button, Divider } from 'antd'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import useHideMenu from '../hooks/useHideMenu'
import { getUserStorage } from '../helpers/getUserStorage'
import { Navigate, useNavigate } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'

const { Title, Text } = Typography

const Escritorio = () => {
  useHideMenu( false )
  const [ user ] = useState( getUserStorage )
  const navigate = useNavigate()
  const { socket } = useContext( SocketContext )
  const [ ticket, setTicket ] = useState(null)

  const exit = () => {
    localStorage.clear()
    navigate('/login')
  }

  const nextTicket = () => {
    socket.emit('next-ticket-to-work', user, (ticket) => {
      setTicket(ticket)
    })
  }

  if ( !user.agent || !user.desk ) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Row>
        <Col span={ 20 }>
          <Title level={ 2 }>{ user.agent }</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type='success'>{ user.desk }</Text>
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
      {
        ticket && (
          <Row>
            <Col>
              <Text>Está atendiendo el ticket número: </Text>
              <Text
                style={{ fontSize: 30 }}
                type='danger'
              >
                { ticket.number }
              </Text>
            </Col>
          </Row>
        )
      }
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