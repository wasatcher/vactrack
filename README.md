# Vactrack: a real time COVID-19 vaccination tracker

#### Stacks used: HTML, CSS, Javascript(Echarts.js, JQuery, JSON), Ajax, MySQL, Python(Flask, Selenium, Yake, gunicorn), Nginx
* An interactive single-page website using **Flask** to track COVID-19 vaccination worldwide.
* Front-end: **HTML**, **CSS** and **Echarts.js** for interactive full-screen styling;  
**JSON** is passed by **JQuery** and **Ajax**;  
Real time vaccination data acquired and stored data in **MySQL**.  
* A **word cloud module** is incorporated by crawling news titles from BBC news using **Selenium** and analyzing using **Yake** library to extract keywords.

# An example to deploy: http://vactrack.coolthing.tk/  
This site is deployed in production mode using **Gunicorn** in Linux server and enabled data-updating automatically by using **cron** command to task Python script to crawl vaccination data periodically so that visualization of the updated data in the front end is real time.
- Server: **Ubuntu 20.04.2 LTS**
- Python3 modules: **pandas sqlalchemy pymysql flask yake selenium gunicorn**
- Install *Chrome* and *ChromeDriver*
- Install and configure **Nginx**1.19: 
```
location / {
        proxy_pass http://127.0.0.1:8080; #gunicorn will run on port 8080
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
```
- Install **MySQL**5.7
- Set cron using the following commands so that it executes Python scripts get_vac_data() and update_topic() periodically
```crontab -e
0 5,17 * * * python3 /xxx/vactrack/update.py get_vac_data >> xxx/vactrack/log_vac 2>&1 &
0 5,17 * * * python3 /xxx/vactrack/update.py update_topic >> xxx/vactrack/log_topic 2>&1 &
```
