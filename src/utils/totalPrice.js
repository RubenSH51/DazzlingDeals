

export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + (product.price),0)
}

export const totalPrice2 = (products) => {
    return products.reduce((sum, product) => sum + (Number(product.price)*Number(product.unidades)),0)
}

export const totalPrice3 = (products) => {
    return products.reduce((sum, product) => sum + (product.total),0)
}