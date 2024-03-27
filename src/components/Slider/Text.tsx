export function Text({ message }: { message?: string | undefined }) {
  return message ? (
    <p className="max-w-60 text-slate-400 mb-12">{message}</p>
  ) : null
}
