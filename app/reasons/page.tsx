import Navbar from "../components/Navbar"

export default function Reasons() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-100 flex flex-col justify-center items-center px-6 py-24 text-center">

      <Navbar />

      <h1 className="text-6xl font-bold text-purple-600 mb-16 mt-16">
        Reasons Why
        <br />
        You’re So Special ✨
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl">

        {[
          'You always understand me ❤️',
          'You make ordinary moments magical 🌸',
          'You stayed during difficult phases ✨',
          'You make me feel safe 🌙',
          'You never let me feel alone 💖',
          'You became one of my favorite parts of life 📸'
        ].map((reason, index) => (

          <div
            key={index}
            className="bg-white p-10 rounded-[35px] shadow-2xl text-xl leading-10 hover:scale-105 transition duration-300"
          >
            {reason}
          </div>

        ))}

      </div>

    </main>
  )
}