const getUrl = (path: string) => {
    // Remove leading slash from path if it exists
    const formattedPath = path.startsWith('/') ? path.slice(1) : path;
    console.log("formattedPath: ", formattedPath);
  
    return process.env.NODE_ENV === 'development'
      ? `http://localhost:3000/${formattedPath}`
      : `https://${process.env.VERCEL_URL}/${formattedPath}`;
  };
  
  export default getUrl;