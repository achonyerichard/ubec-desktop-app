import useAuth from "../hooks/useAuth";
import React, { useState, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Otp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { updateCode, loading } = useAuth();
  const [formValues, setFormValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);
  const input6Ref = useRef(null);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setFormValues({ ...formValues, [name]: value });

    if (e.target.value.length === e.target.maxLength) {
      switch (e.target) {
        case input1Ref.current:
          input2Ref.current.focus();
          break;
        case input2Ref.current:
          input3Ref.current.focus();
          break;
        case input3Ref.current:
          input4Ref.current.focus();
          break;
        case input4Ref.current:
          input5Ref.current.focus();
          break;
        case input5Ref.current:
          input6Ref.current.focus();
          break;
        default:
          break;
      }
    }
  };
  const verify2FA = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const code = `${formValues.input1}${formValues.input2}${formValues.input3}${formValues.input4}${formValues.input5}${formValues.input6}`;
    const data = { code: code };
    if (code.toString().length === 6) {
      updateCode(data);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="">
        <div className="">
          <form
            action=""
            className="flex flex-col gap-4 justify-center items-center "
            onSubmit={verify2FA}
          >
            <div className="flex flex-row flex-wrap justify-center space-x-4">
              <input
                className=" w-10 mb-4 rounded text-xl  p-2 text-center appearance-none border-2 border-lmsBlack"
                type="text"
                maxLength="1"
                name="input1"
                ref={input1Ref}
                value={formValues.input1}
                onChange={handleInputChange}
              />
              <input
                className="w-10 mb-4 rounded text-xl  p-2 text-center appearance-none border-2 border-lmsBlack"
                type="text"
                maxLength="1"
                name="input2"
                ref={input2Ref}
                value={formValues.input2}
                onChange={handleInputChange}
              />
              <input
                className="w-10 mb-4 rounded text-xl  p-2 text-center appearance-none border-2 border-lmsBlack"
                type="text"
                maxLength="1"
                name="input3"
                ref={input3Ref}
                value={formValues.input3}
                onChange={handleInputChange}
              />
              <input
                className="w-10 mb-4 rounded text-xl  p-2 text-center appearance-none border-2 border-lmsBlack"
                type="text"
                maxLength="1"
                name="input4"
                ref={input4Ref}
                value={formValues.input4}
                onChange={handleInputChange}
              />
              <input
                className="w-10 mb-4 rounded text-xl  p-2 text-center appearance-none border-2 border-lmsBlack"
                type="text"
                maxLength="1"
                name="input5"
                ref={input5Ref}
                value={formValues.input5}
                onChange={handleInputChange}
              />
              <input
                className="w-10 mb-4 rounded text-xl  p-2 text-center appearance-none border-2 border-lmsBlack"
                type="text"
                maxLength="1"
                name="input6"
                ref={input6Ref}
                value={formValues.input6}
                onChange={handleInputChange}
              />
            </div>
            <button
              disabled={loading}
              className="bg-lmsRed  text-lmsWhite border border-lmsBlack   w-full lg:w-auto px-6 py-2 flex items-center justify-center gap-x-2 py-2 hover:scale-105 duration-300"
            >
              {loading ? "Loading..." : "Login"}
              <BsArrowUpRight className="text-lmsWhite text-lg" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Otp;
