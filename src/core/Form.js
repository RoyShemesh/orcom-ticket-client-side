import axios from "axios";
import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

export default function Form() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const fetchApi = () => {
    axios.post("https://orcom-it.manavate.com/tickets", {
      subject,
      description,
      name,
      email,
    });
  };
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="flex justify-center block text-gray-700 text-lg font-bold mb-2">
          Form
        </label>
        <Input placeholder={"subject"} setState={setSubject} />
        <Textarea placeholder={"description"} setState={setDescription} />
        <Input placeholder={"name"} setState={setName} />
        <Input placeholder={"email"} setState={setEmail} />
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => fetchApi()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
