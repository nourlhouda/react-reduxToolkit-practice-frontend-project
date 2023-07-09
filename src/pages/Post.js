import React, { useEffect } from "react";
import { getAllPosts } from "../slices/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../slices/userSlice";
import PostModal from "../components/PostModal";
import PostCard from "../components/PostCard";

function Post() {
  const dispatch = useDispatch();
  const { loading, postList, errors } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {errors && <p>{errors.msg}</p>}
      <div className="buttons-container">
        <PostModal />
      </div>
      <div className="post-container">
        {postList && postList.map((post) => <PostCard {...post} />)}
      </div>
    </>
  );
}

export default Post;
