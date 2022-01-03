import {React,useState, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import '../styles/header.css'
import logo from '../assets/logo.svg'
import searchIcon from '../assets/searchIcon.svg'
import AddPhotoModal from './AddPhotoModal'
import Login from '../components/Login'
import Modal from './Modal'
import Photos from './Photos'

const Header = () => {
    const [show, setShow] = useState(false);
    const {auth} = useContext(AuthContext)
    const [query, setQuery] = useState('')

    const handleClick = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <div className='header-container'>
                <div className='header-container__image'>
                    <img className='logo' src={logo} alt="" />
                        <div className='input--container'>
                            <img src={searchIcon} alt="" />
                            <input className='header__input' type="text" placeholder='Search by name' onChange={(e)=> {
                                setQuery(e.target.value)
                            }}/>
                        </div>
                </div>
                    {auth ? <h3>logged</h3> : <h3>not logged  </h3>}
                <div>
                    <button className='header__button' onClick={handleClick} >Add a photo</button>
                </div>
                { show ?
                    <Modal>
                        { auth === true  ? <AddPhotoModal show={show} handleClose={handleClose}/> : <Login/> }
                    </Modal>
                : null }
            </div>
            <Photos query={query}/>
        </>

    )
}


export default Header
