import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {
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
            <button> add </button>
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
