import re
import os

def update_file(filepath, new_content):
    if not os.path.exists(filepath): return
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    parts = content.split('<MedicalNote />')
    if len(parts) < 2:
        return
    
    final_content = parts[0] + "<MedicalNote />\n\n" + new_content + "\n</ContentLayout>\n"
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(final_content)


# --- 1. calorie-deficit-guide.astro ---
def_content = """  <ArticleImage src="/assets/images/articles/calorie-deficit.svg" alt="Illustration showing energy expenditure exceeding energy intake to create a calorie deficit." />
  
  <p>A <strong>calorie deficit</strong> is the absolute biological requirement for weight loss. No matter what diet protocol you follow—Keto, Paleo, Intermittent Fasting, or Vegan—they all function by forcing your body into a state where it expends more energy than it consumes. When this happens, your body is forced to break down stored body fat for fuel.</p>

  <h2>The Science: Thermodynamics of Fat Loss</h2>
  <p>The first law of thermodynamics states that energy cannot be created or destroyed, only transformed. In human biology, the food you eat contains energy (calories). The physical movement of your body and the basal metabolic functions of your organs burn energy.</p>
  <p>If Intake &gt; Output, you store energy (fat). If Intake &lt; Output, you burn energy (fat). A single pound of human body fat stores approximately <strong>3,500 calories</strong>. Therefore, a daily deficit of 500 calories (500 x 7 days) yields exactly 1 pound of fat loss per week.</p>

  <h2>How to Calculate Your Ideal Calorie Deficit</h2>
  <p>Before you can eat in a deficit, you must know your baseline. Follow these exact steps:</p>
  <ol>
    <li><strong>Find your BMR:</strong> Use our <a href="/bmr-calculator/">BMR Calculator</a> to determine how many calories you burn doing absolutely nothing.</li>
    <li><strong>Find your TDEE:</strong> Use our <a href="/tdee-calculator/">TDEE Calculator</a> to multiply your BMR by your daily activity level. This is your maintenance number.</li>
    <li><strong>Subtract 500:</strong> Take your TDEE and subtract 300 to 500 calories. This is your new daily calorie target for sustainable weight loss.</li>
  </ol>

  <h2>Calorie Deficit Tiers & Expectations</h2>
  <div class="overflow-x-auto my-6">
    <table class="w-full text-left border-collapse border border-hairline shadow-sm rounded-lg overflow-hidden">
      <thead>
        <tr class="bg-ink text-white">
          <th class="p-3 border-b border-hairline">Deficit Tier</th>
          <th class="p-3 border-b border-hairline">Daily Calorie Reduction</th>
          <th class="p-3 border-b border-hairline">Expected Weekly Fat Loss</th>
          <th class="p-3 border-b border-hairline">Sustainability</th>
        </tr>
      </thead>
      <tbody class="text-sm">
        <tr><td class="p-3 border-b font-semibold">Mild</td><td class="p-3 border-b">- 250 calories</td><td class="p-3 border-b">0.5 lbs</td><td class="p-3 border-b">Extremely high. Minimal hunger.</td></tr>
        <tr class="bg-gray-50"><td class="p-3 border-b font-semibold">Moderate</td><td class="p-3 border-b">- 500 calories</td><td class="p-3 border-b">1.0 lbs</td><td class="p-3 border-b">High. The recommended gold standard.</td></tr>
        <tr><td class="p-3 border-b font-semibold">Aggressive</td><td class="p-3 border-b">- 750 calories</td><td class="p-3 border-b">1.5 lbs</td><td class="p-3 border-b">Moderate. Requires high protein to prevent muscle loss.</td></tr>
        <tr class="bg-gray-50"><td class="p-3 font-semibold">Extreme</td><td class="p-3">- 1,000+ calories</td><td class="p-3">2.0+ lbs</td><td class="p-3">Low. High risk of metabolic adaptation and binge eating.</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Actionable Tips: How to Survive a Deficit</h2>
  <ul>
    <li><strong>Volume Eating:</strong> Focus on low-calorie, high-volume foods like leafy greens, watermelon, and broccoli. They physically stretch your stomach receptors, sending fullness signals to your brain without costing you calories.</li>
    <li><strong>Max Out Protein:</strong> Protein is the most satiating macronutrient. It takes longer to digest and prevents your body from burning muscle mass during the deficit. Use our <a href="/protein-calculator/">protein calculator</a> to find your target.</li>
    <li><strong>Don't Drink Calories:</strong> Liquid calories (sodas, juices, heavy coffees) do not trigger satiety. Swap them for water, black coffee, or diet sodas.</li>
  </ul>

  <h2>Common Calorie Deficit Myths Debunked</h2>
  <ul>
    <li><strong>Myth: You must eat low carb to lose weight.</strong> Fact: Carbs do not make you fat; overeating calories does. You can eat nothing but carbohydrates and still lose weight if you are in a calorie deficit (though you would lose muscle).</li>
    <li><strong>Myth: Starvation mode will make you gain weight.</strong> Fact: While extreme dieting can cause a slight metabolic slowdown (adaptive thermogenesis), your body cannot spontaneously create fat out of nothing. You will still lose weight in a severe deficit, but you will feel terrible.</li>
    <li><strong>Myth: Exercise is the best way to create a deficit.</strong> Fact: It is much easier to skip a 400-calorie donut than it is to run for 45 minutes to burn it off. Use our <a href="/calories-burned-calculator/">calories burned calculator</a> to see how much work exercise really takes! Diet is the primary driver of weight loss.</li>
  </ul>

  <h2>Next Steps</h2>
  <p>To visualize your exact weight loss timeline based on your chosen deficit tier, use our advanced <a href="/weight-loss-calculator/">weight loss calculator</a>.</p>
"""
update_file("src/pages/guides/calorie-deficit-guide.astro", def_content)


