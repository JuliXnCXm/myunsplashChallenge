import { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext'

const useRegister = () => {

    const [ form, setForm ] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
    })
    const { handleRegister } = useContext( AuthContext )

    const handleForm = (e) => {
        setForm({
            ...form, [ e.target.name ]: e.target.value
        })
    }

    const handleSubmit = (e) =>  {
        e.preventDefault()
        console.log(form)
        handleRegister(form)
        setForm( {
            name: '',
            lastname: '',
            email: '',
            password: '',
        } )
    }
    return { form,
        setForm,
        handleForm,
        handleSubmit}
}

export default useRegister;