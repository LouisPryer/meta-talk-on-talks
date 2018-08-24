import React from 'react'
import preloader from '../src/preloader';

import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Fit,
  Image
} from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')
require('../assets/styles.css')

const images = {
  battery: require('../assets/battery.jpg'),
  binoculars: require('../assets/binoculars.jpg'),
  celebrate: require('../assets/celebrate.jpg'),
  codeHarbourLogo: require('../assets/codeharbour-logo.png'),
  codeHarbour: require('../assets/codeHarbour.jpg'),
  count: require('../assets/count.jpg'),
  creating: require('../assets/creating.jpg'),
  deep: require('../assets/deep.jpg'),
  display: require('../assets/display.jpg'),
  doge: require('../assets/doge.jpg'),
  excitement: require('../assets/excitement.jpg'),
  fistbump: require('../assets/fistbump.jpg'),
  focus: require('../assets/focus.jpg'),
  goUP: require('../assets/goUP.jpg'),
  hands: require('../assets/hands.jpg'),
  hugeMistake: require('../assets/hugeMistake.gif'),
  lion: require('../assets/lion.jpg'),
  meetup: require('../assets/meetup.jpg'),
  megaphone: require('../assets/megaphone.jpg'),
  mic: require('../assets/mic.jpg'),
  micMain: require('../assets/micMain.jpg'),
  mixtape: require('../assets/mixtape.jpg'),
  nerves: require('../assets/nerves.jpg'),
  no: require('../assets/no.gif'),
  ocean: require('../assets/ocean.jpg'),
  oldMe: require('../assets/oldMe.jpg'),
  passion: require('../assets/passion.jpg'),
  phone: require('../assets/phone.jpg'),
  photos: require('../assets/photos.jpg'),
  prepare: require('../assets/prepare.jpg'),
  projector: require('../assets/projector.jpg'),
  plan: require('../assets/plan.png'),
  q: require('../assets/q.jpg'),
  questions: require('../assets/questions.jpg'),
  sprout: require('../assets/sprout.jpg'),
  stairs: require('../assets/stairs.jpg'),
  success: require('../assets/success.jpg'),
  surfer: require('../assets/surfer.jpg'),
  talking: require('../assets/talking.jpg'),
  thanks: require('../assets/thanks.jpg'),
  tools: require('../assets/tools.jpg'),
  twitter: require('../assets/twitter.jpg'),
  waves: require('../assets/waves.jpg'),
  what: require('../assets/what.jpg'),
  where: require('../assets/where.jpg'),
  writersBlock: require('../assets/writers-block.jpg')
};

preloader(images);

const theme = createTheme({
  primary: '#F7efe2',
  secondary: '#f25C00',
  tertiary: '#000'
}, {
  primary: 'Lato'
})

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck progress='none' controls={false} theme={theme}>
        <Slide bgImage={images.micMain.replace('/', '')} bgDarken={0.5} transation='fade'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            The talk of talks
          </Heading>
          <Heading margin='10px 0 0' textColor='primary' size={2} fit bold>
            A meta talk on how to plan, create and deliver great talks
          </Heading>
        </Slide>
        <Slide bgImage={images.q.replace('/', '')} bgDarken={0.5} textColor='tertiary'>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            Quick Question
          </Heading>
        </Slide>
        <Slide transation='fade' bgImage={images.hands.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={3} caps lineHeight textColor='primary'>
            Raise your hands if you're nervous of public speaking?
          </Heading>
        </Slide>
        <Slide transation='fade' bgColor='secondary' textColor='tertiary'>
          <BlockQuote>
            <Quote textColor='tertiary'>Myth: All public speakers are comfortable speaking to a crowd</Quote>
          </BlockQuote>
        </Slide>
        <Slide bgImage={images.nerves.replace('/', '')} bgDarken={0.5} transation='fade' textColor='primary'>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            What is nervousness?
          </Heading>
        </Slide>
        <Slide bgImage={images.excitement.replace('/', '')} bgDarken={0.5} transation='fade' textColor='primary'>
          <Heading size={1} fit caps textColor='primary' padding={5}>
            When were you last excited?
          </Heading>
          <Heading margin='10px 0 0' textColor='primary' size={1} fit bold>
            What did it feel like?
          </Heading>
        </Slide>
        <Slide bgImage={images.goUP.replace('/', '')}transation='fade' textColor='primary' />
        <Slide bgImage={images.oldMe.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={4} textColor='primary'>Louis Pryer</Heading>
          <List className='unstyled' textSize='12'>
            <ListItem>Software Engineer at Holiday Extras</ListItem>
            <ListItem>Organiser of codeHarbour</ListItem>
            <ListItem>Self improving nervous wreck</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.codeHarbour.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} fit lineHeight textColor='primary'>
            codeHarbour. Providing a platform for technology talks
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            Sharing my knowledge,
          </Heading>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            So you can share yours!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} fit caps lineHeight textColor='tertiary'>
            From planning to presenting we will cover:
          </Heading>
          <List fit textSize='56' textAlign='centre'>
            <ListItem textSize='56' textAlign='centre'>What to talk about</ListItem>
            <ListItem textSize='56' textAlign='centre'>Creating your talk</ListItem>
            <ListItem textSize='56' textAlign='centre'>Preperation</ListItem>
            <ListItem textSize='56' textAlign='centre'>Doing the talk</ListItem>
            <ListItem textSize='56' textAlign='centre'>Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.what.replace('/', '')} bgDarken={0.6} textColor='primary'>
          <List fit textSize='56'>
            <ListItem textSize='56'>What to talk about</ListItem>
            <ListItem textSize='56' className="muted">Creating your talk</ListItem>
            <ListItem textSize='56' className="muted">Preperation</ListItem>
            <ListItem textSize='56' className="muted">Doing the talk</ListItem>
            <ListItem textSize='56' className="muted">Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.writersBlock.replace('/', '')} bgDarken={0.6} textColor='primary'>
          <BlockQuote>
            <Quote>I'm not sure what to talk about, what do people want to hear?</Quote>
          </BlockQuote>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={2} caps lineHeight textColor='tertiary'>
            Talk on what you're passionate about!
          </Heading>
        </Slide>
        <Slide bgImage={images.passion.replace('/', '')} />
        <Slide bgImage={images.stairs.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            You don't need to be an expert
          </Heading>
        </Slide>
        <Slide bgImage={images.sprout.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Everyone starts somewhere
          </Heading>
        </Slide>
        <Slide bgImage={images.where.replace('/', '')} bgDarken={0.6} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Where can I talk at?
          </Heading>
        </Slide>
        <Slide bgImage={images.codeHarbourLogo.replace('/', '')} />
        <Slide bgImage={images.meetup.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Meetups, brownbags, workshops...
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={3} caps lineHeight textColor='tertiary'>
            Recap
          </Heading>
          <List className='recap-list'>
            <ListItem textSize='56' >Talk on what you're passionate about</ListItem>
            <ListItem textSize='56' >No need to be an expert</ListItem>
            <ListItem textSize='56' >No need for previous experience</ListItem>
            <ListItem textSize='56' >Finding where to talk</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.creating.replace('/', '')} bgDarken={0.7} textColor='primary'>
          <List fit textSize='56'>
            <ListItem textSize='56' className="muted">What to talk about</ListItem>
            <ListItem textSize='56'>Creating your talk</ListItem>
            <ListItem textSize='56' className="muted">Preperation</ListItem>
            <ListItem textSize='56' className="muted">Doing the talk</ListItem>
            <ListItem textSize='56' className="muted">Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            Establish a rough plan first
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Image alt='Screenshot of my google document for this talk' src={images.plan.replace('/', '')} />
        </Slide>
        <Slide bgImage={images.deep.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Don't go into too much depth
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            Highlight important points.
          </Heading>
        </Slide>
        <Slide bgImage={images.count.replace('/', '')} bgDarken={0.6} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Don't worry about slide count
          </Heading>
        </Slide>
        <Slide bgImage={images.focus.replace('/', '')} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Focus on the content
          </Heading>
        </Slide>
        <Slide bgImage={images.tools.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            What slide deck software to use?
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            Just keep the slides simple
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            What about animations and transitions?
          </Heading>
        </Slide>
        <Slide height='100%' bgColor='secondary' textColor='primary'>
          <Image height='45vw' alt='Just no' src={images.no.replace('/', '')} />
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            Slide Design Quick Fire Round!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading textSize='24' caps lineHeight textColor='tertiary'>
            Don't use tiny font size
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            Make the text big!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            Use a decent colour scheme
          </Heading>
        </Slide>
        <Slide bgColor='#a0d6f5' textColor='#FFF'>
          <Heading size={1} caps lineHeight textColor='#FFF'>
            Not like this
          </Heading>
        </Slide>
        <Slide bgColor='#2B061E' textColor='#875053'>
          <Heading size={1} caps lineHeight textColor='#875053'>
            Or like this
          </Heading>
        </Slide>
        <Slide bgColor='#F1E8B8' textColor='#191919'>
          <Heading size={1} caps lineHeight textColor='#191919'>
            Much better!
          </Heading>
        </Slide>
        <Slide bgImage={images.waves.replace('/', '')} bgDarken={0.5}>
          <Heading size={1} caps lineHeight textColor='primary'>
            Contrast is important
          </Heading>
        </Slide>
        <Slide bgImage={images.photos.replace('/', '')} bgDarken={0.5}>
          <Heading size={1} caps lineHeight textColor='primary'>
            Photos
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} fit caps lineHeight textColor='tertiary'>
            Don't do this
          </Heading>
          <Image height='50%' width='50%' src={images.ocean.replace('/', '')} alt='Barrel Wave near the beach' />
        </Slide>
        <Slide bgImage={images.surfer.replace('/', '')} bgDarken={0.5}>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            Fill the entire slide
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading textFont='Times New Roman' className='imageFileExample' size={1} fit caps lineHeight textColor='tertiary'>
            Choose a decent font
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            Change colour scheme for highlights
          </Heading>
        </Slide>
        <Slide bgImage={images.projector.replace('/', '')} bgDarken={0.5}>
          <Heading size={1} caps lineHeight textColor='primary'>
            Design with the projector in mind
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={3} caps lineHeight textColor='tertiary'>
            Recap
          </Heading>
          <List textSize='56' className='recap-list'>
            <ListItem textSize='56'>Create a plan first</ListItem>
            <ListItem textSize='56'>Keep things simple and focus on the content</ListItem>
            <ListItem textSize='56'>Colour scheme is important</ListItem>
            <ListItem textSize='56'>How to use images well</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.prepare.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <List fit textSize='56'>
            <ListItem textSize='56' className="muted">What to talk about</ListItem>
            <ListItem textSize='56' className="muted">Creating your talk</ListItem>
            <ListItem textSize='56'>Preperation</ListItem>
            <ListItem textSize='56' className="muted">Doing the talk</ListItem>
            <ListItem textSize='56' className="muted">Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} fit caps lineHeight textColor='tertiary'>
            Practice
          </Heading>
          <Heading size={1} fit caps lineHeight textColor='tertiary'>
            Practice
          </Heading>
          <Heading size={1} fit caps lineHeight textColor='tertiary'>
            Practice
          </Heading>
        </Slide>
        <Slide bgImage={images.mic.replace('/', '')} bgDarken={0.5}>
          <Heading size={1} caps lineHeight textColor='primary'>
            Record yourslef while practicing
          </Heading>
        </Slide>
        <Slide bgImage={images.binoculars.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Get there early
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            Always have a backup
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={3} caps lineHeight textColor='tertiary'>
            Recap
          </Heading>
          <List textSize='56' className='recap-list'>
            <ListItem textSize='56'>Scope the venue out by getting there early</ListItem>
            <ListItem textSize='56'>Practice x3</ListItem>
            <ListItem textSize='56'>Record yourself while practiing</ListItem>
            <ListItem textSize='56'>Always have a backup</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.talking.replace('/', '')} bgDarken={0.7} textColor='primary'>
          <List fit textSize='56'>
            <ListItem textSize='56' className="muted">What to talk about</ListItem>
            <ListItem textSize='56' className="muted">Creating your talk</ListItem>
            <ListItem textSize='56' className="muted">Preperation</ListItem>
            <ListItem textSize='56'>Doing the talk</ListItem>
            <ListItem textSize='56' className="muted">Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.megaphone.replace('/', '')} bgDarken={0.5}>
          <Heading size={1} caps lineHeight textColor='primary'>
            Project your voice
          </Heading>
        </Slide>
        <Slide bgImage={images.phone.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Make sure your phone is off
          </Heading>
        </Slide>
        <Slide bgImage={images.battery.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Charge up your laptop beforehand
          </Heading>
        </Slide>
        <Slide bgImage={images.display.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Sort out display settings
          </Heading>
        </Slide>
        <Slide bgImage={images.mixtape.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Pre talk rituals
          </Heading>
        </Slide>
        <Slide bgImage={images.hugeMistake.replace('/', '')} />
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={1} caps lineHeight textColor='tertiary'>
            Enjoy Yourself!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={3} caps lineHeight textColor='tertiary'>
            Recap
          </Heading>
          <List textSize='56' className='recap-list'>
            <ListItem textSize='56'>Project your voice</ListItem>
            <ListItem textSize='56'>Turn your phone off</ListItem>
            <ListItem textSize='56'>Ensure laptop is ready before you start</ListItem>
            <ListItem textSize='56'>Stay calm if you fuck up</ListItem>
            <ListItem textSize='56'>Enjoy yourself</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.celebrate.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <List fit textSize='56'>
            <ListItem textSize='56' className="muted">What to talk about</ListItem>
            <ListItem textSize='56' className="muted">Creating your talk</ListItem>
            <ListItem textSize='56' className="muted">Preperation</ListItem>
            <ListItem textSize='56' className="muted">Doing the talk</ListItem>
            <ListItem textSize='56'>Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.success.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            You did it!
          </Heading>
        </Slide>
        <Slide bgImage={images.questions.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Questions and Answers
          </Heading>
        </Slide>
        <Slide bgImage={images.twitter.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Share the answer online afterwards
          </Heading>
        </Slide>
        <Slide bgImage={images.doge.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Don't understand the question?
          </Heading>
        </Slide>
        <Slide bgImage={images.lion.replace('/', '')} bgDarken={0.6} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Hecklers?
          </Heading>
          <Heading size={1} caps lineHeight textColor='primary'>
            You have the power!
          </Heading>
        </Slide>
        <Slide bgImage={images.fistbump.replace('/', '')} bgDarken={0.5} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Organisers are there to help
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={3} caps lineHeight textColor='tertiary'>
            Recap
          </Heading>
          <List textSize='56' className='recap-list'>
            <ListItem textSize='56'>Stay humble if you don't know the answer</ListItem>
            <ListItem textSize='56'>Share the answer online afterwards</ListItem>
            <ListItem textSize='56'>Ask questioner to repeat or catch up afterwards</ListItem>
            <ListItem textSize='56'>Defuse hecklers and move on</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.thanks.replace('/', '')} textColor='primary' />
        <Slide bgColor='secondary' textColor='tertiary'>
          <Heading size={3} caps lineHeight textColor='tertiary'>
            Follow me at
          </Heading>
          <List fit textSize='56'>
            <ListItem textSize='56'>Twitter: @LouisPryer</ListItem>
            <ListItem textSize='56'>Medium: @LouisPryer</ListItem>
            <ListItem textSize='56'>codeHarbour: @codeHarbour</ListItem>
            <ListItem textSize='56'><a href='www.codeharbour.co.uk'>www.codeharbour.co.uk</a></ListItem>
          </List>
        </Slide>
      </Deck>
    )
  }
}
