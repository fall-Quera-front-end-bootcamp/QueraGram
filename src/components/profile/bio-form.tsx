import { useForm } from "react-hook-form";
import { BioFormData } from "../../types/types";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

interface BioFormProps {
  defaultBio: string;
}

export default function BioForm({ defaultBio }: BioFormProps) {
  const { register, handleSubmit } = useForm<BioFormData>();
  const navigate = useNavigate();

  async function onSubmit(data: BioFormData) {
    try {
      await api.requestChangeBio(data);
      navigate("/");
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className="basis-3/5">
      <form
        className="w-full flex flex-col items-center justify-around h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          className="basis-2/3 p-2.5 w-3/4 bg-gray-50 rounded border border-gray-300 focus:border-blue-500"
          placeholder="توضیحات اختیاری درمورد خودتان بنویسید"
          {...register("bio")}
          defaultValue={defaultBio}
        />

        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded px-5 py-2.5 text-center w-1/3">
          ذخیره
        </button>
      </form>
    </div>
  );
}
