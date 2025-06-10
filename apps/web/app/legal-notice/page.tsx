"use client"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

export default function Page() {
  return (
    <main className="relative flex flex-1 flex-col gap-6 text-foreground">
      <div className="absolute inset-0 h-full bg-gradient-to-br from-background via-primary/20 to-background dark:via-primary/10" />
      <Navbar />
      <section className="container relative z-10 mx-auto mt-8 flex flex-1 flex-col items-start gap-4 px-4">
        <h1 className="text-2xl">Legal Notice</h1>
        <span>Information according to § 5 TMG.</span>
        <div>
          <h4 className="mb-1 text-xl">Contact</h4>
          <ul className="pl-4">
            <li>Dominik Koch</li>
            <li>Parkstraße 5</li>
            <li>88499 Riedlingen</li>
            <li>Germany</li>
            <li>
              Email: <a href="mailto:dominik@rivo.gg">dominik@rivo.gg</a>
            </li>
            <li>Phone: +49 151 23793107</li>
            <li className="text-yellow-200">
              🛈 No acceptance of parcels or packages.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h4>Online dispute resolution</h4>
          <span>
            The European Comission provides a platform for online dispute
            resolution, available at{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .
          </span>
          <span>
            I am neither willing nor obliged to participate in dispute
            resolution proceedings in front of a consumer arbitration board.
          </span>
        </div>
        <div>
          <h4 className="text-xl">Privacy Policy</h4>
          <Link
            href="/privacy"
            className="text-blue-500 hover:underline"
          >
            https://rivo.gg/privacy
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
