import Navbar from "../components/Navbar"

export default function Timeline() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-50 px-6 py-24">

      <Navbar />

      <h1 className="text-6xl font-bold text-center text-purple-600 mb-24 mt-16">
        Our Journey Together 🌸
      </h1>

      <div className="max-w-5xl mx-auto space-y-14">

        {[
          {
            year: "First Meet 💖",
            text: "The moment our friendship started."
          },
          {
            year: "Countless Memories 📸",
            text: "Every outing and laugh became unforgettable."
          },
          {
            year: "Difficult Times 🌙",
            text: "Even during emotional phases, we stayed together."
          },
          {
            year: "Forever Friendship ✨",
            text: "A bond that became part of my heart forever."
          }
        ].map((item, index) => (

          <div
            key={index}
            className="bg-white p-10 rounded-[35px] shadow-2xl hover:scale-[1.02] transition duration-300"
          >

            <h2 className="text-3xl font-bold text-pink-600 mb-4">
              {item.year}
            </h2>

            <p className="text-xl leading-10 text-gray-700">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </main>
  )
}