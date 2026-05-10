# 🚀 Map My Room - Complete Hostinger Deployment Guide
## No Local Setup Required - Deploy Directly from GitHub

---

## **TABLE OF CONTENTS**
1. [Quick Start (5 minutes)](#quick-start)
2. [Firebase Setup](#firebase-setup)
3. [Google OAuth Configuration](#google-oauth-configuration)
4. [Domain Setup](#domain-setup)
5. [Hostinger Configuration](#hostinger-configuration)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## **QUICK START**

### **What You'll Need**
- Hostinger account with domain (mapmyroom.com)
- GitHub account (vangara1/map-my-room already set up)
- Firebase account (free tier works)
- Google Cloud Console access
- 30-40 minutes total

### **Architecture Overview**
```
GitHub Repository
    ↓
Hostinger Git Integration
    ↓
Auto Build & Deploy (npm install → npm run build → npm start)
    ↓
https://mapmyroom.com (Live Production)
    ↓
Firebase (Auth + Firestore)
```

---

## **STEP 1: Firebase Setup (10 minutes)**

### **1.1 Create Firebase Project**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **Create Project**
3. Enter project name:
   ```
   Project Name: map-my-room
   ```
4. Accept terms and create
5. Wait for project creation (1-2 minutes)

### **1.2 Get Firebase Credentials**

1. In Firebase Console, click **Project Settings** (⚙️ icon)
2. Go to **Service Accounts** tab
3. Under "SDK setup and configuration", select **Node.js**
4. Copy the entire config object:

```javascript
{
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-bucket.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
}
```

**Save these values** - you'll need them in Step 5.

### **1.3 Enable Google Authentication**

1. In Firebase Console, go to **Authentication**
2. Click **Get Started**
3. Click **Google** provider
4. Toggle **Enable** to ON
5. Set "Project support email" (use your email)
6. Click **Save**

### **1.4 Create Firestore Database**

1. Go to **Firestore Database**
2. Click **Create Database**
3. Choose:
   - Location: `nam5` (United States) or closest to your users
   - Mode: **Production mode**
4. Click **Create**
5. Wait 1 minute for database creation

### **1.5 Set Firestore Security Rules**

1. In Firestore, go to **Rules** tab
2. Delete default rules
3. Paste this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Hotels collection
    match /hotels/{hotelId} {
      allow read, write: if request.auth.uid in resource.data.owners;
    }
    
    // Bookings collection
    match /bookings/{bookingId} {
      allow read, write: if request.auth != null;
    }
    
    // Rooms collection
    match /rooms/{roomId} {
      allow read, write: if request.auth != null;
    }
    
    // Default deny
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

4. Click **Publish**

✅ **Firebase Setup Complete**

---

## **STEP 2: Google OAuth Configuration (10 minutes)**

### **2.1 Create Google Cloud Project**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click project dropdown at top
3. Click **New Project**
4. Enter:
   ```
   Project Name: Map My Room
   ```
5. Click **Create**
6. Wait for project creation

### **2.2 Enable Google+ API**

1. In Google Cloud Console, go to **APIs & Services**
2. Click **Enable APIs and Services**
3. Search for **Google+ API**
4. Click it and click **Enable**
5. Wait 30 seconds

### **2.3 Create OAuth Credentials**

1. Go to **Credentials** (left sidebar)
2. Click **Create Credentials**
3. Choose **OAuth 2.0 Client ID**
4. If prompted to create OAuth consent screen:
   - Click **Configure Consent Screen**
   - Choose **External**
   - Fill in:
     ```
     App Name: Map My Room
     User Support Email: your-email@gmail.com
     Developer Contact: your-email@gmail.com
     ```
   - Save and continue
   - Add scopes: `userinfo.email`, `userinfo.profile`
   - Add test users (your email)
   - Save

5. Back to **Create Credentials**
6. Choose **Web Application**
7. Name: `Hostinger Production`
8. Add Authorized JavaScript origins:
   ```
   https://mapmyroom.com
   https://www.mapmyroom.com
   http://localhost:3000
   ```
9. Add Authorized redirect URIs:
   ```
   https://mapmyroom.com/
   https://www.mapmyroom.com/
   http://localhost:3000/
   ```
10. Click **Create**
11. Copy the **Client ID** - you'll need this

### **2.4 Link Google OAuth to Firebase**

1. Go back to Firebase Console
2. **Authentication** → **Google** provider
3. Paste the Google OAuth **Client ID** in the field
4. Click **Save**

### **2.5 Add Authorized Domains to Firebase**

1. In Firebase **Authentication** → **Settings**
2. Go to **Authorized domains**
3. Click **Add domain**
4. Add:
   ```
   mapmyroom.com
   www.mapmyroom.com
   localhost:3000
   ```

✅ **Google OAuth Setup Complete**

---

## **STEP 3: Domain Setup (5 minutes)**

### **3.1 Connect Domain to Hostinger**

1. Log into [Hostinger Dashboard](https://www.hostinger.com/dashboard)
2. Go to **Domains**
3. If domain is not yet connected:
   - Click **Connect Domain**
   - Enter: `mapmyroom.com`
   - If using external registrar:
     - Note Hostinger's nameservers
     - Update at your registrar
     - Wait 24-48 hours for propagation

### **3.2 Verify DNS Setup**

1. In Hostinger, go to **Domains** → `mapmyroom.com` → **DNS**
2. Verify you have:
   ```
   A Record:    @          → Hostinger IP
   CNAME Record: www        → mapmyroom.com
   ```

### **3.3 Verify Domain Ownership (Optional but Recommended)**

```bash
# Test DNS resolution (from terminal)
nslookup mapmyroom.com
# Should show Hostinger IP address
```

✅ **Domain Setup Complete**

---

## **STEP 4: GitHub Repository Check (2 minutes)**

### **4.1 Verify Repository Structure**

1. Go to [GitHub Repository](https://github.com/vangara1/map-my-room)
2. Verify you see:
   ```
   ✅ /app (all pages)
   ✅ /components (all components)
   ✅ /lib (Firebase config)
   ✅ /hooks (React hooks)
   ✅ /providers (Auth/Toast)
   ✅ /types (TypeScript types)
   ✅ /styles (CSS)
   ✅ /public (assets)
   ✅ package.json
   ✅ next.config.js
   ✅ tsconfig.json
   ✅ tailwind.config.ts
   ✅ middleware.ts
   ```

### **4.2 Create .env File in GitHub**

⚠️ **NEVER commit .env.local to GitHub!**

Instead, we'll add environment variables directly in Hostinger.

✅ **Repository Ready**

---

## **STEP 5: Hostinger Configuration (15 minutes)**

### **5.1 Connect GitHub Repository to Hostinger**

1. Log into [Hostinger Dashboard](https://www.hostinger.com/dashboard)
2. Go to **Hosting** → Your hosting plan
3. Go to **Git** section
4. Click **Connect Repository**
5. Click **GitHub** (authorize if needed)
6. Select: `vangara1/map-my-room`
7. Choose branch: `main`
8. Set deployment path: `/public_html`
9. Click **Connect**

### **5.2 Add Environment Variables**

1. In Hostinger Hosting dashboard
2. Go to **Environment Variables**
3. Add each variable (from Firebase credentials):

```
NEXT_PUBLIC_FIREBASE_API_KEY
Value: [Your Firebase API Key]

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
Value: your-project.firebaseapp.com

NEXT_PUBLIC_FIREBASE_PROJECT_ID
Value: your-project-id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
Value: your-bucket.appspot.com

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
Value: your-sender-id

NEXT_PUBLIC_FIREBASE_APP_ID
Value: your-app-id
```

**Example of where to find these in Firebase:**
- Go to Firebase Project Settings → General
- Copy the `firebaseConfig` object
- Match each value to the environment variable

### **5.3 Configure Build Settings**

1. In Hostinger **Hosting** → **Build Settings**
2. Configure:
   ```
   Framework: Next.js
   Build command: npm run build
   Start command: npm start
   Node.js version: 18.17.0 (or latest LTS)
   Output directory: .next
   Root directory: /
   Install command: npm install
   ```

### **5.4 Configure SSL Certificate**

1. Go to **Hosting** → **SSL/TLS**
2. Click **Auto-generate** or **Issue Certificate**
3. Wait for certificate generation (usually instant)
4. Enable **Force HTTPS** redirect
5. Verify "Active" status appears

### **5.5 Enable Caching & Compression**

1. Go to **Hosting** → **Performance**
2. Enable:
   - ✅ Gzip compression
   - ✅ Caching
   - ✅ Image optimization
3. Set cache time: 3600 seconds (1 hour)

### **5.6 Enable Security Features**

1. Go to **Hosting** → **Security**
2. Enable:
   - ✅ DDoS Protection
   - ✅ Web Application Firewall (WAF)
   - ✅ Rate limiting
3. Leave defaults and save

✅ **Hostinger Configuration Complete**

---

## **STEP 6: Deploy to Production (5 minutes)**

### **6.1 Trigger Initial Deployment**

1. In Hostinger **Hosting** → **Git**
2. Click the **Deploy** button
3. Wait for build to complete (5-15 minutes)
4. Watch the logs:
   ```
   Installing dependencies...
   Running build...
   Deployment successful!
   ```

### **6.2 Monitor Deployment Progress**

Hostinger will show:
```
⏳ Installing npm packages
⏳ Building application
⏳ Optimizing for production
✅ Deployment Complete
```

### **6.3 Access Your Live Site**

1. Visit `https://mapmyroom.com`
2. You should see the landing page with:
   - Hero section
   - Features
   - Pricing
   - Testimonials
   - FAQ
   - Footer

### **6.4 Test Authentication Flow**

1. Click **Sign In**
2. Click **Sign in with Google**
3. Authenticate with Google
4. Should redirect to `/dashboard`
5. Click **Sign out** in profile menu
6. Should redirect to home page

✅ **Live Production Deployment Complete!**

---

## **STEP 7: Continuous Deployment Setup**

### **7.1 Enable Auto-Deploy**

1. Hostinger **Hosting** → **Git**
2. Toggle **Auto-deploy on push** to ON
3. Now every push to `main` auto-deploys

### **7.2 Test Auto-Deploy**

1. Make a small change to code locally or in GitHub
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test auto-deploy"
   git push origin main
   ```
3. Watch Hostinger auto-deploy (5-10 minutes)
4. Changes appear live automatically

### **7.3 Create Staging Environment (Optional)**

1. In GitHub, create `develop` branch
2. In Hostinger, create second build:
   - **Git** → **Add Another Build**
   - Branch: `develop`
   - Domain: `staging.mapmyroom.com`
   - Auto-deploy: ON
3. Push to `develop` to test before production

✅ **Continuous Deployment Ready**

---

## **STEP 8: Verification Checklist**

### **Before Declaring Live:**

- [ ] ✅ Site loads at `https://mapmyroom.com`
- [ ] ✅ SSL certificate shows (green lock in browser)
- [ ] ✅ Landing page displays correctly
- [ ] ✅ Google Sign-In works
- [ ] ✅ Dashboard redirects when authenticated
- [ ] ✅ Logout works and redirects to home
- [ ] ✅ All pages load (Features, Pricing, About, Contact)
- [ ] ✅ Responsive on mobile (test with DevTools)
- [ ] ✅ No console errors
- [ ] ✅ Firebase authentication working
- [ ] ✅ Google Analytics tracking (if enabled)

### **Performance Check:**

1. Open Chrome DevTools (F12)
2. Go to **Lighthouse** tab
3. Run audit for Desktop
4. Target scores:
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 90+
   - SEO: 95+

---

## **STEP 9: Post-Deployment Monitoring**

### **Daily Checks**

```bash
# Check site is up
curl -I https://mapmyroom.com
# Should return 200 OK

# Check SSL
echo | openssl s_client -servername mapmyroom.com -connect mapmyroom.com:443 2>/dev/null | openssl x509 -noout -dates
# Should show valid dates
```

### **Monitor Firebase**

1. Firebase Console → **Authentication**
   - Check signups and activity
2. Firebase Console → **Firestore**
   - Monitor reads/writes
3. Firebase Console → **Crash Reporting**
   - Check for errors

### **Monitor Hostinger**

1. Hostinger Dashboard → **Hosting**
   - Check uptime: should be 99.9%+
   - Check bandwidth usage
   - Check storage used
2. Hostinger **Logs**
   - Check for errors in deployment
   - Check nginx/web server logs

### **Weekly Tasks**

1. Review Firebase metrics
2. Check SSL certificate expiry
3. Review error logs
4. Test login/logout flow
5. Performance audit (Lighthouse)

---

## **TROUBLESHOOTING**

### **Issue: "Site Not Found" or 404**

**Solution:**
```bash
# 1. Check DNS propagation
nslookup mapmyroom.com

# 2. Wait 24-48 hours if recently updated

# 3. Clear browser cache
# Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)

# 4. Force HTTPS redirect in Hostinger
# Hosting → SSL/TLS → Force HTTPS
```

### **Issue: Authentication Not Working**

**Solution:**
```javascript
// 1. Verify Firebase credentials in Hostinger Environment Variables
// Hosting → Environment Variables

// 2. Check authorized domains in Firebase
// Firebase → Authentication → Settings → Authorized domains
// Must include: mapmyroom.com, www.mapmyroom.com

// 3. Check Google OAuth authorized URIs
// Google Cloud Console → Credentials → OAuth 2.0 Client ID
// Must include: https://mapmyroom.com/ and https://www.mapmyroom.com/

// 4. Clear browser cookies/storage
// DevTools → Application → Clear storage
```

### **Issue: Deployment Fails**

**Solution:**
```bash
# 1. Check Node.js version
# Hostinger must have Node 18+

# 2. Review build logs in Hostinger
# Hosting → Logs → Build log

# 3. Common issues:
# - Missing dependencies: npm install
# - TypeScript errors: Check tsconfig.json
# - Port conflicts: Already handled by Next.js

# 4. Restart build
# Hosting → Git → Deploy (again)
```

### **Issue: Slow Performance**

**Solution:**
```bash
# 1. Enable compression
# Hostinger → Performance → Enable Gzip

# 2. Enable caching
# Hostinger → Performance → Cache enabled

# 3. Optimize images
# Already done (Next.js Image component)

# 4. Check Firebase quotas
# Firebase Console → Quotas
# Upgrade plan if limits exceeded

# 5. Run Lighthouse audit
# Chrome DevTools → Lighthouse
# Address suggestions
```

### **Issue: CORS Errors in Console**

**Solution:**
```javascript
// 1. Firebase should handle CORS automatically

// 2. If persists, check Firebase domain allowlist
// Firebase → Authentication → Settings → Authorized domains

// 3. For custom APIs, add CORS headers
// Already configured in next.config.js
```

### **Issue: Environment Variables Not Loading**

**Solution:**
```bash
# 1. Verify all NEXT_PUBLIC_* variables added
# Hostinger → Environment Variables

# 2. Redeploy after adding variables
# Hostinger → Git → Deploy

# 3. Variables must have NEXT_PUBLIC_ prefix
# Only NEXT_PUBLIC_* are available in browser

# 4. Check variable names exactly match:
NEXT_PUBLIC_FIREBASE_API_KEY        (✅ correct)
FIREBASE_API_KEY                    (❌ wrong - won't be available)
```

### **Issue: "Maximum build time exceeded"**

**Solution:**
```bash
# 1. Check package.json for heavy dependencies
# Remove unused packages

# 2. Clear npm cache in Hostinger
# Hosting → Reset deployment

# 3. Check build command
# Should be: npm run build

# 4. Optimize code
# Remove large files from /public
# Use dynamic imports for large components
```

---

## **SECURITY BEST PRACTICES**

### **1. Protect Sensitive Data**

✅ **DO:**
```javascript
// Store in Hostinger Environment Variables
NEXT_PUBLIC_FIREBASE_API_KEY=xxx

// Use in code
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
```

❌ **DON'T:**
```javascript
// Don't hardcode secrets
const apiKey = "AIzaSyC..."

// Don't commit .env files
git add .env.local  // ❌ WRONG
```

### **2. Enable HTTPS**

✅ Hostinger → **SSL/TLS** → **Force HTTPS** ON

### **3. Security Headers**

✅ Already configured in `next.config.js`:
```javascript
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### **4. DDoS Protection**

✅ Hostinger → **Security** → **DDoS Protection** ON

### **5. Web Application Firewall**

✅ Hostinger → **Security** → **WAF** ON

### **6. Firebase Security Rules**

✅ Already configured in Firestore Rules (see Step 1.5)

---

## **SCALING & OPTIMIZATION**

### **If Site Gets Slow:**

1. **Upgrade Hostinger Plan**
   - Currently on standard plan
   - Upgrade to Business for more resources

2. **Optimize Firebase**
   - Current: Free tier
   - Upgrade to Pay-as-you-go when needed

3. **Use CDN**
   - Hostinger includes CloudFlare
   - Already enabled by default

4. **Database Optimization**
   - Add indexes in Firestore
   - Optimize queries in components

### **If Traffic Increases:**

1. **Auto-scaling**
   - Hostinger handles automatically
   - No action needed

2. **Caching**
   - Increase cache duration
   - Hostinger → Performance → Cache TTL

3. **Image Optimization**
   - Already using Next.js Image
   - Automatic WebP conversion

---

## **MAINTENANCE SCHEDULE**

### **Daily**
- ✅ Monitor Hostinger dashboard
- ✅ Check site availability
- ✅ Review Firebase errors

### **Weekly**
- ✅ Review analytics
- ✅ Check SSL cert status
- ✅ Test login flow
- ✅ Run Lighthouse audit

### **Monthly**
- ✅ Review and update dependencies
- ✅ Security audit
- ✅ Backup verification
- ✅ Performance optimization

### **Quarterly**
- ✅ Major dependency updates
- ✅ Code review
- ✅ Database optimization
- ✅ Disaster recovery test

---

## **QUICK REFERENCE**

### **Important URLs**
```
🌐 Live Site:           https://mapmyroom.com
🔐 Firebase Console:    https://console.firebase.google.com
☁️  Google Cloud:       https://console.cloud.google.com
📊 Hostinger:           https://www.hostinger.com/dashboard
📝 GitHub:              https://github.com/vangara1/map-my-room
```

### **File Locations**
```
🔧 Environment vars:    Hostinger → Environment Variables
📄 Build logs:          Hostinger → Hosting → Logs
🔐 SSL cert:            Hostinger → SSL/TLS
🌍 Domain settings:     Hostinger → Domains
```

### **Key Commands**
```bash
# Check if site is up
curl -I https://mapmyroom.com

# Check DNS
nslookup mapmyroom.com

# Check SSL expiry
echo | openssl s_client -servername mapmyroom.com -connect mapmyroom.com:443 2>/dev/null | grep dates
```

---

## **SUPPORT & RESOURCES**

### **Documentation**
- 📚 [Hostinger Docs](https://support.hostinger.com)
- 📚 [Next.js Docs](https://nextjs.org/docs)
- 📚 [Firebase Docs](https://firebase.google.com/docs)
- 📚 [Tailwind CSS](https://tailwindcss.com/docs)

### **Getting Help**
- 💬 Hostinger Support: [support.hostinger.com](https://support.hostinger.com)
- 🆘 Firebase Help: [firebase.google.com/support](https://firebase.google.com/support)
- 🐛 GitHub Issues: [github.com/vangara1/map-my-room/issues](https://github.com/vangara1/map-my-room/issues)

---

## **FINAL CHECKLIST**

### **Before Going Live:**
- [ ] Firebase project created and configured
- [ ] Google OAuth credentials set up
- [ ] Authorized domains added to Firebase
- [ ] Domain pointing to Hostinger
- [ ] GitHub repository connected to Hostinger
- [ ] Environment variables added to Hostinger
- [ ] Build settings configured
- [ ] SSL certificate issued and enabled
- [ ] DDoS protection enabled
- [ ] WAF enabled
- [ ] Auto-deploy enabled
- [ ] Site loads and responds to HTTPS
- [ ] Authentication flow works
- [ ] Lighthouse audit 90+
- [ ] Mobile responsive test passed
- [ ] Error logs checked
- [ ] Backup configured

---

## **🎉 You're Live!**

Your Map My Room SaaS is now running on production at **https://mapmyroom.com**

**Next Steps:**
1. Monitor site daily
2. Gather user feedback
3. Implement feature requests
4. Scale as needed
5. Grow your business! 📈

---

**Last Updated:** May 10, 2026
**Status:** Production Ready ✅
