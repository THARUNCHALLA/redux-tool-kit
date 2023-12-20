import { configureStore, createSlice } from "@reduxjs/toolkit"

const data = {
    Fullname: "",
    PhoneNumber:null,
    balance: 0,
}

const transactions = []

const UserSlice = createSlice({
    name: "user",
    initialState: data,
    reducers: {
        deposit: (state, action) => {
            state.balance = state.balance + parseInt(action.payload)
        },
        Withdraw: (state, action) => {
            state.balance = state.balance - parseInt(action.payload)
        },
        NameUpdate: (state, action) => {
            state.Fullname=action.payload
        },
        PhoneNumberUpdate: (state, action) => {
            state.PhoneNumber=action.payload
        },
        reset: (state, action) => {
            state=data
        }
    }
})



const TransactionSlice = createSlice({
    name:"transaction",
    initialState:transactions,
    reducers:{
        Add: (state,action) => {
            state.push(action.payload)
        }
    }
})




const Store = configureStore({
    reducer:{
        user1:UserSlice.reducer,
        transaction:TransactionSlice.reducer
    }
})

export default Store
export const {deposit, Withdraw, NameUpdate, PhoneNumberUpdate, reset}=UserSlice.actions
export const {Add} = TransactionSlice.actions





















































/*function Myapplication(state = data, action) {
    if (action.type === "deposit") {
        return { ...state, }
    }
    else if (action.type === "Withdraw") {
        return { ...state, balance: state.balance - parseInt(action.payload) }
    }
    else if (action.type === "NameUpdate") {
        return { ...state, Fullname: action.payload }
    }
    else if (action.type === "PhoneNumberUpdate") {
        return { ...state, PhoneNumber: action.payload }
    }
    else if (action.type === "reset") {
        return data
    }
    return state
}
function transaction(state=[],action){
    if(action.type==="Add"){
        return [...state,{amount:action.payload.amount,type:action.payload.type,date:action.payload.date}]
    }
    return state
}

const DATA = combineReducers({
    Application:Myapplication,
    Transaction:transaction
})


const UserStore = createStore(DATA)


export default UserStore
*/

