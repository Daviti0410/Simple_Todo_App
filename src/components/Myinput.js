export default function input({ inputValue, setInputValue }) {
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <input
      class="textInput"
      type="text"
      placeholder="Enter todo here"
      onChange={handleInputChange}
      value={inputValue}
    />
  );
}
