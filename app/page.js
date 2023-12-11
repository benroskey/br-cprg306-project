'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Sunday from './dayofweek/sunday.js';
import Monday from './dayofweek/monday.js';
import Tuesday from './dayofweek/tuesday.js';
import Wednesday from './dayofweek/wednesday.js';
import Thursday from './dayofweek/thursday.js';
import Friday from './dayofweek/friday.js';
import Saturday from './dayofweek/saturday.js';

export default function Home() {

    const [dayOfWeek, setDayOfWeek] = useState('');

    useEffect(() => {
      const date = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      setDayOfWeek(days[date.getDay()]);
    }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className=" text-10x1 font-extrabold mb-5 "> Fitness App </h1>
        <Link href="/bmi-calc"> BMI Calculator </Link><br/>
        <Link href="/calorine-intake"> Calorie Intake </Link><br/>
        <Link href="/workouts"> Workouts </Link><br/><br/>
        {dayOfWeek === 'Sunday' && <Sunday />}
        {dayOfWeek === 'Monday' && <Monday />}
        {dayOfWeek === 'Tuesday' && <Tuesday />}
        {dayOfWeek === 'Wednesday' && <Wednesday />}
        {dayOfWeek === 'Thursday' && <Thursday />}
        {dayOfWeek === 'Friday' && <Friday />}
        {dayOfWeek === 'Saturday' && <Saturday />}
        <br/><br/>
        <p1>
          I am NOT a medical professional, just a simple coder and geology fanatic so please consult your doctor before making any changes to your diet or exercise routine.
          <br/>
        </p1>
      </div>
    </main>
  )
}
