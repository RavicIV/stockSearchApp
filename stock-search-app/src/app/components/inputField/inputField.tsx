import { IInputField } from "@/app/types";
import "./inputField.css";

function InputField({
  type,
  name,
  title,
  value,
  placeholder,
  handleChange,
}: IInputField) {
  return (
      <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">{title}:</label>
      <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        id={name}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      ></input>
      </div>
  );
}

export default InputField;
