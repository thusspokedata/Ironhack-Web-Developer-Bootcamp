<a id='section0'></a>
### Table of Contents
+ [Linux Installation](#section1)
+ [Mac OS Installation](#section2)
+ [Windows OS installations](#section8)
+ [Command Line](#section3)
+ [Advanced terminal usage](#section4)
+ [Visual Studio Code basics](#section5)
+ [Advanced Linux OS installations](#section6)
+ [Advanced MAC OS installations](#section7)

<a id='section1'></a>
<h1>Linux Installation</h1>

[Back to Index](#section0)

**Step #1: Install Terminator**

sudo apt-get update

sudo apt-get install terminator


**Step #2: Install ZSH**

sudo apt-get install zsh

sudo apt-get install git-core

wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh

hsh -s `which zsh`

**Step #3: Install Oh-My-ZSH**

sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

**Step #4: Install Visual Studio Code**

sudo snap install --classic code

<em>Once installed, the Snap will take care of automatically updating VS Code in the background. You will get an in-product update notification whenever a new update is available.
 

:star: If Snap isn’t available in your Linux distribution, please check the following guide, which can help you get that setup. </em>

**Step #5: Install Google Chrome**

* Visit https://www.google.com/chrome/ and click on Download Chrome
* In the dialogue box, click on accept and install. A compressed file will then be downloaded from the site.
* Click on it and follow the installation instructions.

**Step #6: Install Git**

sudo apt-get install git

git --version

git config --global user.name "John Doe"

git config --global user.email "johndoe@example.com"

<a id='section2'></a>
<h1>Mac OS Installation</h1>

[Back to Index](#section0)

https://my.ironhack.com/cohorts/61a7b19bfa82e1002c5383dd/lms/courses/course-v1:IRONHACK+WDPREWORK55+MASTER/modules/ironhack-course-chapter_2/units/ironhack-course-chapter_2-sequential-vertical

**Step #1: Install iTerm2**

https://iterm2.com/downloads.html


* Download the Stable Release.

* Decompress the zip file.

* In Finder, drag-and-drop the iTerm2 Application file into the Applications folder.

* Launch iTerm2 by simply clicking on the Spotlight Search and type iTerm2.

* :bulb: Fix the launcher in the Dock navigation bar:

* Check the image inside

* To launch iTerm later, click on its icon in the App Launcher.

* Now we should be able to run iTerm2!

**Step #2: Install the Xcode Command Line Tools**

xcode-select --install

**Step #3: Install Homebrew**

$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

brew

brew update

brew update

**Step #4: Install ZSH**

Zsh is an interactive login shell. As with the regular terminal, it enables the communication between the user and the computer. It provides many useful features as bash but also adds many new ones.

brew install zsh

zsh --version

**Step #5: Install Oh-My-ZSH**

Many developers choose to add the Oh-My-Zsh library on top of ZSH. Oh-My-Zsh is an open-source framework for managing your ZSH configuration. Once installed, we will be able to take advantage of the hundreds of bundled plugins and pretty themes that are available on the Internet.

curl -L http://install.ohmyz.sh | sh


**Step #6: Install Visual Studio Code**

* Download the application from https://code.visualstudio.com/;
    
* Extract the zip file you just downloaded in your “Desktop”;
    
* Drag the new Visual Studio Code application into your “Applications” folder - this step is super important since it will allow you to open your files (.html, .css, .js, etc.) directly from the terminal just by typing code name-of-the-file;

* To launch it, double click on the VS Code icon.

```
$ ~
$ cd Desktop # cd stands for change directory, and we use it to navigate
$ mkdir test-vs-code # mkdir is the terminal command to create a new folder
$ cd test-vs-code
$ touch index.html # touch is a terminal command that allows us to create files
$ code index.html # this line allows us to open index.html using VS Code
```

<p>:warning: What could have gone wrong?:</p>

In case you got an error after code index.html that says code: **command not found**, that means that you didn’t drag VS Code app to the Application folder. Go ahead and put it to the right place, and try to do open the file again (type again code index.html). If it still doesn’t work, do the next:

<ol>
 <li>Open VS Code app (double click on the icon)</li>
 <li>Open the Command Palette via Shift + Command + p (⇧⌘p) and type shell command to find the Shell Command: Install 'code' command in PATH.</li>
<li>Close VS Code and go to terminal and try opening index.html again.</li>

**Step #7: Install Google Chrome**

+ Visit https://www.google.com/chrome/ and click on Download Chrome
+ In the dialogue box, click on accept and install. A compressed file will then be downloaded from the site.
+ Click on it and follow the installation instructions.

**Step #8: Install Git**

```
$ git --version
# the result: git version 2.19.0

$ git config --global user.name "John Doe"
$ git config --global user.email "johndoe@example.com"
```
 
<a id='section8'></a>
<h1>Windows OS installations</h1>

[Back to Index](#section0)
 
<h3>Step #1: Update your computer</h3>
 
<ul>
 <li>Press the Windows key and type <em>check for</em> to search.</li>
 <li>Click on the <em>Check for updates</em> result.</li>
 <li>Follow the instructions to update and restart your computer.</li>
 <li>Repeat the previous three steps until you have no more updates</li>
</ul> 
 
<h3>Step #2: Install Visual Studio Code</h3>
 
<p>VS Code’s site will detect your <a href="https://en.wikipedia.org/wiki/Operating_system" target="_blank" rel="noopener noreferrer">OS</a> automatically. Visit <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/</a> and download it by clicking on the <em>Download</em> button.</p>
 
<ul>
 <li>Download the installer from <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/</a>.</li>
 <li>Click on the installer to open it.</li>
 <li>Follow the installation steps to install VS Code on your computer.</li>
 <li>When you click <em>Finish</em>, it will open the VS Code automatically.</li>
</ul>
 
 
 <h3>Step #3: Install Google Chrome</h3>
 
 <h3>Step #4: Install Git</h3>
 
<ol>
<li>Download the latest <a href="https://gitforwindows.org/" target="_blank" rel="noopener noreferrer">Git for Windows installer</a>.</li>
<li>When you have successfully started the installer, you should see the Git Setup wizard screen. Follow the <em>Next</em> prompts to complete the installation. As default options are pretty sensible for most users you should stick to the default recommended settings provided by the installer.</li>
<li>Once you click <em>Install</em>, Git and Git Bash will be installed.</li>
<li>Once installed, press the Windows key and type <em>Git Bash</em> to search.</li>
<li>Select <em>Git Bash</em> by pressing the <em>right-click</em>, then select <em>Pin to taskbar</em> to create a shortcut for easy access.</li>
</ol>
 
**Basic configuration**
 
<p>The first thing you should do after installing Git is to set your user name and email address (meaning, you are establishing yourself as a user).</p>

<p>You will be using the Git Bash terminal for accessing files and folders, as well as using <strong>git</strong> and other tools you will learn during the bootcamp.</p>
 
<ul>
<li>Press the Windows key and type <strong><em>git bash</em></strong> to search.</li>
<li>Right-click the <strong><em>Git Bash</em></strong> result to <strong><em>Run as administrator</em></strong>.</li>
<li>In the Git Bash window, paste and run the following two lines, one after another: (<strong>without the <code>$</code> and replacing “John Doe” and <a href="mailto:%22johndoe@example.com">"johndoe@example.com</a>" with your info</strong>):</li>
</ul>
 
```
$ git config --global user.name "John Doe"
$ git config --global user.email "johndoe@example.com"
```

<a id='section3'></a>
<h1>Command Line</h1>

[Back to Index](#section0)

* Display your computer’s name:

```
$ hostname
 # => myComputer
```
* Display the name of the current user:
```
$ whoami
  # => myUser
```

+ Display the current directory (pwd = print working directory):
```
$ pwd
# =>  /home/myUser
```
<h3>Cool Tricks</h3>
+ Navigate directly to the root path:
```
$ cd /
```
+ Navigate directly to our user’s home path:
```
$ cd ~
```
+ Navigate directly to the previous working directory:
```
$ cd -
```
<h3>List Files - ls</h3>

+ Add -l to get a detailed listing:
```
$ ls -l
```
+ Add -t to sort the results by file time:
```
$ ls -t
```
+ Add -S to sort by file size:
```
$ ls -S
```
+ Add -r to reverse the sorting:
```
$ ls -r
```
+ Add -a to include hidden files:
```
$ ls -a
```
+ If you type ls -la, the result will be the detailed list of files, including the hidden ones.
```
$ ls -la
```

<h3>Create and remove files</h3>

+ Create a new folder, enter the new folder using cd, and then create several txt files using touch:
```
$ mkdir my-files
$ cd my-files
$ touch file-1.txt
$ touch file-2.txt
$ touch file-3.txt

```
+ Short-hand would be having all touch commands in one line:
```
$ mkdir my-files
$ cd my-files
$ touch file-1.txt file-2.txt file-3.txt
```
+ Also, you can combine two or more commands in one line, and save some keystrokes:
```
$ mkdir & cd my-files ==> create directory my-files and enter it
$ touch file-1.txt file-2.txt file-3.txt ==> create files
```
+ To delete a list of files and folders, including all files from subdirectories, without prompting you for every single entry, you can use the -r option for recursive, and the -f option to force it. If you are one directory above my-files, type:

```
$ cd ..
$ rm -rf my-files
```

<img src="https://github.com/antonio-datahack/Ironhack-Web-Developer-Bootcamp/blob/main/img/command-line-cheat-sheet-large01.png" />



<a id='section4'></a>
<h2>Advanced terminal usage</h2>

[Back to Index](#section0)

<h3>ZSH Advantages (over bash)</h3>

**ZSH offers more features than bash, such as:**

+ autocompletion,
+ spelling correction,
+ right prompt,
+ aliases,
+ syntax highlighting,
+ path expansion,
+ clever history,
+ easy customization.

<a id='section5'></a>
<h2>Visual Studio Code basics</h2>

[Back to Index](#section0)

<p>**Visual Studio Code** is a lightweight but powerful source code editor that runs on your desktop and is available for Windows, macOS, and Linux. It comes with built-in support for JavaScript, TypeScript, and Node.js, and it has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity).</p>

<h3>Search a file on the folder tree</h3>

<p>If you press Cmd⌘+P (for macOS) or Control+P (for Linux), the Fuzzy Finder will pop up. It will let you quickly search for any file in any directory inside your project by typing parts of the path.</p>

<h3>Must-have VSCode Extensions</h3>             
<ul>
 <li>Code Snippets: <a href="https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets">VS Code JavaScript (ES6) snippets</a></li>
<li>Syntax Highlighting: <a href="https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel">Babel JavaScript
</a></li>
<li>Linter Extensions: Linting is the process of running a program that analyses the code for potential errors. Linter programs automatically find basic mistakes and tell you where they are and how to fix them. One of the most used by the VSCode community is: </li>
 <ul>
   <li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">ESLint.</a>
 </ul>
<li>Node Extensions
 <ul>
   <li><a href="https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script">npm</a></li>
   <li><a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense">npm Intellisense</a></li>
   <li><a href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense">Path Intellisense</a></li>
  </ul>
<li>Formatting (There are other extensions for formatting, like Beautify, but we recommend installing this one)</li>
  <ul>
   <li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier</a></li>
  </ul>
<li>One essential extension you will need for the first part of the course is Live Server. This will allow you to easily see your webpage in the browser and all your changes will be automatically updated there.</li>
  <ul>
   <li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server</a></li>
  </ul> 
<li>Eventually in your code you will be nesting statements and using lots of brackets and parenthesis. This extension will bring some color so you can easily identify the matching ones.</li>
  <ul>
   <li><a href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2">Bracket Pair Colorizer</a></li>
  </ul>
 
<a id='section6'></a>
<h2>Advanced Linux OS installations</h2>

[Back to Index](#section0)
 

 <h3>Step #1: Install nvm</h3>
<p>**nvm** is a terminal command that allows you to install and change between different versions of Node.js. Usually, your system can have only one version of Node.js installed at one time. With **nvm**, you can switch to a newer version, try some new features, and then back to an older version for your more serious projects.</p>

**Run these commands one by one in your terminal:** 
 
<p>$ mkdir ~/.nvm</p>
<p>$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash</p>
 
**Use your editor to open your terminal settings file (.zshrc or .bash_profile):**
 
 <p>$ code ~/$([ -n "$ZSH_VERSION" ] && echo ".zshrc" || echo ".bash_profile")</p>

In your editor, copy/paste these lines and save:
 
 ```bash
 export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

 ```
** Close and reopen all your terminal windows.**

<h3>Step #2: Install Node.js</h3>
**Run this command in your terminal to install the latest version of Node.js.**

<p>$ nvm install node</p>
 
<h3>Step #3: Install MongoDB on Ubuntu (all versions - 14.O4, 16.04, 18.04)</h3>
<p>MongoDB is the database we will be teaching in the course. Every app needs a database to store its information. There are many different databases, each with its pros and cons — more on this during the course.</p>
 
**1) Add the key to authenticate packages**

<p>$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4</p>
 
**2) Install Deb Package (Debian and Ubuntu)**

 <p>buscarla en el repositorio</p>
 
<p>sudo apt-get update</p>
<p>sudo apt-get update</p>
<p>sudo apt-get install -y mongodb-org</p>
<p>$ sudo service mongod start</p>
<p>mongo</p>
 
<h3>Step #4: Install MongoDB Compass</h3>

+[Visit the Download and Install Compass page.](https://www.mongodb.com/docs/compass/master/install/)
 
 
 <a id='section7'></a>
<h2>Advanced Mac OS installations</h2>

[Back to Index](#section0)
 
<h3>Step #1: Install nvm</h3>
 
<p>$ mkdir ~/.nvm</p>
<p>$ brew install nvm</p>

 <p>$ code ~/$([ -n "$ZSH_VERSION" ] && echo ".zshrc" || echo ".bash_profile")</p>
 
 **In your editor, copy/paste these lines and save:**

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion" ] && . "/usr/local/opt/nvm/etc/bash_completion"  # This loads nvm bash_completion
```
 
<h3>Step #2: Install Node.js</h3>
 
* Visit the <a href="https://nodejs.org/en/">Node.js</a> website.
* Check the version number of the LTS version of Node.js.
* Run this command in your terminal (replace 12.16.0 with the latest version number):
 
 <p>$ nvm install 12.16.0</p>
 
 <p><b>Sidenote:</b> You can use brew to install node as well.:</p>
 
 <p>$ brew update</p>
 <p>$ brew install node</p>
 
 <p><b>node -v</b> (to check if Node is installed properly; you should see the version number)</p>
 <p><b>npm -v</b> (to check if NPM is installed properly; you should see the version number)</p>
 
 <h3>Step #3: Install MongoDB on MAC OS</h3>
 
<p>$ brew tap mongodb/brew</p>
<p>$ brew install mongodb-community</p>
<p>:warning: You shouldn’t have to start your database again after restarting your computer but write down the command just in case.</p>
<p>$ brew services start mongodb-community</p>
<p>$ mongo</p>
 
 
<h3>Step #4: Install MongoDB Compass</h3>
<ul>
 <li><p>Visit <a href="https://www.mongodb.com/docs/compass/master/install/">the Download and Install Compass page</a>.</p></li>
 <li><p>Follow the instructions to install the MongoDB Compass app.</p></li>
</ul>

 
