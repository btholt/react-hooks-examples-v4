import { useId } from "react";

const EffectComponent = () => {
  const dogId = useId();
  const catId = useId();

  return (
    <div>
      <h1>useId Example</h1>
      <label htmlFor={dogId}>Dogs</label>
      <input type="radio" id={dogId} name="animal" />
      <label htmlFor={catId}>Cats</label>
      <input type="radio" id={catId} name="animal" />
    </div>
  );
};

export default EffectComponent;
