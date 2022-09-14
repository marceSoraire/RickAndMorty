import '../../Style/Style.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { unique } from '../../Functions/Functions';
import CardDetails from '../CardDetails/CardDetails';
import Load from '../Load/Load';
const Details = () => {
    const [one, setOne] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        unique(id, setOne);
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [id])


    return (
        <>
        {loading ? (<Load />)
        : (
            one !== null ? (
                <div key={one.id} className='cards'>
                    <CardDetails data={one}/>
                </div>
            ) : ('Losiento!!! ocurrio un error al cargar los personajes')
        )}
            
        </>
    )
}

export default Details;