export default function Player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        {name}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
