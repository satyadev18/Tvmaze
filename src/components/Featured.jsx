import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Featured = () => {
     const [movies,setMovies] = useState([]);
    const [search,setSearch] = useState();
    const [term,setTerm] = useState('batman');



    const handlesubmit = (e)=>{
      e.preventDefault();
      setTerm(search)
    }

    async function fetchData(){
       const apiurl = `https://api.tvmaze.com/search/shows?q=${term}`;
       const response = await fetch(apiurl);
       const responseData= await response.json();
       console.log(responseData);
        setMovies(responseData)


   }
   useEffect(() => {
    fetchData();
   }, [term])

  return (
    <div>
    <body className="overflow-auto bg-gray-600 text-white w-full ">
       <div id="root" className='w-full'>
         <nav className="flow-row container mx-auto mt-8 flex items-center justify-between  md:px-28">
           <div className="flex w-full flex-col items-center justify-center space-y-4  md:flex-row md:space-y-0 md:space-x-10 lg:w-3/4 ">
             <h1 className=" text-3xl font-bold uppercase"><span className="text-green-400">TvMaze</span><span className="text-yellow-300">.com</span></h1>

             <form className=" w-full  px-8 md:px-0" onSubmit={handlesubmit}>
               <div className="relative flex items-center  text-gray-500 focus-within:text-white">
                 <input type="text" placeholder="Search for Movies, TV Series, Celebrities & more" className="w-full border-none bg-slate-400 py-3 px-4 pr-3 pl-10 text-white rounded-2xl placeholder:text-gray-500 focus:outline-none  focus:ring-2 focus:ring-gray-400 " onChange={((e)=>setSearch(e.target.value))}/>
               <button type='submit' className='bg-yellow-300 m-3'>Search</button>
               </div>

             </form>
           </div>

         </nav>

         <section className=" container mx-auto w-full md:px-20">
           <div className="mt-20 grid place-items-center gap-10 px-8 lg:grid-cols-2">
             <div className="  flex items-center justify-center text-3xl font-bold uppercase md:text-5xl">
               <h2 className="text-yellow-400">
                 <span className="text-green-400"> The first</span> online streaming movie search engine</h2>
             </div>
             <div className=" text-sm text-gray-400  ">
               <p>TvMaze is a free app that helps people find movies and shows they want to watch. We have over 1 million titles and we're adding content daily. You can use our app to browse movies, tv shows, documentaries, anime, cartoons, live streams, music videos and much more!</p><br />
               <p>TvMaze is a free online video search engine that allows users to find videos based on keywords. Users can search any type of video including movies, music videos, documentaries, short films, etc.</p>
             </div>
           </div>
         </section>
         <article className='flex flex-wrap gap-3 ml-2 cursor-pointer'>
          {
       movies.map((movie)=>(
         <section className=" justify-center my-20 flex flex-row">
         <Link className='flex flow-row' to={`/detail/${movie.show.id}`}>
              <div className='flex flex-row'>

                <div className=' first-letter:capitalize border-yellow-300 bg-white p-4 rounded-lg'>

               <img src={movie.show.image.medium}  className=" h-72 w-72 object-cover object-center relative " />
              <h4 className="text-lg font-bold uppercase">{movie.show.name}</h4>

               </div>
               </div>
               </Link>



         </section>
         ))

            }
</article>

       </div>
       </body>
     </div>
  )
}

export default Featured