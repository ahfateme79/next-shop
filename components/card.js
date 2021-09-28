import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../actions";

const Card = ({ product }) => {

  const dispatch = useDispatch()
  const val=useSelector((state)=>state.add)
  const addclick = (event) => {
    dispatch(add())

    let id = event.target.parentElement.children
    const item = {
      image: id[0].src,
      title: id[1].innerHTML,
      price: id[2].innerHTML
    }

    let arr = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    arr.push(item)
    localStorage.setItem('cart',JSON.stringify(arr))
    localStorage.setItem('count',arr.length)
  }

  return (
    <>
      {product.map((n) => {
        return (
          <div key={n.id} className="card">
            <img src={n.image} alt={n.title} />
            <p>{n.title}</p> <span>{n.price}</span>
            <Link href="/products/[id]" as={`/products/${n.id}`}>
              <a>show details</a>
            </Link>
            <button data-id={n.id} onClick={addclick}> add </button>
            <style jsx>
              {`
                .card{
                  width:250px;
                  height:370px;
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  flex-direction:column;
                  margin:20px;
                  background-Color:#fff;
                  border-radius:10px
                }
                .card img{
                  width:100px
                }
              `}
            </style>
          </div>
        );
      })}
    </>
  );
};
export default Card;
