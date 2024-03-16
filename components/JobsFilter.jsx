"use client";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";

import { FiMapPin, FiSearch } from "react-icons/fi";

const JobsFilter = ({ handleInputChange, query, city, handleCityChange }) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <h1 className="mb-4 font-medium font-sans text-lg ">
        Search by keywords
      </h1>
      {/* search jobs and Location */}
      <form>
        <div className="flex flex-col">
          <div className="flex md:rounded-s-md shadow-sm py-4 ring-1 ring-inset   border rounded-lg text-black bg-white mb-8 ">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Job title,keywords,or Company"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-black  focus:right-0 sm:text-sm  sm:leading-6 input outline-none"
              onChange={handleInputChange}
              value={query}
            />

            <FiSearch className="absolute mt-0.5 ml-2  " />
          </div>
          <h1 className="font-medium mb-4 font-sans text-lg">Location</h1>
          <div className="flex md:rounded-s-md shadow-sm py-4 mb-4 ring-1 ring-inset   border rounded-lg text-black bg-white ">
            <input
              type="text"
              name="title"
              id="title"
              value={city}
              onChange={handleCityChange}
              placeholder="City or postcode"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-black  focus:right-0 sm:text-sm  sm:leading-6 input outline-none"
            />
            <FiMapPin className="absolute mt-0.5 ml-2  " />
          </div>
        </div>
      </form>
      <div className="mb-4">
        <h1 className="font-medium mb-4 font-sans text-lg">Category</h1>
        <FormControl fullWidth>
          <InputLabel className="" id="demo-simple-select-label">
            Choose a Category
          </InputLabel>
          <Select
            className="mt-1 bg-white border md:rounded-s-md border-[#9CC1FC]"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Residential</MenuItem>
            <MenuItem value={20}>Commericial</MenuItem>
            <MenuItem value={30}>Industrial</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="mb-4">
        <h1 className="font-medium text-lg mb-4 font-sans">Job type</h1>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="Freelancer" />
          <FormControlLabel control={<Switch />} label="Full Time" />
          <FormControlLabel control={<Switch />} label="Part Time" />
          <FormControlLabel control={<Switch />} label="Temporary" />
        </FormGroup>
      </div>
      <div className="mb-4">
        <h1 className="font-medium text-lg mb-4 font-sans">Date Posted</h1>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="lasthour"
              control={<Radio />}
              label="Last hour"
            />
            <FormControlLabel
              value="lasthour"
              control={<Radio />}
              label="Last hour"
            />
            <FormControlLabel
              value="lasthour"
              control={<Radio />}
              label="Last 24 hour"
            />
            <FormControlLabel
              value="lasthour"
              control={<Radio />}
              label="Last 7 Days"
            />
            <FormControlLabel
              value="lasthour"
              control={<Radio />}
              label="Last 14 Days"
            />
            <FormControlLabel
              value="lasthour"
              control={<Radio />}
              label="Last 30 Days"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="mb-4">
        <h1 className="font-medium text-lg mb-4 font-sans">Experience Level</h1>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="Fresh" />
          <FormControlLabel control={<Switch />} label="1 Year" />
          <FormControlLabel control={<Switch />} label="2 Year" />
          <FormControlLabel control={<Switch />} label="3 Year" />
          <FormControlLabel control={<Switch />} label="4 Year" />
        </FormGroup>
      </div>
      <div className="">
        <h1 className="font-medium text-lg mb-4 font-sans">Tags</h1>
        <div className="grid gap-x-8 gap-y-4 grid-cols-3">
          <div className="grid border bg-white rounded-lg place-content-center p-2 text-xs">
            App
          </div>
          <div className="grid border bg-white rounded-lg place-content-center p-2 text-xs">
            Administrative
          </div>
          <div className="grid border bg-white rounded-lg place-content-center p-2 text-xs">
            Android
          </div>
          <div className="grid border bg-white rounded-lg place-content-center p-2 text-xs">
            Wordpress
          </div>
          <div className="grid border bg-white rounded-lg place-content-center p-2 text-xs">
            Design
          </div>
          <div className="grid border bg-white rounded-lg place-content-center p-2  text-xs">
            React
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsFilter;
