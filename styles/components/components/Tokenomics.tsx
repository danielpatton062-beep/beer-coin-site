export default function Tokenomics() {
  const info = [
    { label: "Token Name", value: "Beer Coin" },
    { label: "Symbol", value: "BEER" },
    { label: "Network", value: "Solana" },
    { label: "Mint", value: "7Qfq5NG4o1R6G3gyEMe4rWr9oGtZUm1pkhg3iJKGpump" },
    { label: "Market Cap", value: "$21.59" },
    { label: "Total Supply", value: "1.99B" },
    { label: "Circulating Supply", value: "1.99B" },
    { label: "Holders", value: "6" },
    { label: "Bonding Curve Progress", value: "8%" },
    { label: "Created", value: "Mar 13, 2026" },
  ];

  return (
    <section id="tokenomics" className="py-12 px-4 bg-white">
      <h2 className="text-3xl text-center font-bold text-amber-600 mb-6">Tokenomics</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {info.map((item) => (
          <div key={item.label} className="border border-amber-200 rounded p-3 flex justify-between">
            <span>{item.label}</span>
            <span className="text-amber-700 font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
