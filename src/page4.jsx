import React from 'react'

const Page4 = () => {
    return (
        <div className='page4'>
            <div className="blackbox flex flex-col md:flex-row">
                <div className="tab w-full md:w-1/2">
                    <div className="tabs flex flex-col ">
                        <h2 className='txt1 pt-4 md:pt-12 md:pl-8'>Design</h2>
                        <h2 className='txt2 md:pl-12'>Project</h2>
                        <h2 className='txt3 md:pl-16'>Execution</h2>
                    </div>
                    <div className="desk">
                        <p className='pera md:pl-16 text-sm md:text-base'>
                            Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.
                        </p>
                    </div>
                </div>

                <div className="image w-full md:w-1/2 flex justify-center">
                    <img className='h-3/5 max-w-full' src="https://sundown-ivory.vercel.app/page4-1.webp" alt="" />
                </div>
            </div>
            <div className="sec2 flex flex-col items-center md:flex-row md:justify-center mt-36">
                <div className="gola2 h-6 w-6 flex items-center justify-center">
                    <img src="favicon-32x32.png" alt="" />
                </div>
                <p id="line" className="pt-2 md:pt-0 md:pl-4 text-center md:text-left">
                    WHO WE WORK WITH
                </p>
            </div>
            <div className="section mt-8">
                <div className="sectionscroll overflow-x-auto">
                    <div className="secpart grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="secp1 p-4 border rounded">
                            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg" alt="Nike.png" className="mx-auto" />
                            <p className="text-sm md:text-base mt-2">
                                Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.
                            </p>
                        </div>
                        <div className="secp2 p-4 border rounded">
                            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg" alt="" className="mx-auto" />
                            <p className="text-sm md:text-base mt-2">
                                Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.
                            </p>
                        </div>
                        <div className="secp3 p-4 border rounded">
                            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg" alt="" className="mx-auto" />
                            <p className="text-sm md:text-base mt-2">
                                Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.
                            </p>
                        </div>
                        <div className="secp4 p-4 border rounded">
                            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg" alt="" className="mx-auto" />
                            <p className="text-sm md:text-base mt-2">
                                Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022.
                            </p>
                        </div>
                        <div className="secp5 p-4 border rounded">
                            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg" alt="" className="mx-auto" />
                            <p className="text-sm md:text-base mt-2">
                                Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more.
                            </p>
                        </div>
                        <div className="secp6 p-4 border rounded">
                            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg" alt="" className="mx-auto" />
                            <p className="text-sm md:text-base mt-2">
                                Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, &amp; Revolve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page4
