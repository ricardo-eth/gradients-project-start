const GradientSelect = ({ uniqueTags, handleColorSelected, tag }) => {
  return (
    <>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="select">
          Filtrer par tag
        </label>
        <select
          className="form-select"
          id="select"
          onChange={handleColorSelected}
          value={tag}
        >
          <option value="Tous">Tous</option>
          {uniqueTags.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default GradientSelect;
