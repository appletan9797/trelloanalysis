export const chartDataForUsers =[
    {
        "chartID":1,
        "chartType":"Stacked Bar Chart",
        "chartName":"Monthly Cards Created (Grouped By Label)",
        "chartImage":"https://chartio.com/assets/9bfb20/tutorials/charts/stacked-bar-charts/073137bf11f1c2226f68c3188128e28d66115622dcdecc9bc208a6d4117f53e8/stacked-bar-example-1.png",
        "chartDetails":{
            "chartMainName":"Monthly Created Card",
            "chartSubName":"Group by Label",
            "chartFilters":{
                "status":"Done",
                "label":"",
                "from":"",
                "to":"2021-11-03"
            },
        },
        "apiUrl":'http://localhost:3000/api/reports/chart?'
    },
    {
        "chartID":2,
        "chartType":"Bar Chart",
        "chartName":"Monthly Completed Tasks",
        "chartImage":"https://chartio.com/assets/9bfb20/tutorials/charts/stacked-bar-charts/073137bf11f1c2226f68c3188128e28d66115622dcdecc9bc208a6d4117f53e8/stacked-bar-example-1.png",
        "chartDetails":{
            "chartMainName":"Monthly Completed Tasks",
            "chartSubName":"Group by Label",
            "chartFilters":{
                "from":"",
                "to":""
            },
        },
        "apiUrl":'http://localhost:3000/api/reports/chartMonthlyCompletedCards?'
    },
    {
        "chartID":4,
        "chartType":"Bar Chart",
        "chartName":"Cycle Time for Monthly Completed Cards",
        "chartImage":"https://chartio.com/assets/9bfb20/tutorials/charts/stacked-bar-charts/073137bf11f1c2226f68c3188128e28d66115622dcdecc9bc208a6d4117f53e8/stacked-bar-example-1.png",
        "chartDetails":{
            "chartMainName":"Cycle Time for Monthly Completed Cards",
            "chartSubName":"By each member",
            "chartFilters":{
                "from":"",
                "to":""
            },
        },
        "apiUrl":'http://localhost:3000/api/reports/chartCycleTime?'
    },
];
