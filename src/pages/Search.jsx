import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import { Error,Loader,SongCard } from '../components';

const Search = () => {

    const { searchTerm } = useParams()
    const { data,isFetching, error } = useGetSongsBySearchQuery(searchTerm)

    const {activeSong, isPlaying} = useSelector((state) => state.player)
   
    const songs = data?.tracks?.hits?.map((song)=>song.track)

    if(isFetching ) return <Loader title="Loading seachingg"/>

    if(error  ) return <Error />
    return (
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Showing Result for <span className='font-black'>
                  {searchTerm}</span> </h2>
        <div className='flex flex-wrap justify-center sm:justify-start gap-8'>
            {
                songs?.map((song,i)=>
                <SongCard 
                    key={song.key}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                    i={i}
                />)
            }

        </div>
    </div>
)};

export default Search;

