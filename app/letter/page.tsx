import Navbar from "../components/Navbar"

export default function Letter() {

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

      <section className="pt-36 pb-24 px-6 flex justify-center items-center relative z-10">

        <div className="max-w-5xl w-full">

          {/* BACK BUTTON */}
          <a
            href="/"
            className="inline-block mb-14 px-6 py-3 bg-white/80 backdrop-blur-lg shadow-lg rounded-full hover:scale-105 transition duration-300"
          >
            ← Back Home
          </a>

          {/* LETTER BOX */}
          <div className="bg-white/70 backdrop-blur-2xl rounded-[50px] p-10 md:p-20 shadow-[0_20px_80px_rgba(0,0,0,0.12)] border border-white/40">

            <h1 className="text-5xl md:text-7xl font-bold text-center text-purple-600 mb-6 leading-tight">
              A Letter
              <br />
              For You 💌
            </h1>

            <p className="text-center text-gray-500 text-lg mb-16">
              Some feelings are too beautiful to stay unspoken ✨
            </p>

            <div className="space-y-12 text-xl md:text-2xl leading-[55px] text-gray-700">

              <p>
                Dear Best Friend,
              </p>

              <p>
                Sometimes I genuinely sit and wonder how life became so much softer,
                warmer,
                and more beautiful after you entered it.
              </p>

              <p>
                Out of billions of people in this world,
                somehow I found you —
                and honestly,
                I think that’s one of the luckiest things that ever happened to me ❤️
              </p>

              <p>
                Thank you for becoming my comfort place during difficult days,
                my peace during emotional phases,
                and my happiness during moments when life felt heavy.
              </p>

              <p>
                Thank you for every random laugh,
                every silly conversation,
                every late-night talk,
                every emotional breakdown you stayed through,
                and every tiny effort you made without even realizing how much it meant to me.
              </p>

              <p>
                You understood the things I never knew how to explain.
                You stayed during the versions of me that were difficult,
                emotional,
                confused,
                and quiet.
              </p>

              <p>
                And maybe that’s why this friendship means so much to me —
                because with you,
                I never had to pretend to be someone else 🌸
              </p>

              <p>
                Every memory with you became something my heart quietly keeps forever.
              </p>

              <p>
                Your presence genuinely made life feel lighter.
                Safer.
                Happier.
              </p>

              <p>
                You are not just my best friend.
                You became one of the most precious parts of my life,
                and no matter where life takes us,
                a part of my heart will always carry this friendship forever 💖
              </p>

              <p className="pt-6 text-right text-pink-500 font-semibold">
                — Yours Forever ✨
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}