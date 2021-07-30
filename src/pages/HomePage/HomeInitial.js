import React from 'react';
import { PageHomeInitial } from '../../pages/HomePage/styled'
import useProtectedPage from '../../hooks/useProtectedPage';
import Logo from '../../assets/logotelaabertura.png'

function HomeInitial() {
    useProtectedPage()
    return (
        <PageHomeInitial>
            <img src={Logo} alt="Página Inicial" />
        </PageHomeInitial>
    )

}
export default HomeInitial;