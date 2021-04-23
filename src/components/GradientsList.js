import Gradient from "./Gradient";

const GradientsList = ({ gradients, tag, setTag }) => {
  let list = [];
  if (tag !== "Tous") {
    gradients.forEach((elem) => {
      if (elem.tags.includes(tag)) {
        list.push(
          <Gradient
            colorStart={elem.start}
            colorEnd={elem.end}
            name={elem.name}
            tagsList={elem.tags.map((a) => a)}
            tag={tag}
            setTag={setTag}
          />
        );
      }
    });
  } else {
    for (let i = 0; i < gradients.length; i++) {
      list.push(
        <Gradient
          colorStart={gradients[i].start}
          colorEnd={gradients[i].end}
          name={gradients[i].name}
          tagsList={gradients[i].tags.map((a) => a)}
          tag={tag}
          setTag={setTag}
        />
      );
    }
  }
  return list.map((a) => a);
};

export default GradientsList;
