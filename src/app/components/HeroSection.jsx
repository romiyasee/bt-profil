  "use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import AnimatedImage from '../components/AnimatedImage';

  const HeroSection = () => {
    return (
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 style={{ fontSize: "2.2rem" }} className="text-white mb-4 sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
      Hallo, Saya{" "}
    </span>
    <br></br>
    <TypeAnimation
      sequence={[
        "Baromim Triwijaya",
        1000,
        "Web Developer",
        1000,
        "Mobile Developer",
        1000,
        "UI/UX Designer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </h1>

            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Sebagai seorang junior, saya memiliki antusiasme terhadap perpaduan antara pengembangan mobile, pengembangan web, dan desain UI/UX. Dengan komitmen untuk terus belajar, saya berdedikasi untuk mengasah keterampilan saya dan menciptakan pengalaman digital yang memikat dengan menyatukan inovasi dan pendekatan yang berorientasi pada pengguna.
            </p>
            
            <div>
              <Link
                href="#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                Kontak Saya
              </Link>
              <Link
              href="https://me-qr.com/AMKE8zXy" target="_blank"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Unduh CV
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#181818] w-full sm:w-[200px] h-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] relative mt-4 lg:mt-0">
              
              <AnimatedImage />
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  export default HeroSection;
