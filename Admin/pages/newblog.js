import Layout from "../components/Layout";
import React, { Component, useEffect, useState } from "react";
import { Toast, Row, Col, Button } from "react-bootstrap";
import { firebase, storage } from "../firebase";
import { useRouter } from "next/router";
const newBlog = () => {
  const Router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [value, setValue] = useState({});
  console.log(value);
  const updateContent = () => {
    setValue({
      ...value,
      slug: value.title
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-"),
    });
    firebase.firestore().collection("articles").add(value);
    console.log(value);
    setShowToast(true);
  };
  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false;

  const uploadThumb = (e) => {
    const image = e;
    const uploadTask = storage.ref(`blog thumb/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("blog thumb")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setValue({ ...value, thumbnail: url });
          });
      }
    );
  };
  return (
    <Layout>
      <div className="page-wrapper">
        <div className="page-content--bgf7">
          {/* WELCOME*/}
          <section className="p-t-20">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="table-data__tool-right">
                    <Row>
                      <Col xs={6}>
                        <Toast
                          onClose={() => setShowToast(false)}
                          show={showToast}
                          delay={3000}
                          autohide
                        >
                          <Toast.Body>Update Success</Toast.Body>
                        </Toast>
                      </Col>
                    </Row>
                    <div className="form-group">
                      <button
                        className="au-btn au-btn-icon au-btn--green au-btn--small"
                        onClick={updateContent}
                      >
                        <i className="zmdi zmdi-upload" />
                        Update Article
                      </button>
                      <hr className="line-seprate" />
                      <label>Title</label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) =>
                          setValue({ ...value, title: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Preview</label>
                      <textarea
                        className="form-control"
                        onChange={(e) =>
                          setValue({ ...value, preview: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Author</label>
                      <textarea
                        className="form-control"
                        onChange={(e) =>
                          setValue({ ...value, author: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Category</label>
                      <select
                        className="form-control"
                        id="Select2"
                        onChange={(e) =>
                          setValue({
                            ...value,
                            category: e.target.value,
                          })
                        }
                      >
                        <option>DIY</option>
                        <option>Restaurant Food</option>
                        <option>Hotel Review</option>
                        <option>Eating Out</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Thumbnail</label>
                      <input
                        type="file"
                        id="example-date-input"
                        className="form-control"
                        onChange={(e) => uploadThumb(e.target.files[0])}
                      />
                    </div>
                    <div className="form-group">
                      <img style={{ width: "10em" }}></img>
                    </div>
                  </div>
                  <div className="table-responsive table-responsive-data2">
                    <label>Content</label>
                    <ReactQuill
                      onChange={(e) => setValue({ ...value, content: e })}
                    ></ReactQuill>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END DATA TABLE*/}
          {/* COPYRIGHT*/}
        </div>
      </div>
    </Layout>
  );
};

export default newBlog;
