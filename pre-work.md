<h1>Linux</h1>
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

<h1>Mac</h1>

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


