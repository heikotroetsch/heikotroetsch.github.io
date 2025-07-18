# Google Forms Setup Guide

## 🔐 Secure Email Collection (No API Keys Exposed!)

This method uses Google Forms to collect emails without exposing any sensitive information in your public GitHub repository.

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click **"+ Blank form"**
3. Set the form title: **"Qado Early Access Signup"**
4. Add a question:
   - **Question type**: Short answer
   - **Question**: "Email"
   - **Required**: Toggle ON
   - **Response validation**: 
     - Choose "Text" → "Email address"

## Step 2: Get Form Integration Details

1. Click **"Send"** button in your form
2. Click the **"<>"** (Link) icon  
3. Copy the form URL - it looks like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_FORM_ID/viewform
   ```

4. **Get the Form ID**: Extract the long ID between `/d/e/` and `/viewform`
   ```
   Example: 1FAIpQLSc_EXAMPLE_FORM_ID
   ```
https://docs.google.com/forms/d/e/1FAIpQLSdmJ7xmAo-hoVimNWHjWNy-ks4YY-r-QkpTbwm2JWjcjJvspg/viewform?usp=dialog

Form ID: 1FAIpQLSdmJ7xmAo-hoVimNWHjWNy-ks4YY-r-QkpTbwm2JWjcjJvspg
Entry ID: entry.940320489

5. **Get the Entry ID**:
   - Right-click on the email input field in your form
   - Choose "Inspect Element"
   - Look for `name="entry.XXXXXXXXX"` 
   - Copy the number after "entry." (e.g., `123456789`)

## Step 3: Update Your Website

In `index.html`, replace these placeholders:

```html
<!-- BEFORE -->
action="https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/formResponse"
name="entry.REPLACE_WITH_ENTRY_ID"

<!-- AFTER (example) -->
action="https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_FORM_ID/formResponse"
name="entry.123456789"
```

## Step 4: Test Your Form

1. Go to your website
2. Enter a test email
3. Click "Notify Me"
4. Check your Google Form responses - you should see the submission!

## Step 5: View Responses

**Option A: Google Forms Interface**
- Go to your form → "Responses" tab
- View individual responses or summary

**Option B: Google Sheets (Recommended)**
- In your form, click "Responses" tab
- Click the green Sheets icon
- Choose "Create a new spreadsheet"
- All future responses will automatically populate the sheet

## 🔒 Security Benefits

✅ **No API keys in your code**
✅ **No server required**
✅ **Google handles all security**
✅ **Free unlimited responses**
✅ **Automatic spam protection**
✅ **Easy to export data**

## 🚀 Your Setup Checklist

- [ ] Create Google Form
- [ ] Get Form ID
- [ ] Get Entry ID  
- [ ] Update `index.html` with your IDs
- [ ] Test submission
- [ ] Connect to Google Sheets
- [ ] Celebrate! 🎉

---

**Why this method rocks:**
- ✨ Completely secure (no secrets exposed)
- 🚀 Works immediately on GitHub Pages
- 📊 Automatic data collection in Google Sheets
- 🛡️ Built-in spam protection from Google
- 📧 Can set up email notifications for new submissions 