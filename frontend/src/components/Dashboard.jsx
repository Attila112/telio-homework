import { Link } from "react-router-dom";

const Dashboard = () => {

  return (
    <>
      <div className="greeting-box">
        <h1>Hello, {sessionStorage.getItem("username")} !</h1>
      </div>
      <Link to={"/"}>
        <button className="button-main">Back</button>
      </Link>
    </>

  );
};

export default Dashboard;
