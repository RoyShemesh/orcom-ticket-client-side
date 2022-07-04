import axios from "axios";
import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { Notyf } from "notyf";
import validator from "validator";
import "notyf/notyf.min.css"; // for React, Vue and Svelte

const APIUrl = "http://localhost:8080";
export default function Form() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const checkData = () => {
    const notyf = new Notyf();
    if (!validator.isEmail(email)) {
      notyf.error("Email not valid");
      return false;
    }
    if (!name || !description || !subject) {
      notyf.error("Please fill all fields");
      return false;
    }
    return true;
  };
  const fetchApi = async () => {
    try {
      if (!checkData()) throw new Error();
      await axios.post(`${APIUrl}/addTicket`, {
        subject,
        description,
        name,
        email,
      });
      const notyf = new Notyf();
      notyf.success("Your request has been accepted");
      setName("");
      setDescription("");
      setSubject("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="flex justify-center block text-gray-700 text-lg font-bold mb-2">
          Form
        </label>
        <Input placeholder={"subject"} setState={setSubject} state={subject} />
        <Textarea
          placeholder={"description"}
          setState={setDescription}
          state={description}
        />
        <Input placeholder={"name"} setState={setName} state={name} />
        <Input placeholder={"email"} setState={setEmail} state={email} />
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={async () => await fetchApi()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
