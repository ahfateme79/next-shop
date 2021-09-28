import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const val = useSelector((state) => state.add);
    const [count,setCount]=useState(val)
    useEffect(()=>{
        let c=localStorage.getItem('count')
        setCount(c)
    })
    return (
        <header>
            <div className="flex">
                <div>
                    <Image
                        src="/shopping-bag.svg"
                        alt="logo"
                        width="100px"
                        height="50px"
                    />
                </div>
                <ul>
                    <li>
                        <Link href="/pages/carts/carts.js" as="/carts/carts">
                            <a> cart </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a> products </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex">
                <Link href="/pages/carts/carts.js" as="/carts/carts">
                    <a>
                        <i className="icon-shop"> </i>
                    </a>
                </Link>
                <span>{count?count:val}</span>
            </div>
            <style jsx>
                {`
          header {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 10px 30px;
            align-items: center;
          }
          .flex {
            display: flex;
            position:relative
          }
          .flex ul {
            display: flex;
            list-style-type: none;
            align-items: center;
            height: auto;
          }
          i {
            font-size: 25px;
            color: gray;
          }
          .flex a {
            margin: 0 10px;
            color: black;
          }
          span{
              width:20px;
              height:20px;
              background-color:red;
              color:#fff;
              display:flex;
              border-radius:50%;
              justify-content:center;
              align-items:center;
              position:absolute;
              right:3%;
              top:47%
          }
        `}
            </style>
        </header>
    );
};
export default Header;
