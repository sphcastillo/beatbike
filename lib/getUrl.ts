// // Description: This file defines a function that returns the URL of the given path.
// const getUrl = (path: string) =>
//     process.env.NODE_ENV === 'development'
//     ? `http://localhost:3000${path}`
//     : process.env.VERCEL_URL + '/' + path;

// export default getUrl;

const getUrl = (path: string) => {
    // Remove leading slash from path if it exists
    const formattedPath = path.startsWith('/') ? path.slice(1) : path;
  
    return process.env.NODE_ENV === 'development'
      ? `http://localhost:3000/${formattedPath}`
      : `${process.env.VERCEL_URL}/${formattedPath}`;
  };
  
  export default getUrl;