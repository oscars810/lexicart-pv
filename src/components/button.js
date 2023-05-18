const Button = ({text, classes}) => {
  return (
    <button class={`text-white w-32 flex items-center text-xs justify-center text-center h-9 rounded-full hover:brightness-110 bg-opacity-0 shadow-sm  mt-4 ${classes}`}>
      {text}
    </button>
  )
};

export default Button