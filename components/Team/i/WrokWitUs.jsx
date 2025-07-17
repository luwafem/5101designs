"use client";
import { workwithus } from "../../SiteMaps/data";
import { motion } from "framer-motion";
import SubscribeCTA from "../../Banner/CTA";

export default function WorkwithUs() {
  return (
    <div className="w-full h-auto bg-black">
      <div className="h-[70%] w-[90%] m-auto grid gap-[3em] lg:py-[7em] lg:px-0 p-4 nine20">
        <div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1, ease: "circIn" }}
            viewport={{ once: true }}
            className="animate_top w-fit m-auto text-center"
          >
            <p className="text-gray-400 lg:w-[536px]">
              We are always happy and ready to work with you. Let us bring your business back to life.
            </p>
          </motion.div>
        </div>

        <div className="container flex xl:flex-row flex-col gap-5">
          {workwithus.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1, ease: "circIn" }}
              viewport={{ once: true }}
              className="animate_top bg-white/90 backdrop-blur-md lg:w-1/3 h-[450px] rounded-[16px] relative overflow-hidden"
            >
              {/* Folded Top-Right Corner — Large Triangle */}
              <div
                className="absolute rounded-full rotate-45 top-72 right-0  w-5 h-60 bg-black z-10"
                
              />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1, ease: "circIn" }}
                viewport={{ once: true }}
                className="animate_top mt-9"
              >
                <div className="w-[80%] m-auto">
                  <p className="text-[40px] font-extrabold" style={{ fontFamily: "AvenirBold" }}>
                    {item.title}
                  </p>
                </div>

                <div className="text-[15px] py-4 w-[80%] m-auto">
                  <p>{item.description1}</p>
                </div>

                <div className="text-[24px] w-[80%] m-auto">
                  <p>{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1, ease: "circIn" }}
          viewport={{ once: true }}
          className="animate_top grid gap-5"
        >
          <div></div>
        </motion.div>

        <SubscribeCTA />
      </div>
    </div>
  );
}
