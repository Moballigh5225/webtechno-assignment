"use client";
import { useEffect, useState } from "react";
import JobsFilter from "./JobsFilter";
import JobsList from "./JobsList";
import axios from "axios";
import Card from "./Card";

const MainContent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "https://learnkoodsapi.onrender.com/jobs_api/"
      );

      setJobs(response.data);
    } catch (error) {
      console.error("error message:", error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // filter job by title
  const filteredItems = jobs?.results?.filter(
    (job) => job.job_title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  console.log(filteredItems, "filtered");

  // filter by location

  // salary based filter

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // main functions

  const filteredData = (jobs, selected, query, city) => {
    let filteredJobs = jobs?.results;

    // filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }

    // category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ max_salary, min_salary, location }) =>
          parseInt(max_salary) <= parseInt(selected) || "number"
      );
    }
    console.log(filteredJobs, "filtered jobs");
    return filteredJobs?.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className="flex py-14 px-6">
      <div className="filter bg-[#F5F7FC] border rounded-lg py-8 px-4">
        <JobsFilter
          query={query}
          city={city}
          handleInputChange={handleInputChange}
          handleCityChange={handleCityChange}
        />
      </div>
      <div className="jobs">
        <JobsList result={result} />
      </div>
    </div>
  );
};

export default MainContent;
