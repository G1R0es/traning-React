import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Myinput from "./components/UI/input/Myinput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Javascript",
      body: "Javascript - язык программирования",
    },
    {
      id: 2,
      title: "Javascript 2",
      body: "Javascript - язык программирования",
    },
    {
      id: 3,
      title: "Javascript 3",
      body: "Javascript - язык программирования",
    },
  ]);


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => { 
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '30px 0 30px 0'}}/>
      {posts.length 
        ?
        <PostList remove={removePost} posts={posts} title={"Посты про JS"} />
        :
        <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
      <hr style={{margin: '30px 0 15px 0'}}/>
      <ClassCounter />
      <Counter />
    </div>
  );
}

export default App;
