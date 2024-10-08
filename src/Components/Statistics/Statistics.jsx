import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

import { useLoaderData } from "react-router-dom";
import { getDonations } from "../Utilities/localStorage";
import { Helmet } from "react-helmet";

const Statistics = () => {
  const donationData = useLoaderData();
  const donations = donationData.donations;
  console.log(donations);
  const [donated, setDonated] = useState([]);
  useEffect(() => {
    const donateTotal = getDonations();
    setDonated(donateTotal);
  }, []);       

  const yourDonations = donated.length;
  const totalDonations = donations.length;

  const data = [
    ['donated', 'donations total'],
    ['Your donations', yourDonations],
    ['Total donations', totalDonations - yourDonations],
  ]

  return (
    <>
    <Helmet>
      <title>Statistics | Donation Campaign</title>
    </Helmet>
      <section className="my-32">
        <div className="container mx-auto px-5">
          <div>
          <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"400px"}
          />
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
