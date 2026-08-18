import { handleMouseMove, handleMouseLeave } from '../functions/mouseEffects'

const SkillandProject = () => {
  const projects = [
    // List of projects with name and description
    { name: 'Crypto Watcher', description: `Sleek, live-updating dashboard to monitor your entire crypto portfolio.` },
    { name: 'Kanban Board', description: `Visual workspace for managing projects, tasks, and team workflows effortlessly.` },
    { name: 'Job Search Central', description: `Dont' be looking out every companies career portal, this application will list all available jobs at one place.` },
    { name: 'Chat Application', description: `Real-time chat app that keeps conversations flowing instantly and effortlessly.` },
    { name: 'Financial Analysis', description: `An autonomous agent that unifies live market data, news sentiment, technical signals, and portfolio constraints to generate prioritized investment insights, backtested strategies.` },
  ]

  return (
    <>
    <div className='h-auto bg-black rounded-2xl overflow-y-scroll p-4 text-white'>
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