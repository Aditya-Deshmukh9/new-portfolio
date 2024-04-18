import Image from "next/image";


function Skills() {
    interface ProgressValue {
        HTML: string;
        CSS: string;
        JAVASCRIPT: string;
        REACT_JS: string;
        GITHUB: string;
    }

    const progressValue: ProgressValue = {
        HTML: "80",
        CSS: "70",
        JAVASCRIPT: "50",
        REACT_JS: "70",
        GITHUB: "90",
    };

    return <section id="about" className="dark:bg-gray-900 dark:text-white sm:px-14 ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 lg:px-8 lg:py-1">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-20">
                <div className="lg:py-24">
                    <h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>
                    {/* Mapping over skills array */}
                    {Object.entries(progressValue).map(([skill, value]) => (
                        <div key={skill} className="mt-2">
                            <p className="font-bold text-indigo-900 dark:text-white p-1">{skill}</p>
                            <div
                                role="progressbar"
                                aria-labelledby="ProgressLabel"
                                aria-valuenow={value}
                                className="block rounded-full bg-gray-200"
                            >
                                <div
                                    className="h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
                                    style={{ width: `${value}%` }}
                                >
                                    <span className="font-bold text-white">{`${value}%`}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
                    <Image
                        height={100}
                        width={100}
                        alt="skills"
                        src='/img2.svg'
                        className="absolute inset-0 h-100px w-full object-cover"
                    />
                </div>
            </div>
        </div>
    </section>
}

export default Skills