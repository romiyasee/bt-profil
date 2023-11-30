"use client";
import Image from "next/image";
import Link from "next/link";
import EmailIcon from "../../../public/email-icon.svg";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import WhatsAppIcon from "../../../public/whatsapp-icon.svg";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Saat ini saya sedang mencari peluang baru, kotak masuk saya selalu terbuka. Baik Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan berusaha sebaik mungkin untuk menjawabnya!
        </p>
        <div className="socials flex flex-row gap-2">
  <Link href="https://github.com/romiyasee" target="_blank">
    <Image src={GithubIcon} alt="Github Icon" width={45} height={45} />
  </Link>
  <Link href="https://linkedin.com/in/baromim-triwijaya" target="_blank">
    <Image src={LinkedinIcon} alt="Linkedin Icon" width={45} height={45} />
  </Link>
  <Link href="mailto:baromim08@gmail.com?subject=Judul%20Email&body=Isi%20Pesan" target="_blank">
    <Image src={EmailIcon} alt="WhatsApp Icon" width={45} height={45} />
  </Link>
  <Link href="https://wa.me/6285895644559?text=Halo,%20saya%20ingin%20berbicara%20dengan%20Anda." target="_blank">
    <Image src={WhatsAppIcon} alt="WhatsApp Icon" width={45} height={45} />
  </Link>
</div>
      </div>
      <div>
          <form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="emailanda@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subjek
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Hanya sekedar menyapa"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Pesan
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Ayo kita berbincang tentang..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Kirim Pesan
            </button>
          </form>
      </div>
    </section>
  );
};

export default EmailSection;
