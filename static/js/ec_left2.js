var ec_left2=echarts.init(document.getElementById('l2'));

var ec_left2_option = {
	title: {
		text: "People Fully Vaccinated - G20 Countries",
		textStyle: {
			color : 'white'
		},
		left:'center',
		top: '4%'
	},
	tooltip:{
		trigger:'axis',
		axisPointer:{
			type: 'line',
			lineStyle:{
				color:'#7171C6'
			}
		}
	},
	legend:{
		top: '11%',
		data:[
			'Argentina','Australia','Brazil','Canada','China','France','Germany','India','Indonesia','Italy','Japan','South Korea','Mexico','Russia','South Africa','Saudi Arabia','Turkey','United Kingdom','United States'
		],
		left: "6%",
		textStyle: {
			color : 'white'
		}
	},
	grid:{
		left:'1%',
		right:'1%',
		bottom:'1%',
		top: '15%',
		containLabel: true
	},
	xAxis:[{
		type:'category',
		axisLabel:{
			show:true,
			color:'white'
			},
		data: [
			// '01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07', '01-08', '01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15', '01-16', '01-17', '01-18', '01-19', '01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26', '01-27', '01-28', '01-29', '01-30', '01-31', '02-01', '02-02', '02-03', '02-04', '02-05', '02-06', '02-07', '02-08', '02-09', '02-10', '02-11', '02-12', '02-13', '02-14', '02-15', '02-16', '02-17', '02-18', '02-19', '02-20', '02-21', '02-22', '02-23', '02-24', '02-25', '02-26', '02-27', '02-28', '03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07', '03-08', '03-09', '03-10', '03-11', '03-12', '03-13', '03-14', '03-15', '03-16', '03-17', '03-18', '03-19', '03-20', '03-21', '03-22', '03-23', '03-24', '03-25', '03-26', '03-27', '03-28', '03-29', '03-30', '03-31', '04-01', '04-02', '04-03', '04-04', '04-05', '04-06', '04-07', '04-08', '04-09', '04-10', '04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18', '04-19', '04-20', '04-21', '04-22', '04-23', '04-24', '04-25', '04-26', '04-27', '04-28', '04-29', '04-30', '05-01', '05-02', '05-03', '05-04', '05-05', '05-06', '05-07', '05-08', '05-09', '05-10', '05-11', '05-12', '05-13', '05-14', '05-15', '05-16', '05-17', '05-18', '05-19', '05-20', '05-21', '05-22', '05-23', '05-24', '05-25', '05-26', '05-27', '05-28', '05-29', '05-30', '05-31', '06-01', '06-02', '06-03', '06-04', '06-05', '06-06', '06-07', '06-08', '06-09', '06-10', '06-11', '06-12', '06-13', '06-14', '06-15', '06-16', '06-17', '06-18', '06-19', '06-20', '06-21', '06-22', '06-23'
		]
	}],
	yAxis:[{
		axisLabel:{
			show:true,
			color:'white',
			fontSize:12,
			formatter: function(value){
				return value + '%';
			}
		},
		axisLine:{
			show:true
		},
		splitLine:{
			show:true,
			lineStyle:{
				color:'#17273B',
				width:1,
				type:'solid'
			}
		}
	}],
	series:[
		{name:'Argentina',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 39599, 39599, 39599, 39599, 107542, 107542, 107542, 107542, 107542, 166833, 166833, 200759, 200759, 200759, 200759, 200759, 247933, 265724, 279602, 288064, 292023, 292386, 305880, 318033, 327999, 344034, 366384, 366384, 375851, 375851, 396562, 444018, 444018, 471383, 501152, 511582, 513178, 535303, 572928, 591632, 606245, 609605, 609791, 611169, 612322, 635583, 668654, 707148, 720267, 722234, 746615, 780455, 829832, 903915, 984895, 1025003, 1049169, 1126108, 1181292, 1252461, 1357596, 1357596, 1526078, 1546699, 1648957, 1774438, 1919074, 2098205, 2294738, 2381429, 2404194, 2541362, 2668103, 2805153, 2939364, 3063864, 3119828, 3142444, 3240731, 3328933, 3365839, 3474415, 3570460, 3625283, 3646068, 3744566, 3891932, 4023017, 4123152, 4178896, 4234505, 4260808, 4404175, 4571819, 4771214, 4956023, 5201468, 5313612, 5390000, 5571878, 5754919, 5935146, 6093016, 6226872, 6288812, 6334554, 6433141, 6550568, 6693438, 6807411, 7017279, 7134949, 7214704, 7386650, 7557986, 7715006, 7865213, 7971470, 7997902, 8039793, 8197011, 8391513, 8591061, 8820691, 9001747, 9082597, 9122759, 9237005, 9383945, 9541511, 9704364, 9862623, 9927783, 10002830, 10193368, 10383925, 10549521, 10758782, 10958659, 11067550, 11149468, 11242209, 11331066, 11503476, 11676733, 11906697, 12119901, 12257297, 12497078, 12801115, 13079195, 13374067, 13730521, 14092493, 14336164, 14663805, 15012734, 15353408, 15730223, 16102741, 16286902, 16382043, 16643769, 16876619, 17172628, 17475935, 17837121, 18085389, 18198899, 18380675, 18646784
		]},
		{name:'Australia',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2879, 6908, 17500, 25000, 30000, 31894, 33702, 41907, 50840, 61008, 71867, 76940, 81345, 86369, 94908, 106200, 125000, 135103, 159294, 162551, 164781, 182437, 203557, 226057, 240754, 253831, 257019, 282184, 307525, 355254, 408410, 460155, 506465, 511520, 541761, 597523, 670349, 744328, 823611, 828416, 843182, 844309, 854983, 920334, 996145, 1077511, 1138866, 1166568, 1178302, 1234681, 1295672, 1359665, 1420577, 1474558, 1496912, 1586556, 1653286, 1718107, 1785338, 1855601, 1914047, 1934077, 1937485, 1969337, 2029544, 2112285, 2179544, 2234844, 2254074, 2260615, 2316969, 2396314, 2473529, 2554531, 2627725, 2654338, 2663221, 2736107, 2812486, 2894770, 2978265, 3056797, 3089184, 3100137, 3183324, 3278854, 3371728, 3472874, 3562495, 3599964, 3613053, 3690622, 3795280, 3906668, 4031539, 4153149, 4212899, 4243600, 4362739, 4501444, 4642703, 4786362, 4927607, 5016352, 5076413, 5203977, 5344862, 5487670, 5641008, 5773924, 5834746, 5867299, 5931245, 6083320, 6219330, 6360666, 6360666, 6360666, 6360666, 6719384, 6860276
		]},
		{name:'Brazil',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 1109, 11470, 28543, 136519, 245877, 537774, 604722, 700608, 848883, 1129885, 1450900, 1668032, 2003211, 2074059, 2124307, 2292551, 2521704, 3073057, 3074906, 3401383, 3553681, 3605538, 3820207, 4120332, 4406835, 4696136, 5125206, 5236943, 5293979, 5609937, 5883539, 6206680, 6535156, 6813168, 6950802, 7028356, 7297061, 7551676, 7799000, 8101787, 8322042, 8433568, 8465403, 8841027, 9277322, 9739676, 10169160, 10169160, 10169160, 10169160, 10169160, 10362487, 10740859, 11149530, 11362190, 11422666, 11895560, 11895560, 12682290, 13013331, 13335728, 13479165, 13562176, 14116560, 15209201, 15943964, 16557071, 17032868, 17519083, 17706983, 18082153, 18222559, 19155981, 19155981, 20632877, 20956770, 21070128, 21960953, 22850791, 24197996, 24981199, 25735314, 26548845, 26741261, 27432994, 30801723, 31703967, 31703967, 31703967, 31703967, 32947066, 33755229, 33807132, 34058640, 35024957, 37112833, 37730651, 38027113, 38986878, 40168799, 41003659, 41989957, 42698862, 43036179, 43173356, 43962159, 45273825, 46185689, 46542392, 46875460, 46875460, 46875460, 47365348, 48193472, 49188608, 50308106, 52093242, 52641583, 52771668, 53624328, 54332240, 55098913, 55960152, 55960152, 55960152, 55960152, 55960152, 63740557, 64568609, 65268576, 66432341, 66934363, 67088046, 67482730, 68244216, 68919860, 70330300, 70743531, 71429257, 71691137, 71691137, 71691137, 74812794, 75890097, 76758587, 76758587, 78133938, 78906225, 80268207, 81540602, 84102155, 85390996, 86475842, 86960570, 88353063, 90077011, 91593968
		]},
		{name:'Canada',
		type:'line',
		smooth: true,
		data:[
			// 103790, 108732, 114034, 137735, 155197, 183360, 219446, 260654, 296241, 319603, 359049, 388493, 419209, 459492, 507687, 543291, 570742, 614666, 653653, 696242, 738864, 776606, 801238, 816451, 839949, 868454, 891324, 916027, 937199, 952212, 957229, 975492, 988202, 1001468, 1020066, 1042901, 1064370, 1077297, 1098746, 1124517, 1154277, 1186689, 1221839, 1255076, 1272900, 1282761, 1308918, 1329398, 1356423, 1404273, 1453980, 1496377, 1558110, 1606472, 1652562, 1711455, 1778706, 1840435, 1887059, 1946200, 2018238, 2091700, 2169417, 2255174, 2329622, 2387189, 2473868, 2543253, 2621289, 2719317, 2830164, 2934007, 3026665, 3151305, 3271309, 3409996, 3566328, 3729312, 3862685, 3954285, 4100558, 4223272, 4393876, 4583950, 4800931, 4967497, 5113935, 5301234, 5470884, 5690380, 5896845, 6057090, 6258003, 6372110, 6555389, 6758617, 6990144, 7252560, 7569321, 7814748, 7996122, 8330898, 8601331, 8898865, 9205307, 9525732, 9779909, 9980626, 10243418, 10481418, 10798150, 11158636, 11526938, 11813201, 12045041, 12307785, 12564325, 12826266, 13131871, 13420198, 13652375, 13825476, 14051490, 14284234, 14568067, 14924694, 15325183, 15652046, 15917555, 16258155, 16557932, 16904709, 17297879, 17734322, 18098814, 18415880, 18805903, 19088798, 19444593, 19841562, 20329783, 20718109, 21026606, 21381544, 21637723, 21939046, 22347313, 22810709, 23157029, 23472216, 23862397, 24169346, 24522064, 24933524, 25397448, 25772487, 26095464, 26503428, 26855647, 27257774, 27729564, 28240474, 28644442, 29023531, 29470746, 29917852, 30379626, 30885092, 31417347, 31836378, 32189274, 32598064, 33070640, 33585366
		]},
		{name:'China',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 0, 0, 0, 0, 0, 9000000, 9000000, 9000000, 9000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 22767000, 22767000, 22767000, 22767000, 24000000, 24000000, 24000000, 31200000, 31200000, 31200000, 31200000, 31200000, 31200000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 40520000, 52520000, 52520000, 52520000, 52520000, 52520000, 52520000, 52520000, 52520000, 52520000, 52520000, 52520000, 52520000, 52520000, 52520000, 64980000, 64980000, 64980000, 64980000, 64980000, 64980000, 74956000, 74956000, 80460000, 82846000, 85859700, 91346000, 97470000, 102417000, 106613000, 110962000, 114690000, 119821000, 126616000, 133801000, 136677000, 139970000, 142802000, 145920000, 149071000, 155150000, 161121000, 164471000, 167343000, 171928000, 175623000, 179216000, 183536000, 187360000, 189809000, 192127000, 195022000, 198950000, 204191000, 211223000, 216084000, 220309000, 224901000, 229489000, 235976000, 243905000, 253463000, 265064000, 270406000, 275338000, 279905000, 284595000, 289627000, 297734000, 308226000, 317586000, 324307000, 332964000, 342697000, 354272000, 366910000, 380633000, 392987000, 406938000, 421991000, 435689000, 449511000, 466698000, 483343000, 497272000, 510858000, 527253000, 546714000, 566723000, 584360000, 602991000, 620974000, 639172000, 661468000, 681908000, 704826000, 723486000, 744483000, 763065000, 777879000, 794134000, 808962000, 824856000, 845299000, 863513000, 878523000, 892770000, 904134000, 923910000, 945150000, 966652000, 990257000, 1010489000, 1029223000, 1049744000, 1071783000, 1095902000
		]},
		{name:'France',
		type:'line',
		smooth: true,
		data:[
			// 485, 573, 665, 2144, 7560, 18885, 47473, 83779, 94723, 100363, 139496, 200514, 264465, 344503, 412110, 431951, 442471, 527147, 655880, 791435, 947191, 1066199, 1104115, 1113518, 1191685, 1293736, 1405092, 1541949, 1650216, 1683127, 1689681, 1762451, 1867783, 1975812, 2106577, 2219140, 2250892, 2260758, 2352702, 2489993, 2636060, 2820945, 2973074, 3014288, 3026076, 3139682, 3289673, 3441998, 3628674, 3783291, 3829739, 3838972, 3948692, 4085461, 4224771, 4415060, 4597955, 4671191, 4681288, 4797810, 4963528, 5142973, 5372641, 5634343, 5857717, 5983163, 6139058, 6365863, 6599145, 6902191, 7247266, 7491541, 7557302, 7746220, 7925273, 8112389, 8322455, 8587152, 8763865, 8815271, 9017031, 9306731, 9604440, 9987663, 10385227, 10595322, 10657453, 10912499, 11264556, 11597440, 11995935, 12366255, 12567437, 12631015, 12700838, 13022471, 13394554, 13849234, 14371311, 14664358, 14753882, 15103218, 15553838, 15983259, 16463288, 16944718, 17221452, 17307346, 17648707, 18070516, 18488922, 18960830, 19435428, 19735251, 19842545, 20216811, 20685606, 21165150, 21714632, 22267911, 22484593, 22612647, 23066749, 23602498, 24148324, 24761624, 25387026, 25672400, 25847501, 26383789, 27039979, 27698579, 28087822, 28702025, 29163999, 29384539, 29903678, 30506200, 31111110, 31769323, 32424746, 32846896, 33020476, 33311352, 33892624, 34482865, 35143518, 35825347, 36269541, 36407035, 36962615, 37627893, 38260024, 38969947, 39716929, 40204365, 40382707, 40973652, 41656286, 42306244, 42982012, 43714659, 44202208, 44377902, 44963982, 45644727, 46305596, 46984761, 47735753, 48227665, 48400746, 48988343, 48988343, 48988343
		]},
		{name:'Germany',
		type:'line',
		smooth: true,
		data:[
			// 228729, 276368, 298548, 345121, 396995, 459178, 513323, 575175, 634672, 669326, 736445, 817193, 928814, 1010858, 1100882, 1157993, 1206325, 1288423, 1406901, 1539027, 1645142, 1747994, 1834774, 1882500, 1973686, 2071185, 2179848, 2270364, 2379020, 2467387, 2524555, 2644091, 2774755, 2933895, 3064298, 3208687, 3309181, 3362599, 3471902, 3605561, 3759162, 3900435, 4055638, 4162856, 4228271, 4352779, 4490633, 4640726, 4782442, 4936954, 5048831, 5134669, 5293139, 5459622, 5633266, 5821638, 6030340, 6177653, 6284758, 6480522, 6693514, 6936625, 7179259, 7450030, 7651702, 7802187, 8039281, 8289576, 8574586, 8856493, 9181359, 9429269, 9600314, 9847213, 10024710, 10228819, 10421446, 10664968, 10885286, 11051227, 11319331, 11618310, 11952985, 12291533, 12669431, 12958119, 13157065, 13468506, 13800398, 14140277, 14468676, 14695397, 14928160, 15124656, 15373260, 15746744, 16426142, 17159207, 17787178, 18158199, 18420690, 18837995, 19410266, 20184305, 20863655, 21459452, 21823551, 22091541, 22493235, 23051322, 23771097, 24408188, 24958603, 25325459, 25607782, 26040191, 26823772, 27945922, 28891329, 29694293, 30029995, 30293286, 30745388, 31587295, 32728786, 33711647, 34592478, 35018752, 35305340, 35893226, 36975038, 38385087, 38812132, 39564549, 39961535, 40242399, 40795850, 41672159, 42773499, 43715657, 44560396, 45035873, 45321889, 45644806, 46298169, 47470307, 48503496, 49397338, 49808733, 50091550, 50631015, 51608949, 52844852, 53477951, 54296186, 54703471, 54995018, 55594898, 56621464, 57972077, 59128532, 60156027, 60582422, 60862685, 61497042, 62510097, 63849997, 64952124, 65903863, 66318444, 66616357, 67220216, 68248666, 69516383
		]},
		{name:'India',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 191181, 224301, 454049, 674835, 806484, 1043534, 1390592, 1582201, 1615504, 2023809, 2029480, 2355979, 2928053, 3500027, 3744334, 3758843, 3950156, 4138918, 4449552, 4959445, 5416849, 5775322, 5812362, 6259008, 6611561, 7017114, 7505010, 7967647, 8052454, 8052454, 8516771, 8857341, 9186757, 9846523, 10449942, 10838323, 11085173, 11424094, 11907392, 12366633, 13067047, 13756940, 14242547, 14301266, 14854136, 15620749, 16616048, 18005503, 19497704, 20922344, 20989010, 23008733, 24367906, 25685011, 26164920, 28218457, 29738409, 29908038, 32947432, 35064536, 37143255, 39339817, 42063392, 44603841, 45065998, 48494594, 50841286, 53145709, 55504440, 58109773, 60269782, 60530435, 61113354, 63054353, 65117896, 68789138, 73054295, 75979651, 79105163, 83110926, 87077474, 90198673, 94334262, 98075160, 101595147, 104528565, 108533085, 111179578, 114493238, 117223509, 119937641, 122622590, 123852566, 127129113, 127129113, 129646105, 132754608, 132754608, 132754608, 139185173, 142524947, 144879233, 147053392, 149268772, 151998107, 153626325, 154211511, 156082136, 157750752, 159931238, 162603603, 165190000, 167493857, 168304868, 171098918, 173862643, 176045577, 178361846, 179646413, 181544536, 182251006, 183817204, 185191602, 186410600, 187886885, 187886885, 190842497, 191719240, 194165711, 195506779, 198425615, 201203166, 203166802, 207088953, 208665123, 210449895, 213135738, 215678166, 218344384, 223607768, 225571144, 228041045, 230490652, 233680929, 236856505, 240281903, 243703242, 246188067, 249430416, 252760364, 255305366, 258325900, 262970250, 266355940, 270908312, 274286599, 283313942, 289855456, 293370338
		]},
		{name:'Indonesia',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 132000, 132000, 149242, 161959, 245685, 308003, 373786, 416299, 502955, 515681, 574938, 648259, 717647, 796819, 865609, 914303, 923449, 985855, 1066860, 1248797, 1362791, 1362791, 1475812, 1494325, 1578720, 1658110, 1747267, 1787976, 1787976, 1956725, 1956725, 1956725, 2059871, 2188788, 2315665, 2449451, 2598535, 2690163, 2690163, 3023348, 3386351, 3386351, 3528152, 3528152, 4022544, 4022544, 4022544, 4837576, 4991674, 5108536, 5440432, 5480346, 5739648, 6185700, 6581388, 6787283, 7346148, 7835357, 7879881, 8226632, 9330853, 9330853, 9745646, 10412824, 10425690, 10766490, 10766490, 10766490, 11674871, 12226028, 12292491, 12292491, 12649124, 12649124, 13452610, 13452610, 14071485, 14071485, 15081949, 15081949, 15602574, 15811449, 16008243, 16498726, 16498726, 16692353, 16692353, 17024955, 17275001, 17644225, 17920908, 18322578, 18322578, 18570974, 18842883, 19230446, 19561472, 19890198, 20068537, 20068537, 20172516, 20172516, 20701804, 20701804, 21367754, 21666868, 21666868, 21993299, 21993299, 22536306, 22536306, 22617205, 22622367, 22622367, 22721097, 22922067, 23262139, 23262139, 24033424, 24431758, 24431758, 24790758, 24826221, 25782177, 25782177, 25782177, 25782177, 25782177, 26889189, 27045507, 27308881, 27619247, 28027750, 28486710, 28702933, 28770360, 28972987, 29616507, 30155028, 30700350, 31195606, 31603325, 31727380, 32039910, 32603744, 33264392, 33962386, 34551233, 35086248, 35283078, 35928647, 36581555, 36998897
		]},
		{name:'Italy',
		type:'line',
		smooth: true,
		data:[
			// 50976, 89500, 124770, 193558, 273273, 338295, 430424, 526002, 612869, 673195, 754333, 836696, 931380, 1025381, 1115201, 1180134, 1217328, 1261146, 1294257, 1325202, 1360982, 1387680, 1426720, 1460567, 1529564, 1609524, 1680161, 1773612, 1871352, 1961458, 2020977, 2106454, 2194260, 2293823, 2401539, 2508525, 2586020, 2627843, 2694464, 2761209, 2833941, 2908532, 2982455, 3035089, 3064935, 3127440, 3198465, 3278779, 3368434, 3461136, 3539279, 3590279, 3695740, 3802145, 3924046, 4052255, 4190290, 4316964, 4395275, 4530844, 4692680, 4879459, 5077152, 5282885, 5460321, 5562980, 5744074, 5938769, 6153854, 6377098, 6588623, 6765355, 6871207, 7045660, 7185732, 7351155, 7514241, 7689791, 7865344, 7995592, 8191133, 8416780, 8672919, 8942454, 9212982, 9453316, 9616639, 9859324, 10127462, 10432470, 10719086, 11000711, 11230220, 11326406, 11496908, 11781226, 12105353, 12439047, 12773688, 13094412, 13296246, 13562930, 13850798, 14170861, 14521723, 14901085, 15260841, 15502921, 15813475, 16146667, 16519458, 16918153, 17322340, 17708725, 17976321, 18320546, 18693484, 19102004, 19630374, 20157414, 20590364, 20959987, 21372006, 21820124, 22302679, 22822180, 23365737, 23878487, 24261451, 24701612, 25157790, 25641308, 26168907, 26722035, 27265842, 27675019, 28140658, 28608262, 29092696, 29641765, 30205380, 30723457, 31130620, 31593163, 32069575, 32593218, 33180277, 33770791, 34293755, 34695381, 35173303, 35639353, 36050188, 36644454, 37272967, 37887840, 38397242, 38962578, 39537884, 40123842, 40744673, 41355715, 41903017, 42324777, 42850411, 43373342, 43920710, 44513125, 45110062, 45654095, 46078054, 46625889, 47181424, 47722029
		]},
		{name:'Japan',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 611, 5039, 5039, 5039, 11934, 11934, 17888, 21896, 28530, 28530, 28530, 31785, 34772, 37303, 39174, 46469, 46469, 46469, 70796, 107558, 148950, 181184, 230542, 230542, 230542, 290275, 359191, 437485, 508702, 578835, 578835, 578835, 652698, 699126, 741180, 775122, 822869, 822869, 822869, 890662, 949731, 1002739, 1050112, 1096698, 1096698, 1096698, 1196884, 1288566, 1393108, 1487606, 1592517, 1592517, 1592517, 1690592, 1746181, 1799048, 1853729, 1853729, 1853729, 1930111, 2054880, 2190413, 2354383, 2517045, 2517045, 2517045, 2718090, 3000510, 3225464, 3225464, 3489719, 3489719, 3489719, 3489719, 3489719, 3489719, 3836845, 4197463, 4197463, 4197463, 4436325, 4734029, 4994028, 5274683, 5593436, 5593436, 5593436, 6112406, 6691268, 7093476, 7577142, 7990398, 7990398, 7990398, 8778226, 9466923, 10030865, 10595100, 11176328, 11176328, 11176328, 12343590, 13210567, 13998030, 14775865, 15607525, 15607525, 15607525, 17254680, 18348184, 19371685, 20383612, 21408125, 21408125, 21408125, 23685319, 25038536, 26376451, 27656387, 28887137, 28887137, 28887137, 31592030, 32922292, 34389735, 35788723
		]},
		{name:'South Korea',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18489, 20322, 21177, 21177, 87428, 154421, 225853, 296380, 314656, 316865, 383346, 446941, 500635, 546277, 583658, 587884, 588958, 602150, 621734, 641331, 659475, 675426, 676900, 677200, 681443, 705110, 735815, 771284, 797506, 799090, 799198, 828599, 860387, 889546, 933924, 979936, 989381, 990094, 1027561, 1072480, 1118221, 1165802, 1207482, 1217460, 1217766, 1255899, 1299632, 1346478, 1440224, 1543546, 1573088, 1577975, 1700076, 1832004, 1964389, 2114700, 2294259, 2365177, 2371793, 2536478, 2735051, 2977515, 3254738, 3554402, 3631292, 3633353, 3733940, 3828206, 3883829, 4005806, 4136581, 4176221, 4181003, 4276579, 4363470, 4458730, 4545683, 4636641, 4669153, 4674151, 4785576, 4939339, 5034150, 5255441, 5495098, 5536097, 5539242, 5715453, 5887992, 6043663, 6757397, 7367683, 7542308, 7547239, 7962839, 8556522, 8962721, 9333300, 9732863, 9874668, 9878469, 10755652, 11527605, 12143648, 13201539, 14261118, 14794416, 14834410, 15828002, 15828002, 16504369, 16504369, 16504369, 16504369, 17946801, 18086202, 18267181, 18438254
		]},
		{name:'Mexico',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 43960, 48236, 53185, 58402, 67468, 74794, 81300, 87060, 92879, 192567, 329983, 417375, 463246, 472142, 492529, 498122, 501030, 552335, 614808, 618768, 629626, 645105, 652319, 656044, 657842, 662217, 670307, 673327, 675202, 677539, 686601, 695088, 700316, 710198, 713517, 717820, 717820, 724707, 725447, 726002, 726313, 726313, 749682, 915383, 1058139, 1318055, 1574158, 1656304, 1689158, 1733404, 1801156, 1900784, 2088813, 2271032, 2383411, 2455095, 2526863, 2583435, 2633580, 2676035, 2731900, 2765805, 2793106, 2849630, 3100868, 3488000, 3800000, 4005131, 4214294, 4339926, 4404608, 4530784, 4737622, 4947522, 5186751, 5459014, 5612291, 5781359, 5926967, 6119298, 6243886, 6487170, 6724789, 6852596, 7018449, 7404912, 7851053, 7851053, 8644446, 8987190, 9036000, 9287405, 9675517, 10089420, 10642873, 10984869, 11204183, 11395137, 11703164, 12407625, 12912963, 13421708, 13978181, 14240830, 14368074, 14571509, 15003610, 15477517, 15874809, 16214484, 16410034, 16501739, 16687189, 16687189, 17357993, 17718806, 18080005, 18326726, 18471669, 18827623, 19340234, 19951121, 20540830, 21008618, 21228359, 21300414, 21300414, 21589272, 21986456, 22413285, 22413285, 22413285, 23168462, 23301884, 23301884, 24223297, 24988066, 25626413, 26148948, 26478866, 26655760, 26953788, 27709853, 27709853, 29239997, 29861331, 30293682, 30477703, 30990908, 31811931, 32874857, 33779982, 34457602, 34457602, 34658545, 35166248, 36164011, 36430953, 36983641, 37294959, 37521976, 37803462, 38248562, 38633462, 39153336, 39623088, 40031327, 40227974, 40700954, 41368066, 41368066
		]},
		{name:'Russia',
		type:'line',
		smooth: true,
		data:[
			// 0, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 5249831, 5489342, 6010744, 6301854, 6583873, 6655487, 6669466, 6694349, 7048129, 7273933, 7273933, 7273933, 7273933, 7273933, 7273933, 7818009, 7909438, 8185944, 8306498, 8362575, 8362575, 8362575, 8362575, 8362575, 8362575, 8362575, 8362575, 11124350, 11183108, 11373572, 11642295, 11779295, 12038859, 12120810, 12215342, 12474954, 13047800, 13354502, 13628879, 13977397, 14108341, 14269543, 14583881, 14967802, 15164099, 15469617, 15700803, 16167151, 16237319, 16567842, 16821267, 17218313, 17535826, 18080498, 18152707, 18315316, 18557064, 19043771, 19523861, 19834392, 19934399, 20070743, 20110554, 20168443, 20720147, 21177713, 21296747, 21597074, 21597074, 21786131, 21844382, 22575945, 22782931, 23292045, 23858201, 23970334, 24087535, 24519227, 24862902, 25166959, 25468057, 26419720, 26472510, 26802324, 27026797, 27611859, 27739956, 28112894, 28365082, 28449552, 28501637, 29325191, 29792970, 30001530, 30501660, 30606544, 30708050, 31050172, 31295788, 31605719, 31953145, 32267143, 32734213, 32831196, 32865706, 32907158, 33220101, 33923089, 34337450, 34768902, 34901304, 35237844, 35983165, 36044137
		]},
		{name:'South Africa',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2260, 6524, 10414, 15388, 23059, 32315, 41809, 52647, 63648, 67303, 70527, 73047, 76037, 83570, 92029, 100180, 101573, 101573, 101841, 107054, 128887, 138014, 145215, 145544, 145544, 147753, 157286, 168413, 177275, 182983, 182983, 182983, 182983, 194257, 207808, 220129, 231002, 231605, 231605, 239665, 251707, 263878, 269102, 269102, 269102, 269102, 269102, 272438, 278909, 283629, 288368, 288406, 288406, 289787, 292623, 292623, 292623, 292623, 292623, 292623, 292623, 292623, 292623, 292623, 292623, 292623, 292623, 292623, 292623, 298153, 307591, 317656, 318670, 318670, 329098, 353181, 366101, 366101, 381171, 382480, 382480, 395230, 414372, 430730, 455169, 474318, 478452, 478733, 478733, 519139, 558170, 597406, 642382, 647983, 651628, 700904, 761903, 828204, 898955, 963876, 968319, 970448, 1045104, 1117569, 1193352, 1266893, 1336547, 1343433, 1350245, 1433730, 1525271, 1619011, 1690026, 1767415, 1773417, 1777288, 1871987, 1965812, 1974099, 2069346, 2137071, 2141624, 2141624, 2229242, 2229242, 2229242
		]},
		{name:'Saudi Arabia',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 0, 0, 137862, 137862, 137862, 178338, 178338, 178338, 178338, 178338, 178338, 178338, 295530, 295530, 295530, 295530, 295530, 295530, 295530, 391643, 391643, 391643, 391643, 391643, 391643, 391643, 440618, 440618, 440618, 440618, 440618, 440618, 440618, 440618, 440618, 440618, 440618, 444465, 444465, 444465, 446940, 446940, 462812, 462812, 501710, 501710, 501710, 501710, 501710, 600798, 600798, 639587, 639587, 639587, 780667, 780667, 885411, 1003287, 1003287, 1182943, 1264878, 1264878, 1332740, 1484935, 1585770, 1685881, 1823819, 1938934, 2082780, 2232110, 2394182, 2457425, 2580949, 2695966, 2922436, 3006419, 3194715, 3343287, 3505695, 3655546, 3810698, 3895858, 4003477, 4132630, 4250055, 4326576, 4432572, 4584006, 4729235, 4877442, 5000120, 5118039, 5345625, 5578229, 5846745, 5989026, 6132124, 6287432, 6411162, 6527823, 6584000, 6723186, 6831440, 6992242, 7190402, 7325016, 7459261, 7653634, 7809612, 7944950, 8059757, 8263836, 8488862, 8693407, 8880219, 9032921, 9343991, 9488912, 9655519, 9772409, 9838285, 9949971, 10110907, 10271299, 10441854, 10629320, 10758710, 10960820, 11098788, 11195164, 11312391, 11489358, 11668767, 11828549, 12020008, 12225726, 12436389, 12616680, 12791781, 12882532, 13013462, 13183309, 13401177, 13583574, 13723119, 13828247, 14043763, 14208292, 14331774, 14512466, 14629297, 14731457, 14843196, 14977476, 15099896, 15221683, 15361514, 15495105, 15605844, 15706724, 15836419, 15984268, 16109908, 16227887, 16362898, 16457176, 16548174, 16649095, 16735649, 16847375, 16933104
		]},
		{name:'Turkey',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 279452, 616652, 676903, 706451, 832412, 950635, 1052493, 1120258, 1202212, 1226883, 1244653, 1302753, 1410273, 1522580, 1697575, 1928351, 1960860, 1986237, 2136299, 2229233, 2343280, 2500806, 2559802, 2601717, 2610496, 2664203, 2732709, 2795116, 2846125, 3404354, 3709896, 3825101, 4182027, 4630784, 5223602, 5895295, 6361699, 6533510, 6571830, 6837302, 7289498, 7619695, 7979726, 8298805, 8514775, 8547875, 8774718, 9073640, 9317546, 9560038, 9756289, 9883607, 9917348, 10001980, 10222994, 10360283, 10502494, 10742277, 10923284, 10992095, 11261612, 11696296, 12142245, 12431482, 12844577, 13029754, 13057722, 13265952, 13589167, 13969867, 14227410, 14491247, 14652659, 14652659, 14949260, 15301462, 15834787, 16148683, 16317170, 16602919, 16683067, 16993574, 17367875, 17704888, 18089783, 18320384, 18445354, 18494796, 18728978, 19062758, 19272675, 19445269, 19811774, 19937359, 19970215, 20075504, 20283227, 20477685, 20728975, 20887427, 21068403, 21130963, 21394785, 21678461, 22132803, 22568172, 22816891, 22899046, 23006734, 23294477, 23729113, 24103883, 24467719, 24691044, 24853353, 24918773, 25018078, 25178674, 25348875, 25402277, 25561998, 25687427, 25772743, 25950934, 26537163, 26821460, 27083374, 27745400, 27818947, 28048727, 28161235, 28397847, 28511333, 28605453, 28730177, 28802681, 28960961, 29171543, 29375685, 29657059, 30129259, 30318510, 30576062, 30857320, 31246323, 31589838, 31987341, 32507572, 32952991, 33428162, 34052689, 34778165, 36241225, 37739099, 39446201, 40619152, 41194790, 42613378, 43629179, 44080123, 44951168
		]},
		{name:'United Kingdom',
		type:'line',
		smooth: true,
		data:[
			// 0, 0, 1380430, 1380430, 1380430, 1380430, 1380430, 1380430, 1380430, 2677971, 2843815, 3067541, 3356229, 3678180, 4023705, 4322456, 4514802, 4723443, 5070365, 5437284, 5849899, 6329968, 6822981, 7044048, 7325773, 7638543, 7953250, 8369438, 8859372, 9468382, 9790576, 10143511, 10520433, 10992444, 11477040, 11975267, 12526737, 12806587, 13162878, 13577851, 14033555, 14542318, 15091696, 15599904, 15839781, 16122272, 16499549, 16996806, 17465127, 17852327, 18197269, 18348165, 18558969, 18911978, 19392553, 19913592, 20450858, 20885683, 21091267, 21322717, 21599027, 21946433, 22392883, 22887118, 23335514, 23519898, 23773959, 24064182, 24405231, 24759603, 25216857, 25781120, 26063501, 26503552, 27032671, 27614526, 28274802, 29015457, 29859742, 30279360, 30691557, 31186362, 31766669, 32325993, 33020952, 33684114, 34125256, 34530295, 35033894, 35660902, 36277136, 36631187, 36917986, 37013749, 37119083, 37391103, 37899029, 38444540, 39001554, 39587893, 39846781, 40107877, 40496685, 40958303, 41505768, 42140989, 42780069, 43084487, 43457910, 43915559, 44450252, 45012308, 45613109, 46309512, 46650008, 47045391, 47540984, 48138009, 48752144, 49319518, 49834997, 50097812, 50297911, 50682567, 51225890, 51834361, 52433184, 53041048, 53328845, 53675733, 54160993, 54797640, 55434965, 56048435, 56677012, 56992075, 57357857, 57855958, 58489834, 59178397, 59824737, 60587098, 60965594, 61420928, 61995062, 62658639, 63349252, 63989645, 64592019, 64923228, 65211877, 65658949, 66180731, 66749638, 67317593, 67994584, 68381870, 68800879, 69251163, 69743980, 70253625, 70769348, 71343859, 71672208, 72040763, 72461462, 72891861, 73359099, 73787916, 74304520, 74577678, 74638083, 75188795, 75188795
		]},
		{name:'United States',
		type:'line',
		smooth: true,
		data:[
			// 0, 4225756, 4225756, 4563260, 4836469, 5306797, 5919418, 6688231, 6688231, 6688231, 8987322, 9327138, 10278462, 11148991, 12279180, 12279180, 12279180, 12279180, 15707588, 16525281, 17546374, 19107959, 20537990, 21848655, 22734243, 23540994, 24652634, 26193682, 27884661, 29577902, 31123299, 32222402, 32780860, 33878254, 35203710, 36819212, 39037964, 41210937, 42417617, 43206190, 44769970, 46390270, 48410558, 50641884, 52884356, 52884356, 55220364, 56281827, 57737767, 59585043, 61289500, 63090634, 64177474, 65032083, 66464947, 68274117, 70454064, 72806180, 75236003, 76899987, 78631601, 80540474, 82572848, 85008094, 87912323, 90351750, 92089852, 93692598, 95721290, 98203893, 101128005, 105703501, 107060274, 109081860, 110737856, 113037627, 115730008, 118313818, 121441497, 124481412, 126509736, 128217029, 130473853, 133305295, 136684688, 140180735, 143462691, 145812835, 147602345, 150273292, 153631404, 157606463, 161688422, 165053746, 167187795, 168592075, 171476655, 174879716, 178837781, 183467709, 187047131, 189692045, 192282781, 194791836, 198317040, 202282923, 205871913, 209406814, 211581309, 213388238, 215951909, 218947643, 222322230, 225640460, 228661408, 230768454, 232407669, 234639414, 237360493, 240159677, 243463471, 245591469, 246780203, 247769049, 249566820, 251973752, 254779333, 257347205, 259716989, 261599381, 263132561, 264680844, 266596486, 268438666, 270832342, 272925411, 274411901, 275535207, 277290173, 279397250, 281595351, 283941223, 285720586, 286890900, 287788872, 289212304, 290724607, 292099778, 293705050, 294928850, 294928850, 296404240, 296912892, 297720928, 299120522, 300268730, 301638578, 302851917, 303923667, 304753476, 305687618, 306509795, 308112728, 309322545, 310645827, 311886674, 312915170, 314969386, 316048776, 317117797, 317966408, 318576441, 319223844, 319872053
		]}
		]
};
ec_left2.setOption(ec_left2_option)