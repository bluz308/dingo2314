import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { firebase } from "../firebase";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import Statistic from "../components/statistic";
import withAuth from "../withAuth";
const Index = () => {
  const [guests, setGuests] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("reservation")
      .get()
      .then((snapshot) => {
        let arrData = [];
        snapshot.forEach((doc) => {
          arrData.push({ id: doc.id, ...doc.data() });
        });
        setGuests(arrData);
      });
  }, [guests]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
  };
  const onDelete = (id) => {
    if (window.confirm("Are you sure you wish to delete this ???")) {
      firebase
        .firestore()
        .collection("reservation")
        .doc(id)
        .delete()
        .catch((error) => console.log(error));
    }
  };
  const [person, setPerson] = useState({});
  const editData = (e) => {
    handleShow();
    setPerson(
      guests.filter((f) => {
        return f.id === e;
      })[0]
    );
  };
  const saveValue = () => {
    firebase.firestore().collection("reservation").doc(person.id).set(person);
    handleClose();
  };
  const [data, setData] = useState({});
  const addGuest = () => {
    firebase.firestore().collection("reservation").add(data);
    handleClose2();
  };
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
                  <h3 className="title-5 m-b-35">Reservation</h3>
                  <div className="table-data__tool-right">
                    <button
                      className="au-btn au-btn-icon au-btn--green au-btn--small"
                      onClick={handleShow2}
                    >
                      <i className="zmdi zmdi-plus" />
                      Add a Customer
                    </button>
                  </div>
                  <div className="table-responsive table-responsive-data2">
                    <table className="table table-data2">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Time</th>
                          <th>Date</th>
                          <th>Guests</th>
                          <th>status</th>
                          <th>Note</th>
                          <th />
                        </tr>
                      </thead>

                      <tbody>
                        {/*Add*/}
                        <Modal show={show2} onHide={handleClose2}>
                          <Modal.Header closeButton>
                            <Modal.Title>Add</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div>
                              <div className="form-group">
                                <label>Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={(e) =>
                                    setData({ ...data, name: e.target.value })
                                  }
                                />
                              </div>
                              <div className="form-group">
                                <label>Phone</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={(e) =>
                                    setData({
                                      ...data,
                                      phone: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group">
                                <label>Email</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  onChange={(e) =>
                                    setData({
                                      ...data,
                                      email: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group">
                                <label>Time</label>
                                <select
                                  className="form-control"
                                  id="Select2"
                                  required
                                  onChange={(e) =>
                                    setData({
                                      ...data,
                                      time: e.target.value,
                                    })
                                  }
                                >
                                  <option>Time</option>
                                  <option>8 AM TO 10AM</option>
                                  <option>10 AM TO 12PM</option>
                                  <option>12PM TO 2PM</option>
                                  <option>2PM TO 4PM</option>
                                  <option>4PM TO 6PM</option>
                                  <option>6PM TO 8PM</option>
                                  <option>4PM TO 10PM</option>
                                  <option>10PM TO 12PM</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label>Date</label>
                                <input
                                  type="date"
                                  id="example-date-input"
                                  className="form-control"
                                  onChange={(e) =>
                                    setData({
                                      ...data,
                                      date: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group">
                                <label>Status</label>
                                <select
                                  className="form-control"
                                  id="Select2"
                                  required
                                  onChange={(e) =>
                                    setData({
                                      ...data,
                                      status: e.target.value,
                                    })
                                  }
                                >
                                  <option>Status</option>
                                  <option>Pending</option>
                                  <option>Confirmed</option>
                                  <option>Denied</option>
                                  <option>Done</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label>Guest</label>
                                <select
                                  className="form-control"
                                  id="Select2"
                                  onChange={(e) =>
                                    setData({
                                      ...data,
                                      nog: e.target.value,
                                    })
                                  }
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5+</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label>Note</label>
                                <textarea
                                  onChange={(e) =>
                                    setData({
                                      ...data,
                                      note: e.target.value,
                                    })
                                  }
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose2}>
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              onClick={() => addGuest()}
                            >
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        {/* End Add*/}
                        {/* Start Edit*/}
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Edit</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div>
                              <div className="form-group">
                                <label>Name</label>
                                <input
                                  placeholder={person.name}
                                  type="text"
                                  className="form-control"
                                  onChange={(e) =>
                                    setPerson({
                                      ...person,
                                      name: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group">
                                <label>Phone</label>
                                <input
                                  placeholder={person.phone}
                                  type="text"
                                  className="form-control"
                                  onChange={(e) =>
                                    setPerson({
                                      ...person,
                                      phone: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group">
                                <label>Email</label>
                                <input
                                  placeholder={person.email}
                                  type="text"
                                  className="form-control"
                                  onChange={(e) =>
                                    setPerson({
                                      ...person,
                                      email: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group">
                                <label>Time</label>
                                <select
                                  defaultValue={person.time}
                                  className="form-control"
                                  id="Select2"
                                  required
                                  onChange={(e) =>
                                    setPerson({
                                      ...person,
                                      time: e.target.value,
                                    })
                                  }
                                >
                                  <option>8 AM TO 10AM</option>
                                  <option>10 AM TO 12PM</option>
                                  <option>12PM TO 2PM</option>
                                  <option>2PM TO 4PM</option>
                                  <option>4PM TO 6PM</option>
                                  <option>6PM TO 8PM</option>
                                  <option>4PM TO 10PM</option>
                                  <option>10PM TO 12PM</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label>Date</label>
                                <input
                                  defaultValue={person.date}
                                  type="date"
                                  id="example-date-input"
                                  className="form-control"
                                  onChange={(e) =>
                                    setPerson({
                                      ...person,
                                      date: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div className="form-group">
                                <label>Status</label>
                                <select
                                  defaultValue={person.status}
                                  className="form-control"
                                  id="Select2"
                                  required
                                  onChange={(e) =>
                                    setPerson({
                                      ...person,
                                      status: e.target.value,
                                    })
                                  }
                                >
                                  <option>Pending</option>
                                  <option>Confirmed</option>
                                  <option>Denied</option>
                                  <option>Done</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label>Guest</label>
                                <select
                                  className="form-control"
                                  id="Select2"
                                  onChange={(e) =>
                                    setPerson({
                                      ...person,
                                      nog: e.target.value,
                                    })
                                  }
                                >
                                  <option>1</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5+</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label>Note</label>
                                <textarea
                                  placeholder={person.note}
                                  onChange={(e) =>
                                    setPerson({
                                      ...person,
                                      note: e.target.value,
                                    })
                                  }
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              onClick={() => saveValue()}
                            >
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        {/* End Edit*/}

                        {guests.map((data) => (
                          <>
                            <tr className="tr-shadow" key={guests.id}>
                              <td>{data.name}</td>
                              <td>{data.phone}</td>
                              <td>
                                <span className="block-email">
                                  {data.email}
                                </span>
                              </td>
                              <td className="desc">{data.time}</td>
                              <td>{data.date}</td>
                              <td>{data.nog}</td>
                              <td>
                                <span className="status--process">
                                  {data.status}
                                </span>
                              </td>
                              <td>{data.note}</td>
                              <td>
                                <div className="table-data-feature">
                                  <button
                                    className="item"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                    onClick={() => editData(data.id)}
                                  >
                                    <i className="zmdi zmdi-edit" />
                                  </button>
                                  <button
                                    className="item"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete"
                                    onClick={() => onDelete(data.id)}
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

export default Index;
