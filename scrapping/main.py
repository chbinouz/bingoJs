from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time

path = 'C:\Program Files (x86)\chromedriver.exe'

driver = webdriver.Chrome(path)

driver.get("https://www.techwithtim.net")
input = driver.find_element_by_name('s')
input.send_keys("test")
input.send_keys(Keys.RETURN)





try:
    main = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "main"))
    )
    articles = main.find_elements_by_tag_name("article")
    for article in articles:
        header = article.find_element_by_class_name("entry-summary")
        print(header.text+"***")
        # for i in range(0, 50):
        #     driver.execute_script("window.scrollTo(0," + str(i) + ");")
        #     time.sleep(0.0001)
finally:
    # for i in range(0, 50):
    #     driver.execute_script("window.scrollTo(0," + str(i) + ");")
    #     time.sleep(0.0001)
    print("fin")
    driver.back()


time.sleep(3)
# for i in range(0, 100):
#     driver.execute_script("window.scrollTo(0," + str(i)+ ");")
#     time.sleep(0.0005)

try:
    link = WebDriverWait(driver, 15).until(
            EC.presence_of_element_located((By.LINK_TEXT, "Python Programming"))
        )
    link.click()
    print("link")
    ads = WebDriverWait(driver, 15).until(
        EC.presence_of_element_located((By.ID, "ad_position_box"))
    )
    ads.click()
    print("ds")

    element = WebDriverWait(driver, 15).until(
        EC.presence_of_element_located((By.LINK_TEXT, "Beginner Python Tutorials"))
    )
    element.click()
    print("element")
    started = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "sow-button-19310003"))
    )
    started.click()
except:
    print("error")
finally:
    driver.quit()












