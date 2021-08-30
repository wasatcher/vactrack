from flask import Flask, request, render_template, jsonify
import utils
import yake

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("main.html")

@app.route('/c1')
def get_c1_data():
    data = utils.get_c1c2_data()
    return jsonify({"total":format(int(data[0]), ',d'),"ppl":format(int(data[1]), ',d'),"ppl_f":format(int(data[2]), ',d'),"daily":format(int(data[3]),',d')})

@app.route('/c2')
def get_c2_data():
    data = utils.get_c1c2_data()
    return jsonify({"totalp":("%.2f%%" % data[4]),"pplp":("%.2f%%" % data[5]),"ppl_fp":("%.2f%%" % data[6])})

@app.route('/c3')
def get_c3_data():
    res = []
    for tup in utils.get_c3_data():
        res.append({"name":tup[0],"value":int(0 if tup[1] is None else tup[1])})
    return jsonify({"data":res})

@app.route('/l1')
def get_l1_data():
    data = utils.get_l1_data()
    day, africa, asia, europe, na, sa, argentina, australia, brazil, canada, china, france, germany, india, indonesia, italy, japan, sk, mexico, russia, saf, sar, turkey, uk, us = [],[],[],[],[], [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]
    for everytuple in data:
        if everytuple[1] == 'Africa': africa.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Asia': asia.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Europe': europe.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'North America': na.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'South America': sa.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Argentina': argentina.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Australia': australia.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Brazil': brazil.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Canada': canada.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'China': china.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'France': france.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Germany': germany.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'India': india.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Indonesia': indonesia.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Italy': italy.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Japan': japan.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'South Korea': sk.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Mexico': mexico.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Russia': russia.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'South Africa': saf.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Saudi Arabia': sar.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'Turkey': turkey.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'United Kingdom': uk.append(int(0 if everytuple[2] is None else everytuple[2]))
        if everytuple[1] == 'United States':
            us.append(int(0 if everytuple[2] is None else everytuple[2]))
            day.append(everytuple[0][5:])
    # if data begin after 2021-01-01, add 0 to those days
    for i in range(8): africa.insert(0, 0)
    for i in range(15): brazil.insert(0, 0)
    for i in range(14): india.insert(0, 0)
    for i in range(47): japan.insert(0, 0)
    for i in range(55): sk.insert(0, 0)
    for i in range(12): turkey.insert(0, 0)
    for i in range(45): australia.insert(0, 0)
    for i in range(46): saf.insert(0, 0)
    for i in range(5): sar.insert(0, 0)
    for i in range(11): indonesia.insert(0, 0)
    # if not updated for recent days, add 0 to those days. Reference is data from US
    for i in range(len(us) - len(africa)): africa.append(0)
    for i in range(len(us) - len(asia)): asia.append(0)
    for i in range(len(us) - len(europe)): europe.append(0)
    for i in range(len(us) - len(na)): na.append(0)
    for i in range(len(us) - len(sa)): sa.append(0)
    for i in range(len(us) - len(argentina)): argentina.append(0)
    for i in range(len(us) - len(australia)): australia.append(0)
    for i in range(len(us) - len(brazil)): brazil.append(0)
    for i in range(len(us) - len(canada)): canada.append(0)
    for i in range(len(us) - len(china)): china.append(0)
    for i in range(len(us) - len(france)): france.append(0)
    for i in range(len(us) - len(germany)): germany.append(0)
    for i in range(len(us) - len(india)): india.append(0)
    for i in range(len(us) - len(indonesia)): indonesia.append(0)
    for i in range(len(us) - len(italy)): italy.append(0)
    for i in range(len(us) - len(japan)): japan.append(0)
    for i in range(len(us) - len(sk)): sk.append(0)
    for i in range(len(us) - len(mexico)): mexico.append(0)
    for i in range(len(us) - len(russia)): russia.append(0)
    for i in range(len(us) - len(saf)): saf.append(0)
    for i in range(len(us) - len(sar)): sar.append(0)
    for i in range(len(us) - len(turkey)): turkey.append(0)
    for i in range(len(us) - len(uk)): uk.append(0)
    # for the days missing data, use the data from the preceding days
    for index, value in enumerate(africa):
        if (index > 0 and value == 0):
            africa[index] = africa[index - 1]
    for index, value in enumerate(asia):
        if (index > 0 and value == 0):
            asia[index] = asia[index - 1]
    for index, value in enumerate(europe):
        if (index > 0 and value == 0):
            europe[index] = europe[index - 1]
    for index, value in enumerate(na):
        if (index > 0 and value == 0):
            na[index] = na[index - 1]
    for index, value in enumerate(sa):
        if (index > 0 and value == 0):
            sa[index] = sa[index - 1]
    for index, value in enumerate(argentina):
        if (index > 0 and value == 0):
            argentina[index] = argentina[index - 1]
    for index, value in enumerate(australia):
        if (index > 0 and value == 0):
            australia[index] = australia[index - 1]
    for index, value in enumerate(brazil):
        if (index > 0 and value == 0):
            brazil[index] = brazil[index - 1]
    for index, value in enumerate(canada):
        if (index > 0 and value == 0):
            canada[index] = canada[index - 1]
    for index, value in enumerate(china):
        if (index > 0 and value == 0):
            china[index] = china[index - 1]
    for index, value in enumerate(france):
        if (index > 0 and value == 0):
            france[index] = france[index - 1]
    for index, value in enumerate(germany):
        if (index > 0 and value == 0):
            germany[index] = germany[index - 1]
    for index, value in enumerate(india):
        if (index > 0 and value == 0):
            india[index] = india[index - 1]
    for index, value in enumerate(indonesia):
        if (index > 0 and value == 0):
            indonesia[index] = indonesia[index - 1]
    for index, value in enumerate(italy):
        if (index > 0 and value == 0):
            italy[index] = italy[index - 1]
    for index, value in enumerate(japan):
        if (index > 0 and value == 0):
            japan[index] = japan[index - 1]
    for index, value in enumerate(sk):
        if (index > 0 and value == 0):
            sk[index] = sk[index - 1]
    for index, value in enumerate(mexico):
        if (index > 0 and value == 0):
            mexico[index] = mexico[index - 1]
    for index, value in enumerate(russia):
        if (index > 0 and value == 0):
            russia[index] = russia[index - 1]
    for index, value in enumerate(saf):
        if (index > 0 and value == 0):
            saf[index] = saf[index - 1]
    for index, value in enumerate(sar):
        if (index > 0 and value == 0):
            sar[index] = sar[index - 1]
    for index, value in enumerate(turkey):
        if (index > 0 and value == 0):
            turkey[index] = turkey[index - 1]
    for index, value in enumerate(uk):
        if (index > 0 and value == 0):
            uk[index] = uk[index - 1]
    for index, value in enumerate(us):
        if (index > 0 and value == 0):
            us[index] = us[index - 1]
    return jsonify([[{"value":africa[-1],'name':'Africa'}, {"value":asia[-1],'name':'Asia'}, {"value":europe[-1],'name':'Europe'}, {"value":na[-1],'name':'North America'}, {"value":sa[-1],'name':'South America'}], [{"value":argentina[-1],'name':'Argentina'}, {"value":australia[-1],'name':'Australia'}, {"value":brazil[-1],'name':'Brazil'}, {"value":canada[-1],'name':'Canada'}, {"value":china[-1],'name':'China'}, {"value":france[-1],'name':'France'}, {"value":germany[-1],'name':'Germany'}, {"value":india[-1],'name':'India'}, {"value":indonesia[-1],'name':'Indonesia'}, {"value":italy[-1],'name':'Italy'}, {"value":japan[-1],'name':'Japan'}, {"value":sk[-1],'name':'South Korea'}, {"value":mexico[-1],'name':'Mexico'}, {"value":russia[-1],'name':'Russia'}, {"value":saf[-1],'name':'South Africa'}, {"value":sar[-1],'name':'Saudi Arabia'},{"value":turkey[-1],'name':'Turkey'}, {"value":uk[-1],'name':'United Kingdom'}, {"value":us[-1],'name':'United States'}]])

