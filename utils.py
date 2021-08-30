import time
import pymysql

def get_time():
    return time.strftime("%Y-%m-%d %X")

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

# query() is used for query the database
def query(sql, *args):
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res

# get c1 c2 data
# SQL clauses
# SELECT sum(total_vaccinations) FROM vac INNER JOIN loc ON (vac.location=loc.location) WHERE vac.date=loc.last_observation_date;
def get_c1c2_data():
    sql = "select sum(total_vaccinations),sum(people_vaccinated),sum(people_fully_vaccinated),sum(daily_vaccinations),sum(total_vaccinations)/78447441,sum(people_vaccinated)/78447441,sum(people_fully_vaccinated)/78447441 from vac INNER JOIN loc ON (vac.location=loc.location) WHERE vac.date=loc.last_observation_date"
    res = query(sql)
    return res[0]

# get c3 data
def get_c3_data():
    sql = "select loc.location,vac.total_vaccinations from vac INNER JOIN loc ON (vac.location=loc.location) WHERE vac.date=loc.last_observation_date"
    res = query(sql)
    return res

# get l1 data
def get_l1_data():
    sql = "select date,location,total_vaccinations from vac where (location='Africa' OR location='Asia' OR location='Europe' OR location='North America' OR location='South America' OR location='Argentina' OR location='Australia' OR location='Brazil' OR location='Canada' OR location='China' OR location='France' OR location='Germany' OR location='India' OR location='Indonesia' OR location='Italy' OR location='Japan' OR location='South Korea' OR location='Mexico' OR location='Russia' OR location='Saudi Arabia' OR location='South Africa' OR location='Turkey' OR location='United Kingdom' OR location='United States')  AND date like '2021%%'"
    res = query(sql)
    return res

# get l2 data
def get_l2_data():
    sql = "select date,location,people_fully_vaccinated_per_hundred from vac where (location='Argentina' OR location='Australia' OR location='Brazil' OR location='Canada' OR location='China' OR location='France' OR location='Germany' OR location='India' OR location='Indonesia' OR location='Italy' OR location='Japan' OR location='South Korea' OR location='Mexico' OR location='Russia' OR location='Saudi Arabia' OR location='South Africa' OR location='Turkey' OR location='United Kingdom' OR location='United States')  AND date like '2021%%'"
    res = query(sql)
    return res

# get r1 data
def get_r1_data():
    sql = "select loc.location,vac.daily_vaccinations_per_million from vac INNER JOIN loc on (vac.location=loc.location) WHERE vac.date=loc.last_observation_date ORDER BY daily_vaccinations_per_million DESC LIMIT 10"
    res = query(sql)
    return res

# get r2 data
def get_r2_data():
    sql = "select content from topic ORDER BY id DESC LIMIT 100"
    res = query(sql)
    return res

if __name__ == "__main__":
    print(type(get_r2_data()))
    print(get_r2_data())