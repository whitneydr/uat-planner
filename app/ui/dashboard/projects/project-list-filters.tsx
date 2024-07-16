'use client'

import { useEffect, useRef, useState } from "react";
import ProjectList from "./project-list";
import { listenerCount } from "process";

const ProjectListFilters = ({children}: any) => {
    const [listFilter, setListFilter] = useState('all');
    console.log(listFilter);


    return (
        <main>
            <div className="test-filters">
                <a>All</a>
                <a onClick={() => {setListFilter('to-do')}}>Backlog</a>
                <a onClick={() => {setListFilter('in-progress')}}>In progress</a>
                <a onClick={() => {setListFilter('complete')}}>Complete</a>
            </div>
            
                {children}
                    {/* <ProjectList filterStatus={listFilter} /> */}
             
            

        </main>
    )
}

export default ProjectListFilters;