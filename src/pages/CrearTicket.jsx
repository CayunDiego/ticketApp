import React from 'react'
import { Row, Col, Typography, Button } from "antd"
import { DownloadOutlined } from '@ant-design/icons'
import useHideMenu from '../hooks/useHideMenu'

const { Title, Text } = Typography

const CrearTicket = () => {
  useHideMenu( true )

  const newTicket = () => {
    console.log('newTicket')
  }

  return (
    <>
      <Row>
        <Col span={ 14 } offset={ 6 } align="center">
          <Title level={ 3 }>
            Presione el botón para un nuevo ticket
          </Title>

          <Button
            type='primary'
            shape='round'
            icon={ <DownloadOutlined /> }
            size="large"
            onClick={ newTicket }
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 100 }}>
        <Col span={ 14 } offset={ 6 } align="center">
          <Text level={ 2 }>
            Su número
          </Text>
          <br />
          <Text type='success' style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  )
}

export default CrearTicket