function InputForm({ label, type, name }) {
  return (
    <fieldset className="fieldset ">
      <legend className="fieldset-legend text-white lg:text-black">
      {label}
      </legend>
      <input
        type={type}
        name={name}
        className="input w-full"
        placeholder="Type here"
      />
    </fieldset>
  );
}

export default InputForm;
