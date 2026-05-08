/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero, AttributeTicker, Skills, Projects, Architecture, Experience, Contact, Footer } from "./components/Portfolio";

export default function App() {
  return (
    <main className="relative selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <AttributeTicker />
      <Skills />
      <Projects />
      <Architecture />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
