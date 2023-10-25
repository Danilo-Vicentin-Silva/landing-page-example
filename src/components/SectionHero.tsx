'use client'

import Container from "@/components/Container"
import ImgAppleStore from "@/assets/btn-apple-store.svg"
import ImgGooglePlay from "@/assets/btn-google-play.svg"
import Arrow from "@/assets/arrow-explorer.svg"
import Image from "next/image"
import Woman from "@/assets/woman.png"

const SectionHero = () => {
  const scroll = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" })
  }

  return (
    <section className=" w-full h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-white text-4xl md:text-7xl font-bold mt-5 mb-4">
            Tenha seu banco na palma da mão.{" "}
          </h1>
          <p className="text-white md:text-xl max-w-[408px] mb-8">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito para você.
          </p>
          <div className="flex gap-4 mb-24">
            <button>
              <Image src={ImgAppleStore} alt="Apple Store" />
            </button>
            <button>
              <Image src={ImgGooglePlay} alt="Google Play" />
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={Arrow} alt="arrow explorer" width={15} />
            <span
              onClick={() => scroll()}
              className="text-white text-sm font-bold"
            >
              Continue explorando
            </span>
          </button>
        </div>
        <Image
          src={Woman}
          alt="Woman"
          height={703}
          width={703}
          className="hidden md:block"
        />
      </Container>
    </section>
  )
}

export default SectionHero
