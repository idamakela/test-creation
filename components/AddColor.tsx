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
      className='relative md:-left-[21px] md:opacity-0 md:group-hover/add:opacity-100'
    >
      <Plus size={18} />
    </Button>
  )
}

export default AddColor
