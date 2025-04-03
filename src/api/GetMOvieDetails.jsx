export const getMovieDetails = async ({params}) => {
    console.log(params)
const id= params.movieID

    try {
      // const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=22d93498&s=titanic&page=1")
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${
      import.meta.env.VITE_API_KEY
    }`)
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error)
    }
  }