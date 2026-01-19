"use client";

export default function DashboardPage() {

  const buyPro = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
    });

    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">ViralContent AI Dashboard</h1>

      <p>Free Plan: 5 generations/day</p>

      <button
        onClick={buyPro}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Buy Pro – $30 Lifetime
      </button>
    </div>
  );
}
