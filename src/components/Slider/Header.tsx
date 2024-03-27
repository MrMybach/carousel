export function Header({ heading }: { heading?: string | undefined }) {
  return heading ? (
    <h1 className="text-3xl uppercase font-bold mb-10">{heading}</h1>
  ) : null
}
