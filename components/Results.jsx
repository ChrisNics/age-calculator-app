import ReusableHeading from './ReusableHeading';

const Results = ({ results }) => {
  const data = [
    { value: results.year, label: 'year' },
    { value: results.month, label: 'month' },
    { value: results.day, label: 'day' }
  ];

  return (
    <div className="desktop:text-7xl mt-5 flex flex-col gap-y-2 text-5xl font-extrabold">
      {data.map((item, index) => (
        <ReusableHeading key={index} value={item.value} label={item.label} />
      ))}
    </div>
  );
};

export default Results;
