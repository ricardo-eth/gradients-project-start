import GradientHeader from "./components/GradientHeader";
import GradientsApp from "./components/GradientsApp";
import { gradients, uniqueTags } from "./gradients";

function App() {
  return (
    <>
      <GradientHeader gradients={gradients} />
      <GradientsApp gradients={gradients} uniqueTags={uniqueTags} />
    </>
  );
}

export default App;
