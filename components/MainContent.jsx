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
  const [url, setUrl] = useState("https://learnkoods-task.onrender.com");

  // const url = "https://learnkoods-task.onrender.com";

  const axiosInstance = axios.create({
    baseURL: url,
  });
  axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

  const fetchData = async () => {
    const response = await axiosInstance.get("/job_api/");
    const data = response.data;
    console.log(data, "data");
    setJobs(data);
  };

  useEffect((e) => {
    fetchData();
  }, []);

  // // const handleNext = (e) => {
  // //   e.preventDefault();
  // //   setUrl(jobs.next);

  //   console.log(url, next);
  // };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // filter job by title
  const filteredItems = jobs?.results?.filter(
    (job) => job.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

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
