import '../scss/App.scss';
import { Link } from "react-router-dom";

function Applet(props) {
  return (
    <div className="Applet">
      <div className="flex">
        <div className="lorem">
          <h2>Lorem Ipsum</h2>
		  <p>
      	    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      	  </p>
          <Link className="button" to={props.link}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Applet;
