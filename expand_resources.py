import re

def update_file(filepath, new_content):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Split the file exactly after <MedicalNote />
    parts = content.split('<MedicalNote />')
    if len(parts) < 2:
        return # Skip if pattern not found
    
    # Reconstruct the file with the new content
    final_content = parts[0] + "<MedicalNote />\n\n" + new_content + "\n</ContentLayout>\n"
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(final_content)


# --- 1. bmi-calculator.astro ---
bmi_content = """  <ArticleImage src="/assets/images/articles/bmi-scale.svg" alt="Comprehensive Body Mass Index (BMI) scale showing different weight categories." />
  
  <p>The <strong>BMI calculator</strong> is one of the most widely used screening tools in modern medicine and fitness. It provides a standardized metric to evaluate whether your current body weight falls within a historically established healthy range relative to your height.</p>

  <h2>Understanding the BMI Formula</h2>
  <p>The mathematical formula for calculating your Body Mass Index is incredibly straightforward, though converting imperial units (pounds and inches) can be tedious, which is why we highly recommend using our automatic <a href="/bmi-calculator/">BMI Calculator tool</a>.</p>
  <div class="card p-6 bg-brand/5 border-brand/20 my-6">
    <p class="font-mono text-lg font-bold text-center text-ink mb-0">BMI = Weight (kg) / Height (m)A</p>
  </div>
  <p>For example, if an adult weighs 80 kg and is 1.80 meters tall (about 5'11"):</p>
  <ul class="list-disc pl-6 mb-6">
    <li>Height squared: 1.80 A- 1.80 = 3.24</li>
    <li>BMI calculation: 80 / 3.24 = <strong>24.7</strong></li>
  </ul>
  <p>A BMI of 24.7 places this individual squarely within the "Normal weight" category.</p>

  <h2>Comprehensive BMI Categories & Health Implications</h2>
  <p>The World Health Organization (WHO) classifies adult BMI into the following categories. Falling significantly outside the "Normal" range often correlates with increased health risks.</p>
  
  <div class="overflow-x-auto my-6">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-ink text-white">
          <th class="p-4 rounded-tl-lg">BMI Range</th>
          <th class="p-4">Category</th>
          <th class="p-4 rounded-tr-lg">Associated Health Risks</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-hairline"><td class="p-4 font-semibold text-blue-600">&lt; 18.5</td><td class="p-4">Underweight</td><td class="p-4">Nutrient deficiencies, osteoporosis, weakened immunity</td></tr>
        <tr class="border-b border-hairline bg-green-50"><td class="p-4 font-semibold text-green-700">18.5 ?" 24.9</td><td class="p-4">Normal Weight</td><td class="p-4">Lowest statistical risk for chronic diseases</td></tr>
        <tr class="border-b border-hairline"><td class="p-4 font-semibold text-yellow-600">25.0 ?" 29.9</td><td class="p-4">Overweight</td><td class="p-4">Moderate increase in cardiovascular disease and diabetes risk</td></tr>
        <tr class="border-b border-hairline"><td class="p-4 font-semibold text-orange-600">30.0 ?" 34.9</td><td class="p-4">Obese (Class I)</td><td class="p-4">High risk of hypertension, joint issues, sleep apnea</td></tr>
        <tr class="border-b border-hairline"><td class="p-4 font-semibold text-red-600">35.0 ?" 39.9</td><td class="p-4">Obese (Class II)</td><td class="p-4">Very high risk of severe metabolic conditions</td></tr>
        <tr><td class="p-4 font-semibold text-red-800">&gt; 40.0</td><td class="p-4">Obese (Class III)</td><td class="p-4">Extreme health risks, potential surgical intervention indicated</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Critical Limitations of BMI</h2>
  <p>While a BMI calculator is an excellent population-level screening tool, it has severe limitations on an individual basis. It relies purely on the relationship between height and weight, meaning it is blind to your actual body composition.</p>
  <ul>
    <li><strong>Muscle Mass vs. Fat:</strong> Muscle is incredibly dense. A highly muscular athlete might weigh enough to have a BMI of 28 (technically "Overweight"), yet have dangerously low body fat.</li>
    <li><strong>Fat Distribution:</strong> Visceral fat (belly fat around organs) is far more dangerous than subcutaneous fat (fat just under the skin). BMI cannot tell where your fat is located.</li>
    <li><strong>Age and Gender:</strong> Women naturally carry higher body fat percentages than men for reproductive health, and older adults naturally lose muscle mass. The standard BMI chart does not adjust for these biological realities.</li>
  </ul>
  <p>If you suspect your BMI is misrepresenting your health due to high muscle mass, we strongly advise using our <a href="/body-fat-calculator/">body fat calculator</a> or <a href="/lean-body-mass-calculator/">lean body mass calculator</a> for a clinical-grade assessment.</p>

  <h2>How to Use BMI in Your Weight Loss Journey</h2>
  <p>Your BMI should serve as a starting point. If you fall into the overweight category and know you carry excess body fat, your next step is determining how to safely lower your weight. You should immediately calculate your baseline metabolism using a <a href="/bmr-calculator/">BMR calculator</a> and your total energy needs using a <a href="/tdee-calculator/">TDEE calculator</a>. From there, you can establish a healthy calorie deficit to gradually move your BMI into the normal range.</p>

  <h2>Frequently Asked Questions</h2>
  <h3>Is BMI used for children and teens?</h3>
  <p>Yes, but the formula works differently. Children's BMI is plotted on a percentile chart comparing them against other children of the exact same age and biological sex, as they are still growing.</p>
  
  <h3>Does a normal BMI guarantee good health?</h3>
  <p>No. You can have a "normal" BMI but still suffer from poor metabolic health, high cholesterol, or a condition known as "skinny fat" (normal weight but high body fat and extremely low muscle mass).</p>
"""
update_file("src/pages/resources/bmi-calculator.astro", bmi_content)


