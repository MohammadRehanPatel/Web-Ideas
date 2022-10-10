export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload:item
    }
}
// remopve
export const DLT = (id) => {
    return {
        type: "RMP_CART",
        payload:id
    }
}
// remove individual item
export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload:iteam
    }
}