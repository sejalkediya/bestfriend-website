export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-pink-100 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a
          href="/"
          className="text-2xl md:text-3xl font-bold text-pink-600"
        >
          💖 BestFriend
        </a>

        {/* NAV LINKS */}
        <div className="flex flex-wrap gap-3 md:gap-6 text-sm md:text-lg">

          <a
            href="/"
            className="px-4 py-2 rounded-full hover:bg-pink-100 transition"
          >
            Home
          </a>

          <a
            href="/gallery"
            className="px-4 py-2 rounded-full hover:bg-pink-100 transition"
          >
            Gallery
          </a>

          <a
            href="/memories"
            className="px-4 py-2 rounded-full hover:bg-pink-100 transition"
          >
            Memories
          </a>

          <a
            href="/letter"
            className="px-4 py-2 rounded-full hover:bg-pink-100 transition"
          >
            Letter
          </a>

          <a
            href="/reasons"
            className="px-4 py-2 rounded-full hover:bg-pink-100 transition"
          >
            Reasons
          </a>

          <a
            href="/timeline"
            className="px-4 py-2 rounded-full hover:bg-pink-100 transition"
          >
            Timeline
          </a>

        </div>

      </div>

    </nav>
  )
}