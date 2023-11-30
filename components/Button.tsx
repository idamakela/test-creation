import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/classnames'

export const buttonVariants = cva(
  'p-3 rounded-full transition hover:scale-105 text-center',
  {
    variants: {
      variant: {
        primary: 'bg-blue text-neutral-100',
        secondary: 'bg-inherit',
        outline: 'bg-none shadow-[inset_0_0_0_2px_#0015CE] text-neutral-900',
        ghost: 'w-full text-center h-[100px] relative top-40'
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = ({ children, variant, className, ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  )
}

export default Button