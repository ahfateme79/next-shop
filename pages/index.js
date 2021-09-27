import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Card from "../components/card";
import Aside from "../components/aside";

export default function Home({ card }) {
  return (
    <div className="wrapper">
      <div className="main">
        <Card product={card} />
      </div>
      <Aside />
      <style jsx>
        {`
          .main {
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            min-width:80%;

          }
          .wrapper{
            display:flex;
            width:100%;
          }
          @media only screen and (max-width:750px){
            .wrapper{flex-direction:column};
            .main{
              order:2;
              justify-content:center
            }
            aside{
              order:1
            }
          }

        `}
      </style>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const fetched = await fetch("https://fakestoreapi.com/products");
  const card = await fetched.json();
  return {
    card,
  };
};
