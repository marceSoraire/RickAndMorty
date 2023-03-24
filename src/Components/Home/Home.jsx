import { useEffect, useState } from 'react'
import { all } from '../../Functions/Functions'
import Cards from '../Cards/Cards'
import '../../Style/Style.css';
const Home = () => {
  
  const [personaje, setPersonaje] = useState(null);
  useEffect(() => {
    all(setPersonaje);
  }, [])

  return (
    <>
      {personaje !== null ? (
        <div className='cards'>
          {personaje.map((e) =>
            <div key={e.id} className='individuales'>
              <Cards data={e} />
            </div>
          )}
        </div>
      ) : ('Losiento!!! ocurrio un error al cargar los personajes')}
    </>
  )
}

export default Home
