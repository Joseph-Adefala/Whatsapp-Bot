# WhatsApp Bot Installation and Running Instructions

This guide will help you install and run the WhatsApp bot on your Samsung Galaxy A03 Core device using Termux. Follow the steps carefully to set up the bot successfully.

## Prerequisites
- A Samsung Galaxy A03 Core device
- Internet connection
- Termux installed on your device

## Step 1: Install Termux
1. Download Termux from the [Google Play Store](https://play.google.com/store/apps/details?id=com.termux) or [FDroid](https://f-droid.org/packages/com.termux/).
2. Open Termux after installation.

## Step 2: Update Termux Packages
Before installing any packages, update the bundled packages:
```bash
pkg update && pkg upgrade
```

## Step 3: Install Required Packages
You need to install `git`, `curl`, and `nodejs`. Execute the following commands:
```bash
pkg install git curl nodejs
```

## Step 4: Clone the WhatsApp Bot Repository
Clone the repository to your local Termux environment:
```bash
git clone https://github.com/Joseph-Adefala/Whatsapp-Bot.git
```

## Step 5: Navigate to the Repository Folder
Change directory to the cloned repository:
```bash
cd Whatsapp-Bot
```

## Step 6: Install Bot Dependencies
Install the required Node.js dependencies:
```bash
npm install
```

## Step 7: Configure the Bot
1. You may need to create a configuration file, such as `.env`, for your WhatsApp credentials. 
2. Follow the guidelines in the repository for the required fields.

## Step 8: Running the Bot
Run the bot using the following command:
```bash
node index.js
```

## Command Documentation
- `pkg install <package_name>`: Installs a specified package.
- `git clone <repository_url>`: Clones the specified repository to your local environment.
- `npm install`: Installs the Node.js project dependencies from package.json.
- `node <script.js>`: Executes the specified JavaScript file.

## Troubleshooting
- **If you run into permission issues:** Make sure Termux has the necessary permissions for storage, etc.
- **If the bot doesn't run:** Double-check your configuration file for accuracy.
- **Common Errors:** Check the repository’s Issues section on GitHub for similar problems.

## Security Notes
- Do not expose your API keys or credentials publicly.
- Regularly update your bot and dependencies to prevent vulnerabilities.
- Use HTTPS and secure connections where applicable.

### Conclusion
You now have the WhatsApp bot set up on your Samsung Galaxy A03 Core device using Termux. Follow the steps above, and you should be able to run the bot successfully. If you have any issues, please refer to the troubleshooting section or reach out for help.
