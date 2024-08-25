import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { MdDashboard, MdSpaceDashboard } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { LiaTableSolid } from "react-icons/lia";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import LanguageDetector from 'i18next-browser-languagedetector';

import HttpApi from 'i18next-http-backend';

import cookies from "js-cookie";
import Buttons from '../Buttons';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "en",
        detection: {
            // order and from where user language should be detected
            order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
            caches: ['cookie'], // save the language in the browser
        },
        backend: {
            loadPath: '/locale/{{lng}}/translation.json',
        }
    });



export default function SideNav() {


    const [fur, setfur] = useState(true);
    const [iftax, setiftax] = useState(true);
    const [open, setopen] = useState(true);
    const [open2, setopen2] = useState(true);


    const { t } = useTranslation();

    const lng = cookies.get('i18next') || 'en';


    useEffect(() => {
        window.document.dir = i18n.dir();
    }, [lng]);

    return (
        <>
            <div>
                {/* <Outlet/> */}
                <div className="drawer sm:drawer-open ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">

                        {/* Page content here */}
                        <div className='flex items-center justify-between mx-6'>
                            <label htmlFor="my-drawer-2" className="btn btn-neutral drawer-button lg:hidden">
                                <MdDashboardCustomize />
                            </label>

                            {/* page content here */}

                            {/* btns */}
                            <Buttons />
                        </div>
                        {/* the content of the center */}
                        <div className='mt-5 md:mt-2 mx-4'>
                            <Outlet />
                        </div>
                    </div>
                    {/* side */}
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-neutral  text-accent min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><Link to={'/'} className='flex justify-start mb-3'>
                                {/* <img src='' alt='' className='w-20' /> */}
                                <MdDashboard className='mt-[42px] text-2xl text-green-300' />
                                <h1 className='font-bold text-2xl pl-2 pt-10 text-white'>Adwaar<span className='text-yellow-300'>Admin</span></h1>
                            </Link></li>
                            <hr />

                            {/* dash div */}
                            <div className='text-xl'>
                                <div className='pt-16 '>
                                    <p className='uppercase ml-6 text-blue-100'>{t('menu')}</p>
                                    {/* icon/text div */}
                                    <div className='flex hover:bg-neutral-500'>
                                        <MdSpaceDashboard className='text-lg mt-3 ml-6' />
                                        <p className=' font-semibold h-10 rounded-md ml-3 mr-3 text-lg pt-2  '>{t('dash')} <span> <i onClick={() => setiftax(false)} class={`fa-solid fa-chevron-down ml-44 text-sm  ${iftax ? "block" : "hidden"} relative bottom-7 `}></i> </span>
                                            <span> <i class={`fa-solid fa-chevron-up  ml-44 text-sm  ${iftax ? "hidden" : "block"} relative bottom-7`} onClick={() => setiftax(true)} ></i> </span> </p>
                                    </div>
                                </div>

                                <div className={`${iftax ? "hidden" : "block"} ml-14 mt-2 text-lg text-blue-50 `}>
                                    <p>{t('cust')}</p>
                                    <p>{t('rate')}</p>
                                    <p>{t('emp')}</p>
                                </div>
                            </div>

                            {/* calender /profile  */}
                            <div className='mt-4 ml-1'>
                                <h1 className='flex'><FaCalendarAlt className='text-xl ml-5 mt-1' /> <span className='pl-2 text-lg'>{t('calender')}</span></h1>
                                <h1 className='flex mt-3'><FaUser className='text-xl ml-5 mt-1' /> <span className='pl-2 text-lg'>{t('Prof')}</span></h1>
                            </div>

                            {/* task div  */}
                            <div>
                                <div className='pt-2 '>

                                    {/* icon/text div */}
                                    <div className='flex hover:bg-neutral-500'>
                                        <FaTasks className='text-lg mt-3 ml-6' />
                                        <p className=' font-semibold h-10 rounded-md ml-3 mr-3 text-lg pt-2  '>{t('task')} <span> <i onClick={() => setfur(false)} class={`fa-solid fa-chevron-down ml-44 text-sm  ${fur ? "block" : "hidden"} relative bottom-7 `}></i> </span>
                                            <span> <i class={`fa-solid fa-chevron-up  ml-44 text-sm  ${fur ? "hidden" : "block"} relative bottom-7`} onClick={() => setfur(true)} ></i> </span> </p>
                                    </div>
                                </div>

                                <div className={`${fur ? "hidden" : "block"} ml-14 text-lg mt-2 text-blue-50 `}>
                                    <p>{t('list')}</p>
                                    <p>{t('users')}</p>
                                </div>
                            </div>

                            {/* form div  */}
                            <div>
                                <div className='pt-2 '>

                                    {/* icon/text div */}
                                    <div className='flex hover:bg-neutral-500'>
                                        <FaWpforms className='text-lg mt-3 ml-6' />
                                        <p className=' font-semibold h-10 rounded-md ml-3 mr-3 text-lg pt-2  '>{t('form')} <span> <i onClick={() => setopen(false)} class={`fa-solid fa-chevron-down ml-44 text-sm  ${open ? "block" : "hidden"} relative bottom-7 `}></i> </span>
                                            <span> <i class={`fa-solid fa-chevron-up  ml-44 text-sm  ${open ? "hidden" : "block"} relative bottom-7`} onClick={() => setopen(true)} ></i> </span> </p>
                                    </div>
                                </div>

                                <div className={`${open ? "hidden" : "block"}  text-lg mt-2 ml-14 text-blue-50 `}>
                                    <Link to={'/formElements'}>{t('formEle')}</Link>
                                    <br />
                                    <Link to={'/formLayout'}>{t('formLa')}</Link>
                                </div>
                            </div>

                            {/* chart div  */}
                            <div>
                                <div className='pt-2 '>

                                    {/* icon/text div */}
                                    <div className='flex hover:bg-neutral-500'>
                                        <IoBarChartSharp className='text-lg mt-3 ml-6' />
                                        <p className=' font-semibold h-10 rounded-md ml-3 mr-3 text-lg pt-2  '>{t('chart')} <span> <i onClick={() => setopen2(false)} class={`fa-solid fa-chevron-down ml-44 text-sm  ${open2 ? "block" : "hidden"} relative bottom-7 `}></i> </span>
                                            <span> <i class={`fa-solid fa-chevron-up  ml-44 text-sm  ${open2 ? "hidden" : "block"} relative bottom-7`} onClick={() => setopen2(true)} ></i> </span> </p>
                                    </div>
                                </div>

                                <div className={`${open2 ? "hidden" : "block"}  text-lg mt-2 ml-14 text-blue-50 `}>
                                    <Link to={'/charts'} >{t('basicChart')}</Link>
                                    <p>{t('advancedChart')}</p>
                                </div>
                            </div>

                            {/* tables */}

                            <div className='mt- ml-1'>
                                <Link to={'/table'} className='flex mt-3'><LiaTableSolid className='text-xl ml-5 mt-1' /> <span className='pl-2 text-lg'>{t('table')}</span></Link>
                            </div>
                            <hr />

                        </ul>

                    </div>

                </div>

            </div>


        </>
    )

}
