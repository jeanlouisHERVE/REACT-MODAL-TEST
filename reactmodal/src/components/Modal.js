import styled from 'styled-components'

export default function Modal({showModal, setShowModal}) {
    return (
        <>
           {showModal ? <div>Modal</div> : null} 
        </>
    )
}
