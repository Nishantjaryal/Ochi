
const landingpage = () => {


  return (<div data-scroll data-scroll-section data-scroll-speed="-.8 ">



    <div  className="w-full min-h-[55vh]  pt-10 px-5 pr-5 font-['Founder Grotesk']  sm:min-h-[67vh]" >
      <div className="textstructure leading-negative">
        <div className="masker">
            <h1 className="uppercase text-[14vw] leading-none font-bold tracking-[-0.05em] is-inview md:text-[10vw] lg:text-[8vw] ">We Create</h1>
        </div>
        <div className="masker flex items-center justify-start flex-wrap gap-2 overflow-hidden pb-2 ">
            <div className=" h-[30vw] w-[55vw] rounded-md bg-green-500 relative top-2 sm:h-[16vh] sm:w-[25vh] overflow-hidden" >
            <img  className="h-full w-full " src="/presentation.png "></img>

            </div>
            <h1 className="uppercase  leading-none font-bold tracking-[-0.05em] is-inview text-[15vw] md:text-[10vw] lg:text-[8vw]">Eye opening</h1>
        </div>
        <div className="masker">
            <h1 className="uppercase text-[14vw] leading-none font-bold tracking-[-0.05em] is-inview md:text-[10vw] lg:text-[8vw]">presentation</h1>
        </div>
      </div>
    </div>


    


    <div className="border-t-[1.5px] border-zinc-800 mt-[0px] flex flex-col gap-2 uppercase py-7 flex-wrap px-[5vw] md:flex-row md:justify-between md:items-center font-semibold sm:font-[400] " >
    <h4>For public and private companies</h4>
    <h4>From the first pitch to IPO</h4>
    <h4 className="p-1 px-3 border-[1px] border-zinc-800 rounded-full cursor-pointer hover:bg-zinc-800 hover:text-zinc-50 w-fit">Start the project</h4>
    </div>
    </div>
  )
}

export default landingpage
