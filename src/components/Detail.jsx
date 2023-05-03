import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const Detail = () => {
  const [movieDetail, setMovieDetail] = useState([])


  const { id } = useParams();
  async function fetchData() {
    const apiurl = `https://api.tvmaze.com/shows/${id}`;
    const response = await fetch(apiurl);
    const responseData = await response.json();
    console.log(responseData);
    setMovieDetail(responseData);
}
  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(movieDetail)
  return (
    <div>
      <body className=" overflow-auto bg-slate-900 text-white ">
        <div >
          <div className="mt-8 text-center">
            <h1 className=" text-3xl font-bold uppercase"><span className="text-yellow-400">TvMaze</span><span className="text-gray-300">.com</span></h1>
          </div>
          <section className=" container mx-auto my-10 px-8 sm:px-0">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <div className=" flex items-center justify-center lg:w-1/2 ">
                <img src={movieDetail.image ? movieDetail.image.medium : 'vite.svg'} alt="Batman Begins" className="h-full transform object-cover object-center  shadow-lg shadow-yellow-400/30 transition duration-700 ease-in-out hover:translate-x-12 hover:skew-y-3 lg:w-96" />
              </div>
              <div className="my-10 space-y-4 lg:w-1/2 ">
                <h2 className="text-3xl font-bold md:text-5xl"> {movieDetail.name} </h2>
                <div className="flex space-x-4">
                  <p className="flex items-center justify-center text-sm font-medium text-gray-400"> {movieDetail.premiered} •
                    <span className="pl-1">
                      {movieDetail.averageRuntime} min • </span> <span className="pl-1">
                        {movieDetail.genres}</span></p>
                </div>
                <div className="flex justify-start  pt-2 text-gray-400">
                  <div className="flex flex-col space-y-1 border-r border-gray-400 pr-5">
                    <p className="flex items-center justify-center font-bold text-gray-300 ">{(movieDetail.rating && movieDetail.rating.average + '/10') || 'No Ratings'}<span className="pl-1 text-xs text-yellow-500"></span></p><p className="text-xs">IMDB Rating</p>
                  </div>
                  <div className="flex flex-col space-y-1 border-r border-gray-400 px-5">
                    <p className="flex items-center justify-center font-bold text-gray-300"><span className="pr-1 text-xs text-red-600"><title></title></span>84%</p>                   <p className="text-xs">Rotten Tomatoes</p></div><div className="border-r-none flex flex-col  items-center space-y-1 px-5"><p className="font-bold text-gray-300"> PG-13 </p>
                    <p className="text-xs">Rating</p>
                  </div>
                </div>
                <p  className="pt-6 text-lg"> {  movieDetail.summary} </p>
                <div className="space-y-4 pt-6">
                  <p className="border-b-2  border-yellow-400 pb-2">Language : <span className="text-gray-400"> {movieDetail.language} </span></p>
                  <p className="border-b-2  border-yellow-400 pb-4"> Type : <span className="text-gray-400">{movieDetail.type}</span></p>
                  <p className="border-b-2  border-yellow-400 pb-4">Director : <span className="text-gray-400"> Christopher Nolan </span></p>
                  <p className="border-b-2  border-yellow-400 pb-4">Writer : <span className="text-gray-400">Bob Kane, David S. Goyer, Christopher Nolan</span></p>
                  <p className="border-b-2  border-yellow-400 pb-4">Awards : <span className="text-gray-400">Nominated for 1 Oscar. 14 wins &amp; 79 nominations total</span></p>
                  <p className="border-b-2  border-yellow-400 pb-4">Country : <span className="text-gray-400">{movieDetail.type}  </span></p>

                </div>
              </div>
            </div>
          </section>
          <div className="my-10 flex items-center justify-center">
            <Link to="/">
              <button className="bg-yellow-400 px-6 py-1 font-semibold uppercase text-black hover:bg-yellow-500/90">Back to Home</button></Link>
          </div>


        </div>
</body>
    </div>
  )
}

export default Detail
