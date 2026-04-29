import type {PropsWithChildren, ReactNode} from "react"

interface CardProps extends PropsWithChildren{
    title: string;
    footer?: ReactNode;
}

export function Card({title, children, footer}:CardProps)  { 
  return (
    <section>
<div>{title}</div>
<h2>{children}</h2>
{footer && <footer>{footer}</footer>
}
    </section>
  )
}
