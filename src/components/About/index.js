import React from "react";
import coverImage from "../../assets/cover/logo_new.png";
import mypic from "../../assets/MDA.jpeg";

function About() {
  return (
    <section className="about-me-section">
      <h1 id="about">About </h1>
      <img className="mypic1" src={mypic} alt="Suja-Profile-Pic"></img>
      <img className="mypic" src={coverImage} alt="Suja-Profile-Pic"></img>
      <p className="bio">
        Suja Raghuram Manoj is the daughter of legendary dance director,
        director, and producer in the Indian Film Industry, K.S. Raghuram. Suja
        is also the great granddaughter of director Krishnaswami
        Subrahmanyam(who was called the father of tamil Cinema, and he was in
        the Indian stamps). Her mother, Girija, comes from a family of
        choreographers, which includes her younger sisters, Brinda and Kala.
        Suja herself started as a stage dancer at the age of 5. She completed
        somewhere around 500 dance performances all around the world. She is a
        renowned classical dancer following the footsteps of her aunt, Padma
        Subrahmanyam. She has worked alongside with kamal hassan, prabudeva,
        surya, Venkatesh, mohanlal etc..She was an actress for about 5 years and
        worked on 2 television dramas as lead actress (krishnadasi in tamil,
        chatharangam in telugu) with around 350 episodes each along with a
        couple of feature films(MelliniumStars with jayaram and biju menon in
        Malayalam). She appeared on screen as a child artist alongside Madhuri
        Dixit and Amir Khan. Suja opened her own dance studio in Cincinnati,
        Ohio, with close to 300 students. Now, Suja has been successfully
        running RAA (Raghuram Arts Academy) in Los Angeles, California, for the
        past 7 years. Suja is the founder of RAA Productions and MassTv, a
        Broadcasting and Media Production company based in West Hollywood,
        California. After starting in 2015, RAA Productions and Mass tv has
        grown immensely and has produced various forms of entertainment ranging
        from music videos to short films (Take it Easy). With more goals in
        mind, RAA Productions and Mass tv is working to provide families with more
        entertainment as well as introduce young talents across the U.S. It
        started with the goal of promoting the young talents living in the U.S.
      </p>
    </section>
  );
}

export default About;