# --- 2. ideal-body-weight.astro ---
ibw_content = """  <ArticleImage src="/assets/images/articles/scale-illustration.svg" alt="Illustration representing the calculation of ideal body weight ranges." />
  
  <p>The concept of an <strong>Ideal Body Weight (IBW)</strong> was historically developed to help medical professionals dose medications safely. Today, calculating your IBW provides a highly practical target range for fitness and weight management goals. Our <a href="/ideal-weight-calculator/">ideal weight calculator</a> utilizes the four most scientifically recognized clinical formulas to give you a comprehensive target range.</p>

  <h2>The 4 Clinical Formulas for Ideal Body Weight</h2>
  <p>Because human bodies vary drastically in bone density, frame size, and muscle mass, no single formula is perfect for everyone. That is why our calculator simultaneously processes your data through the big four equations:</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="card p-6 border border-hairline shadow-sm">
      <h3 class="text-lg font-bold text-ink mb-2">1. The Devine Formula (1974)</h3>
      <p class="text-sm text-body">Originally created for calculating drug dosages. It remains the most universally cited medical standard for IBW today.</p>
    </div>
    <div class="card p-6 border border-hairline shadow-sm">
      <h3 class="text-lg font-bold text-ink mb-2">2. The Robinson Formula (1983)</h3>
      <p class="text-sm text-body">An evolution of the Devine formula intended to yield slightly different, often more modernly accurate results for taller individuals.</p>
    </div>
    <div class="card p-6 border border-hairline shadow-sm">
      <h3 class="text-lg font-bold text-ink mb-2">3. The Miller Formula (1983)</h3>
      <p class="text-sm text-body">A contemporary alternative to Robinson that often suggests a slightly lighter target weight, heavily utilizing height scaling.</p>
    </div>
    <div class="card p-6 border border-hairline shadow-sm">
      <h3 class="text-lg font-bold text-ink mb-2">4. The Hamwi Formula (1964)</h3>
      <p class="text-sm text-body">The oldest method on our list, widely used in clinical nutrition to establish a broad baseline range for patients.</p>
    </div>
  </div>

  <h2>How to Calculate Ideal Body Weight Manually</h2>
  <p>If you wish to calculate it yourself, here is the standard Devine equation for a male:</p>
  <ul>
    <li><strong>Men:</strong> 50.0 kg + 2.3 kg for every inch over 5 feet.</li>
    <li><strong>Women:</strong> 45.5 kg + 2.3 kg for every inch over 5 feet.</li>
  </ul>
  <p><em>Example:</em> A man who is 5'10" (10 inches over 5 feet) would calculate: 50.0 + (2.3 x 10) = <strong>73 kg (160 lbs)</strong>.</p>
  <p>Instead of doing manual math, just use our <a href="/ideal-weight-calculator/">ideal weight calculator</a>, which instantly cross-references all four formulas and converts between metric and imperial automatically.</p>

  <h2>Frame Size and the Healthy BMI Range</h2>
  <p>While specific formulas provide an exact number, modern nutritionists prefer to view IBW as a <em>range</em>. To determine this range, we calculate the span of weights that would place you within the "Normal" BMI category (18.5 to 24.9).</p>
  
  <table>
    <thead><tr><th scope="col">Height</th><th scope="col">Healthy BMI Weight Range (lbs)</th><th scope="col">Healthy BMI Weight Range (kg)</th></tr></thead>
    <tbody>
      <tr><td>5'2" (157 cm)</td><td>101 – 136 lbs</td><td>46 – 62 kg</td></tr>
      <tr><td>5'6" (167 cm)</td><td>115 – 154 lbs</td><td>52 – 70 kg</td></tr>
      <tr><td>5'10" (177 cm)</td><td>129 – 174 lbs</td><td>58 – 79 kg</td></tr>
      <tr><td>6'2" (188 cm)</td><td>144 – 194 lbs</td><td>65 – 88 kg</td></tr>
    </tbody>
  </table>
  <p class="text-sm text-mute mt-2">Note: This table uses the standard <a href="/bmi-calculator/">BMI calculator</a> formula thresholds.</p>

  <h2>Limitations and Edge Cases</h2>
  <p>It is crucial to understand that these formulas do not account for muscle mass or body fat percentage. A professional bodybuilder might weigh 220 lbs at 5'10" and be categorized as severely overweight by an IBW formula, despite having only 8% body fat.</p>
  <p>If you are an athlete, you should abandon weight scales and instead focus entirely on body composition. Use our <a href="/body-fat-calculator/">body fat calculator</a> or <a href="/lean-body-mass-calculator/">lean body mass calculator</a> to track your progress.</p>

  <h2>Next Steps: Achieving Your Ideal Weight</h2>
  <p>Once you identify your target weight, you need a structured plan to reach it. Start by determining your daily energy burn using our <a href="/tdee-calculator/">TDEE calculator</a>. If your goal is to lose weight to reach your IBW, use our <a href="/guides/calorie-deficit-guide/">calorie deficit guide</a> to safely reduce your intake.</p>
"""
update_file("src/pages/resources/ideal-body-weight.astro", ibw_content)


