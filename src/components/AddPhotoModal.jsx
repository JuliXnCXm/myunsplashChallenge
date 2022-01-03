import React from 'react'
import { Modal, Form } from 'react-bootstrap';
import '../styles/addPhotoModal.css'
import useAddPhoto from '../hooks/useAddPhoto';
import ProgresBar from './ProgresBar';
import {Alert} from 'react-bootstrap';


const AddPhotoModal = ({show , handleClose}) => {

    const {
        form,
        showModal,
        created,
        setCreated,
        handleForm,
        handleSubmit,
        } = useAddPhoto();

        if (created === true) {
            setTimeout(() => {
                setCreated(false)
                handleClose()
                window.location.reload()
            }, 3000)
        }

    return (
        <>
            <Modal className='modalContainer' show={show} onHide={handleClose}>
                {
                    created === true ?
                    <Alert className='alert_modal' >
                        Photo added successfully
                    </Alert>
                    : null
                }
                <h2>Add a new photo</h2>
                <Form method="POST" onSubmit={handleSubmit} className='addPhoto--form'>
                    <Form.Group className="mb-3">
                        <Form.Label>label</Form.Label>
                        <Form.Control value={form.value} name="label" onChange={handleForm}className='addPhoto--form__input' type="text" placeholder="Suspendisse elit massa" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control value={form.photourl} name="photourl" onChange={handleForm} className='addPhoto--form__input' type="text" placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib" />
                    </Form.Group>
                    <div className='buttons'>
                        <button type='submit' id='buttonSubmit'>
                            Submit
                        </button>
                        <button id='buttonCancel' onClick={handleClose} >
                            Cancel
                        </button>
                    </div>
                </Form>
                <ProgresBar show={showModal}/>
            </Modal>
        </>
    );
}

export default AddPhotoModal
