import React from "react";
import { HeroVideoDialog } from "~/components/hero-video";

const DemPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-10 sm:p-20">
      <HeroVideoDialog
        className="block max-w-5xl dark:hidden"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dj05xae9r/video/upload/v1751277552/projectdemo_phfdrw.mp4"
        thumbnailSrc="https://res.cloudinary.com/dj05xae9r/image/upload/v1751277694/uzvnqd2juncerbnawuui.png"
        thumbnailAlt="DemoVideo"
      />
      <HeroVideoDialog
        className="hidden max-w-5xl dark:block"
        animationStyle="from-center"
        videoSrc="https://res.cloudinary.com/dj05xae9r/video/upload/v1751277552/projectdemo_phfdrw.mp4"
        thumbnailSrc="https://res.cloudinary.com/dj05xae9r/image/upload/v1751277694/uzvnqd2juncerbnawuui.png"
        thumbnailAlt="DemoVideo"
      />
    </div>
  );
};

export default DemPage;
