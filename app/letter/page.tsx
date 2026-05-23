import Navbar from "../components/Navbar"

export default function Letter() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-50 flex justify-center items-center px-6 py-24 relative overflow-hidden">

      <Navbar />

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 blur-3xl opacity-20 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 blur-3xl opacity-20 rounded-full"></div>

      <div className="bg-white/80 backdrop-blur-xl max-w-5xl rounded-[50px] p-10 md:p-20 shadow-[0_20px_80px_rgba(0,0,0,0.12)] relative z-10 mt-16">

        <h1 className="text-6xl font-bold text-center text-purple-600 mb-16">
          A Letter For You 💌
        </h1>

        <div className="space-y-10 text-xl leading-[55px] text-gray-700">

          <p>
            Dear Best Friend,
          </p>

          <p>
            Sometimes I genuinely wonder how life became so beautiful after you entered it.
          </p>

          <p>
            Out of all the people in this world,
            I’m truly grateful that I found you ❤️
          </p>

          <p>
            Thank you for being my comfort during difficult days,
            my happiness during sad moments,
            and my peace during emotional phases.
          </p>

          <p>
            Thank you for understanding the things I never said out loud.
            Thank you for staying even when I became difficult to handle.
          </p>

          <p>
            Every laugh,
            every late-night conversation,
            every random memory,
            and every emotional breakdown became softer because you were there beside me 🌸
          </p>

          <p>
            You are not just my best friend.
            You became my safe place,
            my favorite person,
            and one of the most precious parts of my life 💖
          </p>

          <p>
            No matter where life takes us,
            a part of my heart will always carry this friendship forever ✨
          </p>

        </div>

      </div>

    </main>
  )
}