import { staticPortfolio } from '../../constants';

export default function Blurb() {
  return (
    <div className='z-10 absolute left-24 top-[330px] bg-tertiary px-7 py-10 rounded-3xl md:block hidden'>
      <p className='text-lg'>
        If you would prefer to visit my static portfolio, you can do so{' '}
        <a
          target={'_blank'}
          href={staticPortfolio}
          className='text-[#915eff] hover:underline underline-offset-2 cursor-pointer'
        >
          here
        </a>
        !
      </p>
    </div>
  );
}
