import Image from "next/image"
import Link from "next/link"


const Header = () => {
    return (
        <header>
            <div className="flex">
            <div>
                    <Image src="/shopping-bag.svg" alt="logo" width="100px" height="50px"/>
                </div>
                <ul>
                    <li><Link href=""><a>cart</a></Link></li>
                    <li><Link href="/"><a>products</a></Link></li>
                </ul>
            </div>
            <div>
               <Link href=""><a><i className="icon-shop"></i></a></Link>
            </div>

            <style jsx>
                {`
                    header{
                        display:flex;
                        justify-content:space-between;
                        width:100%;
                        padding:10px 30px;
                        align-items:center
                    }
                    .flex{
                        display:flex
                    }
                    .flex ul{
                        display:flex;
                        list-style-type:none;
                        align-items:center;
                        height:auto
                    }
                    i{
                        font-size:20px;
                        color:gray
                    }
                    .flex a{
                        margin: 0 10px;
                        color:black
                    }
                `}
            </style>
        </header>
    )
}
export default Header