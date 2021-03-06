import Layout from "../components/Layout";
import React, { Component, useEffect, useState } from "react";
import {Toast, Row,Col,Button}  from "react-bootstrap";
import { firebase, storage } from "../firebase";
import { useRouter } from "next/router";
const singleBlog = ({ articles }) => {
  const Router=useRouter()
    const [showToast, setShowToast] = useState(false);
  const [value, setValue] = useState({});
  console.log(value)
  const updateContent = () => {
    firebase.firestore().collection("articles").doc(`${value.id}`).set(value)
    console.log(value)
    setShowToast(true);
    Router.push(`/${articles.slug}`)
  };
  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false;

    const uploadThumb=(e)=>{
       const image =(e);
       const uploadTask= storage.ref(`blog thumb/${image.name}`).put(image);
       uploadTask.on('state_changed',
       (snapshot)=>{
         console.log(snapshot);
       },
       (error)=>{
         console.log(error);
       },
       ()=>{
         storage.ref("blog thumb").child(image.name).getDownloadURL().then(url=>{
           setValue({...articles, thumbnail:url})
         })
       }
       )
    }
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
                          <Toast.Body>
                            Update Success
                          </Toast.Body>
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
                        defaultValue={articles.title}
                        type="text"
                        id="example-date-input"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Preview</label>
                      <textarea
                        defaultValue={articles.preview}
                        className="form-control"
                      />
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
                      <img
                        style={{ width: "10em" }}
                        src={articles.thumbnail}
                      ></img>
                    </div>
                  </div>
                  <div className="table-responsive table-responsive-data2">
                    <label>Content</label>
                    <ReactQuill
                      defaultValue={articles.content}
                      onChange={(e) => setValue({ ...articles, content: e })}
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

singleBlog.getInitialProps = async function (context) {
  const { id } = context.query;
  let article = await firebase
    .firestore()
    .collection("articles")
    .where("slug", "==", id)
    .get()
    .then((snapshot) => {
      let arrData = [];
      snapshot.forEach((doc) => {
        arrData.push({ id: doc.id, ...doc.data() });
      });
      return arrData;
    })
    .catch(() => {
      return {};
    });
  return {
    articles: article[0],
  };
};
export default singleBlog;
