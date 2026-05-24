import Navbar from "./components/Navbar"

export default function Home() {

  return (
    <main className="bg-gradient-to-b from-[#fff1f5] via-[#fff7fb] to-[#f6ecff] text-gray-800 overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300 opacity-20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-5xl">

          <p className="uppercase tracking-[8px] text-pink-500 text-lg mb-8">
            For My Favorite Person ✨
          </p>

          <h1 className="text-5xl md:text-8xl font-semibold leading-tight tracking-tight">

            <span className="bg-gradient-to-r from-pink-500 via-rose-450 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_6px_18px_rgba(255,182,193,0.25)]">
              A Little
            </span>

            <br />

            <span className="bg-gradient-to-r from-pink-600 via-rose-450 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_8px_22px_rgba(255,182,193,0.25)]">
              Piece Of My Heart
            </span>

            <span className="ml-4 text-pink-400 animate-pulse">
              ♡
            </span>

          </h1>

          <p className="mt-12 text-xl md:text-2xl leading-[50px] text-gray-700">

            This website is made from memories,
            emotions,
            comfort,
            random laughs,
            and every beautiful moment
            that made our friendship special 🌸

          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-14">

            <a
              href="/memories"
              className="px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xl shadow-2xl hover:scale-105 transition duration-300"
            >
              Open Memories 📸
            </a>

            <a
              href="/letter"
              className="px-10 py-5 rounded-full bg-white text-pink-600 text-xl shadow-2xl hover:scale-105 transition duration-300"
            >
              Read My Letter 💌
            </a>

          </div>

        </div>

      </section>

      {/* IMAGE + STORY */}
      <section className="min-h-screen flex items-center px-6 md:px-20 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          <img
            src="/bestfriend.jpg"
            className="rounded-[40px] shadow-[0_25px_80px_rgba(236,72,153,0.25)] h-[650px] w-full object-cover hover:scale-105 transition duration-700 floating"
          />

          <div>

            <h2 className="text-5xl font-bold text-purple-600 leading-tight mb-10">
              You Became
              <br />
              My Safe Place 🌸
            </h2>

            <div className="space-y-8 text-xl leading-[45px] text-gray-700">

              <p>
                Some people unexpectedly enter our lives
                and become one of the most important parts of it.
              </p>

              <p>
                Thank you for every comfort,
                every effort,
                every emotional moment,
                and every memory ❤️
              </p>

              <p>
                Life genuinely became softer and happier because you exist in it ✨
              </p>

            </div>

          </div>

        </div>

      </section>

      <p className="text-center italic text-pink-400 text-2xl py-24">
        “some friendships quietly become home” ♡
      </p>

      {/* SCRAPBOOK */}
      <section className="min-h-screen px-6 py-28 bg-gradient-to-b from-[#fff8fc] to-[#fdf2f8] relative overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 blur-3xl opacity-30 rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-200 blur-3xl opacity-20 rounded-full"></div>

        {/* TITLE */}
        <div className="text-center mb-24 relative z-10">

          <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent mb-4">

            our little scrapbook ✨

          </h2>

          <p className="text-xl text-gray-500 italic">
            little pieces of us, forever 💞
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">

        {[
          {
            image: "/memory1.jpg",
            caption: "some bonds feel like forever 💖",
          },

          {
            image: "/memory2.jpg",
            caption: "little moments, endless memories ✨",
            
          },

          {
            image: "/memory3.jpg",
            caption: "home found in a person 🌸",
            
          }

        ].map((item, index) => (

          <div
            key={index}
            className="bg-white/90 backdrop-blur-lg p-5 rounded-[32px]
            shadow-[0_15px_45px_rgba(255,182,193,0.15)]
            hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(255,182,193,0.25)]
            transition duration-700
            animate-[float_6s_ease-in-out_infinite]"
          >

            <div className="overflow-hidden rounded-[22px]">

              <img
                src={item.image}
                className={`w-full h-[420px] rounded-[22px]
                hover:scale-105 transition duration-700
                ${index === 0 ? "object-contain bg-white" : "object-cover"}`}
              />

            </div>

            <p className="text-center text-gray-500 italic text-lg mt-6 leading-8">

              {item.caption}

            </p>

          </div>

        ))}

      </div>

      </section>

      <p className="text-center bold text-pink-500 text-3xl py-28">
        “if I could choose again,
        I would still choose this friendship” ♡
      </p>
      
      {/* FINAL */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <div className="max-w-5xl">

          <h2 className="text-7xl font-bold text-pink-600 leading-tight">
            Thank You
            <br />
            For Existing 💖
          </h2>

          <p className="mt-14 text-2xl leading-[55px] text-gray-700">

            Maybe I don’t always say it enough...
            <br /><br />

            But life genuinely became warmer,
            happier,
            softer,
            and more beautiful
            after you became part of it 🌸

          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-16">

            <a
              href="/timeline"
              className="px-10 py-5 rounded-full bg-white text-pink-600 text-xl shadow-2xl hover:scale-105 transition duration-300"
            >
              Our Journey 🌙
            </a>

            <a
              href="/reasons"
              className="px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xl shadow-2xl hover:scale-105 transition duration-300"
            >
              Why You Matter 💌
            </a>

          </div>

        </div>

      </section>
      
      <section className="px-6 py-32 bg-gradient-to-b from-[#fff7fb] to-[#fff0f6]">

        <h2 className="text-5xl md:text-6xl font-semibold text-center bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent mb-20">

          little pieces of us 💞

        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {[
              "/memory1.jpg",
              "/memory2.jpg",
              "/memory3.jpg",
              "/memory4.jpg",
              "/memory5.jpg",
              "/memory6.jpg",
              "/memory7.jpg",
              "/bestfriend.jpg"
            ].map((photo, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-[28px]
            shadow-[0_15px_40px_rgba(255,182,193,0.15)]
            hover:-translate-y-2 transition duration-700"
          >

          <img
            src={photo}
            className={`w-full h-[320px] rounded-[28px]
              hover:scale-105 transition duration-700
              ${index === 0 || index === 3
              ? "object-contain bg-white"
              : "object-cover"
            }`}
          />

          </div>

        ))}

        </div>

    </section>
    </main>
  )
}