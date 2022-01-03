import React from 'react'
import ReactDOM from 'react-dom';
import '../styles/modal.css'


export default function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="modalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}
