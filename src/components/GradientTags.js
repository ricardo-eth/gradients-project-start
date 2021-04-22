const GradientTags = ({ tags }) => {
  return (
    <div className="mt-3">
      {tags.map((el) => (
        <button key={el} className="btn btn-sm me-2 mb-2 bg-dark text-white">
          {el}
        </button>
      ))}
    </div>
  );
};

export default GradientTags;
