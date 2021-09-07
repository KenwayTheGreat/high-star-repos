import { RepositoryInfo } from '../Pages/Repositories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment-timezone';


interface Props {
  repository: RepositoryInfo
}

function RepositoryCard(props: Props) {
  return (
    <div className="row p-3 d-flex justify-content-center">
      <div className="card col-8 ">
        <div className="row p-3">
          <div className="col-3 d-flex justify-content-center">
            <img
              className="rounded"
              src={props.repository.authorAvatar}
              width="150 px"
              height="150 px" />
          </div>
          <div className="col-9">
            <div className="row p-1">
              <div className="col-10">
                <h2>{props.repository.repoName}</h2>
                <p>{props.repository.repoDescription}</p>
              </div>
            </div>

            <div className="row p-1">
              <div
                className="col-3 text-center">
                <h6 className="py-2 border border-dark border-2 rounded">
                  <FontAwesomeIcon icon={faStar} /> {" "}
                  Stars: {props.repository.repoStars.toLocaleString()}
                </h6>
              </div>

              <div className="col-3 text-center">
                <h6 className="py-2 border border-dark border-2 rounded">
                  <FontAwesomeIcon icon={faExclamationCircle} /> {' '}
                  Issues: {props.repository.repoIssues.toLocaleString()}
                </h6>
              </div>

              <div className="col-6">
                <h6 className="py-2">
                  Created <Moment fromNow>{props.repository.creationDate}</Moment> by {" "}
                  <strong>{props.repository.authorName}</strong>
                </h6>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default RepositoryCard
