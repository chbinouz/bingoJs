
import time,random

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import csv
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC





class linkedBot:

    def __init__(self,username,password):
        self.username=username
        self.password=password
        self.browser= webdriver.Chrome("D:\Program Files (x86)\chromedriver.exe")



    def login_linkedin(self):
        browser = self.browser
        browser.get("https://www.linkedin.com/")
        self.random_sleep()
        email=browser.find_element_by_id("session_key")
        password= browser.find_element_by_id("session_password")
        email.clear()
        password.clear()
        email.send_keys(self.username)
        self.random_sleep()
        password.send_keys(self.password)
        self.random_sleep()
        password.send_keys(Keys.RETURN)
        self.random_scrolling()

    def google_search(self,googling):
        browser=self.browser
        browser.get("https://www.google.com/")
        search = browser.find_element_by_class_name("gLFyf")
        search.clear()
        self.random_sleep()
        search.send_keys("site:linkedin.com/in/ "+self.add_And(googling))
        self.random_sleep()
        search.send_keys(Keys.RETURN)
        self.scrolldown()
        google_list=self.bf_search()
        profiles=self.linkedin_search(google_list)
        print(profiles)
        browser.quit()

    def linkedin_search(self,google_list):
        profiles=[]
        browser = self.browser
        for link in google_list:
            browser.get(link)
            self.humain_scrapping()
            src = self.browser.page_source
            soup = BeautifulSoup(src, 'lxml')
            self.humain_scrapping()
            name_div = soup.find('div',{'class':'flex-1 mr5'})
            name_loc = name_div.find_all('ul')
            name = name_loc[0].find('li').get_text().strip()
            loc = name_loc[1].find('li').get_text().strip()
            profile_title= name_div.find('h2').get_text().strip()
            connection = name_loc[1].find_all('li')[1].get_text().strip()
            info = []
            info.append(link)
            info.append(name)
            info.append(loc)
            info.append(profile_title)
            info.append(connection)
            try:
                exp_section = soup.find('section', {'id', 'experience-section'})
                exp_section.find('ul')
                li_tags=exp_section.find('div')
                a_tags=li_tags.find('a')
                job_title=a_tags.find('h3').get_text().strip()
                company_name=a_tags.find_all('p')[1].get_text().strip()
                joining_date=a_tags.find_all('h4')[0].find_all('span')[1].get_text().strip()
                exp = a_tags.find_all('h4')[1].find_all('span')[1].get_text().strip()
                edu_section= soup.find('section',{'id':'education-section'}).find('ul')
                college_name=edu_section.find('h3').get_text().strip()
                degree_name = edu_section.find('p',{'class':'pv-entity__secondary-title pv-entity__fos t-14 t-black t-normal'}).find_all('span')[1].get_text().strip()
                stream= edu_section.find('p', {'class': 'pv-entity__secondary-title pv-entity__fos t-14 t-black t-normal'}).find_all('span')[1].get_text().strip()
                degree_year= edu_section.find('p', {'class': 'pv-entity__dates t-14 t-black--light t-normal'}).find_all('span')[1].get_text().strip()
                info.append(job_title)
                info.append(company_name)
                info.append(joining_date)
                info.append(college_name)
                info.append(degree_name)
                info.append(stream)
                info.append(degree_year)
            except:
                job_title = None
                company_name = None
                joining_date = None
                college_name = None
                degree_name = None
                stream = None
                degree_year = None
            finally:
                csv_file = open('scraping.csv','a')
                csv_writer = csv.writer(csv_file, delimiter=';')
                csv_writer.writerow([link,name,loc,profile_title,connection,job_title,company_name,joining_date,college_name,degree_name,stream,degree_year])
                print(info)
                profiles.append(info)
            csv_file.close()
        return profiles

    def random_scrolling(self):
        for x in range(1,random.randint(1,4)):
            for i in range(0, random.randint(500, 900)):
                self.browser.execute_script("window.scrollTo(0," + str(i) + ");")
                time.sleep(random.uniform(0.001, 0.0005))
                print("down")
            for x in range(0, random.randint(500,1000 )):
                self.browser.execute_script("window.scrollBy(0,-1 );")
                time.sleep(random.uniform(0.001, 0.0005))
                print("top")
        self.random_sleep()

    def scrolldown(self):
        for i in range(0, random.randint(500, 900)):
            self.browser.execute_script("window.scrollTo(0," + str(i) + ");")
            time.sleep(random.uniform(0.001,0.0005))
            print("down")



    def humain_scrapping(self):
        random.choice([self.random_sleep(),self.random_scrolling()])



    def random_sleep(self):
        time.sleep(random.randint(1,5))

    def add_And(self,chaine):
        tmp = chaine.split()
        fin=""
        for tmp1 in tmp:
            tmp1= tmp1+" AND"
            fin = fin+" "+tmp1
        return fin

    def bf_search(self):
        src = self.browser.page_source
        soup = BeautifulSoup(src, 'lxml')
        self.random_sleep()
        print(soup)
        profilesQueued = []
        visitedProfiles = []
        self.random_sleep()
        profilesID = []
        pav = soup.find_all('div', {'class': 'yuRUbf'})
        print(pav)
        for pavi in pav:
            link = pavi.find('a')
            userId=link.get('href')
            user=str(userId)
            print(user)
            if user.__contains__('linkedin') :
                profilesID.append(userId)
        return profilesID



link = linkedBot("firasghost@gmail.com","firas.1997")

link.login_linkedin()
link.google_search("web developer")


