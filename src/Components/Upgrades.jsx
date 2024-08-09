const items = [
  "RULE BREAKING MIND POWERS + 1 (Costs 1000 infringements)",

  "BE BETTER AT BREAKING THE RULES + 1 (Costs 2000 infringements)",

  "GET PROMOTED TO MANAGER (Costs 100,000 infringements)",
];

export default function App() {
  const upgradeList = items.map((item) => (
    <li key={item}>
      <br></br>
      <button>{item}</button>
    </li>
  ));

  return <ul>{upgradeList}</ul>;
}
