<h2>Git & GitHub - introduction and relation</h2>

![What is Git and GitHub?](https://www.youtube.com/watch?v=uUuTYDg9XoI)

<h3>What is a Distributed Version Control System?</h3>
<p>A <b>Distributed Version Control System (DVCS)</b> or </b>Version Control System (VCS)</b> is a system that records changes to a file or set of files over time so you can recall specific versions of these files at any point later.</p>

<h3>Why is it so important to use DVCS in development?</h3>

+ <b>Having different versions of the same file gives you massive power over your code.</b> As said before, if you break something in the latest version of the code, you will be able to recover the old correct version of your code.
+ It is also beneficial when you <b>combine code made by multiple developers into one file</b>, or even different files into one project. When merging the changes made on the same file but by different developers, you can face multiple conflicts between these changes. (Don’t worry if you don’t understand this right now, you are going to learn this in-depth later on.)
+ Another cool feature that it provides you is the chance to see <b>who is the owner of each piece of code.</b> It allows you to defend how many hours have you been working, of course, but it is funnier to use it to figure out who has messed up the code. :bomb:


<h3>What is Git?</h3>
<p><b>Git is a free and open DVCS </b>designed to handle computer programming projects with speed and efficiency. It is easy to learn and has a very high performance.</p>
<p><b>Git runs locally.</b> What does it mean? It allows you to use the Version Control System on your laptop. It means that you will have <b>in your computer</b> a Version Control System, to recover all code, see what changes you have done, etc.</p>

<h3>What is GitHub?</h3>
<p>GitHub is a code hosting platform for revision control and collaboration. It lets you and others work together on projects from anywhere.</p>

<p>With GitHub, you can do a bunch of things when collaborating on a project:</p>

+ control different versions of the code,
+ create different branches,
+ fork repositories,
+ do pull requests,
+ see other’s people projects (and learn how they code),
+ comment on other’s people code.

<h3>How are Git and GitHub related?</h3>
<p>:star2::star2::star2: <b>Git</b> allows you to control your code in your local machine, while <b>GitHub</b> will enable you to <b>collaborate</b> with your teammates by pushing and pulling the code you and the others have been working on.</p>

<h3>How does it work?</h3>

+ <b>push</b> meaning making the code that was made locally, on your laptop, available online (on GitHub) so the others can use it;
+ <b>pull</b> meaning taking the code from online platform (GitHub) to your laptop so you can re-use it and add/remove things from it.

<h3>Creating a Repository</h3>

```js
// we assume you are already on Desktop

$ pwd

// => /Users/<your-username>/Desktop

 

$ mkdir git-practice

$ cd git-practice

$ touch data.txt

$ code .

```
<p>Add some text to data.txt. Feel free to change the data:</p>


```js 
Name: Ironhacker

Age: 25

Favorite Color: Yellow

``` 


<h3>git init and the hidden .git folder</h3>
<p>Inside git-practice folder, run the following command:</p>
```js 
$ git init

``` 
<p>Let’s run an ls command to show hidden folders and files inside of the folder:</p>
```js 
$ ls -a

``` 
<p>:bulb: If for some reason you run git init in a folder you didn’t intend to make a git repository, you can simply remove the .git folder using rm -rf:</p>

```js
$ git init # => to initialize folder as Git repository

$ rm -rf .git # => to remove git (tracking)

```

<h3>Un-staging Files - git reset</h3>

```js
$ git add file1.txt file2.txt

```
<p>We can use the git reset command to remove a file from the staging area.</p>
```js
$ git reset file5.txt

```

<h3>Saving Changes: git commit</h3>
<p>A commit in Git is a snapshot of the state of the files and folders in your project, as well as the content in them.</p>



<p>Using commits in Git will:</p>

+ help you revert mistakes to a previous working version (kind of undo button thing);
+ enable you to collaborate with other developers on your projects without colliding and
+ keep track of who made changes, and when they did it.

<p>

:bulb: **git commit -m** means we will provide a message with our commit. This will become more useful later, but for now, note that you should leave a **detailed and descriptive message** about what you have done in that commit.

**Make a commit message in the present tense - as someone gave you a ticket on which they told you what to do.**

This is useful when you need to figure out what changes you have made in the past, and when they were done.
  
<h3>Revisiting and Viewing Commits: git log</h3>
<p>The git log command is used to view commits and data about those commits. Let’s give it a run and see what happens:</p>

```js
$ git log
```
<em>:bulb: Press q to exit the log dialog screen in your terminal.</em>





