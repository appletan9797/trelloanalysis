import { chartDataForUsers } from '../../../data/data-charts-of-user';
import { CycleTimeOfCompletedCards } from '../../chart-templates/components/CycleTimeOfCompletedCards';
import { MonthlyCreatedTasksGroupByLabel } from '../../chart-templates/components/MonthlyCreatedTasksGroupByLabel';
import { NavigationMenu } from '../../chart-templates/components/NavigationMenu';
import { reportApiService } from '../services/ReportApiService';

export const getServerSideProps = async context => {
    const { chartID } = context.query
    const charts = chartDataForUsers.filter(eachchart => 
        eachchart.chartID == chartID
    )
    const chart = charts[0]
    const { reportData: result, labels } = await reportApiService.getChart(chart);

    return {
        props: {
            result,
            labels,
            chart
        },
    };
};

export const MyChartDetails = ({result,labels,chart}) => {
    return (
        <div> 
        <NavigationMenu />
        {chart.chartID == 4 ? 
        <CycleTimeOfCompletedCards result={result} labels={labels} chartinfo={chart} /> :
        <MonthlyCreatedTasksGroupByLabel result={result} labels={labels} chartinfo={chart} />
        }
        </div>
    );
};
