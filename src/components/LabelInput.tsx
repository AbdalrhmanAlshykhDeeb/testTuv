interface Form {
  editMode: boolean;
  labelEn?: string;
  labelAr?: string;
  className?: string;
  classNameLabel?: string;
  placeHolder?: string;
  classNameInput?: string;
}

const LabelInput = ({
  editMode,
  labelEn,
  labelAr,
  className,
  classNameLabel,
  placeHolder,
  classNameInput,
}: Form) => {
  return (
    <>
      {editMode ? (
        <>
          <label htmlFor="" className={`print:text-xs ${classNameLabel}`}>
            {labelEn}
            <span className={`ms-2 ${className}`}>{labelAr}</span>
          </label>
          <input
            className={`ms-2 ${classNameInput} placeholder:text-black`}
            type="text"
            placeholder={placeHolder}
          />
        </>
      ) : (
        <label htmlFor="">
          {labelEn}
          <span>{labelAr}</span>
        </label>
      )}
    </>
  );
};

export default LabelInput;
