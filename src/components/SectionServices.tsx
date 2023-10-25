import Container from "./Container"
import PhoneIcon from "@/assets/icon-phone.svg"
import Service from "./Service"
import SolutionsIcon from "@/assets/icon-solutions.svg"
import OptionsIcon from "@/assets/icon-options.svg"
import CardIcon from "@/assets/icon-card.svg"
import PhoneImage from "@/assets/phone.png"
import Image from "next/image"

const SectionServices = () => {
  return (
    <section className="md:relative w-full h-[965px] ">
      <Container>
        <div className="flex-1 max-w-[594px]">
          <span className=" pt-32 text-primary-orange text-sm font-bold uppercase mb-9 block">
            Serviços exclusivos
          </span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </p>
          <ul className="flex flex-col items-start gap-9">
            <Service
              icon={PhoneIcon}
              nameIcon="Phone Icon"
              text="Acompanhar sua conta, fazer transferência e pagamentos de onde estiver"
            />
            <Service
              icon={SolutionsIcon}
              nameIcon="solutions"
              text="Soluções de empréstimos e renegociações para organizar suas finanças"
            />
            <Service
              icon={OptionsIcon}
              nameIcon="Options"
              text="Diversas opções de investimentos, de acordo com o seu perfil de investidor"
            />
            <Service
              icon={CardIcon}
              nameIcon="Card"
              text=" Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual"
            />
          </ul>
        </div>
      </Container>
      <div className="hidden border-box md:absolute md:top-0 md:right-10 w-[32%] md:flex md:items-center md:h-full">
        <Image src={PhoneImage} alt="Phone" />
      </div>
    </section>
  )
}

export default SectionServices
