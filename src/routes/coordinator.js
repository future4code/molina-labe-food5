export const goToLoading = (history) => {
    history.push('/')
}

export const goToLogin = (history) => {
    history.push('/entrar')
}

export const goToSingnUp = (history) => {
    history.push('/cadastro')
}

export const goToHome = (history) => {
    history.push('/home')
}

export const goToProfile = (history) => {
    history.push('/perfil')
}

export const goToRestaurantDetails = (history , id) => {
    history.push(`/restaurante/${id}`)
}

export const goToAndressPage = (history) => {
    history.push('/cadastro/endereco')
}

export const goToCart = (history) => {
    history.push('/carrinho')
}

export const goBack = (history) => {
    history.goBack()
}

