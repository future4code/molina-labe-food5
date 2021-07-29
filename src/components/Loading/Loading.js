import React from 'react'

//styled
import { LoadingContainer } from './styled'

export default function Loading() {
    return(
        <LoadingContainer>
            <iframe src="https://giphy.com/embed/11ASZtb7vdJagM" 
                width="480" height="480" frameBorder="0" class="giphy-embed">
            </iframe>
              
        </LoadingContainer>
    )
}