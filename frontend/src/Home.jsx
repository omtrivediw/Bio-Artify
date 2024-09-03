import NavBar from './components/NavBar';

const Home = () => {
  return (
    <div>
      <div className='flex flex-col min-h-screen bg-combo-gradient justify-items-stretch'>
      
      <NavBar />
      <div className='flex h-auto mt-11 text-white w-4xl'>
        <div className='h-80 mx-auto w-1/2 p-5 bg-gray-900 rounded-[30px]'>
            <h1 className='text-5xl font-bold font-Outfit bg-text-gradient inline-block text-transparent bg-clip-text'>Step into the future with BioArtify.</h1>
            <p className='mt-12 text-xl opacity-85 w-inherit flex-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, earum facere consequatur natus unde quam corrupti maiores exercitationem et perspiciatis. Numquam est, voluptatem natus saepe ipsam iusto voluptatibus voluptate animi.</p>
            <button className='mt-7 px-5 h-10 w-max bg-teal-500 font-Poetsen_One rounded-[30px] text-xl'>Get Started</button>
        </div>
        <div className='w-1/3 h-80'></div>
      </div>
      {/* <div className='flex flex-col items-end'></div> */}
      {/* <div className='flex bg-radial-grad h-48 w-96 justify-self-end'>
      </div> */}
    </div>
    </div>
  )
}

export default Home;
