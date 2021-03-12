from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import csv
import re
from parsel import Selector
import urllib3

df1 = []
df2 = []
df3 = []
df4 = []
df5 = []

driver = webdriver.Chrome("chromedriver.exe")
driver.get('https://www.linkedIn.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin')

username = driver.find_element_by_id("session_key")
sleep(2)
username.send_keys("rockpicasso5@gmail.com")
password = driver.find_element_by_id("session_password")
sleep(3)
password.send_keys("lionelmessi<3")
login_button = driver.find_element_by_class_name("sign-in-form__submit-button")
login_button.click()
for i in range(10):
    driver.get('https://www.google.com')
    sleep(3)

    search_query = driver.find_element_by_name('q')
    search_query.send_keys('site:linkedin.com/in/ AND "python developer" AND "FLORIDA"' + 'page' + '' + str(i))
    sleep(0.5)
    search_query.send_keys(Keys.RETURN)
    sleep(3)

    linkedin_urls = driver.find_element_by_class_name('iUh30')
    linkedin_urls = [url.text for url in linkedin_urls]
    linkedin_urls = [i.split('', 2)[2] for i in linkedin_urls]
    print(linkedin_urls)
    sleep(0.5)

    driver.get('https://www.linkedin.com/in/mechergui-rayen-060389207/')

    driver.page_source

    sleep(0.5)
    for linkedin_url in linkedin_urls:
        driver.get('https://www.linkedin.com/in/' + linkedin_url)
        sleep(5)
        sel = Selector(text=driver.page_source)

        print('\n')
        name = sel.xpath('//*[starts-with(@class,"inline t-24 t-black t-normal break-words")]/text()').extract_first
        if name:
            name = name.strip()
            print('Name:' + name)
            df1.append(name)
        job_title = sel.xpath('//h2/text()').extract_first()
        if job_title:
            job_title = job_title.strip()
            print('Job Title:' + job_title)
            df2.append(job_title)
        location = sel.xpath('//*[starts-with(@class,"t-16 t-black t-normal inline-block")]/text()').extract_first

        if location:
            location = location.strip()
            print('Location :' + location)
            df3.append(location)
        employer = sel.xpath(
            '//*[starts-with(@class,"text-align-left m12 t-14 t-black t-bold full-width lt-line-clamp lt-line-clamp--multi-line ember-view")]/text()').extract_first
        if employer:
            employer = employer.strip()
            print('Company: ' + employer)
            df4.append(employer)
        education = sel.xpath('//*[starts-with(@id,"ember96")]/text()').extract_first()

        if education:
            education = education.strip()
            print('College: ' + education)
            df5.append(education)
        print('URL: ' + 'https://www.linkedin.com/in/' + linkedin_url)
        print('\n')

        linkedin_url = driver.current_url
    import pandas as pd

    linkedin = pd.DataFrame([df1, df2, df3, df4, df5])
    linkedin.to_csv('auto_link.csv')
