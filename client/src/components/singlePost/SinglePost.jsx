import "./singlePost.css"
import {useLocation} from "react-router"
import {useEffect,useState,useContext} from "react"
import axios from "axios"
import {Link} from "react-router-dom";
import {Context} from "../../context/Context"
export default function SinglePost() {
  const location=useLocation();
  const path=location.pathname.split("/")[2];
  const [post,setPost]=useState({});
  const PF="http://localhost:5000/images/";
  const {user}=useContext(Context);
  useEffect(()=>{
   const getPosts=async ()=>{
     const res= await axios.get("http://localhost:5000/api/posts/"+path);
     console.log(res.data.username);
     setPost(res.data);
   }
   getPosts();
  },[path]);
  const handleDelete=async()=>{
    try {
      await axios.delete("http://localhost:5000/api/posts/"+path,{data:{username:user.username},});
      window.location.replace("/");
    } catch (err) {}
  }
  console.log(post);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo &&(
        <img src={PF + post.photo} alt="" className="singlePostImg" />)}
       <h1 className="singlePostTitle">
        {post.title}
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
       </h1>
       <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: 
        <Link to={`/?user=${post.username}`} className="link">
        <b>{post.username}</b>
        </Link>
        </span>
        <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
       </div>
       <p className="singlePostDesc">
       {post.desc}
       </p>
      </div>
    </div>
  )
}
