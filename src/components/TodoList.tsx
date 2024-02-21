import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

export default function TodoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("toDo")} placeholder="Write a to do"></input>
        <button>Add</button>
      </form>
    </div>
  );
}
