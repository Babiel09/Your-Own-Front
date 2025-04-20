import Link from 'next/link';

export default function Header(){
    return(
        <header>
                  <nav className="top-0 z-50 w-full bg-white backdrop-blur-lg border-b border-gray-100 shadow-sm fixed">
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
                          <Link href="/entrar" className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium transition duration-200">
                            Entrar
                          </Link>
                          <Link href="/cadastro" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:shadow-lg transition duration-300">
                            Começar grátis
                          </Link>
                        </div>
                      </div>
                    </div>
                  </nav>
        </header>
    );
};