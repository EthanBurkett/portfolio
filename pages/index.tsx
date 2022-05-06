import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaGithub } from "react-icons/fa";
import { SiUpwork, SiReplit } from "react-icons/si";
import Navbar from "../components/Navbar";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ethan Burkett</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />\
      </Head>
      <Navbar />

      <main className="w-screen h-screen overflow-hidden flex flex-row justify-center items-center text-[rgb(54,54,54)] font-['Raleway']">
        <div className="w-screen h-screen flex flex-col justify-center">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-[2rem] font-extrabold">Hi, I am</h1>
            <h1 className="text-[5rem]">Ethan Burkett</h1>
          </div>
          <h1 className="text-lg">Full-Stack Developer / Backend Developer</h1>
          <div className="flex flex-row absolute self-start bottom-32 gap-6">
            <Link href="https://www.github.com/EthanBurkett">
              <div className="w-[64px] h-[64px] bg-[rgb(196,196,196)] rounded-sm drop-shadow-custom flex items-center justify-center pt-[5px] cursor-pointer">
                <FaGithub
                  size={40}
                  className="text-[rgb(54,54,54)] transition-all hover:text-[rgb(74,74,74)]"
                />
              </div>
            </Link>
            <Link href="https://www.upwork.com/freelancers/~01ed5bf590476c3ebd">
              <div className="w-[64px] h-[64px] bg-[rgb(196,196,196)] rounded-sm drop-shadow-custom flex items-center justify-center pt-[5px] cursor-pointer">
                <SiUpwork
                  size={40}
                  className="text-[rgb(54,54,54)] transition-all hover:text-[rgb(74,74,74)]"
                />
              </div>
            </Link>
            <Link href="https://www.replit.com/@ethanburkett">
              <div className="w-[64px] h-[64px] bg-[rgb(196,196,196)] rounded-sm drop-shadow-custom flex items-center justify-center pt-[5px] cursor-pointer">
                <SiReplit
                  size={40}
                  className="text-[rgb(54,54,54)] transition-all hover:text-[rgb(74,74,74)]"
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="w-screen h-screen"></div>
      </main>
    </div>
  );
};

export default Home;
