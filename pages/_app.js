import "../styles/globals.css";
import "antd/dist/antd.css";
import Header from "../components/header";
import "../assets/css/fontello-embedded.css";
import All from "../redusers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(All);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <div className="bgcolor">
        <Component {...pageProps} />
      </div>
      <style jsx>
        {`
          .bgcolor {
            background-color: #b7b7a4;
            min-height: 100vh;
          }
        `}
      </style>
    </Provider>
  );
}

export default MyApp;
