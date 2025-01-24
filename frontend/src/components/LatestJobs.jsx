import React from 'react'
import JobCards from './JobCards';
import store from '@/redux/store';
import { useSelector } from 'react-redux';

const LatestJobs = () => {

  const {allJobs} = useSelector(store => store.job);
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top</span> Job Openings
      </h2>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length <=0 ? <span>No Jobs Available</span> : allJobs?.slice(0,6).map((job) => (
          <JobCards key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default LatestJobs