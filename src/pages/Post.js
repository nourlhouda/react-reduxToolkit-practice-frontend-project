import React, { useEffect } from "react";
import { getAllPosts } from "../slices/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../slices/userSlice";


function Post() {
  const dispatch = useDispatch();
  const { loading, postList, errors } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="post-container">
      {loading && <p>Loading...</p>}
      {errors && <p>{errors.msg}</p>}
      {postList &&
        postList.map((post) => (
          <div className="Auth-form" key={post._id}>
            <h6>{post.owner.name}</h6>
            <h4>{post.title}</h4>
            <p>{post.desc}</p>
            <img src={post.image} alt="House" />
          </div>
        ))}
    </div>
  );
}

export default Post;
