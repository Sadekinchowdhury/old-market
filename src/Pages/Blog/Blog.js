import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const Blog = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit, } = useForm();

    const [add, setAdd] = useState('')

    const handlask = data => {

        const askDetails = {
            ask: data.msg,
            user: user?.email,
            Name: data?.name,
            Email: data?.email
        }

        fetch("https://old-server.vercel.app/questions", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(askDetails),
        })
            .then((res) => res.json())
            .then((data) => {


            });

    }



    const Faq = [

        {
            id: 1,
            quetions: "What about Mobile Bazar?",
            answer: "Fitness tracking refers to the use of technology, such as wearable devices or smartphone apps, to monitor various aspects of an individual's physical activity and health, such as steps taken, calories burned, heart rate, sleep, etc."

        },
        {
            id: 2,
            quetions: "How to buy product?",
            answer: "You can access a fitness tracking web application by logging into the application's website on your computer or mobile device with an internet connection."
        },
        {
            id: 3,
            quetions: "Can i replace?",
            answer: "fitlessian are used by individuals who want to monitor their physical activity and health, including athletes, fitness enthusiasts, and those who are simply looking to become more active and improve their overall health"
        },
        {
            id: 4,
            quetions: "Why Mobile Bazar best?",
            answer: "Fitlessian can help you keep track of your progress, set and achieve fitness goals, motivate you to be more active, and provide insights into your overall health."
        }
    ]



    return (

        // <div className="mt-7  mb-5 text-black">

        //     <h2 className="mb-8 text-4xl tracking-tight font-bold text-center text-orange-400 ">Some of Question here</h2>
        //     <div className="grid grid-cols-1 lg:grid-cols-2">
        //         <div>
        //             <div>
        //                 <img src="" alt="" />
        //             </div>
        //             <div tabIndex={1} className="mb-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        //                 <div className="collapse-title text-xl font-medium">
        //                     What are the different ways to manage a state in a React application?
        //                 </div>
        //                 <div className="collapse-content">
        //                     <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components. There are four main types of state you need to properly manage in your React apps.Let's cover each of these in details</p>


        //                     <ol class="list-decimal ml-6">
        //                         <li> <strong>Local state:</strong> Local (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. </li>
        //                         <li> <strong>Global state:</strong>  Global (UI) state – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global.</li>
        //                         <li> <strong> Server state:</strong>  Server state – Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier.</li>
        //                         <li><strong>URL state:</strong>  URL state – Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL! </li>
        //                     </ol>
        //                     <p><strong> React’s useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and the built-in Context API. Your choice will depend on the size of your project, your needs, and your engineers’ expertise.</strong> </p>
        //                 </div>
        //             </div>

        //             <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        //                 <div className="collapse-title text-xl font-medium">
        //                     How does prototypical inheritance work?
        //                 </div>
        //                 <div className="collapse-content">
        //                     prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.All JavaScript objects inherit properties and methods from a prototype:
        //                     <ol class="list-disc ml-6">
        //                         <li>Date objects inherit from Date.prototype</li>
        //                         <li>Array objects inherit from Array.prototype</li>
        //                         <li>Person objects inherit from Person.prototype</li>
        //                     </ol>
        //                     The Object.prototype is on the top of the prototype inheritance chain.Date objects, Array objects, and Person objects inherit from Object.prototype.
        //                 </div>
        //             </div>


        //             <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        //                 <div className="collapse-title text-xl font-medium">
        //                     What is a unit test? Why should we write unit tests?
        //                 </div>
        //                 <div className="collapse-content">

        //                     <ol class="list-disc ml-6">
        //                         <ul>A unit is a single testable part of a software system and tested during the development phase of the application software. The purpose of unit testing is to test the correctness of isolated code. A unit component is an individual function or code of the application. White box testing approach used for unit testing and usually done by the developers.</ul>


        //                         <strong>There are many benefits of unit testing. These are written below:</strong>
        //                         <ol class="list-disc ml-6">
        //                             <li>The process becomes agile</li>
        //                             <li>Quality of Code</li>
        //                             <li>Find Software Bugs Easily</li>
        //                             <li>Facilitates Change</li>
        //                             <li>Design</li>
        //                             <li>Reduce Costs</li>
        //                         </ol>
        //                         When bugs are detected at the later stages, they are usually the results of many changes that have already been made to the system. If the software has already been developed, finding out the exact code that caused these bugs will be a major problem
        //                     </ol>
        //                 </div>
        //             </div>



        //             <div tabIndex={4} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        //                 <div className="collapse-title text-xl font-medium">
        //                     React vs. Angular vs. Vue?
        //                 </div>
        //                 <div className="collapse-content">
        //                     <div className="overflow-x-auto">


        //                         <li>Angular is a front-end framework with lots of components, services, and tools.  On Angular’s site, you can see that they define Angular as: “The modern web developer’s platform”. It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube. Angular has its own library, NgRx, a project for state management inspired by Redux and implemented using RxJS.</li>
        //                         <li>React is considered a UI library. They define themselves as:“A JavaScript library for building user interfaces”Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React.React uses React Redux, a project maintained by the Redux team.</li>

        //                         <li>Last but not least, Vue.js is, according to its site:“A progressive JavaScript framework”. Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.Vue.js has its own library, called Vuex.</li>


        //                     </div>
        //                 </div>
        //             </div>


        //         </div>
        //     </div>
        // </div>
        <div className='mt-8 p-10'>
            <p className='text-4xl font-bold text-white text-center mb-4'>Whats Your Questions</p>

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-full' src="https://i.ibb.co/4P7LxmP/0-Fd-LLSj-LPud-Gd-Pt5-removebg-preview.png" alt='' />
                    <div>
                        <div className='h-1/2 mt-10 w-full grid grid-cols-1 mx-auto gap-4'>
                            {

                                Faq.map(faq => <div>

                                    <body className='bg-slate-100 rounded-xl shadow-red-500 drop-shadow-2xl '>
                                        <div className='flex justify-center'>

                                            <div className='relative p-3  text-black '>

                                                <input className='absolute peer' type="checkbox"></input>
                                                <div className='mb-3 mt-3'>

                                                    <label className='mt-3 text-2xl px-8 font-semibold text-blue-700 ml-2 tracking-[1px] mx-[20px] h-[50px] flex items-center' for="input">{faq.quetions}</label>

                                                </div>

                                                <div className='max-h-0 overflow-hidden peer-checked:max-h-full'>
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>


                                        </div>
                                    </body>

                                </div>)
                            }


                        </div>
                    </div>
                </div>
            </div>


            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn">Ask Your Questions</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div className="card-body">
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="">X</label>

                        </div>
                        <p className='text-4xl mb-5 text-white font-bold '>Ask You Quetions</p>
                        <form onSubmit={handleSubmit(handlask)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mb-3">

                                <textarea  {...register("msg", { required: true })} className='input h-36 text-white input-bordered' id="" cols="30" placeholder='Ask your questions' rows="10"></textarea>
                            </div>
                            <div className="form-control mb-3">
                                <button className='btn btn-outline bg-gray-900 w-full'>Submit</button>
                            </div>




                        </form>
                    </div>

                </div>
            </div>

        </div>


    );



};

export default Blog;

