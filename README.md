## Fixing the Margin

So normally with css, you pull in a top level css file or use `<style>` tags and its totally global everywhere. With styled components everything is scoped to the component. So, to mimic `index.css` type behavior you need [this](https://styled-components.com/docs/api#createglobalstyle)

see `styles/global.js`

So this is where its gets _slightly_ hairy, I discovered an issue when I was working on the stream blog where the `GlobalStyle` component was being re-rendered on every page refresh i.e. not included on the server, but, I could see the CSS output on the server and it made no sense + gave use a huge performance hit.

Anyway, turns out there is a feature in gatsby that is rarely mentioned in the docs anywhere. no need to over-do it and go into exactly how it works but the essentials are this:

Normally in a react app you have an `App.js` or whatever at your root, with the `Router` in it - and from there you can use context to wrap the entire app. This is also the best place to render your `GlobalStyles` component.
Gatsby doesn't have a place where you can do this as its all static, however I found [this](https://www.gatsbyjs.org/packages/gatsby-plugin-layout/#gatsby-plugin-layout) - you can acheive the same thing without the plugin, but this just makes it way way way easier. I'll install that too for you.

Basically, check out `layouts/index.js` and in there you'll see we're wrapping the whole app in `ThemeProvider` (more on that in a second) and then rendering `<GlobalStyles>` from `styles/global.js`
as an example - in the stream blog, I also render the header and footer in there so that it never re-renders between page changes which can be niiiiice for animations.

## Other fun shit:

So first up out of the gate - I installed `gatsby-plugin-styled-components` - check out `gatsby-config.js`. It doesn't need any config to kick off with however, because gatsby is SSR it will make sure that you're style definitions get pull in when its generating the static html & css files (this is specific to styled-components - and its a bitch to do if you do SSR without gatsby)

Next, `gatsby-plugin-module-resolver`
Everybody hates doing this `../../../../components/Header` obviously haha - here's how you fix it in [gatsby](https://www.gatsbyjs.org/packages/gatsby-plugin-module-resolver/) check out gatsby-config - should make sense but let me know.
