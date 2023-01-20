import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PaginateBtn = ({ Users, page, setPage }) => {
  const nextPage = () => {
    if (page < 9) {
      setPage((oldPage) => {
        let nextPage = oldPage + 1;
        return nextPage;
      });
    }
  };
  const prevPage = () => {
    if (page >= 1) {
      setPage((oldPage) => {
        let prevPage = oldPage - 1;
        return prevPage;
      });
    }
  };

  const handlePage = (index) => {
    setPage(index);
    console.log(page);
  };

  return (
    <main className="d-flex justify-content-between">
      <div>Emeka</div>

      <div className="btn-container">
        <button className="p-btn" onClick={prevPage}>
          <FaAngleLeft />
        </button>
        {Users.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? "active-Btn" : "tabBtn"}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="p-btn" onClick={nextPage}>
          <FaAngleRight />
        </button>
      </div>
    </main>
  );
};

export default PaginateBtn;
