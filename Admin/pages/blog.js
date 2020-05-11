import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { firebase } from "../firebase";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect, Children } from "react";
import Statistic from "../components/statistic";
import Link from "next/link";
const MyButton = React.forwardRef(
  ({ onClick, href, children, className }, ref) => {
    return (
      <button className={className} href={href} onClick={onClick} ref={ref}>
        {children}
      </button>
    );
  }
);
const Blog = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("articles")
      .get()
      .then((snapshot) => {
        let arrData = [];
        snapshot.forEach((doc) => {
          arrData.push({ id: doc.id, ...doc.data() });
        });
        setArticle(arrData);
      });
  }, [article]);
  const[items,setItems]=useState()
  const selectDelete=(e)=>{
        setItems(
          article.filter((f) => {
            return f.id === e;
          })[0]
        );
        handleShow();
  }
  const onDelete = () => {
    console.log(article.id)
      // firebase
      //   .firestore()
      //   .collection("articles")
      //   .doc(`${article.id}`)
      //   .delete()
      //   .catch((error) => console.log(error));
        handleClose();
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      <div className="page-wrapper">
        <div className="page-content--bgf7">
          {/* WELCOME*/}
          <section className="welcome p-t-10">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="title-4">
                    Welcome back
                    <span></span>
                  </h1>
                  <hr className="line-seprate" />
                </div>
              </div>
            </div>
          </section>
          <Statistic></Statistic>
          <section className="p-t-20">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="title-5 m-b-35">Blog</h3>
                  <div className="table-data__tool-right">
                    <Link href="newblog">
                      <MyButton className="au-btn au-btn-icon au-btn--green au-btn--small">
                        <i className="zmdi zmdi-plus" />
                        Add
                      </MyButton>
                    </Link>
                  </div>
                  <div className="table-responsive table-responsive-data2">
                    <table className="table table-data2">
                      <thead>
                        <tr>
                          <th>Thumbnail</th>
                          <th>Title</th>
                          <th>Author</th>
                          <th>Date</th>
                          <th>Category</th>
                        </tr>
                      </thead>
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Delete</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                Are you sure you wish to delete this ???
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  No
                                </Button>
                                <Button variant="primary" onClick={()=>onDelete()}>
                                  Yes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                      <tbody>
                        {article.map((data) => (
                          <>

                            
                            <tr className="tr-shadow" key={data.id}>
                              <td>
                                <img
                                  style={{ width: "10em" }}
                                  src={data.thumbnail}
                                ></img>
                              </td>
                              <td>{data.title}</td>
                              <td className="desc">{data.author}</td>
                              <td>{data.date}</td>
                              <td>
                                <span className="status--process">
                                  {data.category}
                                </span>
                              </td>
                              <td>
                                <div className="table-data-feature">
                                  <Link
                                    href="[id]"
                                    as={`${data.slug}`}
                                    passHref
                                  >
                                    <MyButton className="item">
                                      <i className="zmdi zmdi-edit" />
                                    </MyButton>
                                  </Link>
                                  <button
                                    className="item"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete"
                                    onClick={selectDelete}
                                  >
                                    <i className="zmdi zmdi-delete" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                            <tr className="spacer" />
                          </>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* END DATA TABLE*/}
          {/* COPYRIGHT*/}
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
