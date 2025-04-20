import Link from 'next/link';

export default function Footer(){
    return(
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
    );
};