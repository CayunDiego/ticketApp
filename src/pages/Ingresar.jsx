import React, { useState } from 'react'
import { Button, 
  Divider, 
  Form, 
  Input, 
  InputNumber, 
  Typography 
} from 'antd'
import { SaveOutlined } from "@ant-design/icons"
import { Navigate, useNavigate } from 'react-router-dom'
import useHideMenu from '../hooks/useHideMenu'
import { getUserStorage } from '../helpers/getUserStorage'

const { Title, Text } = Typography

const Ingresar = () => {
  const navigate = useNavigate()
  const [ user ] = useState( getUserStorage )
  useHideMenu( false )

  const onFinish = (values) => {
    console.log('Success:', values)

    localStorage.setItem('agente', values.agente)
    localStorage.setItem('escritorio', values.escritorio)

    navigate('/escritorio')
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  if ( user.agente && user.escritorio ) {
    return <Navigate to="/escritorio" />
  }

  return (
    <>
      <Title level={ 2 }>Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Divider/>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su nombre',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: 'Ingrese el número de escritorio',
            },
          ]}
        >
          <InputNumber min={ 1 } max={ 99 } />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button type="primary" 
            htmlType="submit"
            shape='round'>
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Ingresar