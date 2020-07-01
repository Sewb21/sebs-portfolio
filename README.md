## Fixing the Margin

So normally with css, you pull in a top level css file or use `<style>` tags and its totally global everywhere. With styled components everything is scoped to the component. So, to mimic `index.css` type behavior you need [this](https://styled-components.com/docs/api#createglobalstyle)

see `styles/global.js`

So this is where its gets _slightly_ hairy, I discovered an issue when I was working on the stream blog where the `GlobalStyle` component was being re-rendered on every page refresh i.e. not included on the server, but, I could see the CSS output on the server and it made no sense + gave use a huge performance hit.

Anyway, turns out there is a feature in gatsby that is rarely mentioned in the docs anywhere. no need to over-do it and go into exactly how it works but the essentials are this:

Normally in a react app you have an `App.js` or whatever at your root, with the `Router` in it - and from there you can use context to wrap the entire app. This is also the best place to render your `GlobalStyles` component or `import './index.css';` etc.
Gatsby doesn't have a place where you can do this as its all static, however I found [this](https://www.gatsbyjs.org/packages/gatsby-plugin-layout/#gatsby-plugin-layout) - you can acheive the same thing without the plugin, but this just makes it way way way easier. I'll install that too for you.

Basically, check out `layouts/index.js` and in there you'll see we're wrapping the whole app in `ThemeProvider` (more on that in a second) and then rendering `<GlobalStyles>` from `styles/global.js`
as an example - in the stream blog, I also render the header and footer in there so that it never re-renders between page changes which can be niiiiice for animations.

## Other fun shit:

So first up out of the gate - I installed `gatsby-plugin-styled-components` - check out `gatsby-config.js`. It doesn't need any config to kick off with however, because gatsby is SSR it will make sure that you're style definitions get pull in when its generating the static html & css files (this is specific to styled-components - and its a bitch to do if you do SSR without gatsby)

Next, `gatsby-plugin-module-resolver`
Everybody hates doing this `../../../../components/Header` obviously haha - here's how you fix it in [gatsby](https://www.gatsbyjs.org/packages/gatsby-plugin-module-resolver/) check out gatsby-config - should make sense but let me know.

## Styled Components 101

Here's how I normally write a react component

```js
import React from "react"

const Root = styled.button``

const Button = ({ label, onClick }) => {
  return (
    <Root onClick={onClick}>
      <label>{label}</label>
    </Root>
  )
}

export default Button
```

Super easy, quick button component. Now for the cool shit:

Say I wanna style the label:

```js
import React from "react"

const Root = styled.button`
  & label {
    /*label styles*/
  }
`

const Button = ({ className, label, onClick }) => {
  return (
    <Root onClick={onClick}>
      <label>{label}</label>
    </Root>
  )
}

export default Button
```

> Note how I'm passing the className here, I'll explain in a second.
the easiest way to remember the `&` is this it represents the class name that is generated by styled components. So, under the hood styled components is just taking the css you wrote in the block, creating a regular old class for it and applying it to the component. That's why the following works:

```js
const NewButton = styled(Button)`
  background-color: red;
  & > label {
    color: white;
  }
`
```

So... You can compose the styled-components themselves and even if a component you want to style doesn't use SC, as long as it passes the class name along it will work!

Here's a cool thing I use all the time to space out the children of a element - lets say the button has an icon:

I can select the label and give it a margin-left - but what if the icon is conditional? now the label has a left amrgin it doesn't need and its all off balance.

Do this:

```js
import React from "react"

const Root = styled.button`
  & > * + * {
    margin-left: 8px;
  }
`

const Button = ({ className, icon: Icon, label, onClick }) => {
  return (
    <Root onClick={onClick}>
      {Icon ? <Icon /> : null}
      <label>{label}</label>
    </Root>
  )
}

export default Button
```

`& > * + *`
`&` = Root
`>` = only direct children, not children of children
`*` = any element
`+` = elements are touching (this will cause the css to be applied to the all blocks in a list for example, except for the first block - in our case it will only be applied to the second element, the label.)

so, as a sentence, the css behaves like this:

> If Root has two children, make the second child have a left margin of 16px

and now, if you don't give it an icon, all is good 😎

Okay sorry, THIS is the best thing about SC.

All props are available inside the sc definitions AND so is your theme (I put an "example" theme in styles/theme for you) - like so:

```js
import React from "react"

const Root = styled.button`
  background-color: ${({ bgColor, theme }) => theme.color[bgColor]};

  & > * + * {
    margin-left: 8px;
  }
`

const Button = ({ className, icon: Icon, label, onClick }) => {
  return (
    <Root bgColor="blue" onClick={onClick}>
      {Icon ? <Icon /> : null}
      <label>{label}</label>
    </Root>
  )
}

export default Button
```

or

```js
import React from "react"

const Root = styled.button`
  border-radius: ${({ rounded }) => (rounded ? 8 : 0)}px;

  & > * + * {
    margin-left: 8px;
  }
`

const Button = ({ className, icon: Icon, label, onClick }) => {
  return (
    <Root rounded onClick={onClick}>
      {Icon ? <Icon /> : null}
      <label>{label}</label>
    </Root>
  )
}

export default Button
```


## Git
To get this on your machine and ready to do the following:
- `git pull origin git@github.com/LukeSmetham/for-seb.git sebs-portfolio
- The above will pull it down and set the directory name to `sebs-portfolio` (make sure you rename the old one first if your in the same folder)
- Then run `git remote remove origin`
- and then `git remote add origin git@github.com:Sewb21/sebs-portfolio.git`

This will set it so when you push, it will push to your usual repo

if you get an error on the first push do this:
`git push origin master --force`
