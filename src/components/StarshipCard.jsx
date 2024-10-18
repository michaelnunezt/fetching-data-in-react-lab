const StarshipCard = ({ starship }) => {
  return (
  <section>
    <h2>{starship.results.name}</h2>
    <p>Class: {starship.starship_class}</p>
    <p>Manufacturer: {starship.manufacturer}</p>
    <p>Model: {starship.model}</p>
  </section>
  );
};

export default StarshipCard