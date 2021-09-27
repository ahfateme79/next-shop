import "../styles/globals.css";
import "antd/dist/antd.css";
import Header from "../components/header";
import '../assets/css/fontello-embedded.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="bgcolor">
        <Component {...pageProps} />
      </div>
      <style jsx>{`
        .bgcolor{
            background-color:#b7b7a4;
            min-height:100vh;

        }
        `}
      </style>
    </>
  );
}

export default MyApp;
