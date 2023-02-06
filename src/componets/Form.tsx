import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

interface FormProps {
    FieldTypes: any[];
}

export default function Form({FieldTypes}: FormProps) {
  const [loading, setLoading ] = useState(false);
  const [formValues, setFormValues]  = useState({
    first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
    gender: "",
  });

  const notifyError = (e : string) => {
    toast.error(e, {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const notifySuccess = (e : string) => {
    toast.success(e, {
      position: toast.POSITION.TOP_CENTER
    });
  };

  const handelChange = (e: any) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handelSubmit = () => {
    const { first_name, last_name, email, contact_number, gender } = formValues;
    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      contact_number === "" ||
      gender === ""
    ) {
      if (first_name === "") {
        notifyError("Name field is required!");
      }
      if (last_name === "") {
        notifyError("Surname field is required!");
      }
      if (email === "") {
        notifyError("Email field is required!");
      }
      if (contact_number === "") {
        notifyError("Contact number field is required!");
      }
      if (gender === "") {
        notifyError("Gender field is required!");
      }
      return;
    }
    setLoading(true);
    setTimeout(() => {
        notifySuccess("You have successfully signed up!");
      setLoading(false);
    }, 4000);
  }

  return (
    <main className="w-full px-10">
        <ToastContainer />
        <section>
          <p className="text-sm px-4 text-center">Welocme to Maurice App to become a member please could you kindly complete our signup form</p>
        </section>
        <section>
          {FieldTypes.map((f) => {
            return (
              <div key={f.id} className="flex flex-wrap gap-1">
                <div className="pl-1 w-full text-sm py-2">
                  <label>{f.label}</label>
                </div>
                <input
                  type={f.inputType}
                  name={f.name}
                  placeholder={f.placeHolder}
                  onChange={(e) => handelChange(e)}
                  className={
                    f.inputType === "radio"
                      ? "w-5 h-5"
                      : "text-sm w-full rounded h-9 border border-gray-300 px-3"
                  }
                  defaultValue={f.value}
                />
                {f.inputType === "radio" ? <p>{f.value}</p> : ""}
              </div>
            );
          })}
          <button
            onClick={handelSubmit}
            disabled={loading ? true : false }
            className={loading ? "bg-blue-500 hover:bg-blue-600 rounded mt-4 h-9 w-full text-white cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 rounded mt-4 h-9 w-full text-white"}
          >
            {loading ? <div className="loader m-auto"></div> : <p>Submit</p>}
          </button>
        </section>
      </main>
  )
}
