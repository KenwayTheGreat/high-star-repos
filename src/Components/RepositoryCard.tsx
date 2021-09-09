import { RepositoryInfo } from '../Pages/Repositories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';
import 'moment-timezone';
import classNames from 'classnames';

interface Props {
  repository: RepositoryInfo
}

function RepositoryCard(props: Props) {
  return (
    <div className="row p-3 d-flex justify-content-center">
      <div className={classNames("repository-card", "card col-10 col-xl-6 col-md-10 ")}>
        <div className="row p-3">
          <div className="col-12 col-xl-3 col-md-3 d-flex flex-column justify-content-center">
            <img
              className="border border-1 rounded"
              src={props.repository.authorAvatar}
              width="150 px"
              height="150 px" />
          </div>
          <div className="col-12 col-xl-8 col-md-8">
            <div className="row p-2">
              <div className="col-12 col-xl-8 col-md-8">
                <h2>{props.repository.repoName}</h2>
                <p >{props.repository.repoDescription}</p>
              </div>
            </div>

            <div className="row p-1">
              <div
                className="col-12 col-xl-4 col-md-4 text-center">
                <h6 className="py-2 border border-dark border-2 rounded">
                  <FontAwesomeIcon className="star-icon" icon={faStar} /> {" "}
                  Stars: {props.repository.repoStars.toLocaleString()}
                </h6>
              </div>

              <div className="col-12 col-xl-4 col-md-4 text-center">
                <h6 className="py-2 border border-dark border-2 rounded">
                  <FontAwesomeIcon icon={faExclamationCircle} /> {' '}
                  Issues: {props.repository.repoIssues.toLocaleString()}
                </h6>
              </div>

              <div className="col-12 col-xl-4 col-md-4 ">
                <h6>
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
