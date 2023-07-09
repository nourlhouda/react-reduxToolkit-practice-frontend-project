import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import { deletePost } from "../slices/postSlice";
import PostModal from "./PostModal";

function PostCard({ title, desc, image, owner, _id }) {
  const { userInfo } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const deletePostFct = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <>
      <div className="Auth-form" key={_id}>
        <h6>{owner?.name}</h6>
        <h4>{title}</h4>
        <p>{desc}</p>
        <img src={image} alt="House" />
        <br />
        <br />
        {userInfo._id === owner?._id && (
          <>
            <span>
              <PostModal
                check={true}
                title={title}
                image={image}
                desc={desc}
                id={_id}
              />
              <Button
                variant="dark"
                onClick={() => {
                  deletePostFct(_id);
                }}
              >
                Delete
              </Button>
            </span>
          </>
        )}
      </div>
    </>
  );
}

export default PostCard;
