import { getDocs, addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config/firebase";
import { useEffect } from "react";
import { Output } from "./Output";
export function InputForm() {
  const [UserInfoList, setUserInfoList] = useState([]);

  const [UserName, setUserName] = useState("");
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("Job");

  const userCollectionRef = collection(db, "UserInfo");
  const getUserList = async () => {
    const data = await getDocs(userCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setUserInfoList(filteredData);
  };
  useEffect(() => {
    getUserList();
  }, []);

  async function onClickHandler() {
    const isValidName = /^[A-Za-z\s]+$/.test(UserName);
    if (!isValidName) {
      alert("Please enter a valid name.");
      return;
    }

    const isValidDob =
      /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-(19|20)\d{2}$/.test(dob);
    if (!isValidDob) {
      alert("Please enter a valid date of birth (DD-MM-YYYY).");
      return;
    }

    await addDoc(userCollectionRef, {
      UserName: UserName,
      Dob: dob,
      Occupation: occupation,
    });
    getUserList();
  }
  return (
    <Output
      setUserName={setUserName}
      setDob={setDob}
      setOccupation={setOccupation}
      occupation={occupation}
      UserInfoList={UserInfoList}
      onClickHandler={onClickHandler}
    ></Output>
  );
}
