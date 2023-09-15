import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';
import SignupForm from '../SignUpForm';
import LoginForm from '../Login';
import Auth from '../../utils/auth';

function Nav({ currentPage }) {
  const pages = ['Stories', 'Assistant', 'Contact'];

  return (
    <nav>
      <ul className="flex-row">
        <li
          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
          key="about"
        >
          <Link to="/">Home</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </li>
        ))}
      </ul>
      <div className="row">
        <div className="col">
          <SignupForm />
        </div>
        <div className="col">
          <LoginForm />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
