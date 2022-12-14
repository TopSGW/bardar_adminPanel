import { ChartType } from './dashboard.model';

const emailSentBarChart: ChartType = {
    chart: {
        height: 340,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '15%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    series: [{
        name: 'Series A',
        data: [0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0]
    }, {
        name: 'Series B',
        data: [0, 0, 0, 0,0, 0, 0, 0,0, 0, 0, 0]
    }, {
        name: 'Series C',
        data: [0, 0, 0, 0,0, 0, 0, 0,0, 0, 0, 0]
    }],
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    colors: ['#556ee6', '#f1b44c', '#34c38f'],
    legend: {
        position: 'bottom',
    },
    fill: {
        opacity: 1
    },
};

const monthlyEarningChart: ChartType = {
    chart: {
        height: 200,
        type: 'radialBar',
        offsetY: -10
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
                name: {
                    fontSize: '13px',
                    color: undefined,
                    offsetY: 60
                },
                value: {
                    offsetY: 22,
                    fontSize: '16px',
                    color: undefined,
                    formatter: (val) => {
                        return val + '%';
                    }
                }
            }
        }
    },
    colors: ['#556ee6'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
        },
    },
    stroke: {
        dashArray: 4,
    },
    series: [67],
    labels: ['Series A'],
};

const transactions = [

];

const statData = [{
    icon: 'bx bx-copy-alt',
    title: 'Orders',
    value: '0'
}, {
    icon: 'bx bx-archive-in',
    title: 'Revenue',
    value: '$0'
}, {
    icon: 'bx bx-purchase-tag-alt',
    title: 'Average Price',
    value: '$0'
}];

export { emailSentBarChart, monthlyEarningChart, transactions, statData };
