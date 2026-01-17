import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { cn } from '../../lib/utils'

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium text-[#2D3436]',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-[#57534E] hover:bg-[#F5F5F4] rounded-lg transition-colors'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-[#78716C] rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-[#F5F5F4]/50 [&:has([aria-selected])]:bg-[#C17B5F]/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-lg transition-colors hover:bg-[#F5F5F4] hover:text-[#2D3436]'
        ),
        day_range_end: 'day-range-end',
        day_selected: 'bg-[#C17B5F] text-white hover:bg-[#B06A4E] hover:text-white focus:bg-[#C17B5F] focus:text-white',
        day_today: 'bg-[#F5F5F4] text-[#2D3436] font-semibold',
        day_outside: 'day-outside text-[#A8A29E] opacity-50 aria-selected:bg-[#F5F5F4]/50 aria-selected:text-[#A8A29E] aria-selected:opacity-30',
        day_disabled: 'text-[#A8A29E] opacity-50',
        day_range_middle: 'aria-selected:bg-[#C17B5F]/10 aria-selected:text-[#2D3436]',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
