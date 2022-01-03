import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import useLogin from '../hooks/useLogin'
import Register from '../components/Register'
import "../styles/register.css"

const Login = () =>{
    const [regist, setRegist] = useState(false);

    const { form,
        handleForm,
        handleSubmit } = useLogin();

    return (regist ? <Register /> : (
        <div className='container'>
            <h2>login</h2>
            <Form className='formAuth' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control className='formAuth--input' value={form.email} name="email" onChange={handleForm} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control className='formAuth--input' value={form.password} name="password" onChange={handleForm} type="password" placeholder="Password" />
                </Form.Group>
                <Button className='buttonAuth' type="submit">
                    Submit
                </Button>
            </Form>
            <Button className='buttonOption' onClick={() => {setRegist(true)}}>sign up</Button>
        </div>
    ))
}

export default Login