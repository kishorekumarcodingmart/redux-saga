import React, {useEffect,} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getCatsFetch} from './Redux/catState'

function App() {
  const cats = useSelector(state => state.cats.cats)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCatsFetch())
  },[dispatch])


  return (
    <div>
      <h1>CAT SPECIES</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, quia recusandae quaerat eos, sequi dolorem cumque accusantium fugiat rerum provident impedit nemo? Repudiandae explicabo provident accusantium debitis numquam dolorum iste.</p>
      <hr />
      <div className='Gallery'>
        {
          cats.map((val)=>{
            return(
              <div key={val.id} className="row">
                <div className='column column-right'>
                  <h2>{val.name}</h2>
                  <p>{val.description}</p>
                  <p><span>Temperament</span> : {val.temperament}</p>
                  <p><span>Origin</span> : {val.origin}</p>
                  <p><span>Lifespan</span> : {val.life_span} Years</p>
                  <a href={val.wikipedia_url}>Wikipedia</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App