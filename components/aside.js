import Filter from "./filter";

const Aside = () => {
  return (
    <>
      <aside>
        <Filter />
      </aside>
      <style jsx>
        {`
          aside{
            min-width:20%;
          }
        `}
      </style>
    </>
  );
};
export default Aside;
