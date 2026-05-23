import Navbar from "../components/Navbar"

export default function Gallery() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff1f5] via-[#fff7fb] to-[#f7ecff] px-6 py-24 relative overflow-hidden">

      <Navbar />

      <h1 className="text-6xl md:text-7xl font-bold text-center text-pink-600 mb-6 mt-16">
        Our Little Gallery 📸
      </h1>

      <p className="text-center text-xl text-gray-600 mb-20">
        Every picture holds a memory ❤️
      </p>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto">

        {[
          '/memory1.jpg',
          '/memory2.jpg',
          '/memory3.jpg',
          '/memory4.jpg',
          '/memory5.jpg',
          '/memory6.jpg',
          '/memory7.jpg',
          '/bestfriend.jpg'
        ].map((photo, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-[35px] bg-white p-3 shadow-2xl hover:-translate-y-6 hover:rotate-2 hover:shadow-[0_25px_70px_rgba(236,72,153,0.25)] transition duration-700 break-inside-avoid"
          >

            <img
              src={photo}
              className="rounded-[25px] w-full object-cover group-hover:scale-125 transition duration-1000"
            />

          </div>

        ))}

      </div>

    </main>
  )
}