import Image from 'next/image';
import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';
const testimonials = [
  {
    name: 'Sarah L.',
    handle: '@sarah_l',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'This is the best resume builder I&apos;ve ever used. It&apos;s so simple and the final product looks incredibly professional. I got two interviews within a week of using it!',
  },
  {
    name: 'Michael B.',
    handle: '@michael_b',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'I was struggling to format my resume correctly. Nova Resume made it so easy. The templates are fantastic and ATS-friendly. Highly recommended!',
  },
  {
    name: 'Jessica P.',
    handle: '@jess_p',
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'The AI suggestions were a game-changer. It helped me rephrase my bullet points to be much more impactful. I landed my dream job at a tech giant!',
  },
  {
    name: 'David C.',
    handle: '@dave_c',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'As a recent graduate, I had no idea where to start. This tool guided me through the entire process. The result was a resume I was proud to submit.',
  },
  {
    name: 'Emily R.',
    handle: '@emily_r',
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'The ability to switch templates on the fly is amazing. I created multiple versions of my resume for different job applications in no time.',
  },
  {
    name: 'Alex J.',
    handle: '@alex_j',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    quote:
      'Finally, a resume builder that doesn&apos;t look like it was designed in the 90s. Modern, clean, and effective. What more could you ask for?',
  },
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
      },
    },
  };

  return (
    <section id="testimonials" className="bg-black text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Don&apos;t just take our word for it
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We&apos;ve helped thousands of professionals land their dream jobs. Here&apos;s what
            they have to say.
          </motion.p>
        </div>
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.name}
              className="group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 p-8 transition-all duration-300 transform hover:-translate-y-2 hover:border-purple-500/50"
              variants={itemVariants}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10 flex-grow">
                <blockquote className="text-gray-300">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
              </div>
              <figcaption className="relative z-10 mt-6 flex items-center gap-x-4 pt-6 border-t border-white/10">
                <Image
                  className="h-10 w-10 rounded-full bg-gray-700"
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.handle}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
