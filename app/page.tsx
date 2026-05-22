import Navbar from "./components/Navbar"
export default function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-purple-100 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 blur-3xl opacity-20 rounded-full"></div>

      {/* FLOATING ICONS */}
      <div className="absolute top-20 left-20 text-6xl animate-bounce">
        💖
      </div>

      <div className="absolute bottom-20 right-20 text-5xl animate-pulse">
        ✨
      </div>

      <div className="max-w-5xl relative z-10">

        <p className="text-pink-500 tracking-[6px] uppercase text-lg mb-6">
          Dedicated To My Favorite Person 🌸
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-pink-600 leading-tight">
          To My
          <br />
          Best Friend 💖
        </h1>

        <p className="mt-10 text-xl md:text-2xl leading-10 text-gray-700">
          Every memory,
          every laugh,
          every emotional moment,
          and every little feeling
          is beautifully stored here ❤️
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">

          <a
            href="/gallery"
            className="px-8 py-4 rounded-full bg-pink-500 text-white text-xl shadow-2xl hover:scale-110 transition duration-300"
          >
            Gallery 📸
          </a>

          <a
            href="/letter"
            className="px-8 py-4 rounded-full bg-purple-500 text-white text-xl shadow-2xl hover:scale-110 transition duration-300"
          >
            Letter 💌
          </a>

          <a
            href="/memories"
            className="px-8 py-4 rounded-full bg-rose-500 text-white text-xl shadow-2xl hover:scale-110 transition duration-300"
          >
            Memories 🌸
          </a>

          <a
            href="/reasons"
            className="px-8 py-4 rounded-full bg-fuchsia-500 text-white text-xl shadow-2xl hover:scale-110 transition duration-300"
          >
            Reasons ✨
          </a>

          <a
            href="/timeline"
            className="px-8 py-4 rounded-full bg-indigo-500 text-white text-xl shadow-2xl hover:scale-110 transition duration-300"
          >
            Timeline 🌙
          </a>

        </div>

      </div>

    </main>
  )
}