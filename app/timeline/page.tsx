import Navbar from "../components/Navbar"

export default function Timeline() {

  const timeline = [
    {
      title: "The First Meet 💖",
      text: "The beginning of a friendship that slowly became one of the most beautiful parts of my life."
    },
    {
      title: "Late Night Conversations 🌙",
      text: "Random conversations slowly turned into comfort, trust, and unforgettable memories."
    },
    {
      title: "Countless Beautiful Memories 📸",
      text: "Every laugh, every outing, every random moment became something my heart quietly saved forever."
    },
    {
      title: "Difficult Times ✨",
      text: "Even during emotional phases and difficult moments, we stayed beside each other."
    },
    {
      title: "Safe Place 🌸",
      text: "Somewhere along the journey, you became the person who made life feel lighter and safer."
    },
    {
      title: "Forever Friendship 💌",
      text: "No matter where life takes us, this friendship will always remain one of the most precious parts of my life."
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f6ecff] via-[#fff7fb] to-[#fff1f5] relative overflow-hidden">

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
          Our Journey Together 🌸
        </h1>

        <p className="text-center text-xl text-gray-600 mb-24 max-w-3xl mx-auto leading-10">
          Some journeys become unforgettable,
          not because of the places,
          but because of the person beside us 💖
        </p>

        {/* TIMELINE */}
        <div className="max-w-5xl mx-auto relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-pink-300 to-purple-300 hidden md:block"></div>

          <div className="space-y-20">

            {timeline.map((item, index) => (

              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >

                {/* CARD */}
                <div className="w-full md:w-1/2">

                  <div className="group bg-white/70 backdrop-blur-xl p-10 rounded-[35px] shadow-[0_15px_50px_rgba(0,0,0,0.1)] hover:-translate-y-3 transition duration-500 relative overflow-hidden">

                    {/* GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 to-purple-100/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                    {/* TITLE */}
                    <h2 className="text-3xl font-bold text-pink-600 mb-6 relative z-10">
                      {item.title}
                    </h2>

                    {/* TEXT */}
                    <p className="text-xl leading-10 text-gray-700 relative z-10">
                      {item.text}
                    </p>

                  </div>

                </div>

                {/* TIMELINE DOT */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-pink-500 rounded-full border-4 border-white shadow-xl items-center justify-center z-20">

                  <div className="w-3 h-3 bg-white rounded-full"></div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  )
}