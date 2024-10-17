import Link from "next/link";
import NavBar from "../components/Header/Navbar"
const ContactPage = () => {
  return (
    <html lang="en">
      <head>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NextApp</title>
      </head>
      <body>
        <NavBar></NavBar>
        <main className="bg-blue-100 h-screen">
          <h1 className="text-5xl">Contact Page</h1>
        </main>

      </body>
    </html>
  )
}

export default ContactPage;