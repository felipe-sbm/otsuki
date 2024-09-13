"use client";
import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";

const inter = Pixelify_Sans({
  weight: "400",
  subsets: ["latin"],
});

export function Navbar() {
  return (
    <header className="bg-black">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Spiral SBM</span>
            <Image
              className="lg:h-20 h-12 w-auto hover:opacity-75"
              src="/assets/logo-spiral.png"
              alt="Logo da Spiral SBM"
              width={319}
              height={149}
            />
          </a>
        </div>
        <div className="flex justify-right">
          <a
            href="/"
            className="arco-iris"
            title="Botão para entrar ir para parte de baixo do site, para ter acesso a área de contato"
          >
              <p className="bg-black py-1 lg:px-6 px-2 lg:text-3xl text-lg rounded-lg">Entrar em contato</p>
          </a>
        </div>
      </nav>
    </header>
  );
}
