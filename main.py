"""import os,random,sys,time"""
import parameters
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import csv
from parsel import Selector
import urllib3
from bs4 import BeautifulSoup
namePerson = []
LocationOfPerson = []
ProfileTitle = []
NombreOfrelation = []
JobTitle = []
CompanyName = []
JoiningDate = []
Experience = []
CollegeName = []
DegreeName = []
Specialite = []
DegreeYears = []
list = []
temporelList = []
browser = webdriver.Chrome('C:/Users/TB kml/Desktop/chromeDrive/chromedriver.exe')
browser.get('https://www.linkedin.com/uas/login')
file = open('C:/Users/TB kml/Desktop/chromeDrive/login.txt')
lines = file.readlines()
username = lines[0]
password = lines[1]
elementID = browser.find_element_by_id('username')
sleep(0.5)
elementID.send_keys(username)
elementID = browser.find_element_by_id('password')
sleep(1)
elementID.send_keys(password)
sleep(0.5)
elementID.submit()

for i in range(10):
    browser.get('https:www.google.com')
    sleep(3)
    search_query = browser.find_element_by_name('q')
    search_query.send_keys('site:linkedin.com/in/ AND "python developer" AND "Florida"' + 'page' + ' ' + str(i))
    sleep(0.5)

    search_query.send_keys(Keys.RETURN)
    sleep(3)

    linkedin_urls = browser.find_elements_by_class_name('iUh30')
    linkedin_urls = [url.text for url in linkedin_urls]
    linkedin_urls = [i.split(' ', 2) for i in linkedin_urls]
    """print(linkedin_urls)"""
    sleep(0.5)
    temporelList.clear()
    for i in range(len(linkedin_urls)):
        i += 2 * i
        if i < len(linkedin_urls) and '...' not in (linkedin_urls[i])[2]:
            print((linkedin_urls[i])[2])
            print('-----------------------------------')
            if (linkedin_urls[i])[2] not in list:
                list.append((linkedin_urls[i])[2])
                temporelList.append((linkedin_urls[i])[2])


    browser.get('https://linkedin.com/in/mani-kandukuri-040409139/')


    browser.page_source
    # continuing on from before
    ...
    #linkedin_urls = [url.text for url in linkedin_urls]
    sleep(0.5)

#For loop to iterate over each URL in the list
    for linkedin_url in temporelList:
        k=0
        #get the profile URL
        browser.get('https://www.linkedin.com/in/' + linkedin_url)

        #add a 5 second pause looking each url
        sleep(5)
        SCROLL_PAUSE_TIME = 5

        # Get scroll height
        last_height = browser.execute_script("return document.body.scrollHeight")

        for i in range(3):
            # Scroll down to bottom
            browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")

            # Wait to load page
            sleep(SCROLL_PAUSE_TIME)

            # Calculate new scroll height and compare with last scroll height
            new_height = browser.execute_script("return document.body.scrollHeight")
            if new_height == last_height:
                break
            last_height = new_height
        #General Information
        src = browser.page_source
        soup = BeautifulSoup(src, 'lxml')
        name_div = soup.find('div', {'class': 'flex-1 mr5'})
        name_loc = name_div.find_all('ul')
        name = name_loc[0].find('li').get_text().strip()
        namePerson.append(name)
        loc = name_loc[1].find('li').get_text().strip()
        LocationOfPerson.append(loc)
        profile_title = name_div.find('h2').get_text().strip()
        ProfileTitle.append(profile_title)
        connection = name_loc[1].find_all('li')
        connection = connection[1].get_text().strip()
        NombreOfrelation.append(connection)
        #EXPERIENCE
        exp_section = soup.find('section', {'id': 'experience-section'})
        try:
            exp_section = exp_section.find('ul')
            div_tag = exp_section.find('div')
            a_tag = div_tag.find('a')
            job_title = a_tag.find('h3').get_text().strip()
            JobTitle.append(job_title)
            company_name = a_tag.find_all('p')[1].get_text().strip()
            CompanyName.append(company_name)
            try:
                joining_date = a_tag.find_all('h4')[0].find_all('span')[1].get_text().strip()
                JoiningDate.append(joining_date)
            except:
                joining_date="none"
                JoiningDate.append(joining_date)
            try:
                exp = a_tag.find_all('h4')[1].find_all('span')[1].get_text().strip()
                Experience.append(exp)
            except:
                exp = "none"
                Experience.append(exp)
        except:
            job_title = ""
            JobTitle.append(job_title)
            company_name = ""
            CompanyName.append(company_name)

        #EDUCATION
        try:
            edu_section = soup.find('section', {'id': 'education-section'}).find('ul')
            try:
                college_name = edu_section.find('h3').get_text().strip()
                CollegeName.append(college_name)
            except:
                college_name = "none"
                CollegeName.append(college_name)
            try:
                degree_name = edu_section.find('p', {'class': 'pv-entity__secondary-title pv-entity__degree-name t-14 t-black t-normal'}).find_all('span')[1].get_text().strip()
                DegreeName.append(degree_name)
            except:
                degree_name = "none"
                DegreeName.append(degree_name)
            try:
                stream = edu_section.find('p', {'class': 'pv-entity__secondary-title pv-entity__fos t-14 t-black t-normal'}).find_all('span')[1].get_text().strip()
                Specialite.append(stream)
            except:
                stream = "none"
                Specialite.append(stream)
            try:
                degree_year = edu_section.find('p', {'class': 'pv-entity__dates t-14 t-black--light t-normal'}).find_all('span')[1].get_text().strip()
                DegreeYears.append(degree_year)
            except:
                degree_year = "none"
                DegreeYears.append(degree_year)
        except:
            college_name ="none"
            CollegeName.append(college_name)
            degree_name ="none"
            DegreeName.append(degree_name)
            stream = "none"
            Specialite.append(stream)
            degree_year = "none"
            DegreeYears.append(degree_year)

        import pandas as pd
        #linkedin = pd.DataFrame([namePerson, LocationOfPerson, ProfileTitle, NombreOfConnections, JobTitle, CompanyName, JoiningDate, Experience, CollegeName, DegreeName, Specialite,DegreeYears])
        #CompanyName.append(" ")
        #col = ["Company Name", "Job Title", "Location"]
        df = pd.DataFrame({"namePerson":[namePerson],"LocationOfPerson" :[LocationOfPerson],"ProfileTitle":[ProfileTitle],"NombreOfRelation":[NombreOfrelation],"JobTitle":[JobTitle],"CompanyName":[CompanyName],"JoiningDate":[JoiningDate],"Experience":[Experience],"CollegeName":[CollegeName],"DegreeName":[DegreeName],"Specialite":[Specialite],"DegreeYears":[DegreeYears]})
        #linkedin.to_csv('dataLinkedin.csv',sep=";",index=False)
        df.to_json('linkedinData.json')
        namePerson.clear()
        LocationOfPerson.clear()
        ProfileTitle.clear()
        NombreOfrelation.clear()
        JobTitle.clear()
        CompanyName.clear()
        JoiningDate.clear()
        Experience.clear()
        CollegeName.clear()
        DegreeName.clear()
        Specialite.clear()
        DegreeYears.clear()