import Navbar from "../components/Navbar"

export default function Reasons() {

  const reasons = [
    "You always understand me even without words ❤️",
    "You make ordinary moments feel magical 🌸",
    "You stayed beside me during difficult phases ✨",
    "You make me feel emotionally safe 🌙",
    "You never let me feel alone 💖",
    "Your presence genuinely makes life softer 📸",
    "You listen to me with so much patience 🌷",
    "You became my comfort person ☁️",
    "You make every memory feel beautiful ✨",
    "You care in ways that mean everything to me 💌",
    "You stayed through every version of me 🌸",
    "Life became happier after I met you 💕"
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff1f5] via-[#fff7fb] to-[#f7ecff] relative overflow-hidden">

      <Navbar />

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 blur-3xl opacity-20 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 blur-3xl opacity-20 rounded-full"></div>

      {/* FLOATING ICONS */}
      <div className="absolute top-40 left-10 text-6xl animate-bounce">
        💖
      </div>

      <div className="absolute top-[500px] right-10 text-5xl animate-pulse">
        ✨
      </div>

      <div className="absolute bottom-20 left-20 text-5xl animate-ping">
        🌸
      </div>

      <section className="pt-36 pb-24 px-6 relative z-10">

        {/* BACK BUTTON */}
        <a
          href="/"
          className="inline-block mb-14 px-6 py-3 bg-white/80 backdrop-blur-lg shadow-lg rounded-full hover:scale-105 transition duration-300"
        >
          ← Back Home
        </a>

        {/* HEADING */}
        <h1 className="text-5xl md:text-7xl font-bold text-center text-purple-600 mb-6 leading-tight">
          Reasons Why
          <br />
          You’re So Special ✨
        </h1>

        <p className="text-center text-xl text-gray-600 mb-20 max-w-3xl mx-auto leading-10">
          Some people become important unexpectedly,
          and somehow you became one of the most beautiful parts of my life 💖
        </p>

        {/* REASONS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {reasons.map((reason, index) => (

            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl p-10 rounded-[35px] shadow-[0_15px_50px_rgba(0,0,0,0.1)] hover:-translate-y-4 hover:rotate-1 transition duration-500 relative overflow-hidden"
            >

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 to-purple-100/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* ICON */}
              <div className="text-5xl mb-6 relative z-10 group-hover:scale-125 transition duration-500">
                💖
              </div>

              {/* TEXT */}
              <p className="text-xl leading-10 text-gray-700 relative z-10">
                {reason}
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}