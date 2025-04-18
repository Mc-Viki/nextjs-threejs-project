'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const jobs = [
    { title: 'Product Designer', description: 'We’re looking for a mid-level product designer to join our team.', type: ['100% remote', 'Full-time'] },
    { title: 'Engineering Manager', description: 'We’re looking for an experienced engineering manager to join our team.', type: ['100% remote', 'Full-time'] },
    { title: 'Customer Success Manager', description: 'We’re looking for a customer success manager to join our team.', type: ['100% remote', 'Full-time'] }
];

const categories = ['Development', 'Design', 'Marketing', 'Customer Service', 'Operations', 'Finance', 'Management'];

export default function CareerPage() {
    return (
        <div className='flex flex-col items-center w-full min-h-screen px-4 py-10 bg-black/20 overflow-hidden'>
            {/* Hero Section */}
            <div className='w-full max-w-4xl text-center text-white font-urbanist mt-20'>
                <motion.p className='inline-block px-4 py-1 text-sm font-medium border rounded-full' whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} whileHover={{ scale: 1.1 }}>We're hiring!</motion.p>
                <motion.h1 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 100, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className='mt-4 text-4xl font-bold'>Become A Member Of Our Enthusiastic & Committed Team</motion.h1>
                <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 100, x: 0 }} transition={{ duration: 1, delay: 0.6 }} className='mt-2'>Experience a culture that values creativity, flexibility, and offers ample opportunities for career growth and personal development. With our people-centric, community-focused business model, we take pride in our high staff retention rate</motion.p>
            </div>

            {/* Job Categories */}
            <div className='flex flex-wrap justify-center gap-3 m-6 font-urbanist'>
                {categories.map((category, index) => (
                    <motion.button key={index} className='px-4 py-2 text-sm font-medium border rounded-full bg-white z-10' initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 100, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.1 }}>
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Job Listings */}
            <div className='w-full max-w-4xl mt-10 space-y-6 font-urbanist z-20'>
                {jobs.map((job, index) => (
                    <motion.div key={index} className='flex md:flex-row flex-col space-y-5 md:space-y-0 md:items-center md:justify-between p-6 bg-white rounded-lg shadow-md overflow-hidden' initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 100, x: 0 }} transition={{ duration: 0.6, delay: index * 0.4 }} whileHover={{ scale: 1.02 }}>
                        <div>
                            <motion.h2 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 100, x: 0 }} transition={{ duration: 1, delay: index * 0.3 }} className='text-xl font-semibold'>{job.title}</motion.h2>
                            <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 100, x: 0 }} transition={{ duration: 1, delay: index * 0.5 }} className='text-gray-600'>{job.description}</motion.p>
                            <div className='flex gap-2 mt-2'>
                                {job.type.map((tag, idx) => (
                                    <motion.span initial={{ opacity: 0, y: 100 }} animate={{ opacity: 100, y: 0 }} transition={{ duration: 1, delay: idx * 0.2 }} key={idx} className='px-3 py-1 text-xs font-medium outline out rounded-full'>{tag}</motion.span>
                                ))}
                            </div>
                        </div>
                        {/* <Link href='/apply' className='text-xl text-[#003F6B] hover:underline'>Apply</Link> */}
                        <motion.div className='relative inline-block overflow-hidden'>
                            <motion.div
                                className='absolute inset-0 rounded-full bg-[#003F6B] opacity-0'
                                initial={{ scale: 0, opacity: 0, x: -100 }}
                                whileInView={{ x: 0 }}
                                whileHover={{ scale: 2, opacity: 0.2 }}
                                transition={{ duration: 0.5 }}
                            />
                            <motion.div
                                initial={{ x: 500 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.7 }}
                                className='relative z-10 px-6 border-2 w-fit border-[#003F6B] rounded-md text-xl text-[#003F6B] hover:text-white transition-all duration-500'
                                whileHover={{ backgroundColor: '#003F6B' }}
                            >
                                <Link href='/apply'>Apply</Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}