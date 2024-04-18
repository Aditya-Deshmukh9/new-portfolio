function Contact() {
    return (
        <div
            id="contact"
            className="px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-900 dark:text-black"
        >
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl  lg:mt-18">
                    Contact Us
                </h1>

                <form action="https://api.web3forms.com/submit" method="POST">
                    <div className="mb-4 mt-8">
                        <input
                            type="hidden"
                            name="access_key"
                            value="c192f57d-4be7-4418-80d3-d2fdb5cea492"
                        />
                        <label
                            htmlFor="username"
                            className="block text-gray-600 dark:text-white mb-2"

                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            required
                            autoComplete="on"
                            className="w-full p-2 border-grey border-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-600 dark:text-white mb-2"
                            aria-required
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            autoComplete="on"
                            required
                            placeholder="Email"
                            className="w-full p-3 border-grey border-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-3 text-gray-600 dark:text-white"
                        >
                            message
                        </label>
                        <textarea
                            name="message"
                            autoComplete="off"
                            required
                            cols={30}
                            rows={6}
                            placeholder="Type Message here 🫡"
                            className="w-full p-3 border-2 border-grey rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-slate-800 dark:text-white"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 border mt-4 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:text-white"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact