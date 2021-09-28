const Addtocart = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return (state +1)
            break;
        default:
            return state
            break;
    }
}
export default Addtocart