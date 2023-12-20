//Action creators

export const deposit = (amount) => ({ type: "deposit", payload: amount })
export const Withdraw = (amount) => ({ type: "Withdraw", payload: amount })
export const NameUpdate = (amount) => ({ type: "NameUpdate", payload: amount })
export const PhoneNumberUpdate = (amount) => ({ type: "PhoneNumberUpdate", payload: amount })
export const reset = () => ( { type: "reset" })