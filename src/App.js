import "./App.css";

import useAxios from "./hooks/useAxios";

function App() {
  const { response, error, loading, fetchData } = useAxios();

  useEffect(() => {
    fetchData({ url: "/posts", method: "GET" });
  }, []);

  const handleSubmit = () => {
    const postData = { title: "New Post", body: "This is a new post." };
    fetchData({ url: "/posts", method: "POST", data: postData });
  };

  const handleUpdate = () => {
    const updateData = {
      title: "Updated Post",
      body: "This post has been updated.",
    };
    fetchData({ url: `/posts/${postId}`, method: "PUT", data: updateData });
  };

  const handleDelete = () => {
    fetchData({ url: `/posts/${postId}`, method: "DELETE" });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {response &&
          response.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
