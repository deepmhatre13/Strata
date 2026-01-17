import * as React from 'react'
import { cn } from '../../lib/utils'

const Input = React.forwardRef(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-lg border bg-white px-3 py-2 text-sm text-[#2D3436] placeholder:text-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#C17B5F]/20 focus:border-[#C17B5F] disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
          error ? 'border-red-300' : 'border-[#E7E5E4]',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