# --- 2. calorie-surplus-guide.astro ---
surp_content = """  <ArticleImage src="/assets/images/articles/muscle-gain.svg" alt="Illustration of a fitness tracking chart showing muscle growth and a calorie surplus." />
  
  <p>While most of the fitness world focuses on losing weight, building significant muscle mass requires the exact opposite approach: a <strong>calorie surplus</strong>. Also known as "bulking," a calorie surplus occurs when you intentionally consume more energy than your body burns, providing the raw materials necessary to synthesize new muscle tissue.</p>

  <h2>The Science of Muscle Hypertrophy</h2>
  <p>Muscle tissue is metabolically expensive. Your body does not want to build it unless it is given a compelling reason to do so (heavy resistance training) and abundant resources (excess calories and protein). When you lift heavy weights, you create micro-tears in the muscle fibers. When you eat in a surplus, your body uses the extra energy and amino acids to repair those fibers thicker and stronger than before.</p>

  <h2>How to Calculate Your Ideal Calorie Surplus</h2>
  <p>The goal of a proper "lean bulk" is to maximize muscle growth while minimizing fat gain. You cannot force your body to build muscle faster by eating massive amounts of junk food; excess calories beyond your genetic rate of muscle growth will simply be stored as fat.</p>
  <ol>
    <li><strong>Find your Baseline:</strong> Use our <a href="/tdee-calculator/">TDEE Calculator</a> to find your maintenance calories.</li>
    <li><strong>Add a Moderate Surplus:</strong> Add 200 to 300 calories to your TDEE. This provides enough energy for maximum muscle synthesis without excessive fat spillover.</li>
    <li><strong>Prioritize Protein:</strong> Run your numbers through our <a href="/macro-calculator/">macro calculator</a> to ensure your surplus is heavily weighted towards protein and complex carbohydrates.</li>
  </ol>

  <h2>Surplus Tiers: Lean Bulk vs. Dirty Bulk</h2>
  <div class="overflow-x-auto my-6">
    <table class="w-full text-left border-collapse border border-hairline shadow-sm rounded-lg overflow-hidden">
      <thead>
        <tr class="bg-ink text-white">
          <th class="p-3 border-b border-hairline">Bulking Strategy</th>
          <th class="p-3 border-b border-hairline">Daily Surplus Amount</th>
          <th class="p-3 border-b border-hairline">Expected Monthly Gain</th>
          <th class="p-3 border-b border-hairline">Result Profile</th>
        </tr>
      </thead>
      <tbody class="text-sm">
        <tr><td class="p-3 border-b font-semibold">Lean Bulk (Recommended)</td><td class="p-3 border-b">+ 200 to 300 calories</td><td class="p-3 border-b">1.5 - 2.5 lbs</td><td class="p-3 border-b">Mostly muscle, very little fat accumulation.</td></tr>
        <tr class="bg-gray-50"><td class="p-3 border-b font-semibold">Standard Bulk</td><td class="p-3 border-b">+ 500 calories</td><td class="p-3 border-b">3.0 - 4.0 lbs</td><td class="p-3 border-b">Good muscle growth, moderate fat gain requiring a future cut.</td></tr>
        <tr><td class="p-3 font-semibold">Dirty Bulk</td><td class="p-3">+ 1,000+ calories</td><td class="p-3">6.0+ lbs</td><td class="p-3">Maximized muscle growth, but massive fat gain. Hard to reverse.</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Actionable Tips for Hardgainers</h2>
  <p>If you have a naturally fast metabolism or a small appetite (often called an ectomorph or "hardgainer"), eating in a surplus can feel physically uncomfortable. Try these strategies:</p>
  <ul>
    <li><strong>Drink Your Calories:</strong> Liquid calories digest rapidly and don't make you feel bloated. Blending protein powder, whole milk, peanut butter, and bananas into a shake can easily add 800+ nutritious calories to your day.</li>
    <li><strong>Eat Calorie-Dense Foods:</strong> Swap low-calorie volume foods for dense options. Use olive oil on salads, snack on almonds and walnuts, and choose chicken thighs over chicken breasts.</li>
    <li><strong>Track Everything:</strong> Hardgainers routinely overestimate how much they eat. Use our <a href="/weight-gain-calculator/">weight gain calculator</a> and meticulously track your daily intake to ensure you are actually hitting your surplus.</li>
  </ul>

  <h2>Common Calorie Surplus Myths Debunked</h2>
  <ul>
    <li><strong>Myth: You can turn fat into muscle.</strong> Fact: Fat and muscle are two completely different biological tissues. You cannot convert one into the other. You must lose the fat (via a <a href="/guides/calorie-deficit-guide/">calorie deficit</a>) and build the muscle.</li>
    <li><strong>Myth: Eating massive amounts of protein builds more muscle.</strong> Fact: Muscle protein synthesis maxes out around 1.6 - 2.2 grams per kilogram of body weight. Eating 400g of protein won't build more muscle than 200g; the excess is simply oxidized for energy. Check your limit with the <a href="/protein-calculator/">protein calculator</a>.</li>
  </ul>
"""
update_file("src/pages/guides/calorie-surplus-guide.astro", surp_content)


# --- 3. weight-loss-guide.astro ---
wl_content = """  <ArticleImage src="/assets/images/articles/weight-loss-guide.svg" alt="Comprehensive overview of healthy, sustainable weight loss strategies and timelines." />
  
  <p>Losing weight is mathematically simple, but psychologically and biologically complex. Our ultimate <strong>weight loss guide</strong> is designed to cut through the noise of fad diets, detox teas, and false promises, giving you the absolute scientific truth on how to shed body fat and keep it off permanently.</p>

  <h2>The Foundation: Understanding Energy Balance</h2>
  <p>Every single successful diet in human history works through one mechanism: creating a negative energy balance. You must force your body to use its stored energy (body fat) by giving it less food energy (calories) than it burns.</p>
  <p>Before you do anything else, you must establish your baseline numbers. Use our <a href="/tdee-calculator/">TDEE Calculator</a> to find out how many calories you burn in a day. To lose weight, you must consume less than that number—this is detailed in our <a href="/guides/calorie-deficit-guide/">calorie deficit guide</a>.</p>

  <h2>The 3 Pillars of Sustainable Weight Loss</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="card p-5 border border-hairline shadow-sm">
      <h3 class="text-lg font-bold text-ink">1. Nutrition</h3>
      <p class="text-sm text-body">Diet is 80% of the battle. You cannot out-train a bad diet. Use our <a href="/macro-calculator/">macro calculator</a> to ensure your deficit is high in protein and fiber to control hunger.</p>
    </div>
    <div class="card p-5 border border-hairline shadow-sm">
      <h3 class="text-lg font-bold text-ink">2. Resistance Training</h3>
      <p class="text-sm text-body">Lifting weights prevents your body from burning muscle tissue during a diet. Maintaining muscle keeps your <a href="/bmr-calculator/">BMR</a> high, making fat loss easier.</p>
    </div>
    <div class="card p-5 border border-hairline shadow-sm">
      <h3 class="text-lg font-bold text-ink">3. Daily Activity (NEAT)</h3>
      <p class="text-sm text-body">Structured gym sessions burn fewer calories than you think. Hitting 10,000 steps a day ensures a massive daily calorie burn. Track it with our <a href="/walking-calorie-calculator/">walking calculator</a>.</p>
    </div>
  </div>

  <h2>Weight Loss Timeline & Realistic Expectations</h2>
  <p>A common mistake is aggressively cutting calories to lose 5 lbs a week. This always results in metabolic adaptation, muscle loss, and an eventual binge-eating rebound. Healthy, permanent weight loss is slow.</p>
  <table class="w-full text-left my-6 border-collapse border border-hairline">
    <thead>
      <tr class="bg-gray-100 text-ink">
        <th class="p-3 border-b font-semibold">Goal</th>
        <th class="p-3 border-b font-semibold">Healthy Rate of Loss</th>
        <th class="p-3 border-b font-semibold">Required Daily Deficit</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr><td class="p-3 border-b">Lose 10 lbs</td><td class="p-3 border-b">10 weeks (1 lb/week)</td><td class="p-3 border-b">- 500 calories/day</td></tr>
      <tr class="bg-brand/5"><td class="p-3 border-b">Lose 25 lbs</td><td class="p-3 border-b">25 weeks (1 lb/week)</td><td class="p-3 border-b">- 500 calories/day</td></tr>
      <tr><td class="p-3">Lose 50 lbs</td><td class="p-3">25 weeks (2 lbs/week)</td><td class="p-3">- 1,000 calories/day (Heavy individuals only)</td></tr>
    </tbody>
  </table>
  <p>To generate a customized chart based on your exact body weight, use our interactive <a href="/weight-loss-calculator/">weight loss calculator</a>.</p>

  <h2>Actionable Tips to Break a Weight Loss Plateau</h2>
  <p>After a few months of successful dieting, the scale will inevitably stop moving. This is not a failure; it is biological adaptation. When a plateau occurs, do not panic. Try these steps:</p>
  <ol>
    <li><strong>Recalculate your TDEE:</strong> You weigh less now, which means your body requires fewer calories to exist. Run your new, lighter weight through the <a href="/tdee-calculator/">TDEE calculator</a> to find your new deficit target.</li>
    <li><strong>Take a Diet Break:</strong> If you have been dieting for 12+ weeks, take a 2-week break. Eat exactly at your <a href="/guides/maintenance-calories/">maintenance calories</a> to reset your hormones (leptin and ghrelin) and reduce psychological fatigue.</li>
    <li><strong>Audit Your Tracking:</strong> Are you weighing your food with a food scale? Are you tracking cooking oils, sauces, and liquid calories? Most plateaus are simply the result of hidden calories sneaking back into the diet.</li>
  </ol>

  <h2>Common Weight Loss Myths</h2>
  <ul>
    <li><strong>Myth: Eating late at night makes you fat.</strong> Fact: Your digestive system does not have a clock. Calories consumed at 10 PM are processed exactly the same as calories consumed at 10 AM. Total daily intake is all that matters.</li>
    <li><strong>Myth: Cardio is required for weight loss.</strong> Fact: While cardio is excellent for heart health, it is entirely optional for weight loss. A calorie deficit through diet alone is 100% effective. (Though cardio does increase your <a href="/calories-burned-calculator/">total burn</a>!).</li>
  </ul>
"""
update_file("src/pages/guides/weight-loss-guide.astro", wl_content)


# --- 4. weight-gain-guide.astro ---
wg_content = """  <ArticleImage src="/assets/images/articles/muscle-growth.svg" alt="Illustration detailing the process of healthy weight gain and muscle hypertrophy." />
  
  <p>While the media focuses heavily on weight loss, a significant portion of the population struggles with the exact opposite problem. Whether you are an athlete trying to bulk up, or someone recovering from an illness attempting to restore a healthy BMI, this <strong>weight gain guide</strong> covers the safe, scientific way to add mass to your frame.</p>

  <h2>The Biology of Gaining Weight</h2>
  <p>Just as weight loss requires a deficit, weight gain requires a <a href="/guides/calorie-surplus-guide/">calorie surplus</a>. You must consume more energy than your body expends. If you are not gaining weight, you are simply not eating enough—regardless of how much you <em>feel</em> like you are eating.</p>
  <p>However, the goal should not be to gain pure fat. The goal should be to gain functional muscle mass with a minimal amount of necessary fat. To do this, your surplus must be paired with intense resistance training.</p>

  <h2>How to Calculate Your Weight Gain Targets</h2>
  <ol>
    <li><strong>Calculate Maintenance:</strong> Use our <a href="/tdee-calculator/">TDEE Calculator</a> to find your baseline daily burn.</li>
    <li><strong>Set Your Surplus:</strong> Add exactly 300 to 500 calories to your TDEE. This is the optimal range for maximizing muscle growth without gaining excessive fat.</li>
    <li><strong>Track Your Trajectory:</strong> Use our <a href="/weight-gain-calculator/">weight gain calculator</a> to map out exactly how long it will take to reach your goal weight based on this surplus.</li>
  </ol>

  <h2>The "Hardgainer" Meal Plan Strategy</h2>
  <p>For individuals with blazing fast metabolisms (high <a href="/bmr-calculator/">BMR</a>) or small appetites, forcing down an extra 500 calories of chicken and broccoli is impossible. You must become strategic with calorie density.</p>
  <div class="overflow-x-auto my-6">
    <table class="w-full text-left border-collapse border border-hairline shadow-sm rounded-lg overflow-hidden">
      <thead>
        <tr class="bg-ink text-white">
          <th class="p-3 border-b">Low-Calorie Food (Avoid for Bulking)</th>
          <th class="p-3 border-b">High-Calorie Swap (Eat for Bulking)</th>
          <th class="p-3 border-b">Caloric Difference</th>
        </tr>
      </thead>
      <tbody class="text-sm">
        <tr><td class="p-3 border-b font-semibold">Chicken Breast (Skinless)</td><td class="p-3 border-b">Chicken Thighs (with skin)</td><td class="p-3 border-b">+ ~100 cals per serving</td></tr>
        <tr class="bg-gray-50"><td class="p-3 border-b font-semibold">White Potato</td><td class="p-3 border-b">Avocado or Nuts</td><td class="p-3 border-b">Massive healthy fat increase</td></tr>
        <tr><td class="p-3 border-b font-semibold">Skim Milk</td><td class="p-3 border-b">Whole Milk</td><td class="p-3 border-b">+ ~60 cals per cup</td></tr>
        <tr class="bg-gray-50"><td class="p-3 font-semibold">Raw Veggies</td><td class="p-3">Veggies sautéed in Olive Oil</td><td class="p-3">+ 120 cals per tablespoon of oil</td></tr>
      </tbody>
    </table>
  </div>

  <h2>Actionable Tips for Fast, Healthy Weight Gain</h2>
  <ul>
    <li><strong>Drink Your Calories:</strong> The brain registers liquid calories differently than solid food. A shake containing whole milk, whey protein, peanut butter, oats, and a banana can easily exceed 1,000 calories and can be consumed in 5 minutes without feeling bloated.</li>
    <li><strong>Eat Every 3 Hours:</strong> Do not try to eat all your calories in two massive meals. Break your TDEE target into 4 or 5 moderately sized meals spread throughout the day.</li>
    <li><strong>Hit Your Macros:</strong> Ensure you are eating at least 1 gram of protein per pound of body weight to support muscle growth. Run your stats through our <a href="/macro-calculator/">macro calculator</a> to get the perfect ratio.</li>
  </ul>

  <h2>Common Weight Gain Myths Debunked</h2>
  <ul>
    <li><strong>Myth: Fast food is the best way to gain weight.</strong> Fact: While a "dirty bulk" (eating pizza and burgers) will make you gain weight quickly, it will predominantly be visceral fat, which carries massive cardiovascular risks. Stick to nutrient-dense whole foods.</li>
    <li><strong>Myth: Supplements are required to get big.</strong> Fact: Mass gainer shakes are heavily processed and filled with cheap sugar. A homemade shake with oats and peanut butter is cheaper and far healthier. You only need supplements if you fail to hit your <a href="/protein-calculator/">protein targets</a> through whole food.</li>
  </ul>
"""
update_file("src/pages/guides/weight-gain-guide.astro", wg_content)


# --- 5. maintenance-calories.astro ---
maint_content = """  <ArticleImage src="/assets/images/articles/maintenance-scale.svg" alt="Illustration showing perfectly balanced scales representing maintenance calories." />
  
  <p>Understanding your <strong>maintenance calories</strong> is the absolute pinnacle of nutritional control. Whether you have just finished a grueling 6-month diet and want to lock in your weight loss, or you are an athlete looking to stay in a specific weight class, eating at maintenance is the ultimate state of biological equilibrium.</p>

  <h2>What Are Maintenance Calories?</h2>
  <p>Maintenance calories represent the exact mathematical point where Energy Intake perfectly equals Energy Expenditure. In this state, your body neither stores new fat nor burns existing fat. Your body weight remains perfectly stable.</p>
  <p>Scientifically, your maintenance calories are identical to your Total Daily Energy Expenditure (TDEE). If you have never calculated this number, you must immediately use our <a href="/maintenance-calories-calculator/">maintenance calories calculator</a> or <a href="/tdee-calculator/">TDEE calculator</a> to establish your baseline.</p>

  <h2>The 4 Phases of Maintenance</h2>
  <p>Maintenance isn't just for people who are happy with their current bodies. It is a strategic tool used in multiple phases of fitness:</p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
    <div class="card p-5 border-l-4 border-l-blue-500 shadow-sm">
      <h3 class="text-lg font-bold text-ink">1. The Diet Break</h3>
      <p class="text-sm text-body">If you are in a deep <a href="/guides/calorie-deficit-guide/">calorie deficit</a> and hit a plateau, taking 2 weeks to eat at maintenance will reset your leptin hormones and metabolic rate.</p>
    </div>
    <div class="card p-5 border-l-4 border-l-green-500 shadow-sm">
      <h3 class="text-lg font-bold text-ink">2. The Rebound Prevention</h3>
      <p class="text-sm text-body">After hitting a weight loss goal, immediately returning to your old eating habits guarantees weight regain. You must slowly transition to your new, lower maintenance calories.</p>
    </div>
    <div class="card p-5 border-l-4 border-l-yellow-500 shadow-sm">
      <h3 class="text-lg font-bold text-ink">3. Body Recomposition</h3>
      <p class="text-sm text-body">Eating exactly at maintenance while lifting heavy weights allows beginners to simultaneously build muscle and burn fat—the holy grail of fitness.</p>
    </div>
    <div class="card p-5 border-l-4 border-l-red-500 shadow-sm">
      <h3 class="text-lg font-bold text-ink">4. Athletic Priming</h3>
      <p class="text-sm text-body">Athletes leading up to a competition eat at maintenance to ensure glycogen stores are completely full without adding heavy body fat.</p>
    </div>
  </div>

  <h2>How Your Maintenance Changes Over Time</h2>
  <p>A crucial fact to understand is that your maintenance calories are <strong>dynamic</strong>, not static. The number changes constantly based on your lifestyle and body composition.</p>
  <table class="w-full text-left my-6 border-collapse border border-hairline">
    <thead>
      <tr class="bg-gray-100 text-ink">
        <th class="p-3 border-b font-semibold">Event</th>
        <th class="p-3 border-b font-semibold">Impact on Maintenance Calories</th>
      </tr>
    </thead>
    <tbody class="text-sm">
      <tr><td class="p-3 border-b">Losing 20 lbs of fat</td><td class="p-3 border-b font-bold text-red-600">Decreases Maintenance (You are lighter to carry)</td></tr>
      <tr class="bg-brand/5"><td class="p-3 border-b">Gaining 10 lbs of muscle</td><td class="p-3 border-b font-bold text-green-600">Increases Maintenance (Muscle burns calories 24/7)</td></tr>
      <tr><td class="p-3 border-b">Switching from retail to a desk job</td><td class="p-3 border-b font-bold text-red-600">Massive Decrease in Maintenance (Lower NEAT)</td></tr>
      <tr class="bg-brand/5"><td class="p-3">Aging 10 years</td><td class="p-3 font-bold text-red-600">Slight Decrease (Natural lowering of <a href="/bmr-calculator/">BMR</a>)</td></tr>
    </tbody>
  </table>

  <h2>Actionable Tips for Staying at Maintenance</h2>
  <ul>
    <li><strong>The 80/20 Rule:</strong> When eating at maintenance, you have more caloric freedom than when dieting. Spend 80% of your calories on highly nutritious whole foods, and enjoy 20% on treats. This prevents binge eating.</li>
    <li><strong>Track Protein Rigidly:</strong> Even when at maintenance, you should still hit your daily targets. Use our <a href="/protein-calculator/">protein calculator</a> to ensure you don't lose the muscle you worked so hard to build.</li>
    <li><strong>Monitor Weekly Averages, Not Daily Weigh-ins:</strong> Your weight will fluctuate daily based on water retention and sodium. Look at the 7-day average. If it remains flat, you are perfectly at maintenance.</li>
  </ul>

  <h2>Next Steps</h2>
  <p>If you're ready to transition out of maintenance and start a new fitness phase, you have two choices. To lean down for summer, calculate your new <a href="/weight-loss-calculator/">weight loss timeline</a>. To bulk up and add muscle mass over the winter, check out our <a href="/weight-gain-calculator/">weight gain targets</a>.</p>
"""
update_file("src/pages/guides/maintenance-calories.astro", maint_content)

