const Footer = () => {
  return (
    <div className="mt-32 pt-32 grid grid-cols-5 text-white pb-32 px-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Learn</h1>
        <p className="opacity-75">Introduction</p>
        <p className="opacity-75">Features</p>
        <p className="opacity-75">Staking</p>
        <p className="opacity-75">Get HEDRON</p>
        <p className="opacity-75">FAQ</p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Build</h1>
        <p className="opacity-75">Developer Portal</p>
        <p className="opacity-75">Ignite CLI</p>
        <p className="opacity-75">Cronos SDK</p>
        <p className="opacity-75">IBC Protocol</p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Explore</h1>
        <p className="opacity-75">Tokens</p>
        <p className="opacity-75">Apps & Services</p>
        <p className="opacity-75">Wallets</p>
        <p className="opacity-75">Gravity DEX</p>
        <p className="opacity-75">Blog</p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Participate</h1>
        <p className="opacity-75">Community</p>
        <p className="opacity-75">Contributors</p>
        <p className="opacity-75">Events</p>
        <p className="opacity-75">Newsletters</p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Resources</h1>
        <p className="opacity-75">About</p>
        <p className="opacity-75">Press Kit</p>
        <p className="opacity-75">Design</p>
        <p className="opacity-75">Resources</p>
      </div>
    </div>
  )
}

export default Footer