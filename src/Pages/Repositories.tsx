import { useEffect, useState } from 'react';
import axios from 'axios';
import RepositoryCard from '../Components/RepositoryCard';

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
  const [repositories, setRepositories] = useState<RepositoryInfo[]>([]);


  useEffect(() => {
    axios.get(
      `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`)
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
          setRepositories((repositories) => [...repositories, {
            repoName: item.name,
            repoDescription: item.description,
            creationDate: item.created_at,
            repoStars: item.stargazers_count,
            repoIssues: item.open_issues_count,
            authorName: item.owner.login,
            authorAvatar: item.owner.avatar_url
          }]);
        });
      })
  }, []);

  return (
    <div className="row p-5">
      {console.log(repositories)}
      {repositories.map((repository, index) => (
        <RepositoryCard
          key={index}
          repository={repository} />
      ))}
    </div>
  )
}

export default Repositories
