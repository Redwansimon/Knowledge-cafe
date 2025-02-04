import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
    const [blogs , setBlogs]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1>Blogs   :{blogs.length}</h1>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;