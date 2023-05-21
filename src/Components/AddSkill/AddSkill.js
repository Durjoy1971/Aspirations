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
import "./AddSkill.css";

const AddSkill = () => {
  const idRef = useRef();
  const iconRef = useRef();
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
        collection(db, "SkillList"),
        orderBy("idValue", "desc"),
        limit(1)
      );
      const querySnapshot = await getDocs(skillQuery);

      if (querySnapshot.empty) {
        setNextId(1);
      } else {
        const highestId = parseInt(querySnapshot.docs[0].data().idValue);
        const nextID = String(highestId + 1);
        setNextId(nextID);
      }
    } catch (error) {
      console.error("Error fetching skills: ", error);
    }
  };

  const handleAddSkill = async (e) => {
    e.preventDefault();

    try {
      const idValue = nextId;
      const iconValue = iconRef.current.value;
      const titleValue = titleRef.current.value;
      const descriptionValue = descriptionRef.current.value;
      const keywordValue = keywordRef.current.value;

      const newSkill = {
        idValue,
        iconValue,
        titleValue,
        descriptionValue,
        keywordValue,
      };

      await addDoc(collection(db, "SkillList"), newSkill);
      alert("Skill Added Successfully");

      /* Form Clear */
      iconRef.current.value = "";
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
    <div onSubmit={handleAddSkill} className="AddSkillOuter">
      <div className="Update-Text">
        <h3> Adding Skill Course</h3>
      </div>

      <div className="Update-Grid">
        <div className="Update-Upper">
          <img
            className="Up-Image"
            src="https://i.ibb.co/DGdxfqh/AddSkill.png"
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
              <h4 className="Form-Label">Enter Icon </h4>
              <Form.Control
                className="Form-Input"
                ref={iconRef}
                type="text"
                placeholder="Enter Icon "
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

export default AddSkill;
