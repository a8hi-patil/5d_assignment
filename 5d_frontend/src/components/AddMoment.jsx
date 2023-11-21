import React from "react";
import { CgDetailsMore } from "react-icons/cg";
import { CiFaceSmile } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["JPG", "PNG", "GIF"];
const AddMoment = () => {
  const [newMoment, setNewMoment] = useState({ });
  const [file, setFile] = useState(null);
  const moments = [
    { title: "Moment1", tages: "test1" },
    { title: "Moment2", tages: "test2" },
  ];
  const handleChange = (file) => {
    setFile(file);
  };
  const addNewMoment = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", file);
    formData.append("moment", JSON.stringify(newMoment));

    axios
      .post("http://localhost:4999/upload", formData)
      .then((res) => {
        alert("Moment Added Succedfully");
        console.log(res);
      })
      .catch((er) => {
        alert("Someting went wrong");
        console.log(er);
      });
  };

  return (
    <div className="container-one">
      <div className="profile">
        <h1>5D Solutions</h1>
        <h2>Profile</h2>

        <h3>
          Moments <FaAngleDown />
        </h3>
        <ol>
          {moments.map((el) => {
            return <li key={el.title}>{el.title}</li>;
          })}
        </ol>
        <ul>
          <li>Add Moment</li>
        </ul>
      </div>
      <div className="add-moment">
        <div className="head">
          <CgDetailsMore className="icon" />
          <div>
            <CiFaceSmile className="icon" />
            <FaAngleDown className="icon" />
          </div>
        </div>
        <div>
          <h3>Add New Moment</h3>
          <form action="#" className="x" onSubmit={addNewMoment}>
            <div className="inputbox">
              <label htmlFor="name">Title</label>
              <div className="inner-inputbox">
                <input
                  type="text"
                  id="title"
                  name="name"
                  value={newMoment.title ? newMoment.title : ""}
                  onChange={(e) => {
                    setNewMoment({ ...newMoment, title: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="upload">
              <div className="inputbox">
                <label htmlFor="name">Tags</label>
                <div className="inner-inputbox">
                  {/* <CiUser /> */}
                  <input
                    type="text"
                    name="name"
                    value={newMoment.tags ? newMoment.tags : ""}
                    onChange={(e) => {
                      setNewMoment({ ...newMoment, tags: e.target.value });
                    }}
                  />
                </div>
              </div>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                label="Drag and Drop file or Brows"
              />
            </div>
            <input id="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMoment;
