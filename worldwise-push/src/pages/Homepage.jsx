import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <>
      <div>
        {" "}
        <PageNav /> Worldwise
      </div>
      <Link to="/Pricing">Pricing</Link>
    </>
  );
}

export default Homepage;
