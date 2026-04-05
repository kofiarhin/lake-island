import { FiHeart, FiMenu, FiSearch, FiShoppingBag } from 'react-icons/fi'

function MainHeader() {
  return (
    <header className="flex h-12 items-center justify-between bg-[#0d1116] px-[10px]">
      <div className="flex items-center gap-[10px]">
        <button aria-label="Open menu" className="text-white text-base">
          <FiMenu className="text-[18px]" />
        </button>
        <div className="text-[20px] leading-6 font-medium tracking-[-0.03em] text-white">
          RiverIsland
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button aria-label="Search" className="text-white text-sm">
          <FiSearch className="text-[15px]" />
        </button>
        <button aria-label="Wishlist" className="text-white text-sm">
          <FiHeart className="text-[15px]" />
        </button>
        <button
          aria-label="Bag"
          className="flex h-6 w-6 items-center justify-center rounded-[3px] bg-[#8a7c1c] text-black text-xs"
        >
          <FiShoppingBag className="text-[11px]" />
        </button>
      </div>
    </header>
  )
}

export default MainHeader
