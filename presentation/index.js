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
  pulse: require('../assets/pulse.jpg'),
  codeHarbour: require('../assets/codeHarbour.jpg'),
  writersBlock: require('../assets/writers-block.jpg'),
  where: require('../assets/where.jpg'),
  thanks: require('../assets/thanks.jpg'),
  talking: require('../assets/talking.jpg'),
  binoculars: require('../assets/binoculars.jpg'),
  hands: require('../assets/hands.jpg'),
  oldMe: require('../assets/oldMe.jpg'),
  plan: require('../assets/plan.png'),
  no: require('../assets/no.gif'),
  waves: require('../assets/waves.jpg'),
  photos: require('../assets/photos.jpg'),
  surfer: require('../assets/surfer.jpg'),
  ocean: require('../assets/ocean.jpg'),
  projector: require('../assets/projector.jpg'),
  mic: require('../assets/mic.jpg'),
  hugeMistake: require('../assets/hugeMistake.gif'),
  megaphone: require('../assets/megaphone.jpg'),
  micMain: require('../assets/micMain.jpg'),
  what: require('../assets/what.jpg'),
  creating: require('../assets/creating.jpg'),
  prepare: require('../assets/prepare.jpg'),
  celebrate: require('../assets/celebrate.jpg')
};

preloader(images);

const theme = createTheme({
  primary: '#F7efe2',
  secondary: '#f25C00',
  tertiary: '#423E37'
}, {
  primary: 'Lato'
})

export default class Presentation extends React.Component {
  render () {
    return (
      <Deck progress='none' controls={false} theme={theme}>
        <Slide bgImage={images.micMain.replace('/', '')} bgDarken={0.75} transation='fade'>
          <Heading size={1} fit caps lineHeight={1} textColor='primary'>
            The talk of talks
          </Heading>
          <Heading margin='10px 0 0' textColor='primary' size={2} fit bold>
            A meta talk on how to plan, create and deliver great talks
          </Heading>
        </Slide>
        <Slide transation='fade' bgColor='secondary' textColor='primary'>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            Quick Question
          </Heading>
        </Slide>
        <Slide transation='fade' bgImage={images.hands.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <Heading size={3} caps lineHeight textColor='primary'>
            Raise your hands if you're scared of public speaking?
          </Heading>
        </Slide>
        <Slide transation='fade' bgColor='tertiary' textColor='primary'>
          <BlockQuote>
            <Quote>Myth: All public speakers are comfortable speaking to a crowd</Quote>
          </BlockQuote>
        </Slide>
        <Slide bgImage={images.pulse.replace('/', '')} bgDarken={0.75} transation='fade' textColor='primary'>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            Get to the heart of the problem
          </Heading>
        </Slide>
        <Slide bgImage={images.oldMe.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <Heading size={4} textColor='primary'>Louis Pryer</Heading>
          <List className='unstyled' textSize='12'>
            <ListItem>Software Engineer at Holiday Extras</ListItem>
            <ListItem>Organiser of codeHarbour</ListItem>
            <ListItem>Wannabe rockstar</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.codeHarbour.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <Heading size={1} fit lineHeight textColor='primary'>
            codeHarbour. Providing a platform for technology talks
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Sharing my knowledge so you can share yours!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            From planning to presenting we will cover:
          </Heading>
          <List fit textSize='16'>
            <ListItem>What to talk about</ListItem>
            <ListItem>Creating your talk</ListItem>
            <ListItem>Preperation</ListItem>
            <ListItem>Doing the talk</ListItem>
            <ListItem>Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.what.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <List fit textSize='12'>
            <ListItem>What to talk about</ListItem>
            <ListItem className="muted">Creating your talk</ListItem>
            <ListItem className="muted">Preperation</ListItem>
            <ListItem className="muted">Doing the talk</ListItem>
            <ListItem className="muted">Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.writersBlock.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <BlockQuote>
            <Quote>I'm not sure what to talk about, what do people want to hear?</Quote>
          </BlockQuote>
        </Slide>
        <Slide bgColor='tertiary' textColor='primary'>
          <Heading size={2} caps lineHeight textColor='primary'>
            Talk on what you're passionate about!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            The best talks come from passionate speakers
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            You don't need to be an expert
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Everyone starts somewhere
          </Heading>
        </Slide>
        <Slide bgImage={images.where.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Where can I talk at?
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={3} caps lineHeight textColor='primary'>
            Recap
          </Heading>
          <List className='recap-list'>
            <ListItem>Talk on what you're passionate about</ListItem>
            <ListItem>No need to be an expert</ListItem>
            <ListItem>No need for previous experience</ListItem>
            <ListItem>Finding where to talk</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.creating.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <List fit textSize='12'>
            <ListItem className="muted">What to talk about</ListItem>
            <ListItem>Creating your talk</ListItem>
            <ListItem className="muted">Preperation</ListItem>
            <ListItem className="muted">Doing the talk</ListItem>
            <ListItem className="muted">Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Establish a rough plan first
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Image alt='Screenshot of my google document for this talk' src={images.plan.replace('/', '')} />
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Don't go into too much depth
          </Heading>
        </Slide>
        <Slide bgColor='tertiary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Highlight important points.
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Don't worry about slide count
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Focus on the content
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            What slide deck software to use?
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Just keep the slides simple
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            What about animations and transitions?
          </Heading>
        </Slide>
        <Slide height='100%' bgColor='secondary' textColor='primary'>
          <Image height='45vw' alt='Just no' src={images.no.replace('/', '')} />
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Slide Design Quick Fire Round!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading className='tiny' caps lineHeight textColor='primary'>
            Don't use tiny font size
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Make the text big!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Use a decent colour scheme
          </Heading>
        </Slide>
        <Slide bgColor='#a0d6f5' textColor='#f50207'>
          <Heading size={1} caps lineHeight textColor='#f50207'>
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
        <Slide bgImage={images.waves.replace('/', '')} bgDarken={0.75}>
          <Heading size={1} caps lineHeight textColor='primary'>
            Contrast is important
          </Heading>
        </Slide>
        <Slide bgImage={images.photos.replace('/', '')} bgDarken={0.75}>
          <Heading size={1} caps lineHeight textColor='primary'>
            Photos
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            Don't do this
          </Heading>
          <Image height='50%' width='50%' src={images.ocean.replace('/', '')} alt='Barrel Wave near the beach' />
        </Slide>
        <Slide bgImage={images.surfer.replace('/', '')} bgDarken={0.75}>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            Fill the entire slide
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading textFont='Times New Roman' className='imageFileExample' size={1} fit caps lineHeight textColor='primary'>
            Choose a decent font
          </Heading>
        </Slide>
        <Slide bgColor='tertiary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Change colour scheme for highlights
          </Heading>
        </Slide>
        <Slide bgImage={images.projector.replace('/', '')} bgDarken={0.75}>
          <Heading size={1} caps lineHeight textColor='primary'>
            Design with the projector in mind
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={3} caps lineHeight textColor='primary'>
            Recap
          </Heading>
          <List className='recap-list'>
            <ListItem>Create a plan first</ListItem>
            <ListItem>Keep things simple and focus on the content</ListItem>
            <ListItem>Colour scheme is important</ListItem>
            <ListItem>How to use images well</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.prepare.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <List fit textSize='12'>
            <ListItem className="muted">What to talk about</ListItem>
            <ListItem className="muted">Creating your talk</ListItem>
            <ListItem>Preperation</ListItem>
            <ListItem className="muted">Doing the talk</ListItem>
            <ListItem className="muted">Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgColor='tertiary' textColor='primary'>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            Practice
          </Heading>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            Practice
          </Heading>
          <Heading size={1} fit caps lineHeight textColor='primary'>
            Practice
          </Heading>
        </Slide>
        <Slide bgImage={images.mic.replace('/', '')} bgDarken={0.75}>
          <Heading size={1} caps lineHeight textColor='primary'>
            Record yourslef while practicing
          </Heading>
        </Slide>
        <Slide bgImage={images.binoculars.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Get there early
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Always have a backup
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={3} caps lineHeight textColor='primary'>
            Recap
          </Heading>
          <List className='recap-list'>
            <ListItem>Scope the venue out by getting there early</ListItem>
            <ListItem>Practice x3</ListItem>
            <ListItem>Record yourself while practiing</ListItem>
            <ListItem>Always have a backup</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.talking.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <List fit textSize='12'>
            <ListItem className="muted">What to talk about</ListItem>
            <ListItem className="muted">Creating your talk</ListItem>
            <ListItem className="muted">Preperation</ListItem>
            <ListItem>Doing the talk</ListItem>
            <ListItem className="muted">Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.megaphone.replace('/', '')} bgDarken={0.75}>
          <Heading size={1} caps lineHeight textColor='primary'>
            Project your voice
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Make sure your phone is off
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Charge up your laptop beforehand
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Screen Brightness
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Sort out display settings
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Pre talk rituals
          </Heading>
        </Slide>
        <Slide bgImage={images.hugeMistake.replace('/', '')} />
        <Slide bgColor='tertiary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Enjoy Yourself!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={3} caps lineHeight textColor='primary'>
            Recap
          </Heading>
          <List className='recap-list'>
            <ListItem>Project your voice</ListItem>
            <ListItem>Turn your phone off</ListItem>
            <ListItem>Ensure laptop is ready before you start</ListItem>
            <ListItem>Stay calm if you fuck up</ListItem>
            <ListItem>Enjoy yourself</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.celebrate.replace('/', '')} bgDarken={0.75} textColor='primary'>
          <List fit textSize='12'>
            <ListItem className="muted">What to talk about</ListItem>
            <ListItem className="muted">Creating your talk</ListItem>
            <ListItem className="muted">Preperation</ListItem>
            <ListItem className="muted">Doing the talk</ListItem>
            <ListItem>Aftermarth</ListItem>
          </List>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            You did it!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Questions and Answers
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Stay humble
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Share the answer online afterwards
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Don't understand the question?
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Hecklers?
          </Heading>
          <Heading size={1} caps lineHeight textColor='primary'>
            You have the power!
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Defuse the situation and move on
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={1} caps lineHeight textColor='primary'>
            Organisers are there to help
          </Heading>
        </Slide>
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={3} caps lineHeight textColor='primary'>
            Recap
          </Heading>
          <List className='recap-list'>
            <ListItem>Stay humble if you don't know the answer</ListItem>
            <ListItem>Share the answer online afterwards</ListItem>
            <ListItem>Ask questioner to repeat or catch up afterwards</ListItem>
            <ListItem>Defuse hecklers and move on</ListItem>
          </List>
        </Slide>
        <Slide bgImage={images.thanks.replace('/', '')} textColor='primary' />
        <Slide bgColor='secondary' textColor='primary'>
          <Heading size={3} caps lineHeight textColor='primary'>
            Follow me at
          </Heading>
          <List fit textSize='12'>
            <ListItem>Twitter @LouisPryer</ListItem>
            <ListItem>Medium @LouisPryer</ListItem>
            <ListItem>codeHarbour @codeHarbour</ListItem>
            <ListItem><a href='www.codeharbour.co.uk'>www.codeharbour.co.uk</a></ListItem>
          </List>
        </Slide>
      </Deck>
    )
  }
}
