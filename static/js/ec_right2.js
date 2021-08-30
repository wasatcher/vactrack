var ec_right2=echarts.init(document.getElementById('r2'));

var mydata = [
    // {'name':'COVID','value':555666}, {'name':'Vaccine','value':444666}, {'name':'Expire','value':222666}, {'name':'Virus','value':333112}
]

var ec_right2_option = {
	title: {
		text: "BBC Coronavirus Vaccine Topics",
		textStyle: {
			color:'white'
		},
		left:'center',
        top:"10%"
	},
	tooltip:{
		show:false
	},
    series: [{
        type: 'wordCloud',
        shape: 'circle',
        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        right: null,
        bottom: null,
        sizeRange: [12, 60],
        rotationRange: [-45, 0, 45, 90],
        rotationStep: 45,
        gridSize: 8,
        drawOutOfBound: false,
        layoutAnimation: true,
        textStyle: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
                return 'rgb(' + [
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255),
                Math.round(Math.random() * 255)
            ].join(',') + ')';
            }
        },
        emphasis: {
            textStyle:{
                shadowBlur: 10,
                shadowColor: '#333',
                color: "#409EFF"
            }
        },
        data: mydata
    }]
};
ec_right2.setOption(ec_right2_option)