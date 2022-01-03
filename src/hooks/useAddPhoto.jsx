import React, {useState} from 'react'
import axios from 'axios'
import { apiUpload } from '../context/Api'

const useAddPhoto = () => {
    const [showModal , setShowModal] = useState(false)
    const [created, setCreated] = useState(false)
    const [ form, setForm ] = useState( {
        label: '',
        photourl: ''
    })

    const send = () => {
        const formData = new FormData()
        formData.append('fileForm', JSON.stringify(form))
        axios.post( `${apiUpload}/${form.label}`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data',
                'authorization': 'Bearer ' + localStorage.getItem('token')
            },
            onUploadProgress: () => {
                setShowModal(true)
            }
        }
        ).then(async (resp) => {
        if(resp.status === 201) {
            let json = await resp.data
            setShowModal(false)
            setCreated(true)
        }
        console.log(resp)
        }).catch( ( error ) =>
        {
            console.error( error );
            setCreated(false)
        } )
    }
    const handleForm = (e) => {
        setForm( {
            ...form, [ e.target.name ]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        send()
    }

    return {
        form,
        handleForm,
        showModal,
        created,
        setCreated,
        setShowModal,
        handleSubmit,
    }
}

export default useAddPhoto
