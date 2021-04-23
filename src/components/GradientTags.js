const GradientTags = ({ tagsList, tag, setTag }) => {
  return (
    <div className="mt-3">
      {tagsList.map((el) => (
        <button
          key={el}
          onClick={() => setTag(el)}
          className={"btn btn-sm me-2 mb-2 bg-dark text-white"}
          disabled={tag === el}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default GradientTags;
