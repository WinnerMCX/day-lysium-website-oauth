// import { auth } from '@/auth';
import Balance from '../components/Balance';

export default async function page() {
  // const balancePromise = fetch('http://localhost:3000/api/wallet/balance', {
  //   credentials: 'include',
  // }).then((res) => res.json());

  return (
    <>
      <div>profile</div>
      {/* <Balance balancePromise={balancePromise} /> */}
      <Balance />
    </>
  );
}
