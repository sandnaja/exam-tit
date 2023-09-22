"use client";
import React, { useState } from "react";

type FormValues = {
  point: number;
};

const initialFormValues: FormValues = {
  point: 0,
};

export default function page() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [data, setData] = useState<FormValues[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setData([...data, { ...formValues }]);

    setFormValues(initialFormValues);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {

    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: Number(value) });
  };

  console.log(typeof formValues.point);
  

  return (
    <>
      <div className="grid just justify-center items-center">
        <div className="m-10">
          <p className="text-center text-xl font-bold my-3">Example TIT</p>
          <p className="text-center text-lg font-medium my-2">Calculate Grade</p>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="point"
              onChange={handleInputChange}
              value={formValues.point === 0 ? "" : formValues.point}
              placeholder="Point"
              className="shadow appearance-none border rounded mr-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                formValues.point === 0 ? "pointer-events-none opacity-50" : ""
              }`}
              type="submit"
              disabled={formValues.point === 0}
            >
              Calculate
            </button>
          </form>
        </div>

        {data.map((item, index) => (
          <>
            <div className="rounded-lg bg-slate-100 m-1 p-5" key={index}>
              <p>{"Point: " + item.point}</p>
              <p>
                Grade: {item.point >= 80 ? "A" : item.point >= 50 ? "B" : "F"}
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
