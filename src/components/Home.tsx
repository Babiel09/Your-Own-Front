// app/page.js
import Link from 'next/link';
import Image from 'next/image';
import { BsJournalRichtext, BsLock, BsShareFill, BsPaletteFill } from 'react-icons/bs';
import { FiUsers, FiActivity, FiCalendar, FiThumbsUp } from 'react-icons/fi';

export default function HomeComponent() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">Your Own</span>
              </Link>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="#recursos" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
                Recursos
              </Link>
              <Link href="#como-funciona" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
                Como funciona
              </Link>
              <Link href="#depoimentos" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
                Depoimentos
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
                Blog
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
                Entrar
              </Link>
              <Link href="/cadastro" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition duration-300">
                Começar grátis
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto pt-20 pb-16 px-4 sm:pt-24 sm:pb-20 sm:px-6 lg:pt-32 lg:pb-28 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Seu diário pessoal,</span>
                <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text">do seu jeito.</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-md">
                Your Own é uma aplicação web para todos. Crie seu diário pessoal e escolha compartilhar com seus seguidores!
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/cadastro" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-lg text-base font-medium shadow-md hover:shadow-lg transition duration-300">
                  Começar agora
                </Link>
                <Link href="#como-funciona" className="text-violet-600 border border-violet-600 px-6 py-3 rounded-lg text-base font-medium hover:bg-violet-50 transition duration-300">
                  Saiba mais
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden shadow-2xl">
                <Image 
                  src="/api/placeholder/600/400" 
                  alt="Your Own App" 
                  width={600} 
                  height={400} 
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Joana Silva</p>
                    <p className="text-xs text-gray-500">Há 23 minutos</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  "Amei escrever sobre minha viagem hoje! 📝✨"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-violet-600">Recursos</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Tudo o que você precisa para documentar sua jornada
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Your Own combina o melhor de um diário pessoal com o poder das redes sociais.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="h-12 w-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                <BsJournalRichtext className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Diário Pessoal</h3>
              <p className="mt-2 text-base text-gray-600">
                Registre seus pensamentos, ideias e emoções em um espaço totalmente personalizado.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                <BsLock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Controle de Privacidade</h3>
              <p className="mt-2 text-base text-gray-600">
                Você decide o que compartilhar e com quem. Mantenha entradas privadas ou torne-as públicas.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                <BsShareFill className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Compartilhamento</h3>
              <p className="mt-2 text-base text-gray-600">
                Compartilhe suas histórias com amigos, familiares ou seguidores quando quiser.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
              <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                <FiUsers className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Seguidores</h3>
              <p className="mt-2 text-base text-gray-600">
                Conecte-se com pessoas que compartilham interesses semelhantes e siga suas jornadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-violet-600">Como funciona</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simples, intuitivo e poderoso
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Comece seu diário em minutos e explore todas as possibilidades que o Your Own oferece.
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="flex justify-center">
              <span className="relative z-0 inline-flex shadow-sm rounded-md -space-x-px">
                <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-violet-600 bg-violet-600 text-sm font-medium text-white">
                  Criar
                </button>
                <button type="button" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  Personalizar
                </button>
                <button type="button" className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  Compartilhar
                </button>
              </span>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Crie seu diário pessoal</h3>
                <p className="mt-4 text-lg text-gray-600">
                  Registre seus momentos, pensamentos e experiências em um espaço totalmente seu. Adicione fotos, vídeos e muito mais para enriquecer suas memórias.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex">
                    <FiActivity className="h-6 w-6 text-violet-600 flex-shrink-0 mr-3" />
                    <span className="text-gray-600">Entradas ilimitadas em seu diário pessoal</span>
                  </li>
                  <li className="flex">
                    <FiCalendar className="h-6 w-6 text-violet-600 flex-shrink-0 mr-3" />
                    <span className="text-gray-600">Organize por datas, tags ou categorias</span>
                  </li>
                  <li className="flex">
                    <BsPaletteFill className="h-6 w-6 text-violet-600 flex-shrink-0 mr-3" />
                    <span className="text-gray-600">Personalize com temas e formatos diferentes</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/api/placeholder/500/375" 
                    alt="Editor de diário" 
                    width={500} 
                    height={375} 
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-violet-600">Depoimentos</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              O que nossa comunidade diz
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Milhares de pessoas já transformaram sua forma de registrar memórias com o Your Own.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Marcos Ferreira</h3>
                  <p className="text-sm text-gray-500">Escritor</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Your Own mudou minha forma de registrar ideias. Consigo manter algumas entradas privadas para desenvolvimento de personagens, e compartilho outras com meus leitores. É perfeito!"
              </p>
              <div className="mt-4 flex items-center">
                <FiThumbsUp className="h-5 w-5 text-violet-600" />
                <span className="ml-2 text-sm text-gray-500">Usuário há 8 meses</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Laura Santos</h3>
                  <p className="text-sm text-gray-500">Fotógrafa</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Como fotógrafa, adoro poder documentar minhas viagens e compartilhar com meus seguidores. A interface é linda e intuitiva, torna o processo de escrita muito mais agradável."
              </p>
              <div className="mt-4 flex items-center">
                <FiThumbsUp className="h-5 w-5 text-violet-600" />
                <span className="ml-2 text-sm text-gray-500">Usuária há 1 ano</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Paulo Costa</h3>
                  <p className="text-sm text-gray-500">Estudante</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Uso o Your Own para registrar meu progresso acadêmico. O controle de privacidade é excelente, posso compartilhar conquistas com amigos mas manter minhas reflexões pessoais privadas."
              </p>
              <div className="mt-4 flex items-center">
                <FiThumbsUp className="h-5 w-5 text-violet-600" />
                <span className="ml-2 text-sm text-gray-500">Usuário há 6 meses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Pronto para começar sua jornada?
          </h2>
          <p className="mt-4 text-lg text-indigo-100">
            Crie seu diário pessoal hoje mesmo e decida o que compartilhar com o mundo.  
            Your Own é para todos - escritores, viajantes, estudantes, artistas e qualquer pessoa  
            que queira documentar sua vida do seu jeito.
          </p>
          <div className="mt-8">
            <Link href="/cadastro" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-600 bg-white hover:bg-gray-50 shadow-lg transition duration-300">
              Criar meu diário gratuitamente
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Sobre</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/sobre" className="text-base text-gray-300 hover:text-white">
                    Nossa história
                  </Link>
                </li>
                <li>
                  <Link href="/time" className="text-base text-gray-300 hover:text-white">
                    Equipe
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-base text-gray-300 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/carreiras" className="text-base text-gray-300 hover:text-white">
                    Carreiras
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Recursos</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/funcionalidades" className="text-base text-gray-300 hover:text-white">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="/guias" className="text-base text-gray-300 hover:text-white">
                    Guias
                  </Link>
                </li>
                <li>
                  <Link href="/modelos" className="text-base text-gray-300 hover:text-white">
                    Modelos
                  </Link>
                </li>
                <li>
                  <Link href="/inspiracao" className="text-base text-gray-300 hover:text-white">
                    Inspiração
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Suporte</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/ajuda" className="text-base text-gray-300 hover:text-white">
                    Central de ajuda
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-base text-gray-300 hover:text-white">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-base text-gray-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/comunidade" className="text-base text-gray-300 hover:text-white">
                    Comunidade
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link href="/privacidade" className="text-base text-gray-300 hover:text-white">
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="/termos" className="text-base text-gray-300 hover:text-white">
                    Termos de uso
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-base text-gray-300 hover:text-white">
                    Política de cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-base text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Your Own. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}