import NavBar from './components/NavBar';

const Home = () => {
  return (
    <div>
      <div className='flex flex-col min-h-screen bg-combo-gradient justify-items-stretch'>
      
      <NavBar />
      <div className='h-96 mt-11 text-white w-4xl'>
        <div className='h-80 ml-14 w-fit p-5 bg-gray-900 rounded-[30px] flex-wrap'>
            <h1 className='text-4xl font-bold font-Outfit bg-text-gradient inline-block text-transparent bg-clip-text'>Step into the future with BioArtify.</h1>
            <p className='mt-12 text-lg opacity-85 w-96 flex-wrap'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button className='mt-7 px-5 h-10 w-max bg-teal-500 font-Poetsen_One rounded-[30px] text-xl'>Get Started</button>
        </div>
      </div>
      {/* <div className='flex flex-col items-end'></div> */}
      {/* <div className='flex bg-radial-grad h-48 w-96 justify-self-end'>
      </div> */}
    </div>
    </div>
  )
}

export default Home;
