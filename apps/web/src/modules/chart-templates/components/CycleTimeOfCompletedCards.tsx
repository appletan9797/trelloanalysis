import { AgChartsReact } from 'ag-charts-react';
import { useEffect, useState } from 'react';


export const CycleTimeOfCompletedCards = ({ result, labels, chartinfo }) => {
  const [loading, setLoading] = useState(true);
  const [options, setOption] = useState(null);
 
  useEffect(() => {
    setDataForChart(result);
  }, [result]);

  const setDataForChart = result => {
    setOption({
      title: {
        text: chartinfo.chartDetails.chartMainName,
      },
      subtitle: {
        text: chartinfo.chartDetails.chartSubName,
      },
      data: result,
      series:[{
        type: 'column',
        xKey: 'member',
        yKeys: ['avgtimespent'],
        tooltip: {
          renderer: (params) => {
            let hours = Math.floor(params.yValue/1000/60/60)
            return {
              content: hours < 24? hours+"h" : Math.floor(hours/24)+"d "+ Math.floor(hours%24)+"h "
            };
          },
        },
      }],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          title: {
            text: 'Members',
            enabled: false,
          },
        },
        {
          type: 'number',
          position: 'left',
          tick: { count: 10 },
          title: {
            text: 'Cycle Time',
            enabled: true,
          },
          label: {
            formatter: (params) => {
              let hours = Math.floor(params.value/1000/60/60)
              return hours<24 ? hours+"h" : Math.floor(hours/24)+"d "+ Math.floor(hours%24)+"h "
            },
          }
        },
      ],
      legend: {
        position: 'bottom',
      }
    });

    setLoading(false);
  };

  return (
    <div>
      <div id="Container">
      {loading ? <div>Loading...</div> : <AgChartsReact options={options} />}
      </div>
    </div>
  );
};
