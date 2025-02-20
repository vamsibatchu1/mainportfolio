"use client";

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronsRight, RotateCcw, Columns3, Rows3, X } from 'lucide-react'
import { Fragment, useEffect, useMemo, useState, useRef } from 'react'
import { useMediaQuery, useOnClickOutside } from 'usehooks-ts'
import Image from 'next/image';

type PostType = {
  image: string
  title: string
  description: string
  date: string
}

const POSTS: PostType[] = [
  {
    image: 'https://blog-interaction.vercel.app/1.jpg',
    title: 'Early Days in Design',
    description:
      'My journey into design began with a curiosity about how things work and why they work that way. This curiosity led me to explore the intersection of technology and human behavior.',
    date: '2018',
  },
  {
    image: 'https://blog-interaction.vercel.app/2.jpg',
    title: 'Growing as a Designer',
    description:
      'Through various projects and challenges, I developed a deep understanding of user-centered design principles and the importance of solving real problems.',
    date: '2020',
  },
  {
    image: 'https://blog-interaction.vercel.app/3.jpg',
    title: 'Leading Design Teams',
    description:
      'Today, I focus on building and leading design teams, creating systems that scale, and ensuring that design thinking is embedded in organizational culture.',
    date: '2024',
  },
]

const PostDetail = ({
  activePost,
  alignment,
}: {
  activePost: PostType
  alignment: 'columns' | 'rows'
}) => {
  return (
    <motion.div
      className="flex w-full justify-between gap-6"
      layoutId="post-detail"
      style={{
        marginTop: alignment === 'rows' ? '0' : '5rem',
      }}
    >
      <div className="flex w-2/3 flex-col gap-6">
        <div>
          <p className="mb-2 font-bold">Title</p>
          <motion.p
            className="min-h-10 text-sm text-zinc-600"
            key={activePost.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {activePost.title}
          </motion.p>
        </div>
        <div>
          <p className="mb-2 font-bold">Published</p>
          <motion.p
            className="text-sm text-zinc-600"
            key={activePost.date}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {activePost.date}
          </motion.p>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2 font-bold">Description</p>
        <motion.p
          className="text-sm text-zinc-600"
          key={activePost.description}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {activePost.description}
        </motion.p>
      </div>
    </motion.div>
  )
}

export function StoryGallery() {
  const [alignment, setAlignment] = useState<'columns' | 'rows'>('columns')
  const [activePost, setActivePost] = useState<PostType>(POSTS[0])
  const [isHovered, setIsHovered] = useState<number | null>(null)
  const matches = useMediaQuery('(max-width: 640px)')

  useEffect(() => {
    if (matches) {
      setAlignment('rows')
    }
  }, [matches])

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <div
        className="relative flex w-full items-center justify-center"
        style={{
          flexDirection: alignment === 'rows' ? 'column' : 'row',
          gap: alignment === 'rows' ? '1.5rem' : '0',
        }}
      >
        {POSTS.map((post, index) => {
          const initialRotation = useMemo(() => {
            return `${Math.random() * 10 > 5 ? '-' : ''}${
              Math.random() * 10 + 10
            }deg`
          }, [])

          return (
            <Fragment key={index}>
              <motion.div
                whileHover={{
                  zIndex: 5,
                  scale: alignment === 'rows' ? 1 : 1.2,
                }}
                style={{
                  marginRight: alignment === 'rows' ? '0' : '-2.5rem',
                  borderRadius: 24,
                }}
                layout
              >
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20, scale: 0.9, rotate: 5 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2,
                  }}
                  onMouseEnter={() => {
                    setIsHovered(index)
                    setActivePost(post)
                  }}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <motion.div
                    className="relative h-[160px] w-[214px] overflow-hidden rounded-3xl border-4 border-white/50 bg-white shadow-xl transition-all duration-300"
                    style={{
                      rotate: alignment === 'rows' ? '0' : initialRotation,
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {isHovered === index && (
                    <motion.div
                      className="absolute -top-8 left-0 right-0 flex justify-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      <span className="rounded-lg bg-zinc-900 px-2 py-1.5 text-xs font-medium text-white">
                        {post.title}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
              {activePost === post && alignment === 'rows' && (
                <PostDetail activePost={activePost} alignment={alignment} />
              )}
            </Fragment>
          )
        })}
      </div>

      {alignment === 'columns' && (
        <PostDetail activePost={activePost} alignment={alignment} />
      )}
    </div>
  )
} 