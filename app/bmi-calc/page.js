'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function BMICalculator() {

    const [bmi, setBmi] = useState(0);
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    }
    
    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        const bmi = Math.round(weight/(height*height));
        setBmi(bmi);
        console.log(bmi);
    }

    return (
        <main>
            <div>
            --- BMI Calculator ---<br/>
            <Link href="/"> Home </Link><br/>
            <Link href="/calorine-intake"> Calorie Intake </Link><br/>
            <Link href="/workouts"> Workouts </Link><br/>
            </div><br/>
            <div>
            <p1>
                BMI is a person's weight in kilograms divided by the square of height in meters.
                A high BMI can indicate high body fatness, and a low BMI can indicate too low body fatness.
                BMI is a screening tool that can indicate whether a person is underweight or if they have a healthy weight, excess weight, or obesity.
                If a person's BMI is outside of the healthy range, their health risks may increase significantly. This applies to both under and overweight individuals.
            </p1>
            <br/><br/>BMI Categories:<br/>
            <br/><br/><form>
                <label>
                    Height(in m):
                    <input type="number" name="height" className="text-black" onChange={handleHeightChange}/>
                </label>
                <label>
                    Weight(in kg):
                    <input type="number" name="weight" className="text-black" onChange={handleWeightChange}/>
                </label>
                
                <br/><button type="submit" className="bg-red-600 hover:bg-green-400 rounded" onClick={handleClick} >
                Calculate
                </button>
                <br/><label>
                    BMI:
                    <input type="number" name="bmi" className="text-black" value={bmi} readOnly/>
                    </label>
            </form>
            </div>
        </main>
    );
}