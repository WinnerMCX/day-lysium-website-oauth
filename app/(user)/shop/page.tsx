// import Header from '../../components/HeaderOld';
// import PageInDevelopment from '../../components/PageInDevelopment';
import Image from 'next/image';
import Header from '../components/Header';
import ShopMain from './ShopMain';

export default async function Shop() {
  // const [balance, setBalance] = useState('...');

  // const fetchBalance = async () => {
  //   const response = await fetch('http://localhost:4000/api/user/getBalance', {
  //     credentials: 'include',
  //   });
  //   const data = await response.json();

  //   if (data) setBalance(data.balance);
  // };

  // fetchBalance();

  const url =
    process.env.NODE_ENV === 'production'
      ? '/api/user/getBalance'
      : 'http://localhost:4000/api/user/getBalance';

  const balance = await fetch(url, { credentials: 'include' });

  return (
    <>
      <Header />
      <ShopMain />
    </>
  );
}
