# Steps to reproduce
1. Configure an auth environment with Google social sign in enabled, add `amplifyconfiguration.json` to `src`
2. `npm install`
3. `npm run build && npm run preview`
4. Click sign in button
5. After being redirected to Google login, click the back button
6. Sign in button is frozen

Note that if you run `npm run dev` (`vite`) the buttons don't freeze
