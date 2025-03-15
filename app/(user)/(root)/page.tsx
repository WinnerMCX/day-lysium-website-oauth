// import Header from './components/Header';

export default async function Home() {
  // const user = await fetch('http://localhost:4000/api/user/getUser', {
  //   credentials: 'include',
  // }).then((res) => res.json());
  // console.log(user);

  return (
    <>
      <div className="my-70 flex flex-col items-center justify-center gap-3">
        {/* <img src="/daylysium_logo.png" alt="Logo" className="w-28 h-28" /> */}
        <video
          src="/daylysium_animated.mov"
          autoPlay
          loop
          muted
          className="w-64 h-64 rounded-3xl"
        ></video>
        <h1 className="text-white text-4xl">Добро пожаловать!</h1>
        {/* <h1 className="text-white text-2xl">
          Здесь выживают только сильнейшие...
        </h1> */}
      </div>
    </>
  );
}
