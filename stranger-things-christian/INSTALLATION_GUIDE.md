# Windows Installation & GitLab Pages Deployment Guide
## Step-by-Step Instructions for Upside Down Faith Website

---

## 📋 Prerequisites Check

Before starting, verify you have:
- Windows 10 or 11
- Internet connection
- Admin rights on your PC

---

## 🔧 Step 1: Install Node.js and npm

### 1.1 Download Node.js
1. Open your web browser
2. Go to: https://nodejs.org/
3. Click the **"Download"** button for the **LTS version** (Long Term Support)
4. Save the `.msi` file to your Downloads folder

### 1.2 Install Node.js
1. Navigate to your **Downloads** folder
2. **Double-click** the `node-vxx.x.x-lts.msi` file
3. Click **"Run"** if security prompt appears
4. In the Setup wizard:
   - Click **"Next"**
   - Accept the license agreement → **"Next"**
   - Keep default destination folder → **"Next"**
   - Keep default features → **"Next"**
   - Click **"Install"**
   - Click **"Yes"** if User Account Control prompt appears
5. Wait for installation to complete
6. Click **"Finish"**

### 1.3 Verify Installation
1. Press **Windows Key + R**
2. Type `cmd` and press **Enter**
3. In the black command window, type:
   ```
   node --version
   ```
4. Press **Enter** - you should see version number (e.g., v18.17.0)
5. Type:
   ```
   npm --version
   ```
6. Press **Enter** - you should see npm version (e.g., 9.6.7)
7. Type `exit` and press **Enter** to close command window

---

## 📁 Step 2: Install Git

### 2.1 Download Git
1. Open web browser
2. Go to: https://git-scm.com/download/win
3. Click the **"Download"** link for Windows
4. Save the `.exe` file to Downloads

### 2.2 Install Git
1. Open Downloads folder
2. **Double-click** `Git-x.x.x.x-64-bit.exe`
3. Click **"Run"** if prompted
4. In Setup wizard:
   - Click **"Next"**
   - Keep default components → **"Next"**
   - Keep default editor (Notepad++) → **"Next"**
   - Keep default PATH setting → **"Next"**
   - Keep default HTTPS transport → **"Next"**
   - Keep default line endings → **"Next"**
   - Keep default terminal emulator → **"Next"**
   - Keep default behavior → **"Next"**
   - Keep default extra options → **"Next"**
   - Click **"Install"**
5. Wait for installation
6. Click **"Finish"**

### 2.3 Verify Git Installation
1. Press **Windows Key + R**
2. Type `cmd` and press **Enter**
3. Type:
   ```
   git --version
   ```
4. Press **Enter** - you should see git version
5. Type `exit` and press **Enter**

---

## 📂 Step 3: Set Up Project Folder

### 3.1 Create Project Directory
1. Press **Windows Key + E** to open File Explorer
2. Navigate to **C:\Users\YourUsername\** (replace YourUsername with your actual username)
3. **Right-click** in empty space
4. Select **"New"** → **"Folder"**
5. Name the folder `stranger-things-christian`
6. **Double-click** the new folder to open it

---

## 💻 Step 4: Install React Project Dependencies

### 4.1 Open Command Prompt in Project Folder
1. In the project folder window, **click** the address bar at the top
2. Type `cmd` and press **Enter**
3. A command window will open with the correct path

### 4.2 Install Dependencies
1. In the command window, type:
   ```
   npm install
   ```
2. Press **Enter**
3. Wait for installation (this may take 2-5 minutes)
4. You should see "added X packages" when complete

### 4.3 Test Local Development
1. In the same command window, type:
   ```
   npm start
   ```
2. Press **Enter**
3. Wait for compilation to complete
4. Your default browser should automatically open to http://localhost:3000
5. You should see the "Upside Down Faith" website
6. **Close the browser tab**
7. In the command window, press **Ctrl + C** to stop the server
8. Type `Y` and press **Enter** to terminate

---

## 🌐 Step 5: Set Up Git Repository

### 5.1 Initialize Git
1. In the same command window, type:
   ```
   git init
   ```
2. Press **Enter**
3. Type:
   ```
   git add .
   ```
4. Press **Enter**
5. Type:
   ```
   git commit -m "Initial commit"
   ```
6. Press **Enter**

### 5.2 Create GitLab Account (if needed)
1. Open web browser
2. Go to: https://gitlab.com/
3. Click **"Sign up"** if you don't have an account
4. Fill in registration form
5. Verify your email address
6. Sign in to GitLab

### 5.3 Create GitLab Project
1. In GitLab, click **"New project"**
2. Select **"Create blank project"**
3. Project name: `stranger-things-christian`
4. Project slug: `stranger-things-christian` (auto-filled)
5. Visibility Level: **"Public"**
6. Uncheck "Initialize repository with a README"
7. Click **"Create project"**
8. Copy the HTTPS URL (looks like: https://gitlab.com/username/stranger-things-christian.git)

### 5.4 Connect Local Repo to GitLab
1. In your command window, type:
   ```
   git remote add origin https://gitlab.com/username/stranger-things-christian.git
   ```
   (replace username with your GitLab username)
2. Press **Enter**
3. Type:
   ```
   git push -u origin main
   ```
4. Press **Enter**
5. Enter your GitLab username and password when prompted
6. Wait for push to complete

---

## 🔧 Step 6: Configure for GitLab Pages

### 6.1 Create GitLab CI/CD Configuration
1. In your project folder (C:\Users\YourUsername\stranger-things-christian)
2. **Right-click** in empty space
3. Select **"New"** → **"Text Document"**
4. Rename the file to: `.gitlab-ci.yml` (including the dot at the beginning)
5. **Double-click** the file to open it in Notepad
6. Copy and paste this content:

```yaml
# GitLab CI/CD Configuration for React App
image: node:18

pages:
  stage: deploy
  cache:
    paths:
      - node_modules/
  script:
    - npm install
    - npm run build
    - mkdir -p public
    - cp -r build/* public/
  artifacts:
    paths:
      - public
  only:
    - main
```

7. Click **"File"** → **"Save"**
8. Close Notepad

### 6.2 Update package.json for GitLab Pages
1. **Double-click** the `package.json` file in your project folder
2. It should open in your default browser or text editor
3. Find the `"homepage"` line (if it exists) or add it at the top:
   ```json
   {
     "homepage": "https://username.gitlab.io/stranger-things-christian",
     "name": "stranger-things-christian",
   ```
   (replace username with your GitLab username)
4. Save and close the file

### 6.3 Commit and Push Changes
1. In your command window, type:
   ```
   git add .gitlab-ci.yml package.json
   ```
2. Press **Enter**
3. Type:
   ```
   git commit -m "Add GitLab Pages configuration"
   ```
4. Press **Enter**
5. Type:
   ```
   git push
   ```
6. Press **Enter**
7. Enter credentials if prompted

---

## 🚀 Step 7: Deploy to GitLab Pages

### 7.1 Trigger Deployment
1. Go to your GitLab project in your web browser
2. Click on **"CI/CD"** in the left menu
3. Click on **"Pipelines"**
4. You should see a pipeline running (blue circle)
5. Wait for it to complete (green checkmark) - this may take 5-10 minutes

### 7.2 Access Your Website
1. In GitLab, go to **"Settings"** → **"Pages"**
2. Your website URL will be displayed
3. Click the URL to visit your live website
4. Format: https://username.gitlab.io/stranger-things-christian

---

## 🔄 Step 8: Making Updates

### 8.1 Update Your Website
1. Make changes to your code files
2. In your command window, type:
   ```
   git add .
   ```
3. Press **Enter**
4. Type:
   ```
   git commit -m "Your update description"
   ```
5. Press **Enter**
6. Type:
   ```
   git push
   ```
7. Press **Enter**
8. GitLab will automatically rebuild and deploy your changes

### 8.2 Check Deployment Status
1. Go to GitLab → **"CI/CD"** → **"Pipelines"**
2. Watch the pipeline progress
3. Your site updates automatically when pipeline completes

---

## 🛠️ Troubleshooting

### Common Issues:

**"npm command not found"**
- Restart your computer after Node.js installation
- Verify Node.js was installed correctly

**"git command not found"**
- Restart your computer after Git installation
- Verify Git was installed correctly

**Pipeline fails**
- Check the `.gitlab-ci.yml` file for correct spacing (YAML is sensitive to spaces)
- Make sure all files were committed before pushing

**Website shows 404 error**
- Wait 10-15 minutes after successful pipeline
- Check GitLab Pages settings to ensure deployment is enabled

**Build errors**
- Check that all dependencies installed correctly
- Run `npm install` again if needed

---

## 📱 Testing Your Website

1. **Desktop Testing**: Visit your URL in Chrome, Firefox, Edge
2. **Mobile Testing**: Use browser developer tools (F12) to test mobile view
3. **Interactive Features**: Test mouse movements, hover effects, forms
4. **Content Management**: Test adding links, videos, blog posts

---

## ✅ Success Checklist

- [ ] Node.js installed and working
- [ ] Git installed and working  
- [ ] Project dependencies installed
- [ ] Local development server runs
- [ ] Git repository created on GitLab
- [ ] Code pushed to GitLab
- [ ] CI/CD pipeline configured
- [ ] Website deployed to GitLab Pages
- [ ] All interactive features working
- [ ] Mobile responsive design working

---

## 🎉 You're Done!

Your "Upside Down Faith" website is now live on GitLab Pages! 
Share your URL: https://username.gitlab.io/stranger-things-christian

For updates, just make changes and push to GitLab - deployment is automatic!
