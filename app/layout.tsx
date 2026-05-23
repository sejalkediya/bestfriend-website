import "./globals.css"

export const metadata = {
  title: "For My Best Friend 💖",
  description: "A little piece of my heart made with memories and love.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  )
}
