var ec_right1=echarts.init(document.getElementById('r1'));

var ec_right1_option = {
	title: {
		text: "TOP 10 - Daily Vaccinations Per Million",
		textStyle: {
			color:'white'
		},
		left:'center',
        top:"1%"
	},
	color:['#3398DB'],
	tooltip:{
		trigger:'axis',
		axisPointer:{
			type: 'shadow'
		}
	},
	grid: {
        left: '2%',
        right: '6%',
        bottom: 0,
        containLabel: true
    },
	xAxis:{
		type: 'value',
		axisLabel:{
			show:true,
			color:'white'
			},
        boundaryGap: [0, 0.01]
	},
	yAxis:{
		type:'category',
		axisLabel:{
			show:true,
			color:'white'
			},
		data: [
			// 'china',"US","UK","India",'Japan'
		]
	},
	series:[
		{
		data:[
			// 2233,1239,932,555, 777
		],
		type:'bar',
		barMaxWidth:'50%'
		}]
};
ec_right1.setOption(ec_right1_option)