import { Accordion } from 'flowbite-react';
import Line7 from "../../assets/Line7.png";


const { Panel, Title, Content } = Accordion;
const accordionContent = [
  {
    id: '1',
    title: 'How does URL shortening work?',
    desc: 'URL Shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened they are redirected to the intended destination.',
},
{
  id: '2',
    title: 'Is it necessary to create an account to use the URL shortening service?',
    desc: 'URL Shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened they are redirected to the intended destination.',
},
{
  id: '3',
    title: 'Are the shortened links permanent? Will they expire?',
    desc: 'URL Shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened they are redirected to the intended destination.',
},
{
  id: '4',
    title: 'Are there any limitations on the number of URLS I can shorten?',
    desc: 'URL Shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened they are redirected to the intended destination.',
},
{
  id: '5',
    title: 'Can I customize the shortened URLs to reflect my brand or content?',
    desc: 'URL Shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened they are redirected to the intended destination.',
},
{
  id: '6',
    title: 'Can I track the performance of my shortened URLs?',
    desc: 'URL Shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened they are redirected to the intended destination.',
},
{
  id: '7',
    title: 'How secure is he URL shortening service? Are the shortened links protected against spam or malicious activity?',
    desc: 'URL Shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened they are redirected to the intended destination.',
},
{
  id: '8',
    title: 'What is a QR code and what can it do?',
    desc: 'URL Shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened they are redirected to the intended destination.',
},
{
  id: '9',
    title: 'Is there an API available for itegrating the URL shortening service into my own applications or websites?',
    desc: 'URL Shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened they are redirected to the intended destination.',
},
]
const Faqs = () => {
    return(
      <div className="faq">
        <div className='f-title'>
       <img alt='line' src={Line7}/>
       <h4 className="f-titles">FAQs</h4>
       </div>
       <Accordion className="accord">
        {accordionContent.map((item)=> (
          <Panel key={item.id} className='panel'>
            <Title className="a-title">{item.title}</Title>
            <Content className='content'>{item.desc}</Content>
          </Panel>
        ))}
       </Accordion>
      </div>
    );
};

export default Faqs;