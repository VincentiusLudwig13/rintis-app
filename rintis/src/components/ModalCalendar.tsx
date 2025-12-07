import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import Typography from './Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { Calendar } from './ui/calendar';

interface ModalCalendarProps {
  onDateSelect?: (date: Date | undefined) => void;
  defaultDate?: Date;
}

export const ModalCalendar = ({
  onDateSelect,
  defaultDate,
}: ModalCalendarProps) => {
  const [date, setDate] = useState<Date | undefined>(defaultDate || new Date());
  const [open, setOpen] = useState(false);
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    onDateSelect?.(selectedDate);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Typography
            variant="pixie"
            weight="bold"
            color={lightPalette.primary.main}
          >
            {date?.toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </Typography>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[calc(100%-2.5rem)] p-4">
        <DialogHeader>
          <DialogTitle>
            <Typography variant={'bodySmall'} color={lightPalette.text.primary}>
              Pilih Tanggal
            </Typography>
          </DialogTitle>
        </DialogHeader>
        <div className="flex justify-center w-full py-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            className="[--cell-size:--spacing(11)] md:[--cell-size:--spacing(13)] w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
