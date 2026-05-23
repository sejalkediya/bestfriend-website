import Navbar from "../components/Navbar"

export default function Memories() {

  const memories = [
    {
      title: "Our First Memory 🌸",
      text: "The beginning of a friendship that slowly became one of the most beautiful parts of my life.",
      image: "/memory1.jpg",
      note: "The day everything started 💖"
    },
    {
      title: "Late Night Talks 🌙",
      text: "Conversations that healed us, comforted us, and became unforgettable memories.",
      image: "/memory2.jpg",
      note: "The nights I never wanted to end ✨"
    },
    {
      title: "Always Together ❤️",
      text: "No matter what happened, your presence always made everything feel lighter.",
      image: "/memory3.jpg",
      note: "You made everything softer 🌸"
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff1f5] via-[#fff7fb] to-[#f7ecff] px-6 py-28 overflow-hidden">

      <Navbar />

      <h1 className="text-6xl md:text-7xl font-bold text-center text-pink-600 mb-24">
        Our Memories 📸
      </h1>

      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">

        {memories.map((memory, index) => (

          <div
            key={index}
            className="group bg-white/70 backdrop-blur-xl rounded-[40px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-5 hover:rotate-1 transition duration-700"
          >

            <div className="overflow-hidden">

              <img
                src={memory.image}
                className="h-[450px] w-full object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-8">

              <h2 className="text-3xl font-bold text-purple-600 mb-5">
                {memory.title}
              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">
                {memory.text}
              </p>

              <div className="inline-block px-5 py-2 rounded-full bg-pink-100 text-pink-600 text-sm">
                {memory.note}
              </div>

            </div>

          </div>

        ))}

      </div>

    </main>
  )
}