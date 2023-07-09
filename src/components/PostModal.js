import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost as addPostAction, updatePost } from "../slices/postSlice";
function PostModal({ check, title, image, desc, id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const addPost = (data) => {
    console.log(data);
    if (check) dispatch(updatePost({ ...data, id }));
    dispatch(addPostAction(data));
    handleClose();
  };
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {check ? "Update" : "Add Post"}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Adding Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Post Title"
              aria-label="title"
              aria-describedby="basic-addon1"
              name="title"
              {...register("title", { value: title })}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              https://example.com/picture/
            </InputGroup.Text>
            <Form.Control
              id="basic-url"
              aria-label="image"
              aria-describedby="basic-addon3"
              placeholder="House Picture"
              name="image"
              {...register("image", { value: image })}
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Text>House Description</InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="desc"
              name="desc"
              {...register("desc", { value: desc })}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="primary" onClick={handleSubmit(addPost)}>
            {check ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostModal;
