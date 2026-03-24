export default function Roadmap() {
  const steps = [
    { title: "Phase 1 — Crack the First Beer", desc: "Beer Coin minted and bonding curve started." },
    { title: "Phase 2 — Start the Party", desc: "Website, socials & memes launched." },
    { title: "Phase 3 — Brewery Expansion", desc: "Raydium listing and swap widget." },
    { title: "Phase 4 — Beerverse Takeover", desc: "NFTs and community events." },
  ];

  return (
    <section id="roadmap" className="py-12 px-4 bg-amber-50">
      <h2 className="text-3xl text-center font-bold text-amber-700 mb-6">Roadmap</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {steps.map((s) => (
          <div key={s.title} className="p-4 border-l-4 border-amber-600 bg-white rounded shadow-sm">
            <h3 className="font-semibold text-amber-700">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
