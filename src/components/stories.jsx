export default function Stories(props) {
  return (
    <div className="shrink-0 snap-start">
      <img
        className="rounded-full w-24  border-4 border-accent p-1"
        src={props.pfp}
        alt="pfp"
      />
    </div>
  );
}
