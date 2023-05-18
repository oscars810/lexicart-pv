const InputRange = ( {num, onChange}) => {

  return (
    <div className="input-range">
      <input type="range" ref="inputRangeRef" onChange={onChange} className="input-range__slider" min="0" max="9" step="1" defaultValue="5" />
    </div>
  );
};

export default InputRange;