import React from 'react'

function footer() {
  const year=new Date().getFullYear();
  return (
    <>
    <footer
      className="bg-black text-center dark:bg-black lg:text-left mt-5">
      <div className="p-4 text-center text-neutral-700 dark:text-white">
      &copy;Copyright {year} All rights reserved
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="#"
        >:sainithinyagati</a>
      </div>
    </footer>
    </>
  )
}

export default footer