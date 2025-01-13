const Footer = () => {
  return (
    <div className="mt-32 pt-32 grid grid-cols-5 text-white">
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Learn</h1>
        <p>Introduction</p>
        <p>Features</p>
        <p>Staking</p>
        <p>Get HEDRON</p>
        <p>FAQ</p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Build</h1>
        <p>Developer Portal</p>
        <p>Ignite CLI</p>
        <p>Cronos SDK</p>
        <p>IBC Protocol</p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Explore</h1>
        <p>Tokens</p>
        <p>Apps & Services</p>
        <p>Wallets</p>
        <p>Gravity DEX</p>
        <p>Blog</p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Participate</h1>
        <p>Community</p>
        <p>Contributors</p>
        <p>Events</p>
        <p>Newsletters</p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold">Resources</h1>
        <p>About</p>
        <p>Press Kit</p>
        <p>Design</p>
        <p>Resources</p>
      </div>
    </div>
  )
}

export default Footer