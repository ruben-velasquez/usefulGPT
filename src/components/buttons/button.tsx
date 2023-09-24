export default function Button({ href, children } : ButtonProps) {
  return (
    <a href={href} className="bg-slate-200 shadow-md transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500 shadow-slate-500 font-bold py-3 px-8 rounded-full text-slate-900">
        <button>
            { children }
        </button>
    </a>
  )
}

type ButtonProps = {
    href: string;
    children: React.ReactNode;
};