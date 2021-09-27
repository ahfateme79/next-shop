import Link from "next/link";
const Detail = ({ products }) => {
  return (
    <div className="details">
      <div className="big-card">
        <img src={products.image} alt={products.title} />
        <div>
          <p> {products.description} </p> <h3> {products.title} </h3>
          <h4> {products.category} </h4> <span> {products.price} </span>
          <button> add </button>
          <Link href="/" as="/">
            <a> back </a>
          </Link>
        </div>
      </div>  
        <style jsx>
          {`
            .details {
              width: 100%;
              min-height: 80vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .big-card {
              width: 90%;
              margin: auto;
              padding: 30px;
              display: flex;
              justify-content: space-between;
              background-color: #fff;
              border-radius: 10px;
              min-height:450px
            }
            .big-card img {
              width: 200px;
              height: 200px;
            }
            .big-card div {
              display: flex;
              flex-direction: column;
            }
          `}
        </style>
    </div>
  );
};

export default Detail;

Detail.getInitialProps = async (ctx) => {
  const id = ctx.query.id;
  const fetched = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products = await fetched.json();
  return {
    products,
  };
};
