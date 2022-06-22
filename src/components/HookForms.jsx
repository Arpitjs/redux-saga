import React from "react";
import { useForm } from "react-hook-form";

export default function HookForms() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const style = {
    display: "block",
    margin: "20px",
  };

  const onSubmit = (data) => console.log("submitted data ===>", data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue="test"
        {...register("example", { minLength: 5 })}
        style={style}
      />

      <input
        {...register("exampleRequired", { required: true })}
        style={style}
      />

      {errors.exampleRequired && <span>This field is required</span>}

      {errors.example && <p>min length is 5</p>}

      <select {...register("gender")} style={style}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      <input type="submit" style={style} />
    </form>
  );
}
