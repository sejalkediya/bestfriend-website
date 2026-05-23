export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/40 border-b border-white/30 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <a
          href="/"
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          💖 Our Bond
        </a>

        <div className="flex flex-wrap gap-3 md:gap-6">

          {[
            ["Home", "/"],
            ["Memories", "/memories"],
            ["Gallery", "/gallery"],
            ["Letter", "/letter"],
            ["Timeline", "/timeline"],
            ["Reasons", "/reasons"]
          ].map(([name, link], index) => (

            <a
              key={index}
              href={link}
              className="px-5 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-md hover:bg-pink-500 hover:text-white transition duration-300 text-sm md:text-base"
            >
              {name}
            </a>

          ))}

        </div>

      </div>

    </nav>
  )
}