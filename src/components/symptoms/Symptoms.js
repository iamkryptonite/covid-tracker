import React from 'react';
import SideMenu from '../../constants/SideMenu';
import './style.css'
class Symptoms extends React.Component{
    render(){
        return(
            <>
                <SideMenu menuKey={'3'}></SideMenu>
                <main>
                <section className="content">
                    <svg className="covid" enable-background="new 0 0 495.974 495.974" height="512" viewBox="0 0 495.974 495.974" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g id="XMLID_427_"><g><path d="m483.411 250.977c8.43 1.66 13.92 9.83 12.27 18.25l-6.15 31.32c-1.7 8.67-10.3 14.23-18.98 12.1-8.13-1.99-13.06-10.3-11.45-18.51l.17-.84-40.54 1.85c-1.22.05-2.28.86-2.66 2.03-3.96 11.96-9.17 23.36-15.48 34.02-.64 1.08-.54 2.45.27 3.41l17.93 21.3c3.56-3.39 8.21-5.15 12.91-5.15 3.96 0 7.96 1.25 11.35 3.85 8.21 6.28 9.77 18.03 3.49 26.25l-5.2 6.79c-6.1 7.98-17.47 10.12-25.75 4.41-7.13-4.91-9.71-13.74-7.13-21.41l-25.83-11.35c-1.17-.51-2.52-.21-3.37.73-11.96 13.13-25.88 24.43-41.3 33.45-1.06.62-1.63 1.82-1.43 3.03l6.61 40.32 5.72-2.29c8.21-3.28 17.55.92 20.48 9.37 2.74 7.91-1.56 16.56-9.33 19.66l-29.23 11.7c-8.2 3.28-17.54-.92-20.47-9.37-2.74-7.91 1.56-16.56 9.33-19.67l.79-.31-23.58-33.04c-.71-1-1.96-1.44-3.15-1.13-14.09 3.65-28.87 5.61-44.11 5.61-12.06 0-23.82-1.23-35.19-3.55-1.2-.24-2.43.27-3.09 1.3l-23.59 37.01.83.3c7.68 2.8 12.44 10.05 12.44 17.77 0 2.16-.37 4.35-1.15 6.49 0 11.07-8.51 17.03-18.91 13.23l-28.99-10.57c-9.7-3.53-14.76-14.18-11.41-23.91 3.44-10.03 14.87-15.09 24.83-11.46l.67.24 4.8-43.37c.14-1.22-.5-2.38-1.59-2.95-18.36-9.48-34.83-22.11-48.7-37.18-.84-.91-2.15-1.21-3.29-.74l-35.38 14.51c4 7.48 1.75 16.96-5.55 21.76-7.62 5.01-17.91 2.68-23.11-4.8l-9.06-13.05c-5.07-7.29-3.89-17.45 3.09-22.95 7.44-5.86 18.05-4.34 23.62 3.03l24.92-28.16c.83-.94.97-2.3.36-3.39-10.23-18.44-17.23-38.92-20.24-60.67-.17-1.22-1.06-2.21-2.25-2.48l-39.82-9.2-.04 4.67c-.04 4.67-1.96 8.9-5.05 11.95-3.08 3.06-7.32 4.94-12 4.94-9.3 0-16.83-7.59-16.74-16.89l.26-28.93c.08-9.46 7.9-17.43 17.35-17.18 9.17.24 16.49 7.78 16.44 16.98l39.53-9.27c1.2-.28 2.09-1.27 2.25-2.49 3.1-23 10.67-44.59 21.8-63.87.62-1.08.51-2.43-.3-3.39l-18.85-22.14-1.64 2.16c-5.08 6.72-14.78 7.89-21.33 2.44-6.14-5.12-6.89-14.3-2.07-20.67l12.56-16.6c2.92-3.85 7.35-5.88 11.84-5.88 3.11 0 6.25.98 8.93 3 6.21 4.69 7.67 13.31 3.57 19.77l26.36 11.4c1.16.5 2.5.2 3.36-.73 12.44-13.64 27.01-25.3 43.19-34.47 1.06-.61 1.65-1.8 1.47-3.01l-6.07-40.41-5.76 2.22c-8.24 3.17-17.53-1.16-20.34-9.64-2.64-7.95 1.78-16.54 9.59-19.54l29.38-11.3c8.25-3.17 17.53 1.15 20.34 9.64 2.64 7.94-1.77 16.53-9.59 19.54l-.79.3 23.12 33.34c.7 1.01 1.94 1.47 3.13 1.18 13.42-3.29 27.43-5.03 41.86-5.03h.02c1.26 0 2.39-.77 2.81-1.96l7.66-21.42c-8.87-2.78-14.78-11.53-13.65-21.07 1.29-10.81 11.64-18.49 22.45-17.13l10.52 1.32c10.72 1.35 18.76 10.95 17.59 21.7-.92 8.37-6.94 14.89-14.58 16.89l2.66 23.22c.14 1.25 1.07 2.27 2.31 2.54 17.78 3.91 34.55 10.52 49.85 19.37 1.07.61 2.39.52 3.34-.26l31.73-25.75-4.82-3.83c-6.93-5.5-7.91-15.69-2.03-22.42 5.5-6.31 15.15-6.87 21.7-1.66l24.65 19.57c6.93 5.49 7.91 15.69 2.03 22.42-5.5 6.3-15.15 6.86-21.7 1.66l-.67-.53-16.99 36.89c-.52 1.11-.28 2.42.58 3.3 11.96 12.25 22.14 26.25 30.12 41.57.58 1.11 1.79 1.74 3.03 1.57l24.09-3.37c-3.54-9.88 1.71-20.83 11.81-24.14 9.63-3.16 20.01 2.19 23.55 11.69l5.55 14.88c3.5 9.41-.7 20.18-9.9 24.18-8.82 3.83-18.77.37-23.51-7.45l-19.99 13.56c-1.05.71-1.52 2.01-1.18 3.23 4.11 14.9 6.31 30.58 6.31 46.78 0 2.71-.06 5.4-.19 8.07-.05 1.23.64 2.36 1.76 2.85l37.48 16.37 1.18-6.05c1.66-8.43 9.83-13.92 18.25-12.27z" fill="#f79595"/></g></g><ellipse cx="325.731" cy="155.677" fill="#ee6161" rx="24.756" ry="20.699"/><circle cx="236.394" cy="284.578" fill="#ee6161" r="27.059"/><circle cx="341.851" cy="270.481" fill="#f9b1b1" r="19.374"/><circle cx="270.299" cy="365.029" fill="#f9b1b1" r="18.836"/><g><path d="m142.955 233.609c0-67.408 32.157-127.319 81.946-165.228-5.813.82-11.552 1.928-17.17 3.306-1.19.29-2.43-.17-3.13-1.18l-23.12-33.34.79-.3c7.82-3.01 12.23-11.6 9.59-19.54-2.81-8.49-12.09-12.81-20.34-9.64l-29.38 11.3c-7.81 3-12.23 11.59-9.59 19.54 2.81 8.48 12.1 12.81 20.34 9.64l5.76-2.22 6.07 40.41c.18 1.21-.41 2.4-1.47 3.01-16.18 9.17-30.75 20.83-43.19 34.47-.86.93-2.2 1.23-3.36.73l-26.36-11.4c4.1-6.46 2.64-15.08-3.57-19.77-2.68-2.02-5.82-3-8.93-3-4.49 0-8.92 2.03-11.84 5.88l-12.56 16.6c-4.82 6.37-4.07 15.55 2.07 20.67 6.55 5.45 16.25 4.28 21.33-2.44l1.64-2.16 18.85 22.14c.81.96.92 2.31.3 3.39-11.13 19.28-18.7 40.87-21.8 63.87-.16 1.22-1.05 2.21-2.25 2.49l-39.53 9.27c.05-9.2-7.27-16.74-16.44-16.98-9.45-.25-17.27 7.72-17.35 17.18l-.26 28.93c-.09 9.3 7.44 16.89 16.74 16.89 4.68 0 8.92-1.88 12-4.94 3.09-3.05 5.01-7.28 5.05-11.95l.04-4.67 39.82 9.2c1.19.27 2.08 1.26 2.25 2.48 3.01 21.75 10.01 42.23 20.24 60.67.61 1.09.47 2.45-.36 3.39l-24.92 28.16c-5.57-7.37-16.18-8.89-23.62-3.03-6.98 5.5-8.16 15.66-3.09 22.95l9.06 13.05c5.2 7.48 15.49 9.81 23.11 4.8 7.3-4.8 9.55-14.28 5.55-21.76l35.38-14.51c1.14-.47 2.45-.17 3.29.74 13.87 15.07 30.34 27.7 48.7 37.18 1.09.57 1.73 1.73 1.59 2.95l-4.8 43.37-.67-.24c-9.96-3.63-21.39 1.43-24.83 11.46-3.35 9.73 1.71 20.38 11.41 23.91l28.99 10.57c10.4 3.8 18.91-2.16 18.91-13.23.78-2.14 1.15-4.33 1.15-6.49 0-7.72-4.76-14.97-12.44-17.77l-.83-.3 23.59-37.01c.66-1.03 1.89-1.54 3.09-1.3 11.37 2.32 23.13 3.55 35.19 3.55 1.419 0 2.861-.018 4.272-.051-65.927-34.765-110.908-103.985-110.908-183.697z" fill="#f37c7c"/></g><circle cx="152.438" cy="319.972" fill="#ee6161" r="19.622"/><g><path d="m297.66 233.609h-6.63c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h6.63c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#f9b1b1"/></g><g><path d="m209.334 364.709h-6.812c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h6.812c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#f9b1b1"/></g><g><path d="m139.377 255.487h-6.562c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h6.562c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#ee6161"/></g><g><path d="m272.584 124.27h-9.132c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h9.132c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#f9b1b1"/></g><g><path d="m332.561 340.294h-10.084c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h10.084c4.143 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#ee6161"/></g></g><ellipse cx="191.541" cy="176.377" fill="#ee6161" rx="51.654" ry="43.139" transform="matrix(.785 -.619 .619 .785 -68.073 156.437)"/></g></svg>
                    <svg className="cough" height="70vh" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="Corona_Virus_Symptoms_Cough" data-name="Corona Virus Symptoms Cough"><g id="Flat"><path d="m242.04 371.744a288.5 288.5 0 0 1 21.95-30.691v-26.807c-24.331 5.78-27.491 7.624-35.22 7.624a38.675 38.675 0 0 1 -36.792-27.4 8 8 0 0 1 4.086-9.457l17.936-8.962c-2.738-6.589-5.368-10.906-22.941-8.373a8 8 0 0 1 -8.8-5.619l-5.059-16.842c-21.369-14.061-26-13.793-27.085-19.792-1.113-6.145 2.851-6.62 25.872-37.6v-59.825h216c-1.575 213.535 3.724 210.637-4.114 214.993-2.988 1.66-73.922 40.66-139.015 41a8 8 0 0 1 -6.818-12.249z" fill="#ffdfc5"/><path d="m264.018 315.261v25.793a288.341 288.341 0 0 0 -21.95 30.69 8 8 0 0 0 6.821 12.246c65.093-.337 136.027-39.337 139.015-41a8 8 0 0 0 4.114-6.99v-171.448a232.539 232.539 0 0 1 -128 150.709z" fill="#ffd5c7"/><path d="m447.829 512h-247.641c-2.433-57.059 21.754-108.113 41.884-140.254 21.946 4.254 136.546-19.746 150.946-40.546 39 44.8 55.889 103.736 55 152.043z" fill="#96e0d7"/><path d="m419.713 369.857a208.125 208.125 0 0 1 -218.829 115.855 193.324 193.324 0 0 0 -.7 26.288h247.645l.189-28.757c.651-35.343-8.229-76.365-28.305-113.386z" fill="#97d0dd"/><path d="m384.016 302.568a8.01 8.01 0 0 1 -2.811-.511c-69.187-25.988-69.187-95.856-69.187-137.6 0-2.862-.632-6.844-3.647-9.561-2.653-2.392-6.747-3.435-11.525-2.938a7.889 7.889 0 0 1 -.828.043h-74.636c-23.512-.395-42.728-8.562-57.115-24.276-32.107-35.07-28.211-95.185-28.029-97.725a8.079 8.079 0 0 1 6.5-7.428 7.844 7.844 0 0 1 8.612 4.377c.551.969 6.522 10.71 23.636 10.71 18.884 0 46.481-8.113 75.7-16.7 32.182-9.459 65.458-19.246 94.45-20.759 33.014-1.72 55.524 8.314 66.993 29.849 17.971 2.4 32.712 14.327 41.857 34.031 11.9 25.648 13.307 61.677 3.95 101.451-10.5 44.648-33.886 90.976-67.624 133.975a8 8 0 0 1 -6.296 3.062z" fill="#68676b"/><path d="m453.986 64.079c-5.612-12.09-13.338-21.236-22.617-27.066a220.041 220.041 0 0 1 -116.543 177.52c5.363 34.505 20.968 70.466 66.379 87.524a8 8 0 0 0 9.107-2.552c33.738-43 57.121-89.327 67.624-133.975 9.357-39.774 7.953-75.803-3.95-101.451z" fill="#58575b"/><path d="m328.018 238.567h-32v-64h16.744c6.783-34.749 55.256-30.962 55.256 16 0 27.003-13.601 48-40 48z" fill="#ffdfc5"/><circle cx="332.018" cy="52" fill="#8a8a8c" r="28"/><circle cx="380.018" cy="84" fill="#8a8a8c" r="12"/><path d="m400.018 512h-112v-71.15c0-30.731 24.4-56.375 55.132-56.843a56.061 56.061 0 0 1 56.868 55.993z" fill="#afefde"/><path d="m352.012 155.515c0 .162.006.323.006.485a92 92 0 0 1 -51.389 82.567h27.389c26.4 0 40-21 40-48 0-17.814-6.977-29.41-16.006-35.052z" fill="#ffd5c7"/><circle cx="336.018" cy="432" fill="#d5f7ed" r="16"/><circle cx="360.018" cy="456" fill="#d5f7ed" r="8"/><g fill="#f27c6d"><path d="m151.988 272h-15.988a8 8 0 0 1 0-16h15.988a8 8 0 0 1 0 16z"/><path d="m183.988 344a8 8 0 0 1 -8-8v-16a8 8 0 0 1 16 0v16a8 8 0 0 1 -8 8z"/><path d="m143.988 320a8 8 0 0 1 -5.657-13.657l16-16a8 8 0 0 1 11.315 11.314l-16 16a7.978 7.978 0 0 1 -5.658 2.343z"/></g><path d="m72 456.911v55.089h76.193c-1.12-13.721-2.462-31.229-3.99-53.667 29.657-41.62 22.85-82.609 23.8-90.333a24 24 0 0 0 -48 0v18.053a5.947 5.947 0 0 1 -11.589 1.881l-12.088-36.254 9.613-38.456c6.74-26.948-28.242-41.865-33.429-28.033-24.749 67.323-25.278 64.392-24.305 68.609z" fill="#ffdfc5"/><path d="m168 368c0-.179-.01-.355-.014-.533a177.614 177.614 0 0 1 -95.986 91.706v52.827h76.193c-1.12-13.721-2.462-31.229-3.99-53.667 29.657-41.62 22.85-82.609 23.797-90.333z" fill="#ffd5c7"/></g></g></svg>
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