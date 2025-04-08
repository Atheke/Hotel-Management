const fs = require('fs');


const data={

    "Common Cold": ["Runny or stuffy nose", "Sneezing", "Sore throat", "Cough", "Mild body aches", "Low-grade fever"],
    "Influenza (Flu)": ["Fever", "Chills", "Muscle or body aches", "Cough", "Sore throat", "Runny or stuffy nose", "Fatigue"],
    "Gastroenteritis (Stomach Flu)": ["Nausea", "Vomiting", "Diarrhea", "Abdominal pain or cramps", "Fever", "Headache"],
    "Pneumonia": ["Cough with phlegm or pus", "Fever", "Chills", "Difficulty breathing", "Chest pain", "Fatigue"],
    "Urinary Tract Infection (UTI)": ["Burning sensation during urination", "Frequent urination", "Cloudy or strong-smelling urine", "Pelvic pain", "Fever"],
    "Strep Throat": ["Sudden and severe sore throat", "Pain when swallowing", "Fever", "Swollen tonsils", "White patches or pus on the tonsils"],
    "Conjunctivitis (Pink Eye)": ["Redness in the white of the eye or inner eyelid", "Increased tearing", "Itching or burning sensation", "Discharge that may form a crust during sleep"],
    "Sinusitis": ["Nasal congestion", "Facial pain or pressure", "Headache", "Thick yellow or green mucus from the nose", "Reduced sense of smell and taste"],
    "Bronchitis": ["Persistent cough with mucus", "Chest discomfort", "Fatigue", "Shortness of breath", "Mild fever and chills"],
    "Allergic Rhinitis (Hay Fever)": ["Sneezing", "Runny or stuffy nose", "Itchy or watery eyes", "Itching of the throat or roof of the mouth", "Cough"],
    "Asthma": ["Shortness of breath", "Chest tightness or pain", "Wheezing", "Coughing, especially at night or early morning"],
    "Migraine": ["Severe headache (usually one-sided)", "Throbbing or pulsating pain", "Nausea or vomiting", "Sensitivity to light and sound"],
    "Diabetes (Type 2)": ["Increased thirst", "Frequent urination", "Fatigue", "Blurred vision", "Slow-healing sores or frequent infections"],
    "Hypertension (High Blood Pressure)": ["Headache", "Dizziness", "Blurred vision", "Chest pain", "Shortness of breath"],
    "Osteoarthritis": ["Joint pain", "Stiffness", "Swelling", "Decreased range of motion"],
    "Rheumatoid Arthritis": ["Joint pain", "Swelling", "Stiffness, especially in the morning or after inactivity", "Fatigue", "Low-grade fever"],
    "Gastric Ulcer": ["Abdominal pain, usually between meals or during the night", "Nausea", "Vomiting", "Bloating", "Loss of appetite", "Weight loss"],
    "Chronic Obstructive Pulmonary Disease (COPD)": ["Shortness of breath", "Chronic cough", "Wheezing", "Chest tightness"],
    "Eczema (Atopic Dermatitis)": ["Itchy skin", "Red to brownish-gray patches", "Small, raised bumps", "Thickened, cracked, or scaly skin"],
    "Anxiety Disorder": ["Excessive worrying", "Restlessness", "Fatigue", "Difficulty concentrating", "Irritability", "Muscle tension", "Sleep disturbances"],
    "Food Poisoning": ["Nausea", "Vomiting", "Diarrhea", "Abdominal pain or cramps", "Fever", "Headache"],
    "Heat Exhaustion": ["Heavy sweating", "Weakness", "Dizziness", "Nausea or vomiting", "Fainting", "Headache"],
    "Heat Stroke": ["High body temperature (above 103°F or 40°C)", "Hot, red, dry skin", "Rapid pulse", "Headache", "Dizziness", "Confusion", "Loss of consciousness"],
    "Sunburn": ["Redness", "Pain", "Swelling", "Blisters", "Headache", "Fever", "Nausea"],
    "Meningitis": ["Sudden high Fever", "Stiff neck", "Severe headache", "Confusion or difficulty concentrating", "Nausea or vomiting", "Sensitivity to light", "Seizures"],
    "Chickenpox": ["Rash (red spots that progress to blisters)", "Itching", "Fever", "Fatigue", "Loss of appetite", "Headache"],
    "Hepatitis": ["Fatigue", "Nausea or vomiting", "Abdominal pain or discomfort", "Loss of appetite", "Jaundice (yellowing of the skin and eyes)", "Dark urine", "Pale-colored stool"],
    "Lyme Disease": ["Bullseye-shaped rash", "Fever", "Chills", "Headache", "Fatigue", "Muscle and joint aches"],
    "Concussion": ["Headache", "Confusion", "Dizziness", "Nausea or vomiting", "Fatigue", "Memory problems", "Sensitivity to light or noise"],
    "Iron Deficiency Anemia": ["Fatigue", "Weakness", "Pale skin", "Shortness of breath", "Dizziness or lightheadedness", "Cold hands and feet"],
    "Gout": ["Sudden and severe pain, usually in the big toe", "Swelling", "Redness", "Warmth", "Limited range of motion"],
    "Gallstones": ["Sudden and intensifying pain in the upper right abdomen", "Back pain between the shoulder blades", "Nausea", "Vomiting", "Fever", "Yellowing of the skin and eyes (jaundice)"],
    "Glaucoma": ["Gradual loss of peripheral vision", "Tunnel vision", "Eye pain", "Nausea or vomiting", "Blurred vision"],
    "Panic Disorder": ["Sudden and repeated attacks of fear", "Feeling of being out of control during a panic attack", "Sweating", "Trembling", "Chest pain", "Heart palpitations"]
     
}
const jsonString = JSON.stringify(data);

// Write JSON string to a text file
fs.writeFileSync('data.txt', jsonString);
