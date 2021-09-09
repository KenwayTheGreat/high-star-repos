import '../Styles/RepositoryPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RepositoryCard from '../Components/RepositoryCard';
import { formatDate } from '../Functionalities/HelperFunctions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import InfiniteScroll from "react-infinite-scroll-component";


export interface RepositoryInfo {
  repoName: string,
  repoDescription: string,
  authorName: string,
  authorAvatar: string,
  repoStars: number,
  repoIssues: number,
  creationDate: string,
}

function Repositories() {
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [repositories, setRepositories] = useState<RepositoryInfo[]>([]);

  const fetchMoreRepos = () => {
    setPageNumber(pageNumber + 1);
    setLoadingMore(true);
  }

  useEffect(() => {
    setLoading(true);

    axios.get(
      'https://api.github.com/search/repositories?' +
      `q=created:>${formatDate(Date.now())}` +
      `&sort=stars&order=desc&page=${pageNumber}`)
      .then((res) => {
        res.data.items.map((item: {
          name: string;
          description: string;
          created_at: string;
          stargazers_count: number;
          open_issues_count: number;
          owner: {
            login: string;
            avatar_url: string
          }
        }) => {
          setLoading(false);
          setLoadingMore(false);
          return (setRepositories((repositories) => [...repositories, {
            repoName: item.name,
            repoDescription: item.description,
            creationDate: item.created_at,
            repoStars: item.stargazers_count,
            repoIssues: item.open_issues_count,
            authorName: item.owner.login,
            authorAvatar: item.owner.avatar_url
          }]));
        });
      })

  }, [pageNumber]);

  return (
    <>
      <div className="row py-5">
        <div className="col-12 text-center">
          <h1>Highest {" "}
            <FontAwesomeIcon
              className="star-icon"
              icon={faStar} /> {" "}
            Repositories
          </h1>
        </div>
      </div>
      {
        loading &&
        (<div className="row p-1 d-flex justify-content-center">
          <div className="col-6 text-center">
            <h3>Loading ...</h3>
          </div>
        </div>)
      }

      {
        (<InfiniteScroll
          next={fetchMoreRepos}
          hasMore={true}
          loader={loadingMore ?
            <div className="row p-5">
              <div className="col-12 text-center">
                <h3>Loading More ...</h3>
              </div>
            </div> : <div />}

          dataLength={repositories.length} >
          <div className="row d-flex justify-content-center">
            {repositories.map((repository, index) => (
              <RepositoryCard
                key={index}
                repository={repository} />
            ))}
          </div>
        </InfiniteScroll>)}
    </>
  )
}

export default Repositories
