import { useState, useContext } from "react";
import AuthContext from '../context/AuthContext'

const useLogin = () =>
{

    const [ form, setForm ] = useState( {
        email: '',
        password: ''
    } )

    const { handleLogin , auth} = useContext( AuthContext )

    const handleForm = (e) =>{
        setForm({
            ...form, [ e.target.name ]: e.target.value
        })
    }

    const handleSubmit = ( e ) =>
    {
        e.preventDefault()
        handleLogin(form)
        if (auth === true) {
            setForm({
                email: '',
                password: ''
            })
        } else {

        }

    }

    return {
        form,
        setForm,
        handleForm,
        handleSubmit
    }
}

export default useLogin