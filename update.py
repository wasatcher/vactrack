import sys

import pandas as pd
from selenium.webdriver.common.by import By
from sqlalchemy import create_engine
import time
import traceback
import pymysql
from selenium.webdriver import Chrome, ChromeOptions
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Get and update table "vac" and "loc" in database "vaccinations"
# source is from Our World in Data
def get_vac_data():
    engine = create_engine('mysql+pymysql://xxxxx:xxxxx@localhost:3306/vaccinations')
    # refresh table "vac"
    df = pd.read_csv(r"https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv", sep=',', quotechar='\'', encoding='utf8')
    df.to_sql('vac', con=engine, index=False, if_exists='replace')
    # refresh table "loc"
    df = pd.read_csv(r"https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/locations.csv", usecols=['location', 'last_observation_date'],
                     skipinitialspace=True, escapechar='\\', quotechar='"', encoding='utf8')
    df.to_sql('loc', con=engine, index=False, if_exists='replace')

# get_conn() and close_conn() are two encapsulated methods that establish and close database connections
def get_conn():
    conn = pymysql.connect(host="127.0.0.1",
                           user="xxxxx",
                           password="xxxxx",
                           db="vaccinations",
                           charset="utf8")
    cursor = conn.cursor()
    return conn, cursor

def close_conn(conn, cursor):
    if cursor:
        cursor.close()
    if conn:
        conn.close()

# Scrap the titles from the first page of BBC coronavirus vaccines topic.
def get_bbc_vac():
    url = "https://www.bbc.com/news/topics/c87z0we2g0zt/coronavirus-vaccines"
    option = ChromeOptions()
    option.add_argument('--no-sandbox')
    option.add_argument('--headless')
    browser = Chrome(options=option)
    browser.get(url)
    time.sleep(5)
    popad = browser.find_element_by_xpath('//*[@id="responsive-news"]/body/div/div/button')
    popad.click()
    content = browser.find_elements_by_xpath(
        '/html/body/div/div/div/div/div/div/div/div/div/ol/li/article/header/div/h3/a/span')
    context = []
    for i in content:
        context.append(i.text)

    # counter = 2
    # while counter < 6:
    #     time.sleep(5)
    #     but = browser.find_element_by_css_selector(
    #         '#lx-stream > div.lx-pagination__nav.gs-u-mb\+.qa-bottom-navigation > div > div.lx-pagination__controls.lx-pagination__controls--right.qa-pagination-right > a.lx-pagination__btn.gs-u-mr\+.qa-pagination-next-page.lx-pagination__btn--active')
    #     but.click()
    #     content1 = browser.find_elements_by_xpath(
    #         '/html/body/div/div/div/div/div/div/div/div/div/ol/li/article/header/div/h3/a/span')
    #     for i in content1:
    #         context.append(i.text)
    #     counter += 1

    browser.close()
    return context

# Update table "topic" in the database "vaccinations"
def update_topic():
    cursor = None
    conn = None
    try:
        context = get_bbc_vac()
        print(f"{time.asctime()} begin update BBC coronavirus vaccine data")
        conn, cursor = get_conn()
        sql = "insert into topic(dt,content) values(%s,%s)"
        ts = time.strftime("%Y-%m-%d %X")
        for i in context:
            cursor.execute(sql, (ts, i))
        conn.commit()
        print(f"{time.asctime()} data update finished")
    except:
        traceback.print_exc()
    finally:
        close_conn(conn, cursor)

# CREATE TABLE `topic`(
# 	`id` int(11) NOT NULL AUTO_INCREMENT,
# 	`dt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
# 	`content` varchar(255) DEFAULT NULL,
# 	PRIMARY KEY(`id`)
# 	)ENGINE=InnoDB DEFAULT CHARSET=utf8;

if __name__ == "__main__":
    l = len(sys.argv)
    if l == 1:
        s = """
        Please add argument as either of the following:
        get_vac_data
        update_topic
        """
        print(s)
    else:
        command = sys.argv[1]
        if command == "get_vac_data":
            get_vac_data()
        elif command == "update_topic":
            update_topic()
