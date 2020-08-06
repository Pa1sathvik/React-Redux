import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux'

function HooksCakContainer() {

    const cakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            
        <h2>No of cakes::{cakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy cakes</button>
        </div>
    )
}

export default HooksCakContainer
