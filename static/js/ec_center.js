var ec_center = echarts.init(document.getElementById('c3'));
var mydata = [
	// {'name':'India','value':2135},{'name':'China','value':29135}
]

var ec_center_option = {
	title: {
		text: 'Total Vaccinations - Interactive World Map',
		subtext: '',
		x:'center',
		// y: '95%',
		bottom: '1%',
		textStyle: {
			color : 'white',
			fontSize: 24
		}
	},
	tooltip:{
		trigger:'item'
	},
	visualMap:{
		show:true,
		x:'6%',
		y:'64%',
		// bottom: '2%',
		textStyle:{
			fontSize: 12,
			color:'white'
		},
		splitList:
			[{start:0,end:9999},
			{start:10000,end:99999},
			{start:100000,end:999999},
			{start:1000000,end:9999999},
			{start:10000000,end:99999999},
			{start:100000000,end:999999999},
			{start:1000000000,end:9999999999}],
		clor:['#732a0d','#aa3c14','#bc481e','#c28a75','#e3a189']
	},
	series:[{
		name:'Total vaccinations',
		type:'map',
		mapType:'world',
		roam:false,
		layoutCenter: ['50%', '46%'],
		layoutSize:'167%',
		// zoom:1.20,
		itemStyle:{
			normal:{
				borderWidth: .5,
				borderColor:'#009fe8',
				areaColor:'#ffefd5'
			},
			emphasis:{
				borderWidth: .5,
				borderColor:'#4b0082',
				areaColor:'#00d9ff'
			}
		},
		label:{
			normal:{
				show:false,
				fontSize:11,
				fontWeight: 'bold',
				color: '#33dbc7'
			},
			emphasis:{
				show:true,
				fontSize:16,
				fontWeight: 'bold',
				color: 'white'
			}
		},
		data:mydata
	}]
};
ec_center.setOption(ec_center_option)