import { AddColorProps } from '@/types'
import Button from './Button'
import { Plus } from 'lucide-react'

const AddColor = ({ addRandomColor }: AddColorProps) => {
  return (
    <Button variant={'secondary'} onClick={addRandomColor}>
      <Plus size={18} />
    </Button>
  )
}

export default AddColor
