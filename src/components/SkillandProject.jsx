import { handleMouseMove, handleMouseLeave } from '../functions/mouseEffects'

const SkillandProject = () => {
  const projects = [
    // List of projects with name and description
    { name: 'Crypto Watcher', description: `Sleek, live-updating dashboard to monitor your entire crypto portfolio.` },
    { name: 'Financial Analysis', description: `An autonomous agent that unifies live market data, news sentiment, technical signals, and portfolio constraints to generate prioritized investment insights, backtested strategies.` },
    { name: 'Kanban Board', description: `Visual workspace for managing projects, tasks, and team workflows effortlessly.` }
  ]

  return (
    <>
    <div className='h-auto rounded-2xl p-4 bg-black text-white lg:h-full lg:overflow-y-auto'> {/* This might need to be adjusted based on your layout needs, might need to revist it later*/}
      <div className='text-center text-white m-2'>things i've built🚀</div>
      {projects.map((project, index) => (
        <div key={index} className='relative-group border-2 border-green-500 rounded-md p-2 mb-2 hover:bg-green-700 transition-colors duration-150'  onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className='text-lg font-semibold'>{project.name}</div>
          <div className='text-sm'>{project.description}</div>
        </div>
      ))}
    </div>    
    </>
  )
}

export default SkillandProject