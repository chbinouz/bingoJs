from flask import Flask
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify,request
import time,random
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import csv
import threading


app = Flask(__name__)

app.config['MONGO_URI']="mongodb://127.0.0.1:27017/Pi"

mongo = PyMongo(app)
@app.route('/run/<search>',methods=['POST'])
def scrapping_run(search):
    class linkedBot:

        def __init__(self, username, password):
            self.username = username
            self.password = password
            self.browser = webdriver.Chrome("D:\Program Files (x86)\chromedriver.exe")

        def login_linkedin(self):
            browser = self.browser
            browser.get("https://www.linkedin.com/")
            self.random_sleep()
            email = browser.find_element_by_id("session_key")
            password = browser.find_element_by_id("session_password")
            email.clear()
            password.clear()
            email.send_keys(self.username)
            self.random_sleep()
            password.send_keys(self.password)
            self.random_sleep()
            password.send_keys(Keys.RETURN)
            time.sleep(10)
            #self.random_scrolling()

        def google_search(self, googling):
            browser = self.browser
            browser.get("https://www.google.com/")
            search = browser.find_element_by_class_name("gLFyf")
            search.clear()
            self.random_sleep()
            search.send_keys("site:linkedin.com/in/ " + self.add_And(googling))
            self.random_sleep()
            search.send_keys(Keys.RETURN)
            # self.scrolldown()
            google_list = self.bf_search()
            profiles = self.linkedin_search(google_list)
            print(profiles)
            browser.quit()

        def linkedin_search(self, google_list):
            profiles = []
            browser = self.browser
            for link in google_list:
                browser.get(link)
                #self.humain_scrapping()
                time.sleep(6)
                src = self.browser.page_source
                soup = BeautifulSoup(src, 'lxml')
                #self.humain_scrapping()
                json = request.json
                namej=None
                try:
                    try:
                        name_div = soup.find('div', {'class': 'flex-1 mr5'})
                    except:
                        name_div = None
                    try:
                        name_loc = name_div.find_all('ul')
                    except:
                        name_loc = None
                    try:
                        name = name_loc[0].find('li').get_text().strip()
                    except:
                        name = None
                    try:
                        loc = name_loc[1].find('li').get_text().strip()
                    except:
                        loc = None
                    try:
                        profile_title = name_div.find('h2').get_text().strip()
                    except:
                        profile_title = None
                    try:
                        connection = name_loc[1].find_all('li')[1].get_text().strip()
                    except:
                        connection = None
                    info = []
                    info.append(link)
                    info.append(name)
                    info.append(loc)
                    info.append(profile_title)
                    info.append(connection)
                    job_title = None
                    company_name = None
                    joining_date = None
                    exp=None
                    location=None
                    college_name = None
                    degree_name = None
                    stream = None
                    degree_year = None
                    experiences = []
                    education = []
                    profiles = []
                except:
                    pass
                try:
                    exp_section = soup.find('section', {'class', 'pv-profile-section experience-section ember-view'})
                    exp_section.find('ul', {'class','pv-profile-section__section-info section-info pv-profile-section__section-info--has-no-more'})
                    li_tags = exp_section.find_all('li')
                
                    for li_tagses in li_tags:
                        try:
                            a_tags = li_tagses.find('a', {'class', 'full-width ember-view'})
                        except:
                            a_tags = 'None'
                        try:
                            job_title = a_tags.find('h3').get_text().strip()
                        except:
                            job_title = 'None'
                        try:
                            company_name = a_tags.find_all('p')[1].get_text().strip()
                        except:
                            company_name = 'None'
                        try:
                            joining_date = a_tags.find_all('h4')[0].find_all('span')[1].get_text().strip()
                        except:
                            joining_date = "None"
                        try:
                            exp = a_tags.find_all('h4')[1].find_all('span')[1].get_text().strip()
                        except:
                            exp = "None"
                        try:
                            location = a_tags.find('h4', {'class','pv-entity__location t-14 t-black--light t-normal block'}).find_all('span')[1].get_text().strip()
                        except:
                            location = "None"
                        experience = []
                        experience.append(job_title)
                        experience.append(company_name)
                        experience.append(joining_date)
                        experience.append(exp)
                        experience.append(location)
                        experiences.append(experience)
                        time.sleep(1)
                    info.append(experiences)
                except:
                    pass
                try:
                    edu_section = soup.find('section', {'id': 'education-section'}).find('ul')
                    li_tags = edu_section.find_all('li', {'class',
                                                          'pv-profile-section__list-item pv-education-entity pv-profile-section__card-item ember-view'})
                    for li in li_tags:
                        try:
                            college_name = li.find('h3').get_text().strip()
                        except:
                            college_name = "None"
                        try:
                            degree_name = li.find('p', {
                                'class': 'pv-entity__secondary-title pv-entity__fos t-14 t-black t-normal'}).find_all(
                                'span')[1].get_text().strip()
                        except:
                            degree_name = "None"
                        try:
                            stream = li.find('p', {
                                'class': 'pv-entity__secondary-title pv-entity__grade t-14 t-black t-normal'}).find_all(
                                'span')[1].get_text().strip()
                        except:
                            stream = "None"
                        try:
                            degree_year = \
                                li.find('p', {'class': 'pv-entity__dates t-14 t-black--light t-normal'}).find_all(
                                    'span')[
                                    1].get_text().strip()
                        except:
                            degree_year = "None"
                        educ = []
                        educ.append(college_name)
                        educ.append(degree_name)
                        educ.append(stream)
                        educ.append(degree_year)
                        education.append(educ)
                    info.append(education)
                except:
                    pass
                try:
                    semilar_profiles = soup.find('section',
                                                 {"class",
                                                  "artdeco-card pv-browsemap-section__wrapper ember-view"}).find("div",{"class","pv-browsemap-section"})
                    li_tag = semilar_profiles.find("ul", {"class", "browsemap"}).find_all("li", {"class",
                                                                                                 "pv-browsemap-section__member-container ember-view"})
                    # print(li_tag)
                    # ul=browser.find_element_by_class_name("browsemap")
                    # li = ul.find_elements_by_class_name('pv-browsemap-section__member-container-new-rail ember-view')
                    # print("aaaaaaaaaaaaaaaaaaa")
                    # print(li)
                    for l in li_tag:
                        # a=l.find_element_by_tag_name('a')
                        profile = l.find("a").get('href')
                        profiles.append("https://www.linkedin.com" + profile)
                        google_list.append("https://www.linkedin.com" + profile)
                        print(profile)
                    info.append(profiles)
                except:
                    pass
                finally:
                    csv_file = open('scraping.csv', 'a')
                    csv_writer = csv.writer(csv_file, delimiter=';')
                    try:
                        csv_writer.writerow(
                            [link, name, loc, profile_title, connection, experiences, education, profiles])
                    except:
                        print("it was an error here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                    print(info)
                    print('******google list******')
                    print(google_list)
                    profiles.append(info)
                    mongo.db.link.insert({'link':link,'name':name,'location':loc,'profile_title':profile_title,'experience':[],'education':[],'semilar_profiles':[]})
                    for ex in experiences:
                        mongo.db.link.update({'link':link},{'$push':{'experience':{'job title':ex[0],'company name':ex[1],'joining_date':ex[2],'exp':ex[3],'location':ex[4]}}})
                    for etude in education:
                        mongo.db.link.update({'link': link}, {'$push': {
                            'education': {'college_name': etude[0], 'degree_name': etude[1], 'stream': etude[2],'degree_year': etude[3]}}})
                    try:
                        for prof in profiles:
                            print()
                            mongo.db.link.update({'link': link},{'$push':{'semilar_profiles':prof}})
                    except:
                        pass
                csv_file.close()
            return profiles

        def random_scrolling(self):
            for x in range(1, random.randint(1, 4)):
                for i in range(0, random.randint(500, 900)):
                    self.browser.execute_script("window.scrollTo(0," + str(i) + ");")
                    time.sleep(random.uniform(0.00001, 0.00000005))
                    # print("down")
                for x in range(0, random.randint(500, 1000)):
                    self.browser.execute_script("window.scrollBy(0,-1 );")
                    time.sleep(random.uniform(0.00001, 0.00000005))
                    # print("top")
            self.random_sleep()

        def scrolldown(self):
            for i in range(0, random.randint(500, 900)):
                self.browser.execute_script("window.scrollTo(0," + str(i) + ");")
                time.sleep(random.uniform(0.00001, 0.00000005))
            # print("down")

        def humain_scrapping(self):
            random.choice([self.random_sleep(), self.random_scrolling()])

        def random_sleep(self):
            time.sleep(random.randint(1, 5))

        def add_And(self, chaine):
            tmp = chaine.split()
            fin = ""
            for tmp1 in tmp:
                tmp1 = tmp1 + " AND"
                fin = fin + " " + tmp1
            return fin

        def bf_search(self):
            src = self.browser.page_source
            soup = BeautifulSoup(src, 'lxml')
            # self.random_sleep()
            # print(soup)
            profilesQueued = []
            visitedProfiles = []
            # self.random_sleep()
            profilesID = []
            pav = soup.find_all('div', {'class': 'yuRUbf'})
            # print(pav)
            for pavi in pav:
                link = pavi.find('a')
                userId = link.get('href')
                user = str(userId)
                print(user)
                x = user.replace(user[0:10], 'https://www')
                print(x)
                if user.__contains__('linkedin'):
                    profilesID.append(x)
            return profilesID

    link = linkedBot("passaron.papasarouni@gmail.com", "firas.1997")
        # link.browser.quit()
        # passaron.papasarouni@gmail.com/firas.1997/firasghost@gmail.com
    link.login_linkedin()
    link.google_search(search)
    return 'Hello World!'


@app.route('/hello')
def helloWord():
    return 'hello chbinouuz'
if __name__ == '__main__':
    app.run(debug=True)





