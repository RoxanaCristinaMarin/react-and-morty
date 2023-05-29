import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from '../Components/Cards';
import NavBar from '../Components/NavBar';
import ParticleBackground from '../Components/ParticleBackground';

import './Locations.scss'


const Locations = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [locations, setLocations] = useState([])
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const LoadLocations = async () => {
            
            const newLocations = await fetch(`https://rickandmortyapi.com/api/location/?page=${pageNumber}`).then(res=>res.json()).catch(err=>console.error(err));
            setLocations(locations.concat(newLocations.results));
            
            if(pageNumber === newLocations.info.pages){
                 setHasMore(false);
            }
        }


        LoadLocations();
    }, [pageNumber])
    
    return( <>
                <NavBar />
                <ParticleBackground />
                <InfiniteScroll
                    dataLength={locations.length}
                    next={() => { setPageNumber(pageNumber+1)}} 
                    hasMore={hasMore}
                >
                    <div className='locations-wrapper'>
                        {locations.map((loc) => {
                            return <Cards className='characters-items' key={loc.id} name={loc.name} image={require(`../images/rick-and-morty-${Math.floor(Math.random() * 10) + 1}.png`)} location={loc.dimension} species={loc.type} status={''} />
                        })}
                    </div>
                </InfiniteScroll>
            </>
        )
};

export default Locations;