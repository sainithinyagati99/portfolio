import About from '../components/About'
import Qualification from '../components/Qualification'
import SkillandProject from '../components/SkillandProject'

const Home = () => {
  const cards = [
    // Define the cards with their respective components and keys
    { component: <About />, key: 'about' },
    { component: <Qualification />, key: 'qualification' },
    { component: <SkillandProject />, key: 'experience' },
  ]
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl from-black to-neutral-600">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12 w-5/6 p-3">
        {/* Render each card dynamically */}
        {cards.map((card) => (
          <div className="p-4 border-4 border-gray-300 rounded-3xl opacity-75 hover:opacity-100 transition-opacity duration-25" key={card.key}>
            {card.component}
          </div>
        ))}
      </div>
    </div>    
    </>
  )
}

export default Home