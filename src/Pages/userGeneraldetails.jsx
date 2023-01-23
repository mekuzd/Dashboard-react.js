import DefaultLayout from "../Layouts/DefaultLayouts";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import http from "../Config/http";
import { AiOutlineArrowLeft } from "react-icons/ai";

const GeneralDetails = () => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(true);
  const [userDetails, setuserDetails] = useState({});
  let isMounted = true;
  useEffect(() => {
    const FetchUserDetails = async () => {
      try {
        const response = await http.get(`/users/${id}`);
        setuserDetails(response.data);
        setLoading(false);
        console.log(userDetails);
      } catch (error) {
        setuserDetails({});
      }
    };
    if (isMounted) {
      FetchUserDetails();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DefaultLayout>
      <main className="content">
        <Link to={"/dashboard"} className="d-flex gap-4 header">
          <p>
            {" "}
            <AiOutlineArrowLeft className="arrowleft" />
          </p>
          <p>Back to users</p>
        </Link>
        {/* userDetails  */}

        <div className="userDetails d-flex justify-content-between align-items-center mt-4 flex-wrap">
          <h3>User Details</h3>
          <div className="d-flex justify-content-between align-items-center">
            <button className="blacklist mx-4">Blacklist user</button>
            <button className="ms-4 activate">activate user</button>
          </div>
        </div>

        <main className="userInfo">
          <div className="d-flex flex-wrap gap-3 userInfoTop">
            {/* userImage */}

            <div className="d-flex justify-content-between gap-3 flex-wrap">
              <div className="userImage">
                <img src="" alt="" />
              </div>
              <div className="fullname my-auto">
                <h3>Grace Effiom</h3>
                <p> lsqff587g90</p>
              </div>
            </div>
            {/* Usersrating  */}
            <div className="p-3 userRate ms-4">
              <h5 className="">user's tier</h5>
              <p>rate</p>
            </div>
            <div className="userRate p-3 ms-4 ">
              <p> 200,000,00 </p>
              <p className="bankDetails">12345678/providus bank</p>
            </div>
          </div>
          <div className="butn-container d-flex flex-wrap justify-content-between align-items-center mt-5">
            <button className="activeBtn">General Details </button>
            <button className="button">Document</button>
            <button className="button"> Bank Details</button>
            <button className="button">Loans</button>
            <button className="button">Savings</button>
            <button className="button">App and System</button>
          </div>
        </main>

        {/* personalInfo  */}
        <main className="userInfo p-3">
          <h1 className="ms-2">personal information</h1>
          <main className="d-flex justify-content-between flex-wrap ">
            <div className="cont">
              <h2>full name</h2>
              <h4>grace</h4>
            </div>
            <div className="cont">
              <h2>phone number</h2>
              <h4>grace</h4>
            </div>
            <div className="cont">
              <h2>email address</h2>
              <h4>grace</h4>
            </div>
            <div className="cont">
              <h2>bvn</h2>
              <h4>grace</h4>
            </div>
            <div className="cont">
              <h2>gender</h2>
              <h4>grace</h4>
            </div>
          </main>
          <main className="d-flex flex-wrap gap-1">
            <div className="cont ">
              <h2>marital status</h2>
              <h4>grace</h4>
            </div>
            <div className="cont ">
              <h2>children </h2>
              <h4>grace</h4>
            </div>
            <div className="cont">
              <h2>type of residence </h2>
              <h4>grace</h4>
            </div>
          </main>

          <hr />
          {/* education and employment */}
          <h1 className="ms-2"> Education and Employment </h1>
          <main className="d-flex justify-content-between flex-wrap">
            <div className="education">
              <h2> level of education</h2>
              <h4>grace</h4>
            </div>
            <div className="education">
              <h2>employment status</h2>
              <h4>grace</h4>
            </div>
            <div className="education">
              <h2>sector of employment</h2>
              <h4>grace</h4>
            </div>
            <div className="education">
              <h2>duration of employment</h2>
              <h4>grace</h4>
            </div>
          </main>
          <main className="d-flex flex-wrap gap-1">
            <div className="education ">
              <h2>office email</h2>
              <h4>grace</h4>
            </div>
            <div className="education ">
              <h2>monthly income </h2>
              <h4>grace</h4>
            </div>
            <div className="education ">
              <h2>loan repayment </h2>
              <h4>grace</h4>
            </div>
          </main>
          <hr />
          {/* socials */}
          <h1 className="ms-2"> Socials </h1>
          <main className="d-flex justify-content-start flex-wrap">
            <div className="education">
              <h2> twitter</h2>
              <h4>grace</h4>
            </div>
            <div className="education">
              <h2>facebook</h2>
              <h4>grace</h4>
            </div>
            <div className="education">
              <h2>instagram</h2>
              <h4>grace</h4>
            </div>
          </main>
          <hr />

          <h1 className="ms-2"> Guarantor </h1>
          <main className="d-flex justify-content-between flex-wrap">
            <div className="education">
              <h2> full name</h2>
              <h4>grace</h4>
            </div>
            <div className="education">
              <h2>phone number</h2>
              <h4>grace</h4>
            </div>
            <div className="education">
              <h2>email address</h2>
              <h4>grace</h4>
            </div>
            <div className="education">
              <h2>relationship</h2>
              <h4>grace</h4>
            </div>
          </main>
        </main>
      </main>
    </DefaultLayout>
  );
};
export default GeneralDetails;
