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

