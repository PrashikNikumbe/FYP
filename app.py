from flask import Flask, render_template, request,redirect,url_for,session
import sqlite3
from flask_sqlalchemy import SQLAlchemy
import numpy as np
import pickle
import spacy
import pickle
import random
import nlp
nlp_model = spacy.load('nlp_model')
import os
import re
import sys, fitz
from sqlalchemy import desc


app = Flask(__name__)
app.config['SECRET_KEY'] = 'This is a secret key required for session'

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///careersaga.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

UPLOAD_FOLDER1 = 'C:\\Users\\hp\\Desktop\\FinalYr\\Project\\static\\profilepic'
app.config['UPLOAD_FOLDER1'] = UPLOAD_FOLDER1

UPLOAD_FOLDER2 = 'C:\\Users\\hp\\Desktop\\FinalYr\\Project\\static\\resumes'
app.config['UPLOAD_FOLDER2'] = UPLOAD_FOLDER2

UPLOAD_FOLDER3 = 'C:\\Users\\hp\\Desktop\\FinalYr\\Project\\static\\jobResumes'
app.config['UPLOAD_FOLDER3'] = UPLOAD_FOLDER3

UPLOAD_FOLDER4 = 'C:\\Users\\hp\\Desktop\\FinalYr\\Project\\static\\recprofilepic'
app.config['UPLOAD_FOLDER4'] = UPLOAD_FOLDER4

careermodel = pickle.load(open('careermodel.pkl','rb'))
personalitymodel = pickle.load(open('personalitymodel.pkl','rb'))


app.jinja_env.trim_blocks = True
app.jinja_env.lstrip_blocks = True

class applicantLogin(db.Model):
    username = db.Column(db.String(100), primary_key=True)
    email = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)

class recruiterLogin(db.Model):
    username = db.Column(db.String(100), primary_key=True)
    email = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(200), nullable=False)

class applicantProfile(db.Model):
    username = db.Column(db.String(100), primary_key=True)
    title = db.Column(db.String(100))
    city = db.Column(db.String(100))
    likendin = db.Column(db.String(100))
    github = db.Column(db.String(100))
    twitter = db.Column(db.String(100))
    instagram = db.Column(db.String(100))
    facebook = db.Column(db.String(100))
    fullname = db.Column(db.String(100))
    email = db.Column(db.String(100))
    mobile = db.Column(db.String(100))
    college = db.Column(db.String(100))
    specialization = db.Column(db.String(100))
    skill1 = db.Column(db.String(100))
    skill2 = db.Column(db.String(100))
    skill3 = db.Column(db.String(100))
    skill4 = db.Column(db.String(100))
    skill5 = db.Column(db.String(100))
    aptitude = db.Column(db.String(100))
    personality = db.Column(db.String(100))
    age = db.Column(db.String(100))
    cgpa = db.Column(db.String(100))
    experience = db.Column(db.String(100))

class recruiterProfile(db.Model):
    username = db.Column(db.String(100), primary_key=True)
    title = db.Column(db.String(100))
    city = db.Column(db.String(100))
    likendin = db.Column(db.String(100))
    github = db.Column(db.String(100))
    twitter = db.Column(db.String(100))
    instagram = db.Column(db.String(100))
    facebook = db.Column(db.String(100))
    fullname = db.Column(db.String(100))
    email = db.Column(db.String(100))
    mobile = db.Column(db.String(100))
    company = db.Column(db.String(100))
    experience = db.Column(db.String(100))
    skill1 = db.Column(db.String(100))
    skill2 = db.Column(db.String(100))
    skill3 = db.Column(db.String(100))
    skill4 = db.Column(db.String(100))
    skill5 = db.Column(db.String(100))
    companyinfo = db.Column(db.String(1000))




class applicantPersonality(db.Model):
    username = db.Column(db.String(100), primary_key=True)
    personality = db.Column(db.String(100))
  
class applicantCareer(db.Model):
    username = db.Column(db.String(100), primary_key=True)
    career = db.Column(db.String(100))
  

class aptiTest(db.Model):
    username = db.Column(db.String(100), primary_key=True)
    apti = db.Column(db.String(10))



class jobNotice(db.Model):
    username = db.Column(db.String(100), primary_key=True)
    jobtitle = db.Column(db.String(100), nullable=False)
    jobdesc = db.Column(db.String(10000),nullable=False)
    Jinfo = db.Column(db.String(10000))

