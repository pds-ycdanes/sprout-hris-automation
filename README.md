# HRIS Automations

This project provides automated interactions for the Sprout HRIS platform using Playwright. It is designed to handle routine tasks such as daily clock-outs and login verification via GitHub Actions.

## Project Details

- **Description**: Automated tool for interacting with Sprout HRIS (PDSC).
- **Prerequisites**:
  - [Node.js](https://nodejs.org/) (LTS version recommended)
  - npm (comes with Node.js)
  - A valid Sprout HRIS account
- **Author**: xycdanes

## Local Installation

Follow these steps to get the automation running on your local machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/pds-ycdanes/sprout-hris-automation.git
   cd hris-automations
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Install Playwright Browsers**:

   ```bash
   npx playwright install --with-deps chromium
   ```

4. **Set up Environment Variables**:
   Create a `.env` file in the root directory (do not commit this file) and add your credentials:

   ```env
   SPROUT_USERNAME=your_username
   SPROUT_PASSWORD=your_password
   ```

5. **Run the tests**:

   ```bash
   # Run login test
   npx playwright test tests/login.spec.ts

   # Run clock out automation
   npx playwright test tests/clockOut.spec.ts
   ```

## GitHub Actions Setup

The project is configured to run automatically using GitHub Actions.

### 1. Configure Secrets

To allow the workflows to run successfully, you must add your credentials to the GitHub Repository Secrets:

1. Go to your GitHub Repository -> **Settings**.
2. Navigate to **Secrets and variables** -> **Actions**.
3. Click **New repository secret** and add:
   - `SPROUT_USERNAME`: Your HRIS username.
   - `SPROUT_PASSWORD`: Your HRIS password.

### 2. Workflows

- **HRIS Clock Out** (`clockOut.yml`): Runs automatically every day at 14:05 UTC. It can also be triggered manually.
- **HRIS Login** (`login.yml`): A manual workflow used to verify that the login selectors and credentials are still valid.

### 3. Reports

After every run, Playwright generates an HTML report. This is uploaded as a GitHub Action artifact named `playwright-report` and is available for download for 30 days.

---

**Note:** The `README.md` is the only AI-generated component of this project.
**Disclaimer:** Please fork or backup this repository if there are any AI-generated commits to ensure the stability of your automation.
