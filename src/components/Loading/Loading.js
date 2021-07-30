import React from 'react'
/*Material UI */
import { CircularProgress } from '@material-ui/core';
//styled
import { LoadingContainer } from './styled'

export default function Loading() {
    return(
        <LoadingContainer>
            <CircularProgress />    
        </LoadingContainer>
    )
}