class jobApplicants(db.Model):
    srno = db.Column(db.Integer, primary_key=True)
    Ausername = db.Column(db.String(100))
    Rusername = db.Column(db.String(100))
    Ainfo = db.Column(db.String(10000))
    scores = db.Column(db.Integer,default=-1)



@app.route('/')
def start():
    return redirect(url_for("applogin"))

@app.route('/applogin.html',methods=['GET', 'POST'])
def applogin():
    if request.method=='POST':
        if "newUsername" in request.form:
            formUsername = request.form['newUsername']
            row  = applicantLogin.query.filter_by(username = formUsername).first()
            if row is not None:
                return render_template('applogin.html',check1=True,check2=False)
            else:
                formUsername = request.form['newUsername']
                formEmail = request.form['newEmail']
                formPassword = request.form['newPassword']
                applicant = applicantLogin(username = formUsername,email = formEmail,password = formPassword )
                db.session.add(applicant)
                db.session.commit()
                session['username'] =  formUsername
                return redirect("applicant.html")

        elif "Username" in request.form:
            formUsername = request.form['Username']
            formPassword = request.form['Password']
            row  = applicantLogin.query.filter_by(username = formUsername).first()
            if row is None:
                return render_template('applogin.html',check1=False,check2=True)
            else:
                if row.password == formPassword:
                    session['username'] =  formUsername
                    return redirect("applicant.html")
                else:
                    return render_template('applogin.html',check1=False,check2=True)

                    
    return render_template('applogin.html',check1=False,check2=False)


@app.route('/applicant.html',methods=['GET', 'POST'])
def applicant():
    return render_template('applicant.html')


@app.route('/reclogin.html',methods=['GET', 'POST'])
def reclogin():
    if request.method=='POST':
        if "newUsername" in request.form:
            formUsername = request.form['newUsername']
            row  = recruiterLogin.query.filter_by(username = formUsername).first()
            if row is not None:
                return render_template('reclogin.html',check1=True,check2=False)
            else:
                formUsername = request.form['newUsername']
                formEmail = request.form['newEmail']
                formPassword = request.form['newPassword']
                recruiter = recruiterLogin(username = formUsername,email = formEmail,password = formPassword )
                db.session.add(recruiter)
                db.session.commit()
                session['username'] =  formUsername
                return redirect("recruiter.html")

        elif "Username" in request.form:
            formUsername = request.form['Username']
            formPassword = request.form['Password']
            row  = recruiterLogin.query.filter_by(username = formUsername).first()
            if row is None:
                return render_template('reclogin.html',check1=False,check2=True)
            else:
                if row.password == formPassword:
                    session['username'] =  formUsername
                    return redirect("recruiter.html")
                else:
                    return render_template('reclogin.html',check1=False,check2=True)

    return render_template('reclogin.html',check1=False,check2=False)

@app.route('/recruiter.html',methods=['GET', 'POST'])
def recruiter():
    return render_template('recruiter.html')

