import {React, useState, useMemo } from 'react'
import usePhotos from '../hooks/usePhotos'
import Modal from './Modal'
import '../styles/photos.css'


const Photos = ({query}) => {
    const {photos , handleForm,handleSubmit,formPassword,showAlert} = usePhotos();
    const [ filteredPhotos, setFilteredPhotos ] = useState( photos )
    const [showModal, setShowModal] = useState(false)
    const [photoToDelete, setPhotoToDelete] = useState({})

    const style = {
        backgroundColor: '#f8d7da',
    }

    useMemo( () =>
    {
        const result = photos.filter( photo =>
        {
            return photo.photoname.toLowerCase().includes(query )
        } )
        setFilteredPhotos( result )
    }
        , [ photos, query ] )

    return (
        <>
            <div className='photos--container'>
                {filteredPhotos.map((photo, index) => {
                            return (
                                <div key={index} className='container--image'>
                                    <img src={`${photo.photourl}`} alt="" />
                            <div className='infoContainer'>
                                <button onClick={() => {
                                    setShowModal(true)
                                    setPhotoToDelete(photo)
                                }
                                } >Delete</button>
                                <span>{photo.photoname}</span>
                            </div>
                        </div>)
                })}
            </div>
            { showModal ?
                <Modal>
                    <div className='deletePhotoContainer'  >
                        <h2>Are you sure?</h2>
                        <form onSubmit={(e) => {
                            handleSubmit(e,photoToDelete)
                        }} action="">
                            <label htmlFor="">Password</label>
                            { showAlert ?
                            <input
                            type="password"
                            placeholder='*********************'
                            name="password"
                            style={style}
                            value={formPassword.password}
                            onChange={handleForm} />
                            :
                            <input
                            type="password"
                            placeholder='*********************'
                            name="password"
                            value={formPassword.password}
                            onChange={handleForm} />
                            }
                            <div className="buttons" >
                                <button type="submit" id="buttonDelete">Delete</button>
                                <button  onClick={() => {
                                    setShowModal(false)
                            }}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            : null }
        </>
    )

}

export default Photos
