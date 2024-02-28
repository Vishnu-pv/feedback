import { useState } from 'react'
import styles from './styles.js'
function App() {

    function handleInputChange(e) {

    }

    function handleSubmit() {

    }

    return (
        <>
        <div className={`${`bg-slate-900`} w-full overflow-hidden h-screen`}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <h1>Hi</h1>
                </div>
            </div>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} bg-gradient border border-sky-500 rounded ${styles.padding} mt-5`}>
                    <h2 className={`${styles.heading2}`}>Feedback</h2>
                    <form>
                        <div className="relative z-0 mb-6 w-full group">
                            <input onChange={(e) => handleInputChange(e)} type="email" name="floating_eventname" id="eventName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_eventname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <textarea onChange={(e) => handleInputChange(e)} type="about" name="floating_about" id="about" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_about" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        <button type="submit" className={`py-2 px-4 bg-blue-gradient z-10
     font-poppins font-medium
    text-[15px] text-primary outline-none {styles} mt-5 rounded-[10px]`} onClick={handleSubmit} >Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
  )
}

export default App
