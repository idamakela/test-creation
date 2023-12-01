'use client'

import { fetchData } from '@/lib/fetchData'
import { useState, useEffect } from 'react'
import { dataResponse } from '@/types'

export const useData = (hex: string) => {
  const [data, setData] = useState<dataResponse | undefined>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true)

      const { data, error } = await fetchData(hex)

      if (data) {
        setData({ data, error })
      }

      if (error) {
        // set error use shadcn ui toaster?
      }

      setIsLoading(false)
    }

    fetcher()
  }, [hex])

  return { data: data?.data.name.value, error: data?.error, isLoading }
}
