import NavBar from "./components/NavBar";
import Tree from "./components/Tree";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-combo-gradient justify-items-stretch">
        <NavBar />
        <div className="flex flex-col-reverse gap-10 sm:gap-0 sm:flex-row h-auto mt-11 text-white w-4xl">
          <div className="flex flex-col justify-center gap-6 w-full p-5 my-10 mx-auto sm:h-96 sm:w-1/2 sm:p-5 bg-gray-900 rounded-[30px]">
            <h1 className="text-3xl sm:text-5xl font-bold font-Outfit bg-text-gradient inline-block text-transparent bg-clip-text py-5 hover:bg-hv-text-gradient cursor-default">
              Step into the future with <span className="font-Milonga ">BioArtify</span>.
            </h1>
            <p className="mt-3 text-xl opacity-85 w-inherit flex-wrap cursor-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              earum facere consequatur natus unde quam corrupti maiores
              exercitationem et perspiciatis. Numquam est, voluptatem natus
              saepe ipsam iusto voluptatibus voluptate animi.
            </p>
            <button className="mt-7 px-5 h-10 w-max bg-teal-500 font-Poetsen_One rounded-[30px] text-xl le tracking-wide hover:text-teal-500 hover:bg-white">
              Get Started
            </button>
          </div>
          <div className="flex relative justify-center w-full p-5 h-auto mx-auto sm:w-1/3">
          <Tree />
          </div>
        </div>
        {/* <div className='flex flex-col items-end'></div> */}
        {/* <div className='flex bg-radial-grad h-48 w-96 justify-self-end'>
      </div> */}
      <div>

      </div>
      </div>
    </div>
  );
};

export default Home;
