# This is a sample Python script.

# Press Maj+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

import pandas as pd
import re
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep
from parsel import Selector

browser = webdriver.Chrome("chromedriver.exe")
browser.get("https://www.linkedin.com")
username = browser.find_element_by_id("session_key")
sleep(2)
username.send_keys("rockpicasso5@gmail.com")
password = browser.find_element_by_id("session_password")
sleep(3)
password.send_keys("lionelmessi<3")
login_button = browser.find_element_by_class_name("sign-in-form__submit-button")
login_button.click()
sleep(2)
for i in range(100):
    browser.get('https://www.google.com')
    sleep(3)

    search_query = browser.find_element_by_name('q')
    search_query.send_keys('site:linkedin.com/in/ AND "python developer" AND "Tunisia"' + 'page' + ' ' + str(i))
    sleep(0.5)
    search_query.send_keys(Keys.RETURN)
    sleep(3)

    linkedin_urls = browser.find_elements_by_class_name('iUh30')
    linkedin_urls = [url.text for url in linkedin_urls]
    linkedin_urls = [i.split(' ', 0)[0] for i in linkedin_urls]
    print(linkedin_urls)
    sleep(0.5)

    browser.get('https://www.linkedin.com/in/mechergui-rayen-060389207/')

    browser.page_source

    sleep(0.5)
    df1=[]
    job = browser.find_elements_by_class_name("job-card-square__title")
    for linkedin_url in job:
        browser.get('https://www.linkedin.com/in/' + linkedin_url)
        sleep(5)
        sel = Selector(text=browser.page_source)

        print('\n')

        print('URL: ' + 'https://www.linkedin.com/in/' + linkedin_url)
        print('\n')

        linkedin_url = browser.current_url

        import pandas as pd

        linkedin = pd.DataFrame(df1)
        linkedin.to_csv('auto_link.csv')
