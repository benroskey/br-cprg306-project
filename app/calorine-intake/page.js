'use client'
import Link from 'next/link'
import React, { useState } from 'react'

export default function CalorieCalculator() {
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('male');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [activityLevel, setActivityLevel] = useState('sedentary');
    const [goal, setGoal] = useState('weight maintenance');
    const [calories, setCalories] = useState(0);

    const calculateCalories = (age, weight, height, gender, activityLevel, goal) => {
        let bmr;
        if (gender === 'male')
            bmr = 10*weight + 6.25*height - 5*age + 5;
        else
            bmr = 10*weight + 6.25*height - 5*age - 161;

        const activityCoefficient = {
            'sedentary': 1.2,
            'light': 1.375,
            'moderate': 1.55,
            'active' : 1.725,
            'very active': 1.9,
            'extra active': 2.2
        };

       let calories = Math.round(bmr * activityCoefficient[activityLevel]);

        if (goal === 'weight loss') {
            calories -= 500; // for a 0.5 kg/week weight loss
        } else if (goal === 'weight gain') {
            calories += 500; // for a 0.5 kg/week weight gain
        }
    
        setCalories(calories);
    }

    return (
        <main>
            <div>
                --- Calorie Intake ---<br/>
                <Link href="/"> Home </Link><br/>
                <Link href="/bmi-calc"> BMI Calculator </Link><br/>
                <Link href="/workouts"> Workouts </Link><br/>
            </div>
            <div>
                <br/>
                <p1>
                    A calorie is a unit of energy. In nutrition, calories refer to the energy people get from the food and drink they consume, and the energy they use in physical activity.
                    Calories are listed in the nutritional information on all food packaging. Many weight loss programs center around reducing the intake of calories.
                    <br/><br/><br/>BMR description (Basal Metabolic Rate):
                    <br/><br/><br/> Mifflin-St Jeor Equation:
                    <br/><br/><br/>Exercise: 15-30 minutes of elevated heart rate activity.Intense exercise: 45-120 minutes of elevated heart rate activity.Very intense exercise: 2+ hours of elevated heart rate activity.
                </p1>
                <br/>
                <form>
                    <br/>
                    <label>
                        Age:
                        <input className="text-black rounded" type="number" value={age} onChange={e => setAge(e.target.value)} />
                    </label>
                    <br/>
                    <label>
                        Gender:
                        <select className="text-black rounded" value={gender} onChange={e => setGender(e.target.value)}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Height (in cm):
                        <input className="text-black rounded" type="number" value={height} onChange={e => setHeight(e.target.value)} />
                    </label>
                    <br/>
                    <label>
                        Weight (in kg):
                        <input className="text-black rounded" type="number" value={weight} onChange={e => setWeight(e.target.value)} />
                    </label>
                    <br/>
                    <label>
                        Activity Level:
                        <select className="text-black rounded" value={activityLevel} onChange={e => setActivityLevel(e.target.value)}>
                            <option value="sedentary">Sedentary: Little to no exercise</option>
                            <option value="light">Light: 1-3 times a week</option>
                            <option value="moderate">Moderate: 4-5 times a week </option>
                            <option value="active">Active: You exercise daily </option>
                            <option value="very active">Very Active: Intense workouts daily</option>
                            <option value="extra active">Extra Active (Working out daily, plus intense physical job)</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Goal:
                        <select className="text-black rounded" value={goal} onChange={e => setGoal(e.target.value)}>
                            <option value="weight maintenance">Weight Maintenance</option>
                            <option value="weight loss">Weight Loss</option>
                            <option value="weight gain">Weight Gain</option>
                        </select>
                    </label>
                    <br/>
                    <button className="bg-red-600 hover:bg-green-400 rounded" onClick={(e) => {e.preventDefault(); calculateCalories(age, weight, height, gender, activityLevel, goal);}}>Calculate</button>
                    <br/>
                    <p>You should consume {calories} calories per day.</p>
                </form>
            </div>
        </main>
    );
}
