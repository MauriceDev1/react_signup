import React, { useState } from 'react'

interface FormProps {
    FieldTypes: any[];
}

export default function Form({FieldTypes}: FormProps) {
  const [loading, setLoading ] = useState();


  const handelChange = (e: any) => {

  }

  const handelSubmit = () => {

  }

  return (
    <main className="w-full px-10">
        {/* <ToastContainer /> */}
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
