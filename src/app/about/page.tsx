import Link from "next/link";
import NavBar from "../components/Header/Navbar"
import Hero from "../components/Header/Hero/Hero"
const AboutPage = () => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NextApp</title>
      </head>
      <body>
        <NavBar></NavBar>
        <Hero heading="About Page"></Hero>
        

      </body>
    </html>
  )
}

export default AboutPage;