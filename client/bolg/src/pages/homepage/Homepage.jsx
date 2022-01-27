import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import Topbar from "../../components/topbar/Topbar";
import pack from "../../../package.json";
export default function Homepage() {
const [posts, setPosts] = useState([])
const { search } = useLocation();

 useEffect(() => {
  const fetchPosts = async () => {
  const res = await axios.get(`${pack.proxy}post` + search)
  setPosts(res.data)
  }
    fetchPosts()
  }, [search])

  return (
    <>
    <Topbar />
      <Header />
      <div className="home">
        <Posts posts={posts} />
        {/* <Sidebar /> */}
      </div>
    </>
  );
}
