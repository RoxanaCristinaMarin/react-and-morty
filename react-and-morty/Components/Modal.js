import  './Modal.scss'

const Modal = ({handleClose,name,location,status,species,image}) => {

    return (
        <div className="modalBackground" onClick={() => {handleClose(false)}}>
            <button className="close-modal" onClick={() => {handleClose(false)}}>&#10005;</button>
            <div className="modalContainer" onClick={e=>e.stopPropagation()}>
                <div className="a-box">
                    <div className="img-container">
                        <div className="img-inner">
                            <img src={image} alt='' />
                        </div>
                    </div>
                    <div className="text-container">
                        <h3>{name}</h3>
                        <div>
                            <p>Location|  {location}</p>
                            <p>Type|  {species}</p>
                            {status && <p>Status|  {status}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;