import { useState, useEffect } from "react";
import axios from "axios";

function usePosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // We will download the content from dummyapi.io
    axios.get("https://dummyapi.io/data/v1/post", {
        headers: { "app-id": import.meta.env.VITE_APP_ID }, // Environment variable
      })
      .then((response) => {
        const responseObject = response.data;
        console.log(responseObject);
        setPosts([...responseObject.data]);
      })
      .catch((err) => {
        console.log("Error Handled", err);
      });
  }, []);
    
    return [posts, setPosts]
}
export default usePosts;
