import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const TEAM_URL = "https://cdn.poehali.dev/projects/00b48ea9-6036-45e2-b9e8-7b33e17c233f/files/0663801c-dd9d-4f5c-84da-1baef8e6cecc.jpg"

const LOGO_URL = "https://cdn.poehali.dev/projects/00b48ea9-6036-45e2-b9e8-7b33e17c233f/files/437cb4f4-c747-4809-985f-a29156d86869.jpg"

function Logo() {
  return (
    <div className="fixed top-6 left-8 z-40 flex items-center gap-3">
      <img src={LOGO_URL} alt="АРТСТРОЙ" className="w-10 h-10 rounded-sm object-cover" />
      <span className="text-white font-bold text-lg tracking-widest uppercase">АРТСТРОЙ</span>
    </div>
  )
}

interface ContactSectionProps {
  isActive: boolean
}

export default function ContactSection({ isActive }: ContactSectionProps) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col overflow-hidden bg-black">
      <Logo />

      {/* Фото команды сверху */}
      <motion.div
        className="relative w-full h-[45%] flex-shrink-0 -mt-6"
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : {}}
        transition={{ duration: 0.7 }}
      >
        <img
          src={TEAM_URL}
          alt="Команда АРТСТРОЙ"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <motion.div
          className="absolute bottom-4 left-8 md:left-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-white/80 text-sm tracking-widest uppercase">Наша команда</p>
          <p className="text-white font-semibold text-lg">В строительстве уже более 7 лет</p>
          <p className="text-neutral-400 text-sm mt-0.5">Менеджеры · Проектировщики · Бригадиры · Управляющая организации</p>
        </motion.div>
      </motion.div>

      {/* Контактная информация */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Свяжитесь с нами
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Офисы */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="MapPin" size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">Офис в Москве</p>
                <p className="text-white font-medium">ул. Родченко, 2</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="MapPin" size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">Офис в Рязани</p>
                <p className="text-white font-medium">ул. Тиванова, 7</p>
              </div>
            </div>
          </motion.div>

          {/* Телефон и почта */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Phone" size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">По вопросам строительства</p>
                <a href="tel:+79156202398" className="text-white font-medium hover:text-amber-400 transition-colors">
                  +7 915 620-23-98
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Mail" size={18} className="text-amber-400" />
              </div>
              <div>
                <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">Предложения о сотрудничестве и коммерческие</p>
                <a href="mailto:" className="text-white font-medium hover:text-amber-400 transition-colors italic text-neutral-500">
                  Укажите email
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          className="mt-8 text-neutral-600 text-sm"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          © 2026 АРТСТРОЙ. Все права защищены.
        </motion.p>
      </div>
    </section>
  )
}