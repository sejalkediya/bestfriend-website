import Navbar from "../components/Navbar"

export default function Timeline() {

  const timeline = [

    {
      title: "The Beginning 🌸",
      text: "A random moment that slowly turned into one of the most meaningful friendships of my life."
    },

    {
      title: "Endless Memories ✨",
      text: "Little laughs, random conversations, screenshots, pictures and moments that quietly became precious memories."
    },

    {
      title: "Comfort In Human Form 💖",
      text: "Somehow you became the person who made difficult days softer and happy days even happier."
    },

    {
      title: "A Forever Bond 🌙",
      text: "No matter how much life changes, this friendship will always stay close to my heart."
    }

  ]

  return (

    <main className="min-h-screen bg-gradient-to-b from-[#fff8fc] via-[#fff4f8] to-[#fff0f6] px-6 py-28 relative overflow-hidden">

      <Navbar />

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-pink-200 blur-3xl opacity-20 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-rose-200 blur-3xl opacity-20 rounded-full"></div>

      {/* TITLE */}
      <div className="text-center mb-28 relative z-10">

        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.3] pb-3 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-450 bg-clip-text text-transparent mb-6">

          our journey together ♡

        </h1>

        <p className="text-gray-500 text-xl italic">
          every moment became a part of us ✨
        </p>

      </div>

      {/* TIMELINE */}
      <div className="relative max-w-5xl mx-auto">

        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-pink-200 via-rose-300 to-pink-200 -translate-x-1/2"></div>

        <div className="space-y-24 relative z-10">

          {timeline.map((item, index) => (

            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >

              {/* CARD */}
              <div className="w-full md:w-[42%] relative">

                {/* DOT */}
                <div className={`hidden md:flex absolute top-10 ${
                  index % 2 === 0
                    ? "-right-[62px]"
                    : "-left-[62px]"
                } w-7 h-7 rounded-full bg-pink-400 border-[6px] border-pink-100 shadow-[0_0_25px_rgba(255,105,180,0.45)]`}>
                </div>

                {/* BOX */}
                <div className="bg-white/80 backdrop-blur-xl rounded-[35px] p-10 shadow-[0_15px_50px_rgba(255,182,193,0.15)] hover:-translate-y-2 transition duration-700">

                  <h2 className="text-3xl font-semibold bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent mb-6">

                    {item.title}

                  </h2>

                  <p className="text-gray-600 text-[19px] leading-[42px]">

                    {item.text}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  )
}