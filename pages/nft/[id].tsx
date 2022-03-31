
export default function NFTDropPage() {
  return (
    <div className="min-h-screen bg-[#242632]">
      <div className="w-full max-w-5xl p-2">
        {/* Left Side */}
        <section className="p-2 bg-[#2c2f3c] rounded-2xl">
          <img src='https://cdn.sanity.io/images/9ep8u6nk/production/ee298e2fb78803f3226dcde22f1f2a8d69f56fad-600x600.png' alt="Nft" />
          <div className="bg-gray-700 rounded-2xl px-8 py-1.5 w-fit text-center mx-auto transform -translate-y-2">
            <p className="text-gray-400 text-xs">Sale Price</p>
            <p className="text-white font-bold">0.01 ETH</p>
          </div>
          <div className="text-white text-center mt-2">
            <h1 className="text-xl font-semibold">PAPAFAM Apes</h1>
            <p className="text-sm text-gray-400">A collection of PAPAFAM Apes who live & breathe React!</p>
          </div>
        </section>

        {/* Right Side */}
        <section className="text-white mt-12">
          <div className="text-sm flex items-center justify-between space-x-8">
            <h1 className="font-light">The <span className="font-bold border-b-2 border-primary">PAPAFAM</span> NFT Market Place</h1>
            <button className="px-6 py-2 rounded-xl font-semibold bg-gradient-to-r from-primary to-rose-600 flex-none">Sign In</button>
          </div>
          {/* <p className="text-xs font-semibold text-gray-400">Your'e logged in with wallet 7384...8746</p> */}
          <div className="my-12 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-center">The PAPAFAM Ape Coding Club | NFT Drop</h1>
            <p className="text-primary font-semibold text-sm mt-2 mb-4">13/21 NFT's claimed</p>
            <img className="w-64" src="https://cdn.sanity.io/images/9ep8u6nk/production/f72570921cab407c11a39c8e1717f5607718e14d-2951x2430.webp" alt="" />
            <button className="bg-primary text-white w-full h-14 rounded-xl font-semibold mt-12">Mint NFT (0.01 ETH)</button>
          </div>
        </section>
      </div>
    </div>
  )
}
