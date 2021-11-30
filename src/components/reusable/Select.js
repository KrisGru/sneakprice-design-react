const Select = ({ label, name, option1, option2, option3, option4 }) => {
  const optionMore = option4 ? <option value={option4}>{option4}</option> : null
  return (
    <>
      <label htmlFor="select">{label}</label>
      <select name={name} id="select">
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
        {optionMore}
      </select>
    </>
  )
}

export default Select;