# --- 3. tdee-calculator.astro ---
tdee_content = """  <ArticleImage src="/assets/images/articles/metabolism-chart.svg" alt="Infographic detailing the components of Total Daily Energy Expenditure (TDEE)." />
  
  <p>A <strong>Total Daily Energy Expenditure (TDEE) calculator</strong> is unequivocally the most important tool in fitness, nutrition, and weight management. TDEE represents the exact number of calories your body burns in a 24-hour period. If you eat precisely this number of calories, your weight will never change. Understanding this number is the gateway to controlling your body composition.</p>

  <h2>The 4 Components of Your TDEE</h2>
  <p>Your total daily burn is not just about how much you exercise. In fact, exercise makes up a surprisingly small portion of your daily energy use. Your TDEE is a massive mathematical equation consisting of four distinct pillars:</p>

  <ul>
    <li><strong>Basal Metabolic Rate (BMR) [~70%]:</strong> The massive amount of energy your body requires simply to stay alive while in a coma. This includes brain function, breathing, and pumping blood. Calculate this separately with our <a href="/bmr-calculator/">BMR calculator</a>.</li>
    <li><strong>Non-Exercise Activity Thermogenesis (NEAT) [~15%]:</strong> The calories you burn through subconscious movement. Fidgeting, blinking, walking to your car, typing, and doing dishes. People with highly active jobs (like construction workers) have massive NEAT.</li>
    <li><strong>Thermic Effect of Food (TEF) [~10%]:</strong> Yes, digesting food burns calories! Protein is the hardest macronutrient for the body to digest, meaning high-protein diets permanently boost your TEF. Use our <a href="/protein-calculator/">protein calculator</a> to optimize this.</li>
    <li><strong>Exercise Activity Thermogenesis (EAT) [~5%]:</strong> The calories burned during intentional exercise, like running on a treadmill or lifting weights. You can estimate these specific bursts with our <a href="/calories-burned-calculator/">calories burned calculator</a>.</li>
  </ul>

  <h2>How the TDEE Calculator Works</h2>
  <p>Our <a href="/tdee-calculator/">TDEE calculator</a> uses the gold-standard <strong>Mifflin-St Jeor equation</strong>. First, it determines your BMR based on your biological sex, age, height, and weight. Then, it multiplies your BMR by an "Activity Multiplier" (ranging from 1.2 to 1.9) based on your lifestyle.</p>

  <div class="overflow-x-auto my-6">
    <table class="w-full text-left border-collapse border border-hairline shadow-sm rounded-lg overflow-hidden">
      <thead>
        <tr class="bg-gray-100 text-ink">
          <th class="p-3 border-b border-hairline">Activity Level</th>
          <th class="p-3 border-b border-hairline">Multiplier</th>
          <th class="p-3 border-b border-hairline">Description</th>
        </tr>
      </thead>
      <tbody class="text-sm">
        <tr><td class="p-3 border-b border-hairline font-semibold">Sedentary</td><td class="p-3 border-b border-hairline">x 1.2</td><td class="p-3 border-b border-hairline">Office job, very little to no exercise.</td></tr>
        <tr class="bg-brand/5"><td class="p-3 border-b border-hairline font-semibold">Lightly Active</td><td class="p-3 border-b border-hairline">x 1.375</td><td class="p-3 border-b border-hairline">Light exercise or sports 1-3 days a week.</td></tr>
        <tr><td class="p-3 border-b border-hairline font-semibold">Moderately Active</td><td class="p-3 border-b border-hairline">x 1.55</td><td class="p-3 border-b border-hairline">Moderate exercise or sports 3-5 days a week.</td></tr>
        <tr class="bg-brand/5"><td class="p-3 border-b border-hairline font-semibold">Very Active</td><td class="p-3 border-b border-hairline">x 1.725</td><td class="p-3 border-b border-hairline">Hard exercise 6-7 days a week.</td></tr>
        <tr><td class="p-3 font-semibold">Extra Active</td><td class="p-3">x 1.9</td><td class="p-3">Intense daily training or physical labor job.</td></tr>
      </tbody>
    </table>
  </div>

  <h2>How to Use TDEE for Weight Loss or Muscle Gain</h2>
  <p>Once you calculate your TDEE, the math of body transformation becomes incredibly simple.</p>
  <ul>
    <li><strong>For Weight Loss:</strong> You must eat fewer calories than your TDEE. We recommend subtracting 300 to 500 calories per day from your TDEE to create a safe, sustainable <a href="/guides/calorie-deficit-guide/">calorie deficit</a>. This will result in about 1 lb of fat loss per week.</li>
    <li><strong>For Muscle Gain (Bulking):</strong> You must eat more calories than your TDEE to fuel new muscle growth. We recommend adding 200 to 300 calories to create a <a href="/resources/calorie-surplus-guide/">calorie surplus</a>, while utilizing a <a href="/macro-calculator/">macro calculator</a> to ensure the surplus consists of lean proteins and carbs.</li>
    <li><strong>For Maintenance:</strong> Eat exactly your TDEE. This is also known as your <a href="/maintenance-calories-calculator/">maintenance calories</a>.</li>
  </ul>

  <h2>Edge Cases: Why Might Your TDEE Be Wrong?</h2>
  <p>Calculators provide clinical estimates, but they aren't flawless. If you eat your estimated TDEE but still gain weight, you likely <strong>overestimated your activity level</strong>. Most people classify themselves as "Moderately Active" when they are actually "Lightly Active." When in doubt, select the lower activity tier.</p>
  <p>Additionally, if you have dieted aggressively for months, you may have experienced metabolic adaptation, meaning your actual TDEE is temporarily lower than the calculated estimate. In this case, you should slowly reverse diet to restore your metabolism.</p>
"""
update_file("src/pages/resources/tdee-calculator.astro", tdee_content)


