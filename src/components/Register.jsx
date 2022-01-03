import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import useRegister from '../hooks/useRegister'
import Login from '../components/Login'
import '../styles/register.css'


const Register = ({handleClose}) =>
{
    const [ login, setLogin ] = useState( false );

    const {form,
        handleSubmit,
        handleForm} = useRegister();


    return (login ? <Login /> : (
        <>
            <div className='container'>
                <h2>Register</h2>
                <Form className='formAuth' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label></Form.Label>
                        <Form.Control className='formAuth--input' value={form.name} onChange={handleForm} name="name" type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label></Form.Label>
                        <Form.Control className='formAuth--input' value={form.lastname} onChange={handleForm} name="lastname" type="text" placeholder="Enter lastname" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label></Form.Label>
                        <Form.Control className='formAuth--input' value={form.email} onChange={handleForm} name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label></Form.Label>
                        <Form.Control className='formAuth--input' value={form.password} onChange={handleForm} name="password" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='buttonAuth' type="submit">Submit</Button>{' '}
                </Form>
                <Button className='buttonOption' onClick={() => { setLogin( true ) }}>Login</Button>
            </div>
        </>
    ))
}

export default Register