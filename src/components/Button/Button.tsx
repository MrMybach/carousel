type ButtonProps = {
  text?: string
  href?: string
}

export function Button({ text, href }: ButtonProps) {
  const handleOnClick = () => {
    if (href) {
      return window.open(href, '_blank')
    }
  }
  return (
    <button
      onClick={handleOnClick}
      className="relative bg-transparent inline-flex items-center justify-center whitespace-nowrap text-sm text-slate-200  ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-semibold spacing-[0.02em] leading-none capitalize rounded-[1rem] px-[2.5rem] py-[1.3rem] transition-colors overflow-hidden z-[1] after:content-[' '] after:block after:z-[-1] after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-[radial-gradient(192.27%_129.59%_at_0_.89%,#a7e64c_0,#029fd9_31.71%,#611fe7_53.25%,#8840e6_71.78%,#65d5ff_89.56%)] after:rounded-[1rem] after:transition-all after:ease-out after:duration-500 after:hover:left-[-25%] after:hover:top-[-25%]"
    >
      {text}
    </button>
  )
}
