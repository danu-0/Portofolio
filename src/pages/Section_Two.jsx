import { fetchData } from '../db/api';
import { useEffect, useState } from 'react';


const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [projectList, setProjectList] = useState([]);

    const getData = async () => {
    const data = await fetchData("project")
    setProjectList(data)
  }


  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? projectList.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === projectList.length - 1 ? 0 : prevIndex + 1));
  };

    useEffect(() => {
    getData();
  },[])

  return (
    <div className="flex flex-col items-center justify-start h-screen py-4 bg-gray-100 ">
        <h1 className='flex w-full font-bold text-xl px-8 pb-8'>✨ Project List</h1>
      {/* Container Carousel */}
      <div className="flex overflow-hidden items-center w-11/12 relative h-full rounded-lg   mx-6">
        {projectList.map((project, index) => {
          // Hitung offset untuk setiap card
          const offset = (index - activeIndex) * 100; // 100 adalah jarak antara card
          const scale = index === activeIndex ? 1 : 0.9; // Scaling untuk card yang aktif dan tidak aktif
          const opacity = index === activeIndex ? 1 : 0.7; // Opacity untuk card yang tidak aktif

          return (
            <div
              key={project.id}
              className="absolute transition-all duration-300 ease-in-out h-full w-auto flex justify-center items-center"
              style={{
                transform: `translateX(${offset}%) scale(${scale})`,
                opacity: opacity,
                left: '5%', 
              }}
            >
              <div className="border border-grayC rounded-lg overflow-hidden w-[320px] h-fit md:w-96 md:h-auto">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 truncate">{project.title}</h2>
                  <p className="text-gray-700 mb-4 line-clamp-6">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-lightC inline-block pink bg-neutral-900 px-4 py-2 rounded-lg hover:bg-pink"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tombol Navigasi */}
      <div className="mt-8 flex space-x-4">
        <button
          onClick={handlePrev}
          className="flex items-center justify-center w-12 h-12"
        >
          <div className="triangle-left"></div>
        </button>
        <button
          onClick={handleNext}
          className="flex items-center justify-center w-12 h-12"
        >
          <div className="triangle-right"></div>
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;


// // import bg from '../assets/bg.jpeg' 
// import { useEffect, useState } from 'react';
// import { fetchData } from '../db/api';


// const ProjectCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [projectList, setProjectList] = useState([]);


//   const getData = async () => {
//     const data = await fetchData("project")
//     setProjectList(data)
//   }


//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? projectList.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex === projectList.length - 1 ? 1 : prevIndex + 1));
//   };

//   useEffect(() => {
//     getData();
//   },[])


//   return (
//     <div className="flex flex-col items-center justify-start h-auto py-4 bg-gray-100 ">
//         <h1 className='flex w-full font-bold text-xl px-8 pb-8'>✨ Project List</h1>
//       {/* Container Carousel */}
//       <div className="flex overflow-hidden items-center w-11/12 relative h-96 rounded-lg border-2 mx-6">
//         {projectList.map((project, index) => {
//           // Hitung offset untuk setiap card
//           const offset = (index - activeIndex) * 100; // 100 adalah jarak antara card
//           const scale = index === activeIndex ? 1 : 0.9; // Scaling untuk card yang aktif dan tidak aktif
//           const opacity = index === activeIndex ? 1 : 0.6; // Opacity untuk card yang tidak aktif

//           return (
//             <div
//               key={project.id}
//               className="absolute transition-all duration-300 ease-in-out"
//               style={{
//                 transform: `translateX(${offset}%) scale(${scale})`,
//                 opacity: opacity,
//                 left: '25%', 
//               }}
//             >
//               <div className="border border-grayC rounded-lg overflow-hidden w-64">
//                 {/* <img src={project.image} alt={project.title} className="w-full h-48 object-cover" /> */}
//                 <div className='w-full h-40 bg-pink'> halkhdcbu</div>
//                 <div className="p-4">
//                   <h2 className="text-xl font-bold mb-2">{project.title}</h2>
//                   <p className="text-gray-700 mb-4 truncate">{project.description}</p>
//                   <a
//                     href={project.link}
//                     className="text-lightC inline-block pink bg-neutral-900 px-4 py-2 rounded-lg hover:bg-pink"
//                   >
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Tombol Navigasi */}
//       <div className="mt-8 flex space-x-4">
//         <button
//           onClick={handlePrev}
//           className="flex items-center justify-center w-12 h-12"
//         >
//           <div className="triangle-left"></div>
//         </button>
//         <button
//           onClick={handleNext}
//           className="flex items-center justify-center w-12 h-12"
//         >
//           <div className="triangle-right"></div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCarousel;