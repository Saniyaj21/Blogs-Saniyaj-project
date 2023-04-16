import React from 'react'
import { Link } from 'react-router-dom';
import BlogTitle from '../components/BlogTitle'
import Step from '../components/Step'
import Text from '../components/Text'
import Code from '../components/Code'


const GitBlog = () => {

    // codes

    const repoUrl = `https://github.com/Saniyaj21/Blogs-Saniyaj-project.git`

    const repoClone = `git clone `

    const gitNewBranch = `git branch branch_name
git checkout branch_name`

    const gitNewBranchWay2 = `git checkout -b new_branch `

    const gitAdd = `git add .`
    const gitCommit = `git commit -m "commit message here"`
    const gitStatus = `git status"`
    const gitPush = `git push origin branch_name"`
    const gitCheckout = `git checkout `
    const gitPull = `git pull origin`

    return (
        <div className='container'>
            <BlogTitle title="Git and GitHub CLI" />

            {/* Steps */}
            <Step no={1} heading="What is git and GitHub?" />

            <Text text="Git :> Git is a tool that tracks changes to code and allows multiple developers to collaborate on the same project." />

            <Text text="GitHub :> GitHub is a web-based platform that uses Git to host, manage, and share software development projects and their code." />

            <Text text="To start using Git and GitHub, you will need to follow these steps:" />

            <Text text="1. Install Git on your computer: You can download and install Git from the official website " />
            <div className="text-center">
                <a href="https://git-scm.com/downloads" target='blank'><button className="btn btn-sm btn-primary">Git Website</button></a>
            </div>

            <Text text="2. Create a GitHub account: Go to the GitHub website and sign up for an account. " />
            <div className="text-center">
                <a href="https://github.com/" target='blank'><button className="btn btn-sm btn-primary">GitHub Website</button></a>
            </div>

            <Text text="3. Set up Git: After installing Git, you need to configure it with your name and email address using the Git command line or Git GUI tool." />


            <Step no={2} heading="Working with GitHub" />

            <Text text="A GitHub repository is a space on GitHub to store, organize, and share your software development projects and their code." />

            <Text text="Now create a Repository with a README.MD file, you will find a tik option to add a readme.md file while creating a repository." />

            <Step no={3} heading={"Setup local files"} />

            <Text text="Create a folder and open it in your code editor i will recommand Visual Studio Code. If you dont have this download and install it." />

            <Text text="Go to the GitHub repository that you create few time ago. You will find a code button click it and copy the url. The url will look like -" />

            <Code code={repoUrl} />

            <Text text="Now open a ternimap on Vs Code(Visual Studio Code)." />

            <Text text="Type 'git clone' and then paste the url you copied from GitHub and give a space and type(dot) '.' this will clone the repository in current directory otherwise it will create a new directory. ." />

            <Code code={repoClone + repoUrl + " ."} />

            <Text text="The GitHub repository will be downloaded to your system." />

            <Text text="Now type 'git branch' and press enter. This will show on which branch you are in." />

            <Text text="If you are following with me you will be in main branch. which branch you are in you will find * before that branch name. Like this '* main' " />

            <Step no={4} heading={"Create a new branch"} />

            <Text text="There are two ways of creating branch." />

            <Text text="1. First Way 'git branch branch_name' and you have to switch branch to that new branch 'git checkout branch_name' " />

            <Code code={gitNewBranch} />

            <Text text="2. In this way you dont have to switch branch manually. type 'git checkout -b new_branch_name' " />

            <Code code={gitNewBranchWay2} />

            <Text text="Now are in the new branch. Enter in terminal git branch to see current branch. " />

            <Text text="Now do your changes and then to add that changes to this branch run -" />
            <Code code={gitAdd} />

            <Text text="After adding, to show which files are changed run -" />
            <Code code={gitStatus} />

            <Text text="To save the changes to the local branch run -" />
            <Code code={gitCommit} />

            <Text text="Now your updated code need to be push to the remote repository that is GitHub repository, to push your local code updates run -" />
            <Code code={gitPush} />
            <Text text="Replace the branch_name with that branch name that you have did updates and want to push." />
            <Text text="Goto Github repository you will find a button called 'compare & pull request' click it and create a pull request. It will create a pull request. The owner of that repository can review and merge your code ." />
            <Text text=" If you are using your own GitHub repository then you will find a pull request in your repository, you have to review and merge it." />
            <Text text="Come back to the Vs Code terminal after merging the code. Swithch to the main branch and sync the updates to the main the main branch. run- " />
            <Code code={gitCheckout + "main"} />
            <Text text="It will switch the branch to main." />
            <Code code={gitPull} />

            <Text text="It will update the local files upto main GitHub repository." />

            <Text text="Mainly this is all you will do. But there are some commands like 'git log' used to check commit history." />


            <Text text="You almost completed this guide. Want to help others? Then contribute in this project!" />
            <div className="text-center"><Link to="/instruction" ><button className='btn btn-primary my-5'>How to Contribute!</button></Link></div>

        </div>
    )
}

export default GitBlog