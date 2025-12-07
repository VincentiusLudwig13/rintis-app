'use client';

import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';
import Card from '@/components/Card';
import { StyledFlex } from '@/components/common/styledFlexDiv/StyledFlexDiv';
import { StyledFilledInput } from '@/components/input/Input.styled';
import { StyledLabel } from '@/components/input/InputLabel.styled';
import { ModalCalendar } from '@/components/ModalCalendar';
import Typography from '@/components/Typography';
import { lightPalette } from '@/core/theme/styleGuide/color';
import { submitTransaksiAction } from '@/lib/feature/transaksi/transaksi.action';
import { CheckIcon, ChevronLeft } from 'lucide-react';
import { fetchAllTransaksi } from '@/lib/feature/transaksi/transaksi.data';
import { Transaction } from '@/types/TransactionTypes';
import Link from 'next/link';

export default function IncomePage() {
  const [state, formAction, isPending] = useActionState(
    submitTransaksiAction,
    undefined
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [transaksi, setTransaksi] = useState<Transaction[]>([]);

  useEffect(() => {
    const loadTransaction = async () => {
      try {
        const data = await fetchAllTransaksi();
        setTransaksi(data || []);
      } catch (error) {
        console.error('Failed to load transaksi:', error);
      }
    };
    loadTransaction();
  }, []);

  useEffect(() => {
    if (state?.success) {
      const loadTransaction = async () => {
        try {
          const data = await fetchAllTransaksi();
          setTransaksi(data || []);
        } catch (error) {
          console.error('Failed to load transaksi:', error);
        }
      };
      loadTransaction();
    }
  }, [state?.success]);

  const incomeTransaksi = transaksi.filter((item) => item.type === 1);
  incomeTransaksi.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  useEffect(() => {
    if (state?.message) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state?.message, state?.success]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const dateString = selectedDate
      ? `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`
      : '';
    formData.set('date', dateString);
    formAction(formData);
  };

  return (
    <StyledFlex
      direction={'column'}
      height={'100%'}
      align={'start'}
      justify={'start'}
      gap={10}
    >
      <StyledFlex width={'100%'} justify={'space-between'} align="center">
        <StyledFlex gap={5} align="center">
          <Link href="/dashboard">
            <ChevronLeft size={24} color={lightPalette.text.primary} />
          </Link>
          <Typography
            variant={'bodyMedium'}
            weight="bold"
            color={lightPalette.text.primary}
          >
            Catat Pemasukan
          </Typography>
        </StyledFlex>
        <ModalCalendar
          onDateSelect={handleDateSelect}
          defaultDate={selectedDate}
        />
      </StyledFlex>

      <Typography variant={'caption'} weight={'regular'}>
        Wah, hari ini ramai ya? Ayo catat pendapatanmu supaya tidak lupa!
      </Typography>

      <form onSubmit={handleFormSubmit} className="w-full">
        <input type="hidden" name="type" value="1" />

        <Card type="outlined" className="w-full">
          <StyledFlex justify="space-between" gap={10} className="w-full">
            <div className="flex-1 space-y-2">
              <StyledLabel htmlFor="income-description">Deskripsi</StyledLabel>
              <StyledFilledInput
                id="income-description"
                name="desc"
                placeholder="Kasih rinciannya ya!"
                required
              />
              {state?.errors?.desc && (
                <Typography variant={'caption'} color="red">
                  {state.errors.desc[0]}
                </Typography>
              )}
            </div>

            <div className="flex-1 space-y-2">
              <StyledLabel htmlFor="income-amount">
                Total Pendapatanmu
              </StyledLabel>
              <StyledFlex gap={10} align="center">
                <StyledFilledInput
                  id="income-amount"
                  name="amount"
                  placeholder="Rp"
                  type="number"
                  min="0"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center w-6 h-6 rounded-full p-1 shrink-0"
                  style={{ backgroundColor: lightPalette.primary.light }}
                  disabled={isPending}
                >
                  <CheckIcon size={16} color={lightPalette.text.inverse} />
                </button>
              </StyledFlex>
              {state?.errors?.amount && (
                <Typography variant={'caption'} color="red">
                  {state.errors.amount[0]}
                </Typography>
              )}
            </div>
          </StyledFlex>
        </Card>
      </form>

      <Typography variant={'bodyMedium'} weight={'regular'}>
        Riwayat
      </Typography>

      {incomeTransaksi.length === 0 ? (
        <Typography variant="caption" color={lightPalette.text.secondary}>
          Belum ada pemasukan yang dicatat.
        </Typography>
      ) : (
        incomeTransaksi.map((item) => (
          <Card key={item.id} type="outlined" className="w-full">
            <StyledFlex justify="space-between">
              <StyledFlex direction="column" gap={4} justify="space-between">
                <Typography
                  variant="bodySmall"
                  weight="bold"
                  color={lightPalette.text.primary}
                >
                  {item.name}
                </Typography>
              </StyledFlex>
              <StyledFlex
                direction="column"
                gap={4}
                justify="space-between"
                align="end"
              >
                <Typography
                  variant="bodyLarge"
                  weight="regular"
                  color={lightPalette.success.main}
                >
                  Rp {item.amount}
                </Typography>
                <Typography
                  variant="pixie"
                  weight="regular"
                  color={lightPalette.text.secondary}
                >
                  {new Date(item.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </Typography>
              </StyledFlex>
            </StyledFlex>
          </Card>
        ))
      )}
    </StyledFlex>
  );
}
