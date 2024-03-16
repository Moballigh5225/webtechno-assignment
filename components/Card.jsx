import { SlBriefcase } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
const Card = ({ data }) => {
  return (
    <>
      <div className="p-8 w-full">
        <div className="flex justify-between border rounded-lg p-4">
          <div className="flex">
            <div className="mr-6 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#01579b"
                  d="M24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20C44,12.954,35.046,4,24,4z M24,15c-4.971,0-9,4.029-9,9c0,4.971,4.029,9,9,9c1.088,0,2.126-0.204,3.09-0.559l-1.31-2.096l3.574-2.234l6.131,9.809	c-1.173,0.959-2.367,1.681-3.574,2.234l-2.138-3.421C28.013,37.538,26.063,38,24,38c-7.732,0-14-6.268-14-14s6.268-14,14-14	s14,6.268,14,14c0,3.279-1.136,6.288-3.024,8.674l-2.922-4.675C32.654,26.793,33,25.439,33,24C33,19.029,28.971,15,24,15z M29.812,21.541l-5.272,6.406c-0.237,0.289-0.592,0.456-0.965,0.456c-0.015,0-0.03,0-0.046-0.001	c-0.389-0.014-0.75-0.209-0.975-0.527l-2.125-3.004c-0.398-0.563-0.265-1.344,0.299-1.742c0.562-0.398,1.343-0.267,1.742,0.299	l1.18,1.667l4.232-5.142c0.438-0.532,1.226-0.61,1.759-0.171C30.175,20.221,30.252,21.009,29.812,21.541z"
                ></path>
              </svg>
            </div>
            <div className="">
              <p className="mb-4 font-bold">{data.job_title}</p>
              <div className="flex mb-3 ">
                <div className="flex justify-center items-center ">
                  <div className="mr-2 ">
                    <SlBriefcase />
                  </div>
                  <div className="mr-6 text-[#B7B7B7]">Segment</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="mr-2">
                    <CiLocationOn />
                  </div>
                  <div className="mr-6 text-[#B7B7B7]">{data.location}</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="mr-2">
                    <CiClock2 />
                  </div>
                  <div className="mr-6 text-[#B7B7B7]">11 hours ago</div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="mr-1 ">
                    <MdOutlineAttachMoney />
                  </div>
                  <div className="text-[#B7B7B7]">
                    {data.min_salary || "price"} - {data.max_salary || "price"}{" "}
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className=" flex justify-center item-center  border rounded-full w-22 text-sm py-2 px-4 bg-[#DBE9F8] text-[#1967d2]">
                  {data.job_type || "Full Time"}
                </div>
                <div className="flex justify-center item-center  border rounded-full w-22 text-sm py-2 px-4 bg-[#DFF2E6] text-[#34a853]">
                  {data.exp_required || "private"}
                </div>
                <div className="flex justify-center item-center  border rounded-full w-22 text-sm py-2 px-4 bg-[#FEF2E0] text-[#f9ab00]">
                  Urgent
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <CiBookmark />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
