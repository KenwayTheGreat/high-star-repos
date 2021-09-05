import { useEffect } from 'react';
import axios from 'axios';


function Repositories() {

  useEffect(() => {
    axios.get(
      `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`)
      .then((res) => {
        console.log(res.data.items);
        console.log(res.data.items[0].name);
      })
  }, []);

  return (
    <div>
      testing 12345
    </div>
  )
}

export default Repositories
