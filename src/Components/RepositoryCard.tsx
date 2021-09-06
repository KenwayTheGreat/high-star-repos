import { RepositoryInfo } from '../Pages/Repositories';
import Moment from 'react-moment';
import 'moment-timezone';


interface Props {
  repository: RepositoryInfo
}

function RepositoryCard(props: Props) {
  return (
    <div className="row p-2 d-flex justify-content-center">
      <div className="card col-8 ">
        <div className="row p-3">
          <div className="col-3 d-flex justify-content-center">
            <img src={props.repository.authorAvatar} width="150 px" height="150 px" />
          </div>
          <div className="col-8">
            <div className="row p-1">
              <div className="col-6">
                <h2>{props.repository.repoName}</h2>
                <p>{props.repository.repoDescription}</p>
              </div>
            </div>

            <div className="row p-1">
              <div className="col-3">
                <h6>Stars: {props.repository.repoStars}</h6>
              </div>

              <div className="col-3">
                <h6> Issues: {props.repository.repoIssues}</h6>
              </div>

              <div className="col-6">
                <h6>
                  created <Moment fromNow>{props.repository.creationDate}</Moment> by {" "}
                  {props.repository.authorName}
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
