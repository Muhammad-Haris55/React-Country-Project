export const Addtowishlist = 'Wishlist/Add_to_wishlist'
export const Removefromwishlist = 'Wishlist/Remove_from_wishlist'
export const IncreaseQuantitywishlist = 'Wishlist/Increase_quantity_in_wishlist'
export const DeccreaseQuantitywishlist = "Wishlist/Deccrease_Quantity_in_wishlist"

export function addtowishlist(productId, quantity, title, imgurl, price){
    return { type: Addtowishlist, payload: { productId: productId, quantity: quantity, title: title, image: imgurl, price: price  } }
}
export function removefromwishlist(productId,quantity){
    return { type: Removefromwishlist, payload: { productId: productId, quantity: quantity } }
}
export function incquantitywishlist(productId,quantity){
    return{ type: IncreaseQuantitywishlist, payload: { productId: productId, quantity: quantity } }
}

export function decquantitywishlist(productId,quantity){
    return { type: DeccreaseQuantitywishlist, payload: { productId: productId, quantity: quantity }}
}

export default function Wishlistreducer(state = [], action) {
    switch (action.type) {
        case Addtowishlist:
            const existingwitem=state.find((item)=>(
                item.productId===action.payload.productId
            ))
            if(existingwitem){
                return state.map((value)=>{
                    if(value.productId===action.payload.productId){
                        return{...value,quantity:value.quantity+1}
                    }
                })
            }
            return [...state, action.payload]

        case Removefromwishlist:
            return state.filter((witem) => (
                witem.productId !== action.payload.productId
            ))


        case IncreaseQuantitywishlist:
            return state.map((witem) => {
                if (witem.productId === action.payload.productId) {
                    // console.log("Increment",action.payload.productId,witem.productId,witem.quantity)
                    return ({ ...witem, quantity: witem.quantity + 1 })
                }
                return witem
            })

        case DeccreaseQuantitywishlist:
            return state.map((witem) => {
                if (witem.productId === action.payload.productId) {
                    return ({ ...witem, quantity: witem.quantity - 1 })
                }
                return witem
            }).filter((witem) => witem.quantity > 0)

        default:
            return state

    }
}