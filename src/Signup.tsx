import React from 'react'
import Form from './componets/Form';

const FieldTypes = [
    {
      id: 1,
      label: "Name",
      name: "first_name",
      inputType: "text",
      placeHolder: "Enter your name",
      value: "",
    },
    {
      id: 2,
      label: "Surname",
      name: "last_name",
      inputType: "text",
      placeHolder: "Enter your surname",
      value: "",
    },
    {
      id: 3,
      label: "Contact Number",
      name: "contact_number",
      inputType: "tell",
      placeHolder: "Enter contact number",
      value: "",
    },
    {
      id: 4,
      label: "Email",
      name: "email",
      inputType: "email",
      placeHolder: "Enter your email",
      value: "",
    },
    {
      id: 5,
      label: "Gender",
      name: "gender",
      inputType: "radio",
      value: "male",
    },
    {
      id: 6,
      name: "gender",
      inputType: "radio",
      value: "female",
    },
    {
      id: 7,
      name: "gender",
      inputType: "radio",
      value: "rather not say",
    },
  ];


export default function Signup() {
  return (
    <div className='w-full'>
        <h2 className='text-3xl py-5 font-bold text-center'>
            Signup
        </h2>
        <Form FieldTypes={FieldTypes}/>
    </div>
  )
}
