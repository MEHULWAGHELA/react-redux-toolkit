import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReducer } from '../slices/userSlice'
import { getdData } from '../action/action'

const First = () => {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
    useEffect(() => {
        console.log(state)
    }, [state])
    useEffect(() => {
        dispatch(getdData())
    }, [])

    return (
        <div>
            <h1>First Component</h1>
        </div>
    )
}

export default First
