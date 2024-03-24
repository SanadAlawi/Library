import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    {
        id: 28,
        title: "The Legendary Explorer",
        desc: "Embark on a daring expedition to uncharted lands, braving treacherous terrain and ancient ruins in search of fame and fortune.",
        img: "/Library/images/adventure 7.png",
        genre: 'adventure',
        price: 25.6,
        quantity: 1
    },
    {
        id: 29,
        title: "The Pirate's Treasure",
        desc: "Sail the high seas in search of hidden treasure, battling rival pirates and mythical creatures in a swashbuckling adventure.",
        img: "/Library/images/adventure 8.png",
        genre: 'adventure',
        price: 23.9,
        quantity: 1
    }
]


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: {
            reducer(state, action) {
                let book = action.payload
                const bookIndex = state.findIndex(b => b.id === book.id)
                if (bookIndex === -1) {
                    state.unshift(action.payload)
                    return
                }

                book = { ...book, quantity: book.quantity + 1 }
                state[bookIndex] = book

            },
            prepare(book, quantity) {
                return {
                    payload: { ...book, quantity }
                }
            }
        },
        remove: (state, action) => {
            let bookID = action.payload
            const bookIndex = state.findIndex(b => b.id === bookID)
            if(bookIndex !== -1){
                state.splice(bookIndex, 1)
            }
        },
        incremntQuantity: (state, action) => {
            let bookID = action.payload
            const bookIndex = state.findIndex(b => b.id === bookID)
            if(bookIndex !== -1){
                const newQuantity = state[bookIndex].quantity + 1
                state[bookIndex] = {...state[bookIndex], quantity: newQuantity}
            }
        },

        decrementQuantity: (state, action) => {
            let bookID = action.payload
            const bookIndex = state.findIndex(b => b.id === bookID)
            if(bookIndex !== -1){
                const newQuantity = state[bookIndex].quantity - 1
                state[bookIndex] = {...state[bookIndex], quantity: newQuantity}
            }
        }

    }
})

export const getAllBooks = (state) => state.cart
export const { add, remove, incremntQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer