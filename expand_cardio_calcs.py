import re
import os

def update_calc(filepath, new_content):
    if not os.path.exists(filepath): return
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We replace everything inside <Fragment slot="content"> ... </Fragment>
    content = re.sub(r'<Fragment slot="content">.*?</Fragment>', new_content, content, flags=re.DOTALL)
    
    # ensure Sources is imported
    if "import Sources" not in content and "<Sources" in new_content:
        target_str = 'import ArticleImage from "../components/ui/ArticleImage.astro";'
        replacement = target_str + '\nimport Sources from "../components/ui/Sources.astro";'
        content = content.replace(target_str, replacement)
        
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)


# --- 1. swimming-calories-calculator.astro ---
swim_content = """<Fragment slot="content">
    <ArticleImage src="/assets/images/articles/swimming-pool.svg" alt="Illustration of a swimmer doing freestyle laps to burn calories." />

    <h2>How to Use the Swimming Calorie Calculator</h2>
    <p>Using our <strong>swimming calorie calculator</strong> is the most accurate way to determine your aquatic energy expenditure. Select your specific swimming stroke (e.g., Freestyle, Breaststroke, or Butterfly), input your body weight, and enter the duration of your session in minutes. The calculator uses scientifically validated MET (Metabolic Equivalent of Task) values to provide an instant, highly accurate estimate of the calories burned during your swim.</p>

    <h2>The Science: Why Swimming Burns So Many Calories</h2>
    <p>Swimming is a unique form of cardiovascular exercise because it provides constant, full-body resistance. Water is nearly 800 times denser than air, meaning every kick, pull, and push is a mini-resistance workout. This dual action—intense aerobic demand combined with muscular resistance—forces your heart and lungs to work significantly harder than they would on land.</p>
    <p>Furthermore, because you are submerged in water that is typically cooler than your body temperature, your body burns additional calories (through thermogenesis) simply to keep your core temperature stable. This makes swimming an incredible tool for increasing your <a href="/resources/tdee-calculator/">Total Daily Energy Expenditure (TDEE)</a>.</p>

    <h2>Swimming Strokes Calorie Burn Comparison</h2>
    <p>Not all strokes are created equal when it comes to fat loss. The table below illustrates the estimated calories burned during a <strong>45-minute swim</strong> for a 160 lb (72 kg) individual across different strokes:</p>
    <div class="overflow-x-auto my-6">
      <table class="w-full text-left border-collapse border border-hairline shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr class="bg-ink text-white">
            <th class="p-3 border-b border-hairline">Swimming Stroke</th>
            <th class="p-3 border-b border-hairline">Intensity / Technique</th>
            <th class="p-3 border-b border-hairline">Est. Calories Burned (45 mins)</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr><td class="p-3 border-b font-semibold">Treading Water</td><td class="p-3 border-b">Moderate Effort</td><td class="p-3 border-b">~ 210 calories</td></tr>
          <tr class="bg-gray-50"><td class="p-3 border-b font-semibold">Backstroke</td><td class="p-3 border-b">Moderate / Sustained</td><td class="p-3 border-b">~ 255 calories</td></tr>
          <tr><td class="p-3 border-b font-semibold">Freestyle (Crawl)</td><td class="p-3 border-b">Vigorous / Fast</td><td class="p-3 border-b">~ 330 calories</td></tr>
          <tr class="bg-gray-50"><td class="p-3 font-semibold">Breaststroke</td><td class="p-3">Vigorous</td><td class="p-3">~ 345 calories</td></tr>
          <tr><td class="p-3 border-t border-hairline font-semibold">Butterfly</td><td class="p-3 border-t border-hairline">Extreme</td><td class="p-3 border-t border-hairline">~ 480 calories</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Swimming vs. Running for Weight Loss</h2>
    <p>A frequent debate is whether swimming or running is superior for weight loss. Per minute of vigorous effort, both burn a very similar amount of calories. However, swimming has one massive advantage: <strong>zero impact</strong>.</p>
    <p>Running forces your joints to absorb 3-4 times your body weight with every step. For heavier individuals looking to establish a <a href="/guides/calorie-deficit-guide/">calorie deficit</a>, this can quickly lead to knee or hip injuries. Swimming completely removes gravity from the equation, making it the safest cardio option for overweight individuals, seniors, or those recovering from injury.</p>

    <h2>Common Swimming Myths Debunked</h2>
    <ul>
      <li><strong>Myth: Swimming makes you gain fat because water makes you hungry.</strong> Fact: Intense swimming <em>can</em> spike your appetite due to the drop in body temperature, which leads some people to overeat post-workout. As long as you track your post-swim meals with our <a href="/macro-calculator/">macro calculator</a>, you will strictly lose fat.</li>
      <li><strong>Myth: You can't build muscle by swimming.</strong> Fact: The dense resistance of water causes significant hypertrophy in the lats, shoulders, and core, especially during sprints. It won't replace heavy weightlifting, but it builds substantial lean mass compared to walking or cycling.</li>
    </ul>

    <h2>Next Steps</h2>
    <p>To ensure your swimming routine translates into actual weight loss, you must pair it with a sensible diet. Use our <a href="/weight-loss-calculator/">weight loss calculator</a> to determine exactly how many calories you should be eating daily to reach your goals.</p>
    
    <Sources sources={[
      { label: "American College of Sports Medicine — Energy Expenditure of Swimming", href: "https://www.acsm.org/" },
      { label: "Compendium of Physical Activities — Swimming MET Values", href: "https://pacompendium.com/" }
    ]} />
  </Fragment>"""
update_calc("src/pages/swimming-calories-calculator.astro", swim_content)


# --- 2. cycling-calories-calculator.astro ---
cycle_content = """<Fragment slot="content">
    <ArticleImage src="/assets/images/articles/cycling-route.svg" alt="Illustration of a cyclist riding outdoors, tracking speed and calorie burn." />

    <h2>How to Use the Cycling Calories Calculator</h2>
    <p>Whether you are tackling mountain trails, crushing a stationary spin class, or commuting to work, our <strong>cycling calories calculator</strong> provides precision energy tracking. Simply choose your cycling environment/speed from the dropdown list, enter your body weight, and input your ride duration. The tool leverages clinical MET (Metabolic Equivalent) formulas to instantly calculate your total energy expenditure.</p>

    <h2>The Science of Cycling and Fat Oxidation</h2>
    <p>Cycling is a powerhouse for cardiovascular health and fat loss. Because your body weight is supported by the saddle, cycling removes the blunt-force trauma associated with running, allowing you to sustain a high heart rate for significantly longer periods.</p>
    <p>From a metabolic perspective, cycling heavily engages the massive muscles of your lower body: the quadriceps, hamstrings, and glutes. Because these muscles require massive amounts of oxygen to fire continuously, long-distance cycling heavily taps into the aerobic energy system, forcing your body to oxidize stored body fat for fuel while preserving muscle glycogen.</p>

    <h2>Cycling Calorie Burn Comparison Chart</h2>
    <p>Speed and resistance are the two primary drivers of calorie burn on a bike. The table below breaks down the estimated calorie expenditure for a <strong>60-minute ride</strong> for a 170 lb (77 kg) individual:</p>
    <div class="overflow-x-auto my-6">
      <table class="w-full text-left border-collapse border border-hairline shadow-sm rounded-lg overflow-hidden">
        <thead>
          <tr class="bg-ink text-white">
            <th class="p-3 border-b border-hairline">Cycling Type & Pace</th>
            <th class="p-3 border-b border-hairline">Intensity Level</th>
            <th class="p-3 border-b border-hairline">Est. Calories Burned (60 mins)</th>
          </tr>
        </thead>
        <tbody class="text-sm">
          <tr><td class="p-3 border-b font-semibold">Leisurely ( < 10 mph )</td><td class="p-3 border-b">Light</td><td class="p-3 border-b">~ 310 calories</td></tr>
          <tr class="bg-gray-50"><td class="p-3 border-b font-semibold">Commuting ( 12 - 14 mph )</td><td class="p-3 border-b">Moderate</td><td class="p-3 border-b">~ 620 calories</td></tr>
          <tr><td class="p-3 border-b font-semibold">Stationary Spin Class (Vigorous)</td><td class="p-3 border-b">High</td><td class="p-3 border-b">~ 680 calories</td></tr>
          <tr class="bg-gray-50"><td class="p-3 border-b font-semibold">Mountain Biking (Steep Terrain)</td><td class="p-3 border-b">Vigorous</td><td class="p-3 border-b">~ 720 calories</td></tr>
          <tr><td class="p-3 font-semibold">Racing ( > 20 mph )</td><td class="p-3">Extreme</td><td class="p-3">~ 1,150+ calories</td></tr>
        </tbody>
      </table>
    </div>

    <h2>Actionable Tips: How to Burn More Calories on a Bike</h2>
    <ul>
      <li><strong>Incorporate HIIT:</strong> On a stationary bike, try alternating between 30 seconds of maximum resistance sprinting and 60 seconds of slow recovery. This spikes your heart rate and triggers the EPOC "afterburn" effect.</li>
      <li><strong>Climb Hills:</strong> Outdoor cyclists should actively seek out hilly routes. Forcing your legs to push against gravity drastically increases muscular recruitment and calorie demand.</li>
      <li><strong>Ride Longer in Zone 2:</strong> If you want to burn pure body fat, keep your heart rate in Zone 2 (where you can easily hold a conversation) for 60 to 90 minutes. Use our <a href="/target-heart-rate-calculator/">target heart rate calculator</a> to find your specific zones.</li>
    </ul>

    <h2>Common Cycling Myths Debunked</h2>
    <ul>
      <li><strong>Myth: Cycling gives you bulky legs.</strong> Fact: While cycling builds incredible muscular endurance and tone in the quads, it does not cause massive hypertrophy (bulk). Only heavy resistance training paired with a <a href="/guides/calorie-surplus-guide/">calorie surplus</a> can build bulky legs.</li>
      <li><strong>Myth: E-bikes don't burn calories.</strong> Fact: Studies show that pedal-assist E-bike riders still burn up to 70% of the calories of regular cyclists. Because E-bike riders tend to ride longer distances and more frequently, their total weekly calorie burn often exceeds that of traditional cyclists.</li>
    </ul>

    <h2>Next Steps</h2>
    <p>To guarantee that your cycling efforts result in visible weight loss, you must ensure your diet supports your training. Use our <a href="/maintenance-calories-calculator/">maintenance calories calculator</a> to find your baseline, and then establish a proper deficit.</p>

    <Sources sources={[
      { label: "Harvard Health — Calories burned in 30 minutes of leisure and routine activities", href: "https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-for-people-of-three-different-weights" }
    ]} />
  </Fragment>"""
update_calc("src/pages/cycling-calories-calculator.astro", cycle_content)

