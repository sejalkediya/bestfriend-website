export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-pink-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a
          href="/"
          className="text-2xl md:text-3xl font-bold text-pink-600"
        >
          💖 BestFriend
        </a>

        <div className="flex gap-3 md:gap-6 text-sm md:text-lg flex-wrap">

          <a href="/" className="hover:text-pink-500 transition">
            Home
          </a>

          <a href="/memories" className="hover:text-pink-500 transition">
            Memories
          </a>

          <a href="/gallery" className="hover:text-pink-500 transition">
            Gallery
          </a>

          <a href="/letter" className="hover:text-pink-500 transition">
            Letter
          </a>

          <a href="/timeline" className="hover:text-pink-500 transition">
            Timeline
          </a>

          <a href="/reasons" className="hover:text-pink-500 transition">
            Reasons
          </a>

        </div>

      </div>

    </nav>
  )
}