@app.route('/appprofile.html',methods=['GET', 'POST'])
def appprofile():
    username = session['username']

    if request.method=='POST':
        formUsername = session['username']
        formTitle = request.form['title']
        formCity = request.form['city']
        formLikendin = request.form['likendin']
        formGithub = request.form['github']
        formTwitter = request.form['twitter']
        formInstagram = request.form['instagram']
        formFacebook = request.form['facebook']
        formFullname = request.form['fullname']
        formEmail = request.form['email']
        formMobile = request.form['mobileno']
        formCollege = request.form['collegename']
        formSpecialization = request.form['specialization']
        formSkill1 = request.form['skill1']
        formSkill2 = request.form['skill2']
        formSkill3 = request.form['skill3']
        formSkill4 = request.form['skill4']
        formSkill5 = request.form['skill5']
        apti = aptiTest.query.filter_by(username = username).first()

        if apti is None:
            formAptitude = "NA"
        else:
            formAptitude = apti.apti

        personality = applicantPersonality.query.filter_by(username = username).first()
        if personality is None:
            formPersonality = "NA"
        else:
            formPersonality = personality.personality

        formAge = request.form['age']
        formCgpa = request.form['cgpa']
        formExperience = request.form['experience']


        profilepic = request.files['picchoose']
        resume = request.files['resumechoose']

        profilepic.save(os.path.join(app.config["UPLOAD_FOLDER1"],username+".jpg"))
        resume.save(os.path.join(app.config["UPLOAD_FOLDER2"],username+".pdf"))


        row = applicantProfile.query.filter_by(username = username).first()
        if row is None:
            appprofile = applicantProfile(username = formUsername, title = formTitle, city = formCity, likendin = formLikendin,
            github = formGithub, twitter = formTwitter, instagram = formInstagram, facebook = formFacebook,
            fullname = formFullname, email = formEmail, mobile = formMobile, college = formCollege, specialization = formSpecialization,
            skill1 = formSkill1, skill2 = formSkill2, skill3 = formSkill3, skill4 = formSkill4, skill5 = formSkill5,
            aptitude = formAptitude, personality = formPersonality, age = formAge, cgpa = formCgpa, experience = formExperience)

            db.session.add(appprofile)
            db.session.commit()
        else:
            row.title = formTitle
            row.city = formCity 
            row.likendin = formLikendin
            row.github = formGithub
            row.twitter = formTwitter 
            row.instagram = formInstagram 
            row.facebook = formFacebook
            row.fullname = formFullname
            row.email = formEmail
            row.mobile = formMobile
            row.college = formCollege
            row.specialization = formSpecialization
            row.skill1 = formSkill1
            row.skill2 = formSkill2
            row.skill3 = formSkill3
            row.skill4 = formSkill4
            row.skill5 = formSkill5
            row.aptitude = formAptitude
            row.personality = formPersonality
            row.age = formAge
            row.cgpa = formCgpa
            row.experience = formExperience
            db.session.commit()
            appprofile = applicantProfile.query.filter_by(username = username).first()

        return render_template('appprofile.html',check=True,appprofile=appprofile)

    else:
        appprofile  = applicantProfile.query.filter_by(username = username).first()
        if appprofile is None:
            return render_template('appprofile.html',check=False,username=username)
        else:
            return render_template('appprofile.html',check=True,appprofile=appprofile)

@app.route('/recprofile.html',methods=['GET', 'POST'])
def recprofile():
    username = session['username']

    if request.method=='POST':
        print(request.form)
        formUsername = session['username']
        formTitle = request.form['title']
        formCity = request.form['city']
        formLikendin = request.form['likendin']
        formGithub = request.form['github']
        formTwitter = request.form['twitter']
        formInstagram = request.form['instagram']
        formFacebook = request.form['facebook']
        formFullname = request.form['fullname']
        formEmail = request.form['email']
        formMobile = request.form['mobileno']
        formCompany = request.form['companyname']
        formExperience = request.form['experience']
        formSkill1 = request.form['skill1']
        formSkill2 = request.form['skill2']
        formSkill3 = request.form['skill3']
        formSkill4 = request.form['skill4']
        formSkill5 = request.form['skill5']
        formCompanyinfo = request.form['companyinfo']

        profilepic = request.files['picchoose']

        profilepic.save(os.path.join(app.config["UPLOAD_FOLDER4"],username+".jpg"))


        row = recruiterProfile.query.filter_by(username = username).first()
        if row is None:
            recprofile = recruiterProfile(username = formUsername, title = formTitle, city = formCity, likendin = formLikendin,
            github = formGithub, twitter = formTwitter, instagram = formInstagram, facebook = formFacebook,
            fullname = formFullname, email = formEmail, mobile = formMobile, company = formCompany, experience = formExperience,
            skill1 = formSkill1, skill2 = formSkill2, skill3 = formSkill3, skill4 = formSkill4, skill5 = formSkill5,
            companyinfo = formCompanyinfo)

            db.session.add(recprofile)
            db.session.commit()
        else:
            row.title = formTitle
            row.city = formCity 
            row.likendin = formLikendin
            row.github = formGithub
            row.twitter = formTwitter 
            row.instagram = formInstagram 
            row.facebook = formFacebook
            row.fullname = formFullname
            row.email = formEmail
            row.mobile = formMobile
            row.company = formCompany
            row.experience = formExperience
            row.skill1 = formSkill1
            row.skill2 = formSkill2
            row.skill3 = formSkill3
            row.skill4 = formSkill4
            row.skill5 = formSkill5
            row.companyinfo = formCompanyinfo
            db.session.commit()
            recprofile = recruiterProfile.query.filter_by(username = username).first()

        return render_template('recprofile.html',check=True,recprofile=recprofile)

    else:
        recprofile  = recruiterProfile.query.filter_by(username = username).first()
        if recprofile is None:
            return render_template('recprofile.html',check=False,username=username)
        else:
            return render_template('recprofile.html',check=True,recprofile=recprofile)


