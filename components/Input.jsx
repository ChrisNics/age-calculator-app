const Input = ({ label, type, placeholder, error = false, ...otherProps }) => {
  const handleKeyDown = (event) => {
    const { keyCode, ctrlKey } = event;

    // Allow numbers (0-9), backspace (8), arrow keys (37, 38, 39, 40),
    // Tab key (9), and Control+A (65)
    const allowedKeys = [8, 9, 37, 38, 39, 40];

    if (
      !(
        (keyCode >= 48 && keyCode <= 57) ||
        allowedKeys.includes(keyCode) ||
        (ctrlKey && keyCode === 65)
      )
    ) {
      event.preventDefault();
    }
  };

  return (
    <div className="w-1/3">
      <label
        for={label}
        className={`${
          error ? 'text-primary-light-red' : 'text-neutral-smokey-grey '
        } text-xs  font-semibold uppercase tracking-widest`}>
        {label}
      </label>
      <input
        onKeyDown={handleKeyDown}
        {...otherProps}
        type="text"
        id={label}
        name="day"
        placeholder={placeholder}
        className={`${
          error ? 'border-primary-light-red' : 'border-neutral-smokey-gray'
        }  focus:border-primary-purple w-full rounded-xl border p-3 font-bold outline-none ring-transparent`}
      />
      {error && <p className="text-primary-light-red mt-2 text-xs">{error}</p>}
    </div>
  );
};

export default Input;
