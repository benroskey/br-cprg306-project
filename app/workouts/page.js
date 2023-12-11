'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import PPL from './ppl.js';
import BroWorkout from './bro.js';
import Influencer from './influencer.js';
import Arnold from './arnold.js'

export default function Workouts() {

    const [activeTab, setActiveTab] = useState('ppl');

    return(
        <main>
            <div>
                --- Workouts ---<br/>
                <Link href="/"> Home </Link><br/>
                <Link href="/bmi-calc"> BMI Calculator </Link><br/>
                <Link href="/calorine-intake"> Calorie Intake </Link><br/>
            </div>
            <br/>
            <div>
                <button onClick={() => setActiveTab('ppl')}>PPL</button>
                <button onClick={() => setActiveTab('bro')}>Bro-Split</button>
                <button onClick={() => setActiveTab('influencer')}>Influencer</button>
                <button onClick={() => setActiveTab('arnold')}>Arnold</button>

                {activeTab === 'ppl' && <PPL />}
                {activeTab === 'bro' && <BroWorkout />}
                {activeTab === 'influencer' && <Influencer />}
                {activeTab === 'arnold' && <Arnold />}
            </div>
        </main>
    );
}