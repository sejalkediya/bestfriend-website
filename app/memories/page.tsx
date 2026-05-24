import Navbar from "../components/Navbar"

export default function Memories() {

  const memories = [
    {
      title: "Our First Memory 🌸",
      text: "The beginning of a friendship that slowly became one of the most beautiful parts of my life.",
      image: "/imgs.jpg",
      note: "The day everything started 💖"
    },

    {
      title: "Late Night Talks 🌙",
      text: "Conversations that healed us, comforted us, and became unforgettable memories.",
      image: "/memory1.jpg",
      note: "The nights I never wanted to end ✨"
    },

    {
      title: "Always Together ❤️",
      text: "No matter what happened, your presence always made everything feel lighter.",
      image: "/memory3.jpg",
      note: "You made everything softer 🌸"
    }
  ]

  return (

    <main className="min-h-screen bg-[#fdf6fb] px-6 py-28 relative overflow-hidden">

      <Navbar />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-200 blur-3xl opacity-20 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200 blur-3xl opacity-20 rounded-full"></div>

      {/* TITLE */}
      <div className="text-center mb-24 relative z-10">

        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">

          little moments ✨

        </h1>

        {/* SMALL DECOR */}
        <div className="flex justify-center items-center gap-3 mb-6">

          <div className="w-16 h-[2px] bg-pink-200"></div>

          <span className="text-pink-400 text-xl">💖</span>

          <div className="w-16 h-[2px] bg-pink-200"></div>

        </div>

        <p className="text-xl text-gray-500">
          Little moments that became big memories ✨
        </p>

      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">

        {memories.map((memory, index) => (

          <div
            key={index}
            className="bg-white rounded-[35px] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition duration-500"
          >

            {/* IMAGE */}
            <div className="overflow-hidden rounded-[28px]">

              <img
                src={memory.image}
                className="w-full h-[470px] object-cover rounded-[28px] hover:scale-105 transition duration-700"
              />

            </div>

            {/* CONTENT */}
            <div className="pt-7 px-2 pb-4">

              <h2 className="text-[24px] font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-5 leading-tight">

                {memory.title}

              </h2>

              <p className="text-[18px] leading-[42px] text-gray-600 mb-8">

                {memory.text}

              </p>

              <div className="inline-block bg-pink-100 text-pink-500 px-5 py-2 rounded-full text-sm whitespace-nowrap">

                {memory.note}

              </div>

            </div>

          </div>

        ))}

      </div>

    </main>

  )
}