@app.route('/index.html',methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route('/aptitude.html',methods=['GET', 'POST'])
def aptitude():
    if request.method=='POST':
        username = session['username']
        row = aptiTest.query.filter_by(username = username).first()
        if row is None:
            score = request.form['formScore']
            apti = aptiTest(username=session['username'],apti = score)
            db.session.add(apti)
            db.session.commit()
        else:
            row.apti = request.form['formScore']
            db.session.commit()  
        return render_template('index.html')
    return render_template('aptitude.html')


@app.route('/quant.html',methods=['GET', 'POST'])
def quant():
    return render_template('quant.html')


@app.route('/english.html',methods=['GET', 'POST'])
def english2():
    return render_template('english.html')

@app.route('/logical.html',methods=['GET', 'POST'])
def logical1():
    return render_template('logical.html')





@app.route('/careertest.html',methods=['GET', 'POST'])
def careertest():
    if request.method=='POST':
        username = session['username']

        form = dict(request.form)
        lst=[]
        for i,j in form.items():
            j=float(j)
            if i=='1' or i=='2':
                cgpa=j//9.5
                cgpa=cgpa//2
                cgpa=int(cgpa)
                lst.append(cgpa)
            elif i=='3':
                cgpa=j//2
                cgpa=int(cgpa)
                lst.append(cgpa)
            else:
                j=int(j)
                lst.append(j)

        #print(form)
            
        final = np.array(lst).reshape(-1, 1)


        predict = careermodel.predict(final)


        roles = {0:"Business Analyst",1:"Data Analyst",2:"Software Developer",3:"Software Tester",
        4:"Technical Support",5:"Technical Writer",6:"UI/UX Designer",7:"Web Developer"
        }

        careerpredict = roles[predict[0]]

        row = applicantCareer.query.filter_by(username = username).first()

        if row is None:
            career = applicantCareer(username = username,career = careerpredict)
            db.session.add(career)
            db.session.commit()
        else:
            row.career = careerpredict
            db.session.commit()

        return render_template('careertest.html',check=False,careerpredict=careerpredict)
    return render_template('careertest.html',check=True,careerpredict="")

@app.route('/personalitytest.html',methods=['GET', 'POST'])
def personalitytest():
    if request.method=='POST':
        username = session['username']
        form = dict(request.form)
        lst=[]
        #print(form)
        c=0
        s=0
        for i,j in form.items():
            if i=='1' or i=='2':
                lst.append(int(j))
            else:
                if c<5:
                    s+=int(j)
                    c+=1
                    if c==5:
                        n=s/5
                        new = (((n - 1) * 7) / 4) + 1
                        new = round(new)
                        lst.append(new)
                else:
                    c=1
                    s=int(j)
        final = np.array(lst).reshape(1, -1)
        predict = personalitymodel.predict(final)
        predict = predict[0]. capitalize()

        row = applicantPersonality.query.filter_by(username = username).first()

        if row is None:
            personality = applicantPersonality(username = username,personality = predict)
            db.session.add(personality)
            db.session.commit()
        else:
            row.personality = predict
            db.session.commit()
        return render_template('personalitytest.html',check=False,personalitypredict=predict)

    return render_template('personalitytest.html',check=True,personalitypredict="")


@app.route('/job.html',methods=['GET', 'POST'])
def job():
    appUsername =  session['username']

    if request.method=='POST':
        appUsername =  session['username']
        recUsername = request.form['jobusername']
        resume = request.files['resume']
        resume.save(os.path.join(app.config["UPLOAD_FOLDER3"],appUsername+".pdf"))

        fname = app.config["UPLOAD_FOLDER3"]+"\\"+appUsername+".pdf"
        doc = fitz.open(fname)
        text = ""
        for page in doc:
            text = text + str(page.get_text())
        tx = " ".join(text.split('\n'))

        doc = nlp_model(tx)
        info={}
        for ent in doc.ents:
            entityName = ent.label_.upper()
            entity = ent.text.strip()
            lst=[]
            for i in re.split(r"[-;,:!.\s@\\\/+\*(){}<>\[\]']\s*",entity):
                if i!="":
                    lst.append(i.lower())

            if entityName in info:
                info[entityName].extend(lst)
            else:
                info[entityName]=lst
        
        jobApp = jobApplicants(Ausername = appUsername, Rusername = recUsername, Ainfo=str(info))
        db.session.add(jobApp)
        db.session.commit()

    jobs = jobNotice.query.all()
    applied = jobApplicants.query.filter_by(Ausername = appUsername).all()
    for i in jobs:
        print(i.jobdesc.strip())

        for j in applied:
            if i.username == j.Rusername:
                jobs.remove(i)
                
    if len(jobs) == 0:
        return render_template('job.html',check = True)
    else:
        return render_template('job.html',check = False, jobs = jobs)

@app.route('/jobnotice.html',methods=['GET', 'POST'])
def jobnotice():
    username = session['username']
    if request.method=='POST':
        jobtitle = request.form['formJobtitle']
        jobdesc = request.form['formJobdesc']
        jobdesc = jobdesc.strip()
        text = jobdesc
        tx = " ".join(text.split('\n'))

        doc = nlp_model(tx)
        info={}
        for ent in doc.ents:
            entityName = ent.label_.upper()
            entity = ent.text.strip()
            lst=[]
            for i in re.split(r"[-;,:!.\s@\\\/+\*(){}<>\[\]']\s*",entity):
                if i!="":
                    lst.append(i.lower())

            if entityName in info:
                info[entityName].extend(lst)
            else:
                info[entityName]=lst

        notice = jobNotice(username = username, jobtitle = jobtitle, jobdesc = jobdesc,Jinfo=str(info))
        db.session.add(notice)
        db.session.commit()
        row = jobNotice.query.filter_by(username = username).first()
        rows = jobApplicants.query.filter_by(Rusername = username).all()
        return render_template('jobnotice.html',check=False,notice=row,count=len(rows),username=username)

    else:
        row = jobNotice.query.filter_by(username = username).first()
        rows = jobApplicants.query.filter_by(Rusername = username).all()
        if row is None:
            return render_template('jobnotice.html',check=True,username=username)
        else:
            return render_template('jobnotice.html',check=False,notice=row,count=len(rows),username=username)

@app.route('/shortlist.html',methods=['GET', 'POST'])
def shortlist():
    username  = session['username']
    rows = jobApplicants.query.filter_by(Rusername = username).all()
    if len(rows) == 0:
        return render_template('shortlist.html',check = True)
    else:
        row = jobNotice.query.filter_by(username = username).one()
        jd=eval(row.Jinfo)
        for i in rows:
            score=0
            resumeinfo=eval(i.Ainfo)
            if i.scores==-1:
                for j,k in jd.items():
                    if j in resumeinfo:
                        for l in k:
                            if l in resumeinfo[j]:
                                score+=1
                i.scores=score
                db.session.commit()

        rows = jobApplicants.query.filter_by(Rusername = username).order_by(desc(jobApplicants.scores)).all()

        return render_template('shortlist.html',check = False, applicants = rows)

@app.route('/checkprofile.html/<string:username>',methods=['GET', 'POST'])
def checkprofile(username):
    appprofile = applicantProfile.query.filter_by(username = username).first()
    return render_template('checkprofile.html', appprofile = appprofile)

@app.route('/checkrecprofile.html/<string:username>',methods=['GET', 'POST'])
def checkrecprofile(username):
    recprofile = recruiterProfile.query.filter_by(username = username).first()
    return render_template('checkrecprofile.html', recprofile = recprofile)

@app.route('/deletejd/<string:username>',methods=['GET', 'POST'])
def deletejd(username):
    jd = jobNotice.query.filter_by(username = username).first()
    job = jobApplicants.query.filter_by(Rusername = username).all()
    db.session.delete(jd)
    for i in job:
        db.session.delete(i)
  
    db.session.commit()
    return redirect(url_for("jobnotice"))

if __name__ == "__main__":
    app.run(debug=True,port=5000)
