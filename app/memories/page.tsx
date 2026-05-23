import Navbar from "../components/Navbar"

export default function Memories() {

  const memories = [
    {
      title: "Our First Memory 🌸",
      text: "The beginning of a beautiful friendship.",
      image: "/memory1.jpg",
    },
    {
      title: "Late Night Talks 🌙",
      text: "Conversations that healed us.",
      image: "/memory2.jpg",
    },
    {
      title: "Always Together ❤️",
      text: "Your presence made everything lighter.",
      image: "/memory3.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 px-6 py-24">

      <Navbar />

      <h1 className="text-6xl font-bold text-center text-pink-600 mb-20 mt-16">
        Our Memories 📸
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {memories.map((memory, index) => (

          <div
            key={index}
            className="bg-white rounded-[40px] overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500"
          >

            <img
              src={memory.image}
              className="h-[420px] w-full object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold text-purple-600 mb-5">
                {memory.title}
              </h2>

              <p className="text-lg leading-9 text-gray-600">
                {memory.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </main>
  )
}