@app.route('/l2')
def get_l2_data():
    data = utils.get_l2_data()
    day, argentina, australia, brazil, canada, china, france, germany, india, indonesia, italy, japan, sk, mexico, russia, saf, sar, turkey, uk, us = [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]
    for everytuple in data:
        if everytuple[1] == 'Argentina': argentina.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Australia': australia.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Brazil': brazil.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Canada': canada.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'China': china.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'France': france.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Germany': germany.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'India': india.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Indonesia': indonesia.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Italy': italy.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Japan': japan.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'South Korea': sk.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Mexico': mexico.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Russia': russia.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'South Africa': saf.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Saudi Arabia': sar.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'Turkey': turkey.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'United Kingdom': uk.append(int(0 if everytuple[2] is None else (everytuple[2])+0.5))
        if everytuple[1] == 'United States':
            us.append(int(0 if everytuple[2] is None else everytuple[2]))
            day.append(everytuple[0][5:])
    # if data begin after 2021-01-01, add 0 to those days
    for i in range(15): brazil.insert(0, 0)
    for i in range(14): india.insert(0, 0)
    for i in range(47): japan.insert(0, 0)
    for i in range(55): sk.insert(0, 0)
    for i in range(12): turkey.insert(0, 0)
    for i in range(45): australia.insert(0, 0)
    for i in range(46): saf.insert(0, 0)
    for i in range(5): sar.insert(0, 0)
    for i in range(11): indonesia.insert(0, 0)
    # if not updated for recent days, add 0 to those days. Reference is data from US
    for i in range(len(us) - len(argentina)): argentina.append(0)
    for i in range(len(us) - len(australia)): australia.append(0)
    for i in range(len(us) - len(brazil)): brazil.append(0)
    for i in range(len(us) - len(canada)): canada.append(0)
    for i in range(len(us) - len(china)): china.append(0)
    for i in range(len(us) - len(france)): france.append(0)
    for i in range(len(us) - len(germany)): germany.append(0)
    for i in range(len(us) - len(india)): india.append(0)
    for i in range(len(us) - len(indonesia)): indonesia.append(0)
    for i in range(len(us) - len(italy)): italy.append(0)
    for i in range(len(us) - len(japan)): japan.append(0)
    for i in range(len(us) - len(sk)): sk.append(0)
    for i in range(len(us) - len(mexico)): mexico.append(0)
    for i in range(len(us) - len(russia)): russia.append(0)
    for i in range(len(us) - len(saf)): saf.append(0)
    for i in range(len(us) - len(sar)): sar.append(0)
    for i in range(len(us) - len(turkey)): turkey.append(0)
    for i in range(len(us) - len(uk)): uk.append(0)
    # for the days missing data, use the data from the preceding days
    for index, value in enumerate(argentina):
        if (index > 0 and value == 0):
            argentina[index] = argentina[index - 1]
    for index, value in enumerate(australia):
        if (index > 0 and value == 0):
            australia[index] = australia[index - 1]
    for index, value in enumerate(brazil):
        if (index > 0 and value == 0):
            brazil[index] = brazil[index - 1]
    for index, value in enumerate(canada):
        if (index > 0 and value == 0):
            canada[index] = canada[index - 1]
    for index, value in enumerate(china):
        if (index > 0 and value == 0):
            china[index] = china[index - 1]
    for index, value in enumerate(france):
        if (index > 0 and value == 0):
            france[index] = france[index - 1]
    for index, value in enumerate(germany):
        if (index > 0 and value == 0):
            germany[index] = germany[index - 1]
    for index, value in enumerate(india):
        if (index > 0 and value == 0):
            india[index] = india[index - 1]
    for index, value in enumerate(indonesia):
        if (index > 0 and value == 0):
            indonesia[index] = indonesia[index - 1]
    for index, value in enumerate(italy):
        if (index > 0 and value == 0):
            italy[index] = italy[index - 1]
    for index, value in enumerate(japan):
        if (index > 0 and value == 0):
            japan[index] = japan[index - 1]
    for index, value in enumerate(sk):
        if (index > 0 and value == 0):
            sk[index] = sk[index - 1]
    for index, value in enumerate(mexico):
        if (index > 0 and value == 0):
            mexico[index] = mexico[index - 1]
    for index, value in enumerate(russia):
        if (index > 0 and value == 0):
            russia[index] = russia[index - 1]
    for index, value in enumerate(saf):
        if (index > 0 and value == 0):
            saf[index] = saf[index - 1]
    for index, value in enumerate(sar):
        if (index > 0 and value == 0):
            sar[index] = sar[index - 1]
    for index, value in enumerate(turkey):
        if (index > 0 and value == 0):
            turkey[index] = turkey[index - 1]
    for index, value in enumerate(uk):
        if (index > 0 and value == 0):
            uk[index] = uk[index - 1]
    for index, value in enumerate(us):
        if (index > 0 and value == 0):
            us[index] = us[index - 1]
    return jsonify({"day":day,'argentina': argentina,'australia': australia,'brazil': brazil,'canada': canada,'china': china,'france': france,'germany': germany,'india': india,'indonesia': indonesia,'italy': italy,'japan':japan,'sk':sk,'mexico':mexico, 'russia':russia, 'saf':saf, 'sar': sar,'turkey': turkey,'uk': uk,'us':us})

@app.route('/r1')
def get_r1_data():
    data = utils.get_r1_data()
    country, number = [],[]
    for k,v in data:
        country.append(k)
        number.append(int(v))
    return jsonify({"country":country,"number":number})

@app.route('/r2')
def get_r2_data():
    data = utils.get_r2_data()
    # generate the text out of BBC web scrapped results. data is a tuple of tuple
    text = ''
    for v in data:
        text = text + v[0]
    # use yake to extract keywords
    language = "en"
    max_ngram_size = 1
    deduplication_threshold = 0.3
    numOfKeywords = 20
    custom_kw_extractor = yake.KeywordExtractor(lan=language, n=max_ngram_size, dedupLim=deduplication_threshold, top=numOfKeywords, features=None)
    keywords = custom_kw_extractor.extract_keywords(text)
    # generate a list of dictionary. keywords is a list of tuple. mydata is a list of dict that will be the input of echarts wordcloud.
    mydata = []
    for kw in keywords:
        mydata.append({"name": kw[0], "value": int(1 / kw[1])})
    return jsonify({"kws":mydata})

@app.route('/clock')
def get_time():
    return utils.get_time()

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=80)
