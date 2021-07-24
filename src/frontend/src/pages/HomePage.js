import CarouselComponent from "../components/test/CarouselComponent"

export default function HomePage() {

    return (
        <div className ="relative">
            <div class="container mx-auto xl:px-40">
                <div className = "flex item-center justify-center h-96 w-auto hidden md:block" style = {{backgroundImage: 'url("/backgroundHeader.jpg")'}}>
                    <div class="flex items-center justify-center w-full h-full" style={{position: 'relative'}}>
                        <div class="text-center bg-white rounded-xl px-8 py-6 bg-gray-300 " style={{position: 'absolute', left: '5rem'}}>
                            <div className= "text-3xl font-bold m-1 text-white">Learn to day</div>
                            <div className= "text-3xl font-bold m-1 text-white">Earn tomorrow</div>
                            <div class="bg-white flex items-center rounded-full shadow-xl">
                                <input class="rounded-full w-full py-4 px-10 text-gray-700 leading-tight focus:outline-none m-1" style={{width: '300px'}} id="search" type="text" placeholder="Search"/>
                            </div>

                </div>
                </div>
            </div>
            <div class="bg-white flex items-center rounded-full shadow-xl block md:hidden m-2">
                <input class="rounded-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"/>
            </div>
            <div className = "text-3xl text-center bg-blue-700 text-white py-3 font-extrabold shadow-xl">WE ARE HERE TO HELP YOU REACH YOUR GOALS</div>

            <div class="grid sm:grid-cols-1 lg:grid-cols-3">
              <div class="each m-6">
                <img class=" rounded-xl shadow-xl w-full" src="https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg" alt="" />
                <div className = "text-xl text-center font-extrabold p-3">LEARN EVERYWHERE</div>
              </div>

              <div class="each m-6">
                <img class=" rounded-xl shadow-xl w-full" src="https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg" alt="" />
                <div className = "text-xl text-center font-extrabold p-3">ONLINE QUIZZES</div>
              </div>

              <div class="each m-6">
                <img class=" rounded-xl shadow-xl w-full" src="https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg" alt="" />
                <div className = "text-xl text-center font-extrabold p-3">GET CERTIFICATE</div> 
              </div>
            </div>
            <div className = "text-3xl text-center bg-blue-700 text-white py-3 hidden md:block font-extrabold shadow-xl">TOP COURSES</div>         
            <CarouselComponent name="PROGRAMMING"></CarouselComponent>
            <CarouselComponent name="ART"></CarouselComponent>
            <CarouselComponent name="SCIENCE"></CarouselComponent>
        </div>
        </div>


)
}