'use server'

import type { dataResponse } from '@/types'

const API_URL = 'https://www.thecolorapi.com'

export const fetchData = async (hex: string): Promise<dataResponse> => {
  try {
    if (!API_URL) {
      throw new Error('No API url found')
    }

    if (!hex) {
      throw new Error('No hex endpoint found')
    }

    const res = await fetch(`${API_URL}/id?hex=${hex}`)

    if (!res.ok) {
      throw new Error(res.statusText, { cause: res })
    }

    const data = await res.json()

    if (!data) {
      throw new Error('No data found')
    }

    return {data, error: undefined}
  } catch (error) {
    if (error instanceof Error) {
      const cause = error.cause as Response

      return {
        data: undefined,
        error: { status: cause?.status, message: error.message },
      }
    }

    return {
      data: undefined,
      error: { status: 500, message: 'Internal error' },
    }
  }
}