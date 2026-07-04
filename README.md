# Jessica Emad — UI/UX Designer Portfolio

This is the source code for the professional portfolio website of **Jessica Emad Fawzy**, UI/UX Designer.

## 📁 Project Structure

```text
portfolio/
├── index.html          # Main HTML entry point (structure)
├── style.css           # Custom styles (presentation)
├── script.js           # JavaScript scripts (behavior)
├── images/             # Extracted portfolio images (profile photo & projects)
│   ├── profile.jpg
│   ├── project1.jpg
│   └── project2.jpg
├── .gitignore          # Files ignored by Git
└── README.md           # Project documentation and deployment guide
```

---

## 🚀 How to Run Locally

You can open this website locally on your computer in two ways:
1. **Direct Open**: Just double-click the `index.html` file, and it will open in your default web browser (Chrome, Edge, Firefox, Safari).
2. **Local Server (Recommended)**: If you use VS Code, install the **Live Server** extension, right-click `index.html`, and select **Open with Live Server** to run it at `http://127.0.0.1:5500`.

---

## 🌐 How to Host on GitHub Pages (طريقة الرفع والتشغيل مجاناً)

Follow these simple steps to upload your portfolio to GitHub and host it live:

### 1. Create a GitHub Repository (إنشاء مستودع على جيت هاب)
1. Go to [GitHub](https://github.com/) and log in (or create an account).
2. Click the **"+"** icon in the top-right corner and select **New repository**.
3. Name your repository (e.g., `portfolio` or `jessica-portfolio`).
4. Set it to **Public**.
5. Do **NOT** initialize with a README or .gitignore (since we already have them here).
6. Click **Create repository**.

### 2. Upload Your Files (رفع الملفات)
You can upload the files directly from the browser:
1. On your new repository page, click the link that says **"uploading an existing file"**.
2. Drag and drop all the files from this folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `images/` (the folder)
   - `.gitignore`
   - `README.md`
3. Wait for the files to upload.
4. Add a commit message (e.g., "Initial commit of portfolio website").
5. Click **Commit changes**.

*(Alternatively, if you use Git in the command line, run the commands displayed on GitHub's setup page).*

### 3. Turn on GitHub Pages (تفعيل رابط الموقع)
1. Go to the **Settings** tab of your repository on GitHub.
2. In the left sidebar, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** -> **Source**, make sure **Deploy from a branch** is selected.
4. Under **Branch**, change **None** to **`main`** (or `master`), select **`/ (root)`**, and click **Save**.
5. Wait 1–2 minutes, then refresh the page.
6. A box will appear at the top saying: *"Your site is live at `https://<username>.github.io/<repo-name>/`"*.
7. Click the link to view your live website!

---

## 🛠️ Customization

- **Info & Projects**: You can edit the text and project details in the `index.html` file using any text editor (like VS Code or Notepad++).
- **Images**: If you want to change any image, just overwrite the corresponding file in `images/` with your new image using the same name and file extension.
