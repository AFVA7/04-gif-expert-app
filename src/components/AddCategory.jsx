import { useState } from "react";
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }
  const onInputSubmit = (event) => {
    event.preventDefault();
    const trimmedInputValue = inputValue.trim();
    if(trimmedInputValue.length <= 1) return;
    onNewCategory(trimmedInputValue);
    setInputValue('');
  }
  return (
    <form onSubmit= { onInputSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

