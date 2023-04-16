import React from 'react'
import { Link } from 'react-router-dom';

import BlogTitle from '../components/BlogTitle'
import Text from '../components/Text'
import Code from '../components/Code'
import Step from '../components/Step'

const Instruction = () => {

    let code = `
        import React from 'react'

        const ExampleBlog = () => {
        return (
            <div className='container'>ExampleBlog</div>
        )
        }
    
        export default ExampleBlog
    `
    let linkCreate = `<Route path='/blog/exampleblog' element={<ExampleBlogs />} />`
    let importComponent = `import DjangoBlog from './blogs/ExampleBlog';`
    let blogListing = `<BlogLink link='/blog/exampleblog' logo={htmlLogo} head="ExampleBlog" />`

    let useComponents = `
    import BlogTitle from '../components/BlogTitle'
    import Step from '../components/Step' 
    import Text from '../components/Text'
    import Code from '../components/Code'
    `
    let blogTitle = `return (
        <div className='container'>
            <BlogTitle title="Example Blog" />
        </div>
    )`
    let step = `<Step no={1} heading="Start Building" />`
    let text = `<Text text="Send anuthing as a description" />`
    let codeDisplay = `let code = import BlogTitle from '../components/BlogTitle'`

    const addProfile = `import profile from '../media/contributors/profile.png'
    import Contributor from '../components/Contributor'`

    const profileComponent = `return (
        <Contributor name='Saniyaj Mallik' githubLink='https://github.com/Saniyaj21/' pic={profile} />
    )`

    const homeImport = `import YourNameHere from '../creators/YourName'`


    const nameComponent = ` <YourNameHere />`



    return (
        <div className='container'>

            <BlogTitle title="Start Contribution"
            />
            <Text text="
            Thanks for your interest to contribute for our community.
            "
            />
            <p>
                GitHub repository link <a href="https://github.com/Saniyaj21/Blogs-Saniyaj-project" target='blank'>Source Code</a>
            </p>

            <div>
                <Step no={1} heading="Setup" />
                <Text text="Install a vs code extension name is 'ES7+ React/Redux/React-Native snippets' " />
                <Text text="
                
                Create a ExampleBlog.jsx file insite 

                " />
                <Code code='src/blogs' />

                <Text text="Copy this starter code to ExampleBlog.jsc file" />
                <Code code={code} />

                <Step no={2} heading="Setting up the urls" />
                <Text text="Now create a route for your blog. Goto to src/App.js and paste this line of code." />
                <Code code={linkCreate} />

                <Text text="If the component is not auto imported then import that ExampleBlog component to App.js file" />
                <Code code={importComponent} />

                <Step no={3} heading="Add a logo of your blog" />
                <Text text="Goto src/media/languageLogo and upload a png logo file and try to crop it 1:1 ratio" />

                <Step no={4} heading="List Your Blog to blog page." />
                <Text text="Goto src/components/Blog.jsx and import your blog logo im my case this is htmlLogo" />
                <Code code="import htmlLogo from '../media/languageLogo/htmlLogo.png'" />
                <Text text="Add a your blog. Copy this code and paste inside div of class name = 'left-nav'. **Important pass the same link as you pased in Step-2 path link." />
                <Code code={blogListing} />

                <Step no={5} heading="Check Setups" />
                <Text text="Click on blog inside navbar and check if the last blog is yours? If it is then you are good to go." />

                <Step no={6} heading="Import Components" />
                <Text text="We already created some usefull components that will help you to speed up your development." />
                <Code code={useComponents} />

                <Text text="Use BlogTitle as a component and pass Your blog Topic or title sigle time in your blog head." />
                <Code code={blogTitle} />

                <Text text="Use Step as a component and pass Your Step no and title." />
                <Code code={step} />

                <Text text="Use Text as a component to describe any step." />
                <Code code={text} />

                <Text text="Use Code component to display any code.To do that first create a variable inside your react component function and paste your code that have to display inside  `` that mean variable = `your code`. This is in bellow the Esc key in your keyboard" />
                <Code code={codeDisplay} />

                <Step no={7} heading="Add you to Contributors" />
                <Text text="Add a profile of your to contributors. Follow this steps. Goto -> " />
                <Code code="src/creators" />
                <Text text="Create a file of your first name like FirstName.jsx" />
                <Text text="Now inside of that file and type rafce and a suggestion will pop up click enter." />
                <Text text="Now goto -> src/media/contributors and add your profile picture." />
                <Text text="Come back to creators/your file and add this imports and replace 'profile.png with your profile pic name' ." />

                <Code code={addProfile} />
                <Text text="Now return this code with your details." />
                <Code code={profileComponent} />
                <Text text="Goto src/components/Home.jsx and add a import.Replace your name ." />
                <Code code={homeImport} />

                <Text text="Insert your profile component inside div of className = contributors. " />
                <Code code={nameComponent} />

                <Text text="Check home page you will find your profile." />




                <Step no={8} heading="Complete Blog?" />
                <Text text="Push your code and create a pull request to our GitHub repository. We will review your code and then we will merge it." />
                <Text text="After that you can see your blog public on our website." />
                <div className="text-center"><Link to="/blog/git-github" ><button className='btn btn-primary my-5'>Dont't Know GitHub?</button></Link></div>

            </div>

        </div>
    )
}

export default Instruction