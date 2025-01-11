import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { Button } from "@/components/ui/button"
import { DateRange } from "react-day-picker"

interface DateRangeFilterProps {
  onFilterChange: (dateRange: DateRange | undefined) => void;
}

export function DateRangeFilter({ onFilterChange }: DateRangeFilterProps) {
  console.log('DateRangeFilter rendering');
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(undefined)

  const handleApplyFilter = () => {
    console.log('Applying filter with date range:', dateRange);
    onFilterChange(dateRange)
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-2">
          <Label>Filtrar por período:</Label>
          <DatePickerWithRange value={dateRange} onDateRangeChange={setDateRange} />
          <Button onClick={handleApplyFilter} className="w-full mt-2">Aplicar Filtro</Button>
        </div>
      </CardContent>
    </Card>
  )
}

