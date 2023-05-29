import { useEffect, useState, useRef } from "react";
import './Characters.scss';
import InfiniteScroll from 'react-infinite-scroll-component';

import Cards from "../Components/Cards";
import NavBar from "../Components/NavBar";
import ParticleBackground from "../Components/ParticleBackground";


const Characters = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [characters, setCharacters] = useState([])
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const LoadCharacters = async () => {
            
            const newCharacters = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`).then(res=>res.json()).catch(err=>console.error(err));
            setCharacters( characters.concat(newCharacters.results));
            
            if(pageNumber === newCharacters.info.pages){
                 setHasMore(false);
            }
        }


        LoadCharacters();
    }, [pageNumber])
    
    return( 
            <>
                <NavBar />
                <ParticleBackground />
                <InfiniteScroll
                    dataLength={characters.length}
                    next={() => { setPageNumber(pageNumber+1)}} 
                    hasMore={hasMore}
                >
                    <div className="characters-wrapper">
                        {characters?.map((character) => {
                            let{id,name,image,location,species,status}=character;
                            return <Cards className='characters-items' key={id} name={name} image={image} location={location.name} species={species} status={status} />
                        })}
                    </div>
                </InfiniteScroll>
            </>
    )
}

export default Characters;