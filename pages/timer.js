import LayoutSytle from "../components/LayoutStyle";

export default function Timer({ tasks }) {
  return (
    <LayoutSytle>
      <h2>{tasks.name}</h2>
    </LayoutSytle>
  );
}
