import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  const FontAwesomeIcons = [
    { icon: faLinkedin, url: 'https://www.linkedin.com/in/sainithin-yagati/', target: '_blank', hover:'text-blue-600' },
    { icon: faGithub, url: 'https://github.com/sainithinyagati99', target: '_blank', hover:'text-black' },
    { icon: faDiscord, url: 'https://discord.com/users/651407027163103262', target: '_blank', hover:'text-indigo-600' }
  ]
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <div className="group h-1/2 w-1/2 rounded-full bg-gradient-to-tr from-blue-500 via-emerald-400 to-orange-400 p-1 transition duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(52,211,153,0.6)]">
        <img
          src="my.png"
          alt="Sai Nithin Yagati"
          className="h-full w-full rounded-full border-4 border-black object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <b className='text-3xl text-white text-center'>sai nithin yagati</b>
      <TypeAnimation
        sequence={[
          'i write <>code</> 💻',3000,
          'play video games 🎮', 3000,
          'watch anime 🦊', 3000,
          'explore space 🔭', 3000,
          'invest in crypto and stocks 📈', 3000
        ]}
        wrapper="span"
        speed={1}
        deletionSpeed={1}
        style={{ fontSize: '1em', display: 'inline-block', color: 'white', margin: '5px' }}
        repeat={Infinity}
      />
      <code className='text-center text-sm text-white m-2'>
        software engineer with passion to build innovative stuff. when i'm off the clock, i'm usually gaming or watching anime or stargazing. 
      </code>
      <div className='flex flex-row justify-center items-center gap-2 mt-4'>
        {FontAwesomeIcons.map((icon, index) => (
          <FontAwesomeIcon
            key={icon.url}
            icon={icon.icon}
            className={`text-white hover:${icon.hover} cursor-auto duration-500`}
            size="2x"
            onClick={() => window.open(icon.url, icon.target)}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default About