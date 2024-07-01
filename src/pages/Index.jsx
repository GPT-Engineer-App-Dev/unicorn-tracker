function Index() {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center mb-4">Unicorn Breeding Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Unicorns</h2>
          <p className="text-2xl">42</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Breeding Pairs</h2>
          <p className="text-2xl">15</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Recent Activities</h2>
          <ul className="list-disc pl-5">
            <li>New unicorn added: Sparkle</li>
            <li>Breeding pair created: Sparkle & Twinkle</li>
            <li>Breeding outcome: Success</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Index;