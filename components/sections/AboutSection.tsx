'use client';

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background scroll-mt-16 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Why We&apos;re Building APEX
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We&apos;re Zionists, and we believe Israel must keep leading at the edge of technology.
            </p>
          </div>
        </motion.div>
        
        <div className="mx-auto max-w-5xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "From Fast Wins to the Next War",
                content: "Israel leads in cyber-fast wins, clear playbook. To stay ahead, we have to build. We can't afford to fall behind."
              },
              {
                title: "Filling the Gap",
                content: "There is no program connecting Israeli frontier AI with pragmatic, real-world execution. So we built one. This is not just a gap-it's a national vulnerability and a generational opportunity."
              },
              {
                title: "Israel's Edge in AI",
                content: "Israel's advantage isn't data or GPUs-it's elite technical talent with a bias for action. From the army to the startup world, Israelis thrive in complexity and move fast. In AI, where execution and adaptability matter most, Israel is built to lead."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                <motion.div
                  className="p-6 rounded-3xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content.split('national vulnerability').length > 1 ? (
                      <>
                        {item.content.split('national vulnerability')[0]}
                        <span className="font-semibold text-primary">national vulnerability</span>
                        {item.content.split('national vulnerability')[1]}
                      </>
                    ) : item.content.includes('elite technical talent') ? (
                      <>
                        {item.content.split('elite technical talent')[0]}
                        <span className="font-semibold text-primary">elite technical talent with a bias for action</span>
                        {item.content.split('bias for action')[1]}
                      </>
                    ) : item.content.includes('Israel is built to lead') ? (
                      <>
                        {item.content.split('Israel is built to lead')[0]}
                        <span className="font-semibold text-primary">Israel is built to lead</span>
                        {item.content.split('Israel is built to lead')[1]}
                      </>
                    ) : (
                      item.content
                    )}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 