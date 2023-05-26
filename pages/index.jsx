import Input from '@/components/Input';
import Line from '@/components/Line';
import Results from '@/components/Results';
import { useForm, isNotEmpty } from '@mantine/form';
import { useCallback } from 'react';
import { useState, useEffect } from 'react';

const dates = [
  { label: 'Day', placeholder: '24', minLength: '1', maxLength: '2' },
  { label: 'Month', placeholder: '09', minLength: '1', maxLength: '2' },
  { label: 'Year', placeholder: '1984', minLength: '4', maxLength: '4' }
];

const getAge = ({ day, month, year }) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
  const currentYear = currentDate.getFullYear();

  let ageYear = currentYear - year;
  let ageMonth = currentMonth - month;
  let ageDay = currentDay - day;

  if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
    ageYear--;
    ageMonth += 12;
  }

  if (ageDay < 0) {
    const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const lastMonthDays = new Date(currentYear, lastMonth, 0).getDate();
    ageDay += lastMonthDays;
    ageMonth--;
  }

  return { day: ageDay, month: ageMonth, year: ageYear };
};

const Home = () => {
  const [results, setResults] = useState({ day: '--', month: '--', year: '--' });
  const form = useForm({
    initialValues: {
      day: '',
      month: '',
      year: ''
    },

    validate: {
      day: (value, values) => {
        if (!value) return 'This field is required';
        if (isNaN(value) || parseInt(value, 10) < 1 || parseInt(value, 10) > 31) {
          return 'Invalid day';
        }

        const monthValue = parseInt(values.month, 10);
        const yearValue = parseInt(values.year, 10);

        if (monthValue && yearValue) {
          const lastDayOfMonth = new Date(yearValue, monthValue, 0).getDate();
          if (parseInt(value, 10) > lastDayOfMonth) {
            return 'Invalid day for selected month';
          }

          if (monthValue === 2) {
            const isLeapYear =
              (yearValue % 4 === 0 && yearValue % 100 !== 0) || yearValue % 400 === 0;
            if (!isLeapYear && parseInt(value, 10) === 29) {
              return 'Invalid day for selected month and year (not a leap year)';
            }
          }
        }
      },
      month: (value) => {
        if (!value) return 'This field is required';
        if (isNaN(value) || parseInt(value, 10) < 1 || parseInt(value, 10) > 12) {
          return 'Invalid month';
        }
      },
      year: (value) => {
        if (!value) return 'This field is required';
        const currentYear = new Date().getFullYear();
        const inputYear = parseInt(value, 10);
        if (isNaN(value) || inputYear < 1900 || inputYear > currentYear) {
          return 'Invalid year';
        }
      }
    }
  });

  const hasErrors = Object.keys(form.errors).length !== 0;

  const handleSubmit = useCallback(
    form.onSubmit((values) => {
      const currentAge = getAge(values);
      setResults(currentAge);
    }),
    [form.values]
  );

  useEffect(() => {
    if (hasErrors) setResults({ day: '--', month: '--', year: '--' });
  }, [form.errors]);

  return (
    <section className="bg-neutral-off-white">
      <div className="container mx-auto flex min-h-screen items-center justify-center">
        <div className="bg-neutral-white desktop:gap-y-5 flex w-full max-w-xl flex-col gap-y-10 rounded-2xl rounded-br-[55px] p-5">
          <div className="desktop:text-2xl flex max-w-md gap-x-5">
            {dates.map((date) => (
              <Input
                key={date.label}
                label={date.label}
                placeholder={date.placeholder}
                error={form.errors[`${date.label.toLowerCase()}`]}
                maxLength={date.maxLength}
                minLength={date.minLength}
                {...form.getInputProps(`${date.label.toLowerCase()}`)}
              />
            ))}
          </div>
          <Line handleSubmit={handleSubmit} />
          <Results results={results} />
        </div>
      </div>
    </section>
  );
};

export default Home;
