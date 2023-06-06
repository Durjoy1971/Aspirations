import React, { useRef, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import "./AddKidsCorner.css";

const AddKidsCorner = () => {
  const idRef = useRef();
  const imageRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const keywordRef = useRef();

  const [nextId, setNextId] = useState(null);

  useEffect(() => {
    fetchHighestId();
  }, []);

  const fetchHighestId = async () => {
    try {
      const skillQuery = query(
        collection(db, "kidList"),
        orderBy("idValue", "desc"),
        limit(1)
      );
      const querySnapshot = await getDocs(skillQuery);

      if (querySnapshot.empty) {
        setNextId(1);
      } else {
        const highestId = parseInt(querySnapshot.docs[0].data().idValue);
        const nextID = highestId + 1;
        setNextId(nextID);
      }
    } catch (error) {
      console.error("Error fetching skills: ", error);
    }
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();

    try {
      const idValue = parseInt(nextId);
      const imageValue = imageRef.current.value;
      const titleValue = titleRef.current.value;
      const descriptionValue = descriptionRef.current.value;
      const keywordValue = keywordRef.current.value;

      const newSkill = {
        idValue,
        imageValue,
        titleValue,
        descriptionValue,
        keywordValue,
      };

      await addDoc(collection(db, "kidList"), newSkill);
      alert("Course Added Successfully In Kid's Corner");

      /* Form Clear */
      imageRef.current.value = "";
      titleRef.current.value = "";
      descriptionRef.current.value = "";
      keywordRef.current.value = "";

      // Fetch the updated highest ID
      fetchHighestId();
    } catch (error) {
      console.error("Error adding skill: ", error);
    }
  };

  return (
    <div onSubmit={handleAddSkill} className="AddKidOuter">
      <div className="Update-Text">
        <h3>Kid's Corner Section </h3>
      </div>

      <div className="Update-Grid">
        <div className="Update-Upper">
          <img
            className="Up-Image"
            src="https://i.ibb.co/dggGr0T/Update-Section.jpg"
            alt="React Bootstrap logo"
          />
        </div>

        <div className="Update-Lower">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h4 className="Form-Label">Enter ID </h4>
              <Form.Control
                ref={idRef}
                className="Form-Input"
                type="text"
                placeholder="Enter ID"
                value={nextId || ""}
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h4 className="Form-Label">Enter Image </h4>
              <Form.Control
                className="Form-Input"
                ref={imageRef}
                type="text"
                placeholder="Enter Image"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h4 className="Form-Label">Enter Title </h4>
              <Form.Control
                className="Form-Input"
                ref={titleRef}
                type="text"
                placeholder="Enter Title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h4 className="Form-Label">Enter Description </h4>
              <Form.Control
                className="Form-Input"
                ref={descriptionRef}
                type="text"
                placeholder="Enter Description"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h4 className="Form-Label">Enter Keyword </h4>
              <Form.Control
                className="Form-Input"
                ref={keywordRef}
                type="text"
                placeholder="Enter Keyword"
                required
              />
            </Form.Group>

            <Button className="fav-btn-primary addSkill-button" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddKidsCorner;
