import Head from 'next/head'

export default function Home() {
  return (
    <div class="min-h-screen p-2 relative  bg-pale text-dark py-12 px-3 leading-relaxed">
      <div className="border-2 border-dark top-3 left-3 bottom-3 right-3 absolute">
      </div>
      <div className="z-10 relative">
      <div className="b-header__logo">
      </div>
        <h1 className="text-5xl text-center mt-8 mb-4">Monokai Pro</h1>
        <h2 className="text-base uppercase mb-12 text-center tracking-wider">Beautiful functionality for professional developers</h2>
        <div className="flex justify-center relative mb-12">
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

        <div className="max-w-2xl	 mr-auto ml-auto">
          <div>
            <h3 className="bg-yellow py-3 px-6 font-bold  inline-block text-2xl my-3">A color scheme for focusing</h3>
            <p className="my-3"> <b>Monokai Pro</b> is a color scheme and customized user interface theme for code editors. It has been designed with <b>beautiful functionality </b> in mind. Carefully selected shades of colors are the foundation of an uncompromising, non-distractive user interface.</p>
            <p className="my-3"> Monokai Pro is available for <b>Sublime Text</b> and <b>Visual Code.</b> It comes with predefined syntax highlighting colors. The single goal of Monokai Pro is to let you <b>focus on your code.</b></p>
          </div>
          <div className="mt-20">
            <h3 className="bg-yellow py-3 px-6 font-bold  inline-block text-2xl my-3">Beautiful and functional colors</h3>
            <p className="my-3"> The original Monokai colors had been created in 2006 by creative director & developer Wimer Hazenberg. Soon after, the code editor Sublime Text adopted Monokai as its default color scheme. Monokai is internationally used for syntax highlighting in almost every editor.</p>
            <p className="my-3">The pro version is a modern interpretation of the classic color palette. The updated colors are carefully calibrated to be both functional and aesthetically pleasing.</p>
          </div>
          <div className="mt-20">
            <h3 className="bg-yellow py-3 px-6 font-bold  inline-block text-2xl my-3">Color filters</h3>
            <p className="my-3">Monokai Pro comes with a set of color filters to suit your mood. Whether you want to code like a robot or feel like controlling a spaceship, there's a matching color filter for you.</p>
          </div>
          <div className="mt-20">
            <h3 className="bg-yellow py-3 px-6 font-bold  inline-block text-2xl my-3">Pixel-perfect file icons</h3>
            <p className="my-3">The icons of Monokai Pro have all been created from scratch to ensure they are easily recognizable on small sizes in the side bar. They are designed to help you quickly find the right files in your project.</p>
            <div className="c-icon-process"></div>
            <p className="my-3">The pixel-perfect icons provide just the right level of detail to maximize legibility. You'll get 50+ monochrome and color icons for today's most popular languages.</p>
          </div>
          <div className="mt-20">
            <h3 className="bg-yellow py-3 px-6 font-bold  inline-block text-2xl my-3">Available in multiple editors</h3>
            <p className="my-3">Go get Monokai Pro for the following editors:</p>
          <div className="flex relative mb-12 mt-6">
          <ul className="text-xl inline-flex space-x-3  bg-pale">
            <li className="border-2 border-dark py-3 px-6 relative z-10 bg-pale">
            <a href="/sublime-text"><span class="b-menu__app-icon sublime-text"></span>Sublime Text</a>
            </li>
            <li className="border-2 border-dark py-3 px-6 relative z-10 bg-pale">
            <a href="/vscode"><span class="b-menu__app-icon vscode"></span>VS Code</a>
            </li>
          </ul>
        </div>
          </div>
        </div>
        <div className="max-w-2xl	 mr-auto ml-auto flex justify-center">
          <div>
            <a class="c-monokai-shop" href="https://monokai.shop" alt="Monokai Clothing"></a>
            <p><span class="text-pink mr-4">NEW:</span>super comfortable organic Monokai clothing</p>
          </div>
        </div>
        <footer class="mt-20 max-w-2xl	 mr-auto ml-auto flex justify-center text-xs text-darkGray ">
          <div>
            <p>© 2017 – 2021  Monokai, all rights reserved. Contact: 'hello' at domain name. <a href="#" className="text-pink">Terms of use.</a></p>
            <p className="mt-5">Need a new logo? Design your own logo quickly with my <a href="#" className="text-pink">brand new logo maker</a> .</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
