import type { RemoveColorProps } from '@/types'
import Button from './Button'
import { X } from 'lucide-react'

const RemoveColor = ({ color, removeColor }: RemoveColorProps) => {
  return (
    <Button title='remove color' variant={'secondary'} onClick={() => removeColor(color)}>
      <X size={18} />
    </Button>
  )
}

export default RemoveColor
