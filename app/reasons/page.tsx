import Navbar from "../components/Navbar"

export default function Reasons() {

  const reasons = [

    "You make ordinary days feel special 💖",

    "You became comfort in human form ✨",

    "You understand even my silence 🌸",

    "You stayed during difficult moments 🌙",

    "Life genuinely feels softer with you 💞",

    "You became one of my safest places ♡"

  ]

  return (

    <main className="min-h-screen bg-gradient-to-b from-[#fff8fc] via-[#fff5f8] to-[#fff0f6] px-6 py-28 relative overflow-hidden">

      <Navbar />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-pink-200 blur-3xl opacity-20 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-rose-200 blur-3xl opacity-20 rounded-full"></div>

      {/* FLOATING ELEMENTS */}
      <div className="absolute top-24 left-16 text-5xl text-pink-200 animate-pulse">
        ✨
      </div>

      <div className="absolute right-20 top-[35%] text-4xl text-rose-200 animate-bounce">
        ♡
      </div>

      {/* TITLE */}
      <div className="text-center mb-24 relative z-10">

        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.35] pb-3 mb-6 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-400 bg-clip-text text-transparent">

          reasons why you matter ♡

        </h1>

        <p className="quote-font text-pink-400 text-3xl leading-[55px]">

          “some people quietly become home” ✨

        </p>

      </div>

      {/* REASONS */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">

        {reasons.map((reason, index) => (

          <div
            key={index}
            className="bg-white/85 backdrop-blur-xl p-10 rounded-[35px]
            shadow-[0_15px_45px_rgba(255,182,193,0.18)]
            hover:-translate-y-3
            hover:shadow-[0_20px_60px_rgba(255,182,193,0.28)]
            transition duration-700
            animate-[float_6s_ease-in-out_infinite]"
          >

            {/* ICON */}
            <div className="text-4xl mb-6 text-pink-400">
              ♡
            </div>

            {/* TEXT */}
            <p className="text-[22px] leading-[42px] text-gray-600">

              {reason}

            </p>

          </div>

        ))}

      </div>

      {/* END QUOTE */}
      <div className="text-center mt-32 relative z-10">

        <p className="quote-font text-4xl text-rose-500 leading-[75px]">

          “if I could choose again,
          I would still choose this friendship” 💞

        </p>

      </div>

    </main>

  )
}