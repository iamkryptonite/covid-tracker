import React from 'react'
import SideMenu from '../../constants/SideMenu'
import './style.css'
class Symptoms extends React.Component{
    render(){
        return(
            <>
                <SideMenu menuKey={'3'}></SideMenu>
                <main>
                <section>
                    <h2>Symptoms of COVID-19</h2>
                    <p>The main symptoms include:</p>
                    <ul>
                        <li>Fever&nbsp;</li>
                        <li>Coughing</li>
                        <li>Shortness of breath</li>
                        <li>Trouble breathing</li>
                        <li>Fatigue</li>
                        <li>Chills, sometimes with shaking</li>
                        <li>Body aches</li>
                        <li>Headache</li>
                        <li>Sore throat</li>
                        <li>Congestion/runny nose</li>
                        <li>Loss of smell or taste</li>
                        <li>Nausea</li>
                        <li>Diarrhea</li>
                    </ul>
                    <p>The virus can lead to <a href="https://www.webmd.com/lung/understanding-pneumonia-basics" data-metrics-link="" data-crosslink-type="article">pneumonia</a>, respiratory failure, heart problems, liver problems,&nbsp;<a href="https://www.webmd.com/a-to-z-guides/sepsis-septicemia-blood-infection" data-metrics-link="" data-crosslink-type="article">septic shock</a>, and death. Many COVID-19 complications may be caused by a condition known as cytokine release syndrome or a cytokine storm. This is when an infection triggers your immune system to flood your bloodstream with inflammatory proteins called cytokines. They can kill tissue and damage your organs.</p>
                    <p>If you notice the following severe symptoms in yourself or a loved one, get medical help right away:</p>
                    <ul>
                        <li>
                            <a href="https://www.webmd.com/lung/breathing-problems" data-metrics-link="" data-crosslink-type="article">Trouble breathing</a> or shortness of breath</li>
                        <li>Ongoing <a href="https://www.webmd.com/pain-management/guide/whats-causing-my-chest-pain" data-metrics-link="" data-crosslink-type="article">chest pain</a> or pressure</li>
                        <li>New confusion</li>
                        <li>Can’t wake up fully</li>
                        <li>Bluish lips or face</li>
                    </ul>
                    <p>Strokes have also been reported in some people who have COVID-19. Remember FAST:</p>
                    <ul>
                        <li>
                            <strong>Face.</strong> Is one side of the person’s face numb or drooping? Is their smile lopsided?</li>
                        <li>
                            <strong>Arms.</strong> Is one arm weak or numb? If they try to raise both arms, does one arm sag?</li>
                        <li>
                            <strong>Speech.</strong> Can they speak clearly? Ask them to repeat a sentence.</li>
                        <li>
                            <strong>Time.</strong> Every minute counts when someone shows signs of a stroke. Call 911 right away.</li>
                    </ul>
                    <p>If you’re infected, symptoms can show up in as few as 2 days or as many as 14. It varies from person to person.</p>
                    <p>According to researchers in China, these were the most common symptoms among people who had COVID-19:</p>
                    <ul>
                    <li>Fever 99%</li>
                    <li>Fatigue 70%</li>
                    <li>Cough 59%</li>
                    <li>Lack of appetite 40%</li>
                    <li>Body aches 35%</li>
                    <li>Shortness of breath 31%</li>
                    <li>Mucus/phlegm 27%</li>
                    </ul>
                    <p>Some people who are hospitalized for COVID-19 have also have dangerous blood clots, including in their legs, lungs, and arteries.</p>
                    <p>
                    <strong>What to do if you think you have it </strong>
                    </p>
                    <p>If you live in or have traveled to an area where COVID-19 is spreading:</p>
                    <ul>
                    <li>
                        <strong>If you don’t feel well, stay home.</strong> Even if you have mild symptoms like a headache and runny nose, stay in until you’re better. This lets doctors focus on people who are more seriously ill and protects health care workers and people you might meet along the way. You might hear this called self-quarantine. Try to stay in a separate room away from other people in your home. Use a separate bathroom if you can.</li>
                    <li>
                        <strong>Call the doctor if you have trouble breathing. </strong>You need to get medical help as soon as possible. Calling ahead (rather than showing up) will let the doctor direct you to the proper place, which may not be your doctor’s office. If you don’t have a regular doctor, call your local board of health. They can tell you where to go for <a href="https://www.webmd.com/lung/coronavirus-testing" data-metrics-link="">testing</a> and treatment.</li>
                    <li>
                        <strong>Follow your doctor’s advice and keep up with the news on COVID-19.</strong> Between your doctor and health care authorities, you’ll get the care you need and information on how to prevent the virus from spreading.</li>
                    </ul>
                </section>
                </main>
            </>
        )
    }
}
export default Symptoms