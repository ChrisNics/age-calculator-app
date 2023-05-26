import Image from 'next/image';

const Line = ({ handleSubmit }) => {
  return (
    <div className="desktop:items-end flex flex-col items-center">
      <div
        className="bg-primary-purple z-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full transition-all duration-200 hover:bg-black"
        onClick={handleSubmit}>
        <Image src="/icon-arrow.svg" width={30} height={30} alt="Picture of the author" />
      </div>
      <div className="-mt-8 h-[1px] w-full bg-gray-300"></div>
    </div>
  );
};

export default Line;
