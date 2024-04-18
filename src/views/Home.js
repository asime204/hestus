import React, { useEffect, useState, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import Calendar from '../components/Calendar';
// import AnimeQuote from '../components/AnimeQuote';
// import JokeQuote from '../components/JokeQuote';

export default function Home(props) {
    // const { totalIncome, totalBills, paychecks, bills } = props;
    // const chartRef = useRef();
    // const [chartData, setChartData] = useState({});
    // let myChart = useRef();
    // Chart.defaults.color = '#FFFFFF';

    // useEffect(() => {
    //     setChartData({
    //         labels: ['Income', 'Bills'],
    //         datasets: [
    //             {
    //                 label: 'Total Income vs Total Bills',
    //                 data: [totalIncome, totalBills],
    //                 backgroundColor: [
    //                     'rgba(75, 192, 192, 0.2)',
    //                     'rgba(255, 99, 132, 0.2)',
    //                 ],
    //                 borderColor: [
    //                     'rgba(75, 192, 192, 1)',
    //                     'rgba(255, 99, 132, 1)',
    //                 ],
    //                 borderWidth: 1,
    //             },
    //         ],
    //     });
    // }, [totalIncome, totalBills]);

    // useEffect(() => {
    //     if (chartRef.current && chartData.datasets) {
    //         if (myChart.current) {
    //             myChart.current.destroy();
    //         }
    //         myChart.current = new Chart(chartRef.current, {
    //             type: 'bar',
    //             data: chartData,
    //         });
    //     }
    // }, [chartData, chartRef]);

    return (
        // <div className="feedcontainer">
        //     <div className="row">
        //         <div className="col-md-6 d-flex align-items-center pt-3 pb-3 px-5">
        //             <div className="unique-class-name-1">
        //                 <div className="card text-center col-md-12">
        //                     <div className="card-body">
        //                         <Calendar paychecks={paychecks} bills={bills} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-md-6">
        //             <div className="unique-class-name-2">
        //                 <div className="card text-center col-md-12">
        //                     <div className="card-body">
        //                         <h5 className="card-title">Budget</h5>
        //                         <canvas ref={chartRef}></canvas>
        //                         <a href="/budget" className="btn btn-primary" style={{ borderColor: "white" }}>Update</a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-md-6">
        //             <div className="unique-class-name-3">
        //                 <div className="card text-center">
        //                     <div className="card-body">
        //                         <i className="fa-solid fa-chart-column fa-2x"></i>
        //                         <h5 className="card-title">Quote of the Day</h5>
        //                         <AnimeQuote />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-md-6">
        //             <div className="unique-class-name-4">
        //                 <div className="card text-center">
        //                     <div className="card-body">
        //                         <i className="fa-regular fa-calendar-days fa-2x"></i>
        //                         <h5 className="card-title">Joke of the Day</h5>
        //                         <JokeQuote />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
                
                
        //     </div>
        // </div>

        <div>
            <p>HOME PAGE</p>
        </div>
    );
}