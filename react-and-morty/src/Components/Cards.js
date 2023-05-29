import { useState } from "react";
import {Link} from "react-router-dom";
import './Cards.scss';
import Modal from "./Modal";

const Cards = ({image,name,location,status,species,id}) => {
    const [modal,setModal]=useState(false);
    const close=()=>setModal(false)
    const open=()=>setModal(true)

    return (
            <>
                <div className="flip-card-container">
                    <div className="flip-card">

                        <div className="card-front">
                            <figure>
                                <div className="img-bg"></div>
                                <img src={image} alt="" />
                                <figcaption>{name}</figcaption>
                            </figure>
                        </div>

                        <div className="card-back">
                            <figure>
                                <div className="img-bg"></div>
                                <img src={image} alt="" />
                            </figure>
                            <Link  
                                onClick={()=>modal? close():open()}
                                key={id}
                            >
                                <button>Info</button>
                            </Link>
                        </div>

                    </div>
                </div>
                
                {modal && <Modal modal={modal} handleClose={close} name={name} image={image} location={location} species={species} status={status}/>}
            </>
    );
};

export default Cards;