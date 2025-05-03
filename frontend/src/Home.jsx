import NavBar from "./components/NavBar";
import Tree from "./components/Tree";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen justify-items-stretch relative">
        <div className="absolute inset-0 bg-combo-gradient -z-10"></div> {/* Fixed background */}
        <NavBar />
        <div className="flex flex-col-reverse gap-10 sm:gap-0 sm:flex-row h-auto mt-11 text-white w-4xl">
          <div className="flex flex-col justify-center gap-6 w-full p-5 my-10 mx-auto sm:h-96 sm:w-1/2 sm:p-5 bg-gray-900 rounded-[30px]">
            <h1 className="text-3xl sm:text-5xl font-bold font-Outfit bg-text-gradient inline-block text-transparent bg-clip-text py-5 hover:bg-hv-text-gradient cursor-default">
              Step into the future with <span className="font-Milonga">BioArtify</span>
            </h1>
            <p className="mt-3 text-xl opacity-85 w-inherit flex-wrap cursor-default">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              earum facere consequatur natus unde quam corrupti maiores
              exercitationem et perspiciatis. Numquam est, voluptatem natus
              saepe ipsam iusto voluptatibus voluptate animi.
            </p>
            <button className="mt-7 px-5 h-10 w-max bg-teal-500 font-Poetsen_One rounded-[30px] text-xl tracking-wide hover:text-teal-500 hover:bg-white">
              Get Started
            </button>
          </div>
          <div className="flex relative justify-center w-full p-5 h-auto mx-auto sm:w-1/3">
            <Tree />
          </div>
        </div>

        {/*<div className="relative flex h-auto items-center mt-28">
          <div className="flex justify-center left-0 right-0 h-48 gap-6 p-5 my-10 sm:h-96 sm:w-1/2 sm:p-5 bg-gray-900 rounded-[30px]"></div>
          <div className="ml-auto h-[650px] mt-40 w-1/3 bg-radial-grad shadow-lg">
          </div>  
        </div>*/}

        <div className="relative flex h-auto items-center mt-52">
          <div style={{ backgroundColor: 'rgba(7, 5, 17, 0.6)' }} className="absolute items-center justify-center left-0 right-0 top-28 h-48 text-white p-5 bg-opacity-30 rounded-[30px] sm:h-96">
            <h1 className="font-Outfit text-center font-bold text-4xl text- ">Contact Us Here</h1>
          </div>
          <div className="ml-auto h-[650px] mt-40 w-1/3 bg-radial-grad shadow-lg"></div>
        </div>    

        <div className="flex flex-col h-auto mt-0 justify-center items-center left-0 right-0 gap-6 w-full p-5 my-10 mx-auto sm:h-96 sm:w-1/2 sm:p-5 bg-gray-900 rounded-[30px]">
          <div className="flex flex-col items-center h-fit w-fit mt-10 ">
            <h3 className="font-Roboto font-semibold text-white text-xl border border-text-gradient pt-2 px-5 pb-2 rounded-[18px] ">Enter Prompt</h3>
            <button className="mt-7 px-5 h-10 w-max bg-teal-500 font-Poetsen_One rounded-[30px] text-xl text-white tracking-wide hover:text-teal-500 hover:bg-white">
              Create
            </button>
          </div>
          <div className="flex h-auto justify-center gap-6 w-full p-5 my-10 mx-auto sm:h-96 sm:w-1/2 sm:p-5 bg-zinc-500 rounded-[30px]"></div>
          <div className="flex h-auto w-full">
            <button className="px-5 h-10 w-max border-white font-Poetsen_One rounded-[30px] text-lg text-white tracking-wide hover:text-teal-500">
              Regenerate
            </button>
          </div>
        </div>        

      </div>
    </div>
  );
};

export default Home;
