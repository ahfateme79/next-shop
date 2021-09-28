import { useEffect, useState } from "react"
import { useSelector } from "react-redux";



const Carts = () => {

    const [item, setItems] = useState()

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('cart') || [])
        setItems(items)
    })
    return (
        <div className="list">
            <ul>
                {
                    item ?
                        item.map((n, index) => {
                            return (
                                <li key={index}>
                                    <img src={n.image} />
                                    <div>
                                        <p>{n.title}</p>
                                        <span>{n.price}</span>
                                    </div>

                                    <button>delete</button>
                                </li>
                            )
                        }) : <div>cart empty</div>

                }
            </ul>
            <style jsx>
                {
                    `
                    .list{
                        width:100%;
                        padding:30px 0
                    }
                    ul{
                        padding:20px;
                        list-style-type:none;
                        width:90%;
                        background-color:#fff;
                        margin:auto;
                        border-radius:10px
                    }
                    li{
                        width:100%;
                        border-bottom:1px solid gray;
                        display:flex;
                        justify-content:space-between;
                        padding:20px 0;
                        align-items:center
                    }
                    img{
                        width:150px;
                        height:100px;
                        object-fit:contain
                    }
                    li div{
                        display:flex
                    }
                    span{
                        margin:0 20px
                    }
                    `
                }
            </style>
        </div>
    )
}
export default Carts

