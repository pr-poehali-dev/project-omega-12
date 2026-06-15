import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"
import OrderModal from "@/components/OrderModal"

const LOGO_URL = "https://cdn.poehali.dev/projects/00b48ea9-6036-45e2-b9e8-7b33e17c233f/files/255ba6a4-44e6-4637-9f25-ee0c40e85b95.jpg"
const HERO_BG_URL = "https://cdn.poehali.dev/projects/00b48ea9-6036-45e2-b9e8-7b33e17c233f/files/636a3e2c-3edd-438a-9ee9-f0f3125d34dc.jpg"
const ABOUT_BG_URL = "https://cdn.poehali.dev/projects/00b48ea9-6036-45e2-b9e8-7b33e17c233f/files/7383e593-2969-4a12-a89d-b17e3f29239f.jpg"
const LAND_BG_URL = "https://cdn.poehali.dev/projects/00b48ea9-6036-45e2-b9e8-7b33e17c233f/files/72d12cae-d685-405b-9855-30d69d150205.jpg"
const DESIGN_BG_URL = "https://cdn.poehali.dev/projects/00b48ea9-6036-45e2-b9e8-7b33e17c233f/files/3d549cba-2cf4-4274-8dba-313d55217816.jpg"
const CONTROL_BG_URL = "https://cdn.poehali.dev/projects/00b48ea9-6036-45e2-b9e8-7b33e17c233f/files/50327f62-48fe-472a-a23b-3e023b51db4e.jpg"
const JOIN_BG_URL = "https://cdn.poehali.dev/projects/00b48ea9-6036-45e2-b9e8-7b33e17c233f/files/3431a4ea-3f2b-4521-8500-729d7f2eea46.jpg"

function Logo() {
  return (
    <div className="fixed top-6 left-8 z-40 flex items-center gap-3">
      <img src={LOGO_URL} alt="АРТСТРОЙ" className="w-10 h-10 rounded-sm object-cover" />
      <span className="text-white font-bold text-lg tracking-widest uppercase">АРТСТРОЙ</span>
    </div>
  )
}

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, icon, extraContent }: SectionProps & { icon?: string; extraContent?: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false)
  const isHero = id === 'hero'
  const isAbout = id === 'about'
  const isLand = id === 'land'
  const isDesign = id === 'design'
  const isControl = id === 'control'
  const isJoin = id === 'join'

  return (
    <section
      id={id}
      className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden"
    >
      <Logo />

      {isHero && (
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_BG_URL}
            alt="Каменный дом АРТСТРОЙ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {isAbout && (
        <div className="absolute inset-0 z-0">
          <img
            src={ABOUT_BG_URL}
            alt="Строительство дома"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      )}

      {isLand && (
        <div className="absolute inset-0 z-0">
          <img
            src={LAND_BG_URL}
            alt="Геодезическая зарисовка участка"
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {isDesign && (
        <div className="absolute inset-0 z-0">
          <img
            src={DESIGN_BG_URL}
            alt="Карандашный эскиз проекта"
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
      )}

      {isJoin && (
        <div className="absolute inset-0 z-0">
          <img
            src={JOIN_BG_URL}
            alt="Зарисовка дома мечты клиента"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      {isControl && (
        <div className="absolute inset-0 z-0">
          <img
            src={CONTROL_BG_URL}
            alt="Контроль этапов строительства"
            className="w-full h-full object-cover grayscale opacity-45"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      <div className="relative z-10">
        {subtitle && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}

        {icon && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
              <Icon name={icon} size={32} className="text-amber-400" />
            </div>
          </motion.div>
        )}

        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        {content && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}

        {extraContent && (
          <motion.p
            className="text-base md:text-lg max-w-2xl mt-4 text-neutral-500 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {extraContent}
          </motion.p>
        )}

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setModalOpen(true)}
              className="text-amber-400 bg-transparent border-amber-400 hover:bg-amber-400 hover:text-black transition-colors"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </div>

      <OrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}