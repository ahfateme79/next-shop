import Filter from "./filter";
import Searchbox from "./search";

const Aside = () => {
  return (
    <>
      <aside>
        <Searchbox/>
        <Filter />
      </aside>
      <style jsx>
        {`
          aside{
            min-width:20%;
            padding:30px 15px
          }
        `}
      </style>
    </>
  );
};
export default Aside;