# --- 4. weight-loss-calculator.astro ---
wlc_content = """  <ArticleImage src="/assets/images/articles/weight-loss-chart.svg" alt="Graph depicting a structured weight loss timeline based on calorie deficits." />
  
  <p>A <strong>weight loss calculator</strong> is the ultimate planning tool for your fitness journey. Instead of simply telling you how many calories to eat, it projects exactly <em>when</em> you will reach your goal weight based on the aggressiveness of your calorie deficit. By visualizing the timeline, it removes frustration and replaces it with mathematical predictability.</p>

  <h2>The Golden Rule of Weight Loss: The Calorie Deficit</h2>
  <p>Weight loss is governed by the laws of thermodynamics. To lose weight, you must consume less energy (calories) than your body burns. This state is known as a <a href="/guides/calorie-deficit-guide/">calorie deficit</a>. No pill, powder, or fad diet can bypass this biological requirement.</p>
  <p>One pound of human body fat stores approximately <strong>3,500 calories</strong> of energy. Therefore:</p>
  <ul>
    <li>A daily deficit of 500 calories = 1 pound of fat loss per week (500 x 7 = 3,500).</li>
    <li>A daily deficit of 1,000 calories = 2 pounds of fat loss per week (1,000 x 7 = 7,000).</li>
  </ul>
  <p>Our <a href="/weight-loss-calculator/">weight loss calculator</a> does all this math for you. First, it determines your maintenance energy using our built-in <a href="/tdee-calculator/">TDEE calculator</a>. Then, it subtracts the appropriate number of calories to map out your timeline.</p>

  <h2>Choosing Your Weight Loss Intensity</h2>
  <p>When using the calculator, you will see different plans. Choosing the right one is critical for long-term success without damaging your metabolism or losing muscle mass.</p>

  <table class="w-full text-left my-6">
    <thead>
      <tr class="bg-ink text-white">
        <th class="p-3">Intensity</th>
        <th class="p-3">Weekly Loss</th>
        <th class="p-3">Daily Deficit</th>
        <th class="p-3">Pros & Cons</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr class="border-b border-hairline"><td class="p-3 font-bold text-green-600">Mild</td><td class="p-3">0.5 lbs / week</td><td class="p-3">-250 calories</td><td class="p-3">Extremely easy to sustain, no hunger. Very slow results.</td></tr>
      <tr class="border-b border-hairline bg-gray-50"><td class="p-3 font-bold text-blue-600">Normal</td><td class="p-3">1.0 lbs / week</td><td class="p-3">-500 calories</td><td class="p-3">The sweet spot. Manageable hunger, steady visible progress.</td></tr>
      <tr class="border-b border-hairline"><td class="p-3 font-bold text-orange-600">Aggressive</td><td class="p-3">1.5 lbs / week</td><td class="p-3">-750 calories</td><td class="p-3">Fast results, but requires high discipline and strict macro tracking.</td></tr>
      <tr><td class="p-3 font-bold text-red-600">Extreme</td><td class="p-3">2.0+ lbs / week</td><td class="p-3">-1,000+ calories</td><td class="p-3">Risk of muscle loss and metabolic crash. Not recommended long-term.</td></tr>
    </tbody>
  </table>

  <h2>How to Protect Muscle While Losing Weight</h2>
  <p>When you are in a severe calorie deficit, your body will look for energy anywhere it can find it. If you aren't careful, it will break down your muscle tissue for energy alongside your fat stores. This results in the dreaded "skinny fat" look and lowers your <a href="/bmr-calculator/">BMR</a>.</p>
  <p>To prevent this, you must do two things:</p>
  <ol>
    <li><strong>Eat a high-protein diet.</strong> Use our <a href="/protein-calculator/">protein calculator</a> to ensure you are eating at least 1.6 to 2.2 grams of protein per kilogram of body weight. Protein protects muscle.</li>
    <li><strong>Lift weights.</strong> Resistance training signals to your body that the muscle is necessary for survival, forcing it to burn fat instead.</li>
  </ol>
  <p>Use our <a href="/macro-calculator/">macro calculator</a> to get a complete breakdown of exactly how many carbs, fats, and proteins you need to hit your calculator's calorie target.</p>

  <h2>Plateaus: Why Did My Weight Loss Stop?</h2>
  <p>As you lose weight, your body requires less energy to move around. A 250 lb person burns significantly more calories walking up a flight of stairs than a 200 lb person. This means your TDEE shrinks as you lose weight.</p>
  <p>If you hit a plateau, your original calorie deficit has likely become your new <a href="/maintenance-calories-calculator/">maintenance calories</a>. To resume losing weight, you must return to the <a href="/weight-loss-calculator/">weight loss calculator</a>, input your <em>new</em> lighter body weight, and generate a new, lower daily calorie target.</p>
"""
update_file("src/pages/resources/weight-loss-calculator.astro", wlc_content)


