import { Button } from '@/components/Button/Button'

type CtaProps = {
  ctaProps?:
    | {
        href: string
        text: string
      }
    | undefined
}
export function Cta({ ctaProps }: CtaProps) {
  return ctaProps ? (
    <Button href={ctaProps?.href} text={ctaProps?.text} />
  ) : null
}
