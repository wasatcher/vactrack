function gettime(){
    $.ajax({
        url:"/clock",
        timeout:10000,
        success:function(data){
            $("#clock").html(data)
        },
        error:function(xhr,type,errorThrown){
        }

    }
    );
}

function get_c1_data(){
    $.ajax({
        url:"/c1",
        success:function(data){
            $(".num h1").eq(0).text(data.total);
            $(".num h1").eq(1).text(data.ppl);
            $(".num h1").eq(2).text(data.ppl_f);
            $(".num h1").eq(3).text(data.daily);
        },
        error:function(xhr,type,errorThrown){
        }

    });
}


function get_c2_data() {
    $.ajax({
        url:"/c2",
        success:function(data) {
            $(".num2 h1").eq(0).text(data.totalp);
            $(".num2 h1").eq(1).text(data.pplp);
            $(".num2 h1").eq(2).text(data.ppl_fp);
        },
        error: function (xhr, type, errorThrown) {
        }
    });
}

function get_c3_data() {
    $.ajax({
        url:"/c3",
        success:function(data) {
            ec_center_option.series[0].data=data.data;
			ec_center.setOption(ec_center_option);
        },
        error: function (xhr, type, errorThrown) {
        }
    });
}

function get_l1_data() {
    $.ajax({
        url:"/l1",
        success:function(data) {
            ec_left1_option.series[0].data=data[0];
            ec_left1_option.series[1].data=data[1];
			ec_left1.setOption(ec_left1_option)
        },
        error: function (xhr, type, errorThrown) {
        }
    });
}

function get_l2_data() {
    $.ajax({
        url:"/l2",
        success:function(data) {
            ec_left2_option.xAxis[0].data=data.day;
            ec_left2_option.series[0].data=data.argentina;
            ec_left2_option.series[1].data=data.australia;
            ec_left2_option.series[2].data=data.brazil;
            ec_left2_option.series[3].data=data.canada;
            ec_left2_option.series[4].data=data.china;
            ec_left2_option.series[5].data=data.france;
            ec_left2_option.series[6].data=data.germany;
            ec_left2_option.series[7].data=data.india;
            ec_left2_option.series[8].data=data.indonesia;
            ec_left2_option.series[9].data=data.italy;
            ec_left2_option.series[10].data=data.japan;
            ec_left2_option.series[11].data=data.sk;
            ec_left2_option.series[12].data=data.mexico;
            ec_left2_option.series[13].data=data.russia;
            ec_left2_option.series[14].data=data.saf;
            ec_left2_option.series[15].data=data.sar;
            ec_left2_option.series[16].data=data.turkey;
            ec_left2_option.series[17].data=data.uk;
            ec_left2_option.series[18].data=data.us;
			ec_left2.setOption(ec_left2_option)
        },
        error: function (xhr, type, errorThrown) {
        }
    });
}

function get_r1_data() {
    $.ajax({
        url:"/r1",
        success:function(data) {
            ec_right1_option.yAxis.data=data.country;
            ec_right1_option.series[0].data=data.number;
			ec_right1.setOption(ec_right1_option)
        },
        error: function (xhr, type, errorThrown) {
        }
    });
}

function get_r2_data() {
    $.ajax({
        url:"/r2",
        success:function(data) {
            ec_right2_option.series[0].data=data.kws;
			ec_right2.setOption(ec_right2_option)
        },
        error: function (xhr, type, errorThrown) {
        }
    });
}

gettime()
get_c1_data()
get_c2_data()
get_c3_data()
get_l1_data()
get_l2_data()
get_r1_data()
get_r2_data()

setInterval(gettime,1000)
setInterval(get_c1_data,3600000*12)
setInterval(get_c2_data,3600000*12)
setInterval(get_c3_data,3600000*12)
setInterval(get_l1_data,3600000*12)
setInterval(get_l2_data,3600000*12)
setInterval(get_r1_data,3600000*12)
setInterval(get_r2_data,3600000*12)