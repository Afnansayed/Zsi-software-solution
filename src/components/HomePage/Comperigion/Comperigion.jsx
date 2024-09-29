"use client";
import UsePublic from "@/hooks/usePublic/UsePublic";
import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Comperigion = () => {
  const [comperigionData, setComperigionData] = useState([]);
  const axiosPublic = UsePublic();
  useEffect(() => {
    try {
        axiosPublic.get("/api?collection=comperision").then((res) => {
        setComperigionData(res.data);
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  }, []);

  //console.log(comperigionData);
  return (
    <div className="bg-gradient-to-r from-sky-400 to-green-200 py-12">
      <div>
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Service Comperision chart
        </h2>

        {/* table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center  gap-2">
                <th className="text-lg">Feature</th>
                <th>Social Media Package</th>
                <th>SEO Package</th>
                <th>SEO & Social Media Package</th>
                <th>Silver Package</th>
                <th>Gold Package</th>
                <th>Premium Package</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {comperigionData.map((data) => (
                <tr
                  key={data._id}
                  className="text-3xl text-center border-b-2 border-[#fff]"
                >
                  <td className="text-center text-xl">{data?.feature}</td>

                  <td className="border-x-2 border-[#fff]">
                    {data?.social_media_package && (
                      <p className="text-green-600 w-[30%] mx-auto">
                        <IoCheckmarkDoneCircle />
                      </p>
                    )}
                    {!data?.social_media_package && (
                      <p className="text-red-500 w-[30%] mx-auto">
                        <RxCross2 />
                      </p>
                    )}
                  </td>
                  {/* col-3 */}
                  <td className="border-x-2 border-[#fff]">
                    {data?.seo_package && (
                      <p className="text-green-600 w-[30%] mx-auto">
                        <IoCheckmarkDoneCircle />
                      </p>
                    )}
                    {!data?.seo_package && (
                      <p className="text-red-500 w-[30%] mx-auto">
                        <RxCross2 />
                      </p>
                    )}
                  </td>
                  {/* col-4 */}
                  <td className="border-x-2 border-[#fff]">
                    {data?.seo_and_social_media_package && (
                      <p className="text-green-600 w-[30%] mx-auto">
                        <IoCheckmarkDoneCircle />
                      </p>
                    )}
                    {!data?.seo_and_social_media_package && (
                      <p className="text-red-500 w-[30%] mx-auto">
                        <RxCross2 />
                      </p>
                    )}
                  </td>
                  {/* col-5 */}

                  <td className="border-x-2 border-[#fff]">
                    {data?.silver_package && (
                      <p className="text-green-600 w-[30%] mx-auto">
                        <IoCheckmarkDoneCircle />
                      </p>
                    )}
                    {!data?.silver_package && (
                      <p className="text-red-500 w-[30%] mx-auto">
                        <RxCross2 />
                      </p>
                    )}
                  </td>
                  {/* col-6 */}
                  <td className="border-x-2 border-[#fff]">
                    {data?.gold_package && (
                      <p className="text-green-600 w-[30%] mx-auto">
                        <IoCheckmarkDoneCircle />
                      </p>
                    )}
                    {!data?.gold_package && (
                      <p className="text-red-500 w-[30%] mx-auto">
                        <RxCross2 />
                      </p>
                    )}
                  </td>
                  {/* col-7 */}
                  <td className="border-x-2 border-[#fff]">
                    {data?.premium_package && (
                      <p className="text-green-600 w-[30%] mx-auto">
                        <IoCheckmarkDoneCircle />
                      </p>
                    )}
                    {!data?.premium_package && (
                      <p className="text-red-500 w-[30%] mx-auto">
                        <RxCross2 />
                      </p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Comperigion;
