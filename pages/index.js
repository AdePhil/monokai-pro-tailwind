import Head from 'next/head'

export default function Home() {
  return (
    <div class="min-h-screen p-2 relative  bg-pale text-dark py-12 px-3">
      <div className="border-2 border-dark top-3 left-3 bottom-3 right-3 absolute">
        
      </div>
      <div className="b-header__logo">
      </div>
        <h1 className="text-5xl text-center mt-8 mb-4">Monokai Pro</h1>
        <h2 className="text-base uppercase mb-12 text-center tracking-wider">Beautiful functionality for professional developers</h2>
        <div className="flex justify-center relative">
          <ul className="text-xl  m-auto  inline-flex space-x-3  bg-pale">
            <li className="border-2 border-dark py-3 px-6 relative z-10 bg-pale">
            <a href="/sublime-text"><span class="b-menu__app-icon sublime-text"></span>Sublime Text</a>
            </li>
            <li className="border-2 border-dark py-3 px-6 relative z-10 bg-pale">
            <a href="/vscode"><span class="b-menu__app-icon vscode"></span>VS Code</a>
            </li>
          </ul>
          <div className="absolute border-t-2 border-dark w-100 top-8 left-0 right-0"></div>
        </div>
    </div>
  )
}
