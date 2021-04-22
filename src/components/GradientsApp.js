import GradientsList from "./GradientsList";
import GradientSelect from "./GradientsSelect";
import { useState } from "react";

const GradientsApp = ({ gradients, uniqueTags }) => {
  const handleColorSelected = (event) => {
    setTag(event.target.value);
  };

  const [tag, setTag] = useState("Tous");

  return (
    <div>
      <h1 className="text-center my-4">Alyra Gradients</h1>
      <main className="container">
        <GradientSelect
          uniqueTags={uniqueTags}
          handleColorSelected={handleColorSelected}
          tag={tag}
        />
        <ul className="row list-unstyled">
          <GradientsList gradients={gradients} tag={tag} />
        </ul>
      </main>
    </div>
  );
};

export default GradientsApp;
