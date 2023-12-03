import type { RemoveColorProps } from '@/types'
import Button from './Button'
import { X } from 'lucide-react'

const RemoveColor = ({ color, removeColor }: RemoveColorProps) => {
  return (
    <Button
      title='remove color'
      variant='secondary'
      onClick={() => removeColor(color)}
      className='opacity-0 group-hover/remove:opacity-100'
    >
      <X size={18} />
    </Button>
  )
}

export default RemoveColor
