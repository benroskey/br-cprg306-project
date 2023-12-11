'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import Tab1 from './ppl.js';
import Tab2 from './bro.js';

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

                {activeTab === 'ppl' && <Tab1 />}
                {activeTab === 'bro' && <Tab2 />}
            </div>
        </main>
    );
}