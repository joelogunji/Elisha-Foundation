import React from 'react'
import {Firstpage, FirstpageBg, Firstpagecard, FirstpageBGText, OurImpact,
 Donate, Volunteer, Blogs, EventGallery, OurImpactHead, OICardContain,
 OurImpactCard, OICardImage, HomeContain, OurImpactButton, DonateContain, 
 DonateImage, DonateText, DonateTextHead, DonateTextButton, DonateTextContent,
 VolunteerContain, VolunteerImage, VolunteerRight, VolunteerRightHead,
 VolunteerButton, VolunteerLeft, VolunteerLeftHead, VRContain, VolunteerName,
 VolunteerEmail, VolunteerLeaveMessage, VInput1, BlogCHContain, BlogHead, BlogCardHolder,
 EGRow1a, EGRow1b, EGRow1c, EGRow1d, EGRow2a, EGRow2b, EGRow2c, EGRow2d, 
 EventGalleryHead, EventGalleryRow1, EventGalleryRow2, EGContain} from './Home.element'
import FirstpageCard from './FirstpageCard'
import FirstPIcon1 from "./Images/page1-icon1.png"
import FirstPIcon2 from "./Images/page1-icon2.png"
import FirstPIcon3 from "./Images/page1-icon3.png"
import OICImage1 from "./Images/OICImage1.png"
import OICImage2 from "./Images/OICImage2.png"
import Donateimage from "./Images/Donateimage.png"
import Volunteerimage from "./Images/VolunteerImage.png"
import BlogCard from "./BlogsCard.js"
import Blogs1 from "./Images/Blogs1.png"
import Blogs2 from "./Images/Blogs2.png"
import Blogs3 from "./Images/Blogs3.png"
import Event1a from "./Images/Event1a.png"
import Event1b from "./Images/Event1b.png"
import Event1c from "./Images/Event1c.png"
import Event1d from "./Images/Event1d.png"
import Event2a from "./Images/Event2a.png"
import Event2b from "./Images/Event2b.png"
import Event2c from "./Images/Event2c.png"
import Event2d from "./Images/Event2d.png"




function Home() {
  return (
    <HomeContain>
      <Firstpage>
        <FirstpageBg>
          <FirstpageBGText>
            <h1>We make lives and<br/> communities better</h1>
          </FirstpageBGText>
        </FirstpageBg>
          <Firstpagecard>
            <FirstpageCard 
            BC="#003399"
            logo={FirstPIcon1}
            head="OUR MISSION"
            text1="At the core of our values, is the utmost"
            text2="goal of making individual lives, whether"
            text3="old or young, and communities of " 
            text4="people, better than we met"
            />
            <FirstpageCard
            BC="#25AAE2"
            logo={FirstPIcon2}
            head="OUR VISION"
            text1="At the core of our values, is the utmost"
            text2="goal of making individual lives, whether"
            text3="old or young, and communities of " 
            text4="people, better than we met"
            />
            <FirstpageCard
            BC="#3AB54A"
            logo={FirstPIcon3}
            head="VOLUNTEER"
            text1="At the core of our values, is the utmost"
            text2="goal of making individual lives, whether"
            text3="old or young, and communities of " 
            text4="people, better than we met"
            />
          </Firstpagecard>
      </Firstpage>

      <OurImpact>
        <OurImpactHead>Our Impact</OurImpactHead>
        <OICardContain>
          <OurImpactCard><div>We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, based in Lagos Nigeria. We strive to protect and feed the poor, advocate and enlighten communities, empower young people, serve as the voice to the voiceless, we give grants and scholarship, we serve as an outstretched arm of God, we bring succor and hope to the need</div>
            <OurImpactButton>Read more</OurImpactButton>
          </OurImpactCard>
          <OurImpactCard><OICardImage src={OICImage1}/></OurImpactCard>
          <OurImpactCard><OICardImage src={OICImage2}/></OurImpactCard>
        </OICardContain>
      </OurImpact>

      <Donate>
        <DonateContain>
          <DonateImage src={Donateimage}/>
          <DonateText>
            <DonateTextHead>Your Support Will Help Us Reach More <span style={{color:"#EE5728"}}>vulnerable</span> People</DonateTextHead>
            <DonateTextContent>We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, based in Lagos Nigeria. We strive to protect and feed the poor, advocate and enlighten communities, empower young people, serve as the voice to the voiceless, we give grants and scholarship, we serve as an outstretched arm of God, we bring succor and hope to the need</DonateTextContent>
            <DonateTextButton>Donate</DonateTextButton>
          </DonateText>
        </DonateContain>
      </Donate>

      <Volunteer>
      <VolunteerContain>
          <VolunteerLeft>  
            <VolunteerLeftHead>Become a Part of Our Impact Team, <span style={{color: '#3AB54A'}}>Volunteer!</span></VolunteerLeftHead>
            <VolunteerImage src={Volunteerimage}/>
          </VolunteerLeft>
          <VolunteerRight>
            <VRContain>
              <VolunteerRightHead>Fill our volunteer form</VolunteerRightHead>
              <VolunteerName>
                <label>Name</label><br/>
                <VInput1 type="text" value="Enter your First and Last name"></VInput1>
              </VolunteerName>
              <VolunteerEmail>
                <label>Email</label><br/>
                <VInput1 type="text" value="Enter your Email"></VInput1>
              </VolunteerEmail>
              <VolunteerLeaveMessage>
                <label>Leave a message</label><br/>
                <VInput1 type="text" value="enter your message"></VInput1>
              </VolunteerLeaveMessage>
              <VolunteerButton>Send</VolunteerButton>
            </VRContain>
          </VolunteerRight>
        </VolunteerContain>
      </Volunteer>

      <Blogs>
        <BlogHead>Check out our Latest Blogs</BlogHead>
        <BlogCHContain>
        <BlogCardHolder>  
          <BlogCard
            Bg={Blogs1}
            head="Donating to Charity"
            text="We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, "
            bottom="January 2022"
          />
          <BlogCard
            Bg={Blogs2}
            head="Donating to Charity"
            text="We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, "
            bottom="January 2022"
          />
          <BlogCard
            Bg={Blogs3}
            head="Donating to Charity"
            text="We believe everyone should be able to live with dignity, without dependence. We are a Non-Governmental Organization, "
            bottom="January 2022"
          />
        </BlogCardHolder>
        </BlogCHContain>  
      </Blogs>

      <EventGallery>
        <EGContain>
          <EventGalleryHead>Our Event Gallery</EventGalleryHead>
          <EventGalleryRow1>
            <EGRow1a src={Event1a}></EGRow1a>
            <EGRow1b src={Event1b}></EGRow1b>
           <EGRow1c src={Event1c}></EGRow1c>
            <EGRow1d src={Event1d}></EGRow1d>
          </EventGalleryRow1>
          <EventGalleryRow2>
            <EGRow2a src={Event2a}></EGRow2a>
            <EGRow2b src={Event2b}></EGRow2b>
            <EGRow2c src={Event2c}></EGRow2c>
            <EGRow2d src={Event2d}></EGRow2d>
          </EventGalleryRow2>
        </EGContain>
      </EventGallery>
      {/* <Bottom>
        <BottomContain>
          <BottomCol><img src={}/> <div>At the core of our values, is the utmost goal of making individual lives, whether old or young, and communities of people, better than we meet it.</div></BottomCol>
          <BottomCol>
            <div>MAIN LINKS</div>
            <br/>
            <div>HOME</div>
            <div>ABOUT</div>
            <div>CONTACT</div>
            <div>BLOG</div>
            <div>DONATE</div>
          </BottomCol>
          <BottomCol>
            <div>get in touch</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </BottomCol>
          <BottomCol></BottomCol>
        </BottomContain>
      </Bottom> */}
    </HomeContain>
  )
}

export default Home