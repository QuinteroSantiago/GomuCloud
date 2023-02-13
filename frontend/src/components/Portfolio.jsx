import React, {useState, useEffect} from 'react';
import { getProjects } from '../services/ProjectsService';
import PortfolioItem from './PortfolioItem';


function Portfolio() {
   const [portfolio, updateProjects] = useState();

   useEffect(() => {
      const getData = async () => {
         try {
            const { data } = await getProjects()
            const processedData = Object.keys(data).map((key) => [Number(key), data[key]]);
            updateProjects(processedData);
         } catch (exc) {
            console.log(exc.message);
         }
      }
      getData();
   }, [])   


   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio?.map(project => {
                  return <PortfolioItem 
                     imgUrl={project.at(1).imgUrl}
                     title={project.at(1).title}
                     stack={project.at(1).stack}
                     link={project.at(1).link}
               />
            })}
         </div>
      </div>
   )
}

export default Portfolio;
