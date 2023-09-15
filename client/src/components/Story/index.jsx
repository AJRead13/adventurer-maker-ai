import { removeHyphensAndCapitalize } from '../../utils/helpers';
// import * as projects from '../../assets';

//using useState and useQuery, hit mongo db to grab the users stories
//then map through the array to display them
//use the Project component to display the story


function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img
        src={projects[name]}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
