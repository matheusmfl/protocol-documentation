import { Logo } from './icons/Logo'

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6">
      <Logo className="text-white h-4 w-auto" />

      <nav className="flex flex-col mt-10 gap-6">
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">Guias</strong>
          <div className="flex flex-col pl-2 text-sm">
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              Introdução
            </a>
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              Comece por aqui
            </a>
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              SDKs
            </a>
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              Autenticação
            </a>
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              Paginação
            </a>
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              Errors
            </a>
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              WebHooks
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <strong className="text-zinc-100 font-medium text-sm">
            Recursos
          </strong>
          <div className="flex flex-col pl-2 text-sm">
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              Contatos
            </a>
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              Conversa
            </a>
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              Mensagens
            </a>
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              Grupos
            </a>
            <a
              href=""
              className="px-4 py-1.5 border-l border-white/5 text-zinc-400 hover:text-white transition-colors"
            >
              Downloads
            </a>
          </div>
        </div>
      </nav>
    </aside>
  )
}
