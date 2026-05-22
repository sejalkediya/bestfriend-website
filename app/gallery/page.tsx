import Navbar from "../components/Navbar"

export default function Gallery() {

  const photos = [
    {
      image: "/memory1.jpg",
      caption: "One of my favorite memories 💖"
    },
    {
      image: "/memory2.jpg",
      caption: "Late night talks & endless laughs 🌙"
    },
    {
      image: "/memory3.jpg",
      caption: "Moments that became forever ✨"
    },
    {
      image: "/memory4.jpg",
      caption: "The comfort of your presence 🌸"
    },
    {
      image: "/memory5.jpg",
      caption: "Smiles that healed everything ❤️"
    },
    {
      image: "/memory6.jpg",
      caption: "A friendship I’ll always treasure 💌"
    },
    {
      image: "/memory7.jpg",
      caption: "Beautiful little moments 📸"
    },
    {
      image: "/bestfriend.jpg",
      caption: "My favorite person forever 💕"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff1f5] via-[#fff7fb] to-[#f7ecff] relative overflow-hidden">

      <Navbar />

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 blur-3xl opacity-20 rounded-full"></div>

      {/* FLOATING ICONS */}
      <div className="absolute top-40 left-10 text-5xl animate-bounce">
        ✨
      </div>

      <div className="absolute top-[500px] right-16 text-5xl animate-pulse">
        💖
      </div>

      <div className="absolute bottom-20 left-20 text-4xl animate-ping">
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
        <h1 className="text-6xl md:text-7xl font-bold text-center text-pink-600 mb-6">
          Our Little Gallery 📸
        </h1>

        <p className="text-center text-xl text-gray-600 mb-20 max-w-3xl mx-auto leading-10">
          Every picture here carries a memory,
          every memory carries a feeling,
          and every feeling reminds me how lucky I am to have you ❤️
        </p>

        {/* GALLERY */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto">

          {photos.map((photo, index) => (

            <div
              key={index}
              className="group break-inside-avoid"
            >

              <div
                className="relative overflow-hidden rounded-[35px] bg-white/70 backdrop-blur-xl p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-4 hover:rotate-1 transition duration-500"
              >

                {/* IMAGE */}
                <img
                  src={photo.image}
                  className="rounded-[28px] w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-[35px]"></div>

                {/* HEART */}
                <div className="absolute top-5 right-5 text-3xl opacity-0 group-hover:opacity-100 group-hover:scale-125 transition duration-500">
                  💖
                </div>

                {/* CAPTION */}
                <div className="absolute bottom-8 left-6 right-6 opacity-0 group-hover:opacity-100 transition duration-500">

                  <p className="text-white text-lg leading-8 font-medium drop-shadow-lg">
                    {photo.caption}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}