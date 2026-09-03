import re
import os

# --- 1. walking-calorie-calculator.astro ---
with open("src/pages/walking-calorie-calculator.astro", "r", encoding="utf-8") as f:
    content = f.read()

new_content = """<Fragment slot="content">
    <ArticleImage src="/assets/images/articles/walking-route.svg" alt="Illustration of a walking route showing step count and pace for calorie burn." />

    <h2>How to Use the Walking Calorie Calculator</h2>
    <p>Using our <strong>walking calorie calculator</strong> is the easiest way to track your daily energy expenditure from steps. Simply select your walking pace from the dropdown (from a slow stroll to a brisk power walk), input your current body weight, and enter how many minutes you walked. The calculator uses scientifically validated MET (Metabolic Equivalent of Task) formulas to instantly estimate your total calories burned.</p>

    <h2>The Science of Walking and Weight Loss</h2>
    <p>Walking is arguably the most underrated form of exercise for fat loss. While it doesn't burn calories as rapidly as high-intensity interval training (HIIT) or sprinting, it relies almost entirely on the aerobic energy system. This means your body preferentially oxidizes (burns) stored body fat for energy rather than depleting muscle glycogen.</p>
    <p>Because walking is low-impact, it doesn't significantly spike cortisol (your stress hormone) or trigger extreme hunger, making it an incredibly sustainable way to increase your Total Daily Energy Expenditure (<a href="/resources/what-is-tdee/">TDEE</a>). Whether you are recovering from an injury, managing joint pain, or simply looking for an easy way to move more, daily walking is foundational to long-term health.</p>

    <h2>Walking Calorie Burn Data Chart</h2>
    <p>Curious how weight and speed impact your calorie burn? The table below illustrates the estimated calories burned during a <strong>60-minute walk</strong> across different body weights and speeds:</p>
    <table>
      <thead><tr><th scope="col">Walking Pace</th><th scope="col">Burn (130 lbs / 59 kg)</th><th scope="col">Burn (160 lbs / 72 kg)</th><th scope="col">Burn (200 lbs / 90 kg)</th></tr></thead>
      <tbody>
        <tr><td>Slow Stroll (2.0 mph)</td><td>~148 calories</td><td>~182 calories</td><td>~227 calories</td></tr>
        <tr><td>Moderate (3.0 mph)</td><td>~195 calories</td><td>~240 calories</td><td>~300 calories</td></tr>
        <tr><td>Brisk Walk (3.5 mph)</td><td>~254 calories</td><td>~312 calories</td><td>~390 calories</td></tr>
        <tr><td>Power Walk (4.0 mph)</td><td>~295 calories</td><td>~363 calories</td><td>~454 calories</td></tr>
      </tbody>
    </table>

    <h2>5 Ways to Burn More Calories While Walking</h2>
    <p>If you want to maximize the caloric output of your daily steps, try implementing these advanced strategies:</p>
    <ul>
      <li><strong>Increase Your Pace:</strong> Transitioning from a casual 2.5 mph stroll to a brisk 3.5 mph walk significantly increases your heart rate and calorie expenditure.</li>
      <li><strong>Find Hills and Inclines:</strong> Walking uphill forces your glutes, hamstrings, and calves to work harder against gravity. A 5% incline can increase your calorie burn by up to 30-50%. If you use a treadmill, try our <a href="/treadmill-calorie-calculator/">treadmill calorie calculator</a> to see the exact impact of incline.</li>
      <li><strong>Wear a Weighted Vest (Rucking):</strong> Carrying extra weight mimics a heavier body mass, forcing your muscles and cardiovascular system to adapt. Rucking is a phenomenal way to build strength while walking.</li>
      <li><strong>Incorporate Intervals:</strong> Alternate between 2 minutes of normal walking and 1 minute of very fast power walking to spike your heart rate.</li>
      <li><strong>Walk Longer:</strong> The simplest variable to change is duration. Adding just 15 extra minutes to your daily walk can burn an additional 70-120 calories depending on your weight.</li>
    </ul>

    <h2>Walking vs. Running for Fat Loss</h2>
    <p>A common question is whether walking or running is better for weight loss. The truth is, running is simply a more time-efficient way to burn calories. You will burn roughly the same amount of calories running 3 miles as you would walking 3 miles, but running will get it done in half the time.</p>
    <p>However, running places massive impact forces on your joints (often 3-4 times your body weight per step). If running makes you overly hungry or causes knee pain, a high volume of walking combined with a <a href="/resources/calorie-deficit-guide/">calorie deficit</a> is often the superior choice for sustainable fat loss.</p>

    <h2>Common Myths About Walking</h2>
    <ul>
      <li><strong>Myth: Walking isn't "real" exercise.</strong> Fact: Walking 10,000 steps a day burns between 300 and 500 calories, which is equivalent to an intense 45-minute gym session.</li>
      <li><strong>Myth: You need 10,000 steps a day to be healthy.</strong> Fact: The 10,000 step rule was originally a marketing gimmick for a Japanese pedometer. Studies show health benefits max out around 7,500 to 8,000 steps per day for longevity.</li>
      <li><strong>Myth: You can out-walk a bad diet.</strong> Fact: Walking burns calories, but it takes 1 hour of walking to burn off a single donut. You must pair your movement with a proper target from our <a href="/">calorie calculator</a>.</li>
    </ul>

    <h2>Related Health Guides</h2>
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="card p-4">
        <h3 class="text-lg font-semibold text-ink"><a href="/guides/maintenance-calories/">Maintenance Calories Guide</a></h3>
        <p class="mt-1 text-sm text-body">Learn how to calculate your maintenance calories to ensure your walking routine supports your weight goals without causing unintended weight gain.</p>
      </div>
      <div class="card p-4">
        <h3 class="text-lg font-semibold text-ink"><a href="/resources/calories-burned-in-a-day/">How Many Calories Do You Burn in a Day?</a></h3>
        <p class="mt-1 text-sm text-body">Discover how your daily steps factor into your NEAT (Non-Exercise Activity Thermogenesis) and overall daily burn.</p>
      </div>
    </div>
    
    <Sources sources={[
      { label: "Harvard Medical School — 5 surprising benefits of walking", href: "https://www.health.harvard.edu/staying-healthy/5-surprising-benefits-of-walking" },
      { label: "Mayo Clinic — Walking: Trim your waistline, improve your health", href: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/walking/art-20046261" },
    ]} />
  </Fragment>"""
content = re.sub(r'<Fragment slot="content">.*?</Fragment>', new_content, content, flags=re.DOTALL)
with open("src/pages/walking-calorie-calculator.astro", "w", encoding="utf-8") as f: f.write(content)


# --- 2. running-calorie-calculator.astro ---
with open("src/pages/running-calorie-calculator.astro", "r", encoding="utf-8") as f:
    content = f.read()

new_content = """<Fragment slot="content">
    <ArticleImage src="/assets/images/articles/running-path.svg" alt="Illustration of a runner on a path tracking their running calorie burn." />

    <h2>How to Use the Running Calorie Calculator</h2>
    <p>Using our <strong>running calorie calculator</strong> takes the guesswork out of your cardio routine. Simply choose your running pace from the drop-down menu—whether you are doing a light 5 mph jog or an intense 10 mph sprint—enter your body weight, and input your run duration. The calculator uses standardized MET (Metabolic Equivalent of Task) values to provide a highly accurate estimate of the calories you just burned on the pavement.</p>

    <h2>The Science of Running and Energy Expenditure</h2>
    <p>Running is one of the most efficient calorie-burning exercises in existence. Because it engages massive muscle groups (glutes, quads, hamstrings, and calves) and requires your body to become briefly airborne with every single stride, the energy demand is immense.</p>
    <p>When you run, your cardiovascular system pumps oxygen-rich blood to your working muscles. The faster you run, the more oxygen your body demands, and the higher your caloric burn rate per minute. This intense energy demand makes running an incredibly powerful tool for increasing your <a href="/resources/tdee-calculator/">Total Daily Energy Expenditure (TDEE)</a> and accelerating weight loss.</p>

    <h2>Running Calorie Burn Data Chart</h2>
    <p>To help you visualize how your pace and body weight impact your results, review the chart below. It displays the estimated calories burned during a <strong>30-minute run</strong> at various speeds:</p>
    <table>
      <thead><tr><th scope="col">Running Pace</th><th scope="col">Burn (140 lbs / 63 kg)</th><th scope="col">Burn (170 lbs / 77 kg)</th><th scope="col">Burn (210 lbs / 95 kg)</th></tr></thead>
      <tbody>
        <tr><td>Light Jog (5.0 mph / 12 min mile)</td><td>~265 calories</td><td>~322 calories</td><td>~398 calories</td></tr>
        <tr><td>Steady Run (6.0 mph / 10 min mile)</td><td>~312 calories</td><td>~379 calories</td><td>~468 calories</td></tr>
        <tr><td>Fast Run (7.5 mph / 8 min mile)</td><td>~413 calories</td><td>~501 calories</td><td>~619 calories</td></tr>
        <tr><td>Sprinting (10.0 mph / 6 min mile)</td><td>~508 calories</td><td>~617 calories</td><td>~762 calories</td></tr>
      </tbody>
    </table>

    <h2>The "Afterburn" Effect (EPOC)</h2>
    <p>One of the hidden benefits of running—especially high-intensity interval running or sprinting—is EPOC, or Excess Post-Exercise Oxygen Consumption. Often called the "afterburn effect," this phenomenon means your body continues to burn extra calories for hours after you finish your run as it works to repair muscle tissue, replenish oxygen stores, and cool down your core temperature.</p>
    <p>While steady-state jogging provides a small afterburn, pushing your pace using HIIT (High-Intensity Interval Training) on a track or <a href="/treadmill-calorie-calculator/">treadmill</a> can maximize this metabolic boost.</p>

    <h2>Running vs. Walking for Weight Loss</h2>
    <p>Per minute, running burns roughly double the calories of walking. This makes it incredibly time-efficient for busy individuals trying to achieve a <a href="/resources/calorie-deficit-guide/">calorie deficit</a>. However, running is high-impact. If you are significantly overweight, running can put excessive strain on your knees, hips, and ankles. In such cases, long brisk walks calculated via our <a href="/walking-calorie-calculator/">walking calorie calculator</a> or low-impact cycling (<a href="/cycling-calories-calculator/">cycling calculator</a>) are safer alternatives until a baseline level of fitness is established.</p>

    <h2>Common Myths About Running</h2>
    <ul>
      <li><strong>Myth: Running ruins your knees.</strong> Fact: Multiple long-term studies show that recreational runners actually have <em>lower</em> rates of osteoarthritis than sedentary individuals. Running strengthens the muscles around the joints, provided you increase mileage slowly and wear proper footwear.</li>
      <li><strong>Myth: You must run fast to lose weight.</strong> Fact: Slow, steady Zone 2 cardio (where you can hold a conversation) is actually the optimal heart rate zone for oxidizing body fat. Use our <a href="/target-heart-rate-calculator/">target heart rate calculator</a> to find your Zone 2.</li>
      <li><strong>Myth: Running allows you to eat whatever you want.</strong> Fact: While running burns significant calories, a bad diet will always outpace your training. 30 minutes of hard running burns ~350 calories, which is the equivalent of just two slices of pizza. You still need to track your intake with a <a href="/macro-calculator/">macro calculator</a>.</li>
    </ul>

    <h2>Related Fitness Guides</h2>
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="card p-4">
        <h3 class="text-lg font-semibold text-ink"><a href="/resources/protein-calculator/">Protein Calculator</a></h3>
        <p class="mt-1 text-sm text-body">Runners need more protein than sedentary people to repair muscle damage. Find your optimal daily protein target to enhance recovery.</p>
      </div>
      <div class="card p-4">
        <h3 class="text-lg font-semibold text-ink"><a href="/resources/water-intake-calculator/">Hydration Calculator</a></h3>
        <p class="mt-1 text-sm text-body">Running leads to massive fluid loss through sweat. Calculate exactly how much water you need to drink daily to maintain peak performance.</p>
      </div>
    </div>
    
    <Sources sources={[
      { label: "American College of Sports Medicine (ACSM) — Energy Expenditure in Exercise", href: "https://www.acsm.org/" },
      { label: "Journal of Orthopaedic & Sports Physical Therapy — Running and Knee Osteoarthritis", href: "https://www.jospt.org/doi/10.2519/jospt.2017.7137" },
    ]} />
  </Fragment>"""
content = re.sub(r'<Fragment slot="content">.*?</Fragment>', new_content, content, flags=re.DOTALL)
with open("src/pages/running-calorie-calculator.astro", "w", encoding="utf-8") as f: f.write(content)


# --- 3. treadmill-calorie-calculator.astro ---
with open("src/pages/treadmill-calorie-calculator.astro", "r", encoding="utf-8") as f:
    content = f.read()

new_content = """<Fragment slot="content">
    <ArticleImage src="/assets/images/articles/treadmill.svg" alt="Illustration of a treadmill dashboard showing incline, speed, and calories burned." />

    <h2>How to Use the Treadmill Calorie Calculator</h2>
    <p>Using our <strong>treadmill calorie calculator</strong> is the most accurate way to verify the calorie readout on your gym's machine. Simply input your body weight, the duration of your workout, and select the specific speed and incline setting you used. Because treadmill consoles often overestimate calories burned by failing to account for your unique body weight, our calculator uses precision MET algorithms to give you the exact numbers.</p>

    <h2>The Hidden Power of Treadmill Incline</h2>
    <p>While increasing your speed on a treadmill burns more calories, increasing the <em>incline</em> is often the secret weapon for massive fat loss. Walking uphill forces your body to work against gravity, drastically increasing cardiovascular demand and engaging the posterior chain (your glutes, hamstrings, and calves) far more than flat walking.</p>
    <p>The beauty of incline walking is that it allows you to achieve a remarkably high heart rate (similar to running) without subjecting your knees and joints to the high-impact pounding of jogging. This makes it the perfect cardio choice for heavier individuals, people recovering from injuries, or bodybuilders looking to burn fat without sacrificing muscle.</p>

    <h2>Treadmill Incline Calorie Burn Chart</h2>
    <p>Curious about how much of a difference incline makes? The chart below illustrates the estimated calories burned by a <strong>160 lb (72 kg) person walking at a brisk 3.0 mph for 45 minutes</strong> across various inclines:</p>
    <table>
      <thead><tr><th scope="col">Incline Level</th><th scope="col">Intensity Level</th><th scope="col">Estimated Calories Burned (45 mins)</th></tr></thead>
      <tbody>
        <tr><td>0% Incline (Flat)</td><td>Light / Active Recovery</td><td>~175 calories</td></tr>
        <tr><td>5% Incline</td><td>Moderate / Fat Burning</td><td>~250 calories</td></tr>
        <tr><td>10% Incline</td><td>Vigorous / High Demand</td><td>~370 calories</td></tr>
        <tr><td>15% Incline (Max)</td><td>Extreme / Strength Building</td><td>~480 calories</td></tr>
      </tbody>
    </table>

    <h2>The Viral 12-3-30 Workout Explained</h2>
    <p>You may have seen the viral "12-3-30" treadmill workout on social media. It involves setting the treadmill to a <strong>12% incline</strong>, walking at <strong>3.0 mph</strong>, for exactly <strong>30 minutes</strong>. But does it work?</p>
    <p>Yes. The 12-3-30 routine is incredibly effective because it leverages the science of steep inclines to maximize caloric output in a short timeframe while remaining low impact. For an average 150 lb person, this 30-minute workout burns between 250 and 300 calories. By doing this 4-5 times a week, you can easily create the weekly <a href="/resources/calorie-deficit-guide/">calorie deficit</a> necessary to lose nearly half a pound of fat.</p>

    <h2>Treadmill vs. Outdoor Running</h2>
    <p>Is running on a treadmill easier than running outside? Physiologically, yes. When you run outdoors, you have to propel your body forward through wind resistance and overcome uneven terrain. On a treadmill, the belt assists in pulling your legs backward, slightly reducing the energy required by your hamstrings.</p>
    <p><strong>Pro Tip:</strong> To make your treadmill run perfectly mimic the effort of running outdoors on flat ground, set the incline to <strong>1.0% or 1.5%</strong>. This beautifully compensates for the lack of wind resistance. (Note: if you plan to run outdoors primarily, use our <a href="/running-calorie-calculator/">running calorie calculator</a>).</p>

    <h2>Common Treadmill Mistakes</h2>
    <ul>
      <li><strong>Mistake: Holding onto the handrails.</strong> Fact: Holding the rails takes the load off your legs and core, reducing your calorie burn by up to 20-30% and ruining your posture. Lower the incline or speed if you can't walk hands-free.</li>
      <li><strong>Mistake: Trusting the machine's calorie counter.</strong> Fact: Gym treadmills notoriously overestimate calorie burn to make you feel good. Always use an independent <a href="/treadmill-calorie-calculator/">treadmill calorie calculator</a> that requires your body weight for true accuracy.</li>
      <li><strong>Mistake: Staring down at your phone.</strong> Fact: Looking down rounds your shoulders and restricts your breathing. Keep your head up to maximize oxygen intake and keep your chest open.</li>
    </ul>

    <h2>Related Cardio Calculators</h2>
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="card p-4">
        <h3 class="text-lg font-semibold text-ink"><a href="/walking-calorie-calculator/">Walking Calorie Calculator</a></h3>
        <p class="mt-1 text-sm text-body">Prefer to get your steps outdoors in nature? Calculate your flat-ground walking calorie expenditure here.</p>
      </div>
      <div class="card p-4">
        <h3 class="text-lg font-semibold text-ink"><a href="/target-heart-rate-calculator/">Target Heart Rate Calculator</a></h3>
        <p class="mt-1 text-sm text-body">Maximize your treadmill workouts by ensuring your heart rate stays in the optimal fat-burning zones.</p>
      </div>
    </div>
    
    <Sources sources={[
      { label: "Journal of Sports Sciences — A 1% treadmill grade most accurately reflects the energetic cost of outdoor running", href: "https://pubmed.ncbi.nlm.nih.gov/8887211/" },
      { label: "American Council on Exercise (ACE) — The Truth About Treadmills", href: "https://www.acefitness.org/" },
    ]} />
  </Fragment>"""
content = re.sub(r'<Fragment slot="content">.*?</Fragment>', new_content, content, flags=re.DOTALL)
with open("src/pages/treadmill-calorie-calculator.astro", "w", encoding="utf-8") as f: f.write(content)


# --- 4. calories-burned-calculator.astro ---
with open("src/pages/calories-burned-calculator.astro", "r", encoding="utf-8") as f:
    content = f.read()

new_content = """<Fragment slot="content">
    <ArticleImage src="/assets/images/articles/calories-burned.svg" alt="Illustration of various sports and exercises depicting total calories burned." />

    <h2>How to Use the Calories Burned Calculator</h2>
    <p>Our comprehensive <strong>calories burned calculator</strong> allows you to track the exact energy expenditure for hundreds of different sports, activities, and exercises. To use the tool, simply select your desired activity category (like Gym, Sports, or Daily Life), pick the specific exercise, input your body weight, and enter the duration in minutes. The calculator will instantly reveal your estimated calorie burn.</p>

    <h2>The Science of METs (Metabolic Equivalents)</h2>
    <p>Have you ever wondered how calculators know how many calories you burn while vacuuming versus playing basketball? The answer is <strong>METs</strong> (Metabolic Equivalent of Task).</p>
    <p>One MET is defined as the amount of oxygen your body consumes while sitting completely at rest. Therefore, an activity with a MET value of 4 (like brisk walking) requires four times as much energy as sitting on the couch. An activity with a MET value of 10 (like jumping rope) requires ten times as much energy.</p>
    <p>Our calculator takes the scientifically established MET value for your chosen activity, multiplies it by your body weight in kilograms, and adjusts for the exact number of minutes you spent exercising. This provides an incredibly accurate baseline for tracking your <a href="/resources/tdee-calculator/">Total Daily Energy Expenditure (TDEE)</a>.</p>

    <h2>Top 10 Highest Calorie Burning Exercises</h2>
    <p>If you are short on time and want to maximize your calorie burn, some exercises are vastly superior to others. Here are the top 10 calorie-torching activities for a <strong>160 lb (72 kg) person exercising for 60 minutes</strong>:</p>
    <table>
      <thead><tr><th scope="col">Exercise / Activity</th><th scope="col">Intensity Level</th><th scope="col">Est. Calories Burned (60 mins)</th></tr></thead>
      <tbody>
        <tr><td>1. Running (8 mph / 7.5 min mile)</td><td>Extreme</td><td>~980 calories</td></tr>
        <tr><td>2. Jumping Rope (Fast pace)</td><td>Extreme</td><td>~860 calories</td></tr>
        <tr><td>3. Boxing (Sparring in ring)</td><td>Vigorous</td><td>~840 calories</td></tr>
        <tr><td>4. Swimming (Fast butterfly)</td><td>Vigorous</td><td>~780 calories</td></tr>
        <tr><td>5. Bicycling (>20 mph racing)</td><td>Vigorous</td><td>~760 calories</td></tr>
        <tr><td>6. Rowing Machine (Vigorous)</td><td>High</td><td>~640 calories</td></tr>
        <tr><td>7. HIIT (High-Intensity Intervals)</td><td>High</td><td>~600 calories</td></tr>
        <tr><td>8. Tennis (Singles match)</td><td>Moderate-High</td><td>~580 calories</td></tr>
        <tr><td>9. Basketball (Full court game)</td><td>Moderate-High</td><td>~580 calories</td></tr>
        <tr><td>10. Weightlifting (Vigorous)</td><td>Moderate</td><td>~450 calories</td></tr>
      </tbody>
    </table>

    <h2>Exercise vs. Diet for Weight Loss</h2>
    <p>A common trap people fall into is trying to out-exercise a bad diet. While tracking your exercise with our <strong>calories burned calculator</strong> is fantastic for fitness motivation, the reality is that burning 500 calories through intense exercise takes roughly an hour of grueling work. Eating 500 calories takes about 5 minutes.</p>
    <p>For sustainable weight loss, your primary focus should always be on nutrition. You must establish a baseline <a href="/resources/calorie-deficit-guide/">calorie deficit</a> using our main <a href="/">calorie calculator</a>. Think of exercise as a tool to improve cardiovascular health, build muscle, and provide a slight bonus to your calorie deficit, rather than the primary driver of weight loss.</p>

    <h2>Common Myths About Burning Calories</h2>
    <ul>
      <li><strong>Myth: Sweating more means you are burning more calories.</strong> Fact: Sweat is simply your body's biological air conditioning system. Sweating heavily in a sauna burns zero extra calories. Calorie burn is dictated by heart rate and muscle engagement, not body temperature.</li>
      <li><strong>Myth: Smartwatches are 100% accurate.</strong> Fact: Studies show that most fitness trackers (Apple Watch, Fitbit, Garmin) overestimate calories burned by 20% to 40%. Our calculator uses clinical MET tables, which often provide a more realistic, conservative estimate.</li>
      <li><strong>Myth: Weightlifting burns no calories.</strong> Fact: While the immediate calorie burn of weightlifting is lower than running, lifting weights builds muscle mass. Muscle is metabolically active tissue, meaning it permanently raises your <a href="/resources/what-is-bmr/">BMR (Basal Metabolic Rate)</a>, helping you burn more calories 24/7.</li>
    </ul>

    <h2>More Specific Calculators</h2>
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="card p-4">
        <h3 class="text-lg font-semibold text-ink"><a href="/walking-calorie-calculator/">Walking Calorie Calculator</a></h3>
        <p class="mt-1 text-sm text-body">Get hyper-specific data on your daily steps and walking routes.</p>
      </div>
      <div class="card p-4">
        <h3 class="text-lg font-semibold text-ink"><a href="/cycling-calories-calculator/">Cycling Calories Calculator</a></h3>
        <p class="mt-1 text-sm text-body">Track your energy expenditure for both outdoor biking and indoor stationary cycling.</p>
      </div>
      <div class="card p-4">
        <h3 class="text-lg font-semibold text-ink"><a href="/swimming-calories-calculator/">Swimming Calories Calculator</a></h3>
        <p class="mt-1 text-sm text-body">Find out how many calories you burn doing laps, freestyle, breaststroke, and more.</p>
      </div>
      <div class="card p-4">
        <h3 class="text-lg font-semibold text-ink"><a href="/macro-calculator/">Macro Calculator</a></h3>
        <p class="mt-1 text-sm text-body">Now that you know what you burned, figure out exactly how many proteins, carbs, and fats you should eat to recover.</p>
      </div>
    </div>
    
    <Sources sources={[
      { label: "Compendium of Physical Activities — Standardization of MET values", href: "https://pacompendium.com/" },
      { label: "Stanford Medicine — Accuracy of Heart Rate and Calorie Burn by Fitness Trackers", href: "https://med.stanford.edu/news/all-news/2017/05/fitness-trackers-accurately-measure-heart-rate-but-not-calories-burned.html" },
    ]} />
  </Fragment>"""
content = re.sub(r'<Fragment slot="content">.*?</Fragment>', new_content, content, flags=re.DOTALL)
with open("src/pages/calories-burned-calculator.astro", "w", encoding="utf-8") as f: f.write(content)

