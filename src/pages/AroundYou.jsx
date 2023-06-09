
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
import { Error,Loader,SongCard } from '../components';

const CountryTracks = () => {
    const [country,setCountry] = useState('')
    const [loading, setLoading] = useState(true)
    const { data,isFetching, error } = useGetSongsByCountryQuery(country)

    const {activeSong, isPlaying} = useSelector((state) => state.player)
    useEffect(() => {
        axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_qYnBvKowO7FeYPMfFe6GvqI0imyh6')
            .then((res) => setCountry(res?.data?.location?.country))
            .catch((err)=>console.log(err))
            .finally(()=> setLoading(false))
    },[country])

    if(isFetching && loading ) return <Loader title="Loading songs around you"/>

    if(error && country ) return <Error />
    return (
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Around You <span className='font-black'>{country ==='VN' ?'VietNam':'others' }</span></h2>
        <div className='flex flex-wrap justify-center sm:justify-start gap-8'>
            {
                data?.map((song,i)=>
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

export default CountryTracks;
