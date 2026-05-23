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

          <h1 className="text-6xl md:text-8xl font-bold text-pink-600 leading-tight">
            A Little
            <br />
            Piece Of My Heart 💖
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
            className="rounded-[40px] shadow-2xl h-[650px] w-full object-cover hover:scale-105 transition duration-700"
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

      {/* SCRAPBOOK */}
      <section className="px-6 md:px-20 py-24">

        <div className="text-center mb-20">

          <h2 className="text-6xl font-bold text-pink-600">
            Our Scrapbook 📸
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {[
            "/memory1.jpg",
            "/memory2.jpg",
            "/memory3.jpg"
          ].map((photo, index) => (

            <div
              key={index}
              className={`bg-white p-5 rounded-[35px] shadow-2xl
              ${index % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"}
              hover:rotate-0 hover:scale-105 transition duration-500`}
            >

              <img
                src={photo}
                className="rounded-[25px] w-full h-auto object-contain bg-white"
              />

              <p className="text-center text-gray-600 mt-6 text-lg italic">
                A memory I’ll always treasure 💖
              </p>

            </div>

          ))}

        </div>

      </section>

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

    </main>
  )
}