import React from "react";

const Membership = () => {
  const datas = [
    {
      id: "001",
      title: "Titanium",
      price: "Rs. 1,00,000/-",
      item1: "100 Service (1 Hr. Each)",
      item2: " Validity: 12 Months",
    },
    {
      id: "002",
      title: "Platinum",
      price: "Rs. 50,000/-",
      item1: "36 Service (1 Hr. Each)",
      item2: " Validity: 8 Months",
    },
    {
      id: "003",
      title: "Gold",
      price: "Rs. 36,000/-",
      item1: "25 Service (1 Hr. Each)",
      item2: " Validity: 6 Months",
    },
    {
      id: "004",
      title: "Crown Silver",
      price: "Rs. 20,000/-",
      item1: "14 Service (1 Hr. Each)",
      item2: " Validity: 6 Months",
    },
    {
      id: "005",
      title: "Sliver Pro",
      price: "Rs. 15,000/-",
      item1: "10 Service (1 Hr. Each)",
      item2: " Validity: 6 Months",
    },
    {
      id: "001",
      title: "Silver",
      price: "Rs. 10,000/-",
      item1: "6 Service (1 Hr. Each)",
      item2: " Validity: 4 Months",
    },
  ];
  return (
    <div>
      <section className="py-6   text-black ">
        <div className="container mx-auto p-4 sm:p-10">
          <div className="mb-16 space-y-4 text-center">
            <h1 className="text-4xl font-semibold capitalize leading-tight">
              MEMBERSHIP PLAN
            </h1>
            <p className="px-4 sm:px-8 lg:px-24">
              Sunt suscipit eaque qui iure unde labore numquam iusto alias
              explicabo, pariatur ipsam, cupiditate aliquid modi?
            </p>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
            {datas?.map((data) => (
              <div
                key={data.id}
                className="relative z-0 flex flex-col items-center bg-white p-8 border border-primary rounded-md"
              >
                <span className="absolute top-0 px-6 pt-1 pb-2 font-bold rounded-b-lg bg-primary text-white">
                  {data.title}
                </span>
                <p className="my-6 text-4xl font-bold text-primary">
                  {data.price}
                </p>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-secondary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                    <span className="text-secondary font-bold text-xl">
                      {data.item1}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-secondary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                    <span className="text-secondary font-bold text-xl">
                      {data.item2}
                    </span>
                  </li>
                </ul>
                <a href="#appointment" className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 border-primary">
                  Subscribe
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