# --- 5. calories-burned-in-a-day.astro ---
cbiad_content = """  <ArticleImage src="/assets/images/articles/daily-burn.svg" alt="Illustration representing total daily calories burned through exercise, resting metabolism, and digestion." />
  
  <p>Figuring out <strong>how many calories you burn in a day</strong> is the master key to human metabolism. Every action your body takes—from running a marathon to blinking your eyes while watching TV—requires energy. Understanding this total daily burn empowers you to take complete control over your body weight, whether you want to lose fat, build muscle, or simply maintain your physique.</p>

  <h2>The Four Pillars of Daily Calorie Burn</h2>
  <p>Your total daily calorie burn is scientifically referred to as your <a href="/tdee-calculator/">TDEE (Total Daily Energy Expenditure)</a>. It is not just about how much time you spend on the treadmill; it is a complex engine comprised of four distinct pillars:</p>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="card p-6 border-l-4 border-l-brand shadow-sm">
      <h3 class="text-xl font-bold text-ink mb-2">1. Basal Metabolic Rate (BMR)</h3>
      <p class="text-sm text-body">This is the massive chunk of calories (60-75% of your day) your body burns just keeping you alive. Heartbeats, brain function, and lung capacity. Use our <a href="/bmr-calculator/">BMR calculator</a> to find yours.</p>
    </div>
    <div class="card p-6 border-l-4 border-l-green-500 shadow-sm">
      <h3 class="text-xl font-bold text-ink mb-2">2. NEAT</h3>
      <p class="text-sm text-body">Non-Exercise Activity Thermogenesis accounts for 15-20%. This is subconscious movement: fidgeting, walking down the hall, doing chores, and maintaining posture.</p>
    </div>
    <div class="card p-6 border-l-4 border-l-yellow-500 shadow-sm">
      <h3 class="text-xl font-bold text-ink mb-2">3. Thermic Effect of Food (TEF)</h3>
      <p class="text-sm text-body">Your body burns roughly 10% of its daily calories simply digesting the food you eat. Protein takes the most energy to digest, which is why a high <a href="/protein-calculator/">protein target</a> boosts metabolism.</p>
    </div>
    <div class="card p-6 border-l-4 border-l-red-500 shadow-sm">
      <h3 class="text-xl font-bold text-ink mb-2">4. Exercise (EAT)</h3>
      <p class="text-sm text-body">Exercise Activity Thermogenesis is intentional exercise. Surprisingly, for most people, this makes up only 5-10% of their total daily calorie burn.</p>
    </div>
  </div>

  <h2>How to Calculate Your Daily Burn</h2>
  <p>You have two main options to calculate your exact daily burn:</p>
  <ol>
    <li><strong>The Clinical Method (Highly Accurate):</strong> Input your biological stats into our <a href="/tdee-calculator/">TDEE calculator</a>. It uses the Mifflin-St Jeor formula, widely considered by dietitians to be the most accurate algorithm for modern populations.</li>
    <li><strong>The Wearable Tracker Method:</strong> Smartwatches (Apple Watch, Fitbit, Garmin) estimate your daily burn by tracking your heart rate 24/7. While they are fantastic for tracking NEAT and step counts, studies show they routinely <em>overestimate</em> calories burned during intense exercise by 20% to 40%.</li>
  </ol>
  <p>For the absolute best results, use the calculator formula as your baseline, and use the smartwatch purely to ensure you hit your daily step goal.</p>

  <h2>How Activity Levels Drastically Change Your Burn</h2>
  <p>To illustrate how much your daily habits impact your metabolism, let's look at a <strong>170 lb (77 kg), 35-year-old male who is 5'10"</strong>. His resting BMR is roughly 1,750 calories. Look at how his total daily burn changes based entirely on his job and exercise habits:</p>
  
  <table class="w-full text-left my-6 border-collapse">
    <thead>
      <tr class="bg-ink text-white">
        <th class="p-3">Lifestyle / Activity Level</th>
        <th class="p-3">Total Calories Burned in a Day</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr class="border-b border-hairline"><td class="p-3"><strong>Sedentary:</strong> Office job, plays video games, no exercise.</td><td class="p-3 font-bold text-red-600">~2,100 calories</td></tr>
      <tr class="border-b border-hairline bg-gray-50"><td class="p-3"><strong>Lightly Active:</strong> Office job, but walks 10k steps and jogs twice a week.</td><td class="p-3 font-bold text-orange-500">~2,400 calories</td></tr>
      <tr class="border-b border-hairline"><td class="p-3"><strong>Moderately Active:</strong> Waiter (on feet all day) who lifts weights 4x a week.</td><td class="p-3 font-bold text-green-600">~2,700 calories</td></tr>
      <tr><td class="p-3"><strong>Extremely Active:</strong> Construction worker who also runs marathons.</td><td class="p-3 font-bold text-blue-600">~3,300+ calories</td></tr>
    </tbody>
  </table>

  <h2>How to Manipulate Your Daily Burn for Weight Loss</h2>
  <p>If your goal is fat loss, knowing how many calories you burn in a day is just step one. Step two is forcing your body into a <a href="/guides/calorie-deficit-guide/">calorie deficit</a>. You can achieve this by:</p>
  <ul>
    <li><strong>Eating Less:</strong> Using a <a href="/weight-loss-calculator/">weight loss calculator</a> to set a strict daily intake target below your TDEE.</li>
    <li><strong>Moving More:</strong> Intentionally increasing your NEAT (taking the stairs, walking during lunch) or adding structured workouts tracked via a <a href="/calories-burned-calculator/">calories burned calculator</a>.</li>
    <li><strong>Building Muscle:</strong> Muscle tissue burns more calories at rest than fat tissue. A solid strength training regimen permanently increases your BMR, making it much easier to keep weight off long term.</li>
  </ul>
"""
update_file("src/pages/resources/calories-burned-in-a-day.astro", cbiad_content)

