import Image from "next/image";
import {
  Flame,
  Check,
  X,
  Cog,
  Sparkles,
  ShoppingBasket,
  DraftingCompass,
  HeartHandshake,
  WandSparkles,
} from "lucide-react";

export default function Page() {
  return (
    <div className="relative antialasing mb-0 lg:mb-96 md:mb-5 sm:mb-12">
      <div className="flex justify-center items-center min-h-screen">
        <div className="justify-center max-w-5xl lg:grid grid-cols-2 gap-24 sm:mt-8 md:mt-12 lg:mt-24 lg:mb-4">
          <div className="leading-relaxed text-center lg:text-right dark:text-zinc-200 lg:pt-56 sm:pt-0 mb-10 mx-18">
            <h1 className="font-medium text-6xl" id="type">
              Simplesmente <br /> comece a{" "}
              <span className="text-fade">planejar</span>
            </h1>
            <p className="font-light leading-loose text-pretty lg:text-2xl text-md pt-2">
              A Spiral irá te ajudar em desenvolver seus planos e impulsionar
              sua carreira ou empresa. Com desenvolvimeto de Websites, sistemas,
              API's, aplicativos. Nossa startup é focada em compromisso com o
              cliente, entregando no prazo e com qualidade.
            </p>
          </div>
          <div className="relative mb-8">
            <div className="flex absolute top-20 right-12 bg-zinc-900/95 px-3 py-3 rounded-xl">
              <div className="block bg-black px-3 py-3 rounded-xl">
                <Image
                  src="/fatSpiral.svg"
                  alt="Logo da Spiral em uma notificação de celular"
                  width={50}
                  height={50}
                  blurDataURL="/fatSpiral.svg"
                  className="select-none no-drag"
                />
              </div>
              <p id="notification">
                <strong>Spiral te enviou um convite</strong> <br />
                Venha fazer parte dessa <br /> jornada conosco!
              </p>
            </div>
            <div className="absolute bottom-1/4 right-10 blur-xl">
              <Image
                src="/assets/purpleSpiral.webp"
                alt="Logo da Spiral em uma notificação de celular"
                width={370}
                height={370}
                blurDataURL="/assets/purpleSpiral.webp"
                className="select-none no-drag"
              />
            </div>
            <Image
              src="/assets/iphone_xs.webp"
              alt="Imagem de um iPhone XS Maxx para fixar outras imagens em cima"
              width={1920}
              height={717}
              placeholder="blur"
              blurDataURL="/assets/iphone_xs.webp"
              className="select-none no-drag"
            />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <hr />
        <h1 className="slogan">
          Sua satisfação é a <br /> nossa{" "}
          <span className="text-fade">prioridade</span>.
        </h1>
        <hr />
      </div>
      <div className="relative">
        <div className="absolute left-2 top-20">
          <div className="neon" />
        </div>
        <div className="absolute right-2 bottom-20">
          <div className="neon" />
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-6xl text-center my-10 space-y-8">
            <p className="text-xl">
              Nada mais justo como uma empresa que se preocupa com cada
              detalhes. Por isso juntamos profissionais ambiciosos e cuidadosos
              para desenvolver o melhor para você.
            </p>
            <h5 className="text-4xl" id="jacquard12">
              Conheça os nossos serviços
            </h5>
            <p className="text-xl">
              A Spiral oferece uma ampla gama de serviços de desenvolvimento web
              para te ajudar a alcançar seus objetivos. Nossas soluções são
              personalizadas para atender às necessidades específicas de cada
              cliente, garantindo que você tenha o suporte necessário para
              impulsionar o seu negócio. Confira abaixo alguns dos serviços que
              oferecemos:
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            <div
              className="block p-8 shadow-xl transition hover:shadow-fuchsia-700/75"
              id="grid-border-top"
            >
              <Cog className="text-fuchsia-600" />
              <h2 className="mt-4 text-2xl text-white" id="jacquard12">
                Desenvolvimento Web
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                Criamos websites e aplicações web que são rápidos, seguros e
                escaláveis. Utilizamos tecnologias de ponta para garantir que
                nossos projetos estejam sempre à frente das tendências.
              </p>
            </div>
            <div
              className="block p-8 shadow-xl transition hover:shadow-fuchsia-700/75"
              id="grid-border-top"
            >
              <Sparkles className="text-fuchsia-600" />
              <h2 className="mt-4 text-2xl text-white" id="jacquard12">
                Design Responsivo
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                Nossos designs são pensados para oferecer a melhor experiência
                de usuário em qualquer dispositivo, seja desktop, tablet ou
                smartphone.
              </p>
            </div>
            <div
              className="block p-8 shadow-xl transition hover:shadow-fuchsia-700/75"
              id="grid-border-top"
            >
              <ShoppingBasket className="text-fuchsia-600" />
              <h2 className="mt-4 text-2xl text-white" id="jacquard12">
                E-commerce
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                Desenvolvemos soluções de e-commerce personalizadas para atender
                às necessidades do seu negócio, integrando funcionalidades que
                facilitam a gestão e aumentam as vendas.
              </p>
            </div>
            <div
              className="block p-8 shadow-xl transition hover:shadow-fuchsia-700/75"
              id="grid-border-bottom"
            >
              <DraftingCompass className="text-fuchsia-600" />
              <h2 className="mt-4 text-2xl text-white" id="jacquard12">
                Desenvolvimento de Aplicativos
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                Desenvolvemos aplicativos web progressivos (PWAs) e outras
                soluções interativas que ampliam a presença digital da sua
                empresa.
              </p>
            </div>
            <div
              className="block p-8 shadow-xl transition hover:shadow-fuchsia-700/75"
              id="grid-border-bottom"
            >
              <HeartHandshake className="text-fuchsia-600" />
              <h2 className="mt-4 text-2xl text-white" id="jacquard12">
                SEO e Marketing Digital
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                Oferecemos serviços de otimização para motores de busca (SEO) e
                estratégias de marketing digital para aumentar a visibilidade e
                atrair mais clientes.
              </p>
            </div>
            <div
              className="block p-8 shadow-xl transition hover:shadow-fuchsia-700/75"
              id="grid-border-bottom"
            >
              <WandSparkles className="text-fuchsia-600" />
              <h2 className="mt-4 text-2xl text-white" id="jacquard12">
                Design gráfico e Web design
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-zinc-200">
                Criamos identidades visuais e designs únicos que refletem a
                personalidade da sua marca e se destacam no mercado.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative justify-center items-center">
        <div className="max-w-8xl text-center lg:mx-14 space-y-8">
          <Image
            src="/assets/imagePlacer.webp"
            alt="Imagem para fixar outras imagens em cima"
            width={1964}
            height={1292}
            blurDataURL="/assets/imagePlacer.webp"
            className="shadow-xl"
          />
          <div className="absolute left-28 bottom-44 opacity-55">
            <div className="neon" />
          </div>
        </div>
      </div>
      <div className="relative max-w-screen-xl lg:-mt-20 px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16 z-2">
        <div className="absolute right-2 -top-20">
          <div className="neon" />
        </div>
        <div className="absolute left-2 -bottom-20">
          <div className="neon" />
        </div>
        <div className="text-center">
          <h1 className="prices-title">Nunca é apenas um sonho</h1>
          <p className="mb-8 leading-relaxed text-2xl">
            Com valores abaixo do mercado, a nossa empresa pode te ajudar com
            pequenas parcelas! ( ͡° ͜ʖ ͡°) <br />
            Confira abaixo os nossos planos
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:items-stretch md:grid-cols-2 lg:grid-cols-3 md:gap-8 justify-between max-w-7xl">
            <div className="p-6 sm:px-8" id="prices-border">
              <span className="inline-flex rounded-full bg-red-700 px-2.5 py-0.5 text-red-100">
                <Flame className="size-4" />
                <p className="whitespace-nowrap text-sm">Mais popular</p>
              </span>
              <h2 className="text-xl font-semibold">
                Website Estático
                <span className="sr-only">Pagamento único</span>
              </h2>
              <p className="mt-2 font-light text-zinc-300">
                Um website básico, do seu jeito que você decidir. Excelente para
                pequenos negócios, ou para projetos pessoais.
              </p>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-zinc-200 sm:text-4xl">
                  450$
                </strong>
                <span className="text-sm font-medium text-zinc-300">
                  /pagamento único
                </span>
              </p>
              <a
                className="mt-4 block rounded border border-fuchsia-900 bg-fuchsia-900 px-12 py-3 text-center text-sm font-medium hover:bg-transparent hover:text-fuchsia-600 focus:outline-none focus:ring active:text-fuchsia-500 sm:mt-6"
                href="/pages/contact"
              >
                Tenho interesse!
              </a>
              <div className="p-6 sm:px-8">
                <ul className="mt-2 font-light space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Website responsivo{" "}
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Atualizações com desconto
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Equipe de suporte
                  </li>
                  <li className="flex items-center gap-1">
                    <X className="text-red-600" />
                    Hospedagem
                  </li>
                  <li className="flex items-center gap-1">
                    <X className="text-red-600" />
                    Banco de dados
                  </li>
                  <li className="flex items-center gap-1">
                    <X className="text-red-600" />
                    API
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 sm:px-8" id="prices-border">
              <h2 className="text-xl font-semibold pt-5">
                Website Empresarial
                <span className="sr-only">Plano</span>
              </h2>
              <p className="mt-2 font-light text-zinc-300">
                Um website perfeito para empresas maiores, contanto com um maior
                volume de clientes. Com páginas de autenticação seguras, banco
                de dados de grande capacidade e até newsletter.
              </p>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-zinc-200 sm:text-4xl">
                  2500$
                </strong>
                <span className="text-sm font-medium text-zinc-300">
                  /mês + produção*
                </span>
              </p>
              <a
                className="mt-4 block rounded border border-fuchsia-900 bg-fuchsia-900 px-12 py-3 text-center text-sm font-medium hover:bg-transparent hover:text-fuchsia-600 focus:outline-none focus:ring active:text-fuchsia-500 sm:mt-6"
                href="/pages/contact"
              >
                Vamos conversar
              </a>
              <div className="p-6 sm:px-8">
                <ul className="mt-2 font-light space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Website responsivo
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Atualizações diárias
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Equipe de suporte 24H
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Hospedagem e endereço web
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Banco de dados de 32gb
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    E-commerce
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    API personalizada
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 sm:px-8" id="prices-border">
              <h2 className="text-xl font-semibold pt-5">
                Seriviço Personalizado
                <span className="sr-only">Plano ou pagamento único</span>
              </h2>
              <p className="mt-2 font-light text-zinc-300">
                Um website que você decide absolutamente tudo, o céu é o limite.
                Sendo ideal para modificar tudo.
              </p>
              <a
                className="mt-4 block rounded border border-fuchsia-900 bg-fuchsia-900 px-12 py-3 text-center text-sm font-medium hover:bg-transparent hover:text-fuchsia-600 focus:outline-none focus:ring active:text-fuchsia-500 sm:mt-6"
                href="/pages/contact"
              >
                Entrar em contato
              </a>
              <div className="p-6 sm:px-8">
                <ul className="mt-2 font-light space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Website & Aplicativo
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Atualizações diárias
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Equipe de suporte 24H
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Hospedagem e endereço web
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Banco de dados de até 256gb
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    API exclusiva
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Segurança contra crackers
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Recursos de acessibilidade
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Recurso de vendas online
                  </li>
                  <li className="flex items-center gap-1">
                    <Check className="text-lime-600" />
                    Backup e recuperação de dados
                  </li>
                  <li className="flex items-center gap-1">
                    <X className="text-red-600" />
                    Lavar a louça
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mb-20">
        <Image
          src="/assets/Arrow.svg"
          alt="Imagem para fixar outras imagens em cima"
          width={50}
          height={50}
          blurDataURL="/assets/Arrow.svg"
          id="arrow"
        />
        <p id="sunshiney">
          Lembresse que você pode modificar cada um desses pacotes, sem a
          necessidade de pagar um valor alto! Nós fazemos o melhor para
          moldarmos o que você pediu, viu? <br />
          Atenciosamente, <br />
          -A equipe :-)
        </p>
      </div>
      <div className="relative mt-72">
        <div className="letreiro">
          <span className="sm:text-lg" id="letreiro">
            A SPIRAL PODE TE AJUDAR, ENTRE EM CONTATO! A SPIRAL PODE TE AJUDAR,
            ENTRE EM CONTATO!
          </span>
        </div>
        <div className="absolute inset-0 flex justify-center items-center shadow-xl">
          <Image
            src="/assets/purpleSpiral.webp"
            alt="Imagem para fixar outras imagens em cima"
            width={400}
            height={400}
            blurDataURL="/assets/purpleSpiral.png"
            className="select-none no-drag z-2"
            id="purple-spiral"
          />
          <div className="absolute opacity-75">
            <div className="neon" />
          </div>
        </div>
      </div>
      <div className="absolute opacity-55 lg:-bottom-96 md:-bottom-52 sm:-bottom-48">
        <Image
          src="/assets/spirals-footer.svg"
          alt="Várias espirais de fundo"
          width={500}
          height={500}
          className="w-full z-1"
        />
      </div>
    </div>
  );
}
