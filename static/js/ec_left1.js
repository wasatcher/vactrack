var ec_left1=echarts.init(document.getElementById('l1'));

var ec_left1_option = {
	title: {
		text: "Total Vaccinations - Continents and G20 Countries",
		textStyle: {
			color : 'white'
		},
		left:'center',
		top: 0
	},
	tooltip:{
		trigger:'item',
		formatter: '{a} <br/>{b}: {c} ({d}%)'
	},
	// legend:{
	// 	data:['Africa','Asia','Europe','North America','South America','Argentina','Australia','Brazil','Canada','China','France','Germany','India','Indonesia','Italy','Japan','South Korea','Mexico','Russia','South Africa','Saudi Arabia','Turkey','United Kingdom','United States'],
	// 	left: "center"
	// },
	series: [
        {
            name: 'Continent',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '45%'],
            label: {
                position: 'inner',
                fontSize: 16,
            },
            labelLine: {
                show: false
            },
            data:  [
                // {value: 1548, name: 'Africa'},
                // {value: 5775, name: 'Asia'},
                // {value: 4679, name: 'Europe'},
				// {value: 3679, name: 'North America'},
				// {value: 2679, name: 'South America'}
            ]
        },
        {
            name: 'G20',
            type: 'pie',
            radius: ['55%', '70%'],
            labelLine: {
                length: 16,
            },
            label: {
                formatter: '{b|{b}：}{per|{d}%}  ',
                backgroundColor: '#F6F8FC',
                borderColor: '#8C8D8E',
                borderWidth: 1,
                borderRadius: 4,

                rich: {
                    a: {
                        color: '#6E7079',
                        lineHeight: 16,
                        align: 'center'
                    },
                    hr: {
                        borderColor: '#8C8D8E',
                        width: '100%',
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: '#4C5058',
                        fontSize: 13,
                        fontWeight: 'bold',
                        lineHeight: 20
                    },
                    per: {
                        color: '#fff',
                        backgroundColor: '#4C5058',
                        padding: [3, 4],
                        borderRadius: 4
                    }
                }
            },
            data: [
                // {value: 1048, name: 'Argentina'},
                // {value: 335, name: 'Australia'},
                // {value: 310, name: 'Brazil'},
                // {value: 251, name: 'Canada'},
                // {value: 234, name: 'China'},
                // {value: 147, name: 'France'},
                // {value: 135, name: 'Germany'},
                // {value: 102, name: 'India'},
				// {value: 102, name: 'Indonesia'},
				// {value: 1048, name: 'Italy'},
                // {value: 335, name: 'Japan'},
                // {value: 310, name: 'South Korea'},
                // {value: 251, name: 'Mexico'},
                // {value: 234, name: 'Russia'},
                // {value: 147, name: 'South Africa'},
                // {value: 135, name: 'Saudi Arabia'},
                // {value: 102, name: 'Turkey'},
				// {value: 1048, name: 'United Kingdom'},
                // {value: 335, name: 'United States'}
            ]
        }
    ]
};
ec_left1.setOption(ec_left1_option)