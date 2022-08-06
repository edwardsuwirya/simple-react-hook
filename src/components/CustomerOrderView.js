import {useDispatch, useSelector} from "react-redux";
import {
    selectSubtotal,
    selectTax,
    selectTaxAll,
    selectTotal,
    selectTotalItems
} from "../redux/customerOrder/customerOrderSelector";
import {addOrder} from "../redux/customerOrder/customerOrderAction";

export const CustomerOrderView = () => {
    const subTotal = useSelector(selectSubtotal)
    // const tax = useSelector((state) => selectTaxAll(state, 10))
    const tax = useSelector(selectTax)
    const total = useSelector(selectTotal)
    const totalItems = useSelector(selectTotalItems)
    const dispatch = useDispatch()
    return (
        <>
            <div>{subTotal}</div>
            <div>{tax}</div>
            <div>{total}</div>
            <div>{totalItems}</div>
            <button onClick={() => dispatch(addOrder({
                menuName: 'Nasi Goreng',
                price: 10000
            }))}>Add Order
            </button>
        </>
    )
}