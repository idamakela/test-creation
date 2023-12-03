import { AddColorProps } from '@/types'
import Button from './Button'
import { Plus } from 'lucide-react'
import { cn } from '@/utils/classnames'

const AddColor = ({ addRandomColor }: AddColorProps) => {
  return (
    <Button
      title='add color'
      variant={'secondary'}
      onClick={addRandomColor}
      className='group-hover/add:opacity-100 opacity-0 relative -left-[21px]'
    >
      <Plus size={18} />
    </Button>
  )
}

export default AddColor
