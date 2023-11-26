// design : https://dribbble.com/shots/1986774-User-Profile
//tulisan 'more' diganti dengan "repo"

import { useEffect, useState } from 'react';
// import img1 from './assets/img.png';

export default function GithubProfile() {
  const [avatar, setAvatar] = useState();
  const [githubName, setGithubName] = useState();
  const [repoData, setRepoData] = useState();

  async function repoDataURL() {
    try {
      const response = await fetch('https://api.github.com/users/BroKarim/repos');
      const repositories = await response.json();

      console.log(repositories);

      const list = repositories.map((repo) => (
        <div className="text-center" key={repo.id}>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </div>
      ));

      setRepoData(list);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/BroKarim'); // Replace with your API endpoint
        const result = await response.json();
        console.log(result);
        setAvatar(result.avatar_url);
        setGithubName(result.login);
        // setData(result);
      } catch (error) {
        console.log(error);
        // setError(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex min-h-screen w-[100vw] items-center justify-center bg-white flex-col ">
        {/* card */}
        <div className="rounded-lg bg-gray-100 px-16 py-14">
          <div className="flex justify-center">
            {/* ganti jadi image => prompt : buat gaar image memenuhi container ini  */}
            <div className="flex h-16 w-32 items-center mb-4 justify-center">
              <img
                src={avatar} // Ganti dengan URL gambar yang sesuai
                alt="Deskripsi gambar"
                className="w-full h-auto rounded-full"
              />
            </div>
          </div>
          <h3 className="my-4 text-center text-3xl font-semibold text-gray-700">{githubName}</h3>
          <p className="w-[230px] text-center font-normal text-gray-600">List my public repo</p>
          <button onClick={repoDataURL} className="mx-auto mt-10 block rounded-xl border-4 border-transparent bg-orange-400 px-6 py-3 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">
            Track Order
          </button>
          {/* Display repoData */}
        </div>
          {repoData }
      </div>
    </>
  );
}

//versi yang g bisa tampilin data
// {repoData && && (
//     <div className="mt-8 flex gap-4 flex-col  ">
//       {repoData.map((repo) => (
//         <div key={repo.id} className="mb-4 bg-black z-50">
//           <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className=" hover:underline">
//             {repo.name}
//           </a>
//         </div>
//       ))}
//     </div>
//   )}
