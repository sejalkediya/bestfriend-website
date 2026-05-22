import Navbar from "../components/Navbar"

export default function Memories() {

  const memories = [
    {
      title: "Our First Memory 🌸",
      text: "The beginning of a friendship that slowly became one of the most beautiful parts of my life.",
      image: "/memory1.jpg",
    },
    {
      title: "Late Night Talks 🌙",
      text: "Conversations that healed us, comforted us, and became unforgettable memories.",
      image: "/memory2.jpg",
    },
    {
      title: "Always Together ❤️",
      text: "Your presence somehow made every difficult moment feel lighter.",
      image: "/memory3.jpg",
    },
    {
      title: "Random Happy Moments ✨",
      text: "The little memories that unexpectedly became my favorites.",
      image: "/memory4.jpg",
    },
    {
      title: "Safe Place 💖",
      text: "You became the person I could always emotionally rely on.",
      image: "/memory5.jpg",
    },
    {
      title: "Forever Friendship 🌸",
      text: "No matter where life takes us, these memories stay forever.",
      image: "/memory6.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff1f5] via-[#fff7fb] to-[#f7ecff] relative overflow-hidden">

      <Navbar />

      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 blur-3xl opacity-20 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 blur-3xl opacity-20 rounded-full"></div>

      {/* FLOATING ICONS */}
      <div className="absolute top-40 left-10 text-6xl animate-bounce">
        💖
      </div>

      <div className="absolute top-[600px] right-10 text-5xl animate-pulse">
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
        <h1 className="text-5xl md:text-7xl font-bold text-center text-pink-600 mb-6">
          Our Beautiful Memories 📸
        </h1>

        <p className="text-center text-xl text-gray-600 mb-20 max-w-3xl mx-auto leading-10">
          Some memories stay in photos,
          but the most beautiful ones stay forever in the heart ❤️
        </p>

        {/* MEMORY CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

          {memories.map((memory, index) => (

            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.12)] hover:-translate-y-4 hover:rotate-1 transition duration-500"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden p-4 bg-[#fff8fc]">

                <img
                  src={memory.image}
                  className="h-[420px] w-full object-cover rounded-[30px] group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-[30px]"></div>

                {/* HEART */}
                <div className="absolute top-8 right-8 text-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition duration-500">
                  💖
                </div>

              </div>

              {/* TEXT */}
              <div className="p-8">

                <h2 className="text-3xl font-bold text-purple-600 mb-5 leading-tight">
                  {memory.title}
                </h2>

                <p className="text-lg leading-9 text-gray-600">
                  {memory.text}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}