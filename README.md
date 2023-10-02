# NowStackItAssignment
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_IojtdoU)
# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:
- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰
The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [✔️] My code's working just fine! 🥳
- [ ] I have recorded a video showing it working and embedded it in the README ▶️
- [✔️] I have tested all the normal working cases 😎
- [✔️] I have even solved some edge cases (brownie points) 💪
- [ ] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

# Developer's Section

## Project Development Journey 🚀

I'd like to take a moment to share the honest journey behind developing the CSV Import Web App. 😊

## Initial Research 📚

When I first encountered the problem statement, I must admit that I didn't have an immediate solution in mind. It's a complex task since I never had worked on anything similar before and I was already out of time, and I needed to start from scratch. So, I invested the initial 15 minutes in thorough research. I scoured the web, read documentation, and looked at various approaches people had taken to solve similar challenges.

## Leveraging GPT-3 🤖

To draft a structured step-by-step approach, I turned to GPT-3. It assisted me in outlining the initial plan of action to tackle the problem.

## Learning from YouTube Tutorials 📹

I also found invaluable guidance from YouTube tutorials that walked through the basics of web app development with Google Apps Script. These tutorials provided practical insights into creating web interfaces and server-side logic.

## The Step-Wise Approach 📋

Here's a concise breakdown of the approach I ultimately followed:

1. **Custom Menu Creation**: I learned how to create a custom menu in Google Sheets to integrate the web app seamlessly into the user interface.

2. **Server-Side Logic**: I started building the server-side logic in `code.gs`, defining functions that could process CSV data, create or retrieve sheets, and handle errors gracefully.

3. **Client-Side Interaction**: JavaScript in `index.html` was used to capture user input, validate it, and initiate communication with the server-side code.

4. **Styling and UI**: CSS styles were meticulously chosen in `index.html` to create an appealing and user-friendly design.

5. **Error Handling**: As the project progressed, I began to anticipate potential errors. Here are some key ones I considered:
   - Sheet Doesn't Exist: I implemented logic to create a new sheet if the specified one didn't exist.
   - Filter Column Missing: I handled situations where the filter column wasn't found in the CSV.
   - Empty CSV Files: The app now gracefully manages scenarios with empty CSV files.
  
##Working Video🎥

https://github.com/StackItHQ/stackit-hiring-assignment-IshitaSingh2003/assets/80634214/7c75f542-4d8d-4ceb-a90d-59a9d0395050


## Conclusion 🌟

This journey was a learning experience, starting with uncertainty but evolving into a fully functional solution. The collaborative effort between me, research, GPT-3, tutorials, and problem-solving ultimately led to the creation of the CSV Import Web App. I don't know what lies ahead of this project but I am appriciate the hiring team to push the candidates work on a real life solution.

If you have any feedback, I would be glad to know it. 

Link to web App: https://script.google.com/macros/s/AKfycby3YGK9PlLzWeJSuAXgOzvtM_552lXJEW3hfpgjpQ